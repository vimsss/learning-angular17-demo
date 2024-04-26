import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
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
