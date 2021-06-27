<template>
  <section class="p-2">
   <p>{{ error }}</p>
   <h2>Consumable</h2>
    <div class="consumable">
      <p>Product: {{ product.title }}</p>
      <p>Price: {{ product.price }}</p>
      <p>Description: {{ product.description }}</p>
      <b-button type="is-primary" class="mt-2" expanded @click="purchaseConsumable()"
        >Buy now!</b-button
      >
    </div>
    <div class="subscription mt-4">
      <h2>Subscription</h2>
      <p>subscription: {{ statusSubscription }}</p>
      <p>id: {{ productSubscription.id }}</p>
      <p>title: {{ productSubscription.title }}</p>
      <p>state: {{ productSubscription.state }}</p>
      <p>description: {{ productSubscription.description }}</p>
      <p>price: {{ productSubscription.price }}</p>
      <b-button
        v-if="productSubscription.canPurchase"
        class="mt-2"
        type="is-primary"
        expanded
        @click="purchaseSubscribe()"
        >Subscribe</b-button
      >
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
  name: "IPAConsumable",
  data() {
    return {
      product: {
        title: null,
        price: 0,
        description: null,
      },
      statusSubscription: "Loading...",
      productSubscription: {
        id: null,
        title: null,
        state: null,
        price: 0,
        description: null,
        canPurchase: false,
      },
    };
  },
  created() {
    this.initStore();
  },
  methods: {
    initStore() {
      try {
        if (!window.store) {
          console.log("Store not available");
          return;
        }
        // eslint-disable-next-line no-undef
        store.verbosity = store.INFO;
        // eslint-disable-next-line no-undef
        store.register([
          {
            id: "p001",
            // eslint-disable-next-line no-undef
            type: store.CONSUMABLE,
          },
          {
            id: "s001",
            // eslint-disable-next-line no-undef
            type: store.PAID_SUBSCRIPTION,
          },
        ]);
        // eslint-disable-next-line no-undef
        store.error((error) => {
          console.log("ERROR " + error.code + ": " + error.message);
        });
        // eslint-disable-next-line no-undef
        store.when("p001").updated((p) => {
          this.product = p;
        });
        // eslint-disable-next-line no-undef
        store
          .when("p001")
          .approved((p) => p.verify())
          .verified((p) => p.finish());

        // eslint-disable-next-line no-undef
        store
          .when("s001")
          .approved((p) => p.verify())
          .verified((p) => p.finish())
          .owned((p) => console.log(`you now own ${p.alias}`));
        // eslint-disable-next-line no-undef
        store.when("subscription").updated(() => {
          // eslint-disable-next-line no-undef
          this.productSubscription = store.get("s001");

          this.statusSubscription = "Please subscribe below";
          if (this.productSubscription.owned) this.statusSubscription = "Subscribed";
          else if (this.productSubscription.state === "approved")
            this.statusSubscription = "Processing...";
        });
        // eslint-disable-next-line no-undef
        store.refresh();
      } catch (error) {
        alert(error);
      }
    }, 

    purchaseConsumable() {
      // eslint-disable-next-line no-undef
      store.order("p001");
    },
    purchaseSubscribe() {
      // eslint-disable-next-line no-undef
      store.order("s001");
    },
  },
};
</script>