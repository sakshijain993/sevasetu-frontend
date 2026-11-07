import React from "react";
import {
    ArrowRight,
    Building2,
    Heart,
    HandHeart,
    Users,
    Sparkles,
    Utensils,
    GraduationCap
} from "lucide-react";

import "./SupportNetwork.css";

function SupportNetwork() {

    const networkCards = [
        {
            icon: <Building2 size={24} />,
            title: "Organizations",
            text: "Ashrams, orphan homes, NGOs and local organizations can share genuine needs.",
        },
        {
            icon: <HandHeart size={24} />,
            title: "Help Partners",
            text: "Individuals, restaurants and local supporters can contribute where help is needed.",
        },
        {
            icon: <Users size={24} />,
            title: "Volunteers",
            text: "People can give their time, skills and energy to support community initiatives.",
        }
    ];

    const supportTypes = [
        {
            icon: <Utensils size={22} />,
            title: "Food Support",
            text: "Meals, groceries and essential food items."
        },
        {
            icon: <GraduationCap size={22} />,
            title: "Education",
            text: "Books, stationery, learning kits and study support."
        },
        {
            icon: <Heart size={22} />,
            title: "Essential Care",
            text: "Everyday essentials and resources for genuine needs."
        }
    ];

    return (
        <main className="network-page">

            {/* ================= HERO ================= */}

            <section className="network-hero">

                <div className="network-doodle network-doodle-one">✦</div>
                <div className="network-doodle network-doodle-two">♡</div>
                <div className="network-doodle network-doodle-three">✧</div>

                <div className="network-hero-content">

                    <span className="network-eyebrow">
                        <Sparkles size={16} />
                        THE SEVASETU NETWORK
                    </span>

                    <h1>
                        When people connect,
                        <span> support can travel further.</span>
                    </h1>

                    <p>
                        SevaSetu brings organizations, helpers and volunteers
                        closer together so that genuine needs can reach people
                        who are ready to help.
                    </p>

                    <div className="network-hero-actions">

                        <button className="network-primary-btn">
                            Explore the Network
                            <ArrowRight size={18} />
                        </button>

                        <button className="network-secondary-btn">
                            Find a Way to Help
                        </button>

                    </div>

                </div>


                <div className="network-visual">

                    <div className="network-circle circle-one"></div>
                    <div className="network-circle circle-two"></div>

                    <div className="network-center">

                        <div className="network-center-icon">
                            <Heart size={30} fill="currentColor" />
                        </div>

                        <span>CONNECTED BY</span>

                        <h3>
                            Care.
                            <br />
                            Support.
                            <br />
                            Community.
                        </h3>

                    </div>


                    <div className="network-node node-one">
                        <Building2 size={19} />
                        <span>Organizations</span>
                    </div>

                    <div className="network-node node-two">
                        <Users size={19} />
                        <span>Volunteers</span>
                    </div>

                    <div className="network-node node-three">
                        <HandHeart size={19} />
                        <span>Helpers</span>
                    </div>

                </div>

            </section>


            {/* ================= INTRO ================= */}

            <section className="network-intro">

                <div className="network-section-heading">

                    <span>ONE COMMUNITY</span>

                    <h2>
                        Different people,
                        <strong> one shared purpose.</strong>
                    </h2>

                    <p>
                        Helping becomes easier when the right people can
                        find each other. SevaSetu creates a simple bridge
                        between those who need support and those who want
                        to contribute.
                    </p>

                </div>

            </section>


            {/* ================= NETWORK CARDS ================= */}

            <section className="network-members">

                <div className="network-members-grid">

                    {networkCards.map((card, index) => (

                        <article
                            className={`network-member-card network-card-${index + 1}`}
                            key={card.title}
                        >

                            <div className="network-card-top">

                                <div className="network-card-icon">
                                    {card.icon}
                                </div>

                                <span>
                                    0{index + 1}
                                </span>

                            </div>

                            <h3>{card.title}</h3>

                            <p>{card.text}</p>

                            <button>
                                Learn More
                                <ArrowRight size={16} />
                            </button>

                        </article>

                    ))}

                </div>

            </section>


            {/* ================= HOW NETWORK WORKS ================= */}

            <section className="network-flow-section">

                <div className="network-section-heading">

                    <span>HOW THE NETWORK WORKS</span>

                    <h2>
                        A simple bridge from
                        <strong> need to action.</strong>
                    </h2>

                </div>


                <div className="network-flow">

                    <div className="network-flow-card">

                        <div className="flow-number">01</div>

                        <Building2 size={23} />

                        <h3>A Need Is Shared</h3>

                        <p>
                            An organization shares a genuine requirement
                            such as food, education kits or essentials.
                        </p>

                    </div>


                    <div className="flow-line"></div>


                    <div className="network-flow-card">

                        <div className="flow-number">02</div>

                        <Users size={23} />

                        <h3>People Discover It</h3>

                        <p>
                            Helpers and volunteers discover needs that
                            match what they can contribute.
                        </p>

                    </div>


                    <div className="flow-line"></div>


                    <div className="network-flow-card">

                        <div className="flow-number">03</div>

                        <HandHeart size={23} />

                        <h3>Support Reaches There</h3>

                        <p>
                            People connect with the organization and
                            turn their intention into meaningful action.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= SUPPORT TYPES ================= */}

            <section className="network-support-section">

                <div className="network-support-heading">

                    <span>WAYS TO CONNECT</span>

                    <h2>
                        Support can look
                        <strong> different for everyone.</strong>
                    </h2>

                </div>


                <div className="network-support-grid">

                    {supportTypes.map((item) => (

                        <div
                            className="network-support-card"
                            key={item.title}
                        >

                            <div className="support-icon">
                                {item.icon}
                            </div>

                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>

                            <ArrowRight size={18} />

                        </div>

                    ))}

                </div>

            </section>


            {/* ================= QUOTE ================= */}

            <section className="network-quote">

                <div className="network-quote-mark">“</div>

                <p>
                    A stronger community begins when
                    people don't have to help alone.
                </p>

                <span>
                    — The idea behind the SevaSetu Network
                </span>

            </section>


            {/* ================= FINAL CTA ================= */}

            <section className="network-final-cta">

                <div className="network-cta-doodle">♡</div>

                <span>BE PART OF THE CONNECTION</span>

                <h2>
                    There is always a way
                    <strong> to contribute.</strong>
                </h2>

                <p>
                    Whether you give your time, resources or simply
                    help spread the word, your contribution can become
                    part of someone's journey.
                </p>

                <button>
                    Explore Ways to Help
                    <ArrowRight size={18} />
                </button>

            </section>

        </main>
    );
}

export default SupportNetwork;