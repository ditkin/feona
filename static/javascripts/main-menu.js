'use strict';
require('../styles/index.css');

class MainMenu extends HTMLElement {

  createdCallback () {
    this.mcj = null;
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
      #app-container {
        width: 800px;
        height: 800px;
        display: block;
      }
      #cat-huge {
        width: 30%;
        height: 100px;
        margin: auto;
        background: red;
        border: 3px solid black;
        border-radius: 2px;
      }
      #cat-grid {
        width: 30%;
        height: 100px;
        margin: auto;
        background: blue;
        border: 3px solid black;
        border-radius: 2px;
      }
        
      </style>
      <div id="app-container">
        <div id="cat-huge">
          Click for Cat Hugeness
        </div>
        <div id="cat-grid">
          Click for Cat Gridness
        </div>
      </div>
    `;

    const func = function (e) { this.mountElement(e.currentTarget.id, shadowRoot); };
    shadowRoot.getElementById('cat-grid').addEventListener('click', func.bind(this));
    shadowRoot.getElementById('cat-huge').addEventListener('click', func.bind(this));
  }

  mountElement (elementType, shadowRoot) {
    const url = elementType + '.html';
    history.pushState(null, elementType, url);
    const cont = shadowRoot.getElementById('app-container');
    cont.innerHTML = "<" + elementType + "></" + elementType + ">";
  }
}

document.registerElement('main-menu', MainMenu);
