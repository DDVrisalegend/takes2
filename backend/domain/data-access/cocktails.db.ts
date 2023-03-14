import { PrismaClient } from "@prisma/client";
import { Cocktail } from "../model/Cocktail";
import { mapToCocktails} from "./cocktail.mapper";
import { mapToCocktail } from "./cocktail.mapper";
const database= new PrismaClient();

const getAllCocktails= async (): Promise<Cocktail[]> => {
    try{
        const cocktailPrisma= await database.cocktail.findMany({})
        return mapToCocktails(cocktailPrisma);
    } catch(error){
        console.error(error)
        throw new Error ('Database error. see server log for more details');
    }
}

const getCocktailByID= async (id: number): Promise<Cocktail> => {
    try{
        const cocktailPrisma= await database.cocktail.findUnique({where:{cocktailid: id}});
        return mapToCocktail(cocktailPrisma)
    }catch (error){
        console.error(error)
        throw new Error('Database Error. see server logs for more details.')
    }
}

/*const addCocktail = async ({
    name,
    ingredients,
}:{name:string; ingredients:string[];}): Promise<Cocktail> => {
    try{
        const cocktailPrisma = await database.cocktail.create({
            data: {
                name,
                ingredients,
            },
        });
        return mapToCocktail(cocktailPrisma)
    } catch (error){
        console.error(error);
        throw new Error ('Database error. see server log for more details')
    }
}*/

export default {getAllCocktails,getCocktailByID}//addCocktail