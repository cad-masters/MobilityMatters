namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerEditor()
    export class MailContentEditor extends Serenity.HtmlContentEditor {

        constructor(element: JQuery, opt: Serenity.HtmlContentEditorOptions) {
            super(element, opt);
        }

        public getConfig(): Serenity.CKEditorConfig {
            var config = super.getConfig() as any;
            config.extraPlugins = (config.extraPlugins ? (config.extraPlugins + ",") : "") + "uploadimage,image2";
            config.removePlugins = (config.removePlugins ? (config.removePlugins + ",") : "") + "elementspath";
            config.imageUploadUrl = Q.resolveUrl("~/File/TemporaryUploadCK");
            config.fullPage = true;
            config.allowedContent = true;
            return config;
        }
    }
}