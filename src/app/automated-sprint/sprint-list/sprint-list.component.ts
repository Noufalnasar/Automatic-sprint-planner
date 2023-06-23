import { Component } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css']
})
export class SprintListComponent {

  public storyDetails:any
  selectedStories: any;
  isSelectedStoriesList: boolean = false;

  constructor(private _commonService : CommonServiceService){
   
    this.storyDetails=_commonService.getLocalStorage('storyDetails') ?_commonService.getLocalStorage('storyDetails'):[]
 
  }
  autoSelectedStories(event:any){
    this.selectedStories = event
    this.isSelectedStoriesList = true
  }
  backTo(event:any){
    if(event){
      this.isSelectedStoriesList = false
    }
  }


  

}
