
    /* --- config.js --- */
    /* --- config.js --- */
    // --- JAVASCRIPT CONFIGURATION (EDIT THIS SECTION) ---
    
    const relatedSites = [
    {
      order: 1,
      title: "Example Corp",
      url: "#"
    },
    {
      order: 2,
      title: "Our Portfolio",
      url: "#"
    },
    {
      order: 3,
      title: "Client Portal",
      url: "#"
    }];
    
    const pagesDataIframe = [
    {
      id: "homepage",
      name: "Homepage",
      order: "0",
      isDefault: !0,
      content: "<h1>Homepage</h1><p>Loading posts...</p>"
    },
    {
      id: "about-us",
      name: "About Us",
      order: "1",
      lastUpdated: "2025-11-15",
      author: "John Doe",
      content: `<h1>About Our Company</h1>
              <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus.</p>
              <img src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop' alt='A group of professionals working together.'>
              <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh.</p>`
    },
    {
      id: "blog",
      name: "Blog",
      order: "2",
      lastUpdated: "2025-11-01",
      content: "<h1>Our Blog</h1><p>Welcome to our blog. Here we share updates and articles on technology, lifestyle, and more. Please select a post from the sidebar navigation to start reading.</p>"
    },
    {
      id: "tech-trends-2025",
      name: "Tech Trends 2025",
      order: "2.1",
      parentId: "blog",
      category: "Technology",
      lastUpdated: "2025-11-30",
      author: "Jane Smith",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726a?q=80&w=2070&auto=format&fit=crop",
      content: "<h1>Exploring Tech Trends in 2025</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p><h2>The Rise of AI</h2><p>Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>"
    },
    {
      id: "healthy-living",
      name: "A Guide to Healthy Living",
      order: "2.2",
      parentId: "blog",
      category: "Lifestyle",
      lastUpdated: "2025-11-10",
      author: "Emily White",
      imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop",
      content: "<h1>A Simple Guide to Healthy Living</h1><p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.</p>"
    },
    {
      id: "web-dev-basics",
      name: "Web Development Basics",
      order: "2.3",
      parentId: "blog",
      category: "Tutorials",
      lastUpdated: "2025-10-28",
      author: "Alex Johnson",
      imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
      password: "123",
      content: "<h1>Web Development Basics: HTML & CSS</h1><p>Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat.</p>"
    },
    {
      id: "services",
      name: "Our Services",
      order: "3",
      lastUpdated: "2025-09-15",
      author: "John Doe",
      content: "<h1>What We Offer</h1><p>We provide a wide range of digital services to help your business grow. Explore our offerings below.</p>"
    },
    {
      id: "web-design",
      name: "Web Design",
      order: "3.1",
      parentId: "services",
      lastUpdated: "2025-09-15",
      author: "John Doe",
      content: "<h1>Creative Web Design</h1><p>Our design team creates beautiful, functional websites that captivate your audience and deliver a seamless user experience.</p>"
    },
    {
      id: "_websiteInfoPage",
      name: "Website Info",
      order: "3.1.1",
      parentId: "web-design",
      isDefault: !1,
      lastUpdated: "2025-11-01",
      content: '<h1>Website Information</h1><h2>General Details</h2><p><strong>Website Name:</strong> Test</p><p><strong>Logo URL:</strong> <a href="https://arlabs07.github.io/alphalabs.github.io/alphalabs.png" target="_blank">https://arlabs07.github.io/alphalabs.github.io/alphalabs.png</a></p><p><strong>Favicon URL:</strong> <a href="https://arlabs07.github.io/alphalabs.github.io/alphalabs.png" target="_blank">https://arlabs07.github.io/alphalabs.github.io/alphalabs.png</a></p><p><strong>Meta Description:</strong> This is a test web</p><p><strong>Hosting URL:</strong> <a href="https://arlabs07.github.io/alphalabs.github.io/test" target="_blank">https://arlabs07.github.io/alphalabs.github.io/test</a></p><h2>Copyright Information</h2><p><strong>Copyright Holder:</strong> Alphalabs</p><p><strong>Copyright Year:</strong> 2025</p>'
    },
    {
      id: "references",
      name: "References",
      order: "99",
      isDefault: !1,
      lastUpdated: "2025-11-18",
      content: "<h1>References</h1><p>Loading reference links...</p>"
    }];
    
    /* --- core.js --- */
    /* --- core.js --- */
    // --- CORE LOGIC ---
    
    // --- GLOBAL STATE ---
    let currentPageIdIframe = "home",
      sidebarView = "pages",
      pageMap,
      pageTree,
      searchResults = [],
      currentSearchIndex = -1;
    
    // Track unlocked pages in the current session
    const unlockedPages = new Set();
    // Global storage for blog posts to be used in filtering
    let globalBlogPosts = [];
    
    // --- HELPERS (Global Scope) ---
    const getSnippet = (content,
      length = 120) => {
      const tempDiv = document
        .createElement("div");
      tempDiv.innerHTML = content;
      const firstParagraph = tempDiv
        .querySelector("p");
      let text = (firstParagraph ?
        firstParagraph.textContent :
        tempDiv.textContent
      ).trim();
      if (text.length > length) {
        text = text.substring(0,
          length).trim() + "...";
      }
      return text;
    };
    
    const getImageUrl = (page) => {
      if (page.imageUrl) return page
        .imageUrl;
      const tempDiv = document
        .createElement("div");
      tempDiv.innerHTML = page
        .content;
      const firstImage = tempDiv
        .querySelector("img");
      if (firstImage)
        return firstImage.src;
      // Provide a generic fallback image
      return `https://source.unsplash.com/random/400x400?sig=${Math.random()}`;
    };
    
    const getCategoryName = (page) => {
      if (page.category) return page
        .category;
      const parent = pageMap.get(page
        .parentId);
      return parent ? parent.name :
        "General";
    };
    
    // Updated Lock Screen Generator (New Design)
    const generateLockScreen = (
      page) => {
      return `
        <div class="locked-page-container">
            <div class="lock-icon-large"><i class="fas fa-lock"></i></div>
            <h2 class="locked-title">Protected Content</h2>
            <p class="locked-subtitle">This content requires a password to access.</p>
            <div class="password-input-group">
                <input type="password" id="pagePasswordInput" class="password-input" placeholder="Enter Password" onkeypress="handlePasswordKeypress(event)">
                <button id="unlockPageBtn" class="unlock-btn" onclick="attemptUnlock('${page.id}')">Unlock Content</button>
            </div>
            <div id="passwordError" class="password-error"></div>
        </div>
    `;
    };
    
    // --- DATA INITIALIZATION ---
    function initializePageData() {
      pagesDataIframe.sort((a, b) =>
        String(a.order).localeCompare(
          String(b.order), void 0, {
            numeric: !0
          })
      );
      pageMap = new Map(pagesDataIframe
        .map((e) => [e.id, {
          ...e,
          children: []
        }]));
      pageTree = [];
      pageMap.forEach((e) => {
        e.parentId && pageMap.has(e
            .parentId) ?
          pageMap.get(e.parentId)
          .children.push(e) :
          pageTree.push(e);
      });
    }
    
    // --- HOMEPAGE POSTS RENDERING ---
    function renderHomepagePosts(
      category = "All") {
      const postsContainer = document
        .getElementById(
          "homepage-posts-container");
      if (!postsContainer) return;
      
      // Filter posts
      const filteredPosts =
        category === "All" ?
        globalBlogPosts :
        globalBlogPosts.filter((p) =>
          getCategoryName(p) ===
          category);
      
      const initialPosts = filteredPosts
        .slice(0, 5);
      const logoUrl =
        document.querySelector(
          'meta[name="arvia-logo-url"]')
        ?.content || "";
      const metaAuthor = document
        .querySelector(
          'meta[name="author"]');
      const authorName = metaAuthor ?
        metaAuthor.content :
        "Alphalabs";
      
      let postsHTML =
        '<div class="newsletter-post-list">';
      
      if (initialPosts.length === 0) {
        postsHTML +=
          `<p style="text-align:center; padding: 2rem; color: var(--text-secondary);">No posts found in this category.</p>`;
      } else {
        initialPosts.forEach((post) => {
          postsHTML += `
                <div class="newsletter-card" onclick="window.location.hash='#${
                  post.id
                }'" role="link" tabindex="0" aria-label="Read article: ${
        post.name
      }">
                    <img src="${getImageUrl(
                      post
                    )}" alt="" class="newsletter-card-thumb" loading="lazy" onerror="this.onerror=null;this.src='${logoUrl}';">
                    <div class="newsletter-card-content">
                        <span class="newsletter-card-category">${getCategoryName(
                          post
                        )}</span>
                        <h3 class="newsletter-card-title"><a href="#${
                          post.id
                        }" tabindex="-1">${post.name}</a></h3>
                        <p class="newsletter-card-summary">${getSnippet(
                          post.content,
                          100
                        )}</p>
                        <div class="newsletter-card-meta">
                            By ${post.author || authorName} &bull; ${new Date(
        post.lastUpdated
      ).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      })}
                        </div>
                    </div>
                </div>
            `;
        });
      }
      postsHTML += "</div>";
      
      if (filteredPosts.length > 5) {
        postsHTML += `
            <div class="load-more-container">
                 <button id="loadMorePostsBtn" class="load-more-btn">
                    Read More <i class="fas fa-chevron-down"></i>
                </button>
            </div>
        `;
      }
      
      postsContainer.innerHTML =
        postsHTML;
      
      // Update active button state
      document.querySelectorAll(
        ".category-btn").forEach((
        btn) => {
        if (btn.dataset.category ===
          category) {
          btn.classList.add(
            "active");
        } else {
          btn.classList.remove(
            "active");
        }
      });
    }
    
    function generateSpecialPages() {
      const metaAuthor = document
        .querySelector(
          'meta[name="author"]');
      const authorName = metaAuthor ?
        metaAuthor.content :
        "Alphalabs";
      const siteTitle =
        document.querySelector(
          'meta[property="og:title"]')
        ?.content ||
        document.title;
      const siteDescription =
        document.querySelector(
          'meta[property="og:description"]'
        )?.content || "";
      const logoUrl =
        document.querySelector(
          'meta[name="arvia-logo-url"]')
        ?.content ||
        "https://arlabs07.github.io/alphalabs.github.io/alphalabs.png";
      
      // --- Homepage Generation ---
      const homepageData = pageMap.get(
        "homepage");
      if (homepageData) {
        const blogPosts =
          pagesDataIframe
          .filter(
            (p) =>
            p.id !== "homepage" &&
            p.id !== "references" &&
            p.id !==
            "_websiteInfoPage" &&
            p.content &&
            p.lastUpdated
          )
          .sort((a, b) => new Date(b
            .lastUpdated) - new Date(a
            .lastUpdated));
        
        globalBlogPosts =
          blogPosts; // Store globally for filtering
        
        if (blogPosts.length > 0) {
          const featuredPost =
            blogPosts[0];
          // Extract unique categories
          const categories = [
            "All",
            ...new Set(blogPosts.map((
                p) =>
              getCategoryName(p)))
          ];
          
          // Generate Category Buttons
          const categoriesHTML = `
        <div class="category-filter-container">
            ${categories
              .map(
                (cat) =>
                  `<button class="category-btn ${
                    cat === "All" ? "active" : ""
                  }" data-category="${cat}">${cat}</button>`
              )
              .join("")}
        </div>
      `;
          
          const heroHTML = `
                <div class="newsletter-hero">
                    <svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice" class="newsletter-hero-svg" aria-hidden="true">
                        <defs>
                            <filter id="glow">
                              <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                              <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                              </feMerge>
                            </filter>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#388bfd" /><stop offset="100%" stop-color="#4ade80" /></linearGradient>
                            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#a855f7" /><stop offset="100%" stop-color="#f97316" /></linearGradient>
                            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#facc15" /><stop offset="100%" stop-color="#ef4444" /></linearGradient>
                        </defs>
                        <g transform="rotate(-30 400 100)" filter="url(#glow)" opacity="0.6">
                            <rect x="150" y="50" rx="15" ry="15" width="200" height="30" fill="url(#grad1)"/>
                            <rect x="250" y="90" rx="15" ry="15" width="300" height="30" fill="url(#grad2)"/>
                            <rect x="350" y="130" rx="15" ry="15" width="250" height="30" fill="url(#grad3)"/>
                            <rect x="400" y="10" rx="15" ry="15" width="150" height="30" fill="url(#grad1)" opacity="0.8"/>
                            <rect x="300" y="-30" rx="15" ry="15" width="280" height="30" fill="url(#grad2)" opacity="0.9"/>
                        </g>
                    </svg>
                </div>
            `;
          
          const featuredHTML = `
                <div class="newsletter-header-card" onclick="window.location.hash='#${
                  featuredPost.id
                }'" role="link" tabindex="0" aria-label="Read featured article: ${
        featuredPost.name
      }">
                    <span class="newsletter-card-category">${getCategoryName(
                      featuredPost
                    )}</span>
                    <h1 class="newsletter-title">${featuredPost.name}</h1>
                    <p class="newsletter-description">${getSnippet(
                      featuredPost.content,
                      150
                    )}</p>
                    <div class="newsletter-meta">
                        By ${
                          featuredPost.author || authorName
                        } &bull; ${new Date(
        featuredPost.lastUpdated
      ).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      })}
                    </div>
                </div>
            `;
          
          // Placeholder for posts that will be populated/hydrated
          const postsContainerHTML =
            `<div id="homepage-posts-container"></div>`;
          
          homepageData.content = `
                <div class="homepage-wrapper">
                    ${heroHTML}
                    ${categoriesHTML}
                    ${featuredHTML}
                    ${postsContainerHTML}
                </div>
            `;
        } else {
          homepageData.content =
            `<div class="homepage-wrapper"><div class="main-article-header"><h1>${siteTitle}</h1><p>${siteDescription}</p><p>No articles yet. Start by creating a new page.</p></div></div>`;
        }
        pageMap.set("homepage",
          homepageData);
      }
      
      // --- References Page Generation ---
      const referencesData = pageMap
        .get("references");
      if (referencesData) {
        const allUrls = new Set();
        pagesDataIframe.forEach((
          page) => {
          if (page.id ===
            "references" || !page
            .content) return;
          const tempDiv = document
            .createElement("div");
          tempDiv.innerHTML = page
            .content;
          tempDiv
            .querySelectorAll(
              'a[href^="http"], a[href^="//"]'
            )
            .forEach((a) => allUrls
              .add(a.href));
          tempDiv
            .querySelectorAll(
              'img[src^="http"], img[src^="//"]'
            )
            .forEach((img) =>
              allUrls.add(img.src));
          tempDiv
            .querySelectorAll(
              'iframe[src^="http"], iframe[src^="//"]'
            )
            .forEach((iframe) =>
              allUrls.add(iframe
                .src));
        });
        if (typeof relatedSites !==
          "undefined") {
          relatedSites.forEach((site) =>
            site.url && allUrls.add(
              site.url));
        }
        
        const sortedUrls = Array.from(
          allUrls).sort();
        
        let referencesContent =
          "<h1>References</h1>";
        if (sortedUrls.length > 0) {
          referencesContent +=
            '<ol class="references-list">';
          sortedUrls.forEach((url) => {
            referencesContent +=
              `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a></li>`;
          });
          referencesContent += "</ol>";
        } else {
          referencesContent +=
            "<p>No external references found on the site.</p>";
        }
        referencesData.content =
          referencesContent;
        pageMap.set("references",
          referencesData);
      }
    }
    
    // --- CONTENT & PAGE LOGIC ---
    function slugify(e) {
      return e
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
    }
    
    function prepareContentWithHeadingIds(
      e) {
      const t = document.createElement(
        "div");
      t.innerHTML = e;
      const a = t.querySelectorAll(
          "h1, h2, h3, h4, h5, h6"),
        r = new Set();
      return (
        a.forEach((e) => {
          if (!e.textContent.trim())
            return;
          let t = slugify(e
              .textContent),
            a = t,
            i = 1;
          for (; r.has(t);)(t =
            `${a}-${i}`), i++;
          r.add(t), (e.id = t);
        }),
        t.innerHTML
      );
    }
    
    function generateDocumentOutline(
      e) {
      const t = document.createElement(
        "div");
      t.innerHTML = e;
      const a = t.querySelectorAll(
        "h1, h2, h3, h4, h5, h6");
      if (0 === a.length)
        return '<div class="sidebar-page-item-iframe" style="opacity: 0.7; pointer-events: none;">No outline available.</div>';
      let r = "";
      return (
        a.forEach((e) => {
          if (!e.id || !e
            .textContent.trim())
            return;
          const t = parseInt(e
            .tagName.substring(1),
            10);
          r +=
            `<a href="#${e.id}" class="document-outline-item-iframe level-${t}">${e.textContent}</a>`;
        }),
        r
      );
    }
    
    function displayPageContentIframe(
      e) {
      const t = pageMap.get(e);
      if (!t || !
        actualPageContentIframe) return;
      
      // --- LOCKING CHECK ---
      if (t.password && !unlockedPages
        .has(t.id)) {
        actualPageContentIframe
          .innerHTML =
          generateLockScreen(t);
        currentPageIdIframe = e;
        syncSidebarToPage(e);
        updateBreadcrumbs(e);
        updatePaginationButtonsIframe();
        // Clear outline since we can't see content
        if (previewSidebarOutlineList)
          previewSidebarOutlineList
          .innerHTML = "";
        if (mobileSidebarOutlineList)
          mobileSidebarOutlineList
          .innerHTML = "";
        return;
      }
      // ---------------------
      
      const a =
        prepareContentWithHeadingIds(t
          .content),
        r = document.createElement(
          "div");
      (r.className =
        "page-content-container"),
      (r.innerHTML = a),
      (actualPageContentIframe
        .innerHTML = ""),
      actualPageContentIframe
        .appendChild(r),
        (currentPageIdIframe = e),
        syncSidebarToPage(e),
        updateBreadcrumbs(e);
      const i = generateDocumentOutline(
        a);
      previewSidebarOutlineList && (
          previewSidebarOutlineList
          .innerHTML = i),
        mobileSidebarOutlineList && (
          mobileSidebarOutlineList
          .innerHTML = i),
        updatePaginationButtonsIframe(),
        initializeIframeScripts();
      
      // Render posts if homepage
      if (e === "homepage") {
        // Slight delay to ensure container is in DOM
        setTimeout(() =>
          renderHomepagePosts("All"),
          0);
      }
    }
    
    function handleHashChange() {
      const hash = window.location.hash
        .substring(1);
      const targetPage = pageMap.get(
        hash);
      if (targetPage && targetPage
        .id !== currentPageIdIframe) {
        displayPageContentIframe(
          targetPage.id);
      } else if (!targetPage && hash ===
        "") {
        const defaultPage =
          pagesDataIframe.find((p) => p
            .isDefault) ||
          (pagesDataIframe.length > 0 ?
            pagesDataIframe : null);
        if (defaultPage) {
          displayPageContentIframe(
            defaultPage.id);
        }
      }
    }
    
    // --- UTILITIES ---
    function getContentType(e) {
      if (!e) return null;
      if (
        /\.(jpg|jpeg|png|gif|webp|svg|bmp)$/i
        .test(e)) return "image";
      if (/\.(mp4|webm|ogv)$/i.test(e))
        return "video";
      if (/\.(mp3|wav|ogg|m4a)$/i.test(
          e)) return "audio";
      if (/\.pdf$/i.test(e))
        return "pdf";
      if (/youtube\.com|youtu\.be/i
        .test(e)) return "youtube";
      if (/vimeo\.com/i.test(e))
        return "vimeo";
      if (/google\.[a-z\.]+\/maps/i
        .test(e)) return "maps";
      try {
        const t = new URL(e);
        if ("http:" === t.protocol ||
          "https:" === t.protocol)
          return "iframe";
      } catch (e) {}
      return null;
    }
    
    // --- SEARCH LOGIC ---
    function removeHighlights() {
      actualPageContentIframe
        .querySelectorAll(
          "mark.arvia-highlight")
        .forEach((e) => {
          const t = e.parentNode;
          t.replaceChild(document
              .createTextNode(e
                .textContent), e), t
            .normalize();
        });
    }
    
    function highlightText(e) {
      removeHighlights();
      searchResults = [];
      currentSearchIndex = -1;
      
      if (!e.trim()) {
        updateSearchUI();
        return;
      }
      
      const t = new RegExp(e.replace(
        /[-\/\\^$*+?.()|[\]{}]/g,
        "\\$&"), "gi");
      const a = document
        .createTreeWalker(
          actualPageContentIframe,
          NodeFilter.SHOW_TEXT,
          null,
          !1
        );
      let r;
      const i = [];
      for (;
        (r = a.nextNode());) {
        const e = r.parentElement
          .tagName.toUpperCase();
        "SCRIPT" !== e && "STYLE" !==
          e && t.test(r.nodeValue) && i
          .push(r);
      }
      
      i.forEach((e) => {
        const a = e.parentNode;
        if (a.closest(
            ".header-actions-iframe, .main-content-header-iframe"
          ))
          return;
        const r = e.nodeValue.split(
            t),
          i = e.nodeValue.match(t),
          n = document
          .createDocumentFragment();
        for (let e = 0; e < r
          .length; e++) {
          n.appendChild(document
            .createTextNode(r[e]));
          if (e < i.length) {
            const t = document
              .createElement(
                "mark");
            (t.className =
              "arvia-highlight"),
            (t.textContent = i[e]),
            n.appendChild(t),
              searchResults.push(t);
          }
        }
        a.replaceChild(n, e);
      });
      
      updateSearchUI();
    }
    
    function updateSearchUI() {
      const count = searchResults
        .length;
      if (count > 0) {
        searchNavControls.style
          .display = "flex";
        currentSearchIndex = 0;
        navigateToSearchResult(0);
      } else {
        searchNavControls.style
          .display = "none";
        searchResultsCount.textContent =
          "";
      }
    }
    
    function navigateToSearchResult(
      index) {
      if (searchResults.length === 0)
        return;
      
      if (currentSearchIndex >= 0 &&
        currentSearchIndex <
        searchResults.length) {
        searchResults[
            currentSearchIndex]
          .classList.remove(
            "current-highlight");
      }
      
      currentSearchIndex = (index +
          searchResults.length) %
        searchResults.length;
      
      const currentResult =
        searchResults[
          currentSearchIndex];
      currentResult.classList.add(
        "current-highlight");
      currentResult.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      
      searchResultsCount.textContent = `${currentSearchIndex + 1} of ${
    searchResults.length
  }`;
    }
    
    /* --- ui.js --- */
    /* --- ui.js --- */
    // --- UI LOGIC & EVENT LISTENERS ---
    
    // --- DOM ELEMENT REFERENCES ---
    const actualPageContentIframe =
      document.getElementById(
        "actualPageContentIframe"
      ),
      menuButtonIframe = document
      .getElementById(
        "menuButtonIframe"),
      mobileSidebarOverlayIframe =
      document.getElementById(
        "mobileSidebarOverlayIframe"
      ),
      prevPageBtnIframe = document
      .getElementById(
        "prevPageBtnIframe"),
      nextPageBtnIframe = document
      .getElementById(
        "nextPageBtnIframe"),
      scrollToTopBtnIframe = document
      .getElementById(
        "scrollToTopBtnIframe"),
      mainContentIframe = document
      .getElementById(
        "mainContentIframe"),
      previewSidebarOutlineList =
      document.getElementById(
        "previewSidebarOutlineListIframe"
      ),
      mobileSidebarOutlineList =
      document.getElementById(
        "mobileSidebarOutlineListIframe"
      ),
      previewSidebarPageListIframe =
      document.getElementById(
        "previewSidebarPageListIframe"
      ),
      mobileSidebarPageListIframe =
      document.getElementById(
        "mobileSidebarPageListIframe"
      ),
      headerIframe = document
      .getElementById(
        "previewHeaderIframe"),
      searchButtonIframe = document
      .getElementById(
        "searchButtonIframe"),
      closeSearchButtonIframe = document
      .getElementById(
        "closeSearchButtonIframe"),
      pageSearchInput = document
      .getElementById(
        "pageSearchInput"),
      searchNavControls = document
      .getElementById(
        "searchNavControls"),
      searchResultsCount = document
      .getElementById(
        "searchResultsCount"),
      searchNavUp = document
      .getElementById("searchNavUp"),
      searchNavDown = document
      .getElementById("searchNavDown"),
      progressBarIframe = document
      .getElementById(
        "progressBarIframe"),
      previewOverlay = document
      .getElementById(
        "arviaPreviewOverlay"),
      previewCloseBtn = document
      .getElementById(
        "arviaPreviewCloseBtn"),
      previewContent = document
      .getElementById(
        "arviaPreviewContent"),
      previewCaption = document
      .getElementById(
        "arviaPreviewCaption"),
      previewLoader = previewOverlay
      .querySelector(
        ".arvia-preview-loader"),
      previewGoToBtn = document
      .getElementById(
        "arviaPreviewGoToBtn"),
      breadcrumbTrailIframe = document
      .getElementById(
        "breadcrumbTrailIframe"),
      pageStatsBtnIframe = document
      .getElementById(
        "pageStatsBtnIframe"),
      pageStatsOverlayIframe = document
      .getElementById(
        "pageStatsOverlayIframe"),
      statsContentIframe = document
      .getElementById(
        "statsContentIframe"),
      readAloudBtnIframe = document
      .getElementById(
        "readAloudBtnIframe"),
      shareBtnIframe = document
      .getElementById("shareBtnIframe"),
      metaAuthor = document
      .querySelector(
        'meta[name="author"]'),
      pptModeBtnIframe = document
      .getElementById(
        "pptModeBtnIframe");
    
    // --- UI FUNCTIONS ---
    
    function animatePageContent() {
      if (!actualPageContentIframe ||
        typeof anime === "undefined")
        return;
      const container =
        actualPageContentIframe
        .querySelector(
          ".page-content-container"
        );
      if (!container) return;
      const elements = [...container
        .children
      ];
      elements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform =
          "translateY(20px)";
      });
      anime({
        targets: elements,
        opacity: 1,
        translateY: 0,
        delay: anime.stagger(50),
        duration: 400,
        easing: "easeOutQuad"
      });
    }
    
    function updateBreadcrumbs(e) {
      if (!breadcrumbTrailIframe)
        return;
      const t = [];
      let a = pageMap.get(e);
      for (; a;) t.unshift(a), (a =
        pageMap.get(a.parentId));
      let r = "";
      if (document.referrer)
        try {
          const e = new URL(document
              .referrer),
            t = new URL(window.location
              .origin);
          e.hostname !== t.hostname &&
            (r +=
              `<span class="breadcrumb-item-iframe" title="Referred from ${e.hostname}">${e.hostname}</span><span class="breadcrumb-separator-iframe"><i class="fas fa-chevron-right"></i></span>`
            );
        } catch (e) {}
      t.forEach((e, a) => {
          a < t.length - 1 ?
            (r +=
              `<a href="#${e.id}" class="breadcrumb-item-iframe">${e.name}</a><span class="breadcrumb-separator-iframe"><i class="fas fa-chevron-right"></i></span>`
            ) :
            (r +=
              `<span class="breadcrumb-item-iframe current" aria-current="page">${e.name}</span>`
            );
        }),
        (breadcrumbTrailIframe
          .innerHTML = r);
    }
    
    function updatePaginationButtonsIframe() {
      const currentIndex =
        pagesDataIframe.findIndex(
          (p) => p.id ===
          currentPageIdIframe
        );
      if (prevPageBtnIframe) {
        prevPageBtnIframe.disabled =
          currentIndex <= 0;
      }
      if (nextPageBtnIframe) {
        nextPageBtnIframe.disabled =
          currentIndex >=
          pagesDataIframe.length - 1;
      }
    }
    
    function initializeIframeScripts() {
      if (typeof MathJax !==
        "undefined" && MathJax
        .typesetPromise) {
        MathJax.typesetPromise([
          actualPageContentIframe
        ]).catch((e) =>
          console.error(
            "MathJax typesetting error:",
            e)
        );
      }
      
      actualPageContentIframe
        .querySelectorAll("pre code")
        .forEach((codeBlock) => {
          if (typeof hljs !==
            "undefined") {
            hljs.highlightElement(
              codeBlock);
          }
          
          if (
            codeBlock.parentNode &&
            !codeBlock.parentNode
            .querySelector(
              ".copy-code-btn-iframe")
          ) {
            const copyButton =
              document.createElement(
                "button");
            copyButton.className =
              "copy-code-btn-iframe";
            copyButton.textContent =
              "Copy";
            copyButton.setAttribute(
              "aria-label",
              "Copy code to clipboard"
            );
            
            copyButton.onclick =
              () => {
                navigator.clipboard
                  .writeText(codeBlock
                    .textContent)
                  .then(() => {
                    copyButton
                      .textContent =
                      "Copied!";
                    setTimeout(
                      () => {
                        copyButton
                          .textContent =
                          "Copy";
                      }, 2000);
                  })
                  .catch((err) => {
                    console.error(
                      "Failed to copy code in iframe:",
                      err);
                  });
              };
            
            codeBlock.parentNode.style
              .position = "relative";
            codeBlock.parentNode
              .appendChild(
                copyButton);
          }
        });
      
      if (currentPageIdIframe !==
        "homepage") {
        animatePageContent();
      }
    }
    
    function handleLoadMorePosts(
      button) {
      button.disabled = true;
      const postList = document
        .querySelector(
          ".newsletter-post-list");
      if (!postList) return;
      
      const displayedCount = postList
        .children.length;
      const activeBtn = document
        .querySelector(
          ".category-btn.active");
      const currentCategory =
        activeBtn ? activeBtn.dataset
        .category : "All";
      const metaAuthor = document
        .querySelector(
          'meta[name="author"]');
      const authorName = metaAuthor ?
        metaAuthor.content :
        "Alphalabs";
      
      const filteredPosts =
        currentCategory === "All" ?
        globalBlogPosts :
        globalBlogPosts.filter((p) =>
          getCategoryName(p) ===
          currentCategory);
      
      const postsToLoad = filteredPosts
        .slice(displayedCount,
          displayedCount + 5);
      const logoUrl =
        document.querySelector(
          'meta[name="arvia-logo-url"]')
        ?.content || "";
      
      const fragment = document
        .createDocumentFragment();
      
      postsToLoad.forEach((post) => {
        const card = document
          .createElement("div");
        card.className =
          "newsletter-card newly-added";
        card.setAttribute("onclick",
          `window.location.hash='#${post.id}'`
        );
        card.setAttribute("role",
          "link");
        card.setAttribute(
          "tabindex", "0");
        card.setAttribute(
          "aria-label",
          `Read article: ${post.name}`
        );
        
        card.innerHTML = `
            <img src="${getImageUrl(
              post
            )}" alt="" class="newsletter-card-thumb" loading="lazy" onerror="this.onerror=null;this.src='${logoUrl}';">
            <div class="newsletter-card-content">
                <span class="newsletter-card-category">${getCategoryName(
                  post
                )}</span>
                <h3 class="newsletter-card-title"><a href="#${
                  post.id
                }" tabindex="-1">${post.name}</a></h3>
                <p class="newsletter-card-summary">${getSnippet(
                  post.content,
                  100
                )}</p>
                <div class="newsletter-card-meta">
                    By ${post.author || authorName} &bull; ${new Date(
      post.lastUpdated
    ).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    })}
                </div>
            </div>
        `;
        fragment.appendChild(card);
      });
      
      postList.appendChild(fragment);
      
      if (postList.children.length >=
        filteredPosts.length) {
        button.parentElement.remove();
      } else {
        button.disabled = false;
      }
    }
    
    // --- LOCKING LOGIC ---
    function attemptUnlock(pageId) {
      const passwordInput = document
        .getElementById(
          "pagePasswordInput");
      const errorDiv = document
        .getElementById(
          "passwordError");
      const page = pageMap.get(pageId);
      
      if (!passwordInput || !page)
        return;
      
      const entered = passwordInput
        .value;
      if (entered === page.password) {
        unlockedPages.add(pageId);
        errorDiv.textContent = "";
        displayPageContentIframe(
          pageId);
      } else {
        errorDiv.textContent =
          "Incorrect password.";
        passwordInput.classList.add(
          "input-error");
        // Shake animation
        const container = document
          .querySelector(
            ".locked-page-container");
        if (container) {
          container.animate(
            [
              { transform: "translateX(0)" },
              { transform: "translateX(-6px)" },
              { transform: "translateX(6px)" },
              { transform: "translateX(0)" }
            ],
            {
              duration: 300,
              easing: "ease-in-out"
            }
          );
        }
        setTimeout(() => passwordInput
          .classList.remove(
            "input-error"), 2000);
      }
    }
    
    function handlePasswordKeypress(
      event) {
      if (event.key === "Enter") {
        attemptUnlock(
          currentPageIdIframe);
      }
    }
    
    // --- MODAL & OVERLAY UI ---
    function openPreview(element) {
      let url, caption, type;
      
      previewGoToBtn.style.display =
        "none";
      previewGoToBtn.removeAttribute(
        "data-url");
      
      if (element.tagName === "IMG") {
        url = element.src;
        caption = element.alt ||
          "Image Preview";
        type = "image";
      } else if (element.tagName ===
        "A" && element.href) {
        try {
          const currentLoc = new URL(
            window.location.href);
          const linkLoc = new URL(
            element.href);
          if (
            linkLoc.origin ===
            currentLoc.origin &&
            linkLoc.pathname ===
            currentLoc.pathname &&
            linkLoc.hash
          ) {
            return;
          }
        } catch (e) {}
        
        url = element.href;
        caption = element.title ||
          element.textContent.trim() ||
          "Link Preview";
        type = getContentType(url);
      } else {
        return;
      }
      
      if (!url || !type) return;
      
      let contentEl;
      if (["pdf", "youtube", "vimeo",
          "maps", "iframe"
        ].includes(type)) {
        previewGoToBtn.style.display =
          "block";
        previewGoToBtn.setAttribute(
          "data-url", url);
      }
      
      previewLoader.style.display =
        "block";
      previewContent.innerHTML = "";
      previewCaption.textContent = "";
      
      switch (type) {
        case "image":
          contentEl = document
            .createElement("img");
          contentEl.src = url;
          contentEl.alt = caption;
          break;
        case "video":
          contentEl = document
            .createElement("video");
          contentEl.src = url;
          contentEl.controls = true;
          contentEl.autoplay = true;
          break;
        case "audio":
          contentEl = document
            .createElement("audio");
          contentEl.src = url;
          contentEl.controls = true;
          contentEl.autoplay = true;
          break;
        case "youtube":
          const youtubeMatch = url
            .match(
              /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i
            );
          if (youtubeMatch) {
            contentEl = document
              .createElement("iframe");
            contentEl.src =
              `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`;
            contentEl.frameBorder = "0";
            contentEl.allow =
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            contentEl.allowFullscreen =
              true;
          }
          break;
        case "vimeo":
          const vimeoMatch = url.match(
            /vimeo\.com\/(?:video\/)?([0-9]+)/
          );
          if (vimeoMatch) {
            contentEl = document
              .createElement("iframe");
            contentEl.src =
              `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
            contentEl.frameBorder = "0";
            contentEl.allow =
              "autoplay; fullscreen";
            contentEl.allowFullscreen =
              true;
          }
          break;
        case "pdf":
        case "maps":
        case "iframe":
          contentEl = document
            .createElement("iframe");
          contentEl.src = url;
          contentEl.frameBorder = "0";
          contentEl.allowFullscreen =
            true;
          break;
        default:
          previewLoader.style.display =
            "none";
          return;
      }
      
      if (contentEl) {
        const onContentLoad = () => {
          previewLoader.style
            .display = "none";
          previewContent.style
            .opacity = 1;
        };
        contentEl.onload = contentEl
          .onloadeddata = contentEl
          .oncanplay = onContentLoad;
        contentEl.onerror = () => {
          previewLoader.style
            .display = "none";
          previewContent.innerHTML =
            '<p style="color:#f87171;">Could not load content.</p>';
          previewContent.style
            .opacity = 1;
        };
        previewContent.style.opacity =
          0;
        previewContent.appendChild(
          contentEl);
        previewCaption.textContent =
          caption;
        if (["iframe", "pdf", "maps"]
          .includes(type)) {
          setTimeout(onContentLoad,
            1000);
        }
      }
      previewOverlay.classList.add(
        "show");
      previewOverlay.setAttribute(
        "aria-hidden", "false");
      document.body.style.overflow =
        "hidden";
    }
    
    function closePreview() {
      previewOverlay.classList.remove(
          "show"),
        previewOverlay.setAttribute(
          "aria-hidden", "true"),
        (document.body.style.overflow =
          ""),
        (previewContent.innerHTML = ""),
        (previewCaption.textContent =
          ""),
        (previewGoToBtn.style.display =
          "none"),
        previewGoToBtn.removeAttribute(
          "data-url");
    }
    
    function hidePageStats() {
      pageStatsOverlayIframe.classList
        .contains("show") &&
        (pageStatsOverlayIframe
          .classList.remove("show"),
          pageStatsOverlayIframe
          .setAttribute("aria-hidden",
            "true"));
    }
    
    function togglePageStats() {
      if (pageStatsOverlayIframe
        .classList.contains("show"))
        return void hidePageStats();
      const e = pageMap.get(
        currentPageIdIframe);
      if (!e) return;
      const t = actualPageContentIframe
        .innerText || "",
        a = t.trim().split(/\s+/)
        .filter(Boolean).length,
        r = Math.ceil(a / 200),
        i = e.author || (metaAuthor ?
          metaAuthor.content :
          "Not specified"),
        n = e.lastUpdated ?
        new Date(e.lastUpdated)
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }) :
        "Not specified";
      (statsContentIframe.innerHTML = `
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
                <span class="stat-icon" title="Last Updated"><i class="fas fa-calendar-alt"></i></span>
                <span class="label">Last Updated</span>
                <span class="value">${n}</span>
            </div>
            <div class="stat-item">
                <span class="stat-icon" title="Author"><i class="fas fa-user"></i></span>
                <span class="label">Author</span>
                <span class="value">${i}</span>
            </div>
        `),
      pageStatsOverlayIframe.classList
        .add("show"),
        pageStatsOverlayIframe
        .setAttribute("aria-hidden",
          "false");
    }
    
    // --- SIDEBAR UI ---
    function buildSidebarItemsHTML(
      nodes) {
      let html = "";
      for (const node of nodes) {
        const hasChildren = node
          .children.length > 0;
        const hasGrandchildren =
          hasChildren && node.children
          .some((child) => child
            .children.length > 0);
        
        // Lock Icon Logic
        const lockIcon = node.password ?
          '<i class="fas fa-lock locked-sidebar-icon" title="Password Protected"></i>' :
          "";
        
        html +=
          `<div class="sidebar-page-item-wrapper">`;
        html +=
          `<div class="sidebar-page-item-container">`;
        html +=
          `<div class="sidebar-page-item-iframe" data-id="${node.id}" role="link" tabindex="0">${node.name}${lockIcon}</div>`;
        
        if (hasChildren) {
          const action =
            hasGrandchildren ? "slide" :
            "toggle";
          html +=
            `<button class="sidebar-toggle-children-btn" data-action="${action}" data-parent-id="${node.id}" aria-label="Toggle subpages for ${node.name}" aria-expanded="false"><i class="fas fa-chevron-right"></i></button>`;
        }
        
        html += `</div>`;
        
        if (hasChildren && !
          hasGrandchildren) {
          html += `<div class="sidebar-subpage-list">${buildSidebarItemsHTML(
        node.children
      )}</div>`;
        }
        
        html += `</div>`;
      }
      return html;
    }
    
    function buildSidebar(e) {
      const t = document.getElementById(
        e);
      if (!t) return;
      const a = buildSidebarItemsHTML(
          pageTree),
        r = document.createElement(
          "div");
      (r.className =
        "sidebar-panel-container"),
      (r.innerHTML =
        `<div class="sidebar-panel" data-depth="0">${a}</div>`
      ),
      (t.innerHTML = ""),
      t.appendChild(r);
    }
    
    function syncSidebarToPage(pageId) {
      document
        .querySelectorAll(
          ".sidebar-page-item-iframe.active"
        )
        .forEach((el) => el.classList
          .remove("active"));
      document
        .querySelectorAll(
          `.sidebar-page-item-iframe[data-id="${pageId}"]`
        )
        .forEach((el) => el.classList
          .add("active"));
      
      const ancestors = [];
      let currentNode = pageMap.get(
        pageId);
      while (currentNode && currentNode
        .parentId) {
        currentNode = pageMap.get(
          currentNode.parentId);
        if (currentNode) {
          ancestors.unshift(
            currentNode);
        }
      }
      
      [previewSidebarPageListIframe,
        mobileSidebarPageListIframe
      ].forEach(
        (sidebarEl) => {
          if (!sidebarEl) return;
          const panelContainer =
            sidebarEl.querySelector(
              ".sidebar-panel-container"
            );
          if (!panelContainer) return;
          
          panelContainer
            .querySelectorAll(
              '.sidebar-panel:not([data-depth="0"])'
            )
            .forEach((p) => p
              .remove());
          panelContainer.style
            .transform =
            "translateX(0%)";
          panelContainer
            .querySelectorAll(
              ".sidebar-subpage-list.show"
            )
            .forEach((subList) => {
              subList.classList
                .remove("show");
              subList.style
                .maxHeight = null;
              const toggleBtn =
                subList
                .previousElementSibling
                .querySelector(
                  ".sidebar-toggle-children-btn"
                );
              if (toggleBtn) {
                toggleBtn.classList
                  .remove("open");
                toggleBtn
                  .setAttribute(
                    "aria-expanded",
                    "false");
                toggleBtn
                  .querySelector(
                    "i.fas")
                  .className =
                  "fas fa-chevron-right";
              }
            });
          
          let currentPanel =
            panelContainer
            .querySelector(
              '.sidebar-panel[data-depth="0"]'
            );
          ancestors.forEach((
            ancestorNode) => {
            const
              hasGrandchildren =
              ancestorNode
              .children.some(
                (child) => child
                .children.length >
                0
              );
            
            if (
              hasGrandchildren) {
              const newDepth =
                panelContainer
                .querySelectorAll(
                  ".sidebar-panel"
                )
                .length;
              const newPanel =
                document
                .createElement(
                  "div");
              newPanel.className =
                "sidebar-panel";
              newPanel.dataset
                .depth = newDepth;
              const childrenHTML =
                buildSidebarItemsHTML(
                  ancestorNode
                  .children);
              newPanel.innerHTML =
                `<div class="sidebar-panel-header"><button class="sidebar-back-btn" aria-label="Go back"><i class="fas fa-arrow-left"></i></button><span class="sidebar-panel-title">${ancestorNode.name}</span></div>${childrenHTML}`;
              panelContainer
                .appendChild(
                  newPanel);
              currentPanel =
                newPanel;
            } else {
              const toggleBtn =
                currentPanel
                .querySelector(
                  `.sidebar-toggle-children-btn[data-parent-id="${ancestorNode.id}"]`
                );
              if (toggleBtn) {
                const subList =
                  toggleBtn
                  .parentElement
                  .nextElementSibling;
                if (subList &&
                  subList
                  .classList
                  .contains(
                    "sidebar-subpage-list"
                  )) {
                  toggleBtn
                    .classList
                    .add("open");
                  toggleBtn
                    .setAttribute(
                      "aria-expanded",
                      "true");
                  toggleBtn
                    .querySelector(
                      "i.fas")
                    .className =
                    "fas fa-chevron-down";
                  subList
                    .classList
                    .add("show");
                  subList.style
                    .maxHeight =
                    subList
                    .scrollHeight +
                    "px";
                }
              }
            }
          });
          
          const finalPanelCount =
            panelContainer
            .querySelectorAll(
              ".sidebar-panel")
            .length;
          if (finalPanelCount > 1) {
            panelContainer.style
              .transition = "none";
            panelContainer.style
              .transform = `translateX(-${
          (finalPanelCount - 1) * 100
        }%)`;
            setTimeout(() => {
              panelContainer.style
                .transition = "";
            }, 50);
          }
          
          sidebarEl
            .querySelectorAll(
              ".sidebar-page-item-iframe.active"
            )
            .forEach((el) => el
              .classList.remove(
                "active"));
          sidebarEl
            .querySelectorAll(
              `.sidebar-page-item-iframe[data-id="${pageId}"]`
            )
            .forEach((el) => el
              .classList.add("active")
            );
        }
      );
    }
    
    function buildRelatedSitesDropdown(
      e) {
      if (!e || typeof relatedSites ===
        "undefined" || 0 ===
        relatedSites.length)
        return;
      relatedSites.sort((e, t) => e
        .order - t.order);
      const t = window.location.href
        .replace(/\/$/, ""),
        a = relatedSites
        .map((e) => {
          const a = e.url.replace(
            /\/$/, "");
          return `<li><a href="${e.url}" class="related-site-item-iframe ${
          t === a ? "active" : ""
        }" ${t === a ? 'aria-current="page"' : ""}>${e.title}</a></li>`;
        })
        .join("");
      e.innerHTML = `
                <div class="related-sites-section-iframe">
                    <button class="related-sites-toggle-iframe" aria-expanded="false" aria-controls="${e.id}-list">
                        <span>Related Sites</span>
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <ul class="related-sites-list-iframe" id="${e.id}-list">
                        ${a}
                    </ul>
                </div>
            `;
    }
    
    function closeSearch() {
      headerIframe.classList.remove(
        "search-active");
      pageSearchInput.value = "";
      removeHighlights();
      searchResults = [];
      currentSearchIndex = -1;
      searchNavControls.style.display =
        "none";
    }
    
    // --- EVENT LISTENERS ---
    function setupEventListeners() {
      // Breadcrumb actions
      if (shareBtnIframe) {
        shareBtnIframe.addEventListener(
          "click", async () => {
            const e = pageMap.get(
                currentPageIdIframe
              ),
              t = {
                title: document
                  .title,
                text: `Check out this page: ${e.name}`,
                url: window.location
                  .href
              },
              a = shareBtnIframe
              .querySelector("i");
            if (navigator.share)
              try {
                await navigator
                  .share(t),
                  a &&
                  ((a.className =
                      "fas fa-check"
                    ),
                    setTimeout(
                      () => {
                        a.className =
                          "fas fa-share-alt";
                      }, 2e3));
              } catch (e) {
                a &&
                  ((a.className =
                      "fas fa-times"
                    ),
                    setTimeout(
                      () => {
                        a.className =
                          "fas fa-share-alt";
                      }, 2e3));
              }
            else
              navigator.clipboard
              .writeText(window
                .location.href)
              .then(() => {
                a &&
                  ((a.className =
                      "fas fa-check"
                    ),
                    setTimeout(
                      () => {
                        a.className =
                          "fas fa-share-alt";
                      }, 2e3));
              })
              .catch((e) => {
                a &&
                  ((a.className =
                      "fas fa-times"
                    ),
                    setTimeout(
                      () => {
                        a.className =
                          "fas fa-share-alt";
                      }, 2e3));
              });
          });
      }
      
      // Enhanced Read Aloud Feature
      if (readAloudBtnIframe &&
        "speechSynthesis" in window) {
        let isReading = false;
        let currentUtterance = null;
        let chunks = [];
        let currentChunkIndex = 0;
        
        const cleanupReader = () => {
          document.querySelectorAll(
              ".reading-word")
            .forEach((span) => {
              const parent = span
                .parentNode;
              if (parent) {
                parent.replaceChild(
                  document
                  .createTextNode(
                    span
                    .textContent),
                  span);
                parent.normalize();
              }
            });
          chunks = [];
          currentChunkIndex = 0;
        };
        
        const stopReading = () => {
          if (!isReading) return;
          isReading = false;
          speechSynthesis.cancel();
          const icon =
            readAloudBtnIframe
            .querySelector("i");
          if (icon) icon.className =
            "fas fa-volume-high";
          
          document
            .querySelectorAll(
              ".reading-highlight")
            .forEach((el) => el
              .classList.remove(
                "reading-highlight"));
          cleanupReader();
        };
        
        const playChunk = (index) => {
          if (index >= chunks
            .length || !isReading) {
            stopReading();
            return;
          }
          currentChunkIndex = index;
          const chunk = chunks[index];
          
          const utterance =
            new SpeechSynthesisUtterance(
              chunk.text);
          utterance.rate = 1.0;
          currentUtterance =
            utterance;
          
          utterance.onboundary = (
            event) => {
            if (event.name !==
              "word") return;
            const charIndex = event
              .charIndex;
            const match = chunk
              .mappings.find(
                (m) => charIndex >=
                m.start &&
                charIndex < m.end +
                1
              );
            if (match && match
              .element) {
              document
                .querySelectorAll(
                  ".reading-highlight"
                )
                .forEach((el) => el
                  .classList.remove(
                    "reading-highlight"
                  ));
              match.element
                .classList.add(
                  "reading-highlight"
                );
              const rect = match
                .element
                .getBoundingClientRect();
              const viewHeight =
                window.innerHeight;
              if (rect.top <
                viewHeight * 0.3 ||
                rect.bottom >
                viewHeight * 0.7) {
                match.element
                  .scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                  });
              }
            }
          };
          
          utterance.onend = () => {
            if (isReading)
              playChunk(index + 1);
          };
          
          utterance.onerror = (e) => {
            console.error(
              "Speech error", e);
            if (isReading)
              playChunk(index + 1);
          };
          
          speechSynthesis.speak(
            utterance);
        };
        
        const startReading = () => {
          if (isReading) {
            stopReading();
            return;
          }
          
          const contentContainer =
            actualPageContentIframe
            .querySelector(
              ".page-content-container"
            );
          if (!contentContainer)
            return;
          
          const blocks =
            contentContainer
            .querySelectorAll(
              "h1, h2, h3, h4, h5, h6, p, li, blockquote"
            );
          chunks = [];
          
          if (blocks.length === 0)
            return;
          
          blocks.forEach((block) => {
            if (block
              .offsetParent ===
              null) return;
            const textContent =
              block.innerText
              .trim();
            if (!textContent)
              return;
            
            const words =
              textContent.split(
                /\s+/);
            let blockSpokenText =
              "";
            const
              blockMappings = [];
            block.innerHTML = "";
            
            words.forEach((word,
              i) => {
              const span =
                document
                .createElement(
                  "span");
              span.className =
                "reading-word";
              span
                .textContent =
                word;
              block
                .appendChild(
                  span);
              if (i < words
                .length - 1)
                block
                .appendChild(
                  document
                  .createTextNode(
                    " "));
              
              blockMappings
                .push({
                  element: span,
                  start: blockSpokenText
                    .length,
                  end: blockSpokenText
                    .length +
                    word
                    .length
                });
              blockSpokenText
                += word + " ";
            });
            
            chunks.push({
              text: blockSpokenText,
              mappings: blockMappings
            });
          });
          
          if (chunks.length === 0)
            return;
          
          isReading = true;
          const icon =
            readAloudBtnIframe
            .querySelector("i");
          if (icon) icon.className =
            "fas fa-stop-circle";
          
          playChunk(0);
        };
        
        readAloudBtnIframe
          .addEventListener("click",
            startReading);
        window.addEventListener(
          "hashchange", stopReading);
      }
      
      // Presentation Mode Button
      if (pptModeBtnIframe) {
        pptModeBtnIframe
          .addEventListener("click",
            () => {
              if (
                typeof startPresentation ===
                "function") {
                startPresentation();
              } else {
                console.error(
                  "PPT mode scripts not loaded"
                );
              }
            });
      }
      
      // Main content interactions
      mainContentIframe
        .addEventListener("click", (
          e) => {
          const loadMoreBtn = e.target
            .closest(
              "#loadMorePostsBtn");
          if (loadMoreBtn) {
            handleLoadMorePosts(
              loadMoreBtn);
            return;
          }
          
          const categoryBtn = e.target
            .closest(".category-btn");
          if (categoryBtn) {
            const category =
              categoryBtn.dataset
              .category;
            renderHomepagePosts(
              category);
            return;
          }
          
          const link = e.target
            .closest("a[href]");
          const image = e.target
            .closest("img");
          
          if (image && !image.closest(
              ".post-card")) {
            e.preventDefault();
            openPreview(image);
          } else if (link &&
            getContentType(link.href)
          ) {
            e.preventDefault();
            openPreview(link);
          }
        });
      
      // Preview overlay
      previewCloseBtn.addEventListener(
          "click", closePreview),
        previewOverlay.addEventListener(
          "click", (e) => {
            e.target ===
              previewOverlay &&
              closePreview();
          }),
        previewGoToBtn.addEventListener(
          "click", (e) => {
            e.stopPropagation();
            const t = previewGoToBtn
              .getAttribute("data-url");
            t && window.open(t,
              "_blank",
              "noopener,noreferrer");
          });
      
      // Mobile sidebar
      menuButtonIframe &&
        menuButtonIframe
        .addEventListener("click",
          () => {
            mobileSidebarOverlayIframe
              .classList.add("show"),
              menuButtonIframe
              .setAttribute(
                "aria-expanded", "true"
              );
          }),
        mobileSidebarOverlayIframe &&
        mobileSidebarOverlayIframe
        .addEventListener("click", (
          e) => {
          e.target ===
            mobileSidebarOverlayIframe &&
            (mobileSidebarOverlayIframe
              .classList.remove(
                "show"),
              menuButtonIframe
              .setAttribute(
                "aria-expanded",
                "false"));
        });
      
      // Pagination
      prevPageBtnIframe &&
        prevPageBtnIframe
        .addEventListener("click",
          () => {
            const e = pagesDataIframe
              .findIndex((e) => e.id ===
                currentPageIdIframe);
            e > 0 && (window.location
              .hash = pagesDataIframe[
                e - 1].id);
          }),
        nextPageBtnIframe &&
        nextPageBtnIframe
        .addEventListener("click",
          () => {
            const e = pagesDataIframe
              .findIndex(
                (e) => e.id ===
                currentPageIdIframe
              );
            e < pagesDataIframe.length -
              1 &&
              (window.location.hash =
                pagesDataIframe[e + 1]
                .id);
          });
      
      // Scroll-to-top and progress bar
      scrollToTopBtnIframe &&
        mainContentIframe &&
        (mainContentIframe
          .addEventListener("scroll",
            () => {
              if (
                (scrollToTopBtnIframe
                  .classList.toggle(
                    "show",
                    mainContentIframe
                    .scrollTop > 0.5 *
                    mainContentIframe
                    .clientHeight
                  ),
                  progressBarIframe)
              ) {
                const e =
                  mainContentIframe,
                  t = e.scrollTop,
                  a = e.scrollHeight,
                  r = e.clientHeight,
                  i = a > r ? (t / (a -
                    r)) * 100 : 0;
                progressBarIframe.style
                  .width = i + "%";
              }
            }),
          scrollToTopBtnIframe
          .addEventListener("click",
            () => {
              mainContentIframe
                .scrollTo({
                  top: 0,
                  behavior: "smooth"
                });
            }));
      
      // Sidebar view toggling and outline clicks
      const sidebarToggleBtns = document
        .querySelectorAll(
          ".sidebar-toggle-btn-iframe"
        ),
        pageListViews = document
        .querySelectorAll(
          "#previewSidebarPageListIframe, #mobileSidebarPageListIframe"
        ),
        outlineListViews = document
        .querySelectorAll(
          "#previewSidebarOutlineListIframe, #mobileSidebarOutlineListIframe"
        );
      
      // Fix for new buttons inside controls
      // We only want the document outline toggle to trigger view change, not the PPT button
      sidebarToggleBtns.forEach((r) => {
        if (r.id ===
          "pptModeBtnIframe")
          return;
        
        r.addEventListener("click",
          () => {
            sidebarView =
              "pages" ===
              sidebarView ?
              "outline" : "pages";
            const isPages =
              "pages" ===
              sidebarView;
            pageListViews.forEach(
                (e) => e.classList
                .toggle(
                  "active-view",
                  isPages)),
              outlineListViews
              .forEach((e) =>
                e.classList
                .toggle(
                  "active-view", !
                  isPages)
              ),
              sidebarToggleBtns
              .forEach((e) => {
                // Only update text for the main toggle button, not the PPT button
                if (e.id !==
                  "pptModeBtnIframe"
                ) {
                  const
                    textSpan = e
                    .querySelector(
                      ".btn-text"
                    );
                  const icon = e
                    .querySelector(
                      ".fas");
                  if (textSpan)
                    textSpan
                    .textContent =
                    isPages ?
                    "Document Outline" :
                    "Page Navigation";
                  if (icon)
                    icon
                    .className =
                    isPages ?
                    "fas fa-list-ul" :
                    "fas fa-file-lines";
                  e.setAttribute(
                    "aria-label",
                    isPages ?
                    "Toggle Document Outline" :
                    "Toggle Page Navigation"
                  );
                }
              });
          });
      });
      
      const handleOutlineClick = (
        e) => {
        const t = e.target.closest(
          ".document-outline-item-iframe"
        );
        if (!t) return;
        e.preventDefault();
        const a = t.getAttribute(
            "href"),
          r = mainContentIframe
          .querySelector(a);
        r &&
          (mainContentIframe
            .scrollTo({
              top: r.offsetTop - 20,
              behavior: "smooth"
            }),
            mobileSidebarOverlayIframe
            .classList.contains(
              "show") &&
            (mobileSidebarOverlayIframe
              .classList.remove(
                "show"),
              menuButtonIframe
              .setAttribute(
                "aria-expanded",
                "false")));
      };
      previewSidebarOutlineList &&
        previewSidebarOutlineList
        .addEventListener("click",
          handleOutlineClick),
        mobileSidebarOutlineList &&
        mobileSidebarOutlineList
        .addEventListener("click",
          handleOutlineClick);
      
      // Sidebar panel navigation
      [previewSidebarPageListIframe,
        mobileSidebarPageListIframe
      ].forEach(
        (sidebarEl) => {
          if (!sidebarEl) return;
          sidebarEl.addEventListener(
            "click", (event) => {
              const toggleButton =
                event.target
                .closest(
                  ".sidebar-toggle-children-btn"
                );
              const backButton =
                event.target
                .closest(
                  ".sidebar-back-btn"
                );
              const pageItem = event
                .target.closest(
                  ".sidebar-page-item-iframe"
                );
              if (toggleButton) {
                const action =
                  toggleButton
                  .dataset.action;
                const parentId =
                  toggleButton
                  .dataset.parentId;
                if (action ===
                  "slide") {
                  const parentNode =
                    pageMap.get(
                      parentId);
                  const
                    panelContainer =
                    sidebarEl
                    .querySelector(
                      ".sidebar-panel-container"
                    );
                  if (!
                    panelContainer ||
                    !parentNode)
                    return;
                  const newDepth =
                    panelContainer
                    .querySelectorAll(
                      ".sidebar-panel"
                    )
                    .length;
                  const newPanel =
                    document
                    .createElement(
                      "div");
                  newPanel
                    .className =
                    "sidebar-panel";
                  newPanel.dataset
                    .depth =
                    newDepth;
                  const
                    childrenHTML =
                    buildSidebarItemsHTML(
                      parentNode
                      .children);
                  newPanel
                    .innerHTML =
                    `<div class="sidebar-panel-header"><button class="sidebar-back-btn" aria-label="Go back"><i class="fas fa-arrow-left"></i></button><span class="sidebar-panel-title">${parentNode.name}</span></div>${childrenHTML}`;
                  panelContainer
                    .appendChild(
                      newPanel);
                  panelContainer
                    .style
                    .transform =
                    `translateX(-${newDepth * 100}%)`;
                } else {
                  const subList =
                    toggleButton
                    .parentElement
                    .nextElementSibling;
                  if (subList &&
                    subList
                    .classList
                    .contains(
                      "sidebar-subpage-list"
                    )) {
                    const isOpen = !
                      toggleButton
                      .classList
                      .contains(
                        "open");
                    toggleButton
                      .classList
                      .toggle(
                        "open",
                        isOpen);
                    toggleButton
                      .setAttribute(
                        "aria-expanded",
                        isOpen);
                    toggleButton
                      .querySelector(
                        "i.fas")
                      .className =
                      isOpen ?
                      "fas fa-chevron-down" :
                      "fas fa-chevron-right";
                    if (subList
                      .classList
                      .contains(
                        "show")) {
                      subList.style
                        .maxHeight =
                        null;
                      subList
                        .classList
                        .remove(
                          "show");
                    } else {
                      subList
                        .classList
                        .add(
                          "show");
                      subList.style
                        .maxHeight =
                        subList
                        .scrollHeight +
                        "px";
                    }
                  }
                }
              } else if (
                backButton) {
                const
                  panelContainer =
                  sidebarEl
                  .querySelector(
                    ".sidebar-panel-container"
                  );
                if (!panelContainer)
                  return;
                const panels =
                  panelContainer
                  .querySelectorAll(
                    ".sidebar-panel"
                  );
                const currentDepth =
                  panels.length - 1;
                if (currentDepth >
                  0) {
                  panelContainer
                    .style
                    .transform = `translateX(-${
              (currentDepth - 1) * 100
            }%)`;
                  const
                    panelToRemove =
                    panels[
                      currentDepth];
                  panelToRemove
                    .addEventListener(
                      "transitionend",
                      () =>
                      panelToRemove
                      .remove(),
                      {
                        once: true
                      }
                    );
                }
              } else if (pageItem &&
                pageItem.dataset.id
              ) {
                window.location
                  .hash = pageItem
                  .dataset.id;
                if (
                  mobileSidebarOverlayIframe
                  .classList
                  .contains("show")
                ) {
                  mobileSidebarOverlayIframe
                    .classList
                    .remove("show");
                  menuButtonIframe
                    .setAttribute(
                      "aria-expanded",
                      "false");
                }
              }
            });
        }
      );
      
      // Related sites dropdown
      document.querySelectorAll(
        ".related-sites-toggle-iframe"
      ).forEach((e) => {
        e.addEventListener("click",
          () => {
            const t = e
              .nextElementSibling,
              a = e.querySelector(
                ".fas"),
              r = e.classList
              .toggle("open");
            e.setAttribute(
                "aria-expanded", r
              ),
              (a.className = r ?
                "fas fa-chevron-down" :
                "fas fa-chevron-right"
              ),
              r ?
              (t.classList.add(
                  "show"),
                (t.style
                  .maxHeight = t
                  .scrollHeight +
                  "px")) :
              ((t.style
                  .maxHeight =
                  null), t
                .classList.remove(
                  "show"));
          });
      });
      
      // Search
      searchButtonIframe
        .addEventListener("click",
          () => {
            headerIframe.classList.add(
                "search-active"),
              pageSearchInput.focus();
          });
      closeSearchButtonIframe
        .addEventListener("click",
          closeSearch);
      mainContentIframe
        .addEventListener("click", (
          e) => {
          headerIframe.classList
            .contains(
              "search-active") &&
            !e.target.closest(
              ".arvia-preview-overlay"
            ) &&
            closeSearch();
        });
      pageSearchInput.addEventListener(
        "input", (e) =>
        highlightText(e.target.value)
      );
      searchNavUp.addEventListener(
        "click", () =>
        navigateToSearchResult(
          currentSearchIndex - 1)
      );
      searchNavDown.addEventListener(
        "click", () =>
        navigateToSearchResult(
          currentSearchIndex + 1)
      );
      
      // Page stats
      pageStatsBtnIframe &&
        pageStatsBtnIframe
        .addEventListener("click",
          togglePageStats),
        pageStatsOverlayIframe &&
        pageStatsOverlayIframe
        .addEventListener("click", (
          e) => {
          e.target ===
            pageStatsOverlayIframe &&
            hidePageStats();
        });
      
      // Global listeners
      document.addEventListener(
          "keydown", (e) => {
            "Escape" === e.key &&
              (previewOverlay.classList
                .contains("show") &&
                closePreview(),
                pageStatsOverlayIframe
                .classList.contains(
                  "show") &&
                hidePageStats());
          }),
        window.addEventListener(
          "beforeunload", () => {
            "speechSynthesis" in window
              &&
              speechSynthesis
              .speaking &&
              speechSynthesis.cancel();
          }),
        window.addEventListener(
          "hashchange", handleHashChange
        );
    }
    
    // --- APP INITIALIZATION ---
    document.addEventListener(
      "DOMContentLoaded", () => {
        initializePageData();
        generateSpecialPages();
        
        buildSidebar(
          "previewSidebarPageListIframe"
        );
        buildSidebar(
          "mobileSidebarPageListIframe"
        );
        
        const relatedSitesContainer =
          document.getElementById(
            "relatedSitesContainerIframe"
          );
        const
          mobileRelatedSitesContainer =
          document.getElementById(
            "mobileRelatedSitesContainerIframe"
          );
        buildRelatedSitesDropdown(
          relatedSitesContainer);
        buildRelatedSitesDropdown(
          mobileRelatedSitesContainer
        );
        
        setupEventListeners();
        
        const initialHash = window
          .location.hash.substring(1);
        const defaultPage =
          pagesDataIframe.find((p) =>
            p.isDefault) ||
          (pagesDataIframe.length >
            0 ? pagesDataIframe : null
          );
        const pageIdToLoad = pageMap
          .has(initialHash) ?
          initialHash :
          defaultPage ?
          defaultPage.id :
          null;
        
        if (pageIdToLoad) {
          if (window.location.hash !==
            "#" + pageIdToLoad) {
            window.location.hash =
              "#" + pageIdToLoad;
          } else {
            handleHashChange();
          }
        }
      });
    
    /* --- ppt.js --- */
    /* --- ppt.js --- */
    // Presentation Mode Logic
    
    let pptState = {
      isActive: false,
      currentSlideIndex: 0,
      slides: [], // Array of slide elements
      isDrawing: false,
      tool: "none", // 'pen', 'eraser', 'laser'
      color: "#f97316",
      ctx: null,
      canvas: null,
      history: [] // Store drawing per slide? For now, one canvas per slide.
    };
    
    function initPresentationMode() {
      if (document.querySelector(
          ".ppt-mode-container"))
        return;
      
      // Create DOM Structure
      const container = document
        .createElement("div");
      container.className =
        "ppt-mode-container";
      container.innerHTML = `
        <div class="ppt-stage" id="pptStage">
            <!-- Slides go here -->
            <canvas id="pptCanvas" class="ppt-canvas"></canvas>
        </div>
        <div class="ppt-toolbar">
            <button class="ppt-btn" id="pptPrev" title="Previous Slide"><i class="fas fa-chevron-left"></i></button>
            <span style="color:white; align-self:center; font-size:0.9rem; font-weight:600; min-width:40px; text-align:center;" id="pptCounter">1 / 1</span>
            <button class="ppt-btn" id="pptNext" title="Next Slide"><i class="fas fa-chevron-right"></i></button>
            <div style="width:1px; height:24px; background:#444; align-self:center; margin:0 5px;"></div>
            <button class="ppt-btn" id="pptPen" title="Pen"><i class="fas fa-pen"></i></button>
            <button class="ppt-btn" id="pptEraser" title="Eraser"><i class="fas fa-eraser"></i></button>
            <button class="ppt-btn" id="pptClear" title="Clear Drawing"><i class="fas fa-trash-alt"></i></button>
            <div style="width:1px; height:24px; background:#444; align-self:center; margin:0 5px;"></div>
            <button class="ppt-btn" id="pptExit" title="Exit Presentation"><i class="fas fa-times"></i></button>
        </div>
    `;
      document.body.appendChild(
        container);
      
      // Setup Canvas
      const canvas = document
        .getElementById("pptCanvas");
      const stage = document
        .getElementById("pptStage");
      
      const resizeCanvas = () => {
        canvas.width = stage
          .clientWidth;
        canvas.height = stage
          .clientHeight;
      };
      window.addEventListener("resize",
        resizeCanvas);
      // Initial resize happens when opening
      
      pptState.canvas = canvas;
      pptState.ctx = canvas.getContext(
        "2d");
      
      // Event Listeners
      document
        .getElementById("pptPrev")
        .addEventListener("click", () =>
          navigateSlide(-1));
      document
        .getElementById("pptNext")
        .addEventListener("click", () =>
          navigateSlide(1));
      document
        .getElementById("pptExit")
        .addEventListener("click",
          exitPresentation);
      
      document
        .getElementById("pptPen")
        .addEventListener("click", (
          e) => toggleTool("pen", e
          .currentTarget));
      document
        .getElementById("pptEraser")
        .addEventListener("click", (
          e) => toggleTool("eraser", e
          .currentTarget));
      document.getElementById(
        "pptClear").addEventListener(
        "click", clearCanvas);
      
      // Keyboard nav
      document.addEventListener(
        "keydown", handleKeyNav);
    }
    
    function startPresentation() {
      initPresentationMode();
      
      const content = document
        .getElementById(
          "actualPageContentIframe");
      if (!content) return;
      
      // Prepare Data
      generateSlides(content);
      
      const container = document
        .querySelector(
          ".ppt-mode-container");
      container.classList.add("active");
      
      // Resize canvas after container is visible for correct dims
      const stage = document
        .getElementById("pptStage");
      pptState.canvas.width = stage
        .clientWidth;
      pptState.canvas.height = stage
        .clientHeight;
      
      pptState.isActive = true;
      showSlide(0);
    }
    
    function exitPresentation() {
      const container = document
        .querySelector(
          ".ppt-mode-container");
      container.classList.remove(
        "active");
      pptState.isActive = false;
      // Optionally clear slides to save memory
      document.querySelectorAll(
        ".ppt-slide").forEach((el) =>
        el.remove());
    }
    
    // --- THE HARD PART: AUTO-PAGINATION ---
    function generateSlides(
      sourceContent) {
      const stage = document
        .getElementById("pptStage");
      // Remove old slides
      document.querySelectorAll(
        ".ppt-slide").forEach((el) =>
        el.remove());
      pptState.slides = [];
      pptState
        .drawings = []; // Reset drawings
      
      // Clone nodes
      const nodes = Array.from(
        sourceContent.querySelector(
          ".page-content-container")
        .children
      ).map((n) => n.cloneNode(true));
      
      let currentSlide = createNewSlide(
        1);
      stage.insertBefore(currentSlide,
        pptState.canvas
      ); // Insert before canvas
      pptState.slides.push(
        currentSlide);
      
      // Helper to check overflow
      const isOverflowing = (slide) => {
        // We use scrollHeight > clientHeight.
        // Note: Padding is included in clientHeight because of box-sizing: border-box usually,
        // but strict overflow check requires careful math.
        // Simplest: check if scrollHeight > clientHeight
        return slide.scrollHeight >
          slide.clientHeight;
      };
      
      nodes.forEach((node) => {
        // Skip empty text nodes or hidden elements if necessary
        if (node.nodeType === 1 &&
          node.style.display ===
          "none") return;
        
        // Append to current slide
        currentSlide.appendChild(
          node);
        
        // Check overflow
        if (isOverflowing(
            currentSlide)) {
          // If it's a header (H1-H6), we almost always want it on a new page if it forces overflow
          // Or if it's just too big.
          
          // Remove node from this slide
          currentSlide.removeChild(
            node);
          
          // Create new slide
          currentSlide =
            createNewSlide(pptState
              .slides.length + 1);
          stage.insertBefore(
            currentSlide, pptState
            .canvas);
          pptState.slides.push(
            currentSlide);
          
          currentSlide.appendChild(
            node);
          
          // What if a SINGLE node is too big? (e.g. massive image or code block)
          if (isOverflowing(
              currentSlide)) {
            // Scale it down? Or make scrollable?
            // For presentation, we usually scale.
            node.style.maxHeight =
              "100%";
            node.style.overflow =
              "hidden";
            // If it's text, maybe font-size reduction?
            // Simple fix for now: prevent breaking layout
            node.style.flex = "1";
            node.style.minHeight =
              "0";
          }
        }
      });
      
      pptState.currentSlideIndex = 0;
      updateCounter();
    }
    
    function createNewSlide(pageNum) {
      const slide = document
        .createElement("div");
      slide.className = "ppt-slide";
      
      const pageNumEl = document
        .createElement("div");
      pageNumEl.className =
        "ppt-page-number";
      pageNumEl.innerText = pageNum;
      slide.appendChild(pageNumEl);
      
      return slide;
    }
    
    function navigateSlide(dir) {
      const newIndex = pptState
        .currentSlideIndex + dir;
      if (newIndex >= 0 && newIndex <
        pptState.slides.length) {
        showSlide(newIndex);
      }
    }
    
    function showSlide(index) {
      // Hide current
      pptState.slides[pptState
          .currentSlideIndex].classList
        .remove("active");
      
      // Show new
      pptState.currentSlideIndex =
        index;
      pptState.slides[index].classList
        .add("active");
      
      updateCounter();
      
      // Clear canvas for new slide (or implement per-slide history later)
      // For simplicity in this version: Clear canvas on slide change
      clearCanvas();
    }
    
    function updateCounter() {
      document.getElementById(
        "pptCounter").innerText = `${
    pptState.currentSlideIndex + 1
  } / ${pptState.slides.length}`;
    }
    
    function handleKeyNav(e) {
      if (!pptState.isActive) return;
      
      if (e.key === "ArrowRight" || e
        .key === "Space") {
        navigateSlide(1);
      } else if (e.key ===
        "ArrowLeft") {
        navigateSlide(-1);
      } else if (e.key === "Escape") {
        exitPresentation();
      }
    }
    
    // --- DRAWING LOGIC ---
    function toggleTool(tool, btn) {
      // Reset buttons
      document
        .querySelectorAll(".ppt-btn")
        .forEach((b) => b.classList
          .remove("active"));
      
      if (pptState.tool === tool) {
        // Toggle off
        pptState.tool = "none";
        pptState.canvas.classList
          .remove("drawing-active");
      } else {
        // Toggle on
        pptState.tool = tool;
        btn.classList.add("active");
        pptState.canvas.classList.add(
          "drawing-active");
        setupDrawingEvents();
      }
    }
    
    function setupDrawingEvents() {
      if (pptState.hasEvents) return;
      pptState.hasEvents = true;
      
      let drawing = false;
      let lastX = 0;
      let lastY = 0;
      
      const getPos = (e) => {
        const rect = pptState.canvas
          .getBoundingClientRect();
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      };
      
      pptState.canvas.addEventListener(
        "mousedown", (e) => {
          if (pptState.tool ===
            "none") return;
          drawing = true;
          const pos = getPos(e);
          lastX = pos.x;
          lastY = pos.y;
        });
      
      pptState.canvas.addEventListener(
        "mousemove", (e) => {
          if (!drawing || pptState
            .tool === "none") return;
          const pos = getPos(e);
          draw(lastX, lastY, pos.x,
            pos.y);
          lastX = pos.x;
          lastY = pos.y;
        });
      
      pptState.canvas.addEventListener(
        "mouseup", () => (drawing =
          false));
      pptState.canvas.addEventListener(
        "mouseout", () => (drawing =
          false));
    }
    
    function draw(x1, y1, x2, y2) {
      const ctx = pptState.ctx;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineCap = "round";
      
      if (pptState.tool === "pen") {
        ctx.globalCompositeOperation =
          "source-over";
        ctx.strokeStyle = pptState
          .color;
        ctx.lineWidth = 3;
      } else if (pptState.tool ===
        "eraser") {
        ctx.globalCompositeOperation =
          "destination-out";
        ctx.lineWidth = 20;
      }
      
      ctx.stroke();
      ctx.closePath();
    }
    
    function clearCanvas() {
      const ctx = pptState.ctx;
      ctx.clearRect(0, 0, pptState
        .canvas.width, pptState.canvas
        .height);
    }
  
