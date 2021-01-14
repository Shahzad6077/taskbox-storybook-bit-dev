(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1097:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(56),_clientLogger=__webpack_require__(35),_configFilename=__webpack_require__(1108);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1099:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(366).configure)([__webpack_require__(1100),__webpack_require__(1101)],module,!1)}).call(this,__webpack_require__(109)(module))},1100:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1100},1101:function(module,exports,__webpack_require__){var map={"./Components/Checkbox/Checkbox.stories.tsx":1102,"./Components/TaskList/Tasklist.stories.tsx":1109,"./Components/Taskbox/Taskbox.stories.tsx":1107};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1101},1102:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithChildren",(function(){return WithChildren}));var C_Users_alim6_Desktop_PRACTICE_WORKSPACE_PANACLOUD_BootCamp2020_11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(38),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24),_index__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(131));__webpack_exports__.default={title:"Ui/Checkbox",component:_index__WEBPACK_IMPORTED_MODULE_3__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.a,Object(C_Users_alim6_Desktop_PRACTICE_WORKSPACE_PANACLOUD_BootCamp2020_11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(C_Users_alim6_Desktop_PRACTICE_WORKSPACE_PANACLOUD_BootCamp2020_11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args),{},{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{children:"checkbox"})}))},Default=Template.bind({});Default.args={checked:!0};var WithChildren=Template.bind({});WithChildren.args={checked:!0,varient:"CHILDREN"},Default.parameters=Object(C_Users_alim6_Desktop_PRACTICE_WORKSPACE_PANACLOUD_BootCamp2020_11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => (\r\n  <Checkbox {...args}>\r\n    <span>checkbox</span>\r\n  </Checkbox>\r\n)"}},Default.parameters),WithChildren.parameters=Object(C_Users_alim6_Desktop_PRACTICE_WORKSPACE_PANACLOUD_BootCamp2020_11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => (\r\n  <Checkbox {...args}>\r\n    <span>checkbox</span>\r\n  </Checkbox>\r\n)"}},WithChildren.parameters)},1107:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pinned",(function(){return Pinned})),__webpack_require__.d(__webpack_exports__,"Completed",(function(){return Completed}));var objectSpread2=__webpack_require__(38),jsx_runtime=__webpack_require__(24),taggedTemplateLiteral=(__webpack_require__(0),__webpack_require__(70)),styled_components_browser_esm=__webpack_require__(58),PinIcon_PinIcon=function PinIcon(props){return Object(jsx_runtime.jsx)("svg",Object(objectSpread2.a)(Object(objectSpread2.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},props),{},{children:Object(jsx_runtime.jsx)("path",{d:"M300.8 203.9L290.7 128H328c13.2 0 24-10.8 24-24V24c0-13.2-10.8-24-24-24H56C42.8 0 32 10.8 32 24v80c0 13.2 10.8 24 24 24h37.3l-10.1 75.9C34.9 231.5 0 278.4 0 335.2c0 8.8 7.2 16 16 16h160V472c0 .7.1 1.3.2 1.9l8 32c2 8 13.5 8.1 15.5 0l8-32c.2-.6.2-1.3.2-1.9V351.2h160c8.8 0 16-7.2 16-16 .1-56.8-34.8-103.7-83.1-131.3zM33.3 319.2c6.8-42.9 39.6-76.4 79.5-94.5L128 96H64V32h256v64h-64l15.3 128.8c40 18.2 72.7 51.8 79.5 94.5H33.3z"})}))},Taskbox_PinIcon=PinIcon_PinIcon;try{PinIcon_PinIcon.displayName="PinIcon",PinIcon_PinIcon.__docgenInfo={description:"",displayName:"PinIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Taskbox/PinIcon.tsx#PinIcon"]={docgenInfo:PinIcon_PinIcon.__docgenInfo,name:"PinIcon",path:"src/Components/Taskbox/PinIcon.tsx#PinIcon"})}catch(__react_docgen_typescript_loader_error){}var Checkbox=__webpack_require__(131);function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n  display: flex;\n  align-items: center;\n  p {\n    font-weight: 600;\n    margin: 0px;\n    margin-left: 1rem;\n  }\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  max-width: 720px;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  border: ",";\n  /* Change the BG color if task is Ccmpleted */\n  background-color: ",";\n\n  & .pinned {\n    width: 30px;\n    height: 30px;\n    cursor: pointer;\n    transform: ",";\n    transition: transform 100ms ease-in-out;\n    display: ",";\n\n    & svg {\n      width: 80%;\n      height: 80%;\n      margin: auto;\n    }\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var TaskboxWrapper=styled_components_browser_esm.c.div(_templateObject(),(function(props){return"2px solid ".concat(props.theme.colors.yellow)}),(function(_ref){var isCompleted=_ref.isCompleted,_ref$theme$colors=_ref.theme.colors,yellow=_ref$theme$colors.yellow,gray=_ref$theme$colors.gray;return isCompleted?yellow:gray}),(function(props){return props.isPinned?"unset":"rotate(45deg)"}),(function(props){return props.isCompleted?"none":"flex"})),Content=styled_components_browser_esm.c.div(_templateObject2()),Taskbox_Taskbox=function Taskbox(_ref2){var id=_ref2.id,label=_ref2.label,onStatusChange=_ref2.onStatusChange,status=_ref2.status,statusChangehandler=function statusChangehandler(e){"isPinned"===e.target.name?onStatusChange(id,e.target.checked?"PINNED":"DEFAULT"):"isCompleted"===e.target.name&&onStatusChange(id,"COMPLETED")};return Object(jsx_runtime.jsxs)(TaskboxWrapper,{isPinned:"PINNED"===status,isCompleted:"COMPLETED"===status,children:[Object(jsx_runtime.jsxs)(Content,{children:[Object(jsx_runtime.jsx)(Checkbox.a,{checked:"COMPLETED"===status,onChange:statusChangehandler,name:"isCompleted",disabled:"COMPLETED"===status}),Object(jsx_runtime.jsx)("p",{children:label})]}),Object(jsx_runtime.jsx)(Checkbox.a,{checked:"PINNED"===status,onChange:statusChangehandler,varient:"CHILDREN",name:"isPinned",disabled:"COMPLETED"===status,children:Object(jsx_runtime.jsx)("span",{className:"pinned",children:Object(jsx_runtime.jsx)(Taskbox_PinIcon,{})})})]})};Taskbox_Taskbox.defaultProps={status:"DEFAULT"};var Components_Taskbox=Taskbox_Taskbox;try{Taskbox_Taskbox.displayName="Taskbox",Taskbox_Taskbox.__docgenInfo={description:"",displayName:"Taskbox",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},status:{defaultValue:{value:"DEFAULT"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"DEFAULT"'},{value:'"PINNED"'},{value:'"COMPLETED"'}]}},onStatusChange:{defaultValue:null,description:"",name:"onStatusChange",required:!1,type:{name:"((id: string, status: StatusInterface) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Taskbox/index.tsx#Taskbox"]={docgenInfo:Taskbox_Taskbox.__docgenInfo,name:"Taskbox",path:"src/Components/Taskbox/index.tsx#Taskbox"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Ui/Taskbox",component:Components_Taskbox,args:{label:"Go to Gym at 8pm",id:"123sdf"}};var Taskbox_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Components_Taskbox,Object(objectSpread2.a)({},args))},Default=Taskbox_stories_Template.bind({});Default.args={status:"DEFAULT"};var Pinned=Taskbox_stories_Template.bind({});Pinned.args={status:"PINNED"};var Completed=Taskbox_stories_Template.bind({});Completed.args={status:"COMPLETED"},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Taskbox {...args} />"}},Default.parameters),Pinned.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Taskbox {...args} />"}},Pinned.parameters),Completed.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Taskbox {...args} />"}},Completed.parameters)},1108:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters})),__webpack_require__.d(__webpack_exports__,"decorators",(function(){return decorators}));var jsx_runtime=__webpack_require__(24),styled_components_browser_esm=(__webpack_require__(0),__webpack_require__(58)),taggedTemplateLiteral=__webpack_require__(70);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(['\n    @import url(\'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap\');\n    body {\n        font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\n        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n        sans-serif;\n    }\n']);return _templateObject=function _templateObject(){return data},data}var myTheme={borderRadius:"5px",colors:{gray:"#f7f9fc",yellow:"#f8d57e"}},GlobalStyle=Object(styled_components_browser_esm.b)(_templateObject()),parameters={actions:{argTypesRegex:"^on[A-Z].*"}},decorators=[function(Story){return Object(jsx_runtime.jsxs)(styled_components_browser_esm.a,{theme:myTheme,children:[Object(jsx_runtime.jsx)(GlobalStyle,{}),Object(jsx_runtime.jsx)(Story,{})]})}]},1109:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var jsx_runtime=__webpack_require__(24),objectSpread2=__webpack_require__(38),toConsumableArray=__webpack_require__(483),slicedToArray=__webpack_require__(484),react=__webpack_require__(0),taggedTemplateLiteral=__webpack_require__(70);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n\n  & > * + * {\n    margin-bottom: 12px;\n  }\n  h5 {\n    text-align: center;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var ListWrapper=__webpack_require__(58).c.div(_templateObject()),TaskList_TaskList=function TaskList(_ref){var title=_ref.title,style=(_ref.list,_ref.onChangeTaskItem,_ref.style);return Object(jsx_runtime.jsx)(ListWrapper,{style:style,children:Object(jsx_runtime.jsx)("h5",{children:title})})};TaskList_TaskList.defaultProps={title:"List Title"};var Components_TaskList=TaskList_TaskList;try{TaskList_TaskList.displayName="TaskList",TaskList_TaskList.__docgenInfo={description:"",displayName:"TaskList",props:{title:{defaultValue:{value:"List Title"},description:"",name:"title",required:!1,type:{name:"string"}},list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:'Pick<TaskboxProps, "id" | "label" | "status">[]'}},onChangeTaskItem:{defaultValue:null,description:"",name:"onChangeTaskItem",required:!1,type:{name:"((id: string, status: StatusInterface) => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"object | {}"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/TaskList/index.tsx#TaskList"]={docgenInfo:TaskList_TaskList.__docgenInfo,name:"TaskList",path:"src/Components/TaskList/index.tsx#TaskList"})}catch(__react_docgen_typescript_loader_error){}var LIST=[{id:"123",label:"Pushups game on 23Aug",status:"DEFAULT"},{id:"456",label:"Leg game on 24Aug",status:"PINNED"},{id:"578",label:"Biceps game on 25Aug",status:"DEFAULT"},{id:"235",label:"Chest game on 26Aug",status:"COMPLETED"}],Default=(__webpack_exports__.default={title:"Ui/Tasklist",component:Components_TaskList,args:{title:"Gym Taskbox"}},function Template(args){var _useState=Object(react.useState)(LIST),_useState2=Object(slicedToArray.a)(_useState,2),list=_useState2[0],setList=_useState2[1];return Object(jsx_runtime.jsx)(Components_TaskList,Object(objectSpread2.a)(Object(objectSpread2.a)({},args),{},{list:list,onChangeTaskItem:function onChangeTaskItem(id,status){var shallow=Object(toConsumableArray.a)(list);setList(shallow.map((function(obj){return obj.id===id?Object(objectSpread2.a)(Object(objectSpread2.a)({},obj),{},{status:status}):obj})))}}))}.bind({}));Default.args={style:{width:"400px"}},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\r\n  const [list, setList] = useState<TaskboxProps[]>(LIST);\r\n  const onChangeTaskItem = (id: string, status: any) => {\r\n    const shallow = [...list];\r\n    setList(\r\n      shallow.map((obj) => {\r\n        if (obj.id === id) {\r\n          return { ...obj, status: status };\r\n        } else {\r\n          return obj;\r\n        }\r\n      })\r\n    );\r\n  };\r\n  return <Tasklist {...args} list={list} onChangeTaskItem={onChangeTaskItem} />;\r\n}"}},Default.parameters)},131:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24),C_Users_alim6_Desktop_PRACTICE_WORKSPACE_PANACLOUD_BootCamp2020_11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(38),C_Users_alim6_Desktop_PRACTICE_WORKSPACE_PANACLOUD_BootCamp2020_11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(485),C_Users_alim6_Desktop_PRACTICE_WORKSPACE_PANACLOUD_BootCamp2020_11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(70),styled_components__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(0),__webpack_require__(58));function _templateObject4(){var data=Object(C_Users_alim6_Desktop_PRACTICE_WORKSPACE_PANACLOUD_BootCamp2020_11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.a)(["\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background: ",";\n  /* background: ","; */\n  border-radius: 3px;\n  transition: all 150ms;\n\n  ",":focus + & {\n    box-shadow: 0 0 0 3px pink;\n  }\n\n  "," {\n    visibility: ",";\n  }\n"]);return _templateObject4=function _templateObject4(){return data},data}function _templateObject3(){var data=Object(C_Users_alim6_Desktop_PRACTICE_WORKSPACE_PANACLOUD_BootCamp2020_11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.a)(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  &::disabled {\n    cursor: not-allowed;\n  }\n"]);return _templateObject3=function _templateObject3(){return data},data}function _templateObject2(){var data=Object(C_Users_alim6_Desktop_PRACTICE_WORKSPACE_PANACLOUD_BootCamp2020_11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.a)(["\n  fill: none;\n  stroke: white;\n  stroke-width: 2px;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(C_Users_alim6_Desktop_PRACTICE_WORKSPACE_PANACLOUD_BootCamp2020_11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.a)(["\n  display: inline-flex;\n  vertical-align: middle;\n\n  label {\n    display: inline-flex;\n    cursor: ",";\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var CheckboxContainer=styled_components__WEBPACK_IMPORTED_MODULE_5__.c.div(_templateObject(),(function(props){return props.disabled?"not-allowed":"pointer"})),Icon=styled_components__WEBPACK_IMPORTED_MODULE_5__.c.svg(_templateObject2()),HiddenCheckbox=styled_components__WEBPACK_IMPORTED_MODULE_5__.c.input.attrs({type:"checkbox"})(_templateObject3()),StyledCheckbox=styled_components__WEBPACK_IMPORTED_MODULE_5__.c.div(_templateObject4(),(function(_ref){var checked=_ref.checked,disabled=_ref.disabled;return checked?disabled?"#D7D7D8":"salmon":"papayawhip"}),(function(_ref2){return _ref2.checked?"salmon":"papayawhip"}),HiddenCheckbox,Icon,(function(props){return props.checked?"visible":"hidden"})),Checkbox=function Checkbox(_ref3){var className=_ref3.className,checked=_ref3.checked,children=_ref3.children,_ref3$varient=_ref3.varient,varient=void 0===_ref3$varient?"CHECKBOX":_ref3$varient,props=Object(C_Users_alim6_Desktop_PRACTICE_WORKSPACE_PANACLOUD_BootCamp2020_11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.a)(_ref3,["className","checked","children","varient"]);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CheckboxContainer,{className:className,disabled:props.disabled,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HiddenCheckbox,Object(C_Users_alim6_Desktop_PRACTICE_WORKSPACE_PANACLOUD_BootCamp2020_11_taskbox_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({checked:checked},props)),"CHECKBOX"===varient&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledCheckbox,{checked:checked,disabled:props.disabled,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon,{viewBox:"0 0 24 24",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polyline",{points:"20 6 9 17 4 12"})})}),"CHILDREN"===varient&&children]})})};__webpack_exports__.a=Checkbox;try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"",displayName:"Checkbox",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},varient:{defaultValue:{value:"CHECKBOX"},description:"",name:"varient",required:!1,type:{name:'"CHECKBOX" | "CHILDREN"'}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Checkbox/index.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/Components/Checkbox/index.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},488:function(module,exports,__webpack_require__){__webpack_require__(489),__webpack_require__(661),__webpack_require__(662),__webpack_require__(820),__webpack_require__(1038),__webpack_require__(1071),__webpack_require__(1076),__webpack_require__(1088),__webpack_require__(1090),__webpack_require__(1095),__webpack_require__(1097),module.exports=__webpack_require__(1099)},563:function(module,exports){},662:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(366)}},[[488,1,2]]]);
//# sourceMappingURL=main.d28f525c2da48c6c5314.bundle.js.map