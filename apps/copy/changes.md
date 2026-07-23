changes

apr 2026

01

support svgs rendered by latex.

i have to allow it explicitly.

svg icons are just text, and repetitive uses would be optimized aggressively by git. no need to worry.

22

add option: markdown

add option: svg

23

add option: keep images

add option: normalize empty link description

add option: prettier

normalize: some sematic tags (e.g. strong) are converted to span with inline style.

turn off "keep content". content inside buttons would be rm. it could be an option, though. 

24

enforce prettier with remark, which forces all indented code blocks to backticks

align remark with prettier defaults

27

clean unused fn and unused vars like get_plain_text plain_text

jun 2026

18 

implement paste interception

much faster with almost no tradeoff (you can turn it off!)

> optimize for complex pastes
> 
> i could add an option to choose
> 
> - get innerhtml from contenteditable
> - intercept paste and prevent default
> 
> though, from an experiment, whether intercepted or not, it's already full of var in inline styles. it's just perf.

jul 2026

04

harden "remove you said". both preprocess and postprocess, as the pattern is highly predictible.

24

add two linebreaks after all outputs
