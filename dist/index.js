(()=>{"use strict";var e={783:(e,t)=>{function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"init",(function(e,t){for(var n=[],i=0;i<e;i+=1)n.push(new Array(t).fill(0));return n})),n(this,"isTurnValid",(function(e,t,n){return 0===e[t][n]})),n(this,"setValue",(function(e,t,n,i){e[t][n]=i+1})),n(this,"checkDraw",(function(e){return e.slice().flat().every((function(e){return 0!==e}))}))}},22:function(e,t,n){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(c,e);var t,n,i=(t=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,i=s(t);if(n){var r=s(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return o(this,e)});function c(){var e;r(this,c);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return l(u(e=i.call.apply(i,[this].concat(n))),"getName",(function(){return"TicTacToe"})),l(u(e),"checkWin",(function(e){var t=e.slice().flat();return[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].some((function(e){return t[e[0]]&&t[e[0]]===t[e[1]]&&t[e[1]]===t[e[2]]}))?1:-1})),l(u(e),"setPlayerToken",(function(e){var t=["X","O"];return e.slice().map((function(e,n){return{name:e,sign:t[n]}}))})),e}return c}(c(n(783)).default);t.default=f},820:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(324)),a=i(n(279)),o=i(n(22)),u=new a.default(["player One","player Two"],new o.default,{x:3,y:3});new r.default(u).render(".main")},485:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=void 0,(n="size")in this?Object.defineProperty(this,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):this.size=i,this.size=t}},279:function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(n(485)),s=o(n(969)),l=function(){function e(t,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{size:{x:1,y:1}},l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],f=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,h=arguments.length>8&&void 0!==arguments[8]&&arguments[8],v=arguments.length>9&&void 0!==arguments[9]?arguments[9]:-1,y=arguments.length>10&&void 0!==arguments[10]?arguments[10]:new s.default,p=arguments.length>11&&void 0!==arguments[11]?arguments[11]:new s.default;i(this,e),a(this,"playersList",void 0),a(this,"strategy",void 0),a(this,"fieldSize",void 0),a(this,"field",void 0),a(this,"players",void 0),a(this,"board",void 0),a(this,"turn",void 0),a(this,"currentPlayerIndex",void 0),a(this,"isFinished",void 0),a(this,"winnerId",void 0),a(this,"updateCellEvent",void 0),a(this,"winEvent",void 0),this.playersList=t,this.strategy=n,this.fieldSize=r,this.field=o,this.players=l,this.board=c,this.turn=f,this.currentPlayerIndex=d,this.isFinished=h,this.winnerId=v,this.updateCellEvent=y,this.winEvent=p,this.players=this.strategy.setPlayerToken(t),this.field=new u.default(this.fieldSize),this.board=this.strategy.init(this.field.size.x,this.field.size.y)}var t,n;return t=e,(n=[{key:"makeMove",value:function(e){var t=e.x,n=e.y;if(this.strategy.isTurnValid(this.board,t,n)){this.isFinished||(this.strategy.setValue(this.board,t,n,this.currentPlayerIndex+1),this.updateCellEvent.trigger({x:t,y:n,sign:this.players[this.currentPlayerIndex].sign}));var i=this.strategy.checkWin(this.board),r=this.strategy.checkDraw(this.board);i>0||r?(this.winnerId=this.currentPlayerIndex+1,this.isFinished=!0,r&&this.winEvent.trigger("no one"),i>0&&this.winEvent.trigger(this.players[this.currentPlayerIndex].name),this.clearBoard()):this.updateTurnAndNextPlayer()}}},{key:"updateTurnAndNextPlayer",value:function(){this.currentPlayerIndex=(this.turn+1)%this.players.length,this.turn+=1}},{key:"clearBoard",value:function(){for(var e=0;e<this.field.size.x;e+=1)for(var t=0;t<this.field.size.y;t+=1)this.board[e][t]=0;this.isFinished=!1,this.turn=0,this.currentPlayerIndex=0,this.winnerId=-1}}])&&r(t.prototype,n),e}();t.default=l},969:(e,t)=>{function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];n(this,e),r(this,"listeners",void 0),this.listeners=t}var t,a;return t=e,(a=[{key:"addListener",value:function(e){this.listeners.push(e)}},{key:"trigger",value:function(e){this.listeners.forEach((function(t){t(e)}))}}])&&i(t.prototype,a),e}();t.default=a},928:function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(n(969)),s=function(){function e(t,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new u.default,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:document.createElement("h2");i(this,e),a(this,"x",void 0),a(this,"y",void 0),a(this,"board",void 0),a(this,"playEvent",void 0),a(this,"resultMessage",void 0),a(this,"updateCell",(function(e){r.board[e.x][e.y].innerHTML=e.sign})),this.x=t,this.y=n,this.board=o,this.playEvent=s,this.resultMessage=l}var t,n;return t=e,(n=[{key:"generateField",value:function(){var e=this,t=document.createElement("table");t.className="table-bordered";for(var n=0,i=function(i){var r=t.insertRow();e.board[i]=[];for(var a=function(t){var a=r.insertCell();e.board[i].push(a),a.className="cell",a.id="".concat(n+=1),a.tabIndex=1,a.addEventListener("click",(function(){e.playEvent.trigger({x:i,y:t})}))},o=0;o<e.y;o+=1)a(o)},r=0;r<this.x;r+=1)i(r);return t}},{key:"renderField",value:function(e){var t=document.querySelector(e),n=this.generateField();null==t||t.append(n),null==t||t.append(this.resultMessage)}},{key:"clearField",value:function(){this.board.forEach((function(e){e.forEach((function(e){e.textContent=""}))}))}},{key:"showWin",value:function(e){this.resultMessage.innerHTML="".concat(e," win"),this.clearField()}}])&&r(t.prototype,n),e}();t.default=s},324:function(e,t,n){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=o(n(928)),s=o(n(950)),l=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new u.default(t.field.size.x,t.field.size.y),o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new s.default;i(this,e),a(this,"game",void 0),a(this,"view",void 0),a(this,"players",void 0),this.game=t,this.view=r,this.players=o,this.view.playEvent.addListener((function(e){return n.game.makeMove(e)})),this.game.updateCellEvent.addListener((function(e){return n.view.updateCell(e)})),this.game.winEvent.addListener((function(e){return n.view.showWin(e)}))}var t,n;return t=e,(n=[{key:"render",value:function(e){this.view.renderField(e),this.players.renderPlayer(this.game.players)}}])&&r(t.prototype,n),e}();t.default=l},950:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(){var t,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=function(e){var t=document.querySelector(".main");e.forEach((function(e,n){return null==t?void 0:t.insertAdjacentHTML("beforeend",'<h3 class="player-name">Player '.concat(n+1,": ").concat(e.name,"</h3></div>"))}))},(t="renderPlayer")in this?Object.defineProperty(this,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[t]=n}}},t={};!function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}(820)})();