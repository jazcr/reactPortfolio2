import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonComp';
import { 
    JumboContainer,
    VideoBg,
    JumboBg,
    JumboContent,
    JumboH1,
    JumboP,
    JumboBtnWrapper,
    ArrowForward,
    ArrowRight,

} from './JumboComps';

const Jumbotron = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (

        <JumboContainer>
            <JumboBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </JumboBg>
            <JumboContent>
                <JumboH1>Welcome</JumboH1>
                <JumboP>Check out my recent projects</JumboP>
                <JumboBtnWrapper>
                    <Button 
                        to='signup' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        >
                        View My Resume {hover ? <ArrowForward/> : <ArrowRight />}
                    </Button>
                </JumboBtnWrapper>
            </JumboContent>
        </JumboContainer>
    )
}

export default Jumbotron;