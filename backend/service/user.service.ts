import { User } from "../domain/model/User";
import userDB from "../domain/data-access/user.db";
import { UserInput, UserSQLUnique } from "../types/types";

const getAllUsers = async (): Promise<User[]> =>{
    const userlist=  await userDB.getAllUsers();
    //console.log(userlist)// dit werkt ook
    return userlist
}

const getUserByID = async (id:number): Promise<User> => {
    if(Number.isNaN(Number(id))){ throw new Error('Id is an invalid number'); }
    const user = await userDB.getUserByID(id);
    if (!user){ throw new Error (`No sush user exists with ID ${id}`);}
    return user
};

const addUser = async ({name,  telNr,   mail, password,}: UserSQLUnique): Promise<User> => {
    if(!name || name ==""){throw new Error('Name is empty')}
    if(!telNr){throw new Error('Telnr is empty or Invalid')}
    if(!mail || mail ==""){throw new Error('mail is empty or invalid')}
    if(!password || password ==""){throw new Error('password is empty')}
    const user= await userDB.addUser({name, telNr,mail,password});
    console.log(user)
    return user
};

const deleteUser = async (id: number): Promise<void> => {
    if(Number.isNaN(Number(id))){throw new Error('Id is empty')}
    await userDB.deleteUser(id)
}

const updateUser = async ({userid, name,  telNr,   mail, password, role}: UserInput): Promise<User> => {
    //if(!userid){throw new Error ("ID is invalid or does not exist")}
    if(!name || name ==""){throw new Error('Name is empty')}
    if(!telNr){throw new Error('Telnr is empty or Invalid')}
    if(!mail || mail ==""){throw new Error('mail is empty or invalid')}
    if(!password || password ==""){throw new Error('password is empty')}
    const user= await userDB.updateUser({id: userid, name, telNr,mail,password, role});
    console.log(user)
    return user
};

export default{getAllUsers, getUserByID, addUser, deleteUser, updateUser}