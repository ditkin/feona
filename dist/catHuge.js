webpackJsonp([1,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CatHuge = function (_HTMLElement) {
	  _inherits(CatHuge, _HTMLElement);

	  function CatHuge() {
	    _classCallCheck(this, CatHuge);

	    return _possibleConstructorReturn(this, (CatHuge.__proto__ || Object.getPrototypeOf(CatHuge)).apply(this, arguments));
	  }

	  _createClass(CatHuge, [{
	    key: 'createdCallback',
	    value: function createdCallback() {
	      var shadowRoot = this.attachShadow({ mode: 'open' });
	      shadowRoot.innerHTML = '\n      <style>\n      #container {\n        width: 100%;\n        display: flex;\n        flex-flow: row wrap;\n        justify-content: center;\n        align-items: center;\n        align-content: flex-start;\n      }\n      #top-left {\n        order: 1;\n      }\n      #top-right {\n        order: 2;\n      }\n      #bottom-left {\n        order: 3;\n      }\n      #bottom-right {\n        order: 4;\n      }\n      #top-left, #top-right, #bottom-left, #bottom-right {\n        flex: 0 1 auto;\n        filter: grayscale(95%);\n      \twidth: 75%;\n      \theight: 350px;\n        transition: width 1s ease-out, height 1s ease-in, filter 2s;\n      }\n      #top-left, #top-right:hover, #bottom-left:hover, #bottom-right:hover {\n        filter: grayscale(0%);\n      }\n      img {\n        border: 3px solid black;\n        border-radius: 2px;\n        width: 60%;\n      \theight: 400px\n        margin-top: 10px;\n      \tmargin-bottom: 10px;\n      }\n\n      </style>\n      <div id="top">\n        <img id="top-left">\n        <img id="top-right">\n      </div>\n      <div id="bottom">\n        <img id="bottom-left">\n        <img id="bottom-right">\n      </div>\n    ';

	      shadowRoot.getElementById('top-left').src = __webpack_require__(5);
	      shadowRoot.getElementById('top-right').src = __webpack_require__(6);
	      shadowRoot.getElementById('bottom-left').src = __webpack_require__(7);
	      shadowRoot.getElementById('bottom-right').src = __webpack_require__(8);
	    }
	  }]);

	  return CatHuge;
	}(HTMLElement);

	document.registerElement('cat-huge', CatHuge);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "57f65c0d42740721874dd6d688c203cd.jpg";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3ce4631ec48ade10815d9a1a59244699.jpg";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e0fa3d7cf5955e664a96e2c28f00275e.jpg";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9f6b730d1ddc88c9605e565cf7413307.jpg";

/***/ }
]);