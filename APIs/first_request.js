var request = require("request");
request("https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(error, response, body){  //and cehck for error, check for response.status, body(3 parametewr)
    if (error){
        console.log("Something has gone wrong!");
    } else {
        if(response.statusCode == 200){
            //Thingsnworked!
           var parsedData = JSON.parse(body); //  JSON is actually in string format. and what JSON.parse does it that it turns it into an object
            console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
        }
    }
});   