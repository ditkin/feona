class CatGrid extends HTMLElement {

  createdCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
      img {
        display: inline-block;
        border: 2px solid gray;
        border-radius: 2px;
      }
      #top {
        top: 50px;
        left: 50px;
        height: 400px;
        width: 100%;
      }
      #bottom {
        top: 550px;
        left: 50px;
        height: 400px;
        width: 100%;
      }

      #top-left, #bottom-left {
	      float: left;
        height: 80%;
        width: 40%;
        vertical-align: 5%;
        transition: height 1s, width 2s, filter 1s, transform 1s;
        transition-timing-function: ease-in;
      }
      #top-right, #bottom-right {
	      float: right;
        height: 80%;
        width: 40%;
        vertical-align: 5%;
        transition: height 1s, width 2s, filter 4s, transform 1s;
        transition-timing-function: ease-in;
      }
      #top-left:hover, #top-right:hover, #bottom-left:hover {
        height: 95%;
        width: 50%;
        filter: grayscale(100%);
	      transform: rotate(1000deg);
      }
      #bottom-right:hover {
        height: 95%;
        width: 50%;
        filter: sepia(100%);
        transform: rotate(90deg);
      }
      </style>
      <div id="top">
        <img id="top-left">
        <img id="top-right">
      </div>
      <div id="bottom">
        <img id="bottom-left">
        <img id="bottom-right">
      </div>
    `;

    shadowRoot.getElementById('top-left').src = require('../images/cat5.jpg');
    shadowRoot.getElementById('top-right').src = require('../images/cuter.jpg');
    shadowRoot.getElementById('bottom-left').src = require('../images/himalayan.jpg');
    shadowRoot.getElementById('bottom-right').src = require('../images/faters.jpg');

    //shadowRoot.getElementById('top-left').src = require('!resolve-url-loader!./cat5.jpg');
    //shadowRoot.getElementById('top-right').src = require('!resolve-url-loader!./owlchill.jpg');
    //shadowRoot.getElementById('bottom-left').src = require('/!resolve-url-loader!./himalayan.jpg');
    //shadowRoot.getElementById('bottom-right').src = require('!resolve-url-loader!./faters.jpg');
  }
}

document.registerElement('cat-grid', CatGrid);
