import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { routes } from '../../app.routes';
import { NgTemplateOutlet, UpperCasePipe } from '@angular/common';
import { PathData } from './PathData';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, NgTemplateOutlet, UpperCasePipe],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  pathData = this.GetRelativePathDataFromRoutes(routes, '');
  isMenuOpen = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }

  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  private GetRelativePathDataFromRoutes(routes: Routes, navPrefix: string) {
    const retVal: PathData[] = [];
    routes.forEach((value) => {
      const label = value.data?.['label'];
      if (label && typeof label === 'string') {
        retVal.push({
          path: (navPrefix + value.path) as string,
          label: label.toUpperCase(),
        });
      }
      if (value.children) {
        console.log('children detected for ' + value.path);
        retVal.push(
          ...this.GetRelativePathDataFromRoutes(
            value.children,
            (value.path as string) + '/'
          )
        );
      }
    });
    return retVal;
  }
}
