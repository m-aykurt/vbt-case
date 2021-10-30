<template>
  <div>
    <div>
      <header>
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-cloud-drizzle me-2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z"
                />
              </svg>

              <strong>City Weather</strong>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section class="py-4 text-center container">
          <div class="row py-lg-4">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Cities</h1>
              <p class="lead text-muted">Weather Api & Unsplash Page</p>
              <!-- Input Area -->
              <div class="container mx-auto">
                <p>Plaese Select City</p>
                <select
                  type="button"
                  class="btn btn-secondary dropdown-toggle dark container w-50"
                  v-model="query"
                  @change="dropDownClick"
                >
                  <option
                    class="dropdown-item text-light text-center"
                    value="paris"
                    selected
                  >
                    Paris
                  </option>
                  <option class="dropdown-item text-light" value="london">
                    London
                  </option>
                  <option class="dropdown-item text-light" value="istanbul">
                    Istanbul
                  </option>
                  <option class="dropdown-item text-light" value="berlin">
                    Berlin
                  </option>
                  <option class="dropdown-item text-light" value="roma">
                    Roma
                  </option>
                  <option class="dropdown-item text-light" value="new york">
                    New York
                  </option>
                  <option class="dropdown-item text-light" value="amsterdam">
                    Amsterdam
                  </option>
                  <option class="dropdown-item text-light" value="prag">
                    Prag
                  </option>
                  <option class="dropdown-item text-light" value="moskova">
                    Moscov
                  </option>
                  <option class="dropdown-item text-light" value="athens">
                    Athens
                  </option>
                  <option class="dropdown-item text-light" value="delhi">
                    Delhi
                  </option>
                </select>
              </div>
            </div>
          </div>
        </section>
       
        <div>
          {{ query }}
          <div class="album py-5 bg-light">
            <div class="container">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
                <!--Card.vue ya data ları props olarak gönderiyoruz -->
                <Card
                  :item="item"
                  v-for="(item, index) in dataArray"
                  :key="index"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer class="text-muted py-5">
        <div class="container">
          <p class="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p class="mb-1">
            Album example is &copy; Bootstrap, but please download and customize
            it for yourself!
          </p>
          <p class="mb-0">
            New to Bootstrap? <a href="/">Visit the homepage</a> or read our
            <a href="/docs/5.1/getting-started/introduction/"
              >getting started guide</a
            >.
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { getMyApi, getImage, uniqIDgenerator } from "../utils/api";
import { ref } from "vue";
import Card from "./Card.vue";
export default {
  name: "Main",

  components: {
    Card,
  },
  setup() {
    let dataArray = ref([]);
    let cardObj = {
      id: null,
      location: "",
      current: "",
      imageUrl: "",
    };
    let query = "";

    let inputToApi = async (query) => {
      cardObj = {};

      await getMyApi(query.target.value).then((res) => {
        (cardObj.location = res.data.location.name),
          (cardObj.current = res.data.current.temp_c);
      });
      await getImage(query.target.value).then(
        (res) => (cardObj.imageUrl = res.urls.regular)
      );
      console.log(query.target.value)
    };

    let dropDownClick = async (query) => {
      cardObj = {};
      await getMyApi(query.target.value).then((res) => {
        (cardObj.location = res.data.location.name),
          (cardObj.current = res.data.current.temp_c);
      });
      await getImage(query.target.value).then(
        (res) => (cardObj.imageUrl = res.urls.regular)
      );
      let uniqID = uniqIDgenerator();
      cardObj.id = uniqID;

      dataArray.value.length > 0
        ? dataArray.value.some((data) => data.location === cardObj.location)
          ? alert("Please Choose Different City")
          : dataArray.value.push(cardObj)
        : dataArray.value.push(cardObj);

    };

    return {
      query,
      dropDownClick,
      dataArray,
      inputToApi,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>