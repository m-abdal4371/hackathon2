'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, ChevronDown, Heart, User, ShoppingCart, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CartItemRow } from '@/components/cart-item'
import { ShippingCalculator } from '@/components/shipping-calculator'
import type { CartItem } from '@/types/cart'

const initialItems: CartItem[] = [
  {
    id: '1',
    name: 'Ut diam consequat',
    color: 'Brown',
    size: 'XL',
    price: 32.00,
    quantity: 1,
    image: '/placeholder.svg?height=80&width=80'
  },
  {
    id: '2',
    name: 'Vel faucibus posuere',
    color: 'Brown',
    size: 'XL',
    price: 32.00,
    quantity: 1,
    image: '/placeholder.svg?height=80&width=80'
  },
  {
    id: '3',
    name: 'Ac vitae vestibulum',
    color: 'Brown',
    size: 'XL',
    price: 32.00,
    quantity: 1,
    image: '/placeholder.svg?height=80&width=80'
  },
  {
    id: '4',
    name: 'Elit massa diam',
    color: 'Brown',
    size: 'XL',
    price: 32.00,
    quantity: 1,
    image: '/placeholder.svg?height=80&width=80'
  },
  {
    id: '5',
    name: 'Proin pharetra elementum',
    color: 'Brown',
    size: 'XL',
    price: 32.00,
    quantity: 1,
    image: '/placeholder.svg?height=80&width=80'
  }
]

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems)

  const updateQuantity = (id: string, quantity: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity } : item
    ))
  }

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setItems([])
  }

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const total = subtotal + (subtotal * 0.2) // Adding 20% for shipping and handling

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5FF]">
      {/* Header */}
      <header className="bg-[#7E33E0] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><Mail className="w-4 h-4 mr-2" /> mhhasanul@gmail.com</span>
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> (12345)67890</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">English <ChevronDown className="w-4 h-4 ml-1" /></span>
            <span className="flex items-center">USD <ChevronDown className="w-4 h-4 ml-1" /></span>
            <span className="flex items-center">Login <User className="w-4 h-4 ml-1" /></span>
            <span className="flex items-center">Wishlist <Heart className="w-4 h-4 ml-1" /></span>
            <ShoppingCart className="w-6 h-6" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#0D0E43]">Hekto</Link>
          <div className="space-x-6">
            <Link href="/" className="text-[#FB2E86]">Home</Link>
            <Link href="/pages" className="text-[#0D0E43]">Pages</Link>
            <Link href="/products" className="text-[#0D0E43]">Products</Link>
            <Link href="/blog" className="text-[#0D0E43]">Blog</Link>
            <Link href="/shop" className="text-[#0D0E43]">Shop</Link>
            <Link href="/contact" className="text-[#0D0E43]">Contact</Link>
          </div>
          <div className="relative">
            <input type="text" placeholder="Search" className="pl-2 pr-8 py-1 border rounded" />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#101750] mb-4">Shopping Cart</h1>
        <div className="flex gap-4 text-[#FB2E86] mb-8">
          <Link href="/">Home</Link>
          <span>•</span>
          <Link href="/pages">Pages</Link>
          <span>•</span>
          <span>Shopping Cart</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-sm shadow">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4">Product</th>
                    <th className="text-left py-4">Price</th>
                    <th className="text-left py-4">Quantity</th>
                    <th className="text-left py-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <CartItemRow
                      key={item.id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={removeItem}
                    />
                  ))}
                </tbody>
              </table>
              <div className="p-4 flex justify-between">
                <Button 
                  variant="default" 
                  className="bg-[#FB2E86] hover:bg-[#E81E63] text-white"
                  onClick={() => setItems(initialItems)}
                >
                  Update Cart
                </Button>
                <Button 
                  variant="outline" 
                  className="border-[#FB2E86] text-[#FB2E86] hover:bg-[#FB2E86] hover:text-white"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-sm shadow">
              <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
              <div className="space-y-4">
                <div className="flex justify-between pb-4 border-b">
                  <span>Subtotals:</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pb-4 border-b">
                  <span>Totals:</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500">✓ Shipping & taxes calculated at checkout</p>
                <Button className="w-full bg-[#FB2E86] hover:bg-[#E81E63] text-white">
                  Proceed To Checkout
                </Button>
              </div>
            </div>

            <ShippingCalculator />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#EEEFFB] py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#000000] mb-4">Hekto</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full p-2"
              />
              <Button className="bg-[#FB2E86] hover:bg-[#E81E63] text-white">
                Sign Up
              </Button>
            </form>
            <div className="mt-4 text-[#8A8FB9]">
              <p>Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Catagories</h3>
            <ul className="space-y-2 text-[#8A8FB9]">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2 text-[#8A8FB9]">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 text-[#8A8FB9]">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-[#E7E4F8] py-4 text-center text-[#9DA0AE]">
        ©Webecy - All Rights Reserved
      </div>
    </div>
  )
}

