export const addNumber =(randomNum)=>{
        return{
            type: "ADD_NUMBER",
            payload:randomNum   
        }
}

export const plusTwo =()=>{
    return{
        type:"PLUS_TWO"
    }
}

export const removeAll=()=>{
    return {
        type: "REMOVE_ALL"
    }
}

export const increment=(id)=>{
    return {
        type:"INCREMENT",
        payload: id
    }
}

export const decrement=(id)=>{
    return {
        type: "DECREMENT",
        payload:id
    }
}

export const removenumber=(id)=>{
    return{
        type:"REMOVE_NUMBER",
        payload:id
    }
}