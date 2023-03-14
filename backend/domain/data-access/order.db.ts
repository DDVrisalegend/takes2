import { Order } from '../model/Order';
import { Cocktail } from '../model/Cocktail';
import {mapToOrders} from './order.mapper';
import {mapToOrder} from './order.mapper';
import { PrismaClient } from "@prisma/client";
const database = new PrismaClient();

const getAllOrders = async (): Promise<Order[]> => {
    try {
        const orderPrisma= await database.order.findMany()
        return mapToOrders(orderPrisma)
    } catch (error){
        console.error(error)
        throw new Error ('Database error. see server logs for more information');
    }
}

//probleem met type requirements
/*const getOrderByID = async (id: number): Promise<Order> => {
    try {
        const orderPrisma= await database.order.findUnique({
            where: {
                orderid: id,
            }
        })
        return mapToOrder(orderPrisma)
    } catch (error){
        console.error(error)
        throw new Error ('Database error. see server logs for more information');
    }
}

const addOrder= async ({
    userid,
    cocktails,
    deliveryDate,
}:
{userid:number; 
 cocktails; 
 deliveryDate:Date; 
}):Promise<Order> =>{
    try{
        const orderPrisma= await database.order.create({
            data:{
                cocktails: cocktails,
                users: {connect: {userid: userid}},
                deliveryDate,
            },
        });
        return mapToOrder(orderPrisma)
    }catch(error){}
}

export default{addOrder,getOrderByID,getAllOrders}*/
export default {getAllOrders}