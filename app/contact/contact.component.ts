import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';



import {Validators} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  contactForm: FormGroup;
    submitted = false;

    constructor(public formBuilder: FormBuilder) { }

    ngOnInit() { this.myForm()}
    public myForm(){
        this.contactForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            contactNo: ['',Validators.required],
            message: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.contactForm.controls; }
     onSubmit () {
        this.submitted = true;

        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }
      

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactForm.value))
    // }
    
    }
  }