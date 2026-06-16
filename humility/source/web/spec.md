<!-- create app. vdom. render on dom. when onclick or anything or redraw, rerender the whole app and diff (keep, rp, add) and patch (attrs, dom). render a component: get vnode, attach all dispose on it. -->

<!-- import { h, p, ref, effect, render } from '../framework'; -->

think imperatively. data flow.

render app, root:

create vdom from app, i.e. h

create node from vdom (store the node on vdom), append to root

trigger effects

redraw (e.g. on listener):

diff. old vdom must exist.

return: a list of op (except keep): update attrs (old dom, new dom), remove, 

the app must be div.App

compare. old vdom div, new div. same. otherwise remove
