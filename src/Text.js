/**
 * building a Spotify Clone using ReactJS and get all the required data from the official Spotify Web API. Spotify is a music application where you can listen to your favorite music. It has an inbuilt music player so that you can pause/play, repeat, and adjust the volume of music.
 
1. Creating a React App  => npx create-react-app => npm start => http://localhost:3000 (in browser)

->  Delete (optional) three files from the src folder from the React App. Those three files are

App.test.js
logo.svg
setupTests.js

We are deleting these files because these are not relevant to us in any project.

-> Also remove import logo from "./logo.svg"; from App.js

2.Setting up Firebase

3. Setting up Spotify Web API  -> To get access to the Spotify Web API so that we can get a lot of details from the API, we must create an API credential at Spotify Developers Website.

Here’s the full URL
https://developer.spotify.com/dashboard/

4.Then you have to press login and login using your Spotify account, although, you can use Google, Facebook or Apple for third party agents as logging into Spotify.
You must be redirected to the Dashboard of spotify developer.

5. If you are here, great! Just press the “Create an App” button so that we can generate our Spotify API credentials.

-> Give you app a name, in this case I will use “spotify-clone-medium” and give it a description. Make sure you agree Spotify’s Terms of Service before pressing “Create”.
-> Here, copy the Client ID and save it somewhere, we will need it in the app. We would not require the Client Secret but you need to keep it a secret and should not be shared in any circumstances
-> Now, click on the Edit Settings button
-> in the Redirect URIs field, enter our development server address which is http://localhost:3000/ (do not forget the slash in the end). After you enter click on the Add button besides it and finally, hit Save.

6. Work on the Login Page -> Login.js, css

7. Work on Spotify Configuration File -> Spotify.js

Here’s the logic behind the Spotify configuration file:

-> The authEndpoint is the URL where we need to authenticate using Spotify. All Spotify Authentication requests must be passed through this URL.

->The redirectUri is the one which we gave in the Spotify Web API settings, this states where to take back the user if the Spotify login was successful.

->The clientId is the Client ID provided to you by the Spotify Web API and you need to mention it here.

->scopes are basically permissions which you need to ask Spotify for. More such permissions are available on Spotify API Documentation.

->The loginUrl is the final URL which needs to be called in order to authorize an user for our Spotify Clone app. This URL contains the Client ID and all the permissions so that Spotify knows about our app and allows user authentication.

Now, if you try to click on Login with Spotify on your app in the browser, you will see you are redirected to Spotify asking to login and then requesting authorization. Once you authorize, you find yourself back in the Spotify Clone, but this time, you see an access token in the URL bar. We need that Access Token in order to authenticate users. To do that, we need to take it out of URL bar.

in spotify.js file we made a new function named "getTokenFromUrl" which will basically extract the Access Token from the URL once we have it. Now let’s check in the App component so that whenever a token is sent, we can decide if we want to show the Player or the Login screen. 

==> App.js configuration explaning:
* We have used an "useEffect" block so that the set of code runs only once the page is loaded.
* We have used the "getTokenFromUrl" function which we made in our Spotify Configuration file.
* For security purposes, we reset the URL bar to NOT show the access token so that only the app knows the access token. It’s always a good practice to hide access tokens.
* We are setting the state with the token in it. Then while rendering, we are checking if a token exists, if one exists, that means the user is logged in and should be shown a player, which we will make soon, or else the person should see the login screen.

->  Using the Spotify Web API -> npm install spotify-web-api-js

* We have imported SpotifyWebApi class from the package we just installed.
* We have initialized an object named spotify with the SpotifyWebApi class. Now this object spotify represents Spotify in our app.
* If a token exists, we are setting the Access Token to the Spotify Access Token so that it can access Spotify Services.

8. Setting up Context API

Now it’s the time to set up React Context API and make the reducer. To know more about React Context API and how to set it up, please read this blog posted under Clever Programmer! In this article, we will only set up the reducer so that we can remain in the context of making Spotify Clone.
Now that we have the Context API, we need to update App.js so that it uses the Context API instead of local states.

So let’s see what we have changed in the App.js:
We have used the Context API instead of the regular states
We also have fetched the Discover weekly playlist and stored it in the Context API because we need it in the Player component.
We have passed spotify as a "prop" to the "Player" component

9. Creating the Player->
In the previous sections we made the Player component using the BEM Convention, so if you haven’t make it, make it now! Because we are going to work on that primarily in this section. We will be making sub-components first and then arrange them properly into the main Player component.
The entire Player component will have three sub components
Sidebar — Where the playlists are shown
Body — Where the songs and everything else are shown
Footer — Which has the buttons pause, play, and volume control

BEM ->  In a React context, A BEM block generally maps to a single React presentational component.
A 'Block' “encapsulates a standalone entity that is meaningful on its own”. So, every React component you write must have a Block class name on its outermost element.
'Elements' are “parts of a Block and have no standalone meaning”. So Element class names should be given to inner… elements.
'Modifiers' are “flags on Blocks or Elements” which you can use to change the appearance of the modified item.




 










































 */
