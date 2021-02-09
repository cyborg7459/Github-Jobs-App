import './paginator-style.scss';

const Paginator = ({...props}) => {
    return (
        <div className="paginator">
            <h1 className='size15 text-center'>
                <i 
                    className={"fas fa-chevron-left mr-5 " + (props.isPrevAvailable ? " " : " disabled")}
                    onClick = {() => {
                        if(props.isPrevAvailable) {
                            props.prevPage();
                        }
                    }}
                ></i>
                Page {props.currentPage} of {props.totalPages}
                <i 
                    className={"fas fa-chevron-right ml-5 " + (props.isNextAvailable ? " " : " disabled")}
                    onClick = {() => {
                        if(props.isNextAvailable) {
                            props.nextPage();
                        }
                    }}
                ></i>
            </h1>
        </div>
    )
}

export default Paginator;