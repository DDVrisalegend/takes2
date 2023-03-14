import { Cocktail } from "../model/Cocktail"
import {CocktailSQLView} from "../../types/types"
import {CocktailInput} from "../../types/types"

export function mapToCocktails(cocktailSQLView:CocktailSQLView[]):Cocktail[]{
    const cocktails = []
    for(const cocktail of cocktailSQLView){
        cocktails.push(
            {
                cocktailId : cocktail.id,
                ingredients : cocktail.ingredients,
                name : cocktail.name
            }
        )
    }
    return cocktails
}

export function mapToCocktail(cocktailSQLView: CocktailSQLView): Cocktail{
    const cocktail= new Cocktail(cocktailSQLView.id,cocktailSQLView.name,cocktailSQLView.ingredients)
    return cocktail
}
