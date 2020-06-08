(this["webpackJsonpreact-pathing"]=this["webpackJsonpreact-pathing"]||[]).push([[0],{110:function(e,n,t){e.exports=t(124)},123:function(e,n,t){},124:function(e,n,t){"use strict";t.r(n);var r,a,o,c=t(0),i=t.n(c),u=t(9),l=t.n(u),s=t(21),f=t.n(s),E=t(35),O=t(17),d=t(183),m=t(19),p=t(20),h=t(22);!function(e){e[e.FILL_MODE=1]="FILL_MODE",e[e.CLEAR_MODE=2]="CLEAR_MODE",e[e.START_NODE_MODE=3]="START_NODE_MODE",e[e.TARGET_NODE_MODE=4]="TARGET_NODE_MODE",e[e.PATH_NODE_MODE=5]="PATH_NODE_MODE",e[e.DEFAULT_NODE_MODE=6]="DEFAULT_NODE_MODE"}(r||(r={})),function(e){e.Dijkstra="Dijkstra"}(a||(a={}));var b=(o={},Object(h.a)(o,r.FILL_MODE,r.CLEAR_MODE),Object(h.a)(o,r.CLEAR_MODE,r.FILL_MODE),Object(h.a)(o,r.START_NODE_MODE,r.START_NODE_MODE),Object(h.a)(o,r.TARGET_NODE_MODE,r.TARGET_NODE_MODE),Object(h.a)(o,r.PATH_NODE_MODE,r.FILL_MODE),Object(h.a)(o,r.DEFAULT_NODE_MODE,r.CLEAR_MODE),o),D=[r.FILL_MODE,r.CLEAR_MODE,r.START_NODE_MODE,r.TARGET_NODE_MODE],_=[r.START_NODE_MODE,r.TARGET_NODE_MODE],v=t(93),M=Object(v.a)({});function g(){var e=Object(m.a)(["\n  width: calc(100% - ","rem);\n  height: calc(100% - ","rem);\n  padding: ","rem;\n  background-color: ",";\n"]);return g=function(){return e},e}var j=p.b.main(g(),8,8,4,M.palette.background.paper);function T(){var e=Object(m.a)(["\n      transition-delay: ","ms;\n      background-color: yellowgreen;\n      border-color: darkgreen;\n    "]);return T=function(){return e},e}function y(){var e=Object(m.a)(["\n      background-color: red;\n      border-color: red;\n    "]);return y=function(){return e},e}function x(){var e=Object(m.a)(["\n      background-color: green;\n      border-color: green;\n    "]);return x=function(){return e},e}function k(){var e=Object(m.a)(["\n      background-color: black;\n      border-color: black;\n    "]);return k=function(){return e},e}function A(){var e=Object(m.a)(["\n  display: inline-block;\n  width: calc(","em - 0.0625rem);\n  height: calc(","em - 0.0625rem);\n  background-color: transparent;\n  border: 0.0625rem solid;\n  border-color: grey;\n  margin-bottom: -0.0625rem;\n  margin-right: -0.0625rem;\n  transition-property: background-color border-color;\n  transition-duration: 100ms;\n  transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n"]);return A=function(){return e},e}var N=p.b.div(A(),2,2,(function(e){return e.mode===r.FILL_MODE&&Object(p.a)(k())}),(function(e){return e.mode===r.START_NODE_MODE&&Object(p.a)(x())}),(function(e){return e.mode===r.TARGET_NODE_MODE&&Object(p.a)(y())}),(function(e){var n=e.mode,t=e.pathIndex;return n===r.PATH_NODE_MODE&&Object(p.a)(T(),60*(t||0))})),L=t(29),R=t.n(L),w=function(e){var n=R()(e);return e.flat().filter((function(e){return e.mode===r.PATH_NODE_MODE})).forEach((function(e){var t=e.x,a=e.y,o=e.index;n[t][a]={x:t,y:a,index:o,mode:r.CLEAR_MODE}})),n},S=t(81),C=t(82),F=function(){function e(){Object(S.a)(this,e),this.collection=void 0,this.collection=[]}return Object(C.a)(e,[{key:"enqueue",value:function(e){if(this.isEmpty())this.collection.push(e);else{for(var n=!1,t=1;t<=this.collection.length;t++)if(e[1]<this.collection[t-1][1]){this.collection.splice(t-1,0,e),n=!0;break}n||this.collection.push(e)}}},{key:"dequeue",value:function(){return this.collection.shift()}},{key:"isEmpty",value:function(){return 0===this.collection.length}}]),e}(),I=function(e){return!(!e||e.mode===r.FILL_MODE)&&e},P=function(e,n,t){var r=e.x,a=e.y;return[t.has(n[r][a-1])&&I(n[r][a-1]),n[r+1]&&t.has(n[r+1][a])&&I(n[r+1][a]),t.has(n[r][a+1])&&I(n[r][a+1]),n[r-1]&&t.has(n[r-1][a])&&I(n[r-1][a])].filter(Boolean)},G=function(e){var n=e.startNode,t=e.endNode,r=e.grid,a=r.flat(),o=new Set(a),c=a.map((function(e){return e.index===n.index?0:1/0})),i=new Map,u=new F;u.enqueue([n,0]);for(var l=function(){var e=u.dequeue()[0];if(i.has(t)||!o.has(e))return"break";P(e,r,o).forEach((function(n){var t=c[e.index]+1;t<c[n.index]&&(c[n.index]=t,i.set(n,e),u.enqueue([n,t]),o.delete(e))}))};!u.isEmpty();){if("break"===l())break}for(var s=[t],f=t;f.index!==n.index;){var E=i.get(f);if(!E)break;s.unshift(E),f=E}return s},B=Object(h.a)({},a.Dijkstra,G),H=function(e,n,t,a){return t&&a&&n((function(n){var o=B[e]({startNode:t,endNode:a,grid:n}),c=R()(w(n)),i=0;return o.shift(),o.pop(),o.filter(Boolean).forEach((function(e){var t=e.x,a=e.y,o=e.index;c[t][a]={x:t,y:a,index:o,pathIndex:n[t][a].mode===r.PATH_NODE_MODE?0:i++,mode:r.PATH_NODE_MODE}})),c}))},U=function(e,n,t){n.forEach((function(n){return e.addEventListener(n,t,!1)}))};function q(){var e=Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  white-space: pre;\n  user-select: none;\n"]);return q=function(){return e},e}var W=p.b.section(q());function V(){var e=Object(m.a)(["\n  margin-top: -0.25rem;\n"]);return V=function(){return e},e}var z=p.b.div(V()),J=t(174),$=t(189),K=t(190),Q=t(191),X=t(192),Y=t(91),Z=t.n(Y),ee=t(92),ne=t.n(ee),te=t(88),re=t.n(te),ae=t(89),oe=t.n(ae),ce=t(90),ie=t.n(ce),ue=t(178),le=t(188),se=t(180),fe=t(179),Ee=t(173),Oe=t(181),de=t(176),me=t(177),pe=t(171),he=t(64),be=t(185),De=t(87),_e=t.n(De),ve=t(175),Me=t(48),ge=t(184),je=t(186),Te=t(83),ye=t.n(Te),xe=t(84),ke=t.n(xe);function Ae(e){var n=e.label,t=e.options,r=e.onChange,a=e.value;return i.a.createElement(je.a,{fullWidth:!0,options:t,getOptionLabel:function(e){return e.label},renderInput:function(e){return i.a.createElement(ge.a,Object.assign({},e,{label:n,variant:"outlined",margin:"normal"}))},renderOption:function(e,n){var t=n.inputValue,r=ke()(e.label,t),a=ye()(e.label,r);return i.a.createElement("div",null,a.map((function(e,n){return i.a.createElement("span",{key:n,style:{fontWeight:e.highlight?700:400}},e.text)})))},value:a,onChange:function(e,n){return r(n)}})}var Ne,Le=Object.entries(a).map((function(e){var n=Object(O.a)(e,2);return{label:n[0],value:n[1]}})),Re=function(e){var n=e.options,t=e.setOptions;return i.a.createElement(Ae,{label:"Select a path finding algorithm",options:Le,value:Le.find((function(e){return e.value===n.pather})),onChange:function(e){return t(Object(Me.a)({},n,{pather:(null===e||void 0===e?void 0:e.value)||n.pather}))}})},we=Object(J.a)((function(e){return Object($.a)({appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}})})),Se=i.a.forwardRef((function(e,n){return i.a.createElement(ve.a,Object.assign({direction:"up",ref:n},e))}));!function(e){e[e.pather=0]="pather"}(Ne||(Ne={}));var Ce=function(e){var n=e.open,t=e.setOpen,r=e.options,a=e.setOptions,o=we(),u=Object(c.useState)(r),l=Object(O.a)(u,2),s=l[0],f=l[1],E=Object(c.useState)(),d=Object(O.a)(E,2),m=d[0],p=d[1],h=function(){p(void 0),f(r),t(!1)};return i.a.createElement(le.a,{fullScreen:!0,open:n,onClose:h,TransitionComponent:Se},i.a.createElement(de.a,{className:o.appBar},i.a.createElement(me.a,null,i.a.createElement(pe.a,{edge:"start",color:"inherit",onClick:h,"aria-label":"close"},i.a.createElement(_e.a,null)),i.a.createElement(he.a,{variant:"h6",className:o.title},"Options"),i.a.createElement(ue.a,{autoFocus:!0,color:"inherit",onClick:function(){a(s),h()}},"save"))),void 0===m&&i.a.createElement(Ee.a,null,i.a.createElement(fe.a,{button:!0},i.a.createElement(se.a,{primary:"Pather",secondary:s.pather,onClick:function(){return p(Ne.pather)}})),i.a.createElement(Oe.a,null)),i.a.createElement(be.a,{py:2,px:3},m===Ne.pather&&i.a.createElement(Re,{options:s,setOptions:f})))},Fe={pather:a.Dijkstra},Ie=Object(J.a)((function(e){return Object($.a)({speedDial:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)}})})),Pe=function(e){e.mode;var n=e.setMode,t=e.runPather,a=Ie(),o=i.a.useState(!1),c=Object(O.a)(o,2),u=c[0],l=c[1],s=i.a.useState(!1),f=Object(O.a)(s,2),E=f[0],d=f[1],m=i.a.useState(Fe),p=Object(O.a)(m,2),h=p[0],b=p[1],D=[{icon:i.a.createElement(re.a,null),name:"Run ".concat(h.pather),onClick:function(){return t(h.pather)}},{icon:i.a.createElement(oe.a,null),name:"Place target node",onClick:function(){return n(r.TARGET_NODE_MODE)}},{icon:i.a.createElement(ie.a,null),name:"Options",onClick:function(){return d(!0)}}],_=function(){l(!1)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(Ce,{open:E,setOpen:d,options:h,setOptions:b}),i.a.createElement(K.a,{ariaLabel:"SpeedDial openIcon example",className:a.speedDial,icon:i.a.createElement(Q.a,{icon:i.a.createElement(Z.a,null),openIcon:i.a.createElement(ne.a,null)}),onClose:_,onOpen:function(){l(!0)},open:u},D.map((function(e){return i.a.createElement(X.a,{key:e.name,icon:e.icon,tooltipTitle:e.name,onClick:function(){_(),e.onClick()}})}))))},Ge=function(e,n,t){var r=n.x,a=n.y,o=n.index,c=n.mode,i=t||b[c];return e((function(e){var n=R()(e);return n[r][a]={x:r,y:a,index:void 0===o?n[r][a].index:o,mode:i},n})),i},Be=function(e,n){var t,a,o=e.flat();if(o.length>1){if(t=o.find((function(e){return e.mode===r.START_NODE_MODE})),a=o.find((function(e){return e.mode===r.TARGET_NODE_MODE})),!t){var c={x:Math.floor(Math.random()*e.length),y:Math.floor(Math.random()*e[0].length)};t=Object(Me.a)({},e[c.x][c.y],{},c,{mode:r.START_NODE_MODE})}if(!a){for(var i={x:Math.floor(Math.random()*e.length),y:Math.floor(Math.random()*e[0].length)};t&&t.x===i.x&&t.y===i.y;)i.x=Math.floor(Math.random()*e.length),i.y=Math.floor(Math.random()*e[0].length);a=Object(Me.a)({},e[i.x][i.y],{},i,{mode:r.TARGET_NODE_MODE})}var u=R()(e);u[t.x][t.y]=t,u[a.x][a.y]=a,n(u)}return{startNode:t,targetNode:a}},He=function(e){var n=e.grid,t=e.setGrid,a=e.mainElement,o=Object(c.useState)(!1),u=Object(O.a)(o,2),l=u[0],s=u[1],d=Object(c.useState)(r.DEFAULT_NODE_MODE),m=Object(O.a)(d,2),p=m[0],h=m[1];Object(c.useEffect)((function(){a&&(U(a,["mousedown","touchstart"],(function(){return s(!0)})),U(a,["mouseup","touchend"],(function(){s(!1),h(r.DEFAULT_NODE_MODE)})))}),[a]);var v=n.flat(),M=v.find((function(e){return e.mode===r.START_NODE_MODE})),g=v.find((function(e){return e.mode===r.TARGET_NODE_MODE}));return Object(c.useEffect)((function(){M||g||Be(n,t)}),[n,t]),i.a.createElement(W,null,n&&n.map((function(e,n){return i.a.createElement(z,{key:n},e.map((function(e){return i.a.createElement(N,Object.assign({},e,{key:e.index,onMouseDown:function(){return h(Ge(t,e,p===r.DEFAULT_NODE_MODE?b[e.mode]:p))},onMouseEnter:Object(E.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",l&&Ge(t,e,D.includes(p)&&p));case 1:case"end":return n.stop()}}),n)}))),onMouseLeave:Object(E.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",l&&_.includes(p)&&Ge(t,e,r.CLEAR_MODE));case 1:case"end":return n.stop()}}),n)})))}))})))})),i.a.createElement(Pe,{mode:p,setMode:h,runPather:function(e){H(e,t,M,g)}}))},Ue=function(e){return e?parseFloat(getComputedStyle(e).fontSize):16},qe=function(e){return 4*Ue(e)*2},We=function(e){return e?Promise.resolve({mainElementStyle:window.getComputedStyle(e),dimensionOffset:qe(e)}).then((function(e){var n=e.mainElementStyle,t=e.dimensionOffset;return[parseInt(n.getPropertyValue("width"))-t,parseInt(n.getPropertyValue("height"))-t]})):Promise.resolve([0,0])},Ve=t(94),ze=function(e){return Object(Ve.a)(Array(e)).map((function(e,n){return n}))},Je=function(){var e=Object(E.a)(f.a.mark((function e(n){var t,a,o,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,We(n);case 2:return t=e.sent,a=Ue(n),o=2*a,c=Math.ceil(t[1]/o),i=Math.ceil(t[0]/o),e.abrupt("return",ze(c).map((function(e){return ze(i).map((function(n){return{x:e,y:n,index:e*i+n,mode:r.CLEAR_MODE}}))})));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),$e=document.getElementById("root"),Ke=function(){var e=Object(c.useState)([[]]),n=Object(O.a)(e,2),t=n[0],r=n[1];return Object(c.useEffect)((function(){(function(){var e=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,Je($e);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),i.a.createElement(d.a,{theme:M},i.a.createElement(j,null,i.a.createElement(He,{grid:t,setGrid:Object(c.useCallback)(r,[$e]),mainElement:$e})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(123);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[110,1,2]]]);
//# sourceMappingURL=main.81f731d4.chunk.js.map