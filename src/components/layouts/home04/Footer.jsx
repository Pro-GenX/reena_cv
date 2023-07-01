import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <div className="tf-modal-content justify-content-end"> 
                <footer id="footer" className="footer footer-s4">
                    <div className="container">
                        <div id="footer-widget" className="footer-widget-s3 border-bottom-s2 position-relative">
                            <h3 className="widget-title larger lt-sp06 text-white text-center">Let’s try me!</h3>
                            <div className="site-list site-list-center text-center">
                                <Link to="#" onClick={() => window.open('https://www.linkedin.com/in/reena-sharma-7aa342250')} className="bg-s1"><i class="fa fa-linkedin-square" aria-hidden="true" /></Link>
                                {/* <Link to="#" onClick={() => window.open('https://www.instagram.com/invites/contact/?i=1dqtsqmf2ks8k&utm_content=n50dcjy/')} className="bg-s2"><i className="fa fa-instagram" aria-hidden="true" /></Link> */}
                                <Link to="#" className="bg-s3" onClick={() => window.open('https://www.instagram.com/invites/contact/?i=1dqtsqmf2ks8k&utm_content=n50dcjy/')}><i className="fa fa-instagram" aria-hidden="true" /></Link>
                            </div>
                        </div>
                    </div>
                    <div id="bottom" className="bottom-s3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="copyright lt-sp02">
                                        © Design by Reena, 2023 All rights reserved.
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="widget-nav-menu color-s2">
                                        <li><Link to="/home-04">Home</Link></li>
                                        <li><Link to="/Portfolio">Portfolio</Link></li>
                                        <li><Link to="/about ">About</Link></li>
                                        <li><Link to="/Contact">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="col-lg-2">
                                    <div className="socials-list color-s2">
                                        <Link to="#" onClick={() => window.open('https://www.linkedin.com/in/reena-sharma-7aa342250')} ><i class="fa fa-linkedin-square" aria-hidden="true" /></Link>
                                        {/* <Link to="#"><i className="fa fa-twitter" aria-hidden="true" /></Link> */}
                                        <Link to="#" onClick={() => window.open('https://www.instagram.com/invites/contact/?i=1dqtsqmf2ks8k&utm_content=n50dcjy/')}><i className="fa fa-instagram" aria-hidden="true" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
