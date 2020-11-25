<template>
  <div>
    <div id="map" class="map"></div>
  </div>
</template>

<script>
export default {
  name: "Map",
  mounted() {
    window.mapboxgl.accessToken =
      "pk.eyJ1IjoianVhbml5eW8iLCJhIjoiY2thcGh5NjF1MDJjdTJ6cnliN2h1dms5ZCJ9.FcIe4rwcbZtjkdFaxsOnig";

    var map = new window.mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-6.041, 37.3462],
      zoom: 10
    });

    map.on("load", (() => {
        this.markers.forEach(function(marker) {
          var el = document.createElement("div");
          el.className = "marker";

          new window.mapboxgl.Marker(el)
            .setLngLat([
              parseFloat(marker.longitude),
              parseFloat(marker.latitud)
            ])
            .addTo(map);
        });

        this.markers.forEach(x => {
          document.getElementById(x.name).addEventListener("click", () => {
            map.flyTo({
              center: [parseFloat(x.longitude), parseFloat(x.latitud)],
              zoom: 15
            });
          });
        });
      }).bind(this)
    );
  },
  props: {
    markers: Array
  }
};
</script>

<style>
.mapboxgl-canvas {
  position: inherit !important;
  width: 100%;
  height: 500px;
}
.mapboxgl-popup {
  max-width: 400px;
  font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;
}
.marker {
  background-image: url("./../assets/mapbox-icon.png");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
