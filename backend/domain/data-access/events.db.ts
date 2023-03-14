import { Events } from '../model/Events';
import { User } from '../model/User';
import {mapToEvents} from './event.mapper';
import {mapToEvent} from './event.mapper';
import { PrismaClient } from "@prisma/client";
const database = new PrismaClient();

const getAllEvents = async (): Promise<Events[]> => {
    try {
        const eventPrisma = await database.events.findMany();
        console.log(eventPrisma)
        return mapToEvents(eventPrisma)
    } catch (error){
        console.error(error)
        throw new Error('Database error. See server logs for more details.')
    
    }
};

const getEventByID = async (id: number): Promise<Events> => {
    try{
        const eventPrisma= await database.events.findUnique({where:{eventid: id}});
        const list = mapToEvent(eventPrisma)
        console.log(list)
        return mapToEvent(eventPrisma)
    } catch(error){
        console.error(error)
        throw new Error ('Database error. see server log for more information');
    }
};

const addEvent = async ({
     name,
     address,
     date,
     duration,
     description,
     maxPart,
}:{
    name: string;
    address: string;
    date: Date;
    duration: Date;
    description:string
    maxPart: number;

}): Promise<Events> => {
    try {
        const eventPrisma= await database.events.create({
            data:{
                name,
                address,
                date,
                duration,
                description: description,
                maxUsers: maxPart,
             }
        })
        return mapToEvent(eventPrisma)
    }catch (error){
        console.error(error)
        throw new Error('Database error. see server log for more details')
    }
};

const getParticipantsFromEventByID = async (id: number): Promise<User[]> =>{
    
    try{
        const users=[] 
        const event= await getEventByID(id);
        console.log(event)
        
        for (const user in event.users){
            users.push(user)
        }
        console.log(users)  
        return users
    }catch(error){console.error(error)
    throw new Error ('Database error. See server details for more information');}
};

const deleteEvent = async  (id: number): Promise<void>  => {
    try{
        await database.events.delete({where: { eventid:id, }});
    }catch (error){
    throw new Error('Databank Error. See server log for more details')
  }
};

const UpdateEvent = async ({
    id,
    name,
    address,
    date,
    duration,
    description,
    maxPart,
    participants,
}:{
    id:number;
    name: string;
    address: string;
    date: Date;
    duration: Date;
    description:string
    maxPart: number;
    participants?;
}): Promise<Events> =>{
        try{
            const userPrisma= await database.events.update({
                where: {
                    eventid: id
                },
                data :{
                    name,
                    address,
                    date,
                    duration,
                    description,
                    users:participants,
                    maxUsers:maxPart,
                },
            });
            const event = mapToEvent(userPrisma)
            console.log(event)
            return mapToEvent(userPrisma)
        }catch(error){
            console.error(error);
            throw new Error('Database error. see server log for details.');
        }
}

const addUserToEvent = async ({
    eventid,
    userid,
}:{
    eventid:number;
    userid:number;

}): Promise<Events> =>{
        try{
            //const users= await getParticipantsFromEventByID(eventid);
            //users.push(user)
            const eventPrisma= await database.events.update({
                where: {
                    eventid: eventid
                },
                data :{
                    users:{connect: [{userid: userid }]},
                },
                include: {
                    users:true,
                },
            });
            const event = mapToEvent(eventPrisma)
            console.log(event)
            return mapToEvent(eventPrisma)
        }catch(error){
            console.error(error);
            throw new Error('Database error. see server log for details.');
        }
}
export default {getParticipantsFromEventByID, getEventByID,getAllEvents,addEvent,deleteEvent, UpdateEvent, addUserToEvent}
