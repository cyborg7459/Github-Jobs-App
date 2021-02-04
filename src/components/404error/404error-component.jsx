import './404error-style.scss';
import Scarecrow from '../../gallery/Scarecrow.png'

const ErrorPage = () => {
    return (
        <div className="error-container">
            <img src={Scarecrow} alt=""/>
            <h1>404 Error</h1>
            <h1 className='size13 text-center'>Sorry, we could not find what you were looking for</h1>
        </div>
    )
}

export default ErrorPage;