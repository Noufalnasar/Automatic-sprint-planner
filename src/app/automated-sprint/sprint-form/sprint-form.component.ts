import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sprint-form',
  templateUrl: './sprint-form.component.html',
  styleUrls: ['./sprint-form.component.css']
})
export class SprintFormComponent implements OnInit {
  storyName:any

  storyPoint:any
  submitted:boolean= false
  storyDetails:any;
  isUnique: any;
  sprintForm!: FormGroup


  constructor(private _commonService : CommonServiceService,private _fb:FormBuilder){

    this.storyDetails=_commonService.getLocalStorage('storyDetails') ?_commonService.getLocalStorage('storyDetails'):[]
    

  }
  ngOnInit(): void {

    this.sprintForm = this._fb.group({

      storyName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      storyPoint: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
    
    })


  }
  
  addStory(){
this.submitted = true
    // if(this.storyDetails.includes(this.storyName)){
    //   alert('already added')
    // }
      if(this.sprintForm.valid){
        this.isUnique = this.storyDetails?.some((story:any)=>story.storyName === this.sprintForm.controls['storyName'].value)
        if(this.isUnique){
          alert('story is already created')
          return;
        }
        else{
          this.storyDetails.push(this.sprintForm.value)
          alert("successfully Added Your Story")
          this.sprintForm.reset()
          this.submitted=false
        }
      }
      
    
    

   
   
 
    this._commonService.setLocalStorage('storyDetails',this.storyDetails)
   
  }

}
