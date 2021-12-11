import React from 'react';
import { Button } from 'react-scroll';
import { 
    InfoCon, 
    InfoWrapper, 
    Column1, 
    Column2, 
    TextWrap, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    ImgWrap, 
    Img } from './infoComps';


const InfoSection = () => {
    return (
        <>
            <InfoCon>
                <InfoWrapper>
                    <Column1>
                        <TextWrap>
                            <TopLine>Top</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrap>
                                <Button to="home"></Button>
                            </BtnWrap>
                        </TextWrap>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img />
                        </ImgWrap>
                    </Column2>
                </InfoWrapper>
            </InfoCon> 
        </>
    )
}

export default InfoSection;
