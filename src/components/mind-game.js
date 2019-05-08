import React,{useState} from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import shuffle from '../utils/shuffle';
import '../css/mind-game.css';

const MindGame = () => {
    let tiles = [];
    const [Character, setCharacter] = useState(['Please select your expertise']);
    const [game, setGame] = useState(0);
    const [score, setScore] = useState(0);
    const [step, setStep] = useState(0);
    const [scoreCard, setScoreCard] = useState(0);
    var currentTile = '';

    function handleClick(e){
        if(!e.classList.contains('revealed')){
            if(currentTile === ''){
                e.classList.add('revealed');
                currentTile = e.innerHTML;
                setStep(1);
                console.log('clicked' + currentTile);
            }else{
                if(e.innerHTML === currentTile){
                    e.classList.add('revealed', 'touched');
                    let openTiles = document.querySelectorAll('.board > div.revealed');
                    for(let openTile of openTiles){
                        openTile.classList.add('touched');
                    }
                    setScore(score => score + 5);
                    currentTile = '';
                    let remainTiles =  document.querySelectorAll('.board > div:not(.touched)');
                    if(remainTiles.length === 0){
                        setScoreCard(1);
                        setGame(0);
                    }
                }else{
                    e.classList.add('revealed');
                    setTimeout(function(){
                        setStep(0);
                        currentTile = '';
                        let Tiles = document.querySelectorAll('.board > div.revealed');
                        for(let tile of Tiles){
                            if(!tile.classList.contains('touched')){
                                tile.classList.remove('revealed');
                            }
                        }
                    },500);
                    
                }
            }
        }
    }
    
    function getRandomCharacters(answer){
        if(answer == '0'){
            return;
        }
        setCharacter(['loading...']);
        let setOne = ['🍊','🌽','🍔','🍗','🍪','🍕','🍨','🍹','🍵','🎂','🍇','🍅','🍎','🍑','🍬','🍫'];
        let tileContent;
        switch (answer) {
            case 'level1':
                for(var i = 0; i<5; i++){
                    let Tlength = tiles.length;
                    tileContent = setOne[Math.floor((setOne.length - 1) * Math.random())];
                    tiles[Tlength] = <div key={Math.random()} onClick={event => handleClick(event.target)}>{tileContent}</div>;
                    tiles[Tlength+1] = <div key={Math.random()} onClick={event => handleClick(event.target)}>{tileContent}</div>;
                }
                break;
            case 'level2':
                for(var i = 0; i<15; i++){
                    let Tlength = tiles.length;
                    tileContent = setOne[Math.floor((setOne.length - 1) * Math.random())]+setOne[Math.floor((setOne.length - 1) * Math.random())];
                    tiles[Tlength] = <div key={Math.random()} onClick={event => handleClick(event.target)}>{tileContent}</div>;
                    tiles[Tlength+1] = <div key={Math.random()} onClick={event => handleClick(event.target)}>{tileContent}</div>;

                }
                break;
            case 'level3':
                for(var i = 0; i<15; i++){
                    let Tlength = tiles.length;
                    tileContent = setOne[Math.floor((setOne.length - 1) * Math.random())]+setOne[Math.floor((setOne.length - 1) * Math.random())]+setOne[Math.floor((setOne.length - 1) * Math.random())];
                    tiles[Tlength] = <div key={Math.random()} onClick={event => handleClick(event.target)}>{tileContent}</div>;
                    tiles[Tlength+1] = <div key={Math.random()} onClick={event => handleClick(event.target)}>{tileContent}</div>;
                }
                break;
        }
            shuffle(tiles);
            setGame(1);
            var childsDivs = document.querySelectorAll('.board > div');
            for(let childsDiv of childsDivs){
                childsDiv.setAttribute('key',Math.random());
            }
            return tiles
    }

    return(
        <HelmetProvider>
            <Helmet>
                <title>Mind Game | React Games</title>
                <meta name="description" content="Mind Game built with React Js."/>
            </Helmet>
            <div className="wrapper">
                <div className="mind-game">
                    <h1 style={{textAlign:'center'}}>Mind Game</h1>
                    <div className="m_game-area" style={game && !scoreCard ? {display: 'block'} : {display: 'none'}}>
                        <p>{score}</p>
                        <div className="board">
                            {Character}
                        </div>
                    </div>
                    <div className="pop-up" style={game || scoreCard ? {display: 'none'} : {display: 'block'}}>
                        <label>
                            <select onChange={function(e){setCharacter(getRandomCharacters(e.target.value))}}>
                                <option value="0">Select Your Expertise</option>
                                <option value="level1">I don't play</option>
                                <option value="level2">I play often</option>
                                <option value="level3">I'm an expert</option>
                            </select>
                        </label>
                    </div>
                    <div className="pop-up" style={scoreCard ? {display: 'block'} : {display: 'none'}}>
                        <p>You scroe is {score}.</p>
                        <p><a href="" onClick={() => window.location.reload }>Refresh</a> to Play again</p>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default MindGame;