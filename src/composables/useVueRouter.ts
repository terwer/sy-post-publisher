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

import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from "vue-router"
import Home from "~/src/pages/Home.vue"

const ApiTest = () => import("~/src/pages/ApiTest.vue")
const SiyuanTest = () => import("~/src/components/test/SiyuanTest.vue")
const WordpressTest = () => import("~/src/components/test/WordpressTest.vue")
const YuqueTest = () => import("~/src/components/test/YuqueTest.vue")

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  {
    path: "/test",
    component: ApiTest,
    children: [
      { path: "", component: SiyuanTest },
      { path: "siyuan", component: SiyuanTest },
      { path: "wordpress", component: WordpressTest },
      { path: "yuque", component: YuqueTest },
    ],
  },
]

export const useVueRouter = (): Router => {
  return createRouter({
    history: createWebHashHistory(),
    routes,
  })
}
