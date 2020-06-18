(this["webpackJsonpreact-pathing"]=this["webpackJsonpreact-pathing"]||[]).push([[0],{110:function(e,n,t){e.exports=t(124)},123:function(e,n,t){},124:function(e,n,t){"use strict";t.r(n);var r,a,o,c=t(0),i=t.n(c),u=t(9),l=t.n(u),s=t(22),f=t.n(s),E=t(35),O=t(14),d=t(183),m=t(19),p=t(20),h=t(21);!function(e){e[e.FILL_MODE=1]="FILL_MODE",e[e.CLEAR_MODE=2]="CLEAR_MODE",e[e.START_NODE_MODE=3]="START_NODE_MODE",e[e.TARGET_NODE_MODE=4]="TARGET_NODE_MODE",e[e.PATH_NODE_MODE=5]="PATH_NODE_MODE",e[e.DEFAULT_NODE_MODE=6]="DEFAULT_NODE_MODE"}(r||(r={})),function(e){e.Dijkstra="Dijkstra",e.AStar="AStar"}(a||(a={}));var b=(o={},Object(h.a)(o,r.FILL_MODE,r.CLEAR_MODE),Object(h.a)(o,r.CLEAR_MODE,r.FILL_MODE),Object(h.a)(o,r.START_NODE_MODE,r.START_NODE_MODE),Object(h.a)(o,r.TARGET_NODE_MODE,r.TARGET_NODE_MODE),Object(h.a)(o,r.PATH_NODE_MODE,r.FILL_MODE),Object(h.a)(o,r.DEFAULT_NODE_MODE,r.CLEAR_MODE),o),D=[r.FILL_MODE,r.CLEAR_MODE,r.START_NODE_MODE,r.TARGET_NODE_MODE],_=[r.START_NODE_MODE,r.TARGET_NODE_MODE],v=t(93),g=Object(v.a)({});function M(){var e=Object(m.a)(["\n  width: calc(100% - ","rem);\n  height: calc(100% - ","rem);\n  padding: ","rem;\n  background-color: ",";\n"]);return M=function(){return e},e}var j=p.b.main(M(),8,8,4,g.palette.background.paper);function T(){var e=Object(m.a)(["\n      transition-delay: ","ms;\n      background-color: yellowgreen;\n      border-color: darkgreen;\n    "]);return T=function(){return e},e}function y(){var e=Object(m.a)(["\n      background-color: red;\n      border-color: red;\n    "]);return y=function(){return e},e}function A(){var e=Object(m.a)(["\n      background-color: green;\n      border-color: green;\n    "]);return A=function(){return e},e}function k(){var e=Object(m.a)(["\n      background-color: black;\n      border-color: black;\n    "]);return k=function(){return e},e}function x(){var e=Object(m.a)(["\n  display: inline-block;\n  width: calc(","em - 0.0625rem);\n  height: calc(","em - 0.0625rem);\n  background-color: transparent;\n  border: 0.0625rem solid;\n  border-color: grey;\n  margin-bottom: -0.0625rem;\n  margin-right: -0.0625rem;\n  transition-property: background-color border-color;\n  transition-duration: 100ms;\n  transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n"]);return x=function(){return e},e}var N,L=p.b.div(x(),2,2,(function(e){return e.mode===r.FILL_MODE&&Object(p.a)(k())}),(function(e){return e.mode===r.START_NODE_MODE&&Object(p.a)(A())}),(function(e){return e.mode===r.TARGET_NODE_MODE&&Object(p.a)(y())}),(function(e){var n=e.mode,t=e.pathIndex;return n===r.PATH_NODE_MODE&&Object(p.a)(T(),60*(t||0))})),R=t(29),S=t.n(R),w=function(e){var n=S()(e);return e.flat().filter((function(e){return e.mode===r.PATH_NODE_MODE})).forEach((function(e){var t=e.x,a=e.y,o=e.index;n[t][a]={x:t,y:a,index:o,mode:r.CLEAR_MODE}})),n},C=t(81),F=t(82),I=function(){function e(){Object(C.a)(this,e),this.collection=void 0,this.collection=[]}return Object(F.a)(e,[{key:"enqueue",value:function(e){if(this.isEmpty())this.collection.push(e);else{for(var n=!1,t=1;t<=this.collection.length;t++)if(e[1]<this.collection[t-1][1]){this.collection.splice(t-1,0,e),n=!0;break}n||this.collection.push(e)}}},{key:"dequeue",value:function(){return this.collection.shift()}},{key:"isEmpty",value:function(){return 0===this.collection.length}}]),e}(),P=function(e){return!(!e||e.mode===r.FILL_MODE)&&e},G=function(e,n,t){var r=e.x,a=e.y;return[t.has(n[r][a-1])&&P(n[r][a-1]),n[r+1]&&t.has(n[r+1][a])&&P(n[r+1][a]),t.has(n[r][a+1])&&P(n[r][a+1]),n[r-1]&&t.has(n[r-1][a])&&P(n[r-1][a])].filter(Boolean)},B=function(e){var n=e.startNode,t=e.endNode,r=e.grid,a=r.flat(),o=new Set(a),c=a.map((function(e){return e.index===n.index?0:1/0})),i=new Map,u=new I;u.enqueue([n,0]);for(var l=function(){var e=u.dequeue(),n=Object(O.a)(e,2),a=n[0],l=n[1];if(i.has(t)||!o.has(a))return"break";G(a,r,o).forEach((function(e){var n=l+1;n<c[e.index]&&(c[e.index]=n,i.set(e,a),u.enqueue([e,n]),o.delete(a))}))};!u.isEmpty();){if("break"===l())break}for(var s=[t],f=t;f.index!==n.index;){var E=i.get(f);if(!E)break;s.unshift(E),f=E}return s},H=(N={},Object(h.a)(N,a.Dijkstra,B),Object(h.a)(N,a.AStar,B),N),U=function(e,n,t,a){return t&&a&&n((function(n){var o=H[e]({startNode:t,endNode:a,grid:n}),c=S()(w(n)),i=0;return o.shift(),o.pop(),o.filter(Boolean).forEach((function(e){var t=e.x,a=e.y,o=e.index;c[t][a]={x:t,y:a,index:o,pathIndex:n[t][a].mode===r.PATH_NODE_MODE?0:i++,mode:r.PATH_NODE_MODE}})),c}))},q=function(e,n,t){n.forEach((function(n){return e.addEventListener(n,t,!1)}))};function W(){var e=Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  white-space: pre;\n  user-select: none;\n"]);return W=function(){return e},e}var V=p.b.section(W());function z(){var e=Object(m.a)(["\n  margin-top: -0.25rem;\n"]);return z=function(){return e},e}var J=p.b.div(z()),$=t(174),K=t(189),Q=t(190),X=t(191),Y=t(192),Z=t(91),ee=t.n(Z),ne=t(92),te=t.n(ne),re=t(88),ae=t.n(re),oe=t(89),ce=t.n(oe),ie=t(90),ue=t.n(ie),le=t(178),se=t(188),fe=t(180),Ee=t(179),Oe=t(173),de=t(181),me=t(176),pe=t(177),he=t(171),be=t(64),De=t(185),_e=t(87),ve=t.n(_e),ge=t(175),Me=t(48),je=t(184),Te=t(186),ye=t(83),Ae=t.n(ye),ke=t(84),xe=t.n(ke);function Ne(e){var n=e.label,t=e.options,r=e.onChange,a=e.value;return i.a.createElement(Te.a,{fullWidth:!0,options:t,getOptionLabel:function(e){return e.label},renderInput:function(e){return i.a.createElement(je.a,Object.assign({},e,{label:n,variant:"outlined",margin:"normal"}))},renderOption:function(e,n){var t=n.inputValue,r=xe()(e.label,t),a=Ae()(e.label,r);return i.a.createElement("div",null,a.map((function(e,n){return i.a.createElement("span",{key:n,style:{fontWeight:e.highlight?700:400}},e.text)})))},value:a,onChange:function(e,n){return r(n)}})}var Le,Re=Object.entries(a).map((function(e){var n=Object(O.a)(e,2),t=n[0];return{label:n[1],value:t}})),Se=function(e){var n=e.options,t=e.setOptions;return i.a.createElement(Ne,{label:"Select a path finding algorithm",options:Re,value:Re.find((function(e){return e.value===n.pather})),onChange:function(e){return t(Object(Me.a)({},n,{pather:(null===e||void 0===e?void 0:e.value)||n.pather}))}})},we=Object($.a)((function(e){return Object(K.a)({appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}})})),Ce=i.a.forwardRef((function(e,n){return i.a.createElement(ge.a,Object.assign({direction:"up",ref:n},e))}));!function(e){e[e.pather=0]="pather"}(Le||(Le={}));var Fe=function(e){var n=e.open,t=e.setOpen,r=e.options,a=e.setOptions,o=we(),u=Object(c.useState)(r),l=Object(O.a)(u,2),s=l[0],f=l[1],E=Object(c.useState)(),d=Object(O.a)(E,2),m=d[0],p=d[1],h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e||f(r),p(void 0),t(!1)};return i.a.createElement(se.a,{fullScreen:!0,open:n,onClose:function(){return h()},TransitionComponent:Ce},i.a.createElement(me.a,{className:o.appBar},i.a.createElement(pe.a,null,i.a.createElement(he.a,{edge:"start",color:"inherit",onClick:function(){return h()},"aria-label":"close"},i.a.createElement(ve.a,null)),i.a.createElement(be.a,{variant:"h6",className:o.title},"Options"),i.a.createElement(le.a,{autoFocus:!0,color:"inherit",onClick:function(){a(s),console.log(s),h(!0)}},"save"))),void 0===m&&i.a.createElement(Oe.a,null,i.a.createElement(Ee.a,{button:!0},i.a.createElement(fe.a,{primary:"Pather",secondary:s.pather,onClick:function(){return p(Le.pather)}})),i.a.createElement(de.a,null)),i.a.createElement(De.a,{py:2,px:3},m===Le.pather&&i.a.createElement(Se,{options:s,setOptions:f})))},Ie={pather:a.Dijkstra},Pe=Object($.a)((function(e){return Object(K.a)({speedDial:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)}})})),Ge=function(e){e.mode;var n=e.setMode,t=e.runPather,a=Pe(),o=i.a.useState(!1),c=Object(O.a)(o,2),u=c[0],l=c[1],s=i.a.useState(!1),f=Object(O.a)(s,2),E=f[0],d=f[1],m=i.a.useState(Ie),p=Object(O.a)(m,2),h=p[0],b=p[1],D=[{icon:i.a.createElement(ae.a,null),name:"Run ".concat(h.pather),onClick:function(){return t(h.pather)}},{icon:i.a.createElement(ce.a,null),name:"Place target node",onClick:function(){return n(r.TARGET_NODE_MODE)}},{icon:i.a.createElement(ue.a,null),name:"Options",onClick:function(){return d(!0)}}],_=function(){l(!1)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(Fe,{open:E,setOpen:d,options:h,setOptions:b}),i.a.createElement(Q.a,{ariaLabel:"SpeedDial openIcon example",className:a.speedDial,icon:i.a.createElement(X.a,{icon:i.a.createElement(ee.a,null),openIcon:i.a.createElement(te.a,null)}),onClose:_,onOpen:function(){l(!0)},open:u},D.map((function(e){return i.a.createElement(Y.a,{key:e.name,icon:e.icon,tooltipTitle:e.name,onClick:function(){_(),e.onClick()}})}))))},Be=function(e,n,t){var r=n.x,a=n.y,o=n.index,c=n.mode,i=t||b[c];return e((function(e){var n=S()(e);return n[r][a]={x:r,y:a,index:void 0===o?n[r][a].index:o,mode:i},n})),i},He=function(e,n){var t,a,o=e.flat();if(o.length>1){if(t=o.find((function(e){return e.mode===r.START_NODE_MODE})),a=o.find((function(e){return e.mode===r.TARGET_NODE_MODE})),!t){var c={x:Math.floor(Math.random()*e.length),y:Math.floor(Math.random()*e[0].length)};t=Object(Me.a)({},e[c.x][c.y],{},c,{mode:r.START_NODE_MODE})}if(!a){for(var i={x:Math.floor(Math.random()*e.length),y:Math.floor(Math.random()*e[0].length)};t&&t.x===i.x&&t.y===i.y;)i.x=Math.floor(Math.random()*e.length),i.y=Math.floor(Math.random()*e[0].length);a=Object(Me.a)({},e[i.x][i.y],{},i,{mode:r.TARGET_NODE_MODE})}var u=S()(e);u[t.x][t.y]=t,u[a.x][a.y]=a,n(u)}return{startNode:t,targetNode:a}},Ue=function(e){var n=e.grid,t=e.setGrid,a=e.mainElement,o=Object(c.useState)(!1),u=Object(O.a)(o,2),l=u[0],s=u[1],d=Object(c.useState)(r.DEFAULT_NODE_MODE),m=Object(O.a)(d,2),p=m[0],h=m[1];Object(c.useEffect)((function(){a&&(q(a,["mousedown","touchstart"],(function(){return s(!0)})),q(a,["mouseup","touchend"],(function(){s(!1),h(r.DEFAULT_NODE_MODE)})))}),[a]);var v=n.flat(),g=v.find((function(e){return e.mode===r.START_NODE_MODE})),M=v.find((function(e){return e.mode===r.TARGET_NODE_MODE}));return Object(c.useEffect)((function(){g||M||He(n,t)}),[n,t]),i.a.createElement(V,null,n&&n.map((function(e,n){return i.a.createElement(J,{key:n},e.map((function(e){return i.a.createElement(L,Object.assign({},e,{key:e.index,onMouseDown:function(){return h(Be(t,e,p===r.DEFAULT_NODE_MODE?b[e.mode]:p))},onMouseEnter:Object(E.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",l&&Be(t,e,D.includes(p)&&p));case 1:case"end":return n.stop()}}),n)}))),onMouseLeave:Object(E.a)(f.a.mark((function n(){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",l&&_.includes(p)&&Be(t,e,r.CLEAR_MODE));case 1:case"end":return n.stop()}}),n)})))}))})))})),i.a.createElement(Ge,{mode:p,setMode:h,runPather:function(e){U(e,t,g,M)}}))},qe=function(e){return e?parseFloat(getComputedStyle(e).fontSize):16},We=function(e){return 4*qe(e)*2},Ve=function(e){return e?Promise.resolve({mainElementStyle:window.getComputedStyle(e),dimensionOffset:We(e)}).then((function(e){var n=e.mainElementStyle,t=e.dimensionOffset;return[parseInt(n.getPropertyValue("width"))-t,parseInt(n.getPropertyValue("height"))-t]})):Promise.resolve([0,0])},ze=t(94),Je=function(e){return Object(ze.a)(Array(e)).map((function(e,n){return n}))},$e=function(){var e=Object(E.a)(f.a.mark((function e(n){var t,a,o,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ve(n);case 2:return t=e.sent,a=qe(n),o=2*a,c=Math.ceil(t[1]/o),i=Math.ceil(t[0]/o),e.abrupt("return",Je(c).map((function(e){return Je(i).map((function(n){return{x:e,y:n,index:e*i+n,mode:r.CLEAR_MODE}}))})));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Ke=document.getElementById("root"),Qe=function(){var e=Object(c.useState)([[]]),n=Object(O.a)(e,2),t=n[0],r=n[1];return Object(c.useEffect)((function(){(function(){var e=Object(E.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,$e(Ke);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),i.a.createElement(d.a,{theme:g},i.a.createElement(j,null,i.a.createElement(Ue,{grid:t,setGrid:Object(c.useCallback)(r,[Ke]),mainElement:Ke})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(123);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[110,1,2]]]);
//# sourceMappingURL=main.0d7e7c1f.chunk.js.map