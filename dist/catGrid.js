webpackJsonp([0,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CatGrid = function (_HTMLElement) {
	  _inherits(CatGrid, _HTMLElement);

	  function CatGrid() {
	    _classCallCheck(this, CatGrid);

	    return _possibleConstructorReturn(this, (CatGrid.__proto__ || Object.getPrototypeOf(CatGrid)).apply(this, arguments));
	  }

	  _createClass(CatGrid, [{
	    key: 'createdCallback',
	    value: function createdCallback() {
	      var shadowRoot = this.attachShadow({ mode: 'open' });
	      shadowRoot.innerHTML = '\n      <style>\n      img {\n        display: inline-block;\n        border: 2px solid gray;\n        border-radius: 2px;\n      }\n      #top {\n        top: 50px;\n        left: 50px;\n        height: 400px;\n        width: 100%;\n      }\n      #bottom {\n        top: 550px;\n        left: 50px;\n        height: 400px;\n        width: 100%;\n      }\n\n      #top-left, #bottom-left {\n\t      float: left;\n        height: 80%;\n        width: 40%;\n        vertical-align: 5%;\n        transition: height 1s, width 2s, filter 1s, transform 1s;\n        transition-timing-function: ease-in;\n      }\n      #top-right, #bottom-right {\n\t      float: right;\n        height: 80%;\n        width: 40%;\n        vertical-align: 5%;\n        transition: height 1s, width 2s, filter 4s, transform 1s;\n        transition-timing-function: ease-in;\n      }\n      #top-left:hover, #top-right:hover, #bottom-left:hover {\n        height: 95%;\n        width: 50%;\n        filter: grayscale(100%);\n\t      transform: rotate(1000deg);\n      }\n      #bottom-right:hover {\n        height: 95%;\n        width: 50%;\n        filter: sepia(100%);\n        transform: rotate(90deg);\n      }\n      </style>\n      <div id="top">\n        <img id="top-left">\n        <img id="top-right">\n      </div>\n      <div id="bottom">\n        <img id="bottom-left">\n        <img id="bottom-right">\n      </div>\n    ';

	      shadowRoot.getElementById('top-left').src = __webpack_require__(1);
	      shadowRoot.getElementById('top-right').src = __webpack_require__(2);
	      shadowRoot.getElementById('bottom-left').src = __webpack_require__(3);
	      shadowRoot.getElementById('bottom-right').src = __webpack_require__(4);

	      //shadowRoot.getElementById('top-left').src = require('!resolve-url-loader!./cat5.jpg');
	      //shadowRoot.getElementById('top-right').src = require('!resolve-url-loader!./owlchill.jpg');
	      //shadowRoot.getElementById('bottom-left').src = require('/!resolve-url-loader!./himalayan.jpg');
	      //shadowRoot.getElementById('bottom-right').src = require('!resolve-url-loader!./faters.jpg');
	    }
	  }]);

	  return CatGrid;
	}(HTMLElement);

	document.registerElement('cat-grid', CatGrid);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e932c90ab5ff3c0a570780cde4cde601.jpg";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "faddbd510fcec062c4834ce32d46563c.jpg";

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "8b8c6e73ce7536b6e5c2acf377f7c8ed.jpg";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4aee488285d1edcbdb9092251165d634.jpg";

/***/ }
]);