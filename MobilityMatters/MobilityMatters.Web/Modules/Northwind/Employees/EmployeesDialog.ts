﻿
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class EmployeesDialog extends Serenity.EntityDialog<EmployeesRow, any> {
        protected getFormKey() { return EmployeesForm.formKey; }
        protected getIdProperty() { return EmployeesRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeesRow.localTextPrefix; }
        protected getNameProperty() { return EmployeesRow.nameProperty; }
        protected getService() { return EmployeesService.baseUrl; }

        protected form = new EmployeesForm(this.idPrefix);

    }
}