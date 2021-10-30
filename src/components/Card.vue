<template>

  <div  class="col">
    <div v-if="item" class="card shadow-sm">
      <img
        :src="item.imageUrl"
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="250"
        role="img"
      />
      <p  class="ps-3 pt-1 lead">
       # {{item.id}}
      </p>

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
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
               View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
        <h1>NO ITEM</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Array,
    },
  },

  setup() {
    return {};
  },
};
</script>

<style scoped>
</style>
