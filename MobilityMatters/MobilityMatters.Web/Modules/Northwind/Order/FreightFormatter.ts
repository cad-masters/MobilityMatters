namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerFormatter()
    export class FreightFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            return "<span>" + '$' + Q.htmlEncode(ctx.value) + '</span>'
        }
    }
}