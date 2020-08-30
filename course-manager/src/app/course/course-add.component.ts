import { Component } from '@angular/core';
import { Course } from './course';
import { CourseService } from './curse.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  templateUrl: './course-add.component.html'
})

export class CourseAddComponents {
  course: Course;

  constructor(private activatedRout: ActivatedRoute, private courseService: CourseService) {  }
}
