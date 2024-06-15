import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../config/firebasemethods";
import Questions from "../pages/questions";

export default function ShowAllQuestion() {
  const navigate = useNavigate();

  let question = {
    id: "",
    question: "",
    createdDateTime: (new Date()).toLocaleDateString(),
  };

  const [allQuestions, setAllQuestions] = useState<any>([]);

  const getAllQuestions = async () => {

   await getData("questions").then((res) => {
     // console.log(res, "get All");
      res.forEach((element: any) => {
        console.log(element,"elements");
        allQuestions.push(element);
      });
    }).catch((error) => {
      console.log(error);

    });
    setAllQuestions([...allQuestions]);
  //  console.log(allQuestions, "Get All Questions");

  };


  useEffect(() => {
    getAllQuestions();
    //console.log(allQuestions,"get DAtassss");
    
  }, [])

  return (
    <>
      <div className="container mt-4">
        <div className="row p-2">
          <div className="col-md-12 d-flex justify-content-between align-items-center">
            <h4>Show All Questions:</h4>
            <button type="button" className="btn btn-sm btn-success" onClick={() => {
              navigate('/askquestion')
            }}> Ask Question</button>
          </div>
        </div>
         {
            
          allQuestions?.map((x: any, i: any) => {
             return <Questions key={i} question={x.data.question} answer={x.key} keyId={x.key} />
          })
         } 
      </div>
    </>
  );
}
