import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as i,j as e,h as s,r as n,o}from"./app-B-WGa-d4.js";const r={};function l(c,t){const d=n("CodeTabs");return o(),i("div",null,[t[0]||(t[0]=e(`<h2 id="if" tabindex="-1"><a class="header-anchor" href="#if"><span>if</span></a></h2><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>if $a &gt; 10 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)),s(d,{id:"7",data:[],"tab-id":"shell"}),t[1]||(t[1]=e(`<h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>if ! cmd {</span></span>
<span class="line"><span>    echo &quot;cmd not found&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if $(cmd) == &quot;0&quot; {</span></span>
<span class="line"><span>    echo &quot;successfully to execute&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原生集成" tabindex="-1"><a class="header-anchor" href="#原生集成"><span>原生集成</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>if \${} {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="until" tabindex="-1"><a class="header-anchor" href="#until"><span>until</span></a></h2><h2 id="条件判断参数" tabindex="-1"><a class="header-anchor" href="#条件判断参数"><span>条件判断参数</span></a></h2><h3 id="🔢-整数比较" tabindex="-1"><a class="header-anchor" href="#🔢-整数比较"><span>🔢 整数比较</span></a></h3><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>只能用于整数</p></div><table><thead><tr><th>表达式</th><th>含义</th><th>等价于</th></tr></thead><tbody><tr><td><code>-eq</code></td><td>等于</td><td>==</td></tr><tr><td><code>-ne</code></td><td>不等于</td><td>!=</td></tr><tr><td><code>-gt</code></td><td>大于</td><td>&gt;</td></tr><tr><td><code>-ge</code></td><td>大于等于</td><td>&gt;=</td></tr><tr><td><code>-lt</code></td><td>小于</td><td>&lt;</td></tr><tr><td><code>-le</code></td><td>小于等于</td><td>&lt;=</td></tr></tbody></table><h3 id="🧵-字符串判断" tabindex="-1"><a class="header-anchor" href="#🧵-字符串判断"><span>🧵 字符串判断</span></a></h3><table><thead><tr><th>表达式</th><th>含义</th><th>等价于</th></tr></thead><tbody><tr><td>-z &quot;$str&quot;</td><td>字符串长度为 0（空字符串）</td><td>$str.length == 0 或 ! $str.length</td></tr><tr><td>-n &quot;$str&quot;</td><td>字符串长度不为 0</td><td>$str.length != 0 或 $str.length</td></tr><tr><td>&quot;$a&quot; = &quot;$b&quot;</td><td>字符串相等</td><td>$a == $b</td></tr><tr><td>&quot;$a&quot; != &quot;$b&quot;</td><td>字符串不相等</td><td>$a != $b</td></tr></tbody></table><h3 id="🔀-逻辑判断" tabindex="-1"><a class="header-anchor" href="#🔀-逻辑判断"><span>🔀 逻辑判断</span></a></h3><table><thead><tr><th>表达式</th><th>含义</th><th>等价于</th></tr></thead><tbody><tr><td><code>-a</code></td><td>与</td><td>&amp;</td></tr><tr><td><code>-o</code></td><td>或</td><td>|</td></tr><tr><td><code>!</code></td><td>非</td><td>!</td></tr><tr><td><code>&amp;&amp;</code></td><td>条件与（用于多个 <code>[ ... ]</code>）</td><td>&amp;&amp;</td></tr></tbody></table><h3 id="📁-文件相关" tabindex="-1"><a class="header-anchor" href="#📁-文件相关"><span>📁 文件相关</span></a></h3><table><thead><tr><th>表达式</th><th>含义</th><th>等价于</th></tr></thead><tbody><tr><td><code>-e</code></td><td>文件存在</td><td>f&quot;file.txt&quot;.exist</td></tr><tr><td><code>-f</code></td><td>是普通文件（非目录）</td><td>f&quot;file.txt&quot;.is_file 或 ! f&quot;file.txt&quot;.is_dir</td></tr><tr><td><code>-d</code></td><td>是目录</td><td>f&quot;dir/&quot;.is_dir()</td></tr><tr><td><code>-r</code></td><td>文件可读</td><td>f&quot;file.txt&quot;.readable</td></tr><tr><td><code>-w</code></td><td>文件可写</td><td>f&quot;file.txt&quot;.writable</td></tr><tr><td><code>-x</code></td><td>文件可执行</td><td>f&quot;<a href="http://script.sh" target="_blank" rel="noopener noreferrer">script.sh</a>&quot;.executable</td></tr><tr><td><code>-s</code></td><td>文件大小非 0</td><td>f&quot;file.txt&quot;.size</td></tr><tr><td><code>-L</code></td><td>是符号链接</td><td>f&quot;link.txt&quot;.is_symbol_link</td></tr><tr><td><code>-h</code></td><td>同 -L，也是符号链接</td><td>f&quot;link.txt&quot;.is_symbol_link</td></tr><tr><td><code>-b</code></td><td>是块设备文件</td><td>f&quot;/dev/sda&quot;.is_block_dev</td></tr><tr><td><code>-c</code></td><td>是字符设备文件</td><td>f&quot;/dev/tty0&quot;.is_char_dev</td></tr><tr><td><code>-p</code></td><td>是命名管道（FIFO）</td><td>f&quot;fifo.pipe&quot;.is_pipe</td></tr><tr><td><code>-S</code></td><td>是 socket 文件</td><td>f&quot;/tmp/mysock&quot;.is_sock</td></tr><tr><td><code>-u</code></td><td>设置了 SUID 位</td><td>f&quot;somefile&quot;.suid</td></tr><tr><td><code>-g</code></td><td>设置了 SGID 位</td><td>f&quot;somefile&quot;.sgid</td></tr><tr><td><code>-k</code></td><td>设置了粘着位（sticky bit）</td><td>f&quot;/tmp&quot;.sticky</td></tr><tr><td>file1 -nt file2</td><td>file1 比 file2 新</td><td>f&quot;file1&quot; &gt; f&quot;file2&quot;</td></tr><tr><td>file1 -ot file2</td><td>file1 比 file2 旧</td><td>f&quot;file1&quot; &lt; f&quot;file2&quot;</td></tr><tr><td>file1 -ef file2</td><td>file1 和 file2 是同一个文件（硬链接）</td><td>f&quot;file1&quot; == f&quot;file2&quot;</td></tr></tbody></table>`,15))])}const u=a(r,[["render",l],["__file","flow.html.vue"]]),f=JSON.parse('{"path":"/blueprints/bash/flow.html","title":"Control Flow","lang":"en-US","frontmatter":{"title":"Control Flow","icon":"fas fa-puzzle-piece","date":"2025-04-14T00:00:00.000Z","category":"blueprint","tag":["bash","flow"],"license":"MIT","description":"if 变量 命令 原生集成 until 条件判断参数 🔢 整数比较 Warning 只能用于整数 🧵 字符串判断 🔀 逻辑判断 📁 文件相关","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/blueprints/bash/flow.html"}],["meta",{"property":"og:site_name","content":"Hulo"}],["meta",{"property":"og:title","content":"Control Flow"}],["meta",{"property":"og:description","content":"if 变量 命令 原生集成 until 条件判断参数 🔢 整数比较 Warning 只能用于整数 🧵 字符串判断 🔀 逻辑判断 📁 文件相关"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-04-14T15:35:02.000Z"}],["meta",{"property":"article:tag","content":"bash"}],["meta",{"property":"article:tag","content":"flow"}],["meta",{"property":"article:published_time","content":"2025-04-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-14T15:35:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Control Flow\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-04-14T00:00:00.000Z\\",\\"dateModified\\":\\"2025-04-14T15:35:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"The Hulo Authors\\",\\"url\\":\\"https://github.com/hulo-lang\\"}]}"]]},"git":{"createdTime":1744562726000,"updatedTime":1744644902000,"contributors":[{"name":"ansurfen","username":"ansurfen","email":"axf593161@gmail.com","commits":2,"url":"https://github.com/ansurfen"}]},"readingTime":{"minutes":1.32,"words":395},"filePathRelative":"blueprints/bash/flow.md","localizedDate":"April 14, 2025","autoDesc":true}');export{u as comp,f as data};
