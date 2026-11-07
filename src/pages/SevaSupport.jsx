import React from "react";
import {
    ArrowRight,
    Heart,
    HandHeart,
    Gift,
    Utensils,
    BookOpen,
    Package,
    Sparkles
} from "lucide-react";

import "./SevaSupport.css";

function SevaSupport() {

    const supportWays = [
        {
            icon: <Utensils size={24} />,
            title: "Food & Meals",
            text: "Provide meals, groceries or food items to organizations that need them."
        },
        {
            icon: <BookOpen size={24} />,
            title: "Education",
            text: "Support children with books, stationery, school supplies and learning resources."
        },
        {
            icon: <Package size={24} />,
            title: "Essential Items",
            text: "Contribute useful everyday items based on genuine community needs."
        },
        {
            icon: <Gift size={24} />,
            title: "Resources",
            text: "Share resources that can make a meaningful difference to someone's daily life."
        }
    ];

    return (
        <main className="support-page">

            {/* ================= HERO ================= */}

            <section className="support-hero">

                <div className="support-doodle support-doodle-one">✦</div>
                <div className="support-doodle support-doodle-two">♡</div>
                <div className="support-doodle support-doodle-three">✧</div>

                <div className="support-hero-content">

                    <span className="support-eyebrow">
                        <Sparkles size={16} />
                        SEVA SUPPORT
                    </span>

                    <h1>
                        Help doesn't have
                        <span> to be complicated.</span>
                    </h1>

                    <p>
                        Seva Support makes it easier to discover genuine
                        ways to contribute. Choose what feels right for you
                        and turn a little kindness into meaningful support.
                    </p>

                    <div className="support-hero-actions">

                        <button className="support-primary-btn">
                            Find a Need to Support
                            <ArrowRight size={18} />
                        </button>

                        <button className="support-secondary-btn">
                            Explore Support Options
                        </button>

                    </div>

                </div>


                <div className="support-visual">

                    <div className="support-glow"></div>

                    <div className="support-main-card">

                        <div className="support-heart">
                            <Heart size={30} fill="currentColor" />
                        </div>

                        <span>YOUR SUPPORT</span>

                        <h3>
                            Can become
                            <br />
                            someone's hope.
                        </h3>

                        <div className="support-mini-row">

                            <div>
                                <HandHeart size={17} />
                            </div>

                            <div>
                                <Heart size={17} />
                            </div>

                            <div>
                                <Gift size={17} />
                            </div>

                            <span>Every contribution matters</span>

                        </div>

                    </div>

                    <div className="support-floating-note note-one">
                        + Kindness
                    </div>

                    <div className="support-floating-note note-two">
                        + Support
                    </div>

                </div>

            </section>


            {/* ================= INTRO ================= */}

            <section className="support-intro">

                <div className="support-section-heading">

                    <span>MAKE IT MEANINGFUL</span>

                    <h2>
                        Support a need that
                        <strong> matters to someone.</strong>
                    </h2>

                    <p>
                        You don't have to do everything. Even one small
                        contribution can help meet a genuine need and
                        remind someone that their community cares.
                    </p>

                </div>

            </section>


            {/* ================= SUPPORT OPTIONS ================= */}

            <section className="support-options-section">

                <div className="support-options-grid">

                    {supportWays.map((item, index) => (

                        <article
                            className={`support-option-card support-option-${index + 1}`}
                            key={item.title}
                        >

                            <div className="support-option-top">

                                <div className="support-option-icon">
                                    {item.icon}
                                </div>

                                <span>
                                    0{index + 1}
                                </span>

                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.text}</p>

                            <button>
                                Explore
                                <ArrowRight size={16} />
                            </button>

                        </article>

                    ))}

                </div>

            </section>


            {/* ================= HOW IT WORKS ================= */}

            <section className="support-process-section">

                <div className="support-section-heading">

                    <span>HOW SEVA SUPPORT WORKS</span>

                    <h2>
                        From intention
                        <strong> to action.</strong>
                    </h2>

                </div>


                <div className="support-process">

                    <div className="support-process-card">

                        <div className="process-number">01</div>

                        <Heart size={23} />

                        <h3>Choose a Need</h3>

                        <p>
                            Discover genuine needs shared by
                            organizations in the community.
                        </p>

                    </div>


                    <div className="process-connector"></div>


                    <div className="support-process-card">

                        <div className="process-number">02</div>

                        <HandHeart size={23} />

                        <h3>Choose Your Support</h3>

                        <p>
                            Decide what you can comfortably contribute,
                            whether resources, items or time.
                        </p>

                    </div>


                    <div className="process-connector"></div>


                    <div className="support-process-card">

                        <div className="process-number">03</div>

                        <Sparkles size={23} />

                        <h3>Make It Happen</h3>

                        <p>
                            Connect with the organization and turn
                            your intention into real-world support.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= SMALL SUPPORT BANNER ================= */}

            <section className="support-message">

                <div className="support-message-icon">
                    <Heart size={25} fill="currentColor" />
                </div>

                <div>
                    <span>A LITTLE CAN GO A LONG WAY</span>

                    <h2>
                        You don't need a lot to make a difference.
                    </h2>
                </div>

                <ArrowRight size={25} />

            </section>


            {/* ================= QUOTE ================= */}

            <section className="support-quote">

                <div className="support-quote-mark">“</div>

                <p>
                    Helping is not always about how much
                    you give. Sometimes it is simply about
                    choosing to care.
                </p>

                <span>
                    — The spirit of SevaSetu
                </span>

            </section>


            {/* ================= FINAL CTA ================= */}

            <section className="support-final-cta">

                <div className="support-cta-doodle">♡</div>

                <span>READY TO HELP?</span>

                <h2>
                    Your support could be
                    <strong> someone's reason to smile.</strong>
                </h2>

                <p>
                    Find a genuine need and become part of
                    the support behind it.
                </p>

                <button>
                    Start Helping
                    <ArrowRight size={18} />
                </button>

            </section>

        </main>
    );
}

export default SevaSupport;