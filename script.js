console.log("Velib ui");

fetch(
  "https://velib-metropole-opendata.smovengo.cloud/opendata/Velib_Metropole/station_information.json",
  {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin":
        "https://velib-metropole-opendata.smovengo.cloud",
    },
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
  });
