import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as a,i as t,o as h}from"./app-C9sMTB6v.js";const l={};function k(n,i){return h(),a("div",null,i[0]||(i[0]=[t(`<blockquote><p>Assert 库是一类在编程中广泛用于单元测试的工具库，它的核心功能是提供一组断言（assertions）函数，用于验证程序在特定条件下的行为是否正确。<br> 当你在编写测试用例时，Assert 库能帮你明确地表达期望值与实际结果之间的关系。如果某个断言失败，测试框架就会报告一个错误，从而提示开发者代码存在潜在问题。</p></blockquote><div class="hint-container important"><p class="hint-container-title">Important</p><p>尽管 Hulo 也提供了目标语言的实现，但是 assert 包中的函数在大部分情况下都是 comptime 修饰的函数。</p></div><h2 id="ok" tabindex="-1"><a class="header-anchor" href="#ok"><span>ok</span></a></h2><ul><li><strong>类型</strong></li></ul><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> ok</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">ok</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">bool</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><ul><li><p><strong>详细信息</strong><br> 第一个参数是表达式。第二个参数可选，它是失败时输出的提示。</p></li><li><p><strong>示例</strong></p></li></ul><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;assert&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">assert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ok</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> == </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;error: 1 != 2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><h2 id="equal" tabindex="-1"><a class="header-anchor" href="#equal"><span>equal</span></a></h2><ul><li><strong>类型</strong></li></ul><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> equal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">want</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">got</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><ul><li><p><strong>详细信息</strong><br> 第一个参数是期望值，第二个参数是实际值。第三个参数是可选的，当断言失败时用于输出提示信息。</p></li><li><p><strong>示例</strong></p></li></ul><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;assert&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">assert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">equal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> + </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;error: 1 + 1 != 2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><h2 id="not-equal" tabindex="-1"><a class="header-anchor" href="#not-equal"><span>not_equal</span></a></h2><ul><li><strong>类型</strong></li></ul><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> not_equal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">not_want</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">got</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><ul><li><p><strong>详细信息</strong><br> 第一个参数是期望不等于的值，第二个参数是实际值。第三个参数是可选的，断言失败时输出提示信息。</p></li><li><p><strong>示例</strong></p></li></ul><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;assert&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">assert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">not_equal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> + </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;error: value should not be 3&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>在 builtin 中包装了 assert 库，可以不需要导入直接使用，不过需要注意的是函数名略微有些不同。</p></div><h2 id="builtin-assert" tabindex="-1"><a class="header-anchor" href="#builtin-assert"><span>builtin.assert</span></a></h2><ul><li><strong>类型</strong></li></ul><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> assert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">ok</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">bool</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><ul><li><p><strong>详细信息</strong><br> 第一个参数是表达式。第二个参数可选，它是失败时输出的提示。</p></li><li><p><strong>示例</strong></p></li></ul><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">assert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ok</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> == </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;error: 1 != 2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><h2 id="builtin-assert-eq" tabindex="-1"><a class="header-anchor" href="#builtin-assert-eq"><span>builtin.assert_eq</span></a></h2><ul><li><strong>类型</strong></li></ul><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> assert_eq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">want</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">got</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><ul><li><p><strong>详细信息</strong><br> 第一个参数是期望值，第二个参数是实际值。第三个参数是可选的，当断言失败时用于输出提示信息。</p></li><li><p><strong>示例</strong></p></li></ul><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">assert_eq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> + </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;error: 1 + 1 != 2&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div><h2 id="builtin-assert-neq" tabindex="-1"><a class="header-anchor" href="#builtin-assert-neq"><span>builtin.assert_neq</span></a></h2><ul><li><strong>类型</strong></li></ul><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">fn</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> assert_neq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">want</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">got</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">any</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">?: </span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">str</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><ul><li><p><strong>详细信息</strong><br> 第一个参数是期望不等于的值，第二个参数是实际值。第三个参数是可选的，断言失败时输出提示信息。</p></li><li><p><strong>示例</strong></p></li></ul><div class="language-hulo" data-highlighter="shiki" data-ext="hulo" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">assert_neq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> + </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;error: value should not be 3&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre></div>`,33)]))}const r=s(l,[["render",k],["__file","assert.html.vue"]]),g=JSON.parse('{"path":"/libs/assert.html","title":"Assert","lang":"en-US","frontmatter":{"title":"Assert","icon":"fas fa-triangle-exclamation","date":"2025-04-19T00:00:00.000Z","category":"lib","tag":["assert"],"license":"MIT","description":"Assert 库是一类在编程中广泛用于单元测试的工具库，它的核心功能是提供一组断言（assertions）函数，用于验证程序在特定条件下的行为是否正确。 当你在编写测试用例时，Assert 库能帮你明确地表达期望值与实际结果之间的关系。如果某个断言失败，测试框架就会报告一个错误，从而提示开发者代码存在潜在问题。 Important 尽管 Hulo 也提...","head":[["meta",{"property":"og:url","content":"https://github.com/hulo-lang/docs/libs/assert.html"}],["meta",{"property":"og:site_name","content":"Hulo"}],["meta",{"property":"og:title","content":"Assert"}],["meta",{"property":"og:description","content":"Assert 库是一类在编程中广泛用于单元测试的工具库，它的核心功能是提供一组断言（assertions）函数，用于验证程序在特定条件下的行为是否正确。 当你在编写测试用例时，Assert 库能帮你明确地表达期望值与实际结果之间的关系。如果某个断言失败，测试框架就会报告一个错误，从而提示开发者代码存在潜在问题。 Important 尽管 Hulo 也提..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-04-19T17:17:06.000Z"}],["meta",{"property":"article:tag","content":"assert"}],["meta",{"property":"article:published_time","content":"2025-04-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-19T17:17:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Assert\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-04-19T00:00:00.000Z\\",\\"dateModified\\":\\"2025-04-19T17:17:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"The Hulo Authors\\",\\"url\\":\\"https://github.com/hulo-lang\\"}]}"]]},"git":{"createdTime":1745083026000,"updatedTime":1745083026000,"contributors":[{"name":"ansurfen","username":"ansurfen","email":"axf593161@gmail.com","commits":1,"url":"https://github.com/ansurfen"}]},"readingTime":{"minutes":2.11,"words":634},"filePathRelative":"libs/assert.md","localizedDate":"April 19, 2025","autoDesc":true}');export{r as comp,g as data};
