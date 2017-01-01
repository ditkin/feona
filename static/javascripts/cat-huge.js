class CatHuge extends HTMLElement {

  createdCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
      #container {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        align-content: flex-start;
      }
      #top-left {
        order: 1;
      }
      #top-right {
        order: 2;
      }
      #bottom-left {
        order: 3;
      }
      #bottom-right {
        order: 4;
      }
      #top-left, #top-right, #bottom-left, #bottom-right {
        flex: 0 1 auto;
        filter: grayscale(95%);
      	width: 75%;
      	height: 350px;
        transition: width 1s ease-out, height 1s ease-in, filter 2s;
      }
      #top-left, #top-right:hover, #bottom-left:hover, #bottom-right:hover {
        filter: grayscale(0%);
      }
      img {
        border: 3px solid black;
        border-radius: 2px;
        width: 60%;
      	height: 400px
        margin-top: 10px;
      	margin-bottom: 10px;
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

    shadowRoot.getElementById('top-left').src = require('../images/fefe1.jpg');
    shadowRoot.getElementById('top-right').src = require('../images/fefe2.jpg');
    shadowRoot.getElementById('bottom-left').src = require('../images/fefe3.jpg');
    shadowRoot.getElementById('bottom-right').src = require('../images/fefe4.jpg');
  }
}

document.registerElement('cat-huge', CatHuge);
