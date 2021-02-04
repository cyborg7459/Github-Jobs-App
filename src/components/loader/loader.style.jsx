import styled from 'styled-components';

export const LoaderContainer = styled.div`
    position: fixed;
    top : 0;
    left : 0;
    height : 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    color: #fff;

    @media(max-width: 700px) {
        padding : 0 20px;
    }
`

export const LoaderContent = styled.div`
    display : flex;
    
    @media(max-width: 700px) {
        display : block;
    }
`

export const LoaderCirclesContainer = styled.div`
    display : flex;
    align-self: center;
    margin-left: 15px;

    @media(max-width : 700px) {
        justify-content: center;
        margin-top : 20px;
        margin-left : 0px;
    }
`

export const LoaderCircle = styled.div`
    background-color: #fff;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    margin: 5px;
    animation: bounce 0.5s ease-in infinite;

    &:nth-of-type(2n){
        animation-delay: 0.2s; 
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
    
        50% {
            transform: translateY(-10px);
        }
    }
`