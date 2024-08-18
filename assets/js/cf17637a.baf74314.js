/*! For license information please see cf17637a.baf74314.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[352561],{297197:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>u,metadata:()=>s,toc:()=>c});var r=t(824246),o=t(511151);const u={id:"frontend-plugin-api.resolvedextensioninput",title:"ResolvedExtensionInput",description:"API reference for ResolvedExtensionInput"},i=void 0,s={id:"reference/frontend-plugin-api.resolvedextensioninput",title:"ResolvedExtensionInput",description:"API reference for ResolvedExtensionInput",source:"@site/../docs/reference/frontend-plugin-api.resolvedextensioninput.md",sourceDirName:"reference",slug:"/reference/frontend-plugin-api.resolvedextensioninput",permalink:"/docs/reference/frontend-plugin-api.resolvedextensioninput",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/frontend-plugin-api.resolvedextensioninput.md",tags:[],version:"current",frontMatter:{id:"frontend-plugin-api.resolvedextensioninput",title:"ResolvedExtensionInput",description:"API reference for ResolvedExtensionInput"}},a={},c=[];function f(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api",children:(0,r.jsx)(n.code,{children:"@backstage/frontend-plugin-api"})})," > ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.resolvedextensioninput",children:(0,r.jsx)(n.code,{children:"ResolvedExtensionInput"})})]}),"\n",(0,r.jsx)(n.p,{children:"Convert a single extension input into a matching resolved input."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"export type ResolvedExtensionInput<TExtensionInput extends ExtensionInput<any, any>> = TExtensionInput['extensionData'] extends Array<AnyExtensionDataRef> ? {\n    node: AppNode;\n} & ExtensionDataContainer<TExtensionInput['extensionData'][number]> : TExtensionInput['extensionData'] extends AnyExtensionDataMap ? {\n    node: AppNode;\n    output: ExtensionDataValues<TExtensionInput['extensionData']>;\n} : never;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"References:"})," ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensioninput",children:"ExtensionInput"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyextensiondataref",children:"AnyExtensionDataRef"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.appnode",children:"AppNode"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondatacontainer",children:"ExtensionDataContainer"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.anyextensiondatamap",children:"AnyExtensionDataMap"}),", ",(0,r.jsx)(n.a,{href:"/docs/reference/frontend-plugin-api.extensiondatavalues",children:"ExtensionDataValues"})]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},371426:(e,n,t)=>{var r=t(827378),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,u={},c=null,f=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(f=n.ref),n)i.call(n,r)&&!a.hasOwnProperty(r)&&(u[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===u[r]&&(u[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:f,props:u,_owner:s.current}}n.Fragment=u,n.jsx=c,n.jsxs=c},541535:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,x={};function v(e,n,t){this.props=e,this.context=n,this.refs=x,this.updater=t||y}function m(){}function _(e,n,t){this.props=e,this.context=n,this.refs=x,this.updater=t||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=v.prototype;var b=_.prototype=new m;b.constructor=_,h(b,v.prototype),b.isPureReactComponent=!0;var E=Array.isArray,g=Object.prototype.hasOwnProperty,j={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function R(e,n,r){var o,u={},i=null,s=null;if(null!=n)for(o in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(i=""+n.key),n)g.call(n,o)&&!S.hasOwnProperty(o)&&(u[o]=n[o]);var a=arguments.length-2;if(1===a)u.children=r;else if(1<a){for(var c=Array(a),f=0;f<a;f++)c[f]=arguments[f+2];u.children=c}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:t,type:e,key:i,ref:s,props:u,_owner:j.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var I=/\/+/g;function w(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,o,u,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case t:case r:a=!0}}if(a)return i=i(a=e),e=""===u?"."+w(a,0):u,E(i)?(o="",null!=e&&(o=e.replace(I,"$&/")+"/"),C(i,n,o,"",(function(e){return e}))):null!=i&&(k(i)&&(i=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(I,"$&/")+"/")+e)),n.push(i)),1;if(a=0,u=""===u?".":u+":",E(e))for(var c=0;c<e.length;c++){var f=u+w(s=e[c],c);a+=C(s,n,o,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),c=0;!(s=e.next()).done;)a+=C(s=s.value,n,o,f=u+w(s,c++),i);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,n,t){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function D(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},P={transition:null},A={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:P,ReactCurrentOwner:j};n.Children={map:$,forEach:function(e,n,t){$(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=v,n.Fragment=o,n.Profiler=i,n.PureComponent=_,n.StrictMode=u,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),u=e.key,i=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,s=j.current),void 0!==n.key&&(u=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in n)g.call(n,c)&&!S.hasOwnProperty(c)&&(o[c]=void 0===n[c]&&void 0!==a?a[c]:n[c])}var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){a=Array(c);for(var f=0;f<c;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:t,type:e.type,key:u,ref:i,props:o,_owner:s}},n.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=R,n.createFactory=function(e){var n=R.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=k,n.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:D}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=P.transition;P.transition={};try{e()}finally{P.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,t){return O.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,t){return O.current.useReducer(e,n,t)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return O.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return O.current.useTransition()},n.version="18.2.0"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(667294);const o={},u=r.createContext(o);function i(e){const n=r.useContext(u);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(u.Provider,{value:n},e.children)}}}]);