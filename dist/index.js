/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Event.ts":
/*!**********************!*\
  !*** ./src/Event.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Event = /*#__PURE__*/function () {
  function Event() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Event);

    this.listeners = listeners;
  }

  _createClass(Event, [{
    key: "addListener",
    value: function addListener(listener) {
      this.listeners.push(listener);
    }
  }, {
    key: "trigger",
    value: function trigger(params) {
      this.listeners.forEach(function (listener) {
        return listener(params);
      });
    }
  }, {
    key: "triggerTwo",
    value: function triggerTwo(param1, param2) {
      this.listeners.forEach(function (listener) {
        return listener(param1, param2);
      });
    }
  }]);

  return Event;
}();

exports.default = Event;

/***/ }),

/***/ "./src/Field.ts":
/*!**********************!*\
  !*** ./src/Field.ts ***!
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

/***/ "./src/controller1/Game.ts":
/*!*********************************!*\
  !*** ./src/controller1/Game.ts ***!
  \*********************************/
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

var FieldView_1 = __importDefault(__webpack_require__(/*! ../view/FieldView */ "./src/view/FieldView.ts"));

var Event_1 = __importDefault(__webpack_require__(/*! ../Event */ "./src/Event.ts"));

var Game = /*#__PURE__*/function () {
  function Game(players, strategy, field) {
    var board = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : strategy.init(field.size.x, field.size.y);
    var view = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new FieldView_1["default"](field.size.x, field.size.y);
    var turn = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
    var currentPlayerIndex = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var isFinished = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
    var winnerId = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : -1;
    var updateCellEvent = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : new Event_1["default"]();

    _classCallCheck(this, Game);

    this.players = players;
    this.strategy = strategy;
    this.field = field;
    this.board = board;
    this.view = view;
    this.turn = turn;
    this.currentPlayerIndex = currentPlayerIndex;
    this.isFinished = isFinished;
    this.winnerId = winnerId;
    this.updateCellEvent = updateCellEvent;
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.view.renderField();
      this.view.playEvent.addListener(function (x, y) {
        return _this.makeMove(x, y);
      });
    }
  }, {
    key: "makeMove",
    value: function makeMove(x, y) {
      var isValid = this.strategy.isTurnValid(this.board, x, y);

      if (isValid) {
        this.strategy.setValue(this.board, x, y, this.currentPlayerIndex);
        var winnerId = this.strategy.checkWin(this.board);

        if (winnerId < 0) {
          this.view.updateCell(x, y, this.players[this.currentPlayerIndex].sign);
          this.updateTurnAndNextPlayer();
        } else {
          this.winnerId = this.currentPlayerIndex;
          this.isFinished = true;
        }
      }
    }
  }, {
    key: "updateTurnAndNextPlayer",
    value: function updateTurnAndNextPlayer() {
      this.currentPlayerIndex = this.turn % this.players.length;
      this.turn += 1;
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Field_1 = __importDefault(__webpack_require__(/*! ./Field */ "./src/Field.ts"));

var Game_1 = __importDefault(__webpack_require__(/*! ./controller1/Game */ "./src/controller1/Game.ts"));

var Player_1 = __importDefault(__webpack_require__(/*! ./model1/Player */ "./src/model1/Player.ts"));

var TickTacToe_1 = __importDefault(__webpack_require__(/*! ./model1/TickTacToe */ "./src/model1/TickTacToe.ts")); // import FourInTheRow from './model1/FourInTheRow';


var game = new Game_1["default"]([new Player_1["default"]('player One', 'X'), new Player_1["default"]('player Two', 'O')], new TickTacToe_1["default"](), new Field_1["default"]({
  x: 3,
  y: 3
}));
game.init(); // console.log(game);

/***/ }),

/***/ "./src/model1/Player.ts":
/*!******************************!*\
  !*** ./src/model1/Player.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Player = function Player(name, sign) {
  _classCallCheck(this, Player);

  this.name = name;
  this.sign = sign;
};

exports.default = Player;

/***/ }),

/***/ "./src/model1/Strategy.ts":
/*!********************************!*\
  !*** ./src/model1/Strategy.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Strategy = function Strategy() {
  _classCallCheck(this, Strategy);

  this.init = function (x, y) {
    var result = [];

    for (var i = 0; i < x; i += 1) {
      result.push(new Array(y).fill(null));
    }

    return result;
  };

  this.isTurnValid = function (board, x, y) {
    var value = board[x][y];
    return value === null;
  };

  this.setValue = function (board, x, y, playerId) {
    var playerValue = board;
    playerValue[x][y] = playerId;
  };
};

exports.default = Strategy;

/***/ }),

/***/ "./src/model1/TickTacToe.ts":
/*!**********************************!*\
  !*** ./src/model1/TickTacToe.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Strategy_1 = __importDefault(__webpack_require__(/*! ./Strategy */ "./src/model1/Strategy.ts"));

var TicTacToe = /*#__PURE__*/function (_Strategy_1$default) {
  _inherits(TicTacToe, _Strategy_1$default);

  var _super = _createSuper(TicTacToe);

  function TicTacToe() {
    var _this;

    _classCallCheck(this, TicTacToe);

    _this = _super.apply(this, arguments);

    _this.getName = function () {
      return 'TicTacToe';
    };

    _this.checkWin = function (board) {
      var size = board.length;
      return size - 1000;
    };

    return _this;
  }

  return TicTacToe;
}(Strategy_1["default"]);

exports.default = TicTacToe;

/***/ }),

/***/ "./src/view/FieldView.ts":
/*!*******************************!*\
  !*** ./src/view/FieldView.ts ***!
  \*******************************/
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

var Event_1 = __importDefault(__webpack_require__(/*! ../Event */ "./src/Event.ts"));

var FieldView = /*#__PURE__*/function () {
  function FieldView(x, y) {
    var _this = this;

    var board = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var playEvent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Event_1["default"]();
    var updateCellEvent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new Event_1["default"]();

    _classCallCheck(this, FieldView);

    this.x = x;
    this.y = y;
    this.board = board;
    this.playEvent = playEvent;
    this.updateCellEvent = updateCellEvent;

    this.updateCell = function (x, y, sign) {
      _this.board[x][y].innerHTML = sign;
    };
  }

  _createClass(FieldView, [{
    key: "generateField",
    value: function generateField() {
      var _this2 = this;

      var tableEl = document.createElement('table');
      tableEl.className = 'table-bordered';
      var counter = 0;

      var _loop = function _loop(i) {
        var row = tableEl.insertRow();
        _this2.board[i] = [];

        var _loop2 = function _loop2(j) {
          var cell = row.insertCell();

          _this2.board[i].push(cell);

          cell.className = 'cell';
          cell.id = "".concat(counter += 1);
          cell.tabIndex = 1;
          cell.addEventListener('click', function () {
            _this2.playEvent.triggerTwo(i, j);
          });
        };

        for (var j = 0; j < _this2.y; j += 1) {
          _loop2(j);
        }
      };

      for (var i = 0; i < this.x; i += 1) {
        _loop(i);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvRXZlbnQudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL0ZpZWxkLnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy9jb250cm9sbGVyMS9HYW1lLnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvbW9kZWwxL1BsYXllci50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvbW9kZWwxL1N0cmF0ZWd5LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy9tb2RlbDEvVGlja1RhY1RvZS50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvdmlldy9GaWVsZFZpZXcudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWUtY29yZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiT2JqZWN0IiwidmFsdWUiLCJFdmVudCIsImxpc3RlbmVycyIsImxpc3RlbmVyIiwicHVzaCIsInBhcmFtcyIsImZvckVhY2giLCJwYXJhbTEiLCJwYXJhbTIiLCJleHBvcnRzIiwiRmllbGQiLCJzaXplIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsIkZpZWxkVmlld18xIiwicmVxdWlyZSIsIkV2ZW50XzEiLCJHYW1lIiwicGxheWVycyIsInN0cmF0ZWd5IiwiZmllbGQiLCJib2FyZCIsImluaXQiLCJ4IiwieSIsInZpZXciLCJ0dXJuIiwiY3VycmVudFBsYXllckluZGV4IiwiaXNGaW5pc2hlZCIsIndpbm5lcklkIiwidXBkYXRlQ2VsbEV2ZW50IiwicmVuZGVyRmllbGQiLCJwbGF5RXZlbnQiLCJhZGRMaXN0ZW5lciIsIm1ha2VNb3ZlIiwiaXNWYWxpZCIsImlzVHVyblZhbGlkIiwic2V0VmFsdWUiLCJjaGVja1dpbiIsInVwZGF0ZUNlbGwiLCJzaWduIiwidXBkYXRlVHVybkFuZE5leHRQbGF5ZXIiLCJsZW5ndGgiLCJGaWVsZF8xIiwiR2FtZV8xIiwiUGxheWVyXzEiLCJUaWNrVGFjVG9lXzEiLCJnYW1lIiwiUGxheWVyIiwibmFtZSIsIlN0cmF0ZWd5IiwicmVzdWx0IiwiaSIsIkFycmF5IiwiZmlsbCIsInBsYXllcklkIiwicGxheWVyVmFsdWUiLCJTdHJhdGVneV8xIiwiVGljVGFjVG9lIiwiYXJndW1lbnRzIiwiZ2V0TmFtZSIsIkZpZWxkVmlldyIsImlubmVySFRNTCIsInRhYmxlRWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb3VudGVyIiwicm93IiwiaW5zZXJ0Um93IiwiaiIsImNlbGwiLCJpbnNlcnRDZWxsIiwiaWQiLCJ0YWJJbmRleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0cmlnZ2VyVHdvIiwibWFpbkVsZW0iLCJxdWVyeVNlbGVjdG9yIiwiZ2VuZXJhdGVGaWVsZCIsImFwcGVuZCIsImVsIiwidGQiLCJ0ZXh0Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOzs7Ozs7OztBQUNiQSw4Q0FBNkM7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7O0lBQ01DLEs7QUFDRixtQkFBNEI7QUFBQSxRQUFoQkMsU0FBZ0IsdUVBQUosRUFBSTs7QUFBQTs7QUFDeEIsU0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDSDs7OztXQUNELHFCQUFZQyxRQUFaLEVBQXNCO0FBQ2xCLFdBQUtELFNBQUwsQ0FBZUUsSUFBZixDQUFvQkQsUUFBcEI7QUFDSDs7O1dBQ0QsaUJBQVFFLE1BQVIsRUFBZ0I7QUFDWixXQUFLSCxTQUFMLENBQWVJLE9BQWYsQ0FBdUIsVUFBQ0gsUUFBRDtBQUFBLGVBQWNBLFFBQVEsQ0FBQ0UsTUFBRCxDQUF0QjtBQUFBLE9BQXZCO0FBQ0g7OztXQUNELG9CQUFXRSxNQUFYLEVBQW1CQyxNQUFuQixFQUEyQjtBQUN2QixXQUFLTixTQUFMLENBQWVJLE9BQWYsQ0FBdUIsVUFBQ0gsUUFB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QWlCNUQsS0FBakI7QUFDSDs7O1dBQ0Qsc0JBQWE7QUFDVCxXQUFLQyxLQUFMLENBQVdoQixPQUFYLENBQW1CLFVBQUM0RSxFQUFELEVBQVE7QUFDdkIsWUFBTUMsRUFBRSxHQUFHRCxFQUFYO0FBQ0FDLFVBQUUsQ0FBQ0MsV0FBSCxHQUFpQixFQUFqQjtBQUNILE9BSEQ7QUFJSDs7Ozs7O0FBRUwzRSxlQUFBLEdBQWtCcUQsU0FBbEIsQzs7Ozs7O1VDakRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBFdmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihsaXN0ZW5lcnMgPSBbXSkge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gbGlzdGVuZXJzO1xyXG4gICAgfVxyXG4gICAgYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgIH1cclxuICAgIHRyaWdnZXIocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKHBhcmFtcykpO1xyXG4gICAgfVxyXG4gICAgdHJpZ2dlclR3byhwYXJhbTEsIHBhcmFtMikge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihwYXJhbTEsIHBhcmFtMikpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEV2ZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBGaWVsZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzaXplKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBGaWVsZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgRmllbGRWaWV3XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3ZpZXcvRmllbGRWaWV3XCIpKTtcclxuY29uc3QgRXZlbnRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vRXZlbnRcIikpO1xyXG5jbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcnMsIHN0cmF0ZWd5LCBmaWVsZCwgYm9hcmQgPSBzdHJhdGVneS5pbml0KGZpZWxkLnNpemUueCwgZmllbGQuc2l6ZS55KSwgdmlldyA9IG5ldyBGaWVsZFZpZXdfMS5kZWZhdWx0KGZpZWxkLnNpemUueCwgZmllbGQuc2l6ZS55KSwgdHVybiA9IDEsIGN1cnJlbnRQbGF5ZXJJbmRleCA9IDAsIGlzRmluaXNoZWQgPSBmYWxzZSwgd2lubmVySWQgPSAtMSwgdXBkYXRlQ2VsbEV2ZW50ID0gbmV3IEV2ZW50XzEuZGVmYXVsdCgpKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gcGxheWVycztcclxuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XHJcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHRoaXMudHVybiA9IHR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVySW5kZXggPSBjdXJyZW50UGxheWVySW5kZXg7XHJcbiAgICAgICAgdGhpcy5pc0ZpbmlzaGVkID0gaXNGaW5pc2hlZDtcclxuICAgICAgICB0aGlzLndpbm5lcklkID0gd2lubmVySWQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDZWxsRXZlbnQgPSB1cGRhdGVDZWxsRXZlbnQ7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMudmlldy5yZW5kZXJGaWVsZCgpO1xyXG4gICAgICAgIHRoaXMudmlldy5wbGF5RXZlbnQuYWRkTGlzdGVuZXIoKHgsIHkpID0+IHRoaXMubWFrZU1vdmUoeCwgeSkpO1xyXG4gICAgfVxyXG4gICAgbWFrZU1vdmUoeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnN0cmF0ZWd5LmlzVHVyblZhbGlkKHRoaXMuYm9hcmQsIHgsIHkpO1xyXG4gICAgICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RyYXRlZ3kuc2V0VmFsdWUodGhpcy5ib2FyZCwgeCwgeSwgdGhpcy5jdXJyZW50UGxheWVySW5kZXgpO1xyXG4gICAgICAgICAgICBjb25zdCB3aW5uZXJJZCA9IHRoaXMuc3RyYXRlZ3kuY2hlY2tXaW4odGhpcy5ib2FyZCk7XHJcbiAgICAgICAgICAgIGlmICh3aW5uZXJJZCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy51cGRhdGVDZWxsKHgsIHksIHRoaXMucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleF0uc2lnbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVR1cm5BbmROZXh0UGxheWVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5lcklkID0gdGhpcy5jdXJyZW50UGxheWVySW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlVHVybkFuZE5leHRQbGF5ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVySW5kZXggPSB0aGlzLnR1cm4gJSB0aGlzLnBsYXllcnMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMudHVybiArPSAxO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IEZpZWxkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRmllbGRcIikpO1xyXG5jb25zdCBHYW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29udHJvbGxlcjEvR2FtZVwiKSk7XHJcbmNvbnN0IFBsYXllcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21vZGVsMS9QbGF5ZXJcIikpO1xyXG5jb25zdCBUaWNrVGFjVG9lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kZWwxL1RpY2tUYWNUb2VcIikpO1xyXG4vLyBpbXBvcnQgRm91ckluVGhlUm93IGZyb20gJy4vbW9kZWwxL0ZvdXJJblRoZVJvdyc7XHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZV8xLmRlZmF1bHQoW25ldyBQbGF5ZXJfMS5kZWZhdWx0KCdwbGF5ZXIgT25lJywgJ1gnKSwgbmV3IFBsYXllcl8xLmRlZmF1bHQoJ3BsYXllciBUd28nLCAnTycpXSwgbmV3IFRpY2tUYWNUb2VfMS5kZWZhdWx0KCksIG5ldyBGaWVsZF8xLmRlZmF1bHQoeyB4OiAzLCB5OiAzIH0pKTtcclxuZ2FtZS5pbml0KCk7XHJcbi8vIGNvbnNvbGUubG9nKGdhbWUpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgc2lnbikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5zaWduID0gc2lnbjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBQbGF5ZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFN0cmF0ZWd5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCA9ICh4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IEFycmF5KHkpLmZpbGwobnVsbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmlzVHVyblZhbGlkID0gKGJvYXJkLCB4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYm9hcmRbeF1beV07XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUgPSAoYm9hcmQsIHgsIHksIHBsYXllcklkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllclZhbHVlID0gYm9hcmQ7XHJcbiAgICAgICAgICAgIHBsYXllclZhbHVlW3hdW3ldID0gcGxheWVySWQ7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBTdHJhdGVneTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgU3RyYXRlZ3lfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9TdHJhdGVneVwiKSk7XHJcbmNsYXNzIFRpY1RhY1RvZSBleHRlbmRzIFN0cmF0ZWd5XzEuZGVmYXVsdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuZ2V0TmFtZSA9ICgpID0+ICdUaWNUYWNUb2UnO1xyXG4gICAgICAgIHRoaXMuY2hlY2tXaW4gPSAoYm9hcmQpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IGJvYXJkLmxlbmd0aDtcclxuICAgICAgICAgICAgcmV0dXJuIHNpemUgLSAxMDAwO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVGljVGFjVG9lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBFdmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9FdmVudFwiKSk7XHJcbmNsYXNzIEZpZWxkVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBib2FyZCA9IFtdLCBwbGF5RXZlbnQgPSBuZXcgRXZlbnRfMS5kZWZhdWx0KCksIHVwZGF0ZUNlbGxFdmVudCA9IG5ldyBFdmVudF8xLmRlZmF1bHQoKSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICAgICAgdGhpcy5wbGF5RXZlbnQgPSBwbGF5RXZlbnQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDZWxsRXZlbnQgPSB1cGRhdGVDZWxsRXZlbnQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDZWxsID0gKHgsIHksIHNpZ24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5XS5pbm5lckhUTUwgPSBzaWduO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZUZpZWxkKCkge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgICAgIHRhYmxlRWwuY2xhc3NOYW1lID0gJ3RhYmxlLWJvcmRlcmVkJztcclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLng7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSB0YWJsZUVsLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy55OyBqICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXS5wdXNoKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmlkID0gYCR7KGNvdW50ZXIgKz0gMSl9YDtcclxuICAgICAgICAgICAgICAgIGNlbGwudGFiSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlFdmVudC50cmlnZ2VyVHdvKGksIGopO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhYmxlRWw7XHJcbiAgICB9XHJcbiAgICByZW5kZXJGaWVsZCgpIHtcclxuICAgICAgICBjb25zdCBtYWluRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmdlbmVyYXRlRmllbGQoKTtcclxuICAgICAgICBtYWluRWxlbT8uYXBwZW5kKGZpZWxkKTtcclxuICAgIH1cclxuICAgIHJlc2V0RmllbGQoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZCA9IGVsO1xyXG4gICAgICAgICAgICB0ZC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEZpZWxkVmlldztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=