import winwise from "../../../public/wiswise.png";
import wisper from "../../../public/wisper.png";
import liberty from "../../../public/Liberty1.png"
import liberty2 from "../../../public/Liberty2.png";
import paybox from "../../../public/paybox.png"
import visualplus from "../../../public/vizual-plus.png"
import PartnersFlare from "../../../public/partners-flare.png";
import PartnersFlare2 from "../../../public/partners-flare2.png";
import "./partners.scss";
import Policy from "../policy/policy";

export default function Partners() {
    return (
        <div className="partners-container">
            <div className="partners-flare">
                <img src={PartnersFlare} alt="" />
            </div>
            <div className="partners-flare2">
                <img src={PartnersFlare2} alt="" />
            </div>
            <section className="partners">
                <div className="partners-wrapper">
                    <div className="partners-top">
                        <h3 className="sub-header">
                            Partners and Sponsors
                        </h3>
                        <p className="paragraphs partners-top__paragraph">
                            Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
                        </p>
                    </div>
                    <div className="bottom">
                        <div className="col1">
                            <div className="logo-warpper">
                                <div className="logo1">
                                    <img src={liberty2} alt="" />
                                </div>
                                <div className="hspacer"></div>
                            </div>
                            <div className="spacer"></div>
                            <div className="logo-warpper">
                                <div className="logo2">
                                    <img src={wisper} alt="" />
                                </div>
                                <div className="hspacer2"></div>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="logo-warpper">
                                <div className="logo3">
                                    <img src={liberty} alt="" />
                                </div>
                                <div className="hspacer"></div>
                            </div>
                            <div className="spacer" ></div>
                            <div className="logo-warpper">
                                <div className="logo4">
                                    <img src={paybox} alt="" />
                                </div>
                                <div className="hspacer2"></div>
                            </div>
                        </div>
                        <div className="col3">
                            <div className="logo-warpper">
                                <div className="logo5">
                                    <img src={winwise} alt="" />
                                </div>
                            </div>
                            <div className="spacer" ></div>
                            <div className="logo-warpper">
                                <div className="logo6">
                                    <img src={visualplus} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Policy />
        </div>

    )
}