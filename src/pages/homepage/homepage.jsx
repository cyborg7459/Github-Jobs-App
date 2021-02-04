import React from 'react';
import { Row, Col } from 'react-bootstrap';

import './homepage-style.scss';

class Homepage extends React.Component {
    
    state = {
        jobs : [],
        isLoading : false
    }

    render() {
        return (
            <div className="homepage-container">
                <div className="homepage-inner">
                    <div className="search-container">
                        <div className="overlay">
                            <div className="input-region">
                                <input id='search-phrase' type="text" placeholder='Title, companies, expertise or benefits'/>
                                <button>Search</button>
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

                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Homepage;