import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Icon } from '../home02/about/index';
import { NumberCount } from './about/index';

class About extends Component {
    render() {
        return (
            <section className="about-me t2 s3 shape-am position-relative" id="about">
                <div className="section-icons">
                    <Icon />
                </div>
                <div className="container">
                <div className="row position-relative">
                    <div className="col-lg-7 animate-element wow delay5 fadeInDown">
                        <div className="flat-title t2">
                            <h4 className="sub-title mg-b22">About Me</h4>
                            <h2 className="title-section color-d11 mg-b41">Hi, I am here to help your next project!</h2>
                            <div className="description">
                                <p className="color-d13 lt-sp01">
                                Creative, responsive design, UI/UX expertise, HTML/CSS proficiency, strong visual communication, attention to detail, ability to translate ideas into engaging designs, collaboration, problem-solving, and effective communication.
                                </p>
                                <p className="color-d13 lt-sp01">I am passionate about cutting-edges, pixcel-perfect beautiful interfaces and intuitively implemented UX.</p>
                                <p className="color-d13 lt-sp01">
                                    If you need  PSD template, landing page or Website design within a day? then you can tell me, I'm here to help you. I can design any kind of PSD template. Check my portfolio.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="fact">
                        <NumberCount />
                        <div className="btn-contact bg-s2 text-center">
                            <h4 className="title color-d11">Get a project? Let’s talk.</h4>
                            <Link to="#" className="email color-s2 color-d15" onClick={() => window.location = 'mailto:info@progx.in'}>info@ProGenX.in
</Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className="featured-post animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                <img src="images/section/51.png" alt="images" />
                </div>
            </section>
        );
    }
}

export default About;
