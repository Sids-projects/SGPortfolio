import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogContent: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.blogContent = this.dataService.blogContent;
  }
}
