import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <p>下一代前端开发与构建工具！类似Webpack</p>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite-Documentation</a>、
  <a href="https://cn.vitejs.dev" target="_blank">Vite-官方中文文档</a>
`
