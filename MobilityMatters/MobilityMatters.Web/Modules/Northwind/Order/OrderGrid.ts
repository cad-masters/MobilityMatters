namespace MobilityMatters.Northwind {

    import fld = OrderRow.Fields;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        protected getColumnsKey() { return "Northwind.Order"; }
        protected getDialogType() { return <any>OrderDialog; }
        protected getIdProperty() { return OrderRow.idProperty; }
        protected getLocalTextPrefix() { return OrderRow.localTextPrefix; }
        protected getService() { return OrderService.baseUrl; }
        private rowSelection: Serenity.GridRowSelectionMixin;

        protected shippingStateFilter: Serenity.EnumEditor;

        constructor(container: JQuery) {
            super(container);
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        /*protected getQuickFilters() {
            var filters = super.getQuickFilters();

            filters.push({
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: ProductRow.lookupKey
                },
                field: 'ProductID',
                title: 'Contains Product in Details',
                handler: w => {
                    (this.view.params as OrderListRequest).ProductID = Q.toId(w.value);
                },
                cssClass: 'hidden-xs'
            });

            return filters;
        }*/

        protected createQuickFilters() {
            super.createQuickFilters();

            this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, fld.ShippingState);
        }

        protected getButtons()
        {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: OrderService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            /*buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));*/

            //buttons.push({
            //    title: 'Send Email',
            //    icon: "fa-envelope text-green",
            //    separator: false,
            //    onClick: () => {

            //        if (!this.onViewSubmit())
            //            return;

            //        var checkedIDs = this.rowSelection.getSelectedAsInt32();
            //        if (checkedIDs.length == 0) {
            //            Q.alert("You must select a trip!");
            //            return;
            //        }

            //        new Northwind.MailComposeDialog({
            //            toVoluntueer: checkedIDs
            //        }).dialogOpen();
            //    }
            //});

            return buttons;
        }

        /*protected getColumns() {
            var columns = super.getColumns();

            columns.splice(1, 0, {
                field: 'Print Invoice',
                name: '',
                format: ctx => '<a class="inline-action print-invoice" title="invoice">' +
                    '<i class="fa fa-file-pdf-o text-red"></i></a>',
                width: 24,
                minWidth: 24,
                maxWidth: 24
            });

            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));

            return columns;
        }*/

        protected onClick(e: JQueryEventObject, row: number, cell: number) {
            super.onClick(e, row, cell);

            if (e.isDefaultPrevented())
                return;

            var item = this.itemAt(row);
            var target = $(e.target);

            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-invoice')) {
                    MobilityMatters.Common.ReportHelper.execute({
                        reportKey: 'Northwind.OrderDetail',
                        params: {
                            OrderID: item.OrderID
                        }
                    });
                }
            }
        }


        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();


            // adding a specific css class to UnitPrice column, 
            // to be able to format cell with a different background
            Q.first(columns, x => x.field == fld.ConfirmRide).cssClass += " col-unit-price";

            return columns;
        }


        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        protected getItemCssClass(item: Northwind.OrderRow, index: number): string {
            let klass: string = "";

            if (item.ConfirmRide == true)
                klass += " low-price";
            else
                klass

            return Q.trimToNull(klass);
        }

        public set_shippingState(value: number): void {
            this.shippingStateFilter.value = value == null ? '' : value.toString();
        }

        protected addButtonClick() {
            var eq = this.view.params.EqualityFilter;
            this.editItem(<OrderRow>{
                CustomerID: eq ? eq.CustomerID : null
            });
        }
    }
}
