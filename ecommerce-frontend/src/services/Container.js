import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Container = (props ) => {
    return (
<div>
    <Header />
    <TopBar />
    <Navbar />
    
    {props.children }

    <Footer />
    
</div>
    )
}

export default Container;