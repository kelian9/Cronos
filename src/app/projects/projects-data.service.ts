import { Project } from './project';
export class ProjectsData {
    // Здесь вставляем слайды
    // scr указывает путь изображения, selected НЕ ТРОГАТЬ(устанавливать новым слайдам false(результат выбора изначального слайда не изменится, но все же не стоит))
    // i номер нужный нам для методов(равен позиции элемента в массиве)
    private projects:Project[] = [
        {src: "../assets/images/projects/1.png", selected: true, i:0},
        {src: "../assets/images/projects/2.png", selected: false, i:1},
        {src: "../assets/images/projects/3.png", selected: false, i:2},
        {src: "../assets/images/projects/4.png", selected: false, i:3},
        {src: "../assets/images/projects/1.png", selected: false, i:4},
        {src: "../assets/images/projects/2.png", selected: false, i:5},
        {src: "../assets/images/projects/3.png", selected: false, i:6},
        {src: "../assets/images/projects/4.png", selected: false, i:7},
        {src: "../assets/images/projects/1.png", selected: false, i:8},
        {src: "../assets/images/projects/2.png", selected: false, i:9},
        {src: "../assets/images/projects/3.png", selected: false, i:10},
        {src: "../assets/images/projects/4.png", selected: false, i:11},
        {src: "../assets/images/projects/1.png", selected: false, i:12},
        {src: "../assets/images/projects/2.png", selected: false, i:13},
        {src: "../assets/images/projects/3.png", selected: false, i:14},
        {src: "../assets/images/projects/4.png", selected: false, i:15}
    ];
    
    getProjectsData() {
        return this.projects;
    }
    // swipeNext and swipeNextSecond два класса(в css) для двух этапов прокрутки 
    private swipeNext:boolean = false;
    private swipeNextSecond:boolean = false;
    getSwipeNext() {
        return this.swipeNext;
    }
    getSwipeNextSecond() {
        return this.swipeNextSecond;
    }
    prevSlide(number:number) {
        if(this.getProjectSelected().i > 0) {
            this.projects[number].selected = false;
            this.projects[number - 1].selected = true;
            if (number <= 5) {
                this.swipeNext = false;
            }
            if ((number >5) && (number <= 11)) {
                this.swipeNextSecond = false;
            }
        }
    }
    nextSlide(number:number) {
        if(this.getProjectSelected().i < (this.projects.length-1)) {
            console.log(1);
            this.projects[number].selected = false;
            this.projects[number + 1].selected = true;
            if (number >= 5) {
                this.swipeNext = true;
            }
            if (number >=11) {
                this.swipeNextSecond = true;
            }
        }
    }
    selectProject(project:Project) {
        this.projects[this.getProjectSelected().i].selected = false;
        for (let i = 0; i < this.projects.length; i++) {
            const element = this.projects[i];
            if (element.i == project.i) {
                this.projects[i].selected = true;
            }
        }
        // можно было реализовать проще, в модели самого компонента
    }
    getProjectSelected() {
        for (let i = 0; i < this.projects.length; i++) {
            const element = this.projects[i];
            if (element.selected == true) {
                return element;
            }
        }
    }
}