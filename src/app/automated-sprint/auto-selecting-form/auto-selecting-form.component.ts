import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto-selecting-form',
  templateUrl: './auto-selecting-form.component.html',
  styleUrls: ['./auto-selecting-form.component.css']
})
export class AutoSelectingFormComponent implements OnInit{
  @Input('storyDetails') storyDetails:any
  back:string="<< Back To Stories List"
  sumOfStoryPoint:number=0;
  storyPoint:any
  showAlert: boolean =false;
  selectedStories:any=[];
  @Output() autoSelectedStories = new EventEmitter()
  @Output() backFlag = new EventEmitter()
  isUniqueStory: boolean = false;
  submitted:boolean = false
  AutosprintForm!:FormGroup
  isAutoSelect: boolean = false;


  constructor(private _common:CommonServiceService,private _fb:FormBuilder,private _router:Router){




  }
  ngOnInit(){

   this.storyDetails.map((story:any)=>{
      this.sumOfStoryPoint += story.storyPoint
    })
    this.AutosprintForm = this._fb.group({

      storyPoint: ['', [Validators.required, Validators.min(1), Validators.max(this.sumOfStoryPoint)]],
    
    }) 
    
  }

  autoSelect(){
    this.submitted = true
    this.isAutoSelect = true
    
    // if(this.storyPoint > this.sumOfStoryPoint){
    //   this.showAlert=true
    //   this.storyPoint = ''
    // }
    this.storyDetails.map((story:any)=>{
      if(story.storyPoint === this.AutosprintForm.controls['storyPoint'].value){
        this.isUniqueStory = this.selectedStories?.some((story:any)=>story.storyPoint === this.AutosprintForm.controls['storyPoint'].value)
        if(this.isUniqueStory){
          alert("already Selected")
        }
        else{
          this.selectedStories.push(story)
          this.AutosprintForm.reset()
          this.submitted=false
        }
        
      }
     
    })
   
    
    this.autoSelectedStories.emit(this.selectedStories)
    console.log(this.selectedStories);
    

  }
  clearAllSelected(){
    this.selectedStories=[]
    this.autoSelectedStories.emit(this.selectedStories)
  }
  clearAllStories(){
localStorage.clear()
alert("Are you sure want to delete all stories ?")
location.reload()
  }
  toBack(){
   this.backFlag.emit(this.isAutoSelect)
   this.isAutoSelect = false
  }

}
