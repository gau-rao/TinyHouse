require("dotenv").config();
 import {connectDatabase } from '../src/database';

 const clear = async () => {
    try {
       console.log('[seed] : running...');
       const db = await connectDatabase();
       const bookings = await db.bookings.find({}).toArray();
       const listings = await db.bookings.find({}).toArray();
       const users = await db.bookings.find({}).toArray();

        if(bookings.length > 0){
            await db.bookings.drop();
        }


        if(listings.length > 0){
            await db.listings.drop();
        }
        
        if(users.length > 0){
            await db.users.drop();
        }
        
console.log("[seed] : success");
} catch {
   throw new Error("failed to delete database");

}
};

clear(); 
