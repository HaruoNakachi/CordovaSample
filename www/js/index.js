document.addEventListener('deviceready', onDeviceReady); 
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
  // checkConnection();   
} 
function checkConnection() {
  var networkState = navigator.connection.type;

  var states = {};
  states[Connection.UNKNOWN]  = 'Unknown connection';
  states[Connection.ETHERNET] = 'Ethernet connection';
  states[Connection.WIFI]     = 'WiFi connection';
  states[Connection.CELL_2G]  = 'Cell 2G connection';
  states[Connection.CELL_3G]  = 'Cell 3G connection';
  states[Connection.CELL_4G]  = 'Cell 4G connection';
  states[Connection.CELL]     = 'Cell generic connection';
  states[Connection.NONE]     = 'No network connection';
}



document.addEventListener('deviceready', initStore);
document.addEventListener('deviceready', refreshGoldCoinsUI);

function initStore() {

  if (!window.store) {
    console.log('Store not available');
    return;
  }

  store.verbosity = store.INFO;
  store.register({
    id:    'p001',
    alias: 'my_consumable1',
    type:   store.CONSUMABLE
  });

  store.error(function(error) {
    console.log('ERROR ' + error.code + ': ' + error.message);
  });

  store.when('my_consumable1').updated(refreshProductUI);
  store.when('my_consumable1').approved(function(p) {
    p.verify();
  });
  store.when('my_consumable1').verified(finishPurchase);

  store.refresh();
}

function refreshGoldCoinsUI() {
  document.getElementById('gold-coins').innerHTML =
    'Gold: <strong>' + (window.localStorage.goldCoins | 0) + '</strong>';
}

function refreshProductUI(product) {
  const info = product.loaded
  ? `<h1>${product.title}</h1>` +
    `<p>${product.description}</p>` +
    `<p>${product.price}</p>`
  : '<p>Retrieving info...</p>';
  const button = product.canPurchase
  ? '<button onclick="purchaseConsumable1()">Buy Now!</button>'
  : '';
  const el = document.getElementById('consumable1-purchase');
  el.innerHTML = info + button;
}

function purchaseConsumable1() {
  store.order('my_consumable1');
}

function finishPurchase(p) {
  window.localStorage.goldCoins = (window.localStorage.goldCoins | 0) + 10;
  p.finish();
  refreshGoldCoinsUI();
}