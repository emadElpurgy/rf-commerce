import React from 'react'
import '../css/Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className='footer'>
        <div className="footer__content">
            <h3>RF-E-commerce</h3>
            <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..</p>
            <ul class="footer__socials">
                <li><Link to="#"><i><FacebookIcon/></i></Link></li>
                <li><Link to="#"><i><TwitterIcon/></i></Link></li>
                <li><Link to="#"><i><YouTubeIcon/></i></Link></li>
                <li><Link to="#"><i><LinkedInIcon/></i></Link></li>
            </ul>
        </div>
        <div className="footer__bottom">
            <p>copyright &copy; <Link to="/">RF-E-Commerce</Link>  </p>
            <div className="footer__menu">
                <ul className="f-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Contact</Link></li>
                    <li><Link to="#">Blog</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer