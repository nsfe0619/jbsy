
var request = require("request");

module.exports.weather=weather;


function weather(context,loc){
    get_weather(loc, (obj) => {
      context.replyText(loc + '天氣:' +obj[0].time[0].parameter.parameterName);
    });

}

function get_weather(loc, callback) {
    var url =
      "https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-001?Authorization=CWB-989FFA02-379A-4D81-AE8F-652286D0EA74&format=JSON";
    return request.get(
      {
        url: url,
      },
      function (error, response) {
        var obj = JSON.parse(response.body);
        var location = obj.cwbopendata.dataset.location;
        targetLocation = location.find(obj => obj.locationName == loc);
        callback(targetLocation.weatherElement)
      }
    );
  
  }