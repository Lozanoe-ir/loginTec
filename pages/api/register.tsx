import {pool} from "../../database/config/config"
import {NextApiRequest, NextApiResponse} from 'next';
import {hashing} from "../api/hash";
import { Switch } from "@headlessui/react";


export default async function singIn(req:NextApiRequest,res:NextApiResponse) {

    switch(req.method){
        case 'POST':{
            const {user,hash}= req.body;
            console.log(req.body);
            const final_Hash = hashing(user,hash);
           console.log(final_Hash);
            try{
                
                const [result] = await pool.query("INSERT INTO users (user_name,hash) VALUES(?,?)",[user,final_Hash]);
                console.log("RESULTADO:",result);
                
                
                   return res.json({message:"welcome",status:"true"});
                
               }catch(e){
                console.log(e);
                return res.json({message:"Usuario invalido",status:"false"})
            } 
        }
    }
    
}