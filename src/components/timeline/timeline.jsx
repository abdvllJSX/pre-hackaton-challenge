import "./timeline.scss";

export default function Timeline() {
    return (
        <section className="timeline" id="section1">
            <div className="timeline-wrapper">
                <div className="timeline-header">
                    <h3 className="sub-header">
                        Timeline
                    </h3>
                    <p className="paragraphs timeline-header__paragraph">
                        Here is the breakdown of the time we anticipate
                        using for the upcoming event.
                    </p>
                </div>
                <div className="timeline-content__wrapper">
                    <div className="timeline-content__container">
                        <div className="timeline-content__container__left">
                            <h3 className="sub-header green timeline-content__container__left__header" ><span className="green">Hackathon Announcement</span></h3>
                            <p className="pargaraphs timeline-content__container__left__paragraph">The getlinked tech hackathon 1.0 is formally announced
                                to the general public and teams begin to get ready to register</p>
                        </div>
                        <div className="timeline-content__container__center">
                            <div className="line first"></div>
                            <div className="circle big">1</div>
                        </div>
                        <div className="timeline-content__container__right">
                            <h3 className="sub-header timeline-content__container__right__header"> <span className="green">November 18, 2023</span></h3>
                        </div>
                    </div>
                    <div className="timeline-content__container">
                        <div className="timeline-content__container__left">
                            <h3 className="sub-header green timeline-content__container__left__header" ><span className="green">November 18, 2023</span></h3>
                        </div>
                        <div className="timeline-content__container__center">
                            <div className="line"></div>
                            <div className="circle">2</div>
                        </div>
                        <div className="timeline-content__container__right">
                            <h3 className="sub-header timeline-content__container__right__header"> <span className="green">Teams Registration begins</span></h3>
                            <p className="pargaraphs timeline-content__container__right__paragraph">Interested teams can now show their interest in the
                                getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                        </div>
                    </div>
                    <div className="timeline-content__container">
                        <div className="timeline-content__container__left">
                            <h3 className="sub-header green timeline-content__container__left__header" ><span className="green">Teams Registration ends</span></h3>
                            <p className="pargaraphs timeline-content__container__left__paragraph">Interested Participants are no longer Allowed to
                                register</p>
                        </div>
                        <div className="timeline-content__container__center">
                            <div className="line"></div>
                            <div className="circle">3</div>
                        </div>
                        <div className="timeline-content__container__right">
                            <h3 className="sub-header timeline-content__container__right__header"> <span className="green">November 18, 2023</span></h3>
                        </div>
                    </div>
                    <div className="timeline-content__container">
                        <div className="timeline-content__container__left">
                            <h3 className="sub-header green timeline-content__container__left__header" ><span className="green">November 18, 2023</span></h3>

                        </div>
                        <div className="timeline-content__container__center">
                            <div className="line"></div>
                            <div className="circle">4</div>
                        </div>
                        <div className="timeline-content__container__right">
                            <h3 className="sub-header timeline-content__container__right__header"> <span className="green">Announcement of the accepted teams
                                and ideas</span></h3>
                            <p className="pargaraphs timeline-content__container__right__paragraph">All teams whom idea has been accepted into getlinked tech
                                hackathon 1.0 2023 are formally announced</p>
                        </div>
                    </div>
                    <div className="timeline-content__container">
                        <div className="timeline-content__container__left">
                            <h3 className="sub-header green timeline-content__container__left__header"><span className="green">Getlinked Hackathon 1.0 Offically Begins</span></h3>
                            <p className="pargaraphs timeline-content__container__left__paragraph">Accepted teams can now proceed to build their
                                ground breaking skill driven solutions</p>
                        </div>
                        <div className="timeline-content__container__center">
                            <div className="line"></div>
                            <div className="circle">5</div>
                        </div>
                        <div className="timeline-content__container__right">
                            <h3 className="sub-header timeline-content__container__right__header"> <span className="green">November 18, 2023</span></h3>
                        </div>
                    </div>
                    <div className="timeline-content__container">
                        <div className="timeline-content__container__left">
                            <h3 className="sub-header green timeline-content__container__left__header" ><span className="green">November 18, 2023</span></h3>
                        </div>
                        <div className="timeline-content__container__center">
                            <div className="line"></div>
                            <div className="circle">6</div>
                        </div>
                        <div className="timeline-content__container__right">
                            <h3 className="sub-header timeline-content__container__right__header"> <span className="green">Demo Day</span></h3>
                            <p className="pargaraphs timeline-content__container__right__paragraph">Teams get the opportunity to pitch their projects to judges.
                                The winner of the hackathon will also be announced on
                                this day</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}