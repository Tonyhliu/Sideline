const StatsApiUtil = {
  getNbaStats() {
    // $.ajaxSetup({
    //   beforeSend: function(xhr) {
    //     xhr.setRequestHeader(
    //       'Access-Control-Allow-Origin', 'http://localhost:3000',
    //       'Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS',
    //       'Access-Control-Allow-Headers', 'Content-type, Accept, X-Custom-Header',
    //       'Ocp-Apim-Subscription-Key', '44b05285b729456db03ffcb6210e891d'
    //     );}
    // });
    //
    // $.ajax({
    //   type: 'GET',
    //   url: 'https://api.fantasydata.net/nba/v2/JSON/Players HTTP/1.1',
    //   success(resp) {
    //     // console.log(resp);
    //     // if (resp.method == 'OPTIONS') {
    //       console.log("MADE IT");
    //     // }
    //     console.log(resp);
    //   }
    // });
    
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.fantasydata.net/nba/v2/JSON/Players",
      "method": "GET",
      "headers": {
        "ocp-apim-subscription-key": "44b05285b729456db03ffcb6210e891d",
        "cache-control": "no-cache",
        "postman-token": "b5e2ccea-d2f1-e619-f289-effd95b119a5"
      }
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  }
};
// Host: 'api.fantasydata.net',

module.exports = StatsApiUtil;
