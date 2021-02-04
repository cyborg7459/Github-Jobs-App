import React from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import './homepage-style.scss';
import Loader from '../../components/loader/loader.component';
import ErrorPage from '../../components/404error/404error-component';
import DisplayCard from '../../components/display-card/display-card-component';

class Homepage extends React.Component {
    
    state = {
        jobs : [],
        isLoading : false,
        show404 : false,
        displayJobs : [],
        currentPage : 0, 
        totalPages : 0
    }

    searchByDescription = () => {
        this.setState({
            isLoading : true
        })
        const description = document.getElementById('search-phrase').value;
        if(description === "")
            alert('Kindly enter a search phrase');
        else {
            const url = `https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?search=${description}`;
            axios.get(url , {
                params : {
                    client_id: 'b85430361f60035ae896',
                    client_secret: 'a16fb97dede93c482e81b3c8843481e1d1c12353'
                }
            })
            .then(res => {
                if(res.data == null || res.data.length === 0) {
                    this.setState({
                        show404 : true,
                        isLoading: false
                    })
                }
                else {
                    this.setState({
                        jobs : res.data,
                        isLoading : false,
                        totalPages : Math.ceil(res.data.length/6),
                        currentPage : 1,
                        show404 : false,
                        displayJobs : res.data.slice(0,6)
                    })
                }                
            })
        }
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
                            <input id='location' className='mb-4' type="text" placeholder="Enter location"/>
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
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Homepage;