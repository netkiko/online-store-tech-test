export interface IProducts {
    id: number;
    title: number;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}
