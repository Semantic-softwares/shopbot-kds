import{$t as hp,Dn as nr,En as np,Fn as qf,Nn as qE,Pn as qL,Rn as rI,S as HE,Ut as eE,Vt as cp,Xt as hI,Yn as tP,Z as TE,_r as zL,b as Gf,cr as wI,ct as Xf,d as Dy,et as UE,gt as Yo,hn as ll,i as Bf,j as Kl,kt as ap,mt as Yl,n as BE,on as jE,ot as WE,pt as Yf,s as D,t as A,tn as ic,vr as zf,xn as nE,xt as _E}from"./chunk-B4oIUfA9.js";import{o as Jo}from"./main-FBJUUZJS.js";import{V as kl,i as Co,l as F,s as El}from"./chunk-Bwf5ZdGg.js";import{n as w}from"./chunk-BqLVxz9w.js";var ie=[`*`];function ce(t,g){if(t&1&&(Yo(0,`p`,2),hI(1),ic()),t&2){let e=jE();Dy(),hp(e.subtitle())}}var U=class t{title=zL.required();subtitle=zL(``);static ɵfac=function(e){return new(e||t)};static ɵcmp=eE({type:t,selectors:[[`app-kiosk-header`]],inputs:{title:[1,`title`],subtitle:[1,`subtitle`]},ngContentSelectors:ie,decls:8,vars:2,consts:[[1,`mb-8`,`flex`,`flex-wrap`,`items-center`,`justify-between`,`gap-4`],[1,`text-2xl`,`font-bold`,`text-slate-900`,`dark:text-white`],[1,`mt-1`,`text-slate-500`,`dark:text-slate-400`],[1,`flex`,`flex-wrap`,`items-center`,`gap-2`]],template:function(e,r){e&1&&(HE(),Yo(0,`div`,0)(1,`div`)(2,`h1`,1),hI(3),ic(),TE(4,ce,2,1,`p`,2),ic(),Yo(5,`div`,3),BE(6),zf(7,`app-theme-toggle`),ic()()),e&2&&(Dy(3),hp(r.title()),Dy(),_E(r.subtitle()?4:-1))},dependencies:[w],encapsulation:2})};var se=new A(`MAT_CARD_CONFIG`);var J=(()=>{class t{appearance;constructor(){let e=D(se,{optional:!0});this.appearance=e?.appearance||`raised`}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){return eE({type:t,selectors:[[`mat-card`]],hostAttrs:[1,`mat-mdc-card`,`mdc-card`],hostVars:8,hostBindings:function(d,o){d&2&&cp(`mat-mdc-card-outlined`,o.appearance===`outlined`)(`mdc-card--outlined`,o.appearance===`outlined`)(`mat-mdc-card-filled`,o.appearance===`filled`)(`mdc-card--filled`,o.appearance===`filled`)},inputs:{appearance:`appearance`},exportAs:[`matCard`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(d,o){d&1&&(HE(),BE(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-color: var(--%NS%mat-card-elevated-container-color, var(--%NS%mat-sys-surface-container-low));
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-elevated-container-elevation, var(--%NS%mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--%NS%mat-card-elevated-container-shape, var(--%NS%mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--%NS%mat-card-outlined-container-color, var(--%NS%mat-sys-surface));
  border-radius: var(--%NS%mat-card-outlined-container-shape, var(--%NS%mat-sys-corner-medium));
  border-width: var(--%NS%mat-card-outlined-outline-width, 1px);
  border-color: var(--%NS%mat-card-outlined-outline-color, var(--%NS%mat-sys-outline-variant));
  box-shadow: var(--%NS%mat-card-outlined-container-elevation, var(--%NS%mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--%NS%mat-card-filled-container-color, var(--%NS%mat-sys-surface-container-highest));
  border-radius: var(--%NS%mat-card-filled-container-shape, var(--%NS%mat-sys-corner-medium));
  box-shadow: var(--%NS%mat-card-filled-container-elevation, var(--%NS%mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--%NS%mat-card-title-text-font, var(--%NS%mat-sys-title-large-font));
  line-height: var(--%NS%mat-card-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-size: var(--%NS%mat-card-title-text-size, var(--%NS%mat-sys-title-large-size));
  letter-spacing: var(--%NS%mat-card-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  font-weight: var(--%NS%mat-card-title-text-weight, var(--%NS%mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--%NS%mat-card-subtitle-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-card-subtitle-text-font, var(--%NS%mat-sys-title-medium-font));
  line-height: var(--%NS%mat-card-subtitle-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  font-size: var(--%NS%mat-card-subtitle-text-size, var(--%NS%mat-sys-title-medium-size));
  letter-spacing: var(--%NS%mat-card-subtitle-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
  font-weight: var(--%NS%mat-card-subtitle-text-weight, var(--%NS%mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2})})()}return t})();var Y=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=nE({type:t});static ɵinj=ll({imports:[F]})}return t})();var me=new A(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:ee})});var ee=100;var le=10;var te=(()=>{class t{_elementRef=D(nr);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=D(me),r=Co(),d=this._elementRef.nativeElement;this._noopAnimations=r===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=d.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&r===`reduced-motion`&&d.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=ee;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-le)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(r){return new(r||t)};static ɵcmp=(function(){let e=[`determinateSpinner`];function r(d,o){if(d&1&&(Yl(),Yo(0,`svg`,11),zf(1,`circle`,12),ic()),d&2){let a=jE();Gf(`viewBox`,a._viewBox()),Dy(),ap(`stroke-dasharray`,a._strokeCircumference(),`px`)(`stroke-dashoffset`,a._strokeCircumference()/2,`px`)(`stroke-width`,a._circleStrokeWidth(),`%`),Gf(`r`,a._circleRadius())}}return eE({type:t,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(o,a){if(o&1&&np(e,5),o&2){let b;UE(b=WE())&&(a._determinateCircle=b.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(o,a){o&2&&(Gf(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,a.mode===`determinate`?a.value:null)(`mode`,a.mode),rI(`mat-`+a.color),ap(`width`,a.diameter,`px`)(`height`,a.diameter,`px`)(`--%NS%mat-progress-spinner-size`,a.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,a.diameter+`px`),cp(`_mat-animation-noopable`,a._noopAnimations)(`mdc-circular-progress--indeterminate`,a.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,tP],diameter:[2,`diameter`,`diameter`,tP],strokeWidth:[2,`strokeWidth`,`strokeWidth`,tP]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(o,a){if(o&1&&(Bf(0,r,2,8,`ng-template`,null,0,wI),Yo(2,`div`,2,1),Yl(),Yo(4,`svg`,3),zf(5,`circle`,4),ic()(),Kl(),Yo(6,`div`,5)(7,`div`,6)(8,`div`,7),Yf(9,8),ic(),Yo(10,`div`,9),Yf(11,8),ic(),Yo(12,`div`,10),Yf(13,8),ic()()()),o&2){let b=qE(1);Dy(4),Gf(`viewBox`,a._viewBox()),Dy(),ap(`stroke-dasharray`,a._strokeCircumference(),`px`)(`stroke-dashoffset`,a._strokeDashOffset(),`px`)(`stroke-width`,a._circleStrokeWidth(),`%`),Gf(`r`,a._circleRadius()),Dy(4),qf(`ngTemplateOutlet`,b),Dy(2),qf(`ngTemplateOutlet`,b),Dy(2),qf(`ngTemplateOutlet`,b)}},dependencies:[Jo],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})})()}return t})();var re=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵmod=nE({type:t});static ɵinj=ll({imports:[F]})}return t})();function ue(t,g){if(t&1&&(Yo(0,`p`,6),hI(1),ic()),t&2){let e=jE();Dy(),hp(e.subtitle())}}function fe(t,g){t&1&&zf(0,`mat-spinner`,7)}var ae=class t{title=zL.required();subtitle=zL(``);icon=zL(`storefront`);iconColor=zL(`#f97316`);busy=zL(!1);disabled=zL(!1);activate=qL();iconBg=()=>`${this.iconColor()}1a`;static ɵfac=function(e){return new(e||t)};static ɵcmp=eE({type:t,selectors:[[`app-selectable-tile`]],inputs:{title:[1,`title`],subtitle:[1,`subtitle`],icon:[1,`icon`],iconColor:[1,`iconColor`],busy:[1,`busy`],disabled:[1,`disabled`]},outputs:{activate:`activate`},decls:10,vars:12,consts:[[`appearance`,`outlined`,1,`!cursor-pointer`,`!border-slate-200`,`!bg-white`,`transition-colors`,`hover:!border-orange-500`,`hover:!bg-slate-50`,`dark:!border-slate-800`,`dark:!bg-slate-900`,`dark:hover:!bg-slate-800`,3,`click`],[1,`flex`,`items-center`,`gap-4`,`p-2`],[1,`flex`,`h-14`,`w-14`,`shrink-0`,`items-center`,`justify-center`,`rounded-xl`,`text-2xl`],[1,`!h-8`,`!w-8`,`!text-3xl`],[1,`min-w-0`,`flex-1`],[1,`truncate`,`text-lg`,`font-semibold`,`text-slate-900`,`dark:text-white`],[1,`truncate`,`text-sm`,`capitalize`,`text-slate-500`,`dark:text-slate-400`],[`diameter`,`24`]],template:function(e,r){e&1&&(Yo(0,`mat-card`,0),Xf(`click`,function(){return r.activate.emit()}),Yo(1,`div`,1)(2,`div`,2)(3,`mat-icon`,3),hI(4),ic()(),Yo(5,`div`,4)(6,`p`,5),hI(7),ic(),TE(8,ue,2,1,`p`,6),ic(),TE(9,fe,1,0,`mat-spinner`,7),ic()()),e&2&&(cp(`!opacity-50`,r.disabled())(`!pointer-events-none`,r.disabled()),Dy(2),ap(`background-color`,r.iconBg()),Dy(),ap(`color`,r.iconColor()),Dy(),hp(r.icon()),Dy(3),hp(r.title()),Dy(),_E(r.subtitle()?8:-1),Dy(),_E(r.busy()?9:-1))},dependencies:[Y,J,El,kl,re,te],encapsulation:2})};function he(t,g){if(t&1&&(Yo(0,`p`,3),hI(1),ic()),t&2){let e=jE();Dy(),hp(e.message())}}var ne=class t{icon=zL(`inbox`);title=zL.required();message=zL(``);static ɵfac=function(e){return new(e||t)};static ɵcmp=eE({type:t,selectors:[[`app-empty-state`]],inputs:{icon:[1,`icon`],title:[1,`title`],message:[1,`message`]},decls:6,vars:3,consts:[[1,`flex`,`flex-col`,`items-center`,`justify-center`,`gap-3`,`rounded-xl`,`border`,`border-slate-200`,`bg-white`,`p-10`,`text-center`,`dark:border-slate-800`,`dark:bg-slate-900`],[1,`!h-10`,`!w-10`,`!text-4xl`,`text-slate-400`,`dark:text-slate-600`],[1,`text-lg`,`font-semibold`,`text-slate-900`,`dark:text-white`],[1,`max-w-sm`,`text-sm`,`text-slate-500`,`dark:text-slate-400`]],template:function(e,r){e&1&&(Yo(0,`div`,0)(1,`mat-icon`,1),hI(2),ic(),Yo(3,`p`,2),hI(4),ic(),TE(5,he,2,1,`p`,3),ic()),e&2&&(Dy(2),hp(r.icon()),Dy(2),hp(r.title()),Dy(),_E(r.message()?5:-1))},dependencies:[El,kl],encapsulation:2})};export{ae as n,ne as r,U as t};