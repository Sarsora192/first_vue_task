(function(t){function e(e){for(var s,i,c=e[0],r=e[1],u=e[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,c=1;c<a.length;c++){var r=a[c];0!==n[r]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-todolist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0726":function(t,e,a){"use strict";a("a948")},"0ba9":function(t,e,a){"use strict";a("6e86")},1018:function(t,e,a){},1394:function(t,e,a){},"196a":function(t,e,a){"use strict";a("2cd4")},"21a6":function(t,e,a){"use strict";a("a546")},"2cd4":function(t,e,a){},5387:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("PageTitle",{attrs:{title:"Sara is the best"}}),a("Dashboard")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"page-title"},[t._v(" "+t._s(t.title)+" ")])},c=[],r={name:"PageTitle",props:{title:{type:String,required:!0}}},u=r,l=(a("0ba9"),a("2877")),d=Object(l["a"])(u,i,c,!1,null,"350da648",null),f=d.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("DashboardInfo"),a("DashboardContent")],1)},m=[],p=a("5530"),b=a("2f62"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-info"},[a("ul",{staticClass:"dashboard-info__list"},[a("li",{staticClass:"dashboard-info__item"},[a("UITag",{attrs:{"tag-name":"Tasks","tag-value":t.totalTaskList}})],1),a("li",{staticClass:"dashboard-info__item"},[a("UITag",{attrs:{"tag-name":"Tasks Done","tag-value":t.totalTaskListDone}})],1)]),a("ul",{staticClass:"dashboard-info__list"},[0!==t.totalTaskListDone?a("li",{staticClass:"dashboard-info__item"},[a("UIButton",{staticClass:"button--bg-color-error button--small",on:{"button-click":function(e){return t.removeTaskListDone()}}},[a("span",{staticClass:"button__icon"},[a("i",{staticClass:"icon"},[a("FontAwesomeIcon",{attrs:{icon:"trash"}})],1)]),a("span",{staticClass:"button__text"},[t._v(" tasks done ")])])],1):t._e(),a("li",{staticClass:"dashboard-info__item"},[a("UIButton",{staticClass:"button--bg-color-error button--small",on:{"button-click":function(e){return t.removeTaskList()}}},[a("span",{staticClass:"button__icon"},[a("i",{staticClass:"icon"},[a("FontAwesomeIcon",{attrs:{icon:"trash"}})],1)]),a("span",{staticClass:"button__text"},[t._v(" tasks ")])])],1)])])},h=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.checkTag,{tag:"component",staticClass:"button",attrs:{href:t.buttonHref,to:t.buttonTo,value:t.buttonValue},on:{click:t.buttonClick}},[t._t("default")],2)},v=[],_={name:"UIButton",props:{buttonHref:{type:String,default:null},buttonTo:{type:String,default:null},buttonValue:{type:String,default:null}},computed:{checkTag:function(){return this.href?"a":this.value?"input":this.to?"router-link":"button"}},methods:{buttonClick:function(t){this.$emit("button-click",t)}}},L=_,w=(a("87d3"),Object(l["a"])(L,g,v,!1,null,"3678650a",null)),C=w.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tag",class:{"tag--value-number":"number"==typeof t.tagValue}},[a("span",{staticClass:"tag__name"},[t._v(" "+t._s(t.tagName)+" ")]),a("span",{staticClass:"tag__value"},[t._v(" "+t._s(t.tagValue)+" ")])])},j=[],y=(a("a9e3"),{name:"UITag",props:{tagName:{type:String,required:!0},tagValue:{type:[String,Number]}}}),I=y,S=(a("21a6"),Object(l["a"])(I,O,j,!1,null,"58f95d64",null)),D=S.exports,N={name:"DashboardInfo",components:{UIButton:C,UITag:D},computed:Object(p["a"])({},Object(b["c"])({totalTaskList:"getTotalTaskList",totalTaskListDone:"getTotalTaskListDone"})),methods:Object(p["a"])({},Object(b["b"])(["removeTaskList","removeTaskListDone"]))},x=N,$=(a("f90b"),Object(l["a"])(x,T,h,!1,null,"535cf12a",null)),B=$.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content"},[a("TaskList",{ref:"taskList"}),a("TaskNew",{on:{"add-task":function(e){return t.scrollToBottom()}}})],1)},U=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"taskListWrapper",staticClass:"task-list__wrapper"},[a("transition-group",{staticClass:"task-list",attrs:{name:"task-list",tag:"ul"}},t._l(t.getTaskList,(function(t){return a("li",{key:t.id,staticClass:"task-list__item"},[a("TaskPreview",{attrs:{"task-item":t}})],1)})),0)],1)},A=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-preview",class:{"is-done":t.taskItem.status.done}},[a("UIButton",{staticClass:"task-preview__button-done button--icon",on:{"button-click":function(e){return t.changeTaskDone(t.taskItem)}}},[a("span",{staticClass:"button__icon"},[a("i",{staticClass:"icon",attrs:{id:"test"}},[a("FontAwesomeIcon",{attrs:{icon:"check-circle"}})],1)])]),a("div",{staticClass:"task-preview__name"},[a("p",[t._v(" "+t._s(t.taskItem.name)+" ")])]),a("UIButton",{staticClass:"task-preview__button-remove button--icon",on:{"button-click":function(e){return t.removeTask(t.taskItem.id)}}},[a("span",{staticClass:"button__icon"},[a("i",{staticClass:"icon"},[a("FontAwesomeIcon",{attrs:{icon:"trash"}})],1)])])],1)},F=[],J={name:"TaskPreview",components:{UIButton:C},props:{taskItem:{type:Object,required:!0}},methods:Object(p["a"])(Object(p["a"])({},Object(b["b"])(["removeTask","updateTask"])),{},{changeTaskDone:function(t){t.status.done=!t.status.done,this.updateTask(t)}})},M=J,q=(a("0726"),Object(l["a"])(M,V,F,!1,null,"59b7beb4",null)),H=q.exports,W={name:"TaskList",components:{TaskPreview:H},computed:Object(p["a"])({},Object(b["c"])(["getTaskList"])),mounted:function(){this.scrollToBottom()},methods:{scrollToBottom:function(){var t=this;this.$nextTick((function(){var e=t.$refs.taskListWrapper;e.scrollTop=e.scrollHeight}))}}},z=W,G=(a("196a"),Object(l["a"])(z,E,A,!1,null,"4582d57c",null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"task-new"},[a("div",{staticClass:"task-new__field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.taskNew.name,expression:"taskNew.name"}],staticClass:"task-new__input",attrs:{type:"text",placeholder:"New task",autofocus:""},domProps:{value:t.taskNew.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createTaskNew()},input:function(e){e.target.composing||t.$set(t.taskNew,"name",e.target.value)}}}),a("UIButton",{staticClass:"task-new__button-add button--icon",on:{"button-click":function(e){return t.createTaskNew()}}},[a("span",{staticClass:"button__icon"},[a("i",{staticClass:"icon"},[a("FontAwesomeIcon",{attrs:{icon:"plus-circle"}})],1)])])],1)])},R=[],X=(a("498a"),a("b0c0"),{name:"TaskNew",components:{UIButton:C},data:function(){return{taskNew:{name:""}}},computed:Object(p["a"])(Object(p["a"])({},Object(b["c"])(["getTaskLast"])),{},{createTaskId:function(){return"undefined"!==typeof this.getTaskLast?this.getTaskLast.id+1:1},createTaskName:function(){return this.taskNew.name.trim()}}),methods:Object(p["a"])(Object(p["a"])({},Object(b["b"])(["addTask"])),{},{cleanTaskNew:function(){this.taskNew.name=""},createTaskNew:function(){var t=this.createTaskId,e=this.createTaskName,a={id:t,name:e};""!=e&&this.addTask(a),this.cleanTaskNew(),this.emitAddTask()},emitAddTask:function(){this.$emit("add-task")}})}),Y=X,Z=(a("8ac1"),Object(l["a"])(Y,Q,R,!1,null,"4892754e",null)),tt=Z.exports,et={name:"DashboardContent",components:{TaskList:K,TaskNew:tt},methods:{scrollToBottom:function(){this.$refs.taskList.scrollToBottom()}}},at=et,st=(a("e5db"),Object(l["a"])(at,P,U,!1,null,"a11751fa",null)),nt=st.exports,ot={name:"Dashboard",components:{DashboardInfo:B,DashboardContent:nt},computed:Object(p["a"])({},Object(b["c"])(["getTaskList"])),watch:{getTaskList:{handler:function(){this.createTaskListLocalStorage()},deep:!0}},mounted:function(){this.checkTaskListLocalStorage()},methods:Object(p["a"])({},Object(b["b"])(["checkTaskListLocalStorage","createTaskListLocalStorage"]))},it=ot,ct=(a("ad63"),Object(l["a"])(it,k,m,!1,null,"589e4b66",null)),rt=ct.exports,ut={components:{PageTitle:f,Dashboard:rt}},lt=ut,dt=(a("5c0b"),Object(l["a"])(lt,n,o,!1,null,null,null)),ft=dt.exports,kt=a("ecee"),mt=a("c074"),pt=a("ad3d");kt["c"].add(mt["d"],mt["a"],mt["b"],mt["c"]),s["a"].component("FontAwesomeIcon",pt["a"]);a("4de4"),a("d3b7"),a("c740"),a("a434"),a("e9c4");var bt={task:{list:[{id:1,name:"Do something awesome!",status:{done:!1}},{id:2,name:"Buy toilet paper",status:{done:!1}},{id:3,name:"Learn Vue",status:{done:!1}}]}},Tt={getTaskList:function(t){return t.task.list},getTotalTaskList:function(t){return t.task.list.length},getTotalTaskListDone:function(t){return t.task.list.filter((function(t){return t.status.done})).length},getTaskLast:function(t){return t.task.list[t.task.list.length-1]}},ht={addTask:function(t,e){var a=t.commit,s={id:e.id,name:e.name,status:{done:!1}};a("addTask",s)},updateTask:function(t,e){var a=t.commit;a("updateTask",e)},removeTask:function(t,e){var a=t.commit;a("removeTask",e)},removeTaskList:function(t){var e=t.commit;e("removeTaskList")},removeTaskListDone:function(t){var e=t.commit;e("removeTaskListDone")},checkTaskListLocalStorage:function(t){var e=t.commit;if(localStorage.getItem("tasks"))try{e("updateTaskListLocalStorage")}catch(a){e("removeTaskListLocalStorage")}else e("createTaskListLocalStorage")},createTaskListLocalStorage:function(t){var e=t.commit;e("createTaskListLocalStorage")}},gt={addTask:function(t,e){t.task.list.push(e)},updateTask:function(t,e){var a=t.task.list.findIndex((function(t){return t.id===e.id}));-1!==a&&t.task.list.splice(a,1,e)},removeTask:function(t,e){t.task.list=t.task.list.filter((function(t){return t.id!==e}))},removeTaskList:function(t){t.task.list=[]},removeTaskListDone:function(t){t.task.list=t.task.list.filter((function(t){return!t.status.done}))},createTaskListLocalStorage:function(t){localStorage.setItem("tasks",JSON.stringify(t.task.list))},updateTaskListLocalStorage:function(t){t.task.list=JSON.parse(localStorage.getItem("tasks"))},removeTaskListLocalStorage:function(){localStorage.removeItem("tasks")}},vt={state:bt,getters:Tt,actions:ht,mutations:gt};s["a"].use(b["a"]);var _t={pageTitle:"Vue ToDo List"},Lt={getPageTitle:function(t){return t.pageTitle}},wt={},Ct={},Ot={tasks:vt},jt=new b["a"].Store({state:_t,getters:Lt,mutations:wt,actions:Ct,modules:Ot}),yt=jt;s["a"].config.productionTip=!1,new s["a"]({store:yt,render:function(t){return t(ft)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("5387")},"6e86":function(t,e,a){},"87d3":function(t,e,a){"use strict";a("c3c2")},"8ac1":function(t,e,a){"use strict";a("bc3f")},a546:function(t,e,a){},a948:function(t,e,a){},ad63:function(t,e,a){"use strict";a("fea8")},bc3f:function(t,e,a){},c3c2:function(t,e,a){},e5db:function(t,e,a){"use strict";a("1018")},f90b:function(t,e,a){"use strict";a("1394")},fea8:function(t,e,a){}});
//# sourceMappingURL=app.5570c8f3.js.map