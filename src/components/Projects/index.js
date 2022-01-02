import React, {useState, useEffect} from 'react';
import { ProjCon, ProjH1, ProjWrap, ProjIcon, ProjCardFront, ProjCardBack, ProjDesc, ProjH2, ProjP} from './projectComps';
import Icon1 from '../../images/svgAbt.svg';
import Icon2 from '../../images/svgDes.svg';
import Icon3 from '../../images/svgEm.svg';
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
                    <ProjWrap>
                        <ReactCardFlip isFlipped={this.state.isFlipped.has(1)} flipDirection='horizontal'>
                            {/* PROJECT ONE */}
                            <ProjCardFront onClick={this.handleClick(1)} >
                                <ProjIcon src={Icon1}/>
                                <ProjH2>Belle L'jaru</ProjH2>
                                <ProjP>E-Commerce Site</ProjP>
                            </ProjCardFront>
                            <ProjCardBack onClick={this.handleClick(1)}>
                                <ProjH2>Belle L'jaru</ProjH2>
                                <ProjDesc>An artificial storefront for skincare products. Includes a "Skin-type Quiz" that will recommend products to you. Complete with a checkout page powered by Stripe.</ProjDesc>
                                <ProjP>Technologies used: (MERN Stack) React.js, NodeJS, Express, MongoDB </ProjP>
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
                                <ProjH2>Project Title222</ProjH2>
                                <ProjDesc>Description of Project222</ProjDesc>
                                <ProjP>Description</ProjP>
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
                                <ProjH2>Project 3333</ProjH2>
                                <ProjDesc>Description of Project333</ProjDesc>
                                <ProjP>Description</ProjP>
                            </ProjCardBack>
                        </ReactCardFlip>
                    </ProjWrap>
                </ProjCon>
            </>
        );
    };
};

export default Projects;
