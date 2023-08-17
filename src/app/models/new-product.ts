export interface NewProduct {
    name: string;
    type: string;
    shortDesc: string;
    longDesc: string;
    image: string;
    price: number;
    stock: number;
    inCart: boolean;
    quantity: number;
}