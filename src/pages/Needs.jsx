import React from "react";
import {
    ArrowRight,
    Heart,
    Utensils,
    GraduationCap,
    Wallet,
    Package,
    Home,
    Stethoscope,
    Sparkles
} from "lucide-react";

import "./Needs.css";

function Need() {
    const categories = [
        {
            icon: <Utensils size={26} />,
            title: "Food",
            description: "Meals and groceries for people and communities in need."
        },
        {
            icon: <Wallet size={26} />,
            title: "Financial",
            description: "Support essential expenses and urgent financial needs."
        },
        {
            icon: <GraduationCap size={26} />,
            title: "Education",
            description: "Help children and students continue their education."
        },
        {
            icon: <Package size={26} />,
            title: "Essentials",
            description: "Clothes, books, hygiene products and everyday essentials."
        },
        {
            icon: <Stethoscope size={26} />,
            title: "Medical",
            description: "Support medicines, treatment and healthcare needs."
        },
        {
            icon: <Home size={26} />,
            title: "Shelter",
            description: "Help provide safe and essential living support."
        }
    ];

    const needs = [
        {
            organization: "Asha Seva Ashram",
            title: "Monthly Grocery Support",
            description:
                "Monthly grocery supplies are needed to provide regular meals for children and residents.",
            category: "Food",
            required: "₹15,000",
            raised: "₹8,500",
            progress: 57,
            urgent: true
        },
        {
            organization: "Sagar Bal Seva",
            title: "School Supplies for Children",
            description:
                "Notebooks, school bags and basic stationery are needed for the upcoming academic session.",
            category: "Education",
            required: "40 Kits",
            raised: "24 Kits",
            progress: 60,
            urgent: false
        },
        {
            organization: "Jeevan Jyoti Seva Kendra",
            title: "Essential Medicines",
            description:
                "Regular medicines and basic healthcare supplies are required for elderly residents.",
            category: "Medical",
            required: "₹20,000",
            raised: "₹11,000",
            progress: 55,
            urgent: true
        }
    ];

    return (
        <main className="needs-page">

            {/* ================= HERO ================= */}
            <section className="needs-hero">

                <div className="needs-doodle doodle-one">✦</div>
                <div className="needs-doodle doodle-two">♡</div>
                <div className="needs-doodle doodle-three">✧</div>

                <div className="needs-hero-content">

                    <span className="needs-eyebrow">
                        <Sparkles size={16} />
                        NEEDS THAT MATTER
                    </span>

                    <h1>
                        Every Need Deserves
                        <span> A Helping Hand.</span>
                    </h1>

                    <p>
                        Discover real needs from local organizations and
                        become the connection between someone's need and
                        someone's kindness.
                    </p>

                    <div className="needs-hero-actions">
                        <button className="needs-primary-btn">
                            Explore Needs
                            <ArrowRight size={18} />
                        </button>

                        <button className="needs-secondary-btn">
                            How It Works
                        </button>
                    </div>

                </div>

                <div className="needs-hero-card">

                    <div className="floating-heart">
                        <Heart size={25} fill="currentColor" />
                    </div>

                    <span>ONE SMALL ACT</span>

                    <h3>
                        Can become
                        <br />
                        someone's hope.
                    </h3>

                    <div className="mini-progress">
                        <div className="mini-progress-fill"></div>
                    </div>

                    <p>
                        Your support can make a real difference.
                    </p>

                </div>

            </section>


            {/* ================= CATEGORIES ================= */}
            <section className="need-categories-section">

                <div className="section-heading">

                    <span>EXPLORE BY CATEGORY</span>

                    <h2>
                        Find a way to
                        <strong> make a difference.</strong>
                    </h2>

                    <p>
                        Every kind of support matters. Choose where you
                        would like your help to reach.
                    </p>

                </div>

                <div className="need-categories-grid">

                    {categories.map((category, index) => (
                        <div
                            className={`need-category-card category-${index + 1}`}
                            key={category.title}
                        >

                            <div className="category-icon">
                                {category.icon}
                            </div>

                            <h3>{category.title}</h3>

                            <p>{category.description}</p>

                            <button>
                                Explore
                                <ArrowRight size={16} />
                            </button>

                        </div>
                    ))}

                </div>

            </section>


            {/* ================= ACTIVE NEEDS ================= */}
            <section className="active-needs-section">

                <div className="section-heading needs-heading">

                    <span>ACTIVE NEEDS</span>

                    <h2>
                        Someone needs help.
                        <strong> You can be the connection.</strong>
                    </h2>

                    <p>
                        Explore ongoing needs shared by organizations
                        and choose where you want to contribute.
                    </p>

                </div>

                <div className="needs-grid">

                    {needs.map((need) => (
                        <article className="need-card" key={need.title}>

                            <div className="need-card-top">

                                <span className="need-category-tag">
                                    {need.category}
                                </span>

                                {need.urgent && (
                                    <span className="urgent-tag">
                                        Urgent
                                    </span>
                                )}

                            </div>

                            <span className="need-organization">
                                {need.organization}
                            </span>

                            <h3>{need.title}</h3>

                            <p>{need.description}</p>

                            <div className="need-progress-info">
                                <span>Progress</span>
                                <strong>{need.progress}%</strong>
                            </div>

                            <div className="need-progress-bar">
                                <div
                                    className="need-progress-fill"
                                    style={{ width: `${need.progress}%` }}
                                ></div>
                            </div>

                            <div className="need-amounts">

                                <div>
                                    <small>Raised</small>
                                    <strong>{need.raised}</strong>
                                </div>

                                <div>
                                    <small>Required</small>
                                    <strong>{need.required}</strong>
                                </div>

                            </div>

                            <button className="view-need-btn">
                                View Need
                                <ArrowRight size={17} />
                            </button>

                        </article>
                    ))}

                </div>

                <button className="view-all-needs-btn">
                    View All Needs
                    <ArrowRight size={18} />
                </button>

            </section>


            {/* ================= FEATURED NEED ================= */}
            <section className="featured-need-section">

                <div className="featured-need-content">

                    <span>FEATURED NEED</span>

                    <h2>
                        A little support can
                        <strong> change a whole day.</strong>
                    </h2>

                    <p>
                        Some needs are urgent. Some are ongoing.
                        But behind every request is a real person,
                        a real organization and a real reason to care.
                    </p>

                    <button className="featured-help-btn">
                        Help This Need
                        <Heart size={18} />
                    </button>

                </div>

                <div className="featured-need-visual">

                    <div className="featured-circle circle-one"></div>
                    <div className="featured-circle circle-two"></div>

                    <div className="featured-card">

                        <span>URGENT SUPPORT</span>

                        <h3>
                            Daily Meals
                            <br />
                            for Children
                        </h3>

                        <div className="featured-progress">
                            <div></div>
                        </div>

                        <div className="featured-stats">
                            <strong>₹12,400</strong>
                            <span>of ₹20,000 needed</span>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= HOW IT WORKS ================= */}
            <section className="how-help-section">

                <div className="section-heading">

                    <span>HOW HELPING WORKS</span>

                    <h2>
                        From a need
                        <strong> to a helping hand.</strong>
                    </h2>

                </div>

                <div className="help-steps">

                    <div className="help-step">
                        <span>01</span>
                        <h3>Discover</h3>
                        <p>
                            Find a genuine need shared by a local organization.
                        </p>
                    </div>

                    <div className="help-step">
                        <span>02</span>
                        <h3>Choose</h3>
                        <p>
                            Pick the cause or support that feels meaningful to you.
                        </p>
                    </div>

                    <div className="help-step">
                        <span>03</span>
                        <h3>Connect</h3>
                        <p>
                            Connect with the organization and understand what is needed.
                        </p>
                    </div>

                    <div className="help-step">
                        <span>04</span>
                        <h3>Help</h3>
                        <p>
                            Turn your intention into meaningful action.
                        </p>
                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}
            <section className="needs-final-cta">

                <div className="cta-doodle">♡</div>

                <span>YOUR KINDNESS CAN TRAVEL FAR</span>

                <h2>
                    Someone is waiting for
                    <strong> a helping hand.</strong>
                </h2>

                <p>
                    Explore the needs around you and become a small
                    part of someone's bigger story.
                </p>

                <button>
                    Explore Needs
                    <ArrowRight size={18} />
                </button>

            </section>

        </main>
    );
}

export default Need;