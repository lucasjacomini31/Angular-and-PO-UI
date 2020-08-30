import { CourseService } from './curse.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponents implements OnInit {

  course: Course;

  constructor(private activatedRout: ActivatedRoute, private courseService: CourseService) {  }

  ngOnInit(): void{
    this.courseService.retrieveById(+this.activatedRout.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error: ', err)
    });
  }

  save(): void{
    this.courseService.save(this.course).subscribe({
      next: course => console.log('Curso salvo com sucesso ', course),
      error: err => console.log('Aconteceu um erro: ', err)
    });
  }
}
