webpackJsonp([2],{"8C91":function(e,t,n){var a=n("Rtzi");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("8bSs")("4647ea81",a,!0)},IEIh:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"register"}},[n("div",{staticClass:"content"},[n("h1",[e._v("Resumer")]),n("p",[e._v("注册")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"请输入用户名",type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"请输入密码",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.rePassword,expression:"rePassword"}],attrs:{placeholder:"请确认密码",type:"password"},domProps:{value:e.rePassword},on:{input:function(t){t.target.composing||(e.rePassword=t.target.value)}}}),n("a",{staticClass:"center-btn",attrs:{href:"javascript:;"},on:{click:function(t){e.doReg()}}},[e._v("现在注册")])])])},o=[],r={render:a,staticRenderFns:o};t.a=r},Rtzi:function(e,t,n){t=e.exports=n("BkJT")(!0),t.push([e.i,".content[data-v-ad0242dc]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100vh;background:-webkit-gradient(linear,left top,left bottom,from(#888),to(#000));background:linear-gradient(#888,#000)}.content h1[data-v-ad0242dc]{font-size:60px;font-weight:400;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1 Light;color:#fff}.content p[data-v-ad0242dc]{font-size:20px;color:#888}.content input[data-v-ad0242dc]{display:block;padding:15px 30px;text-align:center;margin:20px 0;width:183px}.content .center-btn[data-v-ad0242dc]{display:block;text-align:center;text-decoration:none;color:#fff;padding:15px 30px;background-color:#02af5f;-webkit-transition:all .5s;transition:all .5s;margin-top:20px;width:183px}.content .center-btn[data-v-ad0242dc]:hover{background-color:orange}","",{version:3,sources:["C:/Users/Administrator/Desktop/resumer/src/components/Register.vue"],names:[],mappings:"AACA,0BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,aAAc,AACd,6EAAkF,AAClF,qCAAwC,CACzC,AACD,6BACE,eAAgB,AAChB,gBAAiB,AACjB,wCAA0B,AAC1B,UAAY,CACb,AACD,4BACE,eAAgB,AAChB,UAAY,CACb,AACD,gCACE,cAAe,AACf,kBAAmB,AACnB,kBAAmB,AACnB,cAAe,AACf,WAAa,CACd,AACD,sCACE,cAAe,AACf,kBAAmB,AACnB,qBAAsB,AACtB,WAAY,AACZ,kBAAmB,AACnB,yBAA0B,AAC1B,2BAA6B,AAC7B,mBAAqB,AACrB,gBAAiB,AACjB,WAAa,CACd,AACD,4CACE,uBAA0B,CAC3B",file:"Register.vue",sourcesContent:["\n.content[data-v-ad0242dc] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100vh;\n  background: -webkit-gradient(linear, left top, left bottom, from(#888), to(#000));\n  background: linear-gradient(#888, #000);\n}\n.content h1[data-v-ad0242dc] {\n  font-size: 60px;\n  font-weight: 400;\n  font-family: '微软雅黑 Light';\n  color: #fff;\n}\n.content p[data-v-ad0242dc] {\n  font-size: 20px;\n  color: #888;\n}\n.content input[data-v-ad0242dc] {\n  display: block;\n  padding: 15px 30px;\n  text-align: center;\n  margin: 20px 0;\n  width: 183px;\n}\n.content .center-btn[data-v-ad0242dc] {\n  display: block;\n  text-align: center;\n  text-decoration: none;\n  color: #fff;\n  padding: 15px 30px;\n  background-color: #02af5f;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  margin-top: 20px;\n  width: 183px;\n}\n.content .center-btn[data-v-ad0242dc]:hover {\n  background-color: #ffa500;\n}"],sourceRoot:""}])},dIqY:function(e,t,n){"use strict";function a(e){n("8C91")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("eTPa"),r=n("IEIh"),i=n("/Xao"),A=a,s=i(o.a,r.a,!1,A,"data-v-ad0242dc",null);t.default=s.exports},eTPa:function(e,t,n){"use strict";var a=n("gyMJ");t.a={name:"register",data:function(){return{username:"",password:"",rePassword:""}},methods:{doReg:function(){var e=this;this.username&&this.password&&this.rePassword?this.password===this.rePassword?a.a.register(this.username,this.password,function(){alert("注册成功！"),e.$router.push("/")}):alert("两次密码须输入一致！"):alert("用户名，密码不能为空！")}}}}});
//# sourceMappingURL=2.ee4da93f337e0c9a9dce.js.map