import IConsole from "./Console/interfaces/IConsole";
import Playstation from "./Console/Playstation";
import Xbox from "./Console/Xbox";
import AdvancedPlay from "./Play/AdvancedPlay";
import Play from "./Play/Play";

function startPlay(videogame : IConsole){
    console.log("Aguarde...");
    const play = new Play(videogame);
    play.playing();
    play.result();
}

function startAdvancedPlay(videogame : IConsole){
    console.log("Aguarde...");
    const play = new AdvancedPlay(videogame);
    play.playing();
    play.result();
    play.challenge();
}

startAdvancedPlay(new Playstation);
startAdvancedPlay(new Xbox);
