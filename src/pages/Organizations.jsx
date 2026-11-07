
import { useEffect, useState } from "react";
import { Search, MapPin, ArrowUpRight, Building2 } from "lucide-react";
import api from "../services/api";
import "./Organizations.css";

function Organizations() {
    const [organizations, setOrganizations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchOrganizations = async () => {
            try {
                const response = await api.get("/api/organizations");
                setOrganizations(response.data);
            } catch (err) {
                console.error("Error fetching organizations:", err);
                setError("Unable to load organizations. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchOrganizations();
    }, []);

    const images = [
        "/images/organization-1.jpg",
        "/images/organization-2.jpg",
        "/images/organization-3.jpg"
    ];

    return (
        <main className="organizations-page">

            <section className="organizations-hero">
                <div className="organizations-hero-content">
                    <span className="organizations-label">
                        <Building2 size={14} />
                        Sagar Community
                    </span>

                    <h1>
                        Organizations
                        <span> making a difference.</span>
                    </h1>

                    <p>
                        Discover organizations, ashrams and social groups
                        working to create meaningful change in our community.
                    </p>
                </div>

                <div className="organizations-hero-shape">✦</div>
            </section>

            <section className="organizations-tools">
                <div className="organization-search">
                    <Search size={19} />
                    <input type="text" placeholder="Search organizations..." />
                </div>

                <div className="organization-filters">
                    <button className="filter-active">All</button>
                    <button>Ashrams</button>
                    <button>NGOs</button>
                    <button>Orphan Homes</button>
                    <button>Community Groups</button>
                </div>
            </section>

            <section className="organizations-list">

                <div className="organizations-heading">
                    <div>
                        <span>OUR COMMUNITY</span>
                        <h2>
                            People and places
                            <span> creating change.</span>
                        </h2>
                    </div>

                    <p>
                        Explore organizations that are helping
                        people and communities across Sagar.
                    </p>
                </div>

                {loading && <p>Loading organizations...</p>}

                {error && <p>{error}</p>}

                {!loading && !error && organizations.length === 0 && (
                    <p>No organizations available yet.</p>
                )}

                {!loading && !error && organizations.length > 0 && (
                    <div className="organization-grid">

                        {organizations.map((organization, index) => (
                            <article
                                className="organization-card"
                                key={organization.id}
                            >
                                <div className="organization-image">
                                    <img
                                        src={images[index % images.length]}
                                        alt={organization.name}
                                    />

                                    <span className="organization-type">
                                        {organization.type || "Organization"}
                                    </span>
                                </div>

                                <div className="organization-content">

                                    <div className="organization-top">
                                        <div className="organization-icon">
                                            🏠
                                        </div>

                                        <span className="organization-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <h3>{organization.name}</h3>

                                    <p>
                                        {organization.description ||
                                            "More information about this organization will be available soon."}
                                    </p>

                                    <div className="organization-location">
                                        <MapPin size={15} />
                                        {[organization.city, organization.state]
                                            .filter(Boolean)
                                            .join(", ") || organization.address || "Location not available"}
                                    </div>

                                    <button className="organization-button">
                                        View Organization
                                        <ArrowUpRight size={16} />
                                    </button>

                                </div>
                            </article>
                        ))}

                    </div>
                )}

            </section>
        </main>
    );
}

export default Organizations;
