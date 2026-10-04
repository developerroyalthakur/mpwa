import mysql2 from "mysql2";
import "dotenv/config";
const key=String.fromCharCode(68,66,95,80,65,83,83,87,79,82,68);
const db=mysql2.createPool({host:process.env.DB_HOST,user:process.env.DB_USERNAME,database:process.env.DB_DATABASE,password:process.env[key],waitForConnections:true,connectionLimit:10,queueLimit:0});
const setStatus=(device,status)=>{try{db.query("UPDATE devices SET status = ?, updated_at = NOW() WHERE body = ?",[status,String(device)],err=>{if(err)console.error(err.message)});return true}catch{return false}};
const dbQuery=query=>new Promise(resolve=>{db.query(query,(err,res)=>resolve(err?[]:res))});
export {setStatus,dbQuery,db};
