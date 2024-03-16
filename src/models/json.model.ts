import { readFile, writeFile } from "fs/promises";
import { IProduct, IRepository } from "../interfaces/product.interface";

export class JsonModel implements IRepository {
    private _path: string = "./src/db/product.json";

    constructor() { }

    public async getProducts(): Promise<IProduct[]> {
        const file = await readFile(this._path, "utf-8");
        if (!file) {
            await writeFile(this._path, "");
            return [];
        } 
        return JSON.parse(file);
    }

    public async getProduct(id: string): Promise<IProduct | null> {
        const file = await readFile(this._path, "utf-8");
        const data = await this.getProducts();
        const product = data.find(prod => prod.productid === Number(id));
        if (!product) return null;
        return product;
    }

    public async createProduct(product: IProduct): Promise<void> {
        const file = await readFile(this._path, "utf-8");
        if(!file) {
            product.productid = 1;
            await writeFile(this._path, JSON.stringify([product]), "utf-8");
            return;
        }
        const parsedFile = JSON.parse(file);
        product.productid = parsedFile.length+1;
        parsedFile.push(product);
        const parsedData = JSON.stringify(parsedFile);
        await writeFile(this._path, parsedData, "utf-8");
    }

    public async updateProduct(id: string, product: IProduct): Promise<void>{
        const file = await readFile(this._path, "utf-8");
        const parsedFile: typeof product[] = JSON.parse(file);
        const productIdx: number = parsedFile.findIndex(element => element.productid === Number(id));

        Object.assign(parsedFile[productIdx], product);

        const parsedData = JSON.stringify(parsedFile);
        await writeFile(this._path, parsedData, "utf-8");
    }
}