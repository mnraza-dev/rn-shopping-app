import { create } from 'zustand';
import { PRODUCTS } from '../assets/products';
type CartItemType = {
    id: number;
    title: string;
    image: any;
    price: number;
    quantity: number;

}
type CartState = {
    items: CartItemType[];
    addItem: (item: CartItemType) => void;
    removeItem: (id: number) => void;
    incrementItem: (id: number) => void;
    decrementItem: (id: number) => void;
    getTotalPrice: () => number;
    getItemCount: () => number;
}
const initialCartItems: CartItemType[] = [];
export const useCartStore = create<CartState>((set, get) => ({
    items: initialCartItems,
    addItem: (item: CartItemType) => {
        const existingItem = get().items.find((i) => i.id === item.id);
        if (existingItem) {
            set((state) => ({ items: state.items.map((i) => i.id === item.id ? { ...i, quantity: Math.min(i.quantity + i.quantity, PRODUCTS.find((p) => p.id === item.id)?.maxQuantity || i.quantity) } : i) }));
        }
        else {
            set((state) => ({ items: [...state.items, item] }));
        }
    },
    removeItem: () => null,
    incrementItem: () => null,
    decrementItem: () => null,
    getTotalPrice: () => 0,
    getItemCount: () => 0,
}));

