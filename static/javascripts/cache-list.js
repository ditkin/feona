class CacheList extends HTMLElement {

  createdCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
      #list {
        padding: 0;
        list-style: none;
        border: 5px solid black;
        border-radius: 9px;
        margin-left: 60px;
      }
      .item {
        height: 40px;
        line-height: 42px;
        border: 2px solid black;
        border-radius: 5px;
        margin: 3px;
        background: orange;
        position: relative;
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
      }
      .item:hover {
        background: yellow;
      }
      .item .tip {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        bottom: 100%;
        left: 50%; 
        margin: 0 0 3px -60px;
      }
      .item:hover .tip {
        visibility: visible;
      }
      </style>
      <ul id="list">
      </ul>
    `;

    const list = shadowRoot.getElementById('list');
    caches.open('sw-precache-v2-feona-https://feona.party/')
      .then((cache) => {
        cache.keys()
          .then((keys) => {
            for (const item of keys) {
              this.addCacheListItem(list, item.url); 
            }
          });
      });
  }

  addCacheListItem(list, itemUrl) {
    const func = (e) => {
      this.deleteCacheItem(itemUrl);
      this.parentNode.getElementById('show-cache').click();
    };

    const li = document.createElement('li');
    li.classList.add('item');
    li.innerHTML = itemUrl;
    li.addEventListener('click', func.bind(this));
    li.appendChild(this.createTooltip());
    list.appendChild(li);
  }

  deleteCacheItem(itemUrl) {
    caches.open('sw-precache-v2-feona-https://feona.party/')
      .then((cache) => {
        cache.delete(itemUrl)
          .then((success) => {
            if (success) { console.log('Success'); }
          });
      });

  }

  createTooltip() {
    const tooltip = document.createElement('span');
    tooltip.classList.add('tip');
    tooltip.innerHTML = "Click To Delete Cache Entry";
    return tooltip;
  }
}

document.registerElement('cache-list', CacheList);
