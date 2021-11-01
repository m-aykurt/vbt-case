<template>
    <!--animation-->
  <div
    @mouseover="opacity = true"
    @mouseleave="opacity = false"
    :class="opacity ? 'opacity' : null"
    class="col"
  >
    <div class="card shadow-sm">
      <img
        :src="item.imageUrl"
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="250"
        role="img"
      />
      <p class="ps-3 pt-1 lead"># {{ item.id }}</p>

      <div>
        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
          <h2 class="ps-3 pt-1">
            {{ item.location }}
          </h2>
        </text>
        <div class="card-body">
          <h5 class="card-text">
            Weather Forecast : <strong> {{ item.current }} °C </strong>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Card",
  props: {
    item: {
      type: Object,
    },
  },

  setup() {
    let opacity = ref(false);
    return {
      opacity,
    };
  },
};
</script>

<style scoped>
.opacity {
  opacity: 0.8;
  transition: all 0.8s ease;
}
</style>
