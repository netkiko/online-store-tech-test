export interface ICartItems {
    id: number;
    title: number;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    quantity: number;
    amount: number;
}
