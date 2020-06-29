System.register(["./BaseView"], function (exports_1, context_1) {
    "use strict";
    var BaseView_1, MensagemView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (BaseView_1_1) {
                BaseView_1 = BaseView_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends BaseView_1.BaseView {
                template(modelo) {
                    return `<p class="alert alert-info">${modelo}</p>`;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
