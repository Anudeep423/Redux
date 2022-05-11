import React from 'react'
import {connect} from "react-redux"
import Home from "./Home"
import Profile from "./Profile"



function App(props) {
  console.log(props);
  return (
    <>
    <h1>App Component name = {props.name} age = {props.age} </h1>
    <Home />
    <Profile />
    </>
  )
};

const mapStateToProps = (state) => {
  return state
}




export default connect(mapStateToProps)(App)