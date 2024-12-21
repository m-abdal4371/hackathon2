import { Minus, Plus, X } from 'lucide-react'
import Image from 'next/image'
import Button from './ui/button'
import type CartItem from '../types/cart'

interface CartItemProps {
  item: CartItem
  onUpdateQuantity: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

export default function CartItemRow({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <tr className="border-b">
      <td className="py-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Remove item"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="relative w-20 h-20">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-gray-600">Color: {item.color}</p>
            <p className="text-sm text-gray-600">Size: {item.size}</p>
          </div>
        </div>
      </td>
      <td className="py-4">${item.price.toFixed(2)}</td>
      <td className="py-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
            className="h-8 w-8"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="h-8 w-8"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </td>
      <td className="py-4">£{(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  )
}

