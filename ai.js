! function() {
  let e = document
    .createElement("style");
  e.textContent =
    `#aiChatBtn{font-size:20px;color:#c9d1d9;background:none;border:none;cursor:pointer;padding:.5rem;transition:all .4s cubic-bezier(.34,1.56,.64,1);display:flex;align-items:center;justify-content:center;border-radius:50%;width:56px;height:56px;position:relative}#aiChatBtn img{width:85%;height:85%;object-fit:contain;transition:all .4s cubic-bezier(.34,1.56,.64,1);filter:drop-shadow(0 2px 8px rgba(249,115,22,.3))}#aiChatBtn:hover img{transform:scale(1.15) rotate(5deg);filter:drop-shadow(0 4px 16px rgba(249,115,22,.5))}#aiChatBtn:active img{transform:scale(.9) rotate(-5deg)}#aiChatContainer{position:fixed;z-index:2001;background:#0d1117;border:1px solid #21262d;box-shadow:0 -10px 60px rgba(0,0,0,.7),0 -2px 20px rgba(249,115,22,.1),inset 0 1px 0 rgba(255,255,255,.03);display:none;flex-direction:column;opacity:0;transition:all .6s cubic-bezier(.34,1.56,.64,1);backdrop-filter:blur(20px);overflow:hidden}#aiChatContainer::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(249,115,22,.3) 30%,rgba(249,115,22,.3) 70%,transparent);pointer-events:none;z-index:2}#aiChatContainer::after{content:'';position:absolute;top:1px;left:0;right:0;height:40px;background:linear-gradient(180deg,rgba(22,27,34,.95) 0%,rgba(22,27,34,.7) 50%,transparent 100%);pointer-events:none;z-index:1}#aiChatContainer.show{display:flex;opacity:1}@media(max-width:768px){#aiChatContainer{bottom:-100%;left:0;width:100%;height:60%;border-radius:24px 24px 0 0;border-bottom:none}#aiChatContainer.show{bottom:0}}@media(min-width:769px){#aiChatContainer{bottom:-100%;right:1.5rem;width:440px;height:600px;border-radius:20px}#aiChatContainer.show{bottom:1.5rem}}#aiChatMessages{flex:1;overflow-y:auto;padding:3rem 1.5rem 1.5rem;display:flex;flex-direction:column;gap:1.2rem;background:#0d1117;position:relative;scroll-behavior:smooth}#aiChatMessages::-webkit-scrollbar{width:6px}#aiChatMessages::-webkit-scrollbar-track{background:transparent}#aiChatMessages::-webkit-scrollbar-thumb{background:#30363d;border-radius:6px;transition:background .3s}#aiChatMessages::-webkit-scrollbar-thumb:hover{background:#484f58}.ai-msg{padding:1rem 1.25rem;border-radius:16px;max-width:100%;word-wrap:break-word;animation:slideUp .6s cubic-bezier(.34,1.56,.64,1);line-height:1.65;font-size:.9rem;transition:all .35s cubic-bezier(.4,0,.2,1);position:relative}.user-msg{background:linear-gradient(135deg,#161b22 0%,#1c2128 100%);color:#c9d1d9;width:82%;align-self:flex-end;margin-left:auto;border:1px solid #21262d;box-shadow:0 4px 12px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.05);border-radius:18px 18px 4px 18px}.user-msg:hover{background:linear-gradient(135deg,#1c2128 0%,#21262d 100%);border-color:#30363d;transform:translateX(-3px) translateY(-1px);box-shadow:0 6px 20px rgba(0,0,0,.35)}.bot-msg{background:transparent;color:#c9d1d9;width:100%;padding-left:1.5rem;border-left:3px solid transparent;border-radius:12px;transition:all .35s;cursor:pointer}.bot-msg::before{content:'';position:absolute;left:-3px;top:0;bottom:0;width:3px;background:linear-gradient(180deg,#f97316,#ea580c);border-radius:2px;opacity:0;transition:opacity .35s}.bot-msg:hover{color:#fff;transform:translateX(4px)}.bot-msg:hover::before{opacity:1}.bot-msg h1,.bot-msg h2,.bot-msg h3,.bot-msg h4,.bot-msg h5,.bot-msg h6{color:#fb923c;margin-top:1.2rem;margin-bottom:.6rem;font-weight:600;line-height:1.3}.bot-msg h1{font-size:1.5rem;border-bottom:2px solid rgba(249,115,22,.2);padding-bottom:.4rem}.bot-msg h2{font-size:1.25rem}.bot-msg h3{font-size:1.1rem}.bot-msg h4{font-size:1rem}.bot-msg h5{font-size:0.95rem}.bot-msg h6{font-size:0.9rem}.bot-msg p{margin:.6rem 0;line-height:1.75}.bot-msg code{background:#161b22;color:#fb923c;padding:.25rem .5rem;border-radius:6px;font-size:.85rem;font-family:ui-monospace,monospace;border:1px solid #21262d;box-shadow:inset 0 1px 3px rgba(0,0,0,.2)}.bot-msg pre{background:#0d1117;border:1px solid #21262d;border-radius:12px;padding:0;margin:1rem 0;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.03);position:relative;max-height:400px}.bot-msg pre .code-header{display:flex;justify-content:space-between;align-items:center;padding:.4rem .75rem;background:#161b22;border-bottom:1px solid #21262d;min-height:32px}.bot-msg pre .code-lang{color:#8b949e;font-size:.7rem;font-family:ui-monospace,monospace;text-transform:uppercase;letter-spacing:.5px}.bot-msg pre .code-copy{background:transparent;border:1px solid #21262d;color:#8b949e;padding:.2rem .5rem;border-radius:4px;cursor:pointer;font-size:.65rem;transition:all .3s;white-space:nowrap;display:inline-flex;align-items:center;gap:.25rem;min-width:55px;justify-content:center}.bot-msg pre .code-copy:hover{background:#0d1117;color:#c9d1d9;border-color:#30363d}.bot-msg pre .code-copy i{font-size:.65rem}.bot-msg pre code{background:transparent;border:none;padding:1.25rem;display:block;color:#c9d1d9;font-size:.85rem;overflow-x:auto;max-width:100%}.bot-msg pre code::-webkit-scrollbar{height:8px}.bot-msg pre code::-webkit-scrollbar-track{background:#161b22}.bot-msg pre code::-webkit-scrollbar-thumb{background:#30363d;border-radius:4px}.bot-msg pre code::-webkit-scrollbar-thumb:hover{background:#484f58}.table-wrapper{overflow-x:auto;margin:1rem 0;border-radius:8px;border:1px solid #21262d;max-height:400px;overflow-y:auto}.table-wrapper::-webkit-scrollbar{width:8px;height:8px}.table-wrapper::-webkit-scrollbar-track{background:#161b22}.table-wrapper::-webkit-scrollbar-thumb{background:#30363d;border-radius:4px}.table-wrapper::-webkit-scrollbar-thumb:hover{background:#484f58}.bot-msg table{width:100%;border-collapse:collapse;font-size:.85rem;margin:0}.bot-msg th,.bot-msg td{border:1px solid #21262d;padding:.65rem;text-align:left;white-space:nowrap}.bot-msg th{background:linear-gradient(135deg,#161b22,#1c2128);color:#fb923c;font-weight:600;position:sticky;top:0;z-index:1}.bot-msg ul,.bot-msg ol{margin:.6rem 0;padding-left:1.75rem}.bot-msg li{margin:.4rem 0;line-height:1.7}.bot-msg blockquote{border-left:4px solid #f97316;padding:.75rem 1.25rem;margin:1rem 0;color:#8b949e;font-style:italic;background:linear-gradient(90deg,rgba(249,115,22,.08),transparent);border-radius:0 12px 12px 0;box-shadow:inset 4px 0 8px rgba(249,115,22,.1)}.bot-msg strong{color:#fb923c;font-weight:600}.bot-msg em{color:#a8b3c1;font-style:italic}.bot-msg a{color:#f97316;text-decoration:underline;transition:all .25s}.bot-msg a:hover{color:#fb923c;text-decoration:none}.bot-msg .katex{color:#c9d1d9;font-size:1rem}.bot-msg .katex-display{color:#c9d1d9;font-size:1rem;overflow-x:auto;max-width:100%;display:block;padding:1rem;background:#161b22;border-radius:8px;margin:1rem 0;border:1px solid #21262d;max-height:300px;overflow-y:auto}.bot-msg .katex-display::-webkit-scrollbar{width:8px;height:8px}.bot-msg .katex-display::-webkit-scrollbar-track{background:#0d1117}.bot-msg .katex-display::-webkit-scrollbar-thumb{background:#30363d;border-radius:4px}.bot-msg hr{border:none;border-top:1px solid rgba(249,115,22,.2);margin:1.25rem 0;box-shadow:0 1px 0 rgba(0,0,0,.3)}.bot-msg img{max-width:100%;height:auto;border-radius:12px;margin:1rem 0;box-shadow:0 4px 12px rgba(0,0,0,.3);border:1px solid #21262d}.bot-msg-actions{display:none;gap:.5rem;margin-top:.75rem;padding-top:.75rem;border-top:1px solid #21262d;flex-wrap:wrap}.bot-msg.active .bot-msg-actions{display:flex}.bot-msg-action-btn{background:linear-gradient(135deg,#161b22,#1c2128);color:#8b949e;border:1px solid #21262d;padding:.5rem .85rem;border-radius:8px;cursor:pointer;font-size:.8rem;transition:all .3s;display:flex;align-items:center;gap:.4rem;white-space:nowrap}.bot-msg-action-btn:hover{background:linear-gradient(135deg,#1c2128,#21262d);color:#c9d1d9;border-color:#30363d;transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.3)}.bot-msg-action-btn:active{transform:translateY(0)}.bot-msg-action-btn i{font-size:.9rem}.sources-dropdown{display:none;margin-top:.75rem;padding:1rem;background:#161b22;border:1px solid #21262d;border-radius:12px;max-height:250px;overflow-y:auto;animation:slideDown .3s cubic-bezier(.34,1.56,.64,1)}.sources-dropdown.show{display:block}.sources-dropdown::-webkit-scrollbar{width:6px}.sources-dropdown::-webkit-scrollbar-track{background:#0d1117}.sources-dropdown::-webkit-scrollbar-thumb{background:#30363d;border-radius:4px}.sources-dropdown::-webkit-scrollbar-thumb:hover{background:#484f58}.sources-dropdown-title{color:#fb923c;font-size:.9rem;font-weight:600;margin-bottom:.75rem;display:flex;align-items:center;gap:.5rem}.sources-dropdown-title i{font-size:.85rem}.source-item{padding:.65rem .85rem;margin:.4rem 0;background:#0d1117;border-left:3px solid #f97316;border-radius:6px;font-size:.8rem;line-height:1.5;color:#c9d1d9;transition:all .3s}.source-item:hover{background:#161b22;border-left-width:4px;transform:translateX(2px)}.source-item .source-text{color:#8b949e}@keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@media(max-width:768px){.bot-msg-action-btn{padding:.5rem;min-width:38px;justify-content:center}.bot-msg-action-btn .btn-text{display:none}}@keyframes slideUp{from{opacity:0;transform:translateY(25px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}#aiChatInputArea{display:flex;align-items:center;padding:1.25rem;background:linear-gradient(135deg,#161b22,#1c2128);border-top:1px solid #21262d;box-shadow:0 -6px 20px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.03);border-radius:20px;margin:1rem;gap:.5rem;transition:all .35s cubic-bezier(.4,0,.2,1)}#aiChatInputArea:focus-within{box-shadow:0 -8px 30px rgba(249,115,22,.15),0 0 0 2px rgba(249,115,22,.2),inset 0 1px 0 rgba(255,255,255,.05);transform:translateY(-2px)}#aiChatInput{flex:1;background:transparent;border:none;color:#c9d1d9;padding:.95rem 1.25rem;font-size:.95rem;font-family:inherit;outline:none;transition:all .3s}#aiChatInput::placeholder{color:#6e7681;transition:color .3s}#aiChatInput:focus::placeholder{color:#8b949e}#aiChatSend{background:linear-gradient(135deg,#484f58,#30363d);color:#6e7681;border:none;padding:0;width:40px;height:40px;border-radius:50%;cursor:pointer;transition:all .35s cubic-bezier(.34,1.56,.64,1);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,.2);position:relative}#aiChatSend.active{background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;box-shadow:0 4px 16px rgba(249,115,22,.4);cursor:pointer}#aiChatSend.active:hover{transform:translateY(-3px) scale(1.05);box-shadow:0 8px 24px rgba(249,115,22,.5)}#aiChatSend.active:active{transform:translateY(-1px) scale(1);box-shadow:0 4px 12px rgba(249,115,22,.3)}#aiChatSend:disabled{opacity:.4;cursor:not-allowed;transform:none;background:linear-gradient(135deg,#30363d,#21262d)}#aiChatSend i{transition:transform .35s cubic-bezier(.34,1.56,.64,1)}#aiChatSend.active i{transform:translateY(-1px)}.thinking-indicator{display:flex;align-items:center;gap:1rem;padding:1rem 1.25rem;animation:slideUp .6s cubic-bezier(.34,1.56,.64,1);background:transparent;border-radius:16px}.thinking-logo-wrapper{position:relative;width:45px;height:45px;flex-shrink:0}.thinking-logo{width:100%;height:100%;object-fit:contain;animation:rotateAndPulse 2s linear infinite;filter:drop-shadow(0 0 8px rgba(249,115,22,.5))}.thinking-glow{position:absolute;top:50%;left:50%;width:100%;height:100%;border-radius:50%;background:radial-gradient(circle,rgba(249,115,22,.3),transparent);transform:translate(-50%,-50%);animation:pulseGlow 2s ease-in-out infinite;pointer-events:none}@keyframes rotateAndPulse{0%{transform:rotate(0deg) scale(1)}25%{transform:rotate(90deg) scale(1.1)}50%{transform:rotate(180deg) scale(1)}75%{transform:rotate(270deg) scale(1.1)}100%{transform:rotate(360deg) scale(1)}}@keyframes pulseGlow{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.3}50%{transform:translate(-50%,-50%) scale(1.8);opacity:0}}.thinking-text{color:#8b949e;font-size:.9rem;animation:fadeInOut 1.5s ease-in-out infinite}.thinking-status{color:#fb923c;font-weight:500}@keyframes fadeInOut{0%,100%{opacity:.6}50%{opacity:1}}.initial-screen{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;text-align:center;padding:2rem;opacity:.8}.initial-screen-title{font-size:1rem;font-weight:700;color:#fb923c;margin-bottom:.5rem;background:linear-gradient(135deg,#f97316,#fb923c);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.initial-screen-subtitle{font-size:.95rem;color:#8b949e;line-height:1.6;max-width:320px}.resize-handle{position:absolute;top:0;left:0;right:0;height:8px;cursor:ns-resize;z-index:10;background:transparent;transition:background .3s}.resize-handle:hover{background:linear-gradient(180deg,rgba(249,115,22,.2),transparent)}`,
    document.head.appendChild(e);
  [{
    type: "link",
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
  },
  {
    type: "script",
    src: "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"
  },
  {
    type: "script",
    src: "https://cdn.jsdelivr.net/npm/marked@11.1.1/marked.min.js"
  },
  {
    type: "link",
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github-dark.min.css"
  },
  {
    type: "script",
    src: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"
  }]
  .forEach(e => {
    let t = document
      .createElement(e
        .type);
    "link" === e.type ? (t
        .rel = e.rel, t.href = e
        .href) : (t.src = e.src, t
        .async = !0), document.head
      .appendChild(t)
  });
  let t =
    document.createElement("button");
  t.id = "aiChatBtn", t.innerHTML =
    '<img src="https://arlabs07.github.io/Arhub07.github.io/Images/arai2.png" alt="ARAI" />',
    t.setAttribute("aria-label",
      "Toggle AI Chat");
  let r =
    document.getElementById(
      "previewHeaderIframe"),
    a = r ? r.querySelector(
      ".header-controls-iframe") : null,
    o = document.getElementById(
      "searchButtonIframe");
  a && o && a.insertBefore(t, o);
  let
    n = document.createElement("div");
  n.id = "aiChatContainer", n
    .innerHTML =
    `<div class="resize-handle"></div><div id="aiChatMessages"><div class="initial-screen"><div class="initial-screen-title">Ask ARai anything</div><div class="initial-screen-subtitle">Get contextual help about this page or ask general questions.</div></div></div><div id="aiChatInputArea"><input type="text" id="aiChatInput" placeholder="Ask me anything..." maxlength="500" readonly autocomplete="off"><button id="aiChatSend" aria-label="Send message" disabled><i class="fas fa-arrow-up"></i></button></div>`,
    document.body.appendChild(n);
  let
    i = document.getElementById(
      "aiChatMessages"),
    s = document.getElementById(
      "aiChatInput"),
    l = document.getElementById(
      "aiChatSend"),
    c = !1,
    d = [],
    p = !1,
    m = null,
    g = new Map,
    b = null,
    h = null;
  ! function() {
    let e = n
      .querySelector(
        ".resize-handle");
    if (!e)
      return;
    let t = !1,
      r = 0,
      a = 0;
    e.addEventListener("mousedown",
        e => {
          t = !0, r = e.clientY,
            a = n.offsetHeight, e
            .preventDefault(), document
            .body.style.userSelect =
            "none"
        }), e.addEventListener(
        "touchstart", e => {
          t = !0, r =
            e.touches[0].clientY, a = n
            .offsetHeight, e
            .preventDefault()
        }, {
          passive:
            !1
        }), document
      .addEventListener("mousemove",
        e => {
          if (!t) return;
          let i =
            r - e.clientY,
            s = Math.min(Math.max(a + i,
                300), window
              .innerHeight - 100);
          n.style.height = s + "px"
        }),
      document.addEventListener(
        "touchmove", e => {
          if (!t)
            return;
          let i = r - e
            .touches[0].clientY,
            s = Math.min(Math.max(a + i,
                300), window
              .innerHeight - 100);
          n.style.height = s +
            "px"
        }, { passive: !1 }),
      document.addEventListener(
        "mouseup", () => {
          t && (t = !1,
            document.body.style
            .userSelect = "")
        }),
      document.addEventListener(
        "touchend", () => {
          t && (t = !
            1)
        })
  }();
  
  function u() {
    c = !c, n.classList
      .toggle("show", c), c ?
      setTimeout(() => {
        s
          .removeAttribute(
            "readonly"), window
          .innerWidth >= 769 && s
          .focus()
      }, 700) : (s
        .setAttribute("readonly", ""), s
        .blur())
  }
  
  function $(e, t) {
    if (!e ||
      "string" != typeof e)
      return "";
    return e.length > t ? e
      .substring(0, t) : e
  }
  
  function _(e) {
    if (!e || "string" !=
      typeof e) return e ||
      "";
    try {
      let t = e.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase().replace(
          /[^\w\s]/g, "").trim();
      if (!
        t || t.length < 2)
        return t;
      if (t.endsWith("sses"))
        return t.slice(0, -2);
      if (t
        .endsWith("ies")) return t
        .slice(0, -2);
      if (t.endsWith(
          "ss")) return t;
      if (t
        .endsWith("s")) return t.slice(
        0, -1);
      if (t.endsWith("ed"))
        return t.slice(0, -2);
      if (t
        .endsWith("ing")) return t
        .slice(0, -3);
      if (t.endsWith(
          "ly")) return t.slice(0, -
        2);
      if (t.endsWith("tion"))
        return t.slice(0, -4);
      if (t
        .endsWith("ment")) return t
        .slice(0, -4);
      if (t.endsWith(
          "ness")) return t.slice(0, -
        4);
      if (t.endsWith("able"))
        return t.slice(0, -
          4);
      return t
    } catch (
      r) { return e || "" }
  }
  
  function f(e) {
    if (!e || !Array
      .isArray(e) || 0 === e.length)
      return [];
    try {
      let t = [];
      for (
        let r = 0; r < e.length - 1; r++
      ) e[r] && e[r + 1] && t.push(e[
        r] + " " + e[r +
        1]);
      return t
    } catch (
      a) { return [] }
  }
  
  function x(e) {
    if (!e || !Array
      .isArray(e) || e.length < 2)
      return [];
    try {
      let t = [];
      for (
        let r = 0; r < e.length - 2; r++
      ) e[r] && e[r + 1] && e[r +
        2] && t.push(e[r] + " " + e[
        r +
        1] + " " + e[r +
        2]);
      return t
    } catch (
      a) { return [] }
  }
  
  function y(e, t) {
    if (!e || !Array
      .isArray(e) || 0 === e.length || !
      t || !Array.isArray(t) || 0 === t
      .length) return {};
    try {
      let r =
        e.reduce((e, t) => (t && (e[t] =
          (e[t] || 0) + 1), e), {}),
        a = Object.keys(r);
      if (0 === a
        .length) return {};
      let o = a
        .length,
        n = {};
      for (let i in r) {
        if (!
          i) continue;
        let s = t.filter(
            e => e && e.includes(i))
          .length,
          l = o > 0 && s < o ? Math.log(
            (o - s + .5) / (s + .5) + 1
          ) : 0;
        n[i] = l
      }
      let c = {};
      for (let
          d in r) {
        if (!d)
          continue;
        let p = r[d] || 0,
          m = n[d] || 0,
          g = e.length || 1,
          b = p * (2.5 + 1) / (p + 2.5 *
            (1 - .75 + .75 * g / 20));
        c[d] = (b * m) ||
          0
      }
      return c
    } catch (
      h) { return {} }
  }
  
  function w(e, t) {
    if (!e || !Array
      .isArray(e) || 0 === e.length || !
      t || !Array.isArray(t) || 0 === t
      .length) return 0;
    try {
      let r =
        new Set(e.filter(e => e)),
        a = new Set(t.filter(e => e)),
        o = new Set([...r].filter(e => a
          .has(e))),
        n = new Set([...r, ...
          a
        ]);
      return n.size > 0 ? o
        .size / n.size : 0
    } catch (
      i) { return 0 }
  }
  
  function v(e, t) {
    if ("undefined" ==
      typeof marked || !e) return e ||
      "";
    try {
      g.set(t, e);
      let r =
        e || "";
      [/!\[([^\]]*)\]\{([^}]+)\}/g,
        /!\[([^\]]*)\]\(https:\/\/image\.pollinations\.ai\/prompt\/([^)]+)\)/g
      ].forEach(e => {
        r = r.replace(e,
          (e, t, r) => {
            let a = (
                r || t ||
                "abstract art")
              .trim().replace(
                /^["']|["']$/g, ""
              ).replace(/\s+/g,
                "_").replace(
                /[^\w\-_]/g, ""),
              o =
              `https://image.pollinations.ai/prompt/${encodeURIComponent(a)}?width=800&height=600&nologo=true`;
            return `\n\n![${t||a}](${o})\n\n`
          }
        )
      });
      marked.setOptions({
        breaks: !0,
        gfm: !0,
        headerIds: !0,
        mangle: !1,
        sanitize: !1
      });
      let
        a = marked.parse(r);
      if (
        "undefined" != typeof katex && (
          a = (a = (a = (a = a.replace(
              /\$\$([\s\S]*?)\$\$/g,
              (e, t) => {
                try {
                  let
                    r = katex
                    .renderToString(
                      (t || "")
                      .trim(), {
                        displayMode:
                          !0,
                        throwOnError:
                          !1,
                        trust:
                          !0
                      }
                    );
                  return `<div class="katex-display">${r}</div>`
                } catch (
                  a) { return e }
              }
            )).replace(
              /\$([^\$\n]+?)\$/g, (e,
                t) => {
                try {
                  return katex
                    .renderToString((
                        t || "")
                      .trim(), {
                        displayMode:
                          !1,
                        throwOnError:
                          !1,
                        trust: !
                          0
                      })
                } catch (
                  r) { return e }
              }))
            .replace(
              /\\\[([\s\S]*?)\\\]/g, (e,
                t) => {
                try {
                  let r =
                    katex
                    .renderToString((
                        t || "")
                      .trim(), {
                        displayMode:
                          !0,
                        throwOnError: !
                          1,
                        trust: !
                          0
                      });
                  return `<div class="katex-display">${r}</div>`
                } catch (
                  a) { return e }
              }))
          .replace(/\\\(([^\)]+?)\\\)/g,
            (e, t) => {
              try {
                return katex
                  .renderToString((t ||
                      "")
                    .trim(), {
                      displayMode:
                        !1,
                      throwOnError: !1,
                      trust: !
                        0
                    })
              } catch (
                r) { return e }
            })),
        "undefined" != typeof hljs
      ) {
        let o = document
          .createElement("div");
        o.innerHTML = a, o
          .querySelectorAll("pre code")
          .forEach(e => {
            if (!e)
              return;
            let t = e
              .parentElement;
            if (!t)
              return;
            let r = [...e
                .classList
              ].find(e => e && e
                .startsWith(
                  "language-")),
              a = "code";
            r && (a = r.replace(
                "language-", ""), e
              .classList.remove(r),
              e.classList.add(a)
            );
            try {
              hljs
                .highlightElement(
                  e)
            } catch (o) {}
            let
              n = document
              .createElement("div");
            n.className =
              "code-header";
            let i = e
              .textContent || "";
            n.innerHTML =
              `<span class="code-lang">${a}</span><button class="code-copy" data-code="${btoa(encodeURIComponent(i))}"><i class="fas fa-copy"></i> Copy</button>`,
              t.insertBefore(n,
                e);
            let s = n
              .querySelector(
                ".code-copy");
            s && s.addEventListener(
              "click",
              function() {
                let e =
                  this.dataset
                  .code;
                if (!e)
                  return;
                let t =
                  decodeURIComponent(
                    atob(e));
                navigator
                  .clipboard &&
                  navigator
                  .clipboard
                  .writeText &&
                  navigator
                  .clipboard
                  .writeText(t)
                  .then(() => {
                    this
                      .innerHTML =
                      '<i class="fas fa-check"></i> Done',
                      setTimeout(
                        () => {
                          this
                            .innerHTML =
                            '<i class="fas fa-copy"></i> Copy'
                        },
                        2e3)
                  })
                  .catch(() => {})
              }
            )
          }), a = o
          .innerHTML
      }
      return a.replace(
        /<table>/g,
        '<div class="table-wrapper"><table>'
      ).replace(/<\/table>/g,
        "</table></div>")
    } catch (
      n) {
      return console.error(
          "[ARai] Render error"), e ||
        ""
    }
  }
  
  function k(e, t, r) {
    if (!e || !t)
      return;
    try {
      let a = g.get(t) ||
        "";
      if (!a) return;
      let o =
        `# Query\n\n${e}\n\n# Response\n\n${a}`;
      r && Array.isArray(r) && r
        .length > 0 && (o +=
          `\n\n# Sources\n\n`, r
          .forEach((e, t) => {
            e && (
              o +=
              `${t+1}. ${e}\n\n`)
          })),
        navigator.clipboard && navigator
        .clipboard.writeText ? navigator
        .clipboard.writeText(o).then(
          () => {}).catch(() => {}) : A(
          o)
    } catch (n) {}
  }
  
  function A(e) {
    if (!e)
      return;
    try {
      let t = document
        .createElement("textarea");
      t.value = e, t.style.position =
        "fixed", t.style.opacity = "0",
        document.body.appendChild(t), t
        .select();
      try {
        document
          .execCommand("copy")
      } catch (
        r) {} document.body.removeChild(
        t)
    } catch (a) {}
  }
  
  function B(e, t) {
    if (!e || !t)
      return;
    try {
      let r = document
        .createElement("div");
      r.innerHTML = e;
      let a = r
        .textContent || r.innerText ||
        "";
      if (!a || !(
          "speechSynthesis" in window))
        return;
      if (m) {
        speechSynthesis
          .cancel(), m = null, t
          .innerHTML =
          '<i class="fas fa-volume-up"></i><span class="btn-text"> Listen</span>';
        return
      }
      let
        o =
        new SpeechSynthesisUtterance(a);
      o.rate = .9, o.pitch = 1, o
        .volume = 1, o.onstart =
        () => {
          m = o, t.innerHTML =
            '<i class="fas fa-stop"></i><span class="btn-text"> Stop</span>'
        },
        o.onend = () => {
          m = null, t
            .innerHTML =
            '<i class="fas fa-volume-up"></i><span class="btn-text"> Listen</span>'
        },
        o.onerror = () => {
          m = null, t
            .innerHTML =
            '<i class="fas fa-volume-up"></i><span class="btn-text"> Listen</span>'
        },
        speechSynthesis.speak(
          o)
    } catch (n) {}
  }
  
  function C(e, t) {
    if (!e || !t)
      return;
    try {
      let r = e.closest(
        ".bot-msg");
      if (!r) return;
      let
        a = r.querySelector(
          ".sources-dropdown");
      if (
        a) {
        a.classList.toggle(
          "show");
        return
      }
      if ((a =
          document.createElement("div"))
        .className =
        "sources-dropdown show", t &&
        Array.isArray(t) && t.length > 0
      ) {
        let o = t.filter(e => e)
          .map(e =>
            `<div class="source-item"><span class="source-text">${e}</span></div>`
          ).join("");
        a.innerHTML =
          `<div class="sources-dropdown-title"><i class="fas fa-book"></i> Sources Used (${t.length})</div>${o}`
      } else
        a.innerHTML =
        `<div class="sources-dropdown-title"><i class="fas fa-book"></i> Sources Used</div><p style="color:#8b949e;font-style:italic;font-size:.8rem;">No sources were used for this response.</p>`;
      r.appendChild(a)
    } catch (
      n) {}
  }
  let E = 0;
  
  function L(e, t, r, a, o = !1) {
    if (!
      e || !t && !o) return document
      .createElement("div");
    try {
      let
        n = i.querySelector(
          ".initial-screen");
      n && n.remove();
      let s = document
        .createElement("div"),
        l = "msg_" + E++;
      if (s
        .className = `ai-msg ${e}-msg`,
        s.dataset.messageId = l,
        "bot" === e) {
        if (o) return s
          .innerHTML = "", s.dataset
          .sources = JSON.stringify(
            r || []), s.dataset
          .query = a || "", i
          .appendChild(s), setTimeout(
            () => i.scrollTo({
              top: i
                .scrollHeight,
              behavior: "smooth"
            }),
            50), s;
        let c = v(t, l);
        s.innerHTML = c, s.dataset
          .sources = JSON.stringify(r ||
            []), s.dataset.query = a ||
          "", b = t;
        let p = document
          .createElement("div");
        p.className =
          "bot-msg-actions";
        let m =
          document.createElement(
            "button");
        m.className =
          "bot-msg-action-btn", m
          .innerHTML =
          '<i class="fas fa-copy"></i><span class="btn-text"> Copy</span>',
          m.onclick = e => {
            e && e
              .stopPropagation && e
              .stopPropagation(), k(a,
                l, r)
          };
        let g =
          document.createElement(
            "button");
        g.className =
          "bot-msg-action-btn", g
          .innerHTML =
          '<i class="fas fa-volume-up"></i><span class="btn-text"> Listen</span>',
          g.onclick = e => {
            e && e
              .stopPropagation && e
              .stopPropagation(), B(c,
                g)
          };
        let h = document
          .createElement("button");
        h.className =
          "bot-msg-action-btn", h
          .innerHTML =
          '<i class="fas fa-book"></i><span class="btn-text"> Sources</span>',
          h.onclick = e => {
            e && e
              .stopPropagation && e
              .stopPropagation(), C(h,
                r)
          }, p.appendChild(m),
          p.appendChild(g), p
          .appendChild(h), s
          .appendChild(p), s.onclick =
          function(e) {
            if (!e || !e
              .target) return;
            let t = e
              .target
              .tagName;
            "BUTTON" !== t
              &&
              "I" !== t && !e.target
              .classList.contains(
                "btn-text") && !e.target
              .classList.contains(
                "sources-dropdown") && !
              e.target.closest(
                ".sources-dropdown") &&
              !e.target.classList
              .contains("code-copy") &&
              !e.target.closest(
                ".code-header") && (
                document
                .querySelectorAll(
                  ".bot-msg.active")
                .forEach(e => {
                  e !==
                    s && e.classList
                    .remove(
                      "active")
                }), s
                .classList.toggle(
                  "active"))
          },
          setTimeout(() => {
            if (
              "undefined" ==
              typeof hljs) return;
            s.querySelectorAll(
              "pre code").forEach(
              e => {
                if (!e)
                  return;
                try {
                  e
                    .classList
                    .contains(
                      "hljs") ||
                    hljs
                    .highlightElement(
                      e)
                } catch (
                  t) {}
              })
          }, 100)
      } else
        s.textContent = t || "", h =
        t;
      return i.appendChild(s), d
        .push({
          role: "user" === e ?
            "user" : "assistant",
          content: $(t || "", 5e3)
        }), d
        .length > 40 && (d = d.slice(-
          40)), setTimeout(() => i
          .scrollTo({
            top: i
              .scrollHeight,
            behavior: "smooth"
          }), 50),
        s
    } catch (u) {
      return console
        .error("[ARai] Message error"),
        document.createElement(
          "div")
    }
  }
  async function S(e,
    t, r, a) {
    if (!e || !t)
      return;
    try {
      let o = t.dataset
        .messageId,
        n = e || "",
        s = v(n, o);
      t.innerHTML = s, b = e;
      let l =
        document.createElement("div");
      l.className =
        "bot-msg-actions";
      let c =
        document.createElement(
          "button");
      c.className =
        "bot-msg-action-btn", c
        .innerHTML =
        '<i class="fas fa-copy"></i><span class="btn-text"> Copy</span>',
        c.onclick = e => {
          e && e
            .stopPropagation && e
            .stopPropagation(), k(a,
              o, r)
        };
      let p =
        document.createElement(
          "button");
      p.className =
        "bot-msg-action-btn", p
        .innerHTML =
        '<i class="fas fa-volume-up"></i><span class="btn-text"> Listen</span>',
        p.onclick = e => {
          e && e
            .stopPropagation && e
            .stopPropagation(), B(s,
              p)
        };
      let m = document
        .createElement("button");
      m.className =
        "bot-msg-action-btn", m
        .innerHTML =
        '<i class="fas fa-book"></i><span class="btn-text"> Sources</span>',
        m.onclick = e => {
          e && e
            .stopPropagation && e
            .stopPropagation(), C(m,
              r)
        }, l.appendChild(c),
        l.appendChild(p), l
        .appendChild(m), t
        .appendChild(l), t.onclick =
        function(e) {
          if (!e || !e
            .target) return;
          let r = e
            .target
            .tagName;
          "BUTTON" !== r
            &&
            "I" !== r && !e.target
            .classList.contains(
              "btn-text") && !e.target
            .classList.contains(
              "sources-dropdown") && !
            e.target.closest(
              ".sources-dropdown") &&
            !e.target.classList
            .contains("code-copy") &&
            !e.target.closest(
              ".code-header") && (
              document
              .querySelectorAll(
                ".bot-msg.active")
              .forEach(e => {
                e !==
                  t && e.classList
                  .remove(
                    "active")
              }), t
              .classList.toggle(
                "active"))
        },
        "undefined" != typeof hljs &&
        t.querySelectorAll("pre code")
        .forEach(e => {
          if (!e)
            return;
          try {
            e.classList
              .contains("hljs") ||
              hljs.highlightElement(
                e)
          } catch (t) {}
        }),
        d.push({
          role: "assistant",
          content: $(e || "",
            5e3)
        })
    } catch (
      g) {
      console.error(
        "[ARai] Finalize error")
    }
  }
  
  function M(e, t) {
    if (!e)
      return document.createElement(
        "div");
    try {
      let r = document
        .createElement("div");
      return r
        .className =
        "thinking-indicator", r
        .innerHTML =
        `<div class="thinking-logo-wrapper"><img src="https://arlabs07.github.io/Arhub07.github.io/Images/arai2.png" alt="ARai" class="thinking-logo"><div class="thinking-glow"></div></div><div class="thinking-text"><span class="thinking-status">${e||"Processing"}</span> ${t||""}</div>`,
        i.appendChild(r), setTimeout(
          () => i.scrollTo({
            top: i
              .scrollHeight,
            behavior: "smooth"
          }), 50),
        r
    } catch (a) {
      return document
        .createElement(
          "div")
    }
  }
  async function T(e,
    t) {
    if (!e) return;
    try {
      let
        r = ["Analyzing query",
          "Extracting context",
          "Processing data",
          "Generating response"
        ];
      t > 0 && (r[1] =
        `Found ${t} sources`);
      for (
        let a of r) {
        try {
          let o = e
            .querySelector(
              ".thinking-status"),
            n = e.querySelector(
              ".thinking-text");
          o && n && n.childNodes[1] &&
            (o.textContent = a, n
              .childNodes[1]
              .textContent = "..."
            )
        } catch (
          i) {} await new Promise(e =>
          setTimeout(e, 600)
        )
      }
    } catch (s) {}
  }
  
  function I(e) {
    if (!e || "string" !=
      typeof e) return null;
    try {
      let
        t = e.replace(/^[^{]*/, "")
        .replace(/[^}]*$/,
          "");
      return JSON.parse(
        t)
    } catch (r) { return null }
  }
  
  function R(e, t) {
    if (!e ||
      "string" != typeof e || !t ||
      "string" != typeof t)
      return {
        context: "",
        sources: []
      };
    try {
      let r =
        document.getElementById(
          "actualPageContentIframe"
        );
      if (!r || !r.innerText)
        return {
          context: "",
          sources: []
        };
      let a = (r
        .innerText || "").replace(
        /\s+/g, " ").trim();
      if (!a || a
        .length < 50)
        return {
          context: "",
          sources: []
        };
      let o = e
        .toLowerCase().replace(
          /[^\w\s]/g, " ").split(/\s+/)
        .filter(e => e && e.length >
          2);
      if (!o || 0 === o.length)
        return {
          context: "",
          sources: []
        };
      let n = o.map(
          e => _(e)).filter(e => e),
        i = new Set(["the", "and",
          "for", "are", "but", "not",
          "you", "all", "can", "her",
          "was", "one", "our", "out",
          "this", "that", "with",
          "have", "from", "they",
          "been", "what", "which",
          "their", "when", "where",
          "there", "will", "would",
          "could", "should", "into",
          "through", "about", "after",
          "before", "between",
          "under", "over", "about",
          "just", "also", "more",
          "some", "than", "such",
          "very", "even", "must",
          "well", "back", "only",
          "come", "made", "find",
          "many", "part", "take",
          "place", "made", "live",
          "where", "after", "back",
          "little", "only", "round",
          "man", "year", "came",
          "show", "every", "good",
          "give", "work", "first",
          "made", "been", "long",
          "down", "call", "who",
          "oil", "its", "now", "find",
          "long", "down", "call",
          "who", "may", "part", "into"
        ]),
        s = n.filter(e => e && !i.has(
          e) && e.length > 2);
      if (!s ||
        s.length < 1)
        return {
          context: "",
          sources: []
        };
      let l = a.split(
        /[.!?\n]+/).map(e => e && e
        .trim()).filter(e => e && e
        .length > 30 && e.length < 800
      );
      if (!l || l.length < 1)
        return {
          context: "",
          sources: []
        };
      let c = l.map(
          e => _(e && e.toLowerCase()
            .replace(/[^\w\s]/g, " ")))
        .join(" ").split(/\s+/).filter(
          e => e),
        d = f(s),
        p = x(s),
        m = y(c, l.map(e => _(e && e
          .toLowerCase().replace(
            /[^\w\s]/g, " ")))),
        g = l.map((r, a) => {
          if (!r)
            return {
              text: r,
              score: 0,
              index: a
            };
          let o = r
            .toLowerCase(),
            n = _(o.replace(
              /[^\w\s]/g, " ")),
            i = 0;
          s.forEach(e => {
            if (!e)
              return;
            let t =
              RegExp(
                `\\b${e}\\w*`,
                "gi"),
              r = (n.match(t) ||
              []).length;
            if (r >
              0) {
              let a = m[e] ||
                1;
              i += r * a * 25
            }
            o
              .includes(e
                .toLowerCase()) &&
              (i += 200)
          });
          let l = e
            .toLowerCase().replace(
              /[^\w\s]/g, " ").split(
              /\s+/).filter(e => e);
          d.forEach(e => {
              e && o
                .includes(e) && (
                  i += 80)
            }), p
            .forEach(e => {
              e && o
                .includes(e) && (
                  i += 120)
            });
          let
            c = w(s, n.split(/\s+/)
              .filter(e => e));
          i += c * 150;
          let g = a / l
            .length;
          return g < .15 ?
            i += 30 : g < .3 ? i +=
            20 : g > .7 && (i -= 10),
            r.length > 50 && r
            .length < 500 && (i +=
              15), "code" === t &&
            /\b(function|class|const|let|var|return|import|export)\b/i
            .test(r) && (i += 50),
            "math" === t &&
            /[\d+\-*/=]|\b(equation|formula|calculate)\b/i
            .test(r) && (i += 50),
            "table" === t &&
            /\b(data|statistics|compare|table)\b/i
            .test(r) && (i += 50),
            /\d/.test(e) && /\d+/
            .test(r) && (i += 30),
            /\?$/.test(e) &&
            /\b(because|therefore|thus|answer|solution)\b/i
            .test(r) && (i +=
              40), {
              text: r,
              score: i,
              index: a
            }
        }),
        b = g.filter(e => e && e.score >
          10).sort((e, t) => (t && t
          .score || 0) - (e && e
          .score || 0));
      if (!b || b
        .length < 1)
        return {
          context: "",
          sources: []
        };
      let h = "",
        u = 0,
        v = [],
        k = new Set;
      for (let A = 0; A <
        Math.min(20, b.length); A++
      ) {
        let B = b[A];
        if (!B || !B
          .text) continue;
        if (u + B
          .text.length > 3500) break;
        h += B.text + ". ", v.push(B
            .text.substring(0, 150)),
          u += B.text.length, k.add(B
            .index)
      }
      if (!h || h
        .length < 100) {
        let C = l
          .slice(0, Math.min(10, l
            .length)).join(". ") + " ";
        v = l.slice(0, Math.min(10, l
          .length)).map(e => (e || "")
          .substring(0, 150)).filter(
          e => e), h = C.substring(0,
          3500)
      }
      return console.log(
        `[ARai] Extracted ${v.length} sources`
      ), {
        context: h || "",
        sources: v || []
      }
    } catch (
      E) {
      return console.error(
        "[ARai] Source extraction error"
      ), {
        context: "",
        sources: []
      }
    }
  }
  async function O() {
    let
      e = s.value.trim();
    if (!e || p)
      return;
    let t = function e(
      t) {
      if (!t || "string" !=
        typeof t)
        return null;
      try {
        let r = t
          .toLowerCase()
          .trim();
        return /^(regenerate|try again|redo|generate again|new response)$/i
          .test(r) ?
          { type: "regenerate" } :
          /^(explain simpler|simplify|make it simpler|eli5|explain like i'm 5)$/i
          .test(r) ?
          { type: "simplify" } :
          /^(make it shorter|shorten|shorter|brief|concise)$/i
          .test(r) ?
          { type: "shorter" } :
          /^(make it longer|longer|expand|elaborate|more detail|more details)$/i
          .test(r) ?
          { type: "longer" } :
          /^(continue|go on|keep going|finish)$/i
          .test(r) ?
          { type: "continue" } :
          /^(export|export chat|download|download chat|save chat)$/i
          .test(r) ?
          { type: "export" } :
          /^(clear|clear chat|reset|start over|new chat)$/i
          .test(r) ?
        { type: "clear" } :
          null
      } catch (
        a) { return null }
    }(e);
    if (
      t) {
      if ("export" === t.type) {
        !
        function e() {
          try {
            let t =
              "# ARai Conversation Export\n\n";
            t +=
              `Date: ${new Date().toLocaleString()}\n\n`,
              t += "---\n\n";
            let r =
              Array.from(i
                .querySelectorAll(
                  ".ai-msg"));
            r.forEach((e, r) => {
              if (
                !e)
                return;
              try {
                if (e
                  .classList
                  .contains(
                    "user-msg"))
                  t +=
                  `## User Query ${Math.floor(r/2)+1}\n\n`,
                  t += (e
                    .textContent ||
                    "").trim() +
                  "\n\n";
                else if (e
                  .classList
                  .contains(
                    "bot-msg")
                ) {
                  let a = e
                    .dataset
                    .messageId,
                    o = a ? g.get(
                      a) || e
                    .textContent ||
                    "" : e
                    .textContent ||
                    "";
                  t +=
                    `## ARai Response ${Math.floor(r/2)+1}\n\n`,
                    t += o
                    .trim() +
                    "\n\n";
                  let
                    n = JSON
                    .parse(e
                      .dataset
                      .sources ||
                      "[]");
                  n && Array
                    .isArray(n) &&
                    n.length >
                    0 && (t +=
                      `### Sources\n\n`,
                      n.forEach((
                        e, r
                      ) => {
                        e
                          &&
                          (
                            t +=
                            `${r+1}. ${e}\n\n`
                          )
                      })),
                    t +=
                    "---\n\n"
                }
              } catch (
                s) {}
            });
            let a =
              new Blob([
                t
              ], { type: "text/markdown" }),
              o = URL.createObjectURL(
                a),
              n = document
              .createElement("a");
            n.href = o, n.download =
              `arai-conversation-${Date.now()}.md`,
              n.click(), URL
              .revokeObjectURL(
                o)
          } catch (l) {
            console
              .error(
                "[ARai] Export error"
              )
          }
        }(), s.value =
          "";
        return
      }
      if ("clear" === t
        .type) {
        i.innerHTML =
          '<div class="initial-screen"><div class="initial-screen-title">Ask ARai anything</div><div class="initial-screen-subtitle">Get contextual help about this page or ask general questions.</div></div>',
          d = [], g.clear(), b = null,
          h = null, s.value =
          "";
        return
      }
      if (
        "regenerate" === t.type &&
        h && b) {
        s.value = h,
          O();
        return
      }
      if ("simplify" ===
        t.type && b) {
        s.value =
          "Explain this in simpler terms: " +
          b, O();
        return
      }
      if (
        "shorter" === t.type && b) {
        s
          .value =
          "Make this shorter and more concise: " +
          b, O();
        return
      }
      if (
        "longer" === t.type && b) {
        s
          .value =
          "Expand on this with more details: " +
          b, O();
        return
      }
      if (
        "continue" === t.type && b
      ) {
        s.value =
          "Continue from: " + b.slice(
            -200),
          O();
        return
      }
    }
    if (e.length >
      5e3) return;
    p = !0, l.disabled = !0, l
      .classList.remove("active");
    let
      r = e,
      a = function e(t) {
        if (!t ||
          "string" != typeof t)
          return "search";
        try {
          let r =
            t
            .toLowerCase();
          return /\b(summarize|summary|summarise|overview|brief|gist|tldr|main points)\b/i
            .test(r) ? "summarize" :
            /\b(write|create|generate|build|make|code|script|function|program)\b.*\b(code|script|function|program|html|css|javascript|python|java)\b/i
            .test(r) ? "code" :
            /\b(calculate|compute|solve|find|what is|pi|euler|sqrt|integral|derivative|equation|formula)\b/i
            .test(r) ||
            /[\d+\-*/^()π]/.test(t) ?
            "math" :
            /\b(table|chart|list|compare|comparison|vs|versus|data|statistics)\b/i
            .test(r) ? "table" :
            /\b(image|picture|photo|draw|generate|create|show)\b.*\b(image|picture|photo|of)\b/i
            .test(r) ? "image" :
            /\b(what is|explain|define|definition|meaning|describe|tell me about)\b/i
            .test(r) ? "explain" :
            "search"
        } catch (
          a) { return "search" }
      }(e);
    L("user", e, [], "", !1), s
      .value = "";
    let o = M(
      "Initializing", "");
    try {
      let
        n = R(e, a),
        c = n.context || "",
        m = n.sources || [];
      T(o, m.length);
      let u =
        function e() {
          try {
            let t =
              "",
              r = d.slice(-8);
            if (!
              r || 0 === r.length)
              return "";
            for (let a of
                r) {
              if (!a || !a
                .role || !a.content)
                continue;
              let o =
                "user" === a.role ?
                "User" : "Assistant",
                n = $(a.content, 200);
              t +=
                `${o}: ${n}\n\n`
            }
            return $(
              t, 4e3)
          } catch (
            i) { return "" }
        }(),
        v =
        `You are ARai by arlabs07. Follow ALL instructions EXACTLY.\n\nRULES:\n1. Code: Output ACTUAL CODE in code blocks, NOT explanations\n2. Math: Use LaTeX with $ or $$ delimiters. Example: $$\\pi = 3.14159265358979323846$$\n3. Tables: Use markdown table format with | separators\n4. Images: Use ![desc](https://image.pollinations.ai/prompt/desc)\n5. NEVER add citation numbers in responses\n6. Summarize: Comprehensive overview with key points\n7. Be PRECISE and DIRECT`,
        k = "";
      m && m.length > 0 && (k =
        "\n\nContext:\n", m.forEach(
          (e, t) => {
            e && (k +=
              `${t+1}. ${e.substring(0,200)}\n`
            )
          }));
      let
        A = {
          model: "gemini-search",
          messages: [{
              role: "system",
              content: v
            }, u &&
            "" !== u.trim() ?
            {
              role: "assistant",
              content: "Context understood."
            } :
            null, ...d.slice(-6)
            .map(e => ({
              role: e
                .role,
              content: e
                .content
            })),
            {
              role: "user",
              content: c && c
                .length > 50 ?
                `${e}${k}\n\nPage: ${c}` :
                `${e}${k}`
            }
          ].filter(e => null !== e),
          temperature: .7,
          max_tokens: 1500,
          top_p: .4,
          stream: !0
        },
        B = await fetch(
          "https://text.pollinations.ai/openai", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(A)
          }
        );
      if (!B || !B.ok)
        throw Error(
          `API Error: ${B?B.status:"Network error"}`
        );
      o.remove();
      let C = L("bot", "",
        m, r, !0);
      if (!C)
        throw Error(
          "Failed to create message element"
        );
      let E = B.body
        .getReader(),
        O = new TextDecoder,
        j = "";
      for (;;) {
        let {
          done: D,
          value: N
        } = await E
          .read();
        if (D) break;
        if (!N)
          continue;
        let P = O.decode(
          N, { stream: !0 });
        if (!P)
          continue;
        let q = P.split(
          "\n").filter(e => e && e
          .trim());
        for (let F of q)
          if (F && F.startsWith(
              "data: ")) {
            let H = F
              .slice(6).trim();
            if (
              "[DONE]" === H)
              continue;
            try {
              let U = I(
                  H) || JSON.parse(H),
                W = U?.choices?.[0]
                ?.delta?.content ||
                "";
              W && (j += W, C
                .innerHTML = v(j, C
                  .dataset.messageId
                ), i
                .scrollTo({
                  top: i
                    .scrollHeight,
                  behavior: "smooth"
                })
              )
            } catch (
              z) {}
          }
      }
      "undefined" !=
      typeof hljs && C && C
        .querySelectorAll && C
        .querySelectorAll("pre code")
        .forEach(e => {
          if (!e)
            return;
          try {
            e.classList
              .contains("hljs") ||
              hljs.highlightElement(
                e)
          } catch (t) {}
        }),
        await S(j, C, m, r)
    } catch (
      G) {
      try {
        o && o.remove && o
          .remove()
      } catch (
        V) {} console.error(
        "[ARai] Error:", G);
      try {
        L(
          "bot",
          "I apologize, but I encountered an error processing your request. Please try again or rephrase your question.",
          [], "", !1)
      } catch (
        X) {}
    } finally {
      p = !1, l
        .disabled = !0, window
        .innerWidth >= 769 && s
        .focus()
    }
  }
  t
    .addEventListener("click", u), s
    .addEventListener("input",
      () => {
        let e = s.value.trim()
          .length > 0;
        l.classList.toggle("active",
            e && !p), l.disabled = !e ||
          p
      }), l.addEventListener(
      "click", () => {
        l.disabled ||
          p || O()
      }), s
    .addEventListener("keypress",
      e => {
        "Enter" === (e && e.key) ||
        l.disabled || p || O()
      }), n
    .addEventListener("click", e => {
      e
        &&
        e.target === n && u()
    }),
    document.addEventListener("keydown",
      e => {
        "Escape" === (e && e
          .key) && c && u()
      }), document
    .addEventListener("click",
      e => {
        if (!e || !e.target)
          return;
        e.target.closest(".bot-msg") ||
          (document.querySelectorAll(
              ".bot-msg.active")
            .forEach(e => {
              e && e
                .classList && e
                .classList.remove(
                  "active")
            }), document
            .querySelectorAll(
              ".sources-dropdown.show")
            .forEach(e => {
              e && e
                .classList && e
                .classList.remove(
                  "show")
            }))
      })
}();
