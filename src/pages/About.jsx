import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Heart,
    HandHeart,
    Users,
    Sparkles,
    ShieldCheck,
    CircleCheck,
    MapPin,
    Clock3,
    Quote,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

const fadeUp = {
    hidden: { opacity: 0, y: 45 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

function About() {
    return (
        <main className="about-page">

            {/* FLOATING BACKGROUND DOODLES */}
            <div className="about-doodle doodle-one">✦</div>
            <div className="about-doodle doodle-two">♡</div>
            <div className="about-doodle doodle-three">+</div>
            <div className="about-doodle doodle-four">✦</div>

            {/* ================= HERO ================= */}
            <section className="about-new-hero">

                <motion.div
                    className="hero-orbit orbit-one"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                <motion.div
                    className="hero-orbit orbit-two"
                    animate={{ rotate: -360 }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                <div className="about-hero-grid">

                    <motion.div
                        className="about-new-content"
                        variants={fadeLeft}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="about-mini-label"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                        >
                            <span />
                            THE STORY BEHIND SEVASETU
                        </motion.div>

                        <h1>
                            Where a need
                            <span> meets a helping hand.</span>
                        </h1>

                        <p>
                            SevaSetu is a community-driven platform created to
                            make genuine needs easier to discover and meaningful
                            help easier to give.
                        </p>

                        <div className="hero-actions">
                            <Link to="/needs" className="about-primary-btn">
                                Explore Needs
                                <ArrowUpRight size={18} />
                            </Link>

                            <a href="#our-story" className="about-scroll-btn">
                                Our Story
                                <ArrowDown size={17} />
                            </a>
                        </div>

                        <div className="hero-small-note">
                            <Heart size={15} fill="currentColor" />
                            <span>
                                Jahan zarurat hai, wahan madad pahunchana.
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-visual"
                        variants={fadeRight}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="visual-back-shape" />

                        <motion.div
                            className="hero-image-frame"
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 0.7, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <img
                                src="/images/about-hero.jpg"
                                alt="SevaSetu community"
                            />

                            <div className="image-gradient" />
                        </motion.div>

                        <motion.div
                            className="floating-impact-card"
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="impact-icon">
                                <HandHeart size={21} />
                            </div>

                            <div>
                                <strong>Small help</strong>
                                <span>can mean a lot.</span>
                            </div>
                        </motion.div>

                        <motion.div
                            className="floating-location-card"
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 4.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <MapPin size={15} />
                            Sagar • Madhya Pradesh
                        </motion.div>
                    </motion.div>

                </div>

                <div className="hero-bottom-line">
                    <span>SCROLL TO EXPLORE</span>
                    <div />
                </div>
            </section>


            {/* ================= INTRO ================= */}
            <section className="about-intro" id="our-story">

                <motion.div
                    className="intro-number"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    01
                </motion.div>

                <motion.div
                    className="intro-heading"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span>WHY SEVASETU EXISTS</span>

                    <h2>
                        Sometimes the problem
                        <em> isn't a lack of kindness.</em>
                        <br />
                        It's a lack of connection.
                    </h2>
                </motion.div>

                <motion.div
                    className="intro-copy"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <p>
                        There are organizations with genuine needs. There are
                        people who want to help. SevaSetu is designed to bring
                        these two sides closer.
                    </p>

                    <p>
                        Instead of letting good intentions remain just
                        intentions, the platform creates a simple path from
                        discovering a need to taking meaningful action.
                    </p>
                </motion.div>

            </section>


         {/* ================= STORY ================= */}
<section className="story-section">

    <div className="story-intro">

        <motion.div
            className="story-heading"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <span>OUR APPROACH</span>

            <h2>
                From seeing a need
                <strong> to doing something about it.</strong>
            </h2>

            <p>
                SevaSetu keeps the journey simple — discover a genuine need,
                understand it, connect with the right opportunity and take
                a meaningful step forward.
            </p>
        </motion.div>

        <motion.div
            className="story-side-note"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="story-side-icon">
                <HandHeart size={25} />
            </div>

            <span>THE SEVASETU WAY</span>

            <p>
                Good intentions become more meaningful when they have
                a clear path to action.
            </p>
        </motion.div>

    </div>


    <div className="story-steps">

        <motion.div
            className="story-step"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
        >
            <div className="step-number">01</div>

            <div className="step-content">
                <span>DISCOVER</span>
                <h3>See what is needed.</h3>
                <p>
                    Explore genuine requirements shared by organizations
                    and community spaces.
                </p>
            </div>

            <ArrowUpRight className="step-arrow" size={25} />
        </motion.div>


        <motion.div
            className="story-step"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: .12 }}
        >
            <div className="step-number">02</div>

            <div className="step-content">
                <span>UNDERSTAND</span>
                <h3>Know where help matters.</h3>
                <p>
                    Understand the type of support, resources or
                    contribution that is actually required.
                </p>
            </div>

            <ArrowUpRight className="step-arrow" size={25} />
        </motion.div>


        <motion.div
            className="story-step"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: .24 }}
        >
            <div className="step-number">03</div>

            <div className="step-content">
                <span>CONNECT</span>
                <h3>Find your way to help.</h3>
                <p>
                    Connect your time, resources or willingness with
                    a meaningful opportunity.
                </p>
            </div>

            <ArrowUpRight className="step-arrow" size={25} />
        </motion.div>


        <motion.div
            className="story-step story-step-last"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6, delay: .36 }}
        >
            <div className="step-number">04</div>

            <div className="step-content">
                <span>ACT</span>
                <h3>Turn kindness into action.</h3>
                <p>
                    Take a simple step that can create meaningful
                    support for someone else.
                </p>
            </div>

            <ArrowUpRight className="step-arrow" size={25} />
        </motion.div>

    </div>

</section>   


            {/* ================= MISSION ================= */}
            <section className="new-mission">

                <motion.div
                    className="mission-photo-stack"
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="photo-outline" />

                    <img
                        src="/images/our-mission.png"
                        alt="Our mission"
                    />

                    <div className="mission-sticker">
                        <Sparkles size={18} />
                        <span>MEANINGFUL<br />CONNECTIONS</span>
                    </div>
                </motion.div>

                <motion.div
                    className="new-mission-content"
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <span className="new-section-label">
                        OUR MISSION
                    </span>

                    <h2>
                        Make helping
                        <span> easier, clearer</span>
                        and more connected.
                    </h2>

                    <p>
                        Our mission is to create a trusted space where genuine
                        community needs are visible and people can find
                        meaningful ways to contribute.
                    </p>

                    <div className="mission-list">

                        <div>
                            <CircleCheck size={20} />
                            <span>Community-focused support</span>
                        </div>

                        <div>
                            <CircleCheck size={20} />
                            <span>Need-based opportunities</span>
                        </div>

                        <div>
                            <CircleCheck size={20} />
                            <span>Simple human connections</span>
                        </div>

                    </div>

                    <div className="mission-quote">
                        <Quote size={22} />
                        <p>
                            Helping does not always require something big.
                            Sometimes it simply requires noticing where help
                            is needed.
                        </p>
                    </div>
                </motion.div>

            </section>


            {/* ================= VALUES ================= */}
            <section className="values-section">

                <motion.div
                    className="values-heading"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <span>WHAT GUIDES US</span>

                    <h2>
                        Built around
                        <strong> people, dignity & action.</strong>
                    </h2>
                </motion.div>

                <div className="values-layout">

                    <motion.div
                        className="value-large"
                        whileHover={{ y: -8 }}
                    >
                        <div className="value-top">
                            <div className="value-icon">
                                <Heart size={24} />
                            </div>
                            <span>01</span>
                        </div>

                        <h3>Compassion</h3>

                        <p>
                            Every act of support begins with understanding
                            another person's situation with empathy and care.
                        </p>

                        <div className="value-line" />
                    </motion.div>

                    <motion.div
                        className="value-small value-purple"
                        whileHover={{ y: -8 }}
                    >
                        <Users size={25} />
                        <span>02</span>
                        <h3>Community</h3>
                        <p>
                            Meaningful change grows when people come together.
                        </p>
                    </motion.div>

                    <motion.div
                        className="value-small value-orange"
                        whileHover={{ y: -8 }}
                    >
                        <ShieldCheck size={25} />
                        <span>03</span>
                        <h3>Trust</h3>
                        <p>
                            Genuine needs should be clear, visible and easy
                            to understand.
                        </p>
                    </motion.div>

                    <motion.div
                        className="value-wide"
                        whileHover={{ scale: 1.015 }}
                    >
                        <div>
                            <span>04</span>
                            <h3>Impact over intention.</h3>
                        </div>

                        <p>
                            A good intention becomes meaningful when it reaches
                            someone who actually needs it.
                        </p>

                        <ArrowUpRight size={28} />
                    </motion.div>

                </div>
            </section>


          {/* ================= SUPPORT IMAGE STRIP ================= */}
<section className="support-strip">

    <div className="support-strip-text">
        <span>WAYS TO CONTRIBUTE</span>

        <h2>
            Everyone has
            <em> something to give.</em>
        </h2>

        <p>
            Time. Food. Resources. Skills. Attention.
            There can be many ways to become part of someone's
            support system.
        </p>
    </div>

    <div className="support-marquee">

        <motion.div
            className="support-marquee-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
            }}
        >

            {/* ================= FIRST SET ================= */}

            <div className="marquee-card">
                <img src="/images/food-help.png" alt="Food support" />
                <span>FOOD</span>
            </div>

            <div className="marquee-card">
                <img
                    src="/images/education-help.png"
                    alt="Education support"
                />
                <span>EDUCATION</span>
            </div>

            <div className="marquee-card">
                <img
                    src="/images/essential-help.jpg"
                    alt="Essential support"
                />
                <span>ESSENTIALS</span>
            </div>

            <div className="marquee-card">
                <img src="/images/community.jpg" alt="Community" />
                <span>COMMUNITY</span>
            </div>


            {/* ================= SECOND SET ================= */}

            <div className="marquee-card">
                <img src="/images/food-help.png" alt="Food support" />
                <span>FOOD</span>
            </div>

            <div className="marquee-card">
                <img
                    src="/images/education-help.png"
                    alt="Education support"
                />
                <span>EDUCATION</span>
            </div>

            <div className="marquee-card">
                <img
                    src="/images/essential-help.jpg"
                    alt="Essential support"
                />
                <span>ESSENTIALS</span>
            </div>

            <div className="marquee-card">
                <img src="/images/community.jpg" alt="Community" />
                <span>COMMUNITY</span>
            </div>

        </motion.div>

    </div>

</section>


            {/* ================= STATS ================= */}
            <section className="about-stats">

                <motion.div
                    className="stats-intro"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <span>THE IDEA IN SIMPLE WORDS</span>
                    <h2>
                        Less distance.
                        <br />
                        More connection.
                    </h2>
                </motion.div>

                <div className="stats-grid">

                    <motion.div
                        className="stat-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <strong>01</strong>
                        <span>Need</span>
                        <p>Understand what support is required.</p>
                    </motion.div>

                    <motion.div
                        className="stat-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <strong>02</strong>
                        <span>People</span>
                        <p>Bring organizations and helpers closer.</p>
                    </motion.div>

                    <motion.div
                        className="stat-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <strong>03</strong>
                        <span>Action</span>
                        <p>Turn willingness into meaningful support.</p>
                    </motion.div>

                </div>

            </section>


            {/* ================= FINAL CTA ================= */}
            <motion.section
                className="new-about-cta"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="cta-glow glow-one" />
                <div className="cta-glow glow-two" />

                <div className="cta-heart">
                    <Heart size={25} fill="currentColor" />
                </div>

                <span>BE PART OF SEVASETU</span>

                <h2>
                    One small action.
                    <br />
                    <strong>One meaningful connection.</strong>
                </h2>

                <p>
                    Explore a need, discover an opportunity and find your
                    own way to make a difference.
                </p>

                <Link to="/needs" className="cta-main-button">
                    Explore Current Needs
                    <ArrowRight size={18} />
                </Link>

                <div className="cta-bottom">
                    <Clock3 size={15} />
                    <span>There is always a way to help.</span>
                </div>
            </motion.section>

        </main>
    );
}

export default About;