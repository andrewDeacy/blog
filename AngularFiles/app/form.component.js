System.register(["angular2/core", './queue.component', './click.directive'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, queue_component_1, click_directive_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (queue_component_1_1) {
                queue_component_1 = queue_component_1_1;
            },
            function (click_directive_1_1) {
                click_directive_1 = click_directive_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent() {
                    // Javascript objects..
                    this.eBinderSettingsItems = [
                        { name: "Bill" },
                        { name: "Joe" },
                        { name: "Bob" }
                    ];
                    this.selectedItem = { name: "" };
                }
                FormComponent.prototype.onItemClicked = function (eBinderSettingsItem) {
                    this.selectedItem = eBinderSettingsItem;
                };
                FormComponent.prototype.onAddItem = function (eBinderSettingsItem) {
                    this.eBinderSettingsItems.push({ name: eBinderSettingsItem.value });
                };
                FormComponent = __decorate([
                    core_1.Component({
                        // @Component line is a decorator for the class which adds metaData, which allows Anglular 2 to reconize this class as a component
                        // This is just a simple javascript object 
                        selector: "ebinder-form",
                        // templateUrl: 'velocityEhs.chtml'
                        template: "\n        <h4> Managers: </h4>\n        <ul>\n            <li \n            *ngFor=\"#eBinderSettingsItem of eBinderSettingsItems\"\n            (click)=\"onItemClicked(eBinderSettingsItem)\"\n            >{{ eBinderSettingsItem.name }}</li>\n        </ul>\n        <input type=\"text\" [(ngModel)]=\"selectedItem.name\">\n        <input type=\"text\" #eBinderSettingsItem>\n        <button (click)=\"onAddItem(eBinderSettingsItem)\">Add New Manager </button>\n        <button log-on-click>Delete Manager</button>\n\n        <queue-form></queue-form>\n        ",
                        directives: [queue_component_1.QueueComponent, click_directive_1.LogOnClick]
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormComponent);
                return FormComponent;
            })();
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=form.component.js.map