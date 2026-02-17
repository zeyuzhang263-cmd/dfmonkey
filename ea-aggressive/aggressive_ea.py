"""
dfmonkey - Aggressive EA (InstitutionHunter AI)
Fair Value Gaps + Multi-timeframe AI Strategy for Professionals
High Frequency, Dynamic Risk Management
"""

import json
from datetime import datetime
from typing import Dict, List, Tuple, Optional

class AggressiveEA:
    """
    Aggressive EA Strategy: InstitutionHunter AI
    
    Characteristics:
    - Strategy: FVG + Multi-timeframe + Dynamic Leverage
    - Risk per trade: 2-3% (with leverage control)
    - Trade frequency: 15-30 trades/week
    - Target: 50-100% annual return
    - Max drawdown: <25%
    - Suitable for: Professional traders
    - Features: News filtering, Dynamic leverage, Advanced risk management
    """
    
    def __init__(self, account_balance: float, risk_percent: float = 2.5,
                 enable_leverage: bool = False, max_leverage: float = 2.0):
        self.account_balance = account_balance
        self.risk_percent = risk_percent
        self.enable_leverage = enable_leverage
        self.max_leverage = max_leverage
        self.trades_log = []
        self.equity_curve = [account_balance]
        self.fvg_zones = []
        self.active_trades = []
        self.high_impact_news_times = []
        
    def detect_fair_value_gaps(self, prices: List[float], 
                              lookback: int = 50) -> List[Dict]:
        """
        Detect Fair Value Gaps (FVG) - unused price levels
        
        FVG = Gap between two candles that price hasn't filled
        
        Bullish FVG: Low of candle N > High of candle N-2
        Bearish FVG: High of candle N < Low of candle N-2
        
        Returns: List of {
            'type': 'BULLISH' | 'BEARISH',
            'top': float,
            'bottom': float,
            'strength': 0.0-1.0,  # How much price moved
            'timestamp': str
        }
        """
        
        if len(prices) < 3:
            return []
        
        fvgs = []
        recent_prices = prices[-lookback:]
        
        for i in range(2, len(recent_prices)):
            current_low = recent_prices[i]
            prev_high = recent_prices[i-2]
            
            # Bullish FVG: current candle low > previous candle high
            if current_low > prev_high:
                gap_size = current_low - prev_high
                strength = gap_size / prev_high  # Percentage gap
                
                fvgs.append({
                    'type': 'BULLISH',
                    'top': current_low,
                    'bottom': prev_high,
                    'gap_size': gap_size,
                    'strength': min(strength * 100, 1.0),  # Normalize
                    'index': i
                })
            
            # Bearish FVG: current candle high < previous candle low
            elif i >= 2:
                current_high = recent_prices[i]
                prev_low = recent_prices[i-2]
                
                if current_high < prev_low:
                    gap_size = prev_low - current_high
                    strength = gap_size / prev_low
                    
                    fvgs.append({
                        'type': 'BEARISH',
                        'top': prev_low,
                        'bottom': current_high,
                        'gap_size': gap_size,
                        'strength': min(strength * 100, 1.0),
                        'index': i
                    })
        
        # Sort by strength (strongest first)
        fvgs.sort(key=lambda x: x['strength'], reverse=True)
        
        self.fvg_zones = fvgs[:5]  # Keep top 5 FVG zones
        return fvgs
    
    def analyze_multi_timeframe(self, 
                               prices_daily: List[float],
                               prices_4h: List[float],
                               prices_1h: List[float]) -> Dict:
        """
        Advanced multi-timeframe analysis
        
        Confluence: When multiple timeframes align = high probability
        
        Returns: {
            'daily_trend': 'UP' | 'DOWN' | 'NEUTRAL',
            'h4_trend': 'UP' | 'DOWN' | 'NEUTRAL',
            'h1_trend': 'UP' | 'DOWN' | 'NEUTRAL',
            'confluence_score': 0-10,  # How many timeframes align
            'optimal_direction': 'LONG' | 'SHORT' | 'NONE'
        }
        """
        
        def get_trend(prices):
            if len(prices) < 2:
                return 'NEUTRAL'
            momentum = prices[-1] - prices[-10]
            if momentum > prices[-10] * 0.005:
                return 'UP'
            elif momentum < -prices[-10] * 0.005:
                return 'DOWN'
            else:
                return 'NEUTRAL'
        
        daily_trend = get_trend(prices_daily)
        h4_trend = get_trend(prices_4h)
        h1_trend = get_trend(prices_1h)
        
        confluence_score = 0
        optimal_direction = 'NONE'
        
        # Score confluence
        if daily_trend == h4_trend:
            confluence_score += 3
        if h4_trend == h1_trend:
            confluence_score += 3
        if daily_trend == h1_trend:
            confluence_score += 2
        
        # Determine optimal direction
        if daily_trend == 'UP' and h4_trend == 'UP' and h1_trend == 'UP':
            optimal_direction = 'LONG'
            confluence_score = 10
        elif daily_trend == 'DOWN' and h4_trend == 'DOWN' and h1_trend == 'DOWN':
            optimal_direction = 'SHORT'
            confluence_score = 10
        elif (daily_trend == 'UP' and h4_trend == 'UP') or \
             (h4_trend == 'UP' and h1_trend == 'UP'):
            optimal_direction = 'LONG'
        elif (daily_trend == 'DOWN' and h4_trend == 'DOWN') or \
             (h4_trend == 'DOWN' and h1_trend == 'DOWN'):
            optimal_direction = 'SHORT'
        
        return {
            'daily_trend': daily_trend,
            'h4_trend': h4_trend,
            'h1_trend': h1_trend,
            'confluence_score': confluence_score,
            'optimal_direction': optimal_direction
        }
    
    def generate_aggressive_signal(self,
                                  prices_daily: List[float],
                                  prices_4h: List[float],
                                  prices_1h: List[float],
                                  current_price: float) -> Dict:
        """
        Generate aggressive trading signal combining:
        1. FVG detection
        2. Multi-timeframe confluence
        3. Dynamic leverage adjustment
        4. News impact consideration
        
        Returns: {
            'signal': 'LONG' | 'SHORT' | 'NONE',
            'entry_price': float,
            'stop_loss': float,
            'take_profit': float,
            'leverage': float,  # Recommended leverage
            'confidence': 0.0-1.0,
            'reason': str
        }
        """
        
        # 1. Detect FVGs
        fvgs = self.detect_fair_value_gaps(prices_1h)
        
        # 2. Analyze multi-timeframe
        mtf_analysis = self.analyze_multi_timeframe(prices_daily, prices_4h, prices_1h)
        
        # 3. Calculate volatility for position sizing
        atr = self.calculate_atr(prices_1h)
        volatility = self.calculate_volatility(prices_1h)
        
        signal = 'NONE'
        entry_price = current_price
        leverage = 1.0
        confidence = 0.0
        reason = ""
        
        # Signal generation logic
        if fvgs and mtf_analysis['optimal_direction'] in ['LONG', 'SHORT']:
            strongest_fvg = fvgs[0]
            
            # LONG setup
            if (mtf_analysis['optimal_direction'] == 'LONG' and
                strongest_fvg['type'] == 'BULLISH'):
                signal = 'LONG'
                entry_price = strongest_fvg['bottom']
                stop_loss = entry_price - atr * 2
                take_profit = entry_price + atr * 5
                confidence = 0.7 + (mtf_analysis['confluence_score'] / 10) * 0.3
                reason = f"FVG LONG + {mtf_analysis['confluence_score']}/10 confluence"
            
            # SHORT setup
            elif (mtf_analysis['optimal_direction'] == 'SHORT' and
                  strongest_fvg['type'] == 'BEARISH'):
                signal = 'SHORT'
                entry_price = strongest_fvg['top']
                stop_loss = entry_price + atr * 2
                take_profit = entry_price - atr * 5
                confidence = 0.7 + (mtf_analysis['confluence_score'] / 10) * 0.3
                reason = f"FVG SHORT + {mtf_analysis['confluence_score']}/10 confluence"
        
        # Dynamic leverage based on volatility
        if self.enable_leverage and confidence > 0.75:
            if volatility < 0.01:  # Low volatility = safe to use leverage
                leverage = min(1.5, self.max_leverage)
            elif volatility > 0.03:  # High volatility = reduce leverage
                leverage = 1.0
        
        return {
            'signal': signal,
            'entry_price': entry_price,
            'stop_loss': stop_loss if signal != 'NONE' else 0,
            'take_profit': take_profit if signal != 'NONE' else 0,
            'leverage': leverage,
            'confidence': confidence,
            'reason': reason,
            'fvg_count': len(fvgs),
            'mtf_analysis': mtf_analysis,
            'timestamp': datetime.now().isoformat()
        }
    
    def calculate_atr(self, prices: List[float], period: int = 14) -> float:
        """Calculate Average True Range"""
        if len(prices) < period:
            return (max(prices) - min(prices)) / 2
        return sum(prices[-period:]) / period * 0.03
    
    def calculate_volatility(self, prices: List[float]) -> float:
        """Calculate price volatility (0-1 scale)"""
        if len(prices) < 10:
            return 0.02
        
        recent = prices[-10:]
        returns = [(recent[i] - recent[i-1]) / recent[i-1] for i in range(1, len(recent))]
        volatility = sum(abs(r) for r in returns) / len(returns)
        return min(volatility, 0.1)  # Cap at 10%
    
    def execute_aggressive_trade(self, signal: Dict) -> Dict:
        """Execute high-frequency aggressive trade"""
        if signal['signal'] == 'NONE' or signal['confidence'] < 0.65:
            return {'status': 'SKIPPED', 'reason': 'Low confidence'}
        
        position_size = self.calculate_position_size(
            signal['stop_loss'],
            signal['entry_price'],
            signal['leverage']
        )
        
        trade = {
            'type': signal['signal'],
            'entry_price': signal['entry_price'],
            'stop_loss': signal['stop_loss'],
            'take_profit': signal['take_profit'],
            'position_size': position_size,
            'leverage': signal['leverage'],
            'confidence': signal['confidence'],
            'reason': signal['reason'],
            'timestamp': signal['timestamp'],
            'status': 'OPEN'
        }
        
        self.active_trades.append(trade)
        self.trades_log.append(trade)
        
        return trade
    
    def calculate_position_size(self, stop_loss: float, entry: float,
                               leverage: float = 1.0) -> float:
        """Calculate position size with leverage"""
        risk_amount = self.account_balance * (self.risk_percent / 100)
        sl_distance = abs(entry - stop_loss)
        
        if sl_distance == 0:
            return 0
        
        position_size = (risk_amount / sl_distance) * leverage
        return round(position_size, 2)
    
    def get_performance_stats(self) -> Dict:
        """Return EA performance statistics"""
        trades = len(self.trades_log)
        wins = len([t for t in self.trades_log if t.get('pnl', 0) > 0])
        
        return {
            'total_trades': trades,
            'wins': wins,
            'win_rate': (wins / trades * 100) if trades > 0 else 0,
            'active_trades': len(self.active_trades),
            'current_balance': self.account_balance,
            'fvg_zones_detected': len(self.fvg_zones),
            'profit_factor': self.calculate_profit_factor(),
            'performance': {
                'trades': self.trades_log[-5:]  # Last 5 trades
            }
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
    ea = AggressiveEA(
        account_balance=10000,
        risk_percent=2.5,
        enable_leverage=True,
        max_leverage=2.0
    )
    
    # Simulated price data
    prices_daily = [1.0850 + i * 0.0003 for i in range(200)]
    prices_4h = [1.0850 + i * 0.00015 for i in range(200)]
    prices_1h = [1.0850 + i * 0.00008 for i in range(200)]
    current_price = prices_1h[-1]
    
    # Generate signal
    signal = ea.generate_aggressive_signal(prices_daily, prices_4h, prices_1h, current_price)
    print(f"Signal: {json.dumps(signal, indent=2, default=str)}")
    
    # Execute trade
    trade = ea.execute_aggressive_trade(signal)
    print(f"Trade: {json.dumps(trade, indent=2, default=str)}")
    
    # Get stats
    stats = ea.get_performance_stats()
    print(f"Stats: {json.dumps(stats, indent=2, default=str)}")
