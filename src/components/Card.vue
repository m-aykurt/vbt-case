<template>
  <div>
    <h2>hello world</h2>
    <!-- <h3 v-for="(item, index) in imageList" :key="index">
      <img :src="item.img" alt="img" />
    </h3> -->

    <h3 v-for="(data, index) in dataList" :key="index">
      <p>{{ data.name }}</p>
    </h3>
  </div>
</template>

<script>
import { getMyApi, getImage } from "../utils/api";
import { ref } from "vue";
export default {
  name: "Card",

  setup() {
    let imageList = ref([]);
    let dataList = ref([]);
    getMyApi().then((res) => (dataList.value = res));
    getImage().then((res) => (imageList.value = res));
    return {
      dataList,
      imageList,
    };
  },
};
</script>

<style scoped>
</style>
