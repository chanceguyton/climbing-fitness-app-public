import React, {useRef} from "react"
import HeaderSection from "../sections/HeaderSection"
import VideoSection from "../sections/VideoSection"
import TestSection from "../sections/TestSection"
import ResultsSection from "../sections/ResultsSection"
import FooterSection from "../sections/FooterSection"


function Home(){
    const testRef = useRef(null);

    const handleTakeTestClick = () => {
        testRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <HeaderSection onTakeTestClick={handleTakeTestClick}/>
            <VideoSection/>
            <div ref={testRef}>
                <TestSection/>
            </div>
            <ResultsSection/>
            <FooterSection/>
            
        </div>
    );
}

export default Home;