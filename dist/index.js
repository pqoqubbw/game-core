/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/games/Strategy.ts":
/*!*******************************!*\
  !*** ./src/games/Strategy.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Strategy = function Strategy() {
  _classCallCheck(this, Strategy);

  _defineProperty(this, "init", function (x, y) {
    var result = [];

    for (var i = 0; i < x; i += 1) {
      result.push(new Array(y).fill(0));
    }

    return result;
  });

  _defineProperty(this, "isTurnValid", function (board, x, y) {
    return board[x][y] === 0;
  });

  _defineProperty(this, "setValue", function (board, x, y, playerId) {
    board[x][y] = playerId + 1;
  });

  _defineProperty(this, "checkDraw", function (board) {
    return board.slice().flat().every(function (cell) {
      return cell !== 0;
    });
  });
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getName", function () {
      return 'TicTacToe';
    });

    _defineProperty(_assertThisInitialized(_this), "checkWin", function (board) {
      var winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
      var cells = board.slice().flat();
      var isWinCombinations = winCombinations.some(function (line) {
        return cells[line[0]] && cells[line[0]] === cells[line[1]] && cells[line[1]] === cells[line[2]];
      });
      if (isWinCombinations) return true;
      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "setPlayerToken", function (players) {
      var tokens = ['X', 'O'];
      return players.slice().map(function (player, i) {
        var currentPlayer = player;
        currentPlayer = {
          name: player,
          sign: tokens[i]
        };
        return currentPlayer;
      });
    });

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Field = function Field(size) {
  _classCallCheck(this, Field);

  _defineProperty(this, "size", void 0);

  this.size = size;
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      }
    };
    var players = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var board = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var turn = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var currentPlayerIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var isFinished = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var updateCellEvent = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : new Observer_1["default"]();
    var winEvent = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : new Observer_1["default"]();

    _classCallCheck(this, Game);

    _defineProperty(this, "gameInfo", void 0);

    _defineProperty(this, "field", void 0);

    _defineProperty(this, "players", void 0);

    _defineProperty(this, "board", void 0);

    _defineProperty(this, "turn", void 0);

    _defineProperty(this, "currentPlayerIndex", void 0);

    _defineProperty(this, "isFinished", void 0);

    _defineProperty(this, "updateCellEvent", void 0);

    _defineProperty(this, "winEvent", void 0);

    this.gameInfo = gameInfo;
    this.field = field;
    this.players = players;
    this.board = board;
    this.turn = turn;
    this.currentPlayerIndex = currentPlayerIndex;
    this.isFinished = isFinished;
    this.updateCellEvent = updateCellEvent;
    this.winEvent = winEvent;
    this.players = this.gameInfo.strategy.setPlayerToken(gameInfo.playersList);
    this.field = new Field_1["default"](this.gameInfo.fieldSize);
    this.board = this.gameInfo.strategy.init(this.field.size.x, this.field.size.y);
  }

  _createClass(Game, [{
    key: "makeMove",
    value: function makeMove(_ref) {
      var x = _ref.x,
          y = _ref.y;
      console.log(this);
      var isValid = this.gameInfo.strategy.isTurnValid(this.board, x, y);

      if (!isValid) {
        return;
      }

      if (!this.isFinished) {
        this.gameInfo.strategy.setValue(this.board, x, y, this.currentPlayerIndex);
        this.updateCellEvent.trigger({
          x: x,
          y: y,
          sign: this.players[this.currentPlayerIndex].sign
        });
      }

      var isPlayerWin = this.gameInfo.strategy.checkWin(this.board);
      var isCellsFulled = this.gameInfo.strategy.checkDraw(this.board);
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
          this.board[i][j] = 0;
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Observer = /*#__PURE__*/function () {
  function Observer() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, Observer);

    _defineProperty(this, "listeners", void 0);

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  function FieldView(_x, _y) {
    var _this = this;

    var board = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var playEvent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Observer_1["default"]();
    var resultMessage = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : document.createElement('h2');

    _classCallCheck(this, FieldView);

    _defineProperty(this, "x", void 0);

    _defineProperty(this, "y", void 0);

    _defineProperty(this, "board", void 0);

    _defineProperty(this, "playEvent", void 0);

    _defineProperty(this, "resultMessage", void 0);

    _defineProperty(this, "updateCell", function (_ref) {
      var x = _ref.x,
          y = _ref.y,
          sign = _ref.sign;
      _this.board[x][y].innerHTML = sign;
    });

    this.x = _x;
    this.y = _y;
    this.board = board;
    this.playEvent = playEvent;
    this.resultMessage = resultMessage;
  }

  _createClass(FieldView, [{
    key: "generateField",
    value: function generateField() {
      var _this2 = this;

      var tableEl = document.createElement('table');
      tableEl.className = 'table-bordered';

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
    value: function renderField(idElement) {
      var mainElem = document.querySelector(idElement);
      var field = this.generateField();
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    _defineProperty(this, "game", void 0);

    _defineProperty(this, "view", void 0);

    _defineProperty(this, "players", void 0);

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
      this.view.renderField(idElement);
      this.players.renderPlayer(this.game.players);
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var PlayerView = function PlayerView() {
  _classCallCheck(this, PlayerView);

  _defineProperty(this, "renderPlayer", function (players) {
    var playersBlock = document.querySelector('.main');
    players.forEach(function (itemName, index) {
      return playersBlock === null || playersBlock === void 0 ? void 0 : playersBlock.insertAdjacentHTML('beforeend', "<h3 class=\"player-name\">Player ".concat(index + 1, ": ").concat(itemName.name, "</h3></div>"));
    });
  });
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
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvZ2FtZXMvU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL2dhbWVzL1RpY2tUYWNUb2UudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy9tb2RlbC9GaWVsZC50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvbW9kZWwvR2FtZS50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvdXRpbHMvT2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL3ZpZXcvRmllbGRWaWV3LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy92aWV3L0hUTUxWaWV3LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy92aWV3L1BsYXllclZpZXcudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWUtY29yZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiT2JqZWN0IiwidmFsdWUiLCJTdHJhdGVneSIsIngiLCJ5IiwicmVzdWx0IiwiaSIsInB1c2giLCJBcnJheSIsImZpbGwiLCJib2FyZCIsInBsYXllcklkIiwic2xpY2UiLCJmbGF0IiwiZXZlcnkiLCJjZWxsIiwiZXhwb3J0cyIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJTdHJhdGVneV8xIiwicmVxdWlyZSIsIlRpY1RhY1RvZSIsIndpbkNvbWJpbmF0aW9ucyIsImNlbGxzIiwiaXNXaW5Db21iaW5hdGlvbnMiLCJzb21lIiwibGluZSIsInBsYXllcnMiLCJ0b2tlbnMiLCJtYXAiLCJwbGF5ZXIiLCJjdXJyZW50UGxheWVyIiwibmFtZSIsInNpZ24iLCJIVE1MVmlld18xIiwiR2FtZV8xIiwiVGlja1RhY1RvZV8xIiwiZ2FtZSIsInBsYXllcnNMaXN0Iiwic3RyYXRlZ3kiLCJmaWVsZFNpemUiLCJIVE1MVmlld0dhbWUiLCJyZW5kZXIiLCJGaWVsZCIsInNpemUiLCJGaWVsZF8xIiwiT2JzZXJ2ZXJfMSIsIkdhbWUiLCJnYW1lSW5mbyIsImZpZWxkIiwidHVybiIsImN1cnJlbnRQbGF5ZXJJbmRleCIsImlzRmluaXNoZWQiLCJ1cGRhdGVDZWxsRXZlbnQiLCJ3aW5FdmVudCIsInNldFBsYXllclRva2VuIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJpc1ZhbGlkIiwiaXNUdXJuVmFsaWQiLCJzZXRWYWx1ZSIsInRyaWdnZXIiLCJpc1BsYXllcldpbiIsImNoZWNrV2luIiwiaXNDZWxsc0Z1bGxlZCIsImNoZWNrRHJhdyIsImNsZWFyQm9hcmQiLCJ1cGRhdGVUdXJuQW5kTmV4dFBsYXllciIsImxlbmd0aCIsImoiLCJPYnNlcnZlciIsImxpc3RlbmVycyIsImxpc3RlbmVyIiwiZGF0YSIsImZvckVhY2giLCJGaWVsZFZpZXciLCJwbGF5RXZlbnQiLCJyZXN1bHRNZXNzYWdlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidGFibGVFbCIsImNsYXNzTmFtZSIsInJvdyIsImluc2VydFJvdyIsImluc2VydENlbGwiLCJpZCIsImNvdW50ZXIiLCJ0YWJJbmRleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpZEVsZW1lbnQiLCJtYWluRWxlbSIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUZpZWxkIiwiYXBwZW5kIiwiZWwiLCJpdGVtIiwiY3VycmVudEl0ZW0iLCJ0ZXh0Q29udGVudCIsIndpbm5lciIsImNsZWFyRmllbGQiLCJGaWVsZFZpZXdfMSIsIlBsYXllclZpZXdfMSIsIkhUTUxWaWV3IiwidmlldyIsImFkZExpc3RlbmVyIiwibWFrZU1vdmUiLCJ1cGRhdGVDZWxsIiwic2hvd1dpbiIsInJlbmRlckZpZWxkIiwicmVuZGVyUGxheWVyIiwiUGxheWVyVmlldyIsInBsYXllcnNCbG9jayIsIml0ZW1OYW1lIiwiaW5kZXgiLCJpbnNlcnRB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QSxLQURqQjtBQUVBLFNBQUtJLElBQUwsQ0FBVWlCLFFBQVYsQ0FBbUJvRCxXQUFuQixDQUErQixVQUFDTixNQUFEO0FBQUEsYUFBWSxLQUFJLENBQUNLLElBQUwsQ0FBVUksT0FBVixDQUFrQlQsTUFBbEIsQ0FBWjtBQUFBLEtBQS9CO0FBQ0g7Ozs7V0FDRCxnQkFBT1QsU0FBUCxFQUFrQjtBQUNkLFdBQUtjLElBQUwsQ0FBVUssV0FBVixDQUFzQm5CLFNBQXRCO0FBQ0EsV0FBS2hFLE9BQUwsQ0FBYW9GLFlBQWIsQ0FBMEIsS0FBSzFFLElBQUwsQ0FBVVYsT0FBcEM7QUFDSDs7Ozs7O0FBRUxaLGVBQUEsR0FBa0J5RixRQUFsQixDOzs7Ozs7Ozs7O0FDekJhOzs7Ozs7QUFDYnpHLDhDQUE2QztBQUFFQyxPQUFLLEVBQUU7QUFBVCxDQUE3Qzs7SUFDTWdILFU7Ozt3Q0FDYSxVQUFDckYsT0FBRCxFQUFhO0FBQ3hCLFFBQU1zRixZQUFZLEdBQUdsQyxRQUFRLENBQUNjLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBckI7QUFDQWxFLFdBQU8sQ0FBQ2dELE9BQVIsQ0FBZ0IsVUFBQ3VDLFFBQUQsRUFBV0MsS0FBWDtBQUFBLGFBQXFCRixZQUFyQixhQUFxQkEsWUFBckIsdUJBQXFCQSxZQUFZLENBQUVHLGtCQUFkLENBQWlDLFdBQWpDLDZDQUFnRkQsS0FBSyxHQUFHLENBQXhGLGVBQThGRCxRQUFRLENBQUNsRixJQUF2RyxpQkFBckI7QUFBQSxLQUFoQjtBQUNILEc7OztBQUVMakIsZUFBQSxHQUFrQmlHLFVBQWxCLEM7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUN0QkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBTdHJhdGVneSB7XHJcbiAgICBpbml0ID0gKHgsIHkpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChuZXcgQXJyYXkoeSkuZmlsbCgwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgaXNUdXJuVmFsaWQgPSAoYm9hcmQsIHgsIHkpID0+IGJvYXJkW3hdW3ldID09PSAwO1xyXG4gICAgc2V0VmFsdWUgPSAoYm9hcmQsIHgsIHksIHBsYXllcklkKSA9PiB7IGJvYXJkW3hdW3ldID0gcGxheWVySWQgKyAxOyB9O1xyXG4gICAgY2hlY2tEcmF3ID0gKGJvYXJkKSA9PiBib2FyZC5zbGljZSgpLmZsYXQoKS5ldmVyeSgoY2VsbCkgPT4gY2VsbCAhPT0gMCk7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU3RyYXRlZ3k7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFN0cmF0ZWd5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU3RyYXRlZ3lcIikpO1xyXG5jbGFzcyBUaWNUYWNUb2UgZXh0ZW5kcyBTdHJhdGVneV8xLmRlZmF1bHQge1xyXG4gICAgZ2V0TmFtZSA9ICgpID0+ICdUaWNUYWNUb2UnO1xyXG4gICAgY2hlY2tXaW4gPSAoYm9hcmQpID0+IHtcclxuICAgICAgICBjb25zdCB3aW5Db21iaW5hdGlvbnMgPSBbXHJcbiAgICAgICAgICAgIFswLCAxLCAyXSxcclxuICAgICAgICAgICAgWzMsIDQsIDVdLFxyXG4gICAgICAgICAgICBbNiwgNywgOF0sXHJcbiAgICAgICAgICAgIFswLCAzLCA2XSxcclxuICAgICAgICAgICAgWzEsIDQsIDddLFxyXG4gICAgICAgICAgICBbMiwgNSwgOF0sXHJcbiAgICAgICAgICAgIFswLCA0LCA4XSxcclxuICAgICAgICAgICAgWzIsIDQsIDZdLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgY2VsbHMgPSBib2FyZC5zbGljZSgpLmZsYXQoKTtcclxuICAgICAgICBjb25zdCBpc1dpbkNvbWJpbmF0aW9ucyA9IHdpbkNvbWJpbmF0aW9ucy5zb21lKChsaW5lKSA9PiBjZWxsc1tsaW5lWzBdXVxyXG4gICAgICAgICAgICAmJiBjZWxsc1tsaW5lWzBdXSA9PT0gY2VsbHNbbGluZVsxXV1cclxuICAgICAgICAgICAgJiYgY2VsbHNbbGluZVsxXV0gPT09IGNlbGxzW2xpbmVbMl1dKTtcclxuICAgICAgICBpZiAoaXNXaW5Db21iaW5hdGlvbnMpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBzZXRQbGF5ZXJUb2tlbiA9IChwbGF5ZXJzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gWydYJywgJ08nXTtcclxuICAgICAgICByZXR1cm4gcGxheWVycy5zbGljZSgpLm1hcCgocGxheWVyLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgICAgICBjdXJyZW50UGxheWVyID0geyBuYW1lOiBwbGF5ZXIsIHNpZ246IHRva2Vuc1tpXSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFBsYXllcjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVGljVGFjVG9lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBIVE1MVmlld18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3ZpZXcvSFRNTFZpZXdcIikpO1xyXG5jb25zdCBHYW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kZWwvR2FtZVwiKSk7XHJcbmNvbnN0IFRpY2tUYWNUb2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9nYW1lcy9UaWNrVGFjVG9lXCIpKTtcclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lXzEuZGVmYXVsdCh7XHJcbiAgICBwbGF5ZXJzTGlzdDogWydwbGF5ZXIgT25lJywgJ3BsYXllciBUd28nXSxcclxuICAgIHN0cmF0ZWd5OiBuZXcgVGlja1RhY1RvZV8xLmRlZmF1bHQoKSxcclxuICAgIGZpZWxkU2l6ZTogeyB4OiAzLCB5OiAzIH0sXHJcbn0pO1xyXG5jb25zdCBIVE1MVmlld0dhbWUgPSBuZXcgSFRNTFZpZXdfMS5kZWZhdWx0KGdhbWUpO1xyXG5IVE1MVmlld0dhbWUucmVuZGVyKCcubWFpbicpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBGaWVsZCB7XHJcbiAgICBzaXplO1xyXG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gRmllbGQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IEZpZWxkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRmllbGRcIikpO1xyXG5jb25zdCBPYnNlcnZlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlscy9PYnNlcnZlclwiKSk7XHJcbmNsYXNzIEdhbWUge1xyXG4gICAgZ2FtZUluZm87XHJcbiAgICBmaWVsZDtcclxuICAgIHBsYXllcnM7XHJcbiAgICBib2FyZDtcclxuICAgIHR1cm47XHJcbiAgICBjdXJyZW50UGxheWVySW5kZXg7XHJcbiAgICBpc0ZpbmlzaGVkO1xyXG4gICAgdXBkYXRlQ2VsbEV2ZW50O1xyXG4gICAgd2luRXZlbnQ7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lSW5mbywgZmllbGQgPSB7IHNpemU6IHsgeDogMSwgeTogMSB9IH0sIHBsYXllcnMgPSBbXSwgYm9hcmQgPSBbXSwgdHVybiA9IDAsIGN1cnJlbnRQbGF5ZXJJbmRleCA9IDAsIGlzRmluaXNoZWQgPSBmYWxzZSwgdXBkYXRlQ2VsbEV2ZW50ID0gbmV3IE9ic2VydmVyXzEuZGVmYXVsdCgpLCB3aW5FdmVudCA9IG5ldyBPYnNlcnZlcl8xLmRlZmF1bHQoKSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUluZm8gPSBnYW1lSW5mbztcclxuICAgICAgICB0aGlzLmZpZWxkID0gZmllbGQ7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gcGxheWVycztcclxuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICAgICAgdGhpcy50dXJuID0gdHVybjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCA9IGN1cnJlbnRQbGF5ZXJJbmRleDtcclxuICAgICAgICB0aGlzLmlzRmluaXNoZWQgPSBpc0ZpbmlzaGVkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2VsbEV2ZW50ID0gdXBkYXRlQ2VsbEV2ZW50O1xyXG4gICAgICAgIHRoaXMud2luRXZlbnQgPSB3aW5FdmVudDtcclxuICAgICAgICB0aGlzLnBsYXllcnMgPSB0aGlzLmdhbWVJbmZvLnN0cmF0ZWd5LnNldFBsYXllclRva2VuKGdhbWVJbmZvLnBsYXllcnNMaXN0KTtcclxuICAgICAgICB0aGlzLmZpZWxkID0gbmV3IEZpZWxkXzEuZGVmYXVsdCh0aGlzLmdhbWVJbmZvLmZpZWxkU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuZ2FtZUluZm8uc3RyYXRlZ3kuaW5pdCh0aGlzLmZpZWxkLnNpemUueCwgdGhpcy5maWVsZC5zaXplLnkpO1xyXG4gICAgfVxyXG4gICAgbWFrZU1vdmUoeyB4LCB5IH0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy5nYW1lSW5mby5zdHJhdGVneS5pc1R1cm5WYWxpZCh0aGlzLmJvYXJkLCB4LCB5KTtcclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNGaW5pc2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbmZvLnN0cmF0ZWd5LnNldFZhbHVlKHRoaXMuYm9hcmQsIHgsIHksIHRoaXMuY3VycmVudFBsYXllckluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDZWxsRXZlbnQudHJpZ2dlcih7IHgsIHksIHNpZ246IHRoaXMucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleF0uc2lnbiB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNQbGF5ZXJXaW4gPSB0aGlzLmdhbWVJbmZvLnN0cmF0ZWd5LmNoZWNrV2luKHRoaXMuYm9hcmQpO1xyXG4gICAgICAgIGNvbnN0IGlzQ2VsbHNGdWxsZWQgPSB0aGlzLmdhbWVJbmZvLnN0cmF0ZWd5LmNoZWNrRHJhdyh0aGlzLmJvYXJkKTtcclxuICAgICAgICBpZiAoaXNDZWxsc0Z1bGxlZClcclxuICAgICAgICAgICAgdGhpcy53aW5FdmVudC50cmlnZ2VyKCdubyBvbmUnKTtcclxuICAgICAgICBpZiAoaXNQbGF5ZXJXaW4pXHJcbiAgICAgICAgICAgIHRoaXMud2luRXZlbnQudHJpZ2dlcih0aGlzLnBsYXllcnNbdGhpcy5jdXJyZW50UGxheWVySW5kZXhdLm5hbWUpO1xyXG4gICAgICAgIGlmIChpc1BsYXllcldpbiB8fCBpc0NlbGxzRnVsbGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJCb2FyZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUdXJuQW5kTmV4dFBsYXllcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVwZGF0ZVR1cm5BbmROZXh0UGxheWVyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllckluZGV4ID0gKHRoaXMudHVybiArIDEpICUgdGhpcy5wbGF5ZXJzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnR1cm4gKz0gMTtcclxuICAgIH1cclxuICAgIGNsZWFyQm9hcmQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpZWxkLnNpemUueDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5maWVsZC5zaXplLnk7IGogKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0ZpbmlzaGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50dXJuID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgT2JzZXJ2ZXIge1xyXG4gICAgbGlzdGVuZXJzO1xyXG4gICAgY29uc3RydWN0b3IobGlzdGVuZXJzID0gW10pIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IGxpc3RlbmVycztcclxuICAgIH1cclxuICAgIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICB9XHJcbiAgICB0cmlnZ2VyKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoZGF0YSkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE9ic2VydmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBPYnNlcnZlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlscy9PYnNlcnZlclwiKSk7XHJcbmNsYXNzIEZpZWxkVmlldyB7XHJcbiAgICB4O1xyXG4gICAgeTtcclxuICAgIGJvYXJkO1xyXG4gICAgcGxheUV2ZW50O1xyXG4gICAgcmVzdWx0TWVzc2FnZTtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIGJvYXJkID0gW10sIHBsYXlFdmVudCA9IG5ldyBPYnNlcnZlcl8xLmRlZmF1bHQoKSwgcmVzdWx0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJykpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgICAgIHRoaXMucGxheUV2ZW50ID0gcGxheUV2ZW50O1xyXG4gICAgICAgIHRoaXMucmVzdWx0TWVzc2FnZSA9IHJlc3VsdE1lc3NhZ2U7XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZUZpZWxkKCkge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgICAgIHRhYmxlRWwuY2xhc3NOYW1lID0gJ3RhYmxlLWJvcmRlcmVkJztcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgY291bnRlciA9IDA7IGkgPCB0aGlzLng7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSB0YWJsZUVsLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy55OyBqICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXS5wdXNoKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmlkID0gYCR7KGNvdW50ZXIgKz0gMSl9YDtcclxuICAgICAgICAgICAgICAgIGNlbGwudGFiSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlFdmVudC50cmlnZ2VyKHsgeDogaSwgeTogaiB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YWJsZUVsO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlQ2VsbCA9ICh7IHgsIHksIHNpZ24gfSkgPT4ge1xyXG4gICAgICAgIHRoaXMuYm9hcmRbeF1beV0uaW5uZXJIVE1MID0gc2lnbjtcclxuICAgIH07XHJcbiAgICByZW5kZXJGaWVsZChpZEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBtYWluRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWRFbGVtZW50KTtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZ2VuZXJhdGVGaWVsZCgpO1xyXG4gICAgICAgIG1haW5FbGVtPy5hcHBlbmQoZmllbGQpO1xyXG4gICAgICAgIG1haW5FbGVtPy5hcHBlbmQodGhpcy5yZXN1bHRNZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGNsZWFyRmllbGQoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNob3dXaW4od2lubmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRNZXNzYWdlLmlubmVySFRNTCA9IGAke3dpbm5lcn0gd2luYDtcclxuICAgICAgICB0aGlzLmNsZWFyRmllbGQoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBGaWVsZFZpZXc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IEZpZWxkVmlld18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0ZpZWxkVmlld1wiKSk7XHJcbmNvbnN0IFBsYXllclZpZXdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9QbGF5ZXJWaWV3XCIpKTtcclxuY2xhc3MgSFRNTFZpZXcge1xyXG4gICAgZ2FtZTtcclxuICAgIHZpZXc7XHJcbiAgICBwbGF5ZXJzO1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgdmlldyA9IG5ldyBGaWVsZFZpZXdfMS5kZWZhdWx0KGdhbWUuZmllbGQuc2l6ZS54LCBnYW1lLmZpZWxkLnNpemUueSksIHBsYXllcnMgPSBuZXcgUGxheWVyVmlld18xLmRlZmF1bHQoKSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgICAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXJzO1xyXG4gICAgICAgIHRoaXMudmlldy5wbGF5RXZlbnQuYWRkTGlzdGVuZXIoKHsgeCwgeSB9KSA9PiB0aGlzLmdhbWUubWFrZU1vdmUoeyB4LCB5IH0pKTtcclxuICAgICAgICB0aGlzLmdhbWUudXBkYXRlQ2VsbEV2ZW50XHJcbiAgICAgICAgICAgIC5hZGRMaXN0ZW5lcigoeyB4LCB5LCBzaWduIH0pID0+IHRoaXMudmlldy51cGRhdGVDZWxsKHsgeCwgeSwgc2lnbiB9KSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLndpbkV2ZW50LmFkZExpc3RlbmVyKCh3aW5uZXIpID0+IHRoaXMudmlldy5zaG93V2luKHdpbm5lcikpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKGlkRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMudmlldy5yZW5kZXJGaWVsZChpZEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMucGxheWVycy5yZW5kZXJQbGF5ZXIodGhpcy5nYW1lLnBsYXllcnMpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEhUTUxWaWV3O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBQbGF5ZXJWaWV3IHtcclxuICAgIHJlbmRlclBsYXllciA9IChwbGF5ZXJzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcclxuICAgICAgICBwbGF5ZXJzLmZvckVhY2goKGl0ZW1OYW1lLCBpbmRleCkgPT4gcGxheWVyc0Jsb2NrPy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8aDMgY2xhc3M9XCJwbGF5ZXItbmFtZVwiPlBsYXllciAke2luZGV4ICsgMX06ICR7aXRlbU5hbWUubmFtZX08L2gzPjwvZGl2PmApKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gUGxheWVyVmlldztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==