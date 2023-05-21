# sy-post-publisher

![](https://img1.terwer.space/api/public/202212181125714.png)

Publish articles from [siyuan-note](https://github.com/siyuan-note/siyuan) to supported platforms

[![dev checks](https://img.shields.io/github/checks-status/terwer/sy-post-publisher/dev?label=build)](https://github.com/terwer/sy-post-publisher/tree/dev)
![version](https://img.shields.io/github/release/terwer/sy-post-publisher.svg?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/terwer/sy-post-publisher)
![](https://img.shields.io/badge/license-GPL-blue.svg?style=popout-square)

[![](https://img.shields.io/badge/helo-doc-blue)](https://docs.publish.terwer.space)
[![](https://img.shields.io/badge/course-video-red)](https://docs.publish.terwer.space/post/the-pendant-mode-is-used-in-the-method-of-mounting-menu-169wrw.html#%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B)
[![](https://img.shields.io/badge/source-code-red)](https://github.com/terwer/sy-post-publisher)
<a title="Downloads" target="_blank" href="https://github.com/terwer/sy-post-publisher/releases"><img src="https://img.shields.io/github/downloads/terwer/sy-post-publisher/total.svg?label=downloads&style=flat-square&color=blue"></a>

![](https://static.terwergreen.com/img/202302222313542.png)

Please be sure to read the [Quick Start Guide](#quick-start-guide) in detail before using

## v0.8.1

Note: This version is mainly to move the source code back to the main warehouse and switch to a new packaging method.

**Because the plug-in version is in full swing, this version has no energy to release new features and bug fixes. New features and bug fixes will be released along with the plugin version in `0.9.0`, so stay tuned!**

Old users can continue to use the previous code snippets or widgets. After the plugin version is released, it can be seamlessly migrated to the plugin version.

### Development refactoring

- #8 Migrate to new packaging

## v0.8.0

### Bug Fixes

- Fixed the problem of error reporting when publishing articles in WordPress and Blog Garden in the way of using the common widget version
- Fix the problem that the picture cannot be uploaded when it has a comment, and now supports displaying the alt of the comment as a picture
- Fixed the problem that the time stamp renaming in PicGo settings will be automatically turned on after it is turned off
- #434 When the article does not have a picture, the image bed error article fails to publish

### New Features

- Publish to Yuque supports internal link replacement between notes
- Blog Garden, WordPress, and Typecho platforms support internal link replacement between notes
- Github platforms (HUGO, Hexo, Vitepress, etc.) support internal link replacement between notes
- The normal widget version supports the use of image beds [Limited by the Electron mechanism, uploading directly from the main window will cause a kernel crash. Currently only link replacement is supported, and a new window still needs to be opened for uploading]

### Development refactoring

- Remove unnecessary log printing
- #420 ankisiyuan.bin (Mac only) Not available by default, download manually to reduce package size
- In view of the direct upload of the main window will cause a kernel crash, the main window removes PicGO support, and only supports the new window mode to use PicGO

## v0.7.2 Bug fixes

- Fix PicGO initialization failure

## v0.7.1 Bug fixes

- Fixed the problem of path splicing errors during the migration of PicGO's old configuration files

## v0.7.0 Feature List <sup>new</sup>

⚠️ Special reminder: `0.7.0` is a grayscale test version, so `0.7.x` repair version may be released at any time, please consider it before upgrading.

### PicGO related

- Added user-friendly PicGO GUI configuration interface
- Optimize PicGO configuration, support PicGO plug-ins (currently support watermark, s3, minio three plug-ins)
- PicGO default picture bed is github
- PicGO supports image renaming
- Cloud bed configuration buffer reading error problem, test common picture bed
- PicGO introduces an event monitoring mechanism to support event registration and event release
- PicGO supports reading multiple picture beds, and a single picture bed supports multiple configurations

### System configuration related

- Integrate all configuration items of the system and provide a unified configuration entry [Preferences] at the bottom
- Unified integration of [Import and Export] at the bottom of the import and export operations
- Integrate the settings of [Siyuan API address] into a tab page of [Preferences]
- Integrate the original general settings into [Personal Settings], and move the operation entry to a tab page of [Preferences]

### Publish experience related

- [Article Binding] The operation is not a configuration item, and it is also an optional function. It is easy to cause misunderstandings when placed on the release page. Now the operation is moved to the details page, and it is only used when it is necessary to establish a connection between the platform article and Siyuan notes. No operation is required to add new articles, and new articles will be automatically bound
- Fix the problem that the browser plug-in cannot use http, only https
- Fixed typecho publishing article failed to parse the article id
- Article list icon added tooltip
- Added text hints to slot buttons
- Action button fixed not to slide with the page when new window opens

### Developer Related

- Use python to refactor project build scripts - support one-click packaging
- Mount SyCmd for Anki sync (currently only available on Mac)

### other

- Fix known issues and upgrade some components.

Kind tips:

Please refer to [CHANGELOG](CHANGELOG.md) for changelog before `0.7.0`

## Quick Start Guide

### FAQ

Q1: Are there any precautions when using this Siyuan note widget or browser plug-in?

A1: Yes. **Special reminder: Please do not mix `Customized JS Fragment` with `Pendant Universal Version`, just use one of them. Avoid configuration synchronization problems caused by mixing.**
Browser plugins are unlimited.

Q2: What methods are available? What are the specific steps?

A2: Please refer to the following three modes and their detailed descriptions. Pay special attention to the content of the warm reminder.

### Mode 1: The mount menu of the widget version opens a new window and the operation method is quick to get started <sup>Strongly recommended</sup> <sup>0.4.2+</sup>

First download sy-post-publisher in Settings - Bazaar - Widgets

Click Settings - Appearance - Code Snippets, add the following `js` snippets to the code snippets, and restart Siyuan

```js
// If you don't like this menu, just remove the reference to this code snippet. After removing it, you can still use it in a general way through the widget version.
import("/widgets/sy-post-publisher/lib/siyuanhook.js")
```

Click the button to start the experience.

For details, please refer to: [The pendant mode is used in the method of mounting menu](https://docs.publish.terwer.space/post/the-pendant-mode-is-used-in-the-method-of-mounting-menu-169wrw.html)

Reminder: In this mode, the functions are already the most comprehensive, just use the menu functions directly, please do not add pendants. Avoid configuration synchronization problems caused by mixing.

### Mode 2: The common way of the pendant version is quick to get started

First download sy-post-publisher in Settings - Bazaar - Widgets

then write a good article

Enter / find the widget at the end of the text, select sy-post-publisher

Then select the platform you need and set it up

Click Publish.

Reminder: It is not recommended to add JS fragments in the general version mode, which may cause configuration out of sync problems. Either use the universal version alone, or use the mount menu alone.

### Mode 3: Get started quickly with browser plugins

Refer to [Browser Plugin Quick Start Guide](https://docs.publish.terwer.space/docs/getting-started/#%E6%B5%8F%E8%A7%88%E5%99%A8%E6% 8F%92%E4%BB%B6%E6%96%B9%E5%BC%8F%E4%BD%BF%E7%94%A8)

Q3: What objects are newly mounted in 'siyuanhook.js'? In which scenarios is it mounted? What is the purpose?

A3: SyPicgo, syp, terwer (new window only), SyCmd. Only mounted inside the 'Electron' environment (i.e. inside Sieyuan notes).

This feature is not available in browser plug-ins and self-deploying mode. The purpose is to expand the functionality of Siyuan notes.

Q4: What are the known issues that need special attention?

1. The [Optimized Typesetting] of Siyuan notes will cause Anki tag characters to be escaped.

   Currently available solution: If you use optimized typography, be sure to open the Anki list after using it and save the Anki notes again to fix it.

## Supported platforms

- [x] [Hugo](https://gohugo.io/) <sup>Recommended</sup>
- [x] [Docsy](https://www.docsy.dev/) <sup>Recommended</sup>
- [x] [Hexo](https://hexo.io/zh-cn/)
- [x] [Jekyll](https://github.com/lorepirri/cayman-blog) (Github pages are supported by default with built-in platforms)
- [x] [Vuepress](https://github.com/terwer/terwer.github.io)
- [x] [Vitepress](https://vitepress.vuejs.org/guide/getting-started)
- [x] [Nuxt](https://content.nuxtjs.org/)
- [x] [Next](https://nextra.site/)
- [x] [Cnblogs](https://cnblogs.com) <sup>Recommended</sup>
- [ ] CSDN <sup>Pre-research</sup>
- [ ] Zhihu <sup>Pre-research</sup>
- [x] [Yuque](https://yuque.com) <sup>Recommended</sup>
- [x] [Oschina](https://my.oschina.net/terwergreen)
- [x] [Liandi](https://ld246.com)
- [x] [WordPress](https://blog.terwergreen.com)
- [x] [Confluence](https://github.com/terwer/node-metaweblog-api-adaptor) <sup>Supported through interface adapters</sup>
- [x] [Metaweblog API](http://xmlrpc.com/spec.md)
- [ ] Custom HTTP protocol <sup>pre-research</sup>

Check out more about this

[Technical solutions](https://github.com/terwer/sy-post-publisher/blob/main/tech.md)

[Development progress](https://github.com/users/terwer/projects/1/views/1)

[Changelog](https://github.com/terwer/sy-post-publisher/blob/main/CHANGELOG.md)

## 🎈 Acknowledgement

The birth and growth of the sy-post-publisher project is inseparable from the contributions of the following open source projects, as well as the feedback and suggestions of enthusiastic netizens.

### Siyuan Community

[siyuan-note](https://github.com/siyuan-note/siyuan)

### unofficial QQ group

Welcome to join **Siyuan Lovers Toss Group**: `1017854502` , there are all kinds of technical bigwigs, cute girls, enthusiastic netizens in the group, definitely not to be missed...

### resource

UI framework: (in no particular order)

- [Vue3](https://vuejs.org/)
- [Element-Plus](https://element-plus.org/)
- [lute](https://github.com/88250/lute)
- [FontAwesome](https://fontawesome.com/)

Technology framework or hosting platform: (in no particular order)

- [xmlrpc](https://github.com/baalexander/node-xmlrpc)
- [yaml](https://github.com/nodeca/js-yaml)
- [vercel](https://vercel.com/)

### individual

Technical Support: (in no particular order)

- Thanks to [Soltus](https://github.com/Soltus) for providing a new window that opens the relevant code and implementation ideas

- Thanks to [leolee9086](https://github.com/leolee9086) for the mount menu code and implementation ideas

- Thanks [Zuoqiu-Yingyi] (https://github.com/Zuoqiu-Yingyi)
  Inspiration for the open source [Dark+] (https://github.com/Zuoqiu-Yingyi/siyuan-theme-dark-plus) theme

- Thanks to [svchord](https://github.com/svchord) for inspiration on the open source [Rem Craft] (https://github.com/svchord/Rem-Craft) theme

## Copyright Notice

This work is open source in [GPLv3] (https://github.com/terwer/sy-post-publisher/blob/main/LICENSE).

```
/*
 * Copyright (c) 2022, Terwer . All rights reserved.
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
```
