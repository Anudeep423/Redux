import React,{useState} from 'react'
import {connect} from "react-redux"

function Home(props) {
    console.log("Home component", props)
  return (
      <>
    <h1 >Home Component name = {props.name} </h1 >
    </>
  )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Home)