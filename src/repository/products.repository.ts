import { IProduct, IRepository } from "../interfaces/product.interface";
import { JsonModel } from "../models/json.model";
import { PostgresModel } from "../models/postgres.model";

class ProductsRepository {
    private _productModel: IRepository;

    constructor(repository: IRepository) {
        this._productModel = repository;
    }

    public async getAllProducts() {
        return await this._productModel.getProducts();
    }

    public async getProductById(id: string) {
       return await this._productModel.getProduct(id);
    }

    public async createProduct(product: IProduct) {
        await this._productModel.createProduct(product);
        return { created: true, product }
    }

    public async updateProduct(id: string, product: IProduct) {
        const updatedProduct = await this._productModel.updateProduct(id, product);
        return { updated: true }
    }
}

export default new ProductsRepository(new PostgresModel());
//export default new ProductsRepository(new JsonModel());