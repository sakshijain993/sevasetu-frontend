import React from "react";
import {
    ArrowRight,
    Heart,
    HandHeart,
    Users,
    Sparkles,
    Star
} from "lucide-react";

import "./SevaHeroes.css";

function SevaHeroes() {

    const heroes = [
        {
            name: "Aarav Sharma",
            role: "Community Volunteer",
            contribution: "Food & Essentials",
            message: "Small acts of kindness can create a big difference.",
            icon: <Heart size={20} />
        },
        {
            name: "Meera Patel",
            role: "Education Supporter",
            contribution: "Education Kits",
            message: "Every child deserves a chance to learn and dream.",
            icon: <Star size={20} />
        },
        {
            name: "Rahul Verma",
            role: "Help Partner",
            contribution: "Meals & Groceries",
            message: "If we can help someone today, why wait for tomorrow?",
            icon: <HandHeart size={20} />
        }
    ];

    return (
        <main className="heroes-page">

            {/* ================= HERO ================= */}

            <section className="heroes-hero">

                <div className="hero-doodle hero-doodle-one">✦</div>
                <div className="hero-doodle hero-doodle-two">♡</div>
                <div className="hero-doodle hero-doodle-three">✧</div>

                <div className="heroes-hero-content">

                    <span className="heroes-eyebrow">
                        <Sparkles size={16} />
                        THE HEART OF SEVASETU
                    </span>

                    <h1>
                        Meet the people
                        <span> who choose to care.</span>
                    </h1>

                    <p>
                        Seva Heroes are people who turn kindness into action.
                        They give their time, resources and support to make
                        someone's day a little better.
                    </p>

                    <div className="heroes-hero-actions">

                        <button className="heroes-primary-btn">
                            Become a Seva Hero
                            <ArrowRight size={18} />
                        </button>

                        <button className="heroes-secondary-btn">
                            Explore Contributions
                        </button>

                    </div>

                </div>


                <div className="heroes-visual">

                    <div className="hero-orbit orbit-one"></div>
                    <div className="hero-orbit orbit-two"></div>

                    <div className="hero-heart-card">

                        <div className="hero-heart-icon">
                            <Heart size={30} fill="currentColor" />
                        </div>

                        <span>ONE KIND ACT</span>

                        <h3>
                            Can travel
                            <br />
                            farther than you think.
                        </h3>

                        <div className="hero-mini-people">

                            <div>♡</div>
                            <div>✦</div>
                            <div>♡</div>
                            <span>+ many more</span>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= IMPACT STRIP ================= */}

            <section className="heroes-impact">

                <div className="impact-item">
                    <Users size={24} />
                    <strong>People</strong>
                    <span>coming together</span>
                </div>

                <div className="impact-item">
                    <Heart size={24} />
                    <strong>Kindness</strong>
                    <span>turned into action</span>
                </div>

                <div className="impact-item">
                    <HandHeart size={24} />
                    <strong>Support</strong>
                    <span>reaching where needed</span>
                </div>

                <div className="impact-item">
                    <Sparkles size={24} />
                    <strong>Impact</strong>
                    <span>one step at a time</span>
                </div>

            </section>


            {/* ================= INTRO ================= */}

            <section className="heroes-intro">

                <div className="heroes-section-heading">

                    <span>OUR COMMUNITY</span>

                    <h2>
                        Kindness looks
                        <strong> different for everyone.</strong>
                    </h2>

                    <p>
                        A Seva Hero doesn't have to do something huge.
                        Sometimes it is a meal, a book, a few hours of
                        someone's time or simply being there when help is needed.
                    </p>

                </div>

            </section>


            {/* ================= HERO CARDS ================= */}

            <section className="hero-stories-section">

                <div className="heroes-section-heading">

                    <span>SEVA HEROES</span>

                    <h2>
                        People who turn
                        <strong> care into action.</strong>
                    </h2>

                </div>


                <div className="hero-stories-grid">

                    {heroes.map((hero, index) => (

                        <article
                            className={`hero-story-card hero-story-${index + 1}`}
                            key={hero.name}
                        >

                            <div className="hero-story-top">

                                <div className="hero-avatar">
                                    {hero.name.charAt(0)}
                                </div>

                                <div className="hero-story-icon">
                                    {hero.icon}
                                </div>

                            </div>

                            <span className="hero-role">
                                {hero.role}
                            </span>

                            <h3>{hero.name}</h3>

                            <div className="hero-contribution">
                                <span>Contribution</span>
                                <strong>{hero.contribution}</strong>
                            </div>

                            <p>
                                “{hero.message}”
                            </p>

                            <button>
                                View Story
                                <ArrowRight size={16} />
                            </button>

                        </article>

                    ))}

                </div>

            </section>


            {/* ================= WAYS TO BECOME HERO ================= */}

            <section className="become-hero-section">

                <div className="become-hero-content">

                    <span>YOU CAN BE ONE TOO</span>

                    <h2>
                        You don't need
                        <strong> superpowers.</strong>
                    </h2>

                    <p>
                        You just need the willingness to help.
                        Find a way that feels right for you and
                        become part of the SevaSetu community.
                    </p>

                </div>


                <div className="hero-ways">

                    <div className="hero-way-card">

                        <div className="way-number">01</div>

                        <Heart size={24} />

                        <h3>Give Resources</h3>

                        <p>
                            Support genuine needs with food,
                            essentials or financial help.
                        </p>

                    </div>


                    <div className="hero-way-card">

                        <div className="way-number">02</div>

                        <Users size={24} />

                        <h3>Give Your Time</h3>

                        <p>
                            Volunteer your time and skills
                            where they are needed.
                        </p>

                    </div>


                    <div className="hero-way-card">

                        <div className="way-number">03</div>

                        <HandHeart size={24} />

                        <h3>Spread the Word</h3>

                        <p>
                            Help a genuine need reach someone
                            who can support it.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= QUOTE ================= */}

            <section className="heroes-quote-section">

                <div className="quote-mark">“</div>

                <p>
                    The smallest act of kindness can become
                    a big reason for someone to smile.
                </p>

                <span>
                    — The spirit behind SevaSetu
                </span>

            </section>


            {/* ================= FINAL CTA ================= */}

            <section className="heroes-final-cta">

                <div className="cta-small-doodle">♡</div>

                <span>READY TO MAKE A DIFFERENCE?</span>

                <h2>
                    Your kindness could be
                    <strong> someone's turning point.</strong>
                </h2>

                <p>
                    Join the SevaSetu community and find your
                    own way to make a difference.
                </p>

                <button>
                    Become a Seva Hero
                    <ArrowRight size={18} />
                </button>

            </section>

        </main>
    );
}

export default SevaHeroes;