import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowUpRight,
    Heart,
    Utensils,
    BookOpen,
    HandHeart,
    Package,
    Users,
    MapPin,
    Sparkles,
    CheckCircle2,
    Clock,
    Gift,
    ChevronRight,
    Star,
    CircleDot
} from "lucide-react";

import "./Home.css";

function Home() {

    /* =========================
       SCROLL REVEAL ANIMATION
    ========================= */

    useEffect(() => {
        const elements = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            {
                threshold: 0.14
            }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    return (
        <main className="home-page">

            {/* =========================================
                HERO
            ========================================= */}

            <section
                className="home-hero"
                style={{
                    backgroundImage: "url('/images/hero-image.png')"
                }}
            >

                <div className="hero-doodle doodle-heart">♡</div>
                <div className="hero-doodle doodle-star">✦</div>
                <div className="hero-doodle doodle-spark">✧</div>

                <div className="hero-content">

                    <div className="hero-kicker">
                        <span className="live-dot"></span>
                        Sagar's Community Help Platform
                    </div>

                    <h1>
                        Jahan Zarurat Hai,
                        <span className="hero-highlight">
                            Wahan Madad Pahunchana.
                        </span>
                    </h1>

                    <p>
                        Connect people who want to help with
                        organizations and communities that
                        truly need support.
                    </p>

                    <div className="hero-buttons">

                        <Link
                            to="/needs"
                            className="hero-primary-btn"
                        >
                            Explore Needs
                            <ArrowRight size={17} />
                        </Link>

                        <Link
                            to="/seva-heroes"
                            className="hero-secondary-btn"
                        >
                            Become a Seva Hero
                            <ArrowUpRight size={16} />
                        </Link>

                    </div>

                    <div className="hero-bottom-note">

                        <span>
                            <Heart size={13} />
                            Small Help
                        </span>

                        <span>
                            <CircleDot size={12} />
                            Real People
                        </span>

                        <span>
                            <Sparkles size={13} />
                            Real Impact
                        </span>

                    </div>

                </div>

                <div className="hero-float-card hero-float-one">

                    <div className="float-icon orange">
                        <HandHeart size={18} />
                    </div>

                    <div>
                        <strong>Help Someone Today</strong>
                        <span>Every small action matters</span>
                    </div>

                </div>

                <div className="hero-float-card hero-float-two">

                    <div className="mini-avatar-stack">
                        <span>💛</span>
                        <span>🤝</span>
                        <span>💚</span>
                    </div>

                    <div>
                        <strong>Community Together</strong>
                        <span>People helping people</span>
                    </div>

                </div>

                <div className="hero-scroll">
                    SCROLL
                    <span></span>
                </div>

            </section>


            {/* =========================================
                IMPACT FLOW
            ========================================= */}

            <section className="home-flow reveal">

                <div className="flow-item">
                    <span>01</span>
                    <strong>Discover</strong>
                    <small>Find a real need</small>
                </div>

                <div className="flow-line"></div>

                <div className="flow-item">
                    <span>02</span>
                    <strong>Connect</strong>
                    <small>Meet the right people</small>
                </div>

                <div className="flow-line"></div>

                <div className="flow-item">
                    <span>03</span>
                    <strong>Help</strong>
                    <small>s    </small>
                </div>

                <div className="flow-line"></div>

                <div className="flow-item">
                    <span>04</span>
                    <strong>Impact</strong>
                    <small>See your difference</small>
                </div>

            </section>


           {/* =========================================
                NEED MOMENTS
            ========================================= */}

            <section className="section-space">

                <div className="section-heading reveal">

                    <div>
                        <span className="section-label">
                            <Sparkles size={13} />
                            WHERE HELP MATTERS
                        </span>

                        <h2>
                            Every need deserves
                            <span> a helping hand.</span>
                        </h2>
                    </div>

                    <p>
                        Sometimes help is food. Sometimes it is
                        education, essentials or simply your time.
                    </p>

                </div>


                <div className="moment-grid">

                    <Link
                        to="/needs"
                        className="moment-card moment-large food-card reveal"
                    >

                        <div className="moment-top">
                            <Utensils size={25} />
                            <span className="moment-number">01</span>
                        </div>

                        <div className="moment-doodle">~</div>

                        <div className="moment-content">

                            <span>FOOD & NOURISHMENT</span>

                            <h3>
                                A meal can become
                                someone's hope.
                            </h3>

                            <p>
                                Support food requirements from
                                communities that need them.
                            </p>

                        </div>

                        <div className="moment-arrow">
                            <ArrowUpRight size={17} />
                        </div>

                    </Link>


                    <Link
                        to="/needs"
                        className="moment-card education-card reveal"
                    >

                        <div className="moment-top">
                            <BookOpen size={22} />
                            <span className="moment-number">02</span>
                        </div>

                        <div className="moment-content">

                            <span>EDUCATION</span>

                            <h3>
                                Give someone
                                a chance to learn.
                            </h3>

                        </div>

                        <div className="moment-arrow">
                            <ArrowUpRight size={16} />
                        </div>

                    </Link>


                    <Link
                        to="/needs"
                        className="moment-card essentials-card reveal"
                    >

                        <div className="moment-top">
                            <Package size={22} />
                            <span className="moment-number">03</span>
                        </div>

                        <div className="moment-content">

                            <span>ESSENTIALS</span>

                            <h3>
                                Small things.
                                Big difference.
                            </h3>

                        </div>

                        <div className="moment-arrow">
                            <ArrowUpRight size={16} />
                        </div>

                    </Link>


                    <Link
                        to="/seva-heroes"
                        className="moment-card time-card reveal"
                    >

                        <div className="moment-top">
                            <Clock size={22} />
                            <span className="moment-number">04</span>
                        </div>

                        <div className="moment-content">

                            <span>YOUR TIME</span>

                            <h3>
                                Your time can
                                become someone's support.
                            </h3>

                        </div>

                        <div className="moment-arrow">
                            <ArrowUpRight size={16} />
                        </div>

                    </Link>

                </div>

            </section>


            {/* =========================================
                FEATURED NEEDS
            ========================================= */}

            <section className="section-space featured-section">

                <div className="section-heading featured-heading reveal">

                    <div>

                        <span className="section-label">
                            <Heart size={13} />
                            CURRENT NEEDS
                        </span>

                        <h2>
                            Someone nearby
                            <span> needs you.</span>
                        </h2>

                    </div>

                    <Link
                        to="/needs"
                        className="view-all"
                    >
                        View all needs
                        <ArrowRight size={15} />
                    </Link>

                </div>


                <div className="featured-layout">

                    <Link
                        to="/needs"
                        className="featured-main reveal"
                    >

                        <div className="featured-badge">
                            <span></span>
                            FEATURED NEED
                        </div>

                        <div className="featured-icon">
                            <Gift size={27} />
                        </div>

                        <span className="featured-category">
                            ESSENTIAL SUPPORT
                        </span>

                        <h3>
                            Help provide everyday
                            essentials to a community.
                        </h3>

                        <p>
                            Browse current requirements and
                            choose a way to contribute that feels
                            right for you.
                        </p>

                        <div className="featured-progress">

                            <div className="progress-info">
                                <span>Community support</span>
                                <strong>67%</strong>
                            </div>

                            <div className="progress-bar">
                                <span></span>
                            </div>

                        </div>

                        <div className="featured-footer">

                            <div className="featured-location">
                                <MapPin size={13} />
                                Sagar, Madhya Pradesh
                            </div>

                            <div className="round-arrow">
                                <ArrowUpRight size={18} />
                            </div>

                        </div>

                    </Link>


                    <div className="featured-side">

                        <Link
                            to="/needs"
                            className="small-need-card small-orange reveal"
                        >

                            <div className="small-card-icon">
                                <Utensils size={18} />
                            </div>

                            <div>
                                <span>FOOD</span>
                                <h4>Meal Support</h4>
                                <p>Help with food requirements</p>
                            </div>

                            <ChevronRight size={16} />

                        </Link>


                        <Link
                            to="/needs"
                            className="small-need-card small-purple reveal"
                        >

                            <div className="small-card-icon">
                                <BookOpen size={18} />
                            </div>

                            <div>
                                <span>EDUCATION</span>
                                <h4>Learning Support</h4>
                                <p>Study materials & resources</p>
                            </div>

                            <ChevronRight size={16} />

                        </Link>


                        <Link
                            to="/needs"
                            className="small-need-card small-green reveal"
                        >

                            <div className="small-card-icon">
                                <Package size={18} />
                            </div>

                            <div>
                                <span>ESSENTIALS</span>
                                <h4>Daily Essentials</h4>
                                <p>Useful items for communities</p>
                            </div>

                            <ChevronRight size={16} />

                        </Link>

                    </div>

                </div>

            </section>


            {/* =========================================
                HELP YOUR WAY
            ========================================= */}

            <section className="section-space">

                <div className="help-heading reveal">

                    <span className="section-label">
                        <HandHeart size={13} />
                        YOUR WAY TO HELP
                    </span>

                    <h2>
                        Start with
                        <span> what you have.</span>
                    </h2>

                </div>


                <div className="help-grid">

                    <Link
                        to="/needs"
                        className="help-tile tile-one reveal"
                    >

                        <div className="tile-icon">
                            <Gift size={22} />
                        </div>

                        <div className="tile-text">
                            <small>GIVE</small>
                            <h3>Donate Items</h3>
                            <p>
                                Clothes, books, food and
                                everyday essentials.
                            </p>
                        </div>

                        <ArrowUpRight className="tile-arrow" />

                    </Link>


                    <Link
                        to="/needs"
                        className="help-tile tile-two reveal"
                    >

                        <div className="tile-icon">
                            <Heart size={22} />
                        </div>

                        <div className="tile-text">
                            <small>SUPPORT</small>
                            <h3>Fulfil a Need</h3>
                            <p>
                                Choose a requirement and
                                turn it into action.
                            </p>
                        </div>

                        <ArrowUpRight className="tile-arrow" />

                    </Link>


                    <Link
                        to="/seva-heroes"
                        className="help-tile tile-three reveal"
                    >

                        <div className="tile-icon">
                            <Users size={22} />
                        </div>

                        <div className="tile-text">
                            <small>JOIN</small>
                            <h3>Volunteer</h3>
                            <p>
                                Give your time, skills and
                                energy to the community.
                            </p>
                        </div>

                        <ArrowUpRight className="tile-arrow" />

                    </Link>


                    <Link
                        to="/organizations"
                        className="help-tile tile-four reveal"
                    >

                        <div className="tile-icon">
                            <HandHeart size={22} />
                        </div>

                        <div className="tile-text">
                            <small>PARTNER</small>
                            <h3>Help an Organization</h3>
                            <p>
                                Connect with organizations
                                working on the ground.
                            </p>
                        </div>

                        <ArrowUpRight className="tile-arrow" />

                    </Link>

                </div>

            </section>


            {/* =========================================
                COMMUNITY
            ========================================= */}

            <section className="section-space">

                <div className="community-section">

                    <div className="community-visual reveal">

                        <div className="visual-doodle visual-doodle-one">
                            ✦
                        </div>

                        <div className="visual-doodle visual-doodle-two">
                            ♡
                        </div>

                        <div className="community-orbit orbit-one"></div>
                        <div className="community-orbit orbit-two"></div>
                        <div className="community-orbit orbit-three"></div>

                        <div className="community-center">

                            <HandHeart size={31} />

                            <strong>Seva</strong>

                            <span>starts with us</span>

                        </div>

                        <div className="community-bubble bubble-one">
                            🍱
                        </div>

                        <div className="community-bubble bubble-two">
                            📚
                        </div>

                        <div className="community-bubble bubble-three">
                            🤝
                        </div>

                        <div className="community-bubble bubble-four">
                            💛
                        </div>

                    </div>


                    <div className="community-content reveal">

                        <span className="section-label">
                            <Users size={13} />
                            COMMUNITY
                        </span>

                        <h2>
                            When people come
                            <span> together.</span>
                        </h2>

                        <p>
                            SevaSetu brings together organizations,
                            volunteers, donors and everyday people
                            so that helping becomes easier and more
                            connected.
                        </p>


                        <div className="community-list">

                            <div className="community-list-item">

                                <div className="activity-icon orange-icon">
                                    <Heart size={17} />
                                </div>

                                <div>
                                    <strong>People can discover needs</strong>
                                    <span>
                                        Find meaningful ways to contribute
                                    </span>
                                </div>

                            </div>


                            <div className="community-list-item">

                                <div className="activity-icon purple-icon">
                                    <Users size={17} />
                                </div>

                                <div>
                                    <strong>Organizations can connect</strong>
                                    <span>
                                        Share requirements with the community
                                    </span>
                                </div>

                            </div>


                            <div className="community-list-item">

                                <div className="activity-icon green-icon">
                                    <CheckCircle2 size={17} />
                                </div>

                                <div>
                                    <strong>Every action creates impact</strong>
                                    <span>
                                        Small efforts can become meaningful help
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                SEVA HEROES
            ========================================= */}

            <section className="section-space">

                <div className="heroes-heading reveal">

                    <div>

                        <span className="section-label">
                            <Star size={13} />
                            SEVA HEROES
                        </span>

                        <h2>
                            Ordinary people.
                            <span> Extraordinary kindness.</span>
                        </h2>

                    </div>

                    <Link
                        to="/seva-heroes"
                        className="view-all"
                    >
                        Meet the community
                        <ArrowRight size={15} />
                    </Link>

                </div>


                <div className="heroes-showcase reveal">

                    <div className="hero-quote-card">

                        <Heart size={28} />

                        <p>
                            "You don't need to do
                            something huge to make
                            someone's day better."
                        </p>

                        <div className="quote-line"></div>

                        <span>
                            — A SevaSetu community thought
                        </span>

                    </div>


                    <div className="hero-avatar-area">

                        <div className="avatar-decoration"></div>

                        <div className="big-avatar avatar-orange">
                            🧡
                        </div>

                        <div className="big-avatar avatar-purple">
                            💜
                        </div>

                        <div className="big-avatar avatar-yellow">
                            💛
                        </div>

                        <div className="big-avatar avatar-blue">
                            💙
                        </div>

                        <div className="hero-mini-note">
                            <Sparkles size={14} />
                            Kindness looks good on everyone.
                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                FINAL CTA
            ========================================= */}

            <section className="home-final-cta reveal">

                <div className="cta-doodle cta-doodle-one">
                    ✦
                </div>

                <div className="cta-doodle cta-doodle-two">
                    ♡
                </div>

                <div className="cta-glow cta-glow-one"></div>
                <div className="cta-glow cta-glow-two"></div>

                <div className="cta-content">

                    <span className="cta-label">
                        <Sparkles size={13} />
                        YOUR NEXT GOOD DEED
                    </span>

                    <h2>
                        One small action.
                        <span> Real impact.</span>
                    </h2>

                    <p>
                        Find a way to help, connect with a
                        community, or simply start by discovering
                        what someone nearby needs.
                    </p>

                    <Link
                        to="/needs"
                        className="cta-button"
                    >
                        Explore Current Needs
                        <ArrowRight size={17} />
                    </Link>

                </div>

                <div className="cta-floating cta-float-left">
                    <Heart size={18} />
                </div>

                <div className="cta-floating cta-float-right">
                    <HandHeart size={18} />
                </div>

            </section>

        </main>
    );
}

export default Home;