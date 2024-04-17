const API_URL = "https://restcountries.com/v3.1/all";
const request = new XMLHttpRequest();
function listener() {
  let responseData = JSON.parse(this.responseText);
  for (let country in responseData) {
    console.log(
      "Country Name: " +
        responseData[country].name.common +
        "\nRegion: " +
        responseData[country].region +
        "\nSub-region: " +
        responseData[country].subregion +
        "\nCountry Population: " +
        responseData[country].population
    );
  }
}
request.addEventListener("load", listener);
request.open("GET", API_URL);
request.send();
