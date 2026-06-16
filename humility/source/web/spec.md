<!-- create app. vdom. render on dom. when onclick or anything or redraw, rerender the whole app and diff (keep, rp, add) and patch (attrs, dom). render a component: get vnode, attach all dispose on it. -->

<!-- import { h, p, ref, effect, render } from '../framework'; -->

think imperatively. data flow.

render app, root:

create vdom from app, i.e. h

create node from vdom (store the node on vdom, set ref), append to root

create node from vdom: component(), set current vnode, when effect, add {vnode, effect} to pending effects

trigger effects, attach dispose

redraw (e.g. on listener):

create new vdom.

diff. old vdom must exist.

return: a list of op (except keep): update attr (old dom, new dom, attr, newvalue) (set attr then or rm/add listener), rm attr (unset or unbind), ~~remove from (old parent node, first mismatch index)~~ ~~remove (old node), append (new node)~~ replace, append, remove

(be radically simple. consider remove all after the first mismatch.)

the app must be div.App

compare. old vdom div, new div. same. otherwise replace.

iter new attrs, 

iter index of new vdom children, no old vdom then append, yes then diff

old vdom longer: rm

commit: fire the operations. sim. for rm, rp, dispose.

p, ref: done

h: done? y.

