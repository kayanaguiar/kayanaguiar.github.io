import 'reflect-metadata';
import express, { Request, Response } from "express";
import { DataSource, Equal } from 'typeorm';
import { Product } from "./entities/product";
import { Review } from "./entities/review";
import { upload } from './multer';
import cors from 'cors';
import { Dress } from './entities/types/dress-type';
import { compareDress } from './utils/compareParams';
import path from 'path';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));
const uploadMiddleware = upload.array('images', 3);

const dbPath = process.env.DATABASE_PATH 
  ? path.resolve(process.env.DATABASE_PATH) 
  : path.join(__dirname, "..", "database.db");

const dataSource = new DataSource({
    type: "sqlite",   
    database: dbPath,  
    entities: [Product, Review],  
    synchronize: true,         
    logging: false,           
  });
  
  async function initializeDatabase() {
    try {
      await dataSource.initialize();
      console.log("Conexão com o banco de dados estabelecida com sucesso!");
    } catch (error) {
      console.error("Erro ao conectar com o banco de dados:", error);
    } 
} 

app.get('/product', async (req: Request, res: Response) => {
    try {
        const products = await dataSource.getRepository(Product).find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar produtos." });
    }
})
app.get('/product/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const product = await dataSource.getRepository(Product).findOneBy({ id: parseInt(id) });
        if (!product) {
            res.status(404).json({ message: "Produto não encontrado." });
            return;
        }
            res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar produtos." });
    }
})
app.get('/category/:dress', async (req: Request, res: Response) => {
    const { dress } = req.params;
    const keyDress = compareDress(dress);
    
    try {
        if (!keyDress) {
            res.status(400).json({ message: "Parâmetro 'dress' inválido." });
            return ;
        }
        const products = await dataSource.getRepository(Product).find({
            where: { dress: Equal(Dress[keyDress]) },
        });
        if (!products) {
            res.status(404).json({ message: "Produto não encontrado." });
            return;
        }
            res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar produtos." });
    }
})
app.post('/product', uploadMiddleware, async (req: Request, res: Response) => {
    const { title, price, rating, description, color, size, category, dress, discount } = req.body;

    const images = (req.files as Express.Multer.File[]).map((file) => `/uploads/${file.filename}`) || [];
    try {

        const product = new Product();
            product.title = title; 
            product.price = price;
            product.image = images;
            product.rating = rating;
            product.description = description;
            product.color = color;
            product.size = size;
            product.category = category;
            product.dress = dress;
            if (discount) {
                product.discount = discount;
            }

        await dataSource.getRepository(Product).save(product);
        res.status(201).json(product);

    } catch (error) {
        res.status(500).json({ message: "Erro ao adicionar product." });
    }
});

app.get('/review', async (req: Request, res: Response) => {
    try {
        const reviews = await dataSource.getRepository(Review).find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar Review." });
    }
})
app.get('/review/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const review = await dataSource.getRepository(Review).findOneBy({ id: parseInt(id) });
        if (!review) {
            res.status(404).json({ message: "Review não encontrado." });
        }
            res.status(200).json(review);

    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar review." });
    }
})
app.get('/review/product/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const reviews = await dataSource.getRepository(Review).find({where: { productId: Equal(parseInt(id)) },
        });
        if (!reviews) {
            res.status(404).json({ message: "Review não encontrado." });
        }
            res.status(200).json(reviews);

    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar reviews do produto." });
    }
})
app.post('/review', uploadMiddleware, async (req: Request, res: Response): Promise<void> => {
    const { productId, user, review, rating } = req.body;
    try {
        const product = await dataSource.getRepository(Product).findOneBy({ id: productId });
        if (!product) {
            res.status(404).json({ message: "Produto não encontrado." });
            return;
        }
        const newReview = new Review();
        newReview.productId = productId; 
        newReview.user = user;
        newReview.review = review;
        newReview.rating = rating;
        newReview.date = new Date();

        await dataSource.getRepository(Review).save(newReview);
        res.status(201).json(newReview);

    } catch (error) {
        res.status(500).json({ message: "Erro ao adicionar review." });
    }
});

initializeDatabase().then(() => {
    const port = 3000;
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  });

