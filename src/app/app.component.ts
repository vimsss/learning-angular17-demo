import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {ParentChildCommunicationComponent} from './components/parent-child-communication/parent-child-communication.component'
import { CommonModule } from '@angular/common';
import { ChildParentCommunicationComponent } from './components/child-parent-communication/child-parent-communication.component';
import { User } from '../models/user';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,ParentChildCommunicationComponent,CommonModule,ChildParentCommunicationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-ng-app';

  users = [
    {userName:"Ramesh",isSingle:"true",salary:"10000"},
    {userName:"Suresh",isSingle:"false",salary:"50000"},
    {userName:"Nitesh",isSingle:"true",salary:"90000"}]

    // kyu ki hum string type hbej rhe to wahi receieve karengy
    receivedDate(e:String){
      console.log(e)
    }

    receiveComplexdDate(e:{name:string,salary:number}){
      console.log(e)
    }

    receiveNewDate(e:User){
      console.log(e)
    }

}
