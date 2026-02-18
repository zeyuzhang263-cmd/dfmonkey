'use client'

import React, { useState, useEffect } from 'react'
import { ChevronDown, Zap, TrendingUp, Flame, Copy, Check } from 'lucide-react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const strategies = [
    {
      name: 'TrendFlow AI',
      emoji: '🌊',
      tagline: '稳定的趋势跟踪',
      description: '保守策略，适合风险厌恶型交易者',
      specs: [
        { label: '风险', value: '1-2% / 单笔' },
        { label: '胜率', value: '55-65%' },
        { label: '年目标', value: '20-30%' },
        { label: '最大回撤', value: '<15%' },
      ],
      price: 69,
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30 hover:border-blue-400/60',
    },
    {
      name: 'BreakLevel AI',
      emoji: '⚡',
      tagline: '突破点位战术',
      description: '支撑/阻力突破，最受欢迎',
      specs: [
        { label: '风险', value: '1-2% / 单笔' },
        { label: '胜率', value: '65-70%' },
        { label: '年目标', value: '30-50%' },
        { label: '最大回撤', value: '<20%' },
      ],
      price: 89,
      color: 'from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400/60',
      featured: true,
    },
    {
      name: 'InstitutionHunter AI',
      emoji: '🎯',
      tagline: '机构级策略',
      description: 'FVG + 多时间框架，高收益',
      specs: [
        { label: '风险', value: '2-3% / 单笔' },
        { label: '胜率', value: '60-65%' },
        { label: '年目标', value: '50-100%' },
        { label: '最大回撤', value: '<25%' },
      ],
      price: 99,
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500/30 hover:border-orange-400/60',
    },
  ]

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* 背景：渐变 + 网格 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        
        {/* 网格纹理 */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, 0.1) 25%, rgba(139, 92, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.1) 75%, rgba(139, 92, 246, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, 0.1) 25%, rgba(139, 92, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.1) 75%, rgba(139, 92, 246, 0.1) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />

        {/* 浮动光球 */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* 导航栏 */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 
          ? 'bg-black/60 backdrop-blur-md border-b border-purple-500/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            dfmonkey 🪼
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#products" className="text-slate-300 hover:text-white transition">产品</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition">定价</a>
            <a href="#community" className="text-slate-300 hover:text-white transition">社区</a>
          </div>
        </div>
      </nav>

      {/* Hero 区 */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* 顶部badge */}
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur">
            <span className="text-sm text-purple-300">✨ AI交易新时代</span>
          </div>

          {/* 主标题：渐变文字 */}
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI 驱动
            </span>
            <br />
            <span className="text-white">稳定盈利交易</span>
          </h1>

          {/* 副文案 */}
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            让机器学习帮你做出更好的交易决策。<br />
            三个经过验证的 AI 策略，无论你的账户大小。
          </p>

          {/* CTA 按钮 */}
          <div className="flex gap-4 justify-center mb-16 flex-wrap">
            <button className="group relative px-10 py-4 font-bold text-white text-lg
              bg-gradient-to-r from-blue-600 to-purple-600
              hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]
              transition-all duration-300 rounded-lg overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                开始交易 <Zap className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="px-10 py-4 font-bold text-white text-lg
              border border-purple-500/50 rounded-lg
              hover:border-purple-400 hover:bg-purple-500/10
              transition-all duration-300 backdrop-blur">
              了解更多
            </button>
          </div>

          {/* 滚动提示 */}
          <div className="animate-bounce text-slate-400">
            <ChevronDown className="w-6 h-6 mx-auto" />
          </div>
        </div>

        {/* Hero 右侧装饰 */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-9xl opacity-10 select-none pointer-events-none">
          📊
        </div>
      </section>

      {/* 产品区 */}
      <section id="products" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* 区标题 */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              三个经过验证的策略
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              选择适合你的风险偏好和账户规模的 AI 策略。所有策略都可以 24/7 自动运行。
            </p>
          </div>

          {/* 产品卡片网格 */}
          <div className="grid md:grid-cols-3 gap-8">
            {strategies.map((strategy, idx) => (
              <div
                key={idx}
                className={`group relative rounded-2xl transition-all duration-300 overflow-hidden
                  ${strategy.featured ? 'md:scale-105 md:z-10' : ''}
                  border ${strategy.borderColor}
                  bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur
                  hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]
                  hover:-translate-y-2`}
              >
                {/* Featured badge */}
                {strategy.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold animate-pulse">
                      ⭐ 最受欢迎
                    </div>
                  </div>
                )}

                {/* 内容 */}
                <div className="relative z-10 p-8">
                  {/* 标题 */}
                  <div className="mb-6">
                    <div className="text-4xl mb-2">{strategy.emoji}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{strategy.name}</h3>
                    <p className="text-sm text-slate-300">{strategy.tagline}</p>
                  </div>

                  {/* 描述 */}
                  <p className="text-slate-400 text-sm mb-8">{strategy.description}</p>

                  {/* 规格表 */}
                  <div className="space-y-3 mb-8 pb-8 border-b border-slate-700/50">
                    {strategy.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="text-slate-400">{spec.label}</span>
                        <span className="font-bold text-white">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* 价格 */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                        ${strategy.price}
                      </span>
                      <span className="text-slate-400">一次性</span>
                    </div>
                    <p className="text-xs text-slate-500">終身更新 + 24/7 支持</p>
                  </div>

                  {/* 按钮 */}
                  <button className={`w-full py-3 rounded-lg font-bold text-white text-center
                    transition-all duration-300
                    bg-gradient-to-r ${strategy.color}
                    hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]
                    hover:scale-105`}>
                    立即购买
                  </button>
                </div>

                {/* 边框渐变效果 */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  bg-gradient-to-r from-blue-500/20 to-purple-500/20 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 定价区 */}
      <section id="pricing" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">发布价优惠</h2>
            <p className="text-xl text-slate-400">第 4 周后价格上涨。现在获取最优惠。</p>
          </div>

          {/* Bundle 卡片 */}
          <div className="relative rounded-2xl p-12 border border-purple-500/50
            bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur
            hover:shadow-[0_0_60px_rgba(168,85,247,0.3)]
            transition-all duration-300">
            
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">三合一 Bundle</h3>
                <p className="text-slate-300">购买所有 3 个 EA + 终身更新</p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  $199
                </div>
                <p className="text-sm text-emerald-400 font-bold">节省 $59 ✨</p>
              </div>
            </div>

            <button className="w-full py-4 rounded-lg font-bold text-white text-lg
              bg-gradient-to-r from-blue-600 to-purple-600
              hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]
              transition-all duration-300 mb-4">
              立即获取 Bundle
            </button>

            <p className="text-xs text-slate-500 text-center">
              包含：TrendFlow + BreakLevel + InstitutionHunter AI
            </p>
          </div>
        </div>
      </section>

      {/* 社区区 */}
      <section id="community" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">加入 dfmonkey 社区</h2>
            <p className="text-xl text-slate-400">与 5000+ 交易者交流、学习、一起赢利</p>
          </div>

          {/* 社区统计卡片 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { label: '社群成员', value: '5000+', icon: '👥' },
              { label: '日均活跃', value: '1200+', icon: '🔥' },
              { label: '社区评分', value: '4.9/5', icon: '⭐' },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 backdrop-blur text-center hover:border-purple-500/30 transition-all">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Telegram 邀请 */}
          <div className="relative p-12 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur text-center">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-white mb-4">Telegram 官方频道</h3>
            <p className="text-slate-300 mb-8">实时交易信号、市场分析、24/7 支持</p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://t.me/dfmonkey" target="_blank" rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-lg
                hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                进入 Telegram →
              </a>
              <button onClick={() => copyToClipboard('https://t.me/dfmonkey')}
                className="px-6 py-3 border border-slate-600 text-slate-300 font-bold rounded-lg
                hover:border-slate-400 transition-all flex items-center gap-2">
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? '已复制' : '复制链接'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-700/50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                dfmonkey 🪼
              </div>
              <p className="text-sm text-slate-400">AI 驱动的交易解决方案，为交易者提供稳定的盈利策略。</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">产品</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">TrendFlow AI</a></li>
                <li><a href="#" className="hover:text-white transition">BreakLevel AI</a></li>
                <li><a href="#" className="hover:text-white transition">InstitutionHunter AI</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">支持</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">文档</a></li>
                <li><a href="#" className="hover:text-white transition">常见问题</a></li>
                <li><a href="#" className="hover:text-white transition">社区</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">法律</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition">服务条款</a></li>
                <li><a href="#" className="hover:text-white transition">隐私政策</a></li>
                <li><a href="#" className="hover:text-white transition">风险声明</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 text-center text-sm text-slate-500">
            <p>&copy; 2026 dfmonkey. 保留所有权利。</p>
            <p className="mt-2">⚠️ 免责声明：过去的表现不保证未来的结果。交易涉及风险。</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
