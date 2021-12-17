import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	nom:string = "Marie";

  title = 'angform';
  users : User[] = [];

  userForm: FormGroup;
  form = new FormGroup({

  });

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
	console.log(this.users)
	this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      drinkPreference: '',
	  hobbies: this.fb.array([])
    });
}

onSubmitForm() {
    const formValue = this.userForm.value;

    const newUser = new User(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
	  formValue['hobbies']? formValue['hobbies']:[] // si le user n'a pas de hobbie on envoie array vide
    );
	this.addUsers(newUser);

    // this.router.navigate(['/users']);
  }
  	// r2CUPERER LE TABLEAU DES HOBBIES
  getHobbies() {
	  // récuper la propriete hobbies entant que tableau de hobbies
	  return this.userForm.get('hobbies') as FormArray;
  }

  //AJOUTER DES CHAMPS
  onAddHobby() {
	  const newHobby = this.fb.control(''); // la method control permet de rajouter des champs 
	  this.getHobbies().push(newHobby);
  }

  addUsers(user : User): void {
	  this.users.push(user);
	  localStorage.setItem("users", JSON.stringify(this.users)); 
	  const userStored = localStorage.getItem("users");
	  console.log(userStored);
  }
  
  onClicked() {
	  console.log("Clicked");
  }

}
