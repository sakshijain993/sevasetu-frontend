import "./Contact.css";

function Contact() {
    return (
        <div className="contact-page">

            <span className="doodle-heart">♡</span>
            <span className="doodle-help">✦</span>
            <span className="doodle-star">✧</span>
            <span className="doodle-spark">✦</span>
            <span className="doodle-circle"></span>
            <span className="doodle-line"></span>
            <span className="doodle-line"></span>

            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>
                    Have a question or want to connect with SevaSetu?
                    We would love to hear from you.
                </p>
            </div>

            <div className="contact-container">

                <div className="contact-info">

                    <h2>Get in Touch</h2>

                    <p>
                        Whether you want to help an organization,
                        share a need, or know more about SevaSetu,
                        feel free to reach out to us.
                    </p>

                    <div className="contact-item">
                        <h3>📍 Location</h3>
                        <p>Sagar, Madhya Pradesh, India</p>
                    </div>

                    <div className="contact-item">
                        <h3>📧 Email</h3>
                        <p>support@sevasetu.com</p>
                    </div>

                    <div className="contact-item">
                        <h3>📞 Phone</h3>
                        <p>+91 XXXXX XXXXX</p>
                    </div>

                </div>

                <div className="contact-form">

                    <h2>Send Us a Message</h2>

                    <form>

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        

                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        <button type="submit">
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Contact;