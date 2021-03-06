﻿
namespace MobilityMatters.Northwind {

    export interface MailComposeDialogOptions {
        toVoluntueer?: number[];
        ccList?: number[];
        subject?: string;
        body?: string;
        attachments?: Serenity.UploadedFile[];
        mailFromTrip?: boolean;
        rideNumber?: number;
        appointmentDate?: string;
        clientName?: string;
        pickupAddress?: string;
        telephoneNumber?: string;
        altPhone?: string;
        pickupTime?: string;
        deliveryAddress?: string;
        apptLength?: string;
        apptType?: string;
        appointmentTime?: string;
        deliveryAddress2?: string;
        apptLength2?: string;
        apptType2?: string;
        appointmentTime2?: string;
        specialNeedsTemp?: string;
        specialConditionsDirections?: string;
        orderId?: number;
    }

    @Serenity.Decorators.registerClass()
    export class MailComposeDialog extends Serenity.PropertyDialog<MailComposeRequest, MailComposeDialogOptions> {

        private form: MailComposeForm = new MailComposeForm(this.idPrefix);

        constructor(opt: MailComposeDialogOptions) {
            super(opt);

            this.dialogTitle = "Compose Mail";
            this.form.To.value = opt.toVoluntueer ? opt.toVoluntueer.toString() : null;

            if (opt.ccList && opt.ccList.length) {
                this.form.Cc.values = opt.ccList.map(x => x.toString());
            }

            this.form.Subject.value = opt.subject;
            if (opt.body)
                this.form.BodyHtml.value = opt.body;

            if (opt.attachments)
                this.form.Attachments.value = opt.attachments;

            if (opt.mailFromTrip) {
                var body = this.form.BodyHtml.value;
                var url = "";

                OrderService.GetConfirmUrl({
                    Id: opt.orderId
                },
                    response => url = response.Url,
                    {
                        async: false
                    });

                var path = "<a href='" + url + "'>Confirm</a>";

                body = body.replace('{ConfirmUrl}', path).replace('{RideNumber}', opt.rideNumber.toString()).replace('{AppointmentDate}', opt.appointmentDate.toString().substring(0, 15)).replace('{ClientName}', opt.clientName)
                    .replace('{PickupAddress}', opt.pickupAddress).replace('{AltPhone}', opt.altPhone).replace('{TelephoneNumber}', opt.telephoneNumber).replace('{PickupTime}', opt.pickupTime).replace('{DeliveryAddress}', opt.deliveryAddress).replace('{ApptTime}', opt.apptLength).replace('{ApptType}', opt.apptType).replace('{AppointmentTime}', opt.appointmentTime).replace('{DeliveryAddress2}', opt.deliveryAddress2).replace('{ApptTime2}', opt.apptLength2).replace('{ApptType2}', opt.apptType2).replace('{AppointmentTime2}', opt.appointmentTime2).replace('{SpecialNeedsTemp}', opt.specialNeedsTemp).replace('{SpecialConditionsDirections}', opt.specialConditionsDirections);
                this.form.BodyHtml.value = body;
            }
        }

        getDialogButtons() {
            var buttons = super['getDialogButtons']();
            buttons[0].text = "Send";
            return buttons;
        }

        getDialogOptions() {
            var opt = super.getDialogOptions();
            opt.width = 950;
            return opt;
        }

        validateBeforeSave() {
            if (!super.validateBeforeSave())
                return false;

            if (this.options.attachments &&
                (!this.form.Attachments.value ||
                    !this.form.Attachments.value.length)) {
                Q.notifyError("You need to attach a file to this message!");
                return false;
            }

            return true;
        }

        okClickValidated() {
            var request: MailComposeRequest = {};
            this.propertyGrid.save(request);
            MailService.Compose(request, response => {
                Serenity.SubDialogHelper.triggerDataChange(this);
                this.dialogClose();
            });
        }
    }
}