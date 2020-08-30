import { CourseService } from './curse.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Course } from './course';


@Component({
  templateUrl: './course-list.component.html'
})



export class  CourseListComponentes implements OnInit {

  filteredcourses: Course[] = [];

  _courses: Course[] = [];

  _filterby: string;

  constructor(private courseService: CourseService){ }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void{
    this.courseService.retrieveAll().subscribe({
      next: courses => {
        this._courses = courses;
        this.filteredcourses = this._courses;
      },
      error: err => console.log('Error', err)
    });
  }

  deleteById(couseId: number): void{
    this.courseService.deleteById(couseId).subscribe({
      next: () => {
        console.log('Deleted with sucess: ');
        this.retrieveAll();
      },
      error: err =>  console.log('Error: ', err)
    });
  }

  addById(): void{
    console.log('Testando adicionar');
  }

  set filter(value: string){
    this._filterby = value;
    this.filteredcourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf
    (this._filterby.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterby;
  }





}
