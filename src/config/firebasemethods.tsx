import { getDatabase, ref, set, onValue, push, get } from 'firebase/database';
import app from '../config/firebaseconfig';


const db = getDatabase(app);
export const sendData = (nodeName: string, data: any) => {

    data.id = push(ref(db, `${nodeName}`)).key;
    const reference = ref(db, `${nodeName}/${data.id}`);
    set(reference, data).then((res:any) => {
        console.log(res, "Response");

    }).catch((error:any) => {
        console.log(error);

    });
}
export const getData = (nodeName: string, id?: string) => {
    console.log(id,"Id");
    const reference = ref(db, `${nodeName}/${id ? id : ""}`);
    let records: any = [];
    return get(reference).then((res:any) => {
         if (id != undefined  )
             return res.val();
         else {
            res.forEach((dt:any) => {
                console.log(dt.val(), "dt data");
                console.log(dt.key, "dt key");
                let keyName = dt.key;
                let data = dt.val();
                records.push({ "key": keyName, "data": data });
            })
            return records;
        }
    })

}
