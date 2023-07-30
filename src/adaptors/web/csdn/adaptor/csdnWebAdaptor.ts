/*
 * Copyright (c) 2023, Terwer . All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Terwer designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Terwer in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Terwer, Shenzhen, Guangdong, China, youweics@163.com
 * or visit www.terwer.space if you need additional information or have any
 * questions.
 */

import { WebAuthApi } from "~/src/adaptors/web/base/web/WebAuthApi.ts"

/**
 * 知乎网页授权适配器
 *
 * @see [wechatsync csdn adaptor](https://github.com/wechatsync/Wechatsync/blob/master/packages/@wechatsync/drivers/src/CSDN.js)
 * @author terwer
 * @version 0.9.0
 * @since 0.9.0
 */
class CsdnWebAdaptor extends WebAuthApi {
  public async getMetaData(): Promise<any> {
    const res = await this.proxyFetch("https://bizapi.csdn.net/blog-console-api/v1/user/info")
    const flag = !!res.data.csdnid
    this.logger.info(`get csdn metadata finished, flag => ${flag}`)
    return {
      flag: flag,
      uid: res.data.csdnid,
      title: res.data.username,
      avatar: res.data.avatarurl,
      type: "csdn",
      displayName: "CSDN",
      supportTypes: ["markdown", "html"],
      home: "https://mp.csdn.net/",
      icon: "https://g.csdnimg.cn/static/logo/favicon32.ico",
    }
  }
}

export { CsdnWebAdaptor }
