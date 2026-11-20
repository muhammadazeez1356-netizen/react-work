
import { Link } from "react-router"
import logo from "/public/logo-work2.webp"

import React from 'react'

export default function Header() {
    return (
        <div>
            <header>
                <Link to={"/"}>
                  <img src={logo} alt="" />
                </Link>


                <nav>

                    <Link to={"/features"}>Features</Link>
                    <Link to={"/pricing"}>Pricing</Link>
                    <Link to={"/blog"}>Blog</Link>
                    <Link to={"/integration"}>Integration</Link>
                    <Link to={"/casestudies"}>Case Studies</Link>
                    <Link to={"/contact"}>Contact</Link>
                </nav>

                <div className='textbotton'>Get This Template</div>

            </header>
        </div>
    )
}
