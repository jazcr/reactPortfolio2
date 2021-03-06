import styled from 'styled-components';

export const InfoCon = styled.div`
    color: #e6e6e6;
    background: ${({lightBg}) => (lightBg ? '#e6e6e6' : '#010106')};

    @media screen and (max-width: 768px) {
        padding: 50px 0;
        align-items: center;
        justify-content: center;
    }
`

export const InfoWrapper = styled.div`

    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'`: `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
        height: 80%;
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 768px) {
        height: 50%;
    }

`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 768px) {
        height: 50%;

    }

`
export const TextWrap = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
        padding-bottom: 5px;
        text-align: center;
    }

`
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010106')};


    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010106' : '#e6e6e6')};

    @media screen and (max-width: 768px) {
        padding-bottom: 5px;
        max-width: 100%;
    }

`
export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
        padding-bottom: 5px;
        justify-content: center;
    }

`

export const ImgWrap = styled.div`
    max-width: 500px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin-bottom: 10px;
    padding-right: 20px;
`
