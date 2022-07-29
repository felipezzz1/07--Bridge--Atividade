import IConsole from "../Console/interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(console : IConsole){
        super(console);
    }

    challenge() : void{
        console.log("Desafio iniciado");
    }

}