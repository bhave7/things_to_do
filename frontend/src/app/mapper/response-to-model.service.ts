import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseToModelService {

  constructor() { }

  static generateFromList(response: [], model: any) {
    let listedModels: any[] = [];
    response.forEach(element => {
      listedModels.push(this.generateFromObject(element, model));
    });

    return listedModels
  }

  static generateFromObject(response: object, model: any) {
    let objectModels = new model(response)
    return objectModels
  }
}
