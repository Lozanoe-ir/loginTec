import {pool} from "../../database/config/config"
import {NextApiRequest, NextApiResponse} from 'next';
import {hashing} from "../api/hash";
import { runInNewContext } from 'vm';

export default async function hello(req:NextApiRequest,res:NextApiResponse){
  switch(req.method){
      case 'GET':{
          const [t] = await pool.query("SELECT * FROM users");
          console.log("response: ",t);
          return res.status(200).json("RESPONSE GET");
      }
      case 'POST':{
         const {user,hash}= req.body;
         console.log(req.body);
         const final_Hash = hashing(user,hash);
        console.log(final_Hash);
         try{
             
             const [result] = await pool.query("SELECT user_name, hash FROM users WHERE user_name=? AND hash=?",[user,final_Hash]);
             console.log("RESULTADO:",result);
             
             if(result[0] == null){
                return res.json({message:"Password o Usuario incorrecto",status:"false"});
             }else{
                return res.json({message:"welcome",status:"true"});
             }
            }catch(e){
             console.log(e);
             return res.status(405).json({message:"Hubo algun problema"})
         }
      }
  }
}

