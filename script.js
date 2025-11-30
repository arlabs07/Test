/* --- config.js --- */
/* --- config.js --- */
/* 
   ==========================================================================
   ARVIA WEBSITE CONFIGURATION
   ==========================================================================
   Edit this file to customize your website's content, appearance, and settings.
*/

// --- DEFAULT SETTINGS (Fallback) ---
let siteConfig = {
  websiteName: "Test",
  logoUrl: "https://arlabs07.github.io/alphalabs.github.io/alphalabs.png",
  faviconUrl: "https://arlabs07.github.io/alphalabs.github.io/alphalabs.png",
  hostingUrl: "https://arlabs07.github.io/alphalabs.github.io/test",
  metaDescription: "A demonstration of the ARvia generic website template with rich media and multilingual support.",
  metaKeywords: "arvia, demo, rich media, video, audio, hindi, code, math",
  metaAuthor: "Alphalabs",
  themeColor: "#f97316", // Brand Orange
  copyrightYear: "2025",
  copyrightHolder: "Alphalabs",
  contactEmail: "contact@example.com",
  social: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  }
};

let relatedSites = [
  { order: 1, title: "Official Docs", url: "#" },
  { order: 2, title: "Support Portal", url: "#" },
  { order: 3, title: "Community Forum", url: "#" }
];

let adsConfig = {
  enabled: false,
  density: 0,
  randomize: true,
  ads: [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
      link: 'https://example.com',
      alt: 'Digital Workflow',
      title: 'Boost Productivity',
      text: 'Streamline your digital workflow with our new premium tools.',
      cta: 'Get Started'
    },
    {
      type: 'text',
      title: 'Summer Sale!',
      text: 'Flash sale happening now. 50% off on all annual plans.',
      link: 'https://example.com/sale',
      cta: 'View Deals'
    },
    {
      type: 'video',
      src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      link: 'https://example.com/video',
      text: 'Experience the thrill of next-gen performance.',
      cta: 'Watch Video'
    }
  ]
};

let customLogs = [
  {
    message: "System initialized. Welcome to the demo!",
    type: "info",
    delay: 500
  },
  {
    message: "Connected to secure server.",
    type: "success",
    delay: 2000
  },
  {
    message: "Tip: You can use the pencil icon to draw on the screen!",
    type: "info",
    delay: 5000
  }
];

let pagesDataIframe = [
  // --- SECTION: HOMEPAGE ---
  {
    id: "homepage",
    name: "Home",
    title: "Welcome to ARvia Test",
    category: "General",
    author: "Alphalabs",
    imageUrl: "https://images.unsplash.com/photo-1499750310159-5254f4127278?q=80&w=1000&auto=format&fit=crop",
    order: "0",
    isDefault: true,
    lastUpdated: "2025-11-22",
    content: "<h1>Welcome</h1><p>Loading dynamic content...</p>" 
  },

  // --- EDITOR PAGE (Locked & Hidden from Homepage) ---
  {
      id: "editor",
      name: "Site Editor",
      title: "Configuration Editor",
      category: "System",
      author: "Admin",
      order: "999",
      // ENCRYPTED PASSWORD: Reverse("@lp#@l@b$07") -> "70$b@l@#pl@" -> Base64
      password: "NzAkYkBsQCNwbEA=", 
      content: `<div id="editor-root" class="editor-loading">Loading Editor Interface...</div>`
  },

  // --- SECTION: ABOUT ---
  {
    id: "about",
    name: "About Us",
    title: "About ARvia Framework",
    category: "General",
    author: "Alphalabs Team",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
    order: "1",
    lastUpdated: "2025-11-22",
    content: `
    <h1><strong>CLASS X - MATHEMATICS BASIC (241)</strong></h1>\n<h1><strong>PRE BOARD - I (2025-26)</strong></h1>\n<h2><strong>COMPLETE SOLUTIONS</strong></h2>\n<p><strong>Maximum Marks:</strong> 80 | <strong>Time:</strong> 3 Hours</p>\n<hr>\n<h2><strong>SECTION A</strong> (1 mark each)</h2>\n<h3><strong>Question 1</strong></h3>\n<p><strong>For any two positive integers &#39;a&#39; and &#39;b&#39;, the value of HCF(a, b) × LCM(a, b) is:</strong></p>\n<p><strong>Solution:</strong><br>According to the fundamental theorem, for any two positive integers:</p>\n<div class=\"formula-block-iframe\">$ \\text{HCF}(a, b) \\times \\text{LCM}(a, b) = a \\times b $</div>\n\n<p><strong>Answer: (d) a × b</strong> </p>\n<hr>\n<h3><strong>Question 2</strong></h3>\n<p><strong>If one zero of the polynomial P(x) = −8x² + (k + 5)x + 36 is negative of the other (same magnitude), then the value of k is:</strong></p>\n<p><strong>Solution:</strong><br>Let the zeros be α and −α</p>\n<p>Sum of zeros = $ \\alpha + (-\\alpha) = 0 $</p>\n<p>Using the relationship: Sum of zeros = $ -\\frac{b}{a} = -\\frac{(k+5)}{-8} = \\frac{k+5}{8} $</p>\n<p>Therefore: $ \\frac{k+5}{8} = 0 $</p>\n<div class=\"formula-block-iframe\">$ k + 5 = 0 $</div>\n\n<div class=\"formula-block-iframe\">$ k = -5 $</div>\n\n<p><strong>Answer: (a) -5</strong> </p>\n<hr>\n<h3><strong>Question 3</strong></h3>\n<p><strong>The graph of the polynomial ax² + bx + c is an upward parabola if:</strong></p>\n<p><strong>Solution:</strong><br>A parabola opens upward when the coefficient of x² is positive.</p>\n<p><strong>Answer: (a) a &gt; 0</strong> </p>\n<hr>\n<h3><strong>Question 4</strong></h3>\n<p><strong>A bag has 3 red balls and 5 green balls. If we take a ball from the bag, what is the probability of getting red balls only?</strong></p>\n<p><strong>Solution:</strong><br>Total balls = 3 + 5 = 8</p>\n<p>Number of red balls = 3</p>\n<p>Probability = $ \\frac{\\text{Favorable outcomes}}{\\text{Total outcomes}} = \\frac{3}{8} $</p>\n<p><strong>Answer: (c) 3/8</strong> </p>\n<hr>\n<h3><strong>Question 5</strong></h3>\n<p><strong>Which of the following pair of equations are dependent?</strong></p>\n<p><strong>Solution:</strong><br>Two equations are dependent if one is a multiple of the other.</p>\n<p>Checking option (a): </p>\n<ul>\n<li><p>2x + 3y = 9</p>\n</li>\n<li><p>4x + 6y = 18</p>\n</li>\n</ul>\n<p>The second equation is exactly 2 times the first equation, making them dependent.</p>\n<p><strong>Answer: (a) 2x + 3y = 9 and 4x + 6y = 18</strong> </p>\n<hr>\n<h3><strong>Question 6</strong></h3>\n<p><strong>If the sum of roots of 3x² + (2k + 1)x − (k + 5) = 0 equals the product of roots, find k:</strong></p>\n<p><strong>Solution:</strong><br>For equation ax² + bx + c = 0:</p>\n<ul>\n<li><p>Sum of roots = $ -\\frac{b}{a} = -\\frac{2k+1}{3} $</p>\n</li>\n<li><p>Product of roots = $ \\frac{c}{a} = \\frac{-(k+5)}{3} $</p>\n</li>\n</ul>\n<p>Given: Sum = Product</p>\n<div class=\"formula-block-iframe\">$ -\\frac{2k+1}{3} = \\frac{-(k+5)}{3} $</div>\n\n<div class=\"formula-block-iframe\">$ -(2k+1) = -(k+5) $</div>\n\n<div class=\"formula-block-iframe\">$ 2k + 1 = k + 5 $</div>\n\n<div class=\"formula-block-iframe\">$ k = 4 $</div>\n\n<p><strong>Answer: (c) 4</strong> </p>\n<hr>\n<h3><strong>Question 7</strong></h3>\n<p><strong>The nth term of the A.P. 5, 2, −1, −4, −7... is:</strong></p>\n<p><strong>Solution:</strong><br>First term (a) = 5</p>\n<p>Common difference (d) = 2 − 5 = −3</p>\n<p>nth term formula: $ a_n = a + (n-1)d $</p>\n<div class=\"formula-block-iframe\">$ a_n = 5 + (n-1)(-3) $</div>\n\n<div class=\"formula-block-iframe\">$ a_n = 5 - 3n + 3 $</div>\n\n<div class=\"formula-block-iframe\">$ a_n = 8 - 3n $</div>\n\n<p><strong>Answer: (c) 8 − 3n</strong> </p>\n<hr>\n<h3><strong>Question 8</strong></h3>\n<p><strong>If ΔPQR ~ ΔXYZ, ∠Q = 50° and ∠R = 70°, then ∠X + ∠Y equals:</strong></p>\n<p><strong>Solution:</strong><br>In ΔPQR: ∠P + ∠Q + ∠R = 180°</p>\n<p>∠P = 180° − 50° − 70° = 60°</p>\n<p>Since ΔPQR ~ ΔXYZ, corresponding angles are equal:</p>\n<ul>\n<li><p>∠P = ∠X = 60°</p>\n</li>\n<li><p>∠Q = ∠Y = 50°</p>\n</li>\n</ul>\n<p>Therefore: ∠X + ∠Y = 60° + 50° = 110°</p>\n<p><strong>Answer: (d) 110°</strong> </p>\n<hr>\n<h3><strong>Question 9</strong></h3>\n<p><strong>The ratio of distances of point P(3, 4) from origin to that from y-axis is:</strong></p>\n<p><strong>Solution:</strong><br>Distance from origin = $ \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5 $</p>\n<p>Distance from y-axis = |x-coordinate| = 3</p>\n<p>Ratio = 5:3</p>\n<p><strong>Answer: (b) 5:3</strong> </p>\n<hr>\n<h3><strong>Question 10</strong></h3>\n<p><strong>What is the y-coordinate of the midpoint of (3,7) and (5,9)?</strong></p>\n<p><strong>Solution:</strong><br>Midpoint formula: $ \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right) $</p>\n<p>y-coordinate = $ \\frac{7+9}{2} = \\frac{16}{2} = 8 $</p>\n<p><strong>Answer: (b) 8</strong> </p>\n<hr>\n<h3><strong>Question 11</strong></h3>\n<p><strong>If √2 sin(60° − α) = 1, then α is:</strong></p>\n<p><strong>Solution:</strong></p>\n<div class=\"formula-block-iframe\">$ \\sqrt{2} \\sin(60° - \\alpha) = 1 $</div>\n\n<div class=\"formula-block-iframe\">$ \\sin(60° - \\alpha) = \\frac{1}{\\sqrt{2}} $</div>\n\n<div class=\"formula-block-iframe\">$ \\sin(60° - \\alpha) = \\sin 45° $</div>\n\n<div class=\"formula-block-iframe\">$ 60° - \\alpha = 45° $</div>\n\n<div class=\"formula-block-iframe\">$ \\alpha = 15° $</div>\n\n<p><strong>Answer: (b) 15°</strong> </p>\n<hr>\n<h3><strong>Question 12</strong></h3>\n<p><strong>A dice is thrown. The probability of getting odd numbers is:</strong></p>\n<p><strong>Solution:</strong><br>Odd numbers on a dice: 1, 3, 5 (3 outcomes)</p>\n<p>Total outcomes = 6</p>\n<p>Probability = $ \\frac{3}{6} = \\frac{1}{2} $</p>\n<p><strong>Answer: (a) 1/2</strong> </p>\n<hr>\n<h3><strong>Question 13</strong></h3>\n<p><strong>If two tangents inclined at 60° are drawn to a circle of radius 3 cm, find the length of each tangent:</strong></p>\n<p><strong>Solution:</strong><br>Let O be the center, P be the external point, and the tangents meet at angle 60°.</p>\n<p>In the configuration, ∠OPA = 30° (half of 60°)</p>\n<p>Using trigonometry in right triangle:</p>\n<div class=\"formula-block-iframe\">$ \\tan 30° = \\frac{r}{PA} $</div>\n\n<div class=\"formula-block-iframe\">$ \\frac{1}{\\sqrt{3}} = \\frac{3}{PA} $</div>\n\n<p>$ PA = 3\\sqrt{3} $ cm</p>\n<p><strong>Answer: (d) 3√3 cm</strong> </p>\n<hr>\n<h3><strong>Question 14</strong></h3>\n<p><strong>In the figure, PQL and PRM are tangents at Q and R. If ∠SQL = 50° and ∠SRM = 60°, then ∠QSR equals:</strong></p>\n<p><strong>Solution:</strong><br>Using the property that the angle subtended by an arc at the center is twice the angle at any point on the circle:</p>\n<p>∠QOR = 180° − (90° − 50°) − (90° − 60°) = 180° − 40° − 30° = 110°</p>\n<p>∠QSR = $ \\frac{1}{2} $ × (360° − 110°) = $ \\frac{250°}{2} $ = 125°</p>\n<p>By tangent properties: ∠QSR = 180° − 110° = 70°</p>\n<p><strong>Answer: (c) 70°</strong> </p>\n<hr>\n<h3><strong>Question 15</strong></h3>\n<p><strong>In a sector of radius 21 cm with arc angle 60°, find the chord length:</strong></p>\n<p><strong>Solution:</strong><br>When an arc subtends 60° at the center, it forms an equilateral triangle (since two radii and the chord form the triangle).</p>\n<p>Therefore, chord length = radius = 21 cm</p>\n<p><strong>Answer: (b) 21 cm</strong> </p>\n<hr>\n<h3><strong>Question 16</strong></h3>\n<p><strong>If the perimeter and area of a circle are numerically equal, find the radius:</strong></p>\n<p><strong>Solution:</strong><br>Perimeter = 2πr</p>\n<p>Area = πr²</p>\n<p>Given: 2πr = πr²</p>\n<p>2 = r</p>\n<p><strong>Answer: (a) 2 units</strong> </p>\n<hr>\n<h3><strong>Question 17</strong></h3>\n<p><strong>A cone has radius 4 cm and slant height 5 cm. Find its volume:</strong></p>\n<p><strong>Solution:</strong><br>Height: $ h = \\sqrt{l^2 - r^2} = \\sqrt{25 - 16} = 3 $ cm</p>\n<p>Volume = $ \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi(4)^2(3) = \\frac{1}{3}\\pi \\times 48 = 16\\pi $ cm³</p>\n<p><strong>Answer: (a) 16π cm³</strong> </p>\n<hr>\n<h3><strong>Question 18</strong></h3>\n<p><strong>If (Mode − Median) = 24, find (Median − Mean):</strong></p>\n<p><strong>Solution:</strong><br>Using the empirical relationship:<br>Mode − Median = 2(Median − Mean)</p>\n<p>24 = 2(Median − Mean)</p>\n<p>Median − Mean = 12</p>\n<p><strong>Answer: (b) 12</strong> </p>\n<hr>\n<h3><strong>Question 19</strong></h3>\n<p><strong>Assertion (A): If 5 + √7 is a root with rational coefficients, the other root is 5 − √7.</strong><br><strong>Reason (R): Surd roots occur in conjugate pairs.</strong></p>\n<p><strong>Solution:</strong><br>Both statements are true. Irrational roots with rational coefficients always occur in conjugate pairs, and R correctly explains A.</p>\n<p><strong>Answer: (A) Both A and R are true, and R is the correct explanation of A</strong> </p>\n<hr>\n<h3><strong>Question 20</strong></h3>\n<p><strong>Assertion (A): cos⁴A − sin⁴A = 2cos²A − 1</strong><br><strong>Reason (R): cos A decreases as A increases (0° ≤ A ≤ 90°)</strong></p>\n<p><strong>Solution:</strong><br>Assertion A:</p>\n<div class=\"formula-block-iframe\">$ \\cos^4 A - \\sin^4 A = (\\cos^2 A + \\sin^2 A)(\\cos^2 A - \\sin^2 A) $</div>\n$ = 1 \\times (\\cos^2 A - \\sin^2 A) = \\cos^2 A - (1-\\cos^2 A) = 2\\cos^2 A - 1 $ ✓\n\n<p>Reason R is also true but doesn&#39;t explain A.</p>\n<p><strong>Answer: (B) Both A and R are true, but R is not the correct explanation</strong> </p>\n<hr>\n<h2><strong>SECTION B</strong> (2 marks each)</h2>\n<h3><strong>Question 21</strong></h3>\n<p><strong>Two concentric circles have radii 21 cm and 42 cm. If ∠AOB = 60°, find the shaded region area.</strong></p>\n<p><strong>Solution:</strong><br>Area of shaded region = Area of sector of larger circle − Area of sector of smaller circle</p>\n<p>Area of sector = $ \\frac{\\theta}{360°} \\times \\pi r^2 $</p>\n<p>Area of larger sector = $ \\frac{60°}{360°} \\times \\frac{22}{7} \\times (42)^2 = \\frac{1}{6} \\times \\frac{22}{7} \\times 1764 = 924 $ cm²</p>\n<p>Area of smaller sector = $ \\frac{60°}{360°} \\times \\frac{22}{7} \\times (21)^2 = \\frac{1}{6} \\times \\frac{22}{7} \\times 441 = 231 $ cm²</p>\n<p><strong>Shaded area = 924 − 231 = 693 cm²</strong> </p>\n<p><strong>OR</strong></p>\n<p><strong>A pendulum swings through 30° and describes an arc of 8.8 cm. Find the pendulum length.</strong></p>\n<p><strong>Solution:</strong><br>Arc length = $ \\frac{\\theta}{360°} \\times 2\\pi r $</p>\n<div class=\"formula-block-iframe\">$ 8.8 = \\frac{30°}{360°} \\times 2 \\times \\frac{22}{7} \\times r $</div>\n\n<div class=\"formula-block-iframe\">$ 8.8 = \\frac{1}{12} \\times \\frac{44}{7} \\times r $</div>\n\n<div class=\"formula-block-iframe\">$ 8.8 = \\frac{44r}{84} $</div>\n\n<p>$ r = \\frac{8.8 \\times 84}{44} = 16.8 $ cm</p>\n<p><strong>Pendulum length = 16.8 cm</strong> </p>\n<hr>\n<h3><strong>Question 22</strong></h3>\n<p><strong>Find the 20th term from the last of A.P.: 3, 8, 13,...,253</strong></p>\n<p><strong>Solution:</strong><br>First term a = 3, d = 5, last term l = 253</p>\n<p>20th term from last = last term − 19d</p>\n<p>= 253 − 19(5) = 253 − 95 = 158</p>\n<p><strong>Answer: 158</strong> </p>\n<p><strong>OR</strong></p>\n<p><strong>Find the sum of first 15 multiples of 8:</strong></p>\n<p><strong>Solution:</strong><br>Multiples: 8, 16, 24,...</p>\n<p>This is an A.P. with a = 8, d = 8, n = 15</p>\n<div class=\"formula-block-iframe\">$ S_n = \\frac{n}{2}[2a + (n-1)d] $</div>\n\n<div class=\"formula-block-iframe\">$ S_{15} = \\frac{15}{2}[2(8) + 14(8)] = \\frac{15}{2}[16 + 112] = \\frac{15 \\times 128}{2} = 960 $</div>\n\n<p><strong>Answer: 960</strong> </p>\n<hr>\n<h3><strong>Question 23</strong></h3>\n<p><strong>Given AB || DE and BD || EF, prove that DC² = CF × AC</strong></p>\n<p><strong>Solution:</strong><br>Given: AB || DE and BD || EF</p>\n<p>In ΔABD and ΔCFE:<br>Since AB || DE, by Basic Proportionality Theorem:<br>$ \\frac{AD}{DC} = \\frac{AB}{DE} $ ... (i)</p>\n<p>Since BD || EF:<br>$ \\frac{DC}{CF} = \\frac{BD}{EF} $ ... (ii)</p>\n<p>Also, AB || DE implies ΔADC ~ ΔCFE (by AA similarity)</p>\n<p>Therefore: $ \\frac{DC}{CF} = \\frac{AC}{DC} $</p>\n<p>Cross-multiplying: <strong>DC² = CF × AC</strong> (Hence proved) </p>\n<hr>\n<h3><strong>Question 24</strong></h3>\n<p><strong>If tan θ + cot θ = 5, find tan²θ + cot²θ</strong></p>\n<p><strong>Solution:</strong><br>Given: tan θ + cot θ = 5</p>\n<p>Squaring both sides:</p>\n<div class=\"formula-block-iframe\">$ (\\tan \\theta + \\cot \\theta)^2 = 25 $</div>\n\n<div class=\"formula-block-iframe\">$ \\tan^2 \\theta + \\cot^2 \\theta + 2(\\tan \\theta)(\\cot \\theta) = 25 $</div>\n\n<p>Since tan θ · cot θ = 1:</p>\n<div class=\"formula-block-iframe\">$ \\tan^2 \\theta + \\cot^2 \\theta + 2 = 25 $</div>\n\n<p><strong>tan²θ + cot²θ = 23</strong> </p>\n<hr>\n<h3><strong>Question 25</strong></h3>\n<p><strong>Prove that tangents drawn at the ends of a diameter are parallel.</strong></p>\n<p><strong>Solution:</strong><br>Let AB be a diameter of circle with center O.</p>\n<p>Let tangents at A and B be l and m respectively.</p>\n<p>Since radius ⊥ tangent at point of contact:</p>\n<ul>\n<li><p>OA ⊥ l</p>\n</li>\n<li><p>OB ⊥ m</p>\n</li>\n</ul>\n<p>Since AB is a diameter, A, O, and B are collinear.</p>\n<p>Therefore, ∠OAl = 90° and ∠OBm = 90°</p>\n<p>These are alternate interior angles, hence <strong>l || m</strong> (Hence proved) </p>\n<hr>\n<h2><strong>SECTION C</strong> (3 marks each)</h2>\n<h3><strong>Question 26</strong></h3>\n<p><strong>Prove that 5 − √3 is irrational (given √3 is irrational)</strong></p>\n<p><strong>Solution:</strong><br>Let us assume, to the contrary, that 5 − √3 is rational.</p>\n<p>Then 5 − √3 = $ \\frac{p}{q} $ where p, q are integers and q ≠ 0</p>\n<div class=\"formula-block-iframe\">$ -\\sqrt{3} = \\frac{p}{q} - 5 $</div>\n\n<div class=\"formula-block-iframe\">$ -\\sqrt{3} = \\frac{p - 5q}{q} $</div>\n\n<div class=\"formula-block-iframe\">$ \\sqrt{3} = \\frac{5q - p}{q} $</div>\n\n<p>Since p, q are integers, $ \\frac{5q-p}{q} $ is rational.</p>\n<p>This means √3 is rational, which contradicts the given fact.</p>\n<p>Therefore, our assumption is wrong.</p>\n<p><strong>Hence, 5 − √3 is irrational.</strong> (Hence proved) </p>\n<hr>\n<h3><strong>Question 27</strong></h3>\n<p><strong>If α and β are zeros of p(x) = x² − 5x + 4, find α² + β²</strong></p>\n<p><strong>Solution:</strong><br>For polynomial x² − 5x + 4:</p>\n<p>Sum of zeros: α + β = $ -\\frac{b}{a} = 5 $</p>\n<p>Product of zeros: αβ = $ \\frac{c}{a} = 4 $</p>\n<p>We know: α² + β² = (α + β)² − 2αβ</p>\n<p>α² + β² = (5)² − 2(4) = 25 − 8 = 17</p>\n<p><strong>Answer: α² + β² = 17</strong> </p>\n<hr>\n<h3><strong>Question 28</strong></h3>\n<p><strong>Solve graphically: 4x − 5y = 20 and 3x + 5y = 15</strong></p>\n<p><strong>Solution:</strong><br>For 4x − 5y = 20:</p>\n<table>\n<thead>\n<tr>\n<th>x</th>\n<th>0</th>\n<th>5</th>\n<th>10</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>y</td>\n<td>−4</td>\n<td>0</td>\n<td>4</td>\n</tr>\n</tbody></table>\n<p>For 3x + 5y = 15:</p>\n<table>\n<thead>\n<tr>\n<th>x</th>\n<th>0</th>\n<th>5</th>\n<th>10</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>y</td>\n<td>3</td>\n<td>0</td>\n<td>−3</td>\n</tr>\n</tbody></table>\n<p>Plotting these points and drawing lines, they intersect at <strong>(5, 0)</strong></p>\n<p><strong>Solution: x = 5, y = 0</strong> </p>\n<p><strong>OR</strong></p>\n<p><strong>Find k for which x + 2y = 3 and (k−1)x + (k+1)y = k+2 have no solution:</strong></p>\n<p><strong>Solution:</strong><br>For no solution: $ \\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2} $</p>\n<div class=\"formula-block-iframe\">$ \\frac{1}{k-1} = \\frac{2}{k+1} $</div>\n\n<p>k + 1 = 2(k − 1)</p>\n<p>k + 1 = 2k − 2</p>\n<p><strong>k = 3</strong></p>\n<p>Verification: $ \\frac{c_1}{c_2} = \\frac{3}{5} \\neq \\frac{1}{2} $ ✓</p>\n<p><strong>Answer: k = 3</strong> </p>\n<hr>\n<h3><strong>Question 29</strong></h3>\n<p><strong>If x = p sec θ + q tan θ and y = p tan θ + q sec θ, prove x² − y² = p² − q²</strong></p>\n<p><strong>Solution:</strong><br>LHS = x² − y²</p>\n<p>= (p sec θ + q tan θ)² − (p tan θ + q sec θ)²</p>\n<p>= (p² sec² θ + 2pq sec θ tan θ + q² tan² θ) − (p² tan² θ + 2pq tan θ sec θ + q² sec² θ)</p>\n<p>= p² sec² θ + q² tan² θ − p² tan² θ − q² sec² θ</p>\n<p>= p²(sec² θ − tan² θ) − q²(sec² θ − tan² θ)</p>\n<p>= p²(1) − q²(1)  [Since sec² θ − tan² θ = 1]</p>\n<p>= p² − q² = RHS</p>\n<p><strong>(Hence proved)</strong> </p>\n<p><strong>OR</strong></p>\n<p><strong>Prove: $ \\frac{\\sin\\theta - \\cos\\theta}{\\sin\\theta + \\cos\\theta} + \\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta - \\cos\\theta} = \\frac{2}{2\\sin^2\\theta - 1} $</strong></p>\n<p><strong>Solution:</strong><br>LHS = $ \\frac{(\\sin\\theta - \\cos\\theta)^2 + (\\sin\\theta + \\cos\\theta)^2}{(\\sin\\theta + \\cos\\theta)(\\sin\\theta - \\cos\\theta)} $</p>\n<p>Numerator = sin²θ − 2sinθcosθ + cos²θ + sin²θ + 2sinθcosθ + cos²θ</p>\n<p>= 2sin²θ + 2cos²θ = 2</p>\n<p>Denominator = sin²θ − cos²θ = sin²θ − (1 − sin²θ) = 2sin²θ − 1</p>\n<p>LHS = $ \\frac{2}{2\\sin^2\\theta - 1} $ = RHS <strong>(Hence proved)</strong> </p>\n<hr>\n<h3><strong>Question 30</strong></h3>\n<p><strong>Prove: Angle between two tangents from external point is supplementary to the angle at center</strong></p>\n<p><strong>Solution:</strong><br>Let P be external point, tangents PA and PB touch circle at A and B.</p>\n<p>In quadrilateral PAOB:<br>∠PAO = 90° (radius ⊥ tangent)<br>∠PBO = 90° (radius ⊥ tangent)</p>\n<p>Sum of angles in quadrilateral = 360°</p>\n<p>∠APB + ∠PAO + ∠AOB + ∠PBO = 360°</p>\n<p>∠APB + 90° + ∠AOB + 90° = 360°</p>\n<p>∠APB + ∠AOB = 180°</p>\n<p><strong>Hence, ∠APB and ∠AOB are supplementary</strong> (Hence proved) </p>\n<hr>\n<h3><strong>Question 31</strong></h3>\n<p><strong>Black face cards removed from 52 cards. Find probability of: (i) face card (ii) red card (iii) black card</strong></p>\n<p><strong>Solution:</strong><br>Black face cards = 6 (Jack, Queen, King of Spades and Clubs)</p>\n<p>Remaining cards = 52 − 6 = 46</p>\n<p><strong>(i) Face cards remaining:</strong><br>Red face cards = 6<br>P(face card) = $ \\frac{6}{46} = \\frac{3}{23} $</p>\n<p><strong>(ii) Red cards:</strong><br>Total red cards = 26<br>P(red card) = $ \\frac{26}{46} = \\frac{13}{23} $</p>\n<p><strong>(iii) Black cards:</strong><br>Black cards remaining = 26 − 6 = 20<br>P(black card) = $ \\frac{20}{46} = \\frac{10}{23} $ </p>\n<hr>\n<h2><strong>SECTION D</strong> (5 marks each)</h2>\n<h3><strong>Question 32</strong></h3>\n<p><strong>In a 600 km flight, speed reduced by 200 km/h increased time by 30 min. Find flight duration.</strong></p>\n<p><strong>Solution:</strong><br>Let original speed = x km/h</p>\n<p>Original time = $ \\frac{600}{x} $ hours</p>\n<p>New speed = (x − 200) km/h</p>\n<p>New time = $ \\frac{600}{x-200} $ hours</p>\n<p>Given: New time − Original time = 30 min = $ \\frac{1}{2} $ hour</p>\n<div class=\"formula-block-iframe\">$ \\frac{600}{x-200} - \\frac{600}{x} = \\frac{1}{2} $</div>\n\n<div class=\"formula-block-iframe\">$ 600\\left[\\frac{x - (x-200)}{x(x-200)}\\right] = \\frac{1}{2} $</div>\n\n<div class=\"formula-block-iframe\">$ \\frac{600 \\times 200}{x(x-200)} = \\frac{1}{2} $</div>\n\n<div class=\"formula-block-iframe\">$ 120000 \\times 2 = x(x-200) $</div>\n\n<div class=\"formula-block-iframe\">$ x^2 - 200x - 240000 = 0 $</div>\n\n<p>Using quadratic formula or factorization:</p>\n<div class=\"formula-block-iframe\">$ x^2 - 200x - 240000 = 0 $</div>\n<div class=\"formula-block-iframe\">$ (x - 600)(x + 400) = 0 $</div>\n\n<p>x = 600 km/h (taking positive value)</p>\n<p><strong>Duration of flight = $ \\frac{600}{600} $ = 1 hour</strong> </p>\n<p><strong>OR</strong></p>\n<p><strong>Two-digit number with digit product 18. When 63 subtracted, digits interchange. Find the number.</strong></p>\n<p><strong>Solution:</strong><br>Let the number be 10x + y</p>\n<p>Given: xy = 18 ... (i)</p>\n<p>When 63 subtracted: (10x + y) − 63 = 10y + x</p>\n<p>9x − 9y = 63</p>\n<p>x − y = 7</p>\n<p>x = y + 7 ... (ii)</p>\n<p>Substituting in (i):<br>(y + 7)y = 18</p>\n<p>y² + 7y − 18 = 0</p>\n<p>(y + 9)(y − 2) = 0</p>\n<p>y = 2 (taking positive value)</p>\n<p>x = 9</p>\n<p><strong>Number = 92</strong> </p>\n<hr>\n<h3><strong>Question 33</strong></h3>\n<p><strong>State and Prove Thales Theorem (Basic Proportionality Theorem)</strong></p>\n<p><strong>Solution:</strong><br><strong>Statement:</strong> If a line is drawn parallel to one side of a triangle, intersecting the other two sides, then it divides those sides in the same ratio.</p>\n<p><strong>Given:</strong> In ΔABC, DE || BC, where D is on AB and E is on AC.</p>\n<p><strong>To Prove:</strong> $ \\frac{AD}{DB} = \\frac{AE}{EC} $</p>\n<p><strong>Construction:</strong> Draw EM ⊥ AB and DN ⊥ AC. Join BE and CD.</p>\n<p><strong>Proof:</strong></p>\n<p>Area of ΔADE = $ \\frac{1}{2} \\times AD \\times EM $</p>\n<p>Area of ΔBDE = $ \\frac{1}{2} \\times DB \\times EM $</p>\n<p>$ \\frac{\\text{Area of } \\Delta ADE}{\\text{Area of } \\Delta BDE} = \\frac{AD}{DB} $ ... (i)</p>\n<p>Similarly:<br>$ \\frac{\\text{Area of } \\Delta ADE}{\\text{Area of } \\Delta CDE} = \\frac{AE}{EC} $ ... (ii)</p>\n<p>Since DE || BC, ΔBDE and ΔCDE lie on same base DE and between same parallels.</p>\n<p>Therefore: Area of ΔBDE = Area of ΔCDE ... (iii)</p>\n<p>From (i), (ii), and (iii):</p>\n<div class=\"formula-block-iframe\">$ \\frac{AD}{DB} = \\frac{AE}{EC} $</div>\n\n<p><strong>(Hence proved)</strong> </p>\n<hr>\n<h3><strong>Question 34</strong></h3>\n<p><strong>Container: cylinder with hemispherical top. Height 10.5m, radius 3.5m. Find TSA and painting cost at Rs. 55/m² (excluding base)</strong></p>\n<p><strong>Solution:</strong><br>Radius r = 3.5 m</p>\n<p>Cylinder height h = 10.5 − 3.5 = 7 m (subtracting hemisphere radius)</p>\n<p><strong>Curved surface area of cylinder</strong> = 2πrh</p>\n<p>= $ 2 \\times \\frac{22}{7} \\times 3.5 \\times 7 = 154 $ m²</p>\n<p><strong>Curved surface area of hemisphere</strong> = 2πr²</p>\n<p>= $ 2 \\times \\frac{22}{7} \\times (3.5)^2 = 2 \\times \\frac{22}{7} \\times 12.25 = 77 $ m²</p>\n<p><strong>Total surface area (excluding base)</strong> = 154 + 77 = <strong>231 m²</strong></p>\n<p><strong>Cost of painting</strong> = 231 × 55 = <strong>Rs. 12,705</strong> </p>\n<p><strong>OR</strong></p>\n<p><strong>Solid iron pole: cylinder (h=220cm, d=24cm) topped by cylinder (h=60cm, r=8cm). Find mass (1cm³ = 8g)</strong></p>\n<p><strong>Solution:</strong><br><strong>Lower cylinder:</strong><br>r₁ = 12 cm, h₁ = 220 cm</p>\n<p>Volume = πr²h = $ 3.14 \\times 144 \\times 220 = 99,302.4 $ cm³</p>\n<p><strong>Upper cylinder:</strong><br>r₂ = 8 cm, h₂ = 60 cm</p>\n<p>Volume = $ 3.14 \\times 64 \\times 60 = 12,057.6 $ cm³</p>\n<p><strong>Total volume</strong> = 99,302.4 + 12,057.6 = 111,360 cm³</p>\n<p><strong>Mass</strong> = 111,360 × 8 = <strong>890,880 g = 890.88 kg</strong> </p>\n<hr>\n<h3><strong>Question 35</strong></h3>\n<p><strong>Median = 868, total frequency = 100. Find X and Y:</strong></p>\n<table>\n<thead>\n<tr>\n<th>Class</th>\n<th>800-820</th>\n<th>820-840</th>\n<th>840-860</th>\n<th>860-880</th>\n<th>880-900</th>\n<th>900-920</th>\n<th>920-940</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Frequency</td>\n<td>7</td>\n<td>14</td>\n<td>X</td>\n<td>25</td>\n<td>Y</td>\n<td>10</td>\n<td>5</td>\n</tr>\n</tbody></table>\n<p><strong>Solution:</strong><br>Total frequency: 7 + 14 + X + 25 + Y + 10 + 5 = 100</p>\n<p>X + Y = 39 ... (i)</p>\n<p>Median = 868 (lies in class 860-880)</p>\n<p>Median class: l = 860, f = 25, cf = 21 + X, h = 20</p>\n<p>Median formula: $ M = l + \\frac{\\frac{N}{2} - cf}{f} \\times h $</p>\n<div class=\"formula-block-iframe\">$ 868 = 860 + \\frac{50 - (21+X)}{25} \\times 20 $</div>\n\n<div class=\"formula-block-iframe\">$ 8 = \\frac{29-X}{25} \\times 20 $</div>\n\n<div class=\"formula-block-iframe\">$ 8 = \\frac{580-20X}{25} $</div>\n\n<p>200 = 580 − 20X</p>\n<p>20X = 380</p>\n<p><strong>X = 19</strong></p>\n<p>From (i): <strong>Y = 20</strong> </p>\n<p><strong>OR</strong></p>\n<p><strong>Mean = 42, total frequency = 100. Find x and y:</strong></p>\n<p><strong>Solution:</strong><br>Sum of frequencies: 7 + 10 + x + 13 + y + 10 + 14 + 9 = 100</p>\n<p>x + y = 37 ... (i)</p>\n<table>\n<thead>\n<tr>\n<th>Class</th>\n<th>Mid-value (xᵢ)</th>\n<th>fᵢ</th>\n<th>fᵢxᵢ</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>0-10</td>\n<td>5</td>\n<td>7</td>\n<td>35</td>\n</tr>\n<tr>\n<td>10-20</td>\n<td>15</td>\n<td>10</td>\n<td>150</td>\n</tr>\n<tr>\n<td>20-30</td>\n<td>25</td>\n<td>x</td>\n<td>25x</td>\n</tr>\n<tr>\n<td>30-40</td>\n<td>35</td>\n<td>13</td>\n<td>455</td>\n</tr>\n<tr>\n<td>40-50</td>\n<td>45</td>\n<td>y</td>\n<td>45y</td>\n</tr>\n<tr>\n<td>50-60</td>\n<td>55</td>\n<td>10</td>\n<td>550</td>\n</tr>\n<tr>\n<td>60-70</td>\n<td>65</td>\n<td>14</td>\n<td>910</td>\n</tr>\n<tr>\n<td>70-80</td>\n<td>75</td>\n<td>9</td>\n<td>675</td>\n</tr>\n</tbody></table>\n<p>Σfᵢxᵢ = 2775 + 25x + 45y</p>\n<p>Mean = $ \\frac{\\Sigma f_ix_i}{\\Sigma f_i} = \\frac{2775 + 25x + 45y}{100} = 42 $</p>\n<p>2775 + 25x + 45y = 4200</p>\n<p>25x + 45y = 1425</p>\n<p>5x + 9y = 285 ... (ii)</p>\n<p>From (i): x = 37 − y</p>\n<p>Substituting: 5(37 − y) + 9y = 285</p>\n<p>185 − 5y + 9y = 285</p>\n<p>4y = 100</p>\n<p><strong>y = 25, x = 12</strong> </p>\n<hr>\n<h2><strong>SECTION E</strong> (Case Studies - 4 marks each)</h2>\n<h3><strong>Question 36: Auditorium Seating (A.P. based)</strong></h3>\n<p><strong>Given:</strong> First row = 30 seats, each row increases by 10 seats</p>\n<p><strong>(I) Seats in 10th row:</strong> (1 mark)</p>\n<p>a = 30, d = 10, n = 10</p>\n<p>a₁₀ = a + 9d = 30 + 90 = <strong>120 seats</strong> </p>\n<p><strong>(II) Rows needed for 1500 seats:</strong> (2 marks)</p>\n<div class=\"formula-block-iframe\">$ S_n = \\frac{n}{2}[2a + (n-1)d] = 1500 $</div>\n\n<div class=\"formula-block-iframe\">$ \\frac{n}{2}[60 + 10n - 10] = 1500 $</div>\n\n<div class=\"formula-block-iframe\">$ n[50 + 10n] = 3000 $</div>\n\n<div class=\"formula-block-iframe\">$ 10n^2 + 50n - 3000 = 0 $</div>\n\n<div class=\"formula-block-iframe\">$ n^2 + 5n - 300 = 0 $</div>\n\n<div class=\"formula-block-iframe\">$ (n + 20)(n - 15) = 0 $</div>\n\n<p><strong>n = 15 rows</strong> </p>\n<p><strong>OR</strong></p>\n<p><strong>Seats remaining after 10 rows:</strong></p>\n<p>S₁₀ = $ \\frac{10}{2}[60 + 90] = 5 \\times 150 = 750 $</p>\n<p>Remaining = 1500 − 750 = <strong>750 seats</strong> </p>\n<p><strong>(III) Seats in middle row (17 rows total):</strong> (1 mark)</p>\n<p>Middle row = 9th row</p>\n<p>a₉ = 30 + 8(10) = <strong>110 seats</strong> </p>\n<hr>\n<h3><strong>Question 37: Coordinate Geometry</strong></h3>\n<p><strong>Given points:</strong> A(1,1), B(10,1), C(10,8), D(7,5), E(4,5), F(4,8), G(1,8)</p>\n<p><strong>(I) Length of CD:</strong> (1 mark)</p>\n<p>$ CD = \\sqrt{(10-7)^2 + (8-5)^2} = \\sqrt{9+9} = \\sqrt{18} = 3\\sqrt{2} $ <strong>units</strong> </p>\n<p><strong>(II) Midpoint of AC:</strong> (2 marks)</p>\n<p>Midpoint = $ \\left(\\frac{1+10}{2}, \\frac{1+8}{2}\\right) = (5.5, 4.5) $ </p>\n<p><strong>OR</strong></p>\n<p><strong>Point dividing GE in ratio 1:2:</strong></p>\n<p>Using section formula:</p>\n<div class=\"formula-block-iframe\">$ \\left(\\frac{1(4) + 2(1)}{3}, \\frac{1(5) + 2(8)}{3}\\right) = \\left(\\frac{6}{3}, \\frac{21}{3}\\right) = (2, 7) $</div> \n\n<p><strong>(III) Point on y-axis equidistant from C and E:</strong> (1 mark)</p>\n<p>Let point be (0, y)</p>\n<p>Distance from C(10,8): $ \\sqrt{100 + (y-8)^2} $</p>\n<p>Distance from E(4,5): $ \\sqrt{16 + (y-5)^2} $</p>\n<p>Equating and squaring:<br>100 + y² − 16y + 64 = 16 + y² − 10y + 25</p>\n<p>164 − 16y = 41 − 10y</p>\n<p>6y = 123</p>\n<p><strong>y = 20.5, Point = (0, 20.5)</strong> </p>\n<hr>\n<h3><strong>Question 38: Radio Tower (Trigonometry)</strong></h3>\n<p><strong>Given:</strong> Distance from O = 36 m, ∠ to top of B = 30°, ∠ to top of A = 45°</p>\n<p><strong>(I) Height of section B:</strong> (1 mark)</p>\n<p>In right triangle:</p>\n<div class=\"formula-block-iframe\">$ \\tan 30° = \\frac{\\text{Height of B}}{36} $</div>\n\n<div class=\"formula-block-iframe\">$ \\frac{1}{\\sqrt{3}} = \\frac{h_B}{36} $</div>\n\n<p><strong>Height of B = 12√3 m ≈ 20.78 m</strong> </p>\n<p><strong>(II) Wire length from O to top of A:</strong> (2 marks)</p>\n<div class=\"formula-block-iframe\">$ \\tan 45° = \\frac{\\text{Height of A}}{36} $</div>\n\n<p>Height of A = 36 m</p>\n<p>Wire length = $ \\sqrt{36^2 + 36^2} = 36\\sqrt{2} $ <strong>m ≈ 50.91 m</strong> </p>\n<p><strong>OR</strong></p>\n<p><strong>Wire length from O to top of B:</strong></p>\n<div class=\"formula-block-iframe\">$ \\cos 30° = \\frac{36}{\\text{Wire length}} $</div>\n\n<div class=\"formula-block-iframe\">$ \\frac{\\sqrt{3}}{2} = \\frac{36}{l} $</div>\n\n<p><strong>l = 24√3 m ≈ 41.57 m</strong> </p>\n<p><strong>(III) Height of section A:</strong> (1 mark)</p>\n<p>Height of section A = Total height − Height of B</p>\n<p>= 36 − 12√3 = 36 − 20.78 = <strong>15.22 m</strong> </p>\n<hr>\n
    `
  },

  // --- SECTION: RICH MEDIA SAMPLES ---
  {
    id: "media-samples",
    name: "Rich Media",
    title: "Rich Media Capabilities",
    category: "Media",
    author: "Design Team",
    imageUrl: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop",
    order: "2",
    lastUpdated: "2025-11-22",
    content: `
      <h1>Rich Media Support</h1>
      <p>This section demonstrates various media types supported natively by the framework, including our high-performance custom players.</p>
      <p>Explore the sub-pages to see video, audio, and embedded content in action.</p>
    `
  },
  {
    id: "video-demo",
    name: "Video Player",
    title: "Advanced Video Player",
    category: "Media",
    author: "Media Dev",
    imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop",
    parentId: "media-samples",
    order: "2.1",
    lastUpdated: "2025-11-22",
    content: `
      <h1>Video Playback</h1>
      <p>Our framework automatically upgrades standard video tags into fully responsive, accessible custom players with advanced controls.</p>
      
      <h3>Local/Streamed MP4</h3>
      <video controls width="100%" poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg">
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p><em>Big Buck Bunny - Open Source Movie</em></p>

      <h3>Another Sample</h3>
      <video controls width="100%" poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg">
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `
  },
  {
    id: "audio-demo",
    name: "Audio Player",
    title: "High Fidelity Audio",
    category: "Media",
    author: "Sound Engineer",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
    parentId: "media-samples",
    order: "2.2",
    lastUpdated: "2025-11-22",
    content: `
      <h1>Audio Integration</h1>
      <p>Listen to high-quality audio directly in the browser with our waveform-inspired player interface.</p>
      
      <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3>Jazz Collection</h3>
        <audio controls style="width: 100%;">
          <source src="https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav" type="audio/wav">
          Your browser does not support the audio element.
        </audio>
      </div>

      <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px;">
        <h3>Classic Synth</h3>
        <audio controls style="width: 100%;">
          <source src="https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav" type="audio/wav">
           Your browser does not support the audio element.
        </audio>
      </div>
    `
  },
  {
    id: "embeds-demo",
    name: "YouTube & Maps",
    title: "External Embeds",
    category: "Media",
    author: "Integrations",
    imageUrl: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop",
    parentId: "audio-demo", // Intentionally nested deep for breadcrumb testing
    order: "2.2.1",
    lastUpdated: "2025-11-22",
    content: `
      <h1>External Embeds</h1>
      <p>Embed content from third-party providers seamlessly.</p>
      
      <h2>YouTube</h2>
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <h2>Google Maps</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1622646636734!5m2!1sen!2sus" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    `
  },

  // --- SECTION: FORMATTING & CODE ---
  {
    id: "formatting",
    name: "Formatting",
    title: "Style Guide",
    category: "Documentation",
    author: "Tech Writer",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop",
    order: "3",
    lastUpdated: "2025-11-22",
    content: "<h1>Formatting & Styles</h1><p>Examples of code, math, and typography. Check the sub-pages for detailed examples.</p>"
  },
  {
    id: "code-math",
    name: "Code & Math",
    title: "Syntax & Formulae",
    category: "Documentation",
    author: "Dev Ops",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    parentId: "formatting",
    order: "3.1",
    lastUpdated: "2025-11-22",
    content: `
      <h1>Code Syntax Highlighting</h1>
      <p>Automatic language detection and highlighting.</p>
      
      <h3>JavaScript</h3>
      <pre><code>function helloWorld() {
  console.log("Hello, ARvia!");
  return true;
}</code></pre>

      <h3>Python</h3>
      <pre><code>def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)</code></pre>

      <h1>Mathematical Formulas (LaTeX)</h1>
      <p>Rendered using MathJax.</p>
      <p>Inline math: The mass-energy equivalence is $E = mc^2$.</p>
      <p>Display math:</p>
      $$ \\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi} $$
    `
  },
  {
    id: "tables-quotes",
    name: "Tables & Quotes",
    title: "Data Presentation",
    category: "Documentation",
    author: "Analyst",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    parentId: "formatting",
    order: "3.2",
    lastUpdated: "2025-11-22",
    content: `
      <h1>Data Tables</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Status</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Premium Plan</td>
            <td><span style="color:#4ade80">Active</span></td>
            <td>$99.00</td>
          </tr>
          <tr>
            <td>002</td>
            <td>Basic Plan</td>
            <td><span style="color:#facc15">Paused</span></td>
            <td>$29.00</td>
          </tr>
          <tr>
            <td>003</td>
            <td>Enterprise</td>
            <td><span style="color:#f97316">Contact</span></td>
            <td>Custom</td>
          </tr>
        </tbody>
      </table>

      <h1>Blockquotes</h1>
      <blockquote>
        "The web is more a social creation than a technical one. I designed it for a social effect - to help people work together - and not as a technical toy."
        <footer>— Tim Berners-Lee</footer>
      </blockquote>
    `
  },

  // --- SECTION: LANGUAGE SUPPORT (Hindi Test) ---
  {
    id: "hindi-test",
    name: "भाषा परीक्षण (Language)",
    title: "Multilingual Support",
    category: "Language",
    author: "Localization Team",
    imageUrl: "https://images.unsplash.com/photo-1523726491678-bf852e717f63?q=80&w=1000&auto=format&fit=crop",
    order: "4",
    lastUpdated: "2025-11-22",
    content: "<h1>बहुभाषी समर्थन (Multilingual)</h1><p>Testing non-ASCII IDs and content. Click the sub-page to see Hindi content.</p>"
  },
  {
    id: "मेरी-कहानी", // Hindi ID
    name: "मेरी कहानी (Story)",
    title: "My Story in Hindi",
    category: "Language",
    author: "अल्फा लैब्स",
    imageUrl: "https://images.unsplash.com/photo-1546188994-07c34f295f52?q=80&w=1000&auto=format&fit=crop",
    parentId: "hindi-test",
    order: "4.1",
    lastUpdated: "2025-11-22",
    content: `
      <h1>नमस्ते दुनिया! (Hello World)</h1>
      <p>यह पृष्ठ हिंदी भाषा के समर्थन का परीक्षण करने के लिए है। (This page is to test Hindi language support.)</p>
      <p>यदि आप इसे पढ़ सकते हैं, तो यूनिकोड एन्कोडिंग सही ढंग से काम कर रही है।</p>
      <ul>
        <li>बिंदु १</li>
        <li>बिंदु २</li>
        <li>बिंदु ३</li>
      </ul>
      <p>URL हैश की जाँच करें: <code>#मेरी-कहानी</code></p>
    `
  },

  // --- SECTION: REFERENCES ---
  {
    id: "references",
    name: "References",
    title: "External Citations",
    category: "System",
    author: "System",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop",
    order: "99",
    lastUpdated: "2025-11-22",
    isDefault: false,
    content: "<h1>References</h1><p>Auto-generated from links found on the site.</p>"
  }
];

// --- LOAD LOCAL STORAGE OVERRIDES ---
try {
    const savedConfig = localStorage.getItem('arvia_saved_config');
    if (savedConfig) {
        console.log("Loading custom configuration from LocalStorage...");
        const parsed = JSON.parse(savedConfig);
        
        if (parsed.siteConfig) siteConfig = parsed.siteConfig;
        if (parsed.relatedSites) relatedSites = parsed.relatedSites;
        if (parsed.adsConfig) adsConfig = parsed.adsConfig;
        if (parsed.customLogs) customLogs = parsed.customLogs;
        
        if (parsed.pagesDataIframe) {
            pagesDataIframe = parsed.pagesDataIframe;
            // Ensure editor exists and enforce locked password even in local storage overrides
            const editorPage = pagesDataIframe.find(p => p.id === 'editor');
            if (!editorPage) {
                pagesDataIframe.push({
                    id: "editor",
                    name: "Site Editor",
                    title: "Configuration Editor",
                    category: "System",
                    author: "Admin",
                    order: "999",
                    password: "NzAkYkBsQCNwbEA=", 
                    content: `<div id="editor-root" class="editor-loading">Loading Editor Interface...</div>`
                });
            } else {
                // Force Update Password to ensure security is active
                editorPage.password = "NzAkYkBsQCNwbEA=";
            }
        }
    }
} catch (e) {
    console.error("Error loading saved config:", e);
}


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
        document.getElementById('pptEraser').onclick = (e) => toggleTool('eraser', e.currentTarget);
        document.getElementById('pptClear').onclick = clearCanvas;
        
        // Toolbar visibility logic
        const keepAwake = () => showToolbar();
        window.addEventListener('mousemove', keepAwake);
        window.addEventListener('touchstart', keepAwake, { passive: true });
        window.addEventListener('click', (e) => {
            if (!e.target.closest('.ppt-btn') && !e.target.closest('.ppt-toolbar')) {
                keepAwake();
            }
        });
    }

    // Keyboard Shortcuts
    document.addEventListener('keydown', handleKeyNav);
}

function startPresentation() {
    initPresentationMode();
    
    document.body.classList.add('ppt-mode-active');
    pptState.isActive = true;

    injectCanvas();
    updatePPTTitle();
    showToolbar();

    const contentArea = document.getElementById('actualPageContentIframe');
    if (contentArea) {
        if (pptState.mutationObserver) pptState.mutationObserver.disconnect();
        
        pptState.mutationObserver = new MutationObserver((mutations) => {
            if (!document.getElementById('pptCanvas')) {
                injectCanvas();
                updatePPTTitle();
            } else {
                resizeCanvas();
            }
        });
        
        pptState.mutationObserver.observe(contentArea, { childList: true, subtree: true });
    }
}

function exitPresentation() {
    document.body.classList.remove('ppt-mode-active');
    pptState.isActive = false;
    
    const canvas = document.getElementById('pptCanvas');
    if (canvas) canvas.remove();
    
    if (pptState.resizeObserver) pptState.resizeObserver.disconnect();
    if (pptState.mutationObserver) pptState.mutationObserver.disconnect();

    // Reset Tool State
    pptState.tool = 'none';
    pptState.isDrawing = false;
    document.querySelectorAll('.ppt-btn').forEach(b => b.classList.remove('active'));
}

function injectCanvas() {
    const contentArea = document.getElementById('actualPageContentIframe');
    if (!contentArea) return;

    const old = document.getElementById('pptCanvas');
    if (old) old.remove();

    const canvas = document.createElement('canvas');
    canvas.id = 'pptCanvas';
    canvas.className = 'ppt-canvas';
    
    // Restore active tool class if tool is selected
    if (pptState.tool === 'pen' || pptState.tool === 'eraser') {
        canvas.classList.add('drawing-enabled');
    }
    
    contentArea.style.position = 'relative'; 
    contentArea.appendChild(canvas);

    pptState.canvas = canvas;
    pptState.ctx = canvas.getContext('2d');

    setupPointerEvents();
    
    if (pptState.resizeObserver) pptState.resizeObserver.disconnect();
    pptState.resizeObserver = new ResizeObserver(() => resizeCanvas());
    pptState.resizeObserver.observe(contentArea);
    
    requestAnimationFrame(resizeCanvas);
}

function resizeCanvas() {
    const canvas = document.getElementById('pptCanvas');
    const contentArea = document.getElementById('actualPageContentIframe');
    if (!canvas || !contentArea) return;

    const width = contentArea.scrollWidth;
    const height = contentArea.scrollHeight;
    
    // Only resize if dimensions actually changed to avoid clearing canvas unnecessarily
    if (canvas.width !== width || canvas.height !== height) {
        // Save current ink
        const imgData = canvas.width > 0 && canvas.height > 0 ? 
                        pptState.ctx.getImageData(0,0,canvas.width, canvas.height) : null;
        
        canvas.width = width;
        canvas.height = height;

        // Restore ink
        if (imgData) pptState.ctx.putImageData(imgData, 0, 0);

        // Restore context settings
        pptState.ctx.lineCap = 'round';
        pptState.ctx.lineJoin = 'round';
    }
}

function updatePPTTitle() {
    const titleLabel = document.getElementById('pptPageName');
    if (typeof pageMap !== 'undefined' && titleLabel) {
        const p = pageMap.get(currentPageIdIframe);
        if (p) titleLabel.innerText = p.name;
    }
}

function showToolbar() {
    const toolbar = document.getElementById('pptToolbar');
    if (!toolbar) return;
    
    toolbar.classList.remove('hidden');
    if (pptState.toolbarTimeout) clearTimeout(pptState.toolbarTimeout);
    
    pptState.toolbarTimeout = setTimeout(() => {
        if (pptState.isActive && !pptState.isDrawing) {
            toolbar.classList.add('hidden');
        }
    }, 3000);
}

// --- NAVIGATION ---

function navigatePage(dir) {
    if (typeof pagesDataIframe === 'undefined') return;
    
    const currentIndex = pagesDataIframe.findIndex(p => p.id === currentPageIdIframe);
    if (currentIndex === -1) return;

    const newIndex = currentIndex + dir;
    if (newIndex >= 0 && newIndex < pagesDataIframe.length) {
        const targetPage = pagesDataIframe[newIndex];
        if (displayPageContentIframe) {
            displayPageContentIframe(targetPage.id);
            const main = document.getElementById('mainContentIframe');
            if(main) main.scrollTop = 0;
        }
    }
}

function handleKeyNav(e) {
    if (!pptState.isActive) return;
    
    if (e.ctrlKey && ['ArrowRight', 'PageDown'].includes(e.code)) {
        e.preventDefault(); navigatePage(1);
    }
    else if (e.ctrlKey && ['ArrowLeft', 'PageUp'].includes(e.code)) {
        e.preventDefault(); navigatePage(-1);
    }
    else if (e.code === 'Escape') {
        exitPresentation();
    }
}

// --- DRAWING LOGIC (Pointer Events) ---

function toggleTool(tool, btn) {
    // 1. Clear ALL visual active states
    document.querySelectorAll('.ppt-btn').forEach(b => b.classList.remove('active'));

    const canvas = pptState.canvas;

    // 2. Logic: If clicking the SAME tool, turn it OFF. If different, turn ON.
    if (pptState.tool === tool) {
        // Toggle Off
        pptState.tool = 'none';
        if (canvas) canvas.classList.remove('drawing-enabled');
    } else {
        // Toggle On
        pptState.tool = tool;
        btn.classList.add('active'); // Visually activate the clicked button
        if (canvas) canvas.classList.add('drawing-enabled');
    }
}

function clearCanvas() {
    if (pptState.ctx && pptState.canvas) {
        pptState.ctx.clearRect(0, 0, pptState.canvas.width, pptState.canvas.height);
    }
}

function setupPointerEvents() {
    const c = pptState.canvas;
    if (!c) return;

    // --- A. Pointer Events (For Drawing) ---
    // Pointer Events unify Mouse, Touch, and Pen. We use these for the actual drawing logic.
    
    const handleDown = (e) => {
        if (pptState.tool === 'none') return;
        if (!e.isPrimary) return; // Ignore multi-touch gestures for drawing
        
        pptState.isDrawing = true;
        c.setPointerCapture(e.pointerId); // Critical: locks target to this element
        
        const rect = c.getBoundingClientRect();
        pptState.lastX = e.clientX - rect.left;
        pptState.lastY = e.clientY - rect.top;
        
        // Handle Pressure
        let pressure = e.pressure;
        if (e.pointerType === 'touch' && pressure === 0) pressure = 0.5; // Default for basic touch
        
        drawStroke(pptState.lastX, pptState.lastY, pptState.lastX, pptState.lastY, pressure);
    };

    const handleMove = (e) => {
        if (!pptState.isDrawing) return;
        
        const rect = c.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        let pressure = e.pressure;
        if (e.pointerType === 'touch' && pressure === 0) pressure = 0.5;

        drawStroke(pptState.lastX, pptState.lastY, x, y, pressure);
        
        pptState.lastX = x;
        pptState.lastY = y;
        
        showToolbar(); 
    };

    const handleUp = (e) => {
        pptState.isDrawing = false;
        if (c.hasPointerCapture && c.hasPointerCapture(e.pointerId)) {
            c.releasePointerCapture(e.pointerId);
        }
    };

    c.addEventListener('pointerdown', handleDown);
    c.addEventListener('pointermove', handleMove);
    c.addEventListener('pointerup', handleUp);
    c.addEventListener('pointercancel', handleUp);


    // --- B. Touch Events (For Scroll Blocking) ---
    // We attach these specifically to STOP the browser from scrolling/zooming when trying to draw.
    // We do NOT draw here to avoid double-events.
    
    const blockTouch = (e) => {
        if (pptState.tool !== 'none') {
            // This is the magic line that stops the page from moving
            e.preventDefault(); 
        }
    };

    // 'passive: false' allows us to call preventDefault()
    c.addEventListener('touchstart', blockTouch, { passive: false });
    c.addEventListener('touchmove', blockTouch, { passive: false });
}

function drawStroke(x1, y1, x2, y2, pressure) {
    const ctx = pptState.ctx;
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2 + 0.01, y2); // +0.01 ensures dots render on single clicks
    
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (pptState.tool === 'pen') {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = pptState.color;
        
        // Dynamic Width based on Pressure
        let width = 3;
        if (pressure > 0) {
            width = pressure * 10;
            if (width < 2) width = 2; // Min width
        }
        ctx.lineWidth = width;
        
    } else {
        // Eraser
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = 40;
    }

    ctx.stroke();
}


/* --- ai.js --- */
! function() {
  let e = document
    .createElement("style");
  e.textContent =
    `#aiChatBtn{font-size:20px;color:#c9d1d9;background:none;border:none;cursor:pointer;padding:.5rem;transition:all .4s cubic-bezier(.34,1.56,.64,1);display:flex;align-items:center;justify-content:center;border-radius:50%;width:56px;height:56px;position:relative}#aiChatBtn img{width:85%;height:85%;object-fit:contain;transition:all .4s cubic-bezier(.34,1.56,.64,1);filter:drop-shadow(0 2px 8px rgba(249,115,22,.3))}#aiChatBtn:hover img{transform:scale(1.15) rotate(5deg);filter:drop-shadow(0 4px 16px rgba(249,115,22,.5))}#aiChatBtn:active img{transform:scale(.9) rotate(-5deg)}#aiChatContainer{position:fixed;z-index:2001;background:#0d1117;border:1px solid #21262d;box-shadow:0 -10px 60px rgba(0,0,0,.7),0 -2px 20px rgba(249,115,22,.1),inset 0 1px 0 rgba(255,255,255,.03);display:none;flex-direction:column;opacity:0;transition:all .6s cubic-bezier(.34,1.56,.64,1);backdrop-filter:blur(20px);overflow:hidden}#aiChatContainer::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(249,115,22,.3) 30%,rgba(249,115,22,.3) 70%,transparent);pointer-events:none;z-index:2}#aiChatContainer::after{content:'';position:absolute;top:1px;left:0;right:0;height:40px;background:linear-gradient(180deg,rgba(22,27,34,.95) 0%,rgba(22,27,34,.7) 50%,transparent 100%);pointer-events:none;z-index:1}#aiChatContainer.show{display:flex;opacity:1}@media(max-width:768px){#aiChatContainer{bottom:-100%;left:0;width:100%;height:60%;border-radius:24px 24px 0 0;border-bottom:none}#aiChatContainer.show{bottom:0}}@media(min-width:769px){#aiChatContainer{bottom:-100%;right:1.5rem;width:440px;height:600px;border-radius:20px}#aiChatContainer.show{bottom:1.5rem}}#aiChatMessages{flex:1;overflow-y:auto;padding:3rem 1.5rem 1.5rem;display:flex;flex-direction:column;gap:1.2rem;background:#0d1117;position:relative;scroll-behavior:auto}#aiChatMessages::-webkit-scrollbar{width:6px}#aiChatMessages::-webkit-scrollbar-track{background:transparent}#aiChatMessages::-webkit-scrollbar-thumb{background:#30363d;border-radius:6px;transition:background .3s}#aiChatMessages::-webkit-scrollbar-thumb:hover{background:#484f58}.scroll-anchor{height:1px;width:100%;position:absolute;bottom:0}.ai-msg{padding:1rem 1.25rem;border-radius:16px;max-width:100%;word-wrap:break-word;animation:slideUp .6s cubic-bezier(.34,1.56,.64,1);line-height:1.65;font-size:.9rem;transition:all .35s cubic-bezier(.4,0,.2,1);position:relative}.user-msg{background:linear-gradient(135deg,#161b22 0%,#1c2128 100%);color:#c9d1d9;width:82%;align-self:flex-end;margin-left:auto;border:1px solid #21262d;box-shadow:0 4px 12px rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.05);border-radius:18px 18px 4px 18px}.user-msg:hover{background:linear-gradient(135deg,#1c2128 0%,#21262d 100%);border-color:#30363d;transform:translateX(-3px) translateY(-1px);box-shadow:0 6px 20px rgba(0,0,0,.35)}.bot-msg{background:transparent;color:#c9d1d9;width:100%;padding-left:1.5rem;border-left:3px solid transparent;border-radius:12px;transition:all .35s;cursor:pointer}.bot-msg::before{content:'';position:absolute;left:-3px;top:0;bottom:0;width:3px;background:linear-gradient(180deg,#f97316,#ea580c);border-radius:2px;opacity:0;transition:opacity .35s}.bot-msg:hover{color:#fff;transform:translateX(4px)}.bot-msg:hover::before{opacity:1}.bot-msg h1,.bot-msg h2,.bot-msg h3,.bot-msg h4,.bot-msg h5,.bot-msg h6{color:#fb923c;margin-top:1.2rem;margin-bottom:.6rem;font-weight:600;line-height:1.3}.bot-msg h1{font-size:1.5rem;border-bottom:2px solid rgba(249,115,22,.2);padding-bottom:.4rem}.bot-msg h2{font-size:1.25rem}.bot-msg h3{font-size:1.1rem}.bot-msg h4{font-size:1rem}.bot-msg h5{font-size:0.95rem}.bot-msg h6{font-size:0.9rem}.bot-msg p{margin:.6rem 0;line-height:1.75}.bot-msg code{background:#161b22;color:#fb923c;padding:.25rem .5rem;border-radius:6px;font-size:.85rem;font-family:ui-monospace,monospace;border:1px solid #21262d;box-shadow:inset 0 1px 3px rgba(0,0,0,.2)}.bot-msg pre{background:#0d1117;border:1px solid #21262d;border-radius:12px;padding:0;margin:1rem 0;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.03);position:relative;max-height:400px}.bot-msg pre .code-header{display:flex;justify-content:space-between;align-items:center;padding:.4rem .75rem;background:#161b22;border-bottom:1px solid #21262d;min-height:32px}.bot-msg pre .code-lang{color:#8b949e;font-size:.7rem;font-family:ui-monospace,monospace;text-transform:uppercase;letter-spacing:.5px}.bot-msg pre .code-copy{background:transparent;border:1px solid #21262d;color:#8b949e;padding:.2rem .5rem;border-radius:4px;cursor:pointer;font-size:.65rem;transition:all .3s;white-space:nowrap;display:inline-flex;align-items:center;gap:.25rem;min-width:55px;justify-content:center}.bot-msg pre .code-copy:hover{background:#0d1117;color:#c9d1d9;border-color:#30363d}.bot-msg pre .code-copy i{font-size:.65rem}.bot-msg pre code{background:transparent;border:none;padding:1.25rem;display:block;color:#c9d1d9;font-size:.85rem;overflow-x:auto;max-width:100%}.bot-msg pre code::-webkit-scrollbar{height:8px}.bot-msg pre code::-webkit-scrollbar-track{background:#161b22}.bot-msg pre code::-webkit-scrollbar-thumb{background:#30363d;border-radius:4px}.bot-msg pre code::-webkit-scrollbar-thumb:hover{background:#484f58}.table-wrapper{overflow-x:auto;margin:1rem 0;border-radius:8px;border:1px solid #21262d;max-height:400px;overflow-y:auto}.table-wrapper::-webkit-scrollbar{width:8px;height:8px}.table-wrapper::-webkit-scrollbar-track{background:#161b22}.table-wrapper::-webkit-scrollbar-thumb{background:#30363d;border-radius:4px}.table-wrapper::-webkit-scrollbar-thumb:hover{background:#484f58}.bot-msg table{width:100%;border-collapse:collapse;font-size:.85rem;margin:0}.bot-msg th,.bot-msg td{border:1px solid #21262d;padding:.65rem;text-align:left;white-space:nowrap}.bot-msg th{background:linear-gradient(135deg,#161b22,#1c2128);color:#fb923c;font-weight:600;position:sticky;top:0;z-index:1}.bot-msg ul,.bot-msg ol{margin:.6rem 0;padding-left:1.75rem}.bot-msg li{margin:.4rem 0;line-height:1.7}.bot-msg blockquote{border-left:4px solid #f97316;padding:.75rem 1.25rem;margin:1rem 0;color:#8b949e;font-style:italic;background:linear-gradient(90deg,rgba(249,115,22,.08),transparent);border-radius:0 12px 12px 0;box-shadow:inset 4px 0 8px rgba(249,115,22,.1)}.bot-msg strong{color:#fb923c;font-weight:600}.bot-msg em{color:#a8b3c1;font-style:italic}.bot-msg a{color:#f97316;text-decoration:underline;transition:all .25s}.bot-msg a:hover{color:#fb923c;text-decoration:none}.bot-msg .katex{color:#c9d1d9;font-size:1rem}.bot-msg .katex-display{color:#c9d1d9;font-size:1rem;overflow-x:auto;max-width:100%;display:block;padding:1rem;background:#161b22;border-radius:8px;margin:1rem 0;border:1px solid #21262d;max-height:300px;overflow-y:auto}.bot-msg .katex-display::-webkit-scrollbar{width:8px;height:8px}.bot-msg .katex-display::-webkit-scrollbar-track{background:#0d1117}.bot-msg .katex-display::-webkit-scrollbar-thumb{background:#30363d;border-radius:4px}.bot-msg hr{border:none;border-top:1px solid rgba(249,115,22,.2);margin:1.25rem 0;box-shadow:0 1px 0 rgba(0,0,0,.3)}.bot-msg img{max-width:100%;height:auto;border-radius:12px;margin:1rem 0;box-shadow:0 4px 12px rgba(0,0,0,.3);border:1px solid #21262d;background:linear-gradient(90deg,#161b22 0%,#1c2128 50%,#161b22 100%);background-size:200% 100%;transition:opacity .3s}.bot-msg img.loading{animation:shimmer 1.5s infinite linear}.bot-msg img.loaded{animation:none}@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}.skeleton-box{background:linear-gradient(90deg,#161b22 0%,#1c2128 50%,#161b22 100%);background-size:200% 100%;animation:shimmer 1.5s infinite linear;border-radius:8px}.bot-msg-actions{display:none;gap:.5rem;margin-top:.75rem;padding-top:.75rem;border-top:1px solid #21262d;flex-wrap:wrap}.bot-msg.active .bot-msg-actions{display:flex}.bot-msg-action-btn{background:linear-gradient(135deg,#161b22,#1c2128);color:#8b949e;border:1px solid #21262d;padding:.5rem .85rem;border-radius:8px;cursor:pointer;font-size:.8rem;transition:all .3s;display:flex;align-items:center;gap:.4rem;white-space:nowrap}.bot-msg-action-btn:hover{background:linear-gradient(135deg,#1c2128,#21262d);color:#c9d1d9;border-color:#30363d;transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.3)}.bot-msg-action-btn:active{transform:translateY(0)}.bot-msg-action-btn i{font-size:.9rem}.sources-dropdown{display:none;margin-top:.75rem;padding:1rem;background:#161b22;border:1px solid #21262d;border-radius:12px;max-height:250px;overflow-y:auto;animation:slideDown .3s cubic-bezier(.34,1.56,.64,1)}.sources-dropdown.show{display:block}.sources-dropdown::-webkit-scrollbar{width:6px}.sources-dropdown::-webkit-scrollbar-track{background:#0d1117}.sources-dropdown::-webkit-scrollbar-thumb{background:#30363d;border-radius:4px}.sources-dropdown::-webkit-scrollbar-thumb:hover{background:#484f58}.sources-dropdown-title{color:#fb923c;font-size:.9rem;font-weight:600;margin-bottom:.75rem;display:flex;align-items:center;gap:.5rem}.sources-dropdown-title i{font-size:.85rem}.source-item{padding:.65rem .85rem;margin:.4rem 0;background:#0d1117;border-left:3px solid #f97316;border-radius:6px;font-size:.8rem;line-height:1.5;color:#c9d1d9;transition:all .3s}.source-item:hover{background:#161b22;border-left-width:4px;transform:translateX(2px)}.source-item .source-text{color:#8b949e}@keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@media(max-width:768px){.bot-msg-action-btn{padding:.5rem;min-width:38px;justify-content:center}.bot-msg-action-btn .btn-text{display:none}}@keyframes slideUp{from{opacity:0;transform:translateY(25px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}#aiChatInputArea{display:flex;align-items:center;padding:1.25rem;background:linear-gradient(135deg,#161b22,#1c2128);border-top:1px solid #21262d;box-shadow:0 -6px 20px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.03);border-radius:20px;margin:1rem;gap:.5rem;transition:all .35s cubic-bezier(.4,0,.2,1)}#aiChatInputArea:focus-within{box-shadow:0 -8px 30px rgba(249,115,22,.15),0 0 0 2px rgba(249,115,22,.2),inset 0 1px 0 rgba(255,255,255,.05);transform:translateY(-2px)}#aiChatInput{flex:1;background:transparent;border:none;color:#c9d1d9;padding:.95rem 1.25rem;font-size:.95rem;font-family:inherit;outline:none;transition:all .3s}#aiChatInput::placeholder{color:#6e7681;transition:color .3s}#aiChatInput:focus::placeholder{color:#8b949e}#aiChatSend{background:linear-gradient(135deg,#484f58,#30363d);color:#6e7681;border:none;padding:0;width:40px;height:40px;border-radius:50%;cursor:pointer;transition:all .35s cubic-bezier(.34,1.56,.64,1);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,.2);position:relative}#aiChatSend.active{background:linear-gradient(135deg,#f97316,#ea580c);color:#fff;box-shadow:0 4px 16px rgba(249,115,22,.4);cursor:pointer}#aiChatSend.active:hover{transform:translateY(-3px) scale(1.05);box-shadow:0 8px 24px rgba(249,115,22,.5)}#aiChatSend.active:active{transform:translateY(-1px) scale(1);box-shadow:0 4px 12px rgba(249,115,22,.3)}#aiChatSend:disabled{opacity:.4;cursor:not-allowed;transform:none;background:linear-gradient(135deg,#30363d,#21262d)}#aiChatSend i{transition:transform .35s cubic-bezier(.34,1.56,.64,1)}#aiChatSend.active i{transform:translateY(-1px)}.thinking-indicator{display:flex;align-items:center;gap:1rem;padding:1rem 1.25rem;animation:slideUp .6s cubic-bezier(.34,1.56,.64,1);background:transparent;border-radius:16px}.thinking-logo-wrapper{position:relative;width:45px;height:45px;flex-shrink:0}.thinking-logo{width:100%;height:100%;object-fit:contain;animation:rotateAndPulse 2s linear infinite;filter:drop-shadow(0 0 8px rgba(249,115,22,.5))}.thinking-glow{position:absolute;top:50%;left:50%;width:100%;height:100%;border-radius:50%;background:radial-gradient(circle,rgba(249,115,22,.3),transparent);transform:translate(-50%,-50%);animation:pulseGlow 2s ease-in-out infinite;pointer-events:none}@keyframes rotateAndPulse{0%{transform:rotate(0deg) scale(1)}25%{transform:rotate(90deg) scale(1.1)}50%{transform:rotate(180deg) scale(1)}75%{transform:rotate(270deg) scale(1.1)}100%{transform:rotate(360deg) scale(1)}}@keyframes pulseGlow{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.3}50%{transform:translate(-50%,-50%) scale(1.8);opacity:0}}.thinking-text{color:#8b949e;font-size:.9rem;animation:fadeInOut 1.5s ease-in-out infinite}.thinking-status{color:#fb923c;font-weight:500}@keyframes fadeInOut{0%,100%{opacity:.6}50%{opacity:1}}.initial-screen{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;text-align:center;padding:2rem;opacity:.8}.initial-screen-title{font-size:1rem;font-weight:700;color:#fb923c;margin-bottom:.5rem;background:linear-gradient(135deg,#f97316,#fb923c);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.initial-screen-subtitle{font-size:.95rem;color:#8b949e;line-height:1.6;max-width:320px}.resize-handle{position:absolute;top:0;left:0;right:0;height:8px;cursor:ns-resize;z-index:10;background:transparent;transition:background .3s}.resize-handle:hover{background:linear-gradient(180deg,rgba(249,115,22,.2),transparent)}`,
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
