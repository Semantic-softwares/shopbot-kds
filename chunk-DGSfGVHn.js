import{$n as ua$1,$t as hp,A as Kf,B as Os,C as Hc,D as JL,Dn as nr$1,En as np,F as NE,Fn as qf,In as qg,J as SE,Kn as sh,L as Ng,M as LE,Mt as be$1,Nn as qE,Nt as bo$1,On as oh,P as ME,Pn as qL,Pt as cE,Qn as ty,Rn as rI,S as HE,St as _I,Ut as eE,V as Pl,Vt as cp,Wn as se,Wt as eP,Xn as tp,Xt as hI,Yn as tP,Yt as gp,Z as TE,Zn as tr$1,_ as G,_r as zL,_t as Z$1,a as Bn$1,ar as vh,at as W,b as Gf,bt as _$1,c as DI,ct as Xf,d as Dy,dr as wp,en as iE,er as uc,et as UE,f as Eh,fr as xe,gr as yn,gt as Yo$1,h as Fm,hn as ll,i as Bf,it as Vf,kn as op,kt as ap,m as Fl,mn as li,mt as Yl,n as BE,nn as ie,on as jE,ot as WE,p as En$1,r as Be,rt as Vc,s as D,t as A,tn as ic,tt as UI,u as Di,ur as wi,ut as Xr,v as GE,vr as zf,vt as ZL,wn as ne,x as Gp,xn as nE,xt as _E,yt as Zn$1}from"./chunk-B4oIUfA9.js";import{a as Ho$1,c as Uo$1,d as nn$1,n as At,r as Bo$1,t as p,u as jo$1}from"./main-FBJUUZJS.js";import{A as _d,B as ke,C as Wo$1,D as Zi,E as Ze,F as bn$1,G as ol,H as ks,I as fn$1,K as pn$1,L as go$1,M as _o$1,N as aa$1,O as Zt$1,P as ao$1,Q as z,R as il,S as Vt,T as Yt,U as me,V as kl,X as wt$1,Y as to,Z as yi,_ as Si,a as Di$1,b as Ut,c as Et,f as Gi,g as Lt,h as Ke,j as _e,k as _$2,l as F,n as $e,o as Do$1,p as Ht,q as rc,r as $o$1,s as El,t as $,u as Ft,v as T,w as Xt,x as Vi,y as Tt$1,z as it}from"./chunk-Bwf5ZdGg.js";import{_ as Zt$2,a as Mi,c as Pi,d as Rn$1,f as Ro$1,g as X,i as Li,l as Re$1,m as To$1,n as Jr,o as Oi,s as On$1,t as Fi,x as gt$1,y as et}from"./chunk-Cgpe6kpV.js";import{t as m}from"./chunk-WfP4DnYd.js";function In(i){i||(i=D(ie));let t=new _$1(e=>{if(i.destroyed){e.next();return}return i.onDestroy(e.next.bind(e))});return e=>e.pipe(Eh(t))}var Oe=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var Tn=(()=>{class i extends _e{_elementRef=D(nr$1);_focusTrapFactory=D(go$1);_config;_interactivityChecker=D(ao$1);_ngZone=D(be$1);_focusMonitor=D(Ft);_renderer=D(ua$1);_changeDetectorRef=D(JL);_injector=D(ne);_platform=D(_$2);_document=D(Bn$1);_portalOutlet;_focusTrapped=new Z$1;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=D(Oe,{optional:!0})||new Oe,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let n=this._ariaLabelledByQueue.indexOf(e);n>-1&&(this._ariaLabelledByQueue.splice(n,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),n}attachTemplatePortal(e){this._portalOutlet.hasAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),n}attachDomPortal=e=>{this._portalOutlet.hasAttached();let n=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),n};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{o(),s(),e.removeAttribute(`tabindex`)},o=this._renderer.listen(e,`blur`,a),s=this._renderer.listen(e,`mousedown`,a)})),e.focus(n)}_focusByCssSelector(e,n){let a=this._elementRef.nativeElement.querySelector(e);a&&this._forceFocus(a,n)}_trapFocus(e){this._isDestroyed||ty(()=>{let n=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||n.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e)}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,n=null;if(typeof e==`string`?n=this._document.querySelector(e):typeof e==`boolean`?n=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(n=e),this._config.restoreFocus&&n&&typeof n.focus==`function`){let a=to(),o=this._elementRef.nativeElement;(!a||a===this._document.body||a===o||o.contains(a))&&(this._focusMonitor?(this._focusMonitor.focusVia(n,this._closeInteractionType),this._closeInteractionType=null):n.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,n=to();return e===n||e.contains(n)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=to()))}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){function e(n,a){}return eE({type:i,selectors:[[`cdk-dialog-container`]],viewQuery:function(a,o){if(a&1&&np(rc,7),a&2){let s;UE(s=WE())&&(o._portalOutlet=s.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(a,o){a&2&&Gf(`id`,o._config.id||null)(`role`,o._config.role)(`aria-modal`,o._config.ariaModal)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null)},features:[Vf],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(a,o){a&1&&Bf(0,e,0,0,`ng-template`,0)},dependencies:[rc],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})})()}return i})();var Pe=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new Z$1;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(t,e){this.overlayRef=t,this.config=e,this.disableClose=e.disableClose,this.backdropClick=t.backdropClick(),this.keydownEvents=t.keydownEvents(),this.outsidePointerEvents=t.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(n=>{n.keyCode===27&&!this.disableClose&&!wt$1(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=t.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(t,e){if(this._canClose(t)){let n=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),n.next(t),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(t=``,e=``){return this.overlayRef.updateSize({width:t,height:e}),this}addPanelClass(t){return this.overlayRef.addPanelClass(t),this}removePanelClass(t){return this.overlayRef.removePanelClass(t),this}_canClose(t){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(t,e,this.componentInstance))}};var ho=new A(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let i=D(ne);return()=>Vi(i)}});var go=new A(`DialogData`);var bo=new A(`DefaultDialogConfig`);function fo(i){let t=bo$1(i),e=new xe;return{valueSignal:t,get value(){return t()},change:e,ngOnDestroy(){e.complete()}}}var On=(()=>{class i{_injector=D(ne);_defaultOptions=D(bo,{optional:!0});_parentDialog=D(i,{optional:!0,skipSelf:!0});_overlayContainer=D(Gi);_idGenerator=D(Lt);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Z$1;_afterOpenedAtThisLevel=new Z$1;_ariaHiddenElements=new Map;_scrollStrategy=D(ho);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=oh(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(vh(void 0)));open(e,n){let a=this._defaultOptions||new Oe;n=W(W({},a),n),n.id=n.id||this._idGenerator.getId(`cdk-dialog-`),n.id&&this.getDialogById(n.id);let o=this._getOverlayConfig(n),s=Zt$1(this._injector,o),r=new Pe(s,n),u=this._attachContainer(s,r,n);if(r.containerInstance=u,!this.openDialogs.length){let v=this._overlayContainer.getContainerElement();u._focusTrapped?u._focusTrapped.pipe(wi(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(v)}):this._hideNonDialogContentFromAssistiveTechnology(v)}return this._attachDialogContent(e,r,u,n),this.openDialogs.push(r),r.closed.subscribe(()=>this._removeOpenDialog(r,!0)),this.afterOpened.next(r),r}closeAll(){Nn(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){Nn(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Nn(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let n=new Yt({positionStrategy:e.positionStrategy||Zi().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(n.backdropClass=e.backdropClass),n}_attachContainer(e,n,a){let o=a.injector||a.viewContainerRef?.injector,s=[{provide:Oe,useValue:a},{provide:Pe,useValue:n},{provide:ke,useValue:e}],r;a.container?typeof a.container==`function`?r=a.container:(r=a.container.type,s.push(...a.container.providers(a))):r=Tn;let u=new Ht(r,a.viewContainerRef,ne.create({parent:o||this._injector,providers:s}));return e.attach(u).instance}_attachDialogContent(e,n,a,o){if(e instanceof Zn$1){let s=this._createInjector(o,n,a,void 0),r={$implicit:o.data,dialogRef:n};o.templateContext&&(r=W(W({},r),typeof o.templateContext==`function`?o.templateContext():o.templateContext)),a.attachTemplatePortal(new Ut(e,null,r,s))}else{let s=this._createInjector(o,n,a,this._injector),r=a.attachComponentPortal(new Ht(e,o.viewContainerRef,s,null,o.bindings));n.componentRef=r,n.componentInstance=r.instance}}_createInjector(e,n,a,o){let s=e.injector||e.viewContainerRef?.injector,r=[{provide:go,useValue:e.data},{provide:Pe,useValue:n}];return e.providers&&(typeof e.providers==`function`?r.push(...e.providers(n,e,a)):r.push(...e.providers)),e.direction&&(!s||!s.get(it,null,{optional:!0}))&&r.push({provide:it,useValue:fo(e.direction)}),ne.create({parent:s||o,providers:r})}_removeOpenDialog(e,n){let a=this.openDialogs.indexOf(e);a>-1&&(this.openDialogs.splice(a,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,s)=>{o?s.setAttribute(`aria-hidden`,o):s.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),n&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let n=e.parentElement.children;for(let a=n.length-1;a>-1;a--){let o=n[a];o!==e&&o.nodeName!==`SCRIPT`&&o.nodeName!==`STYLE`&&!o.hasAttribute(`aria-live`)&&!o.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(o,o.getAttribute(`aria-hidden`)),o.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(n){return new(n||i)};static ɵprov=tr$1({token:i,factory:i.ɵfac})}return i})();function Nn(i,t){let e=i.length;for(;e--;)t(i[e])}var ea=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=nE({type:i});static ɵinj=ll({providers:[On],imports:[bn$1,Di$1,Ze,Di$1]})}return i})();var $t=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var Mn=`mdc-dialog--open`;var ta=`mdc-dialog--opening`;var na=`mdc-dialog--closing`;var _o=150;var vo=75;var yo=(()=>{class i extends Tn{_animationStateChanged=new xe;_animationsEnabled=!$();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?aa(this._config.enterAnimationDuration)??_o:0;_exitAnimationDuration=this._animationsEnabled?aa(this._config.exitAnimationDuration)??vo:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(ia,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ta,Mn)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(Mn),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(Mn),this._animationsEnabled?(this._hostElement.style.setProperty(ia,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(na)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(ta,na)}_waitForAnimationToComplete(e,n){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(n,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let n=super.attachComponentPortal(e);return n.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),n}static ɵfac=(()=>{let e;return function(a){return(e||(e=qg(i)))(a||i)}})();static ɵcmp=(function(){function e(n,a){}return eE({type:i,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(a,o){a&2&&(Kf(`id`,o._config.id),Gf(`aria-modal`,o._config.ariaModal)(`role`,o._config.role)(`aria-labelledby`,o._config.ariaLabel?null:o._ariaLabelledByQueue[0])(`aria-label`,o._config.ariaLabel)(`aria-describedby`,o._config.ariaDescribedBy||null),cp(`_mat-animation-noopable`,!o._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,o._actionSectionCount>0))},features:[Vf],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(a,o){a&1&&(Yo$1(0,`div`,0)(1,`div`,1),Bf(2,e,0,0,`ng-template`,2),ic()())},dependencies:[rc],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})})()}return i})();var ia=`--mat-dialog-transition-duration`;function aa(i){return i==null?null:typeof i==`number`?i:i.endsWith(`ms`)?Tt$1(i.substring(0,i.length-2)):i.endsWith(`s`)?Tt$1(i.substring(0,i.length-1))*1e3:i===`0`?0:null}var Wt=(function(i){return i[i.OPEN=0]=`OPEN`,i[i.CLOSING=1]=`CLOSING`,i[i.CLOSED=2]=`CLOSED`,i})(Wt||{});var ze=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new yn(1);_beforeClosed=new yn(1);_result;_closeFallbackTimeout;_state=Wt.OPEN;_closeInteractionType;constructor(t,e,n){this._ref=t,this._config=e,this._containerInstance=n,this.disableClose=e.disableClose,this.id=t.id,t.addPanelClass(`mat-mdc-dialog-panel`),n._animationStateChanged.pipe(En$1(a=>a.state===`opened`),wi(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),n._animationStateChanged.pipe(En$1(a=>a.state===`closed`),wi(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),t.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),sh(this.backdropClick(),this.keydownEvents().pipe(En$1(a=>a.keyCode===27&&!this.disableClose&&!wt$1(a)))).subscribe(a=>{this.disableClose||(a.preventDefault(),oa(this,a.type===`keydown`?`keyboard`:`mouse`))})}close(t){let e=this._config.closePredicate;e&&!e(t,this._config,this.componentInstance)||(this._result=t,this._containerInstance._animationStateChanged.pipe(En$1(n=>n.state===`closing`),wi(1)).subscribe(n=>{this._beforeClosed.next(t),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),n.totalTime+100)}),this._state=Wt.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(t){let e=this._ref.config.positionStrategy;return t&&(t.left||t.right)?t.left?e.left(t.left):e.right(t.right):e.centerHorizontally(),t&&(t.top||t.bottom)?t.top?e.top(t.top):e.bottom(t.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(t=``,e=``){return this._ref.updateSize(t,e),this}addPanelClass(t){return this._ref.addPanelClass(t),this}removePanelClass(t){return this._ref.removePanelClass(t),this}getState(){return this._state}_finishDialogClose(){this._state=Wt.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function oa(i,t,e){return i._closeInteractionType=t,i.close(e)}var ko=new A(`MatMdcDialogData`);var xo=new A(`mat-mdc-dialog-default-options`);var wo=new A(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=D(ne);return()=>Vi(i)}});var vt=(()=>{class i{_defaultOptions=D(xo,{optional:!0});_scrollStrategy=D(wo);_parentDialog=D(i,{optional:!0,skipSelf:!0});_idGenerator=D(Lt);_injector=D(ne);_dialog=D(On);_animationsDisabled=$();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new Z$1;_afterOpenedAtThisLevel=new Z$1;dialogConfigClass=$t;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=oh(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(vh(void 0)));constructor(){this._dialogRefConstructor=ze,this._dialogContainerType=yo,this._dialogDataToken=ko}open(e,n){let a;n=W(W({},this._defaultOptions||new $t),n),n.id=n.id||this._idGenerator.getId(`mat-mdc-dialog-`),n.scrollStrategy=n.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,G(W({},n),{positionStrategy:Zi(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||n.enterAnimationDuration?.toLocaleString()===`0`||n.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:n},{provide:Oe,useValue:n}]},templateContext:()=>({dialogRef:a}),providers:(s,r,u)=>(a=new this._dialogRefConstructor(s,n,u),a.updatePosition(n?.position),[{provide:this._dialogContainerType,useValue:u},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:a},{provide:Pe,useValue:null}])}));return a.componentRef=o.componentRef,a.componentInstance=o.componentInstance,this.openDialogs.push(a),this.afterOpened.next(a),a.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(a);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),a}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(n=>n.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let n=e.length;for(;n--;)e[n].close()}static ɵfac=function(n){return new(n||i)};static ɵprov=tr$1({token:i,factory:i.ɵfac})}return i})();var ra=(()=>{class i{dialogRef=D(ze,{optional:!0});_elementRef=D(nr$1);_dialog=D(vt);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=ma(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let n=e._matDialogClose;n&&(this.dialogResult=n.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&oa(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(n){return new(n||i)};static ɵdir=iE({type:i,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(n,a){n&1&&Xf(`click`,function(s){return a._onButtonClick(s)}),n&2&&Gf(`aria-label`,a.ariaLabel||null)(`type`,a.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[Ng]})}return i})();var sa=(()=>{class i{_dialogRef=D(ze,{optional:!0});_elementRef=D(nr$1);_dialog=D(vt);ngOnInit(){this._dialogRef||(this._dialogRef=ma(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(n){return new(n||i)};static ɵdir=iE({type:i})}return i})();var la=(()=>{class i extends sa{id=D(Lt).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function(a){return(e||(e=qg(i)))(a||i)}})();static ɵdir=iE({type:i,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(n,a){n&2&&Kf(`id`,a.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[Vf]})}return i})();var da=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=iE({type:i,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[cE([Wo$1])]})}return i})();var ca=(()=>{class i extends sa{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function(a){return(e||(e=qg(i)))(a||i)}})();static ɵdir=iE({type:i,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(n,a){n&2&&cp(`mat-mdc-dialog-actions-align-start`,a.align===`start`)(`mat-mdc-dialog-actions-align-center`,a.align===`center`)(`mat-mdc-dialog-actions-align-end`,a.align===`end`)},inputs:{align:`align`},features:[Vf]})}return i})();function ma(i,t){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?t.find(n=>n.id===e.id):null}var ua=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=nE({type:i});static ɵinj=ll({providers:[vt],imports:[ea,bn$1,Di$1,F]})}return i})();var Ve=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new Z$1;bulk={select:t=>this._select(t),deselect:t=>this._deselect(t),setSelection:t=>this._setSelection(t)};constructor(t=!1,e,n=!0,a){this._multiple=t,this._emitChanges=n,this.compareWith=a,e&&e.length&&(t?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...t){return this._select(t)}deselect(...t){return this._deselect(t)}setSelection(...t){return this._setSelection(t)}toggle(t){return this.isSelected(t)?this.deselect(t):this.select(t)}clear(t=!0){this._unmarkAll();let e=this._hasQueuedChanges();return t&&this._emitChangeEvent(),e}isSelected(t){return this._selection.has(this._getConcreteValue(t))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(t){this._multiple&&this.selected&&this._selected.sort(t)}isMultipleSelection(){return this._multiple}_select(t){this._verifyValueAssignment(t),t.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(t){this._verifyValueAssignment(t),t.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(t){this._verifyValueAssignment(t);let e=this.selected,n=new Set(t.map(o=>this._getConcreteValue(o)));t.forEach(o=>this._markSelected(o)),e.filter(o=>!n.has(this._getConcreteValue(o,n))).forEach(o=>this._unmarkSelected(o));let a=this._hasQueuedChanges();return this._emitChangeEvent(),a}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(t){t=this._getConcreteValue(t),this.isSelected(t)||(this._multiple||this._unmarkAll(),this.isSelected(t)||this._selection.add(t),this._emitChanges&&this._selectedToEmit.push(t))}_unmarkSelected(t){t=this._getConcreteValue(t),this.isSelected(t)&&(this._selection.delete(t),this._emitChanges&&this._deselectedToEmit.push(t))}_unmarkAll(){this.isEmpty()||this._selection.forEach(t=>this._unmarkSelected(t))}_verifyValueAssignment(t){t.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(t,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(t,n))return n;return t}else return t}};var Dn=(()=>{class i{_listeners=[];notify(e,n){for(let a of this._listeners)a(e,n)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(n=>e!==n)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(n){return new(n||i)};static ɵprov=tr$1({token:i,factory:i.ɵfac})}return i})();var Qt=(()=>{class i{_animationsDisabled=$();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(n){return new(n||i)};static ɵcmp=eE({type:i,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(n,a){n&2&&cp(`mat-pseudo-checkbox-indeterminate`,a.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,a.state===`checked`)(`mat-pseudo-checkbox-disabled`,a.disabled)(`mat-pseudo-checkbox-minimal`,a.appearance===`minimal`)(`mat-pseudo-checkbox-full`,a.appearance===`full`)(`_mat-animation-noopable`,a._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(n,a){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return i})();var An=new A(`MAT_OPTION_PARENT_COMPONENT`);var Rn=new A(`MatOptgroup`);var En=class{source;isUserInput;constructor(t,e=!1){this.source=t,this.isUserInput=e}};var Me=(()=>{class i{_element=D(nr$1);_changeDetectorRef=D(JL);_parent=D(An,{optional:!0});group=D(Rn,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue=``;get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=D(Lt).getId(`mat-option-`);get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=bo$1(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new xe;_text;_stateChanges=new Z$1;constructor(){let e=D(z);e.load(yi),e.load(me),this._signalDisableRipple=!!this._parent&&Os(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||``).trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let a=this._getHostElement();typeof a.focus==`function`&&a.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!wt$1(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new En(this,e))}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`text`],n=[[[`mat-icon`]],`*`],a=[`mat-icon`,`*`];function o(u,v){if(u&1&&zf(0,`mat-pseudo-checkbox`,1),u&2){let g=jE();qf(`disabled`,g.disabled)(`state`,g.selected?`checked`:`unchecked`)}}function s(u,v){if(u&1&&zf(0,`mat-pseudo-checkbox`,3),u&2){let g=jE();qf(`disabled`,g.disabled)}}function r(u,v){if(u&1&&(Yo$1(0,`span`,4),hI(1),ic()),u&2){let g=jE();Dy(),uc(`(`,g.group.label,`)`)}}return eE({type:i,selectors:[[`mat-option`]],viewQuery:function(v,g){if(v&1&&np(e,7),v&2){let w;UE(w=WE())&&(g._text=w.first)}},hostAttrs:[`role`,`option`,1,`mat-mdc-option`,`mdc-list-item`],hostVars:11,hostBindings:function(v,g){v&1&&Xf(`click`,function(){return g._selectViaInteraction()})(`keydown`,function(M){return g._handleKeydown(M)}),v&2&&(Kf(`id`,g.id),Gf(`aria-selected`,g.selected)(`aria-disabled`,g.disabled.toString()),cp(`mdc-list-item--selected`,g.selected)(`mat-mdc-option-multiple`,g.multiple)(`mat-mdc-option-active`,g.active)(`mdc-list-item--disabled`,g.disabled))},inputs:{value:`value`,id:`id`,disabled:[2,`disabled`,`disabled`,eP]},outputs:{onSelectionChange:`onSelectionChange`},exportAs:[`matOption`],ngContentSelectors:a,decls:8,vars:5,consts:[[`text`,``],[`aria-hidden`,`true`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`,`state`],[1,`mdc-list-item__primary-text`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,1,`mat-mdc-option-pseudo-checkbox`,3,`disabled`],[1,`cdk-visually-hidden`],[`aria-hidden`,`true`,`mat-ripple`,``,1,`mat-mdc-option-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`]],template:function(v,g){v&1&&(HE(n),TE(0,o,1,2,`mat-pseudo-checkbox`,1),BE(1),Yo$1(2,`span`,2,0),BE(4,1),ic(),TE(5,s,1,1,`mat-pseudo-checkbox`,3),TE(6,r,2,1,`span`,4),zf(7,`div`,5)),v&2&&(_E(g.multiple?0:-1),Dy(5),_E(!g.multiple&&g.selected&&!g.hideSingleSelectionIndicator?5:-1),Dy(),_E(g.group&&g.group._inert?6:-1),Dy(),qf(`matRippleTrigger`,g._getHostElement())(`matRippleDisabled`,g.disabled||g.disableRipple))},dependencies:[Qt,ks],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return i})();function pa(i,t,e){if(e.length){let n=t.toArray(),a=e.toArray(),o=0;for(let s=0;s<i+1;s++)n[s].group&&n[s].group===a[o]&&o++;return o}return 0}function ha(i,t,e,n){return i<e?i:i+t>e+n?Math.max(0,i-n+t):e}var ga=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=nE({type:i});static ɵinj=ll({imports:[F]})}return i})();var Bn=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=nE({type:i});static ɵinj=ll({imports:[Si,ga,Me,F]})}return i})();var Io=new A(`mat-select-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=D(ne);return()=>Xt(i)}});var No=new A(`MAT_SELECT_CONFIG`);var To=new A(`MatSelectTrigger`);var Fn=class{source;value;constructor(t,e){this.source=t,this.value=e}};var Jt=(()=>{class i{_viewportRuler=D(Et);_changeDetectorRef=D(JL);_elementRef=D(nr$1);_dir=D(it,{optional:!0});_idGenerator=D(Lt);_renderer=D(ua$1);_parentFormField=D(Li,{optional:!0});ngControl=D(X,{self:!0,optional:!0});_liveAnnouncer=D(_o$1);_defaultOptions=D(No,{optional:!0});_animationsDisabled=$();_popoverLocation;_initialized=new Z$1;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`,panelClass:`mat-mdc-select-panel-above`}];_scrollOptionIntoView(e){let n=this.options.toArray()[e];if(n){let a=this.panel.nativeElement,o=pa(e,this.options,this.optionGroups),s=n._getHostElement();e===0&&o===1?a.scrollTop=0:a.scrollTop=ha(s.offsetTop,s.offsetHeight,a.scrollTop,a.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Fn(this,e)}_scrollStrategyFactory=D(Io);_panelOpen=!1;_compareWith=(e,n)=>e===n;_uid=this._idGenerator.getId(`mat-select-`);_triggerAriaLabelledBy=null;_previousControl;_destroy=new Z$1;_errorStateTracker;stateChanges=new Z$1;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId(`mat-select-value-`);_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||``;get focused(){return this._focused||this._panelOpen}_focused=!1;controlType=`mat-select`;trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=bo$1(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(et.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel=``;ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<`u`?this._defaultOptions.panelWidth:`auto`;canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=oh(()=>{let e=this.options;return e?e.changes.pipe(vh(e),Hc(()=>sh(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(Hc(()=>this.optionSelectionChanges))});openedChange=new xe;_openedStream=this.openedChange.pipe(En$1(e=>e),Be(()=>{}));_closedStream=this.openedChange.pipe(En$1(e=>!e),Be(()=>{}));selectionChange=new xe;valueChange=new xe;constructor(){let e=D(To$1),n=D(Mi,{optional:!0}),a=D(Fi,{optional:!0}),o=D(new wp(`tabindex`),{optional:!0}),s=D(fn$1,{optional:!0}),r=D(Jr,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new On$1(e,r||this.ngControl,a,n,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=s?.usePopover===!1?null:`inline`,this.id=this.id}ngOnInit(){this._selectionModel=new Ve(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Eh(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Eh(this._destroy)).subscribe(e=>{e.added.forEach(n=>n.select()),e.removed.forEach(n=>n.deselect())}),this.options.changes.pipe(vh(null),Eh(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),n=this.ngControl;if(e!==this._triggerAriaLabelledBy){let a=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?a.setAttribute(`aria-labelledby`,e):a.removeAttribute(`aria-labelledby`)}n&&(this._previousControl!==n.control&&(this._previousControl!==void 0&&n.disabled!==null&&n.disabled!==this.disabled&&(this.disabled=n.disabled),this._previousControl=n.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(wi(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{n(),clearTimeout(a),this._cleanupDetach=void 0};let e=this.panel.nativeElement,n=this._renderer.listen(e,`animationend`,o=>{o.animationName===`_mat-select-exit`&&(this._cleanupDetach?.(),this._detachOverlay())}),a=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add(`mat-select-panel-exit`)}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return``;if(this._multiple){let e=this._selectionModel.selected.map(n=>n.viewValue);return this._isRtl()&&e.reverse(),e.join(`, `)}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value===`rtl`:!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let n=e.keyCode,a=n===40||n===38||n===37||n===39,o=n===13||n===32,s=this._keyManager;if(!s.isTyping()&&o&&!wt$1(e)||(this.multiple||e.altKey)&&a)e.preventDefault(),this.open();else if(!this.multiple){let r=this.selected;s.onKeydown(e);let u=this.selected;u&&r!==u&&this._liveAnnouncer.announce(u.viewValue,1e4)}}_handleOpenKeydown(e){let n=this._keyManager,a=e.keyCode,o=a===40||a===38,s=n.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!s&&(a===13||a===32)&&n.activeItem&&!wt$1(e))e.preventDefault(),n.activeItem._selectViaInteraction();else if(!s&&this._multiple&&a===65&&e.ctrlKey){e.preventDefault();let r=this.options.some(u=>!u.disabled&&!u.selected);this.options.forEach(u=>{u.disabled||(r?u.select():u.deselect())})}else{let r=n.activeItemIndex;n.onKeydown(e),this._multiple&&o&&e.shiftKey&&n.activeItem&&n.activeItemIndex!==r&&n.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!wt$1(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(n=>n.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)e.forEach(n=>this._selectOptionByValue(n)),this._sortValues();else{let n=this._selectOptionByValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let n=this.options.find(a=>{if(this._selectionModel.isSelected(a))return!1;try{return(a.value!=null||this.canSelectNullableOptions)&&this._compareWith(a.value,e)}catch{return!1}});return n&&this._selectionModel.select(n),n}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth===`auto`?(e instanceof pn$1?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?``:this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new $e(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?`rtl`:`ltr`).withHomeAndEnd().withPageUpDown().withAllowedModifierKeys([`shiftKey`]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=sh(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Eh(e)).subscribe(n=>{this._onSelect(n.source,n.isUserInput),n.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),sh(...this.options.map(n=>n._stateChanges)).pipe(Eh(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,n){let a=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(a!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),n&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),n&&this.focus())),a!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((n,a)=>this.sortComparator?this.sortComparator(n,a,e):e.indexOf(n)-e.indexOf(a)),this.stateChanges.next()}}_propagateChanges(e){let n;this.multiple?n=this.selected.map(a=>a.value):n=this.selected?this.selected.value:e,this._value=n,this.valueChange.emit(n),this._onChange(n),this.selectionChange.emit(this._getChangeEvent(n)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let n=0;n<this.options.length;n++)if(!this.options.get(n).disabled){e=n;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,n=e?e+` `:``;return this.ariaLabelledby?n+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||``;return this.ariaLabelledby&&(e+=` `+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute(`aria-describedby`,e.join(` `)):n.removeAttribute(`aria-describedby`)}onContainerClick(e){let n=T(e);n&&(n.tagName===`MAT-OPTION`||n.classList.contains(`cdk-overlay-backdrop`)||n.closest(`.mat-mdc-select-panel`))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`trigger`],n=[`panel`],a=[[[`mat-select-trigger`]],`*`],o=[`mat-select-trigger`,`*`];function s(w,M){if(w&1&&(Yo$1(0,`span`,4),hI(1),ic()),w&2){let h=jE();Dy(),hp(h.placeholder)}}function r(w,M){w&1&&BE(0)}function u(w,M){if(w&1&&(Yo$1(0,`span`,11),hI(1),ic()),w&2){let h=jE(2);Dy(),hp(h.triggerValue)}}function v(w,M){if(w&1&&(Yo$1(0,`span`,5),TE(1,r,1,0)(2,u,2,1,`span`,11),ic()),w&2){let h=jE();Dy(),_E(h.customTrigger?1:2)}}function g(w,M){if(w&1){let h=LE();Yo$1(0,`div`,12,1),Xf(`keydown`,function(ee){Pl(h);let uo=jE();return Fl(uo._handleKeydown(ee))}),BE(2,1),ic()}if(w&2){let h=jE();rI(h.panelClass),cp(`mat-select-panel-animations-enabled`,!h._animationsDisabled)(`mat-primary`,h._parentFormField?.color===`primary`)(`mat-accent`,h._parentFormField?.color===`accent`)(`mat-warn`,h._parentFormField?.color===`warn`)(`mat-undefined`,!h._parentFormField?.color),Gf(`id`,h.id+`-panel`)(`aria-multiselectable`,h.multiple)(`aria-label`,h.ariaLabel||null)(`aria-labelledby`,h._getPanelAriaLabelledby())}}return eE({type:i,selectors:[[`mat-select`]],contentQueries:function(M,h,A){if(M&1&&tp(A,To,5)(A,Me,5)(A,Rn,5),M&2){let ee;UE(ee=WE())&&(h.customTrigger=ee.first),UE(ee=WE())&&(h.options=ee),UE(ee=WE())&&(h.optionGroups=ee)}},viewQuery:function(M,h){if(M&1&&np(e,5)(n,5)($o$1,5),M&2){let A;UE(A=WE())&&(h.trigger=A.first),UE(A=WE())&&(h.panel=A.first),UE(A=WE())&&(h._overlayDir=A.first)}},hostAttrs:[`role`,`combobox`,`aria-haspopup`,`listbox`,1,`mat-mdc-select`],hostVars:21,hostBindings:function(M,h){M&1&&Xf(`keydown`,function(ee){return h._handleKeydown(ee)})(`focus`,function(){return h._onFocus()})(`blur`,function(){return h._onBlur()}),M&2&&(Gf(`id`,h.id)(`tabindex`,h.disabled?-1:h.tabIndex)(`aria-controls`,h.panelOpen?h.id+`-panel`:null)(`aria-expanded`,h.panelOpen)(`aria-label`,h.ariaLabel||null)(`aria-required`,h.required.toString())(`aria-disabled`,h.disabled.toString())(`aria-invalid`,h.errorState)(`aria-activedescendant`,h._getAriaActiveDescendant()),cp(`mat-mdc-select-disabled`,h.disabled)(`mat-mdc-select-invalid`,h.errorState)(`mat-mdc-select-required`,h.required)(`mat-mdc-select-empty`,h.empty)(`mat-mdc-select-multiple`,h.multiple)(`mat-select-open`,h.panelOpen))},inputs:{userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],panelClass:`panelClass`,disabled:[2,`disabled`,`disabled`,eP],disableRipple:[2,`disableRipple`,`disableRipple`,eP],tabIndex:[2,`tabIndex`,`tabIndex`,w=>w==null?0:tP(w)],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,eP],placeholder:`placeholder`,required:[2,`required`,`required`,eP],multiple:[2,`multiple`,`multiple`,eP],disableOptionCentering:[2,`disableOptionCentering`,`disableOptionCentering`,eP],compareWith:`compareWith`,value:`value`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],errorStateMatcher:`errorStateMatcher`,typeaheadDebounceInterval:[2,`typeaheadDebounceInterval`,`typeaheadDebounceInterval`,tP],sortComparator:`sortComparator`,id:`id`,panelWidth:`panelWidth`,canSelectNullableOptions:[2,`canSelectNullableOptions`,`canSelectNullableOptions`,eP]},outputs:{openedChange:`openedChange`,_openedStream:`opened`,_closedStream:`closed`,selectionChange:`selectionChange`,valueChange:`valueChange`},exportAs:[`matSelect`],features:[DI([{provide:Pi,useExisting:i},{provide:An,useExisting:i}]),Ng],ngContentSelectors:o,decls:11,vars:10,consts:[[`fallbackOverlayOrigin`,`cdkOverlayOrigin`,`trigger`,``],[`panel`,``],[`cdk-overlay-origin`,``,1,`mat-mdc-select-trigger`,3,`click`],[1,`mat-mdc-select-value`],[1,`mat-mdc-select-placeholder`,`mat-mdc-select-min-line`],[1,`mat-mdc-select-value-text`],[1,`mat-mdc-select-arrow-wrapper`],[1,`mat-mdc-select-arrow`],[`viewBox`,`0 0 24 24`,`width`,`24px`,`height`,`24px`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M7 10l5 5 5-5z`],[`cdk-connected-overlay`,``,`cdkConnectedOverlayHasBackdrop`,``,`cdkConnectedOverlayBackdropClass`,`cdk-overlay-transparent-backdrop`,3,`detach`,`backdropClick`,`overlayKeydown`,`cdkConnectedOverlayDisableClose`,`cdkConnectedOverlayPanelClass`,`cdkConnectedOverlayScrollStrategy`,`cdkConnectedOverlayOrigin`,`cdkConnectedOverlayPositions`,`cdkConnectedOverlayWidth`,`cdkConnectedOverlayFlexibleDimensions`,`cdkConnectedOverlayUsePopover`],[1,`mat-mdc-select-min-line`],[`role`,`listbox`,`tabindex`,`-1`,1,`mat-mdc-select-panel`,`mdc-menu-surface`,`mdc-menu-surface--open`,3,`keydown`]],template:function(M,h){if(M&1&&(HE(a),Yo$1(0,`div`,2,0),Xf(`click`,function(){return h.open()}),Yo$1(3,`div`,3),TE(4,s,2,1,`span`,4)(5,v,3,1,`span`,5),ic(),Yo$1(6,`div`,6)(7,`div`,7),Yl(),Yo$1(8,`svg`,8),zf(9,`path`,9),ic()()()(),Bf(10,g,3,16,`ng-template`,10),Xf(`detach`,function(){return h.close()})(`backdropClick`,function(){return h.close()})(`overlayKeydown`,function(ee){return h._handleOverlayKeydown(ee)})),M&2){let A=qE(1);Dy(3),Gf(`id`,h._valueId),Dy(),_E(h.empty?4:5),Dy(6),qf(`cdkConnectedOverlayDisableClose`,!0)(`cdkConnectedOverlayPanelClass`,h._overlayPanelClass)(`cdkConnectedOverlayScrollStrategy`,h._scrollStrategy)(`cdkConnectedOverlayOrigin`,h._preferredOverlayOrigin||A)(`cdkConnectedOverlayPositions`,h._positions)(`cdkConnectedOverlayWidth`,h._overlayWidth)(`cdkConnectedOverlayFlexibleDimensions`,!0)(`cdkConnectedOverlayUsePopover`,h._popoverLocation)}},dependencies:[pn$1,$o$1],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return i})();var Zt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=nE({type:i});static ɵinj=ll({imports:[bn$1,Bn,F,Vt,Ro$1,Bn]})}return i})();var en=class i{http=D(nn$1);apiUrl=Uo$1.apiUrl;getOrders(t,e,n){let a={view:n};return e&&e!==`all`&&(a.stationId=e),this.http.get(`${this.apiUrl}/kitchen-display/stores/${t}/orders`,{params:a})}getBoard(t,e){let n={};return e&&e!==`all`&&(n.stationId=e),this.http.get(`${this.apiUrl}/kitchen-display/stores/${t}/board`,{params:n})}advanceOrder(t,e,n={}){return this.http.patch(`${this.apiUrl}/kitchen-display/orders/${t}/advance`,{stationId:e&&e!==`all`?e:void 0,direction:n.direction??`next`,toStep:n.toStep})}static ɵfac=function(e){return new(e||i)};static ɵprov=se({token:i,factory:i.ɵfac,providedIn:`root`})};var ce=Object.create(null);ce.open=`0`;ce.close=`1`;ce.ping=`2`;ce.pong=`3`;ce.message=`4`;ce.upgrade=`5`;ce.noop=`6`;var yt=Object.create(null);Object.keys(ce).forEach(i=>{yt[ce[i]]=i});var kt={type:`error`,data:`parser error`};var va=typeof Blob==`function`||typeof Blob<`u`&&Object.prototype.toString.call(Blob)===`[object BlobConstructor]`;var ya=typeof ArrayBuffer==`function`;var ka=i=>typeof ArrayBuffer.isView==`function`?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer;var xt=({type:i,data:t},e,n)=>va&&t instanceof Blob?e?n(t):fa(t,n):ya&&(t instanceof ArrayBuffer||ka(t))?e?n(t):fa(new Blob([t]),n):n(ce[i]+(t||``));var fa=(i,t)=>{let e=new FileReader;return e.onload=function(){let n=e.result.split(`,`)[1];t(`b`+(n||``))},e.readAsDataURL(i)};function _a(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}var zn;function xa(i,t){if(va&&i.data instanceof Blob)return i.data.arrayBuffer().then(_a).then(t);if(ya&&(i.data instanceof ArrayBuffer||ka(i.data)))return t(_a(i.data));xt(i,!1,e=>{zn||(zn=new TextEncoder),t(zn.encode(e))})}var wa=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`;var wt=typeof Uint8Array>`u`?[]:new Uint8Array(256);for(let i=0;i<wa.length;i++)wt[wa.charCodeAt(i)]=i;var Sa=i=>{let t=i.length*.75,e=i.length,n,a=0,o,s,r,u;i[i.length-1]===`=`&&(t--,i[i.length-2]===`=`&&t--);let v=new ArrayBuffer(t),g=new Uint8Array(v);for(n=0;n<e;n+=4)o=wt[i.charCodeAt(n)],s=wt[i.charCodeAt(n+1)],r=wt[i.charCodeAt(n+2)],u=wt[i.charCodeAt(n+3)],g[a++]=o<<2|s>>4,g[a++]=(s&15)<<4|r>>2,g[a++]=(r&3)<<6|u&63;return v};var Oo=typeof ArrayBuffer==`function`;var St=(i,t)=>{if(typeof i!=`string`)return{type:`message`,data:Ca(i,t)};let e=i.charAt(0);return e===`b`?{type:`message`,data:Mo(i.substring(1),t)}:yt[e]?i.length>1?{type:yt[e],data:i.substring(1)}:{type:yt[e]}:kt};var Mo=(i,t)=>{if(Oo)return Ca(Sa(i),t);else return{base64:!0,data:i}};var Ca=(i,t)=>t===`blob`?i instanceof Blob?i:new Blob([i]):i instanceof ArrayBuffer?i:i.buffer;var Ia=``;var Na=(i,t)=>{let e=i.length,n=new Array(e),a=0;i.forEach((o,s)=>{xt(o,!1,r=>{n[s]=r,++a===e&&t(n.join(Ia))})})};var Ta=(i,t)=>{let e=i.split(Ia),n=[];for(let a=0;a<e.length;a++){let o=St(e[a],t);if(n.push(o),o.type===`error`)break}return n};function Oa(){return new TransformStream({transform(i,t){xa(i,e=>{let n=e.length,a;if(n<126)a=new Uint8Array(1),new DataView(a.buffer).setUint8(0,n);else if(n<65536){a=new Uint8Array(3);let o=new DataView(a.buffer);o.setUint8(0,126),o.setUint16(1,n)}else{a=new Uint8Array(9);let o=new DataView(a.buffer);o.setUint8(0,127),o.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!=`string`&&(a[0]|=128),t.enqueue(a),t.enqueue(e)})}})}var Vn;function tn(i){return i.reduce((t,e)=>t+e.length,0)}function nn(i,t){if(i[0].length===t)return i.shift();let e=new Uint8Array(t),n=0;for(let a=0;a<t;a++)e[a]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),e}function Ma(i,t){Vn||(Vn=new TextDecoder);let e=[],n=0,a=-1,o=!1;return new TransformStream({transform(s,r){for(e.push(s);;){if(n===0){if(tn(e)<1)break;let u=nn(e,1);o=(u[0]&128)===128,a=u[0]&127,a<126?n=3:a===126?n=1:n=2}else if(n===1){if(tn(e)<2)break;let u=nn(e,2);a=new DataView(u.buffer,u.byteOffset,u.length).getUint16(0),n=3}else if(n===2){if(tn(e)<8)break;let u=nn(e,8),v=new DataView(u.buffer,u.byteOffset,u.length),g=v.getUint32(0);if(g>Math.pow(2,21)-1){r.enqueue(kt);break}a=g*Math.pow(2,32)+v.getUint32(4),n=3}else{if(tn(e)<a)break;let u=nn(e,a);r.enqueue(St(o?u:Vn.decode(u),t)),n=0}if(a===0||a>i){r.enqueue(kt);break}}}})}var qn=4;function I(i){if(i)return Do(i)}function Do(i){for(var t in I.prototype)i[t]=I.prototype[t];return i}I.prototype.on=I.prototype.addEventListener=function(i,t){return this._callbacks=this._callbacks||{},(this._callbacks[`$`+i]=this._callbacks[`$`+i]||[]).push(t),this};I.prototype.once=function(i,t){function e(){this.off(i,e),t.apply(this,arguments)}return e.fn=t,this.on(i,e),this};I.prototype.off=I.prototype.removeListener=I.prototype.removeAllListeners=I.prototype.removeEventListener=function(i,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks[`$`+i];if(!e)return this;if(arguments.length==1)return delete this._callbacks[`$`+i],this;for(var n,a=0;a<e.length;a++)if(n=e[a],n===t||n.fn===t){e.splice(a,1);break}return e.length===0&&delete this._callbacks[`$`+i],this};I.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks[`$`+i],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e){e=e.slice(0);for(var n=0,a=e.length;n<a;++n)e[n].apply(this,t)}return this};I.prototype.emitReserved=I.prototype.emit;I.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks[`$`+i]||[]};I.prototype.hasListeners=function(i){return!!this.listeners(i).length};var ge=typeof Promise==`function`&&typeof Promise.resolve==`function`?t=>Promise.resolve().then(t):(t,e)=>e(t,0);var H=typeof self<`u`?self:typeof window<`u`?window:Function(`return this`)();var Da=`arraybuffer`;function an(i,...t){return t.reduce((e,n)=>(i.hasOwnProperty(n)&&(e[n]=i[n]),e),{})}var Eo=H.setTimeout;var Ao=H.clearTimeout;function be(i,t){t.useNativeTimers?(i.setTimeoutFn=Eo.bind(H),i.clearTimeoutFn=Ao.bind(H)):(i.setTimeoutFn=H.setTimeout.bind(H),i.clearTimeoutFn=H.clearTimeout.bind(H))}var Ro=1.33;function Ea(i){return typeof i==`string`?Bo(i):Math.ceil((i.byteLength||i.size)*Ro)}function Bo(i){let t=0,e=0;for(let n=0,a=i.length;n<a;n++)t=i.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function on(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Aa(i){let t=``;for(let e in i)i.hasOwnProperty(e)&&(t.length&&(t+=`&`),t+=encodeURIComponent(e)+`=`+encodeURIComponent(i[e]));return t}function Ra(i){let t={},e=i.split(`&`);for(let n=0,a=e.length;n<a;n++){let o=e[n].split(`=`);t[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return t}var rn=class extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type=`TransportError`}};var fe=class extends I{constructor(t){super(),this.writable=!1,be(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,n){return super.emitReserved(`error`,new rn(t,e,n)),this}open(){return this.readyState=`opening`,this.doOpen(),this}close(){return(this.readyState===`opening`||this.readyState===`open`)&&(this.doClose(),this.onClose()),this}send(t){this.readyState===`open`&&this.write(t)}onOpen(){this.readyState=`open`,this.writable=!0,super.emitReserved(`open`)}onData(t){let e=St(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved(`packet`,t)}onClose(t){this.readyState=`closed`,super.emitReserved(`close`,t)}pause(t){}createUri(t,e={}){return t+`://`+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){let t=this.opts.hostname;return t.indexOf(`:`)===-1?t:`[`+t+`]`}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?`:`+this.opts.port:``}_query(t){let e=Aa(t);return e.length?`?`+e:``}};var Ct=class extends fe{constructor(){super(...arguments),this._polling=!1}get name(){return`polling`}doOpen(){this._poll()}pause(t){this.readyState=`pausing`;let e=()=>{this.readyState=`paused`,t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once(`pollComplete`,function(){--n||e()})),this.writable||(n++,this.once(`drain`,function(){--n||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved(`poll`)}onData(t){let e=n=>{if(this.readyState===`opening`&&n.type===`open`&&this.onOpen(),n.type===`close`)return this.onClose({description:`transport closed by the server`}),!1;this.onPacket(n)};Ta(t,this.socket.binaryType).forEach(e),this.readyState!==`closed`&&(this._polling=!1,this.emitReserved(`pollComplete`),this.readyState===`open`&&this._poll())}doClose(){let t=()=>{this.write([{type:`close`}])};this.readyState===`open`?t():this.once(`open`,t)}write(t){this.writable=!1,Na(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved(`drain`)})})}uri(){let t=this.opts.secure?`https`:`http`,e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=on()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}};var Ba=!1;try{Ba=typeof XMLHttpRequest<`u`&&`withCredentials`in new XMLHttpRequest}catch{}var Fa=Ba;function Fo(){}var Gn=class extends Ct{constructor(t){if(super(t),typeof location<`u`){let e=location.protocol===`https:`,n=location.port;n||(n=e?`443`:`80`),this.xd=typeof location<`u`&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,e){let n=this.request({method:`POST`,data:t});n.on(`success`,e),n.on(`error`,(a,o)=>{this.onError(`xhr post error`,a,o)})}doPoll(){let t=this.request();t.on(`data`,this.onData.bind(this)),t.on(`error`,(e,n)=>{this.onError(`xhr poll error`,e,n)}),this.pollXhr=t}};var De=class i extends I{constructor(t,e,n){super(),this.createRequest=t,be(this,n),this._opts=n,this._method=n.method||`GET`,this._uri=e,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;let e=an(this._opts,`agent`,`pfx`,`key`,`passphrase`,`cert`,`ca`,`ciphers`,`rejectUnauthorized`,`autoUnref`);e.xdomain=!!this._opts.xd;let n=this._xhr=this.createRequest(e);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let a in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(a)&&n.setRequestHeader(a,this._opts.extraHeaders[a])}}catch{}if(this._method===`POST`)try{n.setRequestHeader(`Content-type`,`text/plain;charset=UTF-8`)}catch{}try{n.setRequestHeader(`Accept`,`*/*`)}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),`withCredentials`in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var a;n.readyState===3&&((a=this._opts.cookieJar)===null||a===void 0||a.parseCookies(n.getResponseHeader(`set-cookie`))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status==`number`?n.status:0)},0))},n.send(this._data)}catch(a){this.setTimeoutFn(()=>{this._onError(a)},0);return}typeof document<`u`&&(this._index=i.requestsCount++,i.requests[this._index]=this)}_onError(t){this.emitReserved(`error`,t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>`u`||this._xhr===null)){if(this._xhr.onreadystatechange=Fo,t)try{this._xhr.abort()}catch{}typeof document<`u`&&delete i.requests[this._index],this._xhr=null}}_onLoad(){let t=this._xhr.responseText;t!==null&&(this.emitReserved(`data`,t),this.emitReserved(`success`),this._cleanup())}abort(){this._cleanup()}};De.requestsCount=0;De.requests={};if(typeof document<`u`){if(typeof attachEvent==`function`)attachEvent(`onunload`,La);else if(typeof addEventListener==`function`){let i=`onpagehide`in H?`pagehide`:`unload`;addEventListener(i,La,!1)}}function La(){for(let i in De.requests)De.requests.hasOwnProperty(i)&&De.requests[i].abort()}var Lo=(function(){let i=Pa({xdomain:!1});return i&&i.responseType!==null})();var Ee=class extends Gn{constructor(t){super(t);let e=t&&t.forceBase64;this.supportsBinary=Lo&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new De(Pa,this.uri(),t)}};function Pa(i){let t=i.xdomain;try{if(typeof XMLHttpRequest<`u`&&(!t||Fa))return new XMLHttpRequest}catch{}if(!t)try{return new H[[`Active`].concat(`Object`).join(`X`)](`Microsoft.XMLHTTP`)}catch{}}var za=typeof navigator<`u`&&typeof navigator.product==`string`&&navigator.product.toLowerCase()===`reactnative`;var Un=class extends fe{get name(){return`websocket`}doOpen(){let t=this.uri(),e=this.opts.protocols,n=za?{}:an(this.opts,`agent`,`perMessageDeflate`,`pfx`,`key`,`passphrase`,`cert`,`ca`,`ciphers`,`rejectUnauthorized`,`localAddress`,`protocolVersion`,`origin`,`maxPayload`,`family`,`checkServerIdentity`);this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,n)}catch(a){return this.emitReserved(`error`,a)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:`websocket connection closed`,context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError(`websocket error`,t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){let n=t[e],a=e===t.length-1;xt(n,this.supportsBinary,o=>{try{this.doWrite(n,o)}catch{}a&&ge(()=>{this.writable=!0,this.emitReserved(`drain`)},this.setTimeoutFn)})}}doClose(){typeof this.ws<`u`&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){let t=this.opts.secure?`wss`:`ws`,e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=on()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}};var jn=H.WebSocket||H.MozWebSocket;var Ae=class extends Un{createSocket(t,e,n){return za?new jn(t,e,n):e?new jn(t,e):new jn(t)}doWrite(t,e){this.ws.send(e)}};var ct=class extends fe{get name(){return`webtransport`}doOpen(){try{this._transport=new WebTransport(this.createUri(`https`),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved(`error`,t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError(`webtransport error`,t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{let e=Ma(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(e).getReader(),a=Oa();a.readable.pipeTo(t.writable),this._writer=a.writable.getWriter();let o=()=>{n.read().then(({done:r,value:u})=>{r||(this.onPacket(u),o())}).catch(r=>{})};o();let s={type:`open`};this.query.sid&&(s.data=`{"sid":"${this.query.sid}"}`),this._writer.write(s).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){let n=t[e],a=e===t.length-1;this._writer.write(n).then(()=>{a&&ge(()=>{this.writable=!0,this.emitReserved(`drain`)},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}};var Hn={websocket:Ae,webtransport:ct,polling:Ee};var Po=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var zo=[`source`,`protocol`,`authority`,`userInfo`,`user`,`password`,`host`,`port`,`relative`,`path`,`directory`,`file`,`query`,`anchor`];function mt(i){if(i.length>8e3)throw`URI too long`;let t=i,e=i.indexOf(`[`),n=i.indexOf(`]`);e!=-1&&n!=-1&&(i=i.substring(0,e)+i.substring(e,n).replace(/:/g,`;`)+i.substring(n,i.length));let a=Po.exec(i||``),o={},s=14;for(;s--;)o[zo[s]]=a[s]||``;return e!=-1&&n!=-1&&(o.source=t,o.host=o.host.substring(1,o.host.length-1).replace(/;/g,`:`),o.authority=o.authority.replace(`[`,``).replace(`]`,``).replace(/;/g,`:`),o.ipv6uri=!0),o.pathNames=Vo(o,o.path),o.queryKey=qo(o,o.query),o}function Vo(i,t){let n=t.replace(/\/{2,9}/g,`/`).split(`/`);return(t.slice(0,1)==`/`||t.length===0)&&n.splice(0,1),t.slice(-1)==`/`&&n.splice(n.length-1,1),n}function qo(i,t){let e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,a,o){a&&(e[a]=o)}),e}var Kn=typeof addEventListener==`function`&&typeof removeEventListener==`function`;var sn=[];Kn&&addEventListener(`offline`,()=>{sn.forEach(i=>i())},!1);var qe=class i extends I{constructor(t,e={}){var n,a;if(super(),this.binaryType=Da,this.writeBuffer=[],this._prevBufferLen=0,this._upgrades=[],this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t==`object`&&(e=t,t=null),t){let o=mt(t);e.hostname=o.host,e.secure=o.protocol===`https`||o.protocol===`wss`,e.port=o.port,o.query&&(e.query=o.query)}else e.host&&(e.hostname=mt(e.host).host);if(be(this,e),this.secure=e.secure!=null?e.secure:typeof location<`u`&&location.protocol===`https:`,e.hostname&&!e.port&&(e.port=this.secure?`443`:`80`),this.hostname=e.hostname||(typeof location<`u`?location.hostname:`localhost`),this.port=e.port||(typeof location<`u`&&location.port?location.port:this.secure?`443`:`80`),e.transportImplementations&&e.transports)throw new Error(`specifying both 'transportImplementations' and 'transports' options is not supported`);e.transportImplementations||!((n=e.transports)===null||n===void 0)&&n.length&&typeof e.transports[0]==`function`?(this.transports=[],this._transportsByName=Object.create(null),((a=e.transportImplementations)!==null&&a!==void 0?a:e.transports).forEach(o=>{let s=o.prototype.name;this.transports.push(s),this._transportsByName[s]=o})):(this.transports=e.transports?[...e.transports]:[`polling`,`websocket`,`webtransport`],this._transportsByName=Hn),this.opts=Object.assign({path:`/engine.io`,agent:!1,withCredentials:!1,upgrade:!0,timestampParam:`t`,rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,``)+(this.opts.addTrailingSlash?`/`:``),typeof this.opts.query==`string`&&(this.opts.query=Ra(this.opts.query)),Kn&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener(`beforeunload`,this._beforeunloadEventListener,!1)),this.hostname!==`localhost`&&(this._offlineEventListener=()=>{this._onClose(`transport close`,{description:`network connection lost`})},sn.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){let e=Object.assign({},this.opts.query);e.EIO=qn,e.transport=t,this.id&&(e.sid=this.id);let n=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved(`error`,`No transports available`)},0);return}let t=this.opts.rememberUpgrade&&i.priorWebsocketSuccess&&this.transports.indexOf(`websocket`)!==-1?`websocket`:this.transports[0];this.readyState=`opening`;let e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on(`drain`,this._onDrain.bind(this)).on(`packet`,this._onPacket.bind(this)).on(`error`,this._onError.bind(this)).on(`close`,e=>this._onClose(`transport close`,e))}_probe(t){let e=this.createTransport(t),n=!1;i.priorWebsocketSuccess=!1;let a=()=>{n||(e.send([{type:`ping`,data:`probe`}]),e.once(`packet`,w=>{if(!n)if(w.type===`pong`&&w.data===`probe`){if(this.upgrading=!0,this.emitReserved(`upgrading`,e),!e)return;i.priorWebsocketSuccess=e.name===`websocket`,this.transport.pause(()=>{n||this.readyState!==`closed`&&(g(),this.setTransport(e),e.send([{type:`upgrade`}]),this.emitReserved(`upgrade`,e),e=null,this.upgrading=!1,this.flush())})}else{let M=new Error(`probe error`);M.transport=e.name,this.emitReserved(`upgradeError`,M)}}))};function o(){n||(n=!0,g(),e.close(),e=null)}let s=w=>{let M=new Error(`probe error: `+w);M.transport=e.name,o(),this.emitReserved(`upgradeError`,M)};function r(){s(`transport closed`)}function u(){s(`socket closed`)}function v(w){e&&w.name!==e.name&&o()}let g=()=>{e.removeListener(`open`,a),e.removeListener(`error`,s),e.removeListener(`close`,r),this.off(`close`,u),this.off(`upgrading`,v)};e.once(`open`,a),e.once(`error`,s),e.once(`close`,r),this.once(`close`,u),this.once(`upgrading`,v),this._upgrades.indexOf(`webtransport`)!==-1&&t!==`webtransport`?this.setTimeoutFn(()=>{n||e.open()},200):e.open()}onOpen(){if(this.readyState=`open`,i.priorWebsocketSuccess=this.transport.name===`websocket`,this.emitReserved(`open`),this.flush(),this.readyState===`open`&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_onPacket(t){if(this.readyState===`opening`||this.readyState===`open`||this.readyState===`closing`)switch(this.emitReserved(`packet`,t),this.emitReserved(`heartbeat`),t.type){case`open`:this.onHandshake(JSON.parse(t.data));break;case`ping`:this._sendPacket(`pong`),this.emitReserved(`ping`),this.emitReserved(`pong`),this._resetPingTimeout();break;case`error`:let e=new Error(`server error`);e.code=t.data,this._onError(e);break;case`message`:this.emitReserved(`data`,t.data),this.emitReserved(`message`,t.data)}}onHandshake(t){this.emitReserved(`handshake`,t),this.id=t.sid,this.transport.query.sid=t.sid,this._upgrades=this._filterUpgrades(t.upgrades),this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!==`closed`&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);let t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose(`ping timeout`)},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved(`drain`):this.flush()}flush(){if(this.readyState!==`closed`&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved(`flush`)}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name===`polling`&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){let a=this.writeBuffer[n].data;if(a&&(e+=Ea(a)),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;let t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,ge(()=>{this._onClose(`ping timeout`)},this.setTimeoutFn)),t}write(t,e,n){return this._sendPacket(`message`,t,e,n),this}send(t,e,n){return this._sendPacket(`message`,t,e,n),this}_sendPacket(t,e,n,a){if(typeof e==`function`&&(a=e,e=void 0),typeof n==`function`&&(a=n,n=null),this.readyState===`closing`||this.readyState===`closed`)return;n=n||{},n.compress=n.compress!==!1;let o={type:t,data:e,options:n};this.emitReserved(`packetCreate`,o),this.writeBuffer.push(o),a&&this.once(`flush`,a),this.flush()}close(){let t=()=>{this._onClose(`forced close`),this.transport.close()},e=()=>{this.off(`upgrade`,e),this.off(`upgradeError`,e),t()},n=()=>{this.once(`upgrade`,e),this.once(`upgradeError`,e)};return(this.readyState===`opening`||this.readyState===`open`)&&(this.readyState=`closing`,this.writeBuffer.length?this.once(`drain`,()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(i.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState===`opening`)return this.transports.shift(),this._open();this.emitReserved(`error`,t),this._onClose(`transport error`,t)}_onClose(t,e){if(this.readyState===`opening`||this.readyState===`open`||this.readyState===`closing`){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners(`close`),this.transport.close(),this.transport.removeAllListeners(),Kn&&(this._beforeunloadEventListener&&removeEventListener(`beforeunload`,this._beforeunloadEventListener,!1),this._offlineEventListener)){let n=sn.indexOf(this._offlineEventListener);n!==-1&&sn.splice(n,1)}this.readyState=`closed`,this.id=null,this.emitReserved(`close`,t,e),this.writeBuffer=[],this._prevBufferLen=0}}_filterUpgrades(t){let e=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}};qe.protocol=qn;qe.protocol;function Va(i,t=``,e){let n=i;e=e||typeof location<`u`&&location,i??=e.protocol+`//`+e.host,typeof i==`string`&&(i.charAt(0)===`/`&&(i.charAt(1)===`/`?i=e.protocol+i:i=e.host+i),/^(https?|wss?):\/\//.test(i)||(typeof e<`u`?i=e.protocol+`//`+i:i=`https://`+i),n=mt(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port=`80`:/^(http|ws)s$/.test(n.protocol)&&(n.port=`443`)),n.path=n.path||`/`;let o=n.host.indexOf(`:`)!==-1?`[`+n.host+`]`:n.host;return n.id=n.protocol+`://`+o+`:`+n.port+t,n.href=n.protocol+`://`+o+(e&&e.port===n.port?``:`:`+n.port),n}var Xn={};UI(Xn,{Decoder:()=>Qn,Encoder:()=>$n,PacketType:()=>_,isPacketValid:()=>Yo,protocol:()=>Ha});var jo=typeof ArrayBuffer==`function`;var Uo=i=>typeof ArrayBuffer.isView==`function`?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer;var qa=Object.prototype.toString;var Ho=typeof Blob==`function`||typeof Blob<`u`&&qa.call(Blob)===`[object BlobConstructor]`;var Ko=typeof File==`function`||typeof File<`u`&&qa.call(File)===`[object FileConstructor]`;function Nt(i){return jo&&(i instanceof ArrayBuffer||Uo(i))||Ho&&i instanceof Blob||Ko&&i instanceof File}function It(i,t){if(!i||typeof i!=`object`)return!1;if(Array.isArray(i)){for(let e=0,n=i.length;e<n;e++)if(It(i[e]))return!0;return!1}if(Nt(i))return!0;if(i.toJSON&&typeof i.toJSON==`function`&&arguments.length===1)return It(i.toJSON(),!0);for(let e in i)if(Object.prototype.hasOwnProperty.call(i,e)&&It(i[e]))return!0;return!1}function Ga(i){let t=[],e=i.data,n=i;return n.data=ln(e,t),n.attachments=t.length,{packet:n,buffers:t}}function ln(i,t,e){if(!i)return i;if(Nt(i)){let n={_placeholder:!0,num:t.length};return t.push(i),n}else if(Array.isArray(i)){let n=new Array(i.length);for(let a=0;a<i.length;a++)n[a]=ln(i[a],t);return n}else if(typeof i==`object`&&!(i instanceof Date)){if(i.toJSON&&typeof i.toJSON==`function`&&!e)return ln(i.toJSON(),t,!0);let n={};for(let a in i)Object.prototype.hasOwnProperty.call(i,a)&&(n[a]=ln(i[a],t));return n}return i}function ja(i,t){return i.data=Wn(i.data,t),delete i.attachments,i}function Wn(i,t){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num==`number`&&i.num>=0&&i.num<t.length)return t[i.num];throw new Error(`illegal attachments`)}else if(Array.isArray(i))for(let e=0;e<i.length;e++)i[e]=Wn(i[e],t);else if(typeof i==`object`)for(let e in i)Object.prototype.hasOwnProperty.call(i,e)&&(i[e]=Wn(i[e],t));return i}var Ua=[`connect`,`connect_error`,`disconnect`,`disconnecting`,`newListener`,`removeListener`];var Ha=5;var _;(function(i){i[i.CONNECT=0]=`CONNECT`,i[i.DISCONNECT=1]=`DISCONNECT`,i[i.EVENT=2]=`EVENT`,i[i.ACK=3]=`ACK`,i[i.CONNECT_ERROR=4]=`CONNECT_ERROR`,i[i.BINARY_EVENT=5]=`BINARY_EVENT`,i[i.BINARY_ACK=6]=`BINARY_ACK`})(_||(_={}));var $n=class{constructor(t){this.replacer=t}encode(t){return(t.type===_.EVENT||t.type===_.ACK)&&It(t)?this.encodeAsBinary({type:t.type===_.EVENT?_.BINARY_EVENT:_.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=``+t.type;return(t.type===_.BINARY_EVENT||t.type===_.BINARY_ACK)&&(e+=t.attachments+`-`),t.nsp&&t.nsp!==`/`&&(e+=t.nsp+`,`),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){let e=Ga(t),n=this.encodeAsString(e.packet),a=e.buffers;return a.unshift(n),a}};var Qn=class i extends I{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t==`function`?{reviver:t}:t)}add(t){let e;if(typeof t==`string`){if(this.reconstructor)throw new Error(`got plaintext data when reconstructing a packet`);e=this.decodeString(t);let n=e.type===_.BINARY_EVENT;n||e.type===_.BINARY_ACK?(e.type=n?_.EVENT:_.ACK,this.reconstructor=new Yn(e)):super.emitReserved(`decoded`,e)}else if(Nt(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved(`decoded`,e));else throw new Error(`got binary data when not reconstructing a packet`);else throw new Error(`Unknown type: `+t)}decodeString(t){let e=0,n={type:Number(t.charAt(0))};if(_[n.type]===void 0)throw new Error(`unknown packet type `+n.type);if(n.type===_.BINARY_EVENT||n.type===_.BINARY_ACK){let o=e+1;for(;t.charAt(++e)!==`-`&&e!=t.length;);let s=t.substring(o,e);if(s!=Number(s)||t.charAt(e)!==`-`)throw new Error(`Illegal attachments`);let r=Number(s);if(!Ka(r)||r<1)throw new Error(`Illegal attachments`);if(r>this.opts.maxAttachments)throw new Error(`too many attachments`);n.attachments=r}if(t.charAt(e+1)===`/`){let o=e+1;for(;++e&&!(t.charAt(e)===`,`||e===t.length););n.nsp=t.substring(o,e)}else n.nsp=`/`;let a=t.charAt(e+1);if(a!==``&&Number(a)==a){let o=e+1;for(;++e;){let s=t.charAt(e);if(s==null||Number(s)!=s){--e;break}if(e===t.length)break}n.id=Number(t.substring(o,e+1))}if(t.charAt(++e)){let o=this.tryParse(t.substr(e));if(i.isPayloadValid(n.type,o))n.data=o;else throw new Error(`invalid payload`)}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case _.CONNECT:return dn(e);case _.DISCONNECT:return e===void 0;case _.CONNECT_ERROR:return typeof e==`string`||dn(e);case _.EVENT:case _.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]==`number`||typeof e[0]==`string`&&Ua.indexOf(e[0])===-1);case _.ACK:case _.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}};var Yn=class{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){let e=ja(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}};function Wo(i){return typeof i==`string`}var Ka=Number.isInteger||function(i){return typeof i==`number`&&isFinite(i)&&Math.floor(i)===i};function $o(i){return i===void 0||Ka(i)}function dn(i){return Object.prototype.toString.call(i)===`[object Object]`}function Qo(i,t){switch(i){case _.CONNECT:return t===void 0||dn(t);case _.DISCONNECT:return t===void 0;case _.EVENT:return Array.isArray(t)&&(typeof t[0]==`number`||typeof t[0]==`string`&&Ua.indexOf(t[0])===-1);case _.ACK:return Array.isArray(t);case _.CONNECT_ERROR:return typeof t==`string`||dn(t);default:return!1}}function Yo(i){return Wo(i.nsp)&&$o(i.id)&&Qo(i.type,i.data)}function Z(i,t,e){return i.on(t,e),function(){i.off(t,e)}}var Xo=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});var ut=class extends I{constructor(t,e,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;let t=this.io;this.subs=[Z(t,`open`,this.onopen.bind(this)),Z(t,`packet`,this.onpacket.bind(this)),Z(t,`error`,this.onerror.bind(this)),Z(t,`close`,this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState===`open`&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift(`message`),this.emit.apply(this,t),this}emit(t,...e){var n,a,o;if(Xo.hasOwnProperty(t))throw new Error(`"`+t.toString()+`" is a reserved event name`);if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;let s={type:_.EVENT,data:e};if(s.options={},s.options.compress=this.flags.compress!==!1,typeof e[e.length-1]==`function`){let g=this.ids++,w=e.pop();this._registerAckCallback(g,w),s.id=g}let r=(a=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||a===void 0?void 0:a.writable,u=this.connected&&!(!((o=this.io.engine)===null||o===void 0)&&o._hasPingExpired());return this.flags.volatile&&!r||(u?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(t,e){var n;let a=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(a===void 0){this.acks[t]=e;return}let o=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let r=0;r<this.sendBuffer.length;r++)this.sendBuffer[r].id===t&&this.sendBuffer.splice(r,1);e.call(this,new Error(`operation has timed out`))},a),s=(...r)=>{this.io.clearTimeoutFn(o),e.apply(this,r)};s.withError=!0,this.acks[t]=s}emitWithAck(t,...e){return new Promise((n,a)=>{let o=(s,r)=>s?a(s):n(r);o.withError=!0,e.push(o),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]==`function`&&(e=t.pop());let n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((a,...o)=>(this._queue[0],a!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(a)):(this._queue.shift(),e&&e(null,...o)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;let e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth==`function`?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:_.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved(`connect_error`,t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved(`disconnect`,t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){let n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error(`socket has been disconnected`))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case _.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved(`connect_error`,new Error(`It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)`));break;case _.EVENT:case _.BINARY_EVENT:this.onevent(t);break;case _.ACK:case _.BINARY_ACK:this.onack(t);break;case _.DISCONNECT:this.ondisconnect();break;case _.CONNECT_ERROR:this.destroy();let n=new Error(t.data.message);n.data=t.data.data,this.emitReserved(`connect_error`,n)}}onevent(t){let e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){let e=this._anyListeners.slice();for(let n of e)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]==`string`&&(this._lastOffset=t[t.length-1])}ack(t){let e=this,n=!1;return function(...a){n||(n=!0,e.packet({type:_.ACK,id:t,data:a}))}}onack(t){let e=this.acks[t.id];typeof e==`function`&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved(`connect`)}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose(`io server disconnect`)}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:_.DISCONNECT}),this.destroy(),this.connected&&this.onclose(`io client disconnect`),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){let e=this._anyListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){let e=this._anyOutgoingListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let e=this._anyOutgoingListeners.slice();for(let n of e)n.apply(this,t.data)}}};function Ge(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}Ge.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*i);i=(Math.floor(t*10)&1)==0?i-e:i+e}return Math.min(i,this.max)|0};Ge.prototype.reset=function(){this.attempts=0};Ge.prototype.setMin=function(i){this.ms=i};Ge.prototype.setMax=function(i){this.max=i};Ge.prototype.setJitter=function(i){this.jitter=i};var pt=class extends I{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&typeof t==`object`&&(e=t,t=void 0),e=e||{},e.path=e.path||`/socket.io`,this.opts=e,be(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((n=e.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Ge({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState=`closed`,this.uri=t;let a=e.parser||Xn;this.encoder=new a.Encoder,this.decoder=new a.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf(`open`))return this;this.engine=new qe(this.uri,this.opts);let e=this.engine,n=this;this._readyState=`opening`,this.skipReconnect=!1;let a=Z(e,`open`,function(){n.onopen(),t&&t()}),o=r=>{this.cleanup(),this._readyState=`closed`,this.emitReserved(`error`,r),t?t(r):this.maybeReconnectOnOpen()},s=Z(e,`error`,o);if(this._timeout!==!1){let r=this._timeout,u=this.setTimeoutFn(()=>{a(),o(new Error(`timeout`)),e.close()},r);this.opts.autoUnref&&u.unref(),this.subs.push(()=>{this.clearTimeoutFn(u)})}return this.subs.push(a),this.subs.push(s),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState=`open`,this.emitReserved(`open`);let t=this.engine;this.subs.push(Z(t,`ping`,this.onping.bind(this)),Z(t,`data`,this.ondata.bind(this)),Z(t,`error`,this.onerror.bind(this)),Z(t,`close`,this.onclose.bind(this)),Z(this.decoder,`decoded`,this.ondecoded.bind(this)))}onping(){this.emitReserved(`ping`)}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose(`parse error`,e)}}ondecoded(t){ge(()=>{this.emitReserved(`packet`,t)},this.setTimeoutFn)}onerror(t){this.emitReserved(`error`,t)}socket(t,e){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new ut(this,t,e),this.nsps[t]=n),n}_destroy(t){let e=Object.keys(this.nsps);for(let n of e)if(this.nsps[n].active)return;this._close()}_packet(t){let e=this.encoder.encode(t);for(let n=0;n<e.length;n++)this.engine.write(e[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose(`forced close`)}disconnect(){return this._close()}onclose(t,e){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState=`closed`,this.emitReserved(`close`,t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;let t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved(`reconnect_failed`),this._reconnecting=!1;else{let e=this.backoff.duration();this._reconnecting=!0;let n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved(`reconnect_attempt`,t.backoff.attempts),!t.skipReconnect&&t.open(a=>{a?(t._reconnecting=!1,t.reconnect(),this.emitReserved(`reconnect_error`,a)):t.onreconnect()}))},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){let t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved(`reconnect`,t)}};var Tt={};function Ot(i,t){typeof i==`object`&&(t=i,i=void 0),t=t||{};let e=Va(i,t.path||`/socket.io`),n=e.source,a=e.id,o=e.path,s=Tt[a]&&o in Tt[a].nsps,r=t.forceNew||t[`force new connection`]||t.multiplex===!1||s,u;return r?u=new pt(n,t):(Tt[a]||(Tt[a]=new pt(n,t)),u=Tt[a]),e.query&&!t.query&&(t.query=e.queryKey),u.socket(e.path,t)}Object.assign(Ot,{Manager:pt,Socket:ut,io:Ot,connect:Ot});var cn=class i{socket=null;storeId=null;stationId=null;orderEvents$=new Z$1;connected=bo$1(!1);visibilityHandler=()=>{document.visibilityState===`visible`&&this.socket&&!this.socket.connected&&this.socket.connect()};connect(t,e,n){if(this.socket){if(this.storeId===t&&this.stationId===e)return;this.disconnect()}this.storeId=t,this.stationId=e,this.socket=Ot(Uo$1.apiUrl,{auth:{token:n},transports:[`websocket`,`polling`],reconnection:!0,reconnectionDelay:2e3,reconnectionDelayMax:3e4}),this.socket.on(`connect`,()=>{this.connected.set(!0),this.socket.emit(`joinStore`,this.storeId),this.stationId&&this.stationId!==`all`&&this.socket.emit(`joinStation`,this.stationId),this.orderEvents$.next()}),this.socket.on(`disconnect`,()=>{this.connected.set(!1)}),this.socket.on(`connect_error`,()=>{this.connected.set(!1)}),this.socket.on(`kitchen:order:new`,()=>this.orderEvents$.next()),this.socket.on(`kitchen:item:statusUpdated`,()=>this.orderEvents$.next()),document.addEventListener(`visibilitychange`,this.visibilityHandler)}disconnect(){document.removeEventListener(`visibilitychange`,this.visibilityHandler),this.socket&&(this.socket.removeAllListeners(),this.socket.disconnect(),this.socket=null),this.storeId=null,this.stationId=null,this.connected.set(!1)}static ɵfac=function(e){return new(e||i)};static ɵprov=se({token:i,factory:i.ɵfac,providedIn:`root`})};var $a=[{code:`en`,label:`English`},{code:`fr`,label:`Français`},{code:`it`,label:`Italiano`}];var Wa=`kds_language`;var Qa={"app.subtitle":`Kitchen display`,"type.all":`All`,"type.dine_in":`Dine-in`,"type.takeaway":`Takeaway`,"type.delivery":`Delivery`,"status.pending":`New`,"status.preparing":`Preparing`,"status.ready":`Ready`,"status.picked_up":`Picked Up`,"action.pending":`Back to New`,"action.preparing":`Start Preparing`,"action.ready":`Mark Ready`,"action.picked_up":`Mark Picked Up`,"action.recall":`Recall`,"board.allStations":`All stations`,"board.station":`Station`,"board.noTickets":`No tickets`,"board.loading":`Loading orders…`,"board.live":`Connected`,"board.reconnecting":`Reconnecting`,"board.table":`Table`,"board.walkIn":`Walk-in`,"board.orderNote":`Order note`,"board.keyboardHint":`Tab or arrow keys to move between tickets · Enter to advance`,"board.sound":`Sound`,"board.on":`On`,"board.off":`Off`,"board.settings":`Settings`,"board.filterByType":`Filter orders by type`,"board.ticketCount":`{count} tickets`,"announce.newOrder":`New order {ref}`,"announce.moved":`Order {ref} moved to {status}`,"announce.nothingSelected":`Select a ticket first`,"settings.title":`Settings`,"settings.site":`Site`,"settings.language":`Language`,"settings.display":`Display`,"settings.light":`Light`,"settings.dark":`Dark`,"settings.sound":`New order sound`,"settings.soundEnabled":`Play a sound when an order arrives`,"settings.repeat":`How often`,"settings.repeatOnce":`Once`,"settings.repeatUntilStarted":`Repeat until started`,"settings.repeatHint":`Rings again every 10 seconds while a new order is waiting to be started.`,"settings.preview":`Play`,"settings.logout":`Log out`,"settings.done":`Done`,"sound.chime":`Chime`,"sound.bell":`Bell`,"sound.dingdong":`Ding-dong`,"sound.alert":`Alert`};var er={en:Qa,fr:{"app.subtitle":`Écran de cuisine`,"type.all":`Tout`,"type.dine_in":`Sur place`,"type.takeaway":`À emporter`,"type.delivery":`Livraison`,"status.pending":`Nouveau`,"status.preparing":`En préparation`,"status.ready":`Prêt`,"status.picked_up":`Récupéré`,"action.pending":`Retour à Nouveau`,"action.preparing":`Commencer`,"action.ready":`Marquer prêt`,"action.picked_up":`Marquer récupéré`,"action.recall":`Rappeler`,"board.allStations":`Tous les postes`,"board.station":`Poste`,"board.noTickets":`Aucun ticket`,"board.loading":`Chargement des commandes…`,"board.live":`Connecté`,"board.reconnecting":`Reconnexion`,"board.table":`Table`,"board.walkIn":`Client direct`,"board.orderNote":`Note de commande`,"board.keyboardHint":`Tab ou flèches pour naviguer · Entrée pour avancer`,"board.sound":`Son`,"board.on":`Activé`,"board.off":`Désactivé`,"board.settings":`Paramètres`,"board.filterByType":`Filtrer les commandes par type`,"board.ticketCount":`{count} tickets`,"announce.newOrder":`Nouvelle commande {ref}`,"announce.moved":`Commande {ref} déplacée vers {status}`,"announce.nothingSelected":`Sélectionnez d'abord un ticket`,"settings.title":`Paramètres`,"settings.site":`Site`,"settings.language":`Langue`,"settings.display":`Affichage`,"settings.light":`Clair`,"settings.dark":`Sombre`,"settings.sound":`Son des nouvelles commandes`,"settings.soundEnabled":`Jouer un son à l'arrivée d'une commande`,"settings.repeat":`Fréquence`,"settings.repeatOnce":`Une fois`,"settings.repeatUntilStarted":`Répéter jusqu'au démarrage`,"settings.repeatHint":`Sonne toutes les 10 secondes tant qu'une nouvelle commande attend.`,"settings.preview":`Écouter`,"settings.logout":`Se déconnecter`,"settings.done":`Terminé`,"sound.chime":`Carillon`,"sound.bell":`Cloche`,"sound.dingdong":`Ding-dong`,"sound.alert":`Alerte`},it:{"app.subtitle":`Display cucina`,"type.all":`Tutti`,"type.dine_in":`Al tavolo`,"type.takeaway":`Da asporto`,"type.delivery":`Consegna`,"status.pending":`Nuovo`,"status.preparing":`In preparazione`,"status.ready":`Pronto`,"status.picked_up":`Ritirato`,"action.pending":`Torna a Nuovo`,"action.preparing":`Inizia preparazione`,"action.ready":`Segna pronto`,"action.picked_up":`Segna ritirato`,"action.recall":`Richiama`,"board.allStations":`Tutte le postazioni`,"board.station":`Postazione`,"board.noTickets":`Nessun ordine`,"board.loading":`Caricamento ordini…`,"board.live":`Connesso`,"board.reconnecting":`Riconnessione`,"board.table":`Tavolo`,"board.walkIn":`Cliente al banco`,"board.orderNote":`Nota dell'ordine`,"board.keyboardHint":`Tab o frecce per spostarsi · Invio per avanzare`,"board.sound":`Suono`,"board.on":`Attivo`,"board.off":`Disattivo`,"board.settings":`Impostazioni`,"board.filterByType":`Filtra gli ordini per tipo`,"board.ticketCount":`{count} ordini`,"announce.newOrder":`Nuovo ordine {ref}`,"announce.moved":`Ordine {ref} spostato in {status}`,"announce.nothingSelected":`Seleziona prima un ordine`,"settings.title":`Impostazioni`,"settings.site":`Sede`,"settings.language":`Lingua`,"settings.display":`Schermo`,"settings.light":`Chiaro`,"settings.dark":`Scuro`,"settings.sound":`Suono nuovi ordini`,"settings.soundEnabled":`Riproduci un suono all'arrivo di un ordine`,"settings.repeat":`Frequenza`,"settings.repeatOnce":`Una volta`,"settings.repeatUntilStarted":`Ripeti finché non inizia`,"settings.repeatHint":`Suona ogni 10 secondi finché un nuovo ordine è in attesa.`,"settings.preview":`Ascolta`,"settings.logout":`Esci`,"settings.done":`Fatto`,"sound.chime":`Carillon`,"sound.bell":`Campana`,"sound.dingdong":`Din-don`,"sound.alert":`Allarme`}};var Re=class i{_language=bo$1(this.initialLanguage());language=this._language.asReadonly();locale=_I(()=>({en:`en-GB`,fr:`fr-FR`,it:`it-IT`})[this._language()]);constructor(){document.documentElement.lang=this._language()}setLanguage(t){this._language.set(t),localStorage.setItem(Wa,t),document.documentElement.lang=t}t(t,e){let n=er[this._language()][t]??Qa[t]??t;return e?n.replace(/\{(\w+)\}/g,(a,o)=>String(e[o]??``)):n}initialLanguage(){let t=localStorage.getItem(Wa);return t===`fr`||t===`it`?t:`en`}static ɵfac=function(e){return new(e||i)};static ɵprov=se({token:i,factory:i.ɵfac,providedIn:`root`})};var Jn=[`chime`,`bell`,`dingdong`,`alert`];var Ya=`kds_sound`;var Xa=`kds_sound_enabled`;var Ja=`kds_sound_repeat`;var tr={chime:[{freq:659.25,start:0,duration:.35,type:`sine`,volume:.35},{freq:987.77,start:.18,duration:.6,type:`sine`,volume:.35}],bell:[{freq:880,start:0,duration:1.4,type:`sine`,volume:.4},{freq:1760,start:0,duration:.9,type:`sine`,volume:.12},{freq:2637,start:0,duration:.5,type:`sine`,volume:.06}],dingdong:[{freq:659.25,start:0,duration:.55,type:`triangle`,volume:.45},{freq:523.25,start:.45,duration:.8,type:`triangle`,volume:.45}],alert:[{freq:1046.5,start:0,duration:.12,type:`square`,volume:.12},{freq:1046.5,start:.2,duration:.12,type:`square`,volume:.12},{freq:1046.5,start:.4,duration:.12,type:`square`,volume:.12}]};var ht=class i{sound=bo$1(this.initialSound());enabled=bo$1(localStorage.getItem(Xa)!==`false`);repeat=bo$1(localStorage.getItem(Ja)===`repeat`?`repeat`:`once`);context=null;constructor(){let t=()=>this.audio()?.resume();document.addEventListener(`pointerdown`,t,{once:!0}),document.addEventListener(`keydown`,t,{once:!0})}setSound(t){this.sound.set(t),localStorage.setItem(Ya,t)}setRepeat(t){this.repeat.set(t),localStorage.setItem(Ja,t)}setEnabled(t){this.enabled.set(t),localStorage.setItem(Xa,String(t))}playNewOrder(){this.enabled()&&this.play(this.sound())}play(t){let e=this.audio();if(!e)return;e.state===`suspended`&&e.resume();let n=e.currentTime+.02;for(let a of tr[t]){let o=e.createOscillator(),s=e.createGain();o.type=a.type,o.frequency.value=a.freq,s.gain.setValueAtTime(1e-4,n+a.start),s.gain.exponentialRampToValueAtTime(a.volume,n+a.start+.01),s.gain.exponentialRampToValueAtTime(1e-4,n+a.start+a.duration),o.connect(s).connect(e.destination),o.start(n+a.start),o.stop(n+a.start+a.duration+.05)}}audio(){return!this.context&&typeof AudioContext<`u`&&(this.context=new AudioContext),this.context}initialSound(){let t=localStorage.getItem(Ya);return t&&Jn.includes(t)?t:`chime`}static ɵfac=function(e){return new(e||i)};static ɵprov=se({token:i,factory:i.ɵfac,providedIn:`root`})};var Za={pending:{header:`bg-red-600 text-white`,border:`border-red-500/70`,text:`text-red-600 dark:text-red-400`,solid:`#dc2626`},preparing:{header:`bg-amber-500 text-slate-950`,border:`border-amber-500/70`,text:`text-amber-600 dark:text-amber-400`,solid:`#d97706`},ready:{header:`bg-emerald-500 text-slate-950`,border:`border-emerald-500/70`,text:`text-emerald-600 dark:text-emerald-400`,solid:`#059669`},picked_up:{header:`bg-slate-600 text-white`,border:`border-slate-500/70`,text:`text-slate-600 dark:text-slate-300`,solid:`#475569`}};function Zn(i){return Za[i]??Za.picked_up}var nr=(i,t)=>t.itemId;function ir(i,t){if(i&1&&(Yo$1(0,`span`,15),hI(1),ic()),i&2){let e=jE().$implicit,n=jE();Dy(),hp(n.optionsSummary(e))}}function ar(i,t){if(i&1&&(Yo$1(0,`p`,16),hI(1),ic()),i&2){let e=jE().$implicit;Dy(),hp(e.notes)}}function or(i,t){if(i&1&&(Yo$1(0,`p`,17),hI(1),ic()),i&2){let e=jE().$implicit;Dy(),hp(e.station.name)}}function rr(i,t){if(i&1&&(Yo$1(0,`li`,10)(1,`span`,13),hI(2),ic(),Yo$1(3,`div`,2)(4,`span`,14),hI(5),ic(),TE(6,ir,2,1,`span`,15),TE(7,ar,2,1,`p`,16),TE(8,or,2,1,`p`,17),ic()()),i&2){let e=t.$implicit,n=jE();Dy(2),hp(e.quantity),Dy(3),hp(e.name),Dy(),_E(n.optionsSummary(e)?6:-1),Dy(),_E(e.notes?7:-1),Dy(),_E(n.showStations()?8:-1)}}function sr(i,t){if(i&1&&(Yo$1(0,`p`,11)(1,`mat-icon`,6),hI(2,`edit_note`),ic(),Yo$1(3,`span`,18),hI(4),ic(),hI(5),ic()),i&2){let e=jE();Dy(4),uc(``,e.i18n.t(`board.orderNote`),`:`),Dy(),uc(` `,e.order().note,` `)}}function lr(i,t){if(i&1&&(Yo$1(0,`kbd`,20),hI(1),ic()),i&2){let e=jE();Dy(),hp(e.shortcut)}}function dr(i,t){if(i&1){let e=LE();Yo$1(0,`div`,12)(1,`button`,19),Xf(`click`,function(a){Pl(e);let o=jE();return a.stopPropagation(),Fl(o.advance.emit())}),hI(2),TE(3,lr,2,1,`kbd`,20),ic()()}if(i&2){let e=t,n=jE();Dy(),ap(`--%NS%mat-button-filled-container-color`,n.tone().solid)(`--%NS%mat-button-filled-label-text-color`,`#fff`),qf(`disabled`,n.busy()),Dy(),uc(` `,n.i18n.t(`action.`+e.key),` `),Dy(),_E(e.shortcut?3:-1)}}var cr={dine_in:`restaurant`,takeaway:`shopping_bag`,delivery:`delivery_dining`};var gt=class i{host=D(nr$1);i18n=D(Re);order=zL.required();tone=zL.required();now=zL.required();selected=zL(!1);fresh=zL(!1);busy=zL(!1);showStations=zL(!1);advance=qL();selectRequest=qL();typeIcon=_I(()=>cr[this.order().orderType]??`restaurant`);subtitle=_I(()=>{let t=this.order();return t.table?`${this.i18n.t(`board.table`)} ${t.table.name}`:t.person?.name||this.i18n.t(`board.walkIn`)});timer=_I(()=>{let t=Math.max(0,Math.floor((this.now()-new Date(this.order().stageSince).getTime())/1e3)),e=Math.floor(t/3600),n=String(Math.floor(t%3600/60)).padStart(2,`0`),a=String(t%60).padStart(2,`0`);return e?`${e}:${n}:${a}`:`${n}:${a}`});ariaLabel=_I(()=>{let t=this.order(),e=t.items.map(n=>`${n.quantity} ${n.name}`).join(`, `);return`#${t.reference??``}, ${this.i18n.t(`type.`+t.orderType)}, ${this.subtitle()}, ${this.timer()}. ${e}`});focus(){this.host.nativeElement.focus()}optionsSummary(t){return t.options?.map(e=>e.optionItemName||e.name).join(`, `)??``}static ɵfac=function(e){return new(e||i)};static ɵcmp=eE({type:i,selectors:[[`app-order-card`]],hostAttrs:[`role`,`listitem`,`tabindex`,`0`,1,`block`,`rounded-xl`,`outline-none`],hostVars:2,hostBindings:function(e,n){e&1&&Xf(`focus`,function(){return n.selectRequest.emit()})(`click`,function(){return n.selectRequest.emit()}),e&2&&Gf(`aria-label`,n.ariaLabel())(`aria-current`,n.selected()?`true`:null)},inputs:{order:[1,`order`],tone:[1,`tone`],now:[1,`now`],selected:[1,`selected`],fresh:[1,`fresh`],busy:[1,`busy`],showStations:[1,`showStations`]},outputs:{advance:`advance`,selectRequest:`selectRequest`},decls:19,vars:15,consts:[[1,`overflow-hidden`,`rounded-xl`,`border-2`,`bg-white`,`transition-shadow`,`dark:bg-slate-900`],[1,`flex`,`items-start`,`justify-between`,`gap-3`,`px-4`,`pt-3`],[1,`min-w-0`],[1,`flex`,`flex-wrap`,`items-baseline`,`gap-x-3`,`gap-y-0.5`],[1,`text-2xl`,`font-bold`,`tabular-nums`,`text-slate-900`,`dark:text-white`],[1,`flex`,`items-center`,`gap-1`,`text-sm`,`text-slate-600`,`dark:text-slate-300`],[`aria-hidden`,`true`,1,`!h-4`,`!w-4`,`!text-base`],[1,`truncate`,`text-sm`,`text-slate-500`,`dark:text-slate-400`],[1,`shrink-0`,`text-2xl`,`font-bold`,`tabular-nums`],[1,`flex`,`flex-col`,`gap-1`,`px-4`,`py-3`],[1,`flex`,`gap-3`,`text-[15px]`],[1,`mx-4`,`flex`,`items-center`,`gap-1.5`,`border-t`,`border-slate-200`,`pt-2`,`pb-3`,`text-sm`,`text-slate-600`,`dark:border-slate-700`,`dark:text-slate-300`],[1,`px-4`,`pb-4`],[1,`w-5`,`shrink-0`,`font-semibold`,`tabular-nums`,`text-slate-900`,`dark:text-white`],[1,`text-slate-900`,`dark:text-white`],[1,`ml-2`,`text-slate-500`,`dark:text-slate-400`],[1,`text-xs`,`text-amber-700`,`dark:text-amber-300`],[1,`text-[11px]`,`uppercase`,`tracking-wide`,`text-slate-400`],[1,`sr-only`],[`matButton`,`filled`,`type`,`button`,`tabindex`,`-1`,1,`kds-ticket-action`,`!h-11`,`w-full`,`!text-[15px]`,`!font-semibold`,3,`click`,`disabled`],[1,`ml-2`,`rounded`,`bg-white/20`,`px-1.5`,`text-xs`,`font-medium`]],template:function(e,n){if(e&1&&(Yo$1(0,`article`,0)(1,`div`,1)(2,`div`,2)(3,`div`,3)(4,`span`,4),hI(5),ic(),Yo$1(6,`span`,5)(7,`mat-icon`,6),hI(8),ic(),hI(9),ic()(),Yo$1(10,`p`,7),hI(11),ic()(),Yo$1(12,`span`,8),hI(13),ic()(),Yo$1(14,`ul`,9),ME(15,rr,9,5,`li`,10,nr),ic(),TE(17,sr,6,2,`p`,11),TE(18,dr,4,7,`div`,12),ic()),e&2){let a;rI(n.tone().border),cp(`kds-selected`,n.selected())(`kds-fresh`,n.fresh()),Dy(5),uc(`#`,n.order().reference),Dy(3),hp(n.typeIcon()),Dy(),uc(` `,n.i18n.t(`type.`+n.order().orderType),` `),Dy(2),hp(n.subtitle()),Dy(),rI(n.tone().text),Dy(),hp(n.timer()),Dy(2),SE(n.order().items),Dy(2),_E(n.order().note?17:-1),Dy(),_E((a=n.order().nextAction)?18:-1,a)}},dependencies:[ol,il,El,kl],encapsulation:2})};var io=new A(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var ao=new A(`MatButtonToggleGroup`);var mr={provide:Zt$2,useExisting:Xr(()=>ei),multi:!0};var mn=class{source;value;constructor(t,e){this.source=t,this.value=e}};var ei=(()=>{class i{_changeDetector=D(JL);_dir=D(it,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=D(Lt).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(n=>n.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new xe;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new xe;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=D(io,{optional:!0});this.appearance=e&&e.appearance?e.appearance:`standard`,this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Ve(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||wt$1(e))return;let a=e.target.id,o=this._buttonToggles.toArray().findIndex(r=>r.buttonId===a),s=null;switch(e.keyCode){case 32:case 13:s=this._buttonToggles.get(o)||null;break;case 38:s=this._getNextButton(o,-1);break;case 37:s=this._getNextButton(o,this.dir===`ltr`?-1:1);break;case 40:s=this._getNextButton(o,1);break;case 39:s=this._getNextButton(o,this.dir===`ltr`?1:-1);break;default:return}s&&(e.preventDefault(),s._onButtonClick(),s.focus())}_emitChangeEvent(e){let n=new mn(e,this.value);this._rawValue=n.value,this._controlValueAccessorChangeFn(n.value),this.change.emit(n)}_syncButtonToggle(e,n,a=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?n?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,a)):this._updateModelValue(e,a)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(n=>e.value!=null&&n===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let n=this._buttonToggles.get(e);if(!n.disabled){n.tabIndex=0;break}}}_getNextButton(e,n){let a=this._buttonToggles;for(let o=1;o<=a.length;o++){let s=(e+n*o+a.length)%a.length,r=a.get(s);if(r&&!r.disabled)return r}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let n=this._buttonToggles.toArray();if(this.multiple&&e?(this._clearSelection(),e.forEach(a=>this._selectValue(a,n))):(this._clearSelection(),this._selectValue(e,n)),!this.multiple&&n.every(a=>a.tabIndex===-1)){for(let a of n)if(!a.disabled){a.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,n){for(let a of n)if(a.value===e){a.checked=!0,this._selectionModel.select(a),this.multiple||(a.tabIndex=0);break}}_updateModelValue(e,n){n&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static ɵfac=function(n){return new(n||i)};static ɵdir=iE({type:i,selectors:[[`mat-button-toggle-group`]],contentQueries:function(n,a,o){if(n&1&&tp(o,un,5),n&2){let s;UE(s=WE())&&(a._buttonToggles=s)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(n,a){n&1&&Xf(`keydown`,function(s){return a._keydown(s)}),n&2&&(Gf(`role`,a.multiple?`group`:`radiogroup`)(`aria-disabled`,a.disabled),cp(`mat-button-toggle-vertical`,a.vertical)(`mat-button-toggle-group-appearance-standard`,a.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,eP],value:`value`,multiple:[2,`multiple`,`multiple`,eP],disabled:[2,`disabled`,`disabled`,eP],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,eP],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,eP],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,eP]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[DI([mr,{provide:ao,useExisting:i}])]})}return i})();var un=(()=>{class i{_changeDetectorRef=D(JL);_elementRef=D(nr$1);_focusMonitor=D(Ft);_idGenerator=D(Lt);_animationDisabled=$();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new xe;constructor(){D(z).load(yi);let e=D(ao,{optional:!0}),n=D(new wp(`tabindex`),{optional:!0})||``,a=D(io,{optional:!0});this._tabIndex=bo$1(parseInt(n)||0),this.buttonToggleGroup=e,this._appearance=a&&a.appearance?a.appearance:`standard`,this._disabledInteractive=a?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let n=this.buttonToggleGroup._buttonToggles.find(a=>a.tabIndex===0);n&&(n.tabIndex=-1),this.tabIndex=0}this.change.emit(new mn(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`button`],n=[`*`];function a(o,s){if(o&1&&(Yo$1(0,`div`,2),zf(1,`mat-pseudo-checkbox`,6),ic()),o&2){let r=jE();Dy(),qf(`disabled`,r.disabled)}}return eE({type:i,selectors:[[`mat-button-toggle`]],viewQuery:function(s,r){if(s&1&&np(e,5),s&2){let u;UE(u=WE())&&(r._buttonElement=u.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(s,r){s&1&&Xf(`focus`,function(){return r.focus()}),s&2&&(Gf(`aria-label`,null)(`aria-labelledby`,null)(`id`,r.id)(`name`,null),cp(`mat-button-toggle-standalone`,!r.buttonToggleGroup)(`mat-button-toggle-checked`,r.checked)(`mat-button-toggle-disabled`,r.disabled)(`mat-button-toggle-disabled-interactive`,r.disabledInteractive)(`mat-button-toggle-appearance-standard`,r.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,eP],appearance:`appearance`,checked:[2,`checked`,`checked`,eP],disabled:[2,`disabled`,`disabled`,eP],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,eP]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:n,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(s,r){if(s&1&&(HE(),Yo$1(0,`button`,1,0),Xf(`click`,function(){return r._onButtonClick()}),TE(2,a,2,1,`div`,2),Yo$1(3,`span`,3),BE(4),ic()(),zf(5,`span`,4)(6,`span`,5)),s&2){let u=qE(1);qf(`id`,r.buttonId)(`disabled`,r.disabled&&!r.disabledInteractive||null),Gf(`role`,r.isSingleSelector()?`radio`:`button`)(`tabindex`,r.disabled&&!r.disabledInteractive?-1:r.tabIndex)(`aria-pressed`,r.isSingleSelector()?null:r.checked)(`aria-checked`,r.isSingleSelector()?r.checked:null)(`name`,r._getButtonName())(`aria-label`,r.ariaLabel)(`aria-labelledby`,r.ariaLabelledby)(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null),Dy(2),_E(r.buttonToggleGroup&&(!r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideSingleSelectionIndicator||r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),Dy(4),qf(`matRippleTrigger`,u)(`matRippleDisabled`,r.disableRipple||r.disabled)}},dependencies:[ks,Qt],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})})()}return i})();var oo=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=nE({type:i});static ɵinj=ll({imports:[Si,un,F]})}return i})();var pn=(()=>{class i{labelPosition=`after`;static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){return eE({type:i,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(a,o){a&2&&cp(`mdc-form-field--align-end`,o.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:[`*`],decls:1,vars:0,template:function(a,o){a&1&&(HE(),BE(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})})()}return i})();var hn=class{source;value;constructor(t,e){this.source=t,this.value=e}};var pr={provide:Zt$2,useExisting:Xr(()=>ti),multi:!0};var ro=new A(`MatRadioGroup`);var hr=new A(`mat-radio-default-options`,{providedIn:`root`,factory:()=>({color:`accent`,disabledInteractive:!1})});var ti=(()=>{class i{_changeDetector=D(JL);_value=null;_name=D(Lt).getId(`mat-radio-group-`);_selected=null;_isInitialized=!1;_labelPosition=`after`;_disabled=!1;_required=!1;_buttonChanges;_controlValueAccessorChangeFn=()=>{};onTouched=()=>{};change=new xe;_radios;color;get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e===`before`?`before`:`after`,this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markRadiosForCheck()}_disabledInteractive=!1;ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(n=>{n.checked=this.value===n.value,n.checked&&(this._selected=n)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new hn(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}static ɵfac=function(n){return new(n||i)};static ɵdir=iE({type:i,selectors:[[`mat-radio-group`]],contentQueries:function(n,a,o){if(n&1&&tp(o,gn,5),n&2){let s;UE(s=WE())&&(a._radios=s)}},hostAttrs:[`role`,`radiogroup`,1,`mat-mdc-radio-group`],inputs:{color:`color`,name:`name`,labelPosition:`labelPosition`,value:`value`,selected:`selected`,disabled:[2,`disabled`,`disabled`,eP],required:[2,`required`,`required`,eP],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,eP]},outputs:{change:`change`},exportAs:[`matRadioGroup`],features:[DI([pr,{provide:ro,useExisting:i}])]})}return i})();var gn=(()=>{class i{_elementRef=D(nr$1);_changeDetector=D(JL);_focusMonitor=D(Ft);_radioDispatcher=D(Dn);_defaultOptions=D(hr,{optional:!0});_ngZone=D(be$1);_renderer=D(ua$1);_uniqueId=D(Lt).getId(`mat-radio-`);_cleanupClick;id=this._uniqueId;name;ariaLabel;ariaLabelledby;ariaDescribedby;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||`after`}set labelPosition(e){this._labelPosition=e}_labelPosition;get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){e!==this._required&&this._changeDetector.markForCheck(),this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._defaultOptions&&this._defaultOptions.color||`accent`}set color(e){this._color=e}_color;get disabledInteractive(){return this._disabledInteractive||this.radioGroup!==null&&this.radioGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new xe;radioGroup;get inputId(){return`${this.id||this._uniqueId}-input`}_checked=!1;_disabled=!1;_required=!1;_value=null;_removeUniqueSelectionListener=()=>{};_previousTabIndex;_inputElement;_rippleTrigger;_noopAnimations=$();_injector=D(ne);constructor(){D(z).load(yi);let e=D(ro,{optional:!0}),n=D(new wp(`tabindex`),{optional:!0});this.radioGroup=e,this._disabledInteractive=this._defaultOptions?.disabledInteractive??!1,n&&(this.tabIndex=tP(n,0))}focus(e,n){n?this._focusMonitor.focusVia(this._inputElement,n,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,n)=>{e!==this.id&&n===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()}),this._ngZone.runOutsideAngular(()=>{this._cleanupClick=this._renderer.listen(this._inputElement.nativeElement,`click`,this._onInputClick)})}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new hn(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let n=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),n&&this.radioGroup._emitChangeEvent())}}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_onInputClick=e=>{this.disabled&&this.disabledInteractive&&e.preventDefault()};_updateTabIndex(){let e=this.radioGroup,n;if(!e||!e.selected||this.disabled?n=this.tabIndex:n=e.selected===this?this.tabIndex:-1,n!==this._previousTabIndex){let a=this._inputElement?.nativeElement;a&&(a.setAttribute(`tabindex`,n+``),this._previousTabIndex=n,ty(()=>{queueMicrotask(()=>{e&&e.selected&&e.selected!==this&&document.activeElement===a&&(e.selected?._inputElement.nativeElement.focus(),document.activeElement===a&&this._inputElement.nativeElement.blur())})},{injector:this._injector}))}}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`input`],n=[`formField`];return eE({type:i,selectors:[[`mat-radio-button`]],viewQuery:function(s,r){if(s&1&&np(e,5)(n,7,nr$1),s&2){let u;UE(u=WE())&&(r._inputElement=u.first),UE(u=WE())&&(r._rippleTrigger=u.first)}},hostAttrs:[1,`mat-mdc-radio-button`],hostVars:19,hostBindings:function(s,r){s&1&&Xf(`focus`,function(){return r._inputElement.nativeElement.focus()}),s&2&&(Gf(`id`,r.id)(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null),cp(`mat-primary`,r.color===`primary`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`mat-mdc-radio-checked`,r.checked)(`mat-mdc-radio-disabled`,r.disabled)(`mat-mdc-radio-disabled-interactive`,r.disabledInteractive)(`_mat-animation-noopable`,r._noopAnimations))},inputs:{id:`id`,name:`name`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],disableRipple:[2,`disableRipple`,`disableRipple`,eP],tabIndex:[2,`tabIndex`,`tabIndex`,o=>o==null?0:tP(o)],checked:[2,`checked`,`checked`,eP],value:`value`,labelPosition:`labelPosition`,disabled:[2,`disabled`,`disabled`,eP],required:[2,`required`,`required`,eP],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,eP]},outputs:{change:`change`},exportAs:[`matRadioButton`],ngContentSelectors:[`*`],decls:13,vars:17,consts:[[`formField`,``],[`input`,``],[`mat-internal-form-field`,``,3,`labelPosition`,`for`],[1,`mdc-radio`],[1,`mat-mdc-radio-touch-target`],[`type`,`radio`,`aria-invalid`,`false`,1,`mdc-radio__native-control`,3,`change`,`id`,`checked`,`disabled`,`required`],[`aria-hidden`,`true`,1,`mdc-radio__background`],[1,`mdc-radio__outer-circle`],[1,`mdc-radio__inner-circle`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-radio-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-ripple-element`,`mat-radio-persistent-ripple`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(s,r){s&1&&(HE(),Yo$1(0,`label`,2,0)(2,`span`,3),zf(3,`span`,4),Yo$1(4,`input`,5,1),Xf(`change`,function(v){return r._onInputInteraction(v)}),ic(),Yo$1(6,`span`,6),zf(7,`span`,7)(8,`span`,8),ic(),Yo$1(9,`span`,9),zf(10,`span`,10),ic()(),Yo$1(11,`span`,11),BE(12),ic()()),s&2&&(qf(`labelPosition`,r.labelPosition)(`for`,r.inputId),Dy(2),cp(`mdc-radio--disabled`,r.disabled),Dy(2),qf(`id`,r.inputId)(`checked`,r.checked)(`disabled`,r.disabled&&!r.disabledInteractive)(`required`,r.required),Gf(`name`,r.name)(`value`,r.value)(`aria-label`,r.ariaLabel)(`aria-labelledby`,r.ariaLabelledby)(`aria-describedby`,r.ariaDescribedby)(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null),Dy(5),qf(`matRippleTrigger`,r._rippleTrigger.nativeElement)(`matRippleDisabled`,r._isRippleDisabled())(`matRippleCentered`,!0))},dependencies:[ks,pn],styles:[`.mat-mdc-radio-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-radio-button .mdc-radio {
  display: inline-block;
  position: relative;
  flex: 0 0 auto;
  box-sizing: content-box;
  width: 20px;
  height: 20px;
  will-change: opacity, transform, border-color, color;
  padding: calc((var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]):not(:focus) ~ .mdc-radio__background::before {
  opacity: 0.04;
  transform: scale(1);
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:not([disabled]) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:hover > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-hover-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-pressed-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio:active > .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-pressed-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__background {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  position: absolute;
  transform: scale(0, 0);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  content: "";
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
  top: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
  left: calc(-1 * (var(--%NS%mat-radio-state-layer-size, 40px) - 20px) / 2);
}
.mat-mdc-radio-button .mdc-radio__outer-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  transition: border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-radio-button .mdc-radio__inner-circle {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  transform: scale(0);
  border-radius: 50%;
  transition: transform 90ms cubic-bezier(0.4, 0, 0.6, 1), background-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
@media (forced-colors: active) {
  .mat-mdc-radio-button .mdc-radio__inner-circle {
    background-color: CanvasText !important;
  }
}
.mat-mdc-radio-button .mdc-radio__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  top: 0;
  right: 0;
  left: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-radio-state-layer-size, 40px);
  height: var(--%NS%mat-radio-state-layer-size, 40px);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle, .mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:focus + .mdc-radio__background::before {
  transform: scale(1);
  opacity: 0.12;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 1), transform 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background {
  cursor: default;
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:disabled + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-selected-focus-icon-color, var(--%NS%mat-sys-primary, currentColor));
}
.mat-mdc-radio-button .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle {
  transform: scale(0.5);
  transition: transform 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled {
  pointer-events: auto;
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked) + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-unselected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-unselected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__outer-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--%NS%disabled:hover .mdc-radio__native-control:checked + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus + .mdc-radio__background > .mdc-radio__inner-circle,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control + .mdc-radio__background > .mdc-radio__inner-circle {
  background-color: var(--%NS%mat-radio-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface, currentColor));
  opacity: var(--%NS%mat-radio-disabled-selected-icon-opacity, 0.38);
}
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,
.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle {
  transition: none !important;
}
.mat-mdc-radio-button .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-radio-button .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-checked-ripple-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,
.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before {
  background-color: var(--%NS%mat-radio-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button .mat-internal-form-field {
  color: var(--%NS%mat-radio-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-radio-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-radio-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-radio-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-radio-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-radio-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
  cursor: pointer;
}
.mat-mdc-radio-button .mdc-radio--disabled + .mat-internal-form-field-label {
  color: var(--%NS%mat-radio-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-radio-button .mat-radio-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
}
.mat-mdc-radio-button .mat-radio-ripple > .mat-ripple-element {
  opacity: 0.14;
}
.mat-mdc-radio-button .mat-radio-ripple::before {
  border-radius: 50%;
}
.mat-mdc-radio-button .mdc-radio > .mdc-radio__native-control:focus:enabled:not(:checked) ~ .mdc-radio__background > .mdc-radio__outer-circle {
  border-color: var(--%NS%mat-radio-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-radio-button.cdk-focused .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-radio-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-radio-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-radio-touch-target-size, 48px);
  width: var(--%NS%mat-radio-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-radio-touch-target-display, block);
}
[dir=rtl] .mat-mdc-radio-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return i})();var so=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=nE({type:i});static ɵinj=ll({imports:[Si,gn,F]})}return i})();var br=new A(`mat-slide-toggle-default-options`,{providedIn:`root`,factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})});var bn=class{source;checked;constructor(t,e){this.source=t,this.checked=e}};var ni=(()=>{class i{_elementRef=D(nr$1);_focusMonitor=D(Ft);_changeDetectorRef=D(JL);defaults=D(br);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new bn(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=$();_focused=!1;name=null;id;labelPosition=`after`;ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;fullWidth=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new xe;toggleChange=new xe;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){D(z).load(yi);let e=D(new wp(`tabindex`),{optional:!0}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||`accent`,this.id=this._uniqueId=D(Lt).getId(`mat-mdc-slide-toggle-`),this.hideIcon=n.hideIcon??!1,this.disabledInteractive=n.disabledInteractive??!1,this._labelId=this._uniqueId+`-label`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e===`keyboard`||e===`program`?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new bn(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let e=[`switch`],n=[`*`];function a(o,s){o&1&&(Yo$1(0,`span`,11),Yl(),Yo$1(1,`svg`,13),zf(2,`path`,14),ic(),Yo$1(3,`svg`,15),zf(4,`path`,16),ic()())}return eE({type:i,selectors:[[`mat-slide-toggle`]],viewQuery:function(s,r){if(s&1&&np(e,5),s&2){let u;UE(u=WE())&&(r._switchElement=u.first)}},hostAttrs:[1,`mat-mdc-slide-toggle`],hostVars:15,hostBindings:function(s,r){s&2&&(Kf(`id`,r.id),Gf(`tabindex`,null)(`aria-label`,null)(`name`,null)(`aria-labelledby`,null),rI(r.color?`mat-`+r.color:``),cp(`mat-mdc-slide-toggle-focused`,r._focused)(`mat-mdc-slide-toggle-checked`,r.checked)(`mat-slide-toggle-full-width`,r.fullWidth)(`_mat-animation-noopable`,r._noopAnimations))},inputs:{name:`name`,id:`id`,labelPosition:`labelPosition`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],required:[2,`required`,`required`,eP],color:`color`,disabled:[2,`disabled`,`disabled`,eP],fullWidth:[2,`fullWidth`,`fullWidth`,eP],disableRipple:[2,`disableRipple`,`disableRipple`,eP],tabIndex:[2,`tabIndex`,`tabIndex`,o=>o==null?0:tP(o)],checked:[2,`checked`,`checked`,eP],hideIcon:[2,`hideIcon`,`hideIcon`,eP],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,eP]},outputs:{change:`change`,toggleChange:`toggleChange`},exportAs:[`matSlideToggle`],features:[DI([{provide:Zt$2,useExisting:Xr(()=>i),multi:!0},{provide:Re$1,useExisting:i,multi:!0}]),Ng],ngContentSelectors:n,decls:14,vars:27,consts:[[`switch`,``],[`mat-internal-form-field`,``,3,`labelPosition`],[`role`,`switch`,`type`,`button`,1,`mdc-switch`,3,`click`,`tabIndex`,`disabled`],[1,`mat-mdc-slide-toggle-touch-target`],[1,`mdc-switch__track`],[1,`mdc-switch__handle-track`],[1,`mdc-switch__handle`],[1,`mdc-switch__shadow`],[1,`mdc-elevation-overlay`],[1,`mdc-switch__ripple`],[`mat-ripple`,``,1,`mat-mdc-slide-toggle-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mdc-switch__icons`],[1,`mdc-label`,3,`click`,`for`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--on`],[`d`,`M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z`],[`viewBox`,`0 0 24 24`,`aria-hidden`,`true`,1,`mdc-switch__icon`,`mdc-switch__icon--off`],[`d`,`M20 13H4v-2h16v2z`]],template:function(s,r){if(s&1&&(HE(),Yo$1(0,`div`,1)(1,`button`,2,0),Xf(`click`,function(){return r._handleClick()}),zf(3,`div`,3)(4,`span`,4),Yo$1(5,`span`,5)(6,`span`,6)(7,`span`,7),zf(8,`span`,8),ic(),Yo$1(9,`span`,9),zf(10,`span`,10),ic(),TE(11,a,5,0,`span`,11),ic()()(),Yo$1(12,`label`,12),Xf(`click`,function(v){return v.stopPropagation()}),BE(13),ic()()),s&2){let u=qE(2);qf(`labelPosition`,r.labelPosition),Dy(),cp(`mdc-switch--selected`,r.checked)(`mdc-switch--unselected`,!r.checked)(`mdc-switch--checked`,r.checked)(`mdc-switch--disabled`,r.disabled)(`mat-mdc-slide-toggle-disabled-interactive`,r.disabledInteractive),qf(`tabIndex`,r.disabled&&!r.disabledInteractive?-1:r.tabIndex)(`disabled`,r.disabled&&!r.disabledInteractive),Gf(`id`,r.buttonId)(`name`,r.name)(`aria-label`,r.ariaLabel)(`aria-labelledby`,r._getAriaLabelledBy())(`aria-describedby`,r.ariaDescribedby)(`aria-required`,r.required||null)(`aria-checked`,r.checked)(`aria-disabled`,r.disabled&&r.disabledInteractive?`true`:null),Dy(9),qf(`matRippleTrigger`,u)(`matRippleDisabled`,r.disableRipple||r.disabled)(`matRippleCentered`,!0),Dy(),_E(r.hideIcon?-1:11),Dy(),qf(`for`,r.buttonId),Gf(`id`,r._labelId)}},dependencies:[ks,pn],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--%NS%mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--%NS%mat-slide-toggle-track-height, 32px);
  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--%NS%mat-slide-toggle-handle-width);
  height: var(--%NS%mat-slide-toggle-handle-height);
  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));
}
.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));
}
.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--%NS%mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {
  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-slide-toggle-full-width {
  width: 100%;
}
.mat-slide-toggle-full-width .mat-internal-form-field {
  width: 100%;
  justify-content: space-between;
}
.mat-slide-toggle-full-width .mat-internal-form-field label {
  margin: 0;
  flex-grow: 1;
  text-align: end;
}
.mat-slide-toggle-full-width .mdc-form-field--align-end label {
  text-align: start;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2})})()}return i})();var lo=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=nE({type:i});static ɵinj=ll({imports:[ni,F]})}return i})();var vr=(i,t)=>t._id;var yr=(i,t)=>t.code;function kr(i,t){if(i&1&&(Yo$1(0,`mat-option`,5),hI(1),ic()),i&2){let e=t.$implicit;qf(`value`,e._id),Dy(),hp(e.name)}}function xr(i,t){if(i&1&&(Yo$1(0,`mat-option`,5),hI(1),ic()),i&2){let e=t.$implicit;qf(`value`,e.code),Dy(),hp(e.label)}}function wr(i,t){if(i&1&&(Yo$1(0,`span`,18),hI(1),ic()),i&2){let e=jE();Dy(),hp(e.i18n.t(`settings.repeatHint`))}}function Sr(i,t){if(i&1){let e=LE();Yo$1(0,`div`,20)(1,`mat-radio-button`,5),hI(2),ic(),Yo$1(3,`button`,24),Xf(`click`,function(){let a=Pl(e).$implicit,o=jE();return Fl(o.sound.play(a))}),Yo$1(4,`mat-icon`),hI(5,`play_arrow`),ic()()()}if(i&2){let e=t.$implicit,n=jE();Dy(),qf(`value`,e),Dy(),hp(n.i18n.t(`sound.`+e)),Dy(),Gf(`aria-label`,n.i18n.t(`settings.preview`)+` `+n.i18n.t(`sound.`+e))}}var fn=class i{dialogRef=D(ze);i18n=D(Re);sound=D(ht);theme=D(Ho$1);storeService=D(Bo$1);languages=$a;sounds=Jn;setLanguage(t){this.i18n.setLanguage(t)}setTheme(t){this.theme.set(t)}chooseSound(t){this.sound.setSound(t),this.sound.play(t)}switchStore(t){t!==this.storeService.currentStore()?._id&&this.dialogRef.close({switchToStoreId:t})}logout(){this.dialogRef.close({logout:!0})}static ɵfac=function(e){return new(e||i)};static ɵcmp=eE({type:i,selectors:[[`app-settings-dialog`]],decls:56,vars:22,consts:[[`mat-dialog-title`,``],[1,`flex`,`flex-col`,`gap-6`,`pt-2`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`w-full`],[`matPrefix`,``,1,`mx-2`],[3,`selectionChange`,`value`],[3,`value`],[1,`flex`,`flex-col`,`gap-2`],[`id`,`display-label`,1,`text-sm`,`font-medium`],[`aria-labelledby`,`display-label`,1,`self-start`,3,`change`,`value`],[`value`,`light`],[`value`,`dark`],[`id`,`sound-label`,1,`text-sm`,`font-medium`],[3,`change`,`checked`],[1,`flex`,`flex-col`,`gap-1`],[`id`,`repeat-label`,1,`text-xs`,`text-slate-500`,`dark:text-slate-400`],[`aria-labelledby`,`repeat-label`,1,`self-start`,3,`change`,`value`,`disabled`],[`value`,`once`],[`value`,`repeat`],[1,`text-xs`,`text-slate-500`,`dark:text-slate-400`],[`aria-labelledby`,`sound-label`,1,`grid`,`grid-cols-1`,`gap-1`,`sm:grid-cols-2`,3,`change`,`value`,`disabled`],[1,`flex`,`items-center`,`justify-between`,`rounded-lg`,`pr-1`,`ring-1`,`ring-slate-200`,`dark:ring-slate-700`],[1,`!justify-between`],[`matButton`,``,`type`,`button`,3,`click`],[`matButton`,`filled`,`type`,`button`,`mat-dialog-close`,``,`cdkFocusInitial`,``],[`matIconButton`,``,`type`,`button`,3,`click`]],template:function(e,n){e&1&&(Yo$1(0,`h2`,0),hI(1),ic(),Yo$1(2,`mat-dialog-content`)(3,`div`,1)(4,`mat-form-field`,2)(5,`mat-label`),hI(6),ic(),Yo$1(7,`mat-icon`,3),hI(8,`storefront`),ic(),Yo$1(9,`mat-select`,4),Xf(`selectionChange`,function(o){return n.switchStore(o.value)}),ME(10,kr,2,2,`mat-option`,5,vr),ic()(),Yo$1(12,`mat-form-field`,2)(13,`mat-label`),hI(14),ic(),Yo$1(15,`mat-icon`,3),hI(16,`translate`),ic(),Yo$1(17,`mat-select`,4),Xf(`selectionChange`,function(o){return n.setLanguage(o.value)}),ME(18,xr,2,2,`mat-option`,5,yr),ic()(),Yo$1(20,`section`,6)(21,`h3`,7),hI(22),ic(),Yo$1(23,`mat-button-toggle-group`,8),Xf(`change`,function(o){return n.setTheme(o.value)}),Yo$1(24,`mat-button-toggle`,9)(25,`mat-icon`),hI(26,`light_mode`),ic(),hI(27),ic(),Yo$1(28,`mat-button-toggle`,10)(29,`mat-icon`),hI(30,`dark_mode`),ic(),hI(31),ic()()(),Yo$1(32,`section`,6)(33,`h3`,11),hI(34),ic(),Yo$1(35,`mat-slide-toggle`,12),Xf(`change`,function(o){return n.sound.setEnabled(o.checked)}),hI(36),ic(),Yo$1(37,`div`,13)(38,`span`,14),hI(39),ic(),Yo$1(40,`mat-button-toggle-group`,15),Xf(`change`,function(o){return n.sound.setRepeat(o.value)}),Yo$1(41,`mat-button-toggle`,16),hI(42),ic(),Yo$1(43,`mat-button-toggle`,17),hI(44),ic()(),TE(45,wr,2,1,`span`,18),ic(),Yo$1(46,`mat-radio-group`,19),Xf(`change`,function(o){return n.chooseSound(o.value)}),ME(47,Sr,6,3,`div`,20,NE),ic()()()(),Yo$1(49,`mat-dialog-actions`,21)(50,`button`,22),Xf(`click`,function(){return n.logout()}),Yo$1(51,`mat-icon`),hI(52,`logout`),ic(),hI(53),ic(),Yo$1(54,`button`,23),hI(55),ic()()),e&2&&(Dy(),hp(n.i18n.t(`settings.title`)),Dy(5),hp(n.i18n.t(`settings.site`)),Dy(3),qf(`value`,n.storeService.currentStore()?._id),Dy(),SE(n.storeService.stores()),Dy(4),hp(n.i18n.t(`settings.language`)),Dy(3),qf(`value`,n.i18n.language()),Dy(),SE(n.languages),Dy(4),hp(n.i18n.t(`settings.display`)),Dy(),qf(`value`,n.theme.mode()),Dy(4),uc(` `,n.i18n.t(`settings.light`)),Dy(4),uc(` `,n.i18n.t(`settings.dark`)),Dy(3),hp(n.i18n.t(`settings.sound`)),Dy(),qf(`checked`,n.sound.enabled()),Dy(),uc(` `,n.i18n.t(`settings.soundEnabled`),` `),Dy(3),hp(n.i18n.t(`settings.repeat`)),Dy(),qf(`value`,n.sound.repeat())(`disabled`,!n.sound.enabled()),Dy(2),hp(n.i18n.t(`settings.repeatOnce`)),Dy(2),hp(n.i18n.t(`settings.repeatUntilStarted`)),Dy(),_E(n.sound.repeat()===`repeat`?45:-1),Dy(),qf(`value`,n.sound.sound())(`disabled`,!n.sound.enabled()),Dy(),SE(n.sounds),Dy(6),uc(` `,n.i18n.t(`settings.logout`),` `),Dy(2),hp(n.i18n.t(`settings.done`)))},dependencies:[ua,ra,la,ca,da,ol,il,Do$1,oo,ei,un,Ro$1,Rn$1,gt$1,Oi,El,kl,so,ti,gn,Zt,Jt,Me,lo,ni],encapsulation:2})};var Cr=(i,t)=>t._id;var mo=(i,t)=>t.step.key;var Ir=(i,t)=>t.orderId;function Nr(i,t){if(i&1){let e=LE();Yo$1(0,`button`,31),Xf(`click`,function(){let a=Pl(e).$implicit,o=jE();return Fl(o.typeFilter.set(a))}),Yo$1(1,`mat-icon`,32),hI(2),ic(),hI(3),Yo$1(4,`span`,33),hI(5),ic()()}if(i&2){let e=t.$implicit,n=jE();cp(`kds-chip--active`,n.typeFilter()===e),Gf(`aria-pressed`,n.typeFilter()===e),Dy(2),hp(n.typeIcons[e]),Dy(),uc(` `,n.i18n.t(`type.`+e),` `),Dy(2),hp(n.typeCounts()[e])}}function Tr(i,t){if(i&1&&(Yo$1(0,`mat-option`,19),hI(1),ic()),i&2){let e=t.$implicit;qf(`value`,e._id),Dy(),hp(e.name)}}function Or(i,t){if(i&1&&(Yo$1(0,`div`,20),hI(1),ic()),i&2){let e=jE();Dy(),uc(` `,e.errorMessage(),` `)}}function Mr(i,t){if(i&1&&(Yo$1(0,`p`,22),hI(1),ic()),i&2){let e=jE();Dy(),hp(e.i18n.t(`board.loading`))}}function Dr(i,t){i&1&&(Yo$1(0,`mat-icon`,11),hI(1,`notifications_active`),ic())}function Er(i,t){if(i&1){let e=LE();Yo$1(0,`app-order-card`,40),Xf(`selectRequest`,function(){let a=Pl(e).$implicit,o=jE(3);return Fl(o.selectedOrderId.set(a.orderId))})(`advance`,function(){let a=Pl(e).$implicit,o=jE(3);return Fl(o.advance(a))}),ic()}if(i&2){let e=t.$implicit,n=jE().$implicit,a=jE(2);ap(`view-transition-name`,`kds-o-`+e.orderId),qf(`order`,e)(`tone`,n.tone)(`now`,a.now())(`selected`,a.selectedOrderId()===e.orderId)(`fresh`,a.freshIds().has(e.orderId))(`showStations`,a.station()?.id===a.ALL_STATIONS_ID)}}function Ar(i,t){if(i&1&&(Yo$1(0,`p`,39),hI(1),ic()),i&2){let e=jE(3);Dy(),hp(e.i18n.t(`board.noTickets`))}}function Rr(i,t){if(i&1&&(Yo$1(0,`section`,35)(1,`h2`,36)(2,`span`),hI(3),ic(),TE(4,Dr,2,0,`mat-icon`,11),ic(),Yo$1(5,`div`,37),ME(6,Er,1,8,`app-order-card`,38,Ir,!1,Ar,2,1,`p`,39),ic()()),i&2){let e=t.$implicit,n=t.$index,a=jE(2);Gf(`aria-labelledby`,`col-`+e.step.key),Dy(),rI(e.tone.header),qf(`id`,`col-`+e.step.key),Dy(2),gp(``,a.i18n.t(`status.`+e.step.key),` (`,e.orders.length,`)`),Dy(),_E(n===0&&a.sound.enabled()?4:-1),Dy(),Gf(`aria-label`,a.i18n.t(`status.`+e.step.key)),Dy(),SE(e.orders)}}function Br(i,t){if(i&1&&(Yo$1(0,`div`,34),ME(1,Rr,9,9,`section`,35,mo),ic()),i&2){let e=jE();ap(`min-width`,e.columns().length*300,`px`),Dy(),SE(e.columns())}}function Fr(i,t){if(i&1&&(Yo$1(0,`kbd`,42),hI(1),ic()),i&2){let e=jE().$implicit;Dy(),hp(e.step.shortcut)}}function Lr(i,t){if(i&1){let e=LE();Yo$1(0,`button`,41),Xf(`click`,function(){let a=Pl(e).$implicit,o=jE();return Fl(o.moveSelectedTo(a.step))}),hI(1),TE(2,Fr,2,1,`kbd`,42),ic()}if(i&2){let e=t.$implicit,n=jE();ap(`--%NS%mat-button-filled-container-color`,e.tone.solid)(`--%NS%mat-button-filled-label-text-color`,`#fff`),qf(`disabled`,!n.canMoveTo(e.step)),Gf(`aria-keyshortcuts`,e.step.shortcut||null),Dy(),uc(` `,n.i18n.t(`action.`+e.step.key),` `),Dy(),_E(e.step.shortcut?2:-1)}}var Pr=1e4;var zr=1e4;var co=class i{storeService=D(Bo$1);stationService=D(p);deviceTokenService=D(m);authService=D(jo$1);kitchenDisplayService=D(en);kitchenSocketService=D(cn);dialog=D(vt);announcer=D(_o$1);router=D(At);destroyRef=D(ie);appRef=D(li);i18n=D(Re);sound=D(ht);ALL_STATIONS_ID=`all`;typeFilters=[`all`,`dine_in`,`takeaway`,`delivery`];typeIcons={all:`apps`,dine_in:`restaurant`,takeaway:`shopping_bag`,delivery:`delivery_dining`};store=this.storeService.currentStore;station=this.stationService.currentStation;connected=this.kitchenSocketService.connected;stations=bo$1([]);steps=bo$1([]);orders=bo$1([]);typeFilter=bo$1(`all`);selectedOrderId=bo$1(null);freshIds=bo$1(new Set);loading=bo$1(!0);errorMessage=bo$1(``);now=bo$1(Date.now());cards=ZL(gt);refresh$=new Z$1;knownIds=null;pendingMoves=new Map;ringingIds=new Set;typeCounts=_I(()=>{let t={all:0,dine_in:0,takeaway:0,delivery:0};for(let e of this.orders())t.all++,t[e.orderType]++;return t});columns=_I(()=>{let t=this.steps().filter(o=>!o.isTerminal),e=t[0]?.key,n=this.typeFilter(),a=this.orders().filter(o=>n===`all`||o.orderType===n);return t.map(o=>{let s=a.filter(r=>o.key===e&&!t.some(u=>u.key===r.stepKey)||r.stepKey===o.key);return s.sort((r,u)=>o.key===e?u.createdAt.localeCompare(r.createdAt):r.stageSince.localeCompare(u.stageSince)),{step:o,tone:Zn(o.key),orders:s}})});actions=_I(()=>this.steps().slice(1).map(t=>({step:t,tone:Zn(t.key)})));selectedOrder=_I(()=>{let t=this.selectedOrderId();return this.columns().flatMap(e=>e.orders).find(e=>e.orderId===t)??null});clock=_I(()=>{let t=new Date(this.now()),e=this.i18n.locale();return{time:new Intl.DateTimeFormat(e,{hour:`2-digit`,minute:`2-digit`}).format(t),date:new Intl.DateTimeFormat(e,{weekday:`short`,day:`numeric`,month:`short`,year:`numeric`}).format(t)}});ngOnInit(){let t=this.store(),e=this.station();if(!t||!e){this.router.navigate(t?[`/select-station`]:[`/select-store`]);return}this.refresh$.pipe(Vc(150),Hc(()=>{let o=this.store();return o?this.kitchenDisplayService.getBoard(o._id,this.station()?.id??null).pipe(Di(s=>(this.errorMessage.set(s?.error?.message||`Could not load orders.`),this.loading.set(!1),Gp(null)))):Gp(null)}),In(this.destroyRef)).subscribe(o=>{o&&(this.steps.set(o.steps),this.applyOrders(o.orders),this.loading.set(!1),this.errorMessage.set(``))}),this.loadStations(),this.refresh$.next(),this.connectSocket();let n=setInterval(()=>this.now.set(Date.now()),1e3);this.destroyRef.onDestroy(()=>clearInterval(n));let a=setInterval(()=>this.ringIfWaiting(),zr);this.destroyRef.onDestroy(()=>clearInterval(a)),this.kitchenSocketService.orderEvents$.pipe(In(this.destroyRef)).subscribe(()=>this.refresh$.next()),this.destroyRef.onDestroy(()=>this.kitchenSocketService.disconnect())}loadStations(){let t=this.store();t&&this.stationService.getStations(t._id).subscribe({next:e=>this.stations.set(e.filter(n=>n.active!==!1))})}async connectSocket(){let t=this.store(),e=this.station();if(!(!t||!e))try{let n=await this.deviceTokenService.getOrMintToken(t._id);this.kitchenSocketService.connect(t._id,e.id,n)}catch{this.errorMessage.set(`Could not establish a live connection — orders will only refresh on reload.`)}}applyOrders(t){let e=t;for(let[s,r]of this.pendingMoves)e=r?e.map(u=>u.orderId===s?r:u):e.filter(u=>u.orderId!==s);let n=this.steps().find(s=>!s.isTerminal)?.key,a=!this.knownIds;if(!a){let s=e.filter(r=>!this.knownIds.has(r.orderId)&&(r.stepKey??n)===n);s.length&&(this.sound.playNewOrder(),s.forEach(r=>this.ringingIds.add(r.orderId)),this.announcer.announce(s.map(r=>this.i18n.t(`announce.newOrder`,{ref:`#${r.reference??``}`})).join(`. `)),this.markFresh(s.map(r=>r.orderId)))}this.knownIds=new Set(e.map(s=>s.orderId));let o=s=>s.map(r=>`${r.orderId}:${r.stepKey}`).sort().join(`|`);a||o(e)===o(this.orders())?this.orders.set(e):this.animateBoard(()=>this.orders.set(e))}ringIfWaiting(){if(this.sound.repeat()!==`repeat`||!this.ringingIds.size)return;let t=this.columns()[0]?.step.key;for(let e of[...this.ringingIds]){let n=this.orders().find(a=>a.orderId===e);(!n||n.stepKey!==t)&&this.ringingIds.delete(e)}this.ringingIds.size&&this.sound.playNewOrder()}markFresh(t){this.freshIds.update(e=>new Set([...e,...t])),setTimeout(()=>{this.freshIds.update(e=>new Set([...e].filter(n=>!t.includes(n))))},Pr)}advance(t){t.nextAction&&this.move(t,{toStep:t.nextAction.key})}moveSelectedTo(t){let e=this.selectedOrder()??this.defaultCandidateFor(t);if(!e){this.announcer.announce(this.i18n.t(`announce.nothingSelected`));return}e.stepKey!==t.key&&this.move(e,{toStep:t.key})}canRecall=_I(()=>{let t=this.selectedOrder();return!!t&&t.stepKey!==this.columns()[0]?.step.key});recallSelected(){let t=this.selectedOrder();if(!t||!this.canRecall()){this.announcer.announce(this.i18n.t(`announce.nothingSelected`));return}this.move(t,{direction:`back`})}canMoveTo(t){let e=this.selectedOrder();return e?e.stepKey!==t.key:!!this.defaultCandidateFor(t)}defaultCandidateFor(t){let e=this.columns(),n=this.steps().findIndex(o=>o.key===t.key),a=e.find(o=>o.step.key===this.steps()[n-1]?.key);return a?.orders.length?a.step.key===e[0]?.step.key?a.orders[a.orders.length-1]:a.orders[0]:null}move(t,e){if(this.pendingMoves.has(t.orderId))return;let n=this.steps(),a=n.findIndex(v=>v.key===t.stepKey),o=e.toStep?n.find(v=>v.key===e.toStep):n[e.direction===`back`?a-1:a+1];if(!o||o.key===t.stepKey)return;let s=this.focusIsOnBoard(),r=this.neighbourInColumn(t),u=o.isTerminal?null:this.withStep(t,o);this.pendingMoves.set(t.orderId,u),this.ringingIds.delete(t.orderId),this.animateBoard(()=>{this.orders.update(v=>u?v.map(g=>g.orderId===t.orderId?u:g):v.filter(g=>g.orderId!==t.orderId)),this.selectedOrderId()===t.orderId&&this.selectedOrderId.set(r?.orderId??null)}),s&&r&&this.selectedOrderId()===r.orderId&&this.focusOrder(r.orderId),this.announcer.announce(this.i18n.t(`announce.moved`,{ref:`#${t.reference??``}`,status:this.i18n.t(`status.`+o.key)})),this.kitchenDisplayService.advanceOrder(t.orderId,this.station()?.id??null,e).subscribe({next:()=>this.pendingMoves.delete(t.orderId),error:v=>{this.pendingMoves.delete(t.orderId),this.animateBoard(()=>this.orders.update(g=>[...g.filter(w=>w.orderId!==t.orderId),t])),this.errorMessage.set(v?.error?.message||`Could not update that order — try again.`)}})}withStep(t,e){let n=this.steps(),a=n.findIndex(s=>s.key===e.key),o=n[a+1];return G(W({},t),{stepKey:e.key,stageSince:new Date().toISOString(),stage:a===0?`new`:`in_progress`,currentStepLabel:e.label,nextAction:o?{key:o.key,label:o.label,isFinal:o.isTerminal,shortcut:o.shortcut}:null,items:t.items.map(s=>G(W({},s),{kitchenStatus:e.key,isDone:!1}))})}animateBoard(t){let e=document.startViewTransition;if(!e||matchMedia(`(prefers-reduced-motion: reduce)`).matches){t();return}e.call(document,()=>{t(),this.appRef.tick()})}neighbourInColumn(t){let e=this.columns().find(a=>a.orders.some(o=>o.orderId===t.orderId));if(!e)return null;let n=e.orders.findIndex(a=>a.orderId===t.orderId);return e.orders[n+1]??e.orders[n-1]??null}onKeydown(t){if(this.dialog.openDialogs.length)return;let e=t.target;if(e?.closest(`input, textarea, [role="combobox"], [role="listbox"], mat-option`))return;let n=/^F([1-9]|1[0-2])$/.test(t.key)?this.steps().find((o,s)=>s>0&&o.shortcut===t.key):void 0;if(n){t.preventDefault(),this.moveSelectedTo(n);return}if(t.key===`Backspace`){t.preventDefault(),this.recallSelected();return}if(e?.closest(`app-order-card`))switch(t.key){case`Enter`:case` `:{t.preventDefault();let o=this.selectedOrder();o&&this.advance(o);break}case`ArrowUp`:case`ArrowDown`:case`Home`:case`End`:this.moveFocusVertically(t);break;case`ArrowLeft`:case`ArrowRight`:t.preventDefault(),this.moveFocusAcross(t.key===`ArrowRight`?1:-1)}}moveFocusVertically(t){let e=this.columns().find(o=>o.orders.some(s=>s.orderId===this.selectedOrderId()));if(!e)return;let n=e.orders.map(o=>this.cards().find(s=>s.order().orderId===o.orderId)).filter(o=>!!o),a=new Ke(n).withVerticalOrientation().withWrap().withHomeAndEnd();a.updateActiveItem(n.findIndex(o=>o.order().orderId===this.selectedOrderId())),a.onKeydown(t),a.destroy()}moveFocusAcross(t){let e=this.columns(),n=e.findIndex(o=>o.orders.some(s=>s.orderId===this.selectedOrderId()));if(n<0)return;let a=e[n].orders.findIndex(o=>o.orderId===this.selectedOrderId());for(let o=n+t;o>=0&&o<e.length;o+=t){let s=e[o].orders;if(s.length){this.focusOrder(s[Math.min(a,s.length-1)].orderId);return}}}focusOrder(t){setTimeout(()=>this.cards().find(e=>e.order().orderId===t)?.focus())}focusIsOnBoard(){let t=document.activeElement;return!t||t===document.body||!!t.closest(`app-order-card, .kds-actionbar`)}switchStation(t){if(t===this.station()?.id)return;let e=t===`all`?`All stations`:this.stations().find(n=>n._id===t)?.name||``;this.stationService.selectStation({id:t,name:e}),this.resetBoard(),this.connectSocket()}openSettings(){this.dialog.open(fn,{width:`520px`,maxWidth:`calc(100vw - 32px)`,autoFocus:`first-tabbable`,restoreFocus:!0}).afterClosed().subscribe(t=>{if(!t)return;if(`logout`in t){this.logout();return}let e=this.storeService.stores().find(n=>n._id===t.switchToStoreId);e&&(this.kitchenSocketService.disconnect(),this.storeService.selectStore(e),this.stationService.selectStation({id:`all`,name:`All stations`}),this.stations.set([]),this.loadStations(),this.resetBoard(),this.connectSocket())})}resetBoard(){this.knownIds=null,this.pendingMoves.clear(),this.ringingIds.clear(),this.selectedOrderId.set(null),this.freshIds.set(new Set),this.loading.set(!0),this.refresh$.next()}logout(){this.kitchenSocketService.disconnect(),this.authService.logout(),this.storeService.clear(),this.stationService.clear(),this.router.navigate([`/login`])}static ɵfac=function(e){return new(e||i)};static ɵcmp=eE({type:i,selectors:[[`app-board`]],viewQuery:function(e,n){e&1&&op(n.cards,gt,5),e&2&&GE()},hostBindings:function(e,n){e&1&&Xf(`keydown`,function(o){return n.onKeydown(o)},Fm)},decls:57,vars:25,consts:[[1,`flex`,`h-screen`,`w-full`,`flex-col`,`bg-slate-100`,`text-slate-900`,`dark:bg-slate-950`,`dark:text-white`],[1,`flex`,`flex-wrap`,`items-center`,`gap-x-4`,`gap-y-3`,`border-b`,`border-slate-200`,`bg-white`,`px-4`,`py-3`,`dark:border-slate-800`,`dark:bg-slate-900`],[1,`flex`,`items-center`,`gap-3`],[`aria-hidden`,`true`,1,`grid`,`h-10`,`w-10`,`place-items-center`,`rounded-xl`,`bg-orange-500`,`text-white`],[1,`leading-tight`],[1,`text-lg`,`font-bold`],[1,`text-[11px]`,`font-medium`,`uppercase`,`tracking-wider`,`text-slate-500`,`dark:text-slate-400`],[`role`,`group`,1,`flex`,`flex-wrap`,`gap-2`],[`type`,`button`,1,`kds-chip`,3,`kds-chip--active`],[1,`ml-auto`,`flex`,`items-center`,`gap-4`],[`role`,`status`,1,`flex`,`items-center`,3,`matTooltip`],[`aria-hidden`,`true`],[1,`sr-only`],[`aria-hidden`,`true`,1,`text-right`,`leading-tight`],[1,`text-xl`,`font-bold`,`tabular-nums`],[1,`text-[11px]`,`text-slate-500`,`dark:text-slate-400`],[`appearance`,`outline`,`subscriptSizing`,`dynamic`,1,`kds-compact-field`,`w-52`],[`matPrefix`,``,`aria-hidden`,`true`,1,`mx-2`],[3,`selectionChange`,`value`,`panelWidth`],[3,`value`],[`role`,`alert`,1,`mx-4`,`mt-3`,`rounded-lg`,`border`,`border-red-200`,`bg-red-50`,`px-4`,`py-2`,`text-sm`,`text-red-700`,`dark:border-red-800`,`dark:bg-red-900/30`,`dark:text-red-300`],[1,`min-h-0`,`flex-1`,`overflow-x-auto`,`p-4`],[1,`py-24`,`text-center`,`text-slate-500`],[1,`flex`,`h-full`,`gap-4`,3,`min-width`],[1,`kds-actionbar`,`flex`,`flex-wrap`,`items-center`,`gap-3`,`border-t`,`border-slate-200`,`bg-white`,`px-4`,`py-3`,`dark:border-slate-800`,`dark:bg-slate-900`],[`matButton`,`filled`,`type`,`button`,1,`!h-12`,`!px-5`,`!text-[15px]`,`!font-semibold`,3,`--%NS%mat-button-filled-container-color`,`--%NS%mat-button-filled-label-text-color`,`disabled`],[`matButton`,`outlined`,`type`,`button`,`aria-keyshortcuts`,`Backspace`,1,`!h-12`,`!px-5`,`!text-[15px]`,`!font-semibold`,3,`click`,`disabled`],[1,`ml-3`,`rounded`,`bg-slate-500/15`,`px-1.5`,`py-0.5`,`text-xs`],[1,`hidden`,`text-xs`,`text-slate-500`,`xl:block`,`dark:text-slate-400`],[1,`ml-auto`,`flex`,`items-center`,`gap-2`],[`matButton`,``,`type`,`button`,1,`!h-12`,3,`click`],[`type`,`button`,1,`kds-chip`,3,`click`],[`aria-hidden`,`true`,1,`!h-5`,`!w-5`,`!text-xl`],[1,`kds-chip__count`],[1,`flex`,`h-full`,`gap-4`],[1,`flex`,`min-w-0`,`flex-1`,`flex-col`,`overflow-hidden`,`rounded-xl`,`bg-slate-200/60`,`dark:bg-slate-900/60`],[1,`flex`,`items-center`,`justify-between`,`px-4`,`py-2.5`,`text-lg`,`font-bold`,`uppercase`,`tracking-wide`,3,`id`],[`role`,`list`,1,`flex`,`min-h-0`,`flex-1`,`flex-col`,`gap-3`,`overflow-y-auto`,`p-3`],[3,`order`,`tone`,`now`,`selected`,`fresh`,`view-transition-name`,`showStations`],[1,`py-10`,`text-center`,`text-sm`,`text-slate-500`,`dark:text-slate-400`],[3,`selectRequest`,`advance`,`order`,`tone`,`now`,`selected`,`fresh`,`showStations`],[`matButton`,`filled`,`type`,`button`,1,`!h-12`,`!px-5`,`!text-[15px]`,`!font-semibold`,3,`click`,`disabled`],[1,`ml-3`,`rounded`,`bg-white/20`,`px-1.5`,`py-0.5`,`text-xs`]],template:function(e,n){e&1&&(Yo$1(0,`div`,0)(1,`header`,1)(2,`div`,2)(3,`span`,3)(4,`mat-icon`),hI(5,`soup_kitchen`),ic()(),Yo$1(6,`div`,4)(7,`p`,5),hI(8),ic(),Yo$1(9,`p`,6),hI(10),ic()()(),Yo$1(11,`div`,7),ME(12,Nr,6,6,`button`,8,NE),ic(),Yo$1(14,`div`,9)(15,`span`,10)(16,`mat-icon`,11),hI(17),ic(),Yo$1(18,`span`,12),hI(19),ic()(),Yo$1(20,`div`,13)(21,`p`,14),hI(22),ic(),Yo$1(23,`p`,15),hI(24),ic()(),Yo$1(25,`mat-form-field`,16)(26,`mat-icon`,17),hI(27,`desktop_windows`),ic(),Yo$1(28,`mat-select`,18),Xf(`selectionChange`,function(o){return n.switchStation(o.value)}),Yo$1(29,`mat-option`,19),hI(30),ic(),ME(31,Tr,2,2,`mat-option`,19,Cr),ic()()()(),TE(33,Or,2,1,`div`,20),Yo$1(34,`main`,21),TE(35,Mr,2,1,`p`,22)(36,Br,3,2,`div`,23),ic(),Yo$1(37,`footer`,24),ME(38,Lr,3,8,`button`,25,mo),Yo$1(40,`button`,26),Xf(`click`,function(){return n.recallSelected()}),Yo$1(41,`mat-icon`),hI(42,`undo`),ic(),hI(43),Yo$1(44,`kbd`,27),hI(45,`⌫`),ic()(),Yo$1(46,`p`,28),hI(47),ic(),Yo$1(48,`div`,29)(49,`button`,30),Xf(`click`,function(){return n.sound.setEnabled(!n.sound.enabled())}),Yo$1(50,`mat-icon`),hI(51),ic(),hI(52),ic(),Yo$1(53,`button`,30),Xf(`click`,function(){return n.openSettings()}),Yo$1(54,`mat-icon`),hI(55,`settings`),ic(),hI(56),ic()()()()),e&2&&(Dy(8),hp(n.store()?.name),Dy(2),hp(n.i18n.t(`app.subtitle`)),Dy(),Gf(`aria-label`,n.i18n.t(`board.filterByType`)),Dy(),SE(n.typeFilters),Dy(3),rI(n.connected()?`text-emerald-600 dark:text-emerald-400`:`text-red-600 dark:text-red-400`),qf(`matTooltip`,n.connected()?n.i18n.t(`board.live`):n.i18n.t(`board.reconnecting`)),Dy(2),hp(n.connected()?`wifi`:`wifi_off`),Dy(2),hp(n.connected()?n.i18n.t(`board.live`):n.i18n.t(`board.reconnecting`)),Dy(3),hp(n.clock().time),Dy(2),hp(n.clock().date),Dy(4),qf(`value`,n.station()?.id)(`panelWidth`,null),Gf(`aria-label`,n.i18n.t(`board.station`)),Dy(),qf(`value`,n.ALL_STATIONS_ID),Dy(),hp(n.i18n.t(`board.allStations`)),Dy(),SE(n.stations()),Dy(2),_E(n.errorMessage()?33:-1),Dy(2),_E(n.loading()?35:36),Dy(3),SE(n.actions()),Dy(2),qf(`disabled`,!n.canRecall()),Dy(3),uc(` `,n.i18n.t(`action.recall`),` `),Dy(4),hp(n.i18n.t(`board.keyboardHint`)),Dy(2),Gf(`aria-pressed`,n.sound.enabled()),Dy(2),hp(n.sound.enabled()?`volume_up`:`volume_off`),Dy(),gp(` `,n.i18n.t(`board.sound`),`: `,n.sound.enabled()?n.i18n.t(`board.on`):n.i18n.t(`board.off`),` `),Dy(4),uc(` `,n.i18n.t(`board.settings`),` `))},dependencies:[ol,il,El,kl,Zt,Rn$1,Oi,Jt,Me,_d,aa$1,gt],encapsulation:2})};export{co as BoardComponent};