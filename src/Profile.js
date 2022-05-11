import React from 'react'
import {connect} from "react-redux"
 
function Profile(props) {
  return (
    <>
    <h1 >Profile  Component  name = {props.name} age = {props.age}</h1 >
    <button onClick={ () => { props.changeAge(25) } } > Change age  </button>
    </>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {

  return {
    changeAge : (age) => {  dispatch({ type : "change_age" , payload : age  }) }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)