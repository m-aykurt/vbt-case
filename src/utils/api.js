import axios from "axios";

export const getMyApi = async () => {
  let responseResult;

  let url ="https://swapi.dev/api/people/"
  await axios.get(url).then((response) => (responseResult = response.data.results));
  console.log("response person", responseResult);
  return responseResult;
};

export const getImage = async () => {
  let responseImage;
  let url = "https://www.breakingbadapi.com/api/characters?limit=10";
  await axios.get(url).then((res) => (responseImage = res.data));
    // console.log(responseImage)
  return responseImage;
};
