(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4555c61e"],{"7d0f":function(t,e,n){"use strict";n("e687")},abd7:function(t,e,n){},e687:function(t,e,n){},f4a9:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CopyPasteComponent"),n("PurchaseComponent")],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"hero p-3"},[n("h2",[t._v("Copy & Paste")]),n("div",{staticClass:"buttons text-center align-center"},[n("b-button",{attrs:{type:"is-primary",expanded:""},on:{click:function(e){return t.onCopy("123456789")}}},[t._v("Copy")]),n("b-button",{attrs:{type:"is-primary",expanded:""},on:{click:function(e){return t.onPaste()}}},[t._v("Paste")])],1),t.value?n("p",[t._v("Result: "+t._s(t.value))]):t._e()])])])},r=[],c={name:"CopyPaste",data:function(){return{value:""}},mounted:function(){},methods:{snackbar:function(){this.$buefy.snackbar.open("You copied!")},onCopy:function(t){cordova.plugins.clipboard.copy(t)},onPaste:function(){var t=this;cordova.plugins.clipboard.paste((function(e){t.value=e}))}}},u=c,a=(n("f8b2"),n("2877")),p=Object(a["a"])(u,i,r,!1,null,"bf1ecf34",null),l=p.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"p-2"},[n("p",[t._v(t._s(t.error))]),n("h2",[t._v("Consumable")]),n("div",{staticClass:"consumable"},[n("p",[t._v("Product: "+t._s(t.product.title))]),n("p",[t._v("Price: "+t._s(t.product.price))]),n("p",[t._v("Description: "+t._s(t.product.description))]),n("b-button",{staticClass:"mt-2",attrs:{type:"is-primary",expanded:""},on:{click:function(e){return t.purchaseConsumable()}}},[t._v("Buy now!")])],1),n("div",{staticClass:"subscription mt-4"},[n("h2",[t._v("Subscription")]),n("p",[t._v("subscription: "+t._s(t.statusSubscription))]),n("p",[t._v("id: "+t._s(t.productSubscription.id))]),n("p",[t._v("title: "+t._s(t.productSubscription.title))]),n("p",[t._v("state: "+t._s(t.productSubscription.state))]),n("p",[t._v("description: "+t._s(t.productSubscription.description))]),n("p",[t._v("price: "+t._s(t.productSubscription.price))]),t.productSubscription.canPurchase?n("b-button",{staticClass:"mt-2",attrs:{type:"is-primary",expanded:""},on:{click:function(e){return t.purchaseSubscribe()}}},[t._v("Subscribe")]):t._e()],1)])},b=[],f={name:"IPAConsumable",data:function(){return{product:{title:null,price:0,description:null},statusSubscription:"Loading...",productSubscription:{id:null,title:null,state:null,price:0,description:null,canPurchase:!1}}},created:function(){this.initStore()},methods:{initStore:function(){var t=this;try{if(!window.store)return void console.log("Store not available");store.verbosity=store.INFO,store.register([{id:"p001",type:store.CONSUMABLE},{id:"s001",type:store.PAID_SUBSCRIPTION}]),store.error((function(t){console.log("ERROR "+t.code+": "+t.message)})),store.when("p001").updated((function(e){t.product=e})),store.when("p001").approved((function(t){return t.verify()})).verified((function(t){return t.finish()})),store.when("s001").approved((function(t){return t.verify()})).verified((function(t){return t.finish()})).owned((function(t){return console.log("you now own ".concat(t.alias))})),store.when("subscription").updated((function(){t.productSubscription=store.get("s001"),t.statusSubscription="Please subscribe below",t.productSubscription.owned?t.statusSubscription="Subscribed":"approved"===t.productSubscription.state&&(t.statusSubscription="Processing...")})),store.refresh()}catch(e){alert(e)}},purchaseConsumable:function(){store.order("p001")},purchaseSubscribe:function(){store.order("s001")}}},v=f,_=(n("7d0f"),Object(a["a"])(v,d,b,!1,null,"a69b6298",null)),h=_.exports,m={name:"Home",components:{CopyPasteComponent:l,PurchaseComponent:h}},S=m,y=Object(a["a"])(S,o,s,!1,null,null,null);e["default"]=y.exports},f8b2:function(t,e,n){"use strict";n("abd7")}}]);
//# sourceMappingURL=chunk-4555c61e.88a23d49.js.map