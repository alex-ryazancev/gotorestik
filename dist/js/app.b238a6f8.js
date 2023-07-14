(function(){"use strict";var t={9697:function(t,e,a){var n=a(144),r=(a(7658),function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},["/"===t.$route.path?e("b-button",{staticClass:"mt-3 mb-3",attrs:{variant:"outline-dark",pill:""},on:{click:function(e){return t.$router.push("/about")}}},[t._v("Выбрать из списка")]):e("b-button",{staticClass:"mt-3 mb-3",attrs:{variant:"outline-dark",pill:""},on:{click:function(e){return t.$router.push("/")}}},[t._v("Рулетка")]),e("router-view")],1)}),s=[],o=a(1001),i={},u=(0,o.Z)(i,r,s,!1,null,null,null),c=u.exports,l=a(8345),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("HomePage")],1)},m=[],f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-content-center"},[t.randomRestaurant?e("div",[e("h4",{staticClass:"mb-3",staticStyle:{"max-width":"300px",height:"60px"}},[t._v("Идем в "+t._s(t.randomRestaurant.name)+" ?")]),e("div",{staticClass:"d-flex justify-content-center"},[e("h6",{staticClass:"m-1 mb-2"},[t._v("только с бизнес-ланчем ")]),e("b-form-checkbox",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),e("b-card",{staticStyle:{width:"20rem"},attrs:{"no-body":""}},[e("b-card-body",{staticClass:"card-name"},[e("b-card-sub-title",{staticClass:"mb-2"},[t._v(t._s(t.randomRestaurant.address))]),e("b-card-title",{staticStyle:{color:"blue"}},[t._v(t._s(t.randomRestaurant.name))])],1),e("b-list-group",{attrs:{flush:""}},[e("b-list-group-item",{style:t.isLanch()},[t._v("Бизнес-ланч - "+t._s(t.randomRestaurant.business_lunch?"ЕСТЬ":"НЕТ"))]),e("b-list-group-item",[t._v("Кухня - "+t._s(t.randomRestaurant.cuisine||"не указано"))]),e("b-list-group-item",[t._v("расстояние м. - "+t._s(t.randomRestaurant.distance||"не указано"))]),e("b-list-group-item",[t._v("Чек р. - "+t._s(t.randomRestaurant.price||"не указано"))])],1),e("b-card-body",[e("div",{staticClass:"d-flex justify-content-between"},[e("b-button",{attrs:{variant:"danger"},on:{click:t.getRandomRestoraunt}},[t._v("Хочу другое")]),e("b-button",{attrs:{variant:"success"},on:{click:function(e){t.showModal=!0}}},[t._v("Да, спасибо!")])],1)]),e("b-card-footer",[t._v(t._s(t.randomRestaurant.landmark))]),e("b-card-img",{attrs:{src:t.randomRestaurant.photo?t.randomRestaurant.photo:t.logo,alt:"Изображение",bottom:""}})],1)],1):t.restaurants?e("div",[e("h3",[t._v("Нет данных о ресторанах")]),e("b-button",{attrs:{variant:"danger"},on:{click:t.getRandomRestoraunt}},[t._v("Найти")])],1):e("div",[e("h3",[t._v("Загрузка...")])]),e("b-modal",{attrs:{"hide-header-close":"",title:"Отправить через телеграм"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100 d-flex justify-content-between"},[e("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(e){t.showModal=!1}}},[t._v("Отмена")]),e("b-button",{attrs:{variant:"success",size:"sm"},on:{click:function(e){return t.sendTelegramMessage(t.msg)}}},[t._v("Отправить")])],1)]},proxy:!0}]),model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[e("b-form-input",{staticClass:"mb-3",attrs:{type:"text",placeholder:"токен бота"},model:{value:t.botToken,callback:function(e){t.botToken=e},expression:"botToken"}}),e("b-form-input",{attrs:{type:"text",placeholder:"ваш Chat ID"},model:{value:t.chatId,callback:function(e){t.chatId=e},expression:"chatId"}}),e("h6",{staticClass:"mt-3"},[t._v("сообщение: ")]),e("h5",{staticClass:"mt-3"},[t._v(t._s(t.msg))]),e("b-form-input",{staticClass:"mb-3 mt-3",attrs:{id:"textarea",placeholder:"можно добавить какой то текст"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)],1)},h=[],b=a(6154),p={name:"HomePage",props:{},data(){return{showModal:!1,text:"",botToken:"YOUR_BOT_TOKEN",chatId:"YOUR_CHAT_ID",logo:"https://img.freepik.com/free-vector/top-view-of-dishes-on-restaurant-table_23-2147913090.jpg?w=740&t=st=1689257738~exp=1689258338~hmac=81e2e2a7128d54ce9db0800320bff1fde319da23333771da6d976330698ba8fd"}},created(){this.init()},mounted(){},computed:{idRestaurant(){return this.$store.state.idRestaurant},restaurants(){return this.$store.state.restaurants},randomRestaurant(){return this.$store.state.randomRestaurant},msg(){if(null!==this.randomRestaurant){let t=this.randomRestaurant,e=t.address||"";return"Идем в кафе: "+t.name+" "+e+this.text}return""},selected:{get(){return this.$store.state.selected},set(t){this.$store.commit("SET_SELECTED",t)}}},watch:{selected(t){console.log(this.randomRestaurant.business_lunch),!0===t&&!1===this.randomRestaurant.business_lunch&&this.getRandomRestoraunt()},idRestaurant(){this.findRestaurant()}},methods:{getRandomRestoraunt(){let t;if(this.selected){let e;do{t=Math.floor(Math.random()*this.restaurants.length),e=this.restaurants[t]}while(!e.business_lunch);this.$store.commit("SET_ID_RESTAURANT",e.id)}else t=Math.floor(Math.random()*this.restaurants.length),this.$store.commit("SET_ID_RESTAURANT",this.restaurants[t].id)},async init(){0===this.restaurants.length&&await this.$store.dispatch("fetchRestaurants"),null===this.idRestaurant&&this.getRandomRestoraunt()},async findRestaurant(){await this.$store.dispatch("getRestorauntById")},async sendTelegramMessage(t){let e="YOUR_BOT_TOKEN",a="YOUR_CHAT_ID";try{let n=await b.Z.get(`https://api.telegram.org/bot${e}/sendMessage`,{params:{chat_id:a,text:t}});console.log("Сообщение успешно отправлено в Telegram:",n.data)}catch(n){console.error("Ошибка при отправке сообщения в Telegram:",n)}},isLanch(){return this.randomRestaurant.business_lunch?"color: green;":"color: red;"}}},v=p,g=(0,o.Z)(v,f,h,!1,null,"66c6b5e9",null),_=g.exports,R={name:"HomeView",components:{HomePage:_}},y=R,T=(0,o.Z)(y,d,m,!1,null,null,null),w=T.exports;n["default"].use(l.ZP);const k=[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,7817))}],x=new l.ZP({routes:k});var E=x,S=a(629);n["default"].use(S.ZP);var C=new S.ZP.Store({state:{restaurants:[],randomRestaurant:null,idRestaurant:null,selected:!1},getters:{},mutations:{SET_RESTAURANTS(t,e){Array.isArray(e)&&e.length>0&&(t.restaurants=e)},SET_RANDOM_RESTAURANT(t,e){t.randomRestaurant=e},SET_ID_RESTAURANT(t,e){t.idRestaurant=e},SET_SELECTED(t,e){t.selected=e}},actions:{async fetchRestaurants({commit:t}){try{let e=await b.Z.get("https://bandaumnikov.ru/api/test/site/get-index");t("SET_RESTAURANTS",e.data.data)}catch(e){console.error("Ошибка при получении данных:",e)}},async getRestorauntById({state:t,commit:e}){try{let a=await b.Z.get("https://bandaumnikov.ru/api/test/site/get-view?id="+t.idRestaurant);e("SET_RANDOM_RESTAURANT",a.data.data)}catch(a){console.error("Ошибка при получении данных:",a)}}}}),A=a(9657),O=a(3017);a(7024);n["default"].prototype.$http=b.Z,n["default"].config.productionTip=!1,n["default"].use(A.XG7,O.A7),new n["default"]({router:E,store:C,render:t=>t(c)}).$mount("#app")}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,s){if(!n){var o=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],s=t[l][2];for(var i=!0,u=0;u<n.length;u++)(!1&s||o>=s)&&Object.keys(a.O).every((function(t){return a.O[t](n[u])}))?n.splice(u--,1):(i=!1,s<o&&(o=s));if(i){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[n,r,s]}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.7b29c893.js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="restoroulette:";a.l=function(n,r,s,o){if(t[n])t[n].push(r);else{var i,u;if(void 0!==s)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+s){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+s),i.src=n),t[n]=[r];var m=function(e,a){i.onerror=i.onload=null,clearTimeout(f);var r=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(t){return t(a)})),e)return e(a)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/gotorestik/"}(),function(){var t={143:0};a.f.j=function(e,n){var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(a,n){r=t[e]=[a,n]}));n.push(r[2]=s);var o=a.p+a.u(e),i=new Error,u=function(n){if(a.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",i.name="ChunkLoadError",i.type=s,i.request=o,r[1](i)}};a.l(o,u,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,s,o=n[0],i=n[1],u=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(u)var l=u(a)}for(e&&e(n);c<o.length;c++)s=o[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(l)},n=self["webpackChunkrestoroulette"]=self["webpackChunkrestoroulette"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(9697)}));n=a.O(n)})();
//# sourceMappingURL=app.b238a6f8.js.map