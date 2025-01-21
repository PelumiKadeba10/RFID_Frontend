import Navbar from '../components/navbar'
import Hero from '../components/hero';
import Footer from '../components/footer'
import Upload from '../components/upload';

function Home(){
    return(
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <Upload></Upload>
            <Footer></Footer>
        </>
    );
}

export default Home