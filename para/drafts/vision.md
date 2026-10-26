vision

# problem

you have vscode. it can edit md and render md out of box.

it's not really polished.

for example,

it doesnt respect max width prose.

it's quirky. md preview isnt first class. if you preview a md, and open another md, the md preview for the prev file switches.

it's not performant for large md (e.g. messages and journals over months, or generated rapidly), while it could have been.

it's not extensible or configurable.

and if you install some extensions, well extension pages are not first class either. and each has its own downsides.

# solution

it's a dedicated tool to read docs.

do one thing and do it well.

it primarily supports md. maybe mdx in the future.

it may be used to read books in general, if you convert them to md first. text is universal lang. <!-- it's easy for epub. it might be a bit hard for some pdf if you do not use visual llms but at least you can turn into images and read as before. -->

# features

## browse/search docs

on the left you will see a hierarchy of pages, it can be a simple representation of local fs, or you may map it.

search is powered by rg.

you may search file names or content.

## table of contents

on the right you can see toc.

they are not permalink. but they are stable enough as long as you dont change the text of titles.

## scroll/jump through a page

you can customize the behavior of spacebar.

you can scroll smoothly or jump instantly, or via a cuber bezier curve.

you can scroll by height, by content, or dynamic (e.g. a paragraph by default, 1/3 screen if it's long).

## ~~collapse/expand headings~~

rarely do you really need that.

rather it's highly resulted from vscode's lack of toc.

## navigate

every possible user action is mapped to a key.

every content driven action is mapped to a key -> an input.

- find in page
- jump to heading/page

## customize and extend

you may have zen mode, to fade out pages hierarchy abd toc when you dont need.

you may inject content, for example esti readtime after title/first line of text.

you may record and reflect on yourself. e.g. time -> page/scroll mapping.

you may like to quote! <!-- you may like to quote even if you do not read on para! -->


