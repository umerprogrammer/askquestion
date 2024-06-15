import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData, sendData } from "../config/firebasemethods";
import { json } from "stream/consumers";

export default function AskQuestion() {
  const navigate = useNavigate();
  const { id } = useParams();


  let questObject = {
    question: "",
    createdDateTime: (new Date()).toLocaleDateString() ,
  };
  const [question, setQuestion] = useState(questObject);
  const getAllQuestions = async () => {

    await getData("questions",id).then((res) => {
      // console.log(res, "get All");
         console.log(res,"Single elements");
         setQuestion(res)
     }).catch((error) => {
       console.log(error);
 
     });
     
 
   };

   useEffect(()=>{
    getAllQuestions();
   },[])
  return (
    <>
      <div className="container mt-4 ">
        <div className="row w-100">
          <div className="col-md-6">
            <div className="d-flex flex-column">
              <span className="fw-bold">Question :</span>
              <textarea value={question.question} onChange={(e)=>{
                setQuestion({...question ,question:e.target.value})
                console.log(question,"QuestLog");
                
              }} cols={30} rows={5} className="p-2"></textarea>
            </div>
          </div>
          <div className="row w-100 mt-4">
            <div className="col-md-6">
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-success "
                  onClick={() => {
                    sendData("questions",question );
                    navigate("/showall")                    
                  }}
                >
                  Send
                </button>
                <button type="button" className="btn btn-sm btn-danger">
                  Clear
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Show All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
