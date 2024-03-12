import { readFile, writeFile } from "fs/promises";
import { IProduct, IRepository } from "../interfaces/product.interface";
import { Product } from "../entity/Product";

export class PostgresModel implements IRepository {
    private _path: string = "./db/product.json";

    constructor() { }

    public async getProducts(): Promise<IProduct[]> {
       const products = await Product.find();
       return products;
    }

    public async getProduct(id: string): Promise<IProduct | null> {
        const product = await Product.findOneBy({ productid: parseInt(id) });
        return product;
    }

    public async createProduct(product: IProduct): Promise<void> {
        const prod = new Product();
        prod.categoryid = product.categoryid;
        prod.description = product.description;
        prod.price = product.price;
        prod.image = product.image;
        prod.active = product.active;

        prod.save();
    }

    public async updateProduct(id: string, product: IProduct): Promise<void>{
        await Product.update({ productid: parseInt(id) }, product);  
    }
}