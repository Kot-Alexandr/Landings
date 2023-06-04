import Comments from "./Comments/Comments"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import LatestWork from "./LatestWork/LatestWork"
import Services from "./Services/Services"
import Team from "./Team/Team"
import WeAre from "./WeAre/WeAre"

const CreativeStudio = () => {
    return <div>
        <Header />
        <WeAre />
        <Services />
        <LatestWork />
        <Team />
        <Comments />
        <Contact />
        <Footer />
    </div>
}

export default CreativeStudio