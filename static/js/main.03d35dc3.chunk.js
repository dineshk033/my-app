(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){e.exports=t(43)},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var r=t(5),n=t(6),l=t(8),c=t(7),i=t(9),o=t(0),s=t.n(o),m=t(21),u=t(4),p=t(11),d=t(26),h=t(18),g=[{id:"1",Name:"Grand Prime",Brand:"Samsung",Price:"12533",Color:"silver",desc:"A phone that captures the world, just the way you see it - that\u2019s how you will describe your tryst with the Samsung Galaxy A7 smartphone whose 8 MP 120-degree Ultra Wide Lens pave the way for gorgeous, unrestricted wide-angle pictures.",Avatar:"https://rukminim1.flixcart.com/image/832/832/jmgmmq80/mobile/r/z/z/samsung-galaxy-a7-sm-a750fzkhins-original-imaf9d35udmkv2rg.jpeg?q=70",Seller:"Capgemini Retailer",qty:1},{id:"2",Name:"iPhone 7",Brand:"Apple",Price:"35984",Color:"Black",desc:"Take your iPhone experience to the next level with iPhone 7. Featuring new camera systems, a better battery-life, an efficient processor and powerful stereo speakers, this smartphone will drastically enhance your iPhone experience.",Avatar:"https://rukminim1.flixcart.com/image/832/832/mobile/7/e/e/apple-iphone-7-na-original-imaemzee435f9gpu.jpeg?q=70",Seller:"CloudTail Retailer",qty:1},{id:"3",Name:"Redmi Note Pro 6",Brand:"Redmi",Price:"25042",Color:"Red",desc:"Say hello to Redmi Note 6 Pro - Xiaomi's first smartphone that boasts an AI-powered quad-camera. Now enjoy a smart camera experience with the AI Scene Detection feature. It helps your camera understand what it is looking at and enhances the picture automatically.",Avatar:"https://rukminim1.flixcart.com/image/832/832/jog2nbk0/mobile/d/j/d/mi-redmi-e7t-na-original-imafazxhztrw9gnr.jpeg?q=70",Seller:"MIStore Retailer",qty:1},{id:"4",Name:"Grand Prime",Brand:"Samsung",Price:"12533",Color:"silver",desc:"A phone that captures the world, just the way you see it - that\u2019s how you will describe your tryst with the Samsung Galaxy A7 smartphone whose 8 MP 120-degree Ultra Wide Lens pave the way for gorgeous, unrestricted wide-angle pictures.",Avatar:"https://rukminim1.flixcart.com/image/832/832/jmgmmq80/mobile/r/z/z/samsung-galaxy-a7-sm-a750fzkhins-original-imaf9d35udmkv2rg.jpeg?q=70",Seller:"Capgemini Retailer",qty:1},{id:"5",Name:"iPhone 7",Brand:"Apple",Price:"35984",Color:"Black",desc:"Take your iPhone experience to the next level with iPhone 7. Featuring new camera systems, a better battery-life, an efficient processor and powerful stereo speakers, this smartphone will drastically enhance your iPhone experience.",Avatar:"https://rukminim1.flixcart.com/image/832/832/mobile/7/e/e/apple-iphone-7-na-original-imaemzee435f9gpu.jpeg?q=70",Seller:"CloudTail Retailer",qty:1},{id:"6",Name:"Redmi Note Pro 6",Brand:"Redmi",Price:"25042",Color:"Red",desc:"Say hello to Redmi Note 6 Pro - Xiaomi's first smartphone that boasts an AI-powered quad-camera. Now enjoy a smart camera experience with the AI Scene Detection feature. It helps your camera understand what it is looking at and enhances the picture automatically.",Avatar:"https://rukminim1.flixcart.com/image/832/832/jog2nbk0/mobile/d/j/d/mi-redmi-e7t-na-original-imafazxhztrw9gnr.jpeg?q=70",Seller:"MIStore Retailer",qty:1},{id:"7",Name:"Grand Prime",Brand:"Samsung",Price:"12533",Color:"silver",desc:"A phone that captures the world, just the way you see it - that\u2019s how you will describe your tryst with the Samsung Galaxy A7 smartphone whose 8 MP 120-degree Ultra Wide Lens pave the way for gorgeous, unrestricted wide-angle pictures.",Avatar:"https://rukminim1.flixcart.com/image/832/832/jmgmmq80/mobile/r/z/z/samsung-galaxy-a7-sm-a750fzkhins-original-imaf9d35udmkv2rg.jpeg?q=70",Seller:"Capgemini Retailer",qty:1},{id:"8",Name:"iPhone 7",Brand:"Apple",Price:"35984",Color:"Black",desc:"Take your iPhone experience to the next level with iPhone 7. Featuring new camera systems, a better battery-life, an efficient processor and powerful stereo speakers, this smartphone will drastically enhance your iPhone experience.",Avatar:"https://rukminim1.flixcart.com/image/832/832/mobile/7/e/e/apple-iphone-7-na-original-imaemzee435f9gpu.jpeg?q=70",Seller:"CloudTail Retailer",qty:1},{id:"9",Name:"Redmi Note Pro 6",Brand:"Redmi",Price:"25042",Color:"Red",desc:"Say hello to Redmi Note 6 Pro - Xiaomi's first smartphone that boasts an AI-powered quad-camera. Now enjoy a smart camera experience with the AI Scene Detection feature. It helps your camera understand what it is looking at and enhances the picture automatically.",Avatar:"https://rukminim1.flixcart.com/image/832/832/jog2nbk0/mobile/d/j/d/mi-redmi-e7t-na-original-imafazxhztrw9gnr.jpeg?q=70",Seller:"MIStore Retailer",qty:1}],E=Object(p.b)({ProductSFetch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return(arguments.length>1?arguments[1]:void 0).type,e},ComparisonProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;if("SELECT_COMPARE"===a.type){if(e.length>1)return alert("More than two comparison not allowed"),e;var t=g.filter(function(e){return e.id==a.payload});return[].concat(Object(h.a)(e),[t[0]])}return"DESELECT_COMPARE"===a.type?(console.log(a),e.filter(function(e){return e.id!==a.payload})):e},cartStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"Add":var t=e.find(function(e){return e.id===a.payload});if(void 0!==t){var r=Object(d.a)({},t,{qty:t.qty+1});return e.map(function(e){return e.id===t.id?r:e})}var n=g.find(function(e){return e.id==a.payload});return[].concat(Object(h.a)(e),[n]);case"Delete":return console.log("deleter",a.payload),e.filter(function(e){return e.id!==a.payload});default:return e}}}),y=t(46),b=t(45),v=(t(37),t(47));t(38);var f=Object(u.b)(null,{cartAdd:function(e){return{type:"Add",payload:e}}})(function(e){var a=e.list;return console.log("product",e),s.a.createElement("div",{className:"card borderStyle"},s.a.createElement("img",{src:a.Avatar,className:"card-img-top imgstyle",alt:"..."}),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},s.a.createElement("strong",null,a.Name)),s.a.createElement("p",{className:"card-text"},s.a.createElement("b",null,"Rs. ",a.Price)),s.a.createElement("p",{className:"card-text text-success"},s.a.createElement("b",null,a.Brand," | ",a.Color)),s.a.createElement("p",{class:"card-text text-primary"},s.a.createElement("input",{type:"checkbox",name:a.id,checked:e.checked,value:a.id,onClick:e.changeHandle}),"Add to compare"),s.a.createElement("p",{className:"card-text"},s.a.createElement("small",{class:"text-muted"},"Seller By ",a.Seller))),s.a.createElement("div",{className:"card-footer foot"},s.a.createElement("button",{className:"btn btn-warning btn-lg btn-block",onClick:function(){e.cartAdd(a.id)}},"Add to cart")))}),N=(t(39),t(44));var w=function(e){return s.a.createElement(N.a,{to:"/compare"},s.a.createElement("button",{class:"btn btn-primary",type:"button"},"Compare ",s.a.createElement("span",{class:"badge"},e.count)))},x=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(i)))).CompareProd=function(e){e.target.checked?t.props.dispatch({type:"SELECT_COMPARE",payload:e.target.value}):t.props.dispatch({type:"DESELECT_COMPARE",payload:e.target.value})},t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this;console.log("Render",this.props);var a=this.props.ComparisonProduct.length>0?s.a.createElement("div",{className:"cmpFoot"},s.a.createElement(w,{count:this.props.ComparisonProduct.length})):null,t=this.props.ProductSFetch.map(function(a){var t=e.props.ComparisonProduct.filter(function(e){return e.id===a.id});return s.a.createElement("div",{key:a.id,className:"col-sm-4 col-md-3 marginStyle"},s.a.createElement(f,{list:a,checked:!!t.length,changeHandle:e.CompareProd}))});return s.a.createElement("div",{className:"row "},t,a)}}]),a}(s.a.Component),j=Object(v.a)(Object(u.b)(function(e){return e})(x)),P=(t(41),function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this,a=0,t=0,r=this.props.cartStore.map(function(r){return a+=r.Price*r.qty,t+=r.qty,s.a.createElement("div",{className:"list-group-item ",key:r.id},s.a.createElement("div",{className:"pull-right"},s.a.createElement("img",{src:r.Avatar,alt:"mobile",style:{height:"75px",width:"50px"}})),s.a.createElement("div",{className:"list-group-item-heading "},s.a.createElement("p",{className:"text-info"},s.a.createElement("strong",null,r.Name)," ",s.a.createElement("small",null,r.Color,",",r.Brand)),s.a.createElement("p",null,"Seller: Cloud"),s.a.createElement("span",{className:"text-success"},s.a.createElement("strong",null,"Rs.",r.Price*r.qty," ")),s.a.createElement("span",null," Qty:",r.qty),s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{type:"button",className:"btn btn-danger  btnStyle",onClick:function(){e.props.cartDel(r.id)}},"Delete"),s.a.createElement("button",{type:"button",className:"btn btn-warning btnStyle",onClick:function(){e.props.cartDel(r.id)}},"Save For Later"))))});return 0===this.props.cartStore.length?s.a.createElement("div",{className:"alert alert-danger"},"Cart is empty!"):s.a.createElement("div",{className:"col-md-5 col-sm-6 col-sm-offset-3 col-md-offset-3"},s.a.createElement("h4",{className:"text-center"},"My Cart "),s.a.createElement("div",{className:"list-group "},r),s.a.createElement("div",{className:"panel panel-default"},s.a.createElement("div",{className:"panel-body"},s.a.createElement("p",null,"Price(",t," items)",s.a.createElement("span",{className:"pull-right"},"Rs.",a)),a>4e4?s.a.createElement("p",null,"Delivery Fee",s.a.createElement("span",{className:"pull-right"},"Rs.0")):s.a.createElement("p",null,"Delivery Fee",s.a.createElement("span",{className:"pull-right"},"Rs.50"))),s.a.createElement("div",{className:"panel-footer"},s.a.createElement("p",null,"Total Amount",s.a.createElement("span",{className:"pull-right"},"Rs.",a>4e4?a:a+50))),s.a.createElement("div",{className:"text-center sticky"},s.a.createElement("p",null,s.a.createElement("button",{className:"btn btn-success "},"Proceed to payment ->")))))}}]),a}(s.a.Component)),C=Object(v.a)(Object(u.b)(function(e){return console.log(e),e},{cartDel:function(e){return{type:"Delete",payload:e}}})(P));var k=function(e){return s.a.createElement("nav",{className:"navbar navbar-light bg-success  navbar-fixed-top"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"navbar-header"},s.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"true"},s.a.createElement("span",{className:"sr-only"},"Toggle navigation"),s.a.createElement("span",{className:"icon-bar"}),s.a.createElement("span",{className:"icon-bar"}),s.a.createElement("span",{className:"icon-bar"})),s.a.createElement(N.a,{className:"navbar-brand",to:"/"},"E-Commerce App")),s.a.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},s.a.createElement("ul",{className:"nav navbar-nav"},s.a.createElement("li",{className:"active"},s.a.createElement(N.a,{to:"/my-app"}," Home")),s.a.createElement("li",null," ",s.a.createElement(N.a,{to:"/compare"}," Compare"))),s.a.createElement("ul",{className:"nav navbar-nav navbar-right"},s.a.createElement("li",null,s.a.createElement(N.a,{to:"/cart"}," Cart"),s.a.createElement("div",{className:"dropdown-menu"},s.a.createElement(C,null))),s.a.createElement("li",null,s.a.createElement(N.a,{to:"/login"}," Login"))))))},S=(t(42),function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(e){var a=this.props.ComparisonProduct[0],t=this.props.ComparisonProduct[1];return console.log("compare",void 0===a),s.a.createElement("div",{className:"row "},void 0===a&&void 0===t?s.a.createElement("div",{class:"alert alert-danger",role:"alert"},s.a.createElement("span",{class:"glyphicon glyphicon-exclamation-sign","aria-hidden":"true"}," "),s.a.createElement("span",{class:"sr-only"},"Error: "),"No Mobile is selected"):null,a&&s.a.createElement("div",{className:"col-sm-5 col-sm-offset-1 col-md-4 col-md-offset-2 thumbnail"},s.a.createElement("img",{style:{height:"200px"},src:a.Avatar,alt:a.Name}),s.a.createElement("div",{className:"caption"},s.a.createElement("h3",null,a.Name," ",s.a.createElement("small",null,a.Brand)),s.a.createElement("p",{className:"text-success"},"Rs. ",a.Price),s.a.createElement("hr",null),s.a.createElement("ul",{className:"list-group"},s.a.createElement("li",{className:"list-group-item"},a.id),s.a.createElement("li",{className:"list-group-item"},a.Price),s.a.createElement("li",{className:"list-group-item"},a.Color),s.a.createElement("li",{className:"list-group-item"},a.Seller),s.a.createElement("li",{className:"list-group-item"},a.desc)))),t&&s.a.createElement("div",{className:"col-sm-5 col-md-4  thumbnail"},s.a.createElement("img",{style:{height:"200px"},src:t.Avatar,alt:t.Name}),s.a.createElement("div",{className:"caption"},s.a.createElement("h3",null,t.Name," ",s.a.createElement("small",null,t.Brand)),s.a.createElement("p",{className:"text-success"},"Rs. ",t.Price),s.a.createElement("hr",null),s.a.createElement("ul",{className:"list-group"},s.a.createElement("li",{className:"list-group-item"},t.id),s.a.createElement("li",{className:"list-group-item"},t.Price),s.a.createElement("li",{className:"list-group-item"},t.Color),s.a.createElement("li",{className:"list-group-item"},t.Seller),s.a.createElement("li",{className:"list-group-item"},t.desc)))))}}]),a}(o.Component)),A=Object(v.a)(Object(u.b)(function(e){return console.log(e),e})(S)),O=function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(l.a)(this,Object(c.a)(a).call(this))).state={name:"React"},e}return Object(i.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(y.a,null,s.a.createElement("div",{className:"container"},s.a.createElement(k,null),s.a.createElement("switch",null,s.a.createElement(b.a,{path:"/compare",exact:!0,component:A}),s.a.createElement(b.a,{path:"/my-app",exact:!0,component:j}),s.a.createElement(b.a,{path:"/cart",exact:!0,component:C}))))}}]),a}(o.Component);Object(m.render)(s.a.createElement(u.a,{store:Object(p.c)(E)},s.a.createElement(O,null)," "),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.03d35dc3.chunk.js.map