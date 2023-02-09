const numberInitialState =[]

const numberReducer = (state = numberInitialState,action) => {
            switch(action.type){
                case "ADD_NUMBER" :{
                     return [...state,{...action.payload}]
                }
                case "PLUS_TWO" :{
                     return state.map((num)=>{
                        return {
                            ...num,
                            value: num.value +2
                        }
                    })
                }
                case "REMOVE_ALL" :{
                    return []
                }

                case "INCREMENT":{
                    return state.map((ele)=>{
                        if(ele.id === action.payload){
                            return {...ele, value:ele.value +1}
                        }else{
                            return {...ele}
                        }
                    })
                }
                case "DECREMENT":{
                    return state.map((ele)=>{
                        if(ele.id === action.payload){
                            return {...ele, value:ele.value -1}
                        }else{
                            return {...ele}
                        }
                    })
                }
                case "REMOVE_NUMBER":{
                    return state.filter((ele)=>{
                        if(ele.id !== action.payload){
                            return {ele}
                        }
                    })
                }
                default:{
                    return [...state] //ES5 [].concat(state) 
                }
            }
}

export default numberReducer
