import React, {useState} from 'react';
import { ProjCon, ProjH1, ProjWrap, ProjIcon, ProjCardFront, ProjCardBack, ProjDesc, ProjH2, ProjP} from './projectComps';
import Icon1 from '../../images/svgAbt.svg';
import Icon2 from '../../images/svgDes.svg';
import Icon3 from '../../images/svgEm.svg';
import ReactCardFlip from 'react-card-flip';
const Projects = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
        console.log("Card flipped");
    };

    return (
        <>
              {/* <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <YOUR_FRONT_CCOMPONENT>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_FRONT_CCOMPONENT>

        <YOUR_BACK_COMPONENT>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </YOUR_BACK_COMPONENT> */}
      {/* </ReactCardFlip> */}
            <ProjCon id="projects">
                <ProjH1>Projects</ProjH1>
                <ProjWrap>
                    <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
                    <ProjCardFront onClick={handleClick} >
                        <ProjIcon src={Icon1}/>
                        <ProjH2>Project Title</ProjH2>
                        <ProjP>Description</ProjP>
                    </ProjCardFront>
                    <ProjCardBack onClick={handleClick}>
                        <ProjH2>Project Title</ProjH2>
                        <ProjDesc>Description of Project</ProjDesc>
                        <ProjP>Description</ProjP>
                    </ProjCardBack>
                    </ReactCardFlip>
                    <ProjCardFront>
                        <ProjIcon src={Icon2}/>
                        <ProjH2>Project Title</ProjH2>
                        <ProjP>Description</ProjP>
                    </ProjCardFront>
                    <ProjCardFront>
                        <ProjIcon src={Icon3}/>
                        <ProjH2>Project Title</ProjH2>
                        <ProjP>Description</ProjP>
                    </ProjCardFront>
                </ProjWrap>
            </ProjCon>
        </>
    )
}

export default Projects;
