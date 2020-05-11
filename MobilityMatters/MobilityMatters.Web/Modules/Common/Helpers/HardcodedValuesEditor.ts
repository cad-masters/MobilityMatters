
namespace MobilityMatters.Helpers {

    /**
     * Our select editor with hardcoded values.
     * 
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available 
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    @Serenity.Decorators.registerEditor()
    export class HardcodedValuesEditor extends Serenity.Select2Editor<any, any> {

        constructor(container: JQuery) {
            super(container, null);

            // add option accepts a key (id) value and display text value
            this.addOption("1", "1");
            this.addOption("2", "2");
            this.addOption("3", "3");
            this.addOption("4", "4");
            this.addOption("5", "5");
            this.addOption("6", "6");
            this.addOption("7", "7");
            this.addOption("8", "8");
            this.addOption("9", "9");
            this.addOption("10", "10");

            // you may also use addItem which accepts a Select2Item parameter
           /* this.addItem({
                id: "key3",
                text: "Text 3"
            });*/

            // don't let selecting this one (disabled)
           /* this.addItem({
                id: "key4",
                text: "Text 4",
                disabled: true
            });*/
        }
    }
}