<template>
  <div>
    <div id="locations" class="row d-flex justify-content-around">
      <div class="my-2" v-for="badge in markers" :key="badge.name">
        <Badge :name="badge.name" :image="badge.image" />
      </div>
    </div>
    <div class="my-2">
      <Map v-if="markers.length > 0" :markers="markers" />
    </div>
  </div>
</template>

<script>
import api from "@/services/api";
import Badge from "@/components/BadgeComponent.vue";
import Map from "@/components/MapComponent.vue";

export default {
  name: "Locations",
  data() {
    return {
      markers: []
    };
  },
  components: {
    Badge,
    Map
  },
  methods: {
    async getMarkers() {
      const { data } = await api.getMarkers("/markers/v1/post");
      Object.values(data).map(item => {
        this.markers.push(item.acf);
      });
    }
  },
  mounted() {
    this.getMarkers();
  }
};
</script>

<style scoped>
</style>
