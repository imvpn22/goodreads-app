(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(55)},35:function(e,t,a){},42:function(e,t){},44:function(e,t){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),s=a.n(o),c=(a(35),a(5)),i=a(6),l=a(8),u=a(7),h=a(9),p=a(3),m="LEFT",g="RIGHT",d=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e,r=[];n<=t;)r.push(n),n+=a;return r},b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).fetchPageNumbers=function(){var e=a.props.totalPages,t=a.props.currentPage,n=a.props.pageNeighbours,r=2*a.props.pageNeighbours+3;if(e>r+2){var o=Math.max(2,t-n),s=Math.min(e-1,t+n),c=d(o,s),i=o>2,l=e-s>1,u=r-(c.length+1);switch(!0){case i&&!l:var h=d(o-u,o-1);c=[m].concat(Object(p.a)(h),Object(p.a)(c));break;case!i&&l:var b=d(s+1,s+u);c=[].concat(Object(p.a)(c),Object(p.a)(b),[g]);break;case i&&l:default:c=[m].concat(Object(p.a)(c),[g])}return[1].concat(Object(p.a)(c),[e])}return d(1,e)},a.gotoPage=function(e){var t=Math.max(0,Math.min(e,a.props.totalPages));a.props.onPageChanged(t)},a.handleClick=function(e){return function(t){t.preventDefault(),a.gotoPage(e)}},a.handleMoveLeft=function(e){e.preventDefault(),a.gotoPage(a.props.currentPage-2*a.props.pageNeighbours-1)},a.handleMoveRight=function(e){e.preventDefault(),a.gotoPage(a.props.currentPage+2*a.props.pageNeighbours+1)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;if(!this.props.totalRecords||1===this.props.totalPages)return null;var t=this.props.currentPage,a=this.fetchPageNumbers();return r.a.createElement(n.Fragment,null,r.a.createElement("nav",{"aria-label":"Pagination"},r.a.createElement("ul",{className:"pagination"},a.map(function(a,n){return a===m?r.a.createElement("li",{key:n,className:"page-item"},r.a.createElement("button",{className:"page-link","aria-label":"Previous",onClick:e.handleMoveLeft},r.a.createElement("span",{"aria-hidden":"true"},"\xab"),r.a.createElement("span",{className:"sr-only"},"Previous"))):a===g?r.a.createElement("li",{key:n,className:"page-item"},r.a.createElement("button",{className:"page-link","aria-label":"Next",onClick:e.handleMoveRight},r.a.createElement("span",{"aria-hidden":"true"},"\xbb"),r.a.createElement("span",{className:"sr-only"},"Next"))):r.a.createElement("li",{key:n,className:"page-item".concat(t===a?" active":"")},r.a.createElement("button",{className:"page-link",onClick:e.handleClick(a)},a))}))))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).createBookView=function(e){return r.a.createElement("div",{className:"bookCard",key:e.id._text},r.a.createElement("img",{className:"bookImg",src:e.best_book.image_url._text,alt:e.best_book.title._text+" image"}),r.a.createElement("div",{className:"bookTitle"}," ",e.best_book.title._text," "),r.a.createElement("div",{className:"bookAuthor"}," ",e.best_book.author.name._text," "),r.a.createElement("div",{className:"bookRating"},r.a.createElement("i",{className:"fa fa-star"}),e.average_rating._text),r.a.createElement("div",{className:"bookOther"},"Based on ",e.ratings_count._text," Ratings and ",e.text_reviews_count._text," Reviews"))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t="No Books";return this.props.books&&this.props.books.length>0&&(t=this.props.books.map(function(t){return e.createBookView(t)})),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"header"},"Goodreads Book Search"),r.a.createElement("form",{className:"searchForm",onSubmit:function(t){return e.props.handleSubmit(t)}},r.a.createElement("div",{className:"searchBox"},r.a.createElement("input",{type:"text",placeholder:"Book name, author",value:this.props.queryText,onChange:function(t){return e.props.handleQuery(t)},required:!0,autoFocus:!0}),r.a.createElement("button",{type:"submit",value:"Search"},r.a.createElement("i",{className:this.props.isSearching?"fas fa-circle-notch fa-spin":"fas fa-search"}))),r.a.createElement("div",{className:"responseBox"},this.props.msg),r.a.createElement(b,{currentPage:this.props.currentPage,totalRecords:this.props.totalRecords,totalPages:this.props.totalPages,onPageChanged:this.props.onPageChanged,pageNeighbours:this.props.pageNeighbours})),r.a.createElement("div",{className:"bookList"},t))}}]),t}(n.Component),v=a(37),k="tmNs0wHYZNwx5cr20pTg",N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleQuery=function(e){var t=e.target.value;a.setState({queryText:t})},a.searchBook=function(){var e=a.state.queryText,t=a.state.currentPage,n="".concat("https://cors-anywhere.herokuapp.com/","https://www.goodreads.com/search.xml?key=").concat(k,"&q=").concat(e,"&page=").concat(t);fetch(n,{method:"GET",headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(e){return e.text()}).then(function(e){var t=v.xml2json(e,{compact:!0,spaces:0,trim:!0,nativeType:!0}),n=(t=JSON.parse(t)).GoodreadsResponse.search.results.work,r=parseInt(t.GoodreadsResponse.search["total-results"]._text),o=t.GoodreadsResponse.search["query-time-seconds"]._text,s="Fetched ".concat(r," results in ").concat(o," sec."),c=Math.ceil(r/20);a.setState({books:n,isSearching:!1,msg:s,totalRecords:r,totalPages:c})}).catch(function(e){console.log(e),a.setState({isSearching:!1,msg:"Some error occured"})})},a.handleSubmit=function(e){e.preventDefault(),a.searchBook(),a.setState({isSearching:!0})},a.onPageChanged=function(e){a.setState({currentPage:e,isSearching:!0},function(){return a.searchBook()})},a.state={books:[],queryText:"",isSearching:!1,currentPage:1,totalRecords:0,totalPages:0,pageNeighbours:2,msg:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(f,{queryText:this.state.queryText,books:this.state.books,handleQuery:this.handleQuery,searchBook:this.searchBook,handleSubmit:this.handleSubmit,isSearching:this.state.isSearching,msg:this.state.msg,currentPage:this.state.currentPage,totalPages:this.state.totalPages,totalRecords:this.state.totalRecords,onPageChanged:this.onPageChanged,pageNeighbours:this.state.pageNeighbours}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.1126f031.chunk.js.map