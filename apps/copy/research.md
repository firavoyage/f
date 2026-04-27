simonw.

i remember simonw built a similar one.

https://tools.simonwillison.net/colophon

well, a long list without any organization.

fortunately it's among the top ones.

https://tools.simonwillison.net/rich-text-to-markdown

ive checked the source. no src. it's designed to code in chatbot (single html).

it's actually worse than mine.

it's reinventing the wheels.

tested. too simple. like, no handling for tables.

upd:

https://tools.simonwillison.net/

this one is better... (there should not be two pages for the same purpose, though.)

yet it's still not very ideal. "ocr" and "pdf ocr" both exist on the same category. idk what they are even when i read the desc.

---

code indentation.

verdict.

it's vscode's problem. when opened on default preview, indentation, or trailing spaces on html elements are removed.

when copied to a blank web page, it shows properly.

btw, when ctrl shift i (default formatter, prettier), the spaces are removed (copy does not work then).

---

dompurify.

it's safe by default.

non standard attrs are not inside the allowlist.

---

render in vscode.

content inside html tags are parsed as md.

fail 1:

```md
<pre><code><span>macro_rules! custom_if {
    </span><span style="color: rgb(154, 160, 166); font-style: italic;">// Base Case: if { ... } otherwise { ... }</span><span>
    (</span><span style="color: rgb(197, 138, 249);">if</span><span> $cond:expr { $($then:tt)* } otherwise { $($</span><span style="color: rgb(197, 138, 249);">else</span><span>:tt)* }) =&gt; {
        </span><span style="color: rgb(197, 138, 249);">if</span><span> $cond { $($then)* } </span><span style="color: rgb(197, 138, 249);">else</span><span> { $($</span><span style="color: rgb(197, 138, 249);">else</span><span>)* }
    };

    </span><span style="color: rgb(154, 160, 166); font-style: italic;">// Recursive Case: if { ... } else if ...</span><span>
    (</span><span style="color: rgb(197, 138, 249);">if</span><span> $cond:expr { $($then:tt)* } </span><span style="color: rgb(197, 138, 249);">else</span><span> </span><span style="color: rgb(197, 138, 249);">if</span><span> $($rest:tt)*) =&gt; {
        </span><span style="color: rgb(197, 138, 249);">if</span><span> $cond { $($then)* } </span><span style="color: rgb(197, 138, 249);">else</span><span> { custom_if!(</span><span style="color: rgb(197, 138, 249);">if</span><span> $($rest)*) }
    };
}

</span><span style="color: rgb(197, 138, 249);">fn</span><span> main() {
    </span><span style="color: rgb(197, 138, 249);">let</span><span> x = </span><span style="color: rgb(250, 144, 62);">15</span><span>;
    
    custom_if! {
        </span><span style="color: rgb(197, 138, 249);">if</span><span> x &gt; </span><span style="color: rgb(250, 144, 62);">20</span><span> {
            println!(</span><span style="color: rgb(129, 201, 149);">"Big"</span><span>);
        } </span><span style="color: rgb(197, 138, 249);">else</span><span> </span><span style="color: rgb(197, 138, 249);">if</span><span> x &gt; </span><span style="color: rgb(250, 144, 62);">10</span><span> {
            println!(</span><span style="color: rgb(129, 201, 149);">"Medium"</span><span>); </span><span style="color: rgb(154, 160, 166); font-style: italic;">// This will print</span><span>
        } </span><span style="color: rgb(197, 138, 249);">else</span><span> </span><span style="color: rgb(197, 138, 249);">if</span><span> x &gt; </span><span style="color: rgb(250, 144, 62);">5</span><span> {
            println!(</span><span style="color: rgb(129, 201, 149);">"Small"</span><span>);
        } otherwise {
            println!(</span><span style="color: rgb(129, 201, 149);">"Tiny"</span><span>);
        }
    }
}
</span></code></pre>
```

white lines should be removed.

fail 2:

```md
<li style="margin: 0px 0px 12px; padding: 0px; list-style: disc; padding-inline-start: 4px;"><span style="overflow-wrap: break-word;"><span style="font-weight: 700;">Incremental Parsing</span>: Breaking down a large input into smaller chunks (like defining multiple structs at once) using nested repetitions&nbsp;<code dir="ltr" style="font-size: 14px; line-height: 22px; background-color: var(--XKMDxc); border: 1px solid var(--XKMDxc); border-radius: 4px; padding-block: 2px; padding-inline: 4px;">\$( \$()* )*</code>.</span><span><span style="white-space: nowrap; position: relative;"><span>&nbsp;</span><div style="align-items: center; display: flex; height: 14px; overflow: hidden; width: 89.8984px;"><span style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; color: var(--IXoxUe); font-size: 11px; line-height: 1.45; display: flex; overflow: hidden; min-width: 0px;"><span style="overflow: hidden; text-overflow: ellipsis; min-width: 0px;">OneUptime</span><span style="flex-shrink: 0;">&nbsp;+3</span></span></div></span></span></li>
```

`$` need to be escaped.

i could batch replace `$` to `\$` (nothing will break it seems.)

i could also further convert to md, though more edge cases.

upd:

it's vscode specific issue. it tries to render content inside html tags. the files work fine when copied to about blank.

verdict: dont try to normalize it.

upd:

it's fixed with libraries. (escape by default)

---

gemini.

it's not fixable.

the content is gone even pasting to a blank contenteditable.

i could try to intercept it though.

---

