import cwok from "../../../public/cwok_casual_21.png";
import "./questions.scss";
import star7 from "../../../public/star-3.png";
import star8 from "../../../public/star-4.png";
import star9 from "../../../public/star-1.png";
import star10 from "../../../public/star-2.png"


export default function Question() {
    return (
        <section className="questions">
            
            <div className="question-wrapper">
                <div className="question-content">
                    <h3 className="sub-header question-content__header">
                        Frequently Ask<br></br><span className="green">Question</span>
                    </h3>
                    <p className="paragraphs question-content__paragraph">
                        We got answers to the questions that you might
                        want to ask about getlinked Hackathon 1.0
                    </p>
                    <div className="question-content__info">
                        <div className="question-content__info__container">
                            <p className="paragraphs">
                                Can I work on a project I started before the hackathon?
                            </p>
                            <span className="green">+</span>
                        </div>
                        <div className="question-content__info__container">
                            <p className="paragraphs">
                                What happens if I need help during the hackathon?
                            </p>
                            <span className="green">+</span>
                        </div>
                        <div className="question-content__info__container">
                            <p className="paragraphs">
                                What happens if I don't have an idea for a project?
                            </p>
                            <span className="green">+</span>
                        </div>
                        <div className="question-content__info__container">
                            <p className="paragraphs">
                                Can I join a team or do I have to come with one?
                            </p>
                            <span className="green">+</span>
                        </div>
                        <div className="question-content__info__container">
                            <p className="paragraphs">
                                What happens after the hackathon ends
                            </p>
                            <span className="green">+</span>
                        </div>
                        <div className="question-content__info__container">
                            <p className="paragraphs">
                                Can I work on a project I started before the hackathon?
                            </p>
                            <span className="green">+</span>
                        </div>
                    </div>
                </div>
                <div className="question-image">
                    <img src={cwok} alt="" />
                </div>
            </div>
        </section>
    )
}