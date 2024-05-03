import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  name="Ramesh"
  status="Single"
  salary=40000
  isBtnDisables=false
  inputValue="test"
  twoWayDataBindingValue="2way Data Binding test"

  users=[
    {name:"Ramesh",isSingle:true,salary:10000},
    {name:"Suresh",isSingle:false,salary:60000},
    {name:"Nitesh",isSingle:true,salary:90000}
  ]

  demoTwoWayDB="Test"
  // onChangeFn()
  // {
  //   console.log("called")
  // }

  onChangeFn(e:Event)
  {
    const val=(e.target as HTMLInputElement).value;
    console.log(val)
  }

  onChangeTwoWayFn(e:Event){
    const val=(e.target as HTMLInputElement).value;
    this.twoWayDataBindingValue=val
  }

}
