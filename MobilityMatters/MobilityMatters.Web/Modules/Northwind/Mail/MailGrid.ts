
namespace MobilityMatters.Northwind {

    export interface MailGridOptions {
        isSent?: boolean;
    }

    @Serenity.Decorators.registerClass()
    export class MailGrid extends Serenity.EntityGrid<MailRow, MailGridOptions> {
        protected getColumnsKey() { return 'Northwind.Mail'; }
        protected getDialogType() { return MailDialog; }
        protected getIdProperty() { return MailRow.idProperty; }
        protected getLocalTextPrefix() { return MailRow.localTextPrefix; }
        protected getService() { return MailService.baseUrl; }

        constructor(container: JQuery, opt?: MailGridOptions) {
            super(container, opt);

            if (this.options.isSent != null)
                this.setEquality(MailRow.Fields.IsSent, this.options.isSent);
        }

        getItemCssClass(item: MailRow, index: number) {
            return (super.getItemCssClass(item, index) || "") +
                (item.IsSent == false ? " deleted" : "");
        }

        getIncludeColumns(include) {
            super.getIncludeColumns(include);
            include[MailRow.Fields.IsSent] = true;
        }

        onViewSubmit() {
            if (!super.onViewSubmit())
                return false;

            var request = this.view.params as Serenity.ListRequest;
            request.ColumnSelection = Serenity.ColumnSelection.KeyOnly;

            return true;
        }
    }
}