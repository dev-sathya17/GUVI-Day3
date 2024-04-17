const API_URL = "https://restcountries.com/v3.1/all";
const request = new XMLHttpRequest();
function listener() {
  let responseData = JSON.parse(this.responseText);
  for (let countryData in responseData) {
    console.log(
      "This is the flag image " +
        responseData[countryData].flags.png +
        " of the country " +
        responseData[countryData].name.common
    );
  }
}
request.addEventListener("load", listener);
request.open("GET", API_URL);
request.send();
