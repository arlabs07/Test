!function(){"use strict";let e={fonts:"https://fonts.googleapis.com/icon?family=Material+Icons",mermaid:"https://cdn.jsdelivr.net/npm/mermaid@9.4.3/dist/mermaid.min.js",marked:"https://cdn.jsdelivr.net/npm/marked/marked.min.js",chartjs:"https://cdn.jsdelivr.net/npm/chart.js"};function t(e,t,r){if("css"===e){if(document.querySelector(`link[href="${t}"]`))return;let a=document.createElement("link");a.rel="stylesheet",a.href=t,document.head.appendChild(a)}else if("js"===e){if(document.querySelector(`script[src="${t}"]`))return;let l=document.createElement("script");l.src=t,r&&(l.onload=r),l.onerror=()=>console.warn(`Failed to load ${t}`),document.head.appendChild(l)}}requestAnimationFrame(()=>{t("css",e.fonts),t("js",e.marked),t("js",e.chartjs),t("js",e.mermaid,()=>{window.mermaid&&mermaid.initialize({startOnLoad:!1,theme:"dark",securityLevel:"loose",fontFamily:"Segoe UI, sans-serif"})})});let r=`
  :root {
    --cb-bg: #1e1e1e; --cb-header: #252526; --cb-border: #3e3e42; --cb-text: #d4d4d4;
    --cb-line: #858585; --cb-hover: #2a2d2e; --cb-accent: #007acc; --cb-scroll: #424242;
    --cb-gutter-bg: #1e1e1e; --cb-minimap-overlay: rgba(255, 255, 255, 0.1);
    
    /* Token Colors (Dark Theme) */
    --t-kw: #569cd6; --t-val: #b5cea8; --t-fn: #dcdcaa; --t-str: #ce9178;
    --t-typ: #4ec9b0; --t-var: #9cdcfe; --t-tag: #569cd6; --t-attr: #9cdcfe;
    --t-com: #6a9955; --t-op: #d4d4d4; --t-num: #b5cea8; --t-bool: #569cd6; 
    --t-reg: #d16969; --t-doctype: #808080;
  }
  .cb-light {
    --cb-bg: #ffffff; --cb-header: #f3f3f3; --cb-border: #e1e4e8; --cb-text: #24292e;
    --cb-line: #6a737d; --cb-hover: #fafbfc; --cb-accent: #0366d6; --cb-scroll: #d1d5da;
    --cb-gutter-bg: #ffffff; --cb-minimap-overlay: rgba(0, 0, 0, 0.05);

    /* Token Colors (Light Theme) */
    --t-kw: #d73a49; --t-val: #005cc5; --t-fn: #6f42c1; --t-str: #032f62;
    --t-typ: #6f42c1; --t-var: #24292e; --t-tag: #22863a; --t-attr: #6f42c1;
    --t-com: #6a737d; --t-op: #24292e; --t-num: #005cc5; --t-bool: #005cc5; 
    --t-reg: #032f62; --t-doctype: #6a737d;
  }
  
  /* Wrapper & Layout */
  .cb-wrapper {
    box-sizing: border-box;
    border: 1px solid var(--cb-border); border-radius: 6px; background: var(--cb-bg); margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden; transition: box-shadow 0.2s;
    display: flex; flex-direction: column; contain: content;
    font-family: 'Segoe UI', system-ui, sans-serif; /* Scoped font */
  }
  .cb-wrapper *, .cb-wrapper *::before, .cb-wrapper *::after { box-sizing: border-box; }
  .cb-wrapper:hover { box-shadow: 0 8px 12px rgba(0,0,0,0.15); }
  .cb-wrapper.collapsed .cb-body { display: none !important; }
  .cb-wrapper.collapsed { border-bottom: 1px solid var(--cb-border); }
  
  /* Header */
  .cb-header {
    display: flex; justify-content: space-between; align-items: center; padding: 8px 12px;
    background: var(--cb-header); border-bottom: 1px solid var(--cb-border); flex-shrink: 0;
  }
  .cb-lang-badge { font-size: 12px; font-weight: 700; color: var(--cb-line); letter-spacing: 0.5px; }
  .cb-actions { display: flex; gap: 4px; }
  .cb-btn {
    background: transparent; border: none; color: var(--cb-line); cursor: pointer; padding: 4px;
    border-radius: 4px; display: flex; align-items: center; justify-content: center; transition: all 0.2s;
  }
  .cb-btn:hover, .cb-btn:focus-visible { background: var(--cb-hover); color: var(--cb-text); outline: 2px solid var(--cb-accent); }
  .cb-btn.active { color: #fff; background: var(--cb-accent); }
  .cb-btn.success { color: #4caf50; }
  .cb-btn i { font-size: 18px; pointer-events: none; }
  
  /* Code Body */
  .cb-body { position: relative; display: flex; flex-direction: row; height: 100%; max-height: 500px; }
  
  .cb-code-container {
    flex: 1; overflow: auto; font-family: 'Consolas', 'Monaco', 'Fira Code', monospace;
    font-size: 13.5px; line-height: 1.5; scrollbar-width: thin; scrollbar-color: var(--cb-scroll) var(--cb-bg);
    background: var(--cb-bg); position: relative; scroll-behavior: auto; 
  }
  .cb-code-container::-webkit-scrollbar { width: 10px; height: 10px; }
  .cb-code-container::-webkit-scrollbar-track { background: var(--cb-bg); }
  .cb-code-container::-webkit-scrollbar-thumb { background: var(--cb-scroll); border: 2px solid var(--cb-bg); border-radius: 5px; }
  
  /* Minimap */
  .cb-minimap {
    width: 60px; flex-shrink: 0; border-left: 1px solid var(--cb-border);
    background: var(--cb-bg); position: relative; overflow: hidden;
    cursor: pointer; user-select: none;
  }
  .cb-minimap canvas { display: block; width: 100%; }
  .cb-minimap-overlay {
    position: absolute; left: 0; right: 0; top: 0;
    background: var(--cb-minimap-overlay);
    transition: background 0.05s linear;
    pointer-events: none;
  }
  .cb-minimap:hover .cb-minimap-overlay { background: rgba(120, 120, 120, 0.2); }

  /* Lines */
  .cb-line { 
    display: flex; flex-direction: row; min-height: 21px; flex-shrink: 0; 
    min-width: 100%; width: max-content; 
  }
  .cb-line.hidden { display: none; }
  .cb-code-container.wrapping-active .cb-line { width: 100% !important; }
  .cb-code-container.wrapping-active .cb-content { white-space: pre-wrap; word-break: break-word; overflow-wrap: anywhere; }
  
  .cb-gutter {
    position: sticky; left: 0; display: flex; align-items: flex-start; width: 45px; min-width: 45px;
    background: var(--cb-gutter-bg); border-right: 1px solid var(--cb-border); color: var(--cb-line);
    z-index: 10; user-select: none; flex-shrink: 0;
  }
  .cb-line-num { width: 25px; text-align: right; padding-right: 4px; font-size: 11px; line-height: 21px; opacity: 0.7; }
  .cb-fold-marker { width: 15px; text-align: center; cursor: pointer; line-height: 21px; opacity: 0.5; transition: opacity 0.2s; }
  .cb-fold-marker:hover, .cb-fold-marker:focus { opacity: 1; color: var(--cb-text); }
  .cb-content { flex: 1; padding: 0 10px; color: var(--cb-text); white-space: pre; overflow-wrap: normal; min-width: 0; }
  
  .cb-fold-placeholder {
    display: inline-block; background: var(--cb-hover); padding: 0 6px; margin-left: 5px;
    border-radius: 4px; font-size: 10px; height: 16px; line-height: 16px; vertical-align: middle;
    cursor: pointer; color: var(--cb-text); user-select: none;
  }

  /* Tokens */
  .t-kw { color: var(--t-kw); font-weight: bold; } 
  .t-val, .t-num { color: var(--t-val); }
  .t-fn { color: var(--t-fn); } 
  .t-str { color: var(--t-str); } 
  .t-typ, .t-class { color: var(--t-typ); }
  .t-tag { color: var(--t-tag); font-weight: bold; } 
  .t-attr { color: var(--t-attr); }
  .t-var { color: var(--t-var); }
  .t-com { color: var(--t-com); font-style: italic; } 
  .t-op { color: var(--t-op); }
  .t-bool { color: var(--t-bool); }
  .t-reg { color: var(--t-reg); }
  .t-doctype { color: var(--t-doctype); font-style: italic; }
  
  .cb-color-swatch {
    display: inline-block; width: 10px; height: 10px; border-radius: 2px;
    margin-right: 5px; vertical-align: middle; border: 1px solid rgba(255,255,255,0.2);
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  }

  /* Preview & Console */
  .cb-preview-panel { 
    display: flex; flex-direction: column; background: #fff; min-height: 250px; 
    border-top: 1px solid var(--cb-border); width: 100%; position: relative;
  }
  .cb-preview-panel:fullscreen { height: 100vh; border: none; }
  
  /* Preview Toolbar */
  .cb-preview-toolbar {
    display: flex; justify-content: flex-end; align-items: center; gap: 8px;
    background: #f0f0f0; border-bottom: 1px solid #ddd; padding: 4px 8px; height: 32px; flex-shrink: 0;
  }
  .cb-preview-btn {
    background: #fff; border: 1px solid #ccc; border-radius: 3px; cursor: pointer;
    font-size: 11px; padding: 2px 8px; color: #333; display: flex; align-items: center; gap: 4px;
    transition: background 0.2s;
  }
  .cb-preview-btn:hover { background: #e0e0e0; }
  .cb-preview-btn i { font-size: 14px; }

  /* Output Frame */
  .cb-output-frame {
    flex: 1; width: 100%; border: none; background: #fff; overflow: auto; position: relative;
  }
  .cb-preview-frame { width: 100%; height: 100%; border: none; display: block; }
  
  .cb-console { 
    background: #1e1e1e; border-top: 1px solid #333; 
    display: flex; flex-direction: column; height: 150px; flex-shrink: 0;
    transition: height 0.3s ease;
  }
  .cb-console-header {
    padding: 0 8px; height: 32px; background: #252526; color: #ccc; font-size: 11px; text-transform: uppercase;
    border-bottom: 1px solid #333; flex-shrink: 0; display: flex; justify-content: space-between; align-items: center; cursor: pointer;
  }
  .cb-console-toggle { background: transparent; border: none; color: #ccc; cursor: pointer; padding: 0 4px; display: flex; align-items: center; justify-content: center; }
  .cb-console-logs { flex: 1; overflow-y: auto; padding: 8px; font-family: monospace; font-size: 12px; color: #ddd; }
  .cb-log-item { border-bottom: 1px solid #333; padding: 2px 0; white-space: pre-wrap; word-wrap: break-word; }
  .cb-log-item.error { color: #f48771; border-left: 3px solid #f48771; padding-left: 5px; }
  .cb-log-item.warn { color: #cca700; border-left: 3px solid #cca700; padding-left: 5px; }
  .cb-error { padding: 20px; color: #f48771; font-family: monospace; }
  
  .cb-console.minimized { height: 32px; overflow: hidden; }
  .cb-preview-panel.full-console .cb-output-frame { display: none; }
  .cb-preview-panel.full-console .cb-console { height: 300px; border-top: none; }

  /* Visualizers Content Styles */
  .cb-mermaid-view { padding: 20px; text-align: center; }
  .cb-chart-view { padding: 20px; display: flex; justify-content: center; }
  .cb-chart-container { position: relative; height: 400px; width: 100%; max-width: 800px; }
  .cb-md-preview { padding: 30px; color: #24292e; line-height: 1.6; max-width: 100%; }
  .cb-md-preview h1, .cb-md-preview h2 { border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; margin-top: 24px; }
  .cb-md-preview code { padding: 0.2em 0.4em; font-size: 85%; background-color: rgba(27,31,35,0.05); border-radius: 3px; font-family: monospace; }
  .cb-md-preview pre { padding: 16px; background-color: #f6f8fa; border-radius: 3px; overflow: auto; }
  .cb-table-wrapper { padding: 20px; overflow-x: auto; }
  .cb-excel-table { border-collapse: collapse; width: 100%; font-family: sans-serif; font-size: 14px; color: #333; }
  .cb-excel-table th, .cb-excel-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
  .cb-excel-table th { background-color: #f2f2f2; font-weight: bold; }
  .cb-excel-table tr:nth-child(even) { background-color: #f9f9f9; }
  `,a=document.createElement("style");a.textContent=r,document.head.appendChild(a);let l={js:"js",css:"css",html:"html",python:"py",java:"java",cpp:"cpp",bash:"sh",ts:"ts",md:"md",csv:"csv",chartjs:"json",rust:"rs",go:"go",ruby:"rb",php:"php",sql:"sql",yaml:"yaml",xml:"xml",json:"json",csharp:"cs",swift:"swift",kotlin:"kt",graphql:"gql",docker:"dockerfile",r:"r",lua:"lua",dart:"dart"},o={javascript:"js",typescript:"ts",jsx:"js","c++":"cpp",sh:"bash",markdown:"md",chart:"chartjs",rs:"rust",rb:"ruby",cs:"csharp",yml:"yaml",kt:"kotlin",gql:"graphql",dockerfile:"docker","c#":"csharp"},c=/\b\d+(\.\d+)?(e[-+]?\d+)?\b|0x[0-9a-fA-F]+\b/,n=/\b(true|false|null|undefined|nil|None|TRUE|FALSE|NULL)\b/,i=/(['"`])(?:\\.|(?!\1)[^\\\n])*\1/,s=/[+\-*/%=&|<>!^]+/,d={js:{kw:/\b(function|return|if|else|for|while|const|let|var|async|await|class|new|this|try|catch|switch|case|break|continue|default|throw|import|export|from|static|extends|super)\b/,bool:/\b(true|false|null|undefined|NaN|Infinity)\b/,fn:/\b[a-zA-Z_$][a-zA-Z0-9_$]*(?=\()/},ts:{kw:/\b(interface|type|declare|public|private|protected|readonly|as|implements|enum|namespace|module|abstract)\b/,typ:/\b(string|number|boolean|void|any|never|object)\b/},css:{com:/\/\*[\s\S]*?\*\//,kw:/@[\w-]+/,val:/\b\d+(?:px|em|%|rem|vh|vw|s|ms|deg|rad)\b/,attr:/(?<=^|[{;])\s*([a-zA-Z-][a-zA-Z0-9-]*)(?=\s*:)/,tag:/([.#]?[a-zA-Z0-9_-]+)(?=[^{}]*\{)/,val_kw:/\b(important|url|rgb|rgba|hsl|hsla)\b/},html:{com:/<!--[\s\S]*?-->/,doctype:/<!DOCTYPE\s+[^>]*>/i,tag:/<\/?\s*[a-zA-Z0-9-]+/i,attr:/\b[a-zA-Z0-9:-]+(?=\s*=)/,val:/"[^"]*"|'[^']*'/,op:/\/?>/},python:{kw:/\b(def|class|if|else|elif|for|while|import|return|try|except|finally|with|as|pass|lambda|global|nonlocal|from|in|is|not|and|or)\b/,bool:/\b(True|False|None)\b/,com:/#.*/,fn:/\b[a-zA-Z_]\w*(?=\()/},java:{kw:/\b(public|private|protected|class|interface|enum|void|int|new|return|if|else|for|while|switch|case|try|catch|finally|static|final|abstract|extends|implements|package|import|this|super)\b/,typ:/\b(String|Integer|Boolean|Double|List|Map|Set)\b/,attr:/@[a-zA-Z0-9_]+/},cpp:{kw:/\b(class|struct|public|private|protected|void|int|double|float|char|bool|return|if|else|for|while|do|switch|case|break|continue|new|delete|using|namespace|template|typename|const|static|friend|virtual|override)\b/,typ:/\b(std|vector|string|unique_ptr|shared_ptr|map)\b/,com:/\/\/.*|\/\*[\s\S]*?\*\//},bash:{kw:/\b(if|fi|then|else|elif|for|do|done|while|case|esac|function|return|exit|source|echo|export|local|read)\b/,var:/\$[a-zA-Z_0-9{}]+/,com:/#.*/},sql:{kw:/\b(SELECT|FROM|WHERE|INSERT|INTO|UPDATE|DELETE|GROUP|ORDER|BY|HAVING|LIMIT|OFFSET|JOIN|LEFT|RIGHT|INNER|OUTER|ON|AS|DISTINCT|COUNT|SUM|AVG|MAX|MIN|CREATE|TABLE|DROP|ALTER|INDEX|PRIMARY|KEY|FOREIGN|REFERENCES|VALUES|AND|OR|NOT|NULL|IS)\b/i,typ:/\b(VARCHAR|INT|INTEGER|TEXT|DATE|TIMESTAMP|BOOLEAN)\b/i},json:{kw:/\b(true|false|null)\b/,attr:/"[a-zA-Z0-9_-]+"(?=\s*:)/},markdown:{kw:/^#{1,6}\s+.+/,str:/\[.+?\]\(.+?\)/,typ:/(`[^`]+`)/},docker:{kw:/^\s*(FROM|MAINTAINER|RUN|CMD|LABEL|EXPOSE|ENV|ADD|COPY|ENTRYPOINT|VOLUME|USER|WORKDIR|ARG|ONBUILD|STOPSIGNAL|HEALTHCHECK|SHELL)\b/i}};function p(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}let b=/#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{4}|[0-9a-fA-F]{3})\b|rgba?\((?:\s*\d+\s*,){2}\s*\d+\s*(?:,\s*[\d.]+\s*)?\)|hsla?\(\s*\d+\s*,\s*[\d.]+%?\s*,\s*[\d.]+%?\s*(?:,\s*[\d.]+\s*)?\)/i;function m(e,t,r,a){r.length&&requestAnimationFrame(()=>{let l=document.createElement("canvas"),o=l.getContext("2d",{alpha:!1}),c=document.createElement("div");c.className="cb-minimap-overlay",t.innerHTML="",t.appendChild(l),t.appendChild(c);let n=4*r.length;l.width=60,l.height=n;let i=getComputedStyle(a),s=i.getPropertyValue("--cb-bg").trim()||"#1e1e1e";o.fillStyle=s,o.fillRect(0,0,60,n);let d={def:i.getPropertyValue("--cb-text").trim()||"#ccc",kw:i.getPropertyValue("--t-kw").trim()||"#569cd6",str:i.getPropertyValue("--t-str").trim()||"#ce9178",com:i.getPropertyValue("--t-com").trim()||"#6a9955",fn:i.getPropertyValue("--t-fn").trim()||"#dcdcaa",val:i.getPropertyValue("--t-val").trim()||"#b5cea8",tag:i.getPropertyValue("--t-tag").trim()||"#569cd6",attr:i.getPropertyValue("--t-attr").trim()||"#9cdcfe"};r.forEach((e,t)=>{let r=4*t,a=/<span class="([^"]+)">([^<]+)<\/span>|([^<]+)/g,l,c=0;for(;null!==(l=a.exec(e))&&!(c>60);){let n="",i=d.def;if(l[1]){let s=l[1];n=l[2],s.includes("t-kw")||s.includes("t-doctype")?i=d.kw:s.includes("t-str")?i=d.str:s.includes("t-com")?i=d.com:s.includes("t-fn")?i=d.fn:s.includes("t-val")||s.includes("t-num")?i=d.val:s.includes("t-tag")?i=d.tag:s.includes("t-attr")&&(i=d.attr)}else{if((n=l[0]).startsWith("</"))continue;n=n.replace(/<[^>]+>/g,"").replace(/&[a-z]+;/g," ")}n.trim().length>0&&(o.fillStyle=i,o.fillRect(c,r,2*n.length,3)),c+=2*n.length}});let p=e,b=()=>{let e=p.clientHeight/p.scrollHeight,r=Math.max(20,e*t.clientHeight),a=p.scrollTop/p.scrollHeight,l=a*t.clientHeight;requestAnimationFrame(()=>{c.style.height=`${r}px`,c.style.top=`${l}px`})};p.addEventListener("scroll",b,{passive:!0});let m=!1,f=e=>{let r=t.getBoundingClientRect(),a=e.clientY-r.top,l=a/t.clientHeight;p.scrollTop=l*p.scrollHeight-p.clientHeight/2};t.addEventListener("mousedown",e=>{m=!0,f(e)}),document.addEventListener("mousemove",e=>{m&&f(e)}),document.addEventListener("mouseup",()=>{m=!1}),setTimeout(b,50)})}function f(e){let t=e.querySelector("code");if(!t)return;let a="text",f=Array.from(t.classList),g=f.find(e=>e.startsWith("language-")||e.startsWith("lang-"));if(g)a=g.replace(/^(language-|lang-)/,"");else{let u=f.find(e=>l[e]||o[e]||d[e]);u&&(a=u)}let h=o[a]||a,v=t.textContent.trim(),x=["js","ts","html","mermaid","md","markdown","csv","chartjs"].includes(h),y=document.createElement("div");y.className="cb-wrapper",y.setAttribute("role","region"),y.setAttribute("aria-label",`${a.toUpperCase()} Code Snippet`);let $=document.createElement("div");$.className="cb-header",$.innerHTML=`
      <div class="cb-lang-badge">${a.toUpperCase()}</div>
      <div class="cb-actions" role="toolbar">
        <button class="cb-btn cb-theme-toggle" aria-label="Toggle Theme"><i class="material-icons">light_mode</i></button>
        <button class="cb-btn cb-wrap-toggle" aria-label="Toggle Wrap"><i class="material-icons">wrap_text</i></button>
        <button class="cb-btn cb-copy-btn" aria-label="Copy Code"><i class="material-icons">content_copy</i></button>
        <button class="cb-btn cb-dl-btn" aria-label="Download Code"><i class="material-icons">download</i></button>
        ${x?'<button class="cb-btn cb-run-btn" aria-label="Run Code"><i class="material-icons">play_arrow</i></button>':""}
        <button class="cb-btn cb-collapse-btn" aria-label="Collapse Code"><i class="material-icons">expand_less</i></button>
      </div>
    `;let w=document.createElement("div");w.style.display="flex",w.style.flexDirection="column";let k=document.createElement("div");k.className="cb-body",k.style.height="auto",k.style.maxHeight="500px";let _=document.createElement("div");_.className="cb-code-container",_.tabIndex=0;let E=document.createElement("div");E.className="cb-minimap";let L=document.createElement("div");L.className="cb-preview-panel",L.style.display="none",k.append(_,E),w.append(k,L),y.append($,w),e.replaceWith(y);let T=v.split("\n"),S=function e(t,r){let a=[],l=[],o=/\{\s*$/,c=/^\s*\}/;return["html","xml","marko","vue"].includes(r)&&(o=/<([a-zA-Z0-9]+)[^>]*>$/,c=/<\/([a-zA-Z0-9]+)>$/),t.forEach((e,t)=>{if(o.test(e))l.push(t);else if(c.test(e)&&l.length){let r=l.pop();t-r>0&&a.push({start:r,end:t})}}),a}(T,h),C={};S.forEach(e=>C[e.start]=e.end);let N=[],j=T.map((e,t)=>{let r=document.createElement("div");r.className="cb-line";let a=document.createElement("div");if(a.className="cb-gutter",a.innerHTML=`<div class="cb-line-num">${t+1}</div>`,void 0!==C[t]){let l=document.createElement("div");l.className="cb-fold-marker",l.innerHTML='<i class="material-icons">keyboard_arrow_down</i>',l.onclick=()=>{let e=l.classList.toggle("folded");l.innerHTML=`<i class="material-icons">${e?"chevron_right":"keyboard_arrow_down"}</i>`;let a=r.querySelector(".cb-content");for(let o=t+1;o<=C[t];o++)j[o].classList.toggle("hidden",e);if(e){let c=document.createElement("span");c.className="cb-fold-placeholder",c.textContent="...",c.onclick=e=>{e.stopPropagation(),l.click()},a.appendChild(c)}else a.querySelector(".cb-fold-placeholder")?.remove()},a.appendChild(l)}let m=document.createElement("div");m.className="cb-content";let f=function e(t,r){if(["text","mermaid"].includes(r=o[r]||r||"text"))return p(t);let a="chartjs"===r?"js":r,l=d[a]||{};"ts"===r&&Object.assign(l,d.js,d.ts);let m=[],f=0,g={com:l.com||/\/\/.*|\/\*[\s\S]*?\*\//,col:b,str:i,bool:n,num:c,op:s};for(;f<t.length;){let u=null,h=null,v=t.slice(f);for(let[x,y]of Object.entries(l)){if(!y)continue;let $=v.match(y);$&&0===$.index&&(!u||$[0].length>u.length)&&(u=$[0],h="col"===x?"col":"t-"+x)}if(!u&&!["html","xml","svg"].includes(r))for(let[w,k]of Object.entries(g)){let _=v.match(k);_&&0===_.index&&(!u||_[0].length>u.length)&&(u=_[0],h="col"===w?"col":"t-"+w)}if(u){let E=!1,L=u;if("col"===h)E=!0;else if("t-str"===h){let T=u.replace(/^['"`]|['"`]$/g,"");T.match(b)&&T.match(b)[0]===T&&(E=!0,L=T)}E?m.push(`<span class="cb-color-swatch" style="background-color: ${L};"></span><span class="${"col"===h?"t-val":h}">${p(u)}</span>`):m.push(`<span class="${h}">${p(u)}</span>`),f+=u.length}else m.push(p(t[f])),f++}return m.join("")}(e,h);return N.push(f),m.innerHTML=f||"&nbsp;",r.append(a,m),r});j.forEach(e=>_.appendChild(e)),requestAnimationFrame(()=>m(_,E,N,y));let A={collapse:y.querySelector(".cb-collapse-btn"),theme:y.querySelector(".cb-theme-toggle"),wrap:y.querySelector(".cb-wrap-toggle"),copy:y.querySelector(".cb-copy-btn"),dl:y.querySelector(".cb-dl-btn"),run:y.querySelector(".cb-run-btn")};A.collapse.onclick=()=>{let e=y.classList.toggle("collapsed");A.collapse.querySelector("i").textContent=e?"expand_more":"expand_less"},A.theme.onclick=()=>{let e=y.classList.toggle("cb-light");A.theme.querySelector("i").textContent=e?"dark_mode":"light_mode",m(_,E,N,y)},A.wrap.onclick=()=>{A.wrap.classList.toggle("active"),_.classList.toggle("wrapping-active")},A.copy.onclick=async()=>{await navigator.clipboard.writeText(v);let e=A.copy.querySelector("i");e.textContent="check",A.copy.classList.add("success"),setTimeout(()=>{e.textContent="content_copy",A.copy.classList.remove("success")},2e3)},A.dl.onclick=()=>{let e=document.createElement("a");e.href=URL.createObjectURL(new Blob([v],{type:"text/plain"})),e.download=`snippet.${l[h]||"txt"}`,e.click()},A.run&&(A.run.onclick=()=>{let e=A.run.classList.toggle("active");A.run.querySelector("i").textContent=e?"stop":"play_arrow",k.style.display=e?"none":"flex",L.style.display=e?"flex":"none",e?function e(t,a,l){l.innerHTML="",a=o[a]||a;let c="exec-"+Math.random().toString(36).substr(2,9),n=document.createElement("div");n.className="cb-preview-toolbar",n.innerHTML=`
      <button class="cb-preview-btn" id="btn-newtab-${c}" title="Open in New Tab"><i class="material-icons">open_in_new</i> New Tab</button>
      <button class="cb-preview-btn" id="btn-full-${c}" title="Full Screen"><i class="material-icons">fullscreen</i> Full Screen</button>
    `;let i=document.createElement("div");i.className="cb-output-frame",i.id=`frame-${c}`;let s=document.createElement("div");s.className="cb-console",s.innerHTML=`
      <div class="cb-console-header">
        <span>Console</span>
        <button class="cb-console-toggle" aria-label="Toggle Console" aria-expanded="true"><i class="material-icons">keyboard_arrow_down</i></button>
      </div>
      <div class="cb-console-logs" role="log" aria-live="polite"></div>
    `;let d=s.querySelector(".cb-console-header");d.onclick=()=>{let e=s.classList.toggle("minimized"),t=s.querySelector(".cb-console-toggle");t.setAttribute("aria-expanded",!e),t.querySelector("i").textContent=e?"keyboard_arrow_up":"keyboard_arrow_down"};let b=["js","ts"].includes(a),m="html"===a;b?(l.classList.add("full-console"),n.style.display="none",i.style.display="none",l.append(i,s)):m?(l.classList.remove("full-console"),l.append(n,i,s)):(l.classList.remove("full-console"),l.append(n,i));let f=e=>{i.innerHTML=`<div class="cb-error">Error: ${p(e)}</div>`},g=null;if("mermaid"===a){if(!window.mermaid)return f("Mermaid library loading...");i.innerHTML=`<div id="${c}-mm" class="cb-mermaid-view"></div>`;try{mermaid.render(c+"-svg",t,e=>document.getElementById(c+"-mm").innerHTML=e)}catch(u){f(u.message)}}else if("chartjs"===a){if("undefined"==typeof Chart)return f("Chart.js loading...");i.innerHTML='<div class="cb-chart-view"><div class="cb-chart-container"><canvas></canvas></div></div>';try{let h=Function("return "+t)();h.options={...h.options,maintainAspectRatio:!1,responsive:!0},new Chart(i.querySelector("canvas"),h)}catch(v){f(v.message)}}else if("md"===a||"markdown"===a){if(!window.marked)return f("Marked library loading...");try{i.innerHTML=`<div class="cb-md-preview" tabindex="0">${marked.parse(t)}</div>`}catch(x){f(x.message)}}else if("csv"===a){let y=t.trim().split("\n"),$='<div class="cb-table-wrapper" tabindex="0"><table class="cb-excel-table">';y.forEach((e,t)=>{let r=0===t?"th":"td";$+=`<tr>${e.split(",").map(e=>`<${r}>${p(e.trim())}</${r}>`).join("")}</tr>`}),i.innerHTML=$+"</table></div>"}else if(b||m){(g=document.createElement("iframe")).className="cb-preview-frame",i.appendChild(g);let w=s.querySelector(".cb-console-logs");window.addEventListener("message",e=>{if(e.data?.source==="cb-iframe"&&e.data.uid===c){let t=document.createElement("div");t.className=`cb-log-item ${e.data.type}`,t.textContent="> "+e.data.args.join(" "),w.appendChild(t),w.scrollTop=w.scrollHeight}});let k=`
         <script>
         (function() {
           const _safe = (v) => {
              try { 
                if (v instanceof Error) return v.toString();
                if (typeof v === 'function') return v.toString();
                if (typeof v === 'object' && v !== null) return JSON.stringify(v, null, 2);
                return String(v); 
              } catch(e) { return '[Circular/Error]'; }
           };
           const _p = (t, a) => window.parent.postMessage({source:'cb-iframe', uid:'${c}', type:t, args:a.map(_safe)}, '*');
           
           console.log=(...a)=>_p('log',a); 
           console.error=(...a)=>_p('error',a); 
           console.warn=(...a)=>_p('warn',a);
           console.info=(...a)=>_p('log',a);
           
           window.onerror=(m,s,l,c)=>_p('error', [m+' ('+l+':'+c+')']);
         })();
         </script>
       `,_=t;"ts"===a&&(_=t.replace(/interface\s+\w+\s*(?:<[^>]+>)?\s*\{[\s\S]*?\}/g,"").replace(/:\s*(?:number|string|boolean|void|any|[A-Z]\w*(?:<[^>]+>)?)(?:\[\])?/g,"").replace(/<[A-Z][a-zA-Z0-9_]*>/g,"")),g.srcdoc=m?k+_:`<!DOCTYPE html><html><head>${k}</head><body><script>try{${_}}catch(e){console.error(e)}</script></body></html>`}let E=n.querySelector(`#btn-newtab-${c}`),L=n.querySelector(`#btn-full-${c}`);E&&(E.onclick=()=>{let e;if(g){let t=new Blob([g.srcdoc],{type:"text/html"});e=URL.createObjectURL(t)}else{let a=i.innerHTML,l=`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Preview</title><style>${r} body{background:#fff;padding:20px;}</style></head><body>${a}</body></html>`,o=new Blob([l],{type:"text/html"});e=URL.createObjectURL(o)}window.open(e,"_blank")}),L&&(L.onclick=()=>{document.fullscreenElement?(document.exitFullscreen(),L.innerHTML='<i class="material-icons">fullscreen</i> Full Screen'):(l.requestFullscreen().catch(e=>console.error(e)),L.innerHTML='<i class="material-icons">fullscreen_exit</i> Exit')})}(v,h,L):L.innerHTML=""})}document.addEventListener("DOMContentLoaded",()=>{let e=Array.from(document.querySelectorAll("pre"));if(0===e.length)return;let t=0;function r(){let a=performance.now();for(;t<e.length&&performance.now()-a<12;)f(e[t]),t++;t<e.length&&requestAnimationFrame(r)}requestAnimationFrame(r)})}();
