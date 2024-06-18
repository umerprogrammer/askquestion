import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../config/firebasemethods";

export default function Answers(){

    const {id } = useParams();
    let questObject = {
        question: "",
        createdDateTime: (new Date()).toLocaleDateString() ,
      };

    const [question,setQuestion] = useState(questObject);
    const getQuestion = async () => {

        await getData("questions",id).then((res:any) => {
             console.log(res,"Single elements");
             setQuestion(res)
         }).catch((error:any) => {
           console.log(error);
         });
       };

       useEffect(()=>{
        getQuestion();
        console.log(question,"Answer");
        
       },[])
    return <> <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    <span>
                        {question.question}
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <span>
                        answer
                    </span>
                </div>
            </div>
        </div>
    </>
}