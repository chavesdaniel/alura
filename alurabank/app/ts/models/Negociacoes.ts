import { Negociacao } from './Negociacao';

export class Negociacoes {
    
    // Array<Negociacao> - outro método de declaracao do Array de tipo Negociacao
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

}