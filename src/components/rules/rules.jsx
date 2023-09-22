import rules from "../../../public/rules.png"
import "./rules.scss";
import star5 from "../../../public/star-1.png";
import star6 from "../../../public/star-2.png";

export default function Rules() {
    return (
        <section className="rules">
            <div className="star-5">
                <img src={star5} alt="" />
            </div>
            <div className="star6">
                <img src={star6} alt="" />
            </div>
           
            <div className="rules-wrapper">

                <div className="rules-content">
                    <h3 className="sub-header rules-content__header">
                        Rules and <br></br><span className="green">Guidelines</span>
                    </h3>

                    <p className="paragraphs rules-paragraph">
                        Our tech hackathon is a melting pot of visionaries, and its purpose is as
                        clear as day: to shape the future. Whether you're a coding genius, a
                        design maverick, or a concept wizard, you'll have the chance to transform
                        your ideas into reality. Solving real-world problems, pushing the boundaries
                        of technology, and creating solutions that can change the world,
                        that's what we're all about!
                    </p>
                </div>
                <div className="rules-image">
                    <img src={rules} alt="" />
                </div>
            </div>
        </section>
    )
}