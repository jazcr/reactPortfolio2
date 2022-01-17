import React from 'react';
import { ProjCon, ProjH1, ProjWrap, ProjIcon, ProjCardFront, ProjCardBack, ProjSub, ProjH2, ProjP, BackDesc, BackH1, BackP, Gif, ProjLinks, RepoLink, AppLink} from './projectComps';
import Icon1 from '../../images/shopping.svg';
import Icon2 from '../../images/alien.svg';
import Icon3 from '../../images/happy.svg';
import Gif1 from '../../images/belle.gif';
import Gif2 from '../../images/4th.gif';
import Gif3 from '../../images/GIFS.gif';
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
                                <Gif src={Gif1}/>
                                <BackH1>Belle L'JaRu</BackH1>
                                <BackDesc>An artificial storefront for skincare products. Includes a "Skin-type Quiz" that will recommend products to you. Complete with a checkout page powered by Stripe.</BackDesc>
                                <BackP>Technologies used: (MERN Stack) React.js, NodeJS, Express, MongoDB </BackP>
                                <ProjLinks>
                                    <RepoLink onClick={()=> window.open("https://github.com/jazcr/belle-ljru", "_blank")}>View Code</RepoLink>
                                    <AppLink onClick={()=> window.open("https://desolate-hamlet-45640.herokuapp.com/", "_blank")}>View Live App</AppLink>
                                </ProjLinks>
                            </ProjCardBack>
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={this.state.isFlipped.has(2)} flipDirection='horizontal'>
                            {/* PROJECT TWO */}
                            <ProjCardFront onClick={this.handleClick(2)} >
                                <ProjIcon src={Icon2}/>
                                <ProjH2>4thKind</ProjH2>
                                <ProjP>Blog Site</ProjP>
                            </ProjCardFront>
                            <ProjCardBack onClick={this.handleClick(2)}>
                                <Gif src={Gif2}/>
                                <BackH1>4thKind</BackH1>
                                <BackDesc>A simple blog site that allows users to create an account and blog about their extraterrestrial experiences. Users may also drop pins on the imbeded Google Map, indicating where they had an ancounter!</BackDesc>
                                <BackP>Technologies used: Handlebars.js, Express, Bcrypt, Sequelize, Bulma(CSS)  </BackP>
                                <ProjLinks>
                                    <RepoLink onClick={()=> window.open("https://github.com/jazcr/4thKind", "_blank")}>View Code</RepoLink>
                                    <AppLink onClick={()=> window.open("https://the-4th-kind.herokuapp.com/", "_blank")}>View Live App</AppLink>
                                </ProjLinks>
                            </ProjCardBack>
                        </ReactCardFlip>

                        <ReactCardFlip isFlipped={this.state.isFlipped.has(3)} flipDirection='horizontal'>
                            {/* PROJECT THREE */}
                            <ProjCardFront onClick={this.handleClick(3)} >
                                <ProjIcon src={Icon3}/>
                                <ProjH2>Make My Day App</ProjH2>
                                <ProjP> First App (Front End Only)</ProjP>
                            </ProjCardFront>
                            <ProjCardBack onClick={this.handleClick(3)}>
                                <Gif src={Gif3}/>
                                <BackH1>Make My Day App</BackH1>
                                <BackDesc>This simple app allows users to generate random “Happy GIFs”, inspirational quotes, and adorable fox images to help lift their spirits. Users can add any GIF, quote, or picture to their “Favorites” page.</BackDesc>
                                <BackP>Technologies used: HTML5, CSS with MD Bootstrap, JavaScript, Server-Side API</BackP>
                                <ProjLinks>
                                    <RepoLink onClick={()=> window.open("https://github.com/jazcr/Make_My_Day_app", "_blank")}>View Code</RepoLink>
                                    <AppLink onClick={()=> window.open("https://jazcr.github.io/Make_My_Day_app/index.html", "_blank")}>View Live App</AppLink>
                                </ProjLinks>
                            </ProjCardBack>
                        </ReactCardFlip>
                    </ProjWrap>
                </ProjCon>
            </>
        );
    };
};

export default Projects;
