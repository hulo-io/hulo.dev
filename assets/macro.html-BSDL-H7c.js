import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as a,j as n,o as e}from"./app-CoN1yBJo.js";const l={};function t(h,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h2 id="不带参数的" tabindex="-1"><a class="header-anchor" href="#不带参数的"><span>不带参数的</span></a></h2><div class="language-hulo line-numbers-mode" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> extend_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: Class&lt;User&gt;) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    echo </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.name </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// User</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    echo \${self.fields.len} </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 0</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    $self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.fields[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">extend_user</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="带参数的" tabindex="-1"><a class="header-anchor" href="#带参数的"><span>带参数的</span></a></h2><div class="language-hulo line-numbers-mode" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> extend_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">required</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> _build(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: Class&lt;User&gt;) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        echo </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">$self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.name </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// User</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        echo \${self.fields.len} </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 0</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        $self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.fields.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add(field(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">extend_user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> User</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数注解" tabindex="-1"><a class="header-anchor" href="#函数注解"><span>函数注解</span></a></h2><div class="language-hulo line-numbers-mode" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: () -&gt; void | Function, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">funcName</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    echo(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;executing </span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">$funcName</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    self(</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> sayHello</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    echo(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello World&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类注解" tabindex="-1"><a class="header-anchor" href="#类注解"><span>类注解</span></a></h2><h2 id="方法注解" tabindex="-1"><a class="header-anchor" href="#方法注解"><span>方法注解</span></a></h2><h2 id="字段注解" tabindex="-1"><a class="header-anchor" href="#字段注解"><span>字段注解</span></a></h2><h2 id="注解执行流程" tabindex="-1"><a class="header-anchor" href="#注解执行流程"><span>注解执行流程</span></a></h2><h2 id="注解包装" tabindex="-1"><a class="header-anchor" href="#注解包装"><span>注解包装</span></a></h2>`,11)]))}const r=i(l,[["render",t],["__file","macro.html.vue"]]),d=JSON.parse('{"path":"/handbook/advanced/macro.html","title":"Macro","lang":"en-US","frontmatter":{"title":"Macro","icon":"fas fa-puzzle-piece","description":"不带参数的 带参数的 函数注解 类注解 方法注解 字段注解 注解执行流程 注解包装","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/hulo.dev/handbook/advanced/macro.html"}],["meta",{"property":"og:site_name","content":"Docs Demo"}],["meta",{"property":"og:title","content":"Macro"}],["meta",{"property":"og:description","content":"不带参数的 带参数的 函数注解 类注解 方法注解 字段注解 注解执行流程 注解包装"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-03-20T15:51:10.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-20T15:51:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Macro\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-20T15:51:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"The Hulo Authors\\",\\"url\\":\\"https://github.com/hulo-io\\"}]}"]]},"git":{"createdTime":1742053261000,"updatedTime":1742485870000,"contributors":[{"name":"ansurfen","username":"ansurfen","email":"axf593161@gmail.com","commits":3,"url":"https://github.com/ansurfen"}]},"readingTime":{"minutes":0.34,"words":102},"filePathRelative":"handbook/advanced/macro.md","localizedDate":"March 15, 2025","autoDesc":true}');export{r as comp,d as data};
