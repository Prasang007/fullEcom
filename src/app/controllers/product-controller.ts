import Product from '../models/products';
import { Request, Response, NextFunction } from 'express';
import product from '../models/products';



class ProductController {
  static getAllProducts = (req: Request, res: Response, next: NextFunction) => {
    Product.find((error, data) => {
      if (error) {
          return next(error);
      } else {
          res.json(data);
      }
  });
}

static getProduct = (req: Request, res: Response, next: NextFunction) => {
const id = req.query.id;
Product.findById(id, (error, data) => {
    if (error) {
        return next(error);
    } else {
        res.json(data);
    }
  });
}
static createProduct = (req: Request, res: Response, next: NextFunction) => {
  const newProduct = new product(req.body);
  newProduct.save((err, data) => {
    if (err) {
      return console.error(err);
    }
    res.json('Product Made Succesfully !!');
  });
}

}
export default ProductController;
