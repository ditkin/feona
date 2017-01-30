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
      #img-one {
        order: 1;
      }
      #img-two {
        order: 2;
      }
      #img-three {
        order: 3;
      }
      #img-four {
        order: 4;
      }
      img {
        border: 3px solid black;
        border-radius: 2px;
        margin-top: 10px;
      	margin-bottom: 10px;
        flex: 0 1 auto;
        filter: grayscale(95%);
      	width: 60%;
      	height: 450px;
        transition: width 0.5s ease-out, height 2s ease-in, filter 2s;
      }
      img:hover {
        width: 100%;
        height: 600px;
        filter: grayscale(0%);
      }
      </style>
      <div id="container">
        <img id="img-one">
        <img id="img-two">
        <img id="img-three">
        <img id="img-four">
      </div>
    `;

    shadowRoot.getElementById('img-one').src = require('../images/fefe1.jpg');
    shadowRoot.getElementById('img-two').src = require('../images/fefe2.jpg');
    shadowRoot.getElementById('img-three').src = require('../images/fefe3.jpg');
    shadowRoot.getElementById('img-four').src = require('../images/fefe4.jpg');
  }
}

document.registerElement('cat-huge', CatHuge);
