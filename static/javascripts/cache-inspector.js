require('./cache-list.js');
class CacheInspector extends HTMLElement {

  createdCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
      #show-cache {
        background: orange;
      }
      .control-button {
        line-height: 100px;
        text-align: center;
        vertical-align: middle;
        width: 30%;
        height: 100px;
        margin-left: 38%;
        margin-top: 20px;
        border: 3px solid black;
        border-radius: 8px;
      }
      </style>
      <div class="control-button" id="show-cache">
        Show Cache
      </div>
    `;

    shadowRoot.getElementById('show-cache').addEventListener('click', (e) => {
      const list = document.createElement('cache-list');
      list.id = 'list';
      const oldList = shadowRoot.getElementById('list')
      if (oldList) {
        shadowRoot.replaceChild(list, oldList);
      } else {
        shadowRoot.appendChild(list);
      }
    });
  }
}

document.registerElement('cache-inspector', CacheInspector);
