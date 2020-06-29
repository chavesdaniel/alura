System.register([], function (exports_1, context_1) {
    "use strict";
    var BaseView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            BaseView = class BaseView {
                constructor(seletor, escapar = false) {
                    this._elemento = $(seletor);
                    this._escapar = escapar;
                }
                update(modelo) {
                    let template = this.template(modelo);
                    if (this._escapar) {
                        template = template.replace(/<script[\s\S]*?<\/script>/g, '');
                    }
                    this._elemento.html(template);
                }
            };
            exports_1("BaseView", BaseView);
        }
    };
});
