import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm!: FormGroup;
  constructor() { }
  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
      //'projectName': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
  });
  }
  options: string[] = ['Stable', 'Critical', 'Finished'];
  onSubmit() {
    console.log(this.projectForm);
    console.log(this.projectForm.get('projectName'));
    this.projectForm.reset();
    this.projectForm.setValue
  }
  

 // static  forbiddenProjectNames = ['Test'];
   forbiddenNames(control: FormControl) {
    if (control.value==='Test' && control.value!== -1) {
      return  true;
    }
    return null;
  }



}
