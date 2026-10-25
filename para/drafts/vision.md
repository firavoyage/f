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


