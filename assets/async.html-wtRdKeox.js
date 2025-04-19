import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as a,i as n,o as t}from"./app-9RErxqkW.js";const e={};function l(h,i){return t(),a("div",null,i[0]||(i[0]=[n(`<blockquote><p><strong>Asynchronous（异步）</strong> 是一种编程模型，用于在不阻塞主程序流程的情况下处理耗时任务（如网络请求、文件IO或定时操作）。</p><p>与同步调用不同，异步操作允许程序继续执行后续逻辑，并在任务完成时通过回调函数、Promise、Future、async/await 等机制处理结果。</p><p>异步编程的优势包括：</p><ul><li>提高程序响应性，尤其适用于 UI 或服务器场景</li><li>更好地利用系统资源，实现高并发</li><li>避免线程阻塞带来的性能瓶颈</li></ul></blockquote><div class="hint-container important"><p class="hint-container-title">Important</p><p>由于 Hulo 最终是要编译成目标语言运行的，能否异步取决于目标语言是否支持。如果目标语言不支持的情况下，异步的代码还是会同步执行的。Hulo 只是尽可能实现异步这个特性。</p></div><h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字"><span>关键字</span></a></h2><div class="language-hulo line-numbers-mode" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> task</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">num</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">to_str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">loop</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> $i</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> :=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">..</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    echo</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> task</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> _</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><div class="language-hulo line-numbers-mode" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">future</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">delay</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> duration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">sec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">    echo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Hello World&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const k=s(e,[["render",l],["__file","async.html.vue"]]),d=JSON.parse('{"path":"/grammar/async.html","title":"Asynchronous","lang":"en-US","frontmatter":{"title":"Asynchronous","icon":"fas fa-feather","date":"2025-04-19T00:00:00.000Z","category":"grammar","tag":["async"],"license":"MIT","description":"Asynchronous（异步） 是一种编程模型，用于在不阻塞主程序流程的情况下处理耗时任务（如网络请求、文件IO或定时操作）。 与同步调用不同，异步操作允许程序继续执行后续逻辑，并在任务完成时通过回调函数、Promise、Future、async/await 等机制处理结果。 异步编程的优势包括： 提高程序响应性，尤其适用于 UI 或服务器场景 更好...","head":[["meta",{"property":"og:url","content":"https://github.com/hulo-lang/docs/grammar/async.html"}],["meta",{"property":"og:site_name","content":"Hulo"}],["meta",{"property":"og:title","content":"Asynchronous"}],["meta",{"property":"og:description","content":"Asynchronous（异步） 是一种编程模型，用于在不阻塞主程序流程的情况下处理耗时任务（如网络请求、文件IO或定时操作）。 与同步调用不同，异步操作允许程序继续执行后续逻辑，并在任务完成时通过回调函数、Promise、Future、async/await 等机制处理结果。 异步编程的优势包括： 提高程序响应性，尤其适用于 UI 或服务器场景 更好..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-04-19T04:29:33.000Z"}],["meta",{"property":"article:tag","content":"async"}],["meta",{"property":"article:published_time","content":"2025-04-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-19T04:29:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Asynchronous\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-04-19T00:00:00.000Z\\",\\"dateModified\\":\\"2025-04-19T04:29:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"The Hulo Authors\\",\\"url\\":\\"https://github.com/hulo-lang\\"}]}"]]},"git":{"createdTime":1745036973000,"updatedTime":1745036973000,"contributors":[{"name":"ansurfen","username":"ansurfen","email":"axf593161@gmail.com","commits":1,"url":"https://github.com/ansurfen"}]},"readingTime":{"minutes":0.88,"words":264},"filePathRelative":"grammar/async.md","localizedDate":"April 19, 2025","autoDesc":true}');export{k as comp,d as data};
