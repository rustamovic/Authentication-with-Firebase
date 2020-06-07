import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDEYX6LnDQZ64jJmI2WGPNlTeEVJzAK8F4",
  authDomain: "fir-react-authe.firebaseapp.com",
  databaseURL: "https://fir-react-authe.firebaseio.com",
  projectId: "fir-react-authe",
  storageBucket: "fir-react-authe.appspot.com",
  messagingSenderId: "577842106513",
  appId: "1:577842106513:web:deeb55763eab7a6cc9ef30",
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
