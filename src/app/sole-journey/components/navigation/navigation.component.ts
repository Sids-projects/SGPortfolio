import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  navTitles: any = [];
  navLeftContent: any = [];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.navTitles = this.dataService.navTitles;
    this.navLeftContent = this.dataService.navLeftContent;
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentPath = this.getActiveRoutePath(this.activeRoute);
        this.navTitles.forEach((title: any) => {
          title.navActive = title.path === currentPath;
        });
      });
  }

  private getActiveRoutePath(route: ActivatedRoute): string | null {
    if (!route.firstChild) {
      return null;
    }
    return route.firstChild.snapshot.routeConfig?.path || null;
  }

  navMethod(path: string) {
    console.log(path);
  }
}
