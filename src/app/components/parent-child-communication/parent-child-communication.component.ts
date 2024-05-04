import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';

function formatUserName(value:string){
  return "Hi!! "+value
}

@Component({
  selector: 'app-parent-child-communication',
  standalone: true,
  imports: [],
  templateUrl: './parent-child-communication.component.html',
  styleUrl: './parent-child-communication.component.css'
})
export class ParentChildCommunicationComponent {

  // yha pe wahi variable ka naam hoga jis naam se parent me pass karrahe
  // iss variable ko initial value bhi dedo as blank ya null
  // @Input() userName=""
  //is variable ko apne html file me as Interpolation display karwa ke check karlo

  // Lekin ab hum recieve karne ke baad hum isko dusre naam se treat karna chahte hai
  // @Input({alias:"userName"}) name=""

  // Ab hum recieve karne ke baad apni value ko trnsform karna chahte hain
  //iske liye humko apna ek function banana hoga, koi bhi function hamesha ya to sabse neeche 
  // banaya jata hai, ya fir sabse upar bnaya jata hai

  @Input({alias:"userName",transform:formatUserName}) name="";
  // ek se jada value bhi pass kar sakte hain
  // @Input() isSingle:boolean; ===> yha pe error aarha kyu ki compiler bol rha aap value initialise karo
  // @Input() salary:string; ===> yha pe error aarha kyu ki compiler bol rha aap value initialise karo

  // !:  ===> is symbol ka matlab hota hai ki : "compiler bhai tum chinta mat karo, runtime ke samay hum iske pakka value bhejenge"
  @Input({transform:booleanAttribute}) isSingle!:boolean;
  // yha par hum inbuilt transform methods use karrahe jo string -to-> boolean conversion , aur 
  // string -to-> number conversion ke liye useful hota hai
  @Input({transform:numberAttribute}) salary!:string;
  

}