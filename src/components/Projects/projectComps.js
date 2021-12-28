import styled from 'styled-components';

export const ProjCon = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #010606;

    @media only screen and (max-width: 768px) {
        height: 1100px;
    }

    @media only screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const ProjWrap = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media only screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ProjCardFront = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const ProjCardBack = styled.div`
    background: #ae9bda;
    color: #010106;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ProjDesc = styled.h2`
    font-size: 1rem;
    color: #010106;
`

export const ProjIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;

`

export const ProjH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin: 20px 0;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const ProjH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ProjP = styled.p`
    font-size: 1rem;
    text-align: center;
`
