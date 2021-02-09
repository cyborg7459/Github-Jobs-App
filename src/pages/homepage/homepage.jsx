import React from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import './homepage-style.scss';
import Loader from '../../components/loader/loader.component';
import ErrorPage from '../../components/404error/404error-component';
import DisplayCard from '../../components/display-card/display-card-component';
import Paginator from '../../components/paginator/paginator-component';

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
        selectedJob : {}
    }

    search = (url) => {
        this.setState({
            isLoading : true
        });
        axios.get(url, {
            params : {
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
        if(description === "")
            alert('Kindly enter a search phrase');
        else {
            const url = `https://obscure-mesa-98003.herokuapp.com/https://jobs.github.com/positions.json?search=${description}`;
            this.search(url);
        }
    }

    searchByLocation = () => {
        const location = document.getElementById('location').value;
        if(location === "")
            alert("Please enter a location");
        else {
            const url = `https://obscure-mesa-98003.herokuapp.com/https://jobs.github.com/positions.json?location=${location}`;
            this.search(url);
        }
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

    render() {
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
                                                    <DisplayCard key={job.id} job={job}/>
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

export default Homepage;