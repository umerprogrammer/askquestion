import {getDatabase,ref,set,onValue,get} from 'firebase/database';
import app from '../config/firebaseconfig';



export const sendData = (nodeName:string,data:any)=>{
    const db = getDatabase(app);
    console.log(data,"send Data");
    
    const reference = ref(db,`${nodeName}`);
    set(reference,{ 
        "lambeosaurus": {
          "dimensions": {
            "height" : 2.1,
            "length" : 12.5,
            "weight": 5000
          }
        }}).then((res)=>{
        console.log(res,"Response");
        
    }).catch((error)=>{
        console.log(error);
        
    });
}

export const getData = (nodeName:string,id?:string) => {
    const db = getDatabase(app);
    const reference = ref(db,`${nodeName}/${id ? id : ""}`);
    onValue(reference,(dt)=>{
        console.log(dt);
        
    })
}