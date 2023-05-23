import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import livereload from "rollup-plugin-livereload"
import minimist from "minimist"
import fg from "fast-glob"
import { createHtmlPlugin } from "vite-plugin-html"

const args = minimist(process.argv.slice(2))
const isWatch = args.watch || args.w || false
const devDistDir = "/Users/terwer/Documents/mydocs/SiYuanWorkspace/public/data/widgets/sy-post-publisher"
const distDir = isWatch ? devDistDir : "./dist"

console.log("isWatch=>", isWatch)
console.log("distDir=>", distDir)

// https://github.com/vuejs/vue-cli/issues/1198
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    createHtmlPlugin({
      minify: !isWatch,
      inject: {
        // 在 body 标签底部插入指定的 JavaScript 文件
        tags: [
          {
            tag: "script",
            attrs: {
              src: "./libs/eruda/eruda.js",
            },
            injectTo: "head-prepend",
          },
        ],
        data: {
          title: "eruda",
          injectScript: `<script>eruda.init();</script>`,
        },
      },
    }),

    {
      name: "add-query-param",
      transformIndexHtml(html) {
        const timestamp = Date.now()
        html = html.replace(/(<script.+src=")([^"]+\.js)"/g, `$1$2?v=${timestamp}"`)
        html = html.replace(/(<link[^>]+href=")([^"]+(\.css|\.js))"/g, (match, p1, p2) => `${p1}${p2}?v=${timestamp}"`)
        html = html.replace(/(<link[^>]+href=")([^"]+\.svg)"/g, `$1$2?v=${timestamp}"`)
        html = html.replace(/(<img[^>]+src=")([^"]+\.(jpe?g|gif|webp|bmp|png))"/g, `$1$2?v=${timestamp}"`)
        return html
      },
    },
  ],

  base: "",

  // https://github.com/vitejs/vite/issues/1930
  // https://vitejs.dev/guide/env-and-mode.html#env-files
  // https://github.com/vitejs/vite/discussions/3058#discussioncomment-2115319
  // 在这里自定义变量
  define: {
    "process.env.DEV_MODE": `"${isWatch}"`,
  },

  build: {
    // 输出路径
    outDir: distDir,
    emptyOutDir: false,

    // 构建后是否生成 source map 文件
    sourcemap: false,

    // 设置为 false 可以禁用最小化混淆
    // 或是用来指定是应用哪种混淆器
    // boolean | 'terser' | 'esbuild'
    // 不压缩，用于调试
    minify: !isWatch,

    rollupOptions: {
      plugins: [
        ...(isWatch
          ? [
              livereload(devDistDir),
              {
                //监听静态资源文件
                name: "watch-external",
                async buildStart() {
                  const files = await fg(["src/assets/*", "./README*.md", "./widget.json"])
                  for (const file of files) {
                    this.addWatchFile(file)
                  }
                },
              },
            ]
          : []),
      ],

      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["process"],

      output: {
        // add a query parameter to all JS and CSS file URLs
        chunkFileNames: "static/chunk.[name].js",
        entryFileNames: "static/entry.[name].js",
        assetFileNames: "static/asset.[name].[ext]",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            let arr = id.toString().split("node_modules/")[1].split("/")
            // pnpm单独处理
            if (id.includes(".pnpm")) {
              arr = id.toString().split(".pnpm/")[1].split("/")
            }
            const dep = arr[0].split("@")[0].replace(/\./g, "-")
            // console.log("id=>", id)
            // console.log("dep=>", dep)
            if (dep !== "") {
              return "vendor_" + dep
            }
            return "vendor"
          }
        },
      },
    },
  },
})
