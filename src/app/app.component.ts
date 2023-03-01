import { Component } from '@angular/core';
import { DataService } from 'src/libs/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data= new DataService;
  addInput:any;
  name:any;
  showUpdate=false;
  showAdd=true;


  constructor(){
  }

  getDate(){
    let date=new Date();
    let string=`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    return string;
  }

  addItem(){
    if(this.addInput==""){
      alert("Please Enter item First...")
    }else{
      let obj={
        check:false,
        name: this.addInput
      }
      this.data.list.push(obj);
      this.addInput="";
    }

  }

  deleteInput(input:any){
    this.data.list.splice(input,1)
    alert("Delete Successfully...") 
  }

  editInput(input:any){
    this.addInput=input.name;
    this.name=this.addInput;
    this.showUpdate=true;
    this.showAdd=false;
  }

  updateItem(){
    for(let i=0; i<this.data.list.length; i++){
      if(this.name==this.data.list[i].name){
        if(this.addInput==""){
        alert("Please Enter item First...");
        }else{
          this.data.list[i].name=this.addInput;
          this.addInput="";
          alert("Update Successfully...");
          this.showAdd=true;
          this.showUpdate=false;
        }  
      }
    }
  }

  cancel(){
    this.addInput="";
    this.showAdd=true;
    this.showUpdate=false;
  }

  checked(input:any){
    for(let i=0; i<this.data.list.length; i++){
      if(input.name==this.data.list[i].name){
        if(input.check==false){
          this.data.list[i].check=true;
        }else{
          this.data.list[i].check=false;
        }
        
      }
    }
  }

  refresh(){
    this.addInput="";
    this.showUpdate=false;
    this.showAdd=true;
  }

}
