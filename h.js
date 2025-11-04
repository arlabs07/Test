
     // --- CORE LOGIC (DO NOT EDIT) ---
        let currentPageIdIframe = "home",
            sidebarView = "pages";
        const actualPageContentIframe = document.getElementById("actualPageContentIframe"),
            menuButtonIframe = document.getElementById("menuButtonIframe"),
            mobileSidebarOverlayIframe = document.getElementById("mobileSidebarOverlayIframe"),
            prevPageBtnIframe = document.getElementById("prevPageBtnIframe"),
            nextPageBtnIframe = document.getElementById("nextPageBtnIframe"),
            scrollToTopBtnIframe = document.getElementById("scrollToTopBtnIframe"),
            mainContentIframe = document.getElementById("mainContentIframe"),
            previewSidebarOutlineList = document.getElementById("previewSidebarOutlineListIframe"),
            mobileSidebarOutlineList = document.getElementById("mobileSidebarOutlineListIframe"),
            previewSidebarPageListIframe = document.getElementById("previewSidebarPageListIframe"),
            mobileSidebarPageListIframe = document.getElementById("mobileSidebarPageListIframe"),
            headerIframe = document.getElementById("previewHeaderIframe"),
            searchButtonIframe = document.getElementById("searchButtonIframe"),
            closeSearchButtonIframe = document.getElementById("closeSearchButtonIframe"),
            pageSearchInput = document.getElementById("pageSearchInput"),
            progressBarIframe = document.getElementById("progressBarIframe"),
            previewOverlay = document.getElementById("arviaPreviewOverlay"),
            previewCloseBtn = document.getElementById("arviaPreviewCloseBtn"),
            previewContent = document.getElementById("arviaPreviewContent"),
            previewCaption = document.getElementById("arviaPreviewCaption"),
            previewLoader = previewOverlay.querySelector(".arvia-preview-loader"),
            previewGoToBtn = document.getElementById("arviaPreviewGoToBtn"),
            breadcrumbTrailIframe = document.getElementById("breadcrumbTrailIframe"),
            pageStatsBtnIframe = document.getElementById("pageStatsBtnIframe"),
            pageStatsOverlayIframe = document.getElementById("pageStatsOverlayIframe"),
            statsContentIframe = document.getElementById("statsContentIframe"),
            readAloudBtnIframe = document.getElementById("readAloudBtnIframe"),
            shareBtnIframe = document.getElementById("shareBtnIframe"),
            metaAuthor = document.querySelector('meta[name="author"]');

        function animatePageContent() {
            if (!actualPageContentIframe || "undefined" == typeof anime) return;
            const e = actualPageContentIframe.querySelector(".page-content-container");
            if (!e) return;
            const t = [...e.children];
            t.forEach((e => {
                e.style.opacity = "0", e.style.transform = "translateY(20px)"
            })), anime({
                targets: t,
                opacity: 1,
                translateY: 0,
                delay: anime.stagger(50),
                easing: "easeOutQuad"
            })
        }

        function slugify(e) {
            return e.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }

        function prepareContentWithHeadingIds(e) {
            const t = document.createElement("div");
            t.innerHTML = e;
            const a = t.querySelectorAll("h1, h2, h3, h4, h5, h6"),
                r = new Set;
            return a.forEach((e => {
                if (!e.textContent.trim()) return;
                let t = slugify(e.textContent),
                    a = t,
                    i = 1;
                for (; r.has(t);) t = `${a}-${i}`, i++;
                r.add(t), e.id = t
            })), t.innerHTML
        }

        function generateDocumentOutline(e) {
            const t = document.createElement("div");
            t.innerHTML = e;
            const a = t.querySelectorAll("h1, h2, h3, h4, h5, h6");
            if (0 === a.length) return '<div class="sidebar-page-item-iframe" style="opacity: 0.7; pointer-events: none;">No outline available.</div>';
            let r = "";
            return a.forEach((e => {
                if (!e.id || !e.textContent.trim()) return;
                const t = parseInt(e.tagName.substring(1), 10);
                r += `<a href="#${e.id}" class="document-outline-item-iframe level-${t}">${e.textContent}</a>`
            })), r
        }

        function setupBreadcrumbActionListeners() {
            if (shareBtnIframe && shareBtnIframe.addEventListener("click", (async () => {
                const e = pagesDataIframe.find((e => e.id === currentPageIdIframe)),
                    t = {
                        title: document.title,
                        text: `Check out this page: ${e.name}`,
                        url: window.location.href
                    },
                    a = shareBtnIframe.querySelector("i");
                if (navigator.share) try {
                    await navigator.share(t), a && (a.className = "fas fa-check", setTimeout((() => {
                        a.className = "fas fa-share-alt"
                    }), 2e3))
                } catch (e) {
                    console.log("Share was cancelled or failed", e), a && (a.className = "fas fa-times", setTimeout((() => {
                        a.className = "fas fa-share-alt"
                    }), 2e3))
                } else navigator.clipboard.writeText(window.location.href).then((() => {
                    a && (a.className = "fas fa-check", setTimeout((() => {
                        a.className = "fas fa-share-alt"
                    }), 2e3))
                })).catch((e => {
                    console.error("Failed to copy URL as fallback:", e), a && (a.className = "fas fa-times", setTimeout((() => {
                        a.className = "fas fa-share-alt"
                    }), 2e3))
                }))
            })), readAloudBtnIframe && "speechSynthesis" in window) {
                let e = !1,
                    t = [];
                const a = () => {
                    const r = readAloudBtnIframe.querySelector("i");
                    speechSynthesis.cancel(), e = !1, t = [], r && (r.className = "fas fa-volume-high")
                };
                const r = () => {
                    if (!e || 0 === t.length) return void a();
                    const i = t.shift();
                    i.onend = () => {
                        t.length > 0 ? r() : a()
                    }, i.onerror = e => {
                        console.error("SpeechSynthesis Error:", e), a()
                    }, speechSynthesis.speak(i)
                };
                readAloudBtnIframe.addEventListener("click", (() => {
                    if (e) return void a();
                    const i = actualPageContentIframe.innerText;
                    if (!i.trim()) return;
                    const n = 2500,
                        s = [];
                    let o = i;
                    for (; o.length > 0;) {
                        if (o.length <= n) {
                            s.push(o);
                            break
                        }
                        let e = o.substring(0, n),
                            t = -1;
                        if (t = Math.max(e.lastIndexOf("."), e.lastIndexOf("?"), e.lastIndexOf("!")), -1 === t && (t = e.lastIndexOf(" ")), t <= 0) t = n, s.push(o.substring(0, t)), o = o.substring(t).trim();
                        else {
                            s.push(o.substring(0, t + 1)), o = o.substring(t + 1).trim()
                        }
                    }
                    t = s.filter((e => e.trim().length > 0)).map((e => new SpeechSynthesisUtterance(e))), 0 !== t.length && (e = !0, readAloudBtnIframe.querySelector("i").className = "fas fa-stop-circle", r())
                })), window.addEventListener("hashchange", a)
            }
        }

        function collapseAllSidebars() {
            document.querySelectorAll(".sidebar-subpage-list.show").forEach((e => {
                e.classList.remove("show"), e.style.maxHeight = null;
                const t = e.previousElementSibling.querySelector(".sidebar-toggle-children-btn");
                if (t) {
                    t.classList.remove("open"), t.setAttribute("aria-expanded", "false");
                    const e = t.querySelector("i.fas");
                    e && (e.className = "fas fa-chevron-right")
                }
            }))
        }

        function expandActivePageParents(e) {
            document.querySelectorAll('.sidebar-page-item-iframe[data-id="' + e + '"]').forEach((e => {
                let t = e.closest(".sidebar-page-item-wrapper");
                for (; t;) {
                    const e = t.parentElement;
                    if (e && e.classList.contains("sidebar-subpage-list") && !e.classList.contains("show")) {
                        e.classList.add("show"), e.style.maxHeight = e.scrollHeight + "px";
                        const t = e.previousElementSibling.querySelector(".sidebar-toggle-children-btn");
                        if (t) {
                            t.classList.add("open"), t.setAttribute("aria-expanded", "true");
                            const e = t.querySelector("i.fas");
                            e && (e.className = "fas fa-chevron-down")
                        }
                    }
                    t = e ? e.closest(".sidebar-page-item-wrapper") : null
                }
            }))
        }

        function updateBreadcrumbs(e) {
            if (!breadcrumbTrailIframe) return;
            const t = new Map(pagesDataIframe.map((e => [e.id, e]))),
                a = [];
            let r = t.get(e);
            for (; r;) a.unshift(r), r = t.get(r.parentId);
            let i = "";
            if (document.referrer) try {
                const e = new URL(document.referrer),
                    t = new URL(window.location.origin);
                e.hostname !== t.hostname && (i += `<span class="breadcrumb-item-iframe" title="Referred from ${e.hostname}">${e.hostname}</span><span class="breadcrumb-separator-iframe">&gt;</span>`)
            } catch (e) {}
            a.forEach(((e, t) => {
                t < a.length - 1 ? i += `<a href="#${e.id}" class="breadcrumb-item-iframe">${e.name}</a><span class="breadcrumb-separator-iframe">&gt;</span>` : i += `<span class="breadcrumb-item-iframe current" aria-current="page">${e.name}</span>`
            })), breadcrumbTrailIframe.innerHTML = i
        }

        function displayPageContentIframe(e) {
            const t = pagesDataIframe.find((t => t.id === e));
            if (!t || !actualPageContentIframe) return;
            collapseAllSidebars();
            const a = prepareContentWithHeadingIds(t.content),
                r = document.createElement("div");
            r.className = "page-content-container", r.innerHTML = a, actualPageContentIframe.innerHTML = "", actualPageContentIframe.appendChild(r), currentPageIdIframe = e, document.querySelectorAll(".sidebar-page-item-iframe").forEach((e => {
                e.classList.remove("active")
            })), document.querySelectorAll(`.sidebar-page-item-iframe[data-id="${e}"]`).forEach((e => e.classList.add("active"))), expandActivePageParents(e), updateBreadcrumbs(e);
            const i = generateDocumentOutline(a);
            previewSidebarOutlineList && (previewSidebarOutlineList.innerHTML = i), mobileSidebarOutlineList && (mobileSidebarOutlineList.innerHTML = i), updatePaginationButtonsIframe(), initializeIframeScripts()
        }

        function updatePaginationButtonsIframe() {
            const e = pagesDataIframe.findIndex((e => e.id === currentPageIdIframe));
            prevPageBtnIframe && (prevPageBtnIframe.disabled = e <= 0), nextPageBtnIframe && (nextPageBtnIframe.disabled = e >= pagesDataIframe.length - 1)
        }

        function initializeIframeScripts() {
            "undefined" != typeof MathJax && MathJax.typesetPromise && MathJax.typesetPromise([actualPageContentIframe]).catch((e => console.error("MathJax typesetting error:", e))), actualPageContentIframe.querySelectorAll("pre code").forEach((e => {
                "undefined" != typeof hljs && hljs.highlightElement(e);
                const t = document.createElement("button");
                t.className = "copy-code-btn-iframe", t.textContent = "Copy", t.setAttribute("aria-label", "Copy code to clipboard"), t.onclick = () => {
                    navigator.clipboard.writeText(e.textContent).then((() => {
                        t.textContent = "Copied!", setTimeout((() => {
                            t.textContent = "Copy"
                        }), 2e3)
                    })).catch((e => console.error("Failed to copy code in iframe:", e)))
                }, e.parentNode && !e.parentNode.querySelector(".copy-code-btn-iframe") && (e.parentNode.style.position = "relative", e.parentNode.appendChild(t))
            })), animatePageContent()
        }

        function getContentType(e) {
            if (!e) return null;
            const t = e.toLowerCase();
            if (/\.(jpg|jpeg|png|gif|webp|svg|bmp)$/i.test(t)) return "image";
            if (/\.(mp4|webm|ogv)$/i.test(t)) return "video";
            if (/\.(mp3|wav|ogg|m4a)$/i.test(t)) return "audio";
            if (/\.pdf$/i.test(t)) return "pdf";
            if (/youtube\.com|youtu\.be/i.test(t)) return "youtube";
            if (/vimeo\.com/i.test(t)) return "vimeo";
            if (/google\.[a-z\.]+\/maps/i.test(t)) return "maps";
            try {
                const t = new URL(e);
                if ("http:" === t.protocol || "https:" === t.protocol) return "iframe"
            } catch (e) {}
            return null
        }

        function openPreview(e) {
            let t, a, r;
            if (previewGoToBtn.style.display = "none", previewGoToBtn.removeAttribute("data-url"), "IMG" === e.tagName) t = e.src, a = e.alt || "Image Preview", r = "image";
            else {
                if ("A" !== e.tagName || !e.href) return; {
                    t = e.href, a = e.title || e.textContent.trim() || "Link Preview", r = getContentType(t);
                    const i = window.location.href.split("#");
                    if (t.startsWith(i + "#")) return
                }
            }
            if (!t || !r) return;
            let i;
            switch (["pdf", "youtube", "vimeo", "maps", "iframe"].includes(r) && (previewGoToBtn.style.display = "block", previewGoToBtn.setAttribute("data-url", t)), previewLoader.style.display = "block", previewContent.innerHTML = "", previewCaption.textContent = "", r) {
                case "image":
                    i = document.createElement("img"), i.src = t, i.alt = a;
                    break;
                case "video":
                    i = document.createElement("video"), i.src = t, i.controls = !0, i.autoplay = !0;
                    break;
                case "audio":
                    i = document.createElement("audio"), i.src = t, i.controls = !0, i.autoplay = !0;
                    break;
                case "youtube":
                    const e = t.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
                    e && (i = document.createElement("iframe"), i.src = `https://www.youtube.com/embed/${e[1]}?autoplay=1&rel=0`, i.frameBorder = "0", i.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", i.allowFullscreen = !0);
                    break;
                case "vimeo":
                    const r = t.match(/vimeo\.com\/(?:video\/)?([0-9]+)/);
                    r && (i = document.createElement("iframe"), i.src = `https://player.vimeo.com/video/${r[1]}?autoplay=1`, i.frameBorder = "0", i.allow = "autoplay; fullscreen", i.allowFullscreen = !0);
                    break;
                case "pdf":
                case "maps":
                case "iframe":
                    i = document.createElement("iframe"), i.src = t, i.frameBorder = "0", i.allowFullscreen = !0;
                    break;
                default:
                    return void(previewLoader.style.display = "none")
            }
            if (i) {
                const e = () => {
                    previewLoader.style.display = "none", previewContent.style.opacity = 1
                };
                i.onload = i.onloadeddata = i.oncanplay = e, i.onerror = () => {
                    previewLoader.style.display = "none", previewContent.innerHTML = '<p style="color:#f87171;">Could not load content.</p>', previewContent.style.opacity = 1
                }, previewContent.style.opacity = 0, previewContent.appendChild(i), previewCaption.textContent = a, ["iframe", "pdf", "maps"].includes(r) && setTimeout(e, 1e3)
            }
            previewOverlay.classList.add("show"), previewOverlay.setAttribute("aria-hidden", "false"), document.body.style.overflow = "hidden"
        }

        function closePreview() {
            previewOverlay.classList.remove("show"), previewOverlay.setAttribute("aria-hidden", "true"), document.body.style.overflow = "", previewContent.innerHTML = "", previewCaption.textContent = "", previewGoToBtn.style.display = "none", previewGoToBtn.removeAttribute("data-url")
        }

        function handleSidebarNavClick(e) {
            const t = e.target.closest(".sidebar-page-item-iframe");
            t && t.dataset.id && (window.location.hash = t.dataset.id)
        }

        function setupSidebarToggle() {
            const e = document.querySelectorAll(".sidebar-toggle-btn-iframe"),
                t = document.querySelectorAll("#previewSidebarPageListIframe, #mobileSidebarPageListIframe"),
                a = document.querySelectorAll("#previewSidebarOutlineListIframe, #mobileSidebarOutlineListIframe");
            e.forEach((r => {
                r.addEventListener("click", (() => {
                    sidebarView = "pages" === sidebarView ? "outline" : "pages";
                    const r = "pages" === sidebarView;
                    t.forEach((e => e.classList.toggle("active-view", r))), a.forEach((e => e.classList.toggle("active-view", !r))), e.forEach((e => {
                        e.querySelector(".btn-text").textContent = r ? "Document Outline" : "Page Navigation", e.querySelector(".fas").className = r ? "fas fa-list-ul" : "fas fa-file-lines", e.setAttribute("aria-label", r ? "Toggle Document Outline" : "Toggle Page Navigation")
                    }))
                }))
            }))
        }

        function handleOutlineClick(e) {
            const t = e.target.closest(".document-outline-item-iframe");
            if (!t) return;
            e.preventDefault();
            const a = t.getAttribute("href"),
                r = mainContentIframe.querySelector(a);
            r && (mainContentIframe.scrollTo({
                top: r.offsetTop - 20,
                behavior: "smooth"
            }), mobileSidebarOverlayIframe.classList.contains("show") && (mobileSidebarOverlayIframe.classList.remove("show"), menuButtonIframe.setAttribute("aria-expanded", "false")))
        }

        function removeHighlights() {
            actualPageContentIframe.querySelectorAll("mark.arvia-highlight").forEach((e => {
                const t = e.parentNode;
                t.replaceChild(document.createTextNode(e.textContent), e), t.normalize()
            }))
        }

        function highlightText(e) {
            if (removeHighlights(), !e.trim()) return;
            const t = new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi"),
                a = document.createTreeWalker(actualPageContentIframe, NodeFilter.SHOW_TEXT, null, !1);
            let r;
            const i = [];
            for (; r = a.nextNode();) {
                const e = r.parentElement.tagName.toUpperCase();
                "SCRIPT" !== e && "STYLE" !== e && t.test(r.nodeValue) && i.push(r)
            }
            i.forEach((e => {
                const a = e.parentNode;
                if (a.closest(".header-actions-iframe, .main-content-header-iframe")) return;
                const r = e.nodeValue.split(t),
                    i = e.nodeValue.match(t),
                    n = document.createDocumentFragment();
                for (let e = 0; e < r.length; e++)
                    if (n.appendChild(document.createTextNode(r[e])), e < i.length) {
                        const t = document.createElement("mark");
                        t.className = "arvia-highlight", t.textContent = i[e], n.appendChild(t)
                    }
                a.replaceChild(n, e)
            }))
        }

        function closeSearch() {
            headerIframe.classList.remove("search-active"), pageSearchInput.value = "", removeHighlights()
        }

        function handleHashChange() {
            const e = window.location.hash.substring(1),
                t = pagesDataIframe.find((t => t.id === e));
            if (t && t.id !== currentPageIdIframe) displayPageContentIframe(t.id);
            else if (!t) {
                const e = pagesDataIframe.find((e => e.isDefault)) || pagesDataIframe;
                e && displayPageContentIframe(e.id)
            }
        }

        function buildSidebar(e) {
            const t = document.getElementById(e);
            if (!t) return;
            const a = new Map(pagesDataIframe.map((e => [e.id, { ...e,
                children: []
            }]))),
                r = [];
            a.forEach((e => {
                e.parentId && a.has(e.parentId) ? a.get(e.parentId).children.push(e) : r.push(e)
            })), a.forEach((e => e.children.sort(((e, t) => e.order - t.order)))), r.sort(((e, t) => e.order - t.order)), t.innerHTML = function e(t) {
                let a = "";
                for (const r of t) {
                    const t = r.children.length > 0;
                    a += `<div class="sidebar-page-item-wrapper"><div class="sidebar-page-item-container"><div class="sidebar-page-item-iframe" data-id="${r.id}" role="link" tabindex="0">${r.name}</div>${t?`<button class="sidebar-toggle-children-btn" aria-label="Toggle subpages for ${r.name}" aria-expanded="false"><i class="fas fa-chevron-right"></i></button>`:""}</div>${t?`<div class="sidebar-subpage-list">${e(r.children)}</div>`:""}</div>`
                }
                return a
            }(r)
        }

        function setupSidebarHierarchyToggles() {
            document.querySelectorAll("#previewSidebarPageListIframe, #mobileSidebarPageListIframe").forEach((e => {
                e.addEventListener("click", (e => {
                    const t = e.target.closest(".sidebar-toggle-children-btn");
                    if (t) {
                        e.stopPropagation();
                        const a = t.parentElement.nextElementSibling,
                            r = t.querySelector("i.fas");
                        if (a && a.classList.contains("sidebar-subpage-list")) {
                            const e = !t.classList.contains("open");
                            t.classList.toggle("open", e), t.setAttribute("aria-expanded", e), r.className = e ? "fas fa-chevron-down" : "fas fa-chevron-right", a.classList.contains("show") ? (a.style.maxHeight = null, a.classList.remove("show")) : (a.classList.add("show"), a.style.maxHeight = a.scrollHeight + "px")
                        }
                    }
                }))
            }))
        }
        
        function buildRelatedSitesDropdown(container) {
            if (!container || typeof relatedSites === 'undefined' || relatedSites.length === 0) return;
            
            relatedSites.sort((a, b) => a.order - b.order);

            const currentUrl = window.location.href.replace(/\/$/, ""); 
            const listItems = relatedSites.map(site => {
                const siteUrl = site.url.replace(/\/$/, "");
                const isActive = currentUrl === siteUrl;
                return `<li><a href="${site.url}" class="related-site-item-iframe ${isActive ? 'active' : ''}" ${isActive ? 'aria-current="page"' : ''}>${site.title}</a></li>`;
            }).join('');

            const dropdownHTML = `
                <div class="related-sites-section-iframe">
                    <button class="related-sites-toggle-iframe" aria-expanded="false" aria-controls="${container.id}-list">
                        <span>Related Sites</span>
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <ul class="related-sites-list-iframe" id="${container.id}-list">
                        ${listItems}
                    </ul>
                </div>
            `;
            container.innerHTML = dropdownHTML;
        }

        function setupRelatedSitesToggle() {
            document.querySelectorAll('.related-sites-toggle-iframe').forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const list = toggle.nextElementSibling;
                    const icon = toggle.querySelector('.fas');
                    const isOpen = toggle.classList.toggle('open');
                    
                    toggle.setAttribute('aria-expanded', isOpen);
                    icon.className = isOpen ? "fas fa-chevron-down" : "fas fa-chevron-right";

                    if (isOpen) {
                        list.classList.add('show');
                        list.style.maxHeight = list.scrollHeight + 'px';
                    } else {
                        list.style.maxHeight = null;
                        list.classList.remove('show');
                    }
                });
            });
        }

        function hidePageStats() {
            pageStatsOverlayIframe.classList.contains("show") && (pageStatsOverlayIframe.classList.remove("show"), pageStatsOverlayIframe.setAttribute("aria-hidden", "true"))
        }

        function togglePageStats() {
            if (pageStatsOverlayIframe.classList.contains("show")) return void hidePageStats();
            const e = pagesDataIframe.find((e => e.id === currentPageIdIframe));
            if (!e) return;
            const t = actualPageContentIframe.innerText || "",
                a = t.trim().split(/\s+/).filter(Boolean).length,
                r = Math.ceil(a / 200),
                i = metaAuthor ? metaAuthor.content : "Not specified",
                n = e.lastUpdated ? new Date(e.lastUpdated).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }) : "Not specified";
            statsContentIframe.innerHTML = `
            <div class="stat-item">
                <span class="stat-icon" title="Reading Time"><i class="fas fa-book-open"></i></span>
                <span class="label">Reading Time</span>
                <span class="value">${r} min read</span>
            </div>
            <div class="stat-item">
                <span class="stat-icon" title="Word Count"><i class="fas fa-file-word"></i></span>
                <span class="label">Word Count</span>
                <span class="value">${a.toLocaleString()}</span>
            </div>
            <div class="stat-item">
                <span class="stat-icon" title="Character Count"><i class="fas fa-keyboard"></i></span>
                <span class="label">Character Count</span>
                <span class="value">${t.length.toLocaleString()}</span>
            </div>
            <div class="stat-item">
                <span class="stat-icon" title="Author"><i class="fas fa-user"></i></span>
                <span class="label">Author</span>
                <span class="value">${i}</span>
            </div>
            <div class="stat-item">
                <span class="stat-icon" title="Last Updated"><i class="fas fa-calendar-alt"></i></span>
                <span class="label">Last Updated</span>
                <span class="value">${n}</span>
            </div>
        `, pageStatsOverlayIframe.classList.add("show"), pageStatsOverlayIframe.setAttribute("aria-hidden", "false")
        }
        mainContentIframe.addEventListener("click", (e => {
            const t = e.target.closest("a[href]"),
                a = e.target.closest("img");
            if (a) e.preventDefault(), openPreview(a);
            else if (t) {
                getContentType(t.href) && !t.href.includes("#" + currentPageIdIframe) && (e.preventDefault(), openPreview(t))
            }
        })), previewCloseBtn.addEventListener("click", closePreview), previewOverlay.addEventListener("click", (e => {
            e.target === previewOverlay && closePreview()
        })), previewGoToBtn.addEventListener("click", (e => {
            e.stopPropagation();
            const t = previewGoToBtn.getAttribute("data-url");
            t && window.open(t, "_blank", "noopener,noreferrer")
        })), previewSidebarPageListIframe && previewSidebarPageListIframe.addEventListener("click", handleSidebarNavClick), mobileSidebarPageListIframe && mobileSidebarPageListIframe.addEventListener("click", (e => {
            handleSidebarNavClick(e), e.target.closest(".sidebar-page-item-iframe") && (mobileSidebarOverlayIframe.classList.remove("show"), menuButtonIframe.setAttribute("aria-expanded", "false"))
        })), menuButtonIframe && menuButtonIframe.addEventListener("click", (() => {
            mobileSidebarOverlayIframe.classList.add("show"), menuButtonIframe.setAttribute("aria-expanded", "true")
        })), mobileSidebarOverlayIframe && mobileSidebarOverlayIframe.addEventListener("click", (e => {
            e.target === mobileSidebarOverlayIframe && (mobileSidebarOverlayIframe.classList.remove("show"), menuButtonIframe.setAttribute("aria-expanded", "false"))
        })), prevPageBtnIframe && prevPageBtnIframe.addEventListener("click", (() => {
            const e = pagesDataIframe.findIndex((e => e.id === currentPageIdIframe));
            e > 0 && (window.location.hash = pagesDataIframe[e - 1].id)
        })), nextPageBtnIframe && nextPageBtnIframe.addEventListener("click", (() => {
            const e = pagesDataIframe.findIndex((e => e.id === currentPageIdIframe));
            e < pagesDataIframe.length - 1 && (window.location.hash = pagesDataIframe[e + 1].id)
        })), scrollToTopBtnIframe && mainContentIframe && (mainContentIframe.addEventListener("scroll", (() => {
            if (scrollToTopBtnIframe.classList.toggle("show", mainContentIframe.scrollTop > .5 * mainContentIframe.clientHeight), progressBarIframe) {
                const e = mainContentIframe,
                    t = e.scrollTop,
                    a = e.scrollHeight,
                    r = e.clientHeight,
                    i = a > r ? t / (a - r) * 100 : 0;
                progressBarIframe.style.width = i + "%"
            }
        })), scrollToTopBtnIframe.addEventListener("click", (() => {
            mainContentIframe.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }))), previewSidebarOutlineList && previewSidebarOutlineList.addEventListener("click", handleOutlineClick), mobileSidebarOutlineList && mobileSidebarOutlineList.addEventListener("click", handleOutlineClick), searchButtonIframe.addEventListener("click", (() => {
            headerIframe.classList.add("search-active"), pageSearchInput.focus()
        })), closeSearchButtonIframe.addEventListener("click", closeSearch), mainContentIframe.addEventListener("click", (e => {
            headerIframe.classList.contains("search-active") && !e.target.closest(".arvia-preview-overlay") && closeSearch()
        })), pageSearchInput.addEventListener("input", (e => highlightText(e.target.value))), pageStatsBtnIframe && pageStatsBtnIframe.addEventListener("click", togglePageStats), pageStatsOverlayIframe && pageStatsOverlayIframe.addEventListener("click", (e => {
            e.target === pageStatsOverlayIframe && hidePageStats()
        })), document.addEventListener("keydown", (e => {
            "Escape" === e.key && (previewOverlay.classList.contains("show") && closePreview(), pageStatsOverlayIframe.classList.contains("show") && hidePageStats())
        })), window.addEventListener("beforeunload", (() => {
            "speechSynthesis" in window && speechSynthesis.speaking && speechSynthesis.cancel()
        })), window.addEventListener("hashchange", handleHashChange), document.addEventListener("DOMContentLoaded", (() => {
            buildSidebar("previewSidebarPageListIframe");
            buildSidebar("mobileSidebarPageListIframe");
            
            const relatedSitesContainerIframe = document.getElementById('relatedSitesContainerIframe');
            const mobileRelatedSitesContainerIframe = document.getElementById('mobileRelatedSitesContainerIframe');
            buildRelatedSitesDropdown(relatedSitesContainerIframe);
            buildRelatedSitesDropdown(mobileRelatedSitesContainerIframe);

            setupRelatedSitesToggle();
            setupSidebarHierarchyToggles();
            setupSidebarToggle();
            setupBreadcrumbActionListeners();
            const e = window.location.hash.substring(1),
                t = pagesDataIframe.find((e => e.isDefault))?.id || pagesDataIframe?.id,
                a = pagesDataIframe.some((t => t.id === e)) ? e : t;
            a && (currentPageIdIframe = a, window.location.hash = "#" + a, displayPageContentIframe(a))
        }))
    