/*! For license information please see d0f59173.f862433f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[390747],{963399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(824246),a=n(511151);const s={id:"v1.18.0",title:"v1.18.0",description:"Backstage Release v1.18.0"},o=void 0,i={id:"releases/v1.18.0",title:"v1.18.0",description:"Backstage Release v1.18.0",source:"@site/../docs/releases/v1.18.0.md",sourceDirName:"releases",slug:"/releases/v1.18.0",permalink:"/docs/releases/v1.18.0",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/releases/v1.18.0.md",tags:[],version:"current",frontMatter:{id:"v1.18.0",title:"v1.18.0",description:"Backstage Release v1.18.0"},sidebar:"releases",previous:{title:"v1.19.0",permalink:"/docs/releases/v1.19.0"},next:{title:"v1.17.0",permalink:"/docs/releases/v1.17.0"}},c={},l=[{value:"Highlights",id:"highlights",level:2},{value:"<strong>BREAKING</strong>: Kubernetes backend auth strategies",id:"breaking-kubernetes-backend-auth-strategies",level:3},{value:"<strong>BREAKING</strong>: Public GitLab User/Group Ingestion",id:"breaking-public-gitlab-usergroup-ingestion",level:3},{value:"New plugin: OpenCost",id:"new-plugin-opencost",level:3},{value:"TypeScript 5.0",id:"typescript-50",level:3},{value:"Backend System: Ready for use!",id:"backend-system-ready-for-use",level:3},{value:"Backend System: Default Exports",id:"backend-system-default-exports",level:3},{value:"<code>yarn fix</code> and <code>&quot;sideEffects&quot;: false</code>",id:"yarn-fix-and-sideeffects-false",level:3},{value:"Auth Backend Improvements",id:"auth-backend-improvements",level:3},{value:"Experimental I18n Support",id:"experimental-i18n-support",level:3},{value:"Experimental Packages for Frontend Declarative Integration",id:"experimental-packages-for-frontend-declarative-integration",level:3},{value:"Improved Auth Session Expiration",id:"improved-auth-session-expiration",level:3},{value:"Scaffolder Template Editor Download",id:"scaffolder-template-editor-download",level:3},{value:"Support for Multiple Azure DevOps Organizations",id:"support-for-multiple-azure-devops-organizations",level:3},{value:"New package: <code>@backstage/plugin-catalog-backend-module-scaffolder-entity-model</code>",id:"new-package-backstageplugin-catalog-backend-module-scaffolder-entity-model",level:3},{value:"Further MySQL compatibility work",id:"further-mysql-compatibility-work",level:3},{value:"Security Fixes",id:"security-fixes",level:2},{value:"Upgrade path",id:"upgrade-path",level:2},{value:"Links and References",id:"links-and-references",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["These are the release notes for the v1.18.0 release of ",(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"A huge thanks to the whole team of maintainers and contributors as well as the amazing Backstage Community for the hard work in getting this release developed and done."}),"\n",(0,r.jsx)(t.h2,{id:"highlights",children:"Highlights"}),"\n",(0,r.jsxs)(t.h3,{id:"breaking-kubernetes-backend-auth-strategies",children:[(0,r.jsx)(t.strong,{children:"BREAKING"}),": Kubernetes backend auth strategies"]}),"\n",(0,r.jsxs)(t.p,{children:["Integrators can now bring their own auth strategies through the use of the ",(0,r.jsx)(t.code,{children:"addAuthStrategy"})," method on ",(0,r.jsx)(t.code,{children:"KubernetesBuilder"}),". As part of this, ",(0,r.jsx)(t.code,{children:"setAuthTranslatorMap"})," has also been removed and the concept moves into the auth strategies instead."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/jamieklassen",children:"@jamieklassen"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/19903",children:"#19903"})]}),"\n",(0,r.jsxs)(t.h3,{id:"breaking-public-gitlab-usergroup-ingestion",children:[(0,r.jsx)(t.strong,{children:"BREAKING"}),": Public GitLab User/Group Ingestion"]}),"\n",(0,r.jsxs)(t.p,{children:["If you ingest users/groups from GitLab using ",(0,r.jsx)(t.code,{children:"GitlabOrgDiscoveryEntityProvider"}),", you now have to scope its work to a certain group. The backend will not start up successfully without that."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-diff",children:"catalog:\n  providers:\n    gitlab:\n      yourProviderId:\n        host: gitlab.com\n        orgEnabled: true\n+       group: org/teams\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/sbarrypoppulo",children:"@sbarrypoppulo"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18889",children:"#18889"})]}),"\n",(0,r.jsx)(t.h3,{id:"new-plugin-opencost",children:"New plugin: OpenCost"}),"\n",(0,r.jsxs)(t.p,{children:["There\u2019s a new ",(0,r.jsx)(t.a,{href:"https://www.opencost.io/",children:"OpenCost"})," plugin that provides a port of the latest OpenCost UI to Backstage. The ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/v1.18.0/plugins/opencost/README.md",children:"plugin's README"})," covers installation and configuration."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/mattray",children:"@mattray"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18383",children:"#18383"})]}),"\n",(0,r.jsx)(t.h3,{id:"typescript-50",children:"TypeScript 5.0"}),"\n",(0,r.jsx)(t.p,{children:"The minimum TypeScript version is now v5.0, please make sure that you upgrade the TypeScript dependency in your own projects accordingly."}),"\n",(0,r.jsx)(t.h3,{id:"backend-system-ready-for-use",children:"Backend System: Ready for use!"}),"\n",(0,r.jsxs)(t.p,{children:["We believe that we have now reached a point where we want to encourage use of the ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/",children:"New Backend System"}),". There are still things to iron out and plugins to be migrated, but we consider it to be ready for production use. Please check out the ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/building-backends/migrating",children:"migration guide for backends"}),", and use the ",(0,r.jsx)(t.code,{children:"legacyPlugin"})," helper to install any plugins that are not ready for use directly with the new system."]}),"\n",(0,r.jsxs)(t.p,{children:["For local development we also encourage you to try out the new ",(0,r.jsx)(t.code,{children:"package start"})," command for backends in the CLI, which you enable by setting ",(0,r.jsx)(t.code,{children:"EXPERIMENTAL_BACKEND_START=1"})," in the environment. This new way of running the backend no longer uses Webpack, in favor of a more plain watch mode with module loaders. It does however still maintain the SQLite database state across restarts without filesystem overhead. If all goes according to plan this will be the new default starting from the next release."]}),"\n",(0,r.jsx)(t.h3,{id:"backend-system-default-exports",children:"Backend System: Default Exports"}),"\n",(0,r.jsxs)(t.p,{children:["Plugins and modules leveraging the ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/backend-system/",children:"New Backend System"})," are now supposed to be ",(0,r.jsx)(t.em,{children:"the default export"})," of their respective packages. This clarifies what the main entrypoint of each package is, facilitates automatic feature discovery, and also lets you easily make dynamic import one-liners in your code. We have made this change to a lot of the packages that had already been migrated to the new backend system. So after upgrading to this version of Backstage, you may find that imports in your backend package no longer match."]}),"\n",(0,r.jsx)(t.p,{children:"For example, if you are currently importing plugins using the following pattern:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { examplePlugin } from '@backstage/plugin-example-backend';\nbackend.add(examplePlugin);\n"})}),"\n",(0,r.jsx)(t.p,{children:"They may now need to be migrated to:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"backend.add(import('@backstage/plugin-example-backend'));\n"})}),"\n",(0,r.jsxs)(t.h3,{id:"yarn-fix-and-sideeffects-false",children:[(0,r.jsx)(t.code,{children:"yarn fix"})," and ",(0,r.jsx)(t.code,{children:'"sideEffects": false'})]}),"\n",(0,r.jsxs)(t.p,{children:["The CLI has received a new ",(0,r.jsx)(t.code,{children:"backstage-cli fix"})," command, typically configured to be run as ",(0,r.jsx)(t.code,{children:"yarn fix"}),". The command will scan through all packages in the project and make sure that they are declared correctly. Initially it will make sure that package exports are declared correctly, replacing the ",(0,r.jsx)(t.code,{children:"backstage-cli migrate package-exports"})," command, as well as making sure that frontend packages set ",(0,r.jsx)(t.code,{children:'"sideEffects": false'}),". The latter fix has been applied to all ",(0,r.jsx)(t.code,{children:"@backstage/*"})," packages as well, which allows for more optimized frontend builds."]}),"\n",(0,r.jsx)(t.h3,{id:"auth-backend-improvements",children:"Auth Backend Improvements"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})," now has support for the new backend system, as well as installing auth providers via modules. As part of this the auth backend has received a substantial redesign, with all of the APIs needed to build your own providers now exported from ",(0,r.jsx)(t.code,{children:"@backstage/plugin-auth-node"}),". It is now also possible to configure fixed sign-in resolvers via static configuration for a limited number of providers."]}),"\n",(0,r.jsxs)(t.p,{children:["You can read more about these changes in the ",(0,r.jsxs)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/auth-node/CHANGELOG.md#030",children:[(0,r.jsx)(t.code,{children:"@backstage/plugin-auth-node"})," changelog"]}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"experimental-i18n-support",children:"Experimental I18n Support"}),"\n",(0,r.jsxs)(t.p,{children:["A new set of experimental APIs have been added to the frontend system to support internationalization. This allows for both translations to other languages, as well as overriding default messages. Partial support has so far been added to the ",(0,r.jsx)(t.code,{children:"@backstage/plugin-user-settings"})," and ",(0,r.jsx)(t.code,{children:"@backstage/plugin-adr"})," plugins. See ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/plugins/internationalization",children:"the docs"})," for more details."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/mario-mui",children:"@mario-mui"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/17436",children:"#17436"})]}),"\n",(0,r.jsx)(t.h3,{id:"experimental-packages-for-frontend-declarative-integration",children:"Experimental Packages for Frontend Declarative Integration"}),"\n",(0,r.jsxs)(t.p,{children:["Two new packages have been added to support the work towards frontend declarative integration: ",(0,r.jsx)(t.code,{children:"@backstage/frontend-plugin-api"})," and ",(0,r.jsx)(t.code,{children:"@backstage/frontend-app-api"}),". These packages are still highly experimental and should not be used."]}),"\n",(0,r.jsx)(t.h3,{id:"improved-auth-session-expiration",children:"Improved Auth Session Expiration"}),"\n",(0,r.jsx)(t.p,{children:"The session expiration check has been improved for all auth providers. The expiration of both the Backstage identity token as well as provider specific tokens will be considered when deciding whether the session has expired."}),"\n",(0,r.jsx)(t.h3,{id:"scaffolder-template-editor-download",children:"Scaffolder Template Editor Download"}),"\n",(0,r.jsx)(t.p,{children:"It is now possible to download the results of a dry-run as a zip archive from the template editor dry-run results view."}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/fyyyyy",children:"@fyyyyy"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/19388",children:"#19388"})]}),"\n",(0,r.jsx)(t.h3,{id:"support-for-multiple-azure-devops-organizations",children:"Support for Multiple Azure DevOps Organizations"}),"\n",(0,r.jsxs)(t.p,{children:["The integration for Azure DevOps now allows for configuration of separate credentials for different organizations. See the ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/integrations/azure/locations/",children:"documentation"})," for more information."]}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/sanderaernouts",children:"@sanderaernouts"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18213",children:"#18213"})]}),"\n",(0,r.jsxs)(t.h3,{id:"new-package-backstageplugin-catalog-backend-module-scaffolder-entity-model",children:["New package: ",(0,r.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-scaffolder-entity-model"})]}),"\n",(0,r.jsxs)(t.p,{children:["The Scaffolder\u2019s integrations into the catalog have a new dedicated home. The ",(0,r.jsx)(t.code,{children:"ScaffolderEntitiesProcessor"})," and its corresponding New Backend System ",(0,r.jsx)(t.code,{children:"catalogModuleScaffolderEntityModel"})," now should be imported from here, since they have been deprecated in the Scaffolder backend plugin package."]}),"\n",(0,r.jsx)(t.h3,{id:"further-mysql-compatibility-work",children:"Further MySQL compatibility work"}),"\n",(0,r.jsx)(t.p,{children:"Great efforts have been made by VMware to move the needle in terms of better MySQL support across the core and plugins. Check out the PR for details!"}),"\n",(0,r.jsxs)(t.p,{children:["Contributed by ",(0,r.jsx)(t.a,{href:"https://github.com/PeteLevineA",children:"@PeteLevineA"})," in ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/pull/18921",children:"#18921"})]}),"\n",(0,r.jsx)(t.h2,{id:"security-fixes",children:"Security Fixes"}),"\n",(0,r.jsx)(t.p,{children:"This release does not contain any security fixes."}),"\n",(0,r.jsx)(t.h2,{id:"upgrade-path",children:"Upgrade path"}),"\n",(0,r.jsxs)(t.p,{children:["We recommend that you keep your Backstage project up to date with this latest release. For more guidance on how to upgrade, check out the documentation for ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/keeping-backstage-updated",children:"keeping Backstage updated"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"links-and-references",children:"Links and References"}),"\n",(0,r.jsx)(t.p,{children:"Below you can find a list of links and references to help you learn about and start using this new release."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://backstage.io/",children:"Backstage official website"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/",children:"documentation"}),", and ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/",children:"getting started guide"})]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"GitHub repository"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage's ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/versioning-policy",children:"versioning and support policy"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Community Discord"})," for discussions and support"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/docs/releases/v1.18.0-changelog.md",children:"Changelog"})}),"\n",(0,r.jsxs)(t.li,{children:["Backstage ",(0,r.jsx)(t.a,{href:"https://backstage.io/demos",children:"Demos"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/blog",children:"Blog"}),", ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/overview/roadmap",children:"Roadmap"})," and ",(0,r.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugins"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Sign up for our ",(0,r.jsx)(t.a,{href:"https://info.backstage.spotify.com/newsletter_subscribe",children:"newsletter"})," if you want to be informed about what is happening in the world of Backstage."]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},371426:(e,t,n)=>{var r=n(827378),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,s={},l=null,d=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:d,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function y(){}function k(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var x=k.prototype=new y;x.constructor=k,g(x,b.prototype),x.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,w={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var a,s={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)j.call(t,a)&&!S.hasOwnProperty(a)&&(s[a]=t[a]);var c=arguments.length-2;if(1===c)s.children=r;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];s.children=l}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===s[a]&&(s[a]=c[a]);return{$$typeof:n,type:e,key:o,ref:i,props:s,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,a,s,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return o=o(c=e),e=""===s?"."+R(c,0):s,v(o)?(a="",null!=e&&(a=e.replace(C,"$&/")+"/"),T(o,t,a,"",(function(e){return e}))):null!=o&&(E(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+e)),t.push(o)),1;if(c=0,s=""===s?".":s+":",v(e))for(var l=0;l<e.length;l++){var d=s+R(i=e[l],l);c+=T(i,t,a,d,o)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(i=e.next()).done;)c+=T(i=i.value,t,a,d=s+R(i,l++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function I(e,t,n){if(null==e)return e;var r=[],a=0;return T(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},B={transition:null},O={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:B,ReactCurrentOwner:w};t.Children={map:I,forEach:function(e,t,n){I(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return I(e,(function(){t++})),t},toArray:function(e){return I(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=a,t.Profiler=o,t.PureComponent=k,t.StrictMode=s,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),s=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=w.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!S.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];a.children=c}return{$$typeof:n,type:e.type,key:s,ref:o,props:a,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=B.transition;B.transition={};try{e()}finally{B.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return A.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(667294);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);