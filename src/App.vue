<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div class="box-copy-paste">
      <h2 style="color: black">Copy & Paste Example</h2>
      <span id="code">123456789</span>
      <div class="box-promotion">
        <button typ="button" id="btnCopy" class="btn-copy">Click Copy</button>
        <button typ="button" id="btnPaste" class="btn-paste">
          Click Paste
        </button>
      </div>
      <input id="inputCode" type="text" value="" />
    </div>

    <p id="gold-coins">Gold:</p>
    <div id="consumable1-purchase">Please wait...</div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
