import { BaseView } from './BaseView';

export class MensagemView extends BaseView<string> {

    template(modelo: string): string {
        return `<p class="alert alert-info">${modelo}</p>`;

    }

}
