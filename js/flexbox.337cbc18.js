(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["flexbox"],{"159b":function(e,t,n){var r=n("da84"),c=n("fdbc"),o=n("17c2"),i=n("9112");for(var a in c){var u=r[a],s=u&&u.prototype;if(s&&s.forEach!==o)try{i(s,"forEach",o)}catch(f){s.forEach=o}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,c=n("a640"),o=n("ae40"),i=c("forEach"),a=o("forEach");e.exports=i&&a?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"2f50":function(e,t,n){},4160:function(e,t,n){"use strict";var r=n("23e7"),c=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=c},{forEach:c})},"43b4":function(e,t,n){"use strict";var r=n("dfa4"),c=n.n(r);c.a},5530:function(e,t,n){"use strict";n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return o}))},"853b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box"},[n("FlexboxNav"),n("FlexboxContainer")],1)},c=[],o=(n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"nav"},[n("li",[e._v(" Items number "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.itemsNumber,expression:"itemsNumber",modifiers:{number:!0}}],attrs:{type:"number",min:"1"},domProps:{value:e.itemsNumber},on:{input:function(t){t.target.composing||(e.itemsNumber=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._l(e.flex,(function(t,r,c){return n("li",{key:c},[e._v(" "+e._s(r)+" "),n("ul",e._l(t,(function(t,c){return n("li",{key:r+c},[e._v(" "+e._s(c)+" "),n("ul",[e._l(t.values,(function(o,i){return n("li",{key:r+c+i},["optional"!==i?n("a",{class:{active:o},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.setActiveProp([r,c,i])}}},[e._v(" "+e._s(i)+" ")]):n("span",{staticClass:"optional"},[n("a",{class:{active:t.values[i].active},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.setActiveProp([r,c,i])}}},[e._v(" "+e._s(i)+" ")]),n("input",{attrs:{step:t.values[i].step,min:t.values[i].min,max:t.values[i].max,type:"number"},domProps:{value:t.values[i].value},on:{input:function(t){return e.setNewVal([t,r,c,i])}}}),t.values[i].unit?n("select",{on:{change:function(t){return e.setUnit([t,r,c,i])}}},e._l(e.units,(function(r,c){return n("option",{key:c,domProps:{value:r,selected:t.values[i].unit===r}},[e._v(" "+e._s(r)+" ")])})),0):e._e()])])})),t.in?n("li",{key:r+c+"-in",staticClass:"in-box"},[e._v(" in "+e._s(e.flex[r][c].in)+" "),e._l(e.itemsNumber,(function(o,i){return n("label",{key:r+c+i,staticClass:"in"},[n("input",{attrs:{type:"checkbox"},domProps:{value:o,checked:e.isChecked(t.in,o)},on:{change:function(t){return e.setIn([r,c,o])}}}),e._v(" "+e._s(o)+" ")])}))],2):e._e()],2)])})),0)])}))],2)}),i=[],a=(n("caad"),n("2532"),n("5530")),u=n("2f62"),s={name:"FlexboxNav",computed:Object(a["a"])({},Object(u["d"])(["flex","units"]),{itemsNumber:{get:function(){return this.$store.state.items},set:function(e){this.$store.dispatch("changeItemsNumber",e)}}}),methods:Object(a["a"])({},Object(u["c"])(["setActiveProp","setNewVal","setUnit","setIn"]),{isChecked:function(e,t){return e.includes(t)}})},f=s,l=(n("43b4"),n("2877")),b=Object(l["a"])(f,o,i,!1,null,"18d8bc49",null),p=b.exports,v={name:"Flexbox",components:{FlexboxNav:p,FlexboxContainer:function(){return n.e("chunk-74267a99").then(n.bind(null,"4dd5"))}}},m=v,d=(n("9510"),Object(l["a"])(m,r,c,!1,null,null,null));t["default"]=d.exports},9510:function(e,t,n){"use strict";var r=n("2f50"),c=n.n(r);c.a},b64b:function(e,t,n){var r=n("23e7"),c=n("7b0b"),o=n("df75"),i=n("d039"),a=i((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return o(c(e))}})},dbb4:function(e,t,n){var r=n("23e7"),c=n("83ab"),o=n("56ef"),i=n("fc6a"),a=n("06cf"),u=n("8418");r({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(e){var t,n,r=i(e),c=a.f,s=o(r),f={},l=0;while(s.length>l)n=c(r,t=s[l++]),void 0!==n&&u(f,t,n);return f}})},dfa4:function(e,t,n){},e439:function(e,t,n){var r=n("23e7"),c=n("d039"),o=n("fc6a"),i=n("06cf").f,a=n("83ab"),u=c((function(){i(1)})),s=!a||u;r({target:"Object",stat:!0,forced:s,sham:!a},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})}}]);
//# sourceMappingURL=flexbox.337cbc18.js.map