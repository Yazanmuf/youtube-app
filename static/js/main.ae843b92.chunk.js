(this["webpackJsonpyoutube-api"]=this["webpackJsonpyoutube-api"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),l=a(8),i=a.n(l),o=a(16),m=a(2),d=a(3),u=a(5),p=a(4),h=a(6),b=a(17),v=a.n(b).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyAQdqe1kV7HZBHWeRLO_6o_HI48qbL5XbQ"}}),f=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.handleChange=function(e){a.setState({term:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.term)},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"mt-3",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search the most popular videos",value:this.state.term,onChange:this.handleChange}),r.a.createElement("button",{type:"submit",className:"btn btn-primary mt-2"},"Submit")))}}]),t}(r.a.Component),y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).whenSelected=function(){a.props.onSelect(a.props.data)},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.data,t=(e.id,e.snippet);return r.a.createElement("div",{className:"card m-2 p-2",style:{width:"18rem"}},r.a.createElement("img",{src:t.thumbnails.high.url,class:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.title),r.a.createElement("button",{className:"btn btn-primary",onClick:this.whenSelected},"Select Video")))}}]),t}(r.a.Component),E=function(e){var t=e.listOfVideos,a=e.onSelect,n=t.map((function(e){return r.a.createElement(y,{key:e.etag,data:e,onSelect:a})}));return r.a.createElement("div",{className:"mt-3"},n)},S=function(e){var t=e.video;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card m-2",style:{width:"40rem"}},r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{title:"embedded video",class:"embed-responsive-item",src:"https://www.youtube.com/embed/".concat(t.id.videoId),allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.snippet.title),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},t.snippet.description))))},g=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={videoList:[],selectedVideo:null},a.handleSearch=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,v.get("/search",{params:{q:t,kind:"video"}});case 3:n=e.sent,a.setState({videoList:n.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleSelect=function(e){a.setState({selectedVideo:e})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return console.log(this.state.selectedVideo,"video ID"),r.a.createElement("div",{className:"container "},r.a.createElement("h2",{className:"mt-3"},"Youtube Searcher"),r.a.createElement(f,{onSubmit:this.handleSearch}),this.state.selectedVideo?r.a.createElement(S,{video:this.state.selectedVideo}):r.a.createElement("div",null,"Select a video to play"),r.a.createElement(E,{listOfVideos:this.state.videoList,onSelect:this.handleSelect}))}}]),t}(r.a.Component);s.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ae843b92.chunk.js.map