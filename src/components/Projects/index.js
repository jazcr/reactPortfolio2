import React from 'react';
import { ProjCon, ProjH1, ProjWrap, ProjIcon, ProjCardFront, ProjCardBack, ProjSub, ProjH2, ProjP, BackDesc, BackH1, BackP} from './projectComps';
import Icon1 from '../../images/shopping.svg';
import Icon2 from '../../images/alien.svg';
import Icon3 from '../../images/happy.svg';
import ReactCardFlip from 'react-card-flip';

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
        isFlipped: new Set()
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(id) {
        return (e) => {
        e.preventDefault();
        let isFlipped = new Set(this.state.isFlipped);
        //identifying/ deleting IDs on cards when flipped so it can flip one card at a time instead of all at once
        if (isFlipped.has(id)) {
            isFlipped.delete(id);
        } else {
            isFlipped.add(id);
        }
        this.setState({ isFlipped });
        };
    }
    
    render() {
        return (
            <>
                <ProjCon id="projects">
                    <ProjH1>Projects</ProjH1>
                    <ProjSub>Each of these projects were created in a team environment.<br></br> Click on one to learn more! </ProjSub>
                    <ProjWrap>
                        <ReactCardFlip isFlipped={this.state.isFlipped.has(1)} flipDirection='horizontal'>
                            {/* PROJECT ONE */}
                            <ProjCardFront onClick={this.handleClick(1)} >
                                <ProjIcon src={Icon1}/>
                                <ProjH2>Belle L'JaRu</ProjH2>
                                <ProjP>E-Commerce Site</ProjP>
                            </ProjCardFront>
                            <ProjCardBack onClick={this.handleClick(1)}>
                                <BackH1>Belle L'JaRu</BackH1>
                                <BackDesc>An artificial storefront for skincare products. Includes a "Skin-type Quiz" that will recommend products to you. Complete with a checkout page powered by Stripe.</BackDesc>
                                <BackP>Technologies used: (MERN Stack) React.js, NodeJS, Express, MongoDB </BackP>
                            </ProjCardBack>
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={this.state.isFlipped.has(2)} flipDirection='horizontal'>
                            {/* PROJECT TWO */}
                            <ProjCardFront onClick={this.handleClick(2)} >
                                <ProjIcon src={Icon2}/>
                                <ProjH2>4thKind</ProjH2>
                                <ProjP>Description</ProjP>
                            </ProjCardFront>
                            <ProjCardBack onClick={this.handleClick(2)}>
                                <BackH1>Project Title222</BackH1>
                                <BackDesc>Description of Project222</BackDesc>
                                <BackP>Description</BackP>
                            </ProjCardBack>
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={this.state.isFlipped.has(3)} flipDirection='horizontal'>
                            {/* PROJECT THREE */}
                            <ProjCardFront onClick={this.handleClick(3)} >
                                <ProjIcon src={Icon3}/>
                                <ProjH2>Project Title</ProjH2>
                                <ProjP>Description</ProjP>
                            </ProjCardFront>
                            <ProjCardBack onClick={this.handleClick(3)}>
                                <BackH1>Project 3333</BackH1>
                                <BackDesc>Description of Project333</BackDesc>
                                <BackP>Description</BackP>
                            </ProjCardBack>
                        </ReactCardFlip>
                    </ProjWrap>
                </ProjCon>
            </>
        );
    };
};

export default Projects;
