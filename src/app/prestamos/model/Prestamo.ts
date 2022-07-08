import { Clients } from "src/app/clients/model/Clients";
import { Game } from "src/app/game/model/Game";

export class Prestamo {
    id: number;
    game: Game;
    client: Clients;
    fechaIn: Date;
    fechaOut: Date;

}
