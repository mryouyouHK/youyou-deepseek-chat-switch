window.__ModuleLoader__.load({
  id: 'youyou-deepseek-chat-switch',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    /** React 18 root for the sidebar session-directory tabs; null when unavailable. */
    let ReactDOMClient = null;
    try {
      ReactDOMClient = require('react-dom/client');
    } catch {
      ReactDOMClient = null;
    }
    /** Official DeepSeek whale mark shipped by Harness; null when unavailable. */
    let FishLogo = null;
    /** Native HARNESS pin icons for the pinned row marker and hover pin action. */
    let PinFillIcon = null;
    let PinOutlineIcon = null;
    /** Native HARNESS menu icons, so Chat menus match the session-row "more" menu. */
    let EditIcon = null;
    let CopyIcon = null;
    let TrashIcon = null;
    /** Native HARNESS glyphs used by the Chat-tab header and row actions. */
    let EllipsisIcon = null;
    let PlusIcon = null;
    try {
      const primitives = require('@deepseek-ai/dsh-client-ui-primitives');
      FishLogo = primitives.FishLogo ?? null;
      PinFillIcon = primitives.IconPinFillRegular ?? null;
      PinOutlineIcon = primitives.IconPinOutlineRegular ?? null;
      EditIcon = primitives.IconEditOutlineRegular ?? null;
      CopyIcon = primitives.IconCopyOutlineRegular ?? null;
      TrashIcon = primitives.IconTrashOutlineRegular ?? null;
      EllipsisIcon = primitives.IconEllipsisOutlineRegular ?? null;
      PlusIcon = primitives.IconPlusOutlineRegular ?? null;
    } catch {
      FishLogo = null;
      PinFillIcon = null;
      PinOutlineIcon = null;
      EditIcon = null;
      CopyIcon = null;
      TrashIcon = null;
      EllipsisIcon = null;
      PlusIcon = null;
    }
    const PANEL_ID = 'deepseek-chat-switch';
    const SIDEBAR_KIND = 'deepseek-chat';
    const SIDEBAR_ID = 'youyou-deepseek-chat-switch';
    const CHAT_URL = 'https://chat.deepseek.com/';
    const WORKSPACE_KEY = 'plugin:deepseek-chat-switch';
    const ZOOM_KEY = 'deepseek-chat-switch:zoom';
    const LANG_KEY = 'deepseek-chat-switch:lang';
    const LOGIN_KEY = 'deepseek-chat-switch:persist-login';
    const SNAPSHOT_KEY = 'deepseek-chat-switch:guest-storage';
    const DIAG_KEY = 'deepseek-chat-switch:login-diagnostic';
    const HISTORY_KEY = 'deepseek-chat-switch:history';
    const HISTORY_TITLES_KEY = 'deepseek-chat-switch:history-titles';
    const TABS_KEY = 'deepseek-chat-switch:tabs';
    const BOOKMARKS_KEY = 'deepseek-chat-switch:bookmarks';
    const DIRECTORY_MODE_KEY = 'deepseek-chat-switch:directory-mode';
    const HERO_MODE_KEY = 'deepseek-chat-switch:hero-mode';
    const CHAT_MODEL_KEY = 'deepseek-chat-switch:chat-model';
    const CHAT_FILTER_KEY = 'deepseek-chat-switch:chat-filter';
    /**
     * Official brand marks, inlined as data URLs so badges render offline and
     * are never blocked by the page CSP: the DeepSeek whale, Yuanbao's green
     * mark and Doubao's official favicon (each from its own site).
     */
    const PROVIDER_LOGOS = {
      deepseek: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAARGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAAwoAMABAAAAAEAAAAwAAAAANs3bAwAAAHLaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4yMjU8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjI1PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CpllDk4AAAnGSURBVGgF7Vh7cFXFGf++PefmRh4q8qylM1SqdgZHqbV02ikday2PkgQcSh3aWnGwNgmBCoW2AzreGer0gZWHSRAQS18zHdNizQ0i0OmkpYpaQUAZrNpO6cMqBMubm+Sc8/X37clJcs89yU2U/uE0O3PvObv77bff47e/3bNEA2UgAgMRGIjA/3UEpi+U9Jy75JJ3GgT3nQ7sbdyMKhmWStEVnu+PZnZyHtNL2x/iY0ljUgEty7ly85w58tmGBvaTZHpr65cDmYyYQ0dpUGuKBnvtZ7mkZHDuxKV0pjnD3tTFclmpRzdJQLOE5FO+T+93HMclobddn+bCiJ1xQ6YvPH6x+PJVdmh8bhRdh/59cZlidS4mgBSPLSG6KQjoM5C9mkhG4TlYxzFxDsYeY+ajIjLBGB7HhgiyELMCpymg2Y11vEvl4+Xz1TLRZXmeHU6J0DP4zc/W8itxuaR6+QK5vi136m89OlBRI5cz0yIYNo8NAwqwCUbpzxqnWtGm7aok0D796yjGYQp82ZOtM5+M2uLPGZUy1UnRU8gaGcfqboH+La7Q9x+v4+Nx+agO42/DuA1BG31N5y4o5Qu8mcxmNYz4YABUwokCmWINyIoObBHmyT1FdeZCuRmqd4XqBcFgAujI8+RZauPy7EZuuTEj7pDjNMERGgNHBwvTdETsNteltN9GXylwoKxG7jBM66ErjQgWs7PXfkBKk3UQiflGUy03x4WRgWuMI3+C5aVhakMJN8XU3k7LxdAfHZH7oWMS4Jq22VaIhkGFL3wjql2lvEZmq/FoedfGq9YAlmPSaw3JtrIF/pKumcK3szl6HUa8ZvKsIPI9haUsMr5sAwomo5bWLKk+38NLGPZ/tJbQy51DK6rlQ8h5LfrS3bEcn7S/9TCLPMhxzI8qFvg/VCaLdDRvURKgX+rC714UsoDTGKy9odZgizFIdhQH6wUZe2zHan7bDlWcgU1WOQ6PUS8vdFGDlJnYMcteOBrUgfPVBFsA+Q0w8mXHzUezjklae0oOyNBfUiXmQVVgHRjaQp+DtzM1df+zok4Au45rKnOjgh9kMhk7t7JN4HvzxKcjalyPxS5wAEvk35C5fesa1mfoAFrvAI1h9IWPfr5BYSaMY76599i9nXDatr5kLxI0DVnaowu/qzDoFcyERQ3T2/2Asp60T22s5acjGVa+h1cHgbnh6oIuKLsRQcKuenULfilXJ6U0UtS/pxqmbBL8xDNmEY4Zp3Q8+H05aPT+roXKrRzIbsFmJ2SamuroWViVF2UXdk02HcZj8R7yA95I7P8dfgeB748kwxNIzMdg/kTgdIg60t91olHUYGhgQoJQOCnnm9vZlw+XLZAVFx2l3a0i0wTkqAU2kR/IkdPnuLx5i8nZxoQ/XTq32EjbyPOj2PbXxeWUOfb9h68EhqcBZfNg0ERFW98cYR/j9kD6DYyZZFwzTtcCXLF0CV0fhxNP4Sz0Ihqvxdmoc3rY5o8c1kGana35L6BomaQQ0SIcjAzf8v8zGQ4a1/Kfgb21p+TYZKTmTox5NWSOMGL5I8IaiAEv8lppCc3M1jm3umxuAGw2KHwiMrc0y+zCEWSZ0+HIqJvfalhNPUZfZZUJhkU+43m5NvZWmutHncnWupspd/bTvhdgxw6PAEljFC4Az/jWdtkFfNefKyHJ1poq8YK1oRMdoyxDqRWRJdH6C3Cwy8d8fB5LZdqoWcDSuqo7R8eFu9cbHxnyFqJajbTNR5xPhtHuLoF3YBNqA+B6DQigIt1Gs9Am6WOvfAvrYSf2ndiAgqrCqteiDrTYRGOBwYur/DH0vl5HxDqxZh4FbL+EwSfyKdDqUwCnsCUtAbsND8S3bNPQMKENni2BE8ftoS+mUx0HE7V6gf98vCteN5gBFKq2g6gMX+aJ/4m4ULF6Ux0/GQT8ZUT7VNwgGA/a54nAeCm+zsZHurJ1fAhctCkPSh2dSuXQdVic1OFIvqenwXH3iahTzyRA7S1RvT9PdQIcuQyQxdz5RdlKmQf6l+pZHh9JF+M3Er6VFkpb5CnStmF/aM3XVFgz8PY5THBe0xbSm5kyq1LGFYoWb2msdTZKwJvi5xodaTdBoRGY5qduIPtS+OH97oIjOxoVPsz+r4vPCBb613n6K8J+wKYN4cBJb7hngq/3ZXCSDL6Uvh14sh+QKehWJzTiWPDjsVONtU7FpPSkCZEnrx+eOhDrSqyavRu5HdHPwnFbwlSb+WWL5MrEEUUaf7OGT2AHXwwKzcXXQzgUTgBS4Y6cr0zlMX+rI/4Duvfk9ybXLI2CaR9D1E6qAo0KojASHxNQ0nV2Tx6e3Nr0cKoZsFyXtECTR4StKi9BsPmJ+tQzvcl177MONNbz60jsz6MJ7WHKcAXO7tXdhQvfhT96l6QK24kuIrMSevYkrYckeYVc4NH+0rS5N6m/pzbrgHbiw2IVJnyzc0MCEMF/q8qqpbynwTOq/C+MLaXncKK9b0qlvW7pFG2o5zNiuAqZaCnYHzqlwhftR+JbMOX8Bnxlxbp7rXY6sLWOj2DbX6FbArIRsgZRqTHyY1DfFxO1GHKQtY/glylN0R/gyJzuck0P8QGcfWqgEKxSuKhV1rYLncTH1DzsDe/2Yku4rCZY57qmxm/HtDqBHshEUJPlp0eYNXoLZzvwp1eIbOR3iOBENU9JBiB+uDVn7tmxuSuS5dX+YmTzQWWgOPModPA19j3s6Msjvf15FoRlytI3B6dzozdjId8afmKGhzV74+bJdmLvnmxdSWekcJOxArLftesGUVYaBLe/4PtcuW09742MgRPfwTfxStTdPAayFui9qTyNbPws7dNOhV80rtizwAEdMGWpwAnaBGPm4o7ThlZhpYscmD6LA9zvEekXcfmFW0eZiy5wetdUekgDU7aQ7y8Xz/kFLqjOaW8IMVkD3OArMNIbwkh1268+kgPYDO8DnDpPCF2aC98SHVAxvfZGqDJYF8sAIyfaMRWzmo0I0rpvxGGh4yMygFEHMclu2PsqUtPCxinHcWMqHBgChipgMBctreeDDTjpVqqeYqVHB6KBM6q8OY7rrMROfXXXJ2HUW+yJrKmz0Q+zeW3yWxyv78al71C0673pFfiNxuKBj/am4SVc2m7dsfmSPrFRUQfURD14uUFQBcjciVR/QKcKP/K1V7GQVJApaI+yhQy+Aew/4Dmmvi+HtCSNSW19ciAaaG8wiGajPhsBuw4wuVSx272oQnWwA1onALmDqD/utZ7/1fZHBv2zu+yFeO+XA10TCpfX0DhcIFzDQXADtjzsg+HRxeArFW9n4cN+5tzh7IjSI9THc02X/oG3gQgMRGAgAu+VCPwX4vRTfPuLJNQAAAAASUVORK5CYII=',
      yuanbao: 'data:image/png;base64,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',
      doubao: 'data:image/png;base64,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',
      wenxin: 'data:image/png;base64,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',
    };
    /** Providers used for row badges and the Chat-list filter. Brand names stay. */
    const CHAT_PROVIDERS = [
      { id: 'deepseek', label: 'DeepSeek' },
      { id: 'yuanbao', label: '元宝' },
      { id: 'doubao', label: '豆包' },
      { id: 'wenxin', label: '文心一言' },
    ];
    /** Chat-tab target options; labels are brand names (not localized). */
    const CHAT_MODELS = [
      { id: 'deepseek', label: 'DeepSeek', url: 'https://chat.deepseek.com/' },
      { id: 'yuanbao', label: '元宝', url: 'https://yuanbao.tencent.com/chat/naQivTmsDa' },
      { id: 'doubao', label: '豆包', url: 'https://www.doubao.com/chat' },
      { id: 'wenxin', label: '文心一言', url: 'https://wenxin.baidu.com/?enter_type=sidebar_dialog' },
    ];
    /** Automation Tasks' "New" buttons (header + empty state), both locales. */
    const AUTOMATION_NEW_LABELS = new Set(['新建', '新建自动化任务', 'New', 'New automation task']);
    const RECENT_LIMIT = 5;
    const SUGGEST_LIMIT = 6;
    const DEFAULT_HOSTS = [
      'https://chat.deepseek.com/',
      'https://www.deepseek.com/',
      'https://chat.deepseek.com/sign_in',
    ];
    const HISTORY_LIMIT = 200;
    const MAX_TABS = 8;
    const MAX_COMPOSE_FILES = 10;
    const MAX_COMPOSE_FILE_BYTES = 10 * 1024 * 1024;
    /** How long the "sent this round" retry panel stays before it self-clears. */
    const COMPOSE_RECORD_TTL_MS = 60000;
    /** A transfer that never settles is reported as retryable after this long. */
    const COMPOSE_STUCK_MS = 30000;
    /** Delay between filling the page and clicking its send button. */
    const COMPOSE_SEND_DELAY_MS = 5000;
    /** Delay before the supplementary focus+Enter send attempt. */
    const COMPOSE_ENTER_FALLBACK_MS = 3000;
    const ZOOM_MIN = 0.5;
    const ZOOM_MAX = 2;
    const ZOOM_STEP = 0.1;
    const ZOOM_PRESETS = [0.8, 1, 1.25, 1.5];
    // chat.deepseek.com keeps its locale and auth token in localStorage:
    //   __appKit_@deepseek/chat_localePreference  -> {"value":"zh_CN","__version":"0"}
    //   userToken                                 -> {"value":"<token>","__version":"0"}
    const LOCALE_KEY = '__appKit_@deepseek/chat_localePreference';
    const TOKEN_KEY = 'userToken';
    const LANGUAGES = [
      { id: 'zh_CN', zh: '中文', en: '中文' },
      { id: 'en_US', zh: 'English', en: 'English' },
      { id: 'system', zh: '跟随系统', en: 'System' },
    ];
    /** Cross-surface channel: request a fresh DeepSeek conversation from any Harness view. */
    const newChatChannel = { pending: false, listeners: new Set() };
    /** Cross-surface channel: open one history entry in the embedded DeepSeek panel. */
    const openChatChannel = { pending: null, listeners: new Set() };
    function requestOpenChat(url) {
      if (typeof url !== 'string' || url.length === 0) return;
      openChatChannel.pending = url;
      for (const listener of [...openChatChannel.listeners]) {
        try {
          listener();
        } catch {
          // A stale listener must not break the click.
        }
      }
    }
    /** Cross-surface channel: the shared history store changed (visit or clear). */
    const historyChannel = { listeners: new Set() };
    function notifyHistory(next) {
      for (const listener of [...historyChannel.listeners]) {
        try {
          listener(next);
        } catch {
          // Ignore stale listeners.
        }
      }
    }
    /** Currently displayed Chat page, shared with the sidebar Chat history list. */
    const activePageStore = { url: '', listeners: new Set() };
    function setActivePage(url) {
      const next = typeof url === 'string' ? url : '';
      if (next === activePageStore.url) return;
      activePageStore.url = next;
      for (const listener of [...activePageStore.listeners]) {
        try {
          listener(next);
        } catch {
          // Ignore stale listeners.
        }
      }
    }
    /** Sidebar directory mode, shared so opening DeepSeek Chat can switch to Chat. */
    const directoryModeChannel = { listeners: new Set() };
    function setDirectoryMode(mode) {
      const value = mode === 'chat' ? 'chat' : 'harness';
      writeApp(DIRECTORY_MODE_KEY, value);
      for (const listener of [...directoryModeChannel.listeners]) {
        try {
          listener(value);
        } catch {
          // Ignore stale listeners.
        }
      }
    }
    /** Compare page URLs ignoring a trailing slash and hash. */
    function pageKey(url) {
      if (typeof url !== 'string' || url.length === 0) return '';
      try {
        const parsed = new URL(url);
        return `${parsed.origin}${parsed.pathname.replace(/\/+$/, '')}${parsed.search}`;
      } catch {
        return url;
      }
    }
    /** DeepSeek conversation id from a `chat.deepseek.com` URL, or null. */
    function chatConversationId(url) {
      if (typeof url !== 'string' || url.length === 0) return null;
      try {
        const parsed = new URL(url);
        if (parsed.hostname !== 'chat.deepseek.com') return null;
        const match = /\/a\/chat\/s\/([^/?#]+)/.exec(parsed.pathname);
        if (match !== null) return decodeURIComponent(match[1]);
        return parsed.searchParams.get('chat_id') ?? parsed.searchParams.get('session_id') ?? null;
      } catch {
        return null;
      }
    }
    /**
     * DeepSeek pages without any conversation id are blank/new-chat surfaces
     * (the landing page, ?new=0, sign-in, …) and are noise in the Chat list.
     */
    /**
     * Conversation id for one of the supported chat providers. Returns:
     *   a string  — a real conversation (keep it),
     *   null      — a supported provider's blank/new-chat page (hide it),
     *   'other'   — an unrelated site (always keep).
     */
    function chatThreadId(url) {
      if (typeof url !== 'string' || url.length === 0) return 'other';
      try {
        const parsed = new URL(url);
        const host = parsed.hostname;
        if (host === 'chat.deepseek.com') return chatConversationId(url);
        const segments = parsed.pathname.split('/').filter((part) => part.length > 0);
        if (host === 'www.doubao.com' || host === 'doubao.com') {
          return segments[0] === 'chat' && segments.length >= 2 ? segments[1] : null;
        }
        /* Wenxin's SPA keeps the conversation in app state, so its URLs carry
           no id: treat every Wenxin page as a real entry instead of hiding it. */
        if (host === 'wenxin.baidu.com') return 'wenxin';
        if (host === 'yuanbao.tencent.com') {
          if (segments[0] !== 'chat' || segments.length < 2) return null;
          /* `naQivTmsDa` is Yuanbao's default blank-session entry; a real
             conversation appends its own id after it. */
          if (segments[1] === 'naQivTmsDa') return segments.length >= 3 ? segments[2] : null;
          return segments[1];
        }
        return 'other';
      } catch {
        return 'other';
      }
    }
    function providerOf(url) {
      try {
        const host = new URL(url).hostname;
        if (host === 'chat.deepseek.com') return CHAT_PROVIDERS[0];
        if (host === 'yuanbao.tencent.com') return CHAT_PROVIDERS[1];
        if (host === 'www.doubao.com' || host === 'doubao.com') return CHAT_PROVIDERS[2];
        if (host === 'wenxin.baidu.com') return CHAT_PROVIDERS[3];
        return null;
      } catch {
        return null;
      }
    }
    function providerById(id) {
      return CHAT_PROVIDERS.find((provider) => provider.id === id) ?? null;
    }
    function readChatFilter() {
      const value = readApp(CHAT_FILTER_KEY, 'all');
      return value === 'all' || value === 'other' || providerById(value) !== null ? value : 'all';
    }
    function writeChatFilter(value) {
      const next = value === 'all' || value === 'other' || providerById(value) !== null ? value : 'all';
      writeApp(CHAT_FILTER_KEY, next);
    }
    /** Blank/new-chat pages of DeepSeek, Yuanbao and Doubao are list noise. */
    function isTransientChatPage(url) {
      return chatThreadId(url) === null;
    }
    /** Copy text through the async Clipboard API, falling back to execCommand. */
    async function writeClipboard(text) {
      if (typeof text !== 'string' || text.length === 0) return false;
      try {
        if (navigator.clipboard !== undefined && typeof navigator.clipboard.writeText === 'function') {
          await navigator.clipboard.writeText(text);
          return true;
        }
      } catch {
        // Fall through to the selection-based fallback.
      }
      try {
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        const ok = document.execCommand('copy');
        area.remove();
        return ok === true;
      } catch {
        return false;
      }
    }
    /**
     * Opening an entry from the Chat list must not rewrite its stored visit time
     * (or reorder the list); the next navigation to that page is skipped.
     */
    const historySuppression = { key: '', until: 0 };
    function suppressHistoryVisit(url) {
      historySuppression.key = pageKey(url);
      historySuppression.until = Date.now() + 15000;
    }
    function isHistoryVisitSuppressed(url) {
      if (historySuppression.key === '') return false;
      if (Date.now() > historySuppression.until) {
        historySuppression.key = '';
        return false;
      }
      return pageKey(url) === historySuppression.key;
    }
    /** Cross-surface channel: hand hero-composer text/files to the embedded Chat page. */
    const composeChannel = { pending: null, listeners: new Set(), resultListeners: new Set() };
    function requestCompose(payload) {
      if (payload === null || typeof payload !== 'object') return;
      composeChannel.pending = {
        text: typeof payload.text === 'string' ? payload.text : '',
        files: Array.isArray(payload.files) ? payload.files.slice(0, MAX_COMPOSE_FILES) : [],
        target: typeof payload.target === 'string' && payload.target.length > 0 ? payload.target : '',
        model: typeof payload.model === 'string' ? payload.model : 'deepseek',
      };
      for (const listener of [...composeChannel.listeners]) {
        try {
          listener();
        } catch {
          // A stale listener must not break the click.
        }
      }
    }
    function publishComposeResult(result) {
      const value = result !== null && typeof result === 'object' ? result : { ok: false };
      for (const listener of [...composeChannel.resultListeners]) {
        try {
          listener(value);
        } catch {
          // Ignore stale listeners.
        }
      }
    }
    function requestNewChat() {
      newChatChannel.pending = true;
      for (const listener of [...newChatChannel.listeners]) {
        try {
          listener();
        } catch {
          // A stale listener must not break the click.
        }
      }
    }
    /** Chrome-shaped UA: keeps the real Chromium version, drops the Electron token. */
    const GUEST_UA = (() => {
      const base = navigator.userAgent;
      const version = /Chrome\/([\d.]+)/.exec(base)?.[1] ?? '140.0.0.0';
      const platform = base.includes('Macintosh')
        ? 'Macintosh; Intel Mac OS X 10_15_7'
        : base.includes('Windows')
          ? 'Windows NT 10.0; Win64; x64'
          : 'X11; Linux x86_64';
      return `Mozilla/5.0 (${platform}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${version} Safari/537.36`;
    })();
    let tabSeq = 0;
    const nextTabId = () => `tab-${Date.now().toString(36)}-${(tabSeq += 1)}`;
    const zh = {
      panel: 'DeepSeek Chat', title: 'DeepSeek Chat', loading: '正在载入 DeepSeek Chat…', retry: '重新载入',
      harness: '返回 Harness', unavailable: '当前环境没有 Desktop 浏览器桥接，无法在应用内嵌入网页。',
      settings: '设置', zoom: '页面缩放', zoomIn: '放大', zoomOut: '缩小', reset: '重置', close: '关闭',
      language: '浏览器语言', login: '保存登录状态', loginOn: '已开启', loginOff: '已关闭',
      clearLogin: '清除已保存的登录', cleared: '已清除',
      loginHint: '重启后仍可能需重新登录：站点登录 cookie 为 HttpOnly，插件无法保存。',
      diagTitle: '登录恢复诊断', diagSnapshot: '快照', diagLive: '当前页面', diagYes: '有令牌', diagNo: '无令牌', diagRestored: '已回填', diagNotRestored: '未回填',
      history: '历史记录', today: '今天', yesterday: '昨天', earlier: '更早',
      directory: '会话目录', directoryHarness: 'Harness 会话', directoryChat: 'DeepSeek Chat 历史', more: '更多',
      pinned: '置顶', pin: '置顶会话', unpin: '取消置顶', rename: '重命名', removeEntry: '移除记录', pinnedState: '已置顶',
      copyLink: '复制对话链接', copied: '已复制', copyFailed: '复制失败',
      heroMode: '新会话模式', heroHarness: 'Harness 新会话', heroChat: '发送到 DeepSeek Chat',
      composePlaceholder: '发消息到所选对话模型，发送后填入网页输入框',
      composeAttach: '添加图片或文件', composeRemove: '移除附件', composeSend: '发送到 DeepSeek 页面',
      composeDone: '已发送到对话页面', composeFailed: '未能发送到对话页面',
      composePartial: '已发送，但部分内容可能未填入对话页面',
      composeNoInput: '没找到对话输入框，请先登录或打开对话页面',
      composeTooLarge: '附件过大，单个附件最多 10MB',
      chatModel: '对话模型',
      sentTitle: '本轮发送内容', sentExpires: '{s} 秒后关闭', sendingToChat: '正在发送到对话窗口…', sentToChat: '已发送到对话窗口', sentFailed: '发送失败，可重试', retrySend: '再次发送到对话窗口',
      fillingToChat: '正在填入网页…', contentReady: '内容已填入网页，等待自动发送', sendInSec: '{s} 秒后点击发送', clickingSend: '正在点击发送…',
      enterInSec: '{s} 秒后回车补充发送', enterSending: '正在回车补充发送…',
      pinnedLabel: '已钉住 · 倒计时已暂停', pinPanel: '钉住（暂停倒计时，保留数据）', unpinPanel: '取消钉住（继续倒计时）',
      previewAttachment: '查看附件', downloadAttachment: '下载附件',
      emptyHistory: '还没有浏览记录', clearHistory: '清空历史',
      filterModels: '按模型筛选', filterAll: '全部模型', filterOther: '其他', filterEmpty: '没有匹配的浏览记录',
      newTab: '新建标签', closeTab: '关闭标签', untitled: '新标签', refresh: '刷新', address: '地址', back: '后退', forward: '前进', summarize: '总结', summarizeHint: '总结此页内容', askDeepSeek: '问 deepseek', newConversation: '新对话',
      askNoContext: '默认不带上下文', askWithContext: '带上下文（助手最后回复）',
      askMenu: '更多方式', contextEmpty: '没有可用的对话内容', fillFailed: '未能写入 DeepSeek 对话框', summaryFailed: '没找到 DeepSeek 输入框，请确认当前是 Chat 页面',
      favorites: '收藏夹', bookmark: '收藏', bookmarked: '已收藏', removeBookmark: '移除收藏',
      emptyBookmarks: '还没有收藏', recent: '最近访问', suggest: '联想', openTyped: '打开输入地址',
    };
    const en = {
      panel: 'DeepSeek Chat', title: 'DeepSeek Chat', loading: 'Loading DeepSeek Chat…', retry: 'Reload',
      harness: 'Back to Harness', unavailable: 'This environment has no Desktop browser bridge, so an embedded page is unavailable.',
      settings: 'Settings', zoom: 'Page zoom', zoomIn: 'Zoom in', zoomOut: 'Zoom out', reset: 'Reset', close: 'Close',
      language: 'Browser language', login: 'Save sign-in', loginOn: 'On', loginOff: 'Off',
      clearLogin: 'Clear saved sign-in', cleared: 'Cleared',
      loginHint: 'Re-sign-in may still be required after a restart: the site keeps its auth cookie HttpOnly, so the plugin cannot save it.',
      diagTitle: 'Sign-in restore diagnostics', diagSnapshot: 'Snapshot', diagLive: 'Live page', diagYes: 'has token', diagNo: 'no token', diagRestored: 'restored', diagNotRestored: 'not restored',
      history: 'History', today: 'Today', yesterday: 'Yesterday', earlier: 'Earlier',
      directory: 'Session directory', directoryHarness: 'Harness sessions', directoryChat: 'DeepSeek Chat history', more: 'More',
      pinned: 'Pinned', pin: 'Pin session', unpin: 'Unpin', rename: 'Rename', removeEntry: 'Remove from history', pinnedState: 'Pinned',
      copyLink: 'Copy conversation link', copied: 'Copied', copyFailed: 'Copy failed',
      heroMode: 'New session mode', heroHarness: 'Harness session', heroChat: 'Send to DeepSeek Chat',
      composePlaceholder: 'Message the selected chat model; Send fills it into the page',
      composeAttach: 'Add images or files', composeRemove: 'Remove attachment', composeSend: 'Send to the DeepSeek page',
      composeDone: 'Sent to the chat page', composeFailed: 'Could not send to the chat page',
      composePartial: 'Sent, but part of the content may not have reached the chat page',
      composeNoInput: 'Chat composer not found; sign in or open the chat page',
      composeTooLarge: 'Attachment too large; one attachment may be at most 10MB',
      chatModel: 'Chat model',
      sentTitle: 'Sent in this round', sentExpires: 'Closes in {s}s', sendingToChat: 'Sending to conversation…', sentToChat: 'Sent to conversation', sentFailed: 'Send failed; you can retry', retrySend: 'Send to conversation again',
      fillingToChat: 'Filling the page…', contentReady: 'Content is in the page; waiting to send', sendInSec: 'Clicking Send in {s}s', clickingSend: 'Clicking Send…',
      enterInSec: 'Pressing Enter in {s}s as a fallback', enterSending: 'Pressing Enter as a fallback…',
      pinnedLabel: 'Pinned · countdown paused', pinPanel: 'Pin (pause countdown and keep data)', unpinPanel: 'Unpin (resume countdown)',
      previewAttachment: 'View attachment', downloadAttachment: 'Download attachment',
      emptyHistory: 'No pages yet', clearHistory: 'Clear history',
      filterModels: 'Filter by model', filterAll: 'All models', filterOther: 'Other', filterEmpty: 'No matching pages',
      newTab: 'New tab', closeTab: 'Close tab', untitled: 'New tab', refresh: 'Refresh', address: 'Address', back: 'Back', forward: 'Forward', summarize: 'Summarize', summarizeHint: 'Summarize this page', askDeepSeek: 'Ask DeepSeek', newConversation: 'New chat',
      askNoContext: 'Default, no context', askWithContext: 'With context (last assistant reply)',
      askMenu: 'More options', contextEmpty: 'No conversation context available', fillFailed: 'Could not write into the DeepSeek composer', summaryFailed: 'DeepSeek composer not found; make sure the Chat page is active',
      favorites: 'Bookmarks', bookmark: 'Bookmark', bookmarked: 'Bookmarked', removeBookmark: 'Remove bookmark',
      emptyBookmarks: 'No bookmarks yet', recent: 'Recent', suggest: 'Suggestions', openTyped: 'Open typed address',
    };
    const CSS = `
.dsc-root{height:100%;min-height:0;display:flex;flex-direction:column;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font-size:13px;line-height:1.5}
.dsc-head{flex:none;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 12px 8px max(12px, var(--dsh-frame-leading-clearance, 12px));-webkit-app-region:no-drag;border-bottom:1px solid var(--dsw-alias-border-l1)}
.dsc-leading{display:flex;align-items:center;gap:8px;min-width:0}
.dsc-title{font-size:13px;font-weight:600;margin:0;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsc-actions{display:flex;align-items:center;gap:8px;flex:none}
.dsc-button{appearance:none;border:1px solid var(--dsw-alias-border-l1);border-radius:6px;padding:5px 10px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);font:inherit;cursor:pointer}
.dsc-button:hover{background:var(--dsw-alias-bg-layer-2)}
.dsc-icon-button{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:1px solid var(--dsw-alias-border-l1);border-radius:6px;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-1);cursor:pointer}
.dsc-icon-button:hover{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-2)}
.dsc-icon-button[aria-expanded="true"]{color:var(--dsw-alias-brand-primary);border-color:var(--dsw-alias-brand-primary)}
.dsc-settings{position:relative;display:inline-flex}
.dsc-tabbar{flex:none;display:flex;align-items:center;gap:6px;margin:0 8px 6px max(8px, var(--dsh-frame-leading-clearance, 8px));-webkit-app-region:no-drag}
.dsc-tabs{display:flex;align-items:center;gap:2px;min-width:0;padding:4px;border-radius:var(--dsw-radius-md);background:var(--dsw-alias-interactive-bg-hover);overflow-x:auto;scrollbar-width:thin}
.dsc-tab{display:flex;align-items:center;flex:none;max-width:220px;border-radius:var(--dsw-radius-sm);background:transparent}
.dsc-tab--active{background:var(--dsw-alias-bg-layer-1);box-shadow:var(--dsw-elevation-soft)}
.dsc-tab-label{appearance:none;border:0;border-radius:var(--dsw-radius-sm);background:0 0;color:var(--dsw-alias-label-secondary);font:inherit;font-size:13px;line-height:20px;font-weight:500;height:28px;max-width:184px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 4px 0 12px;cursor:pointer;transition:color .12s ease}
.dsc-tab-label:hover,.dsc-tab--active .dsc-tab-label{color:var(--dsw-alias-label-primary)}
.dsc-tab--active .dsc-tab-label{font-weight:600}
.dsc-tab-label:focus-visible{outline:var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));outline-offset:-2px}
.dsc-tab-close{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;margin-right:4px;border:0;border-radius:var(--dsw-radius-sm);background:0 0;color:var(--dsw-alias-label-tertiary);font:inherit;font-size:13px;line-height:1;cursor:pointer}
.dsc-tab-close:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
.dsc-tab-add{appearance:none;flex:none;display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border:0;border-radius:var(--dsw-radius-sm);background:0 0;color:var(--dsw-alias-label-secondary);font:inherit;font-size:15px;line-height:1;cursor:pointer}
.dsc-tab-add:hover:not(:disabled){background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}
.dsc-tab-add:disabled{opacity:.4;cursor:default}
.dsc-address{flex:auto;min-width:0;display:flex;align-items:center;gap:2px}
.dsc-address-tool{appearance:none;flex:none;display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border:0;border-radius:var(--dsw-radius-sm);background:0 0;color:var(--dsw-alias-label-quaternary);cursor:pointer;transition:color .12s ease,background .12s ease}
.dsc-address:hover .dsc-address-tool,.dsc-address-tool:focus-visible{color:var(--dsw-alias-label-secondary)}
.dsc-address-tool:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
.dsc-address-tool:disabled{opacity:.35;cursor:default;background:0 0}
.dsc-address-input{appearance:none;flex:auto;min-width:0;box-sizing:border-box;height:26px;padding:0 8px;border:.5px solid transparent;border-radius:var(--dsw-radius-sm);background:transparent;color:var(--dsw-alias-label-tertiary);font:inherit;font-size:12px;line-height:20px;text-overflow:ellipsis;cursor:text;transition:background .12s ease,border-color .12s ease,color .12s ease}
.dsc-address-input::placeholder{color:var(--dsw-alias-label-quaternary)}
.dsc-address-input:hover{background:var(--dsw-alias-bg-layer-1);border-color:var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary)}
.dsc-address-input:focus{outline:none;background:var(--dsw-alias-bg-layer-1);border-color:var(--dsw-alias-brand-primary);color:var(--dsw-alias-label-primary)}
.dsc-address-star{appearance:none;flex:none;display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border:0;border-radius:var(--dsw-radius-sm);background:0 0;color:var(--dsw-alias-label-quaternary);cursor:pointer;transition:color .12s ease,background .12s ease}
.dsc-address-star:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary)}
.dsc-address-star[aria-pressed="true"]{color:var(--dsw-alias-state-warning-primary, var(--dsw-alias-brand-primary))}
.dsc-address{position:relative}
.dsc-suggest{position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:40;display:flex;flex-direction:column;gap:2px;padding:6px;border:1px solid var(--dsw-alias-border-l1);border-radius:var(--dsw-radius-md);background:var(--dsw-alias-bg-layer-2);box-shadow:0 10px 28px rgba(0,0,0,.22);-webkit-app-region:no-drag}
.dsc-suggest-head{font-size:11px;color:var(--dsw-alias-label-quaternary);padding:2px 6px}
.dsc-suggest-row{appearance:none;display:flex;flex-direction:column;gap:1px;width:100%;padding:5px 8px;border:0;border-radius:var(--dsw-radius-sm);background:0 0;color:inherit;font:inherit;text-align:left;cursor:pointer}
.dsc-suggest-row:hover{background:var(--dsw-alias-interactive-bg-hover)}
.dsc-suggest-title{font-size:12px;color:var(--dsw-alias-label-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsc-suggest-url{font-size:11px;color:var(--dsw-alias-label-tertiary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsc-bookmarks{display:flex;flex-direction:column;gap:2px;max-height:min(46vh, 420px);overflow:auto}
.dsc-bookmark{display:flex;align-items:center;gap:4px}
.dsc-bookmark-open{flex:auto;min-width:0}
.dsc-bookmark-remove{appearance:none;flex:none;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border:0;border-radius:var(--dsw-radius-sm);background:0 0;color:var(--dsw-alias-label-quaternary);font:inherit;font-size:13px;line-height:1;cursor:pointer}
.dsc-bookmark-remove:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
.dsc-summary{appearance:none;flex:none;display:inline-flex;align-items:center;justify-content:center;height:26px;padding:0 10px;border:.5px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;font-weight:500;cursor:pointer;transition:color .12s ease,background .12s ease}
.dsc-summary:hover{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-hover)}
.dsc-login-hint{margin:0;font-size:11px;line-height:1.5;color:var(--dsw-alias-label-tertiary)}
.dsc-diag{display:flex;flex-direction:column;gap:2px;padding:6px 8px;border:1px solid var(--dsw-alias-border-l1);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-1);font-size:11px;line-height:1.5;color:var(--dsw-alias-label-secondary)}
.dsc-notice{flex:none;font-size:11px;color:var(--dsw-alias-state-error-primary);white-space:nowrap}
button.dsc-ask.dsc-ask{box-sizing:border-box;appearance:none;display:inline-flex;flex:0 0 auto;align-items:center;justify-content:center;align-self:center;width:auto;min-width:max-content;height:24px;min-height:24px;max-height:24px;margin:0;padding:3px 10px 3px 8px;border:.5px solid var(--dsw-alias-border-l4);border-radius:var(--dsw-radius-sm);background:transparent;color:var(--dsw-alias-label-primary);font-family:var(--dsw-font-family);font-size:12px;line-height:16px;font-weight:400;letter-spacing:normal;text-align:center;text-transform:none;white-space:nowrap;overflow:visible;cursor:pointer;transition:color .12s ease,background .12s ease;gap:6px}
button.dsc-ask.dsc-ask>svg{flex:none;display:block}
.dsc-ask-split{position:relative;display:inline-flex;align-items:center;order:9999;margin-left:auto}
.dsc-ask-split button.dsc-ask.dsc-ask{border-radius:var(--dsw-radius-sm) 0 0 var(--dsw-radius-sm)}
.dsc-ask-caret{box-sizing:border-box;appearance:none;display:inline-flex;align-items:center;justify-content:center;height:24px;padding:0 5px;border:.5px solid var(--dsw-alias-border-l4);border-left:0;border-radius:0 var(--dsw-radius-sm) var(--dsw-radius-sm) 0;background:0 0;color:var(--dsw-alias-label-secondary);font:inherit;font-size:10px;line-height:1;cursor:pointer}
.dsc-ask-caret:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
.dsc-ask-menu{position:absolute;top:calc(100% + 4px);right:0;z-index:50;min-width:210px;display:flex;flex-direction:column;gap:2px;padding:4px;border:1px solid var(--dsw-alias-border-l1);border-radius:var(--dsw-radius-md);background:var(--dsw-alias-bg-layer-2);box-shadow:0 10px 28px rgba(0,0,0,.22)}
.dsc-ask-item{appearance:none;text-align:left;padding:6px 8px;border:0;border-radius:var(--dsw-radius-sm);background:0 0;color:var(--dsw-alias-label-primary);font:inherit;font-size:12px;line-height:18px;cursor:pointer}
.dsc-ask-item:hover{background:var(--dsw-alias-interactive-bg-hover)}
.dsc-ask-notice{position:absolute;top:calc(100% + 4px);right:0;z-index:50;padding:4px 8px;border:1px solid var(--dsw-alias-border-l1);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-state-error-primary);font-size:11px;white-space:nowrap}
button.dsc-ask.dsc-ask:hover{background:var(--dsw-alias-interactive-bg-hover)}
button.dsc-ask.dsc-ask:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));outline-offset:-2px}
.dsc-sidebar{display:flex;flex-direction:column;height:100%;min-height:100%}
.dsc-sidebar-bar{flex:none;display:flex;align-items:center;gap:2px;padding:4px 6px;border-bottom:1px solid var(--dsw-alias-border-l1);-webkit-app-region:no-drag}
.dsc-sidebar-address{flex:auto;min-width:0;padding:0 8px;font-size:12px;line-height:20px;color:var(--dsw-alias-label-tertiary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsc-tip{position:fixed;z-index:60;max-width:420px;padding:6px 9px;border:1px solid var(--dsw-alias-border-l1);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-elevation-soft);color:var(--dsw-alias-label-primary);font-size:11px;line-height:1.45;pointer-events:none}
.dsc-tip-title{font-weight:600;margin-bottom:2px;overflow-wrap:anywhere}
.dsc-tip-url{color:var(--dsw-alias-label-tertiary);word-break:break-all}
.dsc-popover{position:absolute;top:calc(100% + 6px);right:0;z-index:30;width:264px;max-height:min(76vh,620px);overflow-y:auto;box-sizing:border-box;display:flex;flex-direction:column;gap:10px;padding:12px;-webkit-app-region:no-drag;border:1px solid var(--dsw-alias-border-l1);border-radius:9px;background:var(--dsw-alias-bg-layer-2);box-shadow:0 10px 28px rgba(0,0,0,.22)}
.dsc-popover .dsc-segment{flex-wrap:wrap}
.dsc-popover .dsc-segment button{min-width:0;overflow-wrap:anywhere}
.dsc-popover-history{left:0;right:auto;width:320px;gap:8px}
.dsc-history-list{display:flex;flex-direction:column;gap:2px;max-height:min(56vh, 620px);overflow:auto;overscroll-behavior:contain}
.dsc-dismiss{position:absolute;inset:0;z-index:20;-webkit-app-region:no-drag;background:0 0}
.dsc-group{border:0}
.dsc-group>summary{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:5px 4px;font-size:12px;color:var(--dsw-alias-label-secondary);cursor:pointer;list-style:none}
.dsc-group>summary::-webkit-details-marker{display:none}
.dsc-group>summary:hover{color:var(--dsw-alias-label-primary)}
.dsc-group-count{font-variant-numeric:tabular-nums;font-size:11px;color:var(--dsw-alias-label-quaternary)}
.dsc-entry{appearance:none;display:flex;flex-direction:column;gap:2px;width:100%;padding:6px 8px;border:0;border-radius:6px;background:0 0;color:inherit;font:inherit;text-align:left;cursor:pointer}
.dsc-entry:hover{background:var(--dsw-alias-bg-layer-1)}
.dsc-entry-title{font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsc-entry-url{font-size:11px;color:var(--dsw-alias-label-tertiary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsc-entry-time{font-size:11px;color:var(--dsw-alias-label-quaternary);font-variant-numeric:tabular-nums}
.dsc-history-empty{padding:16px 4px;text-align:center;font-size:12px;color:var(--dsw-alias-label-tertiary)}
.dsc-popover-title{font-size:12px;font-weight:600;margin:0}
.dsc-row{display:flex;align-items:center;justify-content:space-between;gap:10px}
.dsc-hint{font-size:12px;color:var(--dsw-alias-label-secondary)}
.dsc-divider{height:1px;background:var(--dsw-alias-border-l1);margin:0}
.dsc-segment{display:flex;gap:4px}
.dsc-segment button{flex:1;appearance:none;padding:4px 6px;border:1px solid var(--dsw-alias-border-l1);border-radius:6px;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-1);font:inherit;font-size:12px;cursor:pointer}
.dsc-segment button:hover{background:var(--dsw-alias-bg-layer-2)}
.dsc-segment button[aria-pressed="true"]{border-color:var(--dsw-alias-brand-primary);color:var(--dsw-alias-brand-primary)}
.dsc-stepper{display:flex;align-items:center;gap:6px}
.dsc-step{appearance:none;width:26px;height:26px;display:inline-flex;align-items:center;justify-content:center;padding:0;border:1px solid var(--dsw-alias-border-l1);border-radius:6px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);font:inherit;cursor:pointer}
.dsc-step:hover:not(:disabled){background:var(--dsw-alias-bg-layer-2)}
.dsc-step:disabled{color:var(--dsw-alias-label-quaternary);cursor:default}
.dsc-value{min-width:52px;text-align:center;font-variant-numeric:tabular-nums;font-weight:600}
.dsc-presets{display:flex;flex-wrap:wrap;gap:6px}
.dsc-preset{flex:1 1 44%;appearance:none;padding:4px 6px;border:1px solid var(--dsw-alias-border-l1);border-radius:6px;color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);font:inherit;font-size:12px;cursor:pointer}
.dsc-preset:hover{background:var(--dsw-alias-bg-layer-2)}
.dsc-preset[aria-pressed="true"]{border-color:var(--dsw-alias-brand-primary);color:var(--dsw-alias-brand-primary)}
.dsc-wide{width:100%;appearance:none;padding:5px 8px;border:1px solid var(--dsw-alias-border-l1);border-radius:6px;color:var(--dsw-alias-label-secondary);background:0 0;font:inherit;font-size:12px;cursor:pointer}
.dsc-wide:hover{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1)}
.dsc-body{flex:1 1 auto;min-height:0;position:relative;display:flex}
/* Sidebar Chat list and hero switch follow the same palette. */
.dsc-pane{position:absolute;inset:0;display:flex;flex-direction:column}
.dsc-pane[hidden]{display:none}
.dsc-pane-host{flex:auto;min-height:0;display:flex}
.dsc-guest{flex:auto;display:inline-flex;width:100%;height:100%;border:0;background:#fff}
.dsc-status{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:24px;text-align:center;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-base)}
.dsc-error{color:var(--dsw-alias-state-error-primary)}
.dsc-crash{margin:0;padding:16px;white-space:pre-wrap;word-break:break-word;font-size:12px;line-height:1.5;color:var(--dsw-alias-state-error-primary)}
/* Sent-round retry panel: floating Harness card over the embedded page. */
.dsc-sent{position:absolute;right:16px;bottom:16px;z-index:20;display:flex;flex-direction:column;width:344px;max-width:calc(100% - 32px);max-height:60%;border:1px solid var(--dsw-alias-border-l2);border-radius:var(--dsw-radius-panel);background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-elevation-panel);color:var(--dsw-alias-label-primary);overflow:hidden;font-size:12px}
.dsc-sent[data-pinned="true"]{border-color:var(--dsw-alias-brand-primary)}
.dsc-sent-head{flex:none;display:flex;align-items:center;gap:6px;padding:8px 8px 8px 12px;border-bottom:1px solid var(--dsw-alias-border-l1)}
.dsc-sent-title{flex:none;font-size:13px;font-weight:600;line-height:18px}
.dsc-sent-countdown{flex:1;min-width:0;text-align:right;color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:16px;font-variant-numeric:tabular-nums;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsc-sent[data-state="wait"] .dsc-sent-countdown{color:var(--dsw-alias-brand-primary);font-weight:500}
.dsc-sent-pin,.dsc-sent-close{appearance:none;display:inline-flex;align-items:center;justify-content:center;flex:none;width:24px;height:24px;padding:0;border:0;border-radius:var(--dsw-radius-sm);background:0 0;color:var(--dsw-alias-label-secondary);font:inherit;font-size:15px;line-height:1;cursor:pointer}
.dsc-sent-pin svg{width:14px;height:14px}
.dsc-sent-pin:hover,.dsc-sent-close:hover{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-hover)}
.dsc-sent-pin[aria-pressed="true"]{color:var(--dsw-alias-brand-primary)}
.dsc-sent-status{flex:none;margin:0;padding:6px 12px;font-size:11px;line-height:16px;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-1)}
.dsc-sent[data-state="failed"] .dsc-sent-status,.dsc-sent[data-state="partial"] .dsc-sent-status{color:var(--dsw-alias-state-error-primary)}
.dsc-sent[data-state="ok"] .dsc-sent-status{color:var(--dsw-alias-state-success-primary)}
.dsc-sent[data-state="wait"] .dsc-sent-status{color:var(--dsw-alias-label-primary)}
.dsc-sent-body{flex:auto;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:8px;padding:10px 12px}
.dsc-sent-text{margin:0;white-space:pre-wrap;word-break:break-word;overflow-wrap:anywhere;font-size:12px;line-height:18px;color:var(--dsw-alias-label-primary);max-height:160px;overflow:auto}
.dsc-sent-files{display:flex;flex-wrap:wrap;gap:6px}
.dsc-sent-file{appearance:none;display:inline-flex;align-items:center;gap:6px;max-width:100%;padding:4px 6px;border:.5px solid var(--dsw-alias-border-l1);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);font:inherit;font-size:11px;line-height:16px;text-align:left;cursor:pointer}
.dsc-sent-file:hover{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
.dsc-sent-thumb{flex:none;width:28px;height:28px;object-fit:cover;border-radius:4px}
.dsc-sent-file-name{min-width:0;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dsc-sent-file-size{flex:none;color:var(--dsw-alias-label-tertiary);font-variant-numeric:tabular-nums}
.dsc-sent-foot{flex:none;padding:8px 12px 10px;border-top:1px solid var(--dsw-alias-border-l1)}
.dsc-sent-retry{appearance:none;width:100%;height:32px;padding:0 12px;border:0;border-radius:var(--dsw-radius-md);background:var(--dsw-alias-button-primary-fill);color:var(--dsw-alias-label-primary-foreground,#fff);font:inherit;font-size:13px;line-height:20px;font-weight:500;cursor:pointer}
.dsc-sent-retry:hover:not(:disabled){background:var(--dsw-alias-button-primary-hover)}
.dsc-sent-retry:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-brand-primary));outline-offset:2px}
.dsc-sent-retry:disabled{opacity:.5;cursor:default}
.dsc-sent-preview{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;background:var(--dsw-alias-bg-layer-2)}
.dsc-sent-preview-head{flex:none;display:flex;align-items:center;gap:8px;padding:8px 8px 8px 12px;border-bottom:1px solid var(--dsw-alias-border-l1)}
.dsc-sent-preview-title{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;line-height:18px;font-weight:500}
.dsc-sent-preview-body{flex:auto;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:10px;background:var(--dsw-alias-bg-layer-1)}
.dsc-sent-preview-image{max-width:100%;max-height:100%;object-fit:contain;border-radius:var(--dsw-radius-sm)}
.dsc-sent-preview-meta{margin:0;font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary);word-break:break-all;text-align:center}
.dsc-sent-preview-foot{flex:none;padding:8px 12px 10px;border-top:1px solid var(--dsw-alias-border-l1)}
.dsc-sent-download{display:block;height:32px;padding:0 12px;border:1px solid var(--dsw-alias-border-l4);border-radius:var(--dsw-radius-md);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font-size:13px;line-height:30px;text-align:center;text-decoration:none}
.dsc-sent-download:hover{background:var(--dsw-alias-interactive-bg-hover)}
/* Sidebar session-directory mode switch: mounted above the native session list. */
.dsc-dir-mount{order:-1;flex:none;min-width:0;min-height:0;display:flex;flex-direction:column}
.dsc-dir-mount--chat{flex:1 1 auto}
.dsc-dir-chatmode > [data-slot="sidebar.workspaces"]{display:none !important}
.dsc-dirmode{display:flex;flex-direction:column;min-width:0;min-height:0}
.dsc-dirmode--chat{flex:1 1 auto;padding:0 0 8px}
.dsc-dirbar{flex:none;padding:6px 8px 6px 0}
.dsc-dirtabs{display:flex;align-items:center;gap:2px;padding:3px;border-radius:var(--dsw-radius-md);background:var(--dsw-alias-interactive-bg-hover)}
.dsc-dirtab{flex:1;appearance:none;height:24px;min-width:0;margin:0;padding:0 8px;border:0;border-radius:var(--dsw-radius-sm);background:0 0;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;line-height:1;font-weight:500;letter-spacing:.02em;cursor:pointer;transition:color .12s ease,background .12s ease}
.dsc-dirtab:hover{color:var(--dsw-alias-label-primary)}
.dsc-dirtab[aria-selected="true"]{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);box-shadow:var(--dsw-elevation-soft)}
.dsc-dirtab:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:-2px}
.dsc-dirchat{flex:auto;min-height:0;display:flex;flex-direction:column}
.dsc-dirchat-head{flex:none;display:flex;align-items:center;justify-content:space-between;gap:4px;height:36px;padding:0 8px 0 4px;color:var(--dsw-alias-label-tertiary)}
.dsc-dirchat-title{min-width:0;font-size:14px;line-height:20px;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsc-dirchat-actions{position:relative;display:flex;align-items:center;gap:4px;flex:none}
.dsc-dirchat-icon{appearance:none;display:inline-flex;align-items:center;justify-content:center;flex:none;width:28px;height:28px;padding:0;border:0;border-radius:var(--dsw-radius-sm);background:0 0;color:var(--dsw-alias-label-secondary);cursor:pointer}
.dsc-dirchat-icon:hover,.dsc-dirchat-icon[aria-expanded="true"]{background:var(--dsw-alias-interactive-bg-hover)}
.dsc-dirchat-icon[aria-expanded="true"]{color:var(--dsw-alias-label-primary)}
.dsc-dirchat-icon--filtered{color:var(--dsw-alias-brand-primary)}
.dsc-model-badge{display:block;flex:none;box-sizing:border-box;object-fit:contain;border-radius:4px;background:transparent}
.dsc-model-badge--yuanbao{border-radius:50%}
.dsc-model-badge--site{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;border-radius:4px;background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-secondary);font-weight:600;line-height:1;letter-spacing:0}
.dsc-entry .dsc-model-badge{margin-right:-2px}
.dsc-dirchat-menu--filter{min-width:168px}
.dsc-filter-count{margin-left:auto;flex:none;padding-left:6px;color:var(--dsw-alias-label-quaternary);font-size:11px;line-height:16px;font-variant-numeric:tabular-nums}
.dsc-dirrow-menu-item--checked{color:var(--dsw-alias-brand-primary);font-weight:600}
.dsc-dirrow-menu-item--checked .dsc-filter-count{color:inherit}
.dsc-dirchat-icon:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:-2px}
/* Chat menus reuse the native HARNESS session-row "more" menu surface:
   opaque bg-base backing + translucent material layer, like the portal menu. */
.dsc-dirchat-menu,.dsc-dirrow-menu{box-sizing:border-box;display:flex;flex-direction:column;gap:0;min-width:144px;max-width:360px;padding:4px;border:0;border-radius:var(--dsw-radius-lg);background:var(--dsw-alias-bg-base);--dsw-elevation-stroke-color:var(--dsw-alias-border-l1);box-shadow:var(--dsw-elevation-prominent);isolation:isolate;z-index:100}
.dsc-dirchat-menu::before,.dsc-dirrow-menu::before{content:"";position:absolute;inset:0;z-index:-1;border-radius:inherit;background:var(--dsw-menu-surface-fill);backdrop-filter:var(--dsw-menu-backdrop-filter);pointer-events:none}
.dsc-dirchat-menu{position:absolute;top:calc(100% + 4px);right:0}
.dsc-dirchat-menu-item,.dsc-dirrow-menu-item{display:flex;align-items:center;gap:6px;width:100%;min-height:34px;padding:6px 8px;border:0;border-radius:var(--dsw-radius-md);background:transparent;color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;line-height:20px;text-align:left;cursor:pointer}
.dsc-dirchat-menu-item:hover:not(:disabled),.dsc-dirrow-menu-item:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}
.dsc-dirchat-menu-item:focus-visible,.dsc-dirrow-menu-item:focus-visible{background:var(--dsw-alias-interactive-bg-hover);outline:none}
.dsc-dirchat-menu-item:disabled,.dsc-dirrow-menu-item:disabled{opacity:.4;cursor:not-allowed}
.dsc-dirrow-menu-item--danger{color:var(--dsw-alias-state-error-primary)}
.dsc-dirrow-menu-item--danger:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover-danger)}
.dsc-dir-menu-icon{display:inline-flex;flex:none;align-items:center;justify-content:center;width:14px;height:14px;color:var(--dsw-alias-menu-icon)}
.dsc-dir-menu-icon svg{width:14px;height:14px}
.dsc-dir-menu-label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dsc-dir-menu-dismiss{position:fixed;inset:0;z-index:90;background:transparent}
.dsc-dirchat-list{flex:auto;min-height:0;overflow:auto;overscroll-behavior:contain;display:flex;flex-direction:column;gap:1px;padding-bottom:4px}
.dsc-dirchat .dsc-group{border:0}
.dsc-dirchat .dsc-group>summary{display:flex;align-items:center;justify-content:space-between;gap:8px;height:28px;padding:0 8px;border-radius:var(--dsw-radius-sm);color:var(--dsw-alias-label-tertiary);font-size:13px;line-height:20px;cursor:pointer;list-style:none}
.dsc-dirchat .dsc-group>summary:hover{color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-interactive-bg-hover)}
.dsc-dirchat .dsc-group-count{flex:none;color:var(--dsw-alias-label-quaternary);font-size:12px;font-variant-numeric:tabular-nums}
.dsc-dirrow{position:relative;display:flex;align-items:center;min-width:0;border-radius:var(--dsw-radius-md)}
.dsc-dirchat .dsc-entry{box-sizing:border-box;display:flex;flex-direction:row;align-items:center;gap:8px;flex:1;min-width:0;height:32px;margin:0;padding:0 8px;border:0;border-radius:var(--dsw-radius-md);background:0 0;color:var(--dsw-alias-label-primary);font:inherit;font-size:14px;line-height:20px;text-align:left;cursor:pointer}
/* Native rows highlight the whole row (title + time + hover action buttons). */
.dsc-dirrow:hover,.dsc-dirrow--active{background:var(--dsw-alias-interactive-bg-hover)}
.dsc-dirchat .dsc-entry-title{flex:1;min-width:0;font-size:14px;line-height:20px;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsc-dirchat .dsc-entry-title[data-scrolled]{mask-image:linear-gradient(90deg,#0000,#000 12px)}
.dsc-dirchat .dsc-entry-title[data-clipped]{mask-image:linear-gradient(270deg,#0000,#000 12px)}
.dsc-dirchat .dsc-entry-title[data-scrolled][data-clipped]{mask-image:linear-gradient(90deg,#0000,#000 12px,#000 calc(100% - 12px),#0000)}
.dsc-dirchat .dsc-entry-time{flex:none;color:var(--dsw-alias-label-quaternary);font-size:11px;line-height:16px;font-variant-numeric:tabular-nums;transition:opacity .12s ease}
.dsc-dirrow:hover .dsc-entry-time,.dsc-dirrow[data-menu-open="true"] .dsc-entry-time{display:none}
.dsc-dirrow-actions{display:none;flex:none;align-items:center;gap:15px;padding-right:8px}
.dsc-dirrow:hover .dsc-dirrow-actions,.dsc-dirrow[data-menu-open="true"] .dsc-dirrow-actions,.dsc-dirrow-actions:focus-within{display:inline-flex}
.dsc-dirrow-more,.dsc-dirrow-pin-button{appearance:none;display:inline-flex;align-items:center;justify-content:center;flex:none;width:16px;height:16px;padding:0;border:0;border-radius:var(--dsw-radius-xs);background:0 0;color:var(--dsw-alias-label-tertiary);cursor:pointer;transition:color .12s ease}
.dsc-dirrow-more:hover,.dsc-dirrow-pin-button:hover,.dsc-dirrow-more[aria-expanded="true"]{color:var(--dsw-alias-label-primary)}
.dsc-dirrow-more:focus-visible,.dsc-dirrow-pin-button:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:-2px}
.dsc-dirrow-pin{flex:none;display:inline-flex;align-items:center;justify-content:center;width:16px;height:20px;margin-left:6px;margin-right:8px;color:var(--dsw-alias-label-caption)}
.dsc-dirrow:hover .dsc-dirrow-pin,.dsc-dirrow[data-menu-open="true"] .dsc-dirrow-pin{display:none}
.dsc-dirrow-tip{position:fixed;z-index:70;max-width:200px;padding:4px 8px;border:1px solid var(--dsw-alias-border-l1);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-2);box-shadow:var(--dsw-elevation-soft);color:var(--dsw-alias-label-primary);font-size:11px;line-height:16px;white-space:nowrap;pointer-events:none}
.dsc-dirrow-tip--error{color:var(--dsw-alias-state-error-primary)}
.dsc-dirrow-menu{position:absolute;top:calc(100% - 4px);right:3px}
.dsc-dirrow-menu--floating{position:fixed;right:auto;top:auto}
.dsc-dirrow-rename{flex:1;min-width:0;box-sizing:border-box;height:28px;margin:2px 8px;padding:0 6px;border:.5px solid var(--dsw-alias-border-l4);border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font:inherit;font-size:14px;line-height:20px;outline:none}
.dsc-dirrow-rename:focus{border-color:var(--dsw-alias-brand-primary)}
.dsc-dirchat .dsc-history-empty{padding:16px 8px;text-align:center;font-size:12px;color:var(--dsw-alias-label-tertiary)}
[data-sidebar-collapsed="true"] .dsc-dir-mount{display:none}
/* New-session hero: HARNESS/Chat mode switch and the Chat-only composer. */
.dsc-hero-switch-host,.dsc-hero-chat-host{display:contents}
.dsc-hero-switch{display:flex;justify-content:center;box-sizing:border-box;padding:0 var(--dsh-composer-side-clearance,16px)}
.dsc-hero-tabs{display:inline-flex;align-items:center;gap:2px;padding:3px;border-radius:var(--dsw-radius-md);background:var(--dsw-alias-interactive-bg-hover)}
.dsc-hero-tab{appearance:none;height:26px;margin:0;padding:0 16px;border:0;border-radius:var(--dsw-radius-sm);background:0 0;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;line-height:1;font-weight:500;letter-spacing:.02em;cursor:pointer;transition:color .12s ease,background .12s ease}
.dsc-hero-tab:hover{color:var(--dsw-alias-label-primary)}
.dsc-hero-tab[aria-selected="true"]{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-bg-layer-1);box-shadow:var(--dsw-elevation-soft)}
.dsc-hero-tab:focus-visible{outline:var(--dsw-focus-ring-width,2px) solid var(--dsw-focus-ring-color,var(--dsw-alias-state-business-primary));outline-offset:-2px}
.dsc-hero-chat{display:flex;flex-direction:column;align-items:center;box-sizing:border-box;margin-top:20px;padding:0 var(--dsh-composer-side-clearance,16px) 4px}
.dsc-hero-chat:not(.dsc-hero-chat--active){display:none}
.dsc-hero-chat-card{box-sizing:border-box;display:flex;flex-direction:column;width:100%;max-width:var(--dsh-composer-card-max-width);border-radius:var(--dsw-radius-panel);background:var(--dsw-specific-input-major,var(--dsw-alias-bg-layer-1));box-shadow:var(--dsw-elevation-soft);color:var(--dsw-alias-label-primary);font-size:var(--dsh-content-font-size,14px);line-height:22px;overflow:hidden}
.dsc-hero-chat-files{display:flex;flex-wrap:wrap;gap:6px;padding:10px 12px 0}
.dsc-hero-chat-file{position:relative;display:inline-flex;align-items:center;gap:6px;max-width:200px;padding:4px 8px;border-radius:var(--dsw-radius-sm);background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-secondary);font-size:12px;line-height:18px}
.dsc-hero-chat-file img{display:block;width:40px;height:40px;object-fit:cover;border-radius:var(--dsw-radius-sm)}
.dsc-hero-chat-file-name{max-width:110px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dsc-hero-chat-file-remove{appearance:none;display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;padding:0;border:0;border-radius:999px;background:0 0;color:var(--dsw-alias-label-tertiary);font:inherit;font-size:13px;line-height:1;cursor:pointer}
.dsc-hero-chat-file-remove:hover{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-hover)}
.dsc-hero-chat-input{box-sizing:border-box;width:100%;min-height:56px;max-height:200px;margin:0;padding:12px 14px 4px;border:0;outline:none;resize:none;background:0 0;color:var(--dsw-alias-label-primary);font:inherit;font-size:var(--dsh-content-font-size,14px);line-height:22px;caret-color:var(--dsw-alias-state-business-primary);overflow-y:auto}
.dsc-hero-chat-input::placeholder{color:var(--dsw-alias-label-caption)}
.dsc-hero-chat-row{display:flex;align-items:center;gap:10px;padding:2px 10px 8px}
.dsc-hero-chat-attach{appearance:none;display:grid;place-items:center;flex:none;width:28px;height:28px;padding:0;border:0;border-radius:999px;background:var(--dsw-specific-selector,var(--dsw-alias-interactive-bg-hover));color:var(--dsw-alias-label-primary);cursor:pointer}
.dsc-hero-chat-attach:hover{background:var(--dsw-alias-interactive-bg-hover-solid,var(--dsw-alias-interactive-bg-hover))}
.dsc-hero-chat-spacer{flex:1}
.dsc-hero-chat-send{appearance:none;display:grid;place-items:center;flex:none;width:34px;height:34px;padding:0;border:0;border-radius:999px;background:var(--dsw-alias-button-info-fill);color:#fff;cursor:pointer;transform:translateY(-2px);transition:background-color .1s ease}
.dsc-hero-chat-send:hover:not(:disabled){background:var(--dsw-alias-button-info-hover)}
.dsc-hero-chat-send:disabled{opacity:.4;cursor:default}
/* Chat model switcher: bottom-right of the Chat composer. */
.dsc-model-picker{position:relative;display:flex;align-items:center;flex:none}
.dsc-model-button{appearance:none;display:inline-flex;align-items:center;gap:5px;height:28px;padding:0 8px;border:0;border-radius:999px;background:0 0;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;line-height:18px;cursor:pointer;transition:background-color .12s ease,color .12s ease}
.dsc-model-button:hover,.dsc-model-button[aria-expanded="true"]{background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-primary)}
.dsc-model-button-label{white-space:nowrap}
.dsc-model-chevron{flex:none;opacity:.7}
.dsc-model-menu{position:fixed;z-index:1100;box-sizing:border-box;display:flex;flex-direction:column;gap:0;min-width:168px;padding:4px;border:0;border-radius:var(--dsw-radius-lg);background:var(--dsw-alias-bg-base);--dsw-elevation-stroke-color:var(--dsw-alias-border-l1);box-shadow:var(--dsw-elevation-prominent);isolation:isolate}
.dsc-model-menu::before{content:"";position:absolute;inset:0;z-index:-1;border-radius:inherit;background:var(--dsw-menu-surface-fill);backdrop-filter:var(--dsw-menu-backdrop-filter);pointer-events:none}
.dsc-model-item{display:flex;align-items:center;gap:6px;width:100%;min-height:34px;padding:6px 8px;border:0;border-radius:var(--dsw-radius-md);background:transparent;color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;line-height:20px;text-align:left;cursor:pointer}
.dsc-model-item:hover{background:var(--dsw-alias-interactive-bg-hover)}
.dsc-model-item-label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dsc-model-check{flex:none;color:var(--dsw-alias-brand-primary);font-size:12px;line-height:16px}
.dsc-hero-chat-notice{padding:6px 4px 0;font-size:11px;line-height:16px;color:var(--dsw-alias-label-tertiary);text-align:center}
.dsc-hero-chat-notice--error{color:var(--dsw-alias-state-error-primary)}
.dsc-hero-chat-file-input{display:none}
[data-dsc-hero-chat="true"] > [class*="heroWorkspaceRow"]{display:none !important}
[data-dsc-hero-chat="true"] > [data-slot="conversation.composer.bar"]{display:none !important}
[data-dsc-hero-chat="true"] > [data-slot="conversation.input.dock"]{display:none !important}
/* Rainbow focus ring for the Chat-mode composer, matching the Harness new-session ring. */
@property --dsc-rainbow-angle{syntax:"<angle>";inherits:false;initial-value:0deg}
@keyframes dsc-rainbow-spin{to{--dsc-rainbow-angle:360deg}}
.dsc-hero-chat-card{position:relative}
.dsc-hero-chat-card::before{content:"";position:absolute;inset:0;z-index:2;box-sizing:border-box;border-radius:var(--dsw-radius-panel);padding:2px;pointer-events:none;opacity:0;transition:opacity .16s ease;background:conic-gradient(from var(--dsc-rainbow-angle),#ff7f95 0deg,#ffb36b 55deg,#ffe58f 105deg,#7fd9b1 160deg,#78d3ec 215deg,#8fa9ff 270deg,#c79cff 320deg,#ff7f95 360deg);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;filter:drop-shadow(0 0 6px rgba(150,140,255,.28)) drop-shadow(0 0 16px rgba(120,190,255,.16));animation:dsc-rainbow-spin 3.6s linear infinite}
.dsc-hero-chat-card:has(.dsc-hero-chat-input:focus)::before{opacity:1}
@media (prefers-reduced-motion:reduce){.dsc-hero-chat-card::before{animation:none}}
@keyframes dsc-typing-pulse-a{
  0%{box-shadow:var(--dsw-elevation-soft),0 0 0 1.5px rgba(160,150,255,.55),0 0 22px 6px rgba(140,120,255,.34),0 0 44px 16px rgba(110,200,255,.2)}
  100%{box-shadow:var(--dsw-elevation-soft),0 0 0 1.5px rgba(160,150,255,0),0 0 22px 6px rgba(140,120,255,0),0 0 44px 16px rgba(110,200,255,0)}}
@keyframes dsc-typing-pulse-b{
  0%{box-shadow:var(--dsw-elevation-soft),0 0 0 1.5px rgba(160,150,255,.55),0 0 22px 6px rgba(140,120,255,.34),0 0 44px 16px rgba(110,200,255,.2)}
  100%{box-shadow:var(--dsw-elevation-soft),0 0 0 1.5px rgba(160,150,255,0),0 0 22px 6px rgba(140,120,255,0),0 0 44px 16px rgba(110,200,255,0)}}
.dsc-hero-chat-card[data-dsc-typing="a"]{animation:dsc-typing-pulse-a .55s ease-out}
.dsc-hero-chat-card[data-dsc-typing="b"]{animation:dsc-typing-pulse-b .55s ease-out}
@media (prefers-reduced-motion:reduce){.dsc-hero-chat-card[data-dsc-typing]{animation:none}}
`;
    function clampZoom(value) {
      if (!Number.isFinite(value)) return 1;
      const clamped = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, value));
      return Math.round(clamped * 100) / 100;
    }
    function readApp(key, fallback) {
      try {
        const raw = globalThis.localStorage?.getItem(key);
        return raw === null || raw === undefined ? fallback : JSON.parse(raw);
      } catch {
        return fallback;
      }
    }
    function writeApp(key, value) {
      try {
        globalThis.localStorage?.setItem(key, JSON.stringify(value));
      } catch {
        // Storage unavailable; the value still applies until the panel unmounts.
      }
    }
    /** Last selected Chat-tab target ("deepseek" by default). */
    function readChatModel() {
      const value = readApp(CHAT_MODEL_KEY, 'deepseek');
      return CHAT_MODELS.some((model) => model.id === value) ? value : 'deepseek';
    }
    function writeChatModel(id) {
      writeApp(CHAT_MODEL_KEY, id);
    }
    function chatModelById(id) {
      return CHAT_MODELS.find((model) => model.id === id) ?? CHAT_MODELS[0];
    }

    /**
     */
    function readZoom() {
      const value = readApp(ZOOM_KEY, 1);
      return clampZoom(typeof value === 'number' ? value : Number.parseFloat(value));
    }
    function readLang() {
      const value = readApp(LANG_KEY, 'zh_CN');
      return LANGUAGES.some((item) => item.id === value) ? value : 'zh_CN';
    }
    /** Sidebar directory mode: 'harness' (native sessions) or 'chat' (plugin history). */
    function readDirectoryMode() {
      return readApp(DIRECTORY_MODE_KEY, 'harness') === 'chat' ? 'chat' : 'harness';
    }
    /** New-session hero mode: the last selected 'harness' or 'chat' tab. */
    function readHeroMode() {
      return readApp(HERO_MODE_KEY, 'harness') === 'chat' ? 'chat' : 'harness';
    }
    function readPersistLogin() {
      return readApp(LOGIN_KEY, true) !== false;
    }
    function readSnapshot() {
      const value = readApp(SNAPSHOT_KEY, null);
      return value !== null && typeof value === 'object' ? value : null;
    }
    function readTabs() {
      const saved = readApp(TABS_KEY, null);
      const restored = Array.isArray(saved)
        ? saved
          .filter((item) => item !== null && typeof item === 'object' && typeof item.url === 'string' && item.url.startsWith('https://'))
          .map((item) => ({ id: nextTabId(), url: item.url, title: typeof item.title === 'string' ? item.title : '' }))
          .slice(0, MAX_TABS)
        : [];
      return restored.length > 0 ? restored : [{ id: nextTabId(), url: CHAT_URL, title: '' }];
    }
    function readHistory() {
      const value = readApp(HISTORY_KEY, []);
      if (!Array.isArray(value)) return [];
      return value.filter((item) => item !== null && typeof item === 'object' && typeof item.url === 'string' && Number.isFinite(item.at));
    }
    /** User-renamed history titles, keyed by page URL. */
    function readHistoryTitles() {
      const value = readApp(HISTORY_TITLES_KEY, {});
      if (value === null || typeof value !== 'object' || Array.isArray(value)) return {};
      const titles = {};
      for (const key of Object.keys(value)) {
        if (typeof value[key] === 'string' && value[key].length > 0) titles[key] = value[key];
      }
      return titles;
    }
    function historyTitle(entry, titles) {
      const custom = titles[entry.url];
      return typeof custom === 'string' && custom.length > 0 ? custom : entry.title || entry.url;
    }
    /** Clear the shared history store and tell every live history view. */
    function clearHistoryStore() {
      writeApp(HISTORY_KEY, []);
      writeApp(HISTORY_TITLES_KEY, {});
      notifyHistory([]);
    }
    /** Pin or unpin one entry; pinned entries render in the first group. */
    function pinHistoryEntry(url, pinned) {
      const previous = readHistory();
      const target = previous.find((entry) => entry.url === url);
      if (target === undefined) return;
      const updated = { ...target };
      if (pinned) updated.pinned = true;
      else delete updated.pinned;
      const rest = previous.filter((entry) => entry.url !== url);
      const next = pinned ? [updated, ...rest] : previous.map((entry) => (entry.url === url ? updated : entry));
      writeApp(HISTORY_KEY, next);
      notifyHistory(next);
    }
    /** Remove one entry and its custom title. */
    function removeHistoryEntry(url) {
      const next = readHistory().filter((entry) => entry.url !== url);
      writeApp(HISTORY_KEY, next);
      const titles = readHistoryTitles();
      if (Object.prototype.hasOwnProperty.call(titles, url)) {
        delete titles[url];
        writeApp(HISTORY_TITLES_KEY, titles);
      }
      notifyHistory(next);
    }
    /** Rename one entry; the custom name survives later visits and restarts. */
    function renameHistoryEntry(url, title) {
      const name = typeof title === 'string' ? title.trim().slice(0, 200) : '';
      if (name.length === 0) return;
      const titles = readHistoryTitles();
      titles[url] = name;
      writeApp(HISTORY_TITLES_KEY, titles);
      const next = readHistory().map((entry) => (entry.url === url ? { ...entry, title: name } : entry));
      writeApp(HISTORY_KEY, next);
      notifyHistory(next);
    }
    /** Repair common IME/full-width typos and complete the scheme before parsing. */
    function normalizeAddress(input) {
      if (typeof input !== 'string') return null;
      let text = input.trim();
      if (text.length === 0) return null;
      text = text
        .replace(/[。．｡]/g, '.')
        .replace(/：/g, ':')
        .replace(/／/g, '/')
        .replace(/＃/g, '#')
        .replace(/？/g, '?')
        .replace(/＝/g, '=')
        .replace(/＆/g, '&')
        .replace(/％/g, '%')
        .replace(/＠/g, '@')
        .replace(/[\u3000\s]+/g, '');
      let candidate = /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(text) ? text : `https://${text}`;
      candidate = candidate.replace(/^https:\/+/, 'https://').replace(/^http:\/+/, 'http://');
      let parsed;
      try {
        parsed = new URL(candidate);
      } catch {
        return null;
      }
      if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return null;
      if (parsed.username !== '' || parsed.password !== '') return null;
      if (parsed.hostname === '' || !parsed.hostname.includes('.')) return null;
      return parsed.href;
    }
    function readBookmarks() {
      const value = readApp(BOOKMARKS_KEY, []);
      if (!Array.isArray(value)) return [];
      return value.filter((item) => item !== null && typeof item === 'object' && typeof item.url === 'string');
    }
    function dayBuckets(entries) {
      const now = new Date();
      const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
      const startOfYesterday = startOfToday - 86400000;
      const groups = { today: [], yesterday: [], earlier: [] };
      for (const entry of entries) {
        if (entry.at >= startOfToday) groups.today.push(entry);
        else if (entry.at >= startOfYesterday) groups.yesterday.push(entry);
        else groups.earlier.push(entry);
      }
      return groups;
    }
    function formatTime(timestamp) {
      const date = new Date(timestamp);
      const pad = (value) => String(value).padStart(2, '0');
      return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    }
    /** Append one visit to the shared history store; returns the new list. */
    function pushHistory(url, title) {
      if (typeof url !== 'string' || !url.startsWith('https://')) return readHistory();
      const previous = readHistory();
      const existing = previous.find((entry) => entry.url === url);
      const titles = readHistoryTitles();
      const entry = { url, title: titles[url] ?? (title || existing?.title || url), at: Date.now() };
      if (existing !== undefined && existing.pinned === true) entry.pinned = true;
      const next = [entry, ...previous.filter((item) => item.url !== url)].slice(0, HISTORY_LIMIT);
      writeApp(HISTORY_KEY, next);
      notifyHistory(next);
      return next;
    }
    /** Guests that already reloaded once for a storage repair; prevents write/reload loops. */
    const storageRepaired = new WeakSet();
    /** Restore the saved token/locale into one guest, reloading when it changed. */
    async function syncGuestStorage(element, persist, language) {
      let state;
      try {
        state = await element.executeJavaScript(READ_STATE_JS);
      } catch {
        return;
      }
      if (state === null || state.ok !== true || typeof state.url !== 'string' || !state.url.startsWith('https://chat.deepseek.com')) return;
      const writes = {};
      const saved = readSnapshot();
      const savedCookies = saved !== null && typeof saved.__cookies === 'string' ? saved.__cookies : '';
      const liveCookies = typeof state.cookies === 'string' ? state.cookies : '';
      if (persist && saved !== null && typeof saved[TOKEN_KEY] === 'string' && !state.hasToken) {
        for (const key of Object.keys(saved)) {
          if (key === '__cookies') continue;
          if (state.map[key] !== saved[key]) writes[key] = saved[key];
        }
      }
      const wantedLocale = localeValue(language);
      if (state.map[LOCALE_KEY] !== wantedLocale) writes[LOCALE_KEY] = wantedLocale;
      const restoreCookies = persist && savedCookies.length > 0 && liveCookies.length === 0;
      // A restored token must land on the site root: reloading /sign_in would keep
      // the SPA on the sign-in page even though the session is now valid.
      const restoredToken = persist && typeof saved?.[TOKEN_KEY] === 'string' && saved[TOKEN_KEY].length > 0 && !state.hasToken;
      const stuckOnSignIn = state.hasToken === true && typeof state.url === 'string' && state.url.includes('/sign_in');
      const savedHasToken = saved !== null && typeof saved[TOKEN_KEY] === 'string' && saved[TOKEN_KEY].length > 0;
      writeApp(DIAG_KEY, {
        at: Date.now(),
        savedHasToken,
        liveHasToken: state.hasToken === true,
        restoring: persist && savedHasToken && !state.hasToken,
        cookies: liveCookies.length > 0,
        url: state.url,
      });
      if (Object.keys(writes).length > 0 || restoreCookies || stuckOnSignIn) {
        try {
          if (Object.keys(writes).length > 0) await element.executeJavaScript(writeGuestJs(writes));
          if (restoreCookies) await element.executeJavaScript(restoreCookiesJs(savedCookies));
          if (storageRepaired.has(element)) return;
          storageRepaired.add(element);
          if (restoredToken || restoreCookies || stuckOnSignIn) element.loadURL('https://chat.deepseek.com/').catch(() => {});
          else element.reload();
        } catch {
          // Leave the page as-is; the next load retries.
        }
        return;
      }
      if (persist && !state.hasToken && savedHasToken) {
        writeApp(DIAG_KEY, { at: Date.now(), savedHasToken, liveHasToken: false, restoring: false, cookies: liveCookies.length > 0, url: state.url });
      }
      if (persist && (state.hasToken || liveCookies.length > 0)) {
        const snapshot = {};
        for (const key of Object.keys(state.map)) if (typeof state.map[key] === 'string') snapshot[key] = state.map[key];
        if (liveCookies.length > 0) snapshot.__cookies = liveCookies;
        writeApp(SNAPSHOT_KEY, snapshot);
      }
    }
    function localeValue(language) {
      return JSON.stringify({ value: language, __version: '0' });
    }
    const READ_STATE_JS = [
      '(() => {',
      '  const map = {};',
      '  try {',
      '    for (let index = 0; index < localStorage.length; index += 1) {',
      '      const key = localStorage.key(index);',
      '      if (key === "userToken" || key.indexOf("__appKit_") === 0) map[key] = localStorage.getItem(key);',
      '    }',
      '  } catch (error) { return { ok: false, reason: String(error) }; }',
      '  let cookies = "";',
      '  try { cookies = document.cookie || ""; } catch (error) { cookies = ""; }',
      '  return { ok: true, map, hasToken: Boolean(map.userToken), cookies, url: location.href };',
      '})()',
    ].join('\n');
    /** Replay readable (non-HttpOnly) cookies captured from a previous session. */
    function restoreCookiesJs(cookieText) {
      return `(() => {
      const raw = ${JSON.stringify(cookieText)};
      if (typeof raw !== "string" || raw.length === 0) return 0;
      let count = 0;
      for (const part of raw.split(";")) {
        const pair = part.trim();
        const split = pair.indexOf("=");
        if (split <= 0) continue;
        const name = pair.slice(0, split);
        const value = pair.slice(split + 1);
        try {
          document.cookie = name + "=" + value + "; path=/; SameSite=Lax";
          count += 1;
        } catch (error) {}
      }
      return count;
      })()`;
    }
    function writeGuestJs(values) {
      return `(() => { const values = ${JSON.stringify(values)}; for (const key of Object.keys(values)) { try { localStorage.setItem(key, values[key]); } catch (error) {} } return true; })()`;
    }
    /** Redirect new-window links and window.open into the current page. */
    const INLINE_NAVIGATION_JS = [
      '(() => {',
      '  if (window.__dscInlineNavigation === true) return true;',
      '  window.__dscInlineNavigation = true;',
      '  const go = (value) => {',
      '    try {',
      '      const target = new URL(String(value == null ? "" : value), location.href);',
      '      if (target.protocol === "https:" || target.protocol === "http:") { location.href = target.href; return true; }',
      '    } catch (error) {}',
      '    return false;',
      '  };',
      '  try {',
      '    window.open = function (url) { go(url); return null; };',
      '  } catch (error) {}',
      '  document.addEventListener("click", (event) => {',
      '    const node = event.target;',
      '    const anchor = node && node.closest ? node.closest("a[href]") : null;',
      '    if (anchor === null) return;',
      '    if (anchor.getAttribute("target") !== "_blank") return;',
      '    if (!go(anchor.getAttribute("href"))) return;',
      '    event.preventDefault();',
      '    event.stopPropagation();',
      '  }, true);',
      '  return true;',
      '})()',
    ].join('\n');
    /** Fill "总结此页内容 <url>" into the site composer and send it. */
    function summaryScript(pageUrl) {
      const text = `总结此页内容 ${pageUrl}`;
      return `(() => {
      const TEXT = ${JSON.stringify(text)};
      const findInput = () => document.querySelector('div[contenteditable="true"]') || document.querySelector('textarea') || document.querySelector('[contenteditable="true"]');
      const input = findInput();
      if (input === null) return 'no-input';
      input.focus();
      if (input.tagName === 'TEXTAREA') {
        const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value');
        if (setter && setter.set) setter.set.call(input, TEXT);
        else input.value = TEXT;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      } else {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(input);
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
        let inserted = false;
        try {
          inserted = document.execCommand('insertText', false, TEXT);
        } catch (error) {
          inserted = false;
        }
        if (!inserted) input.textContent = TEXT;
        input.dispatchEvent(new InputEvent('input', { bubbles: true }));
      }
      const label = (node) => [node.getAttribute('aria-label'), node.getAttribute('title'), node.textContent].filter(Boolean).join(' ');
      const nodes = [...document.querySelectorAll('button, [role="button"]')]
        .filter((node) => node.disabled !== true && node.getAttribute('aria-disabled') !== 'true');
      const send = nodes.find((node) => /发送|send/i.test(label(node)));
      if (send) {
        send.click();
        return 'clicked';
      }
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
      return 'enter';
      })()`;
    }
    /** Landing page keeps its composer centered; pin it to the bottom while there. */
    const COMPOSER_PIN_JS = [
      '(() => {',
      '  const KEY = "__dscComposerPin";',
      '  const state = window[KEY] || (window[KEY] = { wrapper: null, observer: null, frame: 0 });',
      '  const isLanding = () => !/^\\/a\\/chat\\//.test(location.pathname);',
      '  const reset = () => {',
      '    if (state.wrapper === null) return;',
      '    state.wrapper.style.flexDirection = "";',
      '    state.wrapper.style.justifyContent = "";',
      '    state.wrapper.style.paddingBottom = "";',
      '    state.wrapper = null;',
      '  };',
      '  const apply = () => {',
      '    state.frame = 0;',
      '    if (!isLanding()) { reset(); return; }',
      '    const input = [...document.querySelectorAll("[contenteditable]")].find((node) => node.isContentEditable) || document.querySelector("textarea");',
      '    if (input === null) { reset(); return; }',
      '    let node = input.parentElement;',
      '    let target = null;',
      '    for (let depth = 0; depth < 9 && node !== null; depth += 1) {',
      '      const rect = node.getBoundingClientRect();',
      '      if (rect.height >= window.innerHeight * 0.6) { target = node; break; }',
      '      node = node.parentElement;',
      '    }',
      '    if (target === null || target === state.wrapper) return;',
      '    reset();',
      '    state.wrapper = target;',
      '    target.style.flexDirection = "column";',
      '    target.style.justifyContent = "flex-end";',
      '    target.style.paddingBottom = "12px";',
      '  };',
      '  const schedule = () => {',
      '    if (state.frame !== 0) return;',
      '    state.frame = requestAnimationFrame(apply);',
      '  };',
      '  schedule();',
      '  if (state.observer === null) {',
      '    state.observer = new MutationObserver(schedule);',
      '    state.observer.observe(document.body, { childList: true, subtree: true });',
      '  }',
      '  return true;',
      '})()',
    ].join('\n');

    /** Pending fill request for the right-sidebar surface. */
    const fillChannel = { pending: null, listeners: new Set() };
    function requestFill(text) {
      if (typeof text !== 'string' || text.length === 0) return;
      fillChannel.pending = text;
      for (const listener of [...fillChannel.listeners]) {
        try {
          listener();
        } catch {
          // Ignore stale listeners.
        }
      }
    }
    /** Read the last assistant reply rendered in the conversation. */
    function lastAssistantContext() {
      // Assistant replies are the only flow items carrying data-chat-group-part="response";
      // user messages have no group part and reasoning has "reasoning".
      const replies = [...document.querySelectorAll('[data-chat-group-part="response"]')];
      let text = '';
      for (let index = replies.length - 1; index >= 0; index -= 1) {
        const candidate = (replies[index].innerText ?? '').trim();
        if (candidate.length > 0) {
          text = candidate;
          break;
        }
      }
      if (text.length === 0) {
        // Fallback: the rendered conversation body, minus the composer seat.
        const body = document.querySelector('[data-conversation-content]')
          ?? document.querySelector('[data-conversation-session]');
        if (body === null) return '';
        const seat = body.querySelector('[data-composer-seat]');
        const previous = seat === null ? null : seat.style.display;
        if (seat !== null) seat.style.display = 'none';
        try {
          const blocks = (body.innerText ?? '').split(/\n{2,}/).map((block) => block.trim()).filter((block) => block.length > 0);
          text = blocks.length === 0 ? '' : blocks[blocks.length - 1];
        } finally {
          if (seat !== null) seat.style.display = previous ?? '';
        }
      }
      if (text.length === 0) return '';
      const clipped = text.length > 4000 ? text.slice(-4000) : text;
      return `以下是 Harness 对话中助手最后一条回复：\n\n${clipped}`;
    }



    /** Put text into the site composer without sending it. */
    function fillScript(text) {
      return `(async () => {
      const TEXT = ${JSON.stringify(text)};
      const probe = () => [...document.querySelectorAll("[contenteditable]")].find((node) => node.isContentEditable) || document.querySelector("textarea");
      const deadline = Date.now() + 8000;
      let input = probe();
      while (input === null && Date.now() < deadline) {
        await new Promise((resolve) => setTimeout(resolve, 150));
        input = probe();
      }
      if (input === null) return 'no-input';
      input.focus();
      if (input.tagName === 'TEXTAREA') {
        const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value');
        if (setter && setter.set) setter.set.call(input, TEXT);
        else input.value = TEXT;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      } else {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(input);
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
        let inserted = false;
        try {
          inserted = document.execCommand('insertText', false, TEXT);
        } catch (error) {
          inserted = false;
        }
        if (!inserted) input.textContent = TEXT;
        input.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: TEXT }));
      }
      await new Promise((resolve) => setTimeout(resolve, 120));
      const current = input.tagName === 'TEXTAREA' ? input.value : input.innerText;
      return typeof current === 'string' && current.includes(TEXT.slice(0, 24)) ? 'filled' : 'unverified';
      })()`;
    }

    /** Put files into the Chat page's attachment picker, or its drop zone as a fallback. */
    function uploadFilesScript(files) {
      const payload = files.map((file) => ({
        name: typeof file.name === 'string' && file.name.length > 0 ? file.name : 'attachment',
        type: typeof file.type === 'string' ? file.type : '',
        data: typeof file.data === 'string' ? file.data : '',
      }));
      return `(async () => {
      const FILES = ${JSON.stringify(payload)};
      const bytesOf = (dataUrl) => {
        const comma = typeof dataUrl === "string" ? dataUrl.indexOf(",") : -1;
        if (comma < 0) return null;
        try {
          const binary = atob(dataUrl.slice(comma + 1));
          const bytes = new Uint8Array(binary.length);
          for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
          return bytes;
        } catch (error) {
          return null;
        }
      };
      const transfer = new DataTransfer();
      for (const file of FILES) {
        const bytes = bytesOf(file.data);
        if (bytes === null) continue;
        transfer.items.add(new File([bytes], file.name, { type: file.type || "application/octet-stream" }));
      }
      if (transfer.files.length === 0) return "empty";
      const inputs = [...document.querySelectorAll('input[type="file"]')].filter((element) => element.disabled !== true);
      const wantsImage = FILES.some((file) => file.type.indexOf("image/") === 0);
      const picker = (wantsImage ? inputs.find((element) => String(element.getAttribute("accept") || "").toLowerCase().includes("image")) : undefined) || inputs[0];
      if (picker !== undefined) {
        try {
          picker.files = transfer.files;
          picker.dispatchEvent(new Event("change", { bubbles: true }));
          return "ok";
        } catch (error) {
          // Fall through to the drop-zone attempt.
        }
      }
      const target = document.querySelector('div[contenteditable="true"]') || document.querySelector("textarea");
      if (target === null) return "no-target";
      const zone = target.closest("form") || target.parentElement || document.body;
      for (const type of ["dragenter", "dragover", "drop"]) {
        try {
          zone.dispatchEvent(new DragEvent(type, { bubbles: true, cancelable: true, dataTransfer: transfer }));
        } catch (error) {
          // Browsers without a constructible DragEvent still get the input attempt above.
        }
      }
      return "dropped";
      })()`;
    }

    /** Press the Chat page's send button (often an icon-only blue circle without a label). */
    function sendComposeScript(withFiles) {
      return `(async () => {
      const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      const isDisabled = (node) => node.disabled === true || node.getAttribute("aria-disabled") === "true";
      const labelOf = (node) => [node.getAttribute("aria-label"), node.getAttribute("title"), typeof node.className === "string" ? node.className : "", node.textContent].filter(Boolean).join(" ");
      const findInput = () => [...document.querySelectorAll("[contenteditable]")].find((node) => node.isContentEditable) || document.querySelector("textarea");
      const cardOf = (input) => {
        let node = input;
        for (let depth = 0; depth < 10 && node !== null; depth += 1) {
          node = node.parentElement;
          if (node === null) return null;
          const rect = node.getBoundingClientRect();
          if (rect.width >= 260 && rect.height >= 40 && rect.height <= 720 && node.querySelectorAll('button, [role="button"]').length >= 2) return node;
        }
        return null;
      };
      const labeledSend = (input) => {
        const card = input === null ? null : cardOf(input);
        const roots = card === null ? [document] : [card, document];
        for (const root of roots) {
          const found = [...root.querySelectorAll('button, [role="button"]')]
            .filter((node) => !isDisabled(node))
            .find((node) => /发送|send/i.test(labelOf(node)) && !/搜索|search/i.test(labelOf(node)));
          if (found !== undefined) return found;
        }
        return undefined;
      };
      const heuristicSend = (input) => {
        const card = cardOf(input);
        if (card === null) return undefined;
        const cardRect = card.getBoundingClientRect();
        const nodes = [...card.querySelectorAll('button, [role="button"], [tabindex="0"]')]
          .filter((node) => node !== input && !node.contains(input) && !input.contains(node) && !isDisabled(node));
        if (nodes.some((node) => /停止|stop/i.test(labelOf(node)) && !/发送|send/i.test(labelOf(node)))) return undefined;
        const candidates = [];
        const seen = new Set();
        for (const node of nodes) {
          if (seen.has(node)) continue;
          seen.add(node);
          const rect = node.getBoundingClientRect();
          if (rect.width < 16 || rect.height < 16) continue;
          if (rect.left + rect.width / 2 < cardRect.left + cardRect.width * 0.5) continue;
          if (rect.top + rect.height / 2 < cardRect.top + cardRect.height * 0.35) continue;
          const label = labelOf(node);
          if (/搜索|search|深度|思考|think|附件|attach|upload|语音|mic|历史|history/i.test(label) && !/发送|send/i.test(label)) continue;
          let score = 0;
          if (node.querySelector("svg") !== null) score += 3;
          if (Math.abs(rect.width - rect.height) <= Math.max(4, rect.width * 0.2)) score += 2;
          if (rect.left + rect.width / 2 > cardRect.left + cardRect.width * 0.78) score += 3;
          if (rect.top > cardRect.top + cardRect.height * 0.5) score += 2;
          if (/发送|send/i.test(label)) score += 8;
          try {
            const rgb = (getComputedStyle(node).backgroundColor || "").match(/[\\d.]+/g) || [];
            if (rgb.length >= 3) {
              const alpha = rgb.length >= 4 ? Number(rgb[3]) : 1;
              if (alpha > 0.2 && Number(rgb[2]) > 140 && Number(rgb[2]) > Number(rgb[0]) + 25) score += 3;
            }
          } catch (error) {}
          candidates.push({ node, score });
        }
        candidates.sort((a, b) => b.score - a.score);
        const best = candidates[0];
        if (best === undefined || best.score < 6) return undefined;
        return best.node;
      };
      // Last resort: the bottom-right icon is the send arrow; click its clickable ancestor.
      const svgSend = (input) => {
        const card = cardOf(input);
        if (card === null) return undefined;
        const cardRect = card.getBoundingClientRect();
        const svgs = [...card.querySelectorAll("svg")].filter((svg) => {
          const rect = svg.getBoundingClientRect();
          return rect.width >= 12 && rect.width <= 48 && rect.height >= 12 && rect.height <= 48
            && rect.left + rect.width / 2 > cardRect.left + cardRect.width * 0.75
            && rect.top + rect.height / 2 > cardRect.top + cardRect.height * 0.5;
        });
        if (svgs.length === 0) return undefined;
        let node = svgs[0];
        for (let depth = 0; depth < 4 && node !== null; depth += 1) {
          if (node.getAttribute && (node.getAttribute("role") === "button" || node.tagName === "BUTTON" || node.getAttribute("tabindex") === "0")) return node;
          node = node.parentElement;
        }
        return svgs[0].parentElement || undefined;
      };
      ${withFiles ? 'await sleep(1200);' : ''}
      const input = findInput();
      if (input === null) return "no-input";
      let send = labeledSend(input);
      if (send === undefined) {
        const deadline = Date.now() + 10000;
        while (send === undefined && Date.now() < deadline) {
          await sleep(200);
          send = labeledSend(input);
        }
      }
      if (send === undefined) send = heuristicSend(input);
      if (send === undefined) send = svgSend(input);
      if (send !== undefined) {
        send.click();
        await sleep(300);
        return "clicked";
      }
      input.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", code: "Enter", keyCode: 13, which: 13, bubbles: true }));
      return "enter";
      })()`;
    }

    /**
     * Supplementary send: focus the composer, put the caret at the end and
     * dispatch Enter (3s after the send-button attempt). It does nothing when
     * the composer is already empty (the click worked) or a stop-generation
     * button is visible (a send is already in flight), to avoid duplicates.
     */
    function enterComposeFallbackScript() {
      return `(() => {
      const visible = (node) => {
        if (!(node instanceof HTMLElement)) return false;
        const rect = node.getBoundingClientRect();
        const style = getComputedStyle(node);
        return rect.width > 0 && rect.height > 0 && style.visibility !== "hidden" && style.display !== "none";
      };
      const textOf = (node) => {
        if (node instanceof HTMLTextAreaElement || node instanceof HTMLInputElement) return node.value;
        return node.innerText || node.textContent || "";
      };
      const isDisabled = (node) => node.disabled === true || node.getAttribute("aria-disabled") === "true";
      const labelOf = (node) => [node.getAttribute("aria-label"), node.getAttribute("title"), typeof node.className === "string" ? node.className : "", node.textContent].filter(Boolean).join(" ");
      const busy = [...document.querySelectorAll('button, [role="button"]')]
        .some((node) => !isDisabled(node) && /停止|stop|暂停|pause/i.test(labelOf(node)));
      const editors = [...document.querySelectorAll('textarea, [contenteditable="true"], [contenteditable=""], [role="textbox"]')]
        .filter((node) => visible(node) && textOf(node).trim().length > 0);
      if (editors.length === 0) return busy ? "in-progress" : "empty";
      if (busy) return "in-progress";
      const editor = editors[0];
      editor.focus();
      if (editor instanceof HTMLTextAreaElement || editor instanceof HTMLInputElement) {
        const end = editor.value.length;
        try {
          editor.setSelectionRange(end, end);
        } catch (error) {}
      } else {
        try {
          const range = document.createRange();
          range.selectNodeContents(editor);
          range.collapse(false);
          const selection = window.getSelection();
          if (selection !== null) {
            selection.removeAllRanges();
            selection.addRange(range);
          }
        } catch (error) {}
      }
      const init = { key: "Enter", code: "Enter", keyCode: 13, which: 13, bubbles: true, cancelable: true };
      editor.dispatchEvent(new KeyboardEvent("keydown", init));
      editor.dispatchEvent(new KeyboardEvent("keypress", init));
      editor.dispatchEvent(new KeyboardEvent("keyup", init));
      return "enter";
      })()`;
    }

    /** Focus the composer and press Enter as a supplement to the send button. */
    async function enterComposeFallback(element) {
      try {
        return await element.executeJavaScript(enterComposeFallbackScript());
      } catch {
        return 'error';
      }
    }

    /**
     * Fill the text/files into the page. Sending is deliberately a separate
     * step so the host can show a countdown and click Send afterwards.
     */
    async function fillComposeContent(element, payload) {
      let textResult = 'skipped';
      if (typeof payload.text === 'string' && payload.text.length > 0) {
        try {
          textResult = await element.executeJavaScript(fillScript(payload.text));
        } catch {
          textResult = 'error';
        }
      }
      let uploadResult = 'skipped';
      const files = Array.isArray(payload.files) ? payload.files : [];
      if (files.length > 0) {
        try {
          uploadResult = await element.executeJavaScript(uploadFilesScript(files));
        } catch {
          uploadResult = 'error';
        }
      }
      const textOk = textResult === 'filled' || textResult === 'unverified' || textResult === 'skipped';
      const uploadOk = uploadResult === 'ok' || uploadResult === 'dropped' || uploadResult === 'skipped';
      const hasText = typeof payload.text === 'string' && payload.text.length > 0;
      const canSend = (hasText && textOk) || (files.length > 0 && uploadOk);
      return { textResult, uploadResult, textOk, uploadOk, hasText, hasFiles: files.length > 0, canSend };
    }
    /** Click the page's send button (host schedules this after a 5s countdown). */
    async function clickComposeSend(element, withFiles) {
      try {
        return await element.executeJavaScript(sendComposeScript(withFiles));
      } catch {
        return 'error';
      }
    }

    /** Install the plugin stylesheet once for the whole plugin lifetime. */
    function installStyle(ctx) {
      ctx.effect(() => {
        const style = document.createElement('style');
        style.textContent = CSS;
        document.head.appendChild(style);
        return () => style.remove();
      }, 'deepseek-chat-switch: stylesheet');
    }
    function useCopy() {
      const [language] = React.useState(() => (document.documentElement.lang || navigator.language || 'zh').toLowerCase().startsWith('zh') ? 'zh' : 'en');
      return language === 'zh' ? zh : en;
    }
    function ClockIcon() {
      return h('svg', { viewBox: '0 0 24 24', width: 15, height: 15, 'aria-hidden': true, fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' },
        h('path', { d: 'M3 12a9 9 0 1 0 3-6.7' }),
        h('path', { d: 'M3 4v5h5' }),
        h('path', { d: 'M12 7.5V12l3 2' }));
    }
    function GearIcon() {
      return h('svg', { viewBox: '0 0 24 24', width: 15, height: 15, 'aria-hidden': true, fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' },
        h('circle', { cx: 12, cy: 12, r: 3 }),
        h('path', { d: 'M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.11a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.11A1.7 1.7 0 0 0 4.6 8.94a1.7 1.7 0 0 0-.34-1.88l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 8.97 4.6h.08A1.7 1.7 0 0 0 10.08 3.04V3a2 2 0 1 1 4 0v.11a1.7 1.7 0 0 0 1.03 1.55 1.7 1.7 0 0 0 1.88-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.88v.08a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.11A1.7 1.7 0 0 0 19.4 15Z' }));
    }
    function NewChatIcon() {
      return h('svg', { viewBox: '0 0 24 24', width: 15, height: 15, 'aria-hidden': true, fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' },
        h('path', { d: 'M4.5 5.5h15v10a1.5 1.5 0 0 1-1.5 1.5H9.5l-5 3v-14.5Z' }),
        h('path', { d: 'M12 8.5v5M9.5 11h5' }));
    }
    function MoreIcon({ size }) {
      const pixels = size || 16;
      return h('svg', { viewBox: '0 0 24 24', width: pixels, height: pixels, 'aria-hidden': true, fill: 'currentColor', stroke: 'none' },
        h('circle', { cx: 5.5, cy: 12, r: 1.6 }),
        h('circle', { cx: 12, cy: 12, r: 1.6 }),
        h('circle', { cx: 18.5, cy: 12, r: 1.6 }));
    }
    function PinIcon() {
      return h('svg', { viewBox: '0 0 16 16', width: 12, height: 12, 'aria-hidden': true, fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' },
        h('path', { d: 'M9.6 2.4 13.6 6.4M8.4 4.2l3.4 3.4-3.6 3.6-3.4-3.4 3.6-3.6Z' }),
        h('path', { d: 'M5 11 2.6 13.4' }));
    }
    /** Native HARNESS pin glyph when the primitives bundle is available. */
    function pinIcon(filled) {
      const Native = filled ? PinFillIcon : PinOutlineIcon;
      if (Native !== null) return h(Native, { size: 14 });
      return h(PinIcon);
    }
    /** Native HARNESS ellipsis glyph, falling back to a local three-dot mark. */
    function ellipsisIcon(size) {
      if (EllipsisIcon !== null) return h(EllipsisIcon, { size: size || 16 });
      return h(MoreIcon, { size });
    }
    function plusIcon(size) {
      if (PlusIcon !== null) return h(PlusIcon, { size: size || 14 });
      return h(NewChatIcon);
    }
    /** One native-looking menu row icon slot. */
    function menuItemIcon(Component) {
      return Component === null ? null : h('span', { className: 'dsc-dir-menu-icon' }, h(Component, { size: 14 }));
    }
    function menuItemLabel(text) {
      return h('span', { className: 'dsc-dir-menu-label' }, text);
    }
    function ChevronIcon({ direction }) {
      return h('svg', { viewBox: '0 0 24 24', width: 18, height: 18, 'aria-hidden': true, fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' },
        h('path', { d: direction === 'left' ? 'M14.5 5.5 8 12l6.5 6.5' : 'M9.5 5.5 16 12l-6.5 6.5' }));
    }
    function StarIcon({ filled, size }) {
      return h('svg', { viewBox: '0 0 24 24', width: size || 15, height: size || 15, 'aria-hidden': true, fill: filled ? 'currentColor' : 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' },
        h('path', { d: 'm12 3.6 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.8Z' }));
    }
    function FavoritesPopover({ copy, items, onOpen, onRemove }) {
      return h('div', { className: 'dsc-popover', role: 'dialog', 'aria-label': copy.favorites },
        h('p', { className: 'dsc-popover-title' }, copy.favorites),
        items.length === 0
          ? h('div', { className: 'dsc-history-empty' }, copy.emptyBookmarks)
          : h('div', { className: 'dsc-bookmarks' }, items.map((item) => h('div', { key: item.url, className: 'dsc-bookmark' },
            h('button', {
              className: 'dsc-entry dsc-bookmark-open',
              type: 'button',
              title: item.url,
              onClick: () => onOpen(item.url),
            },
              h('span', { className: 'dsc-entry-title' }, item.title || item.url),
              h('span', { className: 'dsc-entry-url' }, item.url)),
            h('button', {
              className: 'dsc-bookmark-remove',
              type: 'button',
              title: copy.removeBookmark,
              'aria-label': copy.removeBookmark,
              onClick: () => onRemove(item.url),
            }, '×')))));
    }
    function RefreshIcon() {
      return h('svg', { viewBox: '0 0 24 24', width: 18, height: 18, 'aria-hidden': true, fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' },
        h('path', { d: 'M20 11a8 8 0 1 0-2.3 6' }),
        h('path', { d: 'M20 5v6h-6' }));
    }
    function HistoryPopover({ copy, entries, onOpen, onClear }) {
      const groups = dayBuckets(entries);
      const section = (id, label, items, open) => items.length === 0 ? null : h('details', { className: 'dsc-group', open, key: id },
        h('summary', null,
          h('span', null, label),
          h('span', { className: 'dsc-group-count' }, String(items.length))),
        items.map((entry) => h('button', {
          key: `${entry.url}-${entry.at}`,
          className: 'dsc-entry',
          type: 'button',
          title: entry.url,
          onClick: () => onOpen(entry.url),
        },
          h('span', { className: 'dsc-entry-title' }, entry.title || entry.url),
          h('span', { className: 'dsc-entry-url' }, entry.url),
          h('span', { className: 'dsc-entry-time' }, formatTime(entry.at)))));
      const body = entries.length === 0
        ? h('div', { className: 'dsc-history-empty' }, copy.emptyHistory)
        : h('div', { className: 'dsc-history-list' },
          section('today', copy.today, groups.today, true),
          section('yesterday', copy.yesterday, groups.yesterday, false),
          section('earlier', copy.earlier, groups.earlier, false));
      return h('div', { className: 'dsc-popover dsc-popover-history', role: 'dialog', 'aria-label': copy.history },
        h('p', { className: 'dsc-popover-title' }, copy.history),
        body,
        entries.length === 0 ? null : h('button', { className: 'dsc-wide', type: 'button', onClick: onClear }, copy.clearHistory));
    }
    const TITLE_MARQUEE_PX_PER_MS = 0.03;
    const MIN_TITLE_REVEAL_PX = 8;
    /** Marquee a clipped row title while its row is hovered (same feel as native rows). */
    function useTitleMarquee(titleRef) {
      const frame = React.useRef(0);
      React.useEffect(() => () => cancelAnimationFrame(frame.current), []);
      return React.useMemo(() => ({
        enter: () => {
          const element = titleRef.current;
          if (element === null) return;
          const range = element.scrollWidth - element.clientWidth;
          if (range <= MIN_TITLE_REVEAL_PX) return;
          const place = (left) => {
            try {
              element.scrollTo({ left, behavior: 'instant' });
            } catch {
              element.scrollLeft = left;
            }
            if (left > 0) element.dataset.scrolled = '';
            else delete element.dataset.scrolled;
            if (left < element.scrollWidth - element.clientWidth) element.dataset.clipped = '';
            else delete element.dataset.clipped;
          };
          if (typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            place(range);
            return;
          }
          cancelAnimationFrame(frame.current);
          let previous;
          let position = 0;
          const step = (now) => {
            position += previous === undefined ? 0 : (now - previous) * TITLE_MARQUEE_PX_PER_MS;
            previous = now;
            place(Math.min(position, range));
            if (position < range) frame.current = requestAnimationFrame(step);
          };
          frame.current = requestAnimationFrame(step);
        },
        leave: () => {
          cancelAnimationFrame(frame.current);
          const element = titleRef.current;
          if (element === null) return;
          element.scrollLeft = 0;
          delete element.dataset.scrolled;
          delete element.dataset.clipped;
        },
      }), [titleRef]);
    }
    /** Inline rename input for one Chat history row. */
    function DirectoryRenameInput({ initial, onCommit, onCancel }) {
      const inputRef = React.useRef(null);
      const finished = React.useRef(false);
      React.useEffect(() => {
        const element = inputRef.current;
        if (element === null) return;
        element.focus();
        if (typeof element.select === 'function') element.select();
      }, []);
      const finish = (save) => {
        if (finished.current) return;
        finished.current = true;
        const value = inputRef.current === null ? '' : inputRef.current.value;
        if (save) onCommit(value);
        else onCancel();
      };
      return h('input', {
        ref: inputRef,
        className: 'dsc-dirrow-rename',
        type: 'text',
        defaultValue: initial,
        maxLength: 200,
        onClick: (event) => event.stopPropagation(),
        onMouseDown: (event) => event.stopPropagation(),
        onKeyDown: (event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            finish(true);
          } else if (event.key === 'Escape') {
            event.preventDefault();
            finish(false);
          }
        },
        onBlur: () => finish(true),
      });
    }
    /** One Chat history row: clipped title marquee, hover "more", inline rename. */
    /** Small provider badge shown in front of each Chat-list title. */
    /** First visible glyph of a title, surrogate-pair safe (emoji count as one). */
    function titleInitial(title) {
      if (typeof title !== 'string') return '';
      const trimmed = title.trim();
      if (trimmed.length === 0) return '';
      const glyph = Array.from(trimmed)[0];
      return glyph === undefined ? '' : glyph.toUpperCase();
    }
    /**
     * Provider badge. Known providers render their official mark; any other
     * site falls back to a letter chip built from the page title's first glyph.
     */
    function ModelBadge({ provider, size, title }) {
      const pixels = typeof size === 'number' ? size : 16;
      if (provider !== null) {
        return h('img', {
          className: `dsc-model-badge dsc-model-badge--${provider.id}`,
          src: PROVIDER_LOGOS[provider.id] ?? '',
          width: pixels,
          height: pixels,
          alt: provider.label,
          title: provider.label,
          draggable: false,
          loading: 'eager',
          decoding: 'async',
        });
      }
      const initial = titleInitial(title);
      if (initial === '') return null;
      return h('span', {
        className: 'dsc-model-badge dsc-model-badge--site',
        style: { width: `${pixels}px`, height: `${pixels}px`, fontSize: `${Math.max(8, Math.round(pixels * 0.6))}px` },
        title: typeof title === 'string' ? title : initial,
        'aria-hidden': 'true',
      }, initial);
    }
    function FilterIcon() {
      return h('svg', { viewBox: '0 0 16 16', width: 16, height: 16, 'aria-hidden': true, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' },
        h('path', { d: 'M2.5 3.5h11L9.5 8v4.2L6.5 13.5V8L2.5 3.5Z' }));
    }
    function DirectoryRow(props) {
      const { copy, entry, title, provider, active, menuOpen, renaming, onOpen, onToggleMenu, onPin, onRenameCommit, onRenameCancel } = props;
      const titleRef = React.useRef(null);
      const marquee = useTitleMarquee(titleRef);
      const pinned = entry.pinned === true;
      const [tooltip, setTooltip] = React.useState(null);
      const tooltipTimer = React.useRef(0);
      const clearTooltip = () => {
        if (tooltipTimer.current !== 0) {
          window.clearTimeout(tooltipTimer.current);
          tooltipTimer.current = 0;
        }
      };
      React.useEffect(() => () => window.clearTimeout(tooltipTimer.current), []);
      const showPinTooltip = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        clearTooltip();
        tooltipTimer.current = window.setTimeout(() => {
          const viewportWidth = window.innerWidth || 1280;
          setTooltip({ right: Math.max(8, viewportWidth - rect.right), top: rect.bottom + 6 });
        }, 500);
      };
      const hidePinTooltip = () => {
        clearTooltip();
        setTooltip(null);
      };
      const activatePin = (event) => {
        event.preventDefault();
        event.stopPropagation();
        hidePinTooltip();
        onPin(entry.url, !pinned);
      };
      return h('div', {
        className: active ? 'dsc-dirrow dsc-dirrow--active' : 'dsc-dirrow',
        'data-menu-open': menuOpen ? 'true' : undefined,
        onMouseEnter: marquee.enter,
        onMouseLeave: () => {
          marquee.leave();
          hidePinTooltip();
        },
      },
        renaming
          ? h(DirectoryRenameInput, { initial: title, onCommit: (value) => onRenameCommit(entry.url, value), onCancel: onRenameCancel })
          : h('button', {
            className: 'dsc-entry',
            type: 'button',
            title: `${title}\n${entry.url}`,
            'aria-current': active ? 'true' : undefined,
            onClick: () => onOpen(entry.url),
          },
            h(ModelBadge, { provider, title }),
            h('span', { ref: titleRef, className: 'dsc-entry-title' }, title),
            h('span', { className: 'dsc-entry-time' }, formatTime(entry.at))),
        renaming || !pinned ? null : h('span', {
          className: 'dsc-dirrow-pin',
          role: 'img',
          'aria-label': copy.pinnedState,
          title: copy.pinnedState,
        }, pinIcon(true)),
        renaming ? null : h('div', { className: 'dsc-dirrow-actions' },
          h('button', {
            className: 'dsc-dirrow-more',
            type: 'button',
            title: copy.more,
            'aria-label': copy.more,
            'aria-haspopup': 'menu',
            'aria-expanded': menuOpen,
            onClick: (event) => {
              event.preventDefault();
              event.stopPropagation();
              const rect = event.currentTarget.getBoundingClientRect();
              onToggleMenu(entry.url, rect);
            },
            onMouseDown: (event) => event.stopPropagation(),
          }, ellipsisIcon(16)),
          h('button', {
            className: 'dsc-dirrow-pin-button',
            type: 'button',
            'aria-label': pinned ? copy.unpin : copy.pin,
            onClick: activatePin,
            onMouseDown: (event) => event.stopPropagation(),
            onMouseEnter: showPinTooltip,
            onMouseLeave: hidePinTooltip,
            onFocus: showPinTooltip,
            onBlur: hidePinTooltip,
          }, pinIcon(pinned))),
        tooltip === null ? null : h('span', {
          className: 'dsc-dirrow-tip',
          role: 'tooltip',
          style: { right: `${tooltip.right}px`, top: `${tooltip.top}px` },
        }, pinned ? copy.unpin : copy.pin));
    }
    /**
     * Sidebar session-directory mode switch: "HARNESS" keeps the native Harness
     * session list, "Chat" shows the plugin's DeepSeek Chat history. The native
     * region has no slot above it, so the component is rendered through its own
     * React root into a host element inserted above `sidebar.workspaces`; the
     * native browser keeps rendering untouched behind the HARNESS tab.
     */
    function DirectoryMode({ openEntry, onNewChat, host }) {
      const copy = useCopy();
      const [mode, setModeState] = React.useState(readDirectoryMode);
      const [entries, setEntries] = React.useState(readHistory);
      const [activeUrl, setActiveUrl] = React.useState(activePageStore.url);
      const [menuOpen, setMenuOpen] = React.useState(false);
      const [titles, setTitles] = React.useState(readHistoryTitles);
      const [rowMenu, setRowMenu] = React.useState(null);
      const [modelFilter, setModelFilter] = React.useState(() => readChatFilter());
      const [filterOpen, setFilterOpen] = React.useState(false);
      const [renamingUrl, setRenamingUrl] = React.useState(null);
      const [copyNotice, setCopyNotice] = React.useState(null);
      const copyNoticeTimer = React.useRef(0);
      React.useEffect(() => {
        const refresh = (next) => {
          setEntries(Array.isArray(next) ? next : readHistory());
          setTitles(readHistoryTitles());
        };
        historyChannel.listeners.add(refresh);
        return () => historyChannel.listeners.delete(refresh);
      }, []);
      React.useEffect(() => {
        const onChange = (url) => setActiveUrl(url);
        activePageStore.listeners.add(onChange);
        return () => activePageStore.listeners.delete(onChange);
      }, []);
      React.useEffect(() => {
        const onChange = (value) => {
          setModeState(value);
          if (value !== 'chat') {
            setMenuOpen(false);
            setRowMenu(null);
            setRenamingUrl(null);
          }
        };
        directoryModeChannel.listeners.add(onChange);
        return () => directoryModeChannel.listeners.delete(onChange);
      }, []);
      React.useEffect(() => {
        if (!menuOpen) return undefined;
        const onPointerDown = (event) => {
          const target = event.target;
          if (target instanceof Element && target.closest('.dsc-dirchat-actions') !== null) return;
          setMenuOpen(false);
        };
        const onKeyDown = (event) => {
          if (event.key === 'Escape') setMenuOpen(false);
        };
        document.addEventListener('mousedown', onPointerDown, true);
        document.addEventListener('keydown', onKeyDown, true);
        return () => {
          document.removeEventListener('mousedown', onPointerDown, true);
          document.removeEventListener('keydown', onKeyDown, true);
        };
      }, [menuOpen]);
      React.useEffect(() => {
        if (rowMenu === null) return undefined;
        const onPointerDown = (event) => {
          const target = event.target;
          if (target instanceof Element && (target.closest('.dsc-dirrow-menu') !== null || target.closest('.dsc-dirrow-more') !== null)) return;
          setRowMenu(null);
        };
        const onKeyDown = (event) => {
          if (event.key === 'Escape') setRowMenu(null);
        };
        const closeOnMove = () => setRowMenu(null);
        document.addEventListener('mousedown', onPointerDown, true);
        document.addEventListener('keydown', onKeyDown, true);
        document.addEventListener('scroll', closeOnMove, true);
        window.addEventListener('resize', closeOnMove);
        return () => {
          document.removeEventListener('mousedown', onPointerDown, true);
          document.removeEventListener('keydown', onKeyDown, true);
          document.removeEventListener('scroll', closeOnMove, true);
          window.removeEventListener('resize', closeOnMove);
        };
      }, [rowMenu]);
      // Match the native session list's surface: keep the sidebar's own fill
      // behind the Chat list and hide the native list while Chat is selected,
      // so switching back to HARNESS is instant and loses no native state.
      React.useEffect(() => {
        if (!(host instanceof HTMLElement) || host.parentElement === null) return undefined;
        const region = host.parentElement;
        host.classList.toggle('dsc-dir-mount--chat', mode === 'chat');
        region.classList.toggle('dsc-dir-chatmode', mode === 'chat');
        return () => {
          host.classList.remove('dsc-dir-mount--chat');
          region.classList.remove('dsc-dir-chatmode');
        };
      }, [host, mode]);
      const selectMode = (next) => setDirectoryMode(next);
      const toggleRowMenu = (url, rect) => setRowMenu((current) => {
        if (current !== null && current.url === url) return null;
        const width = 144;
        const height = 152;
        const viewportWidth = window.innerWidth || 1280;
        const viewportHeight = window.innerHeight || 800;
        /* The native session-row menu opens below the trigger, start-aligned. */
        const left = Math.max(8, Math.min(rect.left, viewportWidth - width - 8));
        let top = rect.bottom + 4;
        if (top + height > viewportHeight - 8) top = Math.max(8, rect.top - height - 4);
        return { url, left, top };
      });
      const startRowRename = (url) => {
        setRowMenu(null);
        setRenamingUrl(url);
      };
      const cancelRowRename = () => setRenamingUrl(null);
      const commitRowRename = (url, value) => {
        renameHistoryEntry(url, value);
        setRenamingUrl(null);
      };
      const pinRow = (url, pinned) => {
        setRowMenu(null);
        pinHistoryEntry(url, pinned);
      };
      const removeRow = (url) => {
        setRowMenu(null);
        if (renamingUrl === url) setRenamingUrl(null);
        removeHistoryEntry(url);
      };
      const copyRowLink = (url, event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const right = Math.max(8, (window.innerWidth || 1280) - rect.right);
        const top = rect.top - 34;
        setRowMenu(null);
        writeClipboard(url).then((ok) => {
          setCopyNotice({ text: ok === true ? copy.copied : copy.copyFailed, right, top, error: ok !== true });
          if (copyNoticeTimer.current !== 0) window.clearTimeout(copyNoticeTimer.current);
          copyNoticeTimer.current = window.setTimeout(() => setCopyNotice(null), 1600);
        });
      };
      React.useEffect(() => () => window.clearTimeout(copyNoticeTimer.current), []);
      const activeKey = pageKey(activeUrl);
      const isActive = (url) => activeKey !== '' && pageKey(url) === activeKey;
      const menuEntry = rowMenu === null ? null : entries.find((entry) => entry.url === rowMenu.url) ?? null;
      const menusOpen = menuOpen || filterOpen || rowMenu !== null;
      /* Blank/new-chat pages are hidden first, then the optional model filter. */
      const listableEntries = entries.filter((entry) => !isTransientChatPage(entry.url));
      const filterCounts = { all: listableEntries.length, other: 0 };
      for (const provider of CHAT_PROVIDERS) {
        filterCounts[provider.id] = listableEntries.filter((entry) => providerOf(entry.url) === provider).length;
      }
      for (const entry of listableEntries) if (providerOf(entry.url) === null) filterCounts.other += 1;
      const filterMode = modelFilter === 'other' || providerById(modelFilter) !== null ? modelFilter : 'all';
      const activeFilter = filterMode === 'other' ? null : providerById(filterMode);
      const visibleEntries = filterMode === 'all'
        ? listableEntries
        : filterMode === 'other'
          ? listableEntries.filter((entry) => providerOf(entry.url) === null)
          : listableEntries.filter((entry) => providerOf(entry.url) === activeFilter);
      const pinnedEntries = visibleEntries.filter((entry) => entry.pinned === true);
      const groups = dayBuckets(visibleEntries.filter((entry) => entry.pinned !== true));
      const section = (id, label, items, open) => items.length === 0 ? null : h('details', { className: 'dsc-group', open: open || items.some((entry) => isActive(entry.url)), key: id },
        h('summary', null,
          h('span', null, label),
          h('span', { className: 'dsc-group-count' }, String(items.length))),
        items.map((entry) => h(DirectoryRow, {
          key: `${entry.url}-${entry.at}`,
          copy,
          entry,
          provider: providerOf(entry.url),
          title: historyTitle(entry, titles),
          active: isActive(entry.url),
          menuOpen: rowMenu !== null && rowMenu.url === entry.url,
          renaming: renamingUrl === entry.url,
          onOpen: openEntry,
          onToggleMenu: toggleRowMenu,
          onPin: pinRow,
          onRenameCommit: commitRowRename,
          onRenameCancel: cancelRowRename,
        })));
      const list = visibleEntries.length === 0
        ? h('div', { className: 'dsc-history-empty' }, filterMode === 'all' ? copy.emptyHistory : copy.filterEmpty)
        : h('div', { className: 'dsc-dirchat-list' },
          section('pinned', copy.pinned, pinnedEntries, true),
          section('today', copy.today, groups.today, true),
          section('yesterday', copy.yesterday, groups.yesterday, false),
          section('earlier', copy.earlier, groups.earlier, false));
      return h('div', { className: mode === 'chat' ? 'dsc-dirmode dsc-dirmode--chat' : 'dsc-dirmode' },
        h('div', { className: 'dsc-dirbar' },
          h('div', { className: 'dsc-dirtabs', role: 'tablist', 'aria-label': copy.directory },
            h('button', {
              className: 'dsc-dirtab',
              type: 'button',
              role: 'tab',
              'aria-selected': mode === 'harness',
              title: copy.directoryHarness,
              onClick: () => selectMode('harness'),
            }, 'HARNESS'),
            h('button', {
              className: 'dsc-dirtab',
              type: 'button',
              role: 'tab',
              'aria-selected': mode === 'chat',
              title: copy.directoryChat,
              onClick: () => selectMode('chat'),
            }, 'Chat'))),
        mode === 'chat' ? h('div', { className: 'dsc-dirchat' },
          h('div', { className: 'dsc-dirchat-head' },
            h('span', { className: 'dsc-dirchat-title' }, copy.history),
            h('div', { className: 'dsc-dirchat-actions' },
              h('button', {
                className: modelFilter === 'all' ? 'dsc-dirchat-icon dsc-dirchat-filter' : 'dsc-dirchat-icon dsc-dirchat-filter dsc-dirchat-icon--filtered',
                type: 'button',
                title: copy.filterModels,
                'aria-label': copy.filterModels,
                'aria-haspopup': 'menu',
                'aria-expanded': filterOpen,
                onClick: () => {
                  setMenuOpen(false);
                  setRowMenu(null);
                  setFilterOpen((open) => !open);
                },
              }, filterMode === 'all'
                ? FilterIcon()
                : filterMode === 'other'
                  ? h(ModelBadge, { provider: null, title: copy.filterOther, size: 18 })
                  : h(ModelBadge, { provider: providerById(filterMode), size: 18 })),
              filterOpen ? h('div', { className: 'dsc-dirchat-menu dsc-dirchat-menu--filter', role: 'menu', 'aria-label': copy.filterModels },
                h('button', {
                  className: filterMode === 'all' ? 'dsc-dirrow-menu-item dsc-dirrow-menu-item--checked' : 'dsc-dirrow-menu-item',
                  type: 'button',
                  role: 'menuitemradio',
                  'aria-checked': filterMode === 'all',
                  onClick: () => {
                    setModelFilter('all');
                    writeChatFilter('all');
                    setFilterOpen(false);
                  },
                }, menuItemLabel(copy.filterAll), h('span', { className: 'dsc-filter-count' }, String(filterCounts.all))),
                CHAT_PROVIDERS.map((provider) => h('button', {
                  key: provider.id,
                  className: filterMode === provider.id ? 'dsc-dirrow-menu-item dsc-dirrow-menu-item--checked' : 'dsc-dirrow-menu-item',
                  type: 'button',
                  role: 'menuitemradio',
                  'aria-checked': filterMode === provider.id,
                  onClick: () => {
                    setModelFilter(provider.id);
                    writeChatFilter(provider.id);
                    setFilterOpen(false);
                  },
                },
                  h('span', { className: 'dsc-dir-menu-icon' }, h(ModelBadge, { provider, size: 16 })),
                  menuItemLabel(provider.label),
                  h('span', { className: 'dsc-filter-count' }, String(filterCounts[provider.id])))),
                h('button', {
                  className: filterMode === 'other' ? 'dsc-dirrow-menu-item dsc-dirrow-menu-item--checked' : 'dsc-dirrow-menu-item',
                  type: 'button',
                  role: 'menuitemradio',
                  'aria-checked': filterMode === 'other',
                  onClick: () => {
                    setModelFilter('other');
                    writeChatFilter('other');
                    setFilterOpen(false);
                  },
                },
                  h('span', { className: 'dsc-dir-menu-icon' }, h(ModelBadge, { provider: null, title: copy.filterOther, size: 16 })),
                  menuItemLabel(copy.filterOther),
                  h('span', { className: 'dsc-filter-count' }, String(filterCounts.other)))) : null,
              h('button', {
                className: 'dsc-dirchat-icon',
                type: 'button',
                title: copy.newConversation,
                'aria-label': copy.newConversation,
                onClick: onNewChat,
              }, plusIcon(16)),
              h('button', {
                className: 'dsc-dirchat-icon',
                type: 'button',
                title: copy.more,
                'aria-label': copy.more,
                'aria-haspopup': 'menu',
                'aria-expanded': menuOpen,
                onClick: () => {
                  setFilterOpen(false);
                  setMenuOpen((open) => !open);
                },
              }, ellipsisIcon(16)),
              menuOpen ? h('div', { className: 'dsc-dirchat-menu', role: 'menu' },
                h('button', {
                  className: 'dsc-dirchat-menu-item dsc-dirrow-menu-item--danger',
                  type: 'button',
                  role: 'menuitem',
                  disabled: entries.length === 0,
                  onClick: () => {
                    setMenuOpen(false);
                    clearHistoryStore();
                  },
                }, menuItemIcon(TrashIcon), menuItemLabel(copy.clearHistory))) : null)),
          list,
          menuEntry === null ? null : h('div', {
            className: 'dsc-dirrow-menu dsc-dirrow-menu--floating',
            role: 'menu',
            style: { left: `${rowMenu.left}px`, top: `${rowMenu.top}px` },
          },
            h('button', { className: 'dsc-dirrow-menu-item', type: 'button', role: 'menuitem', onClick: () => pinRow(menuEntry.url, menuEntry.pinned !== true) }, h('span', { className: 'dsc-dir-menu-icon' }, pinIcon(menuEntry.pinned === true)), menuItemLabel(menuEntry.pinned === true ? copy.unpin : copy.pin)),
            h('button', { className: 'dsc-dirrow-menu-item', type: 'button', role: 'menuitem', onClick: () => startRowRename(menuEntry.url) }, menuItemIcon(EditIcon), menuItemLabel(copy.rename)),
            h('button', { className: 'dsc-dirrow-menu-item', type: 'button', role: 'menuitem', onClick: (event) => copyRowLink(menuEntry.url, event) }, menuItemIcon(CopyIcon), menuItemLabel(copy.copyLink)),
            h('button', { className: 'dsc-dirrow-menu-item dsc-dirrow-menu-item--danger', type: 'button', role: 'menuitem', onClick: () => removeRow(menuEntry.url) }, menuItemIcon(TrashIcon), menuItemLabel(copy.removeEntry))),
          copyNotice === null ? null : h('span', {
            className: copyNotice.error ? 'dsc-dirrow-tip dsc-dirrow-tip--error' : 'dsc-dirrow-tip',
            role: 'status',
            style: { right: `${copyNotice.right}px`, top: `${copyNotice.top}px` },
          }, copyNotice.text),
          menusOpen ? h('div', {
            className: 'dsc-dir-menu-dismiss',
            'aria-hidden': true,
            onMouseDown: () => {
              setMenuOpen(false);
              setRowMenu(null);
              setFilterOpen(false);
            },
          }) : null) : null);
    }
    /** HARNESS / Chat switch directly under the new-session hero headline. */
    function HeroModeSwitch({ mode, onSelect }) {
      const copy = useCopy();
      return h('div', { className: 'dsc-hero-switch' },
        h('div', { className: 'dsc-hero-tabs', role: 'tablist', 'aria-label': copy.heroMode },
          h('button', {
            className: 'dsc-hero-tab',
            type: 'button',
            role: 'tab',
            'aria-selected': mode === 'harness',
            title: copy.heroHarness,
            onClick: () => onSelect('harness'),
          }, 'HARNESS'),
          h('button', {
            className: 'dsc-hero-tab',
            type: 'button',
            role: 'tab',
            'aria-selected': mode === 'chat',
            title: copy.heroChat,
            onClick: () => onSelect('chat'),
          }, 'Chat')));
    }
    /**
     * Chat-only composer for the new-session hero: text and image/file
     * attachments, without the workspace, mode, or permission controls. Sending
     * hands the content to the embedded DeepSeek Chat page (text into its input
     * box, files into its attachment area) instead of committing a Harness turn.
     */
    function HeroChatComposer({ active, onSend }) {
      const copy = useCopy();
      const [text, setText] = React.useState('');
      const [files, setFiles] = React.useState([]);
      const [notice, setNotice] = React.useState('');
      const [noticeError, setNoticeError] = React.useState(false);
      const [sending, setSending] = React.useState(false);
      const sendingRef = React.useRef(false);
      const timerRef = React.useRef(0);
      const areaRef = React.useRef(null);
      const typingRef = React.useRef(0);
      const fileInputRef = React.useRef(null);
      const [modelId, setModelId] = React.useState(() => readChatModel());
      const [modelOpen, setModelOpen] = React.useState(false);
      const [modelMenu, setModelMenu] = React.useState(null);
      const clearTimer = React.useCallback(() => {
        if (timerRef.current !== 0) {
          window.clearTimeout(timerRef.current);
          timerRef.current = 0;
        }
      }, []);
      React.useEffect(() => {
        if (!modelOpen) return undefined;
        const close = (event) => {
          const target = event.target;
          if (target instanceof Element) {
            if (target.closest('.dsc-model-picker') !== null) return;
            if (target.closest('.dsc-model-menu') !== null) return;
          }
          setModelOpen(false);
        };
        const onKeyDown = (event) => {
          if (event.key === 'Escape') setModelOpen(false);
        };
        document.addEventListener('mousedown', close, true);
        document.addEventListener('keydown', onKeyDown, true);
        return () => {
          document.removeEventListener('mousedown', close, true);
          document.removeEventListener('keydown', onKeyDown, true);
        };
      }, [modelOpen]);
      React.useEffect(() => {
        const onResult = (result) => {
          if (!sendingRef.current) return;
          clearTimer();
          sendingRef.current = false;
          setSending(false);
          if (result !== null && result.ok === true) {
            setText('');
            setFiles([]);
            setNotice(copy.composeDone);
            setNoticeError(false);
          } else if (result !== null && result.partial === true) {
            setText('');
            setFiles([]);
            setNotice(copy.composePartial);
            setNoticeError(true);
          } else {
            const noInput = result !== null && (result.textResult === 'no-input' || result.uploadResult === 'no-target');
            setNotice(noInput ? copy.composeNoInput : copy.composeFailed);
            setNoticeError(true);
          }
        };
        composeChannel.resultListeners.add(onResult);
        return () => composeChannel.resultListeners.delete(onResult);
      }, [clearTimer, copy]);
      React.useEffect(() => clearTimer, [clearTimer]);
      React.useEffect(() => {
        if (active) areaRef.current?.focus();
        else areaRef.current?.blur();
      }, [active]);
      React.useLayoutEffect(() => {
        const area = areaRef.current;
        if (area === null) return;
        area.style.height = 'auto';
        area.style.height = `${Math.min(area.scrollHeight, 200)}px`;
      }, [text]);
      const addFiles = React.useCallback((incoming) => {
        const list = [...incoming].filter((file) => file instanceof File);
        if (list.length === 0) return;
        const slots = Math.max(0, MAX_COMPOSE_FILES - files.length);
        if (slots === 0) return;
        const accepted = list.slice(0, slots);
        const loads = accepted.map((file) => new Promise((resolve) => {
          if (file.size > MAX_COMPOSE_FILE_BYTES) {
            setNotice(copy.composeTooLarge);
            setNoticeError(true);
            resolve(null);
            return;
          }
          const reader = new FileReader();
          reader.onload = () => resolve({
            id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            name: file.name || 'attachment',
            type: file.type || '',
            size: file.size,
            data: typeof reader.result === 'string' ? reader.result : '',
          });
          reader.onerror = () => resolve(null);
          reader.readAsDataURL(file);
        }));
        Promise.all(loads).then((loaded) => {
          const ready = loaded.filter((file) => file !== null && file.data !== '');
          if (ready.length > 0) setFiles((previous) => [...previous, ...ready].slice(0, MAX_COMPOSE_FILES));
        });
      }, [copy, files.length]);
      const removeFile = (id) => setFiles((previous) => previous.filter((file) => file.id !== id));
      const submit = () => {
        if (sendingRef.current) return;
        const trimmed = text.trim();
        if (trimmed === '' && files.length === 0) return;
        sendingRef.current = true;
        setSending(true);
        setNotice('');
        setNoticeError(false);
        clearTimer();
        // The host fills the page first, waits 5s, then clicks Send; allow more
        // than the panel's 30s stuck threshold before showing a Hero-side error.
        timerRef.current = window.setTimeout(() => {
          if (!sendingRef.current) return;
          sendingRef.current = false;
          setSending(false);
          setNotice(copy.composeFailed);
          setNoticeError(true);
        }, 45000);
        onSend({
          text: trimmed,
          files: files.map((file) => ({ name: file.name, type: file.type, data: file.data })),
          target: chatModelById(modelId).url,
          model: modelId,
        });
      };
      /** Opens the model switcher above the button (fixed, so the card cannot clip it). */
      const toggleModelMenu = (event) => {
        if (modelOpen) {
          setModelOpen(false);
          return;
        }
        const rect = event.currentTarget.getBoundingClientRect();
        const width = 168;
        const height = 84;
        const left = Math.max(8, Math.min(rect.right - width, (window.innerWidth || 1280) - width - 8));
        let top = rect.top - 6 - height;
        if (top < 8) top = rect.bottom + 6;
        setModelMenu({ left, top });
        setModelOpen(true);
      };
      const chooseModel = (id) => {
        setModelId(id);
        writeChatModel(id);
        setModelOpen(false);
        setModelMenu(null);
      };
      const onKeyDown = (event) => {
        const composing = event.nativeEvent !== undefined ? event.nativeEvent.isComposing === true : event.isComposing === true;
        if (event.key === 'Enter' && event.shiftKey !== true && composing !== true) {
          event.preventDefault();
          submit();
        }
      };
      const canSend = !sending && (text.trim() !== '' || files.length > 0);
      return h('div', {
        className: active ? 'dsc-hero-chat dsc-hero-chat--active' : 'dsc-hero-chat',
        onDragOver: (event) => event.preventDefault(),
        onDrop: (event) => {
          event.preventDefault();
          if (event.dataTransfer !== null && event.dataTransfer.files.length > 0) addFiles(event.dataTransfer.files);
        },
      },
        h('div', {
          className: 'dsc-hero-chat-card',
          'data-dsc-typing': typingRef.current === 0 ? undefined : (typingRef.current % 2 === 0 ? 'a' : 'b'),
        },
          files.length === 0 ? null : h('div', { className: 'dsc-hero-chat-files' }, files.map((file) => h('span', { key: file.id, className: 'dsc-hero-chat-file' },
            String(file.type).startsWith('image/') ? h('img', { src: file.data, alt: file.name }) : null,
            h('span', { className: 'dsc-hero-chat-file-name' }, file.name),
            h('button', {
              className: 'dsc-hero-chat-file-remove',
              type: 'button',
              title: copy.composeRemove,
              'aria-label': copy.composeRemove,
              onClick: () => removeFile(file.id),
            }, '×')))),
          h('textarea', {
            ref: areaRef,
            className: 'dsc-hero-chat-input',
            rows: 1,
            value: text,
            placeholder: copy.composePlaceholder,
            onChange: (event) => {
              typingRef.current = (typingRef.current + 1) % 1000000;
              setText(event.target.value);
            },
            onKeyDown,
            onPaste: (event) => {
              const pasted = event.clipboardData === undefined ? null : event.clipboardData.files;
              if (pasted !== null && pasted.length > 0) {
                event.preventDefault();
                addFiles(pasted);
              }
            },
          }),
          h('div', { className: 'dsc-hero-chat-row' },
            h('button', {
              className: 'dsc-hero-chat-attach',
              type: 'button',
              title: copy.composeAttach,
              'aria-label': copy.composeAttach,
              onClick: () => fileInputRef.current?.click(),
            }, h('svg', { viewBox: '0 0 16 16', width: 14, height: 14, 'aria-hidden': true, fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' }, h('path', { d: 'M8 3.5v9M3.5 8h9' }))),
            h('input', {
              ref: fileInputRef,
              className: 'dsc-hero-chat-file-input',
              type: 'file',
              multiple: true,
              onChange: (event) => {
                const picked = event.target.files;
                if (picked !== null) addFiles(picked);
                event.target.value = '';
              },
            }),
            h('span', { className: 'dsc-hero-chat-spacer' }),
            h('div', { className: 'dsc-model-picker' },
              h('button', {
                className: 'dsc-model-button',
                type: 'button',
                title: copy.chatModel,
                'aria-haspopup': 'listbox',
                'aria-expanded': modelOpen,
                onClick: toggleModelMenu,
              },
                h(ModelBadge, { provider: chatModelById(modelId), size: 16 }),
                h('span', { className: 'dsc-model-button-label' }, chatModelById(modelId).label),
                h('svg', { className: 'dsc-model-chevron', viewBox: '0 0 16 16', width: 10, height: 10, 'aria-hidden': true, fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' },
                  h('path', { d: 'M4 6.5 8 10.5l4-4' })))),
            h('button', {
              className: 'dsc-hero-chat-send',
              type: 'button',
              title: copy.composeSend,
              'aria-label': copy.composeSend,
              disabled: !canSend,
              onClick: submit,
            }, sending
              ? h('span', { 'aria-hidden': true }, '…')
              : h('svg', { viewBox: '0 0 16 16', width: 16, height: 16, 'aria-hidden': true, fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }, h('path', { d: 'M8 13V3M3.5 7.5 8 3l4.5 4.5' }))))),
        modelOpen && modelMenu !== null ? h('div', {
          className: 'dsc-model-menu',
          role: 'listbox',
          'aria-label': copy.chatModel,
          style: { left: `${modelMenu.left}px`, top: `${modelMenu.top}px` },
        },
          CHAT_MODELS.map((model) => h('button', {
            key: model.id,
            className: model.id === modelId ? 'dsc-model-item dsc-model-item--active' : 'dsc-model-item',
            type: 'button',
            role: 'option',
            'aria-selected': model.id === modelId,
            onClick: () => chooseModel(model.id),
          },
            h(ModelBadge, { provider: model, size: 16 }),
            h('span', { className: 'dsc-model-item-label' }, model.label),
            model.id === modelId ? h('span', { className: 'dsc-model-check' }, '✓') : null))) : null,
        notice === '' ? null : h('div', { className: noticeError ? 'dsc-hero-chat-notice dsc-hero-chat-notice--error' : 'dsc-hero-chat-notice', role: 'status' }, notice));
    }
    function SettingsPopover(props) {
      const { copy, zoom, onZoom, language, onLanguage, persistLogin, onPersistLogin, onClearLogin, cleared, diag } = props;
      return h('div', { className: 'dsc-popover', role: 'dialog', 'aria-label': copy.settings },
        h('p', { className: 'dsc-popover-title' }, copy.title),
        h('div', { className: 'dsc-divider' }),
        h('div', { className: 'dsc-row' }, h('span', { className: 'dsc-hint' }, copy.language)),
        h('div', { className: 'dsc-segment' }, LANGUAGES.map((item) => h('button', {
          key: item.id,
          type: 'button',
          'aria-pressed': language === item.id,
          onClick: () => onLanguage(item.id),
        }, copy === zh ? item.zh : item.en))),
        h('div', { className: 'dsc-divider' }),
        h('div', { className: 'dsc-row' },
          h('span', { className: 'dsc-hint' }, copy.login),
          h('button', {
            className: 'dsc-button',
            type: 'button',
            'aria-pressed': persistLogin,
            onClick: () => onPersistLogin(!persistLogin),
          }, persistLogin ? copy.loginOn : copy.loginOff)),
        h('p', { className: 'dsc-login-hint' }, copy.loginHint),
        diag === null ? null : h('div', { className: 'dsc-diag' },
          h('span', null, copy.diagTitle),
          h('span', null, `${copy.diagSnapshot}: ${diag.savedHasToken ? copy.diagYes : copy.diagNo}`),
          h('span', null, `${copy.diagLive}: ${diag.liveHasToken ? copy.diagYes : copy.diagNo}`)),
        h('button', { className: 'dsc-wide', type: 'button', onClick: onClearLogin }, cleared ? copy.cleared : copy.clearLogin),
        h('div', { className: 'dsc-divider' }),
        h('div', { className: 'dsc-row' },
          h('span', { className: 'dsc-hint' }, copy.zoom),
          h('div', { className: 'dsc-stepper' },
            h('button', { className: 'dsc-step', type: 'button', 'aria-label': copy.zoomOut, title: copy.zoomOut, disabled: zoom <= ZOOM_MIN, onClick: () => onZoom(zoom - ZOOM_STEP) }, '−'),
            h('span', { className: 'dsc-value', 'aria-live': 'polite' }, `${Math.round(zoom * 100)}%`),
            h('button', { className: 'dsc-step', type: 'button', 'aria-label': copy.zoomIn, title: copy.zoomIn, disabled: zoom >= ZOOM_MAX, onClick: () => onZoom(zoom + ZOOM_STEP) }, '+'))),
        h('div', { className: 'dsc-presets' }, ZOOM_PRESETS.map((preset) => h('button', {
          key: preset,
          className: 'dsc-preset',
          type: 'button',
          'aria-pressed': Math.abs(preset - zoom) < 0.005,
          onClick: () => onZoom(preset),
        }, `${Math.round(preset * 100)}%`))),
        h('button', { className: 'dsc-wide', type: 'button', onClick: () => onZoom(1) }, `${copy.reset} 100%`));
    }
    /** One tab's isolated guest: acquires its own lease, keeps its page alive while hidden. */
    function GuestPane({ tabId, initialUrl, active, zoom, bridge, labels, onNavigate, onMount, onUnmount, onNavState, onReady, syncGuest }) {
      const copy = labels;
      const host = React.useRef(null);
      const guest = React.useRef(null);
      const zoomRef = React.useRef(zoom);
      zoomRef.current = zoom;
      const initialUrlRef = React.useRef(initialUrl);
      initialUrlRef.current = initialUrl;
      const syncRef = React.useRef(syncGuest);
      syncRef.current = syncGuest;
      const navigateRef = React.useRef(onNavigate);
      navigateRef.current = onNavigate;
      const navStateRef = React.useRef(onNavState);
      navStateRef.current = onNavState;
      const readyRef = React.useRef(onReady);
      readyRef.current = onReady;
      const mountRef = React.useRef(onMount);
      mountRef.current = onMount;
      const unmountRef = React.useRef(onUnmount);
      unmountRef.current = onUnmount;
      const [status, setStatus] = React.useState('loading');
      const [detail, setDetail] = React.useState('');
      React.useEffect(() => {
        if (bridge === undefined) {
          setStatus('unavailable');
          return undefined;
        }
        let cancelled = false;
        let lease;
        let requested = false;
        const create = async () => {
          try {
            const reservation = await bridge.acquire(WORKSPACE_KEY);
            if (cancelled) {
              await bridge.release(reservation.lease);
              return;
            }
            lease = reservation.lease;
            const element = document.createElement('webview');
            element.className = 'dsc-guest';
            element.dataset.deepseekChatFrame = 'webview';
            element.setAttribute('name', reservation.lease);
            element.setAttribute('partition', reservation.partition);
            element.setAttribute('useragent', GUEST_UA);
            element.setAttribute('src', `about:blank#${reservation.lease}`);
            element.addEventListener('dom-ready', () => {
              if (cancelled) return;
              requested = true;
              try {
                element.setZoomFactor?.(zoomRef.current);
              } catch {
                // Older guest builds may reject an early zoom request; the fallback is the toolbar.
              }
              element.loadURL(initialUrlRef.current).catch((error) => {
                if (cancelled) return;
                setStatus('error');
                setDetail(String(error?.message || error));
              });
            }, { once: true });
            const report = () => navigateRef.current(tabId, element.getURL(), element.getTitle());
            const reportNavState = () => {
              try {
                navStateRef.current(tabId, { canGoBack: element.canGoBack(), canGoForward: element.canGoForward() });
              } catch {
                // Guest not ready for history queries yet.
              }
            };
            element.addEventListener('did-finish-load', () => {
              if (cancelled || !requested) return;
              try {
                element.setZoomFactor?.(zoomRef.current);
              } catch {
                // Keep the current percentage.
              }
              setStatus('ready');
              report();
              reportNavState();
              element.executeJavaScript(INLINE_NAVIGATION_JS).catch(() => {});
              element.executeJavaScript(COMPOSER_PIN_JS).catch(() => {});
              readyRef.current(tabId, element);
              syncRef.current(element);
            });
            element.addEventListener('did-navigate', () => {
              report();
              reportNavState();
            });
            element.addEventListener('did-navigate-in-page', (event) => {
              if (event.isMainFrame !== true) return;
              report();
              reportNavState();
            });
            element.addEventListener('page-title-updated', report);
            element.addEventListener('did-fail-load', (event) => {
              if (cancelled || event.isMainFrame !== true || event.errorCode === -3) return;
              setStatus('error');
              setDetail(`${event.errorCode} ${event.errorDescription}`);
              try {
                writeApp('deepseek-chat-switch:last-error', { at: Date.now(), label: 'did-fail-load', message: `${event.errorCode} ${event.errorDescription}`, url: element.getURL() });
              } catch {
                // Diagnostics are best-effort.
              }
            });
            element.addEventListener('crashed', () => {
              try {
                writeApp('deepseek-chat-switch:last-error', { at: Date.now(), label: 'guest-crashed', message: 'webview guest process crashed', url: element.getURL() });
              } catch {
                // Diagnostics are best-effort.
              }
            });
            element.addEventListener('render-process-gone', (event) => {
              try {
                writeApp('deepseek-chat-switch:last-error', { at: Date.now(), label: 'render-process-gone', message: String(event.reason ?? event.details?.reason ?? 'gone'), url: element.getURL() });
              } catch {
                // Diagnostics are best-effort.
              }
            });
            guest.current = element;
            host.current?.append(element);
            mountRef.current(tabId, element);
          } catch (reason) {
            if (cancelled) return;
            setStatus('error');
            setDetail(String(reason?.message || reason));
          }
        };
        create();
        return () => {
          cancelled = true;
          unmountRef.current(tabId);
          guest.current?.remove();
          guest.current = null;
          if (lease !== undefined) bridge.release(lease).catch(() => {});
          lease = undefined;
        };
      }, [bridge, tabId]);
      React.useEffect(() => {
        try {
          guest.current?.setZoomFactor?.(zoom);
        } catch {
          // Ignore zoom requests before the guest exists.
        }
      }, [zoom]);
      return h('div', { className: 'dsc-pane', hidden: !active },
        h('div', { ref: host, className: 'dsc-pane-host' }),
        status === 'ready' ? null : h('div', { className: 'dsc-status' },
          h('div', { className: status === 'error' ? 'dsc-error' : undefined },
            status === 'unavailable' ? copy.unavailable : status === 'error' ? detail : copy.loading)));
    }

    /** Catch render failures so a bad state shows a message instead of a blank panel. */
    class PanelBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { message: '' };
      }
      static getDerivedStateFromError(error) {
        const message = String(error?.stack ?? error?.message ?? error);
        try {
          writeApp('deepseek-chat-switch:last-error', { at: Date.now(), label: 'render', message });
        } catch {
          // Diagnostics are best-effort.
        }
        return { message };
      }
      componentDidCatch(error) {
        console.error('deepseek-chat-switch panel failed', error);
      }
      render() {
        if (this.state.message !== '') return h('pre', { className: 'dsc-crash' }, this.state.message);
        return this.props.children;
      }
    }
    /** Half-pane DeepSeek surface living in the right sidebar of a conversation. */
    function SidebarChat() {
      const copy = useCopy();
      const zoomRef = React.useRef(readZoom());
      const langRef = React.useRef(readLang());
      const persistRef = React.useRef(readPersistLogin());
      const guestRef = React.useRef(null);
      const [zoom] = React.useState(1);
      const [address, setAddress] = React.useState(CHAT_URL);
      const [nav, setNav] = React.useState({ canGoBack: false, canGoForward: false });
      const [notice, setNotice] = React.useState('');
      const startNewConversation = React.useCallback(() => {
        guestRef.current?.loadURL(CHAT_URL).catch(() => {});
      }, []);
      const pendingFill = React.useRef(null);
      const fillTimer = React.useRef(0);
      React.useEffect(() => {
        if (notice === '') return undefined;
        const timer = setTimeout(() => setNotice(''), 4000);
        return () => clearTimeout(timer);
      }, [notice]);
      const applyFill = React.useCallback((text, attempt = 0) => {
        const element = guestRef.current;
        if (element === null) {
          pendingFill.current = text;
          return;
        }
        element.executeJavaScript(fillScript(text))
          .then((result) => {
            if (result === 'filled' || result === 'unverified') {
              setNotice('');
              return;
            }
            if (attempt >= 4) {
              setNotice(copy.fillFailed);
              return;
            }
            window.clearTimeout(fillTimer.current);
            fillTimer.current = window.setTimeout(() => applyFill(text, attempt + 1), 500);
          })
          .catch(() => {
            if (attempt >= 4) {
              setNotice(copy.fillFailed);
              return;
            }
            window.clearTimeout(fillTimer.current);
            fillTimer.current = window.setTimeout(() => applyFill(text, attempt + 1), 500);
          });
      }, []);
      React.useEffect(() => () => window.clearTimeout(fillTimer.current), []);
      React.useEffect(() => {
        const consumeNewChat = () => {
          if (!newChatChannel.pending) return;
          newChatChannel.pending = false;
          startNewConversation();
        };
        const consumeFill = () => {
          const text = fillChannel.pending;
          if (text === null) return;
          fillChannel.pending = null;
          applyFill(text);
        };
        newChatChannel.listeners.add(consumeNewChat);
        fillChannel.listeners.add(consumeFill);
        consumeNewChat();
        consumeFill();
        return () => {
          newChatChannel.listeners.delete(consumeNewChat);
          fillChannel.listeners.delete(consumeFill);
        };
      }, [applyFill, startNewConversation]);
      return h('div', { className: 'dsc-root dsc-sidebar' },
        h('div', { className: 'dsc-sidebar-bar' },
          h('button', {
            className: 'dsc-address-tool',
            type: 'button',
            title: copy.back,
            'aria-label': copy.back,
            disabled: !nav.canGoBack,
            onClick: () => {
              const element = guestRef.current;
              if (element?.canGoBack() === true) element.goBack();
            },
          }, h(ChevronIcon, { direction: 'left' })),
          h('button', {
            className: 'dsc-address-tool',
            type: 'button',
            title: copy.forward,
            'aria-label': copy.forward,
            disabled: !nav.canGoForward,
            onClick: () => {
              const element = guestRef.current;
              if (element?.canGoForward() === true) element.goForward();
            },
          }, h(ChevronIcon, { direction: 'right' })),
          h('button', {
            className: 'dsc-address-tool',
            type: 'button',
            title: copy.refresh,
            'aria-label': copy.refresh,
            onClick: () => guestRef.current?.reload(),
          }, h(RefreshIcon)),
          h('span', { className: 'dsc-sidebar-address', title: address }, address),
          h('button', {
            className: 'dsc-summary',
            type: 'button',
            title: copy.newConversation,
            onClick: startNewConversation,
          }, copy.newConversation),
          notice === '' ? null : h('span', { className: 'dsc-notice', role: 'alert' }, notice)),
        h('section', { className: 'dsc-body' },
          h(GuestPane, {
            tabId: 'sidebar',
            initialUrl: CHAT_URL,
            active: true,
            zoom,
            bridge: globalThis.dshDesktop?.browser,
            labels: copy,
            onNavigate: (_tabId, url, title) => {
              if (!isHistoryVisitSuppressed(url)) pushHistory(url, title);
              setActivePage(url);
              if (typeof url === 'string' && url.length > 0) setAddress(url);
            },
            onMount: (_tabId, element) => {
              guestRef.current = element;
            },
            onUnmount: () => {
              guestRef.current = null;
            },
            onNavState: (_tabId, next) => setNav(next),
            onReady: () => {
              if (newChatChannel.pending) {
                newChatChannel.pending = false;
                startNewConversation();
              }
              if (pendingFill.current !== null) {
                const text = pendingFill.current;
                pendingFill.current = null;
                applyFill(text);
              }
            },
            syncGuest: (element) => syncGuestStorage(element, persistRef.current, langRef.current),
          })));
    }
    function ChatPanel({ close }) {
      const copy = useCopy();
      const initialTabs = React.useRef(null);
      if (initialTabs.current === null) initialTabs.current = readTabs();
      const [tabs, setTabs] = React.useState(initialTabs.current);
      const [activeId, setActiveId] = React.useState(initialTabs.current[0].id);
      const tabsRef = React.useRef(tabs);
      tabsRef.current = tabs;
      const activeRef = React.useRef(activeId);
      activeRef.current = activeId;
      const guests = React.useRef(new Map());
      const zoomRef = React.useRef(readZoom());
      const langRef = React.useRef(readLang());
      const persistRef = React.useRef(readPersistLogin());
      const historyRef = React.useRef(readHistory());
      const [zoom, setZoom] = React.useState(zoomRef.current);
      const [language, setLanguage] = React.useState(langRef.current);
      const [persistLogin, setPersistLogin] = React.useState(persistRef.current);
      const [history, setHistory] = React.useState(historyRef.current);
      const [cleared, setCleared] = React.useState(false);
      const [diag, setDiag] = React.useState(null);
      const [openPanel, setOpenPanel] = React.useState(null);
      const [hoverTip, setHoverTip] = React.useState(null);
      const [draft, setDraft] = React.useState(null);
      const [suggestOpen, setSuggestOpen] = React.useState(false);
      const [navState, setNavState] = React.useState({});
      const [notice, setNotice] = React.useState('');
      const pendingSummary = React.useRef(null);
      /** URL chosen in the sidebar directory, loaded once the guest can navigate. */
      const pendingOpen = React.useRef(null);
      /** Guests whose first page load has finished (safe to call loadURL). */
      const readyGuests = React.useRef(new Set());
      /** Hero-composer payload waiting for the active Chat guest to become ready. */
      const pendingCompose = React.useRef(null);
      /** Latest round handed to the Chat page; backs the floating retry panel. */
      const [composeRecord, setComposeRecord] = React.useState(null);
      const [composeClock, setComposeClock] = React.useState(() => Date.now());
      const [previewFile, setPreviewFile] = React.useState(null);
      const composeRecordRef = React.useRef(null);
      composeRecordRef.current = composeRecord;
      /** Content already filled into the page, waiting for the delayed Send click. */
      const pendingSend = React.useRef(null);
      /** Element/content kept for the supplementary 3s focus+Enter attempt. */
      const pendingFallback = React.useRef(null);
      /** Guards the 5s countdown so one round cannot fire Send twice. */
      const sendGate = React.useRef(false);
      /** Formats attachment sizes for the sent-round panel. */
      const formatFileSize = (bytes) => {
        if (typeof bytes !== 'number' || !Number.isFinite(bytes) || bytes < 0) return '';
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
      };
      const bookmarksRef = React.useRef(readBookmarks());
      const [bookmarks, setBookmarks] = React.useState(bookmarksRef.current);
      const addressInput = React.useRef(null);
      /** First publication must not override a page selected from the sidebar list. */
      const publishedPage = React.useRef(false);
      const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
      const addressValue = draft === null ? activeTab.url : draft;
      const composePinned = composeRecord !== null && composeRecord.pinned === true;
      const composeRemaining = composeRecord === null
        ? 0
        : composePinned
          ? Math.max(0, Math.ceil(composeRecord.pausedExpireMs / 1000))
          : Math.max(0, Math.ceil((composeRecord.expiresAt - composeClock) / 1000));
      const composeSendRemaining = composeRecord === null || composeRecord.phase !== 'wait'
        ? null
        : composePinned
          ? Math.max(0, Math.ceil(composeRecord.pausedSendMs / 1000))
          : Math.max(0, Math.ceil((composeRecord.sendAt - composeClock) / 1000));
      const composeFallbackRemaining = composeRecord === null || composeRecord.phase !== 'fallback'
        ? null
        : Math.max(0, Math.ceil((composeRecord.fallbackAt - composeClock) / 1000));
      const composeCountdown = composeRecord === null
        ? ''
        : composePinned
          ? copy.pinnedLabel
          : composeRecord.phase === 'wait'
            ? copy.sendInSec.replace('{s}', String(composeSendRemaining))
            : copy.sentExpires.replace('{s}', String(composeRemaining));
      const composeStatus = composeRecord === null
        ? ''
        : composeRecord.phase === 'transfer'
          ? copy.fillingToChat
          : composeRecord.phase === 'wait'
            ? copy.contentReady
            : composeRecord.phase === 'send'
              ? copy.clickingSend
              : composeRecord.phase === 'fallback'
                ? copy.enterInSec.replace('{s}', String(composeFallbackRemaining))
                : composeRecord.phase === 'fallback-run'
                  ? copy.enterSending
                  : composeRecord.outcome === 'ok'
                    ? copy.sentToChat
                    : composeRecord.outcome === 'partial'
                      ? copy.composePartial
                      : composeRecord.textResult === 'no-input'
                        ? copy.composeNoInput
                        : copy.sentFailed;
      const focusAddress = React.useCallback((url) => {
        setDraft(url);
        setSuggestOpen(true);
        requestAnimationFrame(() => {
          addressInput.current?.focus();
          addressInput.current?.select();
        });
      }, []);
      const navigateTo = React.useCallback((url) => {
        if (typeof url !== 'string' || url.length === 0) return;
        setDraft(null);
        setSuggestOpen(false);
        activeGuest()?.loadURL(url).catch(() => {});
      }, []);
      const submitAddress = React.useCallback(() => {
        const target = normalizeAddress(draft ?? '');
        setSuggestOpen(false);
        if (target === null) {
          setDraft(null);
          return;
        }
        navigateTo(target);
      }, [draft, navigateTo]);
      const toggleBookmark = React.useCallback(() => {
        const url = activeTab.url;
        if (typeof url !== 'string' || !url.startsWith('https://')) return;
        const existing = bookmarksRef.current.find((item) => item.url === url);
        const next = existing !== undefined
          ? bookmarksRef.current.filter((item) => item.url !== url)
          : [{ url, title: activeTab.title || url, at: Date.now() }, ...bookmarksRef.current];
        bookmarksRef.current = next;
        writeApp(BOOKMARKS_KEY, next);
        setBookmarks(next);
      }, [activeTab.title, activeTab.url]);
      const removeBookmark = React.useCallback((url) => {
        const next = bookmarksRef.current.filter((item) => item.url !== url);
        bookmarksRef.current = next;
        writeApp(BOOKMARKS_KEY, next);
        setBookmarks(next);
      }, []);
      const suggestions = React.useMemo(() => {
        const query = (draft ?? '').trim().toLowerCase();
        const typed = normalizeAddress(draft ?? '');
        const pool = [];
        for (const item of bookmarks) pool.push({ url: item.url, title: item.title || item.url, source: 'favorites' });
        for (const item of history) pool.push({ url: item.url, title: item.title || item.url, source: 'history' });
        for (const host of DEFAULT_HOSTS) pool.push({ url: host, title: host, source: 'default' });
        const seen = new Set();
        const rows = [];
        if (typed !== null) {
          seen.add(typed);
          rows.push({ url: typed, title: typed, source: 'typed' });
        }
        for (const item of pool) {
          if (rows.length >= SUGGEST_LIMIT) break;
          if (seen.has(item.url)) continue;
          if (query.length > 0 && !item.url.toLowerCase().includes(query) && !item.title.toLowerCase().includes(query)) continue;
          seen.add(item.url);
          rows.push(item);
        }
        return rows;
      }, [bookmarks, draft, history]);
      const recentEntries = React.useMemo(() => history.slice(0, RECENT_LIMIT), [history]);
      const isBookmarked = bookmarks.some((item) => item.url === activeTab.url);
      const settingsOpen = openPanel === 'settings';
      const historyOpen = openPanel === 'history';
      const favoritesOpen = openPanel === 'favorites';
      const bridge = globalThis.dshDesktop?.browser;
      React.useEffect(() => {
        writeApp(TABS_KEY, tabs.map((tab) => ({ url: tab.url, title: tab.title })).slice(0, MAX_TABS));
      }, [tabs]);
      // Publish the visible page so the sidebar Chat history can mark it selected.
      React.useEffect(() => {
        if (!publishedPage.current) {
          publishedPage.current = true;
          if (activePageStore.url === '') setActivePage(activeTab.url);
          return;
        }
        setActivePage(activeTab.url);
      }, [activeId, activeTab.url]);
      React.useEffect(() => () => setActivePage(''), []);
      // Opening DeepSeek Chat defaults the sidebar session directory to Chat.
      React.useEffect(() => {
        setDirectoryMode('chat');
      }, []);
      const recordHistory = React.useCallback((url, title) => {
        if (typeof url !== 'string' || !url.startsWith('https://')) return;
        // Opening a page from the sidebar list keeps its stored time and order.
        if (isHistoryVisitSuppressed(url)) return;
        const next = pushHistory(url, title);
        historyRef.current = next;
        setHistory(next);
      }, []);
      const handleNavigate = React.useCallback((tabId, url, title) => {
        recordHistory(url, title);
        if (typeof url !== 'string' || !url.startsWith('https://')) return;
        setTabs((previous) => {
          const index = previous.findIndex((tab) => tab.id === tabId);
          if (index < 0) return previous;
          const current = previous[index];
          if (current.url === url && current.title === (title || current.title)) return previous;
          const next = previous.slice();
          next[index] = { ...current, url, title: title || current.title };
          return next;
        });
      }, [recordHistory]);
      const handleMount = React.useCallback((tabId, element) => {
        guests.current.set(tabId, element);
      }, []);
      const handleUnmount = React.useCallback((tabId) => {
        guests.current.delete(tabId);
        readyGuests.current.delete(tabId);
      }, []);
      /** Load the directory-chosen URL once the active guest has finished loading. */
      const applyPendingOpen = React.useCallback(() => {
        const url = pendingOpen.current;
        if (url === null) return;
        const tabId = activeRef.current;
        const target = guests.current.get(tabId);
        if (target === undefined || !readyGuests.current.has(tabId)) return;
        pendingOpen.current = null;
        target.loadURL(url).catch(() => {});
      }, []);
      /** Start showing the sent-round panel for a fresh transfer. */
      const startComposeRecord = React.useCallback((payload, tabId) => {
        const now = Date.now();
        sendGate.current = false;
        pendingSend.current = null;
        pendingFallback.current = null;
        setPreviewFile(null);
        setComposeClock(now);
        setComposeRecord({
          tabId,
          payload,
          phase: 'transfer',
          outcome: '',
          pinned: false,
          sendAt: 0,
          fallbackAt: 0,
          pausedSendMs: 0,
          pausedExpireMs: 0,
          textResult: '',
          uploadResult: '',
          sendResult: '',
          startedAt: now,
          expiresAt: now + COMPOSE_RECORD_TTL_MS,
        });
      }, []);
      /** Update the sent-round panel for the current payload. */
      const patchComposeRecord = React.useCallback((payload, patch) => {
        setComposeRecord((current) => current === null || current.payload !== payload ? current : { ...current, ...patch });
        setComposeClock(Date.now());
      }, []);
      /** After the Send click, schedule the supplementary focus+Enter attempt. */
      const scheduleEnterFallback = React.useCallback((pending, sendResult) => {
        pendingFallback.current = pending;
        patchComposeRecord(pending.payload, {
          phase: 'fallback',
          fallbackAt: Date.now() + COMPOSE_ENTER_FALLBACK_MS,
          startedAt: Date.now(),
          sendResult,
          expiresAt: Date.now() + COMPOSE_RECORD_TTL_MS,
        });
      }, [patchComposeRecord]);
      /** Final state of a round once the send click and Enter fallback have run. */
      const finishComposeSend = React.useCallback((payload, content, sendResult, fallbackResult) => {
        sendGate.current = false;
        pendingSend.current = null;
        pendingFallback.current = null;
        const sent = sendResult === 'clicked' || sendResult === 'enter' || fallbackResult === 'enter';
        const ok = sent && content.textOk && content.uploadOk;
        publishComposeResult({
          ok,
          partial: sent && !ok,
          textResult: content.textResult,
          uploadResult: content.uploadResult,
          sendResult,
          fallbackResult,
        });
        patchComposeRecord(payload, {
          phase: 'done',
          outcome: ok ? 'ok' : sent ? 'partial' : 'failed',
          textResult: content.textResult,
          uploadResult: content.uploadResult,
          sendResult,
          fallbackAt: 0,
          sendAt: 0,
          expiresAt: Date.now() + COMPOSE_RECORD_TTL_MS,
        });
      }, [patchComposeRecord]);
      /** Fill text/files first; the delayed Send click is handled by the panel. */
      const runContentTransfer = React.useCallback((element, payload, tabId) => {
        fillComposeContent(element, payload)
          .then((content) => {
            if (!content.canSend) {
              publishComposeResult({
                ok: false,
                textResult: content.textResult,
                uploadResult: content.uploadResult,
              });
              patchComposeRecord(payload, {
                phase: 'done',
                outcome: 'failed',
                textResult: content.textResult,
                uploadResult: content.uploadResult,
                expiresAt: Date.now() + COMPOSE_RECORD_TTL_MS,
              });
              return;
            }
            pendingSend.current = { element, payload, tabId, content };
            patchComposeRecord(payload, {
              phase: 'wait',
              sendAt: Date.now() + COMPOSE_SEND_DELAY_MS,
              startedAt: Date.now(),
              textResult: content.textResult,
              uploadResult: content.uploadResult,
              expiresAt: Date.now() + COMPOSE_RECORD_TTL_MS,
            });
          })
          .catch(() => {
            publishComposeResult({ ok: false });
            patchComposeRecord(payload, {
              phase: 'done',
              outcome: 'failed',
              expiresAt: Date.now() + COMPOSE_RECORD_TTL_MS,
            });
          });
      }, [patchComposeRecord]);
      /** Fill the hero composer's text/files into the active Chat guest once ready. */
      const applyPendingCompose = React.useCallback(() => {
        const payload = pendingCompose.current;
        if (payload === null) return;
        const tabId = activeRef.current;
        const element = guests.current.get(tabId);
        if (element === undefined || !readyGuests.current.has(tabId)) return;
        let url = '';
        try {
          url = element.getURL();
        } catch {
          url = '';
        }
        const targetUrl = typeof payload.target === 'string' && payload.target.length > 0 ? payload.target : CHAT_URL;
        let targetHost = 'chat.deepseek.com';
        try {
          targetHost = new URL(targetUrl).hostname;
        } catch {
          targetHost = 'chat.deepseek.com';
        }
        let matches = false;
        try {
          matches = targetHost === 'chat.deepseek.com'
            ? url.startsWith('https://chat.deepseek.com')
            : new URL(url).hostname === targetHost;
        } catch {
          matches = false;
        }
        if (!matches) {
          element.loadURL(targetUrl).catch(() => {});
          return;
        }
        pendingCompose.current = null;
        runContentTransfer(element, payload, tabId);
      }, [runContentTransfer]);
      const runSummary = React.useCallback((element, pageUrl) => {
        element.executeJavaScript(summaryScript(pageUrl))
          .then((result) => {
            if (result === 'clicked' || result === 'enter') setNotice('');
            else setNotice(copy.summaryFailed);
          })
          .catch(() => setNotice(copy.summaryFailed));
      }, [copy]);
      const summarizeActiveTab = React.useCallback(() => {
        const element = guests.current.get(activeRef.current);
        if (element === undefined) return;
        const pageUrl = activeTab.url;
        if (typeof pageUrl !== 'string' || pageUrl.length === 0) return;
        if (pageUrl.startsWith('https://chat.deepseek.com')) {
          runSummary(element, pageUrl);
          return;
        }
        pendingSummary.current = { tabId: activeRef.current, url: pageUrl };
        element.loadURL(CHAT_URL).catch(() => {});
      }, [activeTab.url, runSummary]);
      const handleReady = React.useCallback((tabId, element) => {
        readyGuests.current.add(tabId);
        const targetUrl = pendingOpen.current;
        if (targetUrl !== null && tabId === activeRef.current) {
          let current = '';
          try {
            current = element.getURL();
          } catch {
            current = '';
          }
          pendingOpen.current = null;
          if (current !== targetUrl) element.loadURL(targetUrl).catch(() => {});
        }
        const pending = pendingSummary.current;
        if (pending !== null && pending.tabId === tabId) {
          pendingSummary.current = null;
          runSummary(element, pending.url);
        }
        applyPendingCompose();
      }, [applyPendingCompose, runSummary]);
      React.useEffect(() => {
        if (notice === '') return undefined;
        const timer = setTimeout(() => setNotice(''), 4000);
        return () => clearTimeout(timer);
      }, [notice]);
      const handleNavState = React.useCallback((tabId, next) => {
        setNavState((previous) => {
          const current = previous[tabId];
          if (current !== undefined && current.canGoBack === next.canGoBack && current.canGoForward === next.canGoForward) return previous;
          return { ...previous, [tabId]: next };
        });
      }, []);
      const activeNav = navState[activeId] ?? { canGoBack: false, canGoForward: false };
      const syncGuest = React.useCallback((element) => syncGuestStorage(element, persistRef.current, langRef.current), []);
      const activeGuest = () => guests.current.get(activeRef.current);
      const applyZoom = React.useCallback((next) => {
        const value = clampZoom(next);
        zoomRef.current = value;
        setZoom(value);
        writeApp(ZOOM_KEY, value);
        for (const element of guests.current.values()) {
          try {
            element.setZoomFactor?.(value);
          } catch {
            // Ignore guests that are still attaching.
          }
        }
      }, []);
      const reloadAll = React.useCallback(() => {
        for (const element of guests.current.values()) element.reload();
      }, []);
      const applyLanguage = React.useCallback((next) => {
        langRef.current = next;
        setLanguage(next);
        writeApp(LANG_KEY, next);
        const target = activeGuest();
        if (!target) return;
        target.executeJavaScript(writeGuestJs({ [LOCALE_KEY]: localeValue(next) }))
          .then(() => reloadAll())
          .catch(() => {});
      }, [reloadAll]);
      const applyPersistLogin = React.useCallback((next) => {
        persistRef.current = next;
        setPersistLogin(next);
        writeApp(LOGIN_KEY, next);
      }, []);

      const clearSavedLogin = React.useCallback(() => {
        writeApp(SNAPSHOT_KEY, null);
        setCleared(true);
        const target = activeGuest();
        if (!target) return;
        target.executeJavaScript('(() => { try { localStorage.clear(); } catch (error) {} return true; })()')
          .then(() => reloadAll())
          .catch(() => {});
      }, [reloadAll]);
      const openHistoryEntry = React.useCallback((url) => {
        setOpenPanel(null);
        const target = activeGuest();
        if (!target) return;
        target.loadURL(url).catch(() => {});
      }, []);
      const clearHistory = React.useCallback(() => {
        historyRef.current = [];
        clearHistoryStore();
        setHistory([]);
      }, []);
      // Keep the header popover in sync with history recorded elsewhere (sidebar directory).
      React.useEffect(() => {
        const refresh = (next) => {
          const value = Array.isArray(next) ? next : readHistory();
          historyRef.current = value;
          setHistory(value);
        };
        historyChannel.listeners.add(refresh);
        return () => historyChannel.listeners.delete(refresh);
      }, []);
      // Open a URL chosen in the sidebar directory on the active tab.
      React.useEffect(() => {
        const consume = () => {
          const url = openChatChannel.pending;
          if (url === null) return;
          openChatChannel.pending = null;
          pendingOpen.current = url;
          setDraft(null);
          setSuggestOpen(false);
          setOpenPanel(null);
          setTabs((previous) => {
            const index = previous.findIndex((tab) => tab.id === activeRef.current);
            if (index < 0) return previous;
            const current = previous[index];
            if (current.url === url) return previous;
            const next = previous.slice();
            next[index] = { ...current, url };
            return next;
          });
          applyPendingOpen();
        };
        openChatChannel.listeners.add(consume);
        consume();
        return () => openChatChannel.listeners.delete(consume);
      }, [applyPendingOpen]);
      // Hand the hero composer's text/files to the active Chat guest.
      React.useEffect(() => {
        const consume = () => {
          const payload = composeChannel.pending;
          if (payload === null) return;
          composeChannel.pending = null;
          pendingCompose.current = payload;
          startComposeRecord(payload, activeRef.current);
          applyPendingCompose();
        };
        composeChannel.listeners.add(consume);
        consume();
        return () => composeChannel.listeners.delete(consume);
      }, [applyPendingCompose, startComposeRecord]);
      // Tick the sent-round panel countdown while it is visible.
      React.useEffect(() => {
        if (composeRecord === null) return undefined;
        const timer = window.setInterval(() => setComposeClock(Date.now()), 250);
        return () => window.clearInterval(timer);
      }, [composeRecord]);
      // Countdown state machine: close the panel, click Send after 5s, then
      // focus+Enter 3s later as a fallback. Pinned panels pause the countdowns.
      React.useEffect(() => {
        if (composeRecord === null) return;
        const now = Date.now();
        if (composeRecord.pinned !== true) {
          if (now >= composeRecord.expiresAt) {
            pendingCompose.current = null;
            pendingSend.current = null;
            pendingFallback.current = null;
            sendGate.current = false;
            setPreviewFile(null);
            setComposeRecord(null);
            return;
          }
          if (composeRecord.phase === 'wait' && composeRecord.sendAt > 0 && now >= composeRecord.sendAt && sendGate.current === false) {
            const pending = pendingSend.current;
            if (pending === null) {
              publishComposeResult({ ok: false });
              patchComposeRecord(composeRecord.payload, { phase: 'done', outcome: 'failed', sendAt: 0, expiresAt: Date.now() + COMPOSE_RECORD_TTL_MS });
              return;
            }
            sendGate.current = true;
            pendingSend.current = null;
            patchComposeRecord(composeRecord.payload, { phase: 'send', sendAt: 0, startedAt: Date.now() });
            clickComposeSend(pending.element, pending.payload.files.length > 0)
              .then((sendResult) => scheduleEnterFallback(pending, sendResult))
              .catch(() => scheduleEnterFallback(pending, 'error'));
            return;
          }
        }
        if (composeRecord.phase === 'fallback' && composeRecord.fallbackAt > 0 && now >= composeRecord.fallbackAt) {
          const pending = pendingFallback.current;
          if (pending === null) {
            finishComposeSend(composeRecord.payload, { textOk: true, uploadOk: true, textResult: '', uploadResult: '' }, composeRecord.sendResult ?? 'error', 'error');
            return;
          }
          pendingFallback.current = null;
          patchComposeRecord(composeRecord.payload, { phase: 'fallback-run', fallbackAt: 0, startedAt: Date.now() });
          enterComposeFallback(pending.element)
            .then((fallbackResult) => finishComposeSend(pending.payload, pending.content, composeRecord.sendResult ?? 'error', fallbackResult))
            .catch(() => finishComposeSend(pending.payload, pending.content, composeRecord.sendResult ?? 'error', 'error'));
          return;
        }
        if (composeRecord.pinned !== true && (composeRecord.phase === 'transfer' || composeRecord.phase === 'send' || composeRecord.phase === 'fallback-run') && now - composeRecord.startedAt >= COMPOSE_STUCK_MS) {
          pendingCompose.current = null;
          pendingSend.current = null;
          pendingFallback.current = null;
          sendGate.current = false;
          publishComposeResult({ ok: false });
          patchComposeRecord(composeRecord.payload, { phase: 'done', outcome: 'failed', expiresAt: Date.now() + COMPOSE_RECORD_TTL_MS });
        }
      }, [composeClock, composeRecord, finishComposeSend, patchComposeRecord, scheduleEnterFallback]);
      // Escape closes the sent-round panel and clears its payload.
      React.useEffect(() => {
        if (composeRecord === null) return undefined;
        const onKeyDown = (event) => {
          if (event.key !== 'Escape') return;
          pendingCompose.current = null;
          pendingSend.current = null;
          pendingFallback.current = null;
          sendGate.current = false;
          setPreviewFile(null);
          setComposeRecord(null);
        };
        document.addEventListener('keydown', onKeyDown, true);
        return () => document.removeEventListener('keydown', onKeyDown, true);
      }, [composeRecord]);
      const closeComposeRecord = React.useCallback(() => {
        pendingCompose.current = null;
        pendingSend.current = null;
        pendingFallback.current = null;
        sendGate.current = false;
        setPreviewFile(null);
        setComposeRecord(null);
      }, []);
      /** Pause/resume the countdowns while keeping the current round's data. */
      const toggleComposePin = React.useCallback(() => {
        const record = composeRecordRef.current;
        if (record === null) return;
        const now = Date.now();
        if (record.pinned === true) {
          const resumeSend = record.pausedSendMs;
          const resumeExpire = Math.max(1000, record.pausedExpireMs);
          setComposeClock(now);
          setComposeRecord({
            ...record,
            pinned: false,
            pausedSendMs: 0,
            pausedExpireMs: 0,
            sendAt: record.phase === 'wait' && resumeSend > 0 ? now + resumeSend : record.sendAt,
            expiresAt: now + resumeExpire,
          });
        } else {
          setComposeClock(now);
          setComposeRecord({
            ...record,
            pinned: true,
            pausedSendMs: record.phase === 'wait' && record.sendAt > 0 ? Math.max(0, record.sendAt - now) : 0,
            pausedExpireMs: Math.max(1000, record.expiresAt - now),
            sendAt: 0,
          });
        }
      }, []);
      const retryCompose = React.useCallback(() => {
        const record = composeRecordRef.current;
        if (record === null || record.phase !== 'done') return;
        const now = Date.now();
        pendingCompose.current = record.payload;
        sendGate.current = false;
        pendingSend.current = null;
        pendingFallback.current = null;
        setComposeClock(now);
        setComposeRecord({
          ...record,
          phase: 'transfer',
          outcome: '',
          pinned: false,
          sendAt: 0,
          fallbackAt: 0,
          pausedSendMs: 0,
          pausedExpireMs: 0,
          textResult: '',
          uploadResult: '',
          sendResult: '',
          startedAt: now,
          expiresAt: now + COMPOSE_RECORD_TTL_MS,
        });
        applyPendingCompose();
      }, [applyPendingCompose]);
      const addTab = React.useCallback(() => {
        const tab = { id: nextTabId(), url: CHAT_URL, title: '' };
        setTabs((previous) => (previous.length >= MAX_TABS ? previous : [...previous, tab]));
        setActiveId(tab.id);
        setOpenPanel(null);
      }, []);
      const closeTab = React.useCallback((tabId) => {
        const previous = tabsRef.current;
        const index = previous.findIndex((tab) => tab.id === tabId);
        if (index < 0) return;
        const next = previous.filter((tab) => tab.id !== tabId);
        if (next.length === 0) {
          const replacement = { id: nextTabId(), url: CHAT_URL, title: '' };
          setTabs([replacement]);
          setActiveId(replacement.id);
          return;
        }
        setTabs(next);
        if (activeRef.current === tabId) setActiveId(next[Math.min(index, next.length - 1)].id);
      }, []);
      React.useEffect(() => {
        if (openPanel !== 'settings') return;
        setDiag(readApp(DIAG_KEY, null));
      }, [openPanel]);
      React.useEffect(() => {
        if (openPanel === null) return undefined;
        const onPointerDown = (event) => {
          const target = event.target;
          if (target instanceof Element) {
            if (target.closest('.dsc-popover') !== null) return;
            if (target.closest('.dsc-settings') !== null) return;
          }
          setOpenPanel(null);
        };
        const onKeyDown = (event) => {
          if (event.key === 'Escape') setOpenPanel(null);
        };
        document.addEventListener('mousedown', onPointerDown, true);
        document.addEventListener('keydown', onKeyDown, true);
        return () => {
          document.removeEventListener('mousedown', onPointerDown, true);
          document.removeEventListener('keydown', onKeyDown, true);
        };
      }, [openPanel]);
      return h('main', { className: 'dsc-root' },
        h('header', { className: 'dsc-head' },
          h('div', { className: 'dsc-leading' },
            h('div', { className: 'dsc-settings' },
              h('button', {
                className: 'dsc-icon-button',
                type: 'button',
                title: copy.history,
                'aria-label': copy.history,
                'aria-haspopup': 'dialog',
                'aria-expanded': historyOpen,
                onClick: () => setOpenPanel(historyOpen ? null : 'history'),
              }, h(ClockIcon)),
              historyOpen ? h(HistoryPopover, { copy, entries: history, onOpen: openHistoryEntry, onClear: clearHistory }) : null),
            h('h1', { className: 'dsc-title' }, copy.title)),
            h('div', { className: 'dsc-address' },
              h('button', {
                className: 'dsc-address-tool',
                type: 'button',
                title: copy.back,
                'aria-label': copy.back,
                disabled: !activeNav.canGoBack,
                onClick: () => {
                  const target = activeGuest();
                  if (target?.canGoBack() === true) target.goBack();
                },
              }, h(ChevronIcon, { direction: 'left' })),
              h('button', {
                className: 'dsc-address-tool',
                type: 'button',
                title: copy.forward,
                'aria-label': copy.forward,
                disabled: !activeNav.canGoForward,
                onClick: () => {
                  const target = activeGuest();
                  if (target?.canGoForward() === true) target.goForward();
                },
              }, h(ChevronIcon, { direction: 'right' })),
              h('button', {
                className: 'dsc-address-tool',
                type: 'button',
                title: copy.refresh,
                'aria-label': copy.refresh,
                onClick: () => activeGuest()?.reload(),
              }, h(RefreshIcon)),
              h('input', {
                ref: addressInput,
                className: 'dsc-address-input',
                type: 'text',
                spellCheck: false,
                autoComplete: 'off',
                value: addressValue,
                placeholder: CHAT_URL,
                'aria-label': copy.address,
                onDoubleClick: (event) => {
                  event.preventDefault();
                  const input = event.currentTarget;
                  requestAnimationFrame(() => input.select());
                },
                onChange: (event) => {
                  setDraft(event.target.value);
                  setSuggestOpen(true);
                },
                onFocus: (event) => {
                  const input = event.currentTarget;
                  setDraft((current) => (current === null ? activeTab.url : current));
                  setSuggestOpen(true);
                  requestAnimationFrame(() => input.select());
                },
                onBlur: () => {
                  setDraft(null);
                  setSuggestOpen(false);
                },
                onKeyDown: (event) => {
                  if (event.key === 'Enter') {
                    event.preventDefault();
                    submitAddress();
                    event.currentTarget.blur();
                  } else if (event.key === 'Escape') {
                    event.preventDefault();
                    setDraft(null);
                    event.currentTarget.blur();
                  }
                },
              }),
              h('button', {
                className: 'dsc-address-star',
                type: 'button',
                title: isBookmarked ? copy.bookmarked : copy.bookmark,
                'aria-label': isBookmarked ? copy.bookmarked : copy.bookmark,
                'aria-pressed': isBookmarked,
                onClick: toggleBookmark,
              }, h(StarIcon, { filled: isBookmarked, size: 18 })),
              h('button', {
                className: 'dsc-summary',
                type: 'button',
                title: copy.summarizeHint,
                'aria-label': copy.summarizeHint,
                onClick: summarizeActiveTab,
              }, copy.summarize),
              notice === '' ? null : h('span', { className: 'dsc-notice', role: 'alert' }, notice),
              suggestOpen && ((draft ?? '').trim().length === 0 ? recentEntries.length > 0 : suggestions.length > 0) ? h('div', { className: 'dsc-suggest', role: 'listbox' },
                (draft ?? '').trim().length === 0
                  ? recentEntries.length === 0 ? null : [h('div', { key: 'recent-head', className: 'dsc-suggest-head' }, copy.recent),
                    ...recentEntries.map((entry) => h('button', {
                      key: `recent-${entry.url}`,
                      className: 'dsc-suggest-row',
                      type: 'button',
                      onMouseDown: (event) => event.preventDefault(),
                      onClick: () => navigateTo(entry.url),
                    },
                      h('span', { className: 'dsc-suggest-title' }, entry.title || entry.url),
                      h('span', { className: 'dsc-suggest-url' }, entry.url)))]
                  : [h('div', { key: 'suggest-head', className: 'dsc-suggest-head' }, copy.suggest),
                    ...suggestions.map((item) => h('button', {
                      key: `suggest-${item.url}`,
                      className: 'dsc-suggest-row',
                      type: 'button',
                      onMouseDown: (event) => event.preventDefault(),
                      onClick: () => navigateTo(item.url),
                    },
                      h('span', { className: 'dsc-suggest-title' }, item.source === 'typed' ? copy.openTyped : (item.title || item.url)),
                      h('span', { className: 'dsc-suggest-url' }, item.url)))]) : null),
          h('div', { className: 'dsc-actions' },
            h('button', { className: 'dsc-button', type: 'button', onClick: reloadAll }, copy.retry),
            h('button', { className: 'dsc-button', type: 'button', onClick: close }, copy.harness),
            h('div', { className: 'dsc-settings' },
              h('button', {
                className: 'dsc-icon-button',
                type: 'button',
                title: copy.favorites,
                'aria-label': copy.favorites,
                'aria-haspopup': 'dialog',
                'aria-expanded': favoritesOpen,
                onClick: () => setOpenPanel(favoritesOpen ? null : 'favorites'),
              }, h(StarIcon, { filled: false })),
              favoritesOpen ? h(FavoritesPopover, {
                copy,
                items: bookmarks,
                onOpen: (url) => {
                  setOpenPanel(null);
                  navigateTo(url);
                },
                onRemove: removeBookmark,
              }) : null),
            h('div', { className: 'dsc-settings' },
              h('button', {
                className: 'dsc-icon-button',
                type: 'button',
                title: `${copy.settings} · ${Math.round(zoom * 100)}%`,
                'aria-label': copy.settings,
                'aria-haspopup': 'dialog',
                'aria-expanded': settingsOpen,
                onClick: () => setOpenPanel(settingsOpen ? null : 'settings'),
              }, h(GearIcon)),
              settingsOpen ? h(SettingsPopover, {
                copy,
                zoom,
                onZoom: applyZoom,
                language,
                onLanguage: applyLanguage,
                persistLogin,
                onPersistLogin: applyPersistLogin,
                onClearLogin: clearSavedLogin,
                cleared,
                diag,
              }) : null))),
        h('div', { className: 'dsc-tabbar' },
          h('div', { className: 'dsc-tabs', role: 'tablist' },
            tabs.map((tab) => h('div', { key: tab.id, className: tab.id === activeId ? 'dsc-tab dsc-tab--active' : 'dsc-tab' },
              h('button', {
                className: 'dsc-tab-label',
                type: 'button',
                role: 'tab',
                'aria-selected': tab.id === activeId,
                'aria-label': tab.title || tab.url,
                onClick: () => {
                  setActiveId(tab.id);
                  setDraft(null);
                  setSuggestOpen(false);
                  setOpenPanel(null);
                },
                onDoubleClick: () => {
                  setActiveId(tab.id);
                  setOpenPanel(null);
                  focusAddress(tab.url);
                },
                onMouseEnter: (event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  setHoverTip({
                    id: tab.id,
                    title: tab.title || copy.untitled,
                    url: tab.url,
                    left: Math.max(8, Math.min(rect.left, window.innerWidth - 436)),
                    top: rect.bottom + 6,
                  });
                },
                onMouseLeave: () => setHoverTip(null),
                onBlur: () => setHoverTip(null),
              }, tab.title || copy.untitled),
              h('button', {
                className: 'dsc-tab-close',
                type: 'button',
                title: copy.closeTab,
                'aria-label': copy.closeTab,
                onClick: () => {
                  setHoverTip(null);
                  closeTab(tab.id);
                },
              }, '×'))),
            h('button', {
              className: 'dsc-tab-add',
              type: 'button',
              title: copy.newTab,
              'aria-label': copy.newTab,
              disabled: tabs.length >= MAX_TABS,
              onClick: addTab,
            }, '+'))),
        h('section', { className: 'dsc-body' },
          tabs.map((tab) => h(GuestPane, {
            key: tab.id,
            tabId: tab.id,
            initialUrl: tab.url,
            active: tab.id === activeId,
            zoom,
            bridge,
            labels: copy,
            onNavigate: handleNavigate,
            onMount: handleMount,
            onUnmount: handleUnmount,
            onNavState: handleNavState,
            onReady: handleReady,
            syncGuest,
          })),
          composeRecord !== null && composeRecord.tabId === activeId ? h('aside', {
            className: 'dsc-sent',
            role: 'dialog',
            'aria-label': copy.sentTitle,
            'data-state': composeRecord.phase === 'done' ? composeRecord.outcome : composeRecord.phase,
            'data-pinned': composePinned ? 'true' : undefined,
          },
            h('div', { className: 'dsc-sent-head' },
              h('span', { className: 'dsc-sent-title' }, copy.sentTitle),
              h('span', { className: 'dsc-sent-countdown' }, composeCountdown),
              h('button', {
                className: 'dsc-sent-pin',
                type: 'button',
                title: composePinned ? copy.unpinPanel : copy.pinPanel,
                'aria-label': composePinned ? copy.unpinPanel : copy.pinPanel,
                'aria-pressed': composePinned,
                onClick: toggleComposePin,
              }, pinIcon(composePinned)),
              h('button', {
                className: 'dsc-sent-close',
                type: 'button',
                title: copy.close,
                'aria-label': copy.close,
                onClick: closeComposeRecord,
              }, '×')),
            h('p', { className: 'dsc-sent-status', role: 'status' }, composeStatus),
            h('div', { className: 'dsc-sent-body' },
              composeRecord.payload.text.length > 0 ? h('p', { className: 'dsc-sent-text' }, composeRecord.payload.text) : null,
              composeRecord.payload.files.length > 0 ? h('div', { className: 'dsc-sent-files' },
                composeRecord.payload.files.map((file, index) => h('button', {
                  key: `${index}-${file.name}`,
                  className: 'dsc-sent-file',
                  type: 'button',
                  title: copy.previewAttachment,
                  onClick: () => setPreviewFile(file),
                },
                  String(file.type).startsWith('image/') ? h('img', { className: 'dsc-sent-thumb', src: file.data, alt: file.name }) : null,
                  h('span', { className: 'dsc-sent-file-name' }, file.name),
                  typeof file.size === 'number' ? h('span', { className: 'dsc-sent-file-size' }, formatFileSize(file.size)) : null))) : null),
            h('div', { className: 'dsc-sent-foot' },
              h('button', {
                className: 'dsc-sent-retry',
                type: 'button',
                disabled: composeRecord.phase !== 'done',
                onClick: retryCompose,
              }, copy.retrySend)),
            previewFile === null ? null : h('div', {
              className: 'dsc-sent-preview',
              role: 'dialog',
              'aria-label': copy.previewAttachment,
            },
              h('div', { className: 'dsc-sent-preview-head' },
                h('span', { className: 'dsc-sent-preview-title', title: previewFile.name }, previewFile.name),
                h('button', {
                  className: 'dsc-sent-close',
                  type: 'button',
                  title: copy.close,
                  'aria-label': copy.close,
                  onClick: () => setPreviewFile(null),
                }, '×')),
              h('div', { className: 'dsc-sent-preview-body' },
                String(previewFile.type).startsWith('image/')
                  ? h('img', { className: 'dsc-sent-preview-image', src: previewFile.data, alt: previewFile.name })
                  : h('p', { className: 'dsc-sent-preview-meta' }, `${previewFile.name} · ${formatFileSize(previewFile.size)}`)),
              h('div', { className: 'dsc-sent-preview-foot' },
                h('a', {
                  className: 'dsc-sent-download',
                  href: previewFile.data,
                  download: previewFile.name,
                  rel: 'noreferrer',
                }, copy.downloadAttachment)))) : null,
          openPanel === null ? null : h('div', {
            className: 'dsc-dismiss',
            'aria-hidden': true,
            onMouseDown: () => setOpenPanel(null),
          })),
        hoverTip === null ? null : h('div', {
          className: 'dsc-tip',
          role: 'tooltip',
          style: { left: `${hoverTip.left}px`, top: `${hoverTip.top}px` },
        },
          h('div', { className: 'dsc-tip-title' }, hoverTip.title),
          h('div', { className: 'dsc-tip-url' }, hoverTip.url)));
    }
    function PanelIcon(props) {
      return h('svg', { viewBox: '0 0 24 24', width: props.size || 20, height: props.size || 20, 'aria-hidden': true, fill: 'none', stroke: props.active ? 'var(--dsw-alias-brand-primary)' : 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', onClick: () => setDirectoryMode('chat') },
        h('path', { d: 'M4 5.5h16v11H9l-5 3v-14Z' }), h('path', { d: 'M8 10h8M8 13h5' }));
    }
    function apply(ctx) {
      installStyle(ctx);
      ctx.effect(() => {
        const record = (label, message, stack) => {
          try {
            writeApp('deepseek-chat-switch:last-error', {
              at: Date.now(),
              label,
              message: String(message),
              stack: String(stack ?? ''),
            });
          } catch {
            // Diagnostics are best-effort.
          }
        };
        const onError = (event) => record('error', event.message, event.error?.stack);
        const onRejection = (event) => record('unhandledrejection', String(event.reason), event.reason?.stack);
        window.addEventListener('error', onError);
        window.addEventListener('unhandledrejection', onRejection);
        return () => {
          window.removeEventListener('error', onError);
          window.removeEventListener('unhandledrejection', onRejection);
        };
      }, 'deepseek-chat-switch: error log');

      ctx.effect(() => {
        const locale = (navigator.language || 'zh').toLowerCase();
        return ctx.locale.register('deepseek-chat-switch', locale.startsWith('zh') ? { zh, en } : { en, zh });
      }, 'deepseek-chat-switch: dictionaries');
      const t = ctx.locale.bind('deepseek-chat-switch');
      function Panel() {
        return h(PanelBoundary, null, h(ChatPanel, { close: () => ctx.layout.selectPanel(null) }));
      }
      function AskDeepSeekButton() {
        const [menuOpen, setMenuOpen] = React.useState(false);
        const [notice, setNotice] = React.useState('');
        const anchor = React.useRef(null);
        React.useEffect(() => {
          if (!menuOpen) return undefined;
          const onPointerDown = (event) => {
            if (anchor.current !== null && anchor.current.contains(event.target)) return;
            setMenuOpen(false);
          };
          const onKeyDown = (event) => {
            if (event.key === 'Escape') setMenuOpen(false);
          };
          document.addEventListener('mousedown', onPointerDown, true);
          document.addEventListener('keydown', onKeyDown, true);
          return () => {
            document.removeEventListener('mousedown', onPointerDown, true);
            document.removeEventListener('keydown', onKeyDown, true);
          };
        }, [menuOpen]);
        React.useEffect(() => {
          if (notice === '') return undefined;
          const timer = setTimeout(() => setNotice(''), 3000);
          return () => clearTimeout(timer);
        }, [notice]);
        const ask = (mode) => {
          setMenuOpen(false);
          if (mode === 'none') {
            requestNewChat();
            ctx.sidebarRight.openTab(SIDEBAR_KIND);
            return;
          }
          const text = lastAssistantContext();
          if (text.length === 0) {
            setNotice(t('contextEmpty'));
            return;
          }
          ctx.sidebarRight.openTab(SIDEBAR_KIND);
          requestFill(text);
        };
        return h('span', { className: 'dsc-ask-split', ref: anchor },
          h('button', {
            className: 'dsc-ask',
            type: 'button',
            title: t('askDeepSeek'),
            onClick: () => {
              requestNewChat();
              ctx.sidebarRight.openTab(SIDEBAR_KIND);
            },
          }, FishLogo === null ? null : h(FishLogo, { size: 14 }), h('span', null, t('askDeepSeek'))),
          h('button', {
            className: 'dsc-ask-caret',
            type: 'button',
            title: t('askMenu'),
            'aria-label': t('askMenu'),
            'aria-haspopup': 'menu',
            'aria-expanded': menuOpen,
            onClick: () => setMenuOpen((open) => !open),
          }, '▾'),
          menuOpen ? h('div', { className: 'dsc-ask-menu', role: 'menu' },
            h('button', { className: 'dsc-ask-item', type: 'button', role: 'menuitem', onClick: () => ask('none') }, t('askNoContext')),
            h('button', { className: 'dsc-ask-item', type: 'button', role: 'menuitem', onClick: () => ask('context') }, t('askWithContext'))) : null,
          notice === '' ? null : h('span', { className: 'dsc-ask-notice', role: 'alert' }, notice));
      }
      // The native session list has no slot above it, so mount a small React
      // root into the `sidebar.workspaces` region: the HARNESS/Chat tabs sit
      // above the untouched native browser, and `order:-1` keeps the inserted
      // flex child first without moving React's own outlet child.
      ctx.effect(() => {
        if (ReactDOMClient === null) return undefined;
        let host = null;
        let root = null;
        let region = null;
        let frameHandle = 0;
        let frameTries = 0;
        const openEntry = (url) => {
          suppressHistoryVisit(url);
          setActivePage(url);
          requestOpenChat(url);
          ctx.layout.selectPanel(PANEL_ID);
        };
        /** Start a fresh DeepSeek conversation in the embedded panel. */
        const openNewChat = () => {
          setActivePage(CHAT_URL);
          requestOpenChat(CHAT_URL);
          ctx.layout.selectPanel(PANEL_ID);
        };
        const findRegion = () => {
          const outlet = document.querySelector('[data-slot="sidebar.workspaces"]');
          const parent = outlet === null ? null : outlet.parentElement;
          return parent instanceof HTMLElement ? parent : null;
        };
        const detach = () => {
          if (root !== null) {
            root.unmount();
            root = null;
          }
          if (host !== null) {
            host.remove();
            host = null;
          }
          if (region !== null) {
            region.classList.remove('dsc-dir-chatmode');
            region = null;
          }
        };
        const attach = () => {
          const target = findRegion();
          if (target === null) {
            detach();
            return;
          }
          if (target === region && host !== null && host.parentElement === target) return;
          detach();
          region = target;
          host = document.createElement('div');
          host.className = 'dsc-dir-mount';
          host.setAttribute('data-deepseek-chat-directory', '');
          target.appendChild(host);
          root = ReactDOMClient.createRoot(host);
          root.render(h(DirectoryMode, { openEntry, onNewChat: openNewChat, host }));
        };
        const schedule = () => {
          if (frameHandle !== 0) return;
          frameHandle = requestAnimationFrame(() => {
            frameHandle = 0;
            if (findRegion() === null) {
              if (frameTries < 600) {
                frameTries += 1;
                schedule();
              }
              return;
            }
            attach();
          });
        };
        schedule();
        const timer = window.setInterval(attach, 1500);
        return () => {
          window.clearInterval(timer);
          if (frameHandle !== 0) cancelAnimationFrame(frameHandle);
          detach();
        };
      }, 'deepseek-chat-switch: session directory tabs');
      // New-session hero: a HARNESS/Chat switch under the headline. Chat keeps
      // only the input: the native workspace/mode/permission controls are hidden
      // and the plugin's own text+image composer appears; sending hands the
      // content to the embedded DeepSeek Chat page instead of a Harness turn.
      ctx.effect(() => {
        if (ReactDOMClient === null) return undefined;
        let stack = null;
        let heroRoot = null;
        let inputBar = null;
        let switchHost = null;
        let chatHost = null;
        let switchRoot = null;
        let chatRoot = null;
        let mode = 'harness';
        let frameHandle = 0;
        let frameTries = 0;
        const sendCompose = (payload) => {
          requestCompose(payload);
          ctx.layout.selectPanel(PANEL_ID);
        };
        const selectMode = (next) => {
          const value = next === 'chat' ? 'chat' : 'harness';
          if (value === mode) return;
          mode = value;
          writeApp(HERO_MODE_KEY, mode);
          if (stack !== null) {
            if (mode === 'chat') stack.setAttribute('data-dsc-hero-chat', 'true');
            else stack.removeAttribute('data-dsc-hero-chat');
          }
          renderRoots();
        };
        const renderRoots = () => {
          if (switchRoot !== null) switchRoot.render(h(HeroModeSwitch, { mode, onSelect: selectMode }));
          if (chatRoot !== null) {
            chatRoot.render(h(HeroChatComposer, { active: mode === 'chat', onSend: sendCompose }));
          }
        };
        const findHero = () => {
          const anchors = [...document.querySelectorAll('[data-slot="conversation.composer.bar"]')];
          for (const anchor of anchors) {
            const parent = anchor.parentElement;
            if (parent instanceof HTMLElement && parent.className.includes('composerHero')) {
              return { stack: parent, inputBar: anchor };
            }
          }
          return null;
        };
        /** The hero remembers the last selected tab across visits and sessions. */
        const detach = () => {
          if (switchRoot !== null) {
            switchRoot.unmount();
            switchRoot = null;
          }
          if (chatRoot !== null) {
            chatRoot.unmount();
            chatRoot = null;
          }
          if (switchHost !== null) {
            switchHost.remove();
            switchHost = null;
          }
          if (chatHost !== null) {
            chatHost.remove();
            chatHost = null;
          }
          if (stack !== null) {
            stack.removeAttribute('data-dsc-hero-chat');
            stack = null;
          }
          heroRoot = null;
          inputBar = null;
        };
        const isAttached = (found) => found.stack === stack
          && switchHost !== null && switchHost.parentElement === stack
          && chatHost !== null && chatHost.parentElement === stack
          && heroRoot !== null && heroRoot.parentElement === stack
          && inputBar !== null && inputBar.parentElement === stack;
        const attach = () => {
          const found = findHero();
          if (found === null) {
            detach();
            return;
          }
          if (isAttached(found)) {
            if (mode === 'chat') found.stack.setAttribute('data-dsc-hero-chat', 'true');
            return;
          }
          detach();
          stack = found.stack;
          inputBar = found.inputBar;
          mode = readHeroMode();
          const headline = stack.querySelector('[class*="headline"]');
          let node = headline;
          while (node !== null && node.parentElement !== stack) node = node.parentElement;
          heroRoot = node;
          switchHost = document.createElement('div');
          switchHost.className = 'dsc-hero-switch-host';
          if (heroRoot !== null) heroRoot.after(switchHost);
          else stack.insertBefore(switchHost, inputBar);
          chatHost = document.createElement('div');
          chatHost.className = 'dsc-hero-chat-host';
          stack.insertBefore(chatHost, inputBar);
          if (mode === 'chat') stack.setAttribute('data-dsc-hero-chat', 'true');
          else stack.removeAttribute('data-dsc-hero-chat');
          switchRoot = ReactDOMClient.createRoot(switchHost);
          chatRoot = ReactDOMClient.createRoot(chatHost);
          renderRoots();
        };
        const schedule = () => {
          if (frameHandle !== 0) return;
          frameHandle = requestAnimationFrame(() => {
            frameHandle = 0;
            if (findHero() === null) {
              if (frameTries < 600) {
                frameTries += 1;
                schedule();
              }
              return;
            }
            attach();
          });
        };
        schedule();
        const timer = window.setInterval(attach, 500);
        return () => {
          window.clearInterval(timer);
          if (frameHandle !== 0) cancelAnimationFrame(frameHandle);
          detach();
        };
      }, 'deepseek-chat-switch: hero chat mode');
      // The Automation Tasks page's "New" button starts a blank Session; that
      // arrival must default the hero tab to HARNESS instead of the remembered
      // Chat tab, because the blank session is used to configure a Harness task.
      ctx.effect(() => {
        const onAutomationNew = (event) => {
          const target = event.target;
          if (!(target instanceof Element)) return;
          const button = target.closest('button');
          if (button === null) return;
          const label = (button.getAttribute('aria-label') || button.textContent || '').trim();
          if (!AUTOMATION_NEW_LABELS.has(label)) return;
          const page = button.closest('[data-testid="task-manager-page"]')
            || button.closest('section[aria-label="自动化任务"]')
            || button.closest('section[aria-label="Automation tasks"]');
          if (page === null) return;
          writeApp(HERO_MODE_KEY, 'harness');
        };
        document.addEventListener('click', onAutomationNew, true);
        return () => document.removeEventListener('click', onAutomationNew, true);
      }, 'deepseek-chat-switch: automation new session mode');
      ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: PANEL_ID }, Panel));
      ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ name: 'sidebar.panellist', id: PANEL_ID, order: 22, label: () => t('panel') }, PanelIcon));
      ctx.slots.inject('conversation.session.header.actions', () => ctx.slots.register({ name: 'conversation.session.header.actions', id: `${PANEL_ID}-ask`, order: 9999 }, AskDeepSeekButton));
      ctx.effect(() => ctx.sidebarRightTabs.register({
        id: SIDEBAR_ID,
        kind: SIDEBAR_KIND,
        multiple: false,
        priority: 'builtin',
        title: () => t('panel'),
      }), 'deepseek-chat-switch: sidebar tab type');
      ctx.effect(() => ctx.slots.inject('sidebar.right.pane.tab', () => ctx.slots.register({
        name: 'sidebar.right.pane.tab',
        key: SIDEBAR_ID,
      }, () => h(PanelBoundary, null, h(SidebarChat)))), 'deepseek-chat-switch: sidebar body');
      ctx.effect(() => ctx.slots.inject('sidebar.right.pane.tab.title', () => ctx.slots.register({
        name: 'sidebar.right.pane.tab.title',
        key: SIDEBAR_ID,
      }, () => h('span', null, t('panel')))), 'deepseek-chat-switch: sidebar title');
    }
    return { inject: ['slots', 'locale', 'layout', 'sidebarRight', 'sidebarRightTabs'], apply };
  },
});
