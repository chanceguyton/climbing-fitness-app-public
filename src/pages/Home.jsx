import React, {useRef} from "react"
import HeaderSection from "../sections/HeaderSection"
import VideoSection from "../sections/VideoSection"
import TestSection from "../sections/TestSection"
import ResultsSection from "../sections/ResultsSection"
import FooterSection from "../sections/FooterSection"


function Home(){
    const testRef = useRef(null);
    const resultsRef = useRef(null);

    const handleTakeTestClick = () => {
        testRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleScrollToResults = () => {
        const offset = 80; // adjust this for more space (try 80–120)
        const element = resultsRef.current;

        if (element) {
            const y = element.getBoundingClientRect().top + window.pageYOffset - offset;

             window.scrollTo({
                top: y,
                behavior: "smooth"
            });
        }   
    };

    return (
        <div>
            <HeaderSection onTakeTestClick={handleTakeTestClick}/>
            <VideoSection/>
            <div ref={testRef}>
                <TestSection onSubmitScroll={handleScrollToResults}/>
            </div>
            <div ref={resultsRef}>
                <ResultsSection onScrollToResults={handleScrollToResults}/>
            </div>
            <FooterSection/>
            
        </div>
    );
}

export default Home;
