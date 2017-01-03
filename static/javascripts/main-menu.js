'use strict';

class MainMenu extends HTMLElement {

  createdCallback () {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
      #app-container {
        width: 800px;
        height: 800px;
        display: block;
      }
      #cat-runt {
        background: lightgreen;
      }
      #cat-huge {
        background: lightblue;
      }
      #cat-grid {
        background: red;
      }
      #cache-inspector {
        background: magenta;
      }
      .cat-button {
        line-height: 100px;
        text-align: center;
        vertical-align: middle;
        width: 30%;
        height: 100px;
        margin: auto;
        margin-top: 20px;
        border: 3px solid gray;
        border-radius: 8px;
      }
        
      </style>
      <div id="app-container">
        <div class='cat-button' id="cat-huge">
          Cat Hugeness
        </div>
        <div class='cat-button' id="cat-grid">
          Cat Gridness
        </div>
        <div class='cat-button' id="cat-runt">
          Cat Runt
        </div>
        <div class='cat-button' id="cache-inspector">
          Cache Inspector
        </div>
      </div>
    `;

    const func = (e) => this.mountElement(e.currentTarget.id, shadowRoot);

    shadowRoot.getElementById('cat-grid').addEventListener('click', func.bind(this));
    shadowRoot.getElementById('cat-huge').addEventListener('click', func.bind(this));
    shadowRoot.getElementById('cat-runt').addEventListener('click', func.bind(this));
    shadowRoot.getElementById('cache-inspector').addEventListener('click', func.bind(this));

    history.pushState({ elementType: '' }, null, '');

    window.addEventListener('popstate', (e) => {
      const url = history.state ? history.state.elementType : '';
      window.location.href = 'https://feona.party/' + url;
    });
  }


  mountElement (elementType, shadowRoot) {
    const url = elementType + '.html';
    history.pushState({ elementType }, elementType, url);

    const cont = shadowRoot.getElementById('app-container');
    cont.innerHTML = this.getElementTagString(elementType);
  }

  getElementTagString (elementType) {
    return "<" + elementType + "></" + elementType + ">";
  }
}

document.registerElement('main-menu', MainMenu);
