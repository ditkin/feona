webpackJsonp([3,5],[
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CatRuntime = function (_HTMLElement) {
	  _inherits(CatRuntime, _HTMLElement);

	  function CatRuntime() {
	    _classCallCheck(this, CatRuntime);

	    return _possibleConstructorReturn(this, (CatRuntime.__proto__ || Object.getPrototypeOf(CatRuntime)).apply(this, arguments));
	  }

	  _createClass(CatRuntime, [{
	    key: 'createdCallback',
	    value: function createdCallback() {
	      var shadowRoot = this.attachShadow({ mode: 'open' });
	      shadowRoot.innerHTML = '\n      <style>\n      img {\n        display: inline-block;\n        margin: auto;\n        margin-top: 50px;\n        border: 20px solid pink;\n        border-radius: 10px;\n        max-height:100%;\n        max-width:100%;\n      }\n      </style>\n      <img id="runt">\n    ';

	      var runtImg = shadowRoot.getElementById('runt');
	      runtImg.src = 'https://drpem3xzef3kf.cloudfront.net/photos/pets/34851594/1/';

	      //fetch('https://drpem3xzef3kf.cloudfront.net/photos/pets/34851594/1/', {
	      //  mode: 'no-cors'
	      //}).then(r => r.blob())
	      //.then(blob => runtImg.src = URL.createObjectURL(blob));
	    }
	  }]);

	  return CatRuntime;
	}(HTMLElement);

	document.registerElement('cat-runtime', CatRuntime);

/***/ }
]);