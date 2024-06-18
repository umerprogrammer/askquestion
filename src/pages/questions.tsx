import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendData } from "../config/firebasemethods";
import { json } from "stream/consumers";
import { IconButton } from "@mui/material";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import DeleteIcon from "@mui/icons-material/Delete";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

export default function Questions(props: {
  question: string;
  answer: string;
  keyId: string;
}) {
  const navigate = useNavigate();
  const { question, answer, keyId } = props;


  return (
    <div className="row border rounded-2 mt-2">
      <div className="row p-2">
        <div className="col-md-12 d-flex gap-2">
          <span>{question}</span>
        </div>
        <div className="row mt-1">
          <div className="col-md-12 d-flex gap-2">
            {/* <span>{answer}</span> */}
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-md-12 d-flex gap-2">
            <IconButton
              aria-label="delete"
              onClick={() => {
                navigate(`/askquestion/${keyId}`);
              }}
            >
              <EditCalendarIcon style={{ fontSize: "17px" }} />
            </IconButton>
            <IconButton
              aria-label="answer"
              onClick={() => {
                navigate(`/answer/${keyId}`);
              }}
            >
              <QuestionAnswerIcon style={{ fontSize: "17px" }} />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon style={{ fontSize: "17px" }} />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
