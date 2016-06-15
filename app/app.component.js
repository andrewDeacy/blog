System.register(['angular2/core', './form.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, form_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (form_component_1_1) {
                form_component_1 = form_component_1_1;
            }],
        execute: function() {
            // App.Component is the root component of an Angular 2 project
            // Components are essentially directives with views attached to them, an Angular 2 application is composed of several components working together..
            // Directives vs Components in Angular 2:
            // Directives add behavior to and existing DOM element (no view attached)
            // Components create their own view with attached behavior (view attached)
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Manage Roles';
                    this.roleType = 'Manager';
                    this.description = 'Has location specific rights and day to day management of the account.';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        // So this is what gets loaded into the HTML when the tag gets embedded:
                        // In our use this will be a cshtml file rather than just typed out template.. 
                        // ex: templateUrl: 'index.html'
                        template: " <h1>{{title}}</h1><h2>{{roleType}}:</h2> <p>{{description}}</p>\n    <ebinder-form></ebinder-form>\n    ",
                        directives: [form_component_1.FormComponent] // Now telling the App.Component to load another directive...which is our from component
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map