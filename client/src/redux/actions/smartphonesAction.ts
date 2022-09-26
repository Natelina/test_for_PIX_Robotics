import { ProductAction, ProductActionType } from './../types'
import axios from 'axios'
import { Dispatch } from 'redux'

export const allSmart = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      const response = await axios.get('https://dummyjson.com/products')
      dispatch({ type: ProductActionType.GET_SMARTPHONES, payload: response.data })
    } catch (err) {
      console.log(err)
    }
  }
}
