import styled from 'styled-components';

export const ProjCon = styled.div`
    height: 860px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e6e6e6;

    @media only screen and (max-width: 1000px) {
        height: 1100px;
        justify-content: flex-start;
        padding-top: 40px;
    }
    @media only screen and (max-width: 768px) {
        justify-content: flex-start;
        padding-top: 40px;
        height: 1500px;
    }

    /* @media only screen and (max-width: 480px) {
        
    } */
`

export const ProjWrap = styled.div`
    max-width: 1000px;
    height: auto;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 5px;
    padding: 20px 5px;

    @media only screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
        width: 70%;
    }
    @media only screen and (max-width: 550px) {
        grid-template-columns: 1fr;
        padding: 0;
        width: 90%;
    }
`

export const ProjCardFront = styled.div`
    background: #010106;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-height: 600px;
    min-height: 450px;
    min-width: 325px;
    padding: 30px;
    box: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        min-height: 275px;
    }

`
export const ProjCardBack = styled.div`
    background: #ae9bda;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-height: 600px;
    min-height:450px;
    min-width: 325px;
    padding: 30px;
    box: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        min-height: 275px;
    }

`

export const ProjSub = styled.h2`
    font-size: 1.5rem;
    text-align: center;
    color: #010106;
    padding: 10px 0;
`
export const BackDesc = styled.div`
    font-size: 1rem;
    color: #010106;
    text-align: center;
`

export const ProjIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`

export const ProjH1 = styled.h1`
    font-size: 3rem;
    color: #010106;
    margin: 20px 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const ProjH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #ae9bda;
`
export const Gif = styled.img`
    max-width: 200px;
    margin-bottom: 10px;
`
export const BackH1 = styled.h2`
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: #010106;
`

export const ProjP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #ae9bda;
`

export const BackP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #010106;
    margin-top: 20px;
`
export const ProjLinks = styled.div`
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
    
`
export const RepoLink = styled.p`
    font-size: 1rem;
    padding: 10px;

    &:hover {
        transform: scale(1.04);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        border-bottom: 1px solid #010106;
    }
    
`
export const AppLink = styled.p`
    font-size: 1rem;
    padding: 10px;

    &:hover {
        transform: scale(1.04);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        border-bottom: 1px solid #010106;
    }
`