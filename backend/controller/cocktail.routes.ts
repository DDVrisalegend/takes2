import express, {Request, Response} from 'express';
import cocktailService from '../service/cocktail.service';
import { CocktailSQLView,UserSQLUnique } from '../types/types';

export const cocktailRouter = express.Router();

cocktailRouter.get('/', (req: Request, res:Response) =>{
    try{
        const cocktails = cocktailService.getAllCocktails();
        res.status(200).json(cocktails)
    } catch (error){
        res.status(500).json({status:'error', errorMessage: error.message});

    }
});

cocktailRouter.get('/', (req: Request, res:Response) => {
    const idInput= req.body
    try {
        const cocktail = cocktailService.getCocktailByID(idInput);
        res.status(200).json(cocktail);
    } catch (error){
        res.status(500).json({status: 'error', errorMessage: error.message});
    }
});

/*cocktailRouter.post('/', async (req:Request, res: Response) => {
    const userInput= <CocktailSQLView>req.body;
    try{
        const cocktail= await cocktailService.addCocktail(userInput)
        res.status(200).json(cocktail);
    } catch(error){
        res.status(500).json({status:'error', errorMessage: error.message});
    }
})*/
