import Navbar from "../navbar/navbar";
import "./hero.scss";
import oribit from "../../../public/orbit.png";
import firstflare from "../../../public/Purple-Lens-Flare-PNG.png";
import secondflare from "../../../public/Purple-Lens-Flare-PNG-2.png";
import metrix from "../../../public/metrix.png"
import man from "../../../public/man-md.png";
import star1 from "../../../public/star-1.png";
import star2 from "../../../public/star-2.png";
import creative from "../../../public/creative1.png";
import chain from "../../../public/chain.png";
import explotion from "../../../public/ex.png"

export default function Hero() {
    return (
        <div className="hero-container">
            <Navbar />
            <div className="purple-lense-flare1">
                <img src={firstflare} alt="" />
            </div>
            <div className="metrix">
                <img src={metrix} alt="" />
            </div>
            <div className="purple-lense-flare2">
                <img src={secondflare} alt="" />
            </div>
            <div className="model">
                <img src={man} alt="" />
            </div>
            <div className="orbit">
                <img src={oribit} alt="" />
            </div>
            <div className="star1">
                <img src={star1} alt="" />
            </div>
            <div className="star2">
                <img src={star2} alt="" />
            </div>
            <div className="star3">
                <img src={star2} alt="" />
            </div>
            <div className="creative">
                <img src={creative} alt="" />
            </div>
            <main className="hero">
                <div className="hero-content">
                    <h1 className="hero-content__header">
                        getlinked Tech
                    </h1>
                    <div className="flex">
                        <h1 className="hero-content__header">
                            Hackathon <span className="green">1.0</span>
                        </h1>
                        <div className="chain">
                            <img src={chain} alt="" />
                        </div>
                        <div className="ex">
                            <img src={explotion} alt="" />
                        </div>
                    </div>

                    <p className="hero-content__paragraph">
                        Participate in getlinked tech Hackathon 2023 stand
                        a chance to win a Big prize
                    </p>
                    <button className="hero-content__btn">
                        Register
                    </button>


                    <p className="hero-content__countdown">00<span className="subscript">H</span> 00<span className="subscript">M</span> 00<span className="subscript">S</span></p>

                </div>

                <div className="right-hero__content">
                    <h2 className="right-hero__content-header">Igniting a Revolution in HR Innovation</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="255" height="17" viewBox="0 0 255 17" fill="none" className="underline">
                        <path d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043" stroke="#FF26B9" stroke-width="5" />
                    </svg>
                </div>
            </main>
            <div className="hero-line"></div>
        </div>

    )
}