import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import SevaHeroes from "./pages/SevaHeroes";
import SupportNetwork from "./pages/SupportNetwork";
import SevaSupport from "./pages/SevaSupport";
import Home from "./pages/Home";
import Organizations from "./pages/Organizations";
import Needs from "./pages/Needs";

import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

    const [authModal, setAuthModal] = useState(null);

    return (
        <BrowserRouter>

            <Navbar
                onLogin={() => setAuthModal("login")}
                onRegister={() => setAuthModal("register")}
            />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/organizations"
                    element={<Organizations />}
                />

                <Route
                    path="/needs"
                    element={<Needs />}
                />

               <Route
                   path="/seva-heroes"
                   element={<SevaHeroes />}
                />

              <Route
                  path="/support-network"
                  element={<SupportNetwork />}
               />

             <Route
                 path="/seva-support"
                 element={<SevaSupport />}
            />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

            </Routes>


            {/* LOGIN POPUP */}
            {authModal === "login" && (
                <Login
                    onClose={() => setAuthModal(null)}
                    onRegister={() => setAuthModal("register")}
                />
            )}


            {/* REGISTER POPUP */}
            {authModal === "register" && (
                <Register
                    onClose={() => setAuthModal(null)}
                    onLogin={() => setAuthModal("login")}
                />
            )}

        </BrowserRouter>
    );
}

export default App;