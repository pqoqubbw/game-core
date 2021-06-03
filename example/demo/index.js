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

  _defineProperty(this, "checkFullCells", function (board) {
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
  var board = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  _classCallCheck(this, Field);

  _defineProperty(this, "size", void 0);

  _defineProperty(this, "board", void 0);

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
      },
      board: []
    };
    var players = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var turn = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var currentPlayerIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var isFinished = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var on = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new Observer_1["default"]();

    _classCallCheck(this, Game);

    _defineProperty(this, "gameInfo", void 0);

    _defineProperty(this, "field", void 0);

    _defineProperty(this, "players", void 0);

    _defineProperty(this, "turn", void 0);

    _defineProperty(this, "currentPlayerIndex", void 0);

    _defineProperty(this, "isFinished", void 0);

    _defineProperty(this, "on", void 0);

    this.gameInfo = gameInfo;
    this.field = field;
    this.players = players;
    this.turn = turn;
    this.currentPlayerIndex = currentPlayerIndex;
    this.isFinished = isFinished;
    this.on = on;
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
        this.on.trigger('update', {
          x: x,
          y: y,
          sign: this.players[this.currentPlayerIndex].sign
        });
        this.gameInfo.strategy.setValue(this.field.board, x, y, this.currentPlayerIndex);
      }

      var isPlayerWin = this.gameInfo.strategy.checkWin(this.field.board);
      var isCellsFulled = this.gameInfo.strategy.checkFullCells(this.field.board);
      if (isCellsFulled) this.on.trigger('draw', 'no one');
      if (isPlayerWin) this.on.trigger('win', this.players[this.currentPlayerIndex].name);

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Event = /*#__PURE__*/function () {
  function Event() {
    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Event);

    _defineProperty(this, "events", void 0);

    this.events = events;
  }

  _createClass(Event, [{
    key: "subscribe",
    value: function subscribe(eventName, fn) {
      this.events[eventName] = this.events[eventName] || [];
      this.events[eventName].push(fn);
    }
  }, {
    key: "trigger",
    value: function trigger(eventName, data) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(function (fn) {
          fn(data);
        });
      }
    }
  }]);

  return Event;
}();

exports.default = Event;

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
    var resultMessage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document.createElement('h2');
    var on = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new Observer_1["default"]();

    _classCallCheck(this, FieldView);

    _defineProperty(this, "x", void 0);

    _defineProperty(this, "y", void 0);

    _defineProperty(this, "board", void 0);

    _defineProperty(this, "resultMessage", void 0);

    _defineProperty(this, "on", void 0);

    _defineProperty(this, "updateCell", function (_ref) {
      var x = _ref.x,
          y = _ref.y,
          sign = _ref.sign;
      _this.board[x][y].innerHTML = sign;
    });

    this.x = _x;
    this.y = _y;
    this.board = board;
    this.resultMessage = resultMessage;
    this.on = on;
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
            _this2.on.trigger('move', {
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

var Observer_1 = __importDefault(__webpack_require__(/*! ../utils/Observer */ "./src/utils/Observer.ts"));

var FieldView_1 = __importDefault(__webpack_require__(/*! ./FieldView */ "./src/view/FieldView.ts"));

var PlayerView_1 = __importDefault(__webpack_require__(/*! ./PlayerView */ "./src/view/PlayerView.ts"));

var HTMLView = /*#__PURE__*/function () {
  function HTMLView(game) {
    var _this = this;

    var view = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FieldView_1["default"](game.field.size.x, game.field.size.y);
    var players = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new PlayerView_1["default"]();
    var on = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new Observer_1["default"]();

    _classCallCheck(this, HTMLView);

    _defineProperty(this, "game", void 0);

    _defineProperty(this, "view", void 0);

    _defineProperty(this, "players", void 0);

    _defineProperty(this, "on", void 0);

    // this.view.playEvent.addListener(({ x, y }: IFieldViewProps) => this.game.makeMove({ x, y }));
    // this.game.updateCellEvent
    //   .addListener(({ x, y, sign }: IUpdateData) => this.view.updateCell({ x, y, sign }));
    // this.game.winEvent.addListener((winner: string) => this.view.showWin(winner));
    this.game = game;
    this.view = view;
    this.players = players;
    this.on = on;
    this.view.on.subscribe('move', function (_ref) {
      var x = _ref.x,
          y = _ref.y;
      return _this.game.makeMove({
        x: x,
        y: y
      });
    });
    this.game.on.subscribe('update', function (_ref2) {
      var x = _ref2.x,
          y = _ref2.y,
          sign = _ref2.sign;
      return _this.view.updateCell({
        x: x,
        y: y,
        sign: sign
      });
    });
    this.game.on.subscribe('win', function (winner) {
      return _this.view.showWin(winner);
    });
    this.game.on.subscribe('draw', function (winner) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvZ2FtZXMvU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL2dhbWVzL1RpY2tUYWNUb2UudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy9tb2RlbC9GaWVsZC50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvbW9kZWwvR2FtZS50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvdXRpbHMvT2JzZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL3ZpZXcvRmllbGRWaWV3LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy92aWV3L0hUTUxWaWV3LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy92aWV3L1BsYXllclZpZXcudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWUtY29yZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiT2JqZWN0IiwidmFsdWUiLCJTdHJhdGVneSIsIngiLCJ5IiwicmVzdWx0IiwiaSIsInB1c2giLCJBcnJheSIsImZpbGwiLCJib2FyZCIsInBsYXllcklkIiwic2xpY2UiLCJmbGF0IiwiZXZlcnkiLCJjZWxsIiwiZXhwb3J0cyIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJTdHJhdGVneV8xIiwicmVxdWlyZSIsIlRpY1RhY1RvZSIsIndpbkNvbWJpbmF0aW9ucyIsImNlbGxzIiwiaXNXaW5Db21iaW5hdGlvbnMiLCJzb21lIiwibGluZSIsInBsYXllcnMiLCJ0b2tlbnMiLCJtYXAiLCJwbGF5ZXIiLCJjdXJyZW50UGxheWVyIiwibmFtZSIsInNpZ24iLCJIVE1MVmlld18xIiwiR2FtZV8xIiwiVGlja1RhY1RvZV8xIiwiZ2FtZSIsInBsYXllcnNMaXN0Iiwic3RyYXRlZ3kiLCJmaWVsZFNpemUiLCJIVE1MVmlld0dhbWUiLCJyZW5kZXIiLCJGaWVsZCIsInNpemUiLCJGaWVsZF8xIiwiT2JzZXJ2ZXJfMSIsIkdhbWUiLCJnYW1lSW5mbyIsImZpZWxkIiwidHVybiIsImN1cnJlbnRQbGF5ZXJJbmRleCIsImlzRmluaXNoZWQiLCJvbiIsInNldFBsYXllclRva2VuIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJpc1ZhbGlkIiwiaXNUdXJuVmFsaWQiLCJ0cmlnZ2VyIiwic2V0VmFsdWUiLCJpc1BsYXllcldpbiIsImNoZWNrV2luIiwiaXNDZWxsc0Z1bGxlZCIsImNoZWNrRnVsbENlbGxzIiwiY2xlYXJCb2FyZCIsInVwZGF0ZVR1cm5BbmROZXh0UGxheWVyIiwibGVuZ3RoIiwiaiIsIkV2ZW50IiwiZXZlbnRzIiwiZXZlbnROYW1lIiwiZm4iLCJkYXRhIiwiZm9yRWFjaCIsIkZpZWxkVmlldyIsInJlc3VsdE1lc3NhZ2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjbGFzc1RhYmxlIiwidGFibGVFbCIsImNsYXNzTmFtZSIsInJvdyIsImluc2VydFJvdyIsImluc2VydENlbGwiLCJpZCIsImNvdW50ZXIiLCJ0YWJJbmRleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpZEVsZW1lbnQiLCJtYWluRWxlbSIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUZpZWxkIiwiYXBwZW5kIiwiZWwiLCJpdGVtIiwiY3VycmVudEl0ZW0iLCJ0ZXh0Q29udGVudCIsIndpbm5lciIsImNsZWFyRmllbGQiLCJGaWVsZFZpZXdfMSIsIlBsYXllclZpZXdfMSIsIkhUTUxWaWV3IiwidmlldyIsInN1YnNjcmliZSIsIm1ha2VNb3ZlIiwidXBkYXRlQ2VsbCIsInNob3dXaW4iLCJyZW5kZXJGaWVsZCIsInJlbmRlclBsYXllciIsIlBsYXllclZpZXciLCJjbGFzc1NlbGVjdG9yIiwicGxheWVyc0Jsb2NrIiwiaXRlbU5hbWUiLCJpbmRleCIsImluc2VydEFkamFj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ZUFBQSxHQUFrQnlGLFFBQWxCLEM7Ozs7Ozs7Ozs7QUNoQ2E7Ozs7OztBQUNiekcsOENBQTZDO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQTdDOztJQUNNZ0gsVTs7O3dDQUNhLFVBQUNyRixPQUFELEVBQVVzRixhQUFWLEVBQTRCO0FBQ3ZDLFFBQU1DLFlBQVksR0FBR3BDLFFBQVEsQ0FBQ2UsYUFBVCxDQUF1Qm9CLGFBQXZCLENBQXJCO0FBQ0F0RixXQUFPLENBQUNnRCxPQUFSLENBQWdCLFVBQUN3QyxRQUFELEVBQVdDLEtBQVg7QUFBQSxhQUFxQkYsWUFBckIsYUFBcUJBLFlBQXJCLHVCQUFxQkEsWUFBWSxDQUFFRyxrQkFBZCxDQUFpQyxXQUFqQyw2Q0FBZ0ZELEtBQUssR0FBRyxDQUF4RixlQUE4RkQsUUFBUSxDQUFDbkYsSUFBdkcsaUJBQXJCO0FBQUEsS0FBaEI7QUFDSCxHOzs7QUFFTGpCLGVBQUEsR0FBa0JpRyxVQUFsQixDOzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VDdEJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgU3RyYXRlZ3kge1xyXG4gICAgaW5pdCA9ICh4LCB5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB4OyBpICs9IDEpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3IEFycmF5KHkpLmZpbGwoMCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIGlzVHVyblZhbGlkID0gKGJvYXJkLCB4LCB5KSA9PiBib2FyZFt4XVt5XSA9PT0gMDtcclxuICAgIHNldFZhbHVlID0gKGJvYXJkLCB4LCB5LCBwbGF5ZXJJZCkgPT4ge1xyXG4gICAgICAgIGJvYXJkW3hdW3ldID0gcGxheWVySWQgKyAxO1xyXG4gICAgfTtcclxuICAgIGNoZWNrRnVsbENlbGxzID0gKGJvYXJkKSA9PiBib2FyZC5zbGljZSgpLmZsYXQoKS5ldmVyeSgoY2VsbCkgPT4gY2VsbCAhPT0gMCk7XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gU3RyYXRlZ3k7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFN0cmF0ZWd5XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vU3RyYXRlZ3lcIikpO1xyXG5jbGFzcyBUaWNUYWNUb2UgZXh0ZW5kcyBTdHJhdGVneV8xLmRlZmF1bHQge1xyXG4gICAgZ2V0TmFtZSA9ICgpID0+ICdUaWNUYWNUb2UnO1xyXG4gICAgY2hlY2tXaW4gPSAoYm9hcmQpID0+IHtcclxuICAgICAgICBjb25zdCB3aW5Db21iaW5hdGlvbnMgPSBbXHJcbiAgICAgICAgICAgIFswLCAxLCAyXSxcclxuICAgICAgICAgICAgWzMsIDQsIDVdLFxyXG4gICAgICAgICAgICBbNiwgNywgOF0sXHJcbiAgICAgICAgICAgIFswLCAzLCA2XSxcclxuICAgICAgICAgICAgWzEsIDQsIDddLFxyXG4gICAgICAgICAgICBbMiwgNSwgOF0sXHJcbiAgICAgICAgICAgIFswLCA0LCA4XSxcclxuICAgICAgICAgICAgWzIsIDQsIDZdLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgY2VsbHMgPSBib2FyZC5zbGljZSgpLmZsYXQoKTtcclxuICAgICAgICBjb25zdCBpc1dpbkNvbWJpbmF0aW9ucyA9IHdpbkNvbWJpbmF0aW9ucy5zb21lKChsaW5lKSA9PiBjZWxsc1tsaW5lWzBdXVxyXG4gICAgICAgICAgICAmJiBjZWxsc1tsaW5lWzBdXSA9PT0gY2VsbHNbbGluZVsxXV1cclxuICAgICAgICAgICAgJiYgY2VsbHNbbGluZVsxXV0gPT09IGNlbGxzW2xpbmVbMl1dKTtcclxuICAgICAgICBpZiAoaXNXaW5Db21iaW5hdGlvbnMpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBzZXRQbGF5ZXJUb2tlbiA9IChwbGF5ZXJzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5zID0gWydYJywgJ08nXTtcclxuICAgICAgICByZXR1cm4gcGxheWVycy5zbGljZSgpLm1hcCgocGxheWVyLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgICAgICBjdXJyZW50UGxheWVyID0geyBuYW1lOiBwbGF5ZXIsIHNpZ246IHRva2Vuc1tpXSB9O1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFBsYXllcjtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVGljVGFjVG9lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBIVE1MVmlld18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3ZpZXcvSFRNTFZpZXdcIikpO1xyXG5jb25zdCBHYW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kZWwvR2FtZVwiKSk7XHJcbmNvbnN0IFRpY2tUYWNUb2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9nYW1lcy9UaWNrVGFjVG9lXCIpKTtcclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lXzEuZGVmYXVsdCh7XHJcbiAgICBwbGF5ZXJzTGlzdDogWydwbGF5ZXIgT25lJywgJ3BsYXllciBUd28nXSxcclxuICAgIHN0cmF0ZWd5OiBuZXcgVGlja1RhY1RvZV8xLmRlZmF1bHQoKSxcclxuICAgIGZpZWxkU2l6ZTogeyB4OiAzLCB5OiAzIH0sXHJcbn0pO1xyXG5jb25zdCBIVE1MVmlld0dhbWUgPSBuZXcgSFRNTFZpZXdfMS5kZWZhdWx0KGdhbWUpO1xyXG5IVE1MVmlld0dhbWUucmVuZGVyKCcubWFpbicpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBGaWVsZCB7XHJcbiAgICBzaXplO1xyXG4gICAgYm9hcmQ7XHJcbiAgICBjb25zdHJ1Y3RvcihzaXplLCBib2FyZCA9IFtdKSB7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gRmllbGQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IEZpZWxkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vRmllbGRcIikpO1xyXG5jb25zdCBPYnNlcnZlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlscy9PYnNlcnZlclwiKSk7XHJcbmNsYXNzIEdhbWUge1xyXG4gICAgZ2FtZUluZm87XHJcbiAgICBmaWVsZDtcclxuICAgIHBsYXllcnM7XHJcbiAgICB0dXJuO1xyXG4gICAgY3VycmVudFBsYXllckluZGV4O1xyXG4gICAgaXNGaW5pc2hlZDtcclxuICAgIG9uO1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZUluZm8sIGZpZWxkID0geyBzaXplOiB7IHg6IDEsIHk6IDEgfSwgYm9hcmQ6IFtdIH0sIHBsYXllcnMgPSBbXSwgdHVybiA9IDAsIGN1cnJlbnRQbGF5ZXJJbmRleCA9IDAsIGlzRmluaXNoZWQgPSBmYWxzZSwgb24gPSBuZXcgT2JzZXJ2ZXJfMS5kZWZhdWx0KCkpIHtcclxuICAgICAgICB0aGlzLmdhbWVJbmZvID0gZ2FtZUluZm87XHJcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xyXG4gICAgICAgIHRoaXMucGxheWVycyA9IHBsYXllcnM7XHJcbiAgICAgICAgdGhpcy50dXJuID0gdHVybjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleCA9IGN1cnJlbnRQbGF5ZXJJbmRleDtcclxuICAgICAgICB0aGlzLmlzRmluaXNoZWQgPSBpc0ZpbmlzaGVkO1xyXG4gICAgICAgIHRoaXMub24gPSBvbjtcclxuICAgICAgICB0aGlzLnBsYXllcnMgPSB0aGlzLmdhbWVJbmZvLnN0cmF0ZWd5LnNldFBsYXllclRva2VuKGdhbWVJbmZvLnBsYXllcnNMaXN0KTtcclxuICAgICAgICB0aGlzLmZpZWxkID0gbmV3IEZpZWxkXzEuZGVmYXVsdCh0aGlzLmdhbWVJbmZvLmZpZWxkU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5maWVsZC5ib2FyZCA9IHRoaXMuZ2FtZUluZm8uc3RyYXRlZ3kuaW5pdCh0aGlzLmZpZWxkLnNpemUueCwgdGhpcy5maWVsZC5zaXplLnkpO1xyXG4gICAgfVxyXG4gICAgbWFrZU1vdmUoeyB4LCB5IH0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy5nYW1lSW5mby5zdHJhdGVneS5pc1R1cm5WYWxpZCh0aGlzLmZpZWxkLmJvYXJkLCB4LCB5KTtcclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNGaW5pc2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uLnRyaWdnZXIoJ3VwZGF0ZScsIHsgeCwgeSwgc2lnbjogdGhpcy5wbGF5ZXJzW3RoaXMuY3VycmVudFBsYXllckluZGV4XS5zaWduIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJbmZvLnN0cmF0ZWd5LnNldFZhbHVlKHRoaXMuZmllbGQuYm9hcmQsIHgsIHksIHRoaXMuY3VycmVudFBsYXllckluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaXNQbGF5ZXJXaW4gPSB0aGlzLmdhbWVJbmZvLnN0cmF0ZWd5LmNoZWNrV2luKHRoaXMuZmllbGQuYm9hcmQpO1xyXG4gICAgICAgIGNvbnN0IGlzQ2VsbHNGdWxsZWQgPSB0aGlzLmdhbWVJbmZvLnN0cmF0ZWd5LmNoZWNrRnVsbENlbGxzKHRoaXMuZmllbGQuYm9hcmQpO1xyXG4gICAgICAgIGlmIChpc0NlbGxzRnVsbGVkKVxyXG4gICAgICAgICAgICB0aGlzLm9uLnRyaWdnZXIoJ2RyYXcnLCAnbm8gb25lJyk7XHJcbiAgICAgICAgaWYgKGlzUGxheWVyV2luKVxyXG4gICAgICAgICAgICB0aGlzLm9uLnRyaWdnZXIoJ3dpbicsIHRoaXMucGxheWVyc1t0aGlzLmN1cnJlbnRQbGF5ZXJJbmRleF0ubmFtZSk7XHJcbiAgICAgICAgaWYgKGlzUGxheWVyV2luIHx8IGlzQ2VsbHNGdWxsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckJvYXJkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVR1cm5BbmROZXh0UGxheWVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXBkYXRlVHVybkFuZE5leHRQbGF5ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVySW5kZXggPSAodGhpcy50dXJuICsgMSkgJSB0aGlzLnBsYXllcnMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMudHVybiArPSAxO1xyXG4gICAgfVxyXG4gICAgY2xlYXJCb2FyZCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGQuc2l6ZS54OyBpICs9IDEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmZpZWxkLnNpemUueTsgaiArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkLmJvYXJkW2ldW2pdID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzRmluaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnR1cm4gPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllckluZGV4ID0gMDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBHYW1lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBFdmVudCB7XHJcbiAgICBldmVudHM7XHJcbiAgICBjb25zdHJ1Y3RvcihldmVudHMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xyXG4gICAgfVxyXG4gICAgc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pIHtcclxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcclxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnB1c2goZm4pO1xyXG4gICAgfVxyXG4gICAgdHJpZ2dlcihldmVudE5hbWUsIGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGZuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmbihkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEV2ZW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBPYnNlcnZlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlscy9PYnNlcnZlclwiKSk7XHJcbmNsYXNzIEZpZWxkVmlldyB7XHJcbiAgICB4O1xyXG4gICAgeTtcclxuICAgIGJvYXJkO1xyXG4gICAgcmVzdWx0TWVzc2FnZTtcclxuICAgIG9uO1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgYm9hcmQgPSBbXSwgcmVzdWx0TWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyksIG9uID0gbmV3IE9ic2VydmVyXzEuZGVmYXVsdCgpKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICAgICAgICB0aGlzLnJlc3VsdE1lc3NhZ2UgPSByZXN1bHRNZXNzYWdlO1xyXG4gICAgICAgIHRoaXMub24gPSBvbjtcclxuICAgIH1cclxuICAgIGdlbmVyYXRlRmllbGQoY2xhc3NUYWJsZSkge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgICAgIHRhYmxlRWwuY2xhc3NOYW1lID0gY2xhc3NUYWJsZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgY291bnRlciA9IDA7IGkgPCB0aGlzLng7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSB0YWJsZUVsLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy55OyBqICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXS5wdXNoKGNlbGwpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmlkID0gYCR7KGNvdW50ZXIgKz0gMSl9YDtcclxuICAgICAgICAgICAgICAgIGNlbGwudGFiSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uLnRyaWdnZXIoJ21vdmUnLCB7IHg6IGksIHk6IGogfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFibGVFbDtcclxuICAgIH1cclxuICAgIHVwZGF0ZUNlbGwgPSAoeyB4LCB5LCBzaWduIH0pID0+IHtcclxuICAgICAgICB0aGlzLmJvYXJkW3hdW3ldLmlubmVySFRNTCA9IHNpZ247XHJcbiAgICB9O1xyXG4gICAgcmVuZGVyRmllbGQoaWRFbGVtZW50LCBjbGFzc1RhYmxlKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkRWxlbWVudCk7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmdlbmVyYXRlRmllbGQoY2xhc3NUYWJsZSk7XHJcbiAgICAgICAgbWFpbkVsZW0/LmFwcGVuZChmaWVsZCk7XHJcbiAgICAgICAgbWFpbkVsZW0/LmFwcGVuZCh0aGlzLnJlc3VsdE1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgY2xlYXJGaWVsZCgpIHtcclxuICAgICAgICB0aGlzLmJvYXJkLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGVsLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2hvd1dpbih3aW5uZXIpIHtcclxuICAgICAgICB0aGlzLnJlc3VsdE1lc3NhZ2UuaW5uZXJIVE1MID0gYCR7d2lubmVyfSB3aW5gO1xyXG4gICAgICAgIHRoaXMuY2xlYXJGaWVsZCgpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEZpZWxkVmlldztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgT2JzZXJ2ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbHMvT2JzZXJ2ZXJcIikpO1xyXG5jb25zdCBGaWVsZFZpZXdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9GaWVsZFZpZXdcIikpO1xyXG5jb25zdCBQbGF5ZXJWaWV3XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUGxheWVyVmlld1wiKSk7XHJcbmNsYXNzIEhUTUxWaWV3IHtcclxuICAgIGdhbWU7XHJcbiAgICB2aWV3O1xyXG4gICAgcGxheWVycztcclxuICAgIG9uO1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwgdmlldyA9IG5ldyBGaWVsZFZpZXdfMS5kZWZhdWx0KGdhbWUuZmllbGQuc2l6ZS54LCBnYW1lLmZpZWxkLnNpemUueSksIHBsYXllcnMgPSBuZXcgUGxheWVyVmlld18xLmRlZmF1bHQoKSwgb24gPSBuZXcgT2JzZXJ2ZXJfMS5kZWZhdWx0KCkpIHtcclxuICAgICAgICAvLyB0aGlzLnZpZXcucGxheUV2ZW50LmFkZExpc3RlbmVyKCh7IHgsIHkgfTogSUZpZWxkVmlld1Byb3BzKSA9PiB0aGlzLmdhbWUubWFrZU1vdmUoeyB4LCB5IH0pKTtcclxuICAgICAgICAvLyB0aGlzLmdhbWUudXBkYXRlQ2VsbEV2ZW50XHJcbiAgICAgICAgLy8gICAuYWRkTGlzdGVuZXIoKHsgeCwgeSwgc2lnbiB9OiBJVXBkYXRlRGF0YSkgPT4gdGhpcy52aWV3LnVwZGF0ZUNlbGwoeyB4LCB5LCBzaWduIH0pKTtcclxuICAgICAgICAvLyB0aGlzLmdhbWUud2luRXZlbnQuYWRkTGlzdGVuZXIoKHdpbm5lcjogc3RyaW5nKSA9PiB0aGlzLnZpZXcuc2hvd1dpbih3aW5uZXIpKTtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXc7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gcGxheWVycztcclxuICAgICAgICB0aGlzLm9uID0gb247XHJcbiAgICAgICAgdGhpcy52aWV3Lm9uLnN1YnNjcmliZSgnbW92ZScsICh7IHgsIHkgfSkgPT4gdGhpcy5nYW1lLm1ha2VNb3ZlKHsgeCwgeSB9KSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLm9uLnN1YnNjcmliZSgndXBkYXRlJywgKHsgeCwgeSwgc2lnbiB9KSA9PiB0aGlzLnZpZXcudXBkYXRlQ2VsbCh7IHgsIHksIHNpZ24gfSkpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5vbi5zdWJzY3JpYmUoJ3dpbicsICh3aW5uZXIpID0+IHRoaXMudmlldy5zaG93V2luKHdpbm5lcikpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5vbi5zdWJzY3JpYmUoJ2RyYXcnLCAod2lubmVyKSA9PiB0aGlzLnZpZXcuc2hvd1dpbih3aW5uZXIpKTtcclxuICAgIH1cclxuICAgIHJlbmRlcihpZEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLnZpZXcucmVuZGVyRmllbGQoaWRFbGVtZW50LCAndGFibGUtYm9yZGVyZWQnKTtcclxuICAgICAgICB0aGlzLnBsYXllcnMucmVuZGVyUGxheWVyKHRoaXMuZ2FtZS5wbGF5ZXJzLCAnLm1haW4nKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBIVE1MVmlldztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgUGxheWVyVmlldyB7XHJcbiAgICByZW5kZXJQbGF5ZXIgPSAocGxheWVycywgY2xhc3NTZWxlY3RvcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllcnNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NTZWxlY3Rvcik7XHJcbiAgICAgICAgcGxheWVycy5mb3JFYWNoKChpdGVtTmFtZSwgaW5kZXgpID0+IHBsYXllcnNCbG9jaz8uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGgzIGNsYXNzPVwicGxheWVyLW5hbWVcIj5QbGF5ZXIgJHtpbmRleCArIDF9OiAke2l0ZW1OYW1lLm5hbWV9PC9oMz48L2Rpdj5gKSk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFBsYXllclZpZXc7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=