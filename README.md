# Basic-auth-nodejs-react-jwt
Basic jwt auth with nodejs and react. This is a "Test" or example of how to authenticate users by JWT in React and Nodejs.

# Explanation

The user registers and then logs in. At the moment that it is validated that your access data is correct, a token is generated that is sent to the client in the form of an httponly cookie with an expiration time slightly higher than that of the token (This is because I wanted to add a personalized message for the user when the token expires, otherwise it is better to send the same expiration time in the cookie as in the token). Once the cookie has been sent to the client, the user will be redirected to their user profile. In the server routes there is a middleware that validates if the user is logged in and if the token is correct. Thanks to this we can add a useEffect to the important routes of the client that points to the route that we want from the server and this middleware will validate if there is a token on the client side and if it is valid. If valid, the server responds with the requested information. This at the same time helps us to have control over the routes that the user can see when they are logged in and when they are not.

# Finally

To close the user's session, it can be done in several ways, but in this example I did it by sending a request from the client to a server route that what it does is delete the cookie on the client side.



