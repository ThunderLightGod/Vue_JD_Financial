- [视频下载]（https://u14538876.pipipan.com/u/14538876/28732864）

# SPA设计工作原理
  分别有History API模式和hash模式
- History API模式
  对浏览器有要求，实现SPA采用pushState创建一个历史记录，通过onpopstate响应浏览器控制事件
- hash模式
  对浏览器的兼容性较好，修改location.has改变路由地址，通过hashchange响应浏览器控制事件