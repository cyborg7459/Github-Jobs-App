import './details-page-style.scss';
import { Row, Col } from 'react-bootstrap';
import logo from '../../gallery/briefcase.svg';

const DetailsPage = ({...props}) => {
    const job = props.job;
    let curDate = Date.now();
    let postDate = new Date(job.created_at);
    let difference = ((curDate - postDate)/(24 * 60 * 60 * 1000)).toFixed(); 
    let description = job.description.replace(/↵/g, '');
    return (
        <div className="details-page-container">
            <div className="details-page-inner">
                <Row>
                    <Col md={3} className = 'side-col mb-5 pr-xl-4'>
                        <p onClick={() => {
                            props.back();
                        }} className='back-btn size13'>
                            <i className="fas fa-angle-left mr-3"></i>
                            <span className='back-text'>Back to Search</span>
                        </p>
                        <h1 className='mt-5 text-muted size12'>HOW TO APPLY</h1>
                        <div className='size11' dangerouslySetInnerHTML={{__html: job.how_to_apply}} ></div>
                    </Col>
                    <Col className='pl-md-5' md={8}>
                        <h1>{job.title}</h1>
                        <h5 className='text-muted'>
                            <i className="far mr-3 fa-clock"></i>
                            {difference} days ago
                        </h5>
                        <div className='mt-5 d-flex'>
                            <img className='logo mr-4' src={job.company_logo ? job.company_logo : logo} alt=""/>
                            <div className='d-flex flex-column justify-content-center'>
                                <h3 className='size13'>{job.company}</h3>
                                <h3 className='size13 text-muted'>
                                    <i className="mr-3 fas fa-globe-africa"></i>
                                    {job.location}
                                </h3>
                            </div>
                        </div>
                        <div className='mt-5 size11' dangerouslySetInnerHTML={{__html: description}}></div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default DetailsPage;