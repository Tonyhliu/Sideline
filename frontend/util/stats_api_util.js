const StatsApiUtil = {
  getNbaStats(success) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.fantasydata.net/nba/v2/JSON/Players",
      "method": "GET",
      "headers": {
        "ocp-apim-subscription-key": "44b05285b729456db03ffcb6210e891d",
        "cache-control": "no-cache"
      }
    };

    $.ajax(settings).done(function (response) {
      success(response);
    }).fail(function () {
      alert('API call failed');
    });
  },

  getNflStats(success) {
    // $.ajax({
    //   type: 'GET',
    //   url: 'https://api.fantasydata.net/nba/v2/JSON/Players HTTP/1.1',
    //   "headers": {
    //     'Access-Control-Allow-Origin': 'http://localhost:3000',
    //     'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    //     'Access-Control-Allow-Headers': 'Content-type, Accept, X-Custom-Header',
    //     'Ocp-Apim-Subscription-Key': '44b05285b729456db03ffcb6210e891d'
    //   },
    //   success(resp) {
    //     console.log(resp);
    //   }
    // });
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.fantasydata.net/v3/nfl/stats/JSON/Players",
      "method": "GET",
      "headers": {
        "ocp-apim-subscription-key": "eac81d396d5549deb23e2458908d0ca7",
        "cache-control": "no-cache"
      }
    };

    $.ajax(settings).done(function (response) {
      success(response);
    }).fail(function () {
      alert('API call failed');
    });
  }
};

module.exports = StatsApiUtil;
