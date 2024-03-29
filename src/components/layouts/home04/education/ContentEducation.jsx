import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class TopEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contenttop : [
               {
                    id: 1,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.3s',
                    year: 'University of Maharani',
                    title: 'Graduation',
                    text: 'Bachelor of Computer Application'
                },
                {
                    id: 2,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.5s',
                    year: 'ProGenX',
                    title: 'Internship',
                    text: 'Full Stack Web Development'
                },
                {
                    id: 3,
                    classname: 'experience-box t3',
                    datawow: '0.7s',
                    year: 'Skiils',
                    title: "HTMl, CSS, JAVASCRIPT, REACT, PYTHON, PHP,",
                    text: ''
                }
            ],
            contentbot : [
                /*{
                    id: 1,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.8s',
                    year: '2020 - 2023',
                    title: 'University of Maharani College',
                    office: '',
                    text: 'BCA'
                },
                {
                    id: 2,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '1s',
                    year: '2013 - 2017',
                    title: 'User Researcher at',
                    office: 'Apple',
                    text: 'User experience (UX) design is the process design teams use to create products.'
                },
                {
                    id: 3,
                    classname: 'experience-box t3',
                    datawow: '1.2s',
                    year: '2017 - 2020',
                    title: 'Lead Designer at',
                    office: 'Dripple',
                    text: 'User experience (UX) design is the process design teams use to create products.'
                }*/
            ]
        }
    }
    
    render() {
        return (
            <div className="animate-element delay5 fadeInUp">
                <div className="padding-bottom">
                    <div className="row">
                        {
                            this.state.contenttop.map(data => (
                                <div className="col-lg-4 col-12 last-col animate-element wow delay5 fadeIn" data-wow-delay={data.datawow} key={data.id}>
                                    <div className={data.classname}>
                                        <div className="box-inner">
                                        <h3 className="f-info bg-s2 color-d6">{data.year}</h3>
                                        <div className="exp-wrap">
                                            <div className="s-info color-d11 mg-b11">{data.title}</div>
                                            <p className="color-d13">
                                            {data.text}
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.contentbot.map(data => (
                            <div className="col-lg-4 col-12 last-col animate-element wow delay5 fadeIn" data-wow-delay={data.datawow} key={data.id}>
                                <div className={data.classname}>
                                    <div className="box-inner">
                                    <h3 className="f-info bg-s2 color-d6">{data.year}</h3>
                                    <div className="exp-wrap">
                                        <div className="s-info color-d11 mg-b11">{data.title} <Link to="#">{data.office}</Link></div>
                                        <p className="color-d13">
                                            {data.text} 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default TopEducation;
