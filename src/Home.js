import React from 'react'
import {connect} from "react-redux"
import axios from 'axios'

function Home(props) {
  return (
    <>
    <h1 >Home  Component  name = {props.name} age = {props.age}</h1 >
    <button onClick={  () => { 
      axios.get("https://jsonplaceholder.typicode.com/users") 
      .then( (res) => { props.changeName(res.data[0].name)  } )
       } } >change name </button>
    </>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDisptachToProps = (dispatch) => {
  return {
    changeName : (name) => {  dispatch({type : "change_name" , payload : name  })  }
  }
}

export default connect(mapStateToProps,mapDisptachToProps)(Home)