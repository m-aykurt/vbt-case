<template>
  <div>
    <main>
      <section class="py-1 text-center container">
        <div class="row py-lg-2">
          <div class="col-lg-6 col-md-8 mx-auto">
            <button class="btn btn-dark" @click="translateFunc">Translate to Turkish</button>
            <h1 class="fw-light">{{ cities }}</h1>
            <p class="lead text-muted">{{ weatherApi }}</p>
            <!-- Translate -->
            <div class="container mx-auto">
              <p>{{ selectCity }}</p>

              <select
                class="btn btn-secondary w-50"
                v-model="query"
                @change="dropDownClick"
              >
                <option
                  class="text-light"
                  v-for="(item, index) in capitals[0]"
                  :key="index"
                  :value="item.capital"
                >
                  {{ item.capital }}
                </option>
              </select>
            </div>
            <!-- Transition -->
            <transition name="toast">
              <Toast v-if="showToast" />
            </transition>
          </div>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div style="min-height: 200px">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
              <!--CardComp'a data ları props olarak gönderiyoruz -->
              <div v-if="dataArray.length == 0">
                <div class="warning-card card text-center">
                  <div class="card-header">Warning</div>
                  <div class="card-body">
                    <h5 class="card-title">No City to Display</h5>
                    <p class="card-text">Use the button above to choose</p>
                    <router-link to="/" href="#" class="btn btn-secondary">
                      To Home
                    </router-link>
                  </div>
                </div>
              </div>

              <Card
                v-else
                :item="item"
                v-for="(item, index) in dataArray"
                :key="index"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer style="max-height: 100px" class="text-muted py-5">
      <div class="container">
        <p class="float-end mb-1">
          <a class="text-secondary" href="#">Back to top</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import {
  getInfo,
  getImage,
  uniqIDgenerator,
  capitalsApi,
  translateApi,
} from "../utils/api";
import { ref, onMounted } from "vue";
import Card from "./Card.vue";
import Toast from "../components/Toast.vue";

export default {
  name: "MainComp",

  components: {
    Card,
    Toast,
  },
  setup() {
    let dataArray = ref([]);
    let cardObj = {
      id: null,
      location: "",
      current: "",
      imageUrl: "",
    };
    let selectCity = ref("Please Select City");
    let cities = ref("Cities");
    let weatherApi = ref("Weather Api & Unsplash Page");
    let uniqID = null;
    let capitals = ref([]);
    let query = ref("");

    onMounted(() => {
      capitalsApi().then((response) => capitals.value.push(response.data));
    });

    // toast
    const showToast = ref(false);
    const triggerToast = () => {
      showToast.value = true;
      setTimeout(() => (showToast.value = false), 3000);
      console.log("trigger");
    };

    // translate

    const translateFunc = async () => {
      await translateApi(cities.value).then((res) => {
        cities.value = res.data.text[0];
      });
      await translateApi(weatherApi.value).then((res) => {
        weatherApi.value = res.data.text[0];
      });
      await translateApi(selectCity.value).then((res) => {
        selectCity.value = res.data.text[0];
      });
    };

    let dropDownClick = async () => {
      cardObj = {};
      // api'lerden gelen bilgileri cardObj'e gönderip dataArray'a push ediyoruz
      await getInfo(query.value)
        .then((res) => {
          (cardObj.location = res.data.location.name),
            (cardObj.current = res.data.current.temp_c);
        })
        .catch(() => {
          cardObj.location = "Not Found";
          cardObj.current = "Not Found";
          console.log("Data Not Found");
        });
      await getImage(query.value)
        .then((res) => (cardObj.imageUrl = res.urls.regular))
        .catch(() => {
          cardObj.imageUrl =
            "https://store-images.s-microsoft.com/image/apps.16894.c02476d2-2378-4f60-8290-b6d4b3842643.79a2ef6a-4775-4c79-8d93-9caf077660eb.1bbd88a4-0a17-4750-91a0-cd7d98f58e9d";
          console.log("Image Not Found");
        });

      uniqID = uniqIDgenerator();
      cardObj.id = uniqID;

      // aynı card'ı tekrar dataArray'e push etmemek için kontrol ediyoruz
      
      dataArray.value.length > 0
        ? dataArray.value.some((data) => data.location === cardObj.location)
          ? triggerToast()
          : dataArray.value.push(cardObj)
        : dataArray.value.push(cardObj);
    };

    return {
      query,
      dropDownClick,
      dataArray,
      selectCity,
      showToast,
      triggerToast,
      capitals,
      translateFunc,
      cities,
      weatherApi,
    };
  },
};
</script>

<style scoped>
/* enter */
.toast-enter-from {
  opacity: 0;
  transform: translateY(200px);
  transform: translateX(1000px);
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.toast-enter-active {
  transition: all 0.3s ease;
}
/* leave */
.toast-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.toast-leave-to {
  transform: translateY(-120px);
}
.toast-leave-active {
  transition: all 0.3s ease;
}
.g-2 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.empty-card {
  background: red;
  border: 5px solid blue;
}
</style>