export interface Product {
    id: string;
    description: string;
    price: number;
    name: string;
   // manufacturer: string;
    image_src?: string;
   // averageReviewRate?: number;
    //comments: Reviews[];
    quantity: number;
}

export interface Reviews {
    name: string;
    comment: string;
    rate?: number;
}