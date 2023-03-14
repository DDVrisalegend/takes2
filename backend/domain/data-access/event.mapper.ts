import {UserInput, EventPrisma} from "../../types/types"
import { mapToUsers } from "./user.mapper";
import { Events } from "../model/Events";


export const mapToEvents = (EventInput: (EventPrisma & {users?: UserInput[]} )[]): Events[] => EventInput.map(mapToEvent);

//export const mapToEvent = ({eventid, name, address, date, duration,description, users, maxPart}: EventInput): Events =>
//    new Events({eventid, name, address, date, duration,description, users: mapToUsers(users), maxPart});

export const mapToEvent = ({eventid, name, address, date, duration,description, users, maxPart,}: EventPrisma & {users?: UserInput[]}): Events =>
    new Events({eventid, name, address, date, duration,description, users: mapToUsers(users), maxPart});

export default {mapToEvents, mapToEvent}