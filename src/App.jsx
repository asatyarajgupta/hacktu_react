import Homepage from "./components/Homepage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Backend from "./components/Backend.jsx";
import StayUpdated from "./components/StayUpdated.jsx";
import Quiz from "./components/quiz.jsx";

export default function App() {
    return(
        <>
            <BrowserRouter location={history.location}>
                <Routes>
                    <Route path={"/"} element={<Homepage />} />
                    <Route path={"/exam-devta"} element={<Backend />} />
                    <Route path={"/junior-devta"} element={<StayUpdated />} />
                    <Route path={"/senior-devta"} element={<StayUpdated />} />
                    <Route path={"/foundation-devta"} element={<StayUpdated />} />
                    <Route path={"/quiz"} element={<Quiz />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}