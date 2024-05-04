import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-child-parent-communication',
  standalone: true,
  imports: [],
  templateUrl: './child-parent-communication.component.html',
  styleUrl: './child-parent-communication.component.css'
})
export class ChildParentCommunicationComponent {

  // Child se humlog value emit karenge
  // Parent me humlog usko listen karenge
  // and then usme fir wo value recieve kar paenge :) very simple
  @Output() myOwnEventEmitterName = new EventEmitter<string>() /* --> yha pe <string> ke andar hume btaya hai ki kis type ka data emit karna hai humko */

  buttonClickFunction(){
    this.myOwnEventEmitterName.emit("Coders Never Quit babu bhaiya!!!")
  }

//THODA sa complex example lete hain, abki baar string na bhej ke ek pura Object bhejte hain
@Output() myComplexEmitterKaNaam = new EventEmitter<{name:string,salary:number}>()

sendComplexData(){
  this.myComplexEmitterKaNaam.emit({name:"Rahul",salary:25000})
}

//jo bar bar har jagah {name:string,salary:number} --ye likh rhe ho na
// ye acchha nahi lag rha,
// isse accha ek models nam ka file banao aur uske andar and user na object banake export kardo

@Output() myNewEventEmitter = new EventEmitter<User>()

newFunction(){
  // yha andar same to same no change
  this.myNewEventEmitter.emit({name:"Rahul",salary:25000})
}


}
