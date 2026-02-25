/* --- COPY & PASTE INTO config.js --- */
let siteConfig = {
  "websiteName": "Test",
  "logoUrl": "https://arlabs07.github.io/alphalabs.github.io/alphalabs.png",
  "faviconUrl": "https://arlabs07.github.io/alphalabs.github.io/alphalabs.png",
  "hostingUrl": "https://arlabs07.github.io/alphalabs.github.io/test",
  "metaDescription": "A demonstration of the ARvia generic website template with rich media and multilingual support.",
  "metaKeywords": "arvia, demo, rich media, video, audio, hindi, code, math",
  "metaAuthor": "Alphalabs",
  "themeColor": "#f97316",
  "copyrightYear": "2025",
  "copyrightHolder": "Alphalabs",
  "contactEmail": "contact@example.com",
  "social": {
    "facebook": "https://facebook.com",
    "twitter": "https://twitter.com",
    "linkedin": "https://linkedin.com"
  }
};
let relatedSites = [
  {
    "order": 1,
    "title": "Official Docs",
    "url": "#"
  },
  {
    "order": 2,
    "title": "Support Portal",
    "url": "#"
  },
  {
    "order": 3,
    "title": "Community Forum",
    "url": "#"
  }
];
let adsConfig = {
  "enabled": false,
  "density": 3,
  "randomize": true,
  "ads": [
    {
      "type": "image",
      "src": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
      "link": "https://example.com",
      "alt": "Digital Workflow",
      "title": "Boost Productivity",
      "text": "Streamline your digital workflow with our new premium tools.",
      "cta": "Get Started"
    },
    {
      "type": "text",
      "title": "Summer Sale!",
      "text": "Flash sale happening now. 50% off on all annual plans.",
      "link": "https://example.com/sale",
      "cta": "View Deals"
    },
    {
      "type": "video",
      "src": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      "link": "https://example.com/video",
      "text": "Experience the thrill of next-gen performance.",
      "cta": "Watch Video"
    }
  ]
};
let customLogs = [];
let pagesDataIframe = [
  {
    "id": "homepage",
    "name": "Home",
    "title": "Welcome to ARvia Test",
    "category": "General",
    "author": "Alphalabs",
    "imageUrl": "https://images.unsplash.com/photo-1499750310159-5254f4127278?q=80&w=1000&auto=format&fit=crop",
    "order": "0",
    "isDefault": true,
    "lastUpdated": "2025-11-22",
    "content": "<h1>Welcome</h1><p>Loading dynamic content...</p>"
  },
  {
    "id": "about",
    "name": "About Us",
    "title": "About ARvia Framework",
    "category": "General",
    "author": "Alphalabs Team",
    "imageUrl": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
    "order": "1",
    "lastUpdated": "2025-11-22",
    "content": "\n      <h1>About ARvia</h1>\n      <p>We build lightweight, responsive, and dynamic web solutions.</p>\n      <img src=\"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop\" alt=\"Team working\">\n      <p>Our mission is to simplify web development while providing powerful features like AI integration, rich media support, and accessibility tools.</p>\n    "
  },
  {
    "id": "media-samples",
    "name": "Rich Media",
    "title": "Rich Media Capabilities",
    "category": "Media",
    "author": "Design Team",
    "imageUrl": "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop",
    "order": "2",
    "lastUpdated": "2025-11-22",
    "content": "\n      <h1>Rich Media Support</h1>\n      <p>This section demonstrates various media types supported natively by the framework, including our high-performance custom players.</p>\n      <p>Explore the sub-pages to see video, audio, and embedded content in action.</p>\n    "
  },
  {
    "id": "video-demo",
    "name": "Video Player",
    "title": "Advanced Video Player",
    "category": "Media",
    "author": "Media Dev",
    "imageUrl": "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop",
    "parentId": "media-samples",
    "order": "2.1",
    "lastUpdated": "2025-11-22",
    "content": "\n      <h1>Video Playback</h1>\n      <p>Our framework automatically upgrades standard video tags into fully responsive, accessible custom players with advanced controls.</p>\n      \n      <h3>Local/Streamed MP4</h3>\n      <video controls width=\"100%\" poster=\"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg\">\n        <source src=\"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n      </video>\n      <p><em>Big Buck Bunny - Open Source Movie</em></p>\n\n      <h3>Another Sample</h3>\n      <video controls width=\"100%\" poster=\"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg\">\n        <source src=\"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n      </video>\n    "
  },
  {
    "id": "audio-demo",
    "name": "Audio Player",
    "title": "High Fidelity Audio",
    "category": "Media",
    "author": "Sound Engineer",
    "imageUrl": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
    "parentId": "media-samples",
    "order": "2.2",
    "lastUpdated": "2025-11-22",
    "content": "\n      <h1>Audio Integration</h1>\n      <p>Listen to high-quality audio directly in the browser with our waveform-inspired player interface.</p>\n      \n      <div style=\"background: var(--bg-secondary); padding: 20px; border-radius: 8px; margin-bottom: 20px;\">\n        <h3>Jazz Collection</h3>\n        <audio controls style=\"width: 100%;\">\n          <source src=\"https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav\" type=\"audio/wav\">\n          Your browser does not support the audio element.\n        </audio>\n      </div>\n\n      <div style=\"background: var(--bg-secondary); padding: 20px; border-radius: 8px;\">\n        <h3>Classic Synth</h3>\n        <audio controls style=\"width: 100%;\">\n          <source src=\"https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav\" type=\"audio/wav\">\n           Your browser does not support the audio element.\n        </audio>\n      </div>\n    "
  },
  {
    "id": "embeds-demo",
    "name": "YouTube & Maps",
    "title": "External Embeds",
    "category": "Media",
    "author": "Integrations",
    "imageUrl": "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop",
    "parentId": "audio-demo",
    "order": "2.2.1",
    "lastUpdated": "2025-11-24T04:40:48.370Z",
    "content": "      <h1>External Embeds</h1>\n      <p>Embed content from third-party providers seamlessly.</p>\n      \n      <h2>YouTube</h2>\n      <iframe width=\"100%\" height=\"400\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      \n      <h2>Google Maps</h2>\n      <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1622646636734!5m2!1sen!2sus\" width=\"100%\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>\n    \n<h1>Welcome to our Homepage!</h1>\n<h2>Subtitle for Welcome</h2>\n<h3>Deeper dive</h3>\n<p>This is the main page of your website. You can add more content here.</p>\n<h2>Preview Demonstrations</h2>\n<p>Click on the links below to see the media preview overlay in action.</p>\n<ul>\n    <li><a href=\"https://arlabs07.github.io/alphalabs.github.io/alphalabs.png\" title=\"Image Preview\">Preview an\n            Image</a></li>\n    <li><a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" title=\"YouTube Preview\">Preview a YouTube video</a></li>\n    <li><a href=\"https://bestmotivationalstoryhindi.wordpress.com/wp-content/uploads/2016/10/tsrikasam.pdf\"\n            title=\"PDF Preview\">Preview a PDF document</a></li>\n    <li><a href=\"https://www.google.com/maps/place/Eiffel+Tower/\" title=\"Google Maps Preview\">Preview Google Maps</a>\n    </li>\n</ul>\n<p>Feel free to edit this text in the editor view.</p>\n<h2>Another Section</h2>\n<div class=\"formula-block-iframe\">\n\n      $$ \\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}+777777777777777666666666666666666666 $$\n</div>\n<ul>\n    <li>This is a list</li>\n    <li>Unordered</li>\n</ul>\n<table>\n    <tr>\n        <th>Row/Col</th>\n        <th>Col 1</th>\n        <th>Col 2</th>\n        <th>Col 3</th>\n        <th>Col 4</th>\n        <th>Col 5</th>\n        <th>Col 6</th>\n        <th>Col 7</th>\n        <th>Col 8</th>\n        <th>Col 9</th>\n        <th>Col 10</th>\n        <th>Col 11</th>\n        <th>Col 12</th>\n        <th>Col 13</th>\n        <th>Col 14</th>\n        <th>Col 15</th>\n        <th>Col 16</th>\n        <th>Col 17</th>\n        <th>Col 18</th>\n        <th>Col 19</th>\n        <th>Col 20</th>\n    </tr>\n    <tr>\n        <td>Row 1</td>\n        <td>R1C1</td>\n        <td>R1C2</td>\n        <td>R1C3</td>\n        <td>R1C4</td>\n        <td>R1C5</td>\n        <td>R1C6</td>\n        <td>R1C7</td>\n        <td>R1C8</td>\n        <td>R1C9</td>\n        <td>R1C10</td>\n        <td>R1C11</td>\n        <td>R1C12</td>\n        <td>R1C13</td>\n        <td>R1C14</td>\n        <td>R1C15</td>\n        <td>R1C16</td>\n        <td>R1C17</td>\n        <td>R1C18</td>\n        <td>R1C19</td>\n        <td>R1C20</td>\n    </tr>\n    <tr>\n        <td>Row 2</td>\n        <td>R2C1</td>\n        <td>R2C2</td>\n        <td>R2C3</td>\n        <td>R2C4</td>\n        <td>R2C5</td>\n        <td>R2C6</td>\n        <td>R2C7</td>\n        <td>R2C8</td>\n        <td>R2C9</td>\n        <td>R2C10</td>\n        <td>R2C11</td>\n        <td>R2C12</td>\n        <td>R2C13</td>\n        <td>R2C14</td>\n        <td>R2C15</td>\n        <td>R2C16</td>\n        <td>R2C17</td>\n        <td>R2C18</td>\n        <td>R2C19</td>\n        <td>R2C20</td>\n    </tr>\n    <tr>\n        <td>Row 3</td>\n        <td>R3C1</td>\n        <td>R3C2</td>\n        <td>R3C3</td>\n        <td>R3C4</td>\n        <td>R3C5</td>\n        <td>R3C6</td>\n        <td>R3C7</td>\n        <td>R3C8</td>\n        <td>R3C9</td>\n        <td>R3C10</td>\n        <td>R3C11</td>\n        <td>R3C12</td>\n        <td>R3C13</td>\n        <td>R3C14</td>\n        <td>R3C15</td>\n        <td>R3C16</td>\n        <td>R3C17</td>\n        <td>R3C18</td>\n        <td>R3C19</td>\n        <td>R3C20</td>\n    </tr>\n    <tr>\n        <td>Row 4</td>\n        <td>R4C1</td>\n        <td>R4C2</td>\n        <td>R4C3</td>\n        <td>R4C4</td>\n        <td>R4C5</td>\n        <td>R4C6</td>\n        <td>R4C7</td>\n        <td>R4C8</td>\n        <td>R4C9</td>\n        <td>R4C10</td>\n        <td>R4C11</td>\n        <td>R4C12</td>\n        <td>R4C13</td>\n        <td>R4C14</td>\n        <td>R4C15</td>\n        <td>R4C16</td>\n        <td>R4C17</td>\n        <td>R4C18</td>\n        <td>R4C19</td>\n        <td>R4C20</td>\n    </tr>\n    <tr>\n        <td>Row 5</td>\n        <td>R5C1</td>\n        <td>R5C2</td>\n        <td>R5C3</td>\n        <td>R5C4</td>\n        <td>R5C5</td>\n        <td>R5C6</td>\n        <td>R5C7</td>\n        <td>R5C8</td>\n        <td>R5C9</td>\n        <td>R5C10</td>\n        <td>R5C11</td>\n        <td>R5C12</td>\n        <td>R5C13</td>\n        <td>R5C14</td>\n        <td>R5C15</td>\n        <td>R5C16</td>\n        <td>R5C17</td>\n        <td>R5C18</td>\n        <td>R5C19</td>\n        <td>R5C20</td>\n    </tr>\n    <tr>\n        <td>Row 6</td>\n        <td>R6C1</td>\n        <td>R6C2</td>\n        <td>R6C3</td>\n        <td>R6C4</td>\n        <td>R6C5</td>\n        <td>R6C6</td>\n        <td>R6C7</td>\n        <td>R6C8</td>\n        <td>R6C9</td>\n        <td>R6C10</td>\n        <td>R6C11</td>\n        <td>R6C12</td>\n        <td>R6C13</td>\n        <td>R6C14</td>\n        <td>R6C15</td>\n        <td>R6C16</td>\n        <td>R6C17</td>\n        <td>R6C18</td>\n        <td>R6C19</td>\n        <td>R6C20</td>\n    </tr>\n</table>\n<p><a href=\"https://alphalabs.netlify.app/arvia\" target=\"_blank\">External Url</a></p>\n<pre><code class=\"language-html\"><p> hello </p></code></pre>\n<img src=\"https://alphalabs.netlify.app/arvia.jpg\" alt=\"Arvia\" loading=\"lazy\" style=\"max-width: 100%; height: auto; border-radius: 0.3125rem; margin-bottom: 0.9375rem;\"><iframe\n    src=\"https://bestmotivationalstoryhindi.wordpress.com/wp-content/uploads/2016/10/tsrikasam.pdf\" loading=\"lazy\"\n    title=\"PDF Document\"\n    style=\"width: 100%; height: 37.5rem; border: none; border-radius: 0.3125rem; margin-bottom: 0.9375rem;\"></iframe><iframe\n    src=\"https://alphalabs.netlify.app/arvia\" loading=\"lazy\" title=\"Embedded Website\"\n    style=\"width: 100%; height: 25rem; border: none; border-radius: 0.3125rem; margin-bottom: 0.9375rem;\"></iframe><iframe\n    src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" loading=\"lazy\" title=\"YouTube Video\" frameborder=\"0\"\n    allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\n    style=\"width: 100%; height: 25rem; border: none; border-radius: 0.3125rem; margin-bottom: 0.9375rem;\"></iframe><iframe\n    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625693765!2d2.292292615674489!3d48.85837007928736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e29641f45c1%3A0x86e66cf25f73373c!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1616000000000!5m2!1sen!2sfr\"\n    loading=\"lazy\" title=\"Google Maps Embed - Eiffel Tower\"\n    style=\"width: 100%; height: 28.125rem; border: none; border-radius: 0.3125rem; margin-bottom: 0.9375rem;\"\n    allowfullscreen=\"\"\n    referrerpolicy=\"no-referrer-when-downgrade\"></iframe><strong>Bold</strong><em>This is italics</em>\n<h2>Q&A Section</h2>\n<div class=\"qa-block\" data-qa-type=\"qa\" data-question=\"Question answer\" data-answer=\"Queen\">\n    <p><strong>Q:</strong> Question answer</p>\n    <p><strong>A:</strong> Queen</p>\n</div>\n<div class=\"qa-block\" data-qa-type=\"true-false\" data-statement=\"True false\" data-answer=\"True\">\n    <p><strong>Statement:</strong> True false</p>\n    <p><strong>Answer:</strong> True</p>\n</div>\n<div class=\"qa-block\" data-qa-type=\"fill-in-blanks\" data-sentence=\"Fill in the BLANK\"\n    data-answers=\"[\"Blank\"]\">\n    <p>Fill in the <span style=\"text-decoration: underline; font-weight: bold;\">BLANK</span></p>\n    <p><strong>Answers:</strong> Blank</p>\n</div>\n<div class=\"qa-block\" data-qa-type=\"multiple-choice\" data-question=\"This is a multiple choice\"\n    data-options=\"[\"Multiple\",\"choice\",\"question\"]\" data-answer=\"Multiple\">\n    <p><strong>Q:</strong> This is a multiple choice</p>\n    <ul>\n        <li>Multiple</li>\n        <li>choice</li>\n        <li>question</li>\n    </ul>\n    <p><strong>Correct Answer:</strong> Multiple</p>\n</div>"
  },
  {
    "id": "formatting",
    "name": "Formatting",
    "title": "Style Guide",
    "category": "Documentation",
    "author": "Tech Writer",
    "imageUrl": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop",
    "order": "3",
    "lastUpdated": "2025-11-24T04:24:50.884Z",
    "content": "<h1>Markdown Showcase</h1><p>This page demonstrates various Markdown elements and the code syntax highlighting.</p><h2>Text Formatting</h2><p>This is a standard paragraph. You can have <strong>bold text</strong>, <em>italic text</em>, and <strong><em>both</em></strong>. You can also use <del>strikethrough</del>. To highlight something, you can use the <mark>mark tag</mark>.</p><p>Here is some <code>inline code</code> for small snippets.</p><p>And here is a link to the <a href=\"https://www.markdownguide.org\">Markdown Guide</a>.</p><hr><h2>Headings</h2><h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3><h4>Heading 4</h4><h5>Heading 5</h5><h6>Heading 6</h6><hr><h2>Blockquotes</h2><blockquote><p>This is a blockquote. It\\'s often used for quoting text from another source. It can span multiple paragraphs if you like.</p><p>A wise person once said something profound here.</p><footer>—A Wise Person</footer></blockquote><hr><h2>Lists</h2><h3>Unordered List</h3><ul><li>First item</li><li>Second item</li><li>Third item<ul><li>Nested item 1</li><li>Nested item 2</li></ul></li></ul><h3>Ordered List</h3><ol><li>Step one</li><li>Step two</li><li>Step three<ol><li>Sub-step A</li><li>Sub-step B</li></ol></li></ol><h3>Task List (Styled)</h3><ul style=\"list-style-type: none; padding-left: 0;\"><li><input type=\"checkbox\" checked disabled style=\"margin-right: 8px;\"> Finish project proposal</li><li><input type=\"checkbox\" disabled style=\"margin-right: 8px;\"> Review team feedback</li><li><input type=\"checkbox\" disabled style=\"margin-right: 8px;\"> Prepare for the presentation</li></ul><hr><h2>Tables</h2><table><thead><tr><th>Syntax</th><th>Description</th><th style=\"text-align:center;\">Supports</th></tr></thead><tbody><tr><td>Header</td><td>Title</td><td style=\"text-align:center;\">✅</td></tr><tr><td>Paragraph</td><td>Text</td><td style=\"text-align:center;\">✅</td></tr><tr><td>Image</td><td>![alt](src)</td><td style=\"text-align:center;\">❌</td></tr></tbody></table><hr><h2>Image</h2><p>Here is an image with an alt text.</p><img src=\"https://arlabs07.github.io/alphalabs.github.io/alphalabs.png\" alt=\"Alphalabs Logo\" style=\"max-width:150px; background: white; padding: 10px; border-radius: 6px;\"><hr><h2>Code Blocks</h2><p>Code blocks are displayed using the \\'GitHub Dark\\' theme.</p><h3>JavaScript Example</h3><pre><code class=\"language-javascript\">function greet(name) {\\n  // A simple greeting function\\n  console.log(`Hello, ${name}!`);\\n}\\n\\ngreet(\\'World\\');</code></pre><h3>HTML Example</h3><pre><code class=\"language-html\">&lt;!DOCTYPE html&gt;\\n&lt;html lang=\"en\"&gt;\\n&lt;head&gt;\\n  &lt;meta charset=\"UTF-8\"&gt;\\n  &lt;title&gt;My Page&lt;/title&gt;\\n&lt;/head&gt;\\n&lt;body&gt;\\n  &lt;h1&gt;Welcome&lt;/h1&gt;\\n&lt;/body&gt;\\n&lt;/html&gt;</code></pre><h3>CSS Example</h3><pre><code class=\"language-css\">body {\\n  font-family: sans-serif;\\n  line-height: 1.5;\\n  background-color: #f0f0f0; /* Light gray */\\n  color: #333;\\n}</code></pre><h3>Python Example</h3><pre><code class=\"language-python\">def factorial(n):\\n    \"\"\"Calculates the factorial of a non-negative integer.\"\"\"\\n    if n == 0:\\n        return 1\\n    else:\\n        return n * factorial(n-1)\\n\\n# Print the factorial of 5\\nprint(factorial(5))</code></pre><hr><h2>Additional HTML Elements Showcase</h2><h3>Details & Summary</h3><p>The details element creates a disclosure widget in which information is visible only when the widget is toggled into an \"open\" state.</p><details><summary>Click to see more details</summary><p>Here is some hidden content that is revealed when you click the summary above. This is useful for FAQs, accordions, or hiding supplementary information.</p></details><details open><summary>An initially open details element</summary><p>This one starts in the \"open\" state because the <code>open</code> attribute is present.</p></details><h3>Keyboard Input</h3><p>To indicate user input from a keyboard, use the <code>&lt;kbd&gt;</code> tag. For example: <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy, or <kbd>Cmd</kbd> + <kbd>C</kbd> on macOS.</p><h3>Abbreviations</h3><p>The <abbr title=\"HyperText Markup Language\">HTML</abbr> is the standard markup language for documents designed to be displayed in a web browser. Hover over \"HTML\" to see the full text.</p><h3>Text-level Semantics</h3><ul><li>This is <s>struck-through text</s> using the `s` tag, for things that are no longer correct.</li><li>This is <ins>inserted text</ins> using the `ins` tag, to mark an addition.</li><li>This is <u>unarticulated, non-textual annotation</u> using the `u` tag (e.g., marking a spelling error).</li><li>This text has a <sub>subscript</sub> part (H<sub>2</sub>O).</li><li>And this text has a <sup>superscript</sup> part (E=mc<sup>2</sup>).</li><li>This page was last updated on <time datetime=\"2025-11-02\">November 2nd, 2025</time>.</li></ul><h3>Progress & Meter</h3><p>The <code>&lt;progress&gt;</code> element represents the completion progress of a task.</p><p><strong>Task Progress:</strong></p><progress value=\"70\" max=\"100\">70%</progress><p>The <code>&lt;meter&gt;</code> element represents a scalar measurement within a known range (a gauge).</p><p><strong>Disk Usage (Good):</strong> <meter value=\"0.5\" min=\"0\" max=\"1\" low=\"0.7\" high=\"0.9\" optimum=\"0.5\">50%</meter></p><p><strong>Fuel Level (Warning):</strong> <meter value=\"0.85\" min=\"0\" max=\"1\" low=\"0.3\" high=\"0.9\" optimum=\"1\">85%</meter></p><p><strong>Risk Score (Danger):</strong> <meter value=\"0.95\" min=\"0\" max=\"1\" low=\"0.3\" high=\"0.7\" optimum=\"0.1\">95%</meter></p><h3>Figure & Figcaption</h3><p>A self-contained piece of content, with an optional caption.</p><figure><img src=\"https://alphalabs.netlify.app/arvia.jpg\" alt=\"A beautiful landscape representing ARvia\\'s capabilities.\" loading=\"lazy\" style=\"border: none; margin-bottom: 0;\"><figcaption>Fig.1 - A sample image with a descriptive caption.</figcaption></figure>"
  },
  {
    "id": "code-math",
    "name": "Code & Math",
    "title": "Syntax & Formulae",
    "category": "Documentation",
    "author": "Dev Ops",
    "imageUrl": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    "parentId": "formatting",
    "order": "3.1",
    "lastUpdated": "2025-11-22",
    "content": "\n      <h1>Code Syntax Highlighting</h1>\n      <p>Automatic language detection and highlighting.</p>\n      \n      <h3>JavaScript</h3>\n      <pre><code>function helloWorld() {\n  console.log(\"Hello, ARvia!\");\n  return true;\n}</code></pre>\n\n      <h3>Python</h3>\n      <pre><code>def fibonacci(n):\n    if n <= 1:\n        return n\n    else:\n        return fibonacci(n-1) + fibonacci(n-2)</code></pre>\n\n      <h1>Mathematical Formulas (LaTeX)</h1>\n      <p>Rendered using MathJax.</p>\n      <p>Inline math: The mass-energy equivalence is $E = mc^2$.</p>\n      <p>Display math:</p>\n      $$ \\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi} $$\n    "
  },
  {
    "id": "tables-quotes",
    "name": "Tables & Quotes",
    "title": "Data Presentation",
    "category": "Documentation",
    "author": "Analyst",
    "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    "parentId": "formatting",
    "order": "3.2",
    "lastUpdated": "2025-11-24T04:27:37.053Z",
    "content": "      <h1>Data Tables</h1>\n      <table>\n        <thead>\n          <tr>\n            <th>ID</th>\n            <th>Product</th>\n            <th>Status</th>\n            <th>Price</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>001</td>\n            <td>Premium Plan</td>\n            <td><span style=\"color:#4ade80\">Active</span></td>\n            <td>$99.00</td>\n          </tr>\n          <tr>\n            <td>002</td>\n            <td>Basic Plan</td>\n            <td><span style=\"color:#facc15\">Paused</span></td>\n            <td>$29.00</td>\n          </tr>\n          <tr>\n            <td>003</td>\n            <td>Enterprise</td>\n            <td><span style=\"color:#f97316\">Contact</span></td>\n            <td>Custom</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <h1>Blockquotes</h1>\n      <blockquote>\n        \"The web is more a social creation than a technical one. I designed it for a social effect - to help people work together - and not as a technical toy.\"\n        <footer>— Tim Berners-Lee</footer>\n      </blockquote>\n    "
  },
  {
    "id": "hindi-test",
    "name": "भाषा परीक्षण (Language)",
    "title": "Multilingual Support",
    "category": "Language",
    "author": "Localization Team",
    "imageUrl": "https://images.unsplash.com/photo-1523726491678-bf852e717f63?q=80&w=1000&auto=format&fit=crop",
    "order": "4",
    "lastUpdated": "2025-11-24T04:28:24.146Z",
    "content": "<h1>Welcome to our Homepage!</h1><h2>Subtitle for Welcome</h2><h3>Deeper dive</h3><p>This is the main page of your website. You can add more content here.</p><h2>Preview Demonstrations</h2><p>Click on the links below to see the media preview overlay in action.</p><ul><li><a href=\"https://arlabs07.github.io/alphalabs.github.io/alphalabs.png\" title=\"Image Preview\">Preview an Image</a></li><li><a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" title=\"YouTube Preview\">Preview a YouTube video</a></li><li><a href=\"https://bestmotivationalstoryhindi.wordpress.com/wp-content/uploads/2016/10/tsrikasam.pdf\" title=\"PDF Preview\">Preview a PDF document</a></li><li><a href=\"https://www.google.com/maps/place/Eiffel+Tower/\" title=\"Google Maps Preview\">Preview Google Maps</a></li></ul><p>Feel free to edit this text in the editor view.</p><h2>Another Section</h2><div class=\"formula-block-iframe\">$$\\\\int_0^\\\\infty e^{-x^2} dx = \\\\frac{\\\\sqrt{\\\\pi}}{2}+77777777777777777777777777777$$</div><ul><li>This is a list</li><li>Unordered</li></ul><table><tr><th>Row/Col</th><th>Col 1</th><th>Col 2</th><th>Col 3</th><th>Col 4</th><th>Col 5</th><th>Col 6</th><th>Col 7</th><th>Col 8</th><th>Col 9</th><th>Col 10</th><th>Col 11</th><th>Col 12</th><th>Col 13</th><th>Col 14</th><th>Col 15</th><th>Col 16</th><th>Col 17</th><th>Col 18</th><th>Col 19</th><th>Col 20</th></tr><tr><td>Row 1</td><td>R1C1</td><td>R1C2</td><td>R1C3</td><td>R1C4</td><td>R1C5</td><td>R1C6</td><td>R1C7</td><td>R1C8</td><td>R1C9</td><td>R1C10</td><td>R1C11</td><td>R1C12</td><td>R1C13</td><td>R1C14</td><td>R1C15</td><td>R1C16</td><td>R1C17</td><td>R1C18</td><td>R1C19</td><td>R1C20</td></tr><tr><td>Row 2</td><td>R2C1</td><td>R2C2</td><td>R2C3</td><td>R2C4</td><td>R2C5</td><td>R2C6</td><td>R2C7</td><td>R2C8</td><td>R2C9</td><td>R2C10</td><td>R2C11</td><td>R2C12</td><td>R2C13</td><td>R2C14</td><td>R2C15</td><td>R2C16</td><td>R2C17</td><td>R2C18</td><td>R2C19</td><td>R2C20</td></tr><tr><td>Row 3</td><td>R3C1</td><td>R3C2</td><td>R3C3</td><td>R3C4</td><td>R3C5</td><td>R3C6</td><td>R3C7</td><td>R3C8</td><td>R3C9</td><td>R3C10</td><td>R3C11</td><td>R3C12</td><td>R3C13</td><td>R3C14</td><td>R3C15</td><td>R3C16</td><td>R3C17</td><td>R3C18</td><td>R3C19</td><td>R3C20</td></tr><tr><td>Row 4</td><td>R4C1</td><td>R4C2</td><td>R4C3</td><td>R4C4</td><td>R4C5</td><td>R4C6</td><td>R4C7</td><td>R4C8</td><td>R4C9</td><td>R4C10</td><td>R4C11</td><td>R4C12</td><td>R4C13</td><td>R4C14</td><td>R4C15</td><td>R4C16</td><td>R4C17</td><td>R4C18</td><td>R4C19</td><td>R4C20</td></tr><tr><td>Row 5</td><td>R5C1</td><td>R5C2</td><td>R5C3</td><td>R5C4</td><td>R5C5</td><td>R5C6</td><td>R5C7</td><td>R5C8</td><td>R5C9</td><td>R5C10</td><td>R5C11</td><td>R5C12</td><td>R5C13</td><td>R5C14</td><td>R5C15</td><td>R5C16</td><td>R5C17</td><td>R5C18</td><td>R5C19</td><td>R5C20</td></tr><tr><td>Row 6</td><td>R6C1</td><td>R6C2</td><td>R6C3</td><td>R6C4</td><td>R6C5</td><td>R6C6</td><td>R6C7</td><td>R6C8</td><td>R6C9</td><td>R6C10</td><td>R6C11</td><td>R6C12</td><td>R6C13</td><td>R6C14</td><td>R6C15</td><td>R6C16</td><td>R6C17</td><td>R6C18</td><td>R6C19</td><td>R6C20</td></tr></table><p><a href=\"https://alphalabs.netlify.app/arvia\" target=\"_blank\">External Url</a></p><pre><code class=\"language-html\">&lt;p&gt; hello &lt;/p&gt;</code></pre><img src=\"https://alphalabs.netlify.app/arvia.jpg\" alt=\"Arvia\" loading=\"lazy\" style=\"max-width: 100%; height: auto; border-radius: 0.3125rem; margin-bottom: 0.9375rem;\"><iframe src=\"https://bestmotivationalstoryhindi.wordpress.com/wp-content/uploads/2016/10/tsrikasam.pdf\" loading=\"lazy\" title=\"PDF Document\" style=\"width: 100%; height: 37.5rem; border: none; border-radius: 0.3125rem; margin-bottom: 0.9375rem;\"></iframe><iframe src=\"https://alphalabs.netlify.app/arvia\" loading=\"lazy\" title=\"Embedded Website\" style=\"width: 100%; height: 25rem; border: none; border-radius: 0.3125rem; margin-bottom: 0.9375rem;\"></iframe><iframe src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" loading=\"lazy\" title=\"YouTube Video\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen style=\"width: 100%; height: 25rem; border: none; border-radius: 0.3125rem; margin-bottom: 0.9375rem;\"></iframe><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625693765!2d2.292292615674489!3d48.85837007928736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e29641f45c1%3A0x86e66cf25f73373c!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1616000000000!5m2!1sen!2sfr\" loading=\"lazy\" title=\"Google Maps Embed - Eiffel Tower\" style=\"width: 100%; height: 28.125rem; border: none; border-radius: 0.3125rem; margin-bottom: 0.9375rem;\" allowfullscreen=\"\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe><strong>Bold</strong><em>This is italics</em><h2>Q&A Section</h2><div class=\"qa-block\" data-qa-type=\"qa\" data-question=\"Question answer\" data-answer=\"Queen\"><p><strong>Q:</strong> Question answer</p><p><strong>A:</strong> Queen</p></div><div class=\"qa-block\" data-qa-type=\"true-false\" data-statement=\"True false\" data-answer=\"True\"><p><strong>Statement:</strong> True false</p><p><strong>Answer:</strong> True</p></div><div class=\"qa-block\" data-qa-type=\"fill-in-blanks\" data-sentence=\"Fill in the BLANK\" data-answers=\"[&quot;Blank&quot;]\"><p>Fill in the <span style=\"text-decoration: underline; font-weight: bold;\">BLANK</span></p><p><strong>Answers:</strong> Blank</p></div><div class=\"qa-block\" data-qa-type=\"multiple-choice\" data-question=\"This is a multiple choice\" data-options=\"[&quot;Multiple&quot;,&quot;choice&quot;,&quot;question&quot;]\" data-answer=\"Multiple\"><p><strong>Q:</strong> This is a multiple choice</p><ul><li>Multiple</li><li>choice</li><li>question</li></ul><p><strong>Correct Answer:</strong> Multiple</p></div>'"
  },
  {
    "id": "मेरी-कहानी",
    "name": "मेरी कहानी (Story)",
    "title": "My Story in Hindi",
    "category": "Language",
    "author": "अल्फा लैब्स",
    "imageUrl": "https://images.unsplash.com/photo-1546188994-07c34f295f52?q=80&w=1000&auto=format&fit=crop",
    "parentId": "hindi-test",
    "order": "4.1",
    "lastUpdated": "2025-11-22",
    "content": "\n      <h1>नमस्ते दुनिया! (Hello World)</h1>\n      <p>यह पृष्ठ हिंदी भाषा के समर्थन का परीक्षण करने के लिए है। (This page is to test Hindi language support.)</p>\n      <p>यदि आप इसे पढ़ सकते हैं, तो यूनिकोड एन्कोडिंग सही ढंग से काम कर रही है।</p>\n      <ul>\n        <li>बिंदु १</li>\n        <li>बिंदु २</li>\n        <li>बिंदु ३</li>\n      </ul>\n      <p>URL हैश की जाँच करें: <code>#मेरी-कहानी</code></p>\n    "
  },
  {
    "id": "Manufacturing industries",
    "name": "Manufacturing industries",
    "category": "Geography",
    "order": "5",
    "content": "<h1>📘 Manufacturing Industries</h1>\n<hr>\n<p><a name=\"introduction\"></a></p>\n<h2>🏭 Introduction to Manufacturing</h2>\n<p><strong>Manufacturing</strong> is the production of goods in large quantities after processing raw materials into more valuable finished products . Manufacturing transforms primary materials obtained from agriculture and mining into secondary products through industrial processes .</p>\n<h3>Key Examples of Manufacturing Process</h3>\n<ul>\n<li><strong>Paper</strong> manufactured from wood</li>\n<li><strong>Sugar</strong> from sugarcane  </li>\n<li><strong>Iron and steel</strong> from iron ore</li>\n<li><strong>Aluminium</strong> from bauxite</li>\n<li><strong>Cloth</strong> manufactured from yarn (itself an industrial product)</li>\n</ul>\n<h3>Manufacturing Flowchart</h3>\n<pre><code class=\"language-mermaid\">flowchart LR\n    A[Raw Materials&lt;br/&gt;Primary Sector] --&gt; B[Processing&lt;br/&gt;Secondary Sector]\n    B --&gt; C[Finished Goods&lt;br/&gt;Manufacturing]\n    C --&gt; D[Services&lt;br/&gt;Tertiary Sector]\n</code></pre>\n<p><strong>📌 Key Point:</strong> People employed in secondary activities manufacture primary materials into finished goods - workers in steel factories, car manufacturing, breweries, textile industries, and bakeries all fall into this category .</p>\n<hr>\n<p><a name=\"importance\"></a></p>\n<h2>💡 Importance of Manufacturing</h2>\n<p>Manufacturing is considered the <strong>backbone of economic development</strong> and a key indicator of a country&#39;s economic strength .</p>\n<h3>Four Pillars of Manufacturing Importance</h3>\n<p><strong>1. Agricultural Modernization &amp; Employment Diversification</strong></p>\n<ul>\n<li>Helps modernize agriculture (backbone of Indian economy)</li>\n<li>Reduces heavy dependence on agricultural income</li>\n<li>Provides jobs in secondary and tertiary sectors</li>\n<li>Creates alternative livelihood options for farmers</li>\n</ul>\n<p><strong>2. Poverty &amp; Unemployment Eradication</strong></p>\n<ul>\n<li>Industrial development is a precondition for eliminating unemployment and poverty</li>\n<li>Main philosophy behind public sector industries and joint sector ventures</li>\n<li>Aims at reducing regional disparities by establishing industries in tribal and backward areas</li>\n</ul>\n<p><strong>3. Foreign Exchange &amp; Trade Expansion</strong></p>\n<ul>\n<li>Export of manufactured goods expands trade and commerce</li>\n<li>Brings in much-needed foreign exchange</li>\n<li>Strengthens India&#39;s position in international markets</li>\n</ul>\n<p><strong>4. Value Addition &amp; Prosperity</strong></p>\n<ul>\n<li>Countries transforming raw materials into diverse finished goods of higher value are prosperous</li>\n<li>India&#39;s prosperity depends on increasing and diversifying manufacturing industries quickly</li>\n</ul>\n<h3>Agriculture-Industry Symbiosis</h3>\n<p><strong>📌 Critical Understanding:</strong> Agriculture and industry are NOT exclusive - they move hand-in-hand .</p>\n<p><strong>How Agro-Industries Boost Agriculture:</strong></p>\n<ul>\n<li>Raise agricultural productivity significantly</li>\n<li>Depend on agriculture for raw materials</li>\n<li>Supply products to farmers: irrigation pumps, fertilizers, insecticides, pesticides, plastic/PVC pipes, machines, and tools</li>\n<li>Development and competitiveness of manufacturing industry assists agriculturists in increasing production and efficiency</li>\n</ul>\n<h3>Globalization Context</h3>\n<p>In the present-day globalized world, Indian industries must be:</p>\n<ul>\n<li><strong>Efficient and competitive</strong> (not just self-sufficient)</li>\n<li><strong>At par in quality</strong> with international market standards</li>\n<li>Capable of competing in international markets</li>\n</ul>\n<hr>\n<p><a name=\"classification\"></a></p>\n<h2>📊 Classification of Industries</h2>\n<p>Industries can be classified based on <strong>six different criteria</strong> :</p>\n<h3>1️⃣ Based on Source of Raw Materials</h3>\n<p><strong>A. Agro-Based Industries</strong></p>\n<ul>\n<li>Cotton textiles, woollen textiles, jute textiles, silk textiles</li>\n<li>Rubber, sugar, tea, coffee, edible oil</li>\n</ul>\n<p><strong>B. Mineral-Based Industries</strong></p>\n<ul>\n<li>Iron and steel, cement, aluminium</li>\n<li>Machine tools, petrochemicals</li>\n</ul>\n<h3>2️⃣ According to Main Role</h3>\n<p><strong>A. Basic/Key Industries</strong></p>\n<ul>\n<li>Supply their products as raw materials to manufacture other goods</li>\n<li><strong>Examples:</strong> Iron and steel, copper smelting, aluminium smelting</li>\n<li>Form the foundation for other industries</li>\n</ul>\n<p><strong>B. Consumer Industries</strong></p>\n<ul>\n<li>Produce goods for direct use by consumers</li>\n<li><strong>Examples:</strong> Sugar, toothpaste, paper, sewing machines, fans</li>\n</ul>\n<h3>3️⃣ Based on Capital Investment</h3>\n<p><strong>A. Small-Scale Industry</strong></p>\n<ul>\n<li>Defined with reference to maximum investment allowed on assets of a unit</li>\n<li><strong>Present limit:</strong> Maximum investment of ₹1 crore</li>\n<li>This limit has changed over time</li>\n</ul>\n<p><strong>B. Large-Scale Industry</strong></p>\n<ul>\n<li>Investment exceeds small-scale industry limits</li>\n</ul>\n<h3>4️⃣ Based on Ownership</h3>\n<p><strong>A. Public Sector</strong></p>\n<ul>\n<li>Owned and operated by government agencies</li>\n<li><strong>Examples:</strong> BHEL (Bharat Heavy Electricals Limited), SAIL (Steel Authority of India Limited)</li>\n</ul>\n<p><strong>B. Private Sector</strong></p>\n<ul>\n<li>Owned and operated by individuals or group of individuals</li>\n<li><strong>Examples:</strong> TISCO, Bajaj Auto Ltd., Dabur Industries</li>\n</ul>\n<p><strong>C. Joint Sector</strong></p>\n<ul>\n<li>Jointly run by state and individuals/group of individuals</li>\n<li><strong>Example:</strong> Oil India Ltd. (OIL) - jointly owned by public and private sector</li>\n</ul>\n<p><strong>D. Cooperative Sector</strong></p>\n<ul>\n<li>Owned and operated by producers/suppliers of raw materials, workers, or both</li>\n<li>Pool resources and share profits/losses proportionately</li>\n<li><strong>Examples:</strong> Sugar industry in Maharashtra, coir industry in Kerala</li>\n</ul>\n<h3>5️⃣ Based on Bulk &amp; Weight</h3>\n<p><strong>A. Heavy Industries</strong></p>\n<ul>\n<li>Use heavy and bulky raw materials and produce heavy goods</li>\n<li><strong>Example:</strong> Iron and steel industry</li>\n</ul>\n<p><strong>B. Light Industries</strong></p>\n<ul>\n<li>Use light raw materials and produce light goods</li>\n<li><strong>Example:</strong> Electrical goods industries</li>\n</ul>\n<p><strong>Classification Activity from NCERT:</strong><br>Heavy Industries: Oil, Brassware, Shipbuilding, Automobiles<br>Light Industries: Knitting needles, Sewing machines, Electric bulbs, Fuse wires, Watches, Paint brushes </p>\n<hr>\n<p><a name=\"agro-based\"></a></p>\n<h2>🌾 Agro-Based Industries</h2>\n<p>Industries based on agricultural raw materials include cotton, jute, silk, woollen textiles, sugar, and edible oil .</p>\n<h3>🧵 Textile Industry</h3>\n<p>The textile industry occupies a <strong>unique position</strong> in the Indian economy due to :</p>\n<ul>\n<li>Significant contribution to industrial production</li>\n<li>Major employment generation</li>\n<li>Substantial foreign exchange earnings</li>\n<li><strong>Only industry</strong> self-reliant and complete in the value chain (raw material to highest value-added products)</li>\n</ul>\n<hr>\n<h4>Cotton Textiles Industry</h4>\n<p><strong>Historical Evolution:</strong></p>\n<ul>\n<li><strong>Ancient India:</strong> Cotton textiles produced with hand spinning and handloom weaving techniques</li>\n<li><strong>18th Century:</strong> Power-looms introduced</li>\n<li><strong>Colonial Period:</strong> Traditional industries suffered setback - couldn&#39;t compete with mill-made cloth from England</li>\n<li><strong>1854:</strong> First successful textile mill established in <strong>Mumbai</strong></li>\n<li><strong>Two World Wars:</strong> India (British colony) supplied cloth to U.K., boosting cotton textile development</li>\n</ul>\n<p><strong>Locational Factors - Early Concentration:</strong></p>\n<p>The industry was initially concentrated in <strong>Maharashtra and Gujarat</strong> cotton-growing belt due to :</p>\n<ul>\n<li>Availability of raw cotton</li>\n<li>Access to market</li>\n<li>Transport including accessible port facilities</li>\n<li>Availability of labour</li>\n<li><strong>Moist climate</strong> (favorable for cotton processing)</li>\n</ul>\n<p><strong>Industry Linkages:</strong><br>Cotton textile industry has close links with:</p>\n<ul>\n<li><strong>Agriculture:</strong> Provides living to farmers, cotton boll pluckers</li>\n<li><strong>Processing:</strong> Workers in ginning, spinning, weaving, dyeing, designing, packaging, tailoring, sewing</li>\n<li><strong>Supporting Industries:</strong> Creates demand for chemicals, dyes, packaging materials, engineering works</li>\n</ul>\n<p><strong>Present Distribution Pattern:</strong></p>\n<ul>\n<li><strong>Spinning:</strong> Continues to be centralized in Maharashtra, Gujarat, and Tamil Nadu</li>\n<li><strong>Weaving:</strong> Highly decentralized to incorporate traditional skills and designs in cotton, silk, zari, embroidery</li>\n<li><strong>Quality Issue:</strong> India has world-class spinning production, but weaving supplies low-quality fabric as it cannot utilize much high-quality yarn produced domestically</li>\n<li><strong>Methods:</strong> Weaving done by handloom, powerloom, and in mills</li>\n</ul>\n<p><strong>📌 Do You Know Box - Khadi Significance:</strong></p>\n<ul>\n<li>Handspun khadi provides large-scale employment to weavers in their homes as cottage industry</li>\n<li><strong>Mahatma Gandhi&#39;s Vision:</strong> Emphasized spinning yarn and weaving khadi for self-reliance and employment generation</li>\n<li><strong>Policy Question:</strong> Why is it important to keep mill sector loomage lower than power loom and handloom? (To preserve employment and traditional skills)</li>\n</ul>\n<hr>\n<h4>Jute Textiles Industry</h4>\n<p><strong>India&#39;s Position:</strong></p>\n<ul>\n<li><strong>Largest producer</strong> of raw jute and jute goods globally</li>\n<li><strong>Second place</strong> as exporter after Bangladesh</li>\n</ul>\n<p><strong>Historical Development:</strong></p>\n<ul>\n<li><strong>1855:</strong> First jute mill set up near Kolkata at <strong>Rishra</strong></li>\n<li><strong>1947 Partition Impact:</strong> Jute mills remained in India, but <strong>three-fourths of jute producing area</strong> went to Bangladesh (erstwhile East Pakistan)</li>\n</ul>\n<p><strong>Geographical Concentration:</strong><br>Most mills located in <strong>West Bengal</strong>, mainly along <strong>banks of Hugli River</strong> in a narrow belt </p>\n<p><strong>Factors for Hugli Basin Location:</strong></p>\n<ol>\n<li><strong>Proximity</strong> to jute producing areas</li>\n<li><strong>Inexpensive water transport</strong> supported by good railway, roadway, and waterway network</li>\n<li><strong>Abundant water</strong> for processing raw jute</li>\n<li><strong>Cheap labour</strong> from West Bengal and adjoining states (Bihar, Odisha, Uttar Pradesh)</li>\n<li><strong>Kolkata</strong> as large urban centre provides banking, insurance, and port facilities for jute goods export</li>\n</ol>\n<hr>\n<h4>Sugar Industry</h4>\n<p><strong>India&#39;s Global Position:</strong></p>\n<ul>\n<li><strong>Second</strong> as world producer of sugar</li>\n<li><strong>First place</strong> in production of <strong>gur and khandsari</strong></li>\n</ul>\n<p><strong>Raw Material Characteristics:</strong></p>\n<ul>\n<li>Bulky in nature</li>\n<li>Sucrose content reduces during haulage/transportation</li>\n<li>Therefore, mills located close to sugarcane growing areas</li>\n</ul>\n<p><strong>Distribution of Mills:</strong><br>Located in: Uttar Pradesh, Bihar, Maharashtra, Karnataka, Tamil Nadu, Andhra Pradesh, Gujarat, Punjab, Haryana, and Madhya Pradesh</p>\n<ul>\n<li><strong>60% of mills</strong> are in Uttar Pradesh and Bihar</li>\n</ul>\n<p><strong>Seasonal Nature &amp; Cooperative Sector:</strong></p>\n<ul>\n<li>Industry is seasonal in nature</li>\n<li>Ideally suited to the <strong>cooperative sector</strong></li>\n<li>Cooperatives pool resources and share profits/losses proportionately</li>\n</ul>\n<p><strong>Recent Trend - Shift to South &amp; West:</strong><br>Mills are shifting and concentrating in <strong>southern and western states</strong>, especially <strong>Maharashtra</strong>, because:</p>\n<ol>\n<li><strong>Higher sucrose content</strong> in sugarcane produced here</li>\n<li><strong>Cooler climate</strong> ensures longer crushing season</li>\n<li><strong>Cooperatives more successful</strong> in these states</li>\n</ol>\n<hr>\n<p><a name=\"mineral-based\"></a></p>\n<h2>⛏️ Mineral-Based Industries</h2>\n<p>Industries using minerals and metals as raw materials are mineral-based industries .</p>\n<hr>\n<h3>🏗️ Iron and Steel Industry</h3>\n<p><strong>Significance:</strong> Iron and steel is the <strong>basic industry</strong> since all other industries (heavy, medium, light) depend on it for machinery .</p>\n<p><strong>Uses of Steel:</strong></p>\n<ul>\n<li>Manufacture variety of engineering goods</li>\n<li>Construction material</li>\n<li>Defence equipment</li>\n<li>Medical, telephonic, scientific equipment</li>\n<li>Variety of consumer goods</li>\n</ul>\n<p><strong>Development Index:</strong> Production and consumption of steel is often regarded as the <strong>index of a country&#39;s development</strong> .</p>\n<h3>Iron &amp; Steel Manufacturing Process Flowchart</h3>\n<pre><code class=\"language-mermaid\">flowchart TD\n    A[Iron Ore] --&gt; D[Blast Furnace]\n    B[Coking Coal] --&gt; D\n    C[Limestone] --&gt; D\n    E[Manganese&lt;br/&gt;small quantity] --&gt; D\n    D --&gt; F[Molten Iron]\n    F --&gt; G[Steel Making&lt;br/&gt;Process]\n    G --&gt; H[Steel Ingots]\n    H --&gt; I[Rolling &amp; Shaping]\n    I --&gt; J[Finished Steel&lt;br/&gt;Products]\n</code></pre>\n<p><strong>Raw Material Requirements:</strong></p>\n<ul>\n<li><strong>Ratio:</strong> Iron ore : Coking coal : Limestone = <strong>4 : 2 : 1</strong> (approximately)</li>\n<li>Small quantities of <strong>manganese</strong> required to harden steel</li>\n</ul>\n<p><strong>Classification as Heavy Industry:</strong></p>\n<ul>\n<li>All raw materials are heavy and bulky</li>\n<li>Finished goods are heavy and bulky</li>\n<li>Entails heavy transportation costs</li>\n<li>Requires efficient transport network for distribution to markets and consumers</li>\n</ul>\n<p><strong>Major Concentration Zone:</strong><br><strong>Chhotanagpur Plateau Region</strong> has maximum concentration due to:</p>\n<ol>\n<li><strong>Low cost</strong> of iron ore</li>\n<li><strong>High grade raw materials</strong> in proximity</li>\n<li><strong>Cheap labour</strong> availability</li>\n<li><strong>Vast growth potential</strong> in home market</li>\n</ol>\n<p><strong>📌 Map Reference:</strong> India&#39;s Iron and Steel Plants distribution map shows major plants across the country </p>\n<hr>\n<h3>⚡ Aluminium Smelting Industry</h3>\n<p><strong>Position:</strong> Second most important metallurgical industry in India </p>\n<p><strong>Properties of Aluminium:</strong></p>\n<ul>\n<li>Light weight</li>\n<li>Resistant to corrosion</li>\n<li>Good conductor of heat</li>\n<li>Malleable</li>\n<li>Becomes strong when mixed with other metals</li>\n</ul>\n<p><strong>Uses:</strong></p>\n<ul>\n<li>Manufacture of aircraft</li>\n<li>Utensils</li>\n<li>Wires</li>\n<li>Substitute for steel, copper, zinc, and lead in various industries</li>\n</ul>\n<h3>Aluminium Manufacturing Process</h3>\n<pre><code class=\"language-mermaid\">flowchart LR\n    A[Bauxite&lt;br/&gt;bulky, dark reddish rock] --&gt; B[Alumina Extraction]\n    B --&gt; C[Electrolytic Smelting&lt;br/&gt;requires high electricity]\n    C --&gt; D[Aluminium Metal]\n</code></pre>\n<p><strong>Location of Smelting Plants:</strong><br>Odisha, West Bengal, Kerala, Uttar Pradesh, Chhattisgarh, Maharashtra, Tamil Nadu </p>\n<p><strong>Prime Locational Factors:</strong></p>\n<ol>\n<li><strong>Regular supply of electricity</strong></li>\n<li><strong>Assured source of raw material</strong> (bauxite) at minimum cost</li>\n</ol>\n<hr>\n<h3>🏢 Cement Industry</h3>\n<p><strong>Importance:</strong> Essential for construction activities - houses, factories, bridges, roads, airports, dams, commercial establishments </p>\n<p><strong>Raw Material Requirements:</strong></p>\n<ul>\n<li><strong>Limestone</strong> (bulky and heavy)</li>\n<li><strong>Silica</strong></li>\n<li><strong>Alumina</strong>  </li>\n<li><strong>Gypsum</strong></li>\n<li><strong>Coal and electric power</strong></li>\n<li>Rail transportation needed</li>\n</ul>\n<p><strong>Historical Development:</strong></p>\n<ul>\n<li><strong>1904:</strong> First cement plant set up in <strong>Chennai</strong></li>\n<li><strong>After Independence:</strong> Industry expanded significantly</li>\n</ul>\n<p><strong>Economically Viable Location:</strong><br>Areas with good access to:</p>\n<ul>\n<li>Raw material sources</li>\n<li>Transportation network</li>\n<li>Market demand</li>\n</ul>\n<p><strong>Strategic Location:</strong><br>Industry has strategically located plants in <strong>Gujarat</strong> with suitable access to markets in <strong>Gulf countries</strong> </p>\n<hr>\n<p><a name=\"chemical\"></a></p>\n<h2>🧪 Chemical Industries</h2>\n<p>The chemical industry in India is <strong>fast growing and diversifying</strong>, comprising both large and small-scale manufacturing units .</p>\n<h3>Two Major Sectors</h3>\n<p><strong>A. Inorganic Chemicals:</strong></p>\n<ul>\n<li><strong>Sulphuric Acid:</strong> Used to manufacture fertilizers, synthetic fibers, plastics, adhesives, paints, dye-stuffs</li>\n<li><strong>Nitric Acid</strong></li>\n<li><strong>Alkalies</strong></li>\n<li><strong>Soda Ash:</strong> Used to make glass, soaps, detergents, paper</li>\n<li><strong>Caustic Soda</strong></li>\n<li>These industries are <strong>widely spread</strong> across the country</li>\n</ul>\n<p><strong>B. Organic Chemicals:</strong></p>\n<ul>\n<li>Include <strong>petrochemicals</strong></li>\n<li>Used for manufacturing: synthetic fibers, synthetic rubber, plastics, dye-stuffs, drugs, pharmaceuticals</li>\n<li>Plants located <strong>near oil refineries or petrochemical plants</strong></li>\n</ul>\n<p><strong>📌 Key Characteristic:</strong> Chemical industry is its <strong>own largest consumer</strong> - basic chemicals undergo processing to produce other chemicals for industrial application, agriculture, or direct consumer markets </p>\n<hr>\n<h3>🌱 Fertilizer Industry</h3>\n<p><strong>Products Manufactured:</strong></p>\n<ol>\n<li><strong>Nitrogenous fertilizers</strong> (mainly urea)</li>\n<li><strong>Phosphatic fertilizers</strong> and Ammonium Phosphate (DAP)</li>\n<li><strong>Complex fertilizers</strong> - combination of Nitrogen (N), Phosphate (P), and Potash (K)</li>\n</ol>\n<p><strong>📌 Important Note:</strong> Potash is <strong>entirely imported</strong> as India does not have any reserves of commercially usable potash or potassium compounds </p>\n<p><strong>Expansion After Green Revolution:</strong><br>Industry expanded to several parts of the country</p>\n<p><strong>Major Producing States (contribute half of fertilizer production):</strong><br>Gujarat, Tamil Nadu, Uttar Pradesh, Punjab, Kerala </p>\n<p><strong>Other Significant Producers:</strong><br>Andhra Pradesh, Odisha, Rajasthan, Bihar, Maharashtra, Assam, West Bengal, Goa, Delhi, Madhya Pradesh, Karnataka </p>\n<hr>\n<p><a name=\"automobile\"></a></p>\n<h2>🚗 Automobile Industry</h2>\n<p><strong>Purpose:</strong> Provides vehicles for quick transport of goods, services, and passengers </p>\n<p><strong>Products Manufactured:</strong></p>\n<ul>\n<li>Trucks</li>\n<li>Buses</li>\n<li>Cars</li>\n<li>Motorcycles</li>\n<li>Scooters</li>\n<li>Three-wheelers</li>\n<li>Multi-utility vehicles</li>\n</ul>\n<p><strong>Impact of Liberalization:</strong></p>\n<ul>\n<li>Coming of <strong>new and contemporary models</strong> stimulated market demand</li>\n<li>Led to healthy growth including passenger cars, two-wheelers, and three-wheelers</li>\n</ul>\n<p><strong>Major Manufacturing Centres:</strong><br>Delhi, Gurugram, Mumbai, Pune, Chennai, Kolkata, Lucknow, Indore, Hyderabad, Jamshedpur, Bengaluru </p>\n<hr>\n<p><a name=\"it-electronics\"></a></p>\n<h2>💻 Information Technology &amp; Electronics Industry</h2>\n<p><strong>Wide Product Range:</strong><br>Transistor sets, televisions, telephones, cellular telecom, telephone exchanges, radars, computers, and telecommunication equipment </p>\n<p><strong>Electronic Capital of India:</strong> <strong>Bengaluru</strong> has emerged as the electronic capital </p>\n<p><strong>Other Important Centres:</strong><br>Mumbai, Delhi, Hyderabad, Pune, Chennai, Kolkata, Lucknow, Coimbatore </p>\n<p><strong>Major Industry Concentration:</strong><br>Bengaluru, Noida, Mumbai, Chennai, Hyderabad, Pune </p>\n<p><strong>Impact:</strong></p>\n<ul>\n<li><strong>Major employment generation</strong></li>\n<li>Continuing growth in <strong>hardware and software</strong> is key to IT industry success in India</li>\n</ul>\n<p><strong>📌 Map Reference:</strong> Software Technology Parks distribution across India </p>\n<hr>\n<p><a name=\"pollution\"></a></p>\n<h2>⚠️ Industrial Pollution &amp; Environmental Degradation</h2>\n<p>While industries contribute significantly to India&#39;s economic growth and development, the <strong>increase in pollution and environmental degradation cannot be overlooked</strong> .</p>\n<h3>Four Types of Industrial Pollution</h3>\n<h4>1️⃣ Air Pollution</h4>\n<p><strong>Causes:</strong></p>\n<ul>\n<li>High proportion of undesirable gases: <strong>sulphur dioxide, carbon monoxide</strong></li>\n<li>Airborne particulate materials: dust, sprays, mist, smoke</li>\n</ul>\n<p><strong>Sources:</strong></p>\n<ul>\n<li>Chemical and paper factories</li>\n<li>Brick kilns</li>\n<li>Refineries and smelting plants</li>\n<li>Burning of fossil fuels in factories ignoring pollution norms</li>\n<li><strong>Toxic gas leaks</strong> (very hazardous with long-term effects)</li>\n</ul>\n<p><strong>📌 Do You Know:</strong> Bhopal Gas Tragedy occurred due to toxic gas leak </p>\n<p><strong>Effects:</strong><br>Adversely affects human health, animals, plants, buildings, and atmosphere as a whole </p>\n<hr>\n<h4>2️⃣ Water Pollution</h4>\n<p><strong>Causes:</strong><br>Organic and inorganic industrial wastes and effluents discharged into rivers </p>\n<p><strong>Main Culprits:</strong></p>\n<ul>\n<li>Paper and pulp industries</li>\n<li>Chemical industries</li>\n<li>Textile and dyeing industries</li>\n<li>Petroleum refineries</li>\n<li>Tanneries</li>\n<li>Electroplating industries</li>\n</ul>\n<p><strong>Pollutants Discharged:</strong><br>Dyes, detergents, acids, salts, heavy metals (lead, mercury), pesticides, fertilizers, synthetic chemicals with carbon, plastics, rubber </p>\n<p><strong>Major Solid Wastes:</strong></p>\n<ul>\n<li>Fly ash</li>\n<li>Phospho-gypsum</li>\n<li>Iron and steel slags</li>\n</ul>\n<p><strong>Thermal Pollution:</strong></p>\n<ul>\n<li>Occurs when hot water from factories and thermal plants is drained into rivers/ponds before cooling</li>\n<li><strong>Effect:</strong> Harmful to aquatic life</li>\n</ul>\n<p><strong>Nuclear Pollution:</strong></p>\n<ul>\n<li>Wastes from nuclear power plants, nuclear and weapon production facilities</li>\n<li>Cause cancers, birth defects, and miscarriages</li>\n</ul>\n<p><strong>Soil-Water Pollution Link:</strong></p>\n<ul>\n<li>Dumping of wastes (glass, harmful chemicals, industrial effluents, packaging, salts, garbage) renders soil useless</li>\n<li>Rainwater percolates carrying pollutants to ground, contaminating groundwater</li>\n</ul>\n<hr>\n<h4>3️⃣ Land/Soil Pollution</h4>\n<p><strong>Causes:</strong></p>\n<ul>\n<li>Dumping of wastes</li>\n<li>Glass, harmful chemicals</li>\n<li>Industrial effluents</li>\n<li>Packaging materials</li>\n<li>Salts and garbage</li>\n</ul>\n<p><strong>Effect:</strong> Renders soil useless for agricultural and other activities</p>\n<hr>\n<h4>4️⃣ Noise Pollution</h4>\n<p><strong>Sources:</strong></p>\n<ul>\n<li>Industrial machinery</li>\n<li>Construction activities</li>\n<li>Factory equipment</li>\n<li>Generators</li>\n<li>Saws</li>\n<li>Pneumatic and electric drills</li>\n</ul>\n<p><strong>Effects:</strong></p>\n<ul>\n<li>Irritation and anger</li>\n<li>Hearing impairment</li>\n<li>Increased heart rate</li>\n<li>Increased blood pressure</li>\n<li>Other physiological effects</li>\n<li>Unwanted sound is an irritant and source of stress</li>\n</ul>\n<hr>\n<p><a name=\"control\"></a></p>\n<h2>🌱 Control of Environmental Degradation</h2>\n<p><strong>Critical Fact:</strong> Every litre of wastewater discharged by industry <strong>pollutes eight times the quantity of freshwater</strong> </p>\n<h3>Water Pollution Reduction Measures</h3>\n<p><strong>Three Key Strategies:</strong></p>\n<ol>\n<li><p><strong>Minimizing Water Use</strong></p>\n<ul>\n<li>Reusing and recycling water in two or more successive stages</li>\n</ul>\n</li>\n<li><p><strong>Rainwater Harvesting</strong></p>\n<ul>\n<li>To meet water requirements</li>\n</ul>\n</li>\n<li><p><strong>Treatment Before Release</strong></p>\n<ul>\n<li>Treating hot water and effluents before releasing into rivers and ponds</li>\n</ul>\n</li>\n</ol>\n<h3>Three-Phase Industrial Effluent Treatment</h3>\n<pre><code class=\"language-mermaid\">flowchart TD\n    A[Industrial Wastewater] --&gt; B[Primary Treatment&lt;br/&gt;Mechanical Means]\n    B --&gt; C[Screening, Grinding,&lt;br/&gt;Flocculation, Sedimentation]\n    C --&gt; D[Secondary Treatment&lt;br/&gt;Biological Process]\n    D --&gt; E[Tertiary Treatment&lt;br/&gt;Biological, Chemical, Physical]\n    E --&gt; F[Recycling of Wastewater]\n    F --&gt; G[Reuse in Industry]\n</code></pre>\n<p><strong>Phase A - Primary Treatment (Mechanical Means):</strong></p>\n<ul>\n<li>Screening</li>\n<li>Grinding</li>\n<li>Flocculation</li>\n<li>Sedimentation</li>\n</ul>\n<p><strong>Phase B - Secondary Treatment:</strong></p>\n<ul>\n<li>Biological process</li>\n</ul>\n<p><strong>Phase C - Tertiary Treatment:</strong></p>\n<ul>\n<li>Biological, chemical, and physical processes</li>\n<li>Involves recycling of wastewater</li>\n</ul>\n<hr>\n<h3>Air Pollution Control Measures</h3>\n<p><strong>Particulate Matter Reduction:</strong><br>Fitting smoke stacks to factories with:</p>\n<ul>\n<li>Electrostatic precipitators</li>\n<li>Fabric filters</li>\n<li>Scrubbers</li>\n<li>Inertial separators</li>\n</ul>\n<p><strong>Smoke Reduction:</strong></p>\n<ul>\n<li>Using <strong>oil or gas instead of coal</strong> in factories</li>\n</ul>\n<hr>\n<h3>Noise Pollution Control</h3>\n<p><strong>Equipment-Based Solutions:</strong></p>\n<ul>\n<li>Machinery and equipment redesigned to increase energy efficiency and reduce noise</li>\n<li>Generators fitted with <strong>silencers</strong></li>\n<li>Noise-absorbing materials used</li>\n</ul>\n<p><strong>Personal Protection:</strong></p>\n<ul>\n<li>Use of earplugs</li>\n<li>Use of earphones</li>\n</ul>\n<hr>\n<h3>Legal &amp; Policy Measures</h3>\n<p><strong>Groundwater Protection:</strong></p>\n<ul>\n<li>Overdrawing of groundwater reserves by industry needs to be <strong>regulated legally</strong> where there is threat to groundwater resources</li>\n</ul>\n<hr>\n<h3>Sustainable Development Challenge</h3>\n<p><strong>Integration Required:</strong><br>Economic development must be integrated with environmental concerns </p>\n<p><strong>Five Key Approaches:</strong></p>\n<ol>\n<li><p><strong>Optimum Utilization</strong></p>\n<ul>\n<li>Adopting latest techniques</li>\n<li>Upgrading existing equipment</li>\n</ul>\n</li>\n<li><p><strong>Waste Minimization</strong></p>\n<ul>\n<li>Maximizing ash utilization</li>\n</ul>\n</li>\n<li><p><strong>Green Belts</strong></p>\n<ul>\n<li>For nurturing ecological balance</li>\n<li>Addressing afforestation through special purpose vehicles</li>\n</ul>\n</li>\n<li><p><strong>Pollution Reduction</strong></p>\n<ul>\n<li>Ash pond management</li>\n<li>Ash water recycling system</li>\n<li>Liquid waste management</li>\n</ul>\n</li>\n<li><p><strong>Monitoring</strong></p>\n<ul>\n<li>Ecological monitoring and reviews</li>\n<li>Online database management for all power stations</li>\n</ul>\n</li>\n</ol>\n<hr>\n<p><a name=\"case-study\"></a></p>\n<h2>🏆 Case Study: NTPC Shows the Way</h2>\n<p><strong>NTPC (National Thermal Power Corporation):</strong> Major power providing corporation in India </p>\n<p><strong>ISO Certification:</strong> EMS (Environment Management System) 14001 </p>\n<p><strong>Proactive Approach:</strong><br>NTPC preserves natural environment and resources (water, oil, gas, fuels) at locations where power plants are being set up </p>\n<h3>NTPC&#39;s Environmental Initiatives</h3>\n<p><strong>Made Possible Through:</strong></p>\n<ol>\n<li><p>✅ Optimum utilization of equipment by adopting latest techniques and upgrading existing equipment</p>\n</li>\n<li><p>✅ Minimizing waste generation by maximizing ash utilization</p>\n</li>\n<li><p>✅ Providing green belts for nurturing ecological balance and addressing afforestation</p>\n</li>\n<li><p>✅ Reducing environmental pollution through:</p>\n<ul>\n<li>Ash pond management</li>\n<li>Ash water recycling system</li>\n<li>Liquid waste management</li>\n</ul>\n</li>\n<li><p>✅ Ecological monitoring, reviews, and online database management for all power stations</p>\n</li>\n</ol>\n<p><strong>Example:</strong> Ramagundam plant (pictured in NCERT) demonstrates these practices </p>\n",
    "lastUpdated": "2025-11-24T07:38:25.331Z"
  },
  {
    "id": "Nationalism in India",
    "name": "Nationalism in India",
    "category": "History",
    "order": "6",
    "content": "<h1><strong>Nationalism in India</strong></h1>\n<h2><strong>Introduction</strong></h2>\n<p><strong>Modern nationalism</strong> in India emerged through the <strong>anti-colonial movement</strong> . Different social groups united through their shared experience of <strong>colonial oppression</strong>, though each class interpreted <strong>swaraj (freedom)</strong> differently . The Congress under <strong>Mahatma Gandhi</strong> attempted to forge unity among diverse groups, though this unity emerged through conflicts and compromises .</p>\n<h2><strong>1. The First World War, Khilafat and Non-Cooperation</strong></h2>\n<h3><strong>1.1 Impact of World War I on India</strong></h3>\n<ul>\n<li><strong>Economic hardships</strong> created by the war transformed Indian politics after 1919 </li>\n<li><strong>Defence expenditure</strong> increased hugely, financed through war loans and increased taxes </li>\n<li><strong>Customs duties</strong> were raised and <strong>income tax</strong> introduced for the first time </li>\n<li><strong>Prices doubled</strong> between 1913 and 1918, causing extreme hardship for common people </li>\n<li>Villages were forced to supply soldiers through <strong>forced recruitment</strong>, causing widespread anger in rural areas </li>\n<li><strong>Crop failures</strong> in 1918-19 and 1920-21 resulted in acute food shortages </li>\n<li><strong>Influenza epidemic</strong> accompanied the famines </li>\n<li>According to the <strong>1921 census</strong>, 12 to 13 million people died due to famines and epidemic</li>\n</ul>\n<hr>\n<h3><strong>1.2 The Idea of Satyagraha</strong></h3>\n<ul>\n<li><strong>Mahatma Gandhi</strong> returned to India in January 1915 from South Africa </li>\n<li><strong>Satyagraha</strong> emphasized the power of truth and the need to search for truth </li>\n<li>Core principles of Satyagraha:<ul>\n<li>If the cause was true and the struggle against injustice, <strong>physical force</strong> was unnecessary </li>\n<li>A <strong>satyagrahi</strong> could win through <strong>non-violence</strong> without vengeance or aggression </li>\n<li>Victory achieved by appealing to the <strong>conscience of the oppressor</strong> </li>\n<li>People, including oppressors, should be <strong>persuaded</strong> to see truth, not forced </li>\n<li>Gandhi believed the <strong>dharma of non-violence</strong> could unite all Indians</li>\n</ul>\n</li>\n</ul>\n<h4><strong>Early Satyagraha Movements</strong></h4>\n<ul>\n<li><strong>Champaran Satyagraha (1917)</strong>: Organized in Bihar to inspire peasants against the oppressive <strong>plantation system</strong> </li>\n<li><strong>Kheda Satyagraha (1917)</strong>: Supported peasants in Gujarat affected by crop failure and plague epidemic who demanded relaxed <strong>revenue collection</strong> </li>\n<li><strong>Ahmedabad Satyagraha (1918)</strong>: Organized among <strong>cotton mill workers</strong></li>\n</ul>\n<hr>\n<h3><strong>1.3 The Rowlatt Act (1919)</strong></h3>\n<ul>\n<li>Passed hurriedly through the <strong>Imperial Legislative Council</strong> despite united opposition from Indian members </li>\n<li><strong>Key provisions</strong>:<ul>\n<li>Gave government enormous powers to repress political activities </li>\n<li>Allowed <strong>detention of political prisoners</strong> without trial for two years</li>\n</ul>\n</li>\n<li>Gandhi launched nationwide <strong>satyagraha</strong> against this unjust law </li>\n<li>Movement began with a <strong>hartal</strong> on 6 April 1919</li>\n</ul>\n<h4><strong>Spread of the Movement</strong></h4>\n<ul>\n<li>Rallies organized in various cities, workers struck in <strong>railway workshops</strong>, shops closed down </li>\n<li>British administration alarmed by popular upsurge, fearing disruption of railways and telegraph </li>\n<li>Local leaders picked up from <strong>Amritsar</strong>; Gandhi barred from entering <strong>Delhi</strong> </li>\n<li><strong>10 April</strong>: Police in Amritsar fired on peaceful procession, provoking attacks on banks, post offices, railway stations </li>\n<li><strong>Martial law</strong> imposed; <strong>General Dyer</strong> took command</li>\n</ul>\n<h4><strong>Jallianwalla Bagh Massacre (13 April 1919)</strong></h4>\n<ul>\n<li>Large crowd gathered in the enclosed ground of <strong>Jallianwalla Bagh</strong> </li>\n<li>Some came to protest; others attended the annual <strong>Baisakhi fair</strong> </li>\n<li>Many villagers unaware of martial law </li>\n<li><strong>General Dyer</strong> entered, blocked exit points, and opened fire on the crowd </li>\n<li><strong>Hundreds killed</strong>; Dyer&#39;s declared objective was to &quot;produce a moral effect&quot; and create terror</li>\n</ul>\n<h4><strong>Aftermath</strong></h4>\n<ul>\n<li>News of Jallianwalla Bagh spread; crowds took to streets in many <strong>north Indian towns</strong> </li>\n<li>Strikes, clashes with police, attacks on government buildings occurred </li>\n<li><strong>British brutal repression</strong>:<ul>\n<li>Satyagrahis forced to rub noses on ground and crawl on streets </li>\n<li>Forced to do <strong>salaam (salute)</strong> to all sahibs </li>\n<li>People flogged; villages around <strong>Gujranwala (Punjab)</strong> bombed</li>\n</ul>\n</li>\n<li>Gandhi called off the movement seeing violence spread</li>\n</ul>\n<hr>\n<h3><strong>1.4 The Khilafat Movement</strong></h3>\n<ul>\n<li><strong>First World War</strong> ended with defeat of <strong>Ottoman Turkey</strong> </li>\n<li>Rumours of harsh peace treaty on the <strong>Ottoman emperor</strong> (spiritual head of Islamic world - the <strong>Khalifa</strong>) </li>\n<li><strong>Khilafat Committee</strong> formed in Bombay in March 1919 to defend Khalifa&#39;s temporal powers </li>\n<li>Young Muslim leaders like <strong>Muhammad Ali</strong> and <strong>Shaukat Ali</strong> discussed united mass action with Gandhi </li>\n<li>Gandhi saw opportunity to bring <strong>Muslims</strong> under umbrella of unified national movement </li>\n<li>At <strong>Calcutta Congress session (September 1920)</strong>, Gandhi convinced leaders to start <strong>Non-Cooperation Movement</strong> supporting both Khilafat and <strong>swaraj</strong></li>\n</ul>\n<hr>\n<h3><strong>1.5 Why Non-Cooperation?</strong></h3>\n<h4><strong>Gandhi&#39;s Philosophy</strong></h4>\n<ul>\n<li>In <strong>Hind Swaraj (1909)</strong>, Gandhi declared <strong>British rule</strong> was established and survived with <strong>Indian cooperation</strong> </li>\n<li>If Indians refused to cooperate, British rule would collapse within a year and <strong>swaraj</strong> would come</li>\n</ul>\n<h4><strong>Proposed Stages of Non-Cooperation Movement</strong></h4>\n<ul>\n<li><strong>Stage 1</strong>: Surrender of titles awarded by government; boycott of:<ul>\n<li>Civil services </li>\n<li>Army and police </li>\n<li>Courts and legislative councils </li>\n<li>Schools </li>\n<li>Foreign goods</li>\n</ul>\n</li>\n<li><strong>Stage 2</strong>: If government used repression, launch full <strong>civil disobedience campaign</strong></li>\n</ul>\n<h4><strong>Internal Congress Debates</strong></h4>\n<ul>\n<li>Summer 1920: Gandhi and Shaukat Ali toured extensively, mobilizing support </li>\n<li>Many within Congress concerned about proposals </li>\n<li>Reluctant to boycott <strong>council elections</strong> scheduled for November 1920 </li>\n<li>Feared movement might lead to popular violence </li>\n<li>Intense tussle between supporters and opponents (September-December 1920) </li>\n<li><strong>Nagpur Congress session (December 1920)</strong>: Compromise worked out; <strong>Non-Cooperation programme adopted</strong></li>\n</ul>\n<hr>\n<h2><strong>2. Differing Strands within the Movement</strong></h2>\n<h3><strong>2.1 The Movement in the Towns</strong></h3>\n<h4><strong>Middle-Class Participation</strong></h4>\n<ul>\n<li>Movement began in January 1921 with <strong>middle-class participation</strong> in cities </li>\n<li><strong>Students</strong> left government-controlled schools and colleges </li>\n<li><strong>Headmasters and teachers</strong> resigned </li>\n<li><strong>Lawyers</strong> gave up legal practices </li>\n<li>Council elections boycotted in most provinces except <strong>Madras</strong> </li>\n<li><strong>Justice Party</strong> (party of non-Brahmans) in Madras entered councils to gain power usually accessed only by Brahmans</li>\n</ul>\n<h4><strong>Economic Impact</strong></h4>\n<ul>\n<li><strong>Foreign goods</strong> boycotted; <strong>liquor shops</strong> picketed; <strong>foreign cloth</strong> burnt in huge bonfires </li>\n<li>Import of foreign cloth <strong>halved</strong> between 1921 and 1922 (Rs 102 crore to Rs 57 crore) </li>\n<li><strong>Merchants and traders</strong> refused to trade in foreign goods or finance foreign trade </li>\n<li>Production of <strong>Indian textile mills</strong> and <strong>handlooms</strong> increased</li>\n</ul>\n<h4><strong>Reasons for Urban Movement Slowdown</strong></h4>\n<ul>\n<li><strong>Khadi cloth</strong> often more expensive than mass-produced mill cloth </li>\n<li>Poor people could not afford to buy khadi for long </li>\n<li>Alternative Indian institutions slow to come up to replace British ones </li>\n<li>Students and teachers began trickling back to <strong>government schools</strong> </li>\n<li>Lawyers joined back work in <strong>government courts</strong></li>\n</ul>\n<hr>\n<h3><strong>2.2 Rebellion in the Countryside</strong></h3>\n<h4><strong>Awadh Peasant Movement</strong></h4>\n<p><strong>Leadership and Causes:</strong></p>\n<ul>\n<li>Led by <strong>Baba Ramchandra</strong>, a sanyasi who had been to Fiji as <strong>indentured labourer</strong> </li>\n<li>Movement against <strong>talukdars and landlords</strong> who demanded:<ul>\n<li>Exorbitantly high rents </li>\n<li>Variety of other <strong>cesses</strong></li>\n</ul>\n</li>\n<li>Peasants forced to do <strong>begar</strong> (unpaid work at landlords&#39; farms) </li>\n<li>As tenants, had <strong>no security of tenure</strong>; regularly evicted</li>\n</ul>\n<p><strong>Peasant Demands:</strong></p>\n<ul>\n<li>Reduction of <strong>revenue</strong> </li>\n<li>Abolition of <strong>begar</strong> </li>\n<li>Social boycott of oppressive landlords </li>\n<li><strong>Nai-dhobi bandhs</strong> organized by panchayats (depriving landlords of barbers&#39; and washermen&#39;s services)</li>\n</ul>\n<p><strong>Congress Involvement:</strong></p>\n<ul>\n<li>June 1920: <strong>Jawaharlal Nehru</strong> began visiting Awadh villages, understanding grievances </li>\n<li>October 1920: <strong>Oudh Kisan Sabha</strong> set up, headed by Nehru, Baba Ramchandra, and others </li>\n<li>Within a month, <strong>over 300 branches</strong> set up in villages</li>\n</ul>\n<p><strong>Movement Takes Radical Turn (1921):</strong></p>\n<ul>\n<li>Houses of <strong>talukdars and merchants</strong> attacked </li>\n<li><strong>Bazaars</strong> looted; <strong>grain hoards</strong> taken over </li>\n<li>Local leaders told peasants Gandhi declared <strong>no taxes</strong> to be paid and <strong>land to be redistributed</strong> </li>\n<li>Mahatma&#39;s name invoked to sanction all actions </li>\n<li>Congress leadership unhappy with these developments</li>\n</ul>\n<h4><strong>Tribal Movement in Gudem Hills (Andhra Pradesh)</strong></h4>\n<p><strong>Background:</strong></p>\n<ul>\n<li><strong>Militant guerrilla movement</strong> spread in early 1920s </li>\n<li>Colonial government <strong>closed large forest areas</strong>, preventing people from:<ul>\n<li>Grazing cattle </li>\n<li>Collecting fuelwood and fruits</li>\n</ul>\n</li>\n<li><strong>Traditional rights</strong> denied; <strong>livelihoods</strong> affected </li>\n<li>Forced <strong>begar for road building</strong> provoked revolt</li>\n</ul>\n<p><strong>Alluri Sitaram Raju&#39;s Leadership:</strong></p>\n<ul>\n<li>Claimed special powers: correct astrological predictions, healing, surviving bullet shots </li>\n<li>Rebels proclaimed him an <strong>incarnation of God</strong> </li>\n<li>Talked of Gandhi&#39;s greatness; inspired by <strong>Non-Cooperation Movement</strong> </li>\n<li>Persuaded people to wear <strong>khadi</strong> and give up drinking </li>\n<li>But asserted India could be liberated only through <strong>force, not non-violence</strong> </li>\n<li>Rebels attacked <strong>police stations</strong>, attempted to kill British officials </li>\n<li>Carried on <strong>guerrilla warfare</strong> for achieving swaraj </li>\n<li><strong>Captured and executed in 1924</strong>; became a <strong>folk hero</strong></li>\n</ul>\n<hr>\n<h3><strong>2.3 Swaraj in the Plantations</strong></h3>\n<h4><strong>Plantation Workers&#39; Understanding of Swaraj</strong></h4>\n<ul>\n<li>For <strong>Assam plantation workers</strong>, freedom meant:<ul>\n<li>Right to move freely in and out of confined plantation space </li>\n<li>Retaining link with their original villages</li>\n</ul>\n</li>\n<li><strong>Inland Emigration Act of 1859</strong>: Workers not permitted to leave tea gardens without permission</li>\n</ul>\n<h4><strong>Workers&#39; Response to Non-Cooperation</strong></h4>\n<ul>\n<li>Thousands of workers <strong>defied authorities</strong>, left plantations, headed home </li>\n<li>Believed <strong>Gandhi Raj</strong> was coming and everyone would get land in their villages </li>\n<li>Never reached destination; stranded by <strong>railway and steamer strike</strong> </li>\n<li>Caught by police and <strong>brutally beaten up</strong></li>\n</ul>\n<h4><strong>Diverse Interpretations of Swaraj</strong></h4>\n<ul>\n<li>These movements not defined by Congress programme </li>\n<li>People interpreted <strong>swaraj</strong> in their own ways as end to all suffering </li>\n<li>Yet emotionally related to <strong>all-India agitation</strong> when chanting Gandhi&#39;s name </li>\n<li>Identified with movement beyond their immediate locality</li>\n</ul>\n<h4><strong>Chauri Chaura Incident (February 1922)</strong></h4>\n<ul>\n<li>Peaceful demonstration in bazaar at <strong>Chauri Chaura (Gorakhpur)</strong> turned into violent clash with police </li>\n<li>Gandhi decided to <strong>withdraw Non-Cooperation Movement</strong> </li>\n<li>Felt movement turning violent; <strong>satyagrahis</strong> needed proper training before mass struggles</li>\n</ul>\n<hr>\n<h2><strong>3. Towards Civil Disobedience</strong></h2>\n<h3><strong>3.1 Internal Congress Politics (1922-1929)</strong></h3>\n<h4><strong>Post-Non-Cooperation Developments</strong></h4>\n<ul>\n<li>Some Congress leaders tired of mass struggles, wanted to participate in <strong>provincial council elections</strong> </li>\n<li>Set up by <strong>Government of India Act of 1919</strong> </li>\n<li>Wanted to oppose British policies within councils and demonstrate councils weren&#39;t truly democratic </li>\n<li><strong>C.R. Das</strong> and <strong>Motilal Nehru</strong> formed <strong>Swaraj Party</strong> within Congress for council politics </li>\n<li>Younger leaders like <strong>Jawaharlal Nehru</strong> and <strong>Subhas Chandra Bose</strong> pressed for radical mass agitation and <strong>full independence</strong></li>\n</ul>\n<h4><strong>Factors Reshaping Politics (Late 1920s)</strong></h4>\n<p><strong>Economic Depression:</strong></p>\n<ul>\n<li><strong>Worldwide economic depression</strong> affected India </li>\n<li><strong>Agricultural prices</strong> began falling from 1926, collapsed after 1930 </li>\n<li>Demand for agricultural goods fell; <strong>exports declined</strong> </li>\n<li>Peasants couldn&#39;t sell harvests or pay <strong>revenue</strong> </li>\n<li>By 1930, <strong>countryside in turmoil</strong></li>\n</ul>\n<p><strong>Simon Commission (1928):</strong></p>\n<ul>\n<li>New <strong>Tory government</strong> in Britain constituted <strong>Statutory Commission</strong> under <strong>Sir John Simon</strong> </li>\n<li>Set up to examine constitutional system in India and suggest changes </li>\n<li><strong>Problem</strong>: Commission had <strong>no single Indian member</strong> – all British </li>\n<li>Greeted with slogan <strong>&quot;Go back Simon&quot;</strong> </li>\n<li>All parties including <strong>Congress</strong> and <strong>Muslim League</strong> participated in demonstrations </li>\n<li><strong>Lala Lajpat Rai</strong> assaulted by British police during peaceful demonstration; succumbed to injuries</li>\n</ul>\n<p><strong>Government Response:</strong></p>\n<ul>\n<li>October 1929: Viceroy <strong>Lord Irwin</strong> announced vague offer of <strong>&quot;dominion status&quot;</strong> for India </li>\n<li>Proposed <strong>Round Table Conference</strong> to discuss future constitution </li>\n<li>Did not satisfy Congress leaders</li>\n</ul>\n<h4><strong>Demand for Complete Independence</strong></h4>\n<ul>\n<li>Radicals led by <strong>Nehru</strong> and <strong>Bose</strong> became more assertive </li>\n<li><strong>Liberals and moderates</strong> proposing constitutional system within British dominion gradually lost influence </li>\n<li><strong>December 1929</strong>: Under presidency of <strong>Jawaharlal Nehru</strong>, <strong>Lahore Congress</strong> formalized demand of <strong>&quot;Purna Swaraj&quot;</strong> (complete independence) </li>\n<li><strong>26 January 1930</strong> declared as <strong>Independence Day</strong> </li>\n<li>People to take pledge to struggle for complete independence </li>\n<li>Celebrations attracted little attention </li>\n<li>Gandhi needed to relate abstract idea of freedom to concrete everyday issues</li>\n</ul>\n<hr>\n<h3><strong>3.2 The Salt March and Civil Disobedience Movement</strong></h3>\n<h4><strong>Gandhi&#39;s Strategy</strong></h4>\n<ul>\n<li>Gandhi found <strong>salt</strong> a powerful symbol to unite the nation </li>\n<li><strong>31 January 1930</strong>: Sent letter to <strong>Viceroy Irwin</strong> stating <strong>eleven demands</strong> </li>\n<li>Demands ranged from general interest to specific needs of different classes (industrialists to peasants) </li>\n<li>Idea was to make demands <strong>wide-ranging</strong> so all classes could identify </li>\n<li>Most stirring demand: <strong>abolish the salt tax</strong> </li>\n<li>Salt consumed by rich and poor alike; one of most <strong>essential food items</strong> </li>\n<li>Tax on salt and government <strong>monopoly</strong> over production revealed most <strong>oppressive face of British rule</strong></li>\n</ul>\n<h4><strong>The Ultimatum and Salt March</strong></h4>\n<ul>\n<li>Letter was an <strong>ultimatum</strong>: If demands not fulfilled by 11 March, Congress would launch <strong>civil disobedience</strong> </li>\n<li>Irwin unwilling to negotiate </li>\n<li>Gandhi started famous <strong>salt march</strong> with <strong>78 trusted volunteers</strong> </li>\n<li>March was over <strong>240 miles</strong>: <strong>Sabarmati ashram</strong> to coastal town of <strong>Dandi (Gujarat)</strong> </li>\n<li>Walked for <strong>24 days, about 10 miles a day</strong> </li>\n<li>Thousands came to hear Gandhi wherever he stopped </li>\n<li>Told them meaning of swaraj; urged them to peacefully defy British </li>\n<li><strong>6 April</strong>: Reached Dandi, ceremonially violated law by <strong>manufacturing salt</strong> (boiling sea water)</li>\n</ul>\n<h4><strong>Civil Disobedience vs Non-Cooperation</strong></h4>\n<p><strong>Key Difference:</strong></p>\n<ul>\n<li>People asked not only to <strong>refuse cooperation</strong> (as in 1921-22) </li>\n<li>But also to <strong>break colonial laws</strong></li>\n</ul>\n<p><strong>Spread of Movement:</strong></p>\n<ul>\n<li>Thousands broke <strong>salt law</strong>, manufactured salt, demonstrated at government salt factories </li>\n<li><strong>Foreign cloth</strong> boycotted </li>\n<li><strong>Liquor shops</strong> picketed </li>\n<li>Peasants refused to pay <strong>revenue and chaukidari taxes</strong> </li>\n<li><strong>Village officials</strong> resigned </li>\n<li><strong>Forest people</strong> violated forest laws – entered Reserved Forests to collect wood and graze cattle</li>\n</ul>\n<h4><strong>Government Repression</strong></h4>\n<ul>\n<li>Colonial government began <strong>arresting Congress leaders</strong> one by one </li>\n<li>Led to <strong>violent clashes</strong> in many places </li>\n<li>April 1930: <strong>Abdul Ghaffar Khan</strong> (devout Gandhi disciple) arrested </li>\n<li>Angry crowds demonstrated in <strong>Peshawar</strong> streets, facing armoured cars and police firing; many killed </li>\n<li>When <strong>Gandhi arrested</strong>, industrial workers in <strong>Sholapur</strong> attacked:<ul>\n<li>Police posts </li>\n<li>Municipal buildings </li>\n<li>Law courts </li>\n<li>Railway stations (all symbols of British rule)</li>\n</ul>\n</li>\n<li>Government responded with <strong>brutal repression</strong>:<ul>\n<li>Peaceful satyagrahis attacked </li>\n<li>Women and children beaten </li>\n<li>About <strong>100,000 people arrested</strong></li>\n</ul>\n</li>\n</ul>\n<h4><strong>Gandhi-Irwin Pact (5 March 1931)</strong></h4>\n<ul>\n<li>Gandhi called off movement and entered into pact with Irwin </li>\n<li><strong>Terms</strong>:<ul>\n<li>Gandhi consented to participate in <strong>Round Table Conference</strong> in London </li>\n<li>Government agreed to release <strong>political prisoners</strong></li>\n</ul>\n</li>\n<li><strong>December 1931</strong>: Gandhi went to London for conference </li>\n<li>Negotiations broke down; returned disappointed</li>\n</ul>\n<h4><strong>Movement Relaunched</strong></h4>\n<ul>\n<li>Back in India, discovered government began <strong>new cycle of repression</strong> </li>\n<li><strong>Ghaffar Khan</strong> and <strong>Nehru</strong> in jail </li>\n<li>Congress declared <strong>illegal</strong> </li>\n<li>Measures imposed to prevent meetings, demonstrations, boycotts </li>\n<li>Gandhi <strong>relaunched Civil Disobedience Movement</strong> </li>\n<li>Continued for over a year but <strong>lost momentum by 1934</strong></li>\n</ul>\n<hr>\n<h3><strong>3.3 How Participants Saw the Movement</strong></h3>\n<h4><strong>Rich Peasant Communities</strong></h4>\n<ul>\n<li><strong>Patidars of Gujarat</strong> and <strong>Jats of Uttar Pradesh</strong> active in movement </li>\n<li>Producers of <strong>commercial crops</strong>, hard hit by trade depression and falling prices </li>\n<li><strong>Cash income disappeared</strong>; impossible to pay government&#39;s revenue demand </li>\n<li>Government&#39;s refusal to reduce revenue led to widespread resentment </li>\n<li>Became <strong>enthusiastic supporters</strong>, organizing communities, forcing participation in boycotts </li>\n<li>For them, <strong>swaraj = struggle against high revenues</strong> </li>\n<li><strong>Deeply disappointed</strong> when movement called off in 1931 without revenue revision </li>\n<li>When restarted in 1932, <strong>many refused to participate</strong></li>\n</ul>\n<h4><strong>Poorer Peasantry</strong></h4>\n<ul>\n<li>Not just interested in lowering revenue demand </li>\n<li>Many were <strong>small tenants</strong> cultivating rented land </li>\n<li>As Depression continued, <strong>cash incomes dwindled</strong>, difficult to pay rent </li>\n<li>Wanted <strong>unpaid rent to landlord remitted</strong> </li>\n<li>Joined <strong>radical movements</strong> led by <strong>Socialists and Communists</strong> </li>\n<li>Congress unwilling to support <strong>&quot;no rent&quot; campaigns</strong>, fearing upset to rich peasants and landlords </li>\n<li>Relationship between poor peasants and Congress remained <strong>uncertain</strong></li>\n</ul>\n<h4><strong>Business Classes</strong></h4>\n<p><strong>Rise During WWI:</strong></p>\n<ul>\n<li>Indian <strong>merchants and industrialists</strong> made huge profits during First World War </li>\n<li>Became powerful; keen on expanding business </li>\n<li>Reacted against colonial policies restricting business</li>\n</ul>\n<p><strong>Demands:</strong></p>\n<ul>\n<li>Protection against imports of foreign goods </li>\n<li><strong>Rupee-sterling foreign exchange ratio</strong> to discourage imports</li>\n</ul>\n<p><strong>Organizations Formed:</strong></p>\n<ul>\n<li><strong>Indian Industrial and Commercial Congress (1920)</strong> </li>\n<li><strong>Federation of Indian Chamber of Commerce and Industries (FICCI, 1927)</strong> </li>\n<li>Led by <strong>Purshottamdas Thakurdas</strong> and <strong>G.D. Birla</strong></li>\n</ul>\n<p><strong>Support for Movement:</strong></p>\n<ul>\n<li>Attacked colonial control over Indian economy </li>\n<li>Supported Civil Disobedience when first launched </li>\n<li>Gave <strong>financial assistance</strong>; refused to buy/sell imported goods </li>\n<li>Saw <strong>swaraj</strong> as time when colonial restrictions on business would end</li>\n</ul>\n<p><strong>Withdrawal of Support:</strong></p>\n<ul>\n<li>After failure of Round Table Conference, <strong>no longer uniformly enthusiastic</strong> </li>\n<li>Apprehensive of <strong>militant activities</strong> spread </li>\n<li>Worried about prolonged <strong>business disruption</strong> </li>\n<li>Concerned about growing influence of <strong>socialism</strong> among younger Congress members</li>\n</ul>\n<h4><strong>Industrial Working Classes</strong></h4>\n<ul>\n<li>Did <strong>not participate in large numbers</strong>, except in <strong>Nagpur region</strong> </li>\n<li>As industrialists came closer to Congress, <strong>workers stayed aloof</strong> </li>\n<li>Some workers participated <strong>selectively</strong>, adopting Gandhian ideas like <strong>boycott of foreign goods</strong> </li>\n<li>Used as part of own movements against <strong>low wages and poor working conditions</strong> </li>\n<li><strong>Strikes</strong>: Railway workers (1930), dockworkers (1932) </li>\n<li>1930: Thousands of workers in <strong>Chotanagpur tin mines</strong> wore Gandhi caps, participated in rallies and boycotts </li>\n<li>Congress <strong>reluctant to include workers&#39; demands</strong>, fearing alienation of industrialists and division of anti-imperial forces</li>\n</ul>\n<h4><strong>Women&#39;s Participation</strong></h4>\n<p><strong>Scale of Participation:</strong></p>\n<ul>\n<li><strong>Large-scale participation</strong> was important feature of Civil Disobedience Movement </li>\n<li>During salt march, thousands came out of homes to listen to Gandhi </li>\n<li>Participated in <strong>protest marches</strong>, manufactured salt, picketed foreign cloth and liquor shops </li>\n<li>Many went to <strong>jail</strong> </li>\n<li>In <strong>urban areas</strong>: women from <strong>high-caste families</strong> </li>\n<li>In <strong>rural areas</strong>: women from <strong>rich peasant households</strong></li>\n</ul>\n<p><strong>Limitations:</strong></p>\n<ul>\n<li>Moved by Gandhi&#39;s call, began to see <strong>service to nation as sacred duty</strong> </li>\n<li>But increased public role didn&#39;t mean <strong>radical change</strong> in how women&#39;s position was visualized </li>\n<li>Gandhi convinced women&#39;s duty was to <strong>look after home and hearth</strong>, be good mothers and wives </li>\n<li>Congress long reluctant to allow women to hold <strong>positions of authority</strong> </li>\n<li>Keen only on their <strong>symbolic presence</strong></li>\n</ul>\n<hr>\n<h3><strong>3.4 The Limits of Civil Disobedience</strong></h3>\n<h4><strong>Dalits (Untouchables)</strong></h4>\n<p><strong>Congress Approach:</strong></p>\n<ul>\n<li>Congress long <strong>ignored dalits</strong>, fearing offense to <strong>sanatanis</strong> (conservative high-caste Hindus) </li>\n<li>Gandhi declared <strong>swaraj wouldn&#39;t come for hundred years</strong> if untouchability not eliminated</li>\n</ul>\n<p><strong>Gandhi&#39;s Efforts:</strong></p>\n<ul>\n<li>Called untouchables <strong>&quot;harijan&quot;</strong> (children of God) </li>\n<li>Organized <strong>satyagraha</strong> to secure their:<ul>\n<li>Entry into temples </li>\n<li>Access to public wells, tanks, roads, schools</li>\n</ul>\n</li>\n<li>Cleaned toilets himself to dignify work of <strong>bhangi</strong> (sweepers) </li>\n<li>Persuaded upper castes to change hearts and give up &quot;sin of untouchability&quot;</li>\n</ul>\n<p><strong>Alternative Dalit Leadership:</strong></p>\n<ul>\n<li>Many dalit leaders wanted <strong>different political solution</strong> </li>\n<li>Began organizing themselves, demanding:<ul>\n<li><strong>Reserved seats</strong> in educational institutions </li>\n<li><strong>Separate electorate</strong> to choose dalit members for legislative councils</li>\n</ul>\n</li>\n<li>Believed <strong>political empowerment</strong> would resolve social disabilities</li>\n</ul>\n<p><strong>Dr. B.R. Ambedkar:</strong></p>\n<ul>\n<li>Organized dalits into <strong>Depressed Classes Association (1930)</strong> </li>\n<li>Clashed with Gandhi at <strong>Second Round Table Conference</strong> demanding <strong>separate electorates</strong> </li>\n<li>British government <strong>conceded</strong> Ambedkar&#39;s demand </li>\n<li>Gandhi began <strong>fast unto death</strong>, believing separate electorates would slow dalit integration </li>\n<li>Ambedkar ultimately accepted Gandhi&#39;s position</li>\n</ul>\n<p><strong>Poona Pact (September 1932):</strong></p>\n<ul>\n<li>Gave <strong>Depressed Classes</strong> (later <strong>Scheduled Castes</strong>) <strong>reserved seats</strong> in provincial and central legislative councils </li>\n<li>But to be voted in by <strong>general electorate</strong> </li>\n<li>Dalit movement remained <strong>apprehensive</strong> of Congress-led national movement </li>\n<li><strong>Dalit participation limited</strong>, particularly in <strong>Maharashtra and Nagpur</strong> where their organization was strong</li>\n</ul>\n<h4><strong>Muslims</strong></h4>\n<p><strong>Post-Khilafat Alienation:</strong></p>\n<ul>\n<li>After decline of Non-Cooperation-Khilafat Movement, large section of Muslims felt <strong>alienated from Congress</strong> </li>\n<li>From mid-1920s, Congress more visibly associated with <strong>Hindu Mahasabha</strong> </li>\n<li>As Hindu-Muslim relations worsened, each community organized <strong>religious processions</strong> with militant fervor </li>\n<li>Provoked <strong>Hindu-Muslim communal clashes and riots</strong> </li>\n<li>Every riot <strong>deepened distance</strong> between communities</li>\n</ul>\n<p><strong>Attempts at Unity:</strong></p>\n<ul>\n<li>Congress and <strong>Muslim League</strong> made efforts to renegotiate alliance </li>\n<li>1927: Appeared such unity could be forged </li>\n<li>Important differences over <strong>question of representation</strong> in future assemblies</li>\n</ul>\n<p><strong>Muhammad Ali Jinnah&#39;s Position:</strong></p>\n<ul>\n<li>One of Muslim League leaders </li>\n<li>Willing to give up demand for <strong>separate electorates</strong> if Muslims assured:<ul>\n<li><strong>Reserved seats</strong> in Central Assembly </li>\n<li>Representation <strong>in proportion to population</strong> in Muslim-dominated provinces (<strong>Bengal and Punjab</strong>)</li>\n</ul>\n</li>\n<li>Negotiations continued but hope disappeared at <strong>All Parties Conference (1928)</strong> </li>\n<li><strong>M.R. Jayakar</strong> of <strong>Hindu Mahasabha</strong> strongly opposed compromise efforts </li>\n<li>Muslim political organizations <strong>lukewarm</strong> in response to Civil Disobedience Movement</li>\n</ul>\n<hr>\n<h2><strong>4. The Sense of Collective Belonging</strong></h2>\n<h3><strong>4.1 Understanding Collective Belonging</strong></h3>\n<h4><strong>What is Nationalism?</strong></h4>\n<ul>\n<li><strong>Nationalism</strong> spreads when people begin to believe they are all part of the <strong>same nation</strong> </li>\n<li>People discover some <strong>unity</strong> that binds them together </li>\n<li>Nation becomes a <strong>reality in the minds</strong> of people</li>\n</ul>\n<h4><strong>How Did People Develop Collective Belonging?</strong></h4>\n<h5><strong>Through United Struggles</strong></h5>\n<ul>\n<li>Sense of collective belonging came partly through experience of <strong>united struggles</strong> </li>\n<li><strong>Mass participation</strong> in movements like Non-Cooperation and Civil Disobedience </li>\n<li>Shared experience of <strong>colonial oppression</strong> created bonds</li>\n</ul>\n<h5><strong>Through Cultural Processes</strong></h5>\n<ul>\n<li>Variety of <strong>cultural processes</strong> through which nationalism captured people&#39;s imagination </li>\n<li><strong>History and fiction</strong> played important roles </li>\n<li><strong>Folklore and songs</strong> contributed significantly </li>\n<li><strong>Popular prints and symbols</strong> were widely used </li>\n<li>All these elements played part in <strong>making of nationalism</strong></li>\n</ul>\n<hr>\n<h3><strong>4.2 The Image of Bharat Mata</strong></h3>\n<h4><strong>Creation and Early Development</strong></h4>\n<h5><strong>Bankim Chandra Chattopadhyay&#39;s Contribution</strong></h5>\n<ul>\n<li>Identity of nation most often <strong>symbolised in a figure or image</strong> </li>\n<li>In <strong>twentieth century</strong>, India&#39;s identity visually associated with image of <strong>Bharat Mata</strong> </li>\n<li>Image first created by <strong>Bankim Chandra Chattopadhyay</strong> </li>\n<li>In <strong>1870s</strong>, he wrote <strong>&quot;Vande Mataram&quot;</strong> as a <strong>hymn to the motherland</strong> </li>\n<li>Later included in his novel <strong>&quot;Anandamath&quot;</strong> </li>\n<li>Widely sung during <strong>Swadeshi movement in Bengal</strong></li>\n</ul>\n<h5><strong>Abanindranath Tagore&#39;s Famous Painting (1905)</strong></h5>\n<ul>\n<li>Moved by Swadeshi movement, <strong>Abanindranath Tagore</strong> painted famous image of Bharat Mata </li>\n<li><strong>Portrayed as ascetic figure</strong>: calm, composed, divine and spiritual </li>\n<li>Shown as <strong>dispensing learning, food and clothing</strong> </li>\n<li><strong>Mala in one hand</strong> emphasizes her <strong>ascetic quality</strong> </li>\n<li>Abanindranath, like <strong>Ravi Varma</strong> before him, tried to develop <strong>style of painting</strong> that could be seen as <strong>truly Indian</strong></li>\n</ul>\n<h4><strong>Evolution of Bharat Mata Image</strong></h4>\n<h5><strong>Different Forms and Interpretations</strong></h5>\n<ul>\n<li>In subsequent years, image acquired <strong>many different forms</strong> </li>\n<li>Circulated in <strong>popular prints</strong> </li>\n<li>Painted by <strong>different artists</strong> </li>\n<li><strong>Contrasting images</strong>: Some showed her with <strong>trishul</strong>, standing beside <strong>lion and elephant</strong> (symbols of power and authority) </li>\n<li><strong>Devotion</strong> to this <strong>mother figure</strong> came to be seen as <strong>evidence of one&#39;s nationalism</strong></li>\n</ul>\n<h5><strong>Nationalist Leaders and Bharat Mata</strong></h5>\n<ul>\n<li><strong>Popular prints</strong> showed <strong>Jawaharlal Nehru</strong> holding image of Bharat Mata and <strong>map of India</strong> close to his heart </li>\n<li>Many popular prints showed <strong>nationalist leaders offering their heads</strong> to Bharat Mata </li>\n<li>Idea of <strong>sacrifice for the mother</strong> was powerful within <strong>popular imagination</strong></li>\n</ul>\n<hr>\n<h3><strong>4.3 Revival of Indian Folklore</strong></h3>\n<h4><strong>Purpose of Folklore Movement</strong></h4>\n<h5><strong>Nationalist Approach to Folklore</strong></h5>\n<ul>\n<li>Ideas of nationalism developed through movement to <strong>revive Indian folklore</strong> </li>\n<li>In <strong>late-nineteenth-century India</strong>, nationalists began <strong>recording folk tales</strong> sung by <strong>bards</strong> </li>\n<li>They <strong>toured villages</strong> to gather <strong>folk songs and legends</strong></li>\n</ul>\n<h5><strong>Significance of Folk Tradition</strong></h5>\n<ul>\n<li>These <strong>tales</strong> gave a <strong>true picture of traditional culture</strong> </li>\n<li>Culture had been <strong>corrupted and damaged by outside forces</strong> </li>\n<li>Essential to <strong>preserve this folk tradition</strong> to:<ul>\n<li>Discover one&#39;s <strong>national identity</strong> </li>\n<li>Restore a <strong>sense of pride</strong> in one&#39;s past</li>\n</ul>\n</li>\n</ul>\n<h4><strong>Key Contributors to Folklore Revival</strong></h4>\n<h5><strong>Rabindranath Tagore in Bengal</strong></h5>\n<ul>\n<li><strong>Rabindranath Tagore himself</strong> began collecting:<ul>\n<li><strong>Ballads</strong> </li>\n<li><strong>Nursery rhymes</strong> </li>\n<li><strong>Myths</strong></li>\n</ul>\n</li>\n<li>Led the <strong>movement for folk revival</strong></li>\n</ul>\n<h5><strong>Natesa Sastri in Madras</strong></h5>\n<ul>\n<li>Published massive <strong>four-volume collection</strong> of <strong>Tamil folk tales</strong> </li>\n<li>Title: <strong>&quot;The Folklore of Southern India&quot;</strong> </li>\n<li>He believed <strong>folklore was national literature</strong> </li>\n<li>Considered it the <strong>&quot;most trustworthy manifestation of people&#39;s real thoughts and characteristics&quot;</strong></li>\n</ul>\n<hr>\n<h3><strong>4.4 Icons and Symbols of Nationalism</strong></h3>\n<h4><strong>Awareness of Symbols</strong></h4>\n<ul>\n<li>As <strong>national movement developed</strong>, nationalist leaders became <strong>more and more aware</strong> of:<ul>\n<li>Such <strong>icons and symbols</strong> in <strong>unifying people</strong> </li>\n<li><strong>Inspiring</strong> in them a feeling of <strong>nationalism</strong></li>\n</ul>\n</li>\n</ul>\n<h4><strong>The Tricolour Flag Evolution</strong></h4>\n<h5><strong>Swadeshi Movement Flag (Bengal)</strong></h5>\n<ul>\n<li>During <strong>Swadeshi movement in Bengal</strong>, a <strong>tricolour flag</strong> (red, green and yellow) was designed </li>\n<li>Had <strong>eight lotuses</strong> representing <strong>eight provinces of British India</strong> </li>\n<li>Had <strong>crescent moon</strong> representing <strong>Hindus and Muslims</strong></li>\n</ul>\n<h5><strong>Swaraj Flag by Gandhiji (1921)</strong></h5>\n<ul>\n<li>By <strong>1921</strong>, <strong>Gandhiji</strong> had designed the <strong>Swaraj flag</strong> </li>\n<li>Again a <strong>tricolour</strong> (red, green and white) </li>\n<li>Had a <strong>spinning wheel in the centre</strong> </li>\n<li>Spinning wheel represented the <strong>Gandhian ideal of self-help</strong> </li>\n<li><strong>Carrying the flag</strong>, holding it <strong>aloft during marches</strong> became a <strong>symbol of defiance</strong></li>\n</ul>\n<hr>\n<h3><strong>4.5 Reinterpretation of History</strong></h3>\n<h3><strong>Need for Historical Reinterpretation</strong></h3>\n<h5><strong>Changing Perspective on Indian History</strong></h5>\n<ul>\n<li>Another means of creating feeling of nationalism was through <strong>reinterpretation of history</strong> </li>\n<li>By <strong>end of nineteenth century</strong>, many Indians began feeling that:<ul>\n<li>To <strong>instill a sense of pride</strong> in the nation </li>\n<li><strong>Indian history</strong> had to be <strong>thought about differently</strong></li>\n</ul>\n</li>\n</ul>\n<h4><strong>British vs Indian Historical Narrative</strong></h4>\n<h5><strong>British View of Indians</strong></h5>\n<ul>\n<li>British saw Indians as:<ul>\n<li><strong>Backward and primitive</strong> </li>\n<li><strong>Incapable of governing themselves</strong></li>\n</ul>\n</li>\n</ul>\n<h5><strong>Indian Response</strong></h5>\n<ul>\n<li>Indians began <strong>looking into the past</strong> to discover <strong>India&#39;s great achievements</strong> </li>\n<li>Wrote about <strong>glorious developments in ancient times</strong> when these flourished:<ul>\n<li><strong>Art and architecture</strong> </li>\n<li><strong>Science and mathematics</strong> </li>\n<li><strong>Religion and culture</strong> </li>\n<li><strong>Law and philosophy</strong> </li>\n<li><strong>Crafts and trade</strong></li>\n</ul>\n</li>\n</ul>\n<h4><strong>Two-Phase Historical Narrative</strong></h4>\n<h5><strong>Phase 1: Glorious Past</strong></h5>\n<ul>\n<li>Ancient times characterized by great achievements and developments</li>\n</ul>\n<h5><strong>Phase 2: Decline and Colonization</strong></h5>\n<ul>\n<li>This glorious time followed by <strong>history of decline</strong> </li>\n<li>Period when <strong>India was colonised</strong></li>\n</ul>\n<h4><strong>Impact of Nationalist Histories</strong></h4>\n<ul>\n<li>These <strong>nationalist histories</strong> urged readers to:<ul>\n<li><strong>Take pride</strong> in India&#39;s great achievements in the past </li>\n<li><strong>Struggle to change</strong> the <strong>miserable conditions of life under British rule</strong></li>\n</ul>\n</li>\n</ul>\n<h4><strong>Historical Example: Tarinicharan Chattopadhyay (1858)</strong></h4>\n<ul>\n<li>Quote from <strong>&quot;Bharatbarsher Itihas&quot; (The History of Bharatbarsh)</strong>, vol. 1, 1858:<ul>\n<li><em>&quot;In earlier times, foreign travellers in India marvelled at the <strong>courage, truthfulness and modesty</strong> of the people of the <strong>Arya vamsa</strong>&quot;</em> </li>\n<li><em>&quot;Now they remark mainly on the <strong>absence of those qualities</strong>&quot;</em> </li>\n<li><em>&quot;In those days Hindus would set out on <strong>conquest</strong> and hoist their flags in <strong>Tartar, China</strong> and other countries&quot;</em> </li>\n<li><em>&quot;Now a few soldiers from a <strong>tiny island far away</strong> are <strong>lording it over the land of India</strong>&quot;</em></li>\n</ul>\n</li>\n</ul>\n<hr>\n<h3><strong>4.6 Problems with Unity Efforts</strong></h3>\n<h4><strong>Limitations of Hindu-Centric Symbolism</strong></h4>\n<ul>\n<li>These efforts to <strong>unify people</strong> were <strong>not without problems</strong> </li>\n<li>When the <strong>past being glorified was Hindu</strong> </li>\n<li>When <strong>images celebrated</strong> were drawn from <strong>Hindu iconography</strong> </li>\n<li>Then <strong>people of other communities felt left out</strong></li>\n</ul>\n<h4><strong>Questions Raised</strong></h4>\n<ul>\n<li>Do images of Bharat Mata appeal to <strong>all castes and communities</strong>? </li>\n<li>Different portrayals had different impacts on various groups</li>\n</ul>\n<hr>\n<h3><strong>4.7 Revolutionary Nationalism - HSRA</strong></h3>\n<h4><strong>Hindustan Socialist Republican Army (1928)</strong></h4>\n<ul>\n<li>Founded at meeting in <strong>Ferozeshah Kotla ground, Delhi</strong> </li>\n<li>Many nationalists thought struggle couldn&#39;t be won through <strong>non-violence</strong> </li>\n<li>Leaders included:<ul>\n<li><strong>Bhagat Singh</strong> </li>\n<li><strong>Jatin Das</strong> </li>\n<li><strong>Ajoy Ghosh</strong></li>\n</ul>\n</li>\n</ul>\n<h5><strong>Actions and Philosophy</strong></h5>\n<p><strong>Dramatic Actions</strong></p>\n<ul>\n<li>Series of dramatic actions targeting <strong>symbols of British power</strong> </li>\n<li><strong>April 1929</strong>: <strong>Bhagat Singh</strong> and <strong>Batukeswar Dutta</strong> threw bomb in <strong>Legislative Assembly</strong> </li>\n<li>Same year: Attempt to blow up train carrying <strong>Lord Irwin</strong></li>\n</ul>\n<h5><strong>Bhagat Singh&#39;s Vision</strong></h5>\n<ul>\n<li><strong>23 years old</strong> when tried and executed by colonial government </li>\n<li>During trial, stated he didn&#39;t wish to glorify <strong>&quot;cult of bomb and pistol&quot;</strong> </li>\n<li>Wanted <strong>revolution in society</strong> </li>\n<li><strong>Famous quote</strong>: <ul>\n<li><em>&quot;Revolution is the <strong>inalienable right of mankind</strong>&quot;</em> </li>\n<li><em>&quot;Freedom is the <strong>imprescriptible birthright of all</strong>&quot;</em> </li>\n<li><em>&quot;The <strong>labourer</strong> is the <strong>real sustainer of society</strong>&quot;</em> </li>\n<li><em>&quot;To the <strong>altar of this revolution</strong> we have brought our <strong>youth as incense</strong>&quot;</em> </li>\n<li>*&quot;<strong>Inquilab Zindabad!</strong>&quot;*</li>\n</ul>\n</li>\n</ul>\n<h2><strong>5. Quit India Movement (1942)</strong></h2>\n<h4><strong>Background and Launch</strong></h4>\n<h5><strong>Causes</strong></h5>\n<ul>\n<li><strong>Failure of Cripps Mission</strong> created widespread discontentment </li>\n<li><strong>Effects of World War II</strong> worsened situation </li>\n<li>Led Gandhiji to launch movement calling for <strong>complete withdrawal of British</strong> from India</li>\n</ul>\n<h5><strong>Wardha Resolution (14 July 1942)</strong></h5>\n<ul>\n<li><strong>Congress Working Committee</strong> meeting in <strong>Wardha</strong> </li>\n<li>Passed historic <strong>&quot;Quit India&quot; resolution</strong> </li>\n<li>Demanded <strong>immediate transfer of power</strong> to Indians</li>\n</ul>\n<h5><strong>Bombay Session (8 August 1942)</strong></h5>\n<ul>\n<li><strong>All India Congress Committee</strong> endorsed the resolution </li>\n<li>Called for <strong>non-violent mass struggle</strong> on widest possible scale </li>\n<li>Gandhiji delivered famous <strong>&quot;Do or Die&quot; speech</strong></li>\n</ul>\n<h4><strong>Mass Participation and Spread</strong></h4>\n<h5><strong>Scale of Movement</strong></h5>\n<ul>\n<li>Call for &#39;Quit India&#39; almost brought <strong>state machinery to standstill</strong> in large parts of country </li>\n<li>People voluntarily threw themselves into thick of movement </li>\n<li>Truly a <strong>mass movement</strong></li>\n</ul>\n<h5><strong>Forms of Protest</strong></h5>\n<ul>\n<li>People observed <strong>hartals</strong> </li>\n<li><strong>Demonstrations and processions</strong> accompanied by:<ul>\n<li><strong>National songs</strong> </li>\n<li><strong>Slogans</strong> demanding <strong>&quot;Swatantra Bharat&quot;</strong></li>\n</ul>\n</li>\n</ul>\n<h5><strong>Participants</strong></h5>\n<ul>\n<li>Brought into ambit thousands of <strong>ordinary people</strong>:<ul>\n<li><strong>Students</strong> </li>\n<li><strong>Workers</strong> </li>\n<li><strong>Peasants</strong></li>\n</ul>\n</li>\n</ul>\n<h4><strong>Leadership</strong></h4>\n<h5><strong>Male Leaders</strong></h5>\n<ul>\n<li><strong>Jayprakash Narayan</strong> </li>\n<li><strong>Aruna Asaf Ali</strong> </li>\n<li><strong>Ram Manohar Lohia</strong></li>\n</ul>\n<h5><strong>Women Leaders</strong></h5>\n<ul>\n<li><strong>Matangini Hazra</strong> in <strong>Bengal</strong> </li>\n<li><strong>Kanaklata Barua</strong> in <strong>Assam</strong> </li>\n<li><strong>Rama Devi</strong> in <strong>Odisha</strong> </li>\n<li><strong>Active participation of women</strong> was significant feature</li>\n</ul>\n<h4><strong>British Response and Suppression</strong></h4>\n<ul>\n<li>British responded with <strong>much force</strong> </li>\n<li>Took <strong>more than a year</strong> to suppress the movement </li>\n<li>Despite brutal repression, movement sustained for extended period</li>\n</ul>\n<hr>\n",
    "lastUpdated": "2025-11-27T14:21:36.741Z"
  },
  {
    "id": "Chemical reaction and equation",
    "name": "Chemical reaction and equation",
    "category": "Chemistry",
    "order": "7",
    "content": "<h1>Chemical Reactions And Equation</h1>\n<ol>\n<li><strong>Chemical Changes and Reactions</strong><ul>\n<li>Physical vs. Chemical Change</li>\n<li>Defining a Chemical Reaction</li>\n<li>Characteristics of Chemical Reactions</li>\n</ul>\n</li>\n<li><strong>Chemical Equations</strong><ul>\n<li>Writing and Understanding Chemical Equations</li>\n<li>Skeletal and Balanced Chemical Equations</li>\n<li>How to Balance a Chemical Equation<ul>\n<li>Method 1: Hit-and-Trial Method</li>\n<li>Method 2: Algebraic Method</li>\n</ul>\n</li>\n<li>Making Chemical Equations More Informative</li>\n</ul>\n</li>\n<li><strong>Types of Chemical Reactions</strong><ul>\n<li>Combination Reaction</li>\n<li>Decomposition Reaction<ul>\n<li>Thermolytic Decomposition (Thermal)</li>\n<li>Electrolytic Decomposition (Electrolysis)</li>\n<li>Photolytic Decomposition (Photolysis)</li>\n</ul>\n</li>\n<li>Displacement Reaction</li>\n<li>Double Displacement Reaction<ul>\n<li>Precipitation Reactions</li>\n</ul>\n</li>\n<li>Oxidation and Reduction (Redox) Reactions</li>\n</ul>\n</li>\n<li><strong>Effects of Oxidation in Everyday Life</strong><ul>\n<li>Corrosion</li>\n<li>Rancidity</li>\n</ul>\n</li>\n</ol>\n<hr>\n<h3>Chemical Reactions and Equations</h3>\n<h3>Chemical Changes and Reactions</h3>\n<p>A <strong>change</strong> is a transformation in the properties of a substance. It can be categorized into two main types.</p>\n<table>\n<thead>\n<tr>\n<th align=\"left\">Physical Change</th>\n<th align=\"left\">Chemical Change</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align=\"left\">A change where only the physical properties (shape, size, state) are altered, but the chemical identity of the substance remains the same.</td>\n<td align=\"left\">A change that results in the formation of one or more new substances with entirely different properties.</td>\n</tr>\n<tr>\n<td align=\"left\">It is generally a reversible process.</td>\n<td align=\"left\">It is generally an irreversible process.</td>\n</tr>\n<tr>\n<td align=\"left\">No new substance is formed.</td>\n<td align=\"left\">A new chemical substance is formed.</td>\n</tr>\n<tr>\n<td align=\"left\"><strong>Examples:</strong> Melting of ice, breaking glass, folding paper.</td>\n<td align=\"left\"><strong>Examples:</strong> Rusting of iron, burning of wood, metabolism of food.</td>\n</tr>\n</tbody></table>\n<blockquote>\n<p><strong>Burning a Candle:</strong> This process exhibits both changes simultaneously. The melting of the wax is a <strong>physical</strong> change, while the burning of the wax and the wick is a <strong>chemical</strong> change.</p>\n</blockquote>\n<p>A <strong>chemical reaction</strong> is a process in which substances (reactants) undergo a transformation, resulting in the formation of new substances (products) with different chemical properties.</p>\n<h3>Characteristics of Chemical Reactions</h3>\n<p>The following observations help determine that a chemical reaction has occurred:</p>\n<ul>\n<li><strong>Change in State:</strong> Reactants may be in one physical state (solid, liquid, gas) and form products in a different state.</li>\n<li><strong>Change in Colour:</strong> The reaction mixture or product might have a different colour than the reactants.</li>\n<li><strong>Evolution of a Gas:</strong> Bubbles of gas may be seen forming during the reaction.</li>\n<li><strong>Change in Temperature:</strong> The temperature of the mixture may increase or decrease.<ul>\n<li><strong>Exothermic reactions:</strong> Chemical reactions that release energy, usually in the form of heat.</li>\n<li><strong>Endothermic reactions:</strong> Chemical reactions in which energy is absorbed from the surroundings.</li>\n</ul>\n</li>\n<li><strong>Formation of a Precipitate:</strong> An insoluble solid, known as a <strong>precipitate</strong>, may form and settle down in the solution.</li>\n</ul>\n<h3>Chemical Equations</h3>\n<p>A <strong>chemical equation</strong> is a symbolic representation of a chemical reaction using symbols and formulas for the reactants and products.</p>\n<ul>\n<li><strong>Reactants:</strong> Substances that take part in a chemical reaction. They are written on the left-hand side (LHS).</li>\n<li><strong>Products:</strong> The new substances formed after a chemical reaction. They are written on the right-hand side (RHS).</li>\n</ul>\n<p>For example: Magnesium + Oxygen → Magnesium Oxide<br>This is represented as: $ \\text{Mg} + \\text{O}_2 \\rightarrow \\text{MgO} $</p>\n<h4>Skeletal and Balanced Chemical Equations</h4>\n<p>A <strong>skeletal equation</strong> is an unbalanced chemical equation where the number of atoms of each element on the reactant side is not equal to the number of atoms on the product side.<br>Example: $ \\text{Mg} + \\text{O}_2 \\rightarrow \\text{MgO} $</p>\n<p>A <strong>balanced chemical equation</strong> has an equal number of atoms of each element on both the reactant and product sides, satisfying the Law of Conservation of Mass.<br>Example: $ 2\\text{Mg} + \\text{O}_2 \\rightarrow 2\\text{MgO} $</p>\n<h3>How to Balance a Chemical Equation</h3>\n<h4>Method 1: Hit-and-Trial Method</h4>\n<p>This method involves adjusting coefficients to equalize the atom count for each element on both sides.</p>\n<p><strong>Step 1: Write the skeletal equation.</strong><br>Iron + Steam → Magnetite + Hydrogen Gas</p>\n<div class=\"formula-block-iframe\">$ \\text{Fe} + \\text{H}_2\\text{O} \\rightarrow \\text{Fe}_3\\text{O}_4 + \\text{H}_2 $</div>\n\n<p><strong>Step 2: List the number of atoms of different elements.</strong></p>\n<table>\n<thead>\n<tr>\n<th align=\"left\">Element</th>\n<th align=\"left\">Reactants (LHS)</th>\n<th align=\"left\">Products (RHS)</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align=\"left\">Fe</td>\n<td align=\"left\">1</td>\n<td align=\"left\">3</td>\n</tr>\n<tr>\n<td align=\"left\">H</td>\n<td align=\"left\">2</td>\n<td align=\"left\">2</td>\n</tr>\n<tr>\n<td align=\"left\">O</td>\n<td align=\"left\">1</td>\n<td align=\"left\">4</td>\n</tr>\n</tbody></table>\n<p><strong>Step 3: Start balancing.</strong><br>Balance the compound with the maximum number of atoms, which is $ \\text{Fe}_3\\text{O}_4 $.</p>\n<ul>\n<li>To balance Oxygen, place the coefficient 4 before $ \\text{H}_2\\text{O} $.<div class=\"formula-block-iframe\">$ \\text{Fe} + 4\\text{H}_2\\text{O} \\rightarrow \\text{Fe}_3\\text{O}_4 + \\text{H}_2 $</div></li>\n<li>Now, Hydrogen atoms become 8 on the LHS. To balance H, place the coefficient 4 before $ \\text{H}_2 $.<div class=\"formula-block-iframe\">$ \\text{Fe} + 4\\text{H}_2\\text{O} \\rightarrow \\text{Fe}_3\\text{O}_4 + 4\\text{H}_2 $</div></li>\n<li>Finally, Iron atoms are 3 on the RHS. To balance Fe, place the coefficient 3 before $ \\text{Fe} $.<div class=\"formula-block-iframe\">$ 3\\text{Fe} + 4\\text{H}_2\\text{O} \\rightarrow \\text{Fe}_3\\text{O}_4 + 4\\text{H}_2 $</div></li>\n</ul>\n<p><strong>Step 4: Verify the final equation.</strong></p>\n<table>\n<thead>\n<tr>\n<th align=\"left\">Element</th>\n<th align=\"left\">Reactants (LHS)</th>\n<th align=\"left\">Products (RHS)</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align=\"left\">Fe</td>\n<td align=\"left\">3</td>\n<td align=\"left\">3</td>\n</tr>\n<tr>\n<td align=\"left\">H</td>\n<td align=\"left\">8</td>\n<td align=\"left\">8</td>\n</tr>\n<tr>\n<td align=\"left\">O</td>\n<td align=\"left\">4</td>\n<td align=\"left\">4</td>\n</tr>\n<tr>\n<td align=\"left\">The equation is now balanced.</td>\n<td align=\"left\"></td>\n<td align=\"left\"></td>\n</tr>\n</tbody></table>\n<h4>Method 2: Algebraic Method</h4>\n<p><strong>Step 1: Assign variables (a, b, c, d...) as coefficients.</strong></p>\n<div class=\"formula-block-iframe\">$ a\\text{Al}_2\\text{O}_3 + b\\text{HCl} \\rightarrow c\\text{AlCl}_3 + d\\text{H}_2\\text{O} $</div>\n\n<p><strong>Step 2: Create algebraic expressions for each element.</strong></p>\n<ul>\n<li>For Al: $ 2a = c $</li>\n<li>For O: $ 3a = d $</li>\n<li>For H: $ b = 2d $</li>\n<li>For Cl: $ b = 3c $</li>\n</ul>\n<p><strong>Step 3: Solve the equations.</strong><br>Assume a value for one variable (usually 1). Let $ a = 1 $.</p>\n<ul>\n<li>If $ a = 1 $, then $ c = 2(1) = 2 $.</li>\n<li>If $ a = 1 $, then $ d = 3(1) = 3 $.</li>\n<li>If $ d = 3 $, then $ b = 2(3) = 6 $.</li>\n<li>Check with the last equation: $ b = 3c \\Rightarrow 6 = 3(2) $, which is correct.</li>\n</ul>\n<p><strong>Step 4: Substitute the coefficients back into the equation.</strong></p>\n<div class=\"formula-block-iframe\">$ \\text{Al}_2\\text{O}_3 + 6\\text{HCl} \\rightarrow 2\\text{AlCl}_3 + 3\\text{H}_2\\text{O} $</div>\n\n<h3>Making Chemical Equations More Informative</h3>\n<p>To make equations more descriptive, we can add:</p>\n<ul>\n<li><strong>Physical States:</strong> Use symbols to denote the state of substances.<ul>\n<li>(s) for solid</li>\n<li>(l) for liquid</li>\n<li>(g) for gas</li>\n<li>(aq) for aqueous (dissolved in water)<br>Example: $ 3\\text{Fe(s)} + 4\\text{H}_2\\text{O(g)} \\rightarrow \\text{Fe}_3\\text{O}_4\\text{(s)} + 4\\text{H}_2\\text{(g)} $</li>\n</ul>\n</li>\n<li><strong>Reaction Conditions:</strong> Specify conditions like temperature, pressure, or catalysts above or below the reaction arrow. A <strong>catalyst</strong> is a substance that alters the rate of a reaction without being consumed by it.<br>Example: $ \\text{CO(g)} + 2\\text{H}_2\\text{(g)} \\xrightarrow{340 \\text{ atm}} \\text{CH}_3\\text{OH(l)} $<div class=\"formula-block-iframe\">$ 6\\text{CO}_2\\text{(aq)} + 12\\text{H}_2\\text{O(l)} \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} \\text{C}_6\\text{H}_{12}\\text{O}_6\\text{(aq)} + 6\\text{O}_2\\text{(aq)} + 6\\text{H}_2\\text{O(l)} $</div></li>\n<li><strong>Heat Transfer:</strong><ul>\n<li>For <strong>exothermic</strong> reactions (heat released), write &quot;+ Heat&quot; on the product side.<div class=\"formula-block-iframe\">$ \\text{C(s)} + \\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)} + \\text{Heat} $</div></li>\n<li>For <strong>endothermic</strong> reactions (heat absorbed), write &quot;+ Heat&quot; on the reactant side or use the delta symbol (Δ) over the arrow.<div class=\"formula-block-iframe\">$ \\text{CaCO}_3\\text{(s)} \\xrightarrow{\\Delta} \\text{CaO(s)} + \\text{CO}_2\\text{(g)} $</div></li>\n</ul>\n</li>\n<li><strong>Other Symbols:</strong><ul>\n<li>Evolution of gas: Upward arrow (↑)</li>\n<li>Formation of precipitate: Downward arrow (↓)<br>Example: $ \\text{BaCl}_2\\text{(aq)} + \\text{Na}_2\\text{SO}_4\\text{(aq)} \\rightarrow \\text{BaSO}_4\\text{(s)}\\downarrow + 2\\text{NaCl(aq)} $</li>\n</ul>\n</li>\n</ul>\n<h3>Types of Chemical Reactions</h3>\n<h4>Combination Reaction</h4>\n<p>A reaction in which two or more reactants combine to form a single product.</p>\n<blockquote>\n<p>General Form: A + B → AB</p>\n</blockquote>\n<ul>\n<li><strong>Burning of Magnesium Ribbon:</strong> Magnesium ribbon is first cleaned with sandpaper to remove the protective layer of magnesium oxide. It burns with a dazzling white flame to form a white powder of magnesium oxide. This is an exothermic combination reaction.<div class=\"formula-block-iframe\">$ 2\\text{Mg(s)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{MgO(s)} $</div></li>\n<li><strong>Formation of Slaked Lime:</strong> Quicklime (calcium oxide) reacts vigorously with water to produce slaked lime (calcium hydroxide), releasing a large amount of heat.<div class=\"formula-block-iframe\">$ \\text{CaO(s)} + \\text{H}_2\\text{O(l)} \\rightarrow \\text{Ca(OH)}_2\\text{(aq)} + \\text{Heat} $</div>\nThe slaked lime is used for whitewashing walls. It reacts slowly with $ \\text{CO}_2 $ in the air to form a shiny, hard layer of calcium carbonate.\n<div class=\"formula-block-iframe\">$ \\text{Ca(OH)}_2\\text{(aq)} + \\text{CO}_2\\text{(g)} \\rightarrow \\text{CaCO}_3\\text{(s)} + \\text{H}_2\\text{O(l)} $</div></li>\n<li><strong>Other Examples:</strong><ul>\n<li>Burning of coal: $ \\text{C(s)} + \\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)} $</li>\n<li>Formation of water: $ 2\\text{H}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightarrow 2\\text{H}_2\\text{O(l)} $</li>\n</ul>\n</li>\n</ul>\n<h4>Decomposition Reaction</h4>\n<p>A reaction in which a single compound breaks down into two or more simpler substances. It is the opposite of a combination reaction and is usually endothermic.</p>\n<blockquote>\n<p>General Form: AB → A + B</p>\n</blockquote>\n<h5>Thermolytic Decomposition (Thermal)</h5>\n<p>Decomposition carried out by heating.</p>\n<ul>\n<li><strong>Decomposition of Ferrous Sulphate:</strong> Green crystals of hydrated ferrous sulphate ($ \\text{FeSO}_4 \\cdot 7\\text{H}_2\\text{O} $) first lose water on heating to become white anhydrous ferrous sulphate. On further heating, it decomposes to form reddish-brown ferric oxide ($ \\text{Fe}_2\\text{O}_3 $) and gives off gases with the smell of burning sulphur.<div class=\"formula-block-iframe\">$ 2\\text{FeSO}_4\\text{(s)} \\xrightarrow{\\Delta} \\text{Fe}_2\\text{O}_3\\text{(s)} + \\text{SO}_2\\text{(g)} + \\text{SO}_3\\text{(g)} $</div></li>\n<li><strong>Decomposition of Lead Nitrate:</strong> When colorless lead nitrate powder is heated, it decomposes to form yellow lead(II) oxide ($ \\text{PbO} $), and brown fumes of nitrogen dioxide ($ \\text{NO}_2 $) gas are evolved.<div class=\"formula-block-iframe\">$ 2\\text{Pb(NO}_3)_2\\text{(s)} \\xrightarrow{\\Delta} 2\\text{PbO(s)} + 4\\text{NO}_2\\text{(g)} + \\text{O}_2\\text{(g)} $</div></li>\n</ul>\n<h5>Electrolytic Decomposition (Electrolysis)</h5>\n<p>Decomposition carried out by passing electricity.</p>\n<ul>\n<li><strong>Electrolysis of Water:</strong> Water decomposes into hydrogen and oxygen gas when an electric current is passed through it. A few drops of acid are added to make the water a better conductor.<div class=\"formula-block-iframe\">$ 2\\text{H}_2\\text{O(l)} \\xrightarrow{\\text{Electricity}} 2\\text{H}_2\\text{(g)} + \\text{O}_2\\text{(g)} $</div>\n\n<strong>Observation:</strong> Hydrogen gas collects at the cathode (negative electrode), and oxygen gas collects at the anode (positive electrode). The volume of hydrogen gas produced is double the volume of oxygen gas. A burning splinter burns brightly in oxygen, while it makes a &#39;pop&#39; sound in hydrogen.</li>\n</ul>\n<h5>Photolytic Decomposition (Photolysis)</h5>\n<p>Decomposition carried out by light energy.</p>\n<ul>\n<li><strong>Decomposition of Silver Chloride:</strong> White silver chloride turns grey when exposed to sunlight as it decomposes into silver and chlorine.<div class=\"formula-block-iframe\">$ 2\\text{AgCl(s)} \\xrightarrow{\\text{Sunlight}} 2\\text{Ag(s)} + \\text{Cl}_2\\text{(g)} $</div></li>\n<li><strong>Decomposition of Silver Bromide:</strong> This reaction is similar and is used in black-and-white photography.<div class=\"formula-block-iframe\">$ 2\\text{AgBr(s)} \\xrightarrow{\\text{Sunlight}} 2\\text{Ag(s)} + \\text{Br}_2\\text{(g)} $</div></li>\n</ul>\n<h4>Displacement Reaction</h4>\n<p>A reaction in which a more reactive element displaces a less reactive element from its salt solution.</p>\n<blockquote>\n<p>General Form: A + BC → AC + B</p>\n</blockquote>\n<ul>\n<li><strong>Iron and Copper Sulphate:</strong> When an iron nail is placed in a blue copper(II) sulphate solution, the iron, being more reactive than copper, displaces it. The blue color of the solution fades to pale green, and a reddish-brown coating of copper forms on the nail.<div class=\"formula-block-iframe\">$ \\text{Fe(s)} + \\text{CuSO}_4\\text{(aq)} \\rightarrow \\text{FeSO}_4\\text{(aq)} + \\text{Cu(s)} $</div></li>\n<li><strong>Zinc and Copper Sulphate:</strong> Zinc is more reactive than copper.<div class=\"formula-block-iframe\">$ \\text{Zn(s)} + \\text{CuSO}_4\\text{(aq)} \\rightarrow \\text{ZnSO}_4\\text{(aq)} + \\text{Cu(s)} $</div></li>\n<li><strong>Lead and Copper Chloride:</strong> Lead is more reactive than copper.<div class=\"formula-block-iframe\">$ \\text{Pb(s)} + \\text{CuCl}_2\\text{(aq)} \\rightarrow \\text{PbCl}_2\\text{(aq)} + \\text{Cu(s)} $</div></li>\n</ul>\n<h4>Double Displacement Reaction</h4>\n<p>A reaction in which there is an exchange of ions between two compounds to form two new compounds.</p>\n<blockquote>\n<p>General Form: AB + CD → AD + CB</p>\n</blockquote>\n<h5>Precipitation Reactions</h5>\n<p>A double displacement reaction that produces an insoluble solid (precipitate).</p>\n<ul>\n<li><p><strong>Sodium Sulphate and Barium Chloride:</strong> When solutions of sodium sulphate and barium chloride are mixed, a white, insoluble precipitate of barium sulphate is formed.</p>\n<div class=\"formula-block-iframe\">$ \\text{Na}_2\\text{SO}_4\\text{(aq)} + \\text{BaCl}_2\\text{(aq)} \\rightarrow \\text{BaSO}_4\\text{(s)}\\downarrow + 2\\text{NaCl(aq)} $</div>\n</li>\n<li><p><strong>Lead Nitrate and Potassium Iodide:</strong> Mixing solutions of lead(II) nitrate and potassium iodide produces a yellow precipitate of lead(II) iodide.</p>\n<div class=\"formula-block-iframe\">$ \\text{Pb(NO}_3)_2\\text{(aq)} + 2\\text{KI(aq)} \\rightarrow \\text{PbI}_2\\text{(s)}\\downarrow + 2\\text{KNO}_3\\text{(aq)} $</div></li>\n</ul>\n<h4>Oxidation and Reduction (Redox) Reactions</h4>\n<p>A reaction where oxidation and reduction occur simultaneously.</p>\n<p><strong>Oxidation:</strong> The <strong>gain</strong> of oxygen or <strong>loss</strong> of hydrogen by a substance.<br><strong>Reduction:</strong> The <strong>loss</strong> of oxygen or <strong>gain</strong> of hydrogen by a substance.</p>\n<ul>\n<li><strong>Oxidizing Agent (Oxidant):</strong> The substance that gets reduced and causes oxidation.</li>\n<li><strong>Reducing Agent (Reductant):</strong> The substance that gets oxidized and causes reduction.</li>\n</ul>\n<p><strong>Example 1: Heating Copper</strong><br>When copper powder is heated, it reacts with oxygen to form black copper(II) oxide. Here, copper is oxidized.</p>\n<div class=\"formula-block-iframe\">$ \\underset{\\text{Copper}}{2\\text{Cu(s)}} + \\text{O}_2\\text{(g)} \\xrightarrow{\\Delta} \\underset{\\text{Copper(II) oxide}}{2\\text{CuO(s)}} $</div>\n\n<p>If hydrogen gas is passed over this hot copper oxide, the black coating turns brown as copper is reformed.</p>\n<div class=\"formula-block-iframe\">$ \\underset{\\text{Copper(II) oxide}}{\\text{CuO(s)}} + \\underset{\\text{Hydrogen}}{\\text{H}_2\\text{(g)}} \\xrightarrow{\\Delta} \\underset{\\text{Copper}}{\\text{Cu(s)}} + \\underset{\\text{Water}}{\\text{H}_2\\text{O(l)}} $</div>\n\n<p>In this reaction:</p>\n<ul>\n<li>$ \\text{CuO} $ is <strong>reduced</strong> to $ \\text{Cu} $ (loses oxygen).</li>\n<li>$ \\text{H}_2 $ is <strong>oxidized</strong> to $ \\text{H}_2\\text{O} $ (gains oxygen).</li>\n<li>$ \\text{CuO} $ is the <strong>oxidizing agent</strong>.</li>\n<li>$ \\text{H}_2 $ is the <strong>reducing agent</strong>.</li>\n</ul>\n<p><strong>Example 2: Thermite Reaction</strong></p>\n<div class=\"formula-block-iframe\">$ \\underset{\\text{Iron(III) oxide}}{\\text{Fe}_2\\text{O}_3\\text{(s)}} + \\underset{\\text{Aluminium}}{2\\text{Al(s)}} \\rightarrow \\underset{\\text{Iron}}{2\\text{Fe(l)}} + \\underset{\\text{Aluminium oxide}}{\\text{Al}_2\\text{O}_3\\text{(s)}} + \\text{Heat} $</div>\n\n<ul>\n<li><p>$ \\text{Fe}_2\\text{O}_3 $ is <strong>reduced</strong> to $ \\text{Fe} $. It is the <strong>oxidizing agent</strong>.</p>\n</li>\n<li><p>$ \\text{Al} $ is <strong>oxidized</strong> to $ \\text{Al}_2\\text{O}_3 $. It is the <strong>reducing agent</strong>.</p>\n</li>\n</ul>\n<h3>Effects of Oxidation in Everyday Life</h3>\n<h4>Corrosion</h4>\n<p><strong>Corrosion</strong> is the slow degradation of metals due to their reaction with substances in the environment, such as moisture, air (oxygen), and acids.</p>\n<ul>\n<li><p><strong>Rusting of Iron:</strong> Iron objects, when exposed to moist air, acquire a reddish-brown coating of hydrated iron(III) oxide, known as rust.</p>\n<div class=\"formula-block-iframe\">$ 4\\text{Fe(s)} + 3\\text{O}_2\\text{(g)} + x\\text{H}_2\\text{O(l)} \\rightarrow 2\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O(s)} $</div>\n</li>\n<li><p><strong>Black Coating on Silver:</strong> Silver reacts with hydrogen sulphide gas in the air to form a black coating of silver sulphide.</p>\n<div class=\"formula-block-iframe\">$ 2\\text{Ag(s)} + \\text{H}_2\\text{S(g)} \\rightarrow \\text{Ag}_2\\text{S(s)} + \\text{H}_2\\text{(g)} $</div>\n</li>\n<li><p><strong>Green Coating on Copper:</strong> Copper reacts with moist carbon dioxide in the air to form a green layer of basic copper carbonate.</p>\n<div class=\"formula-block-iframe\">$ 2\\text{Cu(s)} + \\text{H}_2\\text{O(l)} + \\text{CO}_2\\text{(g)} + \\text{O}_2\\text{(g)} \\rightarrow \\text{CuCO}_3 \\cdot \\text{Cu(OH)}_2\\text{(s)} $</div></li>\n</ul>\n<p><strong>Prevention:</strong> Corrosion can be prevented by painting, oiling, greasing, galvanization (coating with zinc), or chrome plating.</p>\n<h4>Rancidity</h4>\n<p><strong>Rancidity</strong> is the condition produced by the aerial oxidation of fats and oils in food, marked by an unpleasant smell and taste.</p>\n<ul>\n<li><strong>Prevention of Rancidity:</strong><ul>\n<li><strong>Adding Antioxidants:</strong> Substances that prevent oxidation are added to foods containing fats and oil.</li>\n<li><strong>Storing in Airtight Containers:</strong> Limiting exposure to air slows down the oxidation process.</li>\n<li><strong>Flushing with Nitrogen:</strong> Packets of snack foods like potato chips are flushed with an inert gas like nitrogen to prevent contact with oxygen.</li>\n<li><strong>Refrigeration:</strong> Keeping food at low temperatures also slows down the oxidation process.</li>\n</ul>\n</li>\n</ul>\n",
    "lastUpdated": "2025-11-28T16:35:22.887Z"
  },
  {
    "id": "Sample paper",
    "name": "Sample paper",
    "category": "English ",
    "order": "8",
    "content": "<h1><strong>ANSWER BOOKLET: CLASS 10 ENGLISH (CODE 2/3/1)</strong></h1>\n<h2><strong>SECTION A - READING SKILLS (20 Marks)</strong></h2>\n<h3><strong>Q1. Kitchen Gardens Passage (10 marks)</strong></h3>\n<p><strong>(i) Question:</strong> What does the writer&#39;s use of phrases like &#39;in urban regions kitchen gardens have garnered great acknowledgement&#39; suggest about kitchen gardening today?<br><strong>Answer:</strong> (C) It provides nutritious food.<br><em>(The passage highlights that the acknowledgment comes from its role in promoting food security and nutrition.)</em> </p>\n<p><strong>(ii) Question:</strong> Complete the following with a suitable explanation. Growing a kitchen garden is cost effective because...<br><strong>Answer:</strong> ...urban dwellers can cultivate fresh produce at home utilizing recycled materials like empty tins and clay pots. This practice significantly saves money on purchasing expensive vegetables and reduces the time and fuel spent on grocery shopping trips. </p>\n<p><strong>(iii) Question:</strong> Identify two differences between the methods adopted in traditional farming and kitchen gardens.<br><strong>Answer:</strong></p>\n<ol>\n<li><p><strong>Chemical Use:</strong> Traditional farming often relies on synthetic fertilizers and pesticides, whereas kitchen gardens promote organic farming, minimizing harmful chemical usage.</p>\n</li>\n<li><p><strong>Water Usage:</strong> Traditional agriculture uses intensive irrigation that can strain resources, while kitchen gardens employ sustainable, water-saving practices that preserve soil health.</p>\n</li>\n</ol>\n<p><strong>(iv) Question:</strong> Substitute the underlined word with the correct word from Paragraph (4). &quot;The local residents&#39; <strong>nurturing</strong> of their surrounding flora...&quot;<br><strong>Answer:</strong> fostering</p>\n<p><strong>(v) Question:</strong> Tending to a kitchen garden has many health benefits. Explain in about 40 words.<br><strong>Answer:</strong> Tending a kitchen garden ensures a higher intake of essential nutrients from fresh, organic produce. Furthermore, the physical activity involved—digging and watering—acts as a therapeutic exercise that reduces stress, keeps individuals active, and lowers the risk of obesity-related health issues. </p>\n<p><strong>(vi) Question:</strong> Select the option that best reflects the concept that kitchen gardening is an effective educational tool for children.<br><strong>Answer:</strong> (B) It helps develop sensitivity and appreciation for nature.</p>\n<p><strong>(vii) Question:</strong> What hurdles do kitchen gardeners face? Mention any two.<br><strong>Answer:</strong></p>\n<ol>\n<li><p><strong>Space Constraints:</strong> Urban areas often suffer from limited space, making it difficult to set up gardens.</p>\n</li>\n<li><p><strong>Environmental Factors:</strong> Lack of adequate sunlight and poor soil quality are significant obstacles for urban plants.</p>\n</li>\n</ol>\n<p><strong>(viii) Question:</strong> State whether the following statement is True or False: Kitchen gardening should be practised by everyone living in the cities.<br><strong>Answer:</strong> True.</p>\n<hr>\n<h3><strong>Q2. Silk Passage (10 marks)</strong></h3>\n<p><strong>(i) Question:</strong> Silk is a popular fabric in India. Support the above statement in 40 words with evidence from the text.<br><strong>Answer:</strong> Silk&#39;s popularity is rooted in its long history, known regionally as &#39;Resham&#39; or &#39;Pattu.&#39; India&#39;s status as the world&#39;s second-largest producer, with massive annual outputs from states like Karnataka (8483 MT) and Andhra Pradesh, proves its immense cultural and economic demand. </p>\n<p><strong>(ii) Question:</strong> Select the option that is true for the assertion and reason given below.<br><strong>Assertion:</strong> Silk feels comfortable to the skin.<br><strong>Reason:</strong> It is made of natural protein fibre.<br><strong>Answer:</strong> (B) Both the assertion and the reason are true, but the reason is not the correct explanation of the assertion.<br><em>(Comfort comes from moisture absorption/regulation, not just because it is protein.)</em></p>\n<p><strong>(iii) Question:</strong> Justify the following statement: Though one of the strongest natural fibres, silk remains stretched.<br><strong>Answer:</strong> Silk possesses moderate to poor elasticity compared to other fibers. Consequently, if it is elongated even by a small amount, it does not snap back to its original shape but maintains that stretched, distorted state permanently. </p>\n<p><strong>(iv) Question:</strong> According to the passage, in what way is sunlight harmful to silk?<br><strong>Answer:</strong> Extended exposure to strong sunlight weakens the structural integrity of silk fibers, causing them to lose their strength and durability, which can lead to fabric damage over time. </p>\n<p><strong>(v) Question:</strong> &quot;To produce 1 kg of silk, 104 kg of mulberry leaves must be eaten by 3000 silkworms.&quot; State any one inference that can be drawn from the above statement.<br><strong>Answer:</strong> The inference is that silk production is an incredibly resource-intensive and inefficient process, requiring massive raw material input for a small output, which directly contributes to the high cost of silk. </p>\n<p><strong>(vi) Question:</strong> Complete the following with one suitable reason from the text: Silk production work can be carried out by skilled artisans because...<br><strong>Answer:</strong> ...the process is highly delicate and labor-intensive, requiring specialized knowledge and craftsmanship to extract the fine threads from cocoons without damaging the lustrous quality of the fabric. </p>\n<p><strong>(vii) Question:</strong> Based on the given text, which state was the smallest producer of silk?<br><strong>Answer:</strong> Uttar Pradesh (179 metric tonnes).</p>\n<p><strong>(viii) Question:</strong> Complete the sentence suitably. To carry out silk production requires careful selection because...<br><strong>Answer:</strong> ...superior quality silk depends on long, uniform fibers to ensure smoothness and luster, meaning only the finest cocoons must be selected, adding to the production complexity. </p>\n<p><strong>(ix) Question:</strong> Give one reason to support why production of silk is limited.<br><strong>Answer:</strong> Production is limited by climatic constraints, the availability of specific quality mulberry leaves, and the fixed biological time required for silkworms to complete their lifecycle. </p>\n<hr>\n<h2><strong>SECTION B - GRAMMAR &amp; WRITING (20 Marks)</strong></h2>\n<h3><strong>Q3. Grammar (10 marks)</strong></h3>\n<p><strong>(i) Question:</strong> Please do not hesitate to contact me if there are any further questions or if I can be of <strong>(assist)</strong> in any way.<br><strong>Answer:</strong> assistance</p>\n<p><strong>(ii) Question:</strong> Identify the error and supply the correction: &quot;experience the warmth of our <strong>hospitable</strong> and savour...&quot;<br><strong>Answer:</strong> Error: hospitable | Correction: hospitality</p>\n<p><strong>(iii) Question:</strong> Report Manish&#39;s question: &quot;How far is the engagement venue from your house?&quot;<br><strong>Answer:</strong> Manish asked Kriva how far the engagement venue was from her house.</p>\n<p><strong>(iv) Question:</strong> Select the correct option to complete the reporting: &quot;...Sharwari replied in the affirmative <strong>______</strong> two days for sightseeing.&quot;<br><strong>Answer:</strong> (B) that all the students would get</p>\n<p><strong>(v) Question:</strong> A notice is a type of social <strong>______</strong> used to present information...<br><strong>Answer:</strong> communication</p>\n<p><strong>(vi) Question:</strong> Identify the error: &quot;The board <strong>invite</strong> online applications...&quot;<br><strong>Answer:</strong> Error: invite | Correction: invites</p>\n<p><strong>(vii) Question:</strong> Identify and correct the error: &quot;...smoothening out as many <strong>wrinkle</strong> as possible.&quot;<br><strong>Answer:</strong> (C) Error: wrinkle | Correction: wrinkles</p>\n<p><strong>(viii) Question:</strong> After she <strong>______</strong> her homework, Anaisha finally relaxed...<br><strong>Answer:</strong> (B) had finished</p>\n<p><strong>(ix) Question:</strong> Ankita asked Tanu if <strong>______</strong>. Tanu enthusiastically replied in the affirmative...<br><strong>Answer:</strong> she would help her plan her itinerary</p>\n<p><strong>(x) Question:</strong> Welcome to our website! You <strong>______</strong> enjoy 10 percent off...<br><strong>Answer:</strong> (A) may</p>\n<p><strong>(xi) Question:</strong> Since morning the group of students <strong>______</strong> excited...<br><strong>Answer:</strong> (C) has been</p>\n<p><strong>(xii) Question:</strong> Identify the error: &quot;This product is <strong>manufacturing</strong> for infants...&quot;<br><strong>Answer:</strong> Error: manufacturing | Correction: manufactured</p>\n<hr>\n<h3><strong>Q4. Creative Writing - Letters (5 marks)</strong></h3>\n<p><strong>(A) Question:</strong> Write a letter to the Director, Alternate Energy Commission, sharing your views about &#39;Reducing the Carbon Footprint&#39; by encouraging renewable energy sources and subsidies. (120 words)</p>\n<p><strong>Answer:</strong></p>\n<p><strong>8576, Sarita Apartments</strong><br><strong>Hanger Street, New Delhi</strong></p>\n<p><strong>29 November 2025</strong></p>\n<p><strong>The Director</strong><br><strong>Alternate Energy Commission</strong><br><strong>New Delhi</strong></p>\n<p><strong>Subject: Promoting Renewable Energy to Reduce Carbon Footprint</strong></p>\n<p><strong>Respected Sir/Madam,</strong></p>\n<p>I am writing to express my concern regarding the escalating climate crisis and to suggest actionable measures to reduce our carbon footprint through the adoption of renewable energy.</p>\n<p>With global warming posing an immediate threat, shifting from fossil fuels to sustainable options like solar and wind energy is no longer optional but essential. However, the high installation cost of solar panels often deters the average citizen. I strongly urge the Commission to introduce attractive subsidy schemes for families willing to install renewable energy systems.</p>\n<p>Financial incentives would democratize access to green energy, allowing middle-class households to contribute to national sustainability goals. Furthermore, this would stimulate the green economy and significantly lower domestic reliance on the traditional power grid.</p>\n<p>I hope you will consider this proposal to make India a leader in sustainable living.</p>\n<p><strong>Yours faithfully,</strong><br><strong>Neha Panjwani</strong></p>\n<hr>\n<p><strong>(B) OR Question:</strong> Write a letter to the editor about a road crossing without a traffic signal leading to chaos and accidents. (120 words)</p>\n<p><strong>Answer:</strong></p>\n<p><strong>14-A, GVR Colony</strong><br><strong>Hoshiyarbad, Madhya Pradesh</strong></p>\n<p><strong>29 November 2025</strong></p>\n<p><strong>The Editor</strong><br><strong>The National Daily</strong><br><strong>New Delhi</strong></p>\n<p><strong>Subject: Urgent Need for Traffic Signal at GVR Colony Crossing</strong></p>\n<p><strong>Respected Sir/Madam,</strong></p>\n<p>Through the columns of your esteemed newspaper, I wish to draw the attention of the local authorities to the chaotic and dangerous traffic conditions at the main road crossing in GVR Colony.</p>\n<p>This intersection has become a nightmare for commuters. Due to the absence of a functional traffic signal, vehicles from all directions merge haphazardly, leading to gridlock during peak hours. More alarmingly, it has become an accident-prone zone, posing a severe threat to pedestrians, especially school children and the elderly. Despite repeated letters to the Traffic Commissioner, the situation remains unresolved.</p>\n<p>I urge the concerned authorities to immediately install a traffic signal and deploy traffic police to manage the flow. Immediate action is required to save lives and restore order.</p>\n<p><strong>Yours sincerely,</strong><br><strong>Shobhit Das</strong></p>\n<hr>\n<h3><strong>Q5. Creative Writing - Analytical Paragraph (5 marks)</strong></h3>\n<p><strong>(A) Question:</strong> Analyze the data showing rising enrolment in online courses (2017-2022) and discuss benefits/challenges. (120 words)</p>\n<p><strong>Answer:</strong></p>\n<p><strong>The Digital Revolution in Education</strong></p>\n<p>The provided data illustrates a massive paradigm shift in education, driven by technology. Between 2017 and 2022, the total number of enrolments in online courses skyrocketed from 26 million to 189 million, representing a seven-fold increase. The sharpest rise occurred between 2020 and 2021, likely triggered by the global pandemic.</p>\n<p>This trend highlights the democratization of knowledge. Technology has broken physical barriers, offering students instant access to information and flexible learning schedules. However, this digital transformation brings the challenge of the &quot;digital divide.&quot; While 189 million have access, countless others in economically disadvantaged regions may lack the devices or internet connectivity required to participate.</p>\n<p>In conclusion, while technology has successfully expanded educational reach, ensuring equitable access for all remains a critical challenge to prevent creating a gap between the digitally privileged and the deprived.</p>\n<hr>\n<p><strong>(B) OR Question:</strong> Write an analytical paragraph on &quot;AI – Benefits and Drawbacks&quot; using the given cues. (120 words)</p>\n<p><strong>Answer:</strong></p>\n<p><strong>Artificial Intelligence: Progress and Peril</strong></p>\n<p>Artificial Intelligence (AI) has fundamentally transformed modern existence, evolving from a futuristic concept into a daily utility possessed by machines. Its impact is ubiquitous; tools like Google Maps optimize our travel, and search engines place the world&#39;s knowledge at our fingertips.</p>\n<p>The benefits are undeniable: AI enhances efficiency, automates mundane tasks, and revolutionizes fields like healthcare. However, AI cannot wholly replicate human intuition, empathy, or moral reasoning. A significant drawback is the rise in cybercrime, where AI is weaponized for sophisticated fraud and identity theft. Furthermore, excessive reliance on AI risks diminishing human cognitive abilities and critical thinking.</p>\n<p>Ultimately, while AI is a powerful engine for progress, it requires strict ethical regulation to mitigate risks and ensure it serves humanity rather than dominating it.</p>\n<hr>\n<h2><strong>SECTION C - LITERATURE (40 Marks)</strong></h2>\n<h3><strong>Q6. Extract Based Questions (5 marks)</strong></h3>\n<p><strong>(A) Extract:</strong> &quot;The moon was coming up in the east... I was flying my old Dakota...&quot;</p>\n<p><strong>(i) Question:</strong> What time of the day is the above extract set in?<br><strong>Answer:</strong> (C) night<br><em>(The extract mentions the moon coming up and the time being 1:30 in the morning.)</em> </p>\n<p><strong>(ii) Question:</strong> State any one inference about the writer from the given context. &quot;I was looking forward to being with my family.&quot;<br><strong>Answer:</strong> The writer is a deeply family-oriented individual who values personal relationships. His excitement about the holiday is driven not just by rest, but by the emotional fulfillment of reuniting with his loved ones. </p>\n<p><strong>(iii) Question:</strong> Fill in the blank: The use of the phrase &#39;clear sky&#39; adds to a sense of <strong>______</strong> weather conditions.<br><strong>Answer:</strong> favourable</p>\n<p><strong>(iv) Question:</strong> How does the serene atmosphere described by the narrator contribute to the mood and anticipation of his journey back to England?<br><strong>Answer:</strong> The peaceful night sky, with shining stars and no clouds, creates a mood of calm, safety, and optimism. This tranquility heightens the narrator&#39;s happy anticipation of his breakfast and holiday, effectively setting up a sharp, dramatic contrast with the terrifying storm he encounters later. </p>\n<hr>\n<p><strong>(B) OR Extract:</strong> &quot;It&#39;s not my balcony,&quot; Ausable said with extreme irritation...</p>\n<p><strong>(i) Question:</strong> What was the management supposed to do regarding the balcony?<br><strong>Answer:</strong> The management had promised to block off the balcony&#39;s access from the neighboring empty room to secure Ausable&#39;s apartment from intruders, but they had failed to follow through on this safety measure. </p>\n<p><strong>(ii) Question:</strong> Which of the following was the reason that irritated Ausable about the balcony?<br><strong>Answer:</strong> (C) its accessibility from the neighbouring unit</p>\n<p><strong>(iii) Question:</strong> How does Ausable&#39;s detailed explanation of the balcony&#39;s history contribute to the atmosphere of suspense or tension in the story?<br><strong>Answer:</strong> Ausable’s intricate backstory about the balcony—linking it to a &quot;living room&quot; and a &quot;larger unit&quot;—makes the lie seem completely factual and grounded in reality. This detailed fabrication builds suspense by setting a trap for Max, showcasing Ausable&#39;s quick-witted manipulation under pressure. </p>\n<p><strong>(iv) Question:</strong> Fill in the blank: The reference to &#39;last month&#39; and &#39;now&#39; adds to a sense of <strong>______</strong>.<br><strong>Answer:</strong> mystery</p>\n<hr>\n<h3><strong>Q7. Extract Based Questions (Poetry) (5 marks)</strong></h3>\n<p><strong>(A) Extract:</strong> &quot;The way a crow / Shook down on me...&quot;</p>\n<p><strong>(i) Question:</strong> Shaking down of dust of snow gave the speaker a change of heart by...<br><strong>Answer:</strong> ...abruptly breaking his trance of melancholia and shifting his mood from gloom to appreciation, effectively saving the rest of his day from being wasted in regret.</p>\n<p><strong>(ii) Question:</strong> How does the interaction between the natural elements (crow, snow, hemlock tree) contribute to the speaker&#39;s emotional transformation in the poem?<br><strong>Answer:</strong> The crow and hemlock tree, traditionally symbols of doom and sorrow, paradoxically become agents of joy. This irony highlights that nature is not inherently negative; the sudden, cold touch of the snow acts as a physical shock that jolts the speaker out of his depressive thoughts and reconnects him with the present moment. </p>\n<p><strong>(iii) Question:</strong> &#39;Dust of Snow&#39; is referred to as:<br><strong>Answer:</strong> (D) snowflakes</p>\n<p><strong>(iv) Question:</strong> The crow and the hemlock tree represent <strong>______</strong>.<br><strong>Answer:</strong> (A) 1 only (sorrow)</p>\n<hr>\n<p><strong>(B) OR Extract:</strong> &quot;Don&#39;t bite your nails, Amanda! ...&quot;</p>\n<p><strong>(i) Question:</strong> How does the poet reinforce the contrast between what the narrator wants and what Amanda desires?<br><strong>Answer:</strong> The poet reinforces this contrast structurally by alternating stanzas. The parent’s harsh, imperative commands (external reality) are juxtaposed with Amanda’s dreamy, parenthetical reflections (internal desire). This structure highlights the clash between the suffocating control of the adult world and the child’s desperate desire for freedom and silence. </p>\n<p><strong>(ii) Question:</strong> What tone is conveyed through the repetition of Amanda&#39;s name in the line?<br><strong>Answer:</strong> (B) instructive</p>\n<p><strong>(iii) Question:</strong> How does the imagery of the emerald sea with the mermaid contrast with Amanda&#39;s actions?<br><strong>Answer:</strong> The &quot;languid, emerald sea&quot; represents a world of absolute freedom, fluidity, and solitude, where Amanda can drift &quot;blissfully.&quot; This contrasts sharply with her actual reality, where her physical actions—biting nails, slouching—are constantly scrutinized, corrected, and rigid.</p>\n<p><strong>(iv) Question:</strong> Select the option that applies the same rhyme scheme as the lines of the given extract.<br><strong>Answer:</strong> (D) (Matches the AABB pattern of the first stanza).</p>\n<hr>\n<h3><strong>Q8. Short Answer Questions (40-50 words each) (12 marks)</strong></h3>\n<p><strong>(i) Question:</strong> The young seagull&#39;s fear of flying and reluctance to leave his ledge contribute to the development of the theme of independence and courage in the story. Justify.<br><strong>Answer:</strong> The seagull&#39;s initial paralysis highlights that true courage is not the absence of fear, but the triumph over it. His journey from a starving, terrified bird to a soaring flyer demonstrates that independence requires facing one&#39;s internal demons. The story proves that self-reliance begins with the willingness to take that first, terrifying leap of faith into the unknown. </p>\n<p><strong>(ii) Question:</strong> In what ways does the contrast between the tiger&#39;s natural habitat and its confinement in a concrete cell enhance the poem&#39;s exploration of captivity and its consequences for wild animals?<br><strong>Answer:</strong> The poem juxtaposes the tiger’s natural power—stalking deer in long grass—with his helpless rage behind concrete bars. This sharp contrast underscores the cruelty of captivity, showing how imprisonment strips a majestic creature of its dignity, natural instincts, and vitality, reducing it to a mere exhibit that can only stare helplessly at the stars. </p>\n<p><strong>(iii) Question:</strong> The portrayal of the baker&#39;s attire and role in the village emphasize the cultural and social significance of bread-making within the community. Elaborate.<br><strong>Answer:</strong> The baker, or &#39;pader&#39;, was central to Goan life, evidenced by his distinct &#39;kabai&#39; dress. Bread was essential for all social rites—marriage gifts were meaningless without &#39;bol&#39;, and festivals required cakes. The baker was not just a vendor but a prosperous friend and companion, proving that bread-making was a pillar of Goan culture. </p>\n<p><strong>(iv) Question:</strong> What happens to the house when the trees move out of it? Comment.<br><strong>Answer:</strong> As the trees struggle to force their way out, the house physically breaks apart—glass shatters, and the smell of lichen and leaves vanishes. The artificial domestic space becomes empty and silent, symbolizing that nature cannot be permanently contained by human structures and will eventually rebel to reclaim its rightful freedom in the wild. </p>\n<p><strong>(v) Question:</strong> How does Valli&#39;s desire to ride the bus reflect her aspirations and challenges in context of her daily life?<br><strong>Answer:</strong> Valli’s intense desire represents a mature longing for independence and knowledge beyond her village boundaries. Her meticulous saving of stray coins and careful planning, despite her young age and poverty, reflect her determination to overcome the socio-economic limitations of her life to experience the wider world on her own terms. </p>\n<hr>\n<h3><strong>Q9. Short Answer Questions (40-50 words each) (6 marks)</strong></h3>\n<p><strong>(i) Question:</strong> How do Anil&#39;s initial reaction to Hari Singh&#39;s cooking and his subsequent actions reflect Anil&#39;s evolving relationship with Hari Singh?<br><strong>Answer:</strong> Anil tolerates Hari&#39;s terrible cooking with a smile, choosing to teach him rather than fire him. This act of patience marks the shift from employer to mentor. By teaching Hari to write and trusting him with money, Anil creates a bond of mutual respect that prioritizes human reform over professional competence. </p>\n<p><strong>(ii) Question:</strong> The unexpected encounter with the voice in the doorway affects Horace&#39;s burglary attempt. Elaborate.<br><strong>Answer:</strong> The lady’s confident voice and appearance trick Horace into believing she is the owner. This shatters his professional composure; driven by a fear of prison and a desperate desire to please her, he foolishly opens the safe without gloves. Her deception exploits his overconfidence, leading directly to his arrest. </p>\n<p><strong>(iii) Question:</strong> The play, &#39;The Book that Saved the Earth&#39;, uses humour and misunderstandings between the Martians and Earthlings to explore the themes of perception and cultural differences. Comment.<br><strong>Answer:</strong> The Martians&#39; misinterpretation of nursery rhymes as military threats (e.g., viewing &quot;shells&quot; in a garden as explosives) satirizes how ignorance shapes perception. It highlights that viewing other cultures through one&#39;s own narrow framework leads to absurd conclusions, blending comedy with a deeper lesson on the importance of context in communication. </p>\n<hr>\n<h3><strong>Q10. Long Answer Questions (100-120 words) (6 marks)</strong></h3>\n<p><strong>(A) Question:</strong> Comment on the reactions and feelings of Lencho and Nelson Mandela when they faced challenges in their lives.<br><strong>Answer:</strong><br>Lencho and Mandela faced immense hardships but responded with different forms of faith. Lencho, facing starvation after the hailstorm, demonstrated a naive but unshakeable faith in God, believing divine help was his right. However, his faith was limited; he lacked trust in humanity, ironically calling his helpers &quot;crooks.&quot;</p>\n<p>In contrast, Mandela faced the systemic brutality of apartheid. His faith was not in a magical intervention, but in the resilience of the human spirit. He learned that courage is not the absence of fear but the triumph over it. While Lencho’s battle was for personal survival, Mandela’s was for the dignity of a nation, transforming his suffering into wisdom and compassion for both the oppressed and the oppressor. </p>\n<p><strong>(B) OR Question:</strong> Discuss how the writers use language to create humour in the poem &#39;The Tale of Custard the Dragon&#39; and the play &#39;The Proposal&#39;.<br><strong>Answer:</strong><br>Ogden Nash uses irony and nonsensical words (&quot;realio, trulio&quot;) to create humor in &#39;Custard the Dragon&#39;. He builds up the &quot;bravery&quot; of the kitten, mouse, and dog, only to have them flee in terror, while the &quot;cowardly&quot; dragon saves the day. The humor lies in the reversal of expectations and the rhythmic, nursery-rhyme style.</p>\n<p>Chekhov uses satire and exaggeration in &#39;The Proposal&#39;. The characters meet to propose marriage but immediately descend into petty, screaming arguments over oxen meadows and dogs. The humor stems from the absurdity of their priorities—valuing property and ego over love. Both texts use language to expose human follies: Nash mocks false bravado, while Chekhov mocks the materialistic and quarrelsome nature of upper-class courtship. </p>\n<hr>\n<h3><strong>Q11. Long Answer Questions (100-120 words) (6 marks)</strong></h3>\n<p><strong>(A) Question:</strong> Discuss how Bholi evolves through the story. What are the qualities that contribute to her transformation from a timid girl to a confident young woman?<br><strong>Answer:</strong><br>Bholi transforms from a stammering, neglected &quot;simpleton&quot; into a confident, self-respecting woman named Sulekha. This evolution is primarily driven by education and her teacher’s compassionate mentorship, which gave her a voice and a sense of self-worth.</p>\n<p>Key qualities in her transformation include <strong>resilience</strong> and <strong>dignity</strong>. Despite years of mockery, she absorbed her teacher&#39;s encouragement. Her climax occurs when she rejects Bishamber, a greedy old man, to protect her father&#39;s dignity. She refuses to be treated as a &quot;dumb cow&quot; driven by social pressure, choosing instead to be a teacher who serves her parents. Her journey proves that education is a tool for liberation, turning a victim of fate into the master of her own destiny. </p>\n<p><strong>(B) OR Question:</strong> Hari&#39;s character evolves from being deceitful and opportunistic to remorseful and seeking redemption. Describe how his decision to return the money signifies a moral awakening.<br><strong>Answer:</strong><br>Hari Singh starts as a cynical, experienced thief who views people only as victims to be exploited. However, Anil’s unconditional trust and effort to educate him disrupt Hari’s criminal worldview.</p>\n<p>When Hari steals the money, he has the perfect chance to escape, yet he finds himself unable to board the train. His decision to return is a profound moral awakening; he realizes that education and respect are worth more than a few hundred rupees. He understands that stealing from a trusting man like Anil would not just be a crime, but a betrayal of his own potential. By returning the money, Hari chooses the difficult path of becoming a &quot;big man&quot; through education over the easy path of crime, marking his true redemption. </p>\n",
    "lastUpdated": "2025-11-29T14:11:05.276Z"
  },
  {
    "id": "Sector of Indian economy ",
    "name": "Sectors of Indian economy",
    "category": "Economics",
    "order": "9",
    "content": "<h1><strong>Sectors of the Indian Economy</strong></h1>\n<h2><strong>Introduction</strong></h2>\n<p>An <strong>economy</strong> is best understood when we study its <strong>components</strong> or <strong>sectors</strong> . <strong>Sectoral classification</strong> can be done on the basis of several criteria . This chapter discusses <strong>three types of classifications</strong>: <strong>primary/secondary/tertiary</strong>; <strong>organised/unorganised</strong>; and <strong>public/private</strong> .</p>\n<hr>\n<h2><strong>1. Sectors of Economic Activities</strong></h2>\n<h3><strong>1.1 Understanding Economic Activities</strong></h3>\n<h4><strong>Basic Concept</strong></h4>\n<ul>\n<li><p>People are engaged in various <strong>economic activities</strong> </p>\n</li>\n<li><p>Some activities produce <strong>goods</strong>; others produce <strong>services</strong> </p>\n</li>\n<li><p>These activities grouped (classified) using important criterion called <strong>sectors</strong></p>\n</li>\n</ul>\n<h3><strong>1.2 Primary Sector (Agriculture Sector)</strong></h3>\n<h4><strong>Definition and Characteristics</strong></h4>\n<ul>\n<li><p>Activities undertaken by <strong>directly using natural resources</strong> </p>\n</li>\n<li><p>Product is <strong>natural product</strong> obtained by <strong>exploiting natural resources</strong> </p>\n</li>\n<li><p>Forms the <strong>base for all other products</strong> that we subsequently make </p>\n</li>\n<li><p>Also called <strong>agriculture and related sector</strong></p>\n</li>\n</ul>\n<h4><strong>Key Features</strong></h4>\n<ul>\n<li><p>Depends mainly on <strong>natural factors</strong> like rainfall, sunshine, climate </p>\n</li>\n<li><p>Activities take place within <strong>natural cycles</strong> (e.g., crop season) </p>\n</li>\n<li><p>Involves <strong>biological processes</strong> of animals and plants</p>\n</li>\n</ul>\n<h4><strong>Examples of Primary Sector Activities</strong></h4>\n<ul>\n<li><p><strong>Agriculture</strong>: Cultivation of cotton, wheat, rice, etc. </p>\n</li>\n<li><p><strong>Dairy</strong>: Milk production depending on biological process of animals </p>\n</li>\n<li><p><strong>Fishing</strong>: Catching fish from water bodies </p>\n</li>\n<li><p><strong>Forestry</strong>: Collection of forest products </p>\n</li>\n<li><p><strong>Mining</strong>: Extraction of minerals and ores</p>\n</li>\n</ul>\n<h3><strong>1.3 Secondary Sector (Industrial Sector)</strong></h3>\n<h4><strong>Definition and Characteristics</strong></h4>\n<ul>\n<li><p>Activities in which <strong>natural products are changed into other forms</strong> through <strong>manufacturing</strong> </p>\n</li>\n<li><p><strong>Next step after primary</strong> sector </p>\n</li>\n<li><p>Product is <strong>not produced by nature</strong> but has to be <strong>made</strong> </p>\n</li>\n<li><p>Some <strong>process of manufacturing</strong> is essential </p>\n</li>\n<li><p>Also called <strong>industrial sector</strong></p>\n</li>\n</ul>\n<h4><strong>Manufacturing Locations</strong></h4>\n<ul>\n<li><p>Could be in a <strong>factory</strong> </p>\n</li>\n<li><p>Could be in a <strong>workshop</strong> </p>\n</li>\n<li><p>Could be at <strong>home</strong></p>\n</li>\n</ul>\n<h4><strong>Examples of Secondary Sector Activities</strong></h4>\n<ul>\n<li><p><strong>Textile manufacturing</strong>: Using cotton fibre to spin yarn and weave cloth </p>\n</li>\n<li><p><strong>Sugar production</strong>: Using sugarcane as raw material to make sugar or gur </p>\n</li>\n<li><p><strong>Brick making</strong>: Converting earth into bricks </p>\n</li>\n<li><p><strong>Construction</strong>: Using bricks to make houses and buildings </p>\n</li>\n<li><p><strong>Automobile manufacturing</strong>: Making cars, trucks, etc. </p>\n</li>\n<li><p><strong>Electronics</strong>: Making computers, phones, etc.</p>\n</li>\n</ul>\n<h3><strong>1.4 Tertiary Sector (Service Sector)</strong></h3>\n<h4><strong>Definition and Characteristics</strong></h4>\n<ul>\n<li><p>Third category of activities, <strong>different from primary and secondary</strong> </p>\n</li>\n<li><p>Activities that <strong>help in development</strong> of primary and secondary sectors </p>\n</li>\n<li><p>By themselves, <strong>do not produce a good</strong> </p>\n</li>\n<li><p>They are an <strong>aid or support</strong> for the production process </p>\n</li>\n<li><p>Also called <strong>service sector</strong></p>\n</li>\n</ul>\n<h4><strong>Support Services</strong></h4>\n<ul>\n<li><p><strong>Transport</strong>: Goods transported by trucks or trains </p>\n</li>\n<li><p><strong>Trade</strong>: Goods sold in wholesale and retail shops </p>\n</li>\n<li><p><strong>Storage</strong>: Storing goods in godowns </p>\n</li>\n<li><p><strong>Communication</strong>: Talking over telephone, sending letters </p>\n</li>\n<li><p><strong>Banking</strong>: Borrowing money from banks to help production and trade</p>\n</li>\n</ul>\n<h4><strong>Essential Services</strong></h4>\n<ul>\n<li><p>May <strong>not directly help in production</strong> of goods </p>\n</li>\n<li><p>Examples include:</p>\n<ul>\n<li><strong>Education</strong>: Teachers educating students </li>\n<li><strong>Healthcare</strong>: Doctors treating patients </li>\n<li><strong>Personal services</strong>: Washermen, barbers, cobblers </li>\n<li><strong>Professional services</strong>: Lawyers </li>\n<li><strong>Administrative work</strong>: Accounting and administration</li>\n</ul>\n</li>\n</ul>\n<h4><strong>New Services (Information Technology-Based)</strong></h4>\n<ul>\n<li><p><strong>Internet cafes</strong> </p>\n</li>\n<li><p><strong>ATM booths</strong> </p>\n</li>\n<li><p><strong>Call centres</strong> </p>\n</li>\n<li><p><strong>Software companies</strong> </p>\n</li>\n<li><p>These services have become <strong>important in recent times</strong></p>\n</li>\n</ul>\n<h3><strong>1.5 Interdependence of Sectors</strong></h3>\n<h4><strong>How Sectors Depend on Each Other</strong></h4>\n<p><strong>Secondary Sector Depends on Primary:</strong></p>\n<ul>\n<li>Example: If <strong>farmers refuse to sell sugarcane</strong> to a sugar mill, the mill will have to <strong>shut down</strong></li>\n</ul>\n<p><strong>Primary Sector Depends on Secondary:</strong></p>\n<ul>\n<li><p>If companies decide <strong>not to buy cotton</strong> from Indian market and import from other countries </p>\n</li>\n<li><p>Indian <strong>cotton cultivation</strong> will become <strong>less profitable</strong> </p>\n</li>\n<li><p>Farmers may even go <strong>bankrupt</strong> if they cannot switch to other crops </p>\n</li>\n<li><p><strong>Cotton prices will fall</strong></p>\n</li>\n</ul>\n<p><strong>Primary Sector Depends on Inputs:</strong></p>\n<ul>\n<li><p>Farmers buy goods like <strong>tractors, pumpsets, electricity, pesticides, fertilisers</strong> </p>\n</li>\n<li><p>If <strong>price of fertilisers or pumpsets go up</strong> </p>\n</li>\n<li><p><strong>Cost of cultivation</strong> rises and <strong>profits</strong> are reduced</p>\n</li>\n</ul>\n<p><strong>Tertiary Sector Supports Primary:</strong></p>\n<ul>\n<li><p>People working in industrial and service sectors <strong>need food</strong> </p>\n</li>\n<li><p>If strike by <strong>transporters</strong> and lorries refuse to take vegetables, milk from rural areas </p>\n</li>\n<li><p><strong>Food becomes scarce</strong> in urban areas </p>\n</li>\n<li><p>Farmers <strong>unable to sell their products</strong></p>\n</li>\n</ul>\n<hr>\n<h2><strong>2. Comparing the Three Sectors</strong></h2>\n<h3><strong>2.1 Measuring Production in Sectors</strong></h3>\n<h4><strong>Challenge of Counting Goods and Services</strong></h4>\n<ul>\n<li><p>With <strong>thousands of goods and services</strong> produced, counting seems impossible </p>\n</li>\n<li><p>Cannot simply <strong>add up cars, computers, nails, and furniture</strong></p>\n</li>\n</ul>\n<h4><strong>Solution: Using Values</strong></h4>\n<ul>\n<li><p>Economists suggest using <strong>values of goods and services</strong> rather than actual numbers </p>\n</li>\n<li><p>Example: </p>\n<ul>\n<li><strong>10,000 kgs of wheat</strong> sold at <strong>Rs 20 per kg</strong> = Value of <strong>Rs 2,00,000</strong> </li>\n<li><strong>5000 coconuts</strong> at <strong>Rs 15 per coconut</strong> = Value of <strong>Rs 75,000</strong></li>\n</ul>\n</li>\n</ul>\n<h3><strong>2.2 Final Goods vs Intermediate Goods</strong></h3>\n<h4><strong>Final Goods</strong></h4>\n<ul>\n<li><p>Goods that <strong>reach the consumers</strong> </p>\n</li>\n<li><p>Only <strong>final goods and services</strong> should be counted</p>\n</li>\n</ul>\n<h4><strong>Intermediate Goods</strong></h4>\n<ul>\n<li><p>Goods <strong>used up in producing final goods</strong> and services </p>\n</li>\n<li><p>Should <strong>not be counted separately</strong></p>\n</li>\n</ul>\n<h4><strong>Example: Biscuit Production</strong></h4>\n<ul>\n<li><p><strong>Step 1</strong>: Farmer sells wheat to flour mill for <strong>Rs 20 per kg</strong> </p>\n</li>\n<li><p><strong>Step 2</strong>: Mill grinds wheat and sells flour to biscuit company for <strong>Rs 25 per kg</strong> </p>\n</li>\n<li><p><strong>Step 3</strong>: Biscuit company uses flour, sugar, oil to make <strong>four packets of biscuits</strong> </p>\n</li>\n<li><p><strong>Step 4</strong>: Sells biscuits to consumers for <strong>Rs 80</strong> (Rs 20 per packet) </p>\n</li>\n<li><p><strong>Biscuits are final goods</strong>; wheat and flour are <strong>intermediate goods</strong> </p>\n</li>\n<li><p>Value of <strong>Rs 80 for biscuits already includes</strong> value of flour (Rs 25) </p>\n</li>\n<li><p>Counting flour and wheat separately would mean <strong>counting the same things multiple times</strong></p>\n</li>\n</ul>\n<h3><strong>2.3 Gross Domestic Product (GDP)</strong></h3>\n<h4><strong>Definition</strong></h4>\n<ul>\n<li><p><strong>Value of final goods and services</strong> produced in each sector during a particular year </p>\n</li>\n<li><p><strong>Sum of production in three sectors</strong> = <strong>GDP</strong> of a country </p>\n</li>\n<li><p>GDP is value of <strong>all final goods and services</strong> produced <strong>within a country</strong> during a <strong>particular year</strong> </p>\n</li>\n<li><p>GDP shows <strong>how big the economy is</strong></p>\n</li>\n</ul>\n<h4><strong>Measuring GDP in India</strong></h4>\n<ul>\n<li><p><strong>Mammoth task</strong> undertaken by <strong>central government ministry</strong> </p>\n</li>\n<li><p>Ministry, with help of <strong>government departments of all states and union territories</strong>, collects information </p>\n</li>\n<li><p>Collects data on:</p>\n<ul>\n<li><strong>Total volume of goods and services</strong> </li>\n<li>Their <strong>prices</strong></li>\n</ul>\n</li>\n<li><p>Then <strong>estimates the GDP</strong></p>\n</li>\n</ul>\n<h3><strong>2.4 Historical Change in Sectors</strong></h3>\n<h4><strong>Pattern in Developed Countries</strong></h4>\n<p><strong>Stage 1: Primary Sector Dominance</strong></p>\n<ul>\n<li><p>At <strong>initial stages of development</strong>, <strong>primary sector</strong> was most important </p>\n</li>\n<li><p>Most goods produced were <strong>natural products</strong> from primary sector </p>\n</li>\n<li><p>Most people <strong>employed in primary sector</strong></p>\n</li>\n</ul>\n<p><strong>Stage 2: Secondary Sector Growth</strong></p>\n<ul>\n<li><p>Over a long time (more than <strong>hundred years</strong>) </p>\n</li>\n<li><p><strong>New methods of manufacturing</strong> were introduced </p>\n</li>\n<li><p><strong>Factories came up</strong> and started expanding </p>\n</li>\n<li><p>People who worked on farms began to work in <strong>factories in large numbers</strong> </p>\n</li>\n<li><p>People began to use many more goods produced in <strong>factories at cheap rates</strong> </p>\n</li>\n<li><p><strong>Secondary sector</strong> gradually became most important in <strong>total production and employment</strong> </p>\n</li>\n<li><p>A <strong>shift had taken place</strong></p>\n</li>\n</ul>\n<p><strong>Stage 3: Tertiary Sector Dominance</strong></p>\n<ul>\n<li><p>In past <strong>100 years</strong>, further shift from <strong>secondary to tertiary</strong> sector in developed countries </p>\n</li>\n<li><p><strong>Service sector</strong> has become most important in terms of <strong>total production</strong> </p>\n</li>\n<li><p>Most working people employed in <strong>service sector</strong> </p>\n</li>\n<li><p>This is the <strong>general pattern</strong> observed in developed countries</p>\n</li>\n</ul>\n<h3><strong>2.5 Sectoral Changes in India (1973-74 to 2013-14)</strong></h3>\n<h4><strong>Production Growth (Graph 1)</strong></h4>\n<p><strong>Key Observations:</strong></p>\n<ul>\n<li><p><strong>Total production</strong> has grown significantly over forty years </p>\n</li>\n<li><p>Production in <strong>all three sectors</strong> has increased </p>\n</li>\n<li><p>Increased <strong>most in tertiary sector</strong></p>\n</li>\n</ul>\n<p><strong>1973-74:</strong></p>\n<ul>\n<li><strong>Primary sector</strong> was the <strong>largest producing sector</strong></li>\n</ul>\n<p><strong>2013-14:</strong></p>\n<ul>\n<li><p><strong>Tertiary sector</strong> emerged as <strong>largest producing sector</strong> in India </p>\n</li>\n<li><p><strong>Replaced the primary sector</strong></p>\n</li>\n</ul>\n<h4><strong>Share in GDP (Graph 2)</strong></h4>\n<p><strong>Primary Sector:</strong></p>\n<ul>\n<li><p><strong>1973-74</strong>: Approximately <strong>40%</strong> of GDP </p>\n</li>\n<li><p><strong>2013-14</strong>: Approximately <strong>15%</strong> of GDP </p>\n</li>\n<li><p>Share has <strong>decreased significantly</strong></p>\n</li>\n</ul>\n<p><strong>Secondary Sector:</strong></p>\n<ul>\n<li><p><strong>1973-74</strong>: Approximately <strong>20%</strong> of GDP </p>\n</li>\n<li><p><strong>2013-14</strong>: Approximately <strong>30%</strong> of GDP </p>\n</li>\n<li><p>Share has <strong>increased moderately</strong></p>\n</li>\n</ul>\n<p><strong>Tertiary Sector:</strong></p>\n<ul>\n<li><p><strong>1973-74</strong>: Approximately <strong>40%</strong> of GDP </p>\n</li>\n<li><p><strong>2013-14</strong>: Approximately <strong>55%</strong> of GDP </p>\n</li>\n<li><p>Share has <strong>increased significantly</strong></p>\n</li>\n</ul>\n<h3><strong>2.6 Rising Importance of Tertiary Sector in India</strong></h3>\n<h4><strong>Reason 1: Basic Services</strong></h4>\n<ul>\n<li><p>Several services are <strong>required in any country</strong>: </p>\n<ul>\n<li><strong>Hospitals</strong> </li>\n<li><strong>Educational institutions</strong> </li>\n<li><strong>Post and telegraph services</strong> </li>\n<li><strong>Police stations</strong> </li>\n<li><strong>Courts</strong> </li>\n<li><strong>Village administrative offices</strong> </li>\n<li><strong>Municipal corporations</strong> </li>\n<li><strong>Defence</strong> </li>\n<li><strong>Transport</strong> </li>\n<li><strong>Banks</strong> </li>\n<li><strong>Insurance companies</strong></li>\n</ul>\n</li>\n<li><p>These are <strong>basic services</strong> </p>\n</li>\n<li><p>In a developing country, <strong>government has to take responsibility</strong> for provision of these services</p>\n</li>\n</ul>\n<h4><strong>Reason 2: Support for Primary and Secondary Sectors</strong></h4>\n<ul>\n<li><p>Development of <strong>agriculture and industry</strong> leads to development of services </p>\n</li>\n<li><p>Services like <strong>transport, trade, storage</strong> </p>\n</li>\n<li><p><strong>Greater the development</strong> of primary and secondary sectors, <strong>more the demand</strong> for such services</p>\n</li>\n</ul>\n<h4><strong>Reason 3: Rising Income Levels</strong></h4>\n<ul>\n<li><p>As <strong>income levels rise</strong>, certain sections of people start demanding <strong>many more services</strong> </p>\n</li>\n<li><p>Examples:</p>\n<ul>\n<li><strong>Eating out</strong> </li>\n<li><strong>Tourism</strong> </li>\n<li><strong>Shopping</strong> </li>\n<li><strong>Private hospitals</strong> </li>\n<li><strong>Private schools</strong> </li>\n<li><strong>Professional training</strong></li>\n</ul>\n</li>\n<li><p>This change seen quite <strong>sharply in cities</strong>, especially <strong>big cities</strong></p>\n</li>\n</ul>\n<h4><strong>Reason 4: New Information Technology Services</strong></h4>\n<ul>\n<li><p>Over past <strong>decade or so</strong>, certain <strong>new services</strong> have become important </p>\n</li>\n<li><p>Based on <strong>information and communication technology</strong> </p>\n</li>\n<li><p>Production of these services has been <strong>rising rapidly</strong></p>\n</li>\n</ul>\n<h4><strong>Important Note: Unequal Growth</strong></h4>\n<ul>\n<li><p><strong>Not all of service sector</strong> is growing equally well </p>\n</li>\n<li><p><strong>At one end</strong>: Limited number of services employing <strong>highly skilled and educated workers</strong> </p>\n</li>\n<li><p><strong>At other end</strong>: Very large number of workers engaged in:</p>\n<ul>\n<li><strong>Small shopkeepers</strong> </li>\n<li><strong>Repair persons</strong> </li>\n<li><strong>Transport persons</strong></li>\n</ul>\n</li>\n<li><p>These people <strong>barely manage to earn a living</strong> </p>\n</li>\n<li><p>Perform services because <strong>no alternative opportunities</strong> available </p>\n</li>\n<li><p>Hence, <strong>only a part of sector</strong> is growing in importance</p>\n</li>\n</ul>\n<hr>\n<h2><strong>3. Employment in Three Sectors</strong></h2>\n<h3><strong>3.1 Comparison: Production vs Employment</strong></h3>\n<h4><strong>Key Observation</strong></h4>\n<ul>\n<li><p>While there has been <strong>change in share of three sectors in GDP</strong> </p>\n</li>\n<li><p>A <strong>similar shift has not taken place in employment</strong></p>\n</li>\n</ul>\n<h4><strong>Share in Employment (Graph 3)</strong></h4>\n<p><strong>Primary Sector:</strong></p>\n<ul>\n<li><p><strong>1977-78</strong>: Approximately <strong>70%</strong> of employment </p>\n</li>\n<li><p><strong>2017-18</strong>: Approximately <strong>42%</strong> of employment </p>\n</li>\n<li><p>Continues to be the <strong>largest employer even now</strong></p>\n</li>\n</ul>\n<p><strong>Secondary Sector:</strong></p>\n<ul>\n<li><p><strong>1977-78</strong>: Approximately <strong>13%</strong> of employment </p>\n</li>\n<li><p><strong>2017-18</strong>: Approximately <strong>25%</strong> of employment</p>\n</li>\n</ul>\n<p><strong>Tertiary Sector:</strong></p>\n<ul>\n<li><p><strong>1977-78</strong>: Approximately <strong>17%</strong> of employment </p>\n</li>\n<li><p><strong>2017-18</strong>: Approximately <strong>33%</strong> of employment</p>\n</li>\n</ul>\n<h3><strong>3.2 Why Employment Shift Did Not Happen?</strong></h3>\n<h4><strong>Insufficient Job Creation</strong></h4>\n<ul>\n<li><p><strong>Not enough jobs</strong> were created in secondary and tertiary sectors </p>\n</li>\n<li><p>Even though <strong>industrial output</strong> went up by <strong>more than nine times</strong> </p>\n</li>\n<li><p>Employment in industry went up by only around <strong>three times</strong> </p>\n</li>\n<li><p>While <strong>production in service sector</strong> rose by <strong>14 times</strong> </p>\n</li>\n<li><p>Employment in service sector rose around <strong>five times</strong></p>\n</li>\n</ul>\n<h4><strong>Current Situation</strong></h4>\n<ul>\n<li><p>More than <strong>half of workers</strong> are working in <strong>primary sector</strong> </p>\n</li>\n<li><p>Mainly in <strong>agriculture</strong> </p>\n</li>\n<li><p>Producing only about <strong>one-sixth of GDP</strong> </p>\n</li>\n<li><p>In contrast, <strong>secondary and tertiary sectors</strong> produce <strong>rest of produce</strong> </p>\n</li>\n<li><p>But employ <strong>less than half the people</strong></p>\n</li>\n</ul>\n<h3><strong>3.3 Underemployment and Disguised Unemployment</strong></h3>\n<h4><strong>Definition of Underemployment</strong></h4>\n<ul>\n<li><p>There are <strong>more people in agriculture than is necessary</strong> </p>\n</li>\n<li><p>Even if you <strong>move a few people out</strong>, production will <strong>not be affected</strong> </p>\n</li>\n<li><p>Workers in agricultural sector are <strong>underemployed</strong> </p>\n</li>\n<li><p>People are <strong>apparently working</strong> but all made to work <strong>less than their potential</strong></p>\n</li>\n</ul>\n<h4><strong>Disguised Unemployment</strong></h4>\n<ul>\n<li><p>This kind of underemployment is <strong>hidden</strong> </p>\n</li>\n<li><p>In contrast to someone who <strong>does not have a job</strong> and is <strong>clearly visible as unemployed</strong> </p>\n</li>\n<li><p>Hence called <strong>disguised unemployment</strong></p>\n</li>\n</ul>\n<h4><strong>Example: Laxmi&#39;s Farm</strong></h4>\n<p><strong>Situation:</strong></p>\n<ul>\n<li><p>Small farmer <strong>Laxmi</strong> owning about <strong>two hectares of unirrigated land</strong> </p>\n</li>\n<li><p>Dependent only on <strong>rain</strong> </p>\n</li>\n<li><p>Growing crops like <strong>jowar and arhar</strong> </p>\n</li>\n<li><p><strong>All five members</strong> of her family work in plot throughout the year</p>\n</li>\n</ul>\n<p><strong>Problem:</strong></p>\n<ul>\n<li><p>They have <strong>nowhere else to go</strong> for work </p>\n</li>\n<li><p>Everyone is working, <strong>none remains idle</strong> </p>\n</li>\n<li><p>But their <strong>labour effort gets divided</strong> </p>\n</li>\n<li><p>Each one doing some work but <strong>no one is fully employed</strong></p>\n</li>\n</ul>\n<p><strong>Solution Impact:</strong></p>\n<ul>\n<li><p>Suppose landlord <strong>Sukhram</strong> hires <strong>one or two members</strong> to work on his land </p>\n</li>\n<li><p>Laxmi&#39;s family now able to earn <strong>extra income through wages</strong> </p>\n</li>\n<li><p>Since <strong>do not need five people</strong> to look after small plot </p>\n</li>\n<li><p><strong>Two people moving out</strong> does not affect <strong>production on their farm</strong> </p>\n</li>\n<li><p><strong>Earnings of family increase</strong></p>\n</li>\n</ul>\n<h4><strong>Underemployment in Other Sectors</strong></h4>\n<p><strong>Service Sector in Urban Areas:</strong></p>\n<ul>\n<li><p>Thousands of <strong>casual workers</strong> search for <strong>daily employment</strong> </p>\n</li>\n<li><p>Employed as:</p>\n<ul>\n<li><strong>Painters</strong> </li>\n<li><strong>Plumbers</strong> </li>\n<li><strong>Repair persons</strong> </li>\n<li>Others doing <strong>odd jobs</strong></li>\n</ul>\n</li>\n<li><p>Many <strong>don&#39;t find work everyday</strong> </p>\n</li>\n<li><p>People on street <strong>pushing a cart</strong> or <strong>selling something</strong> </p>\n</li>\n<li><p>May spend <strong>whole day</strong> but earn <strong>very little</strong> </p>\n</li>\n<li><p>Doing this work because they do not have <strong>better opportunities</strong></p>\n</li>\n</ul>\n<hr>\n<h2><strong>4. How to Create More Employment</strong></h2>\n<h3><strong>4.1 Within Agriculture Sector</strong></h3>\n<h4><strong>Irrigation Development</strong></h4>\n<p><strong>Example: Laxmi&#39;s Farm Improvement</strong></p>\n<ul>\n<li><p>Government can spend money or <strong>banks provide loan</strong> </p>\n</li>\n<li><p>To construct a <strong>well</strong> for irrigation </p>\n</li>\n<li><p>Laxmi able to <strong>irrigate land</strong> and take <strong>second crop (wheat)</strong> during <strong>rabi season</strong> </p>\n</li>\n<li><p>One hectare of wheat provides employment to <strong>two people for 50 days</strong> </p>\n</li>\n<li><p>Includes: sowing, watering, fertiliser application, harvesting </p>\n</li>\n<li><p><strong>Two more members</strong> of family can be employed in own field</p>\n</li>\n</ul>\n<p><strong>Large-Scale Impact:</strong></p>\n<ul>\n<li><p>If new <strong>dam constructed</strong> and <strong>canals dug</strong> to irrigate many farms </p>\n</li>\n<li><p>Could lead to <strong>lot of employment generation</strong> within agricultural sector </p>\n</li>\n<li><p><strong>Reducing problem of underemployment</strong></p>\n</li>\n</ul>\n<h4><strong>Transportation and Storage Infrastructure</strong></h4>\n<ul>\n<li><p>If farmers produce <strong>much more than before</strong>, need to <strong>sell some of this</strong> </p>\n</li>\n<li><p>May be required to <strong>transport products to nearby town</strong> </p>\n</li>\n<li><p>If government invests in:</p>\n<ul>\n<li><strong>Transportation</strong> of crops </li>\n<li><strong>Storage</strong> of crops </li>\n<li><strong>Better rural roads</strong> so mini-trucks reach everywhere</li>\n</ul>\n</li>\n<li><p>Farmers can continue to <strong>grow and sell crops</strong> </p>\n</li>\n<li><p>Provides <strong>productive employment</strong> to:</p>\n<ul>\n<li><strong>Farmers</strong> </li>\n<li>Those in <strong>services like transport or trade</strong></li>\n</ul>\n</li>\n</ul>\n<h4><strong>Cheap Agricultural Credit</strong></h4>\n<ul>\n<li><p>Farmer needs <strong>seeds, fertilisers, agricultural equipment, pumpsets</strong> </p>\n</li>\n<li><p>Being <strong>poor farmer</strong>, cannot afford many of these </p>\n</li>\n<li><p>Has to <strong>borrow money from moneylenders</strong> and pay <strong>high rate of interest</strong> </p>\n</li>\n<li><p>If <strong>local bank gives credit at reasonable rate</strong> of interest </p>\n</li>\n<li><p>Will be able to <strong>buy all these in time</strong> and cultivate land </p>\n</li>\n<li><p>Along with water, also need to provide <strong>cheap agricultural credit</strong> for farming to improve</p>\n</li>\n</ul>\n<h3><strong>4.2 Industries and Services in Semi-Rural Areas</strong></h3>\n<h4><strong>Agro-Processing Industries</strong></h4>\n<p><strong>Dal Mill:</strong></p>\n<ul>\n<li><p>Many farmers decide to grow <strong>arhar and chickpea</strong> (pulse crops) </p>\n</li>\n<li><p>Setting up <strong>dal mill</strong> to:</p>\n<ul>\n<li><strong>Procure and process</strong> these </li>\n<li><strong>Sell in cities</strong></li>\n</ul>\n</li>\n</ul>\n<p><strong>Cold Storage:</strong></p>\n<ul>\n<li>Opening cold storage gives opportunity for farmers to:<ul>\n<li><strong>Store products</strong> like potatoes and onions </li>\n<li><strong>Sell when price is good</strong></li>\n</ul>\n</li>\n</ul>\n<p><strong>Honey Collection Centers:</strong></p>\n<ul>\n<li><p>In villages near <strong>forest areas</strong> </p>\n</li>\n<li><p>Farmers can come and sell <strong>wild honey</strong></p>\n</li>\n</ul>\n<p><strong>Food Processing Industries:</strong></p>\n<ul>\n<li><p>Industries that <strong>process vegetables and agricultural produce</strong> </p>\n</li>\n<li><p>Examples: <strong>potato, sweet potato, rice, wheat, tomato, fruits</strong> </p>\n</li>\n<li><p>Can be <strong>sold in outside markets</strong> </p>\n</li>\n<li><p>Provides employment in <strong>industries located in semi-rural areas</strong> </p>\n</li>\n<li><p><strong>Not necessarily in large urban centres</strong></p>\n</li>\n</ul>\n<h3><strong>4.3 Education and Health Sectors</strong></h3>\n<h4><strong>Current Situation</strong></h4>\n<ul>\n<li><p>In India, about <strong>60% of population</strong> belongs to <strong>age group 5-29 years</strong> </p>\n</li>\n<li><p>Out of this, only about <strong>51% are attending educational institutions</strong> </p>\n</li>\n<li><p>Rest, particularly those <strong>aged less than 18 years</strong>, may be:</p>\n<ul>\n<li>At home </li>\n<li>Working as <strong>child labourers</strong></li>\n</ul>\n</li>\n</ul>\n<h4><strong>Employment Potential</strong></h4>\n<p><strong>Education Sector:</strong></p>\n<ul>\n<li><p>If these children attend schools </p>\n</li>\n<li><p>Will require:</p>\n<ul>\n<li>More <strong>buildings</strong> </li>\n<li>More <strong>teachers</strong> </li>\n<li>Other <strong>staff</strong></li>\n</ul>\n</li>\n<li><p>Study by <strong>Planning Commission</strong> (now <strong>NITI Aayog</strong>) estimates </p>\n</li>\n<li><p>Nearly <strong>20 lakh jobs</strong> can be created in <strong>education sector alone</strong></p>\n</li>\n</ul>\n<p><strong>Health Sector:</strong></p>\n<ul>\n<li><p>To improve health situation </p>\n</li>\n<li><p>Need many more:</p>\n<ul>\n<li><strong>Doctors</strong> </li>\n<li><strong>Nurses</strong> </li>\n<li><strong>Health workers</strong></li>\n</ul>\n</li>\n<li><p>To work in <strong>rural areas</strong></p>\n</li>\n</ul>\n<h3><strong>4.4 Tourism and Regional Crafts</strong></h3>\n<h4><strong>Potential of Each Region</strong></h4>\n<ul>\n<li><p>Every <strong>state or region</strong> has potential for increasing <strong>income and employment</strong> </p>\n</li>\n<li><p>Could be:</p>\n<ul>\n<li><strong>Tourism</strong> </li>\n<li><strong>Regional craft industry</strong> </li>\n<li><strong>New services like IT</strong></li>\n</ul>\n</li>\n</ul>\n<h4><strong>Government Support Required</strong></h4>\n<ul>\n<li><p>Some would require proper <strong>planning and support</strong> from government </p>\n</li>\n<li><p><strong>Planning Commission study</strong> says:</p>\n<ul>\n<li>If <strong>tourism as sector</strong> is improved </li>\n<li>Every year can give additional employment to more than <strong>35 lakh people</strong></li>\n</ul>\n</li>\n</ul>\n<h3><strong>4.5 MGNREGA 2005 - Right to Work</strong></h3>\n<h4><strong>Full Name</strong></h4>\n<ul>\n<li><p><strong>Mahatma Gandhi National Rural Employment Guarantee Act 2005</strong> </p>\n</li>\n<li><p>Abbreviated as <strong>MGNREGA 2005</strong></p>\n</li>\n</ul>\n<h4><strong>Background and Implementation</strong></h4>\n<ul>\n<li><p>Passed on <strong>23 August 2005</strong> </p>\n</li>\n<li><p>Implemented in <strong>February 2006</strong> </p>\n</li>\n<li><p>Under <strong>UPA government</strong> of Prime Minister <strong>Manmohan Singh</strong> </p>\n</li>\n<li><p>Originally known as <strong>National Rural Employment Guarantee Act (NREGA)</strong> </p>\n</li>\n<li><p><strong>One of largest work guarantee programmes</strong> in the world</p>\n</li>\n</ul>\n<h4><strong>Coverage</strong></h4>\n<ul>\n<li>Implemented in about <strong>625 districts</strong> of India</li>\n</ul>\n<h4><strong>Main Provisions</strong></h4>\n<p><strong>Guarantee:</strong></p>\n<ul>\n<li><p>All those who are <strong>able to</strong> and are <strong>in need of work</strong> in rural areas </p>\n</li>\n<li><p>Guaranteed <strong>100 days of employment in a year</strong> by government </p>\n</li>\n<li><p>At least <strong>one member</strong> of every rural household </p>\n</li>\n<li><p>Whose <strong>adult members volunteer</strong> to do <strong>unskilled manual work</strong></p>\n</li>\n</ul>\n<p><strong>Failure to Provide Work:</strong></p>\n<ul>\n<li><p>If government <strong>fails in duty</strong> to provide employment </p>\n</li>\n<li><p>Will give <strong>unemployment allowances</strong> to people </p>\n</li>\n<li><p>Must be paid if work not provided within <strong>15 days of applying</strong></p>\n</li>\n</ul>\n<p><strong>Types of Work:</strong></p>\n<ul>\n<li><p>Work that would in future help to <strong>increase production from land</strong> </p>\n</li>\n<li><p>Given preference under the Act </p>\n</li>\n<li><p>Permissible works include: </p>\n<ul>\n<li><strong>Water conservation and water harvesting</strong> </li>\n<li><strong>Drought proofing</strong> including afforestation </li>\n<li><strong>Irrigation works</strong> </li>\n<li><strong>Restoration of traditional water bodies</strong> </li>\n<li><strong>Land development</strong> </li>\n<li><strong>Flood control</strong> </li>\n<li><strong>Rural connectivity</strong></li>\n</ul>\n</li>\n</ul>\n<p><strong>Other Features:</strong></p>\n<ul>\n<li><p>Employment to be provided <strong>within 5 km</strong> of applicant&#39;s residence </p>\n</li>\n<li><p><strong>Minimum legal wage</strong> to be paid </p>\n</li>\n<li><p><strong>Women guaranteed one half</strong> of jobs made available </p>\n</li>\n<li><p>Aims to create <strong>durable assets</strong> (roads, canals, ponds, wells)</p>\n</li>\n</ul>\n<h4><strong>Why Called &quot;Right to Work&quot;</strong></h4>\n<ul>\n<li><p>Aims to guarantee the <strong>&#39;right to work&#39;</strong> </p>\n</li>\n<li><p><strong>Legal provisions</strong> for allowances and compensation </p>\n</li>\n<li><p>Both in cases of:</p>\n<ul>\n<li><strong>Failure to provide work</strong> on demand </li>\n<li><strong>Delays in payment</strong> of wages</li>\n</ul>\n</li>\n<li><p><strong>Demand-driven programme</strong> where provision of work triggered by demand for work</p>\n</li>\n</ul>\n<hr>\n<h2><strong>5. Division of Sectors: Organised and Unorganised</strong></h2>\n<h3><strong>5.1 Understanding the Classification</strong></h3>\n<h4><strong>Basis of Classification</strong></h4>\n<ul>\n<li><p>Looks at <strong>way people are employed</strong> </p>\n</li>\n<li><p><strong>Conditions of work</strong> </p>\n</li>\n<li><p>Whether there are <strong>rules and regulations</strong> followed regarding employment</p>\n</li>\n</ul>\n<h3><strong>5.2 Organised Sector</strong></h3>\n<h4><strong>Definition</strong></h4>\n<ul>\n<li><p>Covers <strong>enterprises or places of work</strong> where:</p>\n<ul>\n<li><strong>Terms of employment</strong> are regular </li>\n<li>People have <strong>assured work</strong></li>\n</ul>\n</li>\n<li><p><strong>Registered by government</strong> </p>\n</li>\n<li><p>Have to follow <strong>rules and regulations</strong></p>\n</li>\n</ul>\n<h4><strong>Laws Governing Organised Sector</strong></h4>\n<ul>\n<li><p><strong>Factories Act</strong> </p>\n</li>\n<li><p><strong>Minimum Wages Act</strong> </p>\n</li>\n<li><p><strong>Payment of Gratuity Act</strong> </p>\n</li>\n<li><p><strong>Shops and Establishments Act</strong></p>\n</li>\n</ul>\n<h4><strong>Why Called &quot;Organised&quot;?</strong></h4>\n<ul>\n<li><p>Has some <strong>formal processes and procedures</strong> </p>\n</li>\n<li><p>Some may not be employed by anyone but <strong>work on their own</strong> </p>\n</li>\n<li><p>But they too have to <strong>register with government</strong> </p>\n</li>\n<li><p>Have to <strong>follow rules and regulations</strong></p>\n</li>\n</ul>\n<h4><strong>Benefits for Workers</strong></h4>\n<p><strong>Employment Security:</strong></p>\n<ul>\n<li>Workers enjoy <strong>security of employment</strong></li>\n</ul>\n<p><strong>Fixed Working Hours:</strong></p>\n<ul>\n<li><p>Expected to work only <strong>fixed number of hours</strong> </p>\n</li>\n<li><p>If work more, have to be paid <strong>overtime</strong> by employer</p>\n</li>\n</ul>\n<p><strong>Additional Benefits:</strong></p>\n<ul>\n<li><p><strong>Paid leave</strong> </p>\n</li>\n<li><p><strong>Payment during holidays</strong> </p>\n</li>\n<li><p><strong>Provident fund</strong> </p>\n</li>\n<li><p><strong>Gratuity</strong> </p>\n</li>\n<li><p><strong>Medical benefits</strong> </p>\n</li>\n<li><p><strong>Pensions</strong> when they retire</p>\n</li>\n</ul>\n<p><strong>Workplace Facilities:</strong></p>\n<ul>\n<li>Factory manager has to ensure facilities like:<ul>\n<li><strong>Drinking water</strong> </li>\n<li><strong>Safe working environment</strong></li>\n</ul>\n</li>\n</ul>\n<h4><strong>Example: Kanta&#39;s Office Job</strong></h4>\n<ul>\n<li><p>Attends office from <strong>9:30 a.m. to 5:30 p.m.</strong> </p>\n</li>\n<li><p>Gets <strong>salary regularly</strong> at end of every month </p>\n</li>\n<li><p>Gets <strong>provident fund</strong> as per government rules </p>\n</li>\n<li><p>Gets <strong>medical and other allowances</strong> </p>\n</li>\n<li><p>Does not go to office on <strong>Sundays</strong> (paid holiday) </p>\n</li>\n<li><p>Given <strong>appointment letter</strong> stating all terms and conditions of work</p>\n</li>\n</ul>\n<h3><strong>5.3 Unorganised Sector</strong></h3>\n<h4><strong>Definition</strong></h4>\n<ul>\n<li><p>Characterised by <strong>small and scattered units</strong> </p>\n</li>\n<li><p>Largely <strong>outside the control of government</strong> </p>\n</li>\n<li><p>There are <strong>rules and regulations</strong> but these are <strong>not followed</strong></p>\n</li>\n</ul>\n<h4><strong>Nature of Employment</strong></h4>\n<ul>\n<li><p>Jobs are <strong>low-paid</strong> and often <strong>not regular</strong> </p>\n</li>\n<li><p><strong>No provision</strong> for:</p>\n<ul>\n<li>Overtime </li>\n<li>Paid leave </li>\n<li>Holidays </li>\n<li>Leave due to sickness</li>\n</ul>\n</li>\n<li><p><strong>Employment is not secure</strong> </p>\n</li>\n<li><p>People can be <strong>asked to leave without any reason</strong> </p>\n</li>\n<li><p>When there is <strong>less work</strong> (during some seasons), people may be asked to leave </p>\n</li>\n<li><p>A lot depends on <strong>whims of employer</strong></p>\n</li>\n</ul>\n<h4><strong>Types of Workers</strong></h4>\n<ul>\n<li><p>Includes large number of people <strong>employed on their own</strong> </p>\n</li>\n<li><p>Doing <strong>small jobs</strong> such as:</p>\n<ul>\n<li><strong>Selling on street</strong> </li>\n<li>Doing <strong>repair work</strong></li>\n</ul>\n</li>\n<li><p><strong>Farmers</strong> work on their own </p>\n</li>\n<li><p><strong>Hire labourers</strong> as and when they require</p>\n</li>\n</ul>\n<h4><strong>Example: Kamal&#39;s Grocery Shop Job</strong></h4>\n<ul>\n<li><p><strong>Daily wage labourer</strong> in nearby grocery shop </p>\n</li>\n<li><p>Goes to shop at <strong>7:30 a.m.</strong>, works till <strong>8:00 p.m.</strong> </p>\n</li>\n<li><p>Gets <strong>no other allowances</strong> apart from wages </p>\n</li>\n<li><p><strong>Not paid for days</strong> he does not work </p>\n</li>\n<li><p>Has <strong>no leave or paid holidays</strong> </p>\n</li>\n<li><p>Not given any <strong>formal letter</strong> of employment </p>\n</li>\n<li><p>Can be <strong>asked to leave anytime</strong> by employer</p>\n</li>\n</ul>\n<h3><strong>5.4 Employment Data: Organised vs Unorganised</strong></h3>\n<h4><strong>Sector-wise Distribution (Table 2.3)</strong></h4>\n<p><strong>Primary Sector:</strong></p>\n<ul>\n<li><p><strong>Organised</strong>: 1 million workers </p>\n</li>\n<li><p><strong>Unorganised</strong>: 232 million workers </p>\n</li>\n<li><p><strong>Total</strong>: 233 million workers </p>\n</li>\n<li><p><strong>Percentage in unorganised</strong>: Approximately <strong>99.6%</strong></p>\n</li>\n</ul>\n<p><strong>Secondary Sector:</strong></p>\n<ul>\n<li><p><strong>Organised</strong>: 41 million workers </p>\n</li>\n<li><p><strong>Unorganised</strong>: 74 million workers </p>\n</li>\n<li><p><strong>Total</strong>: 115 million workers </p>\n</li>\n<li><p><strong>Percentage in unorganised</strong>: Approximately <strong>64%</strong></p>\n</li>\n</ul>\n<p><strong>Tertiary Sector:</strong></p>\n<ul>\n<li><p><strong>Organised</strong>: 40 million workers </p>\n</li>\n<li><p><strong>Unorganised</strong>: 88 million workers </p>\n</li>\n<li><p><strong>Total</strong>: 128 million workers </p>\n</li>\n<li><p><strong>Percentage in unorganised</strong>: Approximately <strong>69%</strong></p>\n</li>\n</ul>\n<p><strong>Overall:</strong></p>\n<ul>\n<li><p><strong>Total organised sector workers</strong>: 82 million </p>\n</li>\n<li><p><strong>Total unorganised sector workers</strong>: 394 million </p>\n</li>\n<li><p><strong>Grand Total</strong>: 476 million workers </p>\n</li>\n<li><p>About <strong>83%</strong> of workers in India are in <strong>unorganised sector</strong> </p>\n</li>\n<li><p>Organised sector employment available to only about <strong>17%</strong> of workers</p>\n</li>\n</ul>\n<h3><strong>5.5 Protection of Unorganised Sector Workers</strong></h3>\n<h4><strong>Problems in Unorganised Sector</strong></h4>\n<p><strong>Limited Organised Sector Growth:</strong></p>\n<ul>\n<li>Employment opportunities in organised sector <strong>expanding very slowly</strong></li>\n</ul>\n<p><strong>Exploitation:</strong></p>\n<ul>\n<li><p>Many organised sector enterprises operate in unorganised manner </p>\n</li>\n<li><p>Adopt strategies to <strong>evade taxes</strong> </p>\n</li>\n<li><p><strong>Refuse to follow laws</strong> that protect labourers</p>\n</li>\n</ul>\n<p><strong>Post-1990s Trend:</strong></p>\n<ul>\n<li><p>Since <strong>1990s</strong>, common to see large number of workers <strong>losing jobs</strong> in organised sector </p>\n</li>\n<li><p>These workers forced to take up jobs in <strong>unorganised sector with low earnings</strong></p>\n</li>\n</ul>\n<h4><strong>Who Needs Protection?</strong></h4>\n<p><strong>Rural Areas:</strong></p>\n<ul>\n<li><p><strong>Landless agricultural labourers</strong> </p>\n</li>\n<li><p><strong>Small and marginal farmers</strong> </p>\n</li>\n<li><p><strong>Sharecroppers</strong> </p>\n</li>\n<li><p><strong>Artisans</strong>: weavers, blacksmiths, carpenters, goldsmiths </p>\n</li>\n<li><p>Nearly <strong>80% of rural households</strong> in small and marginal farmer category</p>\n</li>\n</ul>\n<p><strong>Support Needed for Farmers:</strong></p>\n<ul>\n<li><strong>Adequate facility</strong> for:<ul>\n<li><strong>Timely delivery</strong> of seeds </li>\n<li><strong>Agricultural inputs</strong> </li>\n<li><strong>Credit</strong> </li>\n<li><strong>Storage facilities</strong> </li>\n<li><strong>Marketing outlets</strong></li>\n</ul>\n</li>\n</ul>\n<p><strong>Urban Areas:</strong></p>\n<ul>\n<li><p>Workers in <strong>small-scale industry</strong> </p>\n</li>\n<li><p><strong>Casual workers</strong> in:</p>\n<ul>\n<li>Construction </li>\n<li>Trade </li>\n<li>Transport</li>\n</ul>\n</li>\n<li><p><strong>Street vendors</strong> </p>\n</li>\n<li><p><strong>Head load workers</strong> </p>\n</li>\n<li><p><strong>Garment makers</strong> </p>\n</li>\n<li><p><strong>Rag pickers</strong></p>\n</li>\n</ul>\n<p><strong>Support Needed:</strong></p>\n<ul>\n<li><p><strong>Small-scale industry</strong> needs government support for:</p>\n<ul>\n<li><strong>Procuring raw material</strong> </li>\n<li><strong>Marketing of output</strong></li>\n</ul>\n</li>\n<li><p><strong>Casual workers</strong> in both rural and urban areas need to be protected</p>\n</li>\n</ul>\n<h4><strong>Social Dimension</strong></h4>\n<ul>\n<li><p><strong>Majority of workers</strong> from:</p>\n<ul>\n<li><strong>Scheduled castes</strong> </li>\n<li><strong>Tribes</strong> </li>\n<li><strong>Backward communities</strong></li>\n</ul>\n</li>\n<li><p>Find themselves in <strong>unorganised sector</strong> </p>\n</li>\n<li><p>Besides <strong>irregular and low paid work</strong>, also face <strong>social discrimination</strong> </p>\n</li>\n<li><p>Protection and support necessary for <strong>both economic and social development</strong></p>\n</li>\n</ul>\n<hr>\n<h2><strong>6. Public and Private Sectors</strong></h2>\n<h3><strong>6.1 Basis of Classification</strong></h3>\n<h4><strong>Criterion Used</strong></h4>\n<ul>\n<li><p>Classification based on <strong>who owns assets</strong> </p>\n</li>\n<li><p>Who is <strong>responsible for delivery</strong> of services</p>\n</li>\n</ul>\n<h3><strong>6.2 Public Sector</strong></h3>\n<h4><strong>Definition</strong></h4>\n<ul>\n<li><p>All the <strong>assets and responsibilities</strong> fall upon the <strong>government</strong> </p>\n</li>\n<li><p><strong>Owned, controlled and managed</strong> by government or state-run bodies</p>\n</li>\n</ul>\n<h4><strong>Main Goal</strong></h4>\n<ul>\n<li><p>To <strong>serve the common people</strong> in best way possible </p>\n</li>\n<li><p>Focus is <strong>not on earning profits</strong> </p>\n</li>\n<li><p>Focus on <strong>providing best facilities</strong> to people at <strong>cheap rates</strong></p>\n</li>\n</ul>\n<h4><strong>Purpose of Public Sector</strong></h4>\n<ul>\n<li><p>Government uses <strong>revenue from taxes</strong> </p>\n</li>\n<li><p>Some activities need <strong>spending of money</strong> </p>\n</li>\n<li><p>Activities where government <strong>collects money</strong> (railways, post office) </p>\n</li>\n<li><p>Most important goal is <strong>welfare of people</strong></p>\n</li>\n</ul>\n<h4><strong>Examples of Public Sector</strong></h4>\n<ul>\n<li><p><strong>Indian Railways</strong> </p>\n</li>\n<li><p><strong>Military/Defence</strong> </p>\n</li>\n<li><p><strong>National Thermal Power Corporation (NTPC)</strong> </p>\n</li>\n<li><p><strong>Government hospitals</strong> </p>\n</li>\n<li><p><strong>Post offices</strong> </p>\n</li>\n<li><p><strong>Police stations</strong> </p>\n</li>\n<li><p><strong>Government schools</strong> </p>\n</li>\n<li><p><strong>Courts</strong> </p>\n</li>\n<li><p><strong>Public sector banks</strong></p>\n</li>\n</ul>\n<h3><strong>6.3 Private Sector</strong></h3>\n<h4><strong>Definition</strong></h4>\n<ul>\n<li><p><strong>Owned by individuals or companies</strong> </p>\n</li>\n<li><p>Owned and managed by <strong>private entities</strong></p>\n</li>\n</ul>\n<h4><strong>Main Goal</strong></h4>\n<ul>\n<li><p>To <strong>earn profits</strong> </p>\n</li>\n<li><p>Focus on <strong>business interests</strong></p>\n</li>\n</ul>\n<h4><strong>Examples of Private Sector</strong></h4>\n<ul>\n<li><p><strong>Private colleges</strong> </p>\n</li>\n<li><p><strong>Private hospitals</strong> </p>\n</li>\n<li><p><strong>Companies like Infosys</strong> </p>\n</li>\n<li><p><strong>Reliance</strong> </p>\n</li>\n<li><p><strong>Technology companies</strong> </p>\n</li>\n<li><p><strong>Private banks</strong> </p>\n</li>\n<li><p><strong>Construction companies</strong> </p>\n</li>\n<li><p><strong>Pharmaceutical companies</strong></p>\n</li>\n</ul>\n<h3><strong>6.4 Importance of Both Sectors</strong></h3>\n<h4><strong>Public Sector Contribution</strong></h4>\n<ul>\n<li><p>Provides <strong>infrastructure</strong> </p>\n</li>\n<li><p>Provides <strong>essential services</strong> like:</p>\n<ul>\n<li>Transport </li>\n<li>Healthcare</li>\n</ul>\n</li>\n<li><p>Ensures even <strong>poor people</strong> can access essential services </p>\n</li>\n<li><p>By keeping <strong>prices low</strong></p>\n</li>\n</ul>\n<h4><strong>Private Sector Contribution</strong></h4>\n<ul>\n<li><p>Creates <strong>jobs</strong> </p>\n</li>\n<li><p>Drives <strong>innovation</strong> </p>\n</li>\n<li><p>Contributes to <strong>economic growth</strong> </p>\n</li>\n<li><p>Generates <strong>wealth and employment</strong></p>\n</li>\n</ul>\n<hr>\n<h2><strong>Conclusion: Key Learnings</strong></h2>\n<h3><strong>Classification Criteria Summary</strong></h3>\n<table>\n<thead>\n<tr>\n<th><strong>Sector Type</strong></th>\n<th><strong>Criterion Used</strong></th>\n<th><strong>Most Important</strong></th>\n</tr>\n</thead>\n<tbody><tr>\n<td><strong>Primary, Secondary, Tertiary</strong></td>\n<td><strong>Nature of activity</strong></td>\n<td>Tertiary sector now largest in production but primary largest in employment</td>\n</tr>\n<tr>\n<td><strong>Organised, Unorganised</strong></td>\n<td><strong>Employment conditions</strong></td>\n<td>About 83% workers in unorganised sector need protection</td>\n</tr>\n<tr>\n<td><strong>Public, Private</strong></td>\n<td><strong>Ownership of assets</strong></td>\n<td>Both sectors important for development</td>\n</tr>\n</tbody></table>\n<h3><strong>Major Problems Identified</strong></h3>\n<h4><strong>Underemployment in Agriculture</strong></h4>\n<ul>\n<li><p>More than half of workers in <strong>primary sector</strong> </p>\n</li>\n<li><p>Producing only <strong>one-sixth of GDP</strong> </p>\n</li>\n<li><p>Clear case of <strong>disguised unemployment</strong></p>\n</li>\n</ul>\n<h4><strong>Lack of Employment Generation</strong></h4>\n<ul>\n<li><p>Production increased significantly in all sectors </p>\n</li>\n<li><p>But <strong>employment growth</strong> much slower </p>\n</li>\n<li><p><strong>Not enough jobs</strong> created in secondary and tertiary sectors</p>\n</li>\n</ul>\n<h4><strong>Exploitation in Unorganised Sector</strong></h4>\n<ul>\n<li><p><strong>83% of workers</strong> in unorganised sector </p>\n</li>\n<li><p>Face <strong>low wages</strong>, <strong>no job security</strong>, <strong>no benefits</strong> </p>\n</li>\n<li><p>Need <strong>urgent protection and support</strong></p>\n</li>\n</ul>\n<h3><strong>Solutions Suggested</strong></h3>\n<ul>\n<li><p>Development of <strong>irrigation</strong> and <strong>agricultural infrastructure</strong> </p>\n</li>\n<li><p>Setting up <strong>agro-processing industries</strong> in semi-rural areas </p>\n</li>\n<li><p>Investment in <strong>education and health</strong> sectors </p>\n</li>\n<li><p>Promotion of <strong>tourism and regional crafts</strong> </p>\n</li>\n<li><p>Implementation of <strong>MGNREGA 2005</strong> for guaranteed employment </p>\n</li>\n<li><p><strong>Protection of unorganised sector workers</strong> through laws and support</p>\n</li>\n</ul>\n<hr>\n",
    "lastUpdated": "2025-12-01T14:46:30.001Z"
  },
  {
    "id": "Money and credit",
    "name": "Money and credit",
    "category": "Economics",
    "order": "9",
    "content": "<h1><strong>MONEY AND CREDIT - CLASS 10 ECONOMICS</strong></h1>\n<h2><strong>1. Money as a Medium of Exchange</strong></h2>\n<h3><strong>The Barter System</strong></h3>\n<ul>\n<li><p><strong>Barter</strong> is the direct exchange of goods and services without using money </p>\n</li>\n<li><p><strong>Double Coincidence of Wants</strong>: In a barter system, both parties must want what the other is offering simultaneously </p>\n</li>\n<li><p><strong>Example</strong>: A shoe manufacturer wanting wheat must find a farmer who needs shoes and has wheat to exchange </p>\n</li>\n<li><p>This system was highly inefficient and limited trade opportunities</p>\n</li>\n</ul>\n<h3><strong>Why Money is Essential</strong></h3>\n<ul>\n<li><p>Money eliminates the need for double coincidence of wants </p>\n</li>\n<li><p>Acts as an <strong>intermediate step</strong> in the exchange process </p>\n</li>\n<li><p>A person holding money can easily exchange it for any commodity or service they want </p>\n</li>\n<li><p>Everyone prefers receiving payments in money and then exchanging it for desired goods</p>\n</li>\n</ul>\n<hr>\n<h2><strong>2. Modern Forms of Money</strong></h2>\n<h3><strong>Historical Evolution</strong></h3>\n<ul>\n<li><p><strong>Early forms</strong>: Grains and cattle were used as money in ancient India </p>\n</li>\n<li><p><strong>Metallic coins era</strong>: Gold, silver, and copper coins were used for centuries </p>\n</li>\n<li><p>Examples include: Early punch-marked coins, Gupta coins, Tughlaq coins, Gold Mohar from Akbar&#39;s reign</p>\n</li>\n</ul>\n<h3><strong>Currency (Paper Notes and Coins)</strong></h3>\n<ul>\n<li><p>Modern currency is <strong>not made of precious metals</strong> like gold or silver </p>\n</li>\n<li><p>Currency notes have <strong>no intrinsic value</strong> or everyday use of their own </p>\n</li>\n<li><p><strong>Accepted as medium of exchange</strong> because it is authorized by the government </p>\n</li>\n<li><p>In India, the <strong>Reserve Bank of India (RBI)</strong> issues currency notes on behalf of the central government </p>\n</li>\n<li><p><strong>Legal tender</strong>: By law, no individual can refuse payment in rupees in India </p>\n</li>\n<li><p>No other individual or organization can legally issue currency</p>\n</li>\n</ul>\n<h3><strong>Demand Deposits with Banks</strong></h3>\n<ul>\n<li><p>The other major form of modern money besides currency </p>\n</li>\n<li><p>People deposit extra cash in banks by opening bank accounts </p>\n</li>\n<li><p><strong>Benefits of deposits</strong>:</p>\n<ul>\n<li>Money remains safe with banks </li>\n<li>Banks pay interest on deposits </li>\n<li>Money can be withdrawn on demand anytime</li>\n</ul>\n</li>\n<li><p>Called <strong>&quot;demand deposits&quot;</strong> because they can be withdrawn whenever required</p>\n</li>\n</ul>\n<h3><strong>Cheque Payments</strong></h3>\n<ul>\n<li><p>A <strong>cheque</strong> is a paper instructing the bank to pay a specific amount from the depositor&#39;s account to the person named on the cheque </p>\n</li>\n<li><p><strong>Example</strong>: Shoe manufacturer M. Salim writes a cheque to the leather supplier. The supplier deposits it in his bank, and money transfers between accounts without cash </p>\n</li>\n<li><p>Cheque components include: Account number, cheque number, bank branch code, and coding used by banks </p>\n</li>\n<li><p>Since demand deposits are widely accepted and payments can be settled through cheques, they constitute money in the modern economy</p>\n</li>\n</ul>\n<h3><strong>Demonetisation (2016)</strong></h3>\n<ul>\n<li><p>In November 2016, Rs. 500 and Rs. 1,000 notes were declared invalid </p>\n</li>\n<li><p>People surrendered old notes and received new Rs. 500, Rs. 2,000 or other currency notes </p>\n</li>\n<li><p>This promoted digital transactions: bank transfers, internet/mobile banking, cheques, ATM cards, credit cards, POS machines </p>\n</li>\n<li><p>Aimed to reduce cash dependency and control corruption</p>\n</li>\n</ul>\n<hr>\n<h2><strong>3. Role of Banks in the Economy</strong></h2>\n<h3><strong>Loan Activities of Banks</strong></h3>\n<ul>\n<li><p>Banks keep only about <strong>15% of deposits as cash</strong> to meet daily withdrawal demands </p>\n</li>\n<li><p>The remaining <strong>major portion is used to extend loans</strong> to meet demand for credit </p>\n</li>\n<li><p><strong>Banks as mediators</strong>: They connect those with surplus funds (depositors) and those needing funds (borrowers)</p>\n</li>\n</ul>\n<h3><strong>How Banks Earn Income</strong></h3>\n<ul>\n<li><p>Banks charge a <strong>higher interest rate on loans</strong> than what they pay on deposits </p>\n</li>\n<li><p>The <strong>difference between these rates</strong> is their main source of income </p>\n</li>\n<li><p><strong>Flow diagram</strong>: Depositors → Deposits → Banks → Loans → Borrowers → Repayment with interest → Returns to depositors with interest</p>\n</li>\n</ul>\n<hr>\n<h2><strong>4. Understanding Credit (Loans)</strong></h2>\n<h3><strong>Definition of Credit</strong></h3>\n<ul>\n<li><strong>Credit (loan)</strong> refers to an agreement where the lender supplies the borrower with money, goods, or services in return for the promise of future payment</li>\n</ul>\n<h3><strong>Two Different Credit Situations</strong></h3>\n<h4><strong>Situation 1: Festival Season (Salim - Positive Role)</strong></h4>\n<ul>\n<li><p>Salim, a shoe manufacturer, receives an order for 3,000 pairs of shoes </p>\n</li>\n<li><p><strong>Credit taken for</strong>:</p>\n<ul>\n<li>Obtaining leather on credit from supplier </li>\n<li>Cash loan as advance payment from large trader</li>\n</ul>\n</li>\n<li><p><strong>Purpose</strong>: To meet working capital needs - hire workers, purchase raw materials </p>\n</li>\n<li><p><strong>Outcome</strong>: Successfully completes production on time, earns good profit, repays loans </p>\n</li>\n<li><p><strong>Conclusion</strong>: Credit plays a <strong>vital and positive role</strong> by helping increase earnings</p>\n</li>\n</ul>\n<h4><strong>Situation 2: Swapna&#39;s Problem (Negative Role - Debt Trap)</strong></h4>\n<ul>\n<li><p>Swapna, a small farmer with 3 acres of land, grows groundnut </p>\n</li>\n<li><p>Takes loan from moneylender for cultivation expenses </p>\n</li>\n<li><p><strong>Crisis</strong>: Crop failure due to pests despite expensive pesticides </p>\n</li>\n<li><p>Unable to repay; debt grows larger over the year </p>\n</li>\n<li><p>Takes fresh loan next year, but earnings insufficient to cover old loan </p>\n</li>\n<li><p><strong>Outcome</strong>: Caught in <strong>debt trap</strong>, forced to sell part of her land to repay debt </p>\n</li>\n<li><p><strong>Conclusion</strong>: Credit made her situation worse instead of better</p>\n</li>\n</ul>\n<h3><strong>Key Learning</strong></h3>\n<ul>\n<li><p>Whether credit is useful depends on <strong>risks in the situation</strong> and whether there is <strong>support in case of loss</strong> </p>\n</li>\n<li><p>In rural areas, main credit demand is for crop production (seeds, fertilizers, pesticides, water, electricity, equipment) </p>\n</li>\n<li><p>Farmers typically take crop loans at season start and repay after harvest </p>\n</li>\n<li><p>Repayment critically depends on income from farming</p>\n</li>\n</ul>\n<hr>\n<h2><strong>5. Terms of Credit</strong></h2>\n<h3><strong>Key Components</strong></h3>\n<p>Every loan agreement specifies these essential terms :</p>\n<h4><strong>Interest Rate</strong></h4>\n<ul>\n<li><p>The rate the borrower must pay to the lender along with principal repayment </p>\n</li>\n<li><p>Varies significantly between formal and informal lenders</p>\n</li>\n</ul>\n<h4><strong>Collateral (Security)</strong></h4>\n<ul>\n<li><p>An <strong>asset that the borrower owns</strong> and uses as guarantee until loan repayment </p>\n</li>\n<li><p>Examples: Land, building, vehicle, livestock, bank deposits </p>\n</li>\n<li><p>If borrower fails to repay, lender has the <strong>right to sell the collateral</strong> to recover payment</p>\n</li>\n</ul>\n<h4><strong>Documentation Requirements</strong></h4>\n<ul>\n<li>Formal lenders require proper documents proving employment, income, etc.</li>\n</ul>\n<h4><strong>Mode of Repayment</strong></h4>\n<ul>\n<li><p>The duration and method of repaying principal and interest </p>\n</li>\n<li><p>Can be monthly installments, lump sum after harvest, etc.</p>\n</li>\n</ul>\n<h3><strong>Example: Megha&#39;s House Loan</strong></h3>\n<ul>\n<li><p>Loan amount: Rs. 5 lakhs from bank </p>\n</li>\n<li><p>Interest rate: 12% per annum </p>\n</li>\n<li><p>Duration: 10 years </p>\n</li>\n<li><p>Repayment: Monthly installments </p>\n</li>\n<li><p>Documentation: Employment records and salary proof </p>\n</li>\n<li><p>Collateral: House papers retained by bank until full repayment</p>\n</li>\n</ul>\n<hr>\n<h2><strong>6. Sources of Credit in Rural India</strong></h2>\n<h3><strong>Example from Sonpur Village</strong></h3>\n<h4><strong>Shyamal (Small Farmer)</strong></h4>\n<ul>\n<li><p>Needs seasonal loans for cultivation on 1.5 acres </p>\n</li>\n<li><p>Previously borrowed from village moneylender at <strong>5% per month (60% per annum)</strong> </p>\n</li>\n<li><p>Now borrows from agricultural trader at <strong>3% per month (36% per annum)</strong> </p>\n</li>\n<li><p>Trader supplies farm inputs on credit at season start </p>\n</li>\n<li><p>Must sell crop to the trader, who profits by buying at low post-harvest prices</p>\n</li>\n</ul>\n<h4><strong>Arun (Medium Farmer)</strong></h4>\n<ul>\n<li><p>Has 7 acres of land </p>\n</li>\n<li><p>Receives <strong>bank loan</strong> for cultivation </p>\n</li>\n<li><p>Interest rate: <strong>8.5% per annum</strong> </p>\n</li>\n<li><p>Repayment: Within 3 years, anytime </p>\n</li>\n<li><p>Plans to repay after harvest by selling part of crop </p>\n</li>\n<li><p>Will store remaining potatoes in cold storage and apply for fresh loan against cold storage receipt</p>\n</li>\n</ul>\n<h4><strong>Rama (Agricultural Labourer)</strong></h4>\n<ul>\n<li><p>Works as daily wage labourer </p>\n</li>\n<li><p>No work for several months yearly </p>\n</li>\n<li><p>Needs credit for daily expenses, sudden illnesses, family functions </p>\n</li>\n<li><p>Depends on employer (medium landowner) for credit </p>\n</li>\n<li><p>Interest rate: <strong>5% per month (60% per annum)</strong> </p>\n</li>\n<li><p>Repays by working for the landowner </p>\n</li>\n<li><p>Takes fresh loans before repaying previous ones </p>\n</li>\n<li><p>Currently owes Rs. 5,000; continues despite poor treatment because she needs loans</p>\n</li>\n</ul>\n<h3><strong>Loans from Cooperatives</strong></h3>\n<ul>\n<li><p>Major source of <strong>cheap credit in rural areas</strong> besides banks </p>\n</li>\n<li><p><strong>Cooperative societies</strong>: Members pool resources for cooperation in certain areas </p>\n</li>\n<li><p><strong>Example: Krishak Cooperative</strong> </p>\n<ul>\n<li>Has 2,300 farmer members </li>\n<li>Accepts deposits from members </li>\n<li>Uses deposits as collateral to obtain large bank loan </li>\n<li>Provides loans to members for: Agricultural implements, cultivation, agricultural trade, fishery, house construction, various expenses </li>\n<li>After loan repayment, another lending round begins</li>\n</ul>\n</li>\n</ul>\n<hr>\n<h2><strong>7. Formal vs. Informal Sector Credit</strong></h2>\n<h3><strong>Formal Sector Loans</strong></h3>\n<ul>\n<li><p>Include: Banks and cooperative societies </p>\n</li>\n<li><p><strong>Supervised by Reserve Bank of India (RBI)</strong> </p>\n</li>\n<li><p>RBI ensures banks:</p>\n<ul>\n<li>Maintain minimum cash balance from deposits </li>\n<li>Lend to diverse sectors, not just profit-making businesses </li>\n<li>Provide loans to small cultivators, small-scale industries, small borrowers</li>\n</ul>\n</li>\n<li><p>Banks periodically submit information to RBI about lending activities, interest rates, etc.</p>\n</li>\n</ul>\n<h3><strong>Informal Sector Lenders</strong></h3>\n<ul>\n<li><p>Include: Moneylenders, traders, employers, relatives, friends </p>\n</li>\n<li><p><strong>No supervisory organization</strong> </p>\n</li>\n<li><p>Can charge any interest rate they choose </p>\n</li>\n<li><p>No regulation on using unfair means to recover money </p>\n</li>\n<li><p>Generally charge <strong>much higher interest rates</strong> than formal lenders</p>\n</li>\n</ul>\n<h3><strong>Statistics: Sources of Credit in Rural India (2019)</strong></h3>\n<p>Based on Graph 1 from NCERT :</p>\n<ul>\n<li><p><strong>Commercial Banks</strong>: 51%</p>\n</li>\n<li><p><strong>Moneylenders</strong>: 23%</p>\n</li>\n<li><p><strong>Cooperative Banks and Society</strong>: 10%</p>\n</li>\n<li><p><strong>Relatives and Friends</strong>: 7%</p>\n</li>\n<li><p><strong>Other Formal Agencies</strong>: 5%</p>\n</li>\n<li><p><strong>Other Informal Agencies</strong>: 3%</p>\n</li>\n<li><p><strong>Landlords</strong>: 1%</p>\n</li>\n</ul>\n<h3><strong>Urban Credit Distribution (By Income Groups)</strong></h3>\n<p>Based on Graph 2 from NCERT :</p>\n<ul>\n<li><p><strong>Poor households</strong>: 84% informal sources, 16% formal sources</p>\n</li>\n<li><p><strong>Rich households</strong>: 17% informal sources, 83% formal sources</p>\n</li>\n<li><p>Similar pattern exists in rural areas</p>\n</li>\n</ul>\n<h3><strong>Key Issues</strong></h3>\n<ul>\n<li><p>Formal sector meets only about <strong>half of total rural credit needs</strong> </p>\n</li>\n<li><p><strong>Higher cost of informal borrowing</strong> means larger part of earnings goes to repayment </p>\n</li>\n<li><p>Can lead to <strong>debt traps</strong> where repayment exceeds income </p>\n</li>\n<li><p>High borrowing costs discourage people from starting enterprises </p>\n</li>\n<li><p><strong>Rich households access cheap formal credit; poor depend on expensive informal credit</strong></p>\n</li>\n</ul>\n<hr>\n<h2><strong>8. Need for Expanding Formal Credit</strong></h2>\n<h3><strong>Why Banks and Cooperatives Must Lend More</strong></h3>\n<ul>\n<li><p>Cheap and affordable credit is <strong>crucial for country&#39;s development</strong> </p>\n</li>\n<li><p>Would lead to <strong>higher incomes</strong> for many people </p>\n</li>\n<li><p>People could borrow cheaply for: Crop cultivation, business, small-scale industries, trade, new enterprises </p>\n</li>\n<li><p>Would reduce dependence on expensive informal credit</p>\n</li>\n</ul>\n<h3><strong>Challenges for Poor in Accessing Formal Credit</strong></h3>\n<ul>\n<li><p>Banks not present everywhere in rural India </p>\n</li>\n<li><p><strong>Bank loans require</strong>:</p>\n<ul>\n<li>Proper documents </li>\n<li>Collateral (major obstacle for poor)</li>\n</ul>\n</li>\n<li><p><strong>Absence of collateral</strong> is the major reason preventing poor from getting bank loans </p>\n</li>\n<li><p>Informal lenders know borrowers personally, willing to lend without collateral </p>\n</li>\n<li><p>Borrowers can approach moneylenders without repaying earlier loans </p>\n</li>\n<li><p>However, moneylenders charge very high interest, keep no records, harass borrowers</p>\n</li>\n</ul>\n<hr>\n<h2><strong>9. Self-Help Groups (SHGs) for the Poor</strong></h2>\n<h3><strong>Concept and Structure</strong></h3>\n<ul>\n<li><p>Organizes rural poor, <strong>particularly women</strong>, into small groups </p>\n</li>\n<li><p><strong>Typical SHG size</strong>: 15-20 members from one neighborhood </p>\n</li>\n<li><p>Members meet and save regularly </p>\n</li>\n<li><p><strong>Savings per member</strong>: Rs. 25 to Rs. 100 or more, depending on ability</p>\n</li>\n</ul>\n<h3><strong>How SHGs Function</strong></h3>\n<ul>\n<li><p>Members take <strong>small loans from the group</strong> to meet their needs </p>\n</li>\n<li><p>Group charges interest, but <strong>less than moneylenders</strong> </p>\n</li>\n<li><p><strong>After 1-2 years</strong> of regular savings, group becomes <strong>eligible for bank loan</strong> </p>\n</li>\n<li><p>Loan sanctioned in <strong>group&#39;s name</strong> </p>\n</li>\n<li><p>Meant to create <strong>self-employment opportunities</strong></p>\n</li>\n</ul>\n<h3><strong>Loan Purposes</strong></h3>\n<ul>\n<li><p>Releasing mortgaged land </p>\n</li>\n<li><p>Meeting working capital needs (seeds, fertilizers, raw materials like bamboo and cloth) </p>\n</li>\n<li><p>Housing materials </p>\n</li>\n<li><p>Acquiring assets (sewing machine, handlooms, cattle)</p>\n</li>\n</ul>\n<h3><strong>Decision-Making in SHGs</strong></h3>\n<ul>\n<li><p>Most important decisions taken <strong>by group members</strong> </p>\n</li>\n<li><p>Group decides: Loan purpose, amount, interest rate, repayment schedule </p>\n</li>\n<li><p><strong>Group responsible for loan repayment</strong> </p>\n</li>\n<li><p>Non-repayment by any member is seriously followed up by other members </p>\n</li>\n<li><p>This makes banks willing to lend to poor women <strong>without collateral</strong></p>\n</li>\n</ul>\n<h3><strong>Benefits of SHGs</strong></h3>\n<ul>\n<li><p><strong>Overcomes lack of collateral problem</strong> </p>\n</li>\n<li><p>Timely loans for various purposes at reasonable interest rates </p>\n</li>\n<li><p><strong>Women become financially self-reliant</strong> </p>\n</li>\n<li><p>Regular meetings provide <strong>platform to discuss social issues</strong>: Health, nutrition, domestic violence </p>\n</li>\n<li><p>Building blocks of organization of rural poor</p>\n</li>\n</ul>\n<hr>\n<h2><strong>10. Success Story: Grameen Bank of Bangladesh</strong></h2>\n<h3><strong>Overview</strong></h3>\n<ul>\n<li><p>Founded by <strong>Professor Muhammad Yunus</strong> (2006 Nobel Peace Prize recipient) </p>\n</li>\n<li><p>Started in 1970s as small project </p>\n</li>\n<li><p><strong>By 2018</strong>: Over 9 million members in about 81,600 villages across Bangladesh </p>\n</li>\n<li><p>One of the biggest success stories in reaching the poor with reasonable credit</p>\n</li>\n</ul>\n<h3><strong>Key Features</strong></h3>\n<ul>\n<li><p><strong>Almost all borrowers are women</strong> from poorest sections of society </p>\n</li>\n<li><p>Poor women proved to be <strong>reliable borrowers</strong> </p>\n</li>\n<li><p>Successfully started and ran various <strong>small income-generating activities</strong></p>\n</li>\n</ul>\n<h3><strong>Philosophy</strong></h3>\n<p><em>&quot;If credit can be made available to the poor people on terms and conditions that are appropriate and reasonable, these millions of small people with their millions of small pursuits can add up to create the biggest development wonder.&quot;</em> - Prof. Muhammad Yunus </p>\n<hr>\n<h2><strong>11. Important Definitions &amp; Key Terms</strong></h2>\n<ul>\n<li><p><strong>Money</strong>: Medium of exchange that eliminates double coincidence of wants </p>\n</li>\n<li><p><strong>Double Coincidence of Wants</strong>: Both parties wanting what the other offers simultaneously </p>\n</li>\n<li><p><strong>Currency</strong>: Paper notes and coins authorized by government </p>\n</li>\n<li><p><strong>Demand Deposits</strong>: Bank deposits that can be withdrawn on demand </p>\n</li>\n<li><p><strong>Credit/Loan</strong>: Agreement where lender provides money/goods/services for future payment </p>\n</li>\n<li><p><strong>Collateral</strong>: Asset used as guarantee for loan repayment </p>\n</li>\n<li><p><strong>Terms of Credit</strong>: Interest rate, collateral, documentation, and repayment mode </p>\n</li>\n<li><p><strong>Debt Trap</strong>: Situation where borrower cannot repay, leading to increasing debt </p>\n</li>\n<li><p><strong>Formal Sector Credit</strong>: Loans from banks and cooperatives </p>\n</li>\n<li><p><strong>Informal Sector Credit</strong>: Loans from moneylenders, traders, employers, relatives, friends</p>\n</li>\n</ul>\n<hr>\n<h2><strong>12. Key Takeaways for Examination</strong></h2>\n<h3><strong>Why Credit Has Dual Nature</strong></h3>\n<ul>\n<li><p>Can be <strong>constructive</strong> if used for productive purposes with manageable risks </p>\n</li>\n<li><p>Can be <strong>destructive</strong> if crops fail, business fails, or interest rates are too high</p>\n</li>\n</ul>\n<h3><strong>Why Poor Need More Access to Formal Credit</strong></h3>\n<ul>\n<li><p>Higher cost of informal borrowing reduces income available for consumption and investment </p>\n</li>\n<li><p>Formal credit expansion essential for inclusive development </p>\n</li>\n<li><p>Need for stronger regulations, improved financial literacy, better access to formal credit</p>\n</li>\n</ul>\n<h3><strong>Common Mistakes to Avoid</strong></h3>\n<ul>\n<li><p>Don&#39;t assume only cash and coins are money - includes demand deposits too </p>\n</li>\n<li><p>Not all loans come from banks - understand both formal and informal sources </p>\n</li>\n<li><p>Banks create credit by lending more than deposits through fractional reserve system </p>\n</li>\n<li><p>Not all loans require collateral - some are unsecured</p>\n</li>\n</ul>\n<hr>\n",
    "lastUpdated": "2025-12-05T04:50:55.390Z"
  },
  {
    "id": "Financial market",
    "name": "Financial market",
    "category": "Fmm ",
    "order": "10",
    "content": " ",
    "lastUpdated": "2025-12-21T04:26:28.936Z"
  },
  {
    "id": "references",
    "name": "References",
    "title": "External Citations",
    "category": "System",
    "author": "System",
    "imageUrl": "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop",
    "order": "99",
    "lastUpdated": "2025-11-22",
    "isDefault": false,
    "content": "<h1>References</h1><p>Auto-generated from links found on the site.</p>"
  },
  {
    "id": "editor",
    "name": "Site Editor",
    "title": "Configuration Editor",
    "category": "System",
    "author": "Admin",
    "order": "999",
    "password": "NzAkYkBsQCNwbEA=",
    "content": "<div id=\"editor-root\" class=\"editor-loading\">Loading Editor Interface...</div>"
  }
];
/* --- END CONFIG --- */
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
// Track loaded libraries
const loadedLibraries = new Set();

const RESOURCE_URLS = {
    hljsJS: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js',
    hljsCSS: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css',
    tikzJS: 'https://tikzjax.com/v1/tikzjax.js',
    html2canvas: 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'
};

// --- HELPERS (Global Scope) ---
const getSnippet = (content, length = 120) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = content;
  const firstParagraph = tempDiv.querySelector("p");
  let text = (firstParagraph
    ? firstParagraph.textContent
    : tempDiv.textContent
  ).trim();
  if (text.length > length) {
    text = text.substring(0, length).trim() + "...";
  }
  return text;
};

const getImageUrl = (page) => {
  if (page.imageUrl) return page.imageUrl;
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = page.content;
  const firstImage = tempDiv.querySelector("img");
  if (firstImage) return firstImage.src;
  // Provide a generic fallback image
  return `https://source.unsplash.com/random/400x400?sig=${Math.random()}`;
};

const getCategoryName = (page) => {
  if (page.category) return page.category;
  const parent = pageMap.get(page.parentId);
  return parent ? parent.name : "General";
};

// Updated Lock Screen Generator
const generateLockScreen = (page) => {
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

// --- DYNAMIC RESOURCE LOADING ---
function loadResource(type, url) {
    if (loadedLibraries.has(url)) return Promise.resolve();
    return new Promise((resolve, reject) => {
        let element;
        if (type === 'script') {
            element = document.createElement('script');
            element.src = url;
            element.onload = () => { loadedLibraries.add(url); resolve(); };
            element.onerror = reject;
        } else if (type === 'css') {
            element = document.createElement('link');
            element.rel = 'stylesheet';
            element.href = url;
            element.onload = () => { loadedLibraries.add(url); resolve(); };
            element.onerror = reject;
        }
        document.head.appendChild(element);
    });
}

// Global helper for manual invocation if needed
window.loadHtml2Canvas = () => loadResource('script', RESOURCE_URLS.html2canvas);

// --- META & HEAD MANAGEMENT ---
function updateHeadMetadata(pageId) {
    const page = pageMap.get(pageId);
    if (!page) return;

    // 1. Determine Values (Page Specific OR Global Config Fallback)
    const title = page.title || `${page.name} - ${siteConfig.websiteName}`;
    const desc = page.metaDescription || siteConfig.metaDescription;
    const keywords = page.metaKeywords || siteConfig.metaKeywords;
    const author = page.author || siteConfig.metaAuthor;
    const image = page.imageUrl || siteConfig.logoUrl;
    const url = `${siteConfig.hostingUrl}#${page.id}`;

    // 2. Update Title
    document.title = title;

    // 3. Helper to update/create meta tags
    const setMeta = (name, content, attr = 'name') => {
        let tag = document.querySelector(`meta[${attr}="${name}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute(attr, name);
            document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
    };

    // 4. Standard Meta
    setMeta('description', desc);
    setMeta('keywords', keywords);
    setMeta('author', author);
    setMeta('generator', 'ARvia Website Generator');
    setMeta('theme-color', siteConfig.themeColor);

    // 5. Open Graph (Facebook/LinkedIn)
    setMeta('og:title', title, 'property');
    setMeta('og:description', desc, 'property');
    setMeta('og:image', image, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:site_name', siteConfig.websiteName, 'property');

    // 6. Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', desc);
    setMeta('twitter:image', image);

    // 7. Favicon
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = siteConfig.faviconUrl;

    // 8. Header Visuals (Logo/Title)
    const logoEls = document.querySelectorAll('.arvia-logo-iframe');
    const textEls = document.querySelectorAll('.arvia-text-iframe');
    
    logoEls.forEach(img => {
        if(siteConfig.logoUrl) {
            img.src = siteConfig.logoUrl;
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
    
    textEls.forEach(el => el.textContent = siteConfig.websiteName);
}

// --- DATA INITIALIZATION ---
function initializePageData() {
  pagesDataIframe.sort((a, b) =>
    String(a.order).localeCompare(String(b.order), void 0, {
      numeric: !0
    })
  );
  pageMap = new Map(pagesDataIframe.map((e) => [e.id, { ...e, children: [] }]));
  pageTree = [];
  pageMap.forEach((e) => {
    // EDITOR VISIBILITY FIX:
    // We do NOT exclude 'editor' here so it appears in the sidebar.
    // It is still excluded from 'blogPosts' in generateSpecialPages() to hide from homepage.
    
    e.parentId && pageMap.has(e.parentId)
      ? pageMap.get(e.parentId).children.push(e)
      : pageTree.push(e);
  });
}

// --- HOMEPAGE POSTS RENDERING ---
function renderHomepagePosts(category = "All") {
    const postsContainer = document.getElementById("homepage-posts-container");
    if (!postsContainer) return;

    const filteredPosts = category === "All" 
        ? globalBlogPosts 
        : globalBlogPosts.filter(p => getCategoryName(p) === category);
    
    const initialPosts = filteredPosts.slice(0, 5);
    const logoUrl = siteConfig.logoUrl;
    const authorName = siteConfig.metaAuthor;

    let postsHTML = '<div class="newsletter-post-list">';
    
    if (initialPosts.length === 0) {
        postsHTML += `<p style="text-align:center; padding: 2rem; color: var(--text-secondary);">No posts found in this category.</p>`;
    } else {
        initialPosts.forEach((post) => {
            postsHTML += `
                <div class="newsletter-card" onclick="window.location.hash='#${post.id}'" role="link" tabindex="0" aria-label="Read article: ${post.name}">
                    <img src="${getImageUrl(post)}" alt="" class="newsletter-card-thumb" loading="lazy" onerror="this.onerror=null;this.src='${logoUrl}';">
                    <div class="newsletter-card-content">
                        <span class="newsletter-card-category">${getCategoryName(post)}</span>
                        <h3 class="newsletter-card-title"><a href="#${post.id}" tabindex="-1">${post.name}</a></h3>
                        <p class="newsletter-card-summary">${getSnippet(post.content, 100)}</p>
                        <div class="newsletter-card-meta">
                            By ${post.author || authorName} &bull; ${new Date(post.lastUpdated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
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

    postsContainer.innerHTML = postsHTML;

    document.querySelectorAll('.category-btn').forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function generateSpecialPages() {
  const authorName = siteConfig.metaAuthor;
  const siteTitle = siteConfig.websiteName;
  const siteDescription = siteConfig.metaDescription;
  const logoUrl = siteConfig.logoUrl;

  // --- Homepage Generation ---
  const homepageData = pageMap.get("homepage");
  if (homepageData) {
    const blogPosts = pagesDataIframe
      .filter(
        (p) =>
          p.id !== "homepage" &&
          p.id !== "references" &&
          p.id !== "editor" && // EXCLUDE EDITOR FROM BLOG POSTS LIST
          p.id !== "_websiteInfoPage" &&
          p.content &&
          p.lastUpdated
      )
      .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
    
    globalBlogPosts = blogPosts; 

    if (blogPosts.length > 0) {
      const featuredPost = blogPosts[0]; 
      const categories = ["All", ...new Set(blogPosts.map(p => getCategoryName(p)))];
      
      const categoriesHTML = `
        <div class="category-filter-container">
            ${categories.map(cat => `<button class="category-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}">${cat}</button>`).join('')}
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
                <div class="newsletter-header-card" onclick="window.location.hash='#${featuredPost.id}'" role="link" tabindex="0" aria-label="Read featured article: ${featuredPost.name}">
                    <span class="newsletter-card-category">${getCategoryName(featuredPost)}</span>
                    <h1 class="newsletter-title">${featuredPost.name}</h1>
                    <p class="newsletter-description">${getSnippet(featuredPost.content, 150)}</p>
                    <div class="newsletter-meta">
                        By ${featuredPost.author || authorName} &bull; ${new Date(featuredPost.lastUpdated).toLocaleDateString("en-US", {month: "long", day: "numeric", year: "numeric"})}
                    </div>
                </div>
            `;

      const postsContainerHTML = `<div id="homepage-posts-container"></div>`;

      homepageData.content = `
                <div class="homepage-wrapper">
                    ${heroHTML}
                    ${categoriesHTML}
                    ${featuredHTML}
                    ${postsContainerHTML}
                </div>
            `;
    } else {
      homepageData.content = `<div class="homepage-wrapper"><div class="main-article-header"><h1>${siteTitle}</h1><p>${siteDescription}</p><p>No articles yet. Start by creating a new page.</p></div></div>`;
    }
    pageMap.set("homepage", homepageData);
  }

  // --- References Page Generation ---
  const referencesData = pageMap.get("references");
  if (referencesData) {
    const allUrls = new Set();
    pagesDataIframe.forEach((page) => {
      if (page.id === "references" || page.id === "editor" || !page.content) return;
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = page.content;
      tempDiv.querySelectorAll('a[href^="http"], a[href^="//"]').forEach((a) => allUrls.add(a.href));
      tempDiv.querySelectorAll('img[src^="http"], img[src^="//"]').forEach((img) => allUrls.add(img.src));
      tempDiv.querySelectorAll('iframe[src^="http"], iframe[src^="//"]').forEach((iframe) => allUrls.add(iframe.src));
    });
    if (typeof relatedSites !== "undefined") {
      relatedSites.forEach((site) => site.url && allUrls.add(site.url));
    }

    const sortedUrls = Array.from(allUrls).sort();

    let referencesContent = "<h1>References</h1>";
    if (sortedUrls.length > 0) {
      referencesContent += '<ol class="references-list">';
      sortedUrls.forEach((url) => {
        referencesContent += `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a></li>`;
      });
      referencesContent += "</ol>";
    } else {
      referencesContent += "<p>No external references found on the site.</p>";
    }
    referencesData.content = referencesContent;
    pageMap.set("references", referencesData);
  }
}

// --- CONTENT & PAGE LOGIC ---

// IMPROVED SLUGIFY: Preserves Unicode for Hindi/Arabic/etc support
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-\u0080-\uFFFF]+/g, '') // Remove non-word chars (keeping unicode)
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

function prepareContentWithHeadingIds(e) {
  const t = document.createElement("div");
  t.innerHTML = e;
  const a = t.querySelectorAll("h1, h2, h3, h4, h5, h6"),
    r = new Set();
  return (
    a.forEach((e) => {
      if (!e.textContent.trim()) return;
      let t = slugify(e.textContent),
        a = t,
        i = 1;
      for (; r.has(t); ) (t = `${a}-${i}`), i++;
      r.add(t), (e.id = t);
    }),
    t.innerHTML
  );
}

function generateDocumentOutline(e) {
  const t = document.createElement("div");
  t.innerHTML = e;
  const a = t.querySelectorAll("h1, h2, h3, h4, h5, h6");
  if (0 === a.length)
    return '<div class="sidebar-page-item-iframe" style="opacity: 0.7; pointer-events: none;">No outline available.</div>';
  let r = "";
  return (
    a.forEach((e) => {
      if (!e.id || !e.textContent.trim()) return;
      const t = parseInt(e.tagName.substring(1), 10);
      r += `<a href="#${e.id}" class="document-outline-item-iframe level-${t}">${e.textContent}</a>`;
    }),
    r
  );
}

function displayPageContentIframe(e) {
  const t = pageMap.get(e);
  if (!t || !actualPageContentIframe) return;

  // **IMPORTANT: Update Meta Tags for this Page**
  updateHeadMetadata(e);

  // --- LOCKING CHECK ---
  if (t.password && !unlockedPages.has(t.id)) {
    actualPageContentIframe.innerHTML = generateLockScreen(t);
    currentPageIdIframe = e;
    syncSidebarToPage(e);
    updateBreadcrumbs(e);
    updatePaginationButtonsIframe();
    if (previewSidebarOutlineList) previewSidebarOutlineList.innerHTML = "";
    if (mobileSidebarOutlineList) mobileSidebarOutlineList.innerHTML = "";
    return;
  }
  // ---------------------

  const a = prepareContentWithHeadingIds(t.content),
    r = document.createElement("div");
  (r.className = "page-content-container"),
    (r.innerHTML = a),
    (actualPageContentIframe.innerHTML = ""),
    actualPageContentIframe.appendChild(r),
    (currentPageIdIframe = e),
    syncSidebarToPage(e),
    updateBreadcrumbs(e);
  const i = generateDocumentOutline(a);
  previewSidebarOutlineList && (previewSidebarOutlineList.innerHTML = i),
    mobileSidebarOutlineList && (mobileSidebarOutlineList.innerHTML = i),
    updatePaginationButtonsIframe(),
    initializeIframeScripts();

  // --- INJECT ADS ---
  // (Skip ads on Editor page)
  if (e !== 'editor' && typeof AdManager !== 'undefined' && AdManager.inject) {
      AdManager.inject(actualPageContentIframe);
  }
  
  // --- ENHANCE MEDIA ELEMENTS ---
  if (window.enhanceMediaElements) {
      window.enhanceMediaElements();
  }
    
  if (e === 'homepage') {
      setTimeout(() => {
          renderHomepagePosts('All');
          if(typeof checkCategoryOverflow === 'function') checkCategoryOverflow();
      }, 0);
  }

  // --- TRIGGER EDITOR INIT IF NEEDED ---
  if (e === 'editor' && typeof initEditor === 'function') {
      initEditor();
  }
}

function handleHashChange() {
  // DECODE URI COMPONENT: Crucial for Hindi/Unicode URLs
  let hash = window.location.hash.substring(1);
  try {
      hash = decodeURIComponent(hash);
  } catch(e) { console.warn("Hash decode error", e); }

  const targetPage = pageMap.get(hash);
  if (targetPage && targetPage.id !== currentPageIdIframe) {
    displayPageContentIframe(targetPage.id);
  } else if (!targetPage && hash === "") {
    const defaultPage =
      pagesDataIframe.find((p) => p.isDefault) ||
      (pagesDataIframe.length > 0 ? pagesDataIframe : null);
    if (defaultPage) {
      displayPageContentIframe(defaultPage.id);
    }
  }
}

// --- UTILITIES ---
function getContentType(e) {
  if (!e) return null;
  if (/\.(jpg|jpeg|png|gif|webp|svg|bmp)$/i.test(e)) return "image";
  if (/\.(mp4|webm|ogv)$/i.test(e)) return "video";
  if (/\.(mp3|wav|ogg|m4a)$/i.test(e)) return "audio";
  if (/\.pdf$/i.test(e)) return "pdf";
  if (/youtube\.com|youtu\.be/i.test(e)) return "youtube";
  if (/vimeo\.com/i.test(e)) return "vimeo";
  if (/google\.[a-z\.]+\/maps/i.test(e)) return "maps";
  try {
    const t = new URL(e);
    if ("http:" === t.protocol || "https:" === t.protocol) return "iframe";
  } catch (e) {}
  return null;
}

function initializeIframeScripts() {
  if (typeof MathJax !== "undefined" && MathJax.typesetPromise) {
    MathJax.typesetPromise([actualPageContentIframe]).catch((e) =>
      console.error("MathJax typesetting error:", e)
    );
  }

  // DYNAMIC LOADING: Highlight.js
  const codeBlocks = actualPageContentIframe.querySelectorAll("pre code");
  if (codeBlocks.length > 0) {
      Promise.all([
          loadResource('css', RESOURCE_URLS.hljsCSS),
          loadResource('script', RESOURCE_URLS.hljsJS)
      ]).then(() => {
          if (typeof hljs !== "undefined") {
              codeBlocks.forEach(block => hljs.highlightElement(block));
          }
      });
  }

  // DYNAMIC LOADING: TikZJax
  const tikzScripts = actualPageContentIframe.querySelectorAll('script[type="text/tikz"]');
  if (tikzScripts.length > 0) {
      loadResource('script', RESOURCE_URLS.tikzJS);
  }

  codeBlocks.forEach((codeBlock) => {
    if (
      codeBlock.parentNode &&
      !codeBlock.parentNode.querySelector(".copy-code-btn-iframe")
    ) {
      const copyButton = document.createElement("button");
      copyButton.className = "copy-code-btn-iframe";
      copyButton.textContent = "Copy";
      copyButton.setAttribute("aria-label", "Copy code to clipboard");

      copyButton.onclick = () => {
        const text = codeBlock.textContent;
        // Robust Copy Fallback
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                copyButton.textContent = "Copied!";
                setTimeout(() => { copyButton.textContent = "Copy"; }, 2000);
            }).catch(() => fallbackCopy(text, copyButton));
        } else {
            fallbackCopy(text, copyButton);
        }
      };

      codeBlock.parentNode.style.position = "relative";
      codeBlock.parentNode.appendChild(copyButton);
    }
  });

  if (currentPageIdIframe !== "homepage") {
    animatePageContent();
  }
}

function fallbackCopy(text, btn) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        if(btn) {
            btn.textContent = "Copied!";
            setTimeout(() => { btn.textContent = "Copy"; }, 2000);
        }
    } catch (err) {
        console.error('Fallback copy failed', err);
    }
    document.body.removeChild(textArea);
}

// --- SEARCH LOGIC ---
function removeHighlights() {
  actualPageContentIframe
    .querySelectorAll("mark.arvia-highlight")
    .forEach((e) => {
      const t = e.parentNode;
      t.replaceChild(document.createTextNode(e.textContent), e), t.normalize();
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

  const t = new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "gi");
  const a = document.createTreeWalker(
    actualPageContentIframe,
    NodeFilter.SHOW_TEXT,
    null,
    !1
  );
  let r;
  const i = [];
  for (; (r = a.nextNode()); ) {
    const e = r.parentElement.tagName.toUpperCase();
    "SCRIPT" !== e && "STYLE" !== e && t.test(r.nodeValue) && i.push(r);
  }

  i.forEach((e) => {
    const a = e.parentNode;
    if (a.closest(".header-actions-iframe, .main-content-header-iframe"))
      return;
    const r = e.nodeValue.split(t),
      i = e.nodeValue.match(t),
      n = document.createDocumentFragment();
    for (let e = 0; e < r.length; e++) {
      n.appendChild(document.createTextNode(r[e]));
      if (e < i.length) {
        const t = document.createElement("mark");
        (t.className = "arvia-highlight"),
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
  const count = searchResults.length;
  if (count > 0) {
    searchNavControls.style.display = "flex";
    currentSearchIndex = 0;
    navigateToSearchResult(0);
  } else {
    searchNavControls.style.display = "none";
    searchResultsCount.textContent = "";
  }
}

function navigateToSearchResult(index) {
  if (searchResults.length === 0) return;

  if (currentSearchIndex >= 0 && currentSearchIndex < searchResults.length) {
    searchResults[currentSearchIndex].classList.remove("current-highlight");
  }

  currentSearchIndex = (index + searchResults.length) % searchResults.length;

  const currentResult = searchResults[currentSearchIndex];
  currentResult.classList.add("current-highlight");
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
  searchNavControls = document.getElementById("searchNavControls"),
  searchResultsCount = document.getElementById("searchResultsCount"),
  searchNavUp = document.getElementById("searchNavUp"),
  searchNavDown = document.getElementById("searchNavDown"),
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
  accessibilityBtnIframe = document.getElementById("accessibilityBtnIframe"),
  accessibilityOverlayIframe = document.getElementById("accessibilityOverlayIframe"),
  decreaseFontBtn = document.getElementById("decreaseFontBtn"),
  resetFontBtn = document.getElementById("resetFontBtn"),
  increaseFontBtn = document.getElementById("increaseFontBtn"),
  contrastToggleBtn = document.getElementById("contrastToggleBtn"),
  saturationToggleBtn = document.getElementById("saturationToggleBtn"),
  pptModeBtnIframe = document.getElementById("pptModeBtnIframe"),
  notificationContainer = document.getElementById("notificationContainer");


// --- NOTIFICATION SYSTEM ---
const MAX_NOTIFICATIONS = 3;
const AUTO_DISMISS_TIME = 3000; // 3 Seconds

// Helper to show notification
window.arviaLog = function(message, type = 'info') {
    if (!notificationContainer) return;

    // Icons based on type
    const icons = {
        info: 'fa-info-circle',
        success: 'fa-check-circle',
        warning: 'fa-exclamation-triangle',
        error: 'fa-times-circle',
        log: 'fa-info-circle'
    };
    const iconClass = icons[type] || icons.info;

    // Create Toast Element
    const toast = document.createElement('div');
    toast.className = `arvia-notification-toast type-${type}`;
    toast.setAttribute('role', 'alert');
    
    toast.innerHTML = `
        <div class="toast-icon"><i class="fas ${iconClass}"></i></div>
        <div class="toast-content">
            <p class="toast-message">${message}</p>
        </div>
        <button class="toast-close" aria-label="Close notification"><i class="fas fa-times"></i></button>
    `;

    // Add Expand/Collapse Logic
    toast.addEventListener('click', (e) => {
        if (e.target.closest('.toast-close')) return; // Ignore if clicking close button
        toast.classList.toggle('expanded');
    });

    // Add Close Logic
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        removeToast(toast);
    });

    // Auto Dismiss
    const dismissTimer = setTimeout(() => {
        removeToast(toast);
    }, AUTO_DISMISS_TIME);

    // Pause dismiss on hover
    toast.addEventListener('mouseenter', () => clearTimeout(dismissTimer));
    toast.addEventListener('mouseleave', () => {
        setTimeout(() => removeToast(toast), 1500);
    });

    // Stack Logic: Remove oldest if limit reached
    if (notificationContainer.children.length >= MAX_NOTIFICATIONS) {
        removeToast(notificationContainer.children[0]);
    }

    notificationContainer.appendChild(toast);
};

function removeToast(toast) {
    if (toast.classList.contains('closing')) return;
    toast.classList.add('closing');
    toast.addEventListener('animationend', () => {
        if (toast.parentElement) {
            toast.parentElement.removeChild(toast);
        }
    });
}

// --- CONSOLE INTERCEPTION ---
// Capture console.log and redirect to UI toast
(function() {
    const originalConsole = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        info: console.info
    };

    function formatArgs(args) {
        return args.map(arg => {
            if (typeof arg === 'object') {
                try {
                    return JSON.stringify(arg);
                } catch(e) {
                    return String(arg);
                }
            }
            return String(arg);
        }).join(' ');
    }

    console.log = function(...args) {
        originalConsole.log.apply(console, args);
        window.arviaLog(formatArgs(args), 'info');
    };

    console.info = function(...args) {
        originalConsole.info.apply(console, args);
        window.arviaLog(formatArgs(args), 'info');
    };

    console.warn = function(...args) {
        originalConsole.warn.apply(console, args);
        window.arviaLog(formatArgs(args), 'warning');
    };

    console.error = function(...args) {
        originalConsole.error.apply(console, args);
        window.arviaLog(formatArgs(args), 'error');
    };
})();


// --- AD MANAGER ---
const AdManager = {
    getRandomAd: function() {
        if (!adsConfig || !adsConfig.ads || adsConfig.ads.length === 0) return null;
        if (!adsConfig.randomize) return adsConfig.ads[0];
        const randomIndex = Math.floor(Math.random() * adsConfig.ads.length);
        return adsConfig.ads[randomIndex];
    },

    createAdElement: function(ad) {
        const container = document.createElement('div');
        container.className = 'arvia-ad-container';
        
        const hasMedia = ad.type === 'image' || ad.type === 'video';
        const contentClass = hasMedia ? 'arvia-ad-content has-media' : 'arvia-ad-content';

        let mediaHTML = '';
        if (ad.type === 'image' && ad.src) {
            mediaHTML = `<div class="arvia-ad-media"><img src="${ad.src}" alt="${ad.alt || 'Ad'}" loading="lazy"></div>`;
        } else if (ad.type === 'video' && ad.src) {
            mediaHTML = `<div class="arvia-ad-media"><video src="${ad.src}" autoplay muted loop playsinline></video></div>`;
        }

        container.innerHTML = `
            <div class="arvia-ad-header">
                <span class="arvia-ad-label">Sponsored</span>
                <button class="arvia-ad-close" aria-label="Remove Ad"><i class="fas fa-times"></i></button>
            </div>
            <div class="${contentClass}">
                ${mediaHTML}
                <div class="arvia-ad-text-content">
                    ${ad.title ? `<h4 class="arvia-ad-title">${ad.title}</h4>` : ''}
                    <p class="arvia-ad-desc">${ad.text}</p>
                    ${ad.cta ? `<a href="${ad.link}" class="arvia-ad-cta" target="_blank" rel="noopener">${ad.cta}</a>` : ''}
                </div>
            </div>
        `;

        // Dismiss Logic
        const closeBtn = container.querySelector('.arvia-ad-close');
        closeBtn.addEventListener('click', () => {
            container.style.animation = 'fadeOutAd 0.5s ease forwards';
            setTimeout(() => container.remove(), 500);
        });

        return container;
    },

    inject: function(contentContainer) {
        if (!adsConfig || !adsConfig.enabled) return;
        
        // Target paragraphs to inject ads between
        const pageContainer = contentContainer.querySelector('.page-content-container');
        if (!pageContainer) return;
        
        const paragraphs = Array.from(pageContainer.querySelectorAll('p, h2'));
        if (paragraphs.length < 3) return;

        let pCount = 0;
        const density = adsConfig.density || 3;

        paragraphs.forEach((p) => {
            pCount++;
            if (pCount % density === 0) {
                const ad = this.getRandomAd();
                if (ad) {
                    const adEl = this.createAdElement(ad);
                    p.parentNode.insertBefore(adEl, p.nextSibling);
                }
            }
        });
    }
};

// Make AdManager global
window.AdManager = AdManager;

// --- CUSTOM MEDIA PLAYERS ---
window.enhanceMediaElements = function() {
    const mediaElements = document.querySelectorAll('#actualPageContentIframe video, #actualPageContentIframe audio');
    
    mediaElements.forEach(media => {
        if (media.closest('.arvia-player-wrapper')) return; // Already enhanced

        const isVideo = media.tagName === 'VIDEO';
        const wrapper = document.createElement('div');
        wrapper.className = `arvia-player-wrapper ${isVideo ? 'video-type' : 'audio-type'}`;
        
        // 1. Wrap the element
        media.parentNode.insertBefore(wrapper, media);
        wrapper.appendChild(media);
        
        media.removeAttribute('controls'); // We build our own
        if(isVideo) media.setAttribute('playsinline', '');

        // 2. Build UI
        const uiHTML = `
            ${isVideo ? `<div class="arvia-player-overlay show-play">
                <button class="big-play-btn"><i class="fas fa-play"></i></button>
            </div>` : ''}
            <div class="arvia-controls">
                <div class="arvia-progress-container">
                    <div class="arvia-progress-buffer"></div>
                    <div class="arvia-progress-current">
                         <div class="arvia-progress-handle"></div>
                    </div>
                </div>
                <div class="arvia-controls-row">
                    <div class="arvia-controls-left">
                        <button class="arvia-btn play-toggle"><i class="fas fa-play"></i></button>
                        <div class="volume-container">
                            <button class="arvia-btn mute-toggle"><i class="fas fa-volume-up"></i></button>
                            <div class="volume-slider-wrapper">
                                <input type="range" class="volume-slider" min="0" max="1" step="0.05" value="1">
                            </div>
                        </div>
                        <span class="arvia-time">00:00 / 00:00</span>
                    </div>
                    <div class="arvia-controls-right">
                        <div class="speed-container">
                            <button class="arvia-btn speed-btn">1x</button>
                            <div class="speed-menu">
                                <button class="speed-option" data-speed="0.5">0.5x</button>
                                <button class="speed-option active" data-speed="1">1x</button>
                                <button class="speed-option" data-speed="1.5">1.5x</button>
                                <button class="speed-option" data-speed="2">2x</button>
                            </div>
                        </div>
                        ${isVideo ? '<button class="arvia-btn pip-toggle" title="Picture in Picture"><i class="fas fa-clone"></i></button>' : ''}
                        ${isVideo ? '<button class="arvia-btn fullscreen-toggle"><i class="fas fa-expand"></i></button>' : ''}
                    </div>
                </div>
            </div>
        `;
        
        wrapper.insertAdjacentHTML('beforeend', uiHTML);

        // 3. Logic
        const controls = wrapper.querySelector('.arvia-controls');
        const playBtn = wrapper.querySelector('.play-toggle i');
        const bigPlayBtn = wrapper.querySelector('.big-play-btn');
        const timeDisplay = wrapper.querySelector('.arvia-time');
        const progressBar = wrapper.querySelector('.arvia-progress-container');
        const progressCurrent = wrapper.querySelector('.arvia-progress-current');
        const progressBuffer = wrapper.querySelector('.arvia-progress-buffer');
        const volBtn = wrapper.querySelector('.mute-toggle i');
        const volSlider = wrapper.querySelector('.volume-slider');
        const fullscreenBtn = wrapper.querySelector('.fullscreen-toggle');
        const pipBtn = wrapper.querySelector('.pip-toggle');
        const speedBtn = wrapper.querySelector('.speed-btn');
        const speedMenu = wrapper.querySelector('.speed-menu');
        const speedOptions = wrapper.querySelectorAll('.speed-option');
        const overlay = wrapper.querySelector('.arvia-player-overlay');

        // Helper: Format Time
        const formatTime = (seconds) => {
            const m = Math.floor(seconds / 60);
            const s = Math.floor(seconds % 60);
            return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        };

        // Toggle Play
        const togglePlay = () => {
            if (media.paused) media.play(); else media.pause();
        };

        // Event Listeners
        wrapper.querySelectorAll('.play-toggle, .big-play-btn').forEach(b => b && b.addEventListener('click', togglePlay));
        if(isVideo) media.addEventListener('click', togglePlay);

        media.addEventListener('play', () => {
            playBtn.className = 'fas fa-pause';
            if(overlay) overlay.classList.remove('show-play');
            wrapper.classList.remove('idle');
        });

        media.addEventListener('pause', () => {
            playBtn.className = 'fas fa-play';
            if(overlay) overlay.classList.add('show-play');
            wrapper.classList.remove('idle');
        });

        media.addEventListener('timeupdate', () => {
            const percent = (media.currentTime / media.duration) * 100;
            progressCurrent.style.width = `${percent}%`;
            timeDisplay.textContent = `${formatTime(media.currentTime)} / ${formatTime(media.duration || 0)}`;
        });

        media.addEventListener('progress', () => {
             if (media.buffered.length > 0) {
                const bufferedEnd = media.buffered.end(media.buffered.length - 1);
                const duration = media.duration;
                if (duration > 0) {
                    progressBuffer.style.width = `${(bufferedEnd / duration) * 100}%`;
                }
            }
        });

        // Seeking
        let isDragging = false;
        const seek = (e) => {
            const rect = progressBar.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            media.currentTime = pos * media.duration;
        };

        progressBar.addEventListener('mousedown', (e) => {
            isDragging = true;
            seek(e);
        });
        document.addEventListener('mousemove', (e) => { if(isDragging) seek(e); });
        document.addEventListener('mouseup', () => isDragging = false);

        // Volume
        volSlider.addEventListener('input', (e) => {
            media.volume = e.target.value;
            media.muted = false;
            updateVolIcon();
        });

        wrapper.querySelector('.mute-toggle').addEventListener('click', () => {
            media.muted = !media.muted;
            updateVolIcon();
        });

        const updateVolIcon = () => {
            if(media.muted || media.volume === 0) {
                volBtn.className = 'fas fa-volume-mute';
                volSlider.value = 0;
            } else if(media.volume < 0.5) {
                volBtn.className = 'fas fa-volume-down';
                volSlider.value = media.volume;
            } else {
                volBtn.className = 'fas fa-volume-up';
                volSlider.value = media.volume;
            }
        };

        // Speed
        speedBtn.addEventListener('click', () => speedMenu.classList.toggle('show'));
        speedOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                media.playbackRate = parseFloat(opt.dataset.speed);
                speedBtn.textContent = opt.textContent;
                speedMenu.classList.remove('show');
                speedOptions.forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
            });
        });
        // Close speed menu if clicking outside
        document.addEventListener('click', (e) => {
            if(!e.target.closest('.speed-container')) speedMenu.classList.remove('show');
        });

        // Fullscreen
        if(fullscreenBtn) {
            fullscreenBtn.addEventListener('click', () => {
                if (!document.fullscreenElement) {
                    wrapper.requestFullscreen();
                } else {
                    document.exitFullscreen();
                }
            });
        }
        
        // PiP
        if(pipBtn && document.pictureInPictureEnabled) {
            pipBtn.addEventListener('click', async () => {
                if (document.pictureInPictureElement) {
                    await document.exitPictureInPicture();
                } else {
                    await media.requestPictureInPicture();
                }
            });
        } else if (pipBtn) {
            pipBtn.style.display = 'none';
        }

        // Idle Mouse (Hide Controls)
        let idleTimer;
        wrapper.addEventListener('mousemove', () => {
            wrapper.classList.remove('idle');
            clearTimeout(idleTimer);
            if(!media.paused) {
                idleTimer = setTimeout(() => wrapper.classList.add('idle'), 3000);
            }
        });
        wrapper.addEventListener('mouseleave', () => {
            if(!media.paused) wrapper.classList.add('idle');
        });
    });
};


// --- EXISTING UI FUNCTIONS ---

// *** NEW LOGIC: DYNAMIC ALIGNMENT FOR FILTERS ***
function checkCategoryOverflow() {
    const container = document.querySelector('.category-filter-container');
    if (!container) return;
    
    container.classList.remove('is-centered');
    
    if (container.scrollWidth <= container.clientWidth + 2) {
        container.classList.add('is-centered');
    }
}
window.checkCategoryOverflow = checkCategoryOverflow;


function animatePageContent() {
  if (!actualPageContentIframe || typeof anime === "undefined") return;
  const container = actualPageContentIframe.querySelector(".page-content-container");
  if (!container) return;
  const elements = [...container.children];
  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
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
  if (!breadcrumbTrailIframe) return;
  const t = [];
  let a = pageMap.get(e);
  for (; a; ) t.unshift(a), (a = pageMap.get(a.parentId));
  let r = "";
  if (document.referrer)
    try {
      const e = new URL(document.referrer),
        t = new URL(window.location.origin);
      e.hostname !== t.hostname &&
        (r += `<span class="breadcrumb-item-iframe" title="Referred from ${e.hostname}">${e.hostname}</span><span class="breadcrumb-separator-iframe"><i class="fas fa-chevron-right"></i></span>`);
    } catch (e) {}
  t.forEach((e, a) => {
    a < t.length - 1
      ? (r += `<a href="#${e.id}" class="breadcrumb-item-iframe">${e.name}</a><span class="breadcrumb-separator-iframe"><i class="fas fa-chevron-right"></i></span>`)
      : (r += `<span class="breadcrumb-item-iframe current" aria-current="page">${e.name}</span>`);
  }),
    (breadcrumbTrailIframe.innerHTML = r);
}

function updatePaginationButtonsIframe() {
  const currentIndex = pagesDataIframe.findIndex(
    (p) => p.id === currentPageIdIframe
  );
  if (prevPageBtnIframe) {
    prevPageBtnIframe.disabled = currentIndex <= 0;
  }
  if (nextPageBtnIframe) {
    nextPageBtnIframe.disabled = currentIndex >= pagesDataIframe.length - 1;
  }
}

function initializeIframeScripts() {
  if (typeof MathJax !== "undefined" && MathJax.typesetPromise) {
    MathJax.typesetPromise([actualPageContentIframe]).catch((e) =>
      console.error("MathJax typesetting error:", e)
    );
  }

  actualPageContentIframe.querySelectorAll("pre code").forEach((codeBlock) => {
    if (typeof hljs !== "undefined") {
      hljs.highlightElement(codeBlock);
    }

    if (
      codeBlock.parentNode &&
      !codeBlock.parentNode.querySelector(".copy-code-btn-iframe")
    ) {
      const copyButton = document.createElement("button");
      copyButton.className = "copy-code-btn-iframe";
      copyButton.textContent = "Copy";
      copyButton.setAttribute("aria-label", "Copy code to clipboard");

      copyButton.onclick = () => {
        navigator.clipboard
          .writeText(codeBlock.textContent)
          .then(() => {
            copyButton.textContent = "Copied!";
            setTimeout(() => {
              copyButton.textContent = "Copy";
            }, 2000);
          })
          .catch((err) => {
            console.error("Failed to copy code in iframe:", err);
          });
      };

      codeBlock.parentNode.style.position = "relative";
      codeBlock.parentNode.appendChild(copyButton);
    }
  });

  if (currentPageIdIframe !== "homepage") {
    animatePageContent();
  }
}

function handleLoadMorePosts(button) {
  button.disabled = true;
  const postList = document.querySelector(".newsletter-post-list");
  if (!postList) return;

  const displayedCount = postList.children.length;
  const activeBtn = document.querySelector('.category-btn.active');
  const currentCategory = activeBtn ? activeBtn.dataset.category : 'All';
  const authorName = siteConfig.metaAuthor;
  
  const filteredPosts = currentCategory === "All" 
        ? globalBlogPosts 
        : globalBlogPosts.filter(p => getCategoryName(p) === currentCategory);
        
  const postsToLoad = filteredPosts.slice(displayedCount, displayedCount + 5);
  const logoUrl = siteConfig.logoUrl;

  const fragment = document.createDocumentFragment();

  postsToLoad.forEach((post) => {
    const card = document.createElement("div");
    card.className = "newsletter-card newly-added";
    card.setAttribute("onclick", `window.location.hash='#${post.id}'`);
    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Read article: ${post.name}`);

    card.innerHTML = `
            <img src="${getImageUrl(post)}" alt="" class="newsletter-card-thumb" loading="lazy" onerror="this.onerror=null;this.src='${logoUrl}';">
            <div class="newsletter-card-content">
                <span class="newsletter-card-category">${getCategoryName(post)}</span>
                <h3 class="newsletter-card-title"><a href="#${post.id}" tabindex="-1">${post.name}</a></h3>
                <p class="newsletter-card-summary">${getSnippet(post.content, 100)}</p>
                <div class="newsletter-card-meta">
                    By ${post.author || authorName} &bull; ${new Date(post.lastUpdated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </div>
            </div>
        `;
    fragment.appendChild(card);
  });

  postList.appendChild(fragment);

  if (postList.children.length >= filteredPosts.length) {
    button.parentElement.remove();
  } else {
    button.disabled = false;
  }
}

// --- LOCKING LOGIC ---
function attemptUnlock(pageId) {
    const passwordInput = document.getElementById("pagePasswordInput");
    const errorDiv = document.getElementById("passwordError");
    const page = pageMap.get(pageId);
    
    if (!passwordInput || !page) return;
    
    const entered = passwordInput.value;
    
    // SECURITY UPDATE: Use ARviaSecurity to verify against encrypted/hashed password
    if (typeof ARviaSecurity !== 'undefined') {
        if (ARviaSecurity.verify(entered, page.password)) {
            unlockedPages.add(pageId);
            errorDiv.textContent = "";
            displayPageContentIframe(pageId);
        } else {
            handleUnlockError();
        }
    } else {
        // Fallback if security.js failed to load
        if (entered === page.password) {
            unlockedPages.add(pageId);
            errorDiv.textContent = "";
            displayPageContentIframe(pageId);
        } else {
             handleUnlockError();
        }
    }
    
    function handleUnlockError() {
        errorDiv.textContent = "Incorrect password.";
        passwordInput.classList.add("input-error");
        const container = document.querySelector(".locked-page-container");
        if (container) {
            container.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-6px)' },
                { transform: 'translateX(6px)' },
                { transform: 'translateX(0)' }
            ], {
                duration: 300,
                easing: 'ease-in-out'
            });
        }
        setTimeout(() => passwordInput.classList.remove("input-error"), 2000);
    }
}

function handlePasswordKeypress(event) {
    if (event.key === 'Enter') {
        attemptUnlock(currentPageIdIframe);
    }
}

// --- MODAL & OVERLAY UI ---
function openPreview(element) {
  let url, caption, type;
  previewGoToBtn.style.display = "none";
  previewGoToBtn.removeAttribute("data-url");

  if (element.tagName === "IMG") {
    url = element.src;
    caption = element.alt || "Image Preview";
    type = "image";
  } else if (element.tagName === "A" && element.href) {
    try {
      const currentLoc = new URL(window.location.href);
      const linkLoc = new URL(element.href);
      if (
        linkLoc.origin === currentLoc.origin &&
        linkLoc.pathname === currentLoc.pathname &&
        linkLoc.hash
      ) {
        return;
      }
    } catch (e) {}

    url = element.href;
    caption = element.title || element.textContent.trim() || "Link Preview";
    type = getContentType(url);
  } else {
    return;
  }

  if (!url || !type) return;

  let contentEl;
  if (["pdf", "youtube", "vimeo", "maps", "iframe"].includes(type)) {
    previewGoToBtn.style.display = "block";
    previewGoToBtn.setAttribute("data-url", url);
  }

  previewLoader.style.display = "block";
  previewContent.innerHTML = "";
  previewCaption.textContent = "";

  switch (type) {
    case "image":
      contentEl = document.createElement("img");
      contentEl.src = url;
      contentEl.alt = caption;
      break;
    case "video":
      contentEl = document.createElement("video");
      contentEl.src = url;
      contentEl.controls = true;
      contentEl.autoplay = true;
      break;
    case "audio":
      contentEl = document.createElement("audio");
      contentEl.src = url;
      contentEl.controls = true;
      contentEl.autoplay = true;
      break;
    case "youtube":
      const youtubeMatch = url.match(
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i
      );
      if (youtubeMatch) {
        contentEl = document.createElement("iframe");
        contentEl.src = `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`;
        contentEl.frameBorder = "0";
        contentEl.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        contentEl.allowFullscreen = true;
      }
      break;
    case "vimeo":
      const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?([0-9]+)/);
      if (vimeoMatch) {
        contentEl = document.createElement("iframe");
        contentEl.src = `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
        contentEl.frameBorder = "0";
        contentEl.allow = "autoplay; fullscreen";
        contentEl.allowFullscreen = true;
      }
      break;
    case "pdf":
    case "maps":
    case "iframe":
      contentEl = document.createElement("iframe");
      contentEl.src = url;
      contentEl.frameBorder = "0";
      contentEl.allowFullscreen = true;
      break;
    default:
      previewLoader.style.display = "none";
      return;
  }

  if (contentEl) {
    const onContentLoad = () => {
      previewLoader.style.display = "none";
      previewContent.style.opacity = 1;
    };
    contentEl.onload = contentEl.onloadeddata = contentEl.oncanplay = onContentLoad;
    contentEl.onerror = () => {
      previewLoader.style.display = "none";
      previewContent.innerHTML =
        '<p style="color:#f87171;">Could not load content.</p>';
      previewContent.style.opacity = 1;
    };
    previewContent.style.opacity = 0;
    previewContent.appendChild(contentEl);
    previewCaption.textContent = caption;
    if (["iframe", "pdf", "maps"].includes(type)) {
      setTimeout(onContentLoad, 1000);
    }
  }
  previewOverlay.classList.add("show");
  previewOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePreview() {
  previewOverlay.classList.remove("show"),
    previewOverlay.setAttribute("aria-hidden", "true"),
    (document.body.style.overflow = ""),
    (previewContent.innerHTML = ""),
    (previewCaption.textContent = ""),
    (previewGoToBtn.style.display = "none"),
    previewGoToBtn.removeAttribute("data-url");
}

function hidePageStats() {
  if (pageStatsOverlayIframe.classList.contains("show")) {
    pageStatsOverlayIframe.classList.remove("show");
    pageStatsOverlayIframe.setAttribute("aria-hidden", "true");
  }
}

function togglePageStats() {
  hideAccessibilityOverlay(); 
  if (pageStatsOverlayIframe.classList.contains("show"))
    return void hidePageStats();
  const e = pageMap.get(currentPageIdIframe);
  if (!e) return;
  const t = actualPageContentIframe.innerText || "",
    a = t.trim().split(/\s+/).filter(Boolean).length,
    r = Math.ceil(a / 200),
    i = e.author || siteConfig.metaAuthor,
    n = e.lastUpdated
      ? new Date(e.lastUpdated).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })
      : "Not specified";
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
    pageStatsOverlayIframe.classList.add("show"),
    pageStatsOverlayIframe.setAttribute("aria-hidden", "false");
}

// --- ACCESSIBILITY FUNCTIONS ---
function hideAccessibilityOverlay() {
  if (accessibilityOverlayIframe.classList.contains("show")) {
    accessibilityOverlayIframe.classList.remove("show");
    accessibilityOverlayIframe.setAttribute("aria-hidden", "true");
  }
}

function toggleAccessibilityOverlay() {
    hidePageStats(); 
    if (accessibilityOverlayIframe.classList.contains("show")) {
        hideAccessibilityOverlay();
    } else {
        accessibilityOverlayIframe.classList.add("show");
        accessibilityOverlayIframe.setAttribute("aria-hidden", "false");
    }
}

function updateFontSize(action) {
    const html = document.documentElement;
    const currentSize = parseFloat(window.getComputedStyle(html, null).getPropertyValue('font-size'));
    let newSize = currentSize;
    if (action === 'increase') newSize = Math.min(currentSize + 2, 24); 
    if (action === 'decrease') newSize = Math.max(currentSize - 2, 12); 
    if (action === 'reset') newSize = 16;
    html.style.fontSize = `${newSize}px`;
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
    const isHigh = document.body.classList.contains('high-contrast');
    
    if (contrastToggleBtn) {
        contrastToggleBtn.classList.toggle('active', isHigh);
        const status = contrastToggleBtn.querySelector('.toggle-status');
        if (status) status.textContent = isHigh ? "High" : "Normal";
    }
}

function toggleSaturation() {
    document.body.classList.toggle('grayscale-mode');
    const isGray = document.body.classList.contains('grayscale-mode');
    
    if (saturationToggleBtn) {
        saturationToggleBtn.classList.toggle('active', isGray);
        const status = saturationToggleBtn.querySelector('.toggle-status');
        if (status) status.textContent = isGray ? "Grayscale" : "Color";
    }
}

// --- SIDEBAR UI ---
function buildSidebarItemsHTML(nodes) {
  let html = "";
  for (const node of nodes) {
    const hasChildren = node.children.length > 0;
    const hasGrandchildren =
      hasChildren && node.children.some((child) => child.children.length > 0);
    
    const lockIcon = node.password ? '<i class="fas fa-lock locked-sidebar-icon" title="Password Protected"></i>' : '';

    html += `<div class="sidebar-page-item-wrapper">`;
    html += `<div class="sidebar-page-item-container">`;
    html += `<div class="sidebar-page-item-iframe" data-id="${node.id}" role="link" tabindex="0">${node.name}${lockIcon}</div>`;

    if (hasChildren) {
      const action = hasGrandchildren ? "slide" : "toggle";
      html += `<button class="sidebar-toggle-children-btn" data-action="${action}" data-parent-id="${node.id}" aria-label="Toggle subpages for ${node.name}" aria-expanded="false"><i class="fas fa-chevron-right"></i></button>`;
    }

    html += `</div>`;

    if (hasChildren && !hasGrandchildren) {
      html += `<div class="sidebar-subpage-list">${buildSidebarItemsHTML(
        node.children
      )}</div>`;
    }

    html += `</div>`;
  }
  return html;
}

function buildSidebar(e) {
  const t = document.getElementById(e);
  if (!t) return;
  const a = buildSidebarItemsHTML(pageTree),
    r = document.createElement("div");
  (r.className = "sidebar-panel-container"),
    (r.innerHTML = `<div class="sidebar-panel" data-depth="0">${a}</div>`),
    (t.innerHTML = ""),
    t.appendChild(r);
}

function syncSidebarToPage(pageId) {
  document
    .querySelectorAll(".sidebar-page-item-iframe.active")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(`.sidebar-page-item-iframe[data-id="${pageId}"]`)
    .forEach((el) => el.classList.add("active"));

  const ancestors = [];
  let currentNode = pageMap.get(pageId);
  while (currentNode && currentNode.parentId) {
    currentNode = pageMap.get(currentNode.parentId);
    if (currentNode) {
      ancestors.unshift(currentNode);
    }
  }

  [previewSidebarPageListIframe, mobileSidebarPageListIframe].forEach(
    (sidebarEl) => {
      if (!sidebarEl) return;
      const panelContainer = sidebarEl.querySelector(
        ".sidebar-panel-container"
      );
      if (!panelContainer) return;

      panelContainer
        .querySelectorAll('.sidebar-panel:not([data-depth="0"])')
        .forEach((p) => p.remove());
      panelContainer.style.transform = "translateX(0%)";
      panelContainer
        .querySelectorAll(".sidebar-subpage-list.show")
        .forEach((subList) => {
          subList.classList.remove("show");
          subList.style.maxHeight = null;
          const toggleBtn = subList.previousElementSibling.querySelector(
            ".sidebar-toggle-children-btn"
          );
          if (toggleBtn) {
            toggleBtn.classList.remove("open");
            toggleBtn.setAttribute("aria-expanded", "false");
            toggleBtn.querySelector("i.fas").className = "fas fa-chevron-right";
          }
        });

      let currentPanel = panelContainer.querySelector(
        '.sidebar-panel[data-depth="0"]'
      );
      ancestors.forEach((ancestorNode) => {
        const hasGrandchildren = ancestorNode.children.some(
          (child) => child.children.length > 0
        );

        if (hasGrandchildren) {
          const newDepth = panelContainer.querySelectorAll(".sidebar-panel")
            .length;
          const newPanel = document.createElement("div");
          newPanel.className = "sidebar-panel";
          newPanel.dataset.depth = newDepth;
          const childrenHTML = buildSidebarItemsHTML(ancestorNode.children);
          newPanel.innerHTML = `<div class="sidebar-panel-header"><button class="sidebar-back-btn" aria-label="Go back"><i class="fas fa-arrow-left"></i></button><span class="sidebar-panel-title">${ancestorNode.name}</span></div>${childrenHTML}`;
          panelContainer.appendChild(newPanel);
          currentPanel = newPanel;
        } else {
          const toggleBtn = currentPanel.querySelector(
            `.sidebar-toggle-children-btn[data-parent-id="${ancestorNode.id}"]`
          );
          if (toggleBtn) {
            const subList = toggleBtn.parentElement.nextElementSibling;
            if (subList && subList.classList.contains("sidebar-subpage-list")) {
              toggleBtn.classList.add("open");
              toggleBtn.setAttribute("aria-expanded", "true");
              toggleBtn.querySelector("i.fas").className =
                "fas fa-chevron-down";
              subList.classList.add("show");
              subList.style.maxHeight = subList.scrollHeight + "px";
            }
          }
        }
      });

      const finalPanelCount = panelContainer.querySelectorAll(".sidebar-panel")
        .length;
      if (finalPanelCount > 1) {
        panelContainer.style.transition = "none";
        panelContainer.style.transform = `translateX(-${
          (finalPanelCount - 1) * 100
        }%)`;
        setTimeout(() => {
          panelContainer.style.transition = "";
        }, 50);
      }

      sidebarEl
        .querySelectorAll(".sidebar-page-item-iframe.active")
        .forEach((el) => el.classList.remove("active"));
      sidebarEl
        .querySelectorAll(`.sidebar-page-item-iframe[data-id="${pageId}"]`)
        .forEach((el) => el.classList.add("active"));
    }
  );
}

function buildRelatedSitesDropdown(e) {
  if (!e || typeof relatedSites === "undefined" || 0 === relatedSites.length)
    return;
  relatedSites.sort((e, t) => e.order - t.order);
  const t = window.location.href.replace(/\/$/, ""),
    a = relatedSites
      .map((e) => {
        const a = e.url.replace(/\/$/, "");
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
  headerIframe.classList.remove("search-active");
  pageSearchInput.value = "";
  removeHighlights();
  searchResults = [];
  currentSearchIndex = -1;
  searchNavControls.style.display = "none";
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Listen for resize to update category buttons
  window.addEventListener('resize', () => {
      // Debounce slightly for performance
      if(window.categoryCheckTimeout) clearTimeout(window.categoryCheckTimeout);
      window.categoryCheckTimeout = setTimeout(checkCategoryOverflow, 150);
  });

  // Breadcrumb actions
  if (shareBtnIframe) {
    shareBtnIframe.addEventListener("click", async () => {
      const e = pageMap.get(currentPageIdIframe),
        t = {
          title: document.title,
          text: `Check out this page: ${e.name}`,
          url: window.location.href
        },
        a = shareBtnIframe.querySelector("i");
      if (navigator.share)
        try {
          await navigator.share(t),
            a &&
              ((a.className = "fas fa-check"),
              setTimeout(() => {
                a.className = "fas fa-share-alt";
              }, 2e3));
        } catch (e) {
          a &&
            ((a.className = "fas fa-times"),
            setTimeout(() => {
              a.className = "fas fa-share-alt";
            }, 2e3));
        }
      else
        navigator.clipboard
          .writeText(window.location.href)
          .then(() => {
            a &&
              ((a.className = "fas fa-check"),
              setTimeout(() => {
                a.className = "fas fa-share-alt";
              }, 2e3));
          })
          .catch((e) => {
            a &&
              ((a.className = "fas fa-times"),
              setTimeout(() => {
                a.className = "fas fa-share-alt";
              }, 2e3));
          });
    });
  }

  if (accessibilityBtnIframe) {
      accessibilityBtnIframe.addEventListener("click", toggleAccessibilityOverlay);
  }
  if (accessibilityOverlayIframe) {
      accessibilityOverlayIframe.addEventListener("click", (e) => {
          if (e.target === accessibilityOverlayIframe) hideAccessibilityOverlay();
      });
  }
  if (decreaseFontBtn) decreaseFontBtn.addEventListener("click", () => updateFontSize('decrease'));
  if (resetFontBtn) resetFontBtn.addEventListener("click", () => updateFontSize('reset'));
  if (increaseFontBtn) increaseFontBtn.addEventListener("click", () => updateFontSize('increase'));
  if (contrastToggleBtn) contrastToggleBtn.addEventListener("click", toggleContrast);
  if (saturationToggleBtn) saturationToggleBtn.addEventListener("click", toggleSaturation);

  if (readAloudBtnIframe && "speechSynthesis" in window) {
    let isReading = false;
    let chunks = []; 
    let currentChunkIndex = 0;

    const cleanupReader = () => {
        document.querySelectorAll(".reading-word").forEach(span => {
            const parent = span.parentNode;
            if(parent) {
                parent.replaceChild(document.createTextNode(span.textContent), span);
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
      const icon = readAloudBtnIframe.querySelector("i");
      if (icon) icon.className = "fas fa-volume-high";
      
      document.querySelectorAll(".reading-highlight").forEach(el => el.classList.remove("reading-highlight"));
      cleanupReader();
    };

    const playChunk = (index) => {
        if (index >= chunks.length || !isReading) {
            stopReading();
            return;
        }
        currentChunkIndex = index;
        const chunk = chunks[index];
        
        const utterance = new SpeechSynthesisUtterance(chunk.text);
        utterance.rate = 1.0;

        utterance.onboundary = (event) => {
            if (event.name !== 'word') return;
            const charIndex = event.charIndex;
            const match = chunk.mappings.find(m => charIndex >= m.start && charIndex < m.end + 1);
            if (match && match.element) {
                document.querySelectorAll(".reading-highlight").forEach(el => el.classList.remove("reading-highlight"));
                match.element.classList.add("reading-highlight");
                const rect = match.element.getBoundingClientRect();
                const viewHeight = window.innerHeight;
                if (rect.top < viewHeight * 0.3 || rect.bottom > viewHeight * 0.7) {
                    match.element.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }
        };

        utterance.onend = () => {
            if (isReading) playChunk(index + 1);
        };
        
        utterance.onerror = (e) => {
            console.error("Speech error", e);
            if (isReading) playChunk(index + 1);
        };

        speechSynthesis.speak(utterance);
    };

    const startReading = () => {
      if (isReading) {
          stopReading();
          return;
      }
      
      const contentContainer = actualPageContentIframe.querySelector(".page-content-container");
      if (!contentContainer) return;

      const blocks = contentContainer.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, blockquote");
      chunks = [];
      
      if (blocks.length === 0) return;

      blocks.forEach(block => {
         if(block.offsetParent === null) return; 
         const textContent = block.innerText.trim();
         if(!textContent) return;

         const words = textContent.split(/\s+/);
         let blockSpokenText = "";
         const blockMappings = [];
         block.innerHTML = ""; 
         
         words.forEach((word, i) => {
             const span = document.createElement("span");
             span.className = "reading-word";
             span.textContent = word;
             block.appendChild(span);
             if (i < words.length - 1) block.appendChild(document.createTextNode(" "));
             
             blockMappings.push({
                 element: span,
                 start: blockSpokenText.length,
                 end: blockSpokenText.length + word.length
             });
             blockSpokenText += word + " ";
         });
         
         chunks.push({
             text: blockSpokenText,
             mappings: blockMappings
         });
      });

      if (chunks.length === 0) return;

      isReading = true;
      const icon = readAloudBtnIframe.querySelector("i");
      if (icon) icon.className = "fas fa-stop-circle";
      
      playChunk(0);
    };

    readAloudBtnIframe.addEventListener("click", startReading);
    window.addEventListener("hashchange", stopReading);
  }

  if (pptModeBtnIframe) {
      pptModeBtnIframe.addEventListener("click", () => {
          if (typeof startPresentation === 'function') {
              startPresentation();
          } else {
              console.error("PPT mode scripts not loaded");
          }
      });
  }

  mainContentIframe.addEventListener("click", (e) => {
    const loadMoreBtn = e.target.closest("#loadMorePostsBtn");
    if (loadMoreBtn) {
      handleLoadMorePosts(loadMoreBtn);
      return;
    }
    
    const categoryBtn = e.target.closest(".category-btn");
    if (categoryBtn) {
        const category = categoryBtn.dataset.category;
        renderHomepagePosts(category);
        return;
    }

    const link = e.target.closest("a[href]");
    const image = e.target.closest("img");

    if (image && !image.closest(".post-card") && !image.closest(".arvia-player-wrapper")) {
      e.preventDefault();
      openPreview(image);
    } else if (link && getContentType(link.href)) {
      e.preventDefault();
      openPreview(link);
    }
  });

  previewCloseBtn.addEventListener("click", closePreview),
    previewOverlay.addEventListener("click", (e) => {
      e.target === previewOverlay && closePreview();
    }),
    previewGoToBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const t = previewGoToBtn.getAttribute("data-url");
      t && window.open(t, "_blank", "noopener,noreferrer");
    });

  menuButtonIframe &&
    menuButtonIframe.addEventListener("click", () => {
      mobileSidebarOverlayIframe.classList.add("show"),
        menuButtonIframe.setAttribute("aria-expanded", "true");
    }),
    mobileSidebarOverlayIframe &&
      mobileSidebarOverlayIframe.addEventListener("click", (e) => {
        e.target === mobileSidebarOverlayIframe &&
          (mobileSidebarOverlayIframe.classList.remove("show"),
          menuButtonIframe.setAttribute("aria-expanded", "false"));
      });

  prevPageBtnIframe &&
    prevPageBtnIframe.addEventListener("click", () => {
      const e = pagesDataIframe.findIndex((e) => e.id === currentPageIdIframe);
      e > 0 && (window.location.hash = pagesDataIframe[e - 1].id);
    }),
    nextPageBtnIframe &&
      nextPageBtnIframe.addEventListener("click", () => {
        const e = pagesDataIframe.findIndex(
          (e) => e.id === currentPageIdIframe
        );
        e < pagesDataIframe.length - 1 &&
          (window.location.hash = pagesDataIframe[e + 1].id);
      });

  scrollToTopBtnIframe &&
    mainContentIframe &&
    (mainContentIframe.addEventListener("scroll", () => {
      if (
        (scrollToTopBtnIframe.classList.toggle(
          "show",
          mainContentIframe.scrollTop > 0.5 * mainContentIframe.clientHeight
        ),
        progressBarIframe)
      ) {
        const e = mainContentIframe,
          t = e.scrollTop,
          a = e.scrollHeight,
          r = e.clientHeight,
          i = a > r ? (t / (a - r)) * 100 : 0;
        progressBarIframe.style.width = i + "%";
      }
    }),
    scrollToTopBtnIframe.addEventListener("click", () => {
      mainContentIframe.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }));

  const sidebarToggleBtns = document.querySelectorAll(".sidebar-toggle-btn-iframe"),
    pageListViews = document.querySelectorAll("#previewSidebarPageListIframe, #mobileSidebarPageListIframe"),
    outlineListViews = document.querySelectorAll("#previewSidebarOutlineListIframe, #mobileSidebarOutlineListIframe");
  
  sidebarToggleBtns.forEach((r) => {
    if (r.id === 'pptModeBtnIframe') return; 

    r.addEventListener("click", () => {
      sidebarView = "pages" === sidebarView ? "outline" : "pages";
      const isPages = "pages" === sidebarView;
      pageListViews.forEach((e) => e.classList.toggle("active-view", isPages)),
        outlineListViews.forEach((e) =>
          e.classList.toggle("active-view", !isPages)
        ),
        sidebarToggleBtns.forEach((e) => {
          if(e.id !== 'pptModeBtnIframe') {
              const textSpan = e.querySelector(".btn-text");
              const icon = e.querySelector(".fas");
              if(textSpan) textSpan.textContent = isPages ? "Document Outline" : "Page Navigation";
              if(icon) icon.className = isPages ? "fas fa-list-ul" : "fas fa-file-lines";
              e.setAttribute("aria-label", isPages ? "Toggle Document Outline" : "Toggle Page Navigation");
          }
        });
    });
  });

  const handleOutlineClick = (e) => {
    const t = e.target.closest(".document-outline-item-iframe");
    if (!t) return;
    e.preventDefault();
    const a = t.getAttribute("href"),
      r = mainContentIframe.querySelector(a);
    r &&
      (mainContentIframe.scrollTo({
        top: r.offsetTop - 20,
        behavior: "smooth"
      }),
      mobileSidebarOverlayIframe.classList.contains("show") &&
        (mobileSidebarOverlayIframe.classList.remove("show"),
        menuButtonIframe.setAttribute("aria-expanded", "false")));
  };
  previewSidebarOutlineList &&
    previewSidebarOutlineList.addEventListener("click", handleOutlineClick),
    mobileSidebarOutlineList &&
      mobileSidebarOutlineList.addEventListener("click", handleOutlineClick);

  [previewSidebarPageListIframe, mobileSidebarPageListIframe].forEach(
    (sidebarEl) => {
      if (!sidebarEl) return;
      sidebarEl.addEventListener("click", (event) => {
        const toggleButton = event.target.closest(
          ".sidebar-toggle-children-btn"
        );
        const backButton = event.target.closest(".sidebar-back-btn");
        const pageItem = event.target.closest(".sidebar-page-item-iframe");
        if (toggleButton) {
          const action = toggleButton.dataset.action;
          const parentId = toggleButton.dataset.parentId;
          if (action === "slide") {
            const parentNode = pageMap.get(parentId);
            const panelContainer = sidebarEl.querySelector(
              ".sidebar-panel-container"
            );
            if (!panelContainer || !parentNode) return;
            const newDepth = panelContainer.querySelectorAll(".sidebar-panel")
              .length;
            const newPanel = document.createElement("div");
            newPanel.className = "sidebar-panel";
            newPanel.dataset.depth = newDepth;
            const childrenHTML = buildSidebarItemsHTML(parentNode.children);
            newPanel.innerHTML = `<div class="sidebar-panel-header"><button class="sidebar-back-btn" aria-label="Go back"><i class="fas fa-arrow-left"></i></button><span class="sidebar-panel-title">${parentNode.name}</span></div>${childrenHTML}`;
            panelContainer.appendChild(newPanel);
            panelContainer.style.transform = `translateX(-${newDepth * 100}%)`;
          } else {
            const subList = toggleButton.parentElement.nextElementSibling;
            if (subList && subList.classList.contains("sidebar-subpage-list")) {
              const isOpen = !toggleButton.classList.contains("open");
              toggleButton.classList.toggle("open", isOpen);
              toggleButton.setAttribute("aria-expanded", isOpen);
              toggleButton.querySelector("i.fas").className = isOpen
                ? "fas fa-chevron-down"
                : "fas fa-chevron-right";
              if (subList.classList.contains("show")) {
                subList.style.maxHeight = null;
                subList.classList.remove("show");
              } else {
                subList.classList.add("show");
                subList.style.maxHeight = subList.scrollHeight + "px";
              }
            }
          }
        } else if (backButton) {
          const panelContainer = sidebarEl.querySelector(
            ".sidebar-panel-container"
          );
          if (!panelContainer) return;
          const panels = panelContainer.querySelectorAll(".sidebar-panel");
          const currentDepth = panels.length - 1;
          if (currentDepth > 0) {
            panelContainer.style.transform = `translateX(-${
              (currentDepth - 1) * 100
            }%)`;
            const panelToRemove = panels[currentDepth];
            panelToRemove.addEventListener(
              "transitionend",
              () => panelToRemove.remove(),
              {
                once: true
              }
            );
          }
        } else if (pageItem && pageItem.dataset.id) {
          window.location.hash = pageItem.dataset.id;
          if (mobileSidebarOverlayIframe.classList.contains("show")) {
            mobileSidebarOverlayIframe.classList.remove("show");
            menuButtonIframe.setAttribute("aria-expanded", "false");
          }
        }
      });
    }
  );

  document.querySelectorAll(".related-sites-toggle-iframe").forEach((e) => {
    e.addEventListener("click", () => {
      const t = e.nextElementSibling,
        a = e.querySelector(".fas"),
        r = e.classList.toggle("open");
      e.setAttribute("aria-expanded", r),
        (a.className = r ? "fas fa-chevron-down" : "fas fa-chevron-right"),
        r
          ? (t.classList.add("show"),
            (t.style.maxHeight = t.scrollHeight + "px"))
          : ((t.style.maxHeight = null), t.classList.remove("show"));
    });
  });

  searchButtonIframe.addEventListener("click", () => {
    headerIframe.classList.add("search-active"), pageSearchInput.focus();
  });
  closeSearchButtonIframe.addEventListener("click", closeSearch);
  mainContentIframe.addEventListener("click", (e) => {
    headerIframe.classList.contains("search-active") &&
      !e.target.closest(".arvia-preview-overlay") &&
      closeSearch();
  });
  pageSearchInput.addEventListener("input", (e) =>
    highlightText(e.target.value)
  );
  searchNavUp.addEventListener("click", () =>
    navigateToSearchResult(currentSearchIndex - 1)
  );
  searchNavDown.addEventListener("click", () =>
    navigateToSearchResult(currentSearchIndex + 1)
  );

  pageStatsBtnIframe &&
    pageStatsBtnIframe.addEventListener("click", togglePageStats),
    pageStatsOverlayIframe &&
      pageStatsOverlayIframe.addEventListener("click", (e) => {
        e.target === pageStatsOverlayIframe && hidePageStats();
      });

  document.addEventListener("keydown", (e) => {
    if ("Escape" === e.key) {
        if (previewOverlay.classList.contains("show")) closePreview();
        if (pageStatsOverlayIframe.classList.contains("show")) hidePageStats();
        if (accessibilityOverlayIframe && accessibilityOverlayIframe.classList.contains("show")) hideAccessibilityOverlay();
    }
  }),
    window.addEventListener("beforeunload", () => {
      "speechSynthesis" in window &&
        speechSynthesis.speaking &&
        speechSynthesis.cancel();
    }),
    window.addEventListener("hashchange", handleHashChange);
}

// --- APP INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initializePageData();
  generateSpecialPages();

  buildSidebar("previewSidebarPageListIframe");
  buildSidebar("mobileSidebarPageListIframe");

  const relatedSitesContainer = document.getElementById("relatedSitesContainerIframe");
  const mobileRelatedSitesContainer = document.getElementById("mobileRelatedSitesContainerIframe");
  buildRelatedSitesDropdown(relatedSitesContainer);
  buildRelatedSitesDropdown(mobileRelatedSitesContainer);

  setupEventListeners();

  // Init Scheduled Logs
  if (typeof customLogs !== 'undefined' && Array.isArray(customLogs)) {
      customLogs.forEach(log => {
          setTimeout(() => {
              if (window.arviaLog) window.arviaLog(log.message, log.type);
          }, log.delay || 1000);
      });
  }

  const initialHash = window.location.hash.substring(1);
  const defaultPage = pagesDataIframe.find((p) => p.isDefault) || (pagesDataIframe.length > 0 ? pagesDataIframe : null);
  const pageIdToLoad = pageMap.has(initialHash) ? initialHash : defaultPage ? defaultPage.id : null;

  if (pageIdToLoad) {
    if (window.location.hash !== "#" + pageIdToLoad) {
      window.location.hash = "#" + pageIdToLoad;
    } else {
      handleHashChange();
    }
  }
});




/* --- ppt.js --- */
/* --- ppt.js --- */
// --- PRESENTATION MODE LOGIC (Fixed Touch & Scroll) ---

let pptState = {
    isActive: false,
    isDrawing: false,
    tool: 'none', // 'pen', 'eraser'
    color: '#f97316',
    ctx: null,
    canvas: null,
    toolbarTimeout: null,
    resizeObserver: null,
    mutationObserver: null,
    lastX: 0,
    lastY: 0
};

// --- INITIALIZATION ---
function initPresentationMode() {
    // Create Toolbar if not exists
    if (!document.getElementById('pptToolbar')) {
        const toolbarWrapper = document.createElement('div');
        toolbarWrapper.className = 'ppt-toolbar-wrapper hidden';
        toolbarWrapper.id = 'pptToolbar';
        toolbarWrapper.innerHTML = `
            <div class="ppt-toolbar">
                <button class="ppt-btn" id="pptPrevPage" title="Previous Page"><i class="fas fa-chevron-left"></i></button>
                
                <div class="ppt-info-group">
                    <span id="pptPageName">Page</span>
                </div>

                <button class="ppt-btn" id="pptNextPage" title="Next Page"><i class="fas fa-chevron-right"></i></button>
                
                <div class="ppt-divider"></div>
                
                <button class="ppt-btn" id="pptPen" title="Pen Tool"><i class="fas fa-pen"></i></button>
                <button class="ppt-btn" id="pptEraser" title="Eraser Tool"><i class="fas fa-eraser"></i></button>
                <button class="ppt-btn" id="pptClear" title="Clear Ink"><i class="fas fa-trash-alt"></i></button>
                
                <div class="ppt-divider"></div>
                
                <button class="ppt-btn" id="pptExit" title="Exit Presentation (Esc)"><i class="fas fa-times"></i></button>
            </div>
        `;
        document.body.appendChild(toolbarWrapper);

        // Bind Events
        document.getElementById('pptPrevPage').onclick = () => navigatePage(-1);
        document.getElementById('pptNextPage').onclick = () => navigatePage(1);
        document.getElementById('pptExit').onclick = exitPresentation;
        
        document.getElementById('pptPen').onclick = (e) => toggleTool('pen', e.currentTarget);
        document.getElementById('pptEraser').onclick = (e) => toggltransition:all .4s cubic-bezier(.34,1.56,.64,1);filter:drop-shadow(0 2px 8px rgba(249,115,22,.3))}#aiChatBtn:hover img{transform:scale(1.15) rotate(5deg);filter:drop-shadow(0 4px 16px rgba(249,115,22,.5))}#aiChatBtn:active img{transform:scale(.9) rotate(-5deg)}#aiChatContainer{position:fixed;z-index:2001;background:#0d1117;border:1px solid #21262d;box-shadow:0 -10px 60px rgba(0,0,0,.7),0 -2px 20px rgba(249,115,22,.1),inset 0 1px 0 rgba(255,255,255,.03);display:none;flex-direction:column;opacity:0;transition:all .6s cubic-bezier(.34,1.56,.64,1);backdrop-filter:blur(20px);overflow:hidden}#aiChatContainer::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(249,115,22,.3) 30%,rgba(249,115,22,.3) 70%,transparent);pointer-events:none;z-index:2}#aiChatContainer::after{content:'';position:absolute;top:1px;left:0;right:0;height:40px;background:linear-gradient(180deg,rgba(22,27,34,.95) 0%,rgba(22,27,34,.7) 50%,transparent 100%);pointer-events:none;z-index:1}#aiChatContainer.show{display:flex;opacity:1}@media(max-width:768px){#aiChatContainer{bottom:-100%;left:0;width:100%;height:60%;border-radius:24px 24px 0 0;border-bottom:none}#aiChatContainer.show{bottom:0}}@media(min-width:769px){#aiChatContainer{bottom:-100%;right:1.5rem;width:440px;height:600px;border-radius:20px}#aiChatContainer.show{bottom:1.5rem}}#aiChatMessages{flex:1;overflow-y:auto;padding:3rem 1.5rem 1.5rem;display:flex;flex-direction:column;gap:1.2rem;background:#0d1117;position:relative;scroll-behavior:auto}#aiChatMessages::-webkit-scrollbar{width:6px}#aiChatMessages::-webkit-scrollbar-track{background:transparent}#aiChatMessages::-webkit-scrollbar-thumb{background:#30363d;border-radius:6px;transition:background .3s}#aiChatMessages::-webkit-scrollbar-thumb:hover{background:#484f58}.scroll-anchor{height:1px;width:100%;position:absolute;bottom:0}.ai-msg{padding:1rem 1.25rem;border-radius:16px;max-width:100%;word-wrap:break-word;animation:slideUp .6s cubic-bezier(.34,1.56,.64,1);line-height:1.65;font-size:.9rem;transition:all .35s cubic-bezier(.4,0,.2,1);position:relative}.user-msg{background:linear-gradient(135deg,#161b22 0%,#1c2128 100%);color:#c9d1d9;width:82%;align-self:flex-end;margin-left:auto;border:1px solid #21262d;box-shadow:0 4px 12px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.05);border-radius:18px 18px 4px 18px}.user-msg:hover{background:linear-gradient(135deg,#1c2128 0%,#21262d 100%);border-color:#30363d;transform:translateX(-3px) translateY(-1px);box-shadow:0 6px 20px rgba(0,0,0,.35)}.bot-msg{background:transparent;color:#c9d1d9;width:100%;padding-left:1.5rem;border-left:3px solid transparent;border-radius:12px;transition:all .35s;cursor:pointer}.bot-msg::before{content:'';position:absolute;left:-3px;top:0;bottom:0;width:3px;background:linear-gradient(180deg,#f97316,#ea580c);border-radius:2px;opacity:0;transition:opacity .35s}.bot-msg:hover{color:#fff;transform:translateX(4px)}.bot-msg:hover::before{opacity:1}.bot-msg h1,.bot-msg h2,.bot-msg h3,.bot-msg h4,.bot-msg h5,.bot-msg h6{color:#fb923c;margin-top:1.2rem;margin-bottom:.6rem;font-weight:600;line-height:1.3}.bot-msg h1{font-size:1.5rem;border-bottom:2px solid rgba(249,115,22,.2);padding-bottom:.4rem}.bot-msg h2{font-size:1.25rem}.bot-msg h3{font-size:1.1rem}.bot-msg h4{font-size:1rem}.bot-msg h5{font-size:0.95rem}.bot-msg h6{font-size:0.9rem}.bot-msg p{margin:.6rem 0;line-height:1.75}.bot-msg code{background:#161b22;color:#fb923c;padding:.25rem .5rem;border-radius:6px;font-size:.85rem;font-family:ui-monospace,monospace;border:1px solid #21262d;box-shadow:inset 0 1px 3px rgba(0,0,0,.2)}.bot-msg pre{background:#0d1117;border:1px solid #21262d;border-radius:12px;padding:0;margin:1rem 0;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.03);position:relative;max-height:400px}.bot-msg pre .code-header{display:flex;justify-content:space-between;align-items:center;padding:.4rem .75rem;background:#161b22;border-bottom:1px solid #21262d;min-height:32px}.bot-msg pre .code-lang{color:#8b949e;font-size:.7rem;font-family:ui-monospace,monospace;text-transform:uppercase;letter-spacing:.5px}.bot-msg pre .code-copy{background:transparent;border:1px solid #21262d;color:#8b949e;padding:.2rem .5rem;border-radius:4px;cursor:pointer;font-size:.65rem;transition:all .3s;white-space:nowrap;display:inline-flex;align-items:center;gap:.25rem;min-width:55px;justify-content:center}.bot-msg pre .code-copy:hover{background:#0d1117;color:#c9d1d9;border-color:#30363d}.bot-msg pre .code-copy i{font-size:.65rem}.bot-msg pre code{background:transparent;border:none;padding:1.25rem;display:block;color:#c9d1d9;font-size:.85rem;overflow-x:auto;max-width:100%}.bot-msg pre code::-webkit-scrollbar{height:8px}.bot-msg pre code::-webkit-scrollbar-track{background:#161b22}.bot-msg pre code::-webkit-scrollbar-thumb{background:#30363d;border-radius:4px}.bot-msg pre code::-webkit-scrollbar-thumb:hover{background:#484f58}.table-wrapper{overflow-x:auto;margin:1rem 0;border-radius:8px;border:1px solid #21262d;max-height:400px;overflow-y:auto}.table-wrapper::-webkit-scrollbar{width:8px;height:8px}.table-wrapper::-webkit-scrollbar-track{background:#161b22}.table-wrapper::-webkit-scrollbar-thumb{background:#30363d;border-radius:4px}.table-wrapper::-webkit-scrollbar-thumb:hover{background:#484f58}.bot-msg table{width:100%;border-collapse:collapse;font-size:.85rem;margin:0}.bot-msg th,.bot-msg td{border:1px solid #21262d;padding:.65rem;text-align:left;white-space:nowrap}.bot-msg th{background:linear-gradient(135deg,#161b22,#1c2128);color:#fb923c;font-weight:600;position:sticky;top:0;z-index:1}.bot-msg ul,.bot-msg ol{margin:.6rem 0;padding-left:1.75rem}.bot-msg li{margin:.4rem 0;line-height:1.7}.bot-msg blockquote{border-left:4px solid #f97316;padding:.75rem 1.25rem;margin:1rem 0;color:#8b949e;font-style:italic;background:linear-gradient(90deg,rgba(249,115,22,.08),transparent);border-radius:0 12px 12px 0;box-shadow:inset 4px 0 8px rgba(249,115,22,.1)}.bot-msg strong{color:#fb923c;font-weight:600}.bot-msg em{color:#a8b3c1;font-style:italic}.bot-msg a{color:#f97316;text-decoration:underline;transition:all .25s}.bot-msg a:hover{color:#fb923c;text-decoration:none}.bot-msg .katex{color:#c9d1d9;font-size:1rem}.bot-msg .katex-display{color:#c9d1d9;font-size:1rem;overflow-x:auto;max-width:100%;display:block;padding:1rem;background:#161b22;border-radius:8px;margin:1rem 0;border:1px solid #21262d;max-height:300px;overflow-y:auto}.bot-msg .katex-display::-webkit-scrollbar{width:8px;height:8px}.bot-msg .katex-display::-webkit-scrollbar-track{background:#0d1117}.bot-msg .katex-display::-webkit-scrollbar-thumb{background:#30363d;border-radius:4px}.bot-msg hr{border:none;border-top:1px solid rgba(249,115,22,.2);margin:1.25rem 0;box-shadow:0 1px 0 rgba(0,0,0,.3)}.bot-msg img{max-width:100%;height:auto;border-radius:12px;margin:1rem 0;box-shadow:0 4px 12px rgba(0,0,0,.3);border:1px solid #21262d;background:linear-gradient(90deg,#161b22 0%,#1c2128 50%,#161b22 100%);background-size:200% 100%;transition:opacity .3s}.bot-msg img.loading{animation:shimmer 1.5s infinite linear}.bot-msg img.loaded{animation:none}@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}.skeleton-box{background:linear-gradient(90deg,#161b22 0%,#1c2128 50%,#161b22 100%);background-size:200% 100%;animation:shimmer 1.5s infinite linear;border-radius:8px}.bot-msg-actions{display:none;gap:.5rem;margin-top:.75rem;padding-top:.75rem;border-top:1px solid #21262d;flex-wrap:wrap}.bot-msg.active .bot-msg-actions{display:flex}.bot-msg-action-btn{background:linear-gradient(135deg,#161b22,#1c2128);color:#8b949e;border:1px solid #21262d;padding:.5rem .85rem;border-radius:8px;cursor:pointer;font-size:.8rem;transition:all .3s;display:flex;align-items:center;gap:.4rem;white-space:nowrap}.bot-msg-action-btn:hover{background:linear-gradient(135deg,#1c2128,#21262d);color:#c9d1d9;border-color:#30363d;transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.3)}.bot-msg-action-btn:active{transform:translateY(0)}.bot-msg-action-btn i{font-size:.9rem}.sources-dropdown{display:none;margin-top:.75rem;padding:1rem;background:#161b22;border:1px solid #21262d;border-radius:12px;max-height:250px;overflow-y:auto;animation:slideDown .3s cubic-bezier(.34,1.56,.64,1)}.sources-dropdown.show{display:block}.sources-dropdown::-webkit-scrollbar{width:6px}.sources-dropdown::-webkit-scrollbar-track{background:#0d1117}.sources-dropdown::-webkit-scrollbar-thumb{background:#30363d;border-radius:4px}.sources-dropdown::-webkit-scrollbar-thumb:hover{background:#484f58}.sources-dropdown-title{color:#fb923c;font-size:.9rem;font-weight:600;margin-bottom:.75rem;display:flex;align-items:center;gap:.5rem}.sources-dropdown-title i{font-size:.85rem}.source-item{padding:.65rem .85rem;margin:.4rem 0;background:#0d1117;border-left:3px solid #f97316;border-radius:6px;font-size:.8rem;line-height:1.5;color:#c9d1d9;transition:all .3s}.source-item:hover{background:#161b22;border-left-width:4px;transform:translateX(2px)}.source-item .source-text{color:#8b949e}@keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@media(max-width:768px){.bot-msg-action-btn{padding:.5rem;min-width:38px;justify-content:center}.bot-msg-action-btn .btn-text{display:none}}@keyframes slideUp{from{opacity:0;transform:translateY(25px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}#aiChatInputArea{display:flex;align-items:center;padding:1.25rem;background:linear-gradient(135deg,#161b22,#1c2128);border-top:1px solid #21262d;box-shadow:0 -6px 20px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.03);border-radius:20px;margin:1rem;gap:.5rem;transition:all .35s cubic-bezier(.4,0,.2,1)}#aiChatInputArea:focus-within{box-shadow:0 -8px 30px rgba(249,115,22,.15),0 0 0 2px rgba(249,115,22,.2),inset 0 1px 0 rgba(255,255,255,.05);transform:translateY(-2px)}#aiChatInput{flex:1;background:transparent;border:none;color:#c9d1d9;padding:.95rem 1.25rem;font-size:.95rem;font-family:inherit;outline:none;transition:all .3s}#aiChatInput::placeholder{color:#6e7681;transition:color .3s}#aiChatInput:focus::placeholder{color:#8b949e}#aiChatSend{background:linear-gradient(135deg,#484f58,#30363d);color:#6e7681;border:none;padding:0;width:40px;height:40px;border-radius:50%;cursor:pointer;transition:all .35s cubic-bezier(.34,1.56,.64,1);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,.2);position:relative}#aiChatSend.active{background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;box-shadow:0 4px 16px rgba(249,115,22,.4);cursor:pointer}#aiChatSend.active:hover{transform:translateY(-3px) scale(1.05);box-shadow:0 8px 24px rgba(249,115,22,.5)}#aiChatSend.active:active{transform:translateY(-1px) scale(1);box-shadow:0 4px 12px rgba(249,115,22,.3)}#aiChatSend:disabled{opacity:.4;cursor:not-allowed;transform:none;background:linear-gradient(135deg,#30363d,#21262d)}#aiChatSend i{transition:transform .35s cubic-bezier(.34,1.56,.64,1)}#aiChatSend.active i{transform:translateY(-1px)}.thinking-indicator{display:flex;align-items:center;gap:1rem;padding:1rem 1.25rem;animation:slideUp .6s cubic-bezier(.34,1.56,.64,1);background:transparent;border-radius:16px}.thinking-logo-wrapper{position:relative;width:45px;height:45px;flex-shrink:0}.thinking-logo{width:100%;height:100%;object-fit:contain;animation:rotateAndPulse 2s linear infinite;filter:drop-shadow(0 0 8px rgba(249,115,22,.5))}.thinking-glow{position:absolute;top:50%;left:50%;width:100%;height:100%;border-radius:50%;background:radial-gradient(circle,rgba(249,115,22,.3),transparent);transform:translate(-50%,-50%);animation:pulseGlow 2s ease-in-out infinite;pointer-events:none}@keyframes rotateAndPulse{0%{transform:rotate(0deg) scale(1)}25%{transform:rotate(90deg) scale(1.1)}50%{transform:rotate(180deg) scale(1)}75%{transform:rotate(270deg) scale(1.1)}100%{transform:rotate(360deg) scale(1)}}@keyframes pulseGlow{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.3}50%{transform:translate(-50%,-50%) scale(1.8);opacity:0}}.thinking-text{color:#8b949e;font-size:.9rem;animation:fadeInOut 1.5s ease-in-out infinite}.thinking-status{color:#fb923c;font-weight:500}@keyframes fadeInOut{0%,100%{opacity:.6}50%{opacity:1}}.initial-screen{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;text-align:center;padding:2rem;opacity:.8}.initial-screen-title{font-size:1rem;font-weight:700;color:#fb923c;margin-bottom:.5rem;background:linear-gradient(135deg,#f97316,#fb923c);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.initial-screen-subtitle{font-size:.95rem;color:#8b949e;line-height:1.6;max-width:320px}.resize-handle{position:absolute;top:0;left:0;right:0;height:8px;cursor:ns-resize;z-index:10;background:transparent;transition:background .3s}.resize-handle:hover{background:linear-gradient(180deg,rgba(249,115,22,.2),transparent)}`,
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
    `<div class="resize-handle"></div><div id="aiChatMessages"><div class="initial-screen"><div class="initial-screen-title">Ask ARai anything</div><div class="initial-screen-subtitle">Get contextual help about this page or ask general questions.</div></div><div class="scroll-anchor"></div></div><div id="aiChatInputArea"><input type="text" id="aiChatInput" placeholder="Ask me anything..." maxlength="500" readonly autocomplete="off"><button id="aiChatSend" aria-label="Send message" disabled><i class="fas fa-arrow-up"></i></button></div>`,
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
    h = null,
    u = null,
    _ = !0,
    $ = null;
  ! function() {
    try {
      let
        e = n.querySelector(
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
              .preventDefault(),
              document.body.style
              .userSelect = "none"
          }), e
        .addEventListener("touchstart",
          e => {
            t = !0, r = e.touches[
                0].clientY, a = n
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
              s = Math.min(Math.max(a +
                  i, 300), window
                .innerHeight - 100);
            n.style.height = s + "px"
          }
        ), document.addEventListener(
          "touchmove", e => {
            if (!t)
              return;
            let i = r - e
              .touches[0].clientY,
              s = Math.min(Math.max(a +
                  i, 300), window
                .innerHeight - 100);
            n.style.height = s +
              "px"
          }, { passive: !1 }),
        document.addEventListener(
          "mouseup", () => {
            t && (t = !
              1, document.body.style
              .userSelect = "")
          }),
        document.addEventListener(
          "touchend", () => {
            t && (
              t = !1)
          })
    } catch (
      f) {
      console.error(
        "[ARai] Resize initialization error:",
        f)
    }
  }(),
  function() {
    try {
      let e = i
        .querySelector(
          ".scroll-anchor");
      if (!e || !(
          "IntersectionObserver" in
          window)) return;
      u = new IntersectionObserver(
        e => {
          _ = e[0]
            .isIntersecting
        }, {
          root: i,
          threshold: 0
        });
      u.observe(e)
    } catch (x) {
      console
        .error(
          "[ARai] Scroll observer error:",
          x)
    }
  }();
  
  function f(e, t) {
    if (!e || !t ||
      "string" != typeof e ||
      "string" != typeof t) return !
      1;
    try {
      return e.toLowerCase()
        .includes(t
          .toLowerCase())
    } catch (
      r) { return !1 }
  }
  
  function x(e, t) {
    if (!e ||
      "string" != typeof e)
      return "";
    if (!t || "number" !=
      typeof t || t < 0)
      return e;
    try {
      return e.length > t ?
        e.substring(0, t) : e
    } catch (
      r) { return e }
  }
  
  function y(e) {
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
  
  function w(e) {
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
  
  function v(e) {
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
  
  function k(e, t) {
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
            e => e && f(e, i)).length,
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
        c[d] = b * m ||
          0
      }
      return c
    } catch (
      h) { return {} }
  }
  
  function A(e, t) {
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
  
  function B(e) {
    if (!e || "string" !=
      typeof e || 0 === e.trim().length)
      return null;
    try {
      return e.split(
          "").map(e => e.charCodeAt(0))
        .map(e =>
          `${e<16?"0":""}${e.toString(16)}`
        ).join("")
    } catch (
      t) { return null }
  }
  
  function C(e) {
    if (!e || "string" !=
      typeof e || 0 === e.trim().length)
      return null;
    try {
      let t = e
        .match(/.{1,2}/g);
      return t ? t
        .map(e => String.fromCharCode(
          parseInt(e, 16))).join("") :
        ""
    } catch (r) { return null }
  }
  
  function E(e) {
    if (_ && e) {
      let t =
        null;
      $ && cancelAnimationFrame($), $ =
        requestAnimationFrame(
          () => {
            try {
              i
                .scrollTo({
                  top: i
                    .scrollHeight,
                  behavior: "smooth"
                })
            } catch (
              r) {}
          })
    }
  }
  
  function L(e, t) {
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
              `<span class="code-lang">${a}</span><button class="code-copy" data-code="${B(i)||""}"><i class="fas fa-copy"></i> Copy</button>`,
              t.insertBefore(n,
                e);
            let s = n
              .querySelector(
                ".code-copy");
            s && s.addEventListener(
              "click",
              function() {
                console
                  .log(
                    "[ARai] Copy button clicked"
                  );
                let e = this
                  .dataset
                  .code;
                if (!e ||
                  "" === e
                ) {
                  console.error(
                    "[ARai] No code data found"
                  );
                  return
                }
                let
                  t = C(e);
                if (!
                  t) {
                  console
                    .error(
                      "[ARai] Failed to decode code"
                    );
                  return
                }
                console
                  .log(
                    "[ARai] Attempting to copy code, length:",
                    t.length);
                if (
                  navigator
                  .clipboard &&
                  navigator
                  .clipboard
                  .writeText)
                  try {
                    navigator
                      .clipboard
                      .writeText(t)
                      .then(
                        () => {
                          console
                            .log(
                              "[ARai] Code copied successfully via Clipboard API"
                            ),
                            this
                            .innerHTML =
                            '<i class="fas fa-check"></i> Done',
                            setTimeout(
                              () => {
                                this
                                  .innerHTML =
                                  '<i class="fas fa-copy"></i> Copy'
                              },
                              2e3
                            )
                        })
                      .catch(
                        e => {
                          console
                            .error(
                              "[ARai] Clipboard API failed:",
                              e), S(
                              t,
                              this
                            )
                        }
                      )
                  } catch (
                    r) {
                    console
                      .error(
                        "[ARai] Clipboard API exception:",
                        r), S(t,
                        this)
                  } else
                    console.log(
                      "[ARai] Clipboard API not available, using fallback"
                    ), S(t,
                      this)
              })
          }), o
          .querySelectorAll("img")
          .forEach(e => {
            if (!e || !e
              .src) return;
            e.classList.add(
              "loading");
            let t =
              new Image;
            t.onload = () => {
                e
                  .classList.remove(
                    "loading"), e
                  .classList.add(
                    "loaded")
              }, t
              .onerror = () => {
                e
                  .classList.remove(
                    "loading")
              }, t
              .src = e.src
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
          "[ARai] Render error:", n),
        e || ""
    }
  }
  
  function S(e, t) {
    if (!e ||
      "string" != typeof e)
      return void console.error(
        "[ARai] Invalid text for fallback copy"
      );
    console.log(
      "[ARai] Using fallback copy method"
    );
    try {
      let r = document
        .createElement("textarea");
      r.value = e, r.style.position =
        "fixed", r.style.top = "0", r
        .style.left = "0", r.style
        .width = "2em", r.style.height =
        "2em", r.style.padding = "0", r
        .style.border = "none", r.style
        .outline = "none", r.style
        .boxShadow = "none", r.style
        .background = "transparent",
        document.body.appendChild(r), r
        .focus(), r.select();
      try {
        let
          a = document.execCommand(
            "copy");
        console.log(a ?
          "[ARai] Fallback copy successful" :
          "[ARai] Fallback copy failed"
        ), a && t && (t.innerHTML =
          '<i class="fas fa-check"></i> Done',
          setTimeout(() => {
              t
                .innerHTML =
                '<i class="fas fa-copy"></i> Copy'
            },
            2e3))
      } catch (o) {
        console
          .error(
            "[ARai] execCommand failed:",
            o)
      }
      document.body
        .removeChild(r)
    } catch (
      n) {
      console.error(
        "[ARai] Fallback copy error:",
        n)
    }
  }
  
  function M(e, t, r) {
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
          () => {}).catch(() => {}) : T(
          o)
    } catch (n) {
      console.error(
        "[ARai] Copy conversation error:",
        n)
    }
  }
  
  function T(e) {
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
  
  function I(e, t) {
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
  
  function R(e, t) {
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
  let O = 0;
  
  function j(e, t, r, a, o = !1) {
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
        l = "msg_" + O++;
      if (s
        .className = `ai-msg ${e}-msg`,
        s.dataset.messageId = l,
        "bot" === e) {
        if (o) return s
          .innerHTML = "", s.dataset
          .sources = JSON.stringify(
            r || []), s.dataset
          .query = a || "", i
          .insertBefore(s, i
            .querySelector(
              ".scroll-anchor")), E(!
            0), s;
        let c = L(t, l);
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
              .stopPropagation(), M(a,
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
              .stopPropagation(), I(c,
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
              .stopPropagation(), R(h,
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
      return i.insertBefore(s, i
          .querySelector(
            ".scroll-anchor")), d
        .push({
          role: "user" === e ?
            "user" : "assistant",
          content: x(t || "", 5e3)
        }), d
        .length > 40 && (d = d.slice(-
          40)), E(!0), s
    } catch (
      u) {
      return console.error(
        "[ARai] Message creation error:",
        u), document.createElement(
        "div")
    }
  }
  async function D(e,
    t, r, a) {
    if (!e || !t)
      return;
    try {
      let o = t.dataset
        .messageId,
        n = e || "",
        s = L(n, o);
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
            .stopPropagation(), M(a,
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
            .stopPropagation(), I(s,
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
            .stopPropagation(), R(m,
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
          content: x(e || "",
            5e3)
        })
    } catch (
      g) {
      console.error(
        "[ARai] Finalize message error:",
        g)
    }
  }
  
  function N(e, t) {
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
        i.insertBefore(r, i
          .querySelector(
            ".scroll-anchor")), E(!0),
        r
    } catch (a) {
      return document
        .createElement(
          "div")
    }
  }
  async function P(e,
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
  
  function q(e) {
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
  
  function F(e, t) {
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
          e => y(e)).filter(e => e),
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
          e => y(e && e.toLowerCase()
            .replace(/[^\w\s]/g, " ")))
        .join(" ").split(/\s+/).filter(
          e => e),
        d = w(s),
        p = v(s),
        m = k(c, l.map(e => y(e && e
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
            n = y(o.replace(
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
            f(
              o, e.toLowerCase()
            ) && (i += 200)
          });
          let
            l = e.toLowerCase()
            .replace(/[^\w\s]/g, " ")
            .split(/\s+/).filter(e =>
              e);
          d.forEach(e => {
              e && f(o,
                e) && (i += 80)
            }), p
            .forEach(e => {
              e && f(o,
                e) && (i +=
                120)
            });
          let c = A(s, n
            .split(/\s+/).filter(
              e => e));
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
        _ = [],
        x = new Set;
      for (let $ = 0; $ <
        Math.min(20, b.length); $++
      ) {
        let B = b[$];
        if (!B || !B
          .text) continue;
        if (u + B
          .text.length > 3500) break;
        h += B.text + ". ", _.push(B
            .text.substring(0, 150)),
          u += B.text.length, x.add(B
            .index)
      }
      if (!h || h
        .length < 100) {
        let C = l
          .slice(0, Math.min(10, l
            .length)).join(". ") + " ";
        _ = l.slice(0, Math.min(10, l
          .length)).map(e => (e || "")
          .substring(0, 150)).filter(
          e => e), h = C.substring(0,
          3500)
      }
      return {
        context: h ||
          "",
        sources: _ || []
      }
    } catch (E) {
      return console
        .error(
          "[ARai] Source extraction error:",
          E), {
          context: "",
          sources: []
        }
    }
  }
  
  function H(e, t, r) {
    if (!e ||
      "string" != typeof e || !t || !
      Array.isArray(t))
      return "";
    try {
      let a = t.filter(e =>
          e && "string" == typeof e && e
          .trim().length > 30).sort((e,
          t) => t.length - e.length)
        .slice(0, 5);
      if (0 === a
        .length)
        return `I'll answer based on general knowledge:\n\n${e}`;
      let
        o = a.map(e => {
          let t = e
            .split(/[.!?]/)[0] ||
            e;
          return t.length > 120 ?
            t.substring(0, 120) +
            "..." : t
        }),
        n = o.join(
          " ");
      return `## Answer Based on Page Content\n\n${e}\n\n### Context from Page:\n${n}\n\n${r&&r.length>0?`### Referenced Sources:\n${r.slice(0,3).map((e,t)=>`${t+1}. ${e.substring(0,100)}...`).join("\n")}`:""}

*Note: This answer is generated from the page content using advanced NLP processing.*`
    } catch (
      i) { return e }
  }
  
  function U() {
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
        .blur()
      )
  }
  async function W() {
    let e = s
      .value.trim();
    if (!e || p)
      return;
    if (e.length > 5e3)
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
      if ("export" === t
        .type) {
        console.log(
          "[ARai] Command: Export chat"
        );
        ! function e() {
          try {
            let
              t =
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
                "[ARai] Export error:",
                l)
          }
        }(), s.value =
          "";
        return
      }
      if ("clear" === t
        .type) {
        console.log(
            "[ARai] Command: Clear chat"
          ), i.innerHTML =
          '<div class="initial-screen"><div class="initial-screen-title">Ask ARai anything</div><div class="initial-screen-subtitle">Get contextual help about this page or ask general questions.</div></div><div class="scroll-anchor"></div>',
          d = [], g.clear(), b = null,
          h = null, s.value = "",
          function() {
            try {
              let e = i
                .querySelector(
                  ".scroll-anchor"
                );
              if (!e || !(
                  "IntersectionObserver" in
                  window)) return;
              u && u.disconnect(), u =
                new IntersectionObserver(
                  e => {
                    _ = e[0]
                      .isIntersecting
                  }, {
                    root: i,
                    threshold: 0
                  }), u
                .observe(e)
            } catch (
              z) {}
          }();
        return
      }
      if (
        "regenerate" === t.type &&
        h && b) {
        console.log(
            "[ARai] Command: Regenerate"
          ), s.value = h,
          W();
        return
      }
      if ("simplify" === t
        .type && b) {
        console.log(
            "[ARai] Command: Simplify"
          ), s.value =
          "Explain this in simpler terms: " +
          b, W();
        return
      }
      if (
        "shorter" === t.type && b
      ) {
        console.log(
            "[ARai] Command: Shorter"
          ), s.value =
          "Make this shorter and more concise: " +
          b, W();
        return
      }
      if (
        "longer" === t.type && b
      ) {
        console.log(
            "[ARai] Command: Longer"),
          s.value =
          "Expand on this with more details: " +
          b, W();
        return
      }
      if (
        "continue" === t.type && b
      ) {
        console.log(
            "[ARai] Command: Continue"
          ), s.value =
          "Continue from: " + b.slice(
            -200), W();
        return
      }
    }
    p
      = !0, l.disabled = !0, l
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
    j("user", e, [], "", !1), s
      .value = "";
    let o = N(
        "Initializing", ""),
      n = !1,
      m = null,
      u = null;
    try {
      let y = F(e, a),
        w = y.context || "",
        v = y.sources || [];
      P(o, v.length);
      let k =
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
                n = x(a.content, 200);
              t +=
                `${o}: ${n}\n\n`
            }
            return x(
              t, 4e3)
          } catch (
            i) { return "" }
        }(),
        A =
        `You are ARai by arlabs07. Follow ALL instructions EXACTLY.\n\nRULES:\n1. Code: Output ACTUAL CODE in code blocks, NOT explanations\n2. Math: Use LaTeX with $ or $$ delimiters. Example: $$\\pi = 3.14159265358979323846$$\n3. Tables: Use markdown table format with | separators\n4. Images: Use ![desc](https://image.pollinations.ai/prompt/desc)\n5. NEVER add citation numbers in responses\n6. Summarize: Comprehensive overview with key points\n7. Be PRECISE and DIRECT`,
        B = "";
      v && v.length > 0 ? B =
        "\n\nContext:\n": v.forEach((
          e, t) => {
          e && (B +=
            `${t+1}. ${e.substring(0,200)}\n`
          )
        }) ; B =
        "\n\n(General knowledge mode - no specific page context available)";
      let
        C = {
          model: "openai",
          messages: [{
              role: "system",
              content: A
            }, k &&
            "" !== k.trim() ?
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
              content: w && w
                .length > 50 ?
                `${e}${B}\n\nPage: ${w}` :
                `${e}${B}`
            }
          ].filter(e => null !== e),
          temperature: 1, 
          stream: !0
        },
        E = new AbortController,
        L = E.signal,
        S = null;
      try {
        let M =
          new Promise(async (t,
            r) => {
            try {
              let a =
                await fetch(
                  "https://text.pollinations.ai/openai", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON
                      .stringify(
                        C),
                    signal: L
                  }
                );
              if (!a || !a
                .ok) {
                n = !0, m =
                  v, u = w, r(
                    Error(
                      `API Error: ${a?a.status:"Network error"}`
                    )
                  );
                return
              }
              t(
                a)
            } catch (o) {
              n
                = !0, m = v, u =
                w, r(o)
            }
          }),
          T = new Promise((e,
            t) => {
            S = setTimeout(
              () => {
                n = !0, m = v,
                  u = w, E
                  .abort(), t(
                    Error(
                      "Request timeout - switching to NPU"
                    ))
              }, 3e4)
          });
        let
          I = await Promise.race([M,
            T
          ]);
        if (S &&
          clearTimeout(S), n
        ) {
          console.log(
            "[ARai] NPU Fallback: 30s timeout reached"
          );
          throw Error(
            "Timeout")
        }
        o.remove();
        let
          R = j("bot", "", v, r, !
            0);
        if (!R) {
          n = !0, m = v,
            u = w;
          throw Error(
            "Failed to create message element"
          )
        }
        let O = I.body
          .getReader(),
          N = new TextDecoder,
          W = "",
          z = !
          1;
        for (;;) {
          let {
            done: G,
            value: V
          } = await O
            .read();
          if (G) break;
          if (!
            V) continue;
          z = !0;
          let X = N.decode(
            V, { stream: !0 });
          if (!X)
            continue;
          let Y = X.split(
            "\n").filter(e => e && e
            .trim());
          for (let J of Y)
            if (J && J.startsWith(
                "data: ")) {
              let K = J
                .slice(6).trim();
              if (
                "[DONE]" === K)
                continue;
              try {
                let
                  Q = q(K) || JSON
                  .parse(K),
                  Z = Q?.choices?.[0]
                  ?.delta?.content ||
                  "";
                Z && (W += Z, R
                  .innerHTML = L(W,
                    R.dataset
                    .messageId), E(!
                    1))
              } catch (
                ee) {}
            }
        }
        if (!z || !
          W || W.length < 10) {
          n = !
            0, m = v, u =
            w;
          throw Error(
            "No valid response received"
          )
        }
        "undefined" !=
        typeof hljs && R && R
          .querySelectorAll && R
          .querySelectorAll(
            "pre code").forEach(
            e => {
              if (!e)
                return;
              try {
                e.classList
                  .contains("hljs") ||
                  hljs
                  .highlightElement(
                    e)
              } catch (t) {}
            }),
          await D(W, R, v,
            r)
      } catch (
        te) {
        throw n = !0, m = v, u =
          w, S && clearTimeout(S),
          te
      }
    } catch (re) {
      if (o &&
        o.remove && o.remove(), n &&
        m && m.length > 0) {
        console
          .log(
            "[ARai] NPU Fallback: Activated with sources"
          );
        let ae =
          `Based on the content I found on this page, here's what I can tell you:\n\n`,
          oe = H(ae, m, m);
        j("bot", oe, m, "", !
          1)
      } else if (n && (!m ||
          0 === m.length)) {
        console
          .log(
            "[ARai] NPU Fallback: No sources, general answer"
          );
        let ne =
          `I'll answer your question based on general knowledge:\n\n${e}\n\n*Note: I couldn't extract specific information from the current page, so this is a general response. For page-specific answers, please ensure you're on a content-rich page.*`;
        j("bot", ne, [], "", !
          1)
      } else console.error(
        "[ARai] Critical error:", re
      ), j("bot",
        "I apologize, but I encountered an error processing your request. Please try again.",
        [], "", !1)
    } finally {
      p = !
        1, l.disabled = !0, window
        .innerWidth >= 769 && s
        .focus()
    }
  }
  t
    .addEventListener("click", U), s
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
          p || W()
      }), s
    .addEventListener("keydown",
      e => {
        "Enter" === e.key && !e
          .shiftKey && (e
            .preventDefault(), l
            .disabled || p || W())
      }), n
    .addEventListener("click", e => {
      e
        &&
        e.target === n && U()
    }),
    document.addEventListener("keydown",
      e => {
        "Escape" === e.key && c &&
          U()
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

/* --- editor.js --- */
/* --- editor.js --- */

// --- STATE MANAGEMENT ---
let editorState = {
    tempSiteConfig: {},
    tempRelatedSites: [],
    tempAdsConfig: {},
    tempCustomLogs: [],
    tempPages: [],
    activeCodeMirror: null // Track active CM instance
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash === '#editor') {
        initEditor();
    }
    window.addEventListener('hashchange', () => {
        if (window.location.hash === '#editor') {
            initEditor();
        }
    });
});

function initEditor() {
    const root = document.getElementById('editor-root');
    if (!root) return;

    // Deep copy current globals
    editorState.tempSiteConfig = JSON.parse(JSON.stringify(siteConfig));
    editorState.tempRelatedSites = JSON.parse(JSON.stringify(relatedSites));
    editorState.tempAdsConfig = JSON.parse(JSON.stringify(adsConfig));
    editorState.tempCustomLogs = JSON.parse(JSON.stringify(customLogs));
    editorState.tempPages = JSON.parse(JSON.stringify(pagesDataIframe));

    renderEditorUI(root);
}

// --- RENDERING UI ---
function renderEditorUI(container) {
    container.innerHTML = `
        <div class="editor-container">
            <div class="editor-header" style="margin-bottom: 2rem;">
                <h1>Configuration Editor</h1>
                <p style="color: var(--text-secondary);">Customize your site settings. Changes are saved locally.</p>
            </div>

            <div class="editor-tabs">
                <button class="editor-tab-btn active" onclick="switchTab('general')">General</button>
                <button class="editor-tab-btn" onclick="switchTab('pages')">Pages</button>
                <button class="editor-tab-btn" onclick="switchTab('ads')">Ads</button>
                <button class="editor-tab-btn" onclick="switchTab('logs')">Logs & Related</button>
                <button class="editor-tab-btn" onclick="switchTab('danger')">Reset</button>
            </div>

            <!-- GENERAL TAB -->
            <div id="tab-general" class="editor-section active">
                <div class="editor-form-group">
                    <label class="editor-label">Website Name</label>
                    <input type="text" class="editor-input" id="conf-websiteName" value="${editorState.tempSiteConfig.websiteName || ''}">
                </div>
                <div class="editor-form-group">
                    <label class="editor-label">Logo URL</label>
                    <input type="text" class="editor-input" id="conf-logoUrl" value="${editorState.tempSiteConfig.logoUrl || ''}">
                </div>
                <div class="editor-form-group">
                    <label class="editor-label">Favicon URL</label>
                    <input type="text" class="editor-input" id="conf-faviconUrl" value="${editorState.tempSiteConfig.faviconUrl || ''}">
                </div>
                <div class="editor-form-group">
                    <label class="editor-label">Hosting URL</label>
                    <input type="text" class="editor-input" id="conf-hostingUrl" value="${editorState.tempSiteConfig.hostingUrl || ''}">
                </div>
                <div class="editor-form-group">
                    <label class="editor-label">Theme Color (Hex)</label>
                    <input type="color" class="editor-input" style="height: 40px;" id="conf-themeColor" value="${editorState.tempSiteConfig.themeColor || '#f97316'}">
                </div>
                
                <h3 style="margin-top: 2rem; border-bottom: 1px solid var(--border-secondary); padding-bottom: 0.5rem;">Metadata & SEO</h3>
                <div class="editor-form-group">
                    <label class="editor-label">Meta Description</label>
                    <textarea class="editor-textarea" style="min-height: 80px;" id="conf-metaDescription">${editorState.tempSiteConfig.metaDescription || ''}</textarea>
                </div>
                <div class="editor-form-group">
                    <label class="editor-label">Meta Keywords</label>
                    <input type="text" class="editor-input" id="conf-metaKeywords" value="${editorState.tempSiteConfig.metaKeywords || ''}">
                </div>
                <div class="editor-form-group">
                    <label class="editor-label">Author Name</label>
                    <input type="text" class="editor-input" id="conf-metaAuthor" value="${editorState.tempSiteConfig.metaAuthor || ''}">
                </div>
            </div>

            <!-- PAGES TAB -->
            <div id="tab-pages" class="editor-section">
                 <!-- New Page Creator -->
                <button class="editor-btn btn-secondary" style="width:100%; margin-bottom:1rem; justify-content:center;" onclick="toggleCreator('page')"><i class="fas fa-plus"></i> Create New Page</button>
                <div id="creator-page" class="editor-creator-box">
                    <div class="editor-creator-header">New Page Details</div>
                    <div class="editor-creator-body" id="creator-page-body">
                        ${renderPageForm('new', {})}
                    </div>
                </div>

                <div class="editor-list-container" id="pages-list-container">
                    ${renderPagesList()}
                </div>
            </div>

            <!-- ADS TAB -->
            <div id="tab-ads" class="editor-section">
                 <div class="editor-form-group">
                    <label class="editor-label">Enable Ads</label>
                    <select class="editor-select" id="conf-adsEnabled">
                        <option value="true" ${editorState.tempAdsConfig.enabled ? 'selected' : ''}>Yes</option>
                        <option value="false" ${!editorState.tempAdsConfig.enabled ? 'selected' : ''}>No</option>
                    </select>
                </div>
                <div class="editor-form-group">
                    <label class="editor-label">Ad Density (Every N paragraphs)</label>
                    <input type="number" class="editor-input" id="conf-adsDensity" value="${editorState.tempAdsConfig.density || 3}">
                </div>
                
                <hr style="border:0; border-top:1px solid var(--border-secondary); margin: 2rem 0;">
                
                <!-- New Ad Creator -->
                <button class="editor-btn btn-secondary" style="width:100%; margin-bottom:1rem; justify-content:center;" onclick="toggleCreator('ad')"><i class="fas fa-plus"></i> Create New Ad Unit</button>
                <div id="creator-ad" class="editor-creator-box">
                    <div class="editor-creator-header">New Ad Details</div>
                    <div class="editor-creator-body" id="creator-ad-body">
                         ${renderAdForm('new', { type: 'image' })}
                    </div>
                </div>

                <div class="editor-list-container" id="ads-list-container">
                    ${renderAdsList()}
                </div>
            </div>

            <!-- LOGS & RELATED TAB -->
            <div id="tab-logs" class="editor-section">
                <h3>Related Sites</h3>
                <!-- New Related Creator -->
                 <button class="editor-btn btn-secondary" style="width:100%; margin-bottom:1rem; justify-content:center;" onclick="toggleCreator('rel')"><i class="fas fa-plus"></i> Add Related Site</button>
                <div id="creator-rel" class="editor-creator-box">
                    <div class="editor-creator-header">New Site Link</div>
                    <div class="editor-creator-body" id="creator-rel-body">
                         ${renderRelatedForm('new', {})}
                    </div>
                </div>
                <div class="editor-list-container" id="related-list-container" style="margin-bottom:2rem;">
                     ${renderRelatedList()}
                </div>
                
                <h3>Console Logs / Toasts</h3>
                <!-- New Log Creator -->
                 <button class="editor-btn btn-secondary" style="width:100%; margin-bottom:1rem; justify-content:center;" onclick="toggleCreator('log')"><i class="fas fa-plus"></i> Add Log Message</button>
                <div id="creator-log" class="editor-creator-box">
                    <div class="editor-creator-header">New Log Message</div>
                    <div class="editor-creator-body" id="creator-log-body">
                         ${renderLogForm('new', { type: 'info' })}
                    </div>
                </div>
                <div class="editor-list-container" id="logs-list-container">
                     ${renderLogsList()}
                </div>
            </div>
            
            <!-- DANGER TAB -->
            <div id="tab-danger" class="editor-section">
                <div style="padding: 2rem; border: 1px solid #ef4444; border-radius: 8px; background: rgba(239,68,68,0.05);">
                    <h3 style="color: #ef4444; margin-top:0;">Reset Configuration</h3>
                    <p>This will clear all local changes and revert to the hardcoded config.js settings. This cannot be undone.</p>
                    <button class="editor-btn btn-danger" onclick="resetConfig()">Factory Reset</button>
                </div>
            </div>

            <!-- EXPORT AREA (Toggleable) -->
            <div id="export-container" class="code-export-container">
                 <div style="display:flex; justify-content:space-between; margin-bottom:1rem;">
                    <strong>config.js Output</strong>
                    <button class="editor-btn btn-primary editor-btn-sm" onclick="copyExportText()">Copy</button>
                 </div>
                 <textarea class="code-export-box" id="export-area"></textarea>
            </div>

            <!-- BOTTOM ACTIONS -->
            <div class="editor-actions-bar">
                <button class="editor-btn btn-secondary" onclick="toggleExport()"><i class="fas fa-code"></i> View Code</button>
                <button class="editor-btn btn-primary" onclick="applyConfig()"><i class="fas fa-save"></i> Apply Locally</button>
            </div>
        </div>
    `;
}

// --- HELPER: Init CodeMirror ---
function initCodeEditor(textareaId) {
    const ta = document.getElementById(textareaId);
    if (!ta) return;
    
    // If CM already exists on this element, return
    if (ta.nextSibling && ta.nextSibling.classList && ta.nextSibling.classList.contains('CodeMirror')) {
        return;
    }

    if (typeof CodeMirror !== 'undefined') {
        const cm = CodeMirror.fromTextArea(ta, {
            mode: "htmlmixed",
            theme: "dracula",
            lineNumbers: true,
            lineWrapping: true,
            viewportMargin: Infinity
        });
        
        // When content changes, update original textarea
        cm.on('change', (instance) => {
            ta.value = instance.getValue();
        });
        
        // Track active instance for refresh if needed
        editorState.activeCodeMirror = cm;
        
        // Initial refresh to fix rendering issues inside hidden tabs
        setTimeout(() => cm.refresh(), 100);
    }
}

// --- ACCORDION LOGIC ---
window.toggleAccordion = function(id) {
    // Close others
    document.querySelectorAll('.editor-accordion-body.show').forEach(el => {
        if(el.id !== id) {
            el.classList.remove('show');
            el.previousElementSibling.classList.remove('active');
            const icon = el.previousElementSibling.querySelector('.fas');
            if(icon) icon.className = 'fas fa-chevron-right';
        }
    });

    const targetBody = document.getElementById(id);
    const header = targetBody.previousElementSibling;
    const icon = header.querySelector('.fas');

    if (targetBody.classList.contains('show')) {
        targetBody.classList.remove('show');
        header.classList.remove('active');
        icon.className = 'fas fa-chevron-right';
    } else {
        targetBody.classList.add('show');
        header.classList.add('active');
        icon.className = 'fas fa-chevron-down';
        
        // Initialize CodeMirror if this is a page accordion
        if (id.startsWith('acc-page-')) {
            const idx = id.replace('acc-page-', '');
            initCodeEditor(`page-${idx}-content`);
        }
    }
}

window.toggleCreator = function(type) {
    const box = document.getElementById(`creator-${type}`);
    box.classList.toggle('show');
    
    if (type === 'page' && box.classList.contains('show')) {
        initCodeEditor('new-page-content');
    }
}

// --- PAGE RENDERING & FORMS ---
function renderPageForm(idx, p) {
    const safe = (str) => str || '';
    const contentSafe = (str) => (str || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const isNew = idx === 'new';
    const idPrefix = isNew ? `new-page` : `page-${idx}`;

    // Note: We show raw encrypted password in the field so user knows it's encrypted.
    // If they change it, we will encrypt the new value.

    return `
        <div class="editor-form-group">
            <label class="editor-label">ID (URL Hash)</label>
            <input type="text" class="editor-input" id="${idPrefix}-id" value="${safe(p.id)}">
        </div>
        <div class="editor-form-group">
            <label class="editor-label">Display Name</label>
            <input type="text" class="editor-input" id="${idPrefix}-name" value="${safe(p.name)}">
        </div>
        <div style="display:flex; gap:1rem; flex-wrap:wrap;">
            <div class="editor-form-group" style="flex:1; min-width:140px;">
                <label class="editor-label">Category</label>
                <input type="text" class="editor-input" id="${idPrefix}-category" value="${safe(p.category)}">
            </div>
            <div class="editor-form-group" style="flex:1; min-width:140px;">
                <label class="editor-label">Order</label>
                <input type="text" class="editor-input" id="${idPrefix}-order" value="${safe(p.order)}">
            </div>
        </div>
        <div class="editor-form-group">
            <label class="editor-label">Parent ID (Optional)</label>
            <input type="text" class="editor-input" id="${idPrefix}-parent" value="${safe(p.parentId)}">
        </div>
        <div class="editor-form-group">
            <label class="editor-label">Password (Optional)</label>
            <input type="text" class="editor-input" id="${idPrefix}-pass" value="${safe(p.password)}" placeholder="Leave empty for public page">
            <p class="editor-help">Enter plain text. It will be encrypted on save.</p>
        </div>
        <div class="editor-form-group">
            <label class="editor-label">HTML Content</label>
            <textarea class="editor-textarea" style="height: 300px;" id="${idPrefix}-content">${contentSafe(p.content)}</textarea>
        </div>
        <div class="editor-accordion-footer">
            ${!isNew ? `<button class="editor-btn btn-danger" onclick="deletePage(${idx})">Delete</button>` : ''}
            <button class="editor-btn btn-primary" onclick="savePage('${idx}')">${isNew ? 'Create Page' : 'Save Changes'}</button>
        </div>
    `;
}

function renderPagesList() {
    return editorState.tempPages.map((p, index) => {
        if(p.id === 'editor') return ''; 
        return `
        <div class="editor-accordion-item">
            <div class="editor-accordion-header" onclick="toggleAccordion('acc-page-${index}')">
                <div style="overflow:hidden;">
                    <div class="editor-item-title">${p.name} <span style="font-weight:normal; font-size:0.8em; opacity:0.7">(${p.id})</span></div>
                    <div class="editor-item-meta">${p.category || 'General'} • Order: ${p.order}</div>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-secondary); flex-shrink:0;"></i>
            </div>
            <div class="editor-accordion-body" id="acc-page-${index}">
                ${renderPageForm(index, p)}
            </div>
        </div>
    `}).join('');
}

window.savePage = function(idx) {
    const idPrefix = idx === 'new' ? `new-page` : `page-${idx}`;
    
    // Ensure CM updates textarea before reading value
    if (editorState.activeCodeMirror) {
        editorState.activeCodeMirror.save();
    }

    const rawPass = document.getElementById(`${idPrefix}-pass`).value;
    
    // Encrypt password if it's new or changed.
    let finalPass = rawPass;
    const oldPage = idx !== 'new' ? editorState.tempPages[idx] : null;
    const oldPass = oldPage ? oldPage.password : '';

    if (rawPass && rawPass !== oldPass) {
        // User typed something new, encrypt it
        finalPass = ARviaSecurity.encrypt(rawPass);
    }

    const newPage = {
        id: document.getElementById(`${idPrefix}-id`).value,
        name: document.getElementById(`${idPrefix}-name`).value,
        category: document.getElementById(`${idPrefix}-category`).value,
        order: document.getElementById(`${idPrefix}-order`).value,
        content: document.getElementById(`${idPrefix}-content`).value,
        parentId: document.getElementById(`${idPrefix}-parent`).value || undefined,
        password: finalPass || undefined,
        lastUpdated: new Date().toISOString()
    };

    if (!newPage.id) { alert("ID is required"); return; }

    if (idx === 'new') {
        if (rawPass) newPage.password = ARviaSecurity.encrypt(rawPass); // Always encrypt new
        editorState.tempPages.push(newPage);
        document.getElementById('creator-page').classList.remove('show');
        document.getElementById(`${idPrefix}-id`).value = '';
        document.getElementById(`${idPrefix}-name`).value = '';
        document.getElementById(`${idPrefix}-content`).value = '';
        if(editorState.activeCodeMirror) editorState.activeCodeMirror.setValue('');
    } else {
        editorState.tempPages[idx] = { ...editorState.tempPages[idx], ...newPage };
    }

    document.getElementById('pages-list-container').innerHTML = renderPagesList();
    if (idx !== 'new') toggleAccordion(`acc-page-${idx}`);
}

window.deletePage = function(idx) {
    if(confirm("Are you sure?")) {
        editorState.tempPages.splice(idx, 1);
        document.getElementById('pages-list-container').innerHTML = renderPagesList();
    }
}

// --- ADS RENDERING ---
function renderAdForm(idx, ad) {
    const safe = (str) => str || '';
    const isNew = idx === 'new';
    const idPrefix = isNew ? `new-ad` : `ad-${idx}`;
    return `
        <div class="editor-form-group">
            <label class="editor-label">Type</label>
            <select class="editor-select" id="${idPrefix}-type">
                <option value="image" ${ad.type === 'image' ? 'selected' : ''}>Image</option>
                <option value="video" ${ad.type === 'video' ? 'selected' : ''}>Video</option>
                <option value="text" ${ad.type === 'text' ? 'selected' : ''}>Text Only</option>
            </select>
        </div>
        <div class="editor-form-group">
            <label class="editor-label">Title</label>
            <input type="text" class="editor-input" id="${idPrefix}-title" value="${safe(ad.title)}">
        </div>
        <div class="editor-form-group">
            <label class="editor-label">Description Text</label>
            <textarea class="editor-textarea" style="height: 100px;" id="${idPrefix}-text">${safe(ad.text)}</textarea>
        </div>
        <div class="editor-form-group">
            <label class="editor-label">Media Source URL</label>
            <input type="text" class="editor-input" id="${idPrefix}-src" value="${safe(ad.src)}">
        </div>
        <div class="editor-form-group">
            <label class="editor-label">Link URL</label>
            <input type="text" class="editor-input" id="${idPrefix}-link" value="${safe(ad.link)}">
        </div>
        <div class="editor-form-group">
            <label class="editor-label">CTA Text</label>
            <input type="text" class="editor-input" id="${idPrefix}-cta" value="${safe(ad.cta)}">
        </div>
        <div class="editor-accordion-footer">
            ${!isNew ? `<button class="editor-btn btn-danger" onclick="deleteAd(${idx})">Delete</button>` : ''}
            <button class="editor-btn btn-primary" onclick="saveAd('${idx}')">${isNew ? 'Create Ad' : 'Save Changes'}</button>
        </div>
    `;
}

function renderAdsList() {
    return editorState.tempAdsConfig.ads.map((ad, index) => `
        <div class="editor-accordion-item">
            <div class="editor-accordion-header" onclick="toggleAccordion('acc-ad-${index}')">
                <div>
                    <div class="editor-item-title">${ad.title || 'Untitled Ad'}</div>
                    <div class="editor-item-meta">Type: ${ad.type}</div>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-secondary);"></i>
            </div>
            <div class="editor-accordion-body" id="acc-ad-${index}">
                ${renderAdForm(index, ad)}
            </div>
        </div>
    `).join('');
}

window.saveAd = function(idx) {
    const idPrefix = idx === 'new' ? `new-ad` : `ad-${idx}`;
    const newAd = {
        type: document.getElementById(`${idPrefix}-type`).value,
        title: document.getElementById(`${idPrefix}-title`).value,
        text: document.getElementById(`${idPrefix}-text`).value,
        src: document.getElementById(`${idPrefix}-src`).value,
        link: document.getElementById(`${idPrefix}-link`).value,
        cta: document.getElementById(`${idPrefix}-cta`).value,
        alt: document.getElementById(`${idPrefix}-title`).value
    };
    if (idx === 'new') {
        editorState.tempAdsConfig.ads.push(newAd);
        document.getElementById('creator-ad').classList.remove('show');
        document.getElementById(`${idPrefix}-title`).value = '';
    } else {
        editorState.tempAdsConfig.ads[idx] = newAd;
    }
    document.getElementById('ads-list-container').innerHTML = renderAdsList();
    if(idx !== 'new') toggleAccordion(`acc-ad-${idx}`);
}

window.deleteAd = function(idx) {
    if(confirm("Delete this ad unit?")) {
        editorState.tempAdsConfig.ads.splice(idx, 1);
        document.getElementById('ads-list-container').innerHTML = renderAdsList();
    }
}

// --- RELATED SITES ---
function renderRelatedForm(idx, site) {
    const safe = (str) => str || '';
    const isNew = idx === 'new';
    const idPrefix = isNew ? `new-rel` : `rel-${idx}`;
    return `
        <div class="editor-form-group">
            <label class="editor-label">Title</label>
            <input type="text" class="editor-input" id="${idPrefix}-title" value="${safe(site.title)}">
        </div>
        <div class="editor-form-group">
            <label class="editor-label">URL</label>
            <input type="text" class="editor-input" id="${idPrefix}-url" value="${safe(site.url)}">
        </div>
        <div class="editor-form-group">
            <label class="editor-label">Order</label>
            <input type="number" class="editor-input" id="${idPrefix}-order" value="${site.order || 99}">
        </div>
        <div class="editor-accordion-footer">
            ${!isNew ? `<button class="editor-btn btn-danger" onclick="deleteRelated(${idx})">Delete</button>` : ''}
            <button class="editor-btn btn-primary" onclick="saveRelated('${idx}')">${isNew ? 'Add Site' : 'Save'}</button>
        </div>
    `;
}

function renderRelatedList() {
    return editorState.tempRelatedSites.map((site, index) => `
        <div class="editor-accordion-item">
            <div class="editor-accordion-header" onclick="toggleAccordion('acc-rel-${index}')">
                 <div>
                    <div class="editor-item-title">${site.title}</div>
                    <div class="editor-item-meta">${site.url}</div>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-secondary);"></i>
            </div>
             <div class="editor-accordion-body" id="acc-rel-${index}">
                ${renderRelatedForm(index, site)}
            </div>
        </div>
    `).join('');
}

window.saveRelated = function(idx) {
    const idPrefix = idx === 'new' ? `new-rel` : `rel-${idx}`;
    const newSite = {
        title: document.getElementById(`${idPrefix}-title`).value,
        url: document.getElementById(`${idPrefix}-url`).value,
        order: parseInt(document.getElementById(`${idPrefix}-order`).value)
    };
    if (idx === 'new') {
        editorState.tempRelatedSites.push(newSite);
        document.getElementById('creator-rel').classList.remove('show');
        document.getElementById(`${idPrefix}-title`).value = '';
    } else {
        editorState.tempRelatedSites[idx] = newSite;
    }
    editorState.tempRelatedSites.sort((a,b) => a.order - b.order);
    document.getElementById('related-list-container').innerHTML = renderRelatedList();
    if(idx !== 'new') toggleAccordion(`acc-rel-${idx}`);
}

window.deleteRelated = function(idx) {
    if(confirm("Delete?")) {
        editorState.tempRelatedSites.splice(idx, 1);
        document.getElementById('related-list-container').innerHTML = renderRelatedList();
    }
}

// --- LOGS ---
function renderLogForm(idx, log) {
    const safe = (str) => str || '';
    const isNew = idx === 'new';
    const idPrefix = isNew ? `new-log` : `log-${idx}`;
    return `
        <div class="editor-form-group">
            <label class="editor-label">Message</label>
            <input type="text" class="editor-input" id="${idPrefix}-msg" value="${safe(log.message)}">
        </div>
        <div class="editor-form-group">
            <label class="editor-label">Type</label>
            <select class="editor-select" id="${idPrefix}-type">
                <option value="info" ${log.type === 'info' ? 'selected' : ''}>Info</option>
                <option value="success" ${log.type === 'success' ? 'selected' : ''}>Success</option>
                <option value="warning" ${log.type === 'warning' ? 'selected' : ''}>Warning</option>
                <option value="error" ${log.type === 'error' ? 'selected' : ''}>Error</option>
            </select>
        </div>
        <div class="editor-form-group">
            <label class="editor-label">Delay (ms)</label>
            <input type="number" class="editor-input" id="${idPrefix}-delay" value="${log.delay || 1000}">
        </div>
        <div class="editor-accordion-footer">
            ${!isNew ? `<button class="editor-btn btn-danger" onclick="deleteLog(${idx})">Delete</button>` : ''}
            <button class="editor-btn btn-primary" onclick="saveLog('${idx}')">${isNew ? 'Add Log' : 'Save'}</button>
        </div>
    `;
}

function renderLogsList() {
    return editorState.tempCustomLogs.map((log, index) => `
        <div class="editor-accordion-item">
            <div class="editor-accordion-header" onclick="toggleAccordion('acc-log-${index}')">
                <div>
                    <div class="editor-item-title">${log.message.substring(0, 40)}...</div>
                    <div class="editor-item-meta">Type: ${log.type} • Delay: ${log.delay}ms</div>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-secondary);"></i>
            </div>
            <div class="editor-accordion-body" id="acc-log-${index}">
                ${renderLogForm(index, log)}
            </div>
        </div>
    `).join('');
}

window.saveLog = function(idx) {
    const idPrefix = idx === 'new' ? `new-log` : `log-${idx}`;
    const newLog = {
        message: document.getElementById(`${idPrefix}-msg`).value,
        type: document.getElementById(`${idPrefix}-type`).value,
        delay: parseInt(document.getElementById(`${idPrefix}-delay`).value)
    };
    if (idx === 'new') {
        editorState.tempCustomLogs.push(newLog);
        document.getElementById('creator-log').classList.remove('show');
        document.getElementById(`${idPrefix}-msg`).value = '';
    } else {
        editorState.tempCustomLogs[idx] = newLog;
    }
    document.getElementById('logs-list-container').innerHTML = renderLogsList();
    if(idx !== 'new') toggleAccordion(`acc-log-${idx}`);
}

window.deleteLog = function(idx) {
    if(confirm("Delete log?")) {
        editorState.tempCustomLogs.splice(idx, 1);
        document.getElementById('logs-list-container').innerHTML = renderLogsList();
    }
}

// --- GLOBAL ACTIONS ---
window.switchTab = function(tabId) {
    document.querySelectorAll('.editor-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`button[onclick="switchTab('${tabId}')"]`).classList.add('active');
    document.querySelectorAll('.editor-section').forEach(s => s.classList.remove('active'));
    document.getElementById(`tab-${tabId}`).classList.add('active');
    
    // Refresh CodeMirror if active in this tab (hack for rendering issue)
    if (editorState.activeCodeMirror) {
        setTimeout(() => editorState.activeCodeMirror.refresh(), 50);
    }
}

window.applyConfig = function() {
    // Gather General
    editorState.tempSiteConfig.websiteName = document.getElementById('conf-websiteName').value;
    editorState.tempSiteConfig.logoUrl = document.getElementById('conf-logoUrl').value;
    editorState.tempSiteConfig.faviconUrl = document.getElementById('conf-faviconUrl').value;
    editorState.tempSiteConfig.hostingUrl = document.getElementById('conf-hostingUrl').value;
    editorState.tempSiteConfig.themeColor = document.getElementById('conf-themeColor').value;
    editorState.tempSiteConfig.metaDescription = document.getElementById('conf-metaDescription').value;
    editorState.tempSiteConfig.metaKeywords = document.getElementById('conf-metaKeywords').value;
    editorState.tempSiteConfig.metaAuthor = document.getElementById('conf-metaAuthor').value;
    
    editorState.tempAdsConfig.enabled = document.getElementById('conf-adsEnabled').value === 'true';
    editorState.tempAdsConfig.density = parseInt(document.getElementById('conf-adsDensity').value);

    const saveObj = {
        siteConfig: editorState.tempSiteConfig,
        relatedSites: editorState.tempRelatedSites,
        adsConfig: editorState.tempAdsConfig,
        customLogs: editorState.tempCustomLogs,
        pagesDataIframe: editorState.tempPages
    };

    localStorage.setItem('arvia_saved_config', JSON.stringify(saveObj));
    alert("Configuration applied! The page will now reload.");
    location.reload();
}

window.resetConfig = function() {
    if(confirm("This will delete your local customizations. Continue?")) {
        localStorage.removeItem('arvia_saved_config');
        location.reload();
    }
}

window.toggleExport = function() {
    const container = document.getElementById('export-container');
    if(container.classList.contains('show')) {
        container.classList.remove('show');
    } else {
        container.classList.add('show');
        editorState.tempSiteConfig.websiteName = document.getElementById('conf-websiteName').value;
        const code = `
/* --- COPY & PASTE INTO config.js --- */
let siteConfig = ${JSON.stringify(editorState.tempSiteConfig, null, 2)};
let relatedSites = ${JSON.stringify(editorState.tempRelatedSites, null, 2)};
let adsConfig = ${JSON.stringify(editorState.tempAdsConfig, null, 2)};
let customLogs = ${JSON.stringify(editorState.tempCustomLogs, null, 2)};
let pagesDataIframe = ${JSON.stringify(editorState.tempPages, null, 2)};
/* --- END CONFIG --- */
        `;
        document.getElementById('export-area').value = code.trim();
        container.scrollIntoView({ behavior: 'smooth' });
    }
}

window.copyExportText = function() {
    const area = document.getElementById('export-area');
    area.select();
    document.execCommand('copy');
    alert("Copied to clipboard!");
}


/* --- security.js --- */
/* --- security.js --- */
/* 
   Handles password encryption/decryption for the ARvia configuration.
   Logic: Reverses string -> Base64 Encode.
   This prevents plain text passwords from appearing in config.js.
*/

const ARviaSecurity = {
    /**
     * Encrypts a plain text string.
     * Algorithm: Reverse String -> Base64
     */
    encrypt: function(text) {
        if (!text) return "";
        try {
            const reversed = text.split('').reverse().join('');
            return btoa(reversed);
        } catch (e) {
            console.error("Encryption failed", e);
            return text;
        }
    },

    /**
     * Decrypts an encrypted string.
     * Algorithm: Base64 Decode -> Reverse String
     */
    decrypt: function(encryptedText) {
        if (!encryptedText) return "";
        try {
            const decoded = atob(encryptedText);
            return decoded.split('').reverse().join('');
        } catch (e) {
            // If decryption fails (e.g. it's already plain text during migration), return as is
            return encryptedText;
        }
    },

    /**
     * Verifies an input password against the stored (encrypted) hash.
     * @param {string} input - The plain text password entered by user
     * @param {string} stored - The encrypted password from config
     */
    verify: function(input, stored) {
        if (!input || !stored) return false;
        // Check 1: Decrypt stored and match
        if (this.decrypt(stored) === input) return true;
        
        // Check 2: Fallback (if stored was plain text during dev)
        if (stored === input) return true;

        return false;
    }
};

// Expose globally
window.ARviaSecurity = ARviaSecurity;
