var obj = {
    name : "Rahul",
    age : 20
}

export const reducer = (state = obj,action) => {
    if(action.type == "change_name"  ){
        return {
            ...state,
            name : action.payload
        }
    }else if(action.type == "change_age"){
        return {
            ...state,
            age : action.payload
        }
    }
    console.log("reducer" , action)
    return state;
}

 