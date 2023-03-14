import { Events } from "../domain/model/Events";
import eventDB from "../domain/data-access/events.db";
import { EventInput } from "../types/types";
import { User } from "../domain/model/User"

const getAllEvents = async (): Promise<Events[]> => eventDB.getAllEvents();

const getEventByID = async (id:number): Promise<Events> => {
    if(Number.isNaN(Number(id))){ throw new Error('Id is an invalid number'); }
    const event = await eventDB.getEventByID(id);
    if (!event){ throw new Error (`No sush event exists with ID ${id}`);}
    return event
};

const addEvent = async ({name,   address, date, duration, description,maxPart} : EventInput): Promise<Events> => {
    if(!name || name == ""){throw new Error ('Name is empty')}
    if(!address){throw new Error('Address is empty')}
    if(!date){throw new Error ('Date is empty')}
    if(!description){throw new Error ('Description is empty')}
    return await eventDB.addEvent({name,address,date,duration,description,maxPart});
};

const getParticipantsFromEventByID = async (id: number): Promise <User[]> =>{
    if(Number.isNaN(Number(id))){throw new Error('id is empty')}
    const list= await eventDB.getParticipantsFromEventByID(id);
    console.log(list)
    return list
}

const deleteEvent = async (id: number): Promise <void> => await eventDB.deleteEvent(id);

const UpdateEvent = async ({eventid,name,address,date,duration,description,maxPart,users}: EventInput):Promise<Events> => {
    if(Number.isNaN(Number(eventid))){throw new Error ('No valid ID')}
    if(!name || name == ""){throw new Error ('Name is empty')}
    if(!address){throw new Error('Address is empty')}
    if(!date){throw new Error ('Date is empty')}
    if(!description){throw new Error ('Description is empty')}
    return await eventDB.UpdateEvent({id:eventid,name,address,date,duration,description,maxPart, participants:users});
}

const addUserToEvent = async (userid: number, eventid:number): Promise <Events> => {
    if(Number.isNaN(Number(userid))){throw new Error('id is empty')}
    if(Number.isNaN(Number(eventid))){throw new Error('id is empty')}
    return await eventDB.addUserToEvent({eventid, userid});
}

export default {getAllEvents, getEventByID,addEvent,getParticipantsFromEventByID, deleteEvent, UpdateEvent, addUserToEvent}


