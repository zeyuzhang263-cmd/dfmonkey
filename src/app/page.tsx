export default function Home() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #000;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Header */
        header {
          background: rgba(0,0,0,0.8);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          background: linear-gradient(to right, #60a5fa, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Hero Section */
        .hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-left h1 {
          font-size: 3rem;
          line-height: 1.2;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #60a5fa, #a78bfa, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-left p {
          font-size: 1.1rem;
          color: #999;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.3s;
        }

        .btn-primary {
          background: linear-gradient(to right, #3b82f6, #06b6d4);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
        }

        .btn-secondary {
          border: 2px solid #666;
          background: transparent;
          color: white;
        }

        .btn-secondary:hover {
          border-color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
        }

        /* Stats Grid */
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }

        .stat-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          padding: 1rem;
          transition: all 0.3s;
        }

        .stat-card:hover {
          border-color: #3b82f6;
          background: rgba(255,255,255,0.08);
        }

        .stat-label {
          font-size: 0.8rem;
          color: #999;
          margin-bottom: 0.5rem;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: bold;
        }

        /* Dashboard */
        .dashboard {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .dashboard-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1rem;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .dashboard-card:hover {
          border-color: #3b82f6;
          background: rgba(255,255,255,0.08);
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1.5rem;
        }

        .dashboard-header h3 {
          font-size: 1.25rem;
        }

        .status-badge {
          color: #4ade80;
          font-size: 0.9rem;
        }

        .metric-label {
          color: #999;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .metric-value {
          font-size: 2.5rem;
          font-weight: bold;
          color: #4ade80;
        }

        .progress-bar {
          width: 100%;
          height: 0.5rem;
          background: rgba(255,255,255,0.1);
          border-radius: 0.25rem;
          overflow: hidden;
          margin: 1rem 0;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(to right, #4ade80, #06b6d4);
          width: 85%;
        }

        /* Leaderboard */
        .leaderboard-section {
          background: rgba(255,255,255,0.05);
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 4rem 2rem;
          margin: 4rem 0;
        }

        .leaderboard-section h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          background: linear-gradient(to right, #fbbf24, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .leaderboard-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .leaderboard-item {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 1rem;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 2rem;
          align-items: center;
          transition: all 0.3s;
        }

        .leaderboard-item:hover {
          border-color: #3b82f6;
          background: rgba(255,255,255,0.08);
        }

        .rank {
          font-size: 2.5rem;
          font-weight: bold;
          width: 80px;
          text-align: center;
        }

        .rank-1 { color: #fbbf24; }
        .rank-2 { color: #d1d5db; }
        .rank-3 { color: #f97316; }

        .leaderboard-info h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .badge {
          display: inline-block;
          background: rgba(255,255,255,0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 2rem;
          font-size: 0.8rem;
        }

        .leaderboard-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .stat-item {
          text-align: right;
        }

        .stat-item-label {
          color: #999;
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
        }

        .stat-item-value {
          font-size: 1.5rem;
          font-weight: bold;
        }

        /* Products */
        .products-section {
          max-width: 1200px;
          margin: 4rem auto;
          padding: 0 2rem;
        }

        .products-section h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          background: linear-gradient(to right, #a78bfa, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 1.5rem;
          padding: 2rem;
          transition: all 0.3s;
        }

        .product-card:hover {
          border-color: #3b82f6;
          background: rgba(255,255,255,0.08);
          transform: translateY(-5px);
        }

        .product-name {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .product-desc {
          color: #999;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        .product-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 1.5rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .product-stat {
          text-align: center;
        }

        .product-stat-label {
          color: #999;
          font-size: 0.8rem;
          margin-bottom: 0.3rem;
        }

        .product-stat-value {
          font-weight: bold;
        }

        .product-button {
          width: 100%;
          background: linear-gradient(to right, #3b82f6, #06b6d4);
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .product-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }

        /* Features */
        .features-section {
          background: rgba(255,255,255,0.05);
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 4rem 2rem;
          margin-top: 4rem;
        }

        .features-section h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 3rem;
        }

        .features-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature {
          background: rgba(255,255,255,0.05);
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s;
        }

        .feature:hover {
          border-color: #3b82f6;
          background: rgba(255,255,255,0.08);
        }

        .feature-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .feature h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .feature p {
          color: #999;
          font-size: 0.9rem;
        }

        footer {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 2rem;
          text-align: center;
          color: #999;
        }

        @media (max-width: 768px) {
          .hero {
            grid-template-columns: 1fr;
          }

          .hero-left h1 {
            font-size: 2rem;
          }

          .leaderboard-item {
            grid-template-columns: 1fr;
          }

          .leaderboard-stats {
            grid-template-columns: 1fr;
          }

          .stat-item {
            text-align: left;
          }
        }
      `}</style>

      <header>
        <nav>
          <div className="logo">🪼 dfmonkey</div>
          <button className="btn btn-primary">开始交易</button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-left">
          <h1>AI驱动的<br/>稳定交易</h1>
          <p>三个经过验证的 AI 策略。稳定盈利。自动执行。无论你的账户多小，都能开始。</p>
          
          <div className="buttons">
            <button className="btn btn-primary">免费试用 7 天</button>
            <button className="btn btn-secondary">查看排行榜 →</button>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-label">活跃交易者</div>
              <div className="stat-value">5,200+</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">管理资产</div>
              <div className="stat-value">$85M+</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">日均交易</div>
              <div className="stat-value">15,800+</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">平均收益</div>
              <div className="stat-value" style={{color: '#4ade80'}}>+28.5%</div>
            </div>
          </div>
        </div>

        <div className="dashboard">
          <div className="dashboard-card">
            <div className="dashboard-header">
              <h3>实时表现</h3>
              <div className="status-badge">↑ 24h</div>
            </div>

            <div>
              <div className="metric-label">今日收益率</div>
              <div className="metric-value">+2.45%</div>
            </div>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
              <div>
                <div className="metric-label">胜率</div>
                <div className="metric-value" style={{color: 'white', fontSize: '1.5rem'}}>62.3%</div>
              </div>
              <div>
                <div className="metric-label">回撤</div>
                <div className="metric-value" style={{color: '#f97316', fontSize: '1.5rem'}}>-8.2%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="leaderboard-section">
        <h2>⭐ 策略排行榜</h2>
        <div className="leaderboard-container">
          {[
            {rank: 1, name: 'TrendFlow AI', badge: '⭐ Most Popular', roi: '+245%', users: '1,245'},
            {rank: 2, name: 'BreakLevel AI', badge: '🔥 Rising Star', roi: '+189%', users: '892'},
            {rank: 3, name: 'InstitutionHunter', badge: '👑 Top Performer', roi: '+312%', users: '654'}
          ].map(item => (
            <div key={item.rank} className="leaderboard-item">
              <div className={`rank rank-${item.rank}`}>#{item.rank}</div>
              <div className="leaderboard-info">
                <h3>{item.name}</h3>
                <span className="badge">{item.badge}</span>
              </div>
              <div className="leaderboard-stats">
                <div className="stat-item">
                  <div className="stat-item-label">年化收益</div>
                  <div className="stat-item-value" style={{color: '#4ade80'}}>{item.roi}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-item-label">活跃用户</div>
                  <div className="stat-item-value" style={{color: '#60a5fa'}}>{item.users}</div>
                </div>
                <div className="stat-item">
                  <button className="btn btn-primary">了解更多</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="products-section">
        <h2>三个经过验证的策略</h2>
        <div className="products-grid">
          {[
            {name: 'TrendFlow AI', desc: '稳定的趋势跟踪策略', risk: '1-2%', win: '55-65%', annual: '20-30%', drawdown: '<15%', price: '₹69'},
            {name: 'BreakLevel AI', desc: '突破点位战术策略', risk: '1-2%', win: '65-70%', annual: '30-50%', drawdown: '<20%', price: '₹89'},
            {name: 'InstitutionHunter', desc: 'MVG + 多周期策略', risk: '2-3%', win: '60-65%', annual: '50-100%', drawdown: '<25%', price: '₹99'}
          ].map(product => (
            <div key={product.name} className="product-card">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.desc}</p>
              
              <div className="product-stats">
                <div className="product-stat">
                  <div className="product-stat-label">风险</div>
                  <div className="product-stat-value">{product.risk}</div>
                </div>
                <div className="product-stat">
                  <div className="product-stat-label">胜率</div>
                  <div className="product-stat-value">{product.win}</div>
                </div>
                <div className="product-stat">
                  <div className="product-stat-label">年化</div>
                  <div className="product-stat-value" style={{color: '#4ade80'}}>{product.annual}</div>
                </div>
                <div className="product-stat">
                  <div className="product-stat-label">回撤</div>
                  <div className="product-stat-value" style={{color: '#f97316'}}>{product.drawdown}</div>
                </div>
              </div>

              <button className="product-button">{product.price} / 一次</button>
            </div>
          ))}
        </div>
      </section>

      <section className="features-section">
        <h2>为什么选择 dfmonkey</h2>
        <div className="features-grid">
          {[
            {icon: '🛡️', title: '企业级风控', desc: '资金安全 + 风险隔离'},
            {icon: '⏰', title: '24/7 自动交易', desc: '零时差执行 + 秒级反应'},
            {icon: '📱', title: '全平台支持', desc: '外汇 | 加密 | 期货 | 股票'},
            {icon: '👥', title: '社区支持', desc: '1000+ 活跃交易者社群'}
          ].map(feature => (
            <div key={feature.title} className="feature">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 dfmonkey. 由 Jelly 与你共同构建。</p>
      </footer>
    </>
  );
}
