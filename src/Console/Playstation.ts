import IConsole from "./interfaces/IConsole";

export default class Playstation implements IConsole{
    constructor(){
        this.configureGame();
        console.log("Playstation: Console pronto");
    }
    
    configureGame(): void {
        this.authToken();
        console.log("Playstation: Configurando o Console");
    }
    authToken(): void {
        console.log("Playstation: Autorizando o Console");
    }
    
}