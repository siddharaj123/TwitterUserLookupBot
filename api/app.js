const express = require("express");
const app = express();
const port = 4000;
var Twitter = require("twitter");
var cors = require("cors");
app.use(cors());


// DO NOT SHARE THESE KEYS
const client = new Twitter({
  consumer_key: "p**********************",
  consumer_secret: "X*****************************************",
  access_token_key: "1****************************************",
  access_token_secret: "9*****************************************",
});


app.get("/api/users/:search", function (req, res) {

  //TODO update the q property so it holds the value of the search request parameter
  let searchParam = { q: req.params.search };
  
  let result = []
  client.get("users/search", searchParam, function (error, data, response) {
    if (error)
      res.status(404).json({error: error});
   
    
    for (let i = 0; i < data.length;i++){
      result[i] = {
        handle: data[i].screen_name,
        name: data[i].name,
        tweets: data[i].statuses_count,
        following: data[i].friends_count,
        followers: data[i].followers_count,
        profile: data[i].profile_image_url_https,
      }
      console.log(data[3])

    }
    //TODO handle the error first
    //TODO populate the result array with each member of the data object's
    // you need to retrieve the following properties from each data object:
    // screen_name, name, statuses_count, friends_count, followers_count and profile_image_url_https
    // you should send your response back with an object that is the following: { data: result}
  res.status(200).json( { data: result});
  });
});

app.listen(port, () =>
  console.log(`Project4 app listening at http://localhost:${port}`)
);
































