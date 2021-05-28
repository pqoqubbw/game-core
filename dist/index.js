/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/field.ts":
/*!**********************!*\
  !*** ./src/field.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Field = function Field(size) {
  _classCallCheck(this, Field);

  this.size = size;
};

exports.default = Field;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

 // import Field from './field';
// import Player from './player';
// import TicTacToe from './ticTacToe';
// import FieldView from './view/field';
// import PlayerView from './view/player';

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var field_1 = __importDefault(__webpack_require__(/*! ./field */ "./src/field.ts"));

var Game_1 = __importDefault(__webpack_require__(/*! ./model/Game */ "./src/model/Game.ts"));

var player_1 = __importDefault(__webpack_require__(/*! ./player */ "./src/player.ts")); // // eslint-disable-next-line @typescript-eslint/no-unused-vars
// // const field = new FieldView(3, 3).renderField();
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const fieldView = new FieldView(3, 4).renderField();
// const players = new PlayerView(['X', 'O']).renderPlayer();
// const cells = document.querySelectorAll('.cell');
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const tictac = new TicTacToe();
// // //////////////
// // const field = new Field({ x: 3, y: 4 });
// // const playerArray = [new Player({ value: 'X' }), new Player({ value: 'Y' })];
// // console.log(playerArray);
// // const game = new Game({
// //   field: new Field({ x: 3, y: 4 }),
// //   players: [new Player({ value: 'X' }), new Player({ value: 'Y' })],
// //   Strategy: TicTacToe,
// // });
// // new HTMLGameView({game});
// // //
// class Game {
//   constructor({ field, players, Strategy }) {
//     this.strategy = new Strategy({
//       field,
//       players,
//       game: this,
//     });
//   }
// }
// // class GameView {
// //     ...,
// //     cell.onClick(() => {
// //         this.field.setValue({x, y, "x"});
// //     });
// // }


var game1 = new Game_1["default"]({
  field: new field_1["default"]({
    x: 3,
    y: 3
  }),
  players: [new player_1["default"]({
    value: 'O'
  }), new player_1["default"]({
    value: 'R'
  })],
  Strategy: 'TicTacToe'
});
game1.init();
console.log(game1);

/***/ }),

/***/ "./src/model/Game.ts":
/*!***************************!*\
  !*** ./src/model/Game.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var ticTacToe_1 = __importDefault(__webpack_require__(/*! ../ticTacToe */ "./src/ticTacToe.ts"));

var field_1 = __importDefault(__webpack_require__(/*! ../view/field */ "./src/view/field.ts"));

var Game = /*#__PURE__*/function () {
  function Game(game, view) {
    _classCallCheck(this, Game);

    this.game = game;
    this.view = view;
    this.action = this.action.bind(this);
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      this.view = new field_1["default"](this.game.field.size.x, this.game.field.size.y);
      this.view.renderField();
      this.view.clickFieldEl(this.action);
      this.game.Strategy = new ticTacToe_1["default"](this.game.players);
    }
  }, {
    key: "action",
    value: function action(e) {
      var element = e.target;
      this.game.Strategy.init(element);
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),

/***/ "./src/model/Strategy.ts":
/*!*******************************!*\
  !*** ./src/model/Strategy.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Strategy = /*#__PURE__*/function () {
  function Strategy(players, currentGame) {
    var currentPlayer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : players[0].player.value;
    var turn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var finished = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    _classCallCheck(this, Strategy);

    this.players = players;
    this.currentGame = currentGame;
    this.currentPlayer = currentPlayer;
    this.turn = turn;
    this.finished = finished;
  } // checkDraw(cells: NodeListOf<Element>): boolean {
  //   const draw = Array.from(cells).every((cell: ChildNode): boolean => cell.textContent !== '');
  //   if (draw) this.finished = true;
  //   return draw;
  // }


  _createClass(Strategy, [{
    key: "init",
    value: function init(cell) {
      if (cell.textContent === '' && !this.finished) {
        cell.textContent = this.currentPlayer;
        this.nextTurn();
      }
    }
  }, {
    key: "nextTurn",
    value: function nextTurn() {
      var currentPlayerIndex = this.players.indexOf(this.players[this.turn % this.players.length]);
      this.turn += 1;
      this.currentPlayer = this.players[currentPlayerIndex].player.value;
    }
  }]);

  return Strategy;
}();

exports.default = Strategy;

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Player = function Player(player) {
  _classCallCheck(this, Player);

  this.player = player;
  this.player.moves = [];
};

exports.default = Player;

/***/ }),

/***/ "./src/ticTacToe.ts":
/*!**************************!*\
  !*** ./src/ticTacToe.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Strategy_1 = __importDefault(__webpack_require__(/*! ./model/Strategy */ "./src/model/Strategy.ts"));

var TicTacToe = /*#__PURE__*/function (_Strategy_1$default) {
  _inherits(TicTacToe, _Strategy_1$default);

  var _super = _createSuper(TicTacToe);

  function TicTacToe(players) {
    var _this;

    _classCallCheck(this, TicTacToe);

    _this = _super.call(this, players);
    _this.players = players;
    return _this;
  }

  _createClass(TicTacToe, [{
    key: "checkWin",
    value: function checkWin(cells) {
      var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
      var victory = lines.some(function (l) {
        return cells[l[0]].textContent && cells[l[0]].textContent === cells[l[1]].textContent && cells[l[1]].textContent === cells[l[2]].textContent;
      });

      if (!victory) {
        alert('it is a draw');
      }

      if (victory) {
        alert("".concat(this.currentPlayer, " win!"));
        this.finished = true;
      }
    }
  }]);

  return TicTacToe;
}(Strategy_1["default"]);

exports.default = TicTacToe;

/***/ }),

/***/ "./src/view/field.ts":
/*!***************************!*\
  !*** ./src/view/field.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var FieldView = /*#__PURE__*/function () {
  function FieldView(x, y) {
    var board = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, FieldView);

    this.x = x;
    this.y = y;
    this.board = board;
  }

  _createClass(FieldView, [{
    key: "generateField",
    value: function generateField() {
      var tableEl = document.createElement('table');
      tableEl.className = 'table-bordered';
      var counter = 0;

      for (var i = 0; i < this.x; i += 1) {
        var row = tableEl.insertRow();

        for (var j = 0; j < this.y; j += 1) {
          var cell = row.insertCell();
          this.board.push(cell);
          cell.className = 'cell';
          cell.id = "".concat(counter += 1);
          cell.tabIndex = 1;
        }
      }

      return tableEl;
    }
  }, {
    key: "renderField",
    value: function renderField() {
      var mainElem = document.querySelector('.main');
      var field = this.generateField();
      mainElem === null || mainElem === void 0 ? void 0 : mainElem.append(field);
    }
  }, {
    key: "clickFieldEl",
    value: function clickFieldEl(action) {
      this.board.forEach(function (el) {
        return el.addEventListener('click', function (e) {
          return action(e);
        });
      });
    }
  }, {
    key: "resetField",
    value: function resetField() {
      this.board.forEach(function (el) {
        var td = el;
        td.textContent = '';
      });
    }
  }]);

  return FieldView;
}();

exports.default = FieldView;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.ts");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvZmllbGQudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy9tb2RlbC9HYW1lLnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy9tb2RlbC9TdHJhdGVneS50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy90aWNUYWNUb2UudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL3ZpZXcvZmllbGQudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWUtY29yZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiT2JqZWN0IiwidmFsdWUiLCJGaWVsZCIsInNpemUiLCJleHBvcnRzIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsImZpZWxkXzEiLCJyZXF1aXJlIiwiR2FtZV8xIiwicGxheWVyXzEiLCJnYW1lMSIsImZpZWxkIiwieCIsInkiLCJwbGF5ZXJzIiwiU3RyYXRlZ3kiLCJpbml0IiwiY29uc29sZSIsImxvZyIsInRpY1RhY1RvZV8xIiwiR2FtZSIsImdhbWUiLCJ2aWV3IiwiYWN0aW9uIiwiYmluZCIsInJlbmRlckZpZWxkIiwiY2xpY2tGaWVsZEVsIiwiZSIsImVsZW1lbnQiLCJ0YXJnZXQiLCJjdXJyZW50R2FtZSIsImN1cnJlbnRQbGF5ZXIiLCJwbGF5ZXIiLCJ0dXJuIiwiZmluaXNoZWQiLCJjZWxsIiwidGV4dENvbnRlbnQiLCJuZXh0VHVybiIsImN1cnJlbnRQbGF5ZXJJbmRleCIsImluZGV4T2YiLCJsZW5ndGgiLCJQbGF5ZXIiLCJtb3ZlcyIsIlN0cmF0ZWd5XzEiLCJUaWNUYWNUb2UiLCJjZWxscyIsImxpbmVzIiwidmljdG9yeSIsInNvbWUiLCJsIiwiYWxlcnQiLCJGaWVsZFZpZXciLCJib2FyZCIsInRhYmxlRWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb3VudGVyIiwiaSIsInJvdyIsImluc2VydFJvdyIsImoiLCJpbnNlcnRDZWxsIiwicHVzaCIsImlkIiwidGFiSW5kZXgiLCJtYWluRWxlbSIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUZpZWxkIiwiYXBwZW5kIiwiZm9yRWFjaCIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7Ozs7QUFDYkEsOENBQTZDO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQTdDOztJQUNNQyxLLEdBQ0YsZUFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNkLE9BQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNILEM7O0FBRUxDLGVBQUEsR0FBa0JGLEtBQWxCLEM7Ozs7Ozs7Ozs7Q0NOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUlHLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVUMsR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBTiw4Q0FBNkM7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7O0FBQ0EsSUFBTU8sT0FBTyxHQUFHSCxlQUFlLENBQUNJLG1CQUFPLENBQUMsK0JBQUQsQ0FBUixDQUEvQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUdMLGVBQWUsQ0FBQ0ksbUJBQU8sQ0FBQyx5Q0FBRCxDQUFSLENBQTlCOztBQUNBLElBQU1FLFFBQVEsR0FBR04sZUFBZSxDQUFDSSxtQkFBTyxDQUFDLGlDQUFELENBQVIsQ0FBaEMsQyxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QWhCO0FBQ0FBLGNBQUksQ0FBQ3FCLFNBQUwsR0FBaUIsTUFBakI7QUFDQXJCLGNBQUksQ0FBQzZCLEVBQUwsYUFBY1AsT0FBTyxJQUFJLENBQXpCO0FBQ0F0QixjQUFJLENBQUM4QixRQUFMLEdBQWdCLENBQWhCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPWixPQUFQO0FBQ0g7OztXQUNELHVCQUFjO0FBQ1YsVUFBTWEsUUFBUSxHQUFHWixRQUFRLENBQUNhLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBakI7QUFDQSxVQUFNeEQsS0FBSyxHQUFHLEtBQUt5RCxhQUFMLEVBQWQ7QUFDQUYsY0FBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVHLE1BQVYsQ0FBaUIxRCxLQUFqQjtBQUNIOzs7V0FDRCxzQkFBYVksTUFBYixFQUFxQjtBQUNqQixXQUFLNkIsS0FBTCxDQUFXa0IsT0FBWCxDQUFtQixVQUFDQyxFQUFEO0FBQUEsZUFBUUEsRUFBRSxDQUFDQyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixVQUFDN0MsQ0FBRDtBQUFBLGlCQUFPSixNQUFNLENBQUNJLENBQUQsQ0FBYjtBQUFBLFNBQTdCLENBQVI7QUFBQSxPQUFuQjtBQUNIOzs7V0FDRCxzQkFBYTtBQUNULFdBQUt5QixLQUFMLENBQVdrQixPQUFYLENBQW1CLFVBQUNDLEVBQUQsRUFBUTtBQUN2QixZQUFNRSxFQUFFLEdBQUdGLEVBQVg7QUFDQUUsVUFBRSxDQUFDckMsV0FBSCxHQUFpQixFQUFqQjtBQUNILE9BSEQ7QUFJSDs7Ozs7O0FBRUxsQyxlQUFBLEdBQWtCaUQsU0FBbEIsQzs7Ozs7O1VDdkNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBGaWVsZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBGaWVsZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vIGltcG9ydCBGaWVsZCBmcm9tICcuL2ZpZWxkJztcclxuLy8gaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbi8vIGltcG9ydCBUaWNUYWNUb2UgZnJvbSAnLi90aWNUYWNUb2UnO1xyXG4vLyBpbXBvcnQgRmllbGRWaWV3IGZyb20gJy4vdmlldy9maWVsZCc7XHJcbi8vIGltcG9ydCBQbGF5ZXJWaWV3IGZyb20gJy4vdmlldy9wbGF5ZXInO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGZpZWxkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZmllbGRcIikpO1xyXG5jb25zdCBHYW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kZWwvR2FtZVwiKSk7XHJcbmNvbnN0IHBsYXllcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3BsYXllclwiKSk7XHJcbi8vIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuLy8gLy8gY29uc3QgZmllbGQgPSBuZXcgRmllbGRWaWV3KDMsIDMpLnJlbmRlckZpZWxkKCk7XHJcbi8vIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuLy8gY29uc3QgZmllbGRWaWV3ID0gbmV3IEZpZWxkVmlldygzLCA0KS5yZW5kZXJGaWVsZCgpO1xyXG4vLyBjb25zdCBwbGF5ZXJzID0gbmV3IFBsYXllclZpZXcoWydYJywgJ08nXSkucmVuZGVyUGxheWVyKCk7XHJcbi8vIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuLy8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4vLyBjb25zdCB0aWN0YWMgPSBuZXcgVGljVGFjVG9lKCk7XHJcbi8vIC8vIC8vLy8vLy8vLy8vLy8vXHJcbi8vIC8vIGNvbnN0IGZpZWxkID0gbmV3IEZpZWxkKHsgeDogMywgeTogNCB9KTtcclxuLy8gLy8gY29uc3QgcGxheWVyQXJyYXkgPSBbbmV3IFBsYXllcih7IHZhbHVlOiAnWCcgfSksIG5ldyBQbGF5ZXIoeyB2YWx1ZTogJ1knIH0pXTtcclxuLy8gLy8gY29uc29sZS5sb2cocGxheWVyQXJyYXkpO1xyXG4vLyAvLyBjb25zdCBnYW1lID0gbmV3IEdhbWUoe1xyXG4vLyAvLyAgIGZpZWxkOiBuZXcgRmllbGQoeyB4OiAzLCB5OiA0IH0pLFxyXG4vLyAvLyAgIHBsYXllcnM6IFtuZXcgUGxheWVyKHsgdmFsdWU6ICdYJyB9KSwgbmV3IFBsYXllcih7IHZhbHVlOiAnWScgfSldLFxyXG4vLyAvLyAgIFN0cmF0ZWd5OiBUaWNUYWNUb2UsXHJcbi8vIC8vIH0pO1xyXG4vLyAvLyBuZXcgSFRNTEdhbWVWaWV3KHtnYW1lfSk7XHJcbi8vIC8vIC8vXHJcbi8vIGNsYXNzIEdhbWUge1xyXG4vLyAgIGNvbnN0cnVjdG9yKHsgZmllbGQsIHBsYXllcnMsIFN0cmF0ZWd5IH0pIHtcclxuLy8gICAgIHRoaXMuc3RyYXRlZ3kgPSBuZXcgU3RyYXRlZ3koe1xyXG4vLyAgICAgICBmaWVsZCxcclxuLy8gICAgICAgcGxheWVycyxcclxuLy8gICAgICAgZ2FtZTogdGhpcyxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyAvLyBjbGFzcyBHYW1lVmlldyB7XHJcbi8vIC8vICAgICAuLi4sXHJcbi8vIC8vICAgICBjZWxsLm9uQ2xpY2soKCkgPT4ge1xyXG4vLyAvLyAgICAgICAgIHRoaXMuZmllbGQuc2V0VmFsdWUoe3gsIHksIFwieFwifSk7XHJcbi8vIC8vICAgICB9KTtcclxuLy8gLy8gfVxyXG5jb25zdCBnYW1lMSA9IG5ldyBHYW1lXzEuZGVmYXVsdCh7XHJcbiAgICBmaWVsZDogbmV3IGZpZWxkXzEuZGVmYXVsdCh7IHg6IDMsIHk6IDMgfSksXHJcbiAgICBwbGF5ZXJzOiBbbmV3IHBsYXllcl8xLmRlZmF1bHQoeyB2YWx1ZTogJ08nIH0pLCBuZXcgcGxheWVyXzEuZGVmYXVsdCh7IHZhbHVlOiAnUicgfSldLFxyXG4gICAgU3RyYXRlZ3k6ICdUaWNUYWNUb2UnLFxyXG59KTtcclxuZ2FtZTEuaW5pdCgpO1xyXG5jb25zb2xlLmxvZyhnYW1lMSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHRpY1RhY1RvZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi90aWNUYWNUb2VcIikpO1xyXG5jb25zdCBmaWVsZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi92aWV3L2ZpZWxkXCIpKTtcclxuY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB2aWV3KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gdGhpcy5hY3Rpb24uYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IGZpZWxkXzEuZGVmYXVsdCh0aGlzLmdhbWUuZmllbGQuc2l6ZS54LCB0aGlzLmdhbWUuZmllbGQuc2l6ZS55KTtcclxuICAgICAgICB0aGlzLnZpZXcucmVuZGVyRmllbGQoKTtcclxuICAgICAgICB0aGlzLnZpZXcuY2xpY2tGaWVsZEVsKHRoaXMuYWN0aW9uKTtcclxuICAgICAgICB0aGlzLmdhbWUuU3RyYXRlZ3kgPSBuZXcgdGljVGFjVG9lXzEuZGVmYXVsdCh0aGlzLmdhbWUucGxheWVycyk7XHJcbiAgICB9XHJcbiAgICBhY3Rpb24oZSkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgICAgICB0aGlzLmdhbWUuU3RyYXRlZ3kuaW5pdChlbGVtZW50KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBTdHJhdGVneSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJzLCBjdXJyZW50R2FtZSwgY3VycmVudFBsYXllciA9IHBsYXllcnNbMF0ucGxheWVyLnZhbHVlLCB0dXJuID0gMSwgZmluaXNoZWQgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMucGxheWVycyA9IHBsYXllcnM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50R2FtZSA9IGN1cnJlbnRHYW1lO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IGN1cnJlbnRQbGF5ZXI7XHJcbiAgICAgICAgdGhpcy50dXJuID0gdHVybjtcclxuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmluaXNoZWQ7XHJcbiAgICB9XHJcbiAgICAvLyBjaGVja0RyYXcoY2VsbHM6IE5vZGVMaXN0T2Y8RWxlbWVudD4pOiBib29sZWFuIHtcclxuICAgIC8vICAgY29uc3QgZHJhdyA9IEFycmF5LmZyb20oY2VsbHMpLmV2ZXJ5KChjZWxsOiBDaGlsZE5vZGUpOiBib29sZWFuID0+IGNlbGwudGV4dENvbnRlbnQgIT09ICcnKTtcclxuICAgIC8vICAgaWYgKGRyYXcpIHRoaXMuZmluaXNoZWQgPSB0cnVlO1xyXG4gICAgLy8gICByZXR1cm4gZHJhdztcclxuICAgIC8vIH1cclxuICAgIGluaXQoY2VsbCkge1xyXG4gICAgICAgIGlmIChjZWxsLnRleHRDb250ZW50ID09PSAnJyAmJiAhdGhpcy5maW5pc2hlZCkge1xyXG4gICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gdGhpcy5jdXJyZW50UGxheWVyO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRUdXJuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbmV4dFR1cm4oKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBsYXllckluZGV4ID0gdGhpcy5wbGF5ZXJzLmluZGV4T2YodGhpcy5wbGF5ZXJzW3RoaXMudHVybiAlIHRoaXMucGxheWVycy5sZW5ndGhdKTtcclxuICAgICAgICB0aGlzLnR1cm4gKz0gMTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcnNbY3VycmVudFBsYXllckluZGV4XS5wbGF5ZXIudmFsdWU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU3RyYXRlZ3k7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLnBsYXllci5tb3ZlcyA9IFtdO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFBsYXllcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgU3RyYXRlZ3lfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tb2RlbC9TdHJhdGVneVwiKSk7XHJcbmNsYXNzIFRpY1RhY1RvZSBleHRlbmRzIFN0cmF0ZWd5XzEuZGVmYXVsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJzKSB7XHJcbiAgICAgICAgc3VwZXIocGxheWVycyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gcGxheWVycztcclxuICAgIH1cclxuICAgIGNoZWNrV2luKGNlbGxzKSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXHJcbiAgICAgICAgICAgIFswLCAxLCAyXSxcclxuICAgICAgICAgICAgWzMsIDQsIDVdLFxyXG4gICAgICAgICAgICBbNiwgNywgOF0sXHJcbiAgICAgICAgICAgIFswLCAzLCA2XSxcclxuICAgICAgICAgICAgWzEsIDQsIDddLFxyXG4gICAgICAgICAgICBbMiwgNSwgOF0sXHJcbiAgICAgICAgICAgIFswLCA0LCA4XSxcclxuICAgICAgICAgICAgWzIsIDQsIDZdLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgdmljdG9yeSA9IGxpbmVzLnNvbWUoKGwpID0+IGNlbGxzW2xbMF1dLnRleHRDb250ZW50XHJcbiAgICAgICAgICAgICYmIGNlbGxzW2xbMF1dLnRleHRDb250ZW50ID09PSBjZWxsc1tsWzFdXS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAmJiBjZWxsc1tsWzFdXS50ZXh0Q29udGVudCA9PT0gY2VsbHNbbFsyXV0udGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGlmICghdmljdG9yeSkge1xyXG4gICAgICAgICAgICBhbGVydCgnaXQgaXMgYSBkcmF3Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2aWN0b3J5KSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGAke3RoaXMuY3VycmVudFBsYXllcn0gd2luIWApO1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVGljVGFjVG9lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBGaWVsZFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgYm9hcmQgPSBbXSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZUZpZWxkKCkge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgICAgIHRhYmxlRWwuY2xhc3NOYW1lID0gJ3RhYmxlLWJvcmRlcmVkJztcclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLng7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSB0YWJsZUVsLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMueTsgaiArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmQucHVzaChjZWxsKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pZCA9IGAkeyhjb3VudGVyICs9IDEpfWA7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnRhYkluZGV4ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFibGVFbDtcclxuICAgIH1cclxuICAgIHJlbmRlckZpZWxkKCkge1xyXG4gICAgICAgIGNvbnN0IG1haW5FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZ2VuZXJhdGVGaWVsZCgpO1xyXG4gICAgICAgIG1haW5FbGVtPy5hcHBlbmQoZmllbGQpO1xyXG4gICAgfVxyXG4gICAgY2xpY2tGaWVsZEVsKGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMuYm9hcmQuZm9yRWFjaCgoZWwpID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGFjdGlvbihlKSkpO1xyXG4gICAgfVxyXG4gICAgcmVzZXRGaWVsZCgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRkID0gZWw7XHJcbiAgICAgICAgICAgIHRkLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gRmllbGRWaWV3O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==