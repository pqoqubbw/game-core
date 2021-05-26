/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game/index.ts":
/*!***************************!*\
  !*** ./src/game/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Game = /*#__PURE__*/function () {
  function Game(players) {
    var currentPlayer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var turn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var finished = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, Game);

    this.players = players;
    this.currentPlayer = currentPlayer;
    this.turn = turn;
    this.finished = finished;
  } // abstract checkDraw(): boolean;


  _createClass(Game, [{
    key: "play",
    value: function play(currentSymbol) {
      this.setValue(currentSymbol);
      this.finished = this.checkWin() || this.checkDraw();
      if (!this.finished) this.switchPlayer();
      return true;
    }
  }, {
    key: "setValue",
    value: function setValue(currentSymbol) {
      if (this.textContent === 's') {
        this.textContent = currentSymbol;
      } else {
        alert('Ячейка занята');
      }
    }
  }, {
    key: "switchPlayer",
    value: function switchPlayer() {
      this.currentPlayer = this.players.indexOf(this.players[this.turn % this.players.length]);
      this.turn += 1;
    }
  }, {
    key: "setHandleMove",
    value: function setHandleMove(cells, currentSymbol) {
      var _this = this;

      cells === null || cells === void 0 ? void 0 : cells.forEach(function (cell) {
        cell.addEventListener('click', function () {
          return _this.play(currentSymbol);
        });
      });
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

 // import Field from './field/index';

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var ticTacToe_1 = __importDefault(__webpack_require__(/*! ./ticTacToe/ticTacToe */ "./src/ticTacToe/ticTacToe.ts"));

var field_1 = __importDefault(__webpack_require__(/*! ./view/field */ "./src/view/field.ts"));

var game = new field_1["default"](9, 9).initField();
var cells = document.querySelectorAll('.cell');
var modal = new ticTacToe_1["default"](cells).play('x');

/***/ }),

/***/ "./src/ticTacToe/ticTacToe.ts":
/*!************************************!*\
  !*** ./src/ticTacToe/ticTacToe.ts ***!
  \************************************/
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

var index_1 = __importDefault(__webpack_require__(/*! ../game/index */ "./src/game/index.ts"));

var TicTacToe = /*#__PURE__*/function (_index_1$default) {
  _inherits(TicTacToe, _index_1$default);

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

      if (victory) {
        // eslint-disable-next-line no-alert
        alert("".concat(this.currentPlayer, " win!"));
      }

      return victory;
    }
  }]);

  return TicTacToe;
}(index_1["default"]);

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
          cell.innerHTML = '<div class="visually-hidden">s</div>';
        }
      }

      return tableEl;
    }
  }, {
    key: "setValue",
    value: function setValue(currentSymbol) {
      if (this.textContent === 's') {
        this.textContent = currentSymbol;
      } else {
        alert('Ячейка занята');
      }
    }
  }, {
    key: "initField",
    value: function initField() {
      var mainElem = document.querySelector('.main');
      var field = this.generateField();
      mainElem === null || mainElem === void 0 ? void 0 : mainElem.append(field);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvZ2FtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL3RpY1RhY1RvZS90aWNUYWNUb2UudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL3ZpZXcvZmllbGQudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWUtY29yZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiT2JqZWN0IiwidmFsdWUiLCJHYW1lIiwicGxheWVycyIsImN1cnJlbnRQbGF5ZXIiLCJ0dXJuIiwiZmluaXNoZWQiLCJjdXJyZW50U3ltYm9sIiwic2V0VmFsdWUiLCJjaGVja1dpbiIsImNoZWNrRHJhdyIsInN3aXRjaFBsYXllciIsInRleHRDb250ZW50IiwiYWxlcnQiLCJpbmRleE9mIiwibGVuZ3RoIiwiY2VsbHMiLCJmb3JFYWNoIiwiY2VsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5IiwiZXhwb3J0cyIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsIl9fZXNNb2R1bGUiLCJ0aWNUYWNUb2VfMSIsInJlcXVpcmUiLCJmaWVsZF8xIiwiZ2FtZSIsImluaXRGaWVsZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIm1vZGFsIiwiaW5kZXhfMSIsIlRpY1RhY1RvZSIsImxpbmVzIiwidmljdG9yeSIsInNvbWUiLCJsIiwiRmllbGRWaWV3IiwieCIsInkiLCJ0YWJsZUVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvdW50ZXIiLCJpIiwicm93IiwiaW5zZXJ0Um93IiwiaiIsImluc2VydENlbGwiLCJpZCIsInRhYkluZGV4IiwiaW5uZXJIVE1MIiwibWFpbkVsZW0iLCJxdWVyeVNlbGVjdG9yIiwiZmllbGQiLCJnZW5lcmF0ZUZpZWxkIiwiYXBwZW5kIl0sIm1hcHBp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QUwsR0FBZ0IsQ0FBaEI7QUFDQWxDLGNBQUksQ0FBQ21DLFNBQUwsR0FBaUIsc0NBQWpCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPWCxPQUFQO0FBQ0g7OztXQUNELGtCQUFTbkMsYUFBVCxFQUF3QjtBQUNwQixVQUFJLEtBQUtLLFdBQUwsS0FBcUIsR0FBekIsRUFBOEI7QUFDMUIsYUFBS0EsV0FBTCxHQUFtQkwsYUFBbkI7QUFDSCxPQUZELE1BR0s7QUFDRE0sYUFBSyxDQUFDLGVBQUQsQ0FBTDtBQUNIO0FBQ0o7OztXQUNELHFCQUFZO0FBQ1IsVUFBTXlDLFFBQVEsR0FBR3hCLFFBQVEsQ0FBQ3lCLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBakI7QUFDQSxVQUFNQyxLQUFLLEdBQUcsS0FBS0MsYUFBTCxFQUFkO0FBQ0FILGNBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFSSxNQUFWLENBQWlCRixLQUFqQjtBQUNIOzs7Ozs7QUFFTG5DLGVBQUEsR0FBa0JrQixTQUFsQixDOzs7Ozs7VUNyQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IocGxheWVycywgY3VycmVudFBsYXllciA9IDAsIHR1cm4gPSAwLCBmaW5pc2hlZCA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gcGxheWVycztcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBjdXJyZW50UGxheWVyO1xyXG4gICAgICAgIHRoaXMudHVybiA9IHR1cm47XHJcbiAgICAgICAgdGhpcy5maW5pc2hlZCA9IGZpbmlzaGVkO1xyXG4gICAgfVxyXG4gICAgLy8gYWJzdHJhY3QgY2hlY2tEcmF3KCk6IGJvb2xlYW47XHJcbiAgICBwbGF5KGN1cnJlbnRTeW1ib2wpIHtcclxuICAgICAgICB0aGlzLnNldFZhbHVlKGN1cnJlbnRTeW1ib2wpO1xyXG4gICAgICAgIHRoaXMuZmluaXNoZWQgPSB0aGlzLmNoZWNrV2luKCkgfHwgdGhpcy5jaGVja0RyYXcoKTtcclxuICAgICAgICBpZiAoIXRoaXMuZmluaXNoZWQpXHJcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoUGxheWVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBzZXRWYWx1ZShjdXJyZW50U3ltYm9sKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGV4dENvbnRlbnQgPT09ICdzJykge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gY3VycmVudFN5bWJvbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfQr9GH0LXQudC60LAg0LfQsNC90Y/RgtCwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3dpdGNoUGxheWVyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVycy5pbmRleE9mKHRoaXMucGxheWVyc1t0aGlzLnR1cm4gJSB0aGlzLnBsYXllcnMubGVuZ3RoXSk7XHJcbiAgICAgICAgdGhpcy50dXJuICs9IDE7XHJcbiAgICB9XHJcbiAgICBzZXRIYW5kbGVNb3ZlKGNlbGxzLCBjdXJyZW50U3ltYm9sKSB7XHJcbiAgICAgICAgY2VsbHM/LmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucGxheShjdXJyZW50U3ltYm9sKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8vIGltcG9ydCBGaWVsZCBmcm9tICcuL2ZpZWxkL2luZGV4JztcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCB0aWNUYWNUb2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi90aWNUYWNUb2UvdGljVGFjVG9lXCIpKTtcclxuY29uc3QgZmllbGRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi92aWV3L2ZpZWxkXCIpKTtcclxuY29uc3QgZ2FtZSA9IG5ldyBmaWVsZF8xLmRlZmF1bHQoOSwgOSkuaW5pdEZpZWxkKCk7XHJcbmNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcclxuY29uc3QgbW9kYWwgPSBuZXcgdGljVGFjVG9lXzEuZGVmYXVsdChjZWxscykucGxheSgneCcpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbmRleF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9nYW1lL2luZGV4XCIpKTtcclxuY2xhc3MgVGljVGFjVG9lIGV4dGVuZHMgaW5kZXhfMS5kZWZhdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKGNlbGxzKSB7XHJcbiAgICAgICAgc3VwZXIoWydYJywgJ08nXSk7XHJcbiAgICAgICAgdGhpcy5jZWxscyA9IGNlbGxzO1xyXG4gICAgfVxyXG4gICAgY2hlY2tXaW4oKSB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXHJcbiAgICAgICAgICAgIFswLCAxLCAyXSxcclxuICAgICAgICAgICAgWzMsIDQsIDVdLFxyXG4gICAgICAgICAgICBbNiwgNywgOF0sXHJcbiAgICAgICAgICAgIFswLCAzLCA2XSxcclxuICAgICAgICAgICAgWzEsIDQsIDddLFxyXG4gICAgICAgICAgICBbMiwgNSwgOF0sXHJcbiAgICAgICAgICAgIFswLCA0LCA4XSxcclxuICAgICAgICAgICAgWzIsIDQsIDZdLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY29uc3QgdmljdG9yeSA9IGxpbmVzLnNvbWUoKGwpID0+IHRoaXMuY2VsbHNbbFswXV0udGV4dENvbnRlbnRcclxuICAgICAgICAgICAgJiYgdGhpcy5jZWxsc1tsWzBdXS50ZXh0Q29udGVudCA9PT0gdGhpcy5jZWxsc1tsWzFdXS50ZXh0Q29udGVudFxyXG4gICAgICAgICAgICAmJiB0aGlzLmNlbGxzW2xbMV1dLnRleHRDb250ZW50ID09PSB0aGlzLmNlbGxzW2xbMl1dLnRleHRDb250ZW50KTtcclxuICAgICAgICBpZiAodmljdG9yeSkge1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYWxlcnRcclxuICAgICAgICAgICAgYWxlcnQoYCR7dGhpcy5jdXJyZW50UGxheWVyfSB3aW4hYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2aWN0b3J5O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRpY1RhY1RvZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgRmllbGRWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZUZpZWxkKCkge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgICAgIHRhYmxlRWwuY2xhc3NOYW1lID0gJ3RhYmxlLWJvcmRlcmVkJztcclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLng7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSB0YWJsZUVsLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMueTsgaiArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pZCA9IGAkeyhjb3VudGVyICs9IDEpfWA7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnRhYkluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj5zPC9kaXY+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFibGVFbDtcclxuICAgIH1cclxuICAgIHNldFZhbHVlKGN1cnJlbnRTeW1ib2wpIHtcclxuICAgICAgICBpZiAodGhpcy50ZXh0Q29udGVudCA9PT0gJ3MnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dENvbnRlbnQgPSBjdXJyZW50U3ltYm9sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ9Cv0YfQtdC50LrQsCDQt9Cw0L3Rj9GC0LAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbml0RmllbGQoKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5nZW5lcmF0ZUZpZWxkKCk7XHJcbiAgICAgICAgbWFpbkVsZW0/LmFwcGVuZChmaWVsZCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gRmllbGRWaWV3O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==