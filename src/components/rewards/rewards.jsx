import trophy from "../../../public/trophy.png";
import gold from "../../../public/gold_medal.png";
import silver from "../../../public/silver_medal.png";
import bronze from "../../../public/bronze_medal.png";
import flare4 from "../../../public/guildlines-flare.png";
import flare3 from "../../../public/Purple-Lens-Flare-PNG3.png";
import "./rewards.scss";

export default function Reward() {
    return (
        <div className="Reward-container" id="section2">
             <div className="rewaard-flare1">
                <img src={flare3} alt="" />
            </div>
            <div className="rewaard-flare2">
                <img src={flare4} alt="" />
            </div>
            <section className="rewards">
                <div className="rewards-wrapper">
                    <div className="rewards-image">
                        <img src={trophy} alt="" />
                    </div>

                    <div className="rewards-content">
                        <div className="rewards-content-top">
                            <h3 className="sub-header">Prizes and<br></br><span className="green">Rewards</span></h3>
                            <p className="paragraphs rewards-content-top__paragraph">Highlights 0f the prizes or rewards for winners and for participants.</p>
                        </div>
                        <div className="rewards-medals">
                            <div className="prizes">
                                <div className="prizes-image">
                                    <img src={silver} alt="" />
                                </div>
                                <p className="position">2nd</p>
                                <p className="runner">Runner</p>
                                <p className="prize">N300,000</p>
                            </div>
                            <div className="prizes">
                                <div className="prizes-image gold">
                                    <img src={gold} alt="" />
                                </div>
                                <p className="position">1st</p>
                                <p className="runner">Runner</p>
                                <p className="prize">N400,000</p>
                            </div>
                            <div className="prizes">
                                <div className="prizes-image">
                                    <img src={bronze} alt="" />
                                </div>
                                <p className="position">3nd</p>
                                <p className="runner">Runner</p>
                                <p className="prize">N150,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}