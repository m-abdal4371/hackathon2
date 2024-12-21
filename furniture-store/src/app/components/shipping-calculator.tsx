import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function ShippingCalculator() {
  return (
    <div className="bg-[#F4F4FC] p-6 rounded-sm">
      <h2 className="text-lg font-semibold mb-4">Calculate Shopping</h2>
      <form className="space-y-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Bangladesh" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bd">Bangladesh</SelectItem>
            <SelectItem value="in">India</SelectItem>
            <SelectItem value="pk">Pakistan</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="Mirpur Dhaka - 1200" />
        <Input placeholder="Postal Code" />
        <Button className="w-full bg-[#FB2E86] hover:bg-[#E81E63] text-white">
          Calculate Shipping
        </Button>
      </form>
    </div>
  )
}

