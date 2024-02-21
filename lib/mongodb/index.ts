import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI;

let catched = (global as any).mongoose || {conn : null , promise:null}

export const connectToDatabase = async () =>{

    if(catched.conn) return catched.conn
    if(!MONGODB_URI)throw new Error('MONGODB_URI is missing');

    catched.promise = catched.promise || mongoose.connect(MONGODB_URI , {
        dbName:'evently',
        bufferCommands:false,
    })

    catched.conn = await catched.promise ;

    return catched.conn;
}

//server actions 
//connectTODatabse() ...