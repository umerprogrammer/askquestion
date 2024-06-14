import { BrowserRouter, Route, Routes } from "react-router-dom"
import AskQuestion from "../pages/askquestion"
import ShowAllQuestion from "../pages/showallquest"


const AppRouter =()=>{

    return <>
    <BrowserRouter>
        <Routes>
         <Route path="/" element={<ShowAllQuestion/>}/>
         <Route path='/askquestion' element={<AskQuestion/>}/>
         <Route path='/askquestion/:id' element={<AskQuestion/>}/> 
        </Routes>
    </BrowserRouter>
    </>
}

export default AppRouter;