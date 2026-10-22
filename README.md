# DeepSeek Chat Switch

在DeepSeek HARNESS左侧侧边栏生成 **DeepSeek Chat** 图标。点击，DeepSeek Chat 会直接嵌在 Harness 右侧主区域内打开；
在DeepSeek HARNESS左侧侧边栏生成Tab **HARNESS**和**Chat** ，可切换不同模式，同时 Chat 支持常用的网页版大模型，其他详见下文。

## 会话目录模式：HARNESS / Chat

左侧会话目录（原生会话列表）顶部新增一组**模式切换 Tab**，固定在会话列表上方：

| Tab | 内容 |
|---|---|
| **HARNESS**（默认） | 当前 app 原生会话内容（Workspace / 会话树），不做任何替换 |
| **Chat** | 本插件 `deepseek-chat-switch:history` 里记录的 DeepSeek Chat 浏览历史：今天 / 昨天 / 更早分组，点击任一条即在主面板内嵌页打开该地址 |

- 切到 Chat 时原生列表只是被隐藏（`display:none`，组件不卸载），因此切回 HARNESS 会立即恢复原来的滚动位置与展开状态。
- **点击 DeepSeek Chat 图标打开插件时，会话目录会自动切到 Chat**（写入 `deepseek-chat-switch:directory-mode`）；之后仍可手动切回 HARNESS。
- Chat 列表头部右侧是 **新建** / **更多** 两个图标按钮：**新建** 在插件面板打开 DeepSeek Chat 的新对话；**更多** 展开菜单，菜单里是 **清空历史**（无历史时禁用），列表不再占一行文字按钮。两个按钮对齐 HARNESS 原生 header 图标按钮：28×28、`--dsw-alias-label-secondary` 颜色（不再显得半透明）、4px 间距、悬停底色，图标复用原生 `IconPlusOutlineRegular` / `IconEllipsisOutlineRegular`。
- **模型图标与筛选**：每行标题前显示来源图标——DeepSeek / 元宝 / 豆包 用各自官方 logo；**其它站点则用页面标题的第一个字**做成字母徽标（无标题时不显示）。头部筛选按钮可按模型过滤（**全部 / DeepSeek / 元宝 / 豆包 / 文心一言 / 其他**，带各自条目计数；「其他」= 非这三个模型的其它站点，图标取标题首字），选择保存在 `deepseek-chat-switch:chat-filter`，筛选状态按钮会高亮为当前模型 logo。
- **只显示真实对话**：三个支持站点都必须带对话 id 才会显示——DeepSeek 需 `/a/chat/s/<id>`（或 `chat_id` / `session_id` 参数）；豆包需 `/chat/<id>`；元宝需 `/chat/<id>`（`/chat/naQivTmsDa` 是默认空会话入口，等同于空对话）；文心一言的 URL 不含会话 id（会话存在 SPA 状态里），因此不做过空对话过滤，保持可见。各站点的首页、`new=0`、登录页、空 `new chat` 等不会出现在 Chat 列表（仍保留在原始 `deepseek-chat-switch:history` 中，可在主面板历史浮层看到并清空）。
- **标题省略与滚动**：标题超宽时单行省略号截断；鼠标悬浮该行时按与 HARNESS 会话行相同的节奏（约 30px/s）横向滚动到标题末尾，滚动过程中用左右渐变遮罩淡出（`data-scrolled` / `data-clipped`），移出后立即回到开头。
- **行悬浮操作**：悬浮任一行在右侧显示 **更多** 与 **置顶** 两个图标按钮（对齐原生会话行的 `rowActions`：16×16 图标按钮、右侧留 8px 内边距、按钮间距 15px，更多图标复用原生 `IconEllipsisOutlineRegular`，不再贴边也不再显得半透明）。置顶按钮复用 Harness 原生的 pin 图标（`IconPinFillRegular` / `IconPinOutlineRegular`），鼠标停留约 500ms 后在按钮下方右对齐弹出「置顶会话 / 取消置顶」浮层（与 Harness Tooltip 相同的底色、描边、圆角、阴影与 11px 字号）。已置顶的行在右侧显示原生实心 pin 标记（`title=已置顶`），悬浮时隐藏并让位给操作按钮。
- **更多菜单**：头部「更多」与行悬浮「更多」都复用 HARNESS 原生会话行「更多」浮层的样式：`--dsw-radius-lg` 圆角、4px 内边距、`--dsw-alias-bg-base` 不透明底 + `::before` 半透明 `--dsw-menu-surface-fill` 材质与 `--dsw-menu-backdrop-filter`（不再透出列表文字）、`--dsw-elevation-prominent` 阴影 + `--dsw-elevation-stroke-color` 描边、34px 行高、13px 字号、`--dsw-alias-menu-icon` 图标槽，危险项使用错误色与危险悬停底色；行菜单与原生会话菜单一样**在更多按钮下方、左对齐**打开并做视口边界修正。菜单打开时渲染一个透明遮罩，点击页面任意位置（包括内嵌网页区域）都会关闭。行菜单包含 **置顶 / 取消置顶**、**重命名**、**复制对话链接**、**移除记录**。置顶条目进入列表顶部「置顶」分组；重命名使用行内输入框（Enter 保存、Esc 取消），保存到 `deepseek-chat-switch:history-titles`，之后再次访问该页也不会被页面标题覆盖；复制链接使用 `navigator.clipboard`（不可用时回退 `execCommand('copy')`），并在按钮上方短暂提示「已复制 / 复制失败」；移除记录会同时删掉该 URL 的自定义标题。菜单用 `position: fixed` 渲染，不会被列表滚动容器裁切。
- **点击不更新时间**：从 Chat 列表点击标题打开页面时，只同步选中态，不刷新该条目的记录时间与排序（站点内的后续跳转才按新访问记录）。
- **当前页面选中态 / 悬停态**：主面板里 DeepSeek 页面正在显示的地址会同步到侧栏列表，对应条目带 `aria-current="true"`；切换标签页、页内跳转或从列表点开都会实时更新，所在分组也会自动展开。选中与鼠标悬浮都按原生 `sessionRow` 的方式**整行**着色：背景覆盖标题、时间与右侧悬浮操作按钮区域（右侧保留 8px 内边距），标题本身不额外加粗。
- Chat 列表复用 Harness 原生会话列表的视觉，不另加面板底色：直接继承侧栏自身填充色（含 macOS 通透效果），行高 32px、标题 14px/20px 用 `--dsw-alias-label-primary`，悬停背景 `--dsw-alias-interactive-bg-hover`，时间与分组标签用 `--dsw-alias-label-quaternary` / `--dsw-alias-label-tertiary`，行圆角 `--dsw-radius-md`。
- 侧栏收起（`[data-sidebar-collapsed="true"]`）时整组 Tab 隐藏；选择写入 `deepseek-chat-switch:directory-mode`，默认 `harness`。
- 实现方式：Harness 没有「会话列表上方」的插槽，插件在 `[data-slot="sidebar.workspaces"]` 的父容器（会话区域）内插入一个 `order:-1` 的宿主节点，用独立 React root 渲染 Tab 与 Chat 列表；原生 `sidebar.workspaces` 的注册内容不被替换。宿主节点在会话区域被重建时会自动重新挂载。

## 新会话页模式：HARNESS / Chat

点击左侧 **新会话** 后，Hero 标题「探索未至之境」下方新增一组模式切换 Tab，默认 **HARNESS**（与原有功能、样式完全一致，只是多出这组 Tab）。

切到 **Chat** 后只保留输入框，隐藏工作区选择、代理模式、权限/模型等原生控件；该输入框仅支持文字和图片/文件。Tab 与输入框之间保留 20px 间距，避免切换后贴得过近：

- **对话模型**：Chat 输入框右下角显示当前模型及其**品牌 logo**（内嵌官方图标：DeepSeek 鲸鱼、元宝绿色圆标、豆包官方 favicon、文心一言气泡图标），默认 **DeepSeek**；点击弹出 Harness 菜单样式的列表，每个选项前也带对应 logo，可切换 **DeepSeek** / **元宝**（`https://yuanbao.tencent.com/chat/naQivTmsDa`）/ **豆包**（`https://www.doubao.com/chat`）/ **文心一言**（`https://wenxin.baidu.com/?enter_type=sidebar_dialog`）。选择写入 `deepseek-chat-switch:chat-model`，再次进入新会话会恢复；发送时按所选模型把内容送到对应站点（当前标签页不在目标站点时会先导航过去），发送浮层的再次发送也沿用同一目标。DeepSeek 的输入框/发送按钮有专门识别；元宝、豆包使用通用的输入框/文件输入/发送按钮识别与 Enter 兜底，站点改版可能影响，失败时可用发送浮层重试。
- **记住上次选择**：切到哪个 Tab 会写入 `deepseek-chat-switch:hero-mode`，再次进入新会话（或重启后）仍停留在上次的 HARNESS / Chat。例外：从 **自动化任务** 页的 **新建**（含空状态里的「新建自动化任务」）进入新会话时，插件会先把 `hero-mode` 重置为 HARNESS，保证新会话默认在 Harness 模式下创建任务。
- 点击 **发送**：文字写入所选对话站点的输入框，图片/文件写入该页面的附件区（优先给 `input[type="file"]` 设置 `FileList` 并派发 `change`，找不到时向编辑区派发 drag/drop）；**填入完成后先倒计时 5 秒，再自动点击网页的发送按钮**，浮层头部会显示「N 秒后点击发送」的计时。DeepSeek 的发送按钮是无文字的蓝色圆形图标（截图里的 ↑），因此先按 `aria-label` / `title` 匹配「发送 / send」，匹配不到时按「输入框卡片内、右下方、圆形、含 SVG、蓝色背景」等特征识别；都没有才回退派发 Enter。
- 内嵌页不在所选站点时先导航到目标地址，加载完成后再重试；找不到输入框会在输入框下提示并保留草稿；部分内容失败时会提示「已发送，但部分内容可能未填入」。
- 发送时会切到插件主面板（若未打开），把内容交给当前标签页；成功后清空草稿。
- **本轮发送浮层（可重试）**：传入网页后，插件面板右下角会浮出「本轮发送内容」卡片，展示本次文字、附件和发送状态；附件可**点击查看**（图片内嵌预览，其他文件可下载），倒计时结束自动关闭并清空内容。浮层用宿主 DOM 渲染而不是注入 DeepSeek 站点：网页跳转/刷新后仍可重试，也不会污染站点 DOM 或被站点样式影响。
  - **发送计时**：浮层头部在填入完成后显示「N 秒后点击发送」，5 秒到点自动点击网页发送按钮；随后再过 **3 秒**，插件会把光标放回输入框末尾并派发 **Enter** 作为补充发送（若输入框已被清空或页面正在生成则跳过，避免重复发送），状态栏显示「N 秒后回车补充发送」。底部 **再次发送到对话窗口** 会重新执行填入 → 5 秒倒计时 → 点击发送 → 3 秒回车补充（传输/点击阶段超过 30s 未结束会标记为可重试）。
  - **钉住**：头部 pin 按钮可暂停倒计时并把本轮数据暂存下来（再点恢复倒计时），用于多次查看/重试；关闭（× 或 Esc）会立即清空本轮数据。
  - 浮层 UI 复用 Harness 设计 token：`--dsw-radius-panel` 圆角、`--dsw-elevation-panel` 阴影、层色/描边/label token、原生 primary 按钮色与图标按钮尺寸，保持与宿主一致的深浅色主题。
- 实现方式：Hero 区域没有可插入的插槽，插件以 `[data-slot="conversation.composer.bar"]` 的父容器（`composerStack`）为锚点，在 Hero 标题后插入 Tab、在原生输入框前插入 Chat 输入框；`data-dsc-hero-chat="true"` 时用 CSS 隐藏原生工作区行、输入条与 dock，原生 DOM 不替换。离开 Hero 自动清理，重新进入时按 `hero-mode` 恢复 Tab。
- 已知限制：附件上传与自动发送依赖 DeepSeek 站点的文件输入/拖放与发送按钮实现，站点改版可能失效；图片/文件目前限制单个 10MB、最多 10 个；整体发送成功后由站点接管。

## 在其他会话里「问 deepseek」

Harness 会话头部注册了一个 **问 deepseek** 按钮，席位在 `conversation.session.header.actions`（标题行右端），`order: 9999` + `margin-left:auto` 保证排在该组最右。**不要**放到 `header.utilities`：侧栏收起时头部会插入会话标签条，utilities 在标签条之后，按钮会显得挤在标签堆里、观感与展开态不一致；actions 位于标签条之前，两种状态相对位置一致。按钮左侧复用 Harness 官方的鲸鱼标志：`require('@deepseek-ai/dsh-client-ui-primitives').FishLogo`（与侧栏品牌位同一个组件），并 `size: 14`；取不到时降级为无图标，不影响按钮可用。

为避免侧栏收起后头部上下文样式影响外观，选择器用 `button.dsc-ask.dsc-ask` 提权并锁死盒模型（高度 24px、`flex:0 0 auto`、`min-width:max-content`、显式字号/行高、`gap:6px`），因此宽度变化不会让它变形或换行。

**关键**：样式表必须在 `apply(ctx)` 里一次性注入（`installStyle`），不能在面板组件里按需注入。头部按钮不依赖任何面板挂载；若样式挂在面板组件里，面板未打开时按钮会退回浏览器默认外观（看起来像换了一套样式）。样式复刻 Harness 的「打开访达」按钮（`ui-open-in-app` 的 `_split`/`_main`）：24px 高、`.5px solid var(--dsw-alias-border-l4)` 描边、`var(--dsw-radius-sm)`、12px/16px 字号、`var(--dsw-alias-label-primary)` 文字，悬停 `var(--dsw-alias-interactive-bg-hover)`。

### 下拉菜单：带或不带上下文

按钮右侧的 `▾` 打开菜单，两项都**不会自动发送**：

| 选项 | 行为 |
|---|---|
| **默认不带上下文** | 打开右侧半屏并新开一个 DeepSeek 对话，不填任何内容 |
| **带上下文（助手最后回复）** | 打开右侧半屏，把 Harness 当前会话**最后一条助手回复**填入 DeepSeek 对话框 |

取法：助手回复是唯一带 `data-chat-group-part="response"` 的流项（用户消息无该属性、推理过程是 `"reasoning"`），因此用 `document.querySelectorAll('[data-chat-group-part="response"]')` 取**最后一个非空**节点并读其 `innerText`——既能拿到完整多段回复，也不会混入用户提问或输入框占位。若该标记不存在，回退到会话 body 的 `innerText` 取最后一块，并临时隐藏 `[data-composer-seat]`、`finally` 还原。超过 4000 字保留尾部，首行为「以下是 Harness 对话中助手最后一条回复：」。

> 说明：取的是**渲染后的文本**（markdown 已渲染为纯文本），不是会话中保存的原始 markdown 源；插件拿不到模型原始输出，要原始 markdown 需要会话数据接口支持。

实现链路：`lastAssistantContext()` 在 Harness 页面读文本 → `ctx.sidebarRight.openTab(...)` 打开半屏 → `requestFill(text)` 交给 `SidebarChat` → 注入 `fillScript()` 写入 guest 输入框（原生 setter + `input` 事件 / contenteditable 用 `execCommand('insertText')`），只写入不发送。

已知限制：

- **不能截图**。Harness 未向渲染层暴露 `desktopCapturer` / `getDisplayMedia`，插件拿不到屏幕画面；要真截图需要改主进程（开发副本方案）。
- 上下文来自**已渲染的 DOM**，虚拟滚动下更早、未渲染的消息不在其中；长度按上表截断。
- 内容读取失败（例如当前没有对话视图）时，按钮旁会提示「没有可用的对话内容」。

半屏表面固定以 **100% 缩放** 渲染（不继承主面板缩放），避免站点布局被放大后错位；同时注入 `COMPOSER_PIN_JS` 处理首页对话框位置：在 `chat.deepseek.com/` 首页时，把承载输入框、高度超过视口 60% 的祖先容器改为 `flex-direction:column; justify-content:flex-end`，让输入框贴到页面底部；一旦进入会话页（路径匹配 `/a/chat/`）就还原样式，因此发消息生成新对话后页面按站点正常布局显示。脚本用 `MutationObserver` + `requestAnimationFrame` 节流跟随 SPA 路由变化。

点击后：

1. 通过模块级 `newChatChannel` 发起「新对话」请求；
2. `ctx.sidebarRight.openTab('deepseek-chat')` 在当前对话**右侧半屏**打开本插件的侧栏标签页。

侧栏表面由插件自己注册的右侧栏标签类型提供（与同版本 terminal 标签相同的机制）：

- `ctx.sidebarRightTabs.register({ kind: 'deepseek-chat', multiple: false, ... })` 注册类型；
- 内容注册到 `sidebar.right.pane.tab`（key 为插件 id），标题注册到 `sidebar.right.pane.tab.title`。

半屏内的 DeepSeek 视图复用同一个 `GuestPane`（独立 guest 租约），顶部有小工具栏（后退 / 前进 / 刷新 / 地址显示 / 新对话）。因为共用同一套存储键，**历史记录、登录状态、语言、缩放与主面板完全共享**：半屏里的访问会写入同一份 `deepseek-chat-switch:history`，主面板的历史浮层与「最近访问」立即可见；反之亦然。

半屏视图与主面板共用 `GuestPane`。该组件创建 guest 的 effect **只依赖 `bridge` 与 `tabId`**，`onNavigate`/`onMount`/`onUnmount`/`onNavState`/`onReady`/`syncGuest` 全部通过 ref 调用——否则调用方传入内联箭头函数时，每次渲染都会重建 guest（表现为白屏且地址栏不停跳变）。另外写存储的同步逻辑对同一 guest 只允许触发一次 reload（`storageRepaired` WeakSet），避免站点回写键值时来回刷新。

半屏视图必须先有活动对话（`openTab` 依赖会话 surface），这也正好符合按钮只出现在会话头部的场景。

## 多标签## 多标签

头部下方是标签条：`+` 新建标签（默认打开 chat.deepseek.com），点标签切换、点 `×` 关闭，最多 8 个。每个标签持有**自己的 guest 租约和 webview**，切换时只是隐藏、不销毁页面，因此各标签的滚动位置、输入内容和登录态都保留；关闭标签才移除 webview 并 `release(lease)`。

由于主进程按 workspace 键缓存分区名（`dsh-sidebar-browser-<uuid>`），同一插件下所有标签**共享同一存储分区**，所以在一个标签里登录，其他标签立即是同账号；语言与登录持久化也是全标签统一的。标签地址与标题会存到 `localStorage` 的 `deepseek-chat-switch:tabs`，重启后按原顺序恢复。历史记录汇总所有标签的访问。

代价是每个标签对应一个渲染进程，标签越多内存占用越高，因此上限设为 8。

## 地址栏

地址栏在**顶部标题栏内**（标题与右侧按钮之间）：左侧依次是**后退 / 前进 / 刷新**三个 30px 按钮，随后是显示当前标签实时地址的输入框，最右是收藏五角星。后退与前进使用 `webview` 的 `canGoBack/goBack/canGoForward/goForward`，可用性由该标签上报的导航状态实时控制（不可用时置灰）。刷新只重载**当前标签**。

默认状态下地址以低对比度纯文本呈现（透明底色、透明边框），看不出是输入框；**鼠标移入**才显出底色、边框并提升对比度，聚焦时用品牌色描边。

**双击任意标签**会把该标签地址填入地址栏并全选；鼠标**单击**地址栏即自动全选整条地址（聚焦后下一帧 `select()`），之后可再点击放置光标做局部修改；**双击**同样是全选，便于整体替换。回车跳转，Esc 取消，失焦恢复真实地址。

### 页面内跳转

Harness 主进程会拒绝 webview 访客的 `window.open`，因此页面里的 `target="_blank"` 链接与新窗口请求原本没有任何效果。插件在 guest 页面注入一层改写（`INLINE_NAVIGATION_JS`，用 `window.__dscInlineNavigation` 做幂等标记）：

- 捕获阶段拦截 `a[target="_blank"]` 点击，改为 `location.href` 在当前页面打开；
- 把 `window.open(url)` 覆写为在当前页面跳转，返回 `null`。

于是点击链接后地址栏会随 `did-navigate` / `did-navigate-in-page` 自动更新成新页面地址。这样无需恢复 `allowpopups`，也就不会回到之前外部窗口弹出的问题。

### 地址纠错

`normalizeAddress()` 在解析前修正常见输入错误：全角标点（`。．｡` → `.`，以及 `：／＃？＝＆％＠`）转半角、去掉空白与全角空格、缺协议时补 `https://`、合并多余斜杠。随后用 `new URL()` 校验，仅接受 http/https、拒绝带账号密码的地址，并要求主机名含点；修正失败则不跳转。

### 最近访问与联想

聚焦地址栏时展开下拉：输入为空时显示**最近 5 条**（标题 + 地址）；开始输入后显示**联想**，候选来自收藏夹、历史记录与内置站点（chat.deepseek.com 等），按地址/标题子串匹配并去重，最多 6 条，首条是把输入纠正后的地址（「打开输入地址」）。点击任一行直接在当前标签打开；行上 `onMouseDown` 阻止默认，避免输入框先失焦导致下拉消失。

### 总结此页内容

地址栏最右侧的「总结」按钮会往 DeepSeek 页面注入脚本：找到站点输入框（`div[contenteditable="true"]` → `textarea` → `[contenteditable="true"]` 依次尝试），写入 `总结此页内容 <当前页面地址>`，再点击发送按钮（按 `aria-label` / `title` / 文本匹配「发送 / send」）；找不到发送按钮时退回派发 `Enter` 键事件。

- 输入框用原生 setter + `input` 事件写入（React 受控组件才能收到），contenteditable 用 `execCommand('insertText')`，失败才回退设置 `textContent`；
- 若当前标签不在 `chat.deepseek.com`，会先导航回 Chat 首页并在 `did-finish-load` 后继续执行（`pendingSummary`）；
- 找不到输入框时地址栏右侧显示提示，4 秒后自动消失。

注意：这套依赖站点的 DOM 结构，属于按页面元素定位的启发式实现；如果 DeepSeek 改版导致找不到输入框或发送按钮，会表现为提示「没找到 DeepSeek 输入框」，届时更新选择器即可。

### 收藏夹

地址栏右侧 30px 五角星按钮收藏/取消收藏当前页（实心表示已收藏），存 `localStorage` 的 `deepseek-chat-switch:bookmarks`。标题栏右上角星形按钮打开收藏夹浮层，列出标题与地址，点击在当前标签打开，右侧 `×` 移除。

标签样式对齐 Harness 自带的分段控件（`ui-sidebar-right` 里 `_tab_` 那套）：容器 `background: var(--dsw-alias-interactive-bg-hover)` + `border-radius: var(--dsw-radius-md)` + `padding: 4px`，标签高 28px、字号 13px/行高 20px、字重 500，选中项使用 `var(--dsw-alias-bg-layer-1)` 与 `var(--dsw-elevation-soft)`，焦点环用 `--dsw-focus-ring-*`，全部取自 Harness 的设计 token，因此跟随主题亮暗。

鼠标悬停标签时显示自定义提示：页面标题 + **完整地址**。因为标签条是横向滚动容器（`overflow-x: auto` 会同时裁剪纵向溢出），提示不使用 `title` 属性和 `::after`，而是按悬停元素的 `getBoundingClientRect()` 以 `position: fixed` 渲染在根节点上，并按视口宽度做左边界收敛，避免被裁切或超出屏幕。

关闭浮层的方式：按 Esc、点击浮层以外的任意位置。由于 webview 是独立的 guest 视图，其内容上的点击不会冒泡到宿主文档，所以浮层打开时会在页面区域铺一层透明遮罩（`.dsc-dismiss`）接收这次点击，先关闭浮层再让你继续操作页面。

## 历史记录

按访问时间分为 **今天 / 昨天 / 更早** 三组（今天默认展开，其余折叠并显示条数）。每条显示页面标题、完整地址和访问时间，点击即在当前内嵌页面打开；底部可清空。数据来自 webview 的 `did-navigate`、`did-navigate-in-page`、`page-title-updated`、`did-finish-load` 事件，按地址去重并保留最近 200 条，存入 `localStorage` 的 `deepseek-chat-switch:history`。

## 设置

**浏览器语言**：中文（默认）/ English / 跟随系统。站点把语言偏好存在 `localStorage` 的 `__appKit_@deepseek/chat_localePreference`，格式为 `{"value":"zh_CN","__version":"0"}`；默认值 `system` 会取 `navigator.language`，而 Harness 以 `--lang=en-US` 启动，所以原本首次进入是英文。插件在每次页面加载后校正该键，不一致才写并重载一次。

**保存登录状态**：站点把令牌放在 `localStorage` 的 `userToken`（不是 HttpOnly cookie），因此插件把 `userToken`、全部 `__appKit_*` 键以及**可读 cookie**（`document.cookie`）快照到 `deepseek-chat-switch:guest-storage`，下次启动回填后重载：

- localStorage 键走 `localStorage.setItem`；
- cookie 走 `document.cookie = name=value; path=/; SameSite=Lax`（`restoreCookiesJs`），仅在“已保存但当前为空”时回填，避免覆盖站点新值；
- 快照里用保留键 `__cookies` 存 cookie 串，回填 localStorage 时会跳过该键。

**已知限制（已实测确认）**：HttpOnly cookie 页面 JS 读不到也写不回，例如 `ds_session_id`、`HWWAFSESID`（WAF 会话）。实测检查 `Local Storage/leveldb` 可见快照确实写入了 `userToken`，但没有 `__cookies` —— 因为站点 cookie 全为 HttpOnly，`document.cookie` 为空串。

根因有两层：

1. Harness 给该 guest 的是**内存分区**：`acquire()` 每次生成随机名 `dsh-sidebar-browser-<uuid>`，且没有 `persist:` 前缀，重启必然清空；
2. 想绕过分区自行备份也做不到——这几个 cookie 是 HttpOnly。

因此**「保存登录状态」只能保住 localStorage 里的令牌与偏好，不能保证免登录**；要完整保留 cookie 必须让主进程改用 `persist:` 分区（主进程改动）。当前决定：不改 Harness，接受重启后可能需要重新登录；设置浮层里也直接标注了这一点。

仍然会持久化的内容：历史记录、收藏夹、标签列表、缩放、语言偏好。

### 恢复后必须回到站点根路径

实测诊断中出现过这种状态：`{"savedHasToken":true,"liveHasToken":true,"url":"https://chat.deepseek.com/sign_in"}` —— 令牌已回填，但页面停在 `/sign_in`。

原因是恢复逻辑写回令牌后调用的是 `element.reload()`，而首屏已经被站点重定向成 `/sign_in`，重载它仍然是登录页。修正为：

- 回填令牌 / 回填 cookie / 检测到「有令牌却停在 `/sign_in`」时，改为 `loadURL('https://chat.deepseek.com/')`，让 SPA 从根路径带着令牌启动；
- 仅语言偏好等其它修复才用 `reload()`；
- 每个 guest 只做一次（`storageRepaired`），避免循环跳转。

若这样仍回到 `/sign_in`，说明服务端确实拒绝「只有令牌、没有 HttpOnly cookie」的会话。

### 登录恢复诊断

设置浮层里的「登录恢复诊断」直接读取 `deepseek-chat-switch:login-diagnostic`（每次 `syncGuestStorage` 都会重写），显示两行：

- **快照**：`有令牌` / `无令牌` —— 应用存储里有没有可回填的 `userToken`
- **当前页面**：`有令牌` / `无令牌` —— 回填并重载后，guest 页面里实际存在的状态

判读方式：

| 快照 | 当前页面 | 含义 |
|---|---|---|
| 无令牌 | — | 从未成功保存过登录态（当时未登录或「保存登录状态」为关） |
| 有令牌 | 有令牌 | 回填成功，登录态已恢复 |
| 有令牌 | 无令牌 | 回填执行了但站点随后清掉了令牌 —— 说明服务端会话还绑着 HttpOnly cookie，仅靠令牌无法通过校验 |



**页面缩放**：−/+ 以 10% 步进（50%–200%）、80/100/125/150% 预设、一键重置。通过 `<webview>.setZoomFactor()` 应用；因 Chromium 按 origin 记忆缩放，除创建时还在首次文档提交后补设一次。值存 `deepseek-chat-switch:zoom`。

## 实现方式

插件使用 Desktop 主进程已授权的 guest 租约协议（与官方 Sidebar Browser 相同）：

1. `globalThis.dshDesktop.browser.acquire(workspaceKey)` 取得 `{ lease, partition }`；
2. 用 `partition` 创建 `<webview src="about:blank#<lease>">`，由主进程 `will-attach-webview` 校验租约归属；
3. `dom-ready` 后 `loadURL('https://chat.deepseek.com/')`，导航由主进程 `allowedNavigation` 校验（仅 HTTP(S)、且不能指向 Host 自身）；
4. 面板卸载时移除 webview 并 `bridge.release(lease)`。

webview **不要**设置 `allowpopups`。该属性会放行 Chat 页面的 `window.open`，实测会导致对话结束后由系统默认处理程序（本机的「豆包 · DeepSeek」Web App）弹出独立窗口。去掉后弹窗在 webview 层即被阻断。若将来站点登录必须用弹窗，应改为拦截并把地址导航到同一个 webview 内，而不是重新打开 `allowpopups`。

租约与分区均来自 Harness 自身的授权接口，因此没有绕开 guest 隔离策略，也不需要修改或重签 Harness 应用包。

## 窗口标题避让

macOS 下窗口按钮（关闭/最小化/全屏）覆盖在页面左上角。侧栏收起时 Harness 会把 `--dsh-frame-leading-clearance` 设为 160px（全屏时 84px），本插件头部左内边距使用同一变量（缺省 12px），因此标题不会与窗口按钮重叠，也与 Harness 自己的头部控件对齐。

## 使用环境异常提示与 UA

DeepSeek 首次登录可能提示「当前页面的使用环境可能存在数据和隐私泄露风险」。这是站点的风险控制检测到**嵌入环境**：

- Harness 未自定义 UA，Electron 默认 UA 带 `Electron/44.7.0`；
- 每次启动都是新的内存分区，没有 cookie/历史，风控评分更低；
- `navigator.userAgentData` 的品牌列表与 UA 里的 Electron 标识不一致。

提示中的「泄露风险」是站点的通用安全文案，不是实测结论——guest 仍受 `sandbox` / `contextIsolation` / 独立分区隔离。

缓解措施：给 `<webview>` 设置 `useragent` 属性（`GUEST_UA`），用正则从 `navigator.userAgent` 取出真实 Chromium 版本，拼成标准 Chrome UA：

```
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/<version> Safari/537.36
```

只作用于插件的 webview，不影响 Harness 自身；若站点或条款上有顾虑，删除 `setAttribute('useragent', GUEST_UA)` 一行即可回退。

## 安装

使用 Harness 的 `plugin_manager` 将 `install_bundle` 指向本目录。安装后启用插件并刷新 Harness 页面。
