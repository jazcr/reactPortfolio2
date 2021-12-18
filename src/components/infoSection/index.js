import React from 'react';
import { Button } from '../ButtonComp';
import { 
    InfoCon,
    InfoRow, 
    InfoWrapper, 
    Column1, 
    Column2, 
    TextWrap, 
    Heading, 
    Subtitle, 
    BtnWrap, 
    ImgWrap, 
    Img } from './infoComps';


const InfoSection = ({
    lightBg, 
    id,
    imgStart, 
    lightText, 
    headLine, 
    darkText, 
    description, 
    buttonLabel, 
    img, 
    alt,
    primary, 
    dark, 
    dark2
    }) => {
    return (
        <>
            <InfoCon lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrap>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to="home" 
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
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
