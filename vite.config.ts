import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import livereload from "rollup-plugin-livereload"
import minimist from "minimist"
import fg from "fast-glob"
import { createHtmlPlugin } from "vite-plugin-html"
import path from "path"
import commonjs from "@rollup/plugin-commonjs"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

const getAppBase = (isSiyuanBuild: boolean, isStaticBuild: boolean): string => {
  if (isSiyuanBuild) {
    return "/widgets/sy-post-publisher/"
  } else if (isStaticBuild) {
    return "/dist/"
  } else {
    return "/"
  }
}

const args = minimist(process.argv.slice(2))
const debugMode = true
const isWatch = args.watch || args.w || false
const isDev = isWatch || debugMode
const devDistDir = "/Users/terwer/Documents/mydocs/SiYuanWorkspace/public/data/widgets/sy-post-publisher"
const distDir = isWatch ? devDistDir : "./dist"
const isSiyuanBuild = process.env.BUILD_TYPE === "siyuan"
const isStaticBuild = process.env.BUILD_TYPE === "static"
const isChromeBuild = process.env.BUILD_TYPE === "chrome"
const appBase = getAppBase(isSiyuanBuild, isStaticBuild)

console.log("isWatch=>", isWatch)
console.log("debugMode=>", debugMode)
console.log("isDev=>", isDev)
console.log("distDir=>", distDir)
console.log("isSiyuanBuild=>", isSiyuanBuild)
console.log("isStaticBuild=>", isStaticBuild)

// https://github.com/vuejs/vue-cli/issues/1198
// https://vitejs.dev/config/
// https://github.com/intlify/vue-i18n-next/issues/543
export default defineConfig({
  plugins: [
    vue(),

    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

    createHtmlPlugin({
      minify: !isDev,
      inject: {
        // 在 body 标签底部插入指定的 JavaScript 文件
        tags:
          isDev && !isChromeBuild
            ? [
                {
                  tag: "script",
                  attrs: {
                    src: "./libs/eruda/eruda.js",
                  },
                  injectTo: "head-prepend",
                },
              ]
            : [],
        data: {
          title: "eruda",
          injectScript: isDev && !isChromeBuild ? `<script>eruda.init();</script>` : "",
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
    "process.env.APP_BASE": `"${appBase}"`,
  },

  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
    },
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
    minify: !isDev,

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
        commonjs(),
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
              // if (dep === "element-plus") {
              //   let element_dep = dep
              //   const componentPath = id
              //   const componentRegex = /\/node_modules\/([^/]+)\/.*\/components\/([^/]+)/
              //   const matches = componentPath.match(componentRegex)
              //
              //   if (matches !== null) {
              //     element_dep = matches[2]
              //     // console.log("element_dep=>", element_dep)
              //   } else {
              //     // console.log(`Could not match component name from ${componentPath}`)
              //   }
              //
              //   return "vendor_element_plus_" + element_dep
              // }
              return "vendor_" + dep
            }
            return "vendor"
          }
        },
      },
    },
  },
})
