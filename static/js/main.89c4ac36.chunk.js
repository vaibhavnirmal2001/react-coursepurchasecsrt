(this["webpackJsonpcourse-purchase-cart"]=this["webpackJsonpcourse-purchase-cart"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),r=c(8),n=c.n(r),a=(c(13),c(2)),o=c(3),u=c(6),l=c(5),p=c.p+"static/media/logo.6ce24c58.svg",j=(c(14),c(4)),h=c(0),b=function(e){Object(u.a)(c,e);var t=Object(l.a)(c);function c(e){var s;return Object(a.a)(this,c),(s=t.call(this,e)).state={total:0},s.sumPrice=s.sumPrice.bind(Object(j.a)(s)),s}return Object(o.a)(c,[{key:"sumPrice",value:function(e){this.setState({total:this.state.total+e})}},{key:"render",value:function(){var e=this;console.log(this.props.items);var t=this.props.items.map((function(t,c){return Object(h.jsx)(d,{name:t.name,price:t.price,sumPrice:e.sumPrice,active:t.active},c)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"You can buy courses : "}),Object(h.jsxs)("div",{id:"courses",children:[t,Object(h.jsxs)("p",{id:"total",children:["Total: ",Object(h.jsx)("b",{children:this.state.total})]})]})]})}}]),c}(s.Component),d=function(e){Object(u.a)(c,e);var t=Object(l.a)(c);function c(e){var s;return Object(a.a)(this,c),(s=t.call(this,e)).state={active:!1},s.clicker=s.clicker.bind(Object(j.a)(s)),s}return Object(o.a)(c,[{key:"clicker",value:function(){var e=!this.state.active;this.setState({active:e}),this.props.sumPrice(e?this.props.price:-this.props.price)}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("p",{className:this.state.active?"active":"",onClick:this.clicker,children:[this.props.name," ",Object(h.jsx)("b",{children:this.props.price})]})})}}]),c}(s.Component),m=b,v=function(e){Object(u.a)(c,e);var t=Object(l.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:p,className:"App-logo",alt:"logo"}),Object(h.jsx)("p",{children:"Welcome To Course Purchase Page"})]}),Object(h.jsx)(m,{items:[{name:"Complete iOS10 dev course",price:199},{name:"Complete Javascript course",price:299},{name:"Complete Front-end dev course",price:180},{name:"Complete React dev course",price:190}]})]})}}]),c}(s.Component),O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),i(e),r(e),n(e)}))};n.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.89c4ac36.chunk.js.map