(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(9),c=a.n(i),s=(a(15),a(1)),r=a(2),d=a(4),o=a(3),u=a(7),m=a(5),h=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("input",{className:"btn btn-light m-1 border round-4 square",type:"button",style:{display:"block"},onClick:this.props.onclick,disabled:this.props.disabled,id:this.props.id}))}}]),a}(l.a.Component),y=a(6),p=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={player1:"X",player2:"O",player1Turn:!0,display:"none",displayP1Won:"none",displayP2Won:"none",displayDraw:"none",displayRESTART:"none",clickedBtns:[],checkedBtnPlayer1:[],checkedBtnPlayer2:[],disabled:!1,winner:!1,winningLines:[["0","1","2"],["3","4","5"],["6","7","8"],["0","3","6"],["1","4","7"],["2","5","8"],["0","4","8"],["2","4","6"]]},e.handleClick=e.handleClick.bind(Object(m.a)(e)),e.checkIfWinP1=e.checkIfWinP1.bind(Object(m.a)(e)),e.checkIfWinP2=e.checkIfWinP2.bind(Object(m.a)(e)),e.handleReset=e.handleReset.bind(Object(m.a)(e)),e}return Object(r.a)(a,[{key:"checkIfWinP2",value:function(){var e=this;this.state.winningLines.map(function(t){var a=t.every(function(t){return e.state.checkedBtnPlayer2.includes(t)});if(!0===a){e.setState({displayP2Won:"initial",displayRESTART:"initial",displayDraw:"none",winner:!0});for(var n=function(e){var a=t[e];document.querySelectorAll("input").forEach(function(e){e.id===a&&(e.style.background="rgba(26, 175, 73, 0.5)")})},l=0;l<t.length;l++)n(l);return console.log(" Bravo ! Player 2 a gagn\xe9 ",a)}return null})}},{key:"checkIfWinP1",value:function(){var e=this;this.state.winningLines.map(function(t){var a=t.every(function(t){return e.state.checkedBtnPlayer1.includes(t)});if(!0===a){e.setState({displayP1Won:"initial",displayRESTART:"initial",displayDraw:"none",winner:!0});for(var n=function(e){var a=t[e];document.querySelectorAll("input").forEach(function(e){e.id===a&&(e.style.background="rgba(175, 26, 26, 0.4)")})},l=0;l<t.length;l++)n(l);return console.log(" Bravo ! Player 1 a gagn\xe9 ",a)}return null})}},{key:"handleClick",value:function(e){var t=this;if(""!==e.target.value)return this.setState({display:"initial"},function(){setTimeout(function(){t.setState({display:"none"})},1900)});if(!1===this.state.player1Turn){var a=[].concat(Object(u.a)(this.state.checkedBtnPlayer2),[e.target.id]);this.setState({player1Turn:!0},function(){t.setState({checkedBtnPlayer2:a},function(){console.log("test Array player2: ",t.state.checkedBtnPlayer2),e.target.value=t.state.player2,e.target.className="styleO m-1 border",t.checkIfWinP2()})})}else if(!0===this.state.player1Turn){var n=[].concat(Object(u.a)(this.state.checkedBtnPlayer1),[e.target.id]);this.setState({player1Turn:!1},function(){t.setState({checkedBtnPlayer1:n},function(){console.log("test Array player1: ",t.state.checkedBtnPlayer1),e.target.value=t.state.player1,e.target.className="styleX m-1 border",t.checkIfWinP1()})})}var l=this.state.clickedBtns;l.push(e.target.id),this.setState({clickedBtns:l}),9===this.state.clickedBtns.length&&!1===this.state.winner&&(this.setState({displayRESTART:"initial",displayDraw:"initial"}),console.log("match nul"))}},{key:"componentDidUpdate",value:function(e,t){t.winner!==this.state.winner&&!0===this.state.winner&&this.setState({disabled:!0})}},{key:"handleReset",value:function(){this.setState({disabled:!1}),document.querySelectorAll("input").forEach(function(e){"RESET"!==e.value&&"RESTART"!==e.value&&(e.value="",e.style.background="transparent")}),this.setState({checkedBtnPlayer1:[],checkedBtnPlayer2:[],clickedBtns:[],player1Turn:!0,winner:!1}),this.setState({displayP2Won:"none",displayP1Won:"none",displayDraw:"none",displayRESTART:"none"}),console.log("RESET")}},{key:"render",value:function(){return l.a.createElement("section",{className:"container-lg "},l.a.createElement("h1",{className:"title text-center display-2"},"T",l.a.createElement("span",{className:"span-title"},"i"),"c T",l.a.createElement("span",{className:"span-title-red"},"a"),"c ",l.a.createElement("span",{className:"span-bg-black"}," Toe")),l.a.createElement("div",{className:"row justify-content-center "},l.a.createElement("div",{className:"col-lg-2 col-md-6  order-1 order-lg-1 rounded p-3 text-center m-2 d-flex flex-column justify-content-center align-items-center"},this.state.player1Turn?l.a.createElement("p",null,"Your turn ",l.a.createElement("span",{className:"red"},"Player1")," : ",l.a.createElement("span",{className:"span-title-red "},"X")):l.a.createElement("p",null,"Your turn ",l.a.createElement("span",{className:"green"},"Player2")," :",l.a.createElement("span",{className:"span-title"},"O")),l.a.createElement("input",{className:"btn btn-dark m-1 col-lg-12 col-md-6 col-sm-6 col-6",type:"reset",value:"RESET",onClick:this.handleReset})),l.a.createElement("div",{className:"col-lg-5 col-md-6  order-3 order-lg-3 rounded p-3 m-2  d-flex flex-column  justify-content-center align-items-center"},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(h,{onclick:this.handleClick,id:"0",disabled:this.state.disabled}),l.a.createElement(h,{onclick:this.handleClick,id:"1",disabled:this.state.disabled}),l.a.createElement(h,{onclick:this.handleClick,id:"2",disabled:this.state.disabled})),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(h,{onclick:this.handleClick,id:"3",disabled:this.state.disabled}),l.a.createElement(h,{onclick:this.handleClick,id:"4",disabled:this.state.disabled}),l.a.createElement(h,{onclick:this.handleClick,id:"5",disabled:this.state.disabled})),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(h,{onclick:this.handleClick,id:"6",disabled:this.state.disabled}),l.a.createElement(h,{onclick:this.handleClick,id:"7",disabled:this.state.disabled}),l.a.createElement(h,{onclick:this.handleClick,id:"8",disabled:this.state.disabled}))),l.a.createElement("div",{className:"col-lg-2 col-md-6 order-3 order-lg-3 rounded p-3 m-2 d-flex flex-column justify-content-center align-items-center"},l.a.createElement("p",{style:{display:this.state.displayP2Won}},"Player 2 won !!"),l.a.createElement("p",{style:{display:this.state.displayP1Won}},"Player 1 won !!"),l.a.createElement("p",{style:{display:this.state.displayDraw}},"It's a draw... Play again?"),l.a.createElement("input",{className:"btn m-1 col-lg-12 col-md-6 col-sm-6 col-6 btn-danger",style:{display:this.state.displayRESTART},type:"button",value:"RESTART",onClick:this.handleReset}))),l.a.createElement("div",{className:"row div-warning"},l.a.createElement("p",{className:"warning align-center",style:{display:this.state.display}},"Box already ticked ! Please, select another one.")),l.a.createElement("div",{className:"row div-concats"},l.a.createElement("p",{className:"align-center concats"}," \xa9 Made by Les Concats",l.a.createElement("br",null),l.a.createElement(y.a,{icon:"emojione:cat-face",inline:!0,className:"cat"}),l.a.createElement(y.a,{icon:"emojione:cat-face",inline:!0,className:"cat"}),l.a.createElement(y.a,{icon:"emojione:cat-face",inline:!0,className:"cat"}),l.a.createElement(y.a,{icon:"emojione:cat-face",inline:!0,className:"cat"}))))}}]),a}(l.a.Component),f=(a(16),a(17),function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"container mt-4"},l.a.createElement(p,null))}}]),a}(l.a.Component)),b=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),i(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),b()}},[[10,1,2]]]);
//# sourceMappingURL=main.314067db.chunk.js.map