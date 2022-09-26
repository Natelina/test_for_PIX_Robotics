export interface ProductState {
  smartfon: [
    {
      id: number
      title: string
      description: string
      price: number
      discountPercentage: number
      rating: number
      stock: number
      brand: string
      category: string
      thumbnail: string
      images: string[]
    }
  ]
}
export enum ProductActionType {
  GET_SMARTPHONES = 'GET_SMARTPHONES',
  
}
export interface ProductSliceState {
  items: ProductState;
  status: ProductActionType[];
}
export interface FetchProductAction {
  type: ProductActionType.GET_SMARTPHONES
  payload: ProductState
}

export type ProductAction = FetchProductAction
