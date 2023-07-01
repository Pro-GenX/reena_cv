import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Banner extends Component {
    render() {
        return (
            <section className="banner-section s4 two-home" id="home">
                <div className="container">
                    <div className="content-text position-relative">
                        <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.3s">
                            <div className="tag color-d1 lt-sp53 mg-b34">Web designer Designer</div>
                            <h1 className="cd-headline clip is-full-width title color-d11 mg-b41">
                                <span>Hello, </span>
                                <span className="cd-words-wrapper color-d6">
                                <b className="is-visible">I’m Reena!</b>
                                <b>I’m Reena!</b>
                                <b>I’m Reena!</b>
                                </span>
                            </h1>
                            <p className="color-d13 lt-sp02 mg-b51">
                                Hi, i m Reena, professional web and Graphhic designer. <br />I am passionate about cutting-edges, pixcel-perfect <br/> beautiful interfaces and intuitively implemented UX.<br/> Need any help?
                            </p>
                        </div>
                        <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.3s">
                            <div className="fl-btn btn-general color-s2 btn-hv-border">
                                <Link to="#"className="f-w500 color-d6 border-corner5 lt-sp01 text-two" onClick={() => window.location = 'mailto:reenasharma21204@gmail.com'}>Hire me</Link>
                            </div>
                        </div>
                    </div>
                    <div className="featured-post border-corner-bl">
                        <img src="images/section/47.jpg" alt="images" />
                        <div className="site-list has-border text-center animate-element wow delay5 fadeInUp" data-wow-delay="0.3s">
                            <Link to="#" className="bg-s1" onClick={() => window.open('https://www.linkedin.com/in/reena-sharma-7aa342250')}><i class="fa fa-linkedin-square" aria-hidden="true" /></Link>
                            {/* <Link to="#" className="bg-s2" onClick={() => window.open('https://www.instagram.com/invites/contact/?i=1dqtsqmf2ks8k&utm_content=n50dcjy/')} ><i className="fa fa-instagram" aria-hidden="true" /></Link> */}
                            <Link to="#" className="bg-s3" onClick={() => window.open('https://www.instagram.com/invites/contact/?i=1dqtsqmf2ks8k&utm_content=n50dcjy/')} ><i className="fa fa-instagram" aria-hidden="true" /></Link>
                        </div>
                    </div>
                </div>
               {/* <div className="iconbox-s4 t2 color-s2 border-corner5 animate-element wow delay5 fadeZooming" data-wow-delay="0.3s">
                    <div className="avatar position-relative">
                        <img src="images/footer/01.jpg" alt="images" />
        </div>
                    <div className="content-inner">
                        <h4 className="name lt-sp04 mg-b16 text-white position-relative">Available for Project</h4>
                        <div className="fl-btn btn-general">
                            <Link to="#" className="text-white border-corner2">Hire Me</Link>
                        </div>
        </div>
        </div>*/}
            </section>
        );
    }
}

export default Banner;
