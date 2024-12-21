export default interface CartItem {
  id: string
  name: string
  color: string
  size: string
  price: number
  quantity: number
  image: string
}

export default interface CartTotals {
  subtotal: number
  total: number
}

