document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

  const code = document.getElementById("code");
  const btnCopy = document.getElementById("btnCopy");
  const btnPaste = document.getElementById("btnPaste");
  const inputText = document.getElementById("inputCode");

  btnCopy.addEventListener('click', () => {
    cordova.plugins.clipboard.copy(code.textContent);
  })
  btnPaste.addEventListener('click', () => {
    cordova.plugins.clipboard.paste((text) => {
      inputText.value = text;
    });
  })
  store.when('cc.fovea.purchase.consumable1')
  .updated(refreshUI)
  .approved(finishPurchase);
  store.register({type: store.CONSUMABLE, id: 'cc.fovea.purchase.consumable1'});
  store.refresh();

}
function finishPurchase(p) {
  localStorage.goldCoins = (localStorage.goldCoins | 0) + 10;
  p.finish();
}

function refreshUI() {
  const product = store.get('cc.fovea.purchase.consumable1');
  const button = `<button onclick="store.order('cc.fovea.purchase.consumable1')">Purchase</button>`;

  document.getElementById('product').innerHTML = `
    <div>
    <pre>
    Gold: ${localStorage.goldCoins | 0}
    Product.state: ${product.state}
    .title: ${product.title}
    .descr: ${product.description}
    .price: ${product.price}
    </pre>
    ${button}
    </div>`;
}

