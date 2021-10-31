
{{

dataArray.value.length > 0
        ? dataArray.value.some(
            (data) =>
              data.location === cardObj.location 
          )
          ? alert("same")
          : dataArray.value.push(cardObj)
        : dataArray.value.push(cardObj);

}}
import { translateApi } from "../utils/api";
export default {
  name: "Translate",
  setup() {
    let word = "";

    const translateFunc = async (word) => {
      await translateApi(word.target.value).then((res) => console.log(res));
    };
    return {
      word,
      translateFunc,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>