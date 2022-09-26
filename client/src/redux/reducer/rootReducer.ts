import { combineReducers } from 'redux'
import smartphoneReducer from './smartphoneReducer'

const rootReducer = combineReducers({
  smartfon: smartphoneReducer
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
