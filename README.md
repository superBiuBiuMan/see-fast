# Tampermonkey v5.0.0 后脚本无法正常运行？
* Tampermonkey 为了顺应 Chrome 的 Manifest V3 要求，在 v5.0.0 版本中修改了 CSP 相关选项的默认值。

* 你只需要去 Tampermonkey 设置中，先把最顶端的第一个选项 配置模式: 默认的 新手 改为 高级。
然后翻到下面的 安全 选项区域，找到 修改内容安全策略（CSP）头信息: 把默认的 自动 改为 是 并点击下面一点的 保存 按钮即可解决。
* 注意：在 Safari 浏览器上访问 Github 时，是无法运行任何油猴脚本的

* 靠,编译运行失败了,找半天没找到错误, Cannot read properties of undefined (reading 'createContext')
* 废弃,废弃!