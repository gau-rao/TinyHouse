import { MongoClient } from "mongodb";
import {Database, Booking ,User, Listing} from "../lib/types";
const url= "mongodb+srv://user_001:syAiicqj9d6dQkus@cluster0.laks5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
export const connectDatabase  = async (): Promise<Database> =>  {
    const client = await MongoClient.connect(url,{useNewUrlParser : true, useUnifiedTopology: true });
    const db = client.db("main");

    return {
        bookings : db.collection<Booking>("bookings"),
        listings: db.collection<Listing>("listings"),
        users : db.collection<User>("users") 
     };
}; 
