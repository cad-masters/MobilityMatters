namespace MobilityMatters.Northwind {

    @Serenity.Decorators.element("<iframe />")
    @Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    export class MailBodyViewer extends Serenity.Widget<any>
        implements Serenity.ISetEditValue {

        constructor(element: JQuery) {
            super(element);
            element.attr("border", "0")
                .css("border", "1px solid #eee")
                .css("width", "100%")
                .css("height", "400px");
        }

        public setEditValue(source: any, property: Serenity.PropertyItem) {
            var value = source[property.name];
            var iframe = this.element[0] as HTMLIFrameElement;
            iframe.onload = () => {
                var doc = iframe.contentDocument;
                doc.open();
                doc.write(value || '');
                doc.close();
                $(iframe.contentDocument.body).removeAttr('oncontextmenu');
                iframe.style.height = (Math.max(250, iframe.contentWindow.document.body.scrollHeight + 30)) + 'px';
            };
        }
    }

    export interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}