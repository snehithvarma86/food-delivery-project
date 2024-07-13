import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const footer = () => {
    return (
        <div>
            <div className="footer" id='footer'>
                <div className="footer-content">
                    <div className="footer-content-left">
                        <img src={assets.logo} alt="" />
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima fugiat doloremque enim voluptatum debitis excepturi aut aliquam est! Iusto numquam corrupti excepturi non voluptatum culpa aliquid vel dolorum sit nam!
                        </p>
                        <div className="footer-social-icons">
                            <img src={assets.facebook_icon} alt="" />
                            <img src={assets.twitter_icon} alt="" />
                            <img src={assets.linkedin_icon} alt="" />
                        </div>

                    </div>
                    <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+91 8880008880</li>
                            <li>contact@tomato.in</li>
                        </ul>

                    </div>

                </div>
                <hr />
            <p className="footer-copyright">copyright content bla bla bla</p>
            </div>
            
        </div>
    )
}

export default footer
