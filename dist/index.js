/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/games/Strategy.ts":
/*!*******************************!*\
  !*** ./src/games/Strategy.ts ***!
  \*******************************/
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
      result.push(new Array(y).fill(0));
    }

    return result;
  };

  this.isTurnValid = function (board, x, y) {
    return board[x][y] === 0;
  };

  this.setValue = function (board, x, y, playerId) {
    board[x][y] = playerId + 1;
  };

  this.checkDraw = function (board) {
    return board.slice().flat().every(function (cell) {
      return cell !== 0;
    });
  };
};

exports.default = Strategy;

/***/ }),

/***/ "./src/games/TickTacToe.ts":
/*!*********************************!*\
  !*** ./src/games/TickTacToe.ts ***!
  \*********************************/
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

var Strategy_1 = __importDefault(__webpack_require__(/*! ./Strategy */ "./src/games/Strategy.ts"));

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
      var winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
      var cells = board.slice().flat();
      var isWinCombinations = winCombinations.some(function (line) {
        return cells[line[0]] && cells[line[0]] === cells[line[1]] && cells[line[1]] === cells[line[2]];
      });
      if (isWinCombinations) return true;
      return false;
    };

    _this.setPlayerToken = function (players) {
      var tokens = ['X', 'O'];
      return players.slice().map(function (player, i) {
        var currentPlayer = player;
        currentPlayer = {
          name: player,
          sign: tokens[i]
        };
        return currentPlayer;
      });
    };

    return _this;
  }

  return TicTacToe;
}(Strategy_1["default"]);

exports.default = TicTacToe;

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

var HTMLView_1 = __importDefault(__webpack_require__(/*! ./view/HTMLView */ "./src/view/HTMLView.ts"));

var Game_1 = __importDefault(__webpack_require__(/*! ./model/Game */ "./src/model/Game.ts"));

var TickTacToe_1 = __importDefault(__webpack_require__(/*! ./games/TickTacToe */ "./src/games/TickTacToe.ts"));

var game = new Game_1["default"]({
  playersList: ['player One', 'player Two'],
  strategy: new TickTacToe_1["default"](),
  fieldSize: {
    x: 3,
    y: 3
  }
});
var HTMLViewGame = new HTMLView_1["default"](game);
HTMLViewGame.render('.main');

/***/ }),

/***/ "./src/model/Field.ts":
/*!****************************!*\
  !*** ./src/model/Field.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Field = function Field(size) {
  var board = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  _classCallCheck(this, Field);

  this.size = size;
  this.board = board;
};

exports.default = Field;

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

var Field_1 = __importDefault(__webpack_require__(/*! ./Field */ "./src/model/Field.ts"));

var Observer_1 = __importDefault(__webpack_require__(/*! ../utils/Observer */ "./src/utils/Observer.ts"));

var Game = /*#__PURE__*/function () {
  function Game(gameInfo) {
    var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      size: {
        x: 1,
        y: 1
      },
      board: []
    };
    var players = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var turn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var currentPlayerIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var isFinished = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var updateCellEvent = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new Observer_1["default"]();
    var winEvent = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : new Observer_1["default"]();

    _classCallCheck(this, Game);

    this.gameInfo = gameInfo;
    this.field = field;
    this.players = players;
    this.turn = turn;
    this.currentPlayerIndex = currentPlayerIndex;
    this.isFinished = isFinished;
    this.updateCellEvent = updateCellEvent;
    this.winEvent = winEvent;
    this.players = this.gameInfo.strategy.setPlayerToken(gameInfo.playersList);
    this.field = new Field_1["default"](this.gameInfo.fieldSize);
    this.field.board = this.gameInfo.strategy.init(this.field.size.x, this.field.size.y);
  }

  _createClass(Game, [{
    key: "makeMove",
    value: function makeMove(_ref) {
      var x = _ref.x,
          y = _ref.y;
      console.log(this);
      var isValid = this.gameInfo.strategy.isTurnValid(this.field.board, x, y);

      if (!isValid) {
        return;
      }

      if (!this.isFinished) {
        this.gameInfo.strategy.setValue(this.field.board, x, y, this.currentPlayerIndex);
        this.updateCellEvent.trigger({
          x: x,
          y: y,
          sign: this.players[this.currentPlayerIndex].sign
        });
      }

      var isPlayerWin = this.gameInfo.strategy.checkWin(this.field.board);
      var isCellsFulled = this.gameInfo.strategy.checkDraw(this.field.board);
      if (isCellsFulled) this.winEvent.trigger('no one');
      if (isPlayerWin) this.winEvent.trigger(this.players[this.currentPlayerIndex].name);

      if (isPlayerWin || isCellsFulled) {
        this.isFinished = true;
        this.clearBoard();
      } else {
        this.updateTurnAndNextPlayer();
      }
    }
  }, {
    key: "updateTurnAndNextPlayer",
    value: function updateTurnAndNextPlayer() {
      this.currentPlayerIndex = (this.turn + 1) % this.players.length;
      this.turn += 1;
    }
  }, {
    key: "clearBoard",
    value: function clearBoard() {
      for (var i = 0; i < this.field.size.x; i += 1) {
        for (var j = 0; j < this.field.size.y; j += 1) {
          this.field.board[i][j] = 0;
        }
      }

      this.isFinished = false;
      this.turn = 0;
      this.currentPlayerIndex = 0;
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),

/***/ "./src/utils/Observer.ts":
/*!*******************************!*\
  !*** ./src/utils/Observer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Observer = /*#__PURE__*/function () {
  function Observer() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Observer);

    this.listeners = listeners;
  }

  _createClass(Observer, [{
    key: "addListener",
    value: function addListener(listener) {
      this.listeners.push(listener);
    }
  }, {
    key: "trigger",
    value: function trigger(data) {
      this.listeners.forEach(function (listener) {
        return listener(data);
      });
    }
  }]);

  return Observer;
}();

exports.default = Observer;

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

var Observer_1 = __importDefault(__webpack_require__(/*! ../utils/Observer */ "./src/utils/Observer.ts"));

var FieldView = /*#__PURE__*/function () {
  function FieldView(x, y) {
    var _this = this;

    var board = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var playEvent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Observer_1["default"]();
    var resultMessage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : document.createElement('h2');

    _classCallCheck(this, FieldView);

    this.x = x;
    this.y = y;
    this.board = board;
    this.playEvent = playEvent;
    this.resultMessage = resultMessage;

    this.updateCell = function (_ref) {
      var x = _ref.x,
          y = _ref.y,
          sign = _ref.sign;
      _this.board[x][y].innerHTML = sign;
    };
  }

  _createClass(FieldView, [{
    key: "generateField",
    value: function generateField(classTable) {
      var _this2 = this;

      var tableEl = document.createElement('table');
      tableEl.className = classTable;

      var _loop = function _loop(i, _counter) {
        var row = tableEl.insertRow();
        _this2.board[i] = [];

        var _loop2 = function _loop2(j) {
          var cell = row.insertCell();

          _this2.board[i].push(cell);

          cell.className = 'cell';
          cell.id = "".concat(_counter += 1);
          cell.tabIndex = 1;
          cell.addEventListener('click', function () {
            _this2.playEvent.trigger({
              x: i,
              y: j
            });
          });
        };

        for (var j = 0; j < _this2.y; j += 1) {
          _loop2(j);
        }

        counter = _counter;
      };

      for (var i = 0, counter = 0; i < this.x; i += 1) {
        _loop(i, counter);
      }

      return tableEl;
    }
  }, {
    key: "renderField",
    value: function renderField(idElement, classTable) {
      var mainElem = document.querySelector(idElement);
      var field = this.generateField(classTable);
      mainElem === null || mainElem === void 0 ? void 0 : mainElem.append(field);
      mainElem === null || mainElem === void 0 ? void 0 : mainElem.append(this.resultMessage);
    }
  }, {
    key: "clearField",
    value: function clearField() {
      this.board.forEach(function (el) {
        el.forEach(function (item) {
          var currentItem = item;
          currentItem.textContent = '';
        });
      });
    }
  }, {
    key: "showWin",
    value: function showWin(winner) {
      this.resultMessage.innerHTML = "".concat(winner, " win");
      this.clearField();
    }
  }]);

  return FieldView;
}();

exports.default = FieldView;

/***/ }),

/***/ "./src/view/HTMLView.ts":
/*!******************************!*\
  !*** ./src/view/HTMLView.ts ***!
  \******************************/
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

var FieldView_1 = __importDefault(__webpack_require__(/*! ./FieldView */ "./src/view/FieldView.ts"));

var PlayerView_1 = __importDefault(__webpack_require__(/*! ./PlayerView */ "./src/view/PlayerView.ts"));

var HTMLView = /*#__PURE__*/function () {
  function HTMLView(game) {
    var _this = this;

    var view = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FieldView_1["default"](game.field.size.x, game.field.size.y);
    var players = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new PlayerView_1["default"]();

    _classCallCheck(this, HTMLView);

    this.game = game;
    this.view = view;
    this.players = players;
    this.view.playEvent.addListener(function (_ref) {
      var x = _ref.x,
          y = _ref.y;
      return _this.game.makeMove({
        x: x,
        y: y
      });
    });
    this.game.updateCellEvent.addListener(function (_ref2) {
      var x = _ref2.x,
          y = _ref2.y,
          sign = _ref2.sign;
      return _this.view.updateCell({
        x: x,
        y: y,
        sign: sign
      });
    });
    this.game.winEvent.addListener(function (winner) {
      return _this.view.showWin(winner);
    });
  }

  _createClass(HTMLView, [{
    key: "render",
    value: function render(idElement) {
      this.view.renderField(idElement, 'table-bordered');
      this.players.renderPlayer(this.game.players, '.main');
    }
  }]);

  return HTMLView;
}();

exports.default = HTMLView;

/***/ }),

/***/ "./src/view/PlayerView.ts":
/*!********************************!*\
  !*** ./src/view/PlayerView.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var PlayerView = function PlayerView() {
  _classCallCheck(this, PlayerView);

  this.renderPlayer = function (players, classSelector) {
    var playersBlock = document.querySelector(classSelector);
    players.forEach(function (itemName, index) {
      return playersBlock === null || playersBlock === void 0 ? void 0 : playersBlock.insertAdjacentHTML('beforeend', "<h3 class=\"player-name\">Player ".concat(index + 1, ": ").concat(itemName.name, "</h3></div>"));
    });
  };
};

exports.default = PlayerView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvZ2FtZXMvU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL2dhbWVzL1RpY2tUYWNUb2UudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy9tb2RlbC9GaWVsZC50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvbW9kZWwvR2FtZS50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvdXRpbHMvT2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL3ZpZXcvRmllbGRWaWV3LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy92aWV3L0hUTUxWaWV3LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy92aWV3L1BsYXllclZpZXcudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWUtY29yZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiT2JqZWN0IiwidmFsdWUiLCJTdHJhdGVneSIsImluaXQiLCJ4IiwieSIsInJlc3VsdCIsImkiLCJwdXNoIiwiQXJyYXkiLCJmaWxsIiwiaXNUdXJuVmFsaWQiLCJib2FyZCIsInNldFZhbHVlIiwicGxheWVySWQiLCJjaGVja0RyYXciLCJzbGljZSIsImZsYXQiLCJldmVyeSIsImNlbGwiLCJleHBvcnRzIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsIlN0cmF0ZWd5XzEiLCJyZXF1aXJlIiwiVGljVGFjVG9lIiwiYXJndW1lbnRzIiwiZ2V0TmFtZSIsImNoZWNrV2luIiwid2luQ29tYmluYXRpb25zIiwiY2VsbHMiLCJpc1dpbkNvbWJpbmF0aW9ucyIsInNvbWUiLCJsaW5lIiwic2V0UGxheWVyVG9rZW4iLCJwbGF5ZXJzIiwidG9rZW5zIiwibWFwIiwicGxheWVyIiwiY3VycmVudFBsYXllciIsIm5hbWUiLCJzaWduIiwiSFRNTFZpZXdfMSIsIkdhbWVfMSIsIlRpY2tUYWNUb2VfMSIsImdhbWUiLCJwbGF5ZXJzTGlzdCIsInN0cmF0ZWd5IiwiZmllbGRTaXplIiwiSFRNTFZpZXdHYW1lIiwicmVuZGVyIiwiRmllbGQiLCJzaXplIiwiRmllbGRfMSIsIk9ic2VydmVyXzEiLCJHYW1lIiwiZ2FtZUluZm8iLCJmaWVsZCIsInR1cm4iLCJjdXJyZW50UGxheWVySW5kZXgiLCJpc0ZpbmlzaGVkIiwidXBkYXRlQ2VsbEV2ZW50Iiwid2luRXZlbnQiLCJjb25zb2xlIiwibG9nIiwiaXNWYWxpZCIsInRyaWdnZXIiLCJpc1BsYXllcldpbiIsImlzQ2VsbHNGdWxsZWQiLCJjbGVhckJvYXJkIiwidXBkYXRlVHVybkFuZE5leHRQbGF5ZXIiLCJsZW5ndGgiLCJqIiwiT2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJsaXN0ZW5lciIsImRhdGEiLCJmb3JFYWNoIiwiRmllbGRWaWV3IiwicGxheUV2ZW50IiwicmVzdWx0TWVzc2FnZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInVwZGF0ZUNlbGwiLCJpbm5lckhUTUwiLCJjbGFzc1RhYmxlIiwidGFibGVFbCIsImNsYXNzTmFtZSIsInJvdyIsImluc2VydFJvdyIsImluc2VydENlbGwiLCJpZCIsImNvdW50ZXIiLCJ0YWJJbmRleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpZEVsZW1lbnQiLCJtYWluRWxlbSIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUZpZWxkIiwiYXBwZW5kIiwiZWwiLCJpdGVtIiwiY3VycmVudEl0ZW0iLCJ0ZXh0Q29udGVudCIsIndpbm5lciIsImNsZWFyRmllbGQiLCJGaWVsZFZpZXdfMSIsIlBsYXllclZpZXdfMSIsIkhUTUxWaWV3IiwidmlldyIsImFkZExpc3RlbmVyIiwibWFrZU1vdmUiLCJzaG93V2luIiwicmVuZGVyRmllbGQiLCJyZW5kZXJQbGF5ZXIiLCJQbGF5ZXJWaWV3IiwiY2xhc3NTZWxlY3RvciIsInBsYXllcnNCbG9jayIsIml0ZW1OYW1lIiwiaW5kZXgiLCJpbnNlcnRBZGphY2VudEhUTUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7OztBQUNiQSw4Q0FBNkM7QUFBRUMsT0FBSyxFQUFFO0FBQVQsQ0FBN0M7O0lBQ01DLFEsR0FDRixvQkFBYztBQUFBOztBQUNWLE9BQUtDLElBQUwsR0FBWSxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNsQixRQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILENBQXBCLEVBQXVCRyxDQUFDLElBQUksQ0FBNUIsRUFBK0I7QUFDM0JELFlBQU0sQ0FBQ0UsSUFBUCxDQUFZLElBQUlDLEtBQUosQ0FBVUosQ0FBVixFQUFhSyxJQUFiLENBQWtCLENBQWxCLENBQVo7QUFDSDs7QUFDRCxXQUFPSixNQUFQO0FBQ0gsR0FORDs7QUFPQSxPQUFLSyxXQUFMLEdBQW1CLFVBQUNDLEtBQUQsRUFBUVIsQ0FBUixFQUFXQyxDQUFYO0FBQUEsV0FBaUJPLEtBQUssQ0FBQ1IsQ0FBRCxDQUFMLENBQVNDLENBQVQsTUFBZ0IsQ0FBakM7QUFBQSxHQUFuQjs7QUFDQSxPQUFLUSxRQUFMLEdBQWdCLFVBQUNELEtBQUQsRUFBUVIsQ0FBUixFQUFXQyxDQUFYLEVBQWNTLFFBQWQsRUFBMkI7QUFBRUYsU0FBSyxDQUFDUixDQUFELENBQUwsQ0FBU0MsQ0FBVCxJQUFjUyxRQUFRLEdBQUcsQ0FBekI7QUFBNkIsR0FBMUU7O0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixVQUFDSCxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDSSxLQUFOLEdBQWNDLElBQWQsR0FBcUJDLEtBQXJCLENBQTJCLFVBQUNDLElBQUQ7QUFBQSxhQUFVQSxJQUFJLEtBQUssQ0FBbkI7QUFBQSxLQUEzQixDQUFYO0FBQUEsR0FBakI7QUFDSCxDOztBQUVMQyxlQUFBLEdBQWtCbEIsUUFBbEIsQzs7Ozs7Ozs7OztB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RyxrQkFBZCxDQUFpQyxXQUFqQyw2Q0FBZ0ZELEtBQUssR0FBRyxDQUF4RixlQUE4RkQsUUFBUSxDQUFDOUUsSUFBdkcsaUJBQXJCO0FBQUEsS0FBaEI7QUFDSCxHQUhEO0FBSUgsQzs7QUFFTHJCLGVBQUEsR0FBa0JnRyxVQUFsQixDOzs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgU3RyYXRlZ3kge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0ID0gKHgsIHkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuZXcgQXJyYXkoeSkuZmlsbCgwKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaXNUdXJuVmFsaWQgPSAoYm9hcmQsIHgsIHkpID0+IGJvYXJkW3hdW3ldID09PSAwO1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWUgPSAoYm9hcmQsIHgsIHksIHBsYXllcklkKSA9PiB7IGJvYXJkW3hdW3ldID0gcGxheWVySWQgKyAxOyB9O1xyXG4gICAgICAgIHRoaXMuY2hlY2tEcmF3ID0gKGJvYXJkKSA9PiBib2FyZC5zbGljZSgpLmZsYXQoKS5ldmVyeSgoY2VsbCkgPT4gY2VsbCAhPT0gMCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU3RyYXRlZ3k7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFN0cmF0ZWd5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU3RyYXRlZ3lcIikpO1xyXG5jbGFzcyBUaWNUYWNUb2UgZXh0ZW5kcyBTdHJhdGVneV8xLmRlZmF1bHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLmdldE5hbWUgPSAoKSA9PiAnVGljVGFjVG9lJztcclxuICAgICAgICB0aGlzLmNoZWNrV2luID0gKGJvYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbkNvbWJpbmF0aW9ucyA9IFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFszLCA0LCA1XSxcclxuICAgICAgICAgICAgICAgIFs2LCA3LCA4XSxcclxuICAgICAgICAgICAgICAgIFswLCAzLCA2XSxcclxuICAgICAgICAgICAgICAgIFsxLCA0LCA3XSxcclxuICAgICAgICAgICAgICAgIFsyLCA1LCA4XSxcclxuICAgICAgICAgICAgICAgIFswLCA0LCA4XSxcclxuICAgICAgICAgICAgICAgIFsyLCA0LCA2XSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgY29uc3QgY2VsbHMgPSBib2FyZC5zbGljZSgpLmZsYXQoKTtcclxuICAgICAgICAgICAgY29uc3QgaXNXaW5Db21iaW5hdGlvbnMgPSB3aW5Db21iaW5hdGlvbnMuc29tZSgobGluZSkgPT4gY2VsbHNbbGluZVswXV1cclxuICAgICAgICAgICAgICAgICYmIGNlbGxzW2xpbmVbMF1dID09PSBjZWxsc1tsaW5lWzFdXVxyXG4gICAgICAgICAgICAgICAgJiYgY2VsbHNbbGluZVsxXV0gPT09IGNlbGxzW2xpbmVbMl1dKTtcclxuICAgICAgICAgICAgaWYgKGlzV2luQ29tYmluYXRpb25zKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2V0UGxheWVyVG9rZW4gPSAocGxheWVycykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBbJ1gnLCAnTyddO1xyXG4gICAgICAgICAgICByZXR1cm4gcGxheWVycy5zbGljZSgpLm1hcCgocGxheWVyLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBsYXllciA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXIgPSB7IG5hbWU6IHBsYXllciwgc2lnbjogdG9rZW5zW2ldIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFBsYXllcjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBUaWNUYWNUb2U7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IEhUTUxWaWV3XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdmlldy9IVE1MVmlld1wiKSk7XHJcbmNvbnN0IEdhbWVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9tb2RlbC9HYW1lXCIpKTtcclxuY29uc3QgVGlja1RhY1RvZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2dhbWVzL1RpY2tUYWNUb2VcIikpO1xyXG5jb25zdCBnYW1lID0gbmV3IEdhbWVfMS5kZWZhdWx0KHtcclxuICAgIHBsYXllcnNMaXN0OiBbJ3BsYXllciBPbmUnLCAncGxheWVyIFR3byddLFxyXG4gICAgc3RyYXRlZ3k6IG5ldyBUaWNrVGFjVG9lXzEuZGVmYXVsdCgpLFxyXG4gICAgZmllbGRTaXplOiB7IHg6IDMsIHk6IDMgfSxcclxufSk7XHJcbmNvbnN0IEhUTUxWaWV3R2FtZSA9IG5ldyBIVE1MVmlld18xLmRlZmF1bHQoZ2FtZSk7XHJcbkhUTUxWaWV3R2FtZS5yZW5kZXIoJy5tYWluJyk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEZpZWxkIHtcclxuICAgIGNvbnN0cnVjdG9yKHNpemUsIGJvYXJkID0gW10pIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBGaWVsZDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgRmllbGRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9GaWVsZFwiKSk7XHJcbmNvbnN0IE9ic2VydmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL3V0aWxzL09ic2VydmVyXCIpKTtcclxuY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lSW5mbywgZmllbGQgPSB7IHNpemU6IHsgeDogMSwgeTogMSB9LCBib2FyZDogW10gfSwgcGxheWVycyA9IFtdLCBcclxuICAgIC8vIHByaXZhdGUgYm9hcmQ6IG51bWJlcltdW10gPSBbXSxcclxuICAgIHR1cm4gPSAwLCBjdXJyZW50UGxheWVySW5kZXggPSAwLCBpc0ZpbmlzaGVkID0gZmFsc2UsIHVwZGF0ZUNlbGxFdmVudCA9IG5ldyBPYnNlcnZlcl8xLmRlZmF1bHQoKSwgd2luRXZlbnQgPSBuZXcgT2JzZXJ2ZXJfMS5kZWZhdWx0KCkpIHtcclxuICAgICAgICB0aGlzLmdhbWVJbmZvID0gZ2FtZUluZm87XHJcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xyXG4gICAgICAgIHRoaXMucGxheWVycyA9IHBsYXllcnM7XHJcbiAgICAgICAgdGhpcy50dXJuID0gdHVybjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCA9IGN1cnJlbnRQbGF5ZXJJbmRleDtcclxuICAgICAgICB0aGlzLmlzRmluaXNoZWQgPSBpc0ZpbmlzaGVkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2VsbEV2ZW50ID0gdXBkYXRlQ2VsbEV2ZW50O1xyXG4gICAgICAgIHRoaXMud2luRXZlbnQgPSB3aW5FdmVudDtcclxuICAgICAgICB0aGlzLnBsYXllcnMgPSB0aGlzLmdhbWVJbmZvLnN0cmF0ZWd5LnNldFBsYXllclRva2VuKGdhbWVJbmZvLnBsYXllcnNMaXN0KTtcclxuICAgICAgICB0aGlzLmZpZWxkID0gbmV3IEZpZWxkXzEuZGVmYXVsdCh0aGlzLmdhbWVJbmZvLmZpZWxkU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5maWVsZC5ib2FyZCA9IHRoaXMuZ2FtZUluZm8uc3RyYXRlZ3kuaW5pdCh0aGlzLmZpZWxkLnNpemUueCwgdGhpcy5maWVsZC5zaXplLnkpO1xyXG4gICAgfVxyXG4gICAgbWFrZU1vdmUoeyB4LCB5IH0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy5nYW1lSW5mby5zdHJhdGVneS5pc1R1cm5WYWxpZCh0aGlzLmZpZWxkLmJvYXJkLCB4LCB5KTtcclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNGaW5pc2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbmZvLnN0cmF0ZWd5LnNldFZhbHVlKHRoaXMuZmllbGQuYm9hcmQsIHgsIHksIHRoaXMuY3VycmVudFBsYXllckluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDZWxsRXZlbnQudHJpZ2dlcih7IHgsIHksIHNpZ246IHRoaXMucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleF0uc2lnbiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNQbGF5ZXJXaW4gPSB0aGlzLmdhbWVJbmZvLnN0cmF0ZWd5LmNoZWNrV2luKHRoaXMuZmllbGQuYm9hcmQpO1xyXG4gICAgICAgIGNvbnN0IGlzQ2VsbHNGdWxsZWQgPSB0aGlzLmdhbWVJbmZvLnN0cmF0ZWd5LmNoZWNrRHJhdyh0aGlzLmZpZWxkLmJvYXJkKTtcclxuICAgICAgICBpZiAoaXNDZWxsc0Z1bGxlZClcclxuICAgICAgICAgICAgdGhpcy53aW5FdmVudC50cmlnZ2VyKCdubyBvbmUnKTtcclxuICAgICAgICBpZiAoaXNQbGF5ZXJXaW4pXHJcbiAgICAgICAgICAgIHRoaXMud2luRXZlbnQudHJpZ2dlcih0aGlzLnBsYXllcnNbdGhpcy5jdXJyZW50UGxheWVySW5kZXhdLm5hbWUpO1xyXG4gICAgICAgIGlmIChpc1BsYXllcldpbiB8fCBpc0NlbGxzRnVsbGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJCb2FyZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUdXJuQW5kTmV4dFBsYXllcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZVR1cm5BbmROZXh0UGxheWVyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllckluZGV4ID0gKHRoaXMudHVybiArIDEpICUgdGhpcy5wbGF5ZXJzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnR1cm4gKz0gMTtcclxuICAgIH1cclxuICAgIGNsZWFyQm9hcmQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpZWxkLnNpemUueDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5maWVsZC5zaXplLnk7IGogKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZC5ib2FyZFtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0ZpbmlzaGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50dXJuID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgT2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IobGlzdGVuZXJzID0gW10pIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IGxpc3RlbmVycztcclxuICAgIH1cclxuICAgIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICB0cmlnZ2VyKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoZGF0YSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE9ic2VydmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBPYnNlcnZlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlscy9PYnNlcnZlclwiKSk7XHJcbmNsYXNzIEZpZWxkVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBib2FyZCA9IFtdLCBwbGF5RXZlbnQgPSBuZXcgT2JzZXJ2ZXJfMS5kZWZhdWx0KCksIHJlc3VsdE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgICAgICB0aGlzLnBsYXlFdmVudCA9IHBsYXlFdmVudDtcclxuICAgICAgICB0aGlzLnJlc3VsdE1lc3NhZ2UgPSByZXN1bHRNZXNzYWdlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2VsbCA9ICh7IHgsIHksIHNpZ24gfSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldLmlubmVySFRNTCA9IHNpZ247XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGdlbmVyYXRlRmllbGQoY2xhc3NUYWJsZSkge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgICAgIHRhYmxlRWwuY2xhc3NOYW1lID0gY2xhc3NUYWJsZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgY291bnRlciA9IDA7IGkgPCB0aGlzLng7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSB0YWJsZUVsLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy55OyBqICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXS5wdXNoKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmlkID0gYCR7KGNvdW50ZXIgKz0gMSl9YDtcclxuICAgICAgICAgICAgICAgIGNlbGwudGFiSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlFdmVudC50cmlnZ2VyKHsgeDogaSwgeTogaiB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YWJsZUVsO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyRmllbGQoaWRFbGVtZW50LCBjbGFzc1RhYmxlKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmdlbmVyYXRlRmllbGQoY2xhc3NUYWJsZSk7XHJcbiAgICAgICAgbWFpbkVsZW0/LmFwcGVuZChmaWVsZCk7XHJcbiAgICAgICAgbWFpbkVsZW0/LmFwcGVuZCh0aGlzLnJlc3VsdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgY2xlYXJGaWVsZCgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGVsLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2hvd1dpbih3aW5uZXIpIHtcclxuICAgICAgICB0aGlzLnJlc3VsdE1lc3NhZ2UuaW5uZXJIVE1MID0gYCR7d2lubmVyfSB3aW5gO1xyXG4gICAgICAgIHRoaXMuY2xlYXJGaWVsZCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEZpZWxkVmlldztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgRmllbGRWaWV3XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRmllbGRWaWV3XCIpKTtcclxuY29uc3QgUGxheWVyVmlld18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1BsYXllclZpZXdcIikpO1xyXG5jbGFzcyBIVE1MVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB2aWV3ID0gbmV3IEZpZWxkVmlld18xLmRlZmF1bHQoZ2FtZS5maWVsZC5zaXplLngsIGdhbWUuZmllbGQuc2l6ZS55KSwgcGxheWVycyA9IG5ldyBQbGF5ZXJWaWV3XzEuZGVmYXVsdCgpKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHRoaXMucGxheWVycyA9IHBsYXllcnM7XHJcbiAgICAgICAgdGhpcy52aWV3LnBsYXlFdmVudC5hZGRMaXN0ZW5lcigoeyB4LCB5IH0pID0+IHRoaXMuZ2FtZS5tYWtlTW92ZSh7IHgsIHkgfSkpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS51cGRhdGVDZWxsRXZlbnRcclxuICAgICAgICAgICAgLmFkZExpc3RlbmVyKCh7IHgsIHksIHNpZ24gfSkgPT4gdGhpcy52aWV3LnVwZGF0ZUNlbGwoeyB4LCB5LCBzaWduIH0pKTtcclxuICAgICAgICB0aGlzLmdhbWUud2luRXZlbnQuYWRkTGlzdGVuZXIoKHdpbm5lcikgPT4gdGhpcy52aWV3LnNob3dXaW4od2lubmVyKSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoaWRFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy52aWV3LnJlbmRlckZpZWxkKGlkRWxlbWVudCwgJ3RhYmxlLWJvcmRlcmVkJyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzLnJlbmRlclBsYXllcih0aGlzLmdhbWUucGxheWVycywgJy5tYWluJyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gSFRNTFZpZXc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFBsYXllclZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQbGF5ZXIgPSAocGxheWVycywgY2xhc3NTZWxlY3RvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwbGF5ZXJzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBwbGF5ZXJzLmZvckVhY2goKGl0ZW1OYW1lLCBpbmRleCkgPT4gcGxheWVyc0Jsb2NrPy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8aDMgY2xhc3M9XCJwbGF5ZXItbmFtZVwiPlBsYXllciAke2luZGV4ICsgMX06ICR7aXRlbU5hbWUubmFtZX08L2gzPjwvZGl2PmApKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFBsYXllclZpZXc7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9