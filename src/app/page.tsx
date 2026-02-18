'use client';

import { TrendingUp, Users, Zap, BarChart3, Trophy, Clock, Shield, Smartphone } from 'lucide-react';

export default function Home() {
  // 排行榜数据
  const leaderboard = [
    { rank: 1, name: 'TrendFlow AI', roi: '+245%', users: '1,245', badge: '⭐ Most Popular' },
    { rank: 2, name: 'BreakLevel AI', roi: '+189%', users: '892', badge: '🔥 Rising Star' },
    { rank: 3, name: 'InstitutionHunter', roi: '+312%', users: '654', badge: '👑 Top Performer' },
  ];

  // 性能对比数据
  const strategies = [
    {
      name: 'TrendFlow AI',
      description: '稳定趋势跟踪',
      risk: '1-2%',
      winRate: '55-65%',
      annual: '20-30%',
      drawdown: '<15%',
      users: 1245,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'BreakLevel AI',
      description: '突破点位战术',
      risk: '1-2%',
      winRate: '65-70%',
      annual: '30-50%',
      drawdown: '<20%',
      users: 892,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'InstitutionHunter',
      description: 'MVG+多周期',
      risk: '2-3%',
      winRate: '60-65%',
      annual: '50-100%',
      drawdown: '<25%',
      users: 654,
      color: 'from-orange-500 to-red-500',
    },
  ];

  // 统计数据
  const stats = [
    { label: '活跃交易者', value: '5,200+', icon: Users, color: 'text-blue-400' },
    { label: '管理资产', value: '$85M+', icon: TrendingUp, color: 'text-cyan-400' },
    { label: '日均交易', value: '15,800+', icon: Zap, color: 'text-purple-400' },
    { label: '平均收益率', value: '+28.5%', icon: BarChart3, color: 'text-pink-400' },
  ];

  const features = [
    { icon: Shield, title: '企业级风控', desc: '资金安全 + 风险隔离' },
    { icon: Clock, title: '24/7 自动交易', desc: '零时差执行 + 秒级反应' },
    { icon: Smartphone, title: '全平台支持', desc: '外汇 | 加密 | 期货 | 股票' },
    { icon: Users, title: '社区支持', desc: '1000+ 活跃交易者社群' },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* 动态背景 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 right-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 backdrop-blur-md sticky top-0">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            🪼 dfmonkey
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#" className="hover:text-blue-400 transition">产品</a>
            <a href="#" className="hover:text-blue-400 transition">排行榜</a>
            <a href="#" className="hover:text-blue-400 transition">社区</a>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
            开始交易
          </button>
        </nav>
      </header>

      {/* Hero Section - 左右分布 */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          {/* 左侧：标题 + 按钮 */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl md:text-7xl font-black mb-4 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  AI驱动的交易
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                三个经过验证的 AI 策略。稳定盈利。自动执行。无论你的账户多小，都能开始。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition transform hover:scale-105">
                免费试用 7 天
              </button>
              <button className="border-2 border-white/20 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:bg-blue-400/10 transition">
                查看排行榜 →
              </button>
            </div>

            {/* 小统计 */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-blue-400/50 transition">
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧：数据仪表板卡片 */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-lg hover:border-blue-400/50 transition">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold">实时表现</h3>
                <span className="text-green-400 text-sm">↑ 24h</span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-2">今日收益率</p>
                  <p className="text-4xl font-bold text-green-400">+2.45%</p>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-400 to-cyan-400" style={{width: '85%'}}></div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">胜率</p>
                    <p className="text-lg font-bold">62.3%</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">回撤</p>
                    <p className="text-lg font-bold text-orange-400">-8.2%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {strategies.slice(0, 2).map((strategy, i) => (
                <div key={i} className={`bg-gradient-to-br ${strategy.color} opacity-20 border border-white/20 rounded-xl p-4 hover:opacity-30 transition`}>
                  <p className="font-semibold text-sm mb-2">{strategy.name}</p>
                  <p className="text-xs text-gray-300">{strategy.description}</p>
                  <p className="text-2xl font-bold mt-3">{strategy.annual}</p>
                  <p className="text-xs text-gray-400 mt-1">年化收益</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 排行榜 Section - 独立宽区域 */}
      <section className="relative z-10 bg-white/5 border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                ⭐ 策略排行榜
              </span>
            </h2>
            <p className="text-gray-400">基于实时数据 | 用户满意度 | 历史表现</p>
          </div>

          <div className="space-y-4">
            {leaderboard.map((item, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition blur"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-400/50 transition backdrop-blur-sm flex items-center justify-between">
                  {/* 排名 */}
                  <div className="flex items-center gap-6 flex-1">
                    <div className={`text-4xl font-black w-16 text-center ${
                      i === 0 ? 'text-yellow-400' : i === 1 ? 'text-gray-300' : 'text-orange-400'
                    }`}>
                      #{item.rank}
                    </div>

                    {/* 名称和徽章 */}
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <span className="inline-block bg-white/10 px-3 py-1 rounded-full text-xs text-gray-300">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* 数据 */}
                  <div className="hidden md:grid grid-cols-3 gap-12">
                    <div className="text-right">
                      <p className="text-gray-400 text-xs mb-1">年化收益</p>
                      <p className="text-2xl font-bold text-green-400">{item.roi}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs mb-1">活跃用户</p>
                      <p className="text-2xl font-bold text-blue-400">{item.users}</p>
                    </div>
                    <div>
                      <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition">
                        了解更多
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 产品详情 - 卡片网格 */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-black text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            三个经过验证的策略
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {strategies.map((strategy, i) => (
            <div key={i} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${strategy.color} opacity-0 group-hover:opacity-10 rounded-2xl transition blur-xl`}></div>
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/30 transition backdrop-blur-sm h-full flex flex-col">
                {/* 头部 */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${strategy.color} opacity-30 mb-6`}></div>
                <h3 className="text-2xl font-bold mb-2">{strategy.name}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{strategy.description}</p>

                {/* 统计 */}
                <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-white/10">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">风险</p>
                    <p className="font-bold">{strategy.risk}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">胜率</p>
                    <p className="font-bold">{strategy.winRate}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">年化</p>
                    <p className="font-bold text-green-400">{strategy.annual}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">回撤</p>
                    <p className="font-bold text-orange-400">{strategy.drawdown}</p>
                  </div>
                </div>

                {/* 用户数 */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-400">活跃用户: {strategy.users.toLocaleString()}</span>
                    <Trophy className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400" style={{width: `${(strategy.users / 1245) * 100}%`}}></div>
                  </div>
                </div>

                {/* 按钮 */}
                <button className={`w-full bg-gradient-to-r ${strategy.color} text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition`}>
                  ₹69 / 一次
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 特性对比 */}
      <section className="relative z-10 bg-white/5 border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16">为什么选择 dfmonkey</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-400/50 hover:bg-white/10 transition group">
                <feature.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/50 rounded-3xl p-16 text-center">
          <h2 className="text-4xl font-black mb-4">准备开始你的交易之旅？</h2>
          <p className="text-xl text-gray-300 mb-8">$100 即可开启，24/7 自动交易</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-12 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-blue-500/50 transition">
              立即开始
            </button>
            <button className="border-2 border-blue-400 px-12 py-4 rounded-lg font-bold text-lg hover:bg-blue-400/10 transition">
              加入社区
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 text-center text-gray-400">
        <p>&copy; 2026 dfmonkey. 由 Jelly 与你共同构建。</p>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
