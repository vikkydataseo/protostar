"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5205],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7672:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_label:"Dependencies"},s="Dependencies",p={unversionedId:"tutorials/dependencies-management",id:"tutorials/dependencies-management",title:"Dependencies",description:"Protostar manages dependencies (packages) using git submodules (similarly to Foundry). This is the reason Protostar expects git to be installed. Keep this in mind, especially if your project uses git submodules.",source:"@site/docs/tutorials/05-dependencies-management.md",sourceDirName:"tutorials",slug:"/tutorials/dependencies-management",permalink:"/protostar/docs/tutorials/dependencies-management",editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/05-dependencies-management.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Dependencies"},sidebar:"tutorials",previous:{title:"Compilation",permalink:"/protostar/docs/tutorials/compiling"},next:{title:"Deployment",permalink:"/protostar/docs/tutorials/deploying/"}},d={},c=[{value:"Adding a dependency",id:"adding-a-dependency",level:2},{value:"External dependency reference formats",id:"external-dependency-reference-formats",level:3},{value:"Aliases",id:"aliases",level:3},{value:"Installing dependencies after cloning a repository",id:"installing-dependencies-after-cloning-a-repository",level:2},{value:"Updating dependencies",id:"updating-dependencies",level:2},{value:"Removing dependencies",id:"removing-dependencies",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"Protostar manages dependencies (packages) using ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Tools-Submodules"},"git submodules")," (",(0,i.kt)("a",{parentName:"p",href:"https://onbjerg.github.io/foundry-book/projects/dependencies.html"},"similarly to Foundry"),"). This is the reason Protostar expects ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"git")," to be installed. Keep this in mind, especially if your project uses git submodules."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using Git submodules as a foundation for package management is not an ideal approach. Therefore, ",(0,i.kt)("a",{parentName:"p",href:"https://starkware.co/"},"Starkware")," plans to create a proper package manager."))),(0,i.kt)("h2",{id:"adding-a-dependency"},"Adding a dependency"),(0,i.kt)("p",null,"To add a dependency, inside project directory, run ",(0,i.kt)("inlineCode",{parentName:"p"},"protostar install EXTERNAL_DEPENDENCY_REFERENCE"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Installing a dependency from link to a repository."',title:'"Installing',a:!0,dependency:!0,from:!0,link:!0,to:!0,'repository."':!0},"$ protostar install OpenZeppelin/cairo-contracts@v0.4.0\n12:00:00 [INFO] Installing cairo_contracts (https://github.com/OpenZeppelin/cairo-contracts)\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"OpenZeppelin Contracts for Cairo strongly discourages installing directly from the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch. It is recommended to always include the tag in the ",(0,i.kt)("a",{parentName:"p",href:"#external-dependency-reference-formats"},"External dependency reference format"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console",metastring:"title=\"'lib' category contains the installed dependency.\"",title:"\"'lib'",category:!0,contains:!0,the:!0,installed:!0,'dependency."':!0},"$ tree -L 2\n.\n\u251c\u2500\u2500 lib\n\u2502   \u2514\u2500\u2500 cairo_contracts\n\u251c\u2500\u2500 protostar.toml\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 main.cairo\n\u2514\u2500\u2500 tests\n    \u2514\u2500\u2500 test_main.cairo\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Protostar creates a git commit after installing a dependency."))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you use a dependency that uses absolute imports, you have to specify a cairo-path to the project's root directory of that dependency. You can do it in the following way:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="./lib/cairo_contracts/src/openzeppelin/account/presets/Account.cairo"',title:'"./lib/cairo_contracts/src/openzeppelin/account/presets/Account.cairo"'},"// ...\n\nfrom openzeppelin.introspection.ERC165.library import ERC165\n\n// ...\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"protostar build --cairo-path ./lib/cairo_contracts/src\n")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can configure your ",(0,i.kt)("inlineCode",{parentName:"p"},"cairo-path")," in ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/project-initialization#protostartoml"},"the configuration file"),"."))),(0,i.kt)("h3",{id:"external-dependency-reference-formats"},"External dependency reference formats"),(0,i.kt)("p",null,"Protostar supports the following ways of referencing external dependency:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Format"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GITHUB_ACCOUNT_NAME/REPO_NAME[@TAG]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"OpenZeppelin/cairo-contracts@v0.4.0"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"URL_TO_THE_REPOSITORY")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://github.com/OpenZeppelin/cairo-contracts"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"SSH_URI")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"git@github.com:OpenZeppelin/cairo-contracts.git"))))),(0,i.kt)("h3",{id:"aliases"},"Aliases"),(0,i.kt)("p",null,"Protostar supports installing dependencies under a different name. This allows you to resolve a name conflict, in case of two GitHub users use the same name for their library. In order to install a package under a custom name, run ",(0,i.kt)("inlineCode",{parentName:"p"},"protostar install EXTERNAL_DEPENDENCY_REFERENCE --name CUSTOM_NAME"),". ",(0,i.kt)("a",{parentName:"p",href:"#updating-dependencies"},"Updating dependencies")," section explains how to refer to installed dependency."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Installing a dependency under different name."',title:'"Installing',a:!0,dependency:!0,under:!0,different:!0,'name."':!0},"$ protostar install https://github.com/OpenZeppelin/cairo-contracts --name open_zeppelin\n10:09:51 [INFO] Installing open_zeppelin (https://github.com/OpenZeppelin/cairo-contracts)\n")),(0,i.kt)("h2",{id:"installing-dependencies-after-cloning-a-repository"},"Installing dependencies after cloning a repository"),(0,i.kt)("p",null,"If you ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-clone"},"clone")," Protostar project using dependencies without ",(0,i.kt)("inlineCode",{parentName:"p"},"--recurse-submodules")," flag, you need to install dependencies using Protostar. Otherwise, your project won't compile and tests will fail. To do so, run ",(0,i.kt)("inlineCode",{parentName:"p"},"protostar install")," in the project directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Protostar will install all submodules from the dependencies directory."',title:'"Protostar',will:!0,install:!0,all:!0,submodules:!0,from:!0,the:!0,dependencies:!0,'directory."':!0},"$ protostar install\n09:37:42 [INFO] Installing cairo_contracts (https://github.com/OpenZeppelin/cairo-contracts)\n")),(0,i.kt)("h2",{id:"updating-dependencies"},"Updating dependencies"),(0,i.kt)("p",null,"To update:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a single dependency, run ",(0,i.kt)("inlineCode",{parentName:"li"},"protostar update LOCAL_DEPENDENCY_REFERENCE/EXTERNAL_DEPENDENCY_REFERENCE")),(0,i.kt)("li",{parentName:"ul"},"all dependencies, run ",(0,i.kt)("inlineCode",{parentName:"li"},"protostar update"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LOCAL_DEPENDENCY_REFERENCE")," is a directory name of a dependency, for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Updating a previously installed dependency."',title:'"Updating',a:!0,previously:!0,installed:!0,'dependency."':!0},"$ protostar update cairo_contracts\n10:03:52 [INFO] Package already up to date.\n")),(0,i.kt)("p",null,"If the default branch of a dependency's repository uses ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Basics-Tagging"},"tags"),", Protostar will pull a commit marked with the newest tag. Otherwise, Protostar will pull a recent commit from the default branch."),(0,i.kt)("h2",{id:"removing-dependencies"},"Removing dependencies"),(0,i.kt)("p",null,"To remove a dependency, run ",(0,i.kt)("inlineCode",{parentName:"p"},"protostar remove LOCAL_DEPENDENCY_REFERENCE/EXTERNAL_DEPENDENCY_REFERENCE"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Removing a dependency."',title:'"Removing',a:!0,'dependency."':!0},"$ protostar remove cairo_contracts\n10:04:26 [INFO] Removing cairo_contracts\n")))}u.isMDXComponent=!0}}]);