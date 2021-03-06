﻿import {Component} from "angular2/core"; // Marking this file as a component, also note naming schema for components
import {QueueComponent} from './queue.component';
//import {ContactComponent} from './contact.component';
import {LogOnClick} from './click.directive';

@Component({
    // @Component line is a decorator for the class which adds metaData, which allows Anglular 2 to reconize this class as a component
    selector: "blog-header",
    template: `
    <div class="container">
        <div class="blog-header">
            <a href="blog.html"><h1 class="blog-title">Development Blog</h1></a>
            <p class="lead blog-description">Created by a developer, for developers.</p>
        </div>
    <div class="row">




        <h4> Managers: </h4>
        <ul>
            <li 
            *ngFor="#eBinderSettingsItem of eBinderSettingsItems"
            (click)="onItemClicked(eBinderSettingsItem)"
            >{{ eBinderSettingsItem.name }}</li>
        </ul>
        <input type="text" [(ngModel)]="selectedItem.name">
        <input type="text" #eBinderSettingsItem>
        <button (click)="onAddItem(eBinderSettingsItem)">Add New Manager </button>
        <button log-on-click>Delete Manager</button>

        <queue-form></queue-form>
        `,
    directives: [QueueComponent, LogOnClick]
})
// ^ Syntax Notes: * denotes structural directive (changes the document), () denotes events, [()] two way binding data to element.

export class BlogHeaderComponent { // Export is a typescript thing making class available outside of this file..

    // Javascript objects..
    public eBinderSettingsItems = [
        { name: "Bill" },
        { name: "Joe" },
        { name: "Bob" }
    ];

    public selectedItem = { name: ""};

    onItemClicked(eBinderSettingsItem) {
        this.selectedItem = eBinderSettingsItem;
    }

    onAddItem(eBinderSettingsItem) {
        this.eBinderSettingsItems.push({ name: eBinderSettingsItem.value });
    }
}