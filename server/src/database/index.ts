import { MongoClient } from "mongodb";
import {Database} from "../lib/types";
const url= "mongodb+srv://user_001:FJ8S0qVEFCONOs8r@cluster0.laks5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
export const connectDatabase  = async (): Promise<Database> =>  {
    const client = await MongoClient.connect(url,{useNewUrlParser : true, useUnifiedTopology: true });
    const db = client.db("main");

    return {
        listings: db.collection("test_listings") 
    };
}; 
