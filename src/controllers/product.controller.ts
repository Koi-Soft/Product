import { NextFunction, Request, Response } from "express";
import productsRepository from "../repository/products.repository";

export default class ProductController {

    constructor() {}

    public async getAllProducts(req: Request, res: Response, next: NextFunction) {
        try {
            const products = await productsRepository.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            console.error(error);
            next();
        }
    }

    public async getProductById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const product = await productsRepository.getProductById(id);
            if (!product) return res.status(404).json({message: `Product with id: ${id} not found`});
            return res.status(200).json(product);
        } catch (error) {
            console.error(error);
            next();
        }
    }

    public async createProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await productsRepository.createProduct(req.body);
            return res.status(200).json(data);
        } catch (error) {
            console.error(error);
            next();
        }
    }

    public async updateProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const product = await productsRepository.getProductById(id);
            if (!product) return res.status(404).json({message: `Product with id: ${id} not found`});
            const data = await productsRepository.updateProduct(id, req.body);
            return res.json(data).status(200);
        } catch (error) {
            console.error(error);
            next();
        }
    }
}