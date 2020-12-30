import "./../css/index.less";
import React from 'react';
import ReactDom from 'react-dom'
import {userHeader} from './components/header.jsx';
import {helloWorld} from './components/helloWorld.jsx';
import {exerciseComponent} from './components/exerciseComponent.jsx';

const cookies = document.cookie.split("; ");
const lets_workout_cookie = cookies.filter(cookie => cookie.startsWith("lets_workout_user"));
const decodedUserCookie = decodeURIComponent(lets_workout_cookie[0]);
const userObject = JSON.parse(decodeURIComponent(decodedUserCookie).split("j:")[1]);

ReactDom.render(exerciseComponent(userObject), document.getElementById("exerciseList"));
ReactDom.render(userHeader(userObject), document.getElementById("starBoy"));
