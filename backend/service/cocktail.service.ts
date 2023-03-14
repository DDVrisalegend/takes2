import { Cocktail } from "../domain/model/Cocktail";
import cocktailsDb from "../domain/data-access/cocktails.db";
import { CocktailSQLView } from "../types/types";


const getAllCocktails = async (): Promise<Cocktail[]> => cocktailsDb.getAllCocktails();
const getCocktailByID = async (id: number): Promise<Cocktail> => {
    if(Number.isNaN(Number(id))){throw new Error('ID is empty or invalid');}
    const cocktail = await cocktailsDb.getCocktailByID(id);
    if (!cocktail){throw new Error ('No cocktail with this ID found');}
    return cocktail
};

/*const addCocktail = async ({name, ingredients}: CocktailSQLView): Promise<Cocktail> =>{
    if(!name || name ==""){throw new Error('Name is empty')}
    if(!ingredients){throw new Error('Ingredients are empty');}
    return await cocktailsDb.addCocktail({name, ingredients});
}*/

export default {getAllCocktails, getCocktailByID}//addCocktail


