# TwitterLookupBot

In this project, I built a full stack application that interacts with a third party API (twitter) and manages state across components in React. The application allows users to search for twitter accounts. They can then sort the results by tweets, name, or even followers. The user can then click on the account and is then routed to twitter website with the selected account opened up.

This projects consists of 2 applications, located in the api and the client directories. 

The API is an express server that will creates a single endpoint to respond to a GET request from the client. It then uses the twitter client to interact with the twitter api to fetch twitter users that match the name you provide in your search result.

The client is a react application that provides the user the ability to interact with the twitter api as well as display the results. The state of the application is being maintained in the Twitter component.

To run this code, a user will need his or her own consumer_key, consumer_secret, access_token_key, access_token_secret, which they will need to input into api -> app.js
