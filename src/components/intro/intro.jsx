import bigidea from "../../../public/big-idea.png";
import "./intro.scss";
import Rules from "../rules/rules";
import star3 from "../../../public/star-3.png";
import star4 from "../../../public/star-4.png";
import flare4 from "../../../public/guildlines-flare.png";
import flare3 from "../../../public/Purple-Lens-Flare-PNG3.png";
import arrow1 from "../../../public/arrow-1.png";

export default function Intro() {
    return (
        <div className="container">
            <div className="flare3">
                <img src={flare3} alt="" />
            </div>
            <div className="flare4">
                <img src={flare4} alt="" />
            </div>
            <section className="intro">
                <div className="star3">
                    <img src={star3} alt="" />
                </div>
                <div className="star4">
                    <img src={star4} alt="" />
                </div>
                <div className="arrow1">
                    <img src={arrow1} alt="" />
                </div>
                <div className="intro-wrapper">
                    <div className="big-idea">
                        <img src={bigidea} alt="" />
                    </div>
                    <div className="intro-content">
                        <h3 className="intro-content__header">
                            Introduction to getlinked
                            <span className="green"><br></br>tech Hackathon 1.0</span>
                        </h3>
                        <p className="paragraphs intro-content__paragraph">
                            Our tech hackathon is a melting pot of visionaries, and its purpose is as
                            clear as day: to shape the future. Whether you're a coding genius, a
                            design maverick, or a concept wizard, you'll have the chance to transform
                            your ideas into reality. Solving real-world problems, pushing the boundaries
                            of technology, and creating solutions that can change the world,
                            that's what we're all about!
                        </p>
                    </div>
                </div>
            </section>
            <Rules />
        </div>

    )
} 