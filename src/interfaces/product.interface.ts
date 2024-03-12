export interface IProduct {
    productid?: number;
    categoryid: number;
    description: string;
    price: number;
    image: string;
    active: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface IRepository {
    getProducts(): Promise<IProduct[]>;
    getProduct(id: string): Promise<IProduct | null>;
    createProduct(product: IProduct): Promise<void>;
    updateProduct(id: string, product: IProduct): Promise<void>;
}
