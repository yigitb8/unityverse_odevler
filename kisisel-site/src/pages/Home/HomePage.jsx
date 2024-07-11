import Navbar from '../../components/CommonComponents/Navbar';
import Info from '../../components/HomeComponents/Intro';
import Project from '../../components/HomeComponents/Project';
import Contact from '../../components/HomeComponents/Contact';


function HomePage() {
    return (
        <>
            <Navbar />
            <Info />
            <Project />
            <Contact />
        </>
    );
}

export default HomePage;