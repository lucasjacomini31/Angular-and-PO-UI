import { CourseAddComponents } from './course-add.component';
import { AppPipeModule } from './../shared/pipe/app-pipe.module';
import { StarModule } from './../shared/component/star/star.module';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseInfoComponents } from './course-info.component';
import { NgModule } from '@angular/core';
import { CourseListComponentes } from './course-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CourseListComponentes,
    CourseInfoComponents,
    CourseAddComponents
  ],
  imports: [
    CommonModule,
    StarModule,
    FormsModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponentes
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponents
      },
      {
        path: 'courses/add', component: CourseAddComponents
      }
    ])
  ]
})

export class CourseModule{

}
