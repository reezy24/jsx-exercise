import React from "react"
import Nav from "./Nav"
import AboutMePoint from "./AboutMePoint"
import FavouriteFood from "./FavouriteFood"
import Section from "./Section"

class App extends React.Component {
    render() {
        return (
            <>
                <header>
                    <h1>Welcome To Sandras Profile Page</h1>
                    <Nav />
                </header>
                <Section id="about-me" title="About Me">
                    <img src="https://randomuser.me/api/portraits/women/8.jpg" />
                    <article>
                        <ol>
                            <AboutMePoint 
                                firstWord="Pop" 
                                remainingText="culture maven. Beer fan. Award-winning music junkie. Extreme coffee enthusiast. Thinker. Tv specialist." 
                            />
                            <AboutMePoint 
                                firstWord="Friendly" 
                                remainingText="web maven. Bacon lover. General internet specialist. Incurable travel scholar." 
                            />
                            <AboutMePoint 
                                firstWord="Subtly" 
                                remainingText="charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar." 
                            />
                            <AboutMePoint 
                                firstWord="Unable" 
                                remainingText="to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja. Beer specialist." 
                            />
                        </ol>
                    </article>
                </Section>
                <Section id="fav-foods" title="Favourite Foods">
                    <FavouriteFood
                        food="Pizza"
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcGaF_Dh5qp1JEOUMjIX4eiPGoG5CyWDnhwTHsSExkXm9BbJ6-"
                        time="All the time"
                        place="Queen Margharitas"
                    />
                    <FavouriteFood
                        food="Quesadillas"
                        img="https://bit.ly/2ryI6bZ"
                        time="Afternoon Siesta"
                        place="Mejico"
                    />
                    <FavouriteFood
                        food="Icecream Pancakes"
                        img="https://bit.ly/2zUznp2"
                        time="Breaky"
                        place="Pancakes on the Rocks"
                    />
                    <FavouriteFood
                        food="Loaded Fries"
                        img="https://bit.ly/2GdfYVK"
                        time="During the game"
                        place="My House"
                    />
                </Section>
                <section id="contact">
                    <h2>Contact Details</h2>
                    <p>
                        <b>Phone:</b> <i>+12345678</i>
                    </p>
                    <p>
                        <b>Email:</b> <i>thatsme@test.com</i>
                    </p>
                    <p>
                        <b>Twitter:</b> <i>#superfun</i>
                    </p>
                </section>
                <footer>
                    <h5>Thanks for visiting my profile. Hope to here from you soon!</h5>
                </footer>
            </>
        )
    }
}

export default App