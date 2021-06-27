<template>
  <div>
     <CopyPasteComponent/>
     <PurchaseComponent/>
  </div>
</template>

<script>
import CopyPasteComponent from '../components/CopyPasteComponent.vue'
import PurchaseComponent from '../components/PurchaseComponent.vue'
export default {
  name: 'Home', 
  components: {
    CopyPasteComponent,
    PurchaseComponent
  }
}  
</script>
