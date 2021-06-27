<template>
  <section>
    <div class="container">
      <div class="hero p-3">
        <h2>Copy & Paste</h2>
        <div class="buttons text-center align-center">
          <b-button type="is-primary" expanded @click="onCopy('123456789')">Copy</b-button>
          <b-button type="is-primary" expanded @click="onPaste()">Paste</b-button>
        </div>
        <p v-if="value">Result: {{ value }}</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
h2{
  font-size: 30px;
  text-align: center;
  display: block;
  font-weight: bold;
}
</style>
<script>
export default {
  name: "CopyPaste",
  data() {
    return {
      value: "",
    };
  },
  mounted() {},
  methods: {
    snackbar() {
      this.$buefy.snackbar.open(
        `You copied!`
      );
    },
    onCopy(value) {
      // eslint-disable-next-line no-undef
      cordova.plugins.clipboard.copy(value);
      // this.snackbar()
    },
    onPaste() {
      // eslint-disable-next-line no-undef
      cordova.plugins.clipboard.paste((text) => {
        this.value = text;
      });
    },
  },
};
</script>