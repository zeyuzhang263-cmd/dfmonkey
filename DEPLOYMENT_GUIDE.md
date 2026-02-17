# dfmonkey.com 部署指南

## 快速开始（3分钟）

### 步骤1：在Vercel创建项目（1分钟）

1. 打开 https://vercel.com/dashboard
2. 点右上角 **"+ New Project"**
3. 选择 **"Import Git Repository"**
4. 输入：`https://github.com/zeyuzhang263-cmd/dfmonkey`
5. 点 **"Import"**

### 步骤2：配置环境变量（30秒）

Vercel会自动检测Next.js项目。点 **"Deploy"** 前：

点 **"Environment Variables"** 添加：
```
NEXT_PUBLIC_GUMROAD_PRODUCT_ID=dfmonkey-bundle
NEXT_PUBLIC_SITE_URL=https://dfmonkey.com
```

### 步骤3：点击部署（1分钟）

点绿色 **"Deploy"** 按钮。

等待 30-60秒，Vercel会自动：
- 下载代码
- 安装依赖
- 构建Next.js
- 部署到CDN

**部署完成！** 会看到一个 `*.vercel.app` 的临时域名

---

## 步骤4：连接自定义域名 dfmonkey.com（2分钟）

### 4a. 在Vercel添加域名

1. Vercel项目页面 → **Settings** → **Domains**
2. 输入 `dfmonkey.com` → 点 **Add**
3. 选择 **"Use Nameservers"**（推荐）

Vercel会显示4个Nameserver地址，例如：
```
ns1.vercel-dns.com
ns2.vercel-dns.com
...
```

**复制这4个地址**

### 4b. 更新域名DNS（在你的域名注册商）

假设你的域名在哪里注册的（GoDaddy、Namecheap、阿里云等）：

1. 登录域名注册商
2. 找到 **DNS设置** 或 **Nameservers**
3. 删除原有的Nameservers
4. 粘贴Vercel的4个Nameservers
5. 保存

**等待15分钟-24小时** DNS生效。你可以用这个检查：
```
https://dnschecker.org
```
输入 `dfmonkey.com`，看所有地区都变绿就说明生效了。

---

## 当前状态

✅ **GitHub仓库** → https://github.com/zeyuzhang263-cmd/dfmonkey
- README.md ✅
- ea-conservative/ ✅
- ea-advanced/ ✅
- ea-aggressive/ ✅

⏳ **需要上传的** → dfmonkey.com网站代码
- package.json
- src/app/page.tsx
- src/components/
- 等等

---

## 下一步操作

**现在就可以做：**
1. ✅ 打开 https://vercel.com/dashboard
2. ✅ 点 "+ New Project"
3. ✅ 导入GitHub仓库 `zeyuzhang263-cmd/dfmonkey`
4. ✅ 点Deploy

**我同时做：**
- 上传完整的Next.js网站代码到GitHub
- 配置所有API集成

---

## 问题排查

**"找不到仓库"？**
- 检查你是否登入正确的GitHub账号
- 检查token权限是否正确

**"部署失败"？**
- 点 **Deployments** 看日志
- 常见问题：package.json缺少或格式错误

**"域名未生效"？**
- DNS更新需要15分钟-24小时
- 用 https://dnschecker.org 检查

---

**现在就开始！告诉我你完成到哪一步了。**
