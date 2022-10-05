"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8189],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:e},p),{},{components:n})):r.createElement(f,i({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7022:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_label:"Compilation"},c="Project compilation",s={unversionedId:"tutorials/compiling",id:"tutorials/compiling",title:"Project compilation",description:"In order to compile your project:",source:"@site/docs/tutorials/04-compiling.md",sourceDirName:"tutorials",slug:"/tutorials/compiling",permalink:"/protostar/docs/tutorials/compiling",editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/04-compiling.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Compilation"},sidebar:"tutorials",previous:{title:"Project initialization",permalink:"/protostar/docs/tutorials/project-initialization"},next:{title:"Dependencies",permalink:"/protostar/docs/tutorials/dependencies-management"}},p={},u=[{value:"Entrypoint",id:"entrypoint",level:3},{value:"Contract name",id:"contract-name",level:3},{value:"Output directory",id:"output-directory",level:3},{value:"Cairo-lang version",id:"cairo-lang-version",level:3},{value:"Additional source directories",id:"additional-source-directories",level:3}],m={toc:u};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"project-compilation"},"Project compilation"),(0,a.kt)("p",null,"In order to compile your project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Specify contracts and their files in ",(0,a.kt)("inlineCode",{parentName:"li"},"protostar.toml"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"protostar build"),".")),(0,a.kt)("h1",{id:"specifying-contracts-and-their-files"},"Specifying contracts and their files"),(0,a.kt)("p",null,"Protostar needs to know how to generate contracts from Cairo files. Each Cairo file that contains an ",(0,a.kt)("a",{parentName:"p",href:"#entrypoint"},"entrypoint")," should be included in the ",(0,a.kt)("inlineCode",{parentName:"p"},'"protostar.contracts"')," section of the configuration file."),(0,a.kt)("p",null,"For example, the following configuration tells Protostar to generate two contracts \u2014 'foo' and 'bar'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="protostar.toml"',title:'"protostar.toml"'},'# ...\n\n["protostar.contracts"]\nfoo = [\n    "./src/main.cairo",\n]\nbar = [\n    "./src/main.cairo",\n]\n')),(0,a.kt)("h3",{id:"entrypoint"},"Entrypoint"),(0,a.kt)("p",null,"An entrypoint is a function decorated with one of the following decorators:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://starknet.io/docs/hello_starknet/constructors.html"},(0,a.kt)("inlineCode",{parentName:"a"},"@constructor"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://starknet.io/docs/hello_starknet/intro.html"},(0,a.kt)("inlineCode",{parentName:"a"},"@external"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://starknet.io/docs/hello_starknet/intro.html"},(0,a.kt)("inlineCode",{parentName:"a"},"@view"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://starknet.io/docs/hello_starknet/l1l2.html?highlight=l1_handler"},(0,a.kt)("inlineCode",{parentName:"a"},"@l1_handler")))),(0,a.kt)("h3",{id:"contract-name"},"Contract name"),(0,a.kt)("p",null,"A contract name refers to an attribute name in this ",(0,a.kt)("inlineCode",{parentName:"p"},"\u201cprotostar.contracts\u201d")," section of the configuration file. You can use contract name as a reference to a contract in some Protostar features. In the example above, ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," are contract names."),(0,a.kt)("h1",{id:"compiling-your-project"},"Compiling your project"),(0,a.kt)("p",null,"Once you specified contract configurations, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ protostar build\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="A compilation result."',title:'"A',compilation:!0,'result."':!0},"$ ls ./build\nbar.json     bar_abi.json foo.json     foo_abi.json\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Protostar detects account contracts. Unlike ",(0,a.kt)("inlineCode",{parentName:"p"},"starknet-compile"),", you don't have to provide ",(0,a.kt)("inlineCode",{parentName:"p"},"--account_contract")," flag to compile them."))),(0,a.kt)("h3",{id:"output-directory"},"Output directory"),(0,a.kt)("p",null,"By default, Protostar uses a ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," directory as a compilation destination. However, you can specify a custom directory by running ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," command with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--output")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"protostar build --output out\n")),(0,a.kt)("h3",{id:"cairo-lang-version"},"Cairo-lang version"),(0,a.kt)("p",null,"Protostar ships with its own ",(0,a.kt)("a",{parentName:"p",href:"https://pypi.org/project/cairo-lang/"},"cairo-lang")," and ",(0,a.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/formatting"},"formatter"),". You don't have to ",(0,a.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/quickstart.html"},"set up the environment"),". If you want to check what Cairo version Protostar uses to compile your project, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="$ protostar -v"',title:'"$',protostar:!0,'-v"':!0},"Protostar version: 0.1.0\nCairo-lang version: 0.8.0\n")),(0,a.kt)("h3",{id:"additional-source-directories"},"Additional source directories"),(0,a.kt)("p",null,"You can specify additional import search path by using ",(0,a.kt)("inlineCode",{parentName:"p"},"--cairo-path")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ protostar build --cairo-path=modules cairo_libs\n")))}d.isMDXComponent=!0}}]);