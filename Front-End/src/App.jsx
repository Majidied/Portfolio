import { BrowserRouter } from "react-router-dom";

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
            <div className="relative z-0 bg-violet-800 w-full">
                <div className="relative bg-no-repeat bg-center">
                        <Navbar />
                        <Hero />
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
