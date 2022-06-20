export interface Product {
  id: number
  name: string
  currency: string
  price: number
  flag: string
  imageUrl: string
  rating: number
  ratingCount: number
  description: string
  amount: number
  images: {
    id: string
    src: string
    alt: string
  }
  salePrice?: undefined
}
