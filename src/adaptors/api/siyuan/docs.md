# SiYuanApiAdaptor

## Usage

```ts
import { SiYuanApiAdaptor, SiyuanConfig } from "zhi-siyuan-api"

const siyuanCfg = new SiyuanConfig("http://127.0.0.1:6806", "")
// 显示指定修复标题
siyuanCfg.fixTitle = true
const siyuanApiAdaptor = new SiYuanApiAdaptor(siyuanCfg)
const siyuanApi = Utils.blogApi(appInstance, siyuanApiAdaptor)
const siyuanUsersBlogs = await siyuanApi.getUsersBlogs()
console.log("siyuanUsersBlogs=>", siyuanUsersBlogs)
```