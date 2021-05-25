/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/field/index.ts":
/*!****************************!*\
  !*** ./src/field/index.ts ***!
  \****************************/
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

var index_1 = __importDefault(__webpack_require__(/*! ../player/index */ "./src/player/index.ts"));

var Field = /*#__PURE__*/function () {
  function Field(x, y, playersQuantity) {
    _classCallCheck(this, Field);

    this.x = x;
    this.y = y;
    this.playersQuantity = playersQuantity;
  }

  _createClass(Field, [{
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
          cell.innerHTML = '<div class="visually-hidden"></div>';
        }
      }

      return tableEl;
    }
  }, {
    key: "createPlayers",
    value: function createPlayers() {
      var newElement = document.createElement('div');

      for (var i = 0; i < this.playersQuantity; i += 1) {
        var playerWrapper = document.createElement('div');
        playerWrapper.className = 'player';
        playerWrapper.innerHTML = new index_1["default"]("Player".concat(i + 1)).renderPlayer();
        newElement.append(playerWrapper);
      }

      return newElement;
    }
  }, {
    key: "initField",
    value: function initField() {
      var mainElem = document.querySelector('.main');
      var field = this.generateField();
      var players = this.createPlayers();
      mainElem === null || mainElem === void 0 ? void 0 : mainElem.append(field);
      mainElem === null || mainElem === void 0 ? void 0 : mainElem.append(players);
    }
  }]);

  return Field;
}();

exports.default = Field;

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

var index_1 = __importDefault(__webpack_require__(/*! ./field/index */ "./src/field/index.ts"));

var game = new index_1["default"](9, 9, 2).initField();

/***/ }),

/***/ "./src/player/index.ts":
/*!*****************************!*\
  !*** ./src/player/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var Player = /*#__PURE__*/function () {
  function Player() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Player';

    _classCallCheck(this, Player);

    this.name = name;
  }

  _createClass(Player, [{
    key: "createPlayer",
    value: function createPlayer() {
      return {
        playerName: this.name,
        scores: 0,
        id: "".concat(new Date())
      };
    }
  }, {
    key: "renderPlayer",
    value: function renderPlayer() {
      var player = this.createPlayer();
      return "\n                    <h3 class=\"player-name\">".concat(player.playerName, ": <span class='scores'>").concat(player.scores, "</span></h3>\n                </div>");
    }
  }]);

  return Player;
}();

exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lLWNvcmUvLi9zcmMvZmllbGQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2dhbWUtY29yZS8uL3NyYy9wbGF5ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZ2FtZS1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWUtY29yZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiX19pbXBvcnREZWZhdWx0IiwibW9kIiwiX19lc01vZHVsZSIsIk9iamVjdCIsInZhbHVlIiwiaW5kZXhfMSIsInJlcXVpcmUiLCJGaWVsZCIsIngiLCJ5IiwicGxheWVyc1F1YW50aXR5IiwidGFibGVFbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImNvdW50ZXIiLCJpIiwicm93IiwiaW5zZXJ0Um93IiwiaiIsImNlbGwiLCJpbnNlcnRDZWxsIiwiaWQiLCJ0YWJJbmRleCIsImlubmVySFRNTCIsIm5ld0VsZW1lbnQiLCJwbGF5ZXJXcmFwcGVyIiwicmVuZGVyUGxheWVyIiwiYXBwZW5kIiwibWFpbkVsZW0iLCJxdWVyeVNlbGVjdG9yIiwiZmllbGQiLCJnZW5lcmF0ZUZpZWxkIiwicGxheWVycyIsImNyZWF0ZVBsYXllcnMiLCJleHBvcnRzIiwiZ2FtZSIsImluaXRGaWVsZCIsIlBsYXllciIsIm5hbWUiLCJwbGF5ZXJOYW1lIiwic2NvcmVzIiwiRGF0ZSIsInBsYXllciIsImNyZWF0ZVBsYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOzs7Ozs7OztBQUNiLElBQUlBLGVBQWUsR0FBSSxRQUFRLEtBQUtBLGVBQWQsSUFBa0MsVUFBVUMsR0FBVixFQUFlO0FBQ25FLFNBQVFBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFaLEdBQTBCRCxHQUExQixHQUFnQztBQUFFLGVBQVdBO0FBQWIsR0FBdkM7QUFDSCxDQUZEOztBQUdBRSw4Q0FB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Q0FBUixDQUEvQjs7QUFDQSxJQUFNOEIsSUFBSSxHQUFHLElBQUkvQixPQUFPLFdBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkJnQyxTQUE3QixFQUFiLEM7Ozs7Ozs7Ozs7QUNOYTs7Ozs7Ozs7QUFDYmxDLDhDQUE2QztBQUFFQyxPQUFLLEVBQUU7QUFBVCxDQUE3Qzs7SUFDTWtDLE07QUFDRixvQkFBNkI7QUFBQSxRQUFqQkMsSUFBaUIsdUVBQVYsUUFBVTs7QUFBQTs7QUFDekIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0g7Ozs7V0FDRCx3QkFBZTtBQUNYLGFBQU87QUFDSEMsa0JBQVUsRUFBRSxLQUFLRCxJQURkO0FBRUhFLGNBQU0sRUFBRSxDQUZMO0FBR0huQixVQUFFLFlBQUssSUFBSW9CLElBQUosRUFBTDtBQUhDLE9BQVA7QUFLSDs7O1dBQ0Qsd0JBQWU7QUFDWCxVQUFNQyxNQUFNLEdBQUcsS0FBS0MsWUFBTCxFQUFmO0FBQ0EsdUVBQ3NDRCxNQUFNLENBQUNILFVBRDdDLG9DQUNpRkcsTUFBTSxDQUFDRixNQUR4RjtBQUdIOzs7Ozs7QUFFTE4sZUFBQSxHQUFrQkcsTUFBbEIsQzs7Ozs7O1VDcEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBpbmRleF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9wbGF5ZXIvaW5kZXhcIikpO1xyXG5jbGFzcyBGaWVsZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBwbGF5ZXJzUXVhbnRpdHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzUXVhbnRpdHkgPSBwbGF5ZXJzUXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZUZpZWxkKCkge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgICAgIHRhYmxlRWwuY2xhc3NOYW1lID0gJ3RhYmxlLWJvcmRlcmVkJztcclxuICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLng7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSB0YWJsZUVsLmluc2VydFJvdygpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMueTsgaiArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5pZCA9IGAkeyhjb3VudGVyICs9IDEpfWA7XHJcbiAgICAgICAgICAgICAgICBjZWxsLnRhYkluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgIGNlbGwuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj48L2Rpdj4nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YWJsZUVsO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlUGxheWVycygpIHtcclxuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllcnNRdWFudGl0eTsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgcGxheWVyV3JhcHBlci5jbGFzc05hbWUgPSAncGxheWVyJztcclxuICAgICAgICAgICAgcGxheWVyV3JhcHBlci5pbm5lckhUTUwgPSBuZXcgaW5kZXhfMS5kZWZhdWx0KGBQbGF5ZXIke2kgKyAxfWApLnJlbmRlclBsYXllcigpO1xyXG4gICAgICAgICAgICBuZXdFbGVtZW50LmFwcGVuZChwbGF5ZXJXcmFwcGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpbml0RmllbGQoKSB7XHJcbiAgICAgICAgY29uc3QgbWFpbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5nZW5lcmF0ZUZpZWxkKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVycyA9IHRoaXMuY3JlYXRlUGxheWVycygpO1xyXG4gICAgICAgIG1haW5FbGVtPy5hcHBlbmQoZmllbGQpO1xyXG4gICAgICAgIG1haW5FbGVtPy5hcHBlbmQocGxheWVycyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gRmllbGQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGluZGV4XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZmllbGQvaW5kZXhcIikpO1xyXG5jb25zdCBnYW1lID0gbmV3IGluZGV4XzEuZGVmYXVsdCg5LCA5LCAyKS5pbml0RmllbGQoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY2xhc3MgUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUgPSAnUGxheWVyJykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVQbGF5ZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGxheWVyTmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgICBzY29yZXM6IDAsXHJcbiAgICAgICAgICAgIGlkOiBgJHtuZXcgRGF0ZSgpfWAsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJlbmRlclBsYXllcigpIHtcclxuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmNyZWF0ZVBsYXllcigpO1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwicGxheWVyLW5hbWVcIj4ke3BsYXllci5wbGF5ZXJOYW1lfTogPHNwYW4gY2xhc3M9J3Njb3Jlcyc+JHtwbGF5ZXIuc2NvcmVzfTwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBQbGF5ZXI7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9