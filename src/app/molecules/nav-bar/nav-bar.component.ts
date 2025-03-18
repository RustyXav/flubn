import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { routes } from '../../app.routes';

interface PathData { path: string, label: string; }

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  pathDatas = this.GetRelativePathDatasFromRoutes(routes, '');

  private GetRelativePathDatasFromRoutes(routes: Routes, navPrefix: string) {
    const retVal: PathData[] = [];
    routes.forEach(value => {
      const label = value.data?.['label'];
      if (label && typeof label === "string") {
        retVal.push({ path: navPrefix + value.path as string, label: label });
        if (value.children) {
          console.log("children detected for " + value.path);
          retVal.push(...this.GetRelativePathDatasFromRoutes(value.children, value.path as string + '/'));
        }
      }
    });
    return retVal;
  }
}

