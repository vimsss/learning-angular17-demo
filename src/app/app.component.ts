import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {ParentChildCommunicationComponent} from './components/parent-child-communication/parent-child-communication.component'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,ParentChildCommunicationComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ng-app';

  users = [
    {userName:"Ramesh",isSingle:"true",salary:"10000"},
    {userName:"Suresh",isSingle:"false",salary:"50000"},
    {userName:"Nitesh",isSingle:"true",salary:"90000"}]

}
