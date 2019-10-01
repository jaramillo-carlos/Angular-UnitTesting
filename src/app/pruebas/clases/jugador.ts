export class Jugador {

    private _vida: number;

    constructor() {
        this._vida = 100;
    }

    recibeDano(dano: number) {
        if (dano >= this._vida) {
            return this._vida = 0;
        } else {
            return this._vida -= dano;
        }
    }

    get vida(): number {
        return this._vida;
    }
}
