import React from 'react'

import logowork1 from "/public/logowork1.webp"


const Footer = () => {
  return (
    <>

      <footer>


        <div className="footer0">

          <div className="divfooter1">

            <img src={logowork1} alt="" />

            <h3>Empowering Marketing businesses through intelligent automation.</h3>

            <a href="#">contact@Automark.com</a>
            <a href="#">(+1) 165-320-0102</a>

          </div>

          <div className="divfooter2">

            <h3>Primary</h3>

            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>

          </div>


          <div className="divfooter3">

            <h3>Resource</h3>

            <a href="#">Case Studies</a>
            <a href="#">Elements</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Integrations</a>
          </div>

          <div className="divfooter4">
            <h3>Legal</h3>

            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>

          </div>

        </div>

        <hr />

        <p>Copyright © 2026 <span>Themefisher</span> All Rights Reserved • Distributed by <span> ThemeWagon</span></p>

      </footer>


    </>
  )
}

export default Footer
