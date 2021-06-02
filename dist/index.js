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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var PlayerView = function PlayerView() {
  _classCallCheck(this, PlayerView);

  _defineProperty(this, "renderPlayer", function (players, classSelector) {
    var playersBlock = document.querySelector(classSelector);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvZ2FtZXMvU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL2dhbWVzL1RpY2tUYWNUb2UudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy9tb2RlbC9GaWVsZC50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvbW9kZWwvR2FtZS50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvdXRpbHMvT2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL3ZpZXcvRmllbGRWaWV3LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy92aWV3L0hUTUxWaWV3LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy92aWV3L1BsYXllclZpZXcudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWUtY29yZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiT2JqZWN0IiwidmFsdWUiLCJTdHJhdGVneSIsIngiLCJ5IiwicmVzdWx0IiwiaSIsInB1c2giLCJBcnJheSIsImZpbGwiLCJib2FyZCIsInBsYXllcklkIiwic2xpY2UiLCJmbGF0IiwiZXZlcnkiLCJjZWxsIiwiZXhwb3J0cyIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJTdHJhdGVneV8xIiwicmVxdWlyZSIsIlRpY1RhY1RvZSIsIndpbkNvbWJpbmF0aW9ucyIsImNlbGxzIiwiaXNXaW5Db21iaW5hdGlvbnMiLCJzb21lIiwibGluZSIsInBsYXllcnMiLCJ0b2tlbnMiLCJtYXAiLCJwbGF5ZXIiLCJjdXJyZW50UGxheWVyIiwibmFtZSIsInNpZ24iLCJIVE1MVmlld18xIiwiR2FtZV8xIiwiVGlja1RhY1RvZV8xIiwiZ2FtZSIsInBsYXllcnNMaXN0Iiwic3RyYXRlZ3kiLCJmaWVsZFNpemUiLCJIVE1MVmlld0dhbWUiLCJyZW5kZXIiLCJGaWVsZCIsInNpemUiLCJGaWVsZF8xIiwiT2JzZXJ2ZXJfMSIsIkdhbWUiLCJnYW1lSW5mbyIsImZpZWxkIiwidHVybiIsImN1cnJlbnRQbGF5ZXJJbmRleCIsImlzRmluaXNoZWQiLCJ1cGRhdGVDZWxsRXZlbnQiLCJ3aW5FdmVudCIsInNldFBsYXllclRva2VuIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJpc1ZhbGlkIiwiaXNUdXJuVmFsaWQiLCJzZXRWYWx1ZSIsInRyaWdnZXIiLCJpc1BsYXllcldpbiIsImNoZWNrV2luIiwiaXNDZWxsc0Z1bGxlZCIsImNoZWNrRHJhdyIsImNsZWFyQm9hcmQiLCJ1cGRhdGVUdXJuQW5kTmV4dFBsYXllciIsImxlbmd0aCIsImoiLCJPYnNlcnZlciIsImxpc3RlbmVycyIsImxpc3RlbmVyIiwiZGF0YSIsImZvckVhY2giLCJGaWVsZFZpZXciLCJwbGF5RXZlbnQiLCJyZXN1bHRNZXNzYWdlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NUYWJsZSIsInRhYmxlRWwiLCJjbGFzc05hbWUiLCJyb3ciLCJpbnNlcnRSb3ciLCJpbnNlcnRDZWxsIiwiaWQiLCJjb3VudGVyIiwidGFiSW5kZXgiLCJhZGRFdmVudExpc3RlbmVyIiwiaWRFbGVtZW50IiwibWFpbkVsZW0iLCJxdWVyeVNlbGVjdG9yIiwiZ2VuZXJhdGVGaWVsZCIsImFwcGVuZCIsImVsIiwiaXRlbSIsImN1cnJlbnRJdGVtIiwidGV4dENvbnRlbnQiLCJ3aW5uZXIiLCJjbGVhckZpZWxkIiwiRmllbGRWaWV3XzEiLCJQbGF5ZXJWaWV3XzEiLCJIVE1MVmlldyIsInZpZXciLCJhZGRMaXN0ZW5lciIsIm1ha2VNb3ZlIiwidXBkYXRlQ2VsbCIsInNob3dXaW4iLCJyZW5kZXJGaWVsZCIsInJlbmRlclBsYXllciIsIlBsYXllclZpZXciLCJjbGFzc1NlbGVjdG9yIiwicGxheWVyc0Jsb2Nr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Ozs7O1VDdEJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgU3RyYXRlZ3kge1xyXG4gICAgaW5pdCA9ICh4LCB5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4OyBpICs9IDEpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IEFycmF5KHkpLmZpbGwoMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIGlzVHVyblZhbGlkID0gKGJvYXJkLCB4LCB5KSA9PiBib2FyZFt4XVt5XSA9PT0gMDtcclxuICAgIHNldFZhbHVlID0gKGJvYXJkLCB4LCB5LCBwbGF5ZXJJZCkgPT4geyBib2FyZFt4XVt5XSA9IHBsYXllcklkICsgMTsgfTtcclxuICAgIGNoZWNrRHJhdyA9IChib2FyZCkgPT4gYm9hcmQuc2xpY2UoKS5mbGF0KCkuZXZlcnkoKGNlbGwpID0+IGNlbGwgIT09IDApO1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFN0cmF0ZWd5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBTdHJhdGVneV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1N0cmF0ZWd5XCIpKTtcclxuY2xhc3MgVGljVGFjVG9lIGV4dGVuZHMgU3RyYXRlZ3lfMS5kZWZhdWx0IHtcclxuICAgIGdldE5hbWUgPSAoKSA9PiAnVGljVGFjVG9lJztcclxuICAgIGNoZWNrV2luID0gKGJvYXJkKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2luQ29tYmluYXRpb25zID0gW1xyXG4gICAgICAgICAgICBbMCwgMSwgMl0sXHJcbiAgICAgICAgICAgIFszLCA0LCA1XSxcclxuICAgICAgICAgICAgWzYsIDcsIDhdLFxyXG4gICAgICAgICAgICBbMCwgMywgNl0sXHJcbiAgICAgICAgICAgIFsxLCA0LCA3XSxcclxuICAgICAgICAgICAgWzIsIDUsIDhdLFxyXG4gICAgICAgICAgICBbMCwgNCwgOF0sXHJcbiAgICAgICAgICAgIFsyLCA0LCA2XSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnN0IGNlbGxzID0gYm9hcmQuc2xpY2UoKS5mbGF0KCk7XHJcbiAgICAgICAgY29uc3QgaXNXaW5Db21iaW5hdGlvbnMgPSB3aW5Db21iaW5hdGlvbnMuc29tZSgobGluZSkgPT4gY2VsbHNbbGluZVswXV1cclxuICAgICAgICAgICAgJiYgY2VsbHNbbGluZVswXV0gPT09IGNlbGxzW2xpbmVbMV1dXHJcbiAgICAgICAgICAgICYmIGNlbGxzW2xpbmVbMV1dID09PSBjZWxsc1tsaW5lWzJdXSk7XHJcbiAgICAgICAgaWYgKGlzV2luQ29tYmluYXRpb25zKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgc2V0UGxheWVyVG9rZW4gPSAocGxheWVycykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IFsnWCcsICdPJ107XHJcbiAgICAgICAgcmV0dXJuIHBsYXllcnMuc2xpY2UoKS5tYXAoKHBsYXllciwgaSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFBsYXllciA9IHBsYXllcjtcclxuICAgICAgICAgICAgY3VycmVudFBsYXllciA9IHsgbmFtZTogcGxheWVyLCBzaWduOiB0b2tlbnNbaV0gfTtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQbGF5ZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRpY1RhY1RvZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgSFRNTFZpZXdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi92aWV3L0hUTUxWaWV3XCIpKTtcclxuY29uc3QgR2FtZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL21vZGVsL0dhbWVcIikpO1xyXG5jb25zdCBUaWNrVGFjVG9lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZ2FtZXMvVGlja1RhY1RvZVwiKSk7XHJcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZV8xLmRlZmF1bHQoe1xyXG4gICAgcGxheWVyc0xpc3Q6IFsncGxheWVyIE9uZScsICdwbGF5ZXIgVHdvJ10sXHJcbiAgICBzdHJhdGVneTogbmV3IFRpY2tUYWNUb2VfMS5kZWZhdWx0KCksXHJcbiAgICBmaWVsZFNpemU6IHsgeDogMywgeTogMyB9LFxyXG59KTtcclxuY29uc3QgSFRNTFZpZXdHYW1lID0gbmV3IEhUTUxWaWV3XzEuZGVmYXVsdChnYW1lKTtcclxuSFRNTFZpZXdHYW1lLnJlbmRlcignLm1haW4nKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgRmllbGQge1xyXG4gICAgc2l6ZTtcclxuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEZpZWxkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBGaWVsZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0ZpZWxkXCIpKTtcclxuY29uc3QgT2JzZXJ2ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbHMvT2JzZXJ2ZXJcIikpO1xyXG5jbGFzcyBHYW1lIHtcclxuICAgIGdhbWVJbmZvO1xyXG4gICAgZmllbGQ7XHJcbiAgICBwbGF5ZXJzO1xyXG4gICAgYm9hcmQ7XHJcbiAgICB0dXJuO1xyXG4gICAgY3VycmVudFBsYXllckluZGV4O1xyXG4gICAgaXNGaW5pc2hlZDtcclxuICAgIHVwZGF0ZUNlbGxFdmVudDtcclxuICAgIHdpbkV2ZW50O1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZUluZm8sIGZpZWxkID0geyBzaXplOiB7IHg6IDEsIHk6IDEgfSB9LCBwbGF5ZXJzID0gW10sIGJvYXJkID0gW10sIHR1cm4gPSAwLCBjdXJyZW50UGxheWVySW5kZXggPSAwLCBpc0ZpbmlzaGVkID0gZmFsc2UsIHVwZGF0ZUNlbGxFdmVudCA9IG5ldyBPYnNlcnZlcl8xLmRlZmF1bHQoKSwgd2luRXZlbnQgPSBuZXcgT2JzZXJ2ZXJfMS5kZWZhdWx0KCkpIHtcclxuICAgICAgICB0aGlzLmdhbWVJbmZvID0gZ2FtZUluZm87XHJcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xyXG4gICAgICAgIHRoaXMucGxheWVycyA9IHBsYXllcnM7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xyXG4gICAgICAgIHRoaXMudHVybiA9IHR1cm47XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVySW5kZXggPSBjdXJyZW50UGxheWVySW5kZXg7XHJcbiAgICAgICAgdGhpcy5pc0ZpbmlzaGVkID0gaXNGaW5pc2hlZDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNlbGxFdmVudCA9IHVwZGF0ZUNlbGxFdmVudDtcclxuICAgICAgICB0aGlzLndpbkV2ZW50ID0gd2luRXZlbnQ7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gdGhpcy5nYW1lSW5mby5zdHJhdGVneS5zZXRQbGF5ZXJUb2tlbihnYW1lSW5mby5wbGF5ZXJzTGlzdCk7XHJcbiAgICAgICAgdGhpcy5maWVsZCA9IG5ldyBGaWVsZF8xLmRlZmF1bHQodGhpcy5nYW1lSW5mby5maWVsZFNpemUpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmdhbWVJbmZvLnN0cmF0ZWd5LmluaXQodGhpcy5maWVsZC5zaXplLngsIHRoaXMuZmllbGQuc2l6ZS55KTtcclxuICAgIH1cclxuICAgIG1ha2VNb3ZlKHsgeCwgeSB9KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IHRoaXMuZ2FtZUluZm8uc3RyYXRlZ3kuaXNUdXJuVmFsaWQodGhpcy5ib2FyZCwgeCwgeSk7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmluaXNoZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lSW5mby5zdHJhdGVneS5zZXRWYWx1ZSh0aGlzLmJvYXJkLCB4LCB5LCB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2VsbEV2ZW50LnRyaWdnZXIoeyB4LCB5LCBzaWduOiB0aGlzLnBsYXllcnNbdGhpcy5jdXJyZW50UGxheWVySW5kZXhdLnNpZ24gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlzUGxheWVyV2luID0gdGhpcy5nYW1lSW5mby5zdHJhdGVneS5jaGVja1dpbih0aGlzLmJvYXJkKTtcclxuICAgICAgICBjb25zdCBpc0NlbGxzRnVsbGVkID0gdGhpcy5nYW1lSW5mby5zdHJhdGVneS5jaGVja0RyYXcodGhpcy5ib2FyZCk7XHJcbiAgICAgICAgaWYgKGlzQ2VsbHNGdWxsZWQpXHJcbiAgICAgICAgICAgIHRoaXMud2luRXZlbnQudHJpZ2dlcignbm8gb25lJyk7XHJcbiAgICAgICAgaWYgKGlzUGxheWVyV2luKVxyXG4gICAgICAgICAgICB0aGlzLndpbkV2ZW50LnRyaWdnZXIodGhpcy5wbGF5ZXJzW3RoaXMuY3VycmVudFBsYXllckluZGV4XS5uYW1lKTtcclxuICAgICAgICBpZiAoaXNQbGF5ZXJXaW4gfHwgaXNDZWxsc0Z1bGxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyQm9hcmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHVybkFuZE5leHRQbGF5ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cGRhdGVUdXJuQW5kTmV4dFBsYXllcigpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCA9ICh0aGlzLnR1cm4gKyAxKSAlIHRoaXMucGxheWVycy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy50dXJuICs9IDE7XHJcbiAgICB9XHJcbiAgICBjbGVhckJvYXJkKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maWVsZC5zaXplLng7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZmllbGQuc2l6ZS55OyBqICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNGaW5pc2hlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudHVybiA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVySW5kZXggPSAwO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIE9ic2VydmVyIHtcclxuICAgIGxpc3RlbmVycztcclxuICAgIGNvbnN0cnVjdG9yKGxpc3RlbmVycyA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XHJcbiAgICB9XHJcbiAgICBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgdHJpZ2dlcihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyKGRhdGEpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBPYnNlcnZlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgT2JzZXJ2ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbHMvT2JzZXJ2ZXJcIikpO1xyXG5jbGFzcyBGaWVsZFZpZXcge1xyXG4gICAgeDtcclxuICAgIHk7XHJcbiAgICBib2FyZDtcclxuICAgIHBsYXlFdmVudDtcclxuICAgIHJlc3VsdE1lc3NhZ2U7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBib2FyZCA9IFtdLCBwbGF5RXZlbnQgPSBuZXcgT2JzZXJ2ZXJfMS5kZWZhdWx0KCksIHJlc3VsdE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgICAgICB0aGlzLnBsYXlFdmVudCA9IHBsYXlFdmVudDtcclxuICAgICAgICB0aGlzLnJlc3VsdE1lc3NhZ2UgPSByZXN1bHRNZXNzYWdlO1xyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVGaWVsZChjbGFzc1RhYmxlKSB7XHJcbiAgICAgICAgY29uc3QgdGFibGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgdGFibGVFbC5jbGFzc05hbWUgPSBjbGFzc1RhYmxlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBjb3VudGVyID0gMDsgaSA8IHRoaXMueDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IHRhYmxlRWwuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaV0gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnk7IGogKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldLnB1c2goY2VsbCk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcclxuICAgICAgICAgICAgICAgIGNlbGwuaWQgPSBgJHsoY291bnRlciArPSAxKX1gO1xyXG4gICAgICAgICAgICAgICAgY2VsbC50YWJJbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUV2ZW50LnRyaWdnZXIoeyB4OiBpLCB5OiBqIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhYmxlRWw7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVDZWxsID0gKHsgeCwgeSwgc2lnbiB9KSA9PiB7XHJcbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5XS5pbm5lckhUTUwgPSBzaWduO1xyXG4gICAgfTtcclxuICAgIHJlbmRlckZpZWxkKGlkRWxlbWVudCwgY2xhc3NUYWJsZSkge1xyXG4gICAgICAgIGNvbnN0IG1haW5FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZEVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5nZW5lcmF0ZUZpZWxkKGNsYXNzVGFibGUpO1xyXG4gICAgICAgIG1haW5FbGVtPy5hcHBlbmQoZmllbGQpO1xyXG4gICAgICAgIG1haW5FbGVtPy5hcHBlbmQodGhpcy5yZXN1bHRNZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGNsZWFyRmllbGQoKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZC5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgICAgICBlbC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNob3dXaW4od2lubmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRNZXNzYWdlLmlubmVySFRNTCA9IGAke3dpbm5lcn0gd2luYDtcclxuICAgICAgICB0aGlzLmNsZWFyRmllbGQoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBGaWVsZFZpZXc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IEZpZWxkVmlld18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0ZpZWxkVmlld1wiKSk7XHJcbmNvbnN0IFBsYXllclZpZXdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9QbGF5ZXJWaWV3XCIpKTtcclxuY2xhc3MgSFRNTFZpZXcge1xyXG4gICAgZ2FtZTtcclxuICAgIHZpZXc7XHJcbiAgICBwbGF5ZXJzO1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgdmlldyA9IG5ldyBGaWVsZFZpZXdfMS5kZWZhdWx0KGdhbWUuZmllbGQuc2l6ZS54LCBnYW1lLmZpZWxkLnNpemUueSksIHBsYXllcnMgPSBuZXcgUGxheWVyVmlld18xLmRlZmF1bHQoKSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgICAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXJzO1xyXG4gICAgICAgIHRoaXMudmlldy5wbGF5RXZlbnQuYWRkTGlzdGVuZXIoKHsgeCwgeSB9KSA9PiB0aGlzLmdhbWUubWFrZU1vdmUoeyB4LCB5IH0pKTtcclxuICAgICAgICB0aGlzLmdhbWUudXBkYXRlQ2VsbEV2ZW50XHJcbiAgICAgICAgICAgIC5hZGRMaXN0ZW5lcigoeyB4LCB5LCBzaWduIH0pID0+IHRoaXMudmlldy51cGRhdGVDZWxsKHsgeCwgeSwgc2lnbiB9KSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLndpbkV2ZW50LmFkZExpc3RlbmVyKCh3aW5uZXIpID0+IHRoaXMudmlldy5zaG93V2luKHdpbm5lcikpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKGlkRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMudmlldy5yZW5kZXJGaWVsZChpZEVsZW1lbnQsICd0YWJsZS1ib3JkZXJlZCcpO1xyXG4gICAgICAgIHRoaXMucGxheWVycy5yZW5kZXJQbGF5ZXIodGhpcy5nYW1lLnBsYXllcnMsICcubWFpbicpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEhUTUxWaWV3O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBQbGF5ZXJWaWV3IHtcclxuICAgIHJlbmRlclBsYXllciA9IChwbGF5ZXJzLCBjbGFzc1NlbGVjdG9yKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbGFzc1NlbGVjdG9yKTtcclxuICAgICAgICBwbGF5ZXJzLmZvckVhY2goKGl0ZW1OYW1lLCBpbmRleCkgPT4gcGxheWVyc0Jsb2NrPy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8aDMgY2xhc3M9XCJwbGF5ZXItbmFtZVwiPlBsYXllciAke2luZGV4ICsgMX06ICR7aXRlbU5hbWUubmFtZX08L2gzPjwvZGl2PmApKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gUGxheWVyVmlldztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==