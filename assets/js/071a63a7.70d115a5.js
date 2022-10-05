"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7770],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,l=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return n?a.createElement(h,i(i({ref:e},c),{},{components:n})):a.createElement(h,i({ref:e},c))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9093:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],o={},l="Testing",p={unversionedId:"tutorials/testing/README",id:"tutorials/testing/README",title:"Testing",description:"Protostar provides a flexible testing environment for Cairo smart contracts.",source:"@site/docs/tutorials/07-testing/README.md",sourceDirName:"tutorials/07-testing",slug:"/tutorials/testing/",permalink:"/protostar/docs/tutorials/testing/",editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/07-testing/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorials",previous:{title:"Network configuration",permalink:"/protostar/docs/tutorials/deploying/network-config"},next:{title:"Deploying contracts from tests",permalink:"/protostar/docs/tutorials/testing/deploying-contracts"}},c={},m=[{value:"Unit testing",id:"unit-testing",level:2},{value:"Asserts",id:"asserts",level:2},{value:"Setup hooks",id:"setup-hooks",level:2},{value:"Setup suite",id:"setup-suite",level:3},{value:"Setup case",id:"setup-case",level:3},{value:"Importing Python modules in hints",id:"importing-python-modules-in-hints",level:3}],d={toc:m};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testing"},"Testing"),(0,s.kt)("p",null,"Protostar provides a flexible testing environment for Cairo smart contracts.\nIt allows to write unit/integration tests with a help of ",(0,s.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/cheatcodes/"},"cheatcodes"),"."),(0,s.kt)("h2",{id:"unit-testing"},"Unit testing"),(0,s.kt)("p",null,"We will start with a ",(0,s.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/project-initialization"},"just created protostar project"),".\nIn your ",(0,s.kt)("inlineCode",{parentName:"p"},"src")," directory create a ",(0,s.kt)("inlineCode",{parentName:"p"},"utils.cairo")," file"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="src/utils.cairo"',title:'"src/utils.cairo"'},"func sum_func{syscall_ptr: felt*, range_check_ptr}(a: felt, b: felt) -> felt {\n    return a + b;\n}\n")),(0,s.kt)("p",null,"This is our target function, which we are going to test.\nThen in the ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," directory create file ",(0,s.kt)("inlineCode",{parentName:"p"},"test_utils.cairo"),", which contains a single test case."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="tests/test_utils.cairo"',title:'"tests/test_utils.cairo"'},"%lang starknet\n\nfrom src.utils import sum_func\n\n@external\nfunc test_sum{syscall_ptr: felt*, range_check_ptr}() {\n    let r = sum_func(4, 3);\n    assert r = 7;\n    return ();\n}\n")),(0,s.kt)("p",null,"Then run your test with"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"protostar test ./tests\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"In the example above, Protostar will run every test case it manages to find in the ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," directory. You can read more about specifying where and how Protostar should search for test cases by running ",(0,s.kt)("inlineCode",{parentName:"p"},"protostar test --help"),". "))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you experience any errors during test collection phase consider using ",(0,s.kt)("inlineCode",{parentName:"p"},"--safe-collecting")," flag."))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Expected result"',title:'"Expected','result"':!0},"Collected 1 items\n\ntest_utils: .\n----- TEST SUMMARY ------\n1 passed\nRan 1 out of 1 total tests\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"You can place your test files anywhere you want. Protostar recursively searches\nthe given directory for Cairo files with a name starting with ",(0,s.kt)("inlineCode",{parentName:"p"},"test_")," and treats them as tests files.\nAll functions inside a test file starting with ",(0,s.kt)("inlineCode",{parentName:"p"},"test_")," are treated as separate test cases."))),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Protostar auto-removes constructors from test files. You can test a constructor using the ",(0,s.kt)("inlineCode",{parentName:"p"},"deploy_contract")," cheatcode."))),(0,s.kt)("h2",{id:"asserts"},"Asserts"),(0,s.kt)("p",null,"Protostar ships with its own assert functions. They don't accept ",(0,s.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/how_cairo_works/builtins.html?highlight=implicit%20arguments#implicit-arguments"},"implicit arguments")," compared to asserts from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/starkware-libs/cairo-lang/blob/master/src/starkware/cairo/common/math.cairo"},(0,s.kt)("inlineCode",{parentName:"a"},"starkware.cairo.common.math")),". You can import Protostar asserts in the following way:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="test_my_contract.cairo"',title:'"test_my_contract.cairo"'},"from protostar.asserts import (\n    assert_eq,\n    assert_not_eq,\n    assert_signed_lt,\n    assert_signed_le,\n    assert_signed_gt,\n    assert_unsigned_lt,\n    assert_unsigned_le,\n    assert_unsigned_gt,\n    assert_signed_ge,\n    assert_unsigned_ge,\n)\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If your IDE supports Cairo and doesn't know how to import ",(0,s.kt)("inlineCode",{parentName:"p"},"protostar"),", add the following directory\n",(0,s.kt)("inlineCode",{parentName:"p"},"$(which protostar)/../cairo")," to the ",(0,s.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/how_cairo_works/imports.html?highlight=cairo_path"},(0,s.kt)("inlineCode",{parentName:"a"},"CAIRO_PATH")),"."))),(0,s.kt)("p",null,"You can find all ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/protostar/blob/master/cairo/protostar/asserts.cairo"},"assert signatures here"),"."),(0,s.kt)("h2",{id:"setup-hooks"},"Setup hooks"),(0,s.kt)("p",null,"Often while writing tests you have some setup work that needs to happen before tests run.\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"__setup__")," (",(0,s.kt)("a",{parentName:"p",href:"#setup-suite"},"setup suite"),") and ",(0,s.kt)("inlineCode",{parentName:"p"},"setup_<test_name>")," (",(0,s.kt)("a",{parentName:"p",href:"#setup-case"},"setup case"),")\nhooks can simplify and speed up your tests."),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"context")," variable to pass data from setup hooks to test functions as demonstrated in\nexamples below."),(0,s.kt)("h3",{id:"setup-suite"},"Setup suite"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo"},"@external\nfunc __setup__()\n")),(0,s.kt)("p",null,"The setup suite hook is shared between all test cases in a test suite (Cairo module),\nand is executed before test cases."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Using setup suite hook"',title:'"Using',setup:!0,suite:!0,'hook"':!0},'%lang starknet\n\n@external\nfunc __setup__() {\n    %{ context.contract_a_address = deploy_contract("./tests/integration/testing_hooks/basic_contract.cairo").contract_address %}\n    return ();\n}\n\n@external\nfunc test_something() {\n    tempvar contract_address;\n    %{ ids.contract_address = context.contract_a_address %}\n\n    // ...\n\n    return ();\n}\n')),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Protostar executes ",(0,s.kt)("inlineCode",{parentName:"p"},"__setup__")," only once per test suite.\nThen, for each test case Protostar copies the StarkNet state and the ",(0,s.kt)("inlineCode",{parentName:"p"},"context")," object."))),(0,s.kt)("h3",{id:"setup-case"},"Setup case"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo"},"@external\nfunc setup_tested_property()\n\n@external\nfunc test_tested_property()\n")),(0,s.kt)("p",null,"The setup case hook is bound to a matching test case and is executed just before the test case\nitself.\nUse case hooks to configure the behavior of particular test case,\nfor example, by calling the ",(0,s.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/cheatcodes/max-examples"},(0,s.kt)("inlineCode",{parentName:"a"},"max_examples"))," cheatcode."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="Using setup case hook"',title:'"Using',setup:!0,case:!0,'hook"':!0},"%lang starknet\n\n@external\nfunc setup_something() {\n    %{ max_examples(500) %}\n    return ();\n}\n\n@external\nfunc test_something(a: felt) {\n    // ...\n\n    return ();\n}\n")),(0,s.kt)("h3",{id:"importing-python-modules-in-hints"},"Importing Python modules in hints"),(0,s.kt)("p",null,"Protostar allows using external Python code in hint blocks, for example to verify a signature using third party library."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"cairo-path")," is automatically to ",(0,s.kt)("inlineCode",{parentName:"p"},"sys.path")," in executed hints. This includes project root, ",(0,s.kt)("inlineCode",{parentName:"p"},"src")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"lib")," directories. Any Python module files stored there can be imported without any extra configuration."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"PYTHONPATH")," environment variable (",(0,s.kt)("a",{parentName:"p",href:"https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH"},"https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPATH"),") is fully supported, and Protostar will extend ",(0,s.kt)("inlineCode",{parentName:"p"},"sys.path")," with this variable's value in executed Cairo code.\nThis approach can be used to include some packages from Python virtual environment (by adding ",(0,s.kt)("inlineCode",{parentName:"p"},"site_packages")," to the ",(0,s.kt)("inlineCode",{parentName:"p"},"PYTHONPATH"),")."),(0,s.kt)("p",null,"For example, having the standard project file structure:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 lib\n\u251c\u2500\u2500 protostar.toml\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 main.cairo\n\u2514\u2500\u2500 tests\n    \u251c\u2500\u2500 pymodule.py\n    \u2514\u2500\u2500 test_main.cairo\n")),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"pymodule.py"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def get_three():\n    return 3\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"get_three")," function can be used in ",(0,s.kt)("inlineCode",{parentName:"p"},"test_main.cairo")," like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cairo"},"%lang starknet\nfrom src.main import balance, increase_balance\nfrom starkware.cairo.common.cairo_builtins import HashBuiltin\n\n@view\nfunc test_getting_tree() {\n    alloc_locals;\n    local res;\n    %{\n        from tests.pymodule import get_three\n        ids.res = get_three()\n    %}\n\n    assert res = 3;\n    return ();\n}\n")))}u.isMDXComponent=!0}}]);