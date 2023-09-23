import "./timeline.scss";

export default function Timeline() {
    return (
        <section className="timeline">
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
                <div className="timeline-content">
                    <div className="timeline-content__left">
                        <div className="timeline-content__left__text text-1">
                            <h4 className="timeline-content__left__text__header">
                                <span className="green">Hackathon Announcement</span>
                            </h4>
                            <p className="paragraphs timeline-content__left__text__paragraph">The getlinked tech hackathon 1.0 is formally announced
                                to the general public and teams begin to get ready to register</p>
                        </div>
                        <div className="timeline-content__left__text text-2">
                            <h4 className="timeline-content__left__text__header">
                                <span className="green">November 18, 2023</span>
                            </h4>
                        </div>
                        <div className="timeline-content__left__text text-3">
                            <h4 className="timeline-content__left__text__header">
                                <span className="green">Teams Registration ends</span>
                            </h4>
                            <p className="paragraphs timeline-content__left__text__paragraph">Interested Participants are no longer Allowed to
                                register</p>
                        </div>
                        <div className="timeline-content__left__text text-4">
                            <h4 className="timeline-content__left__text__header">
                                <span className="green">November 18, 2023</span>
                            </h4>
                        </div>
                        <div className="timeline-content__left__text text-5">
                            <h4 className="timeline-content__left__text__header">
                                <span className="green">Getlinked Hackathon 1.0 Offically Begins</span>
                            </h4>
                            <p className="paragraphs timeline-content__left__text__paragraph">Accepted teams can now proceed to build their
                                ground breaking skill driven solutions</p>
                        </div>
                        <div className="timeline-content__left__text text-6">
                            <h4 className="timeline-content__left__text__header">
                                <span className="green">November 18, 2023</span>
                            </h4>
                        </div>
                    </div>

                    <div className="timeline-content__center">
                        <div className="line"></div>
                        <div className="circle">1</div>
                        <div className="line"></div>
                        <div className="circle">2</div>
                        <div className="line"></div>
                        <div className="circle">3</div>
                        <div className="line"></div>
                        <div className="circle">4</div>
                        <div className="line"></div>
                        <div className="circle">5</div>
                        <div className="line"></div>
                        <div className="circle">6</div>
                    </div>

                    <div className="timeline-content__right">
                        <div className="timeline-content__right__text text-7">
                            <h4 className="timeline-content__right__text__header">
                                <span className="green">November 18, 2023</span>
                            </h4>
                        </div>
                        <div className="timeline-content__right__text text-8">
                            <h4 className="timeline-content__right__text__header">
                                <span className="green">Teams Registration begins</span>
                            </h4>
                            <p className="paragraphs timeline-content__right__text__paragraph">Interested teams can now show their interest in the
                                getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                        </div>
                        <div className="timeline-content__right__text text-9">
                            <h4 className="timeline-content__right__text__header">
                                <span className="green">November 18, 2023</span>
                            </h4>
                        </div>
                        <div className="timeline-content__right__text text-10">
                            <h4 className="timeline-content__right__text__header">
                                <span className="green">Announcement of the accepted teams and ideas</span>
                            </h4>
                            <p className="paragraphs timeline-content__right__text__paragraph">All teams whom idea has been accepted into getlinked tech
                                hackathon 1.0 2023 are formally announced</p>
                        </div>
                        <div className="timeline-content__right__text text-11">
                            <h4 className="timeline-content__right__text__header">
                                <span className="green">November 18, 2023</span>
                            </h4>
                        </div>
                        <div className="timeline-content__right__text text-12">
                            <h4 className="timeline-content__right__text__header">
                                <span className="green">Demo Day</span>
                            </h4>
                            <p className="paragraphs timeline-content__right__text__paragraph">Teams get the opportunity to pitch their projects to judges.
                                The winner of the hackathon will also be announced on
                                this day</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}