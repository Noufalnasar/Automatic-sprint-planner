import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  setLocalStorage(string:string,data:any){
      localStorage.setItem(string,JSON.stringify(data))
}
  getLocalStorage(string:string ){
    return JSON.parse(localStorage.getItem(string) || '[]')
  }

}
