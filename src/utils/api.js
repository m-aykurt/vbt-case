import axios from "axios";

export const getInfo = async (query) => {
  let ACCESS_KEY = "49e45ba70386498ead2162423212710";
  let url = `http://api.weatherapi.com/v1/current.json?key=${ACCESS_KEY}&q=${query}&aqi=no`;

  return axios.get(url).then((res) => res);
};
export const getImage = async (query) => {
  let ACCESS_KEY = "YlLRTaXc39M8ujyIgk9fuc8uO1Sn2AWin0HfQv61QCI";
  let url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${ACCESS_KEY}`;
  return axios.get(url).then((res) => res.data.results[0]);
};

// uniqID
export const uniqIDgenerator = () => {
  const regEx = /^[1-9]{1}[0-9]{3}$/;
  let id = Math.floor(1000 + Math.random() * 9000);
  if (regEx.test(id)) {
    return id;
  } else {
    uniqIDgenerator();
  }
};
// capitals
export const capitalsApi = async () => {
  return axios
    .get("https://countriesnow.space/api/v0.1/countries/capital")
    .then(res=>res.data);
};


// translate

export const translateApi = async (word) => {
  const API_KEY =
    "trnsl.1.1.20211031T101833Z.451d95eae4fcb41f.e7ad2dc999a32e08cc4bff3f9fc7fbd9195d31bc";
  return axios.get(
    `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&text=${word}&lang=tr`
  );
};
