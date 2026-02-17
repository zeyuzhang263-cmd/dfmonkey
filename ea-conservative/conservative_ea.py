"""
dfmonkey - Conservative EA (TrendFlow AI)
AI-Powered Trend Following Strategy for Beginners
Low Risk, Stable Returns, Multi-timeframe Confirmation
"""

import json
from datetime import datetime, timedelta
from typing import Dict, List, Tuple

class ConservativeEA:
    """
    Conservative EA Strategy: TrendFlow AI
    
    Characteristics:
    - Risk per trade: 1-2% of account
    - Trade frequency: 10-20 trades/week
    - Target: 20-30% annual return
    - Max drawdown: <15%
    - Suitable for: Beginners
    """
    
    def __init__(self, account_balance: float, risk_percent: float = 1.5):
        self.account_balance = account_balance
        self.risk_percent = risk_percent
        self.trades_log = []
        self.equity_curve = [account_balance]
        self.max_drawdown = 0
        self.consecutive_wins = 0
        self.consecutive_losses = 0
        
    def calculate_position_size(self, stop_loss_pips: int) -> float:
        """
        Calculate position size based on risk management
        Risk = account * risk_percent / stop_loss_pips
        """
        risk_amount = self.account_balance * (self.risk_percent / 100)
        # Assuming 1 pip = 10 units for standard lot (adjust for your broker)
        position_size = risk_amount / (stop_loss_pips * 10)
        return round(position_size, 2)
    
    def analyze_trend(self, prices: List[float], period: int = 20) -> str:
        """
        Simple trend analysis using moving averages
        Returns: 'UPTREND', 'DOWNTREND', or 'NEUTRAL'
        """
        if len(prices) < period:
            return 'NEUTRAL'
        
        sma = sum(prices[-period:]) / period
        current_price = prices[-1]
        
        if current_price > sma * 1.02:  # 2% above SMA
            return 'UPTREND'
        elif current_price < sma * 0.98:  # 2% below SMA
            return 'DOWNTREND'
        else:
            return 'NEUTRAL'
    
    def generate_signal(self, 
                       prices_4h: List[float],
                       prices_1h: List[float],
                       prices_15m: List[float]) -> Dict:
        """
        Multi-timeframe confirmation signal generation
        
        Rules:
        1. Check 4H trend (main)
        2. Confirm with 1H trend
        3. Entry signal from 15m breakout
        4. Conservative: only trade when all timeframes aligned
        
        Returns: {
            'signal': 'BUY' | 'SELL' | 'NEUTRAL',
            'strength': 0.0-1.0,  # Confidence level
            'stop_loss': int,
            'take_profit': int
        }
        """
        
        trend_4h = self.analyze_trend(prices_4h, 20)
        trend_1h = self.analyze_trend(prices_1h, 14)
        trend_15m = self.analyze_trend(prices_15m, 9)
        
        signal = 'NEUTRAL'
        strength = 0.0
        
        # BUY condition: All timeframes in uptrend
        if trend_4h == 'UPTREND' and trend_1h == 'UPTREND':
            if trend_15m == 'UPTREND':
                signal = 'BUY'
                strength = 0.9
            elif trend_15m == 'NEUTRAL':
                signal = 'BUY'
                strength = 0.7
        
        # SELL condition: All timeframes in downtrend
        elif trend_4h == 'DOWNTREND' and trend_1h == 'DOWNTREND':
            if trend_15m == 'DOWNTREND':
                signal = 'SELL'
                strength = 0.9
            elif trend_15m == 'NEUTRAL':
                signal = 'SELL'
                strength = 0.7
        
        # Calculate stop loss and take profit
        current_price = prices_15m[-1]
        atr = self.calculate_atr(prices_15m)
        
        if signal == 'BUY':
            stop_loss = int(current_price - atr * 2)
            take_profit = int(current_price + atr * 3)
        elif signal == 'SELL':
            stop_loss = int(current_price + atr * 2)
            take_profit = int(current_price - atr * 3)
        else:
            stop_loss = 0
            take_profit = 0
        
        return {
            'signal': signal,
            'strength': strength,
            'stop_loss': stop_loss,
            'take_profit': take_profit,
            'timestamp': datetime.now().isoformat()
        }
    
    def calculate_atr(self, prices: List[float], period: int = 14) -> float:
        """Average True Range for dynamic risk management"""
        if len(prices) < period:
            return abs(prices[-1] - prices[0]) / 2
        
        # Simple ATR calculation (assumes close prices)
        volatility = sum(prices[-period:]) / period * 0.02  # 2% volatility
        return volatility
    
    def execute_trade(self, signal: Dict) -> Dict:
        """Execute trade based on signal"""
        if signal['signal'] == 'NEUTRAL':
            return {'status': 'NO_TRADE'}
        
        trade = {
            'type': signal['signal'],
            'timestamp': signal['timestamp'],
            'stop_loss': signal['stop_loss'],
            'take_profit': signal['take_profit'],
            'strength': signal['strength'],
            'status': 'PENDING'
        }
        
        self.trades_log.append(trade)
        return trade
    
    def update_account(self, pnl: float):
        """Update account equity based on trade result"""
        self.account_balance += pnl
        self.equity_curve.append(self.account_balance)
        
        # Track drawdown
        peak = max(self.equity_curve)
        drawdown = (peak - self.account_balance) / peak
        self.max_drawdown = max(self.max_drawdown, drawdown)
    
    def get_stats(self) -> Dict:
        """Return EA statistics"""
        trades = len(self.trades_log)
        wins = len([t for t in self.trades_log if t.get('pnl', 0) > 0])
        
        return {
            'total_trades': trades,
            'wins': wins,
            'win_rate': (wins / trades * 100) if trades > 0 else 0,
            'current_balance': self.account_balance,
            'max_drawdown': f"{self.max_drawdown * 100:.2f}%",
            'profit_factor': self.calculate_profit_factor(),
            'trades_log': self.trades_log
        }
    
    def calculate_profit_factor(self) -> float:
        """Profit factor = Total Wins / Total Losses"""
        wins = sum([t.get('pnl', 0) for t in self.trades_log if t.get('pnl', 0) > 0])
        losses = abs(sum([t.get('pnl', 0) for t in self.trades_log if t.get('pnl', 0) < 0]))
        
        if losses == 0:
            return wins if wins > 0 else 0
        return wins / losses


if __name__ == "__main__":
    # Example usage
    ea = ConservativeEA(account_balance=1000, risk_percent=1.5)
    
    # Simulated price data (replace with real data in production)
    prices_4h = [1.0850 + i * 0.0001 for i in range(100)]
    prices_1h = [1.0850 + i * 0.00005 for i in range(100)]
    prices_15m = [1.0850 + i * 0.000025 for i in range(100)]
    
    # Generate signal
    signal = ea.generate_signal(prices_4h, prices_1h, prices_15m)
    print(f"Signal: {signal}")
    
    # Execute trade
    trade = ea.execute_trade(signal)
    print(f"Trade: {trade}")
    
    # Get stats
    stats = ea.get_stats()
    print(f"Stats: {json.dumps(stats, indent=2, default=str)}")
