import Homepage from "./components/Homepage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Backend from "./components/Backend.jsx";

export default function App() {
    return(
        <>
            <BrowserRouter location={history.location}>
                <Routes>
                    <Route path={"/"} element={<Homepage />} />
                    <Route path={"/exam-devta"} element={<Backend />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}