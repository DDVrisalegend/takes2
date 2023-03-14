import { Order } from "../model/Order"
import { Cocktail } from "../model/Cocktail"
import {CocktailSQLView, OrderSQLView, OrderSQLViewSpecific,CocktailInput} from "../../types/types"
import { mapToCocktails } from "./cocktail.mapper"

export function mapToOrders(orderSQLView: OrderSQLView[]):Order[]{
    const orders = []
    for (const order of orderSQLView){(
        orders.push({
            orderId:order.orderId,
            cocktails: order.cocktails,
            userId : order.userId,
            deliveryDate: order.deliveryDate
        })
    )
    }
    return orders
}

export const mapToOrder= ({orderId, userId, cocktails, deliveryDate,users}: OrderSQLViewSpecific & {cocktails: CocktailInput[] }): Order =>{
    return new Order({orderId, userId, deliveryDate,cocktails: mapToCocktails(cocktails), users});}

