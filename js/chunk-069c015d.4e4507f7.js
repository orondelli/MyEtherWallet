(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-069c015d"],{"82a3":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},r=[],i=(a("b680"),a("d3b7"),a("25f0"),a("96cf"),a("c964")),c=a("f3f3"),u=a("2f62"),o=a("901e"),d=a.n(o),l=function(e){return new d.a(e)},s={props:{ethPrice:{type:d.a,default:function(){return new d.a(0)}},makerActive:{type:Boolean,default:!1},cdps:{type:Array,default:function(){return[]}},availableCdps:{type:Object,default:function(){return{}}},cdpDetailsLoaded:{type:Boolean,default:!1}},data:function(){return{loaded:!1,wethToPethRatio:0,daiPrice:0,priceFloor:0,ethQty:0,daiQty:0,selectedCdp:"",cdp:{},eth:l(0),dai:l(0),debtValue:l(0),collatRatio:l(0),pethCollateral:l(0),usdCollateral:l(0),ethCollateral:l(0),ratio:null,isSafe:!1,maxDaiDraw:l(0),maxPethDraw:l(0),maxEthDraw:l(0)}},computed:Object(c["a"])({},Object(u["c"])("main",["account","gasPrice","web3","network","ens"]),{cdpOptions:function(){return this.availableCdps}}),mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.makerActive||e.$router.push({name:"Maker"});case 1:case"end":return t.stop()}}),t)})))()},methods:{openManage:function(e){this.$router.push({name:"manage",params:{cdpId:e}})},displayPercentValue:function(e){return d.a.isBigNumber(e)||(e=new d.a(e)),e.times(100).toString()},displayFixedValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return d.a.isBigNumber(e)||(e=new d.a(e)),e.toFixed(t).toString()}}},p=s,f=(a("f40d"),a("2877")),h=Object(f["a"])(p,n,r,!1,null,"705cc08c",null),m=h.exports;t["default"]=m},b5c2:function(e,t,a){},f40d:function(e,t,a){"use strict";var n=a("b5c2"),r=a.n(n);r.a}}]);
//# sourceMappingURL=chunk-069c015d.4e4507f7.js.map