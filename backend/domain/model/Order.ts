import { Cocktail } from "../model/Cocktail"
import { User } from "../model/User"

export class Order{
    private orderId:number;
    private userId: number;
    private cocktails: Cocktail[];
    private deliveryDate: Date;
    private users: User;

    public constructor(order:{orderId:number, userId:number, deliveryDate:Date, cocktails: Cocktail[], users: User}){
        this.setOrderId(order.orderId)
        this.setDeliveryDate(order.deliveryDate)
        this.setUserID(order.userId)
        this.users=order.users
        this.cocktails=order.cocktails
    }
    
    public setOrderId(orderId : number):void {
        if (orderId < 0){
            throw new Error("Invalid orderID")
        }
        this.orderId = orderId;
    }

        public setUserID(userId : number):void {
        if(userId<0){
            throw new Error("Invalid userID")
        }
        this.userId = userId;
    }
    
    public setDeliveryDate(date : Date):void {
        if (date.toDateString < Date().toString){
            throw new Error("Invalid DeliveryDate")
        }
        this.deliveryDate = date;
    }
    

    
    public getOrderID() : number {
        return this.orderId;
    }
    public getUserID() : number {
        return this.userId;
    }
    public getDeliveryDate() : Date {
        return this.deliveryDate;
    }

    
    
    
    
    
    
}