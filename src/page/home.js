import Features from "../components/features/features";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";

function Home(){
    return(
        <>
            <Header/>
            <main>
                <Hero/>
                <Features/>
            </main>
        </>
    )
}

export default Home