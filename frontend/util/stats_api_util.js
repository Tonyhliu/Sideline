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

  getNbaNews(id) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://api.fantasydata.net/nba/v2/JSON/NewsByPlayerID/${id}`,
      "method": "GET",
      "headers": {
        "ocp-apim-subscription-key": "44b05285b729456db03ffcb6210e891d",
        "cache-control": "no-cache"
      }
    };

    $.ajax(settings).done(function (response) {
      // success(response);
      // let cb = (resp) => {
      if (response[0]) {
        window.open(response[0].Url, '_blank');
      } else {
        window.open('http://www.rotoworld.com/sports/nba/basketball?ls=roto:nba:gnav', '_blank');
      }
    }).fail(function () {
      alert('API call failed');
    });
  },

  getMlbStats(success) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.fantasydata.net/mlb/v2/JSON/Players",
      "method": "GET",
      "headers": {
        "ocp-apim-subscription-key": "972aca2017234aa78b61e3f0a371448d",
        "cache-control": "no-cache"
      }
    };

    $.ajax(settings).done(function (response) {
      success(response);
    }).fail(function () {
      alert('API call failed');
    });
  },

  getMlbNews(id, success) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://api.fantasydata.net/mlb/v2/JSON/NewsByPlayerID/${id}`,
      "method": "GET",
      "headers": {
        "ocp-apim-subscription-key": "972aca2017234aa78b61e3f0a371448d",
        "cache-control": "no-cache"
      }
    };

    $.ajax(settings).done(function (response) {
      // success(response);
      if (response[0]) {
        window.open(response[0].Url, '_blank');
      } else {
        window.open('http://www.rotoworld.com/sports/mlb/baseball?ls=roto:mlb:gnav', '_blank');
      }
    }).fail(function () {
      alert('API call failed');
    });
  },

  getNflStats(success) {
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
  },

  getNflNews(id, success) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://api.fantasydata.net/v3/nfl/scores/JSON/NewsByPlayerID/${id}`,
      "method": "GET",
      "headers": {
        "ocp-apim-subscription-key": "eac81d396d5549deb23e2458908d0ca7",
        "cache-control": "no-cache"
      }
    };

    $.ajax(settings).done(function (response) {
      // success(response);
      if (response[0]) {
        window.open(response[0].Url, '_blank');
      } else {
        window.open('http://www.rotoworld.com/sports/nfl/football?ls=roto:nfl:gnav', '_blank');
      }
    }).fail(function () {
      alert('API call failed');
    });
  },

};

module.exports = StatsApiUtil;
