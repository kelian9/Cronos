import { Component, OnInit } from '@angular/core';
import { ProjectsData } from './projects-data.service';
import { Project } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
  providers: [ProjectsData]
})
export class ProjectsComponent implements OnInit {
  projects:Project[] = [];
  constructor(private data: ProjectsData) { }
  
  swipeNext:boolean;
  swipeNextSecond:boolean;
  
  projectSelected:Project;

  prevSlide(number) {
    this.data.prevSlide(number);
    this.projectSelected = this.data.getProjectSelected();
    this.swipeNext = this.data.getSwipeNext();
    this.swipeNextSecond = this.data.getSwipeNextSecond();
  }

  nextSlide(number) {
    this.data.nextSlide(number);
    this.projectSelected = this.data.getProjectSelected();
    this.swipeNext = this.data.getSwipeNext();
    this.swipeNextSecond = this.data.getSwipeNextSecond();
  }

  selectProject(project:Project) {
    this.data.selectProject(project);
    this.projectSelected = this.data.getProjectSelected();
  }

  ngOnInit() {
    this.projects = this.data.getProjectsData();
    this.projectSelected = this.data.getProjectSelected();
    this.swipeNext = this.data.getSwipeNext();
    this.swipeNextSecond = this.data.getSwipeNextSecond();
  }

}
