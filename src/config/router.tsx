import { BrowserRouter, Route, Routes } from "react-router-dom"
import AskQuestion from "../pages/askquestion"
import ShowAllQuestion from "../pages/showallquest"
import Answers from "../pages/answers"


const AppRouter =()=>{

    return <>
    <BrowserRouter>
        <Routes>
         <Route path="/" element={<ShowAllQuestion/>}/>
         <Route path='/askquestion' element={<AskQuestion/>}/>
         <Route path='/askquestion/:id' element={<AskQuestion/>}/> 
         <Route path='/showall' element={<ShowAllQuestion/>}/> 
         <Route path='/answers/:id' element={<Answers/>}/> 
        </Routes>
    </BrowserRouter>
    </>
}

export default AppRouter;