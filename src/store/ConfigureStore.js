import { createStore, combineReducers} from 'redux'
import countReducer from '../reducer/countReducer'
import numberReducer from '../reducer/numberReducer'
const ConfigureStore=()=>{
        const store = createStore(combineReducers({
            count: countReducer,
            numbers: numberReducer
        }))
        return store
}
export default ConfigureStore