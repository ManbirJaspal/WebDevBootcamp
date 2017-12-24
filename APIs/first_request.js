var request = require("request");
request("http://www.reddit.com/sdfswdfwf", function(error, response, body){  //and cehck for error, check for response.status, body(3 parameters)
    if (error){
        console.log("Something has gone wrong!");
    } else {
        if(response.statusCode == 200){
            //Thingsnworked!
            console.log(body);
        }
    }
});