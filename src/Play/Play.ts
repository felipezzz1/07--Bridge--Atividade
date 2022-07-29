import IConsole from "../Console/interfaces/IConsole";
import IPlay from "./Interfaces/IPlay";

export default class Play implements IPlay{
    constructor(console : IConsole){};

    playing(): void {
        console.log("Iniciando o Jogo");
    }
    result(): void {
        console.log("********** Iniciado **********");
    }
}