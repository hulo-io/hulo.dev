import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as a,i as t,o as h}from"./app-C9sMTB6v.js";const e={};function n(l,i){return h(),a("div",null,i[0]||(i[0]=[t(`<h2 id="pub" tabindex="-1"><a class="header-anchor" href="#pub"><span>pub</span></a></h2><p>pub 关键字用于标注表达式/语句是否可导出。默认情况下，没有pub标记的表达式/语句是无法供外部访问的。</p><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">pub</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> var</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> PI</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3.14</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">pub</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> sayHello</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    echo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello World&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="import" tabindex="-1"><a class="header-anchor" href="#import"><span>import</span></a></h2><p>对于被 <code>pub</code> 标记的表达式/语句，便可以用 import 关键字在外部引入，且在声明的时候省略 <code>.hl</code> 扩展文件名。</p><h3 id="直接执行模块-不导入" tabindex="-1"><a class="header-anchor" href="#直接执行模块-不导入"><span>直接执行模块（不导入）</span></a></h3><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>适用于只想执行模块中的副作用（比如注册全局变量、初始化逻辑）</p></div><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;./setup&quot;</span></span></code></pre></div><h3 id="命名导入-named-import" tabindex="-1"><a class="header-anchor" href="#命名导入-named-import"><span>命名导入（Named Import）</span></a></h3><div class="hint-container important"><p class="hint-container-title">Important</p><ul><li>只能导入被 <code>pub</code> 关键字导出的成员</li><li>必须使用模块原本的名称</li><li>支持解构风格导入</li></ul></div><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">funcA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">funcB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;./myModule&quot;</span></span></code></pre></div><p>🔹 重命名导入（别名）</p><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">funA</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> as</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> A</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;./myModule&quot;</span></span></code></pre></div><p>🔹 导入所有导出</p><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 不带别名</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;./myModule&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">funcA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">funcB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 带别名</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> myModule</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;./myModule&quot;</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">myModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">funcA</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">myModule</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">funcB</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span></code></pre></div>`,15)]))}const r=s(e,[["render",n],["__file","pkg.html.vue"]]),o=JSON.parse('{"path":"/grammar/pkg.html","title":"Package","lang":"en-US","frontmatter":{"title":"Package","icon":"fas fa-box","date":"2025-04-13T00:00:00.000Z","category":"grammar","tag":["pkg"],"license":"MIT","description":"pub pub 关键字用于标注表达式/语句是否可导出。默认情况下，没有pub标记的表达式/语句是无法供外部访问的。 import 对于被 pub 标记的表达式/语句，便可以用 import 关键字在外部引入，且在声明的时候省略 .hl 扩展文件名。 直接执行模块（不导入） Tips 适用于只想执行模块中的副作用（比如注册全局变量、初始化逻辑） 命名导入...","head":[["meta",{"property":"og:url","content":"https://github.com/hulo-lang/docs/grammar/pkg.html"}],["meta",{"property":"og:site_name","content":"Hulo"}],["meta",{"property":"og:title","content":"Package"}],["meta",{"property":"og:description","content":"pub pub 关键字用于标注表达式/语句是否可导出。默认情况下，没有pub标记的表达式/语句是无法供外部访问的。 import 对于被 pub 标记的表达式/语句，便可以用 import 关键字在外部引入，且在声明的时候省略 .hl 扩展文件名。 直接执行模块（不导入） Tips 适用于只想执行模块中的副作用（比如注册全局变量、初始化逻辑） 命名导入..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-04-19T17:17:06.000Z"}],["meta",{"property":"article:tag","content":"pkg"}],["meta",{"property":"article:published_time","content":"2025-04-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-19T17:17:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Package\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-04-13T00:00:00.000Z\\",\\"dateModified\\":\\"2025-04-19T17:17:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"The Hulo Authors\\",\\"url\\":\\"https://github.com/hulo-lang\\"}]}"]]},"git":{"createdTime":1742723896000,"updatedTime":1745083026000,"contributors":[{"name":"ansurfen","username":"ansurfen","email":"axf593161@gmail.com","commits":7,"url":"https://github.com/ansurfen"}]},"readingTime":{"minutes":0.86,"words":258},"filePathRelative":"grammar/pkg.md","localizedDate":"April 13, 2025","autoDesc":true}');export{r as comp,o as data};
