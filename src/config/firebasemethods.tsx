import { getDatabase, ref, set, onValue, push, get } from 'firebase/database';
import app from '../config/firebaseconfig';


const db = getDatabase(app);
export const sendData = (nodeName: string, data: any) => {

    data.id = push(ref(db, `${nodeName}`)).key;
    const reference = ref(db, `${nodeName}/${data.id}`);
    set(reference, data).then((res) => {
        console.log(res, "Response");

    }).catch((error) => {
        console.log(error);

    });
}
export const getData = (nodeName: string, id?: string) => {
    console.log(id,"seeeeeee");
    
    const reference = ref(db, `${nodeName}/${id ? id : ""}`);
    let records: any = [];
    return get(reference).then((res) => {
         if (id != undefined  )
             return res.val();
         else {
            res.forEach((dt) => {
                console.log(dt.val(), "dt data");
                console.log(dt.key, "dt key");
                let keyName = dt.key;
                let data = dt.val();
                records.push({ "key": keyName, "data": data });
            })
            return records;
        }
    })

    // return onValue(reference,(res)=> res.val());
    // console.log(res.val(),"Get Data");
    // let records:any = [];
    // res.forEach((dt)=>{
    //     console.log(dt.val(),"dt data");
    //     console.log(dt.key,"dt key");
    //     let keyName = dt.key;
    //     let data = dt.val();
    //     records.push({"key":keyName,"data":data});
    // })
    // console.log(records,"Get Reords");
    //// return records;

}
