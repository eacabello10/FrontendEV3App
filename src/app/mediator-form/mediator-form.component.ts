import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Mediator} from '../mediator.interface';
import {MediatorComplex} from '../mediatorcomplex.interface';

import {MediatorService} from '../mediator.service';

 


@Component({
  selector: 'mediator-form',
  templateUrl: './mediator-form.component.html',
  styleUrls: ['./mediator-form.component.css']
})
export class MediatorFormComponent implements OnInit {
	mediator: Mediator = {type: 'simple', instruction: ''};
	mediatorcomplex: MediatorComplex = {type: 'complex', instruction:'', parameter: 0, typeParameter:''};
 
  constructor(private mediatorService: MediatorService) {}
 
  ngOnInit() {
  }

  	onSubmit() {
    this.mediatorService.createMediator(this.mediator).subscribe(
      value => {
        console.log('HTTP success', value);
      }, error => {
        console.log('FAIL to create Mediator!');
      },
      () => {
        console.log('POST Mediator - now completed.');
      });
  }
  	onSubmitComplex(){
  		this.mediatorService.createMediatorComplex(this.mediatorcomplex).subscribe(
      value => {
        console.log('HTTP success', value);
      }, error => {
        console.log('FAIL to create a Complex Mediator!');
      },
      () => {
        console.log('POST Complex Mediator - now completed.');
      });
  	}

    onGet(){
      this.mediatorService.getInfo().subscribe(
      value => {
        console.log('HTTP success', value);
      }, error => {
        console.log('FAIL to get info!', error);
      },
      () => {
        console.log('Get info - now completed.');
      });
    }
}
