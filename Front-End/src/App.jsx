import { BrowserRouter } from "react-router-dom";
import MultiLayerParallax from "./components/miltilayerParallax";

import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Footer,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
} from "./components";



const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 w-full">
                <MultiLayerParallax />
                <div className="relative bg-no-repeat bg-center">
                    <Navbar />
                    <About />
                    <Experience />
                    <Works />
                    <Feedbacks />
                    <div className="relative z-0 bg-[#050816]">
                        <Contact />
                        <Footer />
                        <StarsCanvas />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
