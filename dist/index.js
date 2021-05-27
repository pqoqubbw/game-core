/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

var ticTacToe_1 = __importDefault(__webpack_require__(/*! ./ticTacToe */ "./src/ticTacToe.ts"));

var field_1 = __importDefault(__webpack_require__(/*! ./view/field */ "./src/view/field.ts"));

var player_1 = __importDefault(__webpack_require__(/*! ./view/player */ "./src/view/player.ts")); // eslint-disable-next-line @typescript-eslint/no-unused-vars


var field = new field_1["default"](3, 3).renderField(); // eslint-disable-next-line @typescript-eslint/no-unused-vars

var players = new player_1["default"](['X', 'O']).renderPlayer();
var cells = document.querySelectorAll('.cell'); // eslint-disable-next-line @typescript-eslint/no-unused-vars

var tictac = new ticTacToe_1["default"](cells).setHandleMove(cells);

/***/ }),

/***/ "./src/model/game.ts":
/*!***************************!*\
  !*** ./src/model/game.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var GameModel = /*#__PURE__*/function () {
  function GameModel(players) {
    var currentPlayer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : players[0];
    var turn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var finished = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, GameModel);

    this.players = players;
    this.currentPlayer = currentPlayer;
    this.turn = turn;
    this.finished = finished;
  }

  _createClass(GameModel, [{
    key: "checkDraw",
    value: function checkDraw(cells) {
      var draw = Array.from(cells).every(function (cell) {
        return cell.textContent !== '';
      });
      if (draw) this.finished = true;
      return draw;
    }
  }, {
    key: "play",
    value: function play(cell, currentSymbol) {
      if (cell.textContent === '' && !this.finished) {
        this.setValue(cell, currentSymbol);
        this.switchPlayer();
      }
    }
  }, {
    key: "setValue",
    value: function setValue(cell, currentSymbol) {
      var currentCell = cell;
      currentCell.textContent = currentSymbol;
      this.checkWin();
    }
  }, {
    key: "restartGame",
    value: function restartGame(cells) {
      Array.from(cells).map(function (cell) {
        var currentCell = cell;
        currentCell.textContent = '';
        return cell;
      });
      this.finished = false;
      var firtsPlayer = 0;
      this.currentPlayer = this.players[firtsPlayer];
      this.turn = 0;
    }
  }, {
    key: "switchPlayer",
    value: function switchPlayer() {
      var currentPlayerIndex = this.players.indexOf(this.players[this.turn % this.players.length]);
      this.turn += 1;
      this.currentPlayer = this.players[currentPlayerIndex];
    }
  }, {
    key: "setHandleMove",
    value: function setHandleMove(cells) {
      var _this = this;

      cells === null || cells === void 0 ? void 0 : cells.forEach(function (cell) {
        cell.addEventListener('click', function () {
          return _this.play(cell, _this.currentPlayer);
        });
      });
    }
  }]);

  return GameModel;
}();

exports.default = GameModel;

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

var game_1 = __importDefault(__webpack_require__(/*! ./model/game */ "./src/model/game.ts"));

var TicTacToe = /*#__PURE__*/function (_game_1$default) {
  _inherits(TicTacToe, _game_1$default);

  var _super = _createSuper(TicTacToe);

  function TicTacToe(cells) {
    var _this;

    _classCallCheck(this, TicTacToe);

    _this = _super.call(this, ['X', 'O']);
    _this.cells = cells;
    return _this;
  }

  _createClass(TicTacToe, [{
    key: "checkWin",
    value: function checkWin() {
      var _this2 = this;

      var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
      var victory = lines.some(function (l) {
        return _this2.cells[l[0]].textContent && _this2.cells[l[0]].textContent === _this2.cells[l[1]].textContent && _this2.cells[l[1]].textContent === _this2.cells[l[2]].textContent;
      });

      if (!victory && this.checkDraw(this.cells)) {
        // eslint-disable-next-line no-alert
        alert('it is a draw');
      }

      if (victory) {
        // eslint-disable-next-line no-alert
        alert("".concat(this.currentPlayer, " win!"));
        this.finished = true;
      }

      if (this.finished) this.restartGame(this.cells);
    }
  }]);

  return TicTacToe;
}(game_1["default"]);

exports.default = TicTacToe;

/***/ }),

/***/ "./src/view/field.ts":
/*!***************************!*\
  !*** ./src/view/field.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

 // import { IField } from '../field/index';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var FieldView = /*#__PURE__*/function () {
  function FieldView(x, y) {
    _classCallCheck(this, FieldView);

    this.x = x;
    this.y = y;
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
  }]);

  return FieldView;
}();

exports.default = FieldView;

/***/ }),

/***/ "./src/view/player.ts":
/*!****************************!*\
  !*** ./src/view/player.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var PlayerView = /*#__PURE__*/function () {
  function PlayerView(name) {
    _classCallCheck(this, PlayerView);

    this.name = name;
  }

  _createClass(PlayerView, [{
    key: "renderPlayer",
    value: function renderPlayer() {
      var playerBlock = document.querySelector('.main');
      this.name.forEach(function (itemName, index) {
        return playerBlock === null || playerBlock === void 0 ? void 0 : playerBlock.insertAdjacentHTML('beforeend', "<h3 class=\"player-name\">Player ".concat(index + 1, ": ").concat(itemName, "</h3></div>"));
      });
    }
  }]);

  return PlayerView;
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL21vZGVsL2dhbWUudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL3RpY1RhY1RvZS50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvdmlldy9maWVsZC50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvdmlldy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWUtY29yZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsIk9iamVjdCIsInZhbHVlIiwidGljVGFjVG9lXzEiLCJyZXF1aXJlIiwiZmllbGRfMSIsInBsYXllcl8xIiwiZmllbGQiLCJyZW5kZXJGaWVsZCIsInBsYXllcnMiLCJyZW5kZXJQbGF5ZXIiLCJjZWxscyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRpY3RhYyIsInNldEhhbmRsZU1vdmUiLCJHYW1lTW9kZWwiLCJjdXJyZW50UGxheWVyIiwidHVybiIsImZpbmlzaGVkIiwiZHJhdyIsIkFycmF5IiwiZnJvbSIsImV2ZXJ5IiwiY2VsbCIsInRleHRDb250ZW50IiwiY3VycmVudFN5bWJvbCIsInNldFZhbHVlIiwic3dpdGNoUGxheWVyIiwiY3VycmVudENlbGwiLCJjaGVja1dpbiIsIm1hcCIsImZpcnRzUGxheWVyIiwiY3VycmVudFBsYXllckluZGV4IiwiaW5kZXhPZiIsImxlbmd0aCIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwicGxheSIsImV4cG9ydHMiLCJnYW1lXzEiLCJUaWNUYWNUb2UiLCJsaW5lcyIsInZpY3RvcnkiLCJzb21lIiwibCIsImNoZWNrRHJhdyIsImFsZXJ0IiwicmVzdGFydEdhbWUiLCJGaWVsZFZpZXciLCJ4IiwieSIsInRhYmxlRWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiY291bnRlciIsImkiLCJyb3ciLCJpbnNlcnRSb3ciLCJqIiwiaW5zZXJ0Q2VsbCIsImlkIiwidGFiSW5kZXgiLCJtYWluRWxlbSIsInF1ZXJ5U2VsZWN0b3IiLCJnZW5lcmF0ZUZpZWxkIiwiYXBwZW5kIiwiUGxheWVyVmlldyIsIm5hbWUiLCJwbGF5ZXJCbG9jayIsIml0ZW1OYW1lIiwiaW5kZXgiLCJpbnNlcnRBZGphY2VudEhUTUwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFDYixJQUFJQSxlQUFlLEdBQUksUUFBUSxLQUFLQSxlQUFkLElBQWtDLFVBQVVDLEdBQVYsRUFBZTtBQUNuRSxTQUFRQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWixHQUEwQkQsR0FBMUIsR0FBZ0M7QUFBRSxlQUFXQTtBQUFiLEdBQXZDO0FBQ0gsQ0FGRDs7QUFHQUUsOENBQTZDO0FBQUVDLE9BQUssRUFBRTtBQUFULENBQTdDOztBQUNBLElBQU1DLFdBQVcsR0FBR0wsZUFBZSxDQUFDTSxtQkFBTyxDQUFDLHVDQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHUCxlQUFlLENBQUNNLG1CQUFPLENBQUMseUNBQUQsQ0FBUixDQUEvQjs7QUFDQSxJQUFNRSxRQUFRLEdBQUdSLGVBQWUsQ0FBQ00sbUJBQU8sQ0FBQywyQ0FBRCxDQUFSLENBQWhDLEMsQ0FDQTs7O0FBQ0EsSUFBTUcsS0FBSyxHQUFHLElBQUlGLE9BQU8sV0FBWCxDQUFvQixDQUFwQixFQUF1QixDQUF2QixFQUEwQkcsV0FBMUIsRUFBZCxDLENBQ0E7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHLElBQUlILFFBQVEsV0FBWixDQUFxQixDQUFDLEdBQUQsRUFBTSxHQUFOLENBQXJCLEVBQWlDSSxZQUFqQyxFQUFoQjtBQUNBLElBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixDQUFkLEMsQ0FDQTs7QUFDQSxJQUFNQyxNQUFNLEdB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Q0FBdkYsZUFBNkZELFFBQTdGLGlCQUFyQjtBQUFBLE9BQWxCO0FBQ0g7Ozs7OztBQUVML0IsZUFBQSxHQUFrQjRCLFVBQWxCLEM7Ozs7OztVQ1hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB0aWNUYWNUb2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi90aWNUYWNUb2VcIikpO1xyXG5jb25zdCBmaWVsZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3ZpZXcvZmllbGRcIikpO1xyXG5jb25zdCBwbGF5ZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi92aWV3L3BsYXllclwiKSk7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuY29uc3QgZmllbGQgPSBuZXcgZmllbGRfMS5kZWZhdWx0KDMsIDMpLnJlbmRlckZpZWxkKCk7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuY29uc3QgcGxheWVycyA9IG5ldyBwbGF5ZXJfMS5kZWZhdWx0KFsnWCcsICdPJ10pLnJlbmRlclBsYXllcigpO1xyXG5jb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuY29uc3QgdGljdGFjID0gbmV3IHRpY1RhY1RvZV8xLmRlZmF1bHQoY2VsbHMpLnNldEhhbmRsZU1vdmUoY2VsbHMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jbGFzcyBHYW1lTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVycywgY3VycmVudFBsYXllciA9IHBsYXllcnNbMF0sIHR1cm4gPSAxLCBmaW5pc2hlZCA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gcGxheWVycztcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBjdXJyZW50UGxheWVyO1xyXG4gICAgICAgIHRoaXMudHVybiA9IHR1cm47XHJcbiAgICAgICAgdGhpcy5maW5pc2hlZCA9IGZpbmlzaGVkO1xyXG4gICAgfVxyXG4gICAgY2hlY2tEcmF3KGNlbGxzKSB7XHJcbiAgICAgICAgY29uc3QgZHJhdyA9IEFycmF5LmZyb20oY2VsbHMpLmV2ZXJ5KChjZWxsKSA9PiBjZWxsLnRleHRDb250ZW50ICE9PSAnJyk7XHJcbiAgICAgICAgaWYgKGRyYXcpXHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBkcmF3O1xyXG4gICAgfVxyXG4gICAgcGxheShjZWxsLCBjdXJyZW50U3ltYm9sKSB7XHJcbiAgICAgICAgaWYgKGNlbGwudGV4dENvbnRlbnQgPT09ICcnICYmICF0aGlzLmZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoY2VsbCwgY3VycmVudFN5bWJvbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoUGxheWVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0VmFsdWUoY2VsbCwgY3VycmVudFN5bWJvbCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDZWxsID0gY2VsbDtcclxuICAgICAgICBjdXJyZW50Q2VsbC50ZXh0Q29udGVudCA9IGN1cnJlbnRTeW1ib2w7XHJcbiAgICAgICAgdGhpcy5jaGVja1dpbigpO1xyXG4gICAgfVxyXG4gICAgcmVzdGFydEdhbWUoY2VsbHMpIHtcclxuICAgICAgICBBcnJheS5mcm9tKGNlbGxzKS5tYXAoKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudENlbGwgPSBjZWxsO1xyXG4gICAgICAgICAgICBjdXJyZW50Q2VsbC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICByZXR1cm4gY2VsbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgZmlydHNQbGF5ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyc1tmaXJ0c1BsYXllcl07XHJcbiAgICAgICAgdGhpcy50dXJuID0gMDtcclxuICAgIH1cclxuICAgIHN3aXRjaFBsYXllcigpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGxheWVySW5kZXggPSB0aGlzLnBsYXllcnMuaW5kZXhPZih0aGlzLnBsYXllcnNbdGhpcy50dXJuICUgdGhpcy5wbGF5ZXJzLmxlbmd0aF0pO1xyXG4gICAgICAgIHRoaXMudHVybiArPSAxO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyc1tjdXJyZW50UGxheWVySW5kZXhdO1xyXG4gICAgfVxyXG4gICAgc2V0SGFuZGxlTW92ZShjZWxscykge1xyXG4gICAgICAgIGNlbGxzPy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnBsYXkoY2VsbCwgdGhpcy5jdXJyZW50UGxheWVyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZU1vZGVsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBnYW1lXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbW9kZWwvZ2FtZVwiKSk7XHJcbmNsYXNzIFRpY1RhY1RvZSBleHRlbmRzIGdhbWVfMS5kZWZhdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKGNlbGxzKSB7XHJcbiAgICAgICAgc3VwZXIoWydYJywgJ08nXSk7XHJcbiAgICAgICAgdGhpcy5jZWxscyA9IGNlbGxzO1xyXG4gICAgfVxyXG4gICAgY2hlY2tXaW4oKSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXHJcbiAgICAgICAgICAgIFswLCAxLCAyXSxcclxuICAgICAgICAgICAgWzMsIDQsIDVdLFxyXG4gICAgICAgICAgICBbNiwgNywgOF0sXHJcbiAgICAgICAgICAgIFswLCAzLCA2XSxcclxuICAgICAgICAgICAgWzEsIDQsIDddLFxyXG4gICAgICAgICAgICBbMiwgNSwgOF0sXHJcbiAgICAgICAgICAgIFswLCA0LCA4XSxcclxuICAgICAgICAgICAgWzIsIDQsIDZdLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgdmljdG9yeSA9IGxpbmVzLnNvbWUoKGwpID0+IHRoaXMuY2VsbHNbbFswXV0udGV4dENvbnRlbnRcclxuICAgICAgICAgICAgJiYgdGhpcy5jZWxsc1tsWzBdXS50ZXh0Q29udGVudCA9PT0gdGhpcy5jZWxsc1tsWzFdXS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAmJiB0aGlzLmNlbGxzW2xbMV1dLnRleHRDb250ZW50ID09PSB0aGlzLmNlbGxzW2xbMl1dLnRleHRDb250ZW50KTtcclxuICAgICAgICBpZiAoIXZpY3RvcnkgJiYgdGhpcy5jaGVja0RyYXcodGhpcy5jZWxscykpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICAgICAgICAgIGFsZXJ0KCdpdCBpcyBhIGRyYXcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZpY3RvcnkpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWFsZXJ0XHJcbiAgICAgICAgICAgIGFsZXJ0KGAke3RoaXMuY3VycmVudFBsYXllcn0gd2luIWApO1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZmluaXNoZWQpXHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUodGhpcy5jZWxscyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gVGljVGFjVG9lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuLy8gaW1wb3J0IHsgSUZpZWxkIH0gZnJvbSAnLi4vZmllbGQvaW5kZXgnO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEZpZWxkVmlldyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgZ2VuZXJhdGVGaWVsZCgpIHtcclxuICAgICAgICBjb25zdCB0YWJsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgICAgICB0YWJsZUVsLmNsYXNzTmFtZSA9ICd0YWJsZS1ib3JkZXJlZCc7XHJcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy54OyBpICs9IDEpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93ID0gdGFibGVFbC5pbnNlcnRSb3coKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnk7IGogKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcclxuICAgICAgICAgICAgICAgIGNlbGwuaWQgPSBgJHsoY291bnRlciArPSAxKX1gO1xyXG4gICAgICAgICAgICAgICAgY2VsbC50YWJJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRhYmxlRWw7XHJcbiAgICB9XHJcbiAgICByZW5kZXJGaWVsZCgpIHtcclxuICAgICAgICBjb25zdCBtYWluRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmdlbmVyYXRlRmllbGQoKTtcclxuICAgICAgICBtYWluRWxlbT8uYXBwZW5kKGZpZWxkKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBGaWVsZFZpZXc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIFBsYXllclZpZXcge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICByZW5kZXJQbGF5ZXIoKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgICAgIHRoaXMubmFtZS5mb3JFYWNoKChpdGVtTmFtZSwgaW5kZXgpID0+IHBsYXllckJsb2NrPy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8aDMgY2xhc3M9XCJwbGF5ZXItbmFtZVwiPlBsYXllciAke2luZGV4ICsgMX06ICR7aXRlbU5hbWV9PC9oMz48L2Rpdj5gKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gUGxheWVyVmlldztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=