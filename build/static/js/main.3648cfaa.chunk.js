(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a(1),s=a(2),i=a(4),o=a(3),u=a(5),m=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.list;console.log(e);var t=[],a=r.a.createElement("button",{className:"btn btn-dark float-right"},"Show it");for(var n in e)if(e[n].length>0){var c=e[n].map(function(e){return r.a.createElement("li",{key:e.toString(),className:"list-group-item"},e,a)}),l=r.a.createElement("li",{className:"list-group-item",key:n.toString()},r.a.createElement("span",{className:""},n+":")," ",r.a.createElement("br",null),r.a.createElement("ul",{className:"list-group"},c));t.push(l)}else{var s=r.a.createElement("li",{key:n.toString(),className:"list-group-item"},n,a);t.push(s)}return r.a.createElement("ul",{className:"list-group"},t)}}]),t}(n.Component),p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.list;return r.a.createElement("div",{className:"card",style:{width:"60%",margin:"0 auto",height:"65vh",overflow:"scroll"}},r.a.createElement(m,{list:e}))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.name;return r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link btn btn-lg",href:"#"+e.split(" ").join(""),style:{color:"white",fontSize:"45px",background:"rgba(120, 120, 120, 0.6)",margin:"0 10px",fontFamily:"Roboto"}},e,r.a.createElement("span",{className:"sr-only"},"(current)")))}}]),t}(n.Component),h=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron navbar navbar-expand-lg bg-light",style:{background:'url("https://apdt.com/wp-content/themes/apdt/img/hero10.jpg") no-repeat 0 60%',backgroundSize:"110%"}},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement(b,{name:"Dogs List"}),r.a.createElement(b,{name:"Current Dog"}))))}}]),t}(n.Component),v=(a(14),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.list;return r.a.createElement("div",{className:"container"},r.a.createElement(h,null),r.a.createElement(p,{list:e}))}}]),t}(n.Component));fetch("https://dog.ceo/api/breeds/list/all").then(function(e){return e.json()}).then(function(e){Object(c.render)(r.a.createElement(v,{list:e.message}),document.getElementById("root"))})},8:function(e,t,a){e.exports=a(16)}},[[8,2,1]]]);
//# sourceMappingURL=main.3648cfaa.chunk.js.map