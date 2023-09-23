import criteria from "../../../public/criteria.png";
import Question from "../questions/questions";
import citeriaFlare1 from "../../../public/criteria-flare-1.png"
import citeriaFlare2 from "../../../public/citeriaflare-2.png"
import "./criteria.scss";

export default function Criteria() {
    return (
        <div className="criteria-container">
            <div className="c-f-1">
                <img src={citeriaFlare1} alt="" />
            </div>
            <div className="c-f-2">
                <img src={citeriaFlare2} alt="" />
            </div>
            <section className="criteria">
                <div className="criteria-wrapper">
                    <div className="criteria-image">
                        <img src={criteria} alt="" />
                    </div>
                    <div className="criteria-content">
                        <h3 className="sub-header criteria-content__header">
                            Judging Criteria <br></br><span className="green">Key attributes</span>
                        </h3>
                        <p className="paragraphs criteria-content-paragraphs">
                            <span className="green" style={{ fontWeight: "700" }}>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                            solution. Consider whether it addresses a real-world problem in a novel
                            way or introduces innovative features.
                        </p>
                        <p className="paragraphs criteria-content-paragraphs">
                            <span className="green" style={{ fontWeight: "700" }}>Functionality:</span> Assess how well the solution works. Does it perform its
                            intended functions effectively and without major issues? Judges would
                            consider the completeness and robustness of the solution.
                        </p>
                        <p className="paragraphs criteria-content-paragraphs">
                            <span className="green" style={{ fontWeight: "700" }}>Impact and Relevance:</span> Determine the potential impact of the solution
                            in the real world. Does it address a significant problem, and is it relevant
                            to the target audience? Judges would assess the potential social,
                            economic, or environmental benefits.
                        </p>
                        <p className="paragraphs criteria-content-paragraphs">
                            <span className="green" style={{ fontWeight: "700" }}>Technical Complexity:</span> Evaluate the technical sophistication of the solution.
                            Judges would consider the complexity of the code, the use of advanced
                            technologies or algorithms, and the scalability of the solution.
                        </p>
                        <p className="paragraphs criteria-content-paragraphs">
                            <span className="green" style={{ fontWeight: "700" }}>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered
                            to the rules and guidelines of the hackathon, including deadlines, use of
                            specific technologies or APIs, and any other competition-specific requirements.
                        </p>
                        <button>Read More</button>
                    </div>
                </div>
            </section>
            <Question />
        </div>

    )
}