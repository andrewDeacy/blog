import {Component} from 'angular2/core';
import {FormComponent} from './form.component'
import {QueueComponent} from './queue.component'

// App.Component is the root component of an Angular 2 project
// Components are essentially directives with views attached to them, an Angular 2 application is composed of several components working together..

// Directives vs Components in Angular 2:
// Directives add behavior to and existing DOM element (no view attached)
// Components create their own view with attached behavior (view attached)

@Component({
    selector: 'my-blog', // This coresponds to a tag in the index.html ex: <my-app>Loading...</my-app>
    // So this is what gets loaded into the HTML when the tag gets embedded:
    // In our use this will be a cshtml file rather than just typed out template.. 
    // ex: templateUrl: 'index.html'
    templateUrl: `../header.html`,
    directives: [FormComponent] // Now telling the App.Component to load another directive...which is our from component
})

export class AppComponent {

}