"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6929],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),l=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,s(s({ref:e},p),{},{components:n})):r.createElement(g,s({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},870:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],c={sidebar_label:"Deploying contracts from tests"},i="Deploying contracts from tests",l={unversionedId:"tutorials/testing/deploying-contracts",id:"tutorials/testing/deploying-contracts",title:"Deploying contracts from tests",description:"For most projects, testing of isolated functions won't be enough.",source:"@site/docs/tutorials/07-testing/01-deploying-contracts.md",sourceDirName:"tutorials/07-testing",slug:"/tutorials/testing/deploying-contracts",permalink:"/protostar/docs/tutorials/testing/deploying-contracts",editUrl:"https://github.com/software-mansion/protostar/tree/master/website/docs/tutorials/07-testing/01-deploying-contracts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Deploying contracts from tests"},sidebar:"tutorials",previous:{title:"Testing",permalink:"/protostar/docs/tutorials/testing/"},next:{title:"Cheatcodes",permalink:"/protostar/docs/tutorials/testing/cheatcodes/"}},p={},u=[],d={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-contracts-from-tests"},"Deploying contracts from tests"),(0,o.kt)("p",null,"For most projects, testing of isolated functions won't be enough.\nProtostar provides a ",(0,o.kt)("a",{parentName:"p",href:"/protostar/docs/tutorials/testing/cheatcodes/deploy-contract"},(0,o.kt)("inlineCode",{parentName:"a"},"deploy_contract")," cheatcode")," to test interactions between contracts.\nWe will use an example of a simple storage contract to show you how to deploy contract inside a test case."),(0,o.kt)("p",null,"First, inside a ",(0,o.kt)("inlineCode",{parentName:"p"},"src")," directory, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"storage_contract.cairo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="src/storage_contract.cairo"',title:'"src/storage_contract.cairo"'},"%lang starknet\n\nfrom starkware.cairo.common.cairo_builtins import HashBuiltin\nfrom starkware.cairo.common.uint256 import Uint256, uint256_add\n\n// Define a storage variable.\n@storage_var\nfunc balance() -> (res: Uint256) {\n}\n\n@storage_var\nfunc id() -> (res: felt) {\n}\n\n// Increases the balance by the given amount.\n@external\nfunc increase_balance{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(\n    amount: Uint256\n) {\n    let (read_balance) = balance.read();\n    let (new_balance, carry) = uint256_add(read_balance, amount);\n    assert carry = 0;\n    balance.write(new_balance);\n    return ();\n}\n\n// Returns the current balance.\n@view\nfunc get_balance{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (\n    res: Uint256\n) {\n    let (res) = balance.read();\n    return (res,);\n}\n\n@view\nfunc get_id{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> (res: felt) {\n    let (res) = id.read();\n    return (res,);\n}\n\n@constructor\nfunc constructor{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(\n    initial_balance: Uint256, _id: felt\n) {\n    balance.write(initial_balance);\n    id.write(_id);\n    return ();\n}\n")),(0,o.kt)("p",null,"Then we can create a test case for the contract.\nInside ",(0,o.kt)("inlineCode",{parentName:"p"},"tests")," directory, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"test_storage_contract.cairo")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cairo",metastring:'title="tests/test_storage_contract.cairo"',title:'"tests/test_storage_contract.cairo"'},'%lang starknet\nfrom starkware.cairo.common.uint256 import Uint256\n\n@contract_interface\nnamespace StorageContract {\n    func increase_balance(amount: Uint256) {\n    }\n\n    func get_balance() -> (res: Uint256) {\n    }\n\n    func get_id() -> (res: felt) {\n    }\n}\n\n@external\nfunc test_proxy_contract{syscall_ptr: felt*, range_check_ptr}() {\n    alloc_locals;\n\n    local contract_address: felt;\n    // We deploy contract and put its address into a local variable. Second argument is calldata array\n    %{ ids.contract_address = deploy_contract("./src/storage_contract.cairo", [100, 0, 1]).contract_address %}\n\n    let (res) = StorageContract.get_balance(contract_address=contract_address);\n    assert res.low = 100;\n    assert res.high = 0;\n\n    let (id) = StorageContract.get_id(contract_address=contract_address);\n    assert id = 1;\n\n    StorageContract.increase_balance(contract_address=contract_address, amount=Uint256(50, 0));\n\n    let (res) = StorageContract.get_balance(contract_address=contract_address);\n    assert res.low = 150;\n    assert res.high = 0;\n    return ();\n}\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://www.cairo-lang.org/docs/hello_starknet/more_features.html#passing-tuples-and-structs-in-calldata"},'"passing tuples and structs in calldata"')," on how to serialize your constructor arguments to array of integers"))),(0,o.kt)("p",null,"Then run your test with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"protostar test ./tests\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="expected result"',title:'"expected','result"':!0},"Collected 2 items\n\nstorage_test: .\ntest_utils: .\n----- TEST SUMMARY ------\n2 passed\nRan 2 out of 2 total tests\n")))}m.isMDXComponent=!0}}]);