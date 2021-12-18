import React from 'react'
import { ProjCon, ProjH1, ProjWrap, ProjIcon, ProjCard, ProjH2, ProjP} from './projectComps';
import Icon1 from '../../images/svgAbt.svg';
import Icon2 from '../../images/svgDes.svg';
import Icon3 from '../../images/svgEm.svg';

const Projects = () => {
    return (
        <>
            <ProjCon id="projects">
                <ProjH1>Projects</ProjH1>
                <ProjWrap>
                    <ProjCard>
                        <ProjIcon src={Icon1}/>
                        <ProjH2>Project Title</ProjH2>
                        <ProjP>Description</ProjP>
                    </ProjCard>
                    <ProjCard>
                        <ProjIcon src={Icon2}/>
                        <ProjH2>Project Title</ProjH2>
                        <ProjP>Description</ProjP>
                    </ProjCard>
                    <ProjCard>
                        <ProjIcon src={Icon3}/>
                        <ProjH2>Project Title</ProjH2>
                        <ProjP>Description</ProjP>
                    </ProjCard>
                </ProjWrap>
            </ProjCon>
        </>
    )
}

export default Projects;
