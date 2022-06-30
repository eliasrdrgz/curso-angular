import { User } from 'src/app/model/TypicodeUser';
import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/data/users';

@Component({
  selector: 'user-crud-basic',
  templateUrl: './user-crud-basic.component.html',
  styleUrls: ['./user-crud-basic.component.css']
})
export class UserCrudBasicComponent implements OnInit {

  title = 'CRUD BÁSICO';
  users: User[] = USERS;
  lastId = 10;
  newUser: User;
  selectedUser!: User;
  hide_without_phone: boolean = false;

  constructor() {
    this.newUser = {
      id: this.lastId + 1,
      name: ''
    };
  }

  ngOnInit() {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  add(): void {
    console.log(this.newUser);
    this.users.push(this.newUser);
    this.lastId = this.lastId +1;
    this.resetNewHero();
  }

  resetNewHero() {
    this.newUser = {
      id: this.lastId + 1,
      name: ''
    };
  }

  /**
   * Función delete recibiendo el índice del usuario que se quiere eliminar
   * @param index
   */
  deleteX(index: number) {
    this.users.splice(index, 1);
  }

  /**
   * Función delete recibiendo el usuario que se quiere eliminar
   * @param user
   */
  delete(user: User) {
    //this.users = this.users.filter(function(el) { return el.id != user.id; });
    this.users = this.users.filter( el => el.id != user.id );
  }

}
