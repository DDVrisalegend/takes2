import { User } from "../domain/model/User"
import { Cocktail } from "../domain/model/Cocktail"


export type UserInput = {
    userid?: number | null
    name: string
    mail: string
    password: string
    role?: string
    telNr: string
  }

export type UserSQLUnique = {
    userid?: number | null
    name: string
    mail: string
    password: string
    role?: string
    telNr: string
}

export type EventInput = {
  eventid?:number | null
  name:string
  address:string
  date:Date
  duration:Date
  description:string
  users: User[]
  maxPart?:number
}

export type EventPrisma = {
  eventid?:number | null
  name:string
  address:string
  date:Date
  duration:Date
  description?:string
  users?: User[]
  maxPart?:number
}

export type CocktailSQLView = {
  id?:number | null
  name:string
  ingredients:string[]
}

export type CocktailInput = {
  id:number | null
  name:string
  ingredients:[]
}


export type OrderSQLView = {
  orderId?:number | null
  userId?:number
  cocktails?: Cocktail[]
  deliveryDate: Date
  users?: User
}

export type OrderSQLViewSpecific = {
  orderId:number | null
  userId: number
  cocktails
  deliveryDate: Date
  users:User
}