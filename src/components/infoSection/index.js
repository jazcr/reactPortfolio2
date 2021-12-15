import React from 'react';
import { Button } from '../ButtonComp';
import { 
    InfoCon,
    InfoRow, 
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


const InfoSection = ({
    lightBg, 
    id,
    imgStart, 
    topLine, 
    lightText, 
    headLine, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt}) => {
    return (
        <>
            <InfoCon lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrap>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to="home">{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrap>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoCon> 
        </>
    )
}

export default InfoSection;
