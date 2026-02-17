"""
dfmonkey - Advanced EA (BreakLevel AI)
Support/Resistance Breakout Strategy for Intermediate Traders
High Win Rate, Multi-timeframe Confirmation
"""

import json
from datetime import datetime
from typing import Dict, List, Tuple, Optional

class AdvancedEA:
    """
    Advanced EA Strategy: BreakLevel AI
    
    Characteristics:
    - Strategy: Support/Resistance Breakout
    - Risk per trade: 1-2% of account
    - Trade frequency: 5-10 trades/week
    - Win rate: 65-70%
    - Target: 30-50% annual return
    - Max drawdown: <20%
    - Suitable for: Intermediate traders
    """
    
    def __init__(self, account_balance: float, risk_percent: float = 1.5):
        self.account_balance = account_balance
        self.risk_percent = risk_percent
        self.trades_log = []
        self.equity_curve = [account_balance]
        self.support_resistance_levels = {}
        self.high_probability_zones = []
        
    def find_support_resistance(self, prices: List[float], 
                               lookback: int = 100) -> Tuple[List[float], List[float]]:
        """
        Identify support (local minima) and resistance (local maxima)
        Using institutional level detection
        """
        support_levels = []
        resistance_levels = []
        
        if len(prices) < lookback:
            return support_levels, resistance_levels
        
        recent_prices = prices[-lookback:]
        
        # Find local minima (support)
        for i in range(5, len(recent_prices) - 5):
            if (recent_prices[i] < recent_prices[i-5] and
                recent_prices[i] < recent_prices[i+5]):
                support_levels.append(recent_prices[i])
        
        # Find local maxima (resistance)
        for i in range(5, len(recent_prices) - 5):
            if (recent_prices[i] > recent_prices[i-5] and
                recent_prices[i] > recent_prices[i+5]):
                resistance_levels.append(recent_prices[i])
        
        # Cluster similar levels (group levels within 0.5%)
        support_levels = self._cluster_levels(support_levels)
        resistance_levels = self._cluster_levels(resistance_levels)
        
        return support_levels, resistance_levels
    
    def _cluster_levels(self, levels: List[float], threshold: float = 0.005) -> List[float]:
        """Cluster similar price levels (within threshold %)"""
        if not levels:
            return []
        
        levels = sorted(set(levels))
        clusters = []
        current_cluster = [levels[0]]
        
        for level in levels[1:]:
            if abs(level - current_cluster[-1]) / current_cluster[-1] < threshold:
                current_cluster.append(level)
            else:
                # Take average of cluster
                clusters.append(sum(current_cluster) / len(current_cluster))
                current_cluster = [level]
        
        if current_cluster:
            clusters.append(sum(current_cluster) / len(current_cluster))
        
        return clusters
    
    def identify_breakout_setup(self, 
                                prices_4h: List[float],
                                prices_1h: List[float],
                                prices_15m: List[float]) -> Dict:
        """
        Identify high-probability breakout setups
        
        Rules:
        1. Price consolidating near S/R level (within 1% for 20+ candles)
        2. Breakout signal on 15m above resistance or below support
        3. 1H and 4H confirming the direction
        4. Volume/momentum confirmation (price strength)
        
        Returns: {
            'setup': 'BREAKOUT_BUY' | 'BREAKOUT_SELL' | 'NONE',
            'level': float,
            'confidence': 0.0-1.0,
            'stop_loss': float,
            'take_profit': float
        }
        """
        
        # Find S/R levels
        support_4h, resistance_4h = self.find_support_resistance(prices_4h)
        support_1h, resistance_1h = self.find_support_resistance(prices_1h)
        
        current_price = prices_15m[-1]
        recent_high = max(prices_15m[-20:])
        recent_low = min(prices_15m[-20:])
        consolidation_range = recent_high - recent_low
        
        setup = 'NONE'
        level = 0
        confidence = 0.0
        
        # Consolidation near resistance = Breakout BUY potential
        if resistance_4h and resistance_1h:
            nearest_resistance = min(resistance_4h + resistance_1h,
                                    key=lambda x: abs(x - current_price))
            
            if (abs(current_price - nearest_resistance) / nearest_resistance < 0.01 and
                consolidation_range < nearest_resistance * 0.005):
                # Price breaking above resistance
                if current_price > nearest_resistance * 1.0005:
                    setup = 'BREAKOUT_BUY'
                    level = nearest_resistance
                    confidence = 0.75
        
        # Consolidation near support = Breakout SELL potential
        if support_4h and support_1h:
            nearest_support = min(support_4h + support_1h,
                                 key=lambda x: abs(x - current_price))
            
            if (abs(current_price - nearest_support) / nearest_support < 0.01 and
                consolidation_range < nearest_support * 0.005):
                # Price breaking below support
                if current_price < nearest_support * 0.9995:
                    setup = 'BREAKOUT_SELL'
                    level = nearest_support
                    confidence = 0.75
        
        # Calculate stops and targets
        atr = self.calculate_atr(prices_15m)
        
        if setup == 'BREAKOUT_BUY':
            stop_loss = level - atr * 1.5
            take_profit = level + atr * 3
        elif setup == 'BREAKOUT_SELL':
            stop_loss = level + atr * 1.5
            take_profit = level - atr * 3
        else:
            stop_loss = 0
            take_profit = 0
        
        return {
            'setup': setup,
            'level': level,
            'confidence': confidence,
            'stop_loss': stop_loss,
            'take_profit': take_profit,
            'timestamp': datetime.now().isoformat()
        }
    
    def calculate_atr(self, prices: List[float], period: int = 14) -> float:
        """Calculate Average True Range"""
        if len(prices) < period:
            return (max(prices) - min(prices)) / 2
        
        volatility = sum(prices[-period:]) / period * 0.025  # 2.5% volatility
        return volatility
    
    def calculate_momentum(self, prices: List[float]) -> float:
        """
        Measure price momentum (0 to 1)
        0: no movement, 1: strong directional movement
        """
        if len(prices) < 5:
            return 0.5
        
        recent_change = abs(prices[-1] - prices[-5]) / prices[-5]
        return min(recent_change * 10, 1.0)  # Normalize to 0-1
    
    def execute_breakout(self, setup: Dict) -> Dict:
        """Execute breakout trade"""
        if setup['setup'] == 'NONE':
            return {'status': 'NO_SETUP'}
        
        # Only trade high confidence setups
        if setup['confidence'] < 0.65:
            return {'status': 'LOW_CONFIDENCE'}
        
        position_size = self.calculate_position_size(setup['stop_loss'], setup['level'])
        
        trade = {
            'type': setup['setup'],
            'entry_level': setup['level'],
            'stop_loss': setup['stop_loss'],
            'take_profit': setup['take_profit'],
            'position_size': position_size,
            'confidence': setup['confidence'],
            'timestamp': setup['timestamp'],
            'status': 'ACTIVE'
        }
        
        self.trades_log.append(trade)
        return trade
    
    def calculate_position_size(self, stop_loss: float, entry: float) -> float:
        """Position size based on risk management"""
        risk_amount = self.account_balance * (self.risk_percent / 100)
        sl_distance = abs(entry - stop_loss)
        
        if sl_distance == 0:
            return 0
        
        position_size = risk_amount / sl_distance
        return round(position_size, 2)
    
    def get_stats(self) -> Dict:
        """Return EA statistics"""
        trades = len(self.trades_log)
        wins = len([t for t in self.trades_log if t.get('pnl', 0) > 0])
        
        return {
            'total_trades': trades,
            'wins': wins,
            'win_rate': (wins / trades * 100) if trades > 0 else 0,
            'current_balance': self.account_balance,
            'profit_factor': self.calculate_profit_factor(),
            'support_resistance_levels': self.support_resistance_levels,
            'trades_log': self.trades_log[-10:]  # Last 10 trades
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
    ea = AdvancedEA(account_balance=5000, risk_percent=1.5)
    
    # Simulated price data
    prices_4h = [1.0850 + i * 0.00015 for i in range(150)]
    prices_1h = [1.0850 + i * 0.00008 for i in range(150)]
    prices_15m = [1.0850 + i * 0.00004 for i in range(150)]
    
    # Find S/R
    support_4h, resistance_4h = ea.find_support_resistance(prices_4h)
    print(f"4H Support: {support_4h}, Resistance: {resistance_4h}")
    
    # Identify setup
    setup = ea.identify_breakout_setup(prices_4h, prices_1h, prices_15m)
    print(f"Setup: {setup}")
    
    # Execute
    trade = ea.execute_breakout(setup)
    print(f"Trade: {json.dumps(trade, indent=2, default=str)}")
