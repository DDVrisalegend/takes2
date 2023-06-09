import { User } from "../model/User"

export class Events{
    readonly eventid?:number;
    readonly name:string;
    readonly address:string;
    readonly date:Date;
    readonly duration:Date;
    readonly descirption: string;
    readonly users:User[];
    readonly maxPart?:number;

    constructor(events:{eventid?:number, name:string, address:string, date:Date, duration:Date,  description:string, users:User[], maxPart?:number}){
        this.eventid=events.eventid;
        this.name=events.name;
        this.address=events.address;
        this.date=events.date;
        this.duration=events.duration;
        this.descirption=events.description
        this.users=events.users;
        this.maxPart=events.maxPart;
    }
}