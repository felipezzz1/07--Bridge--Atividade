import IConsole from "./interfaces/IConsole";

export default class Xbox implements IConsole{
    constructor(){
        this.configureGame();
        console.log("Xbox: Console pronto");
    }
    
    configureGame(): void {
        this.authToken();
        console.log("Xbox: Configurando o Console");
    }
    authToken(): void {
        console.log("Xbox: Autorizando o Console");
    }
    
}