/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() { 
   
    const code = document.getElementById("code");
    const btnCopy = document.getElementById("btnCopy");
    const btnPaste = document.getElementById("btnPaste");
    const inputText = document.getElementById("inputCode");
    
    btnCopy.addEventListener('click', () =>{ 
        cordova.plugins.clipboard.copy(code.textContent);
    }) 
    btnPaste.addEventListener('click', () =>{ 
        cordova.plugins.clipboard.paste( (text) => { 
            inputText.value  = text;
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
  
    document.getElementsByTagName('body')[0].innerHTML = `
    <div>
    <pre>
    Gold: ${localStorage.goldCoins | 0}
    Product.state: ${product.state}
    .title: ${product.title}
    .descr: ${product.description}
    .price: ${product.price}
    </pre>
    ${product.canPurchase ? button : ''}
    </div>`;
  }

