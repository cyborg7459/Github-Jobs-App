import React from 'react';
import { Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import './display-card-style.scss';
import briefcase from '../../gallery/briefcase.svg';

class DisplayCard extends React.Component {

    getJobDetails = () => {
        this.props.history.push(`/job/${this.props.job.id}`);
    }

    render() {
        return (
            <Col md={6} xl={4} className="display-card-container">
                <div onClick = {() => {
                    this.getJobDetails();
                }} className="display-card">
                    <div className="img-container">
                        <img className='top-img' src={this.props.job.company_logo ? this.props.job.company_logo : briefcase} alt=""/>
                    </div>
                    <div className="card-content">
                        <h1 className='text-center size12'>
                            {this.props.job.title}
                        </h1>
                        <hr/>
                        <h1 className="size11 text-muted">
                            {this.props.job.company}
                        </h1>
                        
                        <div className="size10 text-muted text-center info-text">
                            {this.props.job.type}, {this.props.job.location}
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}

export default withRouter(DisplayCard);