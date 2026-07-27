import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
})
export class CourseDetailComponent {

  courseId: string | null = '';
  course: any;

  courses = [
  { id: '1', name: 'Angular', code: 'NG101', credits: 4, status: 'passed', price: 499 },
  { id: '2', name: 'React', code: 'RE201', credits: 3, status: 'ongoing', price: 399 },
  { id: '3', name: 'Java', code: 'JV301', credits: 5, status: 'pending', price: 599 }
];

  constructor(private route: ActivatedRoute) {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.course = this.courses.find(c => c.id === this.courseId);
  }
}