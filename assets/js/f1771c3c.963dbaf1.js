"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2790],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5360:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(7294),i=r(9960),o=r(3725),a=r(6010),c="cardContainer_woeA",l="cardContainerLink_iOSj",s="cardTitle_pNjP",u="cardDescription_qC_k",p=r(3919),m=r(5999);function d(e){var t=e.href,r=e.children,o=(0,a.Z)("card margin-bottom--lg padding--lg",c,t&&l);return t?n.createElement(i.Z,{href:t,className:o},r):n.createElement("div",{className:o},r)}function f(e){var t=e.href,r=e.icon,i=e.title,o=e.description;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:i},r," ",i),n.createElement("div",{className:(0,a.Z)("text--truncate",u),title:o},o))}function y(e){var t=e.item,r=(0,o.Wl)(t);return n.createElement(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})})}function h(e){var t,r=e.item,i=(0,p.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(f,{href:r.href,icon:i,title:r.label,description:null==a?void 0:a.description})}function g(e){var t=e.item;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(y,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function v(e){var t=e.items;return n.createElement("div",{className:"row"},t.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6"},n.createElement(g,{item:e}))})))}},3884:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=r(5360),c=r(3725),l=["components"],s={sidebar_label:"Deployment"},u="Deployment",p={unversionedId:"tutorials/deploying/README",id:"tutorials/deploying/README",title:"Deployment",description:"Prerequisites",source:"@site/docs/tutorials/06-deploying/README.md",sourceDirName:"tutorials/06-deploying",slug:"/tutorials/deploying/",permalink:"/protostar/docs/tutorials/deploying/",editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/06-deploying/README.md",tags:[],version:"current",frontMatter:{sidebar_label:"Deployment"},sidebar:"tutorials",previous:{title:"Dependencies",permalink:"/protostar/docs/tutorials/dependencies-management"},next:{title:"CLI",permalink:"/protostar/docs/tutorials/deploying/cli"}},m={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Available approaches",id:"available-approaches",level:2}],f={toc:d};function y(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployment"},"Deployment"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cairo-lang.org/docs/hello_starknet/deploying_from_contracts.html?highlight=class%20hash"},"Deploying a contract by another contract"))),(0,o.kt)("h2",{id:"available-approaches"},"Available approaches"),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);