notes

they might not use aria hidden properly. not even display none.

instead they apply tricks like size 1px, and transforming.

---

it works on gemini of custom html tags.

it seems they are using custom elements, but why didnt i see shadow slot?

yeah, gemini it's not even using real native registered web components. they are just non standard html tags.

---

let's take a look at reddit.

it works if you select sth inside shadow dom.

but it will omit any shadow dom inside.

i.e. if you select a list of comments where each uses shadow dom, it might be empty.

