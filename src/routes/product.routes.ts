import { Router } from "express";
import ProductController from "../controllers/product.controller";

class ProductRouter {
    public router = Router();
    private productController = new ProductController();

    constructor() {
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.route('/').get(this.productController.getAllProducts);
        this.router.route('/').post(this.productController.createProduct);
        this.router.route('/:id').patch(this.productController.updateProduct);
        this.router.route('/:id').get(this.productController.getProductById);
    }
}

export default new ProductRouter().router;