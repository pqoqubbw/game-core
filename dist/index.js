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
    _classCallCheck(this, Event);

    this.listeners = [];
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
    _classCallCheck(this, Game);

    this.isFinished = false;
    this.winnedId = -1;
    this.updateCellEvent = new Event_1["default"]();
    this.players = players;
    this.strategy = strategy;
    this.field = field; // consider removing below this from constructor to init ();

    this.board = this.strategy.init(this.field.size.x, this.field.size.y);
    this.view = new FieldView_1["default"](this.field.size.x, this.field.size.y);
    this.turn = 1;
    this.currentPlayerIndex = 0;
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {
      var _this = this;

      // this.board = this.strategy.init(this.field.size.x, this.field.size.y);
      // this.view = new FieldView(this.field.size.x, this.field.size.y);
      // this.currentPlayerIndex = 0;
      this.view.renderField();
      this.view.playEvent.addListener(function (x, y) {
        return _this.makeMove(x, y);
      }); // this.updateCellEvent.trigger(cellId: number);
    }
  }, {
    key: "makeMove",
    value: function makeMove(x, y) {
      console.log("makeMove invoked ".concat(x, " ").concat(y));
      var isValid = this.strategy.isTurnValid(this.board, x, y);

      if (isValid) {
        this.strategy.setValue(this.board, x, y, this.currentPlayerIndex); // this.view. show Move (set value)

        var winnerId = this.strategy.checkWin(this.board);

        if (winnerId < 0) {
          this.view.updateCell(x, y, this.players[this.currentPlayerIndex].sign);
          this.updateTurnAndNextPlayer();
          console.log(this.board);
        } else {
          // this.view; // show winner message
          this.winnedId = this.currentPlayerIndex;
          this.isFinished = true;
        }
      }
    }
  }, {
    key: "updateTurnAndNextPlayer",
    value: function updateTurnAndNextPlayer() {
      this.currentPlayerIndex = this.turn % this.players.length;
      this.turn += 1;
      console.log("currentTurn ".concat(this.turn, " currPlayerIndex = ").concat(this.currentPlayerIndex));
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


var game = new Game_1["default"]([new Player_1["default"]('Ata', 'X'), new Player_1["default"]('DZ', 'Y'), new Player_1["default"]('Denis', 'D')], new TickTacToe_1["default"](), new Field_1["default"]({
  x: 4,
  y: 4
}));
game.init();
console.log(game);

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
    return Array(x).fill(Array(y).fill(0));
  };

  this.isTurnValid = function (board, x, y) {
    var value = board[x][y];
    return value === 0;
  };

  this.setValue = function (board, x, y, playerId) {
    var line = board[x];
    line[y] = playerId;
    console.log("setValue ".concat(board));
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
      console.log('updateCell' + 'x' + ' ' + 'y');
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
            console.log("generate".concat(i).concat(j));

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
    } // clickFieldEl(action): void {
    //   this.board.forEach((el: any): void => el.addEventListener('click', (e) => action(e)));
    // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvRXZlbnQudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL0ZpZWxkLnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy9jb250cm9sbGVyMS9HYW1lLnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvbW9kZWwxL1BsYXllci50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvbW9kZWwxL1N0cmF0ZWd5LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy9tb2RlbDEvVGlja1RhY1RvZS50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvdmlldy9GaWVsZFZpZXcudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWUtY29yZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiT2JqZWN0IiwidmFsdWUiLCJFdmVudCIsImxpc3RlbmVycyIsImxpc3RlbmVyIiwicHVzaCIsInBhcmFtcyIsImZvckVhY2giLCJwYXJhbTEiLCJwYXJhbTIiLCJleHBvcnRzIiwiRmllbGQiLCJzaXplIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsIkZpZWxkVmlld18xIiwicmVxdWlyZSIsIkV2ZW50XzEiLCJHYW1lIiwicGxheWVycyIsInN0cmF0ZWd5IiwiZmllbGQiLCJpc0ZpbmlzaGVkIiwid2lubmVkSWQiLCJ1cGRhdGVDZWxsRXZlbnQiLCJib2FyZCIsImluaXQiLCJ4IiwieSIsInZpZXciLCJ0dXJuIiwiY3VycmVudFBsYXllckluZGV4IiwicmVuZGVyRmllbGQiLCJwbGF5RXZlbnQiLCJhZGRMaXN0ZW5lciIsIm1ha2VNb3ZlIiwiY29uc29sZSIsImxvZyIsImlzVmFsaWQiLCJpc1R1cm5WYWxpZCIsInNldFZhbHVlIiwid2lubmVySWQiLCJjaGVja1dpbiIsInVwZGF0ZUNlbGwiLCJzaWduIiwidXBkYXRlVHVybkFuZE5leHRQbGF5ZXIiLCJsZW5ndGgiLCJGaWVsZF8xIiwiR2FtZV8xIiwiUGxheWVyXzEiLCJUaWNrVGFjVG9lXzEiLCJnYW1lIiwiUGxheWVyIiwibmFtZSIsIlN0cmF0ZWd5IiwiQXJyYXkiLCJmaWxsIiwicGxheWVySWQiLCJsaW5lIiwiU3RyYXRlZ3lfMSIsIlRpY1RhY1RvZSIsImFyZ3VtZW50cyIsImdldE5hbWUiLCJGaWVsZFZpZXciLCJpbm5lckhUTUwiLCJ0YWJsZUVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY291bnRlciIsImkiLCJyb3ciLCJpbnNlcnRSb3ciLCJqIiwiY2VsbCIsImluc2VydENlbGwiLCJpZCIsInRhYkluZGV4IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRyaWdnZXJUd28iLCJtYWluRWxlbSIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUZpZWxkIiwiYXBwZW5kIiwiZWwiLCJ0ZCIsInRleHRDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7Ozs7Ozs7O0FBQ2JBLDhDQUE2QztBQUFFQyxPQUFLLEVBQUU7QUFBVCxDQUE3Qzs7SUFDTUMsSztBQUNGLG1CQUFjO0FBQUE7O0FBQ1YsU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNIOzs7O1dBQ0QscUJBQVlDLFFBQVosRUFBc0I7QUFDbEIsV0FBS0QsU0FBTCxDQUFlRSxJQUFmLENBQW9CRCxRQUFwQjtBQUNIOzs7V0FDRCxpQkFBUUUsTUFBUixFQUFnQjtBQUNaLFdBQUtILFNBQUwsQ0FBZUksT0FBZixDQUF1QixVQUFDSCxRQUFEO0FBQUEsZUFBY0EsUUFBUSxDQUFDRSxNQUFELENBQXRCO0FBQUEsT0FBdkI7QUFDSDs7O1dBQ0Qsb0JBQVdFLE1BQVgsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQ3ZCLFdBQUtOLFNBQUwsQ0FBZUksT0FBZixDQUF1QixVQUFDSCxRQUFEO0FBQUEsZUFBY0EsUUFBUSxDQUFD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akI7QUFDQSxVQUFNNUQsS0FBSyxHQUFHLEtBQUs2RCxhQUFMLEVBQWQ7QUFDQUYsY0FBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRLENBQUVHLE1BQVYsQ0FBaUI5RCxLQUFqQjtBQUNILEssQ0FDRDtBQUNBO0FBQ0E7Ozs7V0FDQSxzQkFBYTtBQUNULFdBQUtJLEtBQUwsQ0FBV25CLE9BQVgsQ0FBbUIsVUFBQzhFLEVBQUQsRUFBUTtBQUN2QixZQUFNQyxFQUFFLEdBQUdELEVBQVg7QUFDQUMsVUFBRSxDQUFDQyxXQUFILEdBQWlCLEVBQWpCO0FBQ0gsT0FIRDtBQUlIOzs7Ozs7QUFFTDdFLGVBQUEsR0FBa0JzRCxTQUFsQixDOzs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEV2ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XHJcbiAgICB9XHJcbiAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgdHJpZ2dlcihwYXJhbXMpIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIocGFyYW1zKSk7XHJcbiAgICB9XHJcbiAgICB0cmlnZ2VyVHdvKHBhcmFtMSwgcGFyYW0yKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKHBhcmFtMSwgcGFyYW0yKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gRXZlbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEZpZWxkIHtcclxuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEZpZWxkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBGaWVsZFZpZXdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdmlldy9GaWVsZFZpZXdcIikpO1xyXG5jb25zdCBFdmVudF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9FdmVudFwiKSk7XHJcbmNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVycywgc3RyYXRlZ3ksIGZpZWxkKSB7XHJcbiAgICAgICAgdGhpcy5pc0ZpbmlzaGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy53aW5uZWRJZCA9IC0xO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2VsbEV2ZW50ID0gbmV3IEV2ZW50XzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMucGxheWVycyA9IHBsYXllcnM7XHJcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xyXG4gICAgICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcclxuICAgICAgICAvLyBjb25zaWRlciByZW1vdmluZyBiZWxvdyB0aGlzIGZyb20gY29uc3RydWN0b3IgdG8gaW5pdCAoKTtcclxuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5zdHJhdGVneS5pbml0KHRoaXMuZmllbGQuc2l6ZS54LCB0aGlzLmZpZWxkLnNpemUueSk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IEZpZWxkVmlld18xLmRlZmF1bHQodGhpcy5maWVsZC5zaXplLngsIHRoaXMuZmllbGQuc2l6ZS55KTtcclxuICAgICAgICB0aGlzLnR1cm4gPSAxO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllckluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ib2FyZCA9IHRoaXMuc3RyYXRlZ3kuaW5pdCh0aGlzLmZpZWxkLnNpemUueCwgdGhpcy5maWVsZC5zaXplLnkpO1xyXG4gICAgICAgIC8vIHRoaXMudmlldyA9IG5ldyBGaWVsZFZpZXcodGhpcy5maWVsZC5zaXplLngsIHRoaXMuZmllbGQuc2l6ZS55KTtcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy52aWV3LnJlbmRlckZpZWxkKCk7XHJcbiAgICAgICAgdGhpcy52aWV3LnBsYXlFdmVudC5hZGRMaXN0ZW5lcigoeCwgeSkgPT4gdGhpcy5tYWtlTW92ZSh4LCB5KSk7XHJcbiAgICAgICAgLy8gdGhpcy51cGRhdGVDZWxsRXZlbnQudHJpZ2dlcihjZWxsSWQ6IG51bWJlcik7XHJcbiAgICB9XHJcbiAgICBtYWtlTW92ZSh4LCB5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYG1ha2VNb3ZlIGludm9rZWQgJHt4fSAke3l9YCk7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IHRoaXMuc3RyYXRlZ3kuaXNUdXJuVmFsaWQodGhpcy5ib2FyZCwgeCwgeSk7XHJcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdHJhdGVneS5zZXRWYWx1ZSh0aGlzLmJvYXJkLCB4LCB5LCB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudmlldy4gc2hvdyBNb3ZlIChzZXQgdmFsdWUpXHJcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lcklkID0gdGhpcy5zdHJhdGVneS5jaGVja1dpbih0aGlzLmJvYXJkKTtcclxuICAgICAgICAgICAgaWYgKHdpbm5lcklkIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUNlbGwoeCwgeSwgdGhpcy5wbGF5ZXJzW3RoaXMuY3VycmVudFBsYXllckluZGV4XS5zaWduKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVHVybkFuZE5leHRQbGF5ZXIoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYm9hcmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy52aWV3OyAvLyBzaG93IHdpbm5lciBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5lZElkID0gdGhpcy5jdXJyZW50UGxheWVySW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlVHVybkFuZE5leHRQbGF5ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVySW5kZXggPSB0aGlzLnR1cm4gJSB0aGlzLnBsYXllcnMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMudHVybiArPSAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBjdXJyZW50VHVybiAke3RoaXMudHVybn0gY3VyclBsYXllckluZGV4ID0gJHt0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleH1gKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBGaWVsZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0ZpZWxkXCIpKTtcclxuY29uc3QgR2FtZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbnRyb2xsZXIxL0dhbWVcIikpO1xyXG5jb25zdCBQbGF5ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tb2RlbDEvUGxheWVyXCIpKTtcclxuY29uc3QgVGlja1RhY1RvZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21vZGVsMS9UaWNrVGFjVG9lXCIpKTtcclxuLy8gaW1wb3J0IEZvdXJJblRoZVJvdyBmcm9tICcuL21vZGVsMS9Gb3VySW5UaGVSb3cnO1xyXG5jb25zdCBnYW1lID0gbmV3IEdhbWVfMS5kZWZhdWx0KFtuZXcgUGxheWVyXzEuZGVmYXVsdCgnQXRhJywgJ1gnKSwgbmV3IFBsYXllcl8xLmRlZmF1bHQoJ0RaJywgJ1knKSwgbmV3IFBsYXllcl8xLmRlZmF1bHQoJ0RlbmlzJywgJ0QnKV0sIG5ldyBUaWNrVGFjVG9lXzEuZGVmYXVsdCgpLCBuZXcgRmllbGRfMS5kZWZhdWx0KHsgeDogNCwgeTogNCB9KSk7XHJcbmdhbWUuaW5pdCgpO1xyXG5jb25zb2xlLmxvZyhnYW1lKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHNpZ24pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc2lnbiA9IHNpZ247XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gUGxheWVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBTdHJhdGVneSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXQgPSAoeCwgeSkgPT4gQXJyYXkoeCkuZmlsbChBcnJheSh5KS5maWxsKDApKTtcclxuICAgICAgICB0aGlzLmlzVHVyblZhbGlkID0gKGJvYXJkLCB4LCB5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYm9hcmRbeF1beV07XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gMDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUgPSAoYm9hcmQsIHgsIHksIHBsYXllcklkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBib2FyZFt4XTtcclxuICAgICAgICAgICAgbGluZVt5XSA9IHBsYXllcklkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2V0VmFsdWUgJHtib2FyZH1gKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFN0cmF0ZWd5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBTdHJhdGVneV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1N0cmF0ZWd5XCIpKTtcclxuY2xhc3MgVGljVGFjVG9lIGV4dGVuZHMgU3RyYXRlZ3lfMS5kZWZhdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5nZXROYW1lID0gKCkgPT4gJ1RpY1RhY1RvZSc7XHJcbiAgICAgICAgdGhpcy5jaGVja1dpbiA9IChib2FyZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaXplID0gYm9hcmQubGVuZ3RoO1xyXG4gICAgICAgICAgICByZXR1cm4gc2l6ZSAtIDEwMDA7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBUaWNUYWNUb2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IEV2ZW50XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL0V2ZW50XCIpKTtcclxuY2xhc3MgRmllbGRWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIGJvYXJkID0gW10sIHBsYXlFdmVudCA9IG5ldyBFdmVudF8xLmRlZmF1bHQoKSwgdXBkYXRlQ2VsbEV2ZW50ID0gbmV3IEV2ZW50XzEuZGVmYXVsdCgpKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgICAgICB0aGlzLnBsYXlFdmVudCA9IHBsYXlFdmVudDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNlbGxFdmVudCA9IHVwZGF0ZUNlbGxFdmVudDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNlbGwgPSAoeCwgeSwgc2lnbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlQ2VsbCcgKyAneCcgKyAnICcgKyAneScpO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldLmlubmVySFRNTCA9IHNpZ247XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdlbmVyYXRlRmllbGQoKSB7XHJcbiAgICAgICAgY29uc3QgdGFibGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgdGFibGVFbC5jbGFzc05hbWUgPSAndGFibGUtYm9yZGVyZWQnO1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRhYmxlRWwuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnk7IGogKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldLnB1c2goY2VsbCk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcclxuICAgICAgICAgICAgICAgIGNlbGwuaWQgPSBgJHsoY291bnRlciArPSAxKX1gO1xyXG4gICAgICAgICAgICAgICAgY2VsbC50YWJJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBnZW5lcmF0ZSR7aX0ke2p9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5RXZlbnQudHJpZ2dlclR3byhpLCBqKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YWJsZUVsO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyRmllbGQoKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5nZW5lcmF0ZUZpZWxkKCk7XHJcbiAgICAgICAgbWFpbkVsZW0/LmFwcGVuZChmaWVsZCk7XHJcbiAgICB9XHJcbiAgICAvLyBjbGlja0ZpZWxkRWwoYWN0aW9uKTogdm9pZCB7XHJcbiAgICAvLyAgIHRoaXMuYm9hcmQuZm9yRWFjaCgoZWw6IGFueSk6IHZvaWQgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gYWN0aW9uKGUpKSk7XHJcbiAgICAvLyB9XHJcbiAgICByZXNldEZpZWxkKCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmQuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGQgPSBlbDtcclxuICAgICAgICAgICAgdGQudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBGaWVsZFZpZXc7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9