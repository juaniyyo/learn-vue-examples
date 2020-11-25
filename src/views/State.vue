<template>
  <div class="state">
    <div class="container">
      <StateComponent />
    </div>
  </div>
</template>

<script>
import StateComponent from "@/components/StateComponent.vue";

export default {
  name: "State",
  components: {
    StateComponent
  }
};
</script>
