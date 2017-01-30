class CatRuntime extends HTMLElement {

  createdCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
      img {
        display: inline-block;
        margin: auto;
        margin-top: 50px;
        border: 20px solid pink;
        border-radius: 10px;
        max-height:100%;
        max-width:100%;
      }
      </style>
      <img id="runt">
    `;

    const runtImg = shadowRoot.getElementById('runt');
    runtImg.src = 'https://drpem3xzef3kf.cloudfront.net/photos/pets/34851594/1/';

    //fetch('https://drpem3xzef3kf.cloudfront.net/photos/pets/34851594/1/', {
    //  mode: 'no-cors'
    //}).then(r => r.blob())
    //.then(blob => runtImg.src = URL.createObjectURL(blob));
  }
}

document.registerElement('cat-runtime', CatRuntime);
