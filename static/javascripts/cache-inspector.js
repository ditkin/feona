class CacheInspector extends HTMLElement {

  createdCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
      #clear-cache {
        background: orange;
      }
      #go-offline {
        background: magenta;
      }
      .control-button {
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
      <div class="control-button" id="clear-cache">
        Clear Cache
      </div>
      <div class="control-button" id="go-offline">
        Go Offline
      </div>
    `;

    shadowRoot.getElementById('clear-cache').addEventListener('click', (e) => {
      debugger; 
    });

    shadowRoot.getElementById('go-offline').addEventListener('click', (e) => {
      debugger; 
    });
  }
}

document.registerElement('cache-inspector', CacheInspector);
