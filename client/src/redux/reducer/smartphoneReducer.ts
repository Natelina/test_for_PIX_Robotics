import { ProductAction, ProductActionType, ProductSliceState, ProductState } from '../types'

const initialState: ProductState = {
  smartfon: [
    {
      id: 0,
      title: '',
      description: '',
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: '',
      category: '',
      thumbnail: '',
      images: []
    }
  ]
}

const smartphoneReducer = (state = initialState, action: ProductAction): ProductState => {
  const { type, payload } = action
  switch (type) {
    case ProductActionType.GET_SMARTPHONES:     
      return payload
    default: return state
  }
}
export default smartphoneReducer
