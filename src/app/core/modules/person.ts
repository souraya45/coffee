
export class Person {
  id?: number;
  firstName: string;
  age: number;
  job: string;

constructor(id: number = 0,
    firstName: string = '', age: number = 0, job: string = '') {
this.id = id;
this.firstName = firstName;
this.age = age;
this.job = job;
}

}
