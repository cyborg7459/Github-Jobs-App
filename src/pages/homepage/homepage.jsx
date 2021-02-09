import React from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import './homepage-style.scss';
import Loader from '../../components/loader/loader.component';
import ErrorPage from '../../components/404error/404error-component';
import DisplayCard from '../../components/display-card/display-card-component';
import Paginator from '../../components/paginator/paginator-component';
import DetailsPage from '../details-page/details-page';

class Homepage extends React.Component {
    
    state = {
        jobs : [],
        isLoading : false,
        show404 : false,
        displayJobs : [],
        currentPage : 1, 
        totalPages : 5,
        isNextAvailable : true,
        isPrevAvailable : true,
        selectedJob : {
            'company' : "Wärtsilä",
            'company_logo' : "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbytZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fcfe3e70ea2235e975d7effe75d1e70103154f7c/NEW_wartsila-rgb150.jpg",
            'company_url' : "https://careers.wartsila.com/search/?createNewAlert=false&q=&optionsFacetsDD_title=&optionsFacetsDD_country=NL&optionsFacetsDD_customfield2=&optionsFacetsDD_customfield1=&optionsFacetsDD_customfield3=",
            'created_at' : "Tue Feb 09 09:16:27 UTC 2021",
            'description' : "<p><em>Are you a Front-end Developer and happen to ask yourself how can your work help in this global environmental challenge that we all are facing? Join a team of more than 80 international professionals that are creating the most innovative predictive tools for the maritime industry. Help our Digital Development team in shaping a platform that focuses on detecting anomalies that indicate potential failures or reveal conditions involving the consumption of excess fuel. You will build great solutions that will ultimately help our customers in saving energy and resources while gaining safety.</em></p>↵<p>Our DPD (Digital Product Development) organization develops digital products for Wärtsilä business units in Marine Power, Marine Systems and Energy. DPD uses a common technology stack to generate insight from operational data, to make for example predictive maintenance- or efficiency optimization products such as Wärtsilä Expert Insight. Our organization is growing from around 100 to 120 professionals, which is why we are looking for 4 Front-end developers to join our team.</p>↵<p>As a Front-end Developer you will work together with other developers on web-based software that is used both internally and externally, giving domain experts and customers insights into their operation and helping them in their day-to-day jobs. Besides working on the user-facing parts you will also contribute to the internal technical, shared packages and tooling to improve the quality of life for yourself and your peers, therefor affinity for both the technical and visual side of front-end development is desired.</p>↵<p>Our DPD organization consists of around 15 agile teams organized in 4 tribes, with clear focus areas, led by Chief Product Owners. As a front-end developer you will be part of one of the agile teams and will develop and maintain our digital products.</p>↵<p>These are permanent positions and would preferably be located at our office in Drunen, Netherlands</p>↵<p><strong>As a Front-end Developer your work will focus on these responsibilities:</strong></p>↵<ul>↵<li>You build and develop our new responsive web app that works well on a variety of screen resolutions and browsers.</li>↵<li>You develop new features for our products and services which provide our customers with actionable information through multiple channels.</li>↵<li>You participate in end to end development through prototyping, validation, implementation, launch, and further iterations.</li>↵<li>You actively contribute to continuous integration efforts and improvements on our way of working.</li>↵<li>You collaborate with UX designers to develop appealing and intuitive interfaces based on graphic designs or mock-ups.</li>↵</ul>↵<p><strong>To be successful in this role we expect you to have:</strong></p>↵<ul>↵<li>You have a Bachelor or Master’s degree in Computer Science or at least 3 years of relevant experience with front-end-development specifically: JavaScript (including ESNext and/or TypeScript), HTML5, CSS and/or Sass.</li>↵<li>Experience with and/or skills in UX design/development; you're able to create an aesthetically pleasing and user experience friendly interface based on (or without any) minimal mock-ups.</li>↵<li>Experience with React or similar technologies like Angular or Vue.js.</li>↵<li>Experience with automated unit, visual, and/or contract testing, we use Jest for this.</li>↵<li>Experience with back-end development (e.g. Java, Python) or experience working with BaaS (e.g. Firebase) is a plus.VOl</li>↵<li>Experience developing online applications, especially those containing a lot of data, is a plus.</li>↵</ul>↵<p><strong>Why you and us</strong></p>↵<p>We have an amazing team and a clear purpose to exist. As part of the Digital Product Development Team you will be an integral part in the development of digital products and tools across our business’ and will be key in unlocking the value of operational data all to enhance our performance-based business and support the growth of our lifecycle solutions business. Both our Digital Product Development teams in Drunen and Helsinki fosters an inclusive high-performance culture that people enjoy working in.</p>↵<p>We are passionate about the work we do and hope to find a colleague with a shared passion for smart technologies and a sustainable future.</p>↵<p>We offer a competitive salary and promote a healthy work life balance. We foster openness, respect and trust.</p>↵<p>All our employees are encouraged to utilise the variety of training activities, learning solutions and self-study materials that we have to offer which supports the opportunity to further develop your talents and competencies within a very global working environment, in an ambitious and growth orientated organisation.</p>↵<p><strong>Contact &amp; next steps</strong></p>↵<p>Does this sound like the job for you? If yes, we hope to hear from you before the application deadline 02-03-2021, through submitting your application through our careers portal.</p>↵<p>In case you have questions about the process please contact Dré Schellekens (Corporate Recruiter) by email: <a href='mailto:dre.schellekens@wartsila.com'>dre.schellekens@wartsila.com</a></p>↵",
            'how_to_apply' : "<p>Apply via our career portal or send an e-mail to <a href='mailto:dre.schellekens@wartsila.com'>dre.schellekens@wartsila.com</a></p>",
            'id' : "44ebbf1b-89cb-48c3-9102-5e385db18810",
            'location': "Drunen, Netherlands",
            'title' : "Front-End Developer",
            'type' : "Full Time",
            'url' : "https://jobs.github.com/positions/44ebbf1b-89cb-48c3-9102-5e385db18810"
        },
        searchLocation : "",
        searchDescription : ""
    }

    componentDidMount() {
        this.search();
    }

    search = () => {
        this.setState({
            isLoading : true
        });
        axios.get('https://obscure-mesa-98003.herokuapp.com/https://jobs.github.com/positions.json', {
            params : {
                'description' : this.state.searchDescription,
                'location' : this.state.searchLocation,
                'client_id' : 'b85430361f60035ae896',
                'client_secret' : '77931ca184a8d34502736445e9cc91450cc3b5bc'
            }
        })
        .then(res => {
            if(res.data == null || res.data.length === 0) {
                this.setState({
                    show404 : true,
                    isLoading: false,
                    jobs : [], 
                    displayJobs : []
                })
            }
            else {
                this.setState({
                    jobs : res.data,
                    isLoading : false,
                    totalPages : Math.ceil(res.data.length/6),
                    currentPage : 1,
                    show404 : false,
                    displayJobs : res.data.slice(0,6),
                    isPrevAvailable : false
                });
                if(res.data.length > 6) {
                    this.setState({
                        isNextAvailable : true
                    });
                }
            }                
        })
        .catch(err => {
            this.setState({
                show404 : true,
                isLoading : false,
                jobs : [],
                displayJobs : []
            });
        })
    }

    searchByDescription = () => { 
        const description = document.getElementById('search-phrase').value;
        this.setState({
            searchDescription : description
        }, () => {
            this.search();
        })
    }

    searchByLocation = () => {
        const location = document.getElementById('location').value;
        this.setState({
            searchLocation : location
        }, () => {
            this.search();
        })
    }

    nextPage = () => {
        this.setState({
            currentPage : this.state.currentPage + 1,
            isPrevAvailable : true
        }, () => {
            const start = (this.state.currentPage-1)*6;
            this.setState({
                displayJobs : this.state.jobs.slice(start, start+6)
            })
            if(this.state.currentPage === this.state.totalPages) {
                this.setState({
                    isNextAvailable : false
                })
            }
        })
    }

    previousPage = () => {
        this.setState({
            currentPage : this.state.currentPage - 1,
            isNextAvailable : true
        }, () => {
            const start = (this.state.currentPage-1)*6;
            this.setState({
                displayJobs : this.state.jobs.slice(start, start+6)
            })
            if(this.state.currentPage === 1) {
                this.setState({
                    isPrevAvailable : false
                })
            }
        })
    }
    
    select = (id) => {
        const selectedJob = this.state.jobs.filter(job => job.id === id)[0];
        this.setState({
            selectedJob
        });
        console.log(selectedJob);
    }

    render() {
        if(this.state.selectedJob) {
            return (
                <DetailsPage job = {this.state.selectedJob} />
            )
        }
        else {
            return (
                <div className="homepage-container">
                    {
                        this.state.isLoading ? <Loader text='Finding the perfect jobs for you' /> : null
                    }
                    <div className="homepage-inner">
                        <div className="search-container">
                            <div className="overlay">
                                <div className="input-region">
                                    <input id='search-phrase' type="text" placeholder='Title, companies, expertise or benefits'/>
                                    <button onClick = {() => {this.searchByDescription()}}>Search</button>
                                </div>
                            </div>
                        </div>
                        <Row className='main-row'>
                            <Col md={4} xl={3} className="sidebar pl-0">
                                <h1 className='size13 mb-0'>Choose location</h1>
                                <hr className='mt-2 mb-4'></hr>
                                <input id='location' className='mb-3' type="text" placeholder="Enter location"/>
                                <button onClick = {() => {this.searchByLocation()}}>Search by location</button>
                                <button className='btn-danger mt-3' onClick={() => {
                                    this.setState({
                                        searchLocation: ""
                                    }, () => {
                                        this.search();
                                    })
                                }}>Clear location filter</button>
                            </Col>
                            <Col md={8} xl={9} className='jobcard-container'>
                                {
                                    this.state.show404 ? (
                                        <ErrorPage />
                                    ) : (
                                        <Row className='pb-5'>
                                            {
                                                this.state.displayJobs.map(job => {
                                                    return (
                                                        <DisplayCard select={this.select} key={job.id} job={job}/>
                                                    )
                                                })
                                            }
                                        </Row>       
                                    )
                                }
                                {
                                    (this.state.jobs.length > 0 ) ?
                                    <Paginator currentPage = {this.state.currentPage} totalPages = {this.state.totalPages} isNextAvailable = {this.state.isNextAvailable} isPrevAvailable = {this.state.isPrevAvailable} nextPage = {this.nextPage} prevPage = {this.previousPage} />
                                    : null
                                }
                                
                            </Col>
                        </Row>
                    </div>
                </div>
            )
        }
    }
}

export default Homepage;