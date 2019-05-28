# React Native real-time Tic-tac-toe app

A tic-tac-toe app created with React Native and Pusher. Tutorial is available at the Pusher Tutorial Hub: [Creating a real-time game with React Native](https://pusher.com/tutorials/realtime-game-react-native).

*Note: the React Native code in this repo may be a little bit outdated and won't run immediately after you've followed the setup instructions. Be sure to refactor the code to use the more recent React Native syntax if it doesn't run for you.*

## Prerequisites

- React Native development environment
- Pusher account and pusher app

## Getting Started

1. Create a new React Native project:

```
react-native init RNPusherTicTacToe
```

2. Clone the repo in another directory:

```
git clone https://github.com/anchetaWern/RN-Pusher-TicTacToe.git
```

3. Navigate inside the `app` directory of the cloned repo:

```
cd RN-Pusher-TicTacToe/app
```

4. Copy the `components` folder and `package.json` file and paste it on your React Native project.

5. Copy the contents of `index.android.js` from the cloned repo: https://github.com/anchetaWern/RN-Pusher-TicTacToe/blob/master/app/index.android.js and paste it in the `index.js` file of your React Native project.


6. Navigate inside the `server` directory of the cloned repo and update the `.env` file with your Pusher app details:

```
cd RN-Pusher-TicTacToe/server
touch .env
```

7. Still inside the `server` directory, install the server dependencies:

```
npm install
```

8. Use [now.sh](https://zeit.co/now) to deploy the server or use [Ngrok](https://ngrok.com/) to simply expose it to the internet. Take note of the URL as this will serve as the base URL for the auth endpoint to be used by Pusher. The auth endpoint is `/pusher/auth`.


9. Navigate inside the root directory of your React Native project and install the dependencies:

```
npm install
```

10. Still in the root directory of your React Native project, open the `components/Main.js` file and update the [placeholder values](https://github.com/anchetaWern/RN-Pusher-TicTacToe/blob/master/app/components/Main.js#L46-L48) with your Pusher app details and auth endpoint (example: https://myapp.ngrok.com/pusher/auth)

11. Run the app:

```
react-native run-android
```

## Built With

- [React Native](http://facebook.github.io/react-native/)
- [Pusher Channels](https://pusher.com/)

## Donation

If this project helped you reduce time to develop, please consider buying me a cup of coffee :)

<a href="https://www.buymeacoffee.com/wernancheta" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
