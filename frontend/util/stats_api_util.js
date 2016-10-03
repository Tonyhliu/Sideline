const StatsApiUtil = {
  getNbaStats() {
    $.ajax({
      url: 'https://api.fantasydata.net/nba/v2/JSON/Players HTTP/1.1',
      type: 'GET',
      'Access-Control-Allow-Origin': 'http://localhost:3000/#/stats',
      headers: {
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-type, Accept, X-Custom-Header',
        'Ocp-Apim-Subscription-Key': '44b05285b729456db03ffcb6210e891d'
      },
      success(resp) {
        // console.log(resp);
        if (resp.method == 'OPTIONS') {
          console.log("MADE IT");
        }
        // console.log(resp);
      }
    });
  }
};
// Host: 'api.fantasydata.net',

module.exports = StatsApiUtil;
