import {createStore} from 'redux'
import { reducer } from './reducers/cashReducer'

export const store = createStore(reducer)