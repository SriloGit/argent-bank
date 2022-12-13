import Features from "../components/features/features";
import Header from "../components/header/header";
import Hero from "../components/hero/hero";

function Home(){
    return(
        <div>
            <Header/>
            <main>
                <Hero/>
                <Features/>
            </main>
        </div>
    )
}

export default Home