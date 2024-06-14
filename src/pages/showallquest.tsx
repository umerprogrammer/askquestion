import { useNavigate } from "react-router-dom";

export default function ShowAllQuestion() {
  const navigate = useNavigate();
  

  return (
    <>
      <div className="container mt-4">
        <div className="row p-2">
          <div className="col-md-12 d-flex justify-content-between align-items-center">
            <h4>Show All Questions:</h4>
            <button type="button" className="btn btn-sm btn-success" onClick={()=>{
              navigate('/askquestion')
            }}> Ask Question</button>
          </div>
        </div>

        <div className="row border rounded-2">
          <div className="row p-2">
            <div className="col-md-12 ">
                <div className="row">
                    <div className="col-md-12 d-flex gap-2">
                        <span>My Question</span>
                    </div>
            </div>
            </div>
            <div className="row mt-1">
                    <div className="col-md-12 d-flex gap-2">
                        <span>My Answer</span>
                    </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
