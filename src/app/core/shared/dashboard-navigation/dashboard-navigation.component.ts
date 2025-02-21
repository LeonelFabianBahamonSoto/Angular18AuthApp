import { Component, signal } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NavigationBarComponent } from "../navigation-bar/navigation-bar.component";
import { SidemenuComponent } from "../sidemenu/sidemenu.component";

@Component({
  selector: "app-dashboard-navigation",
  imports: [RouterModule, NavigationBarComponent, SidemenuComponent],
  templateUrl: "./dashboard-navigation.component.html",
  styleUrl: "./dashboard-navigation.component.scss",
})

export class DashboardNavigationComponent {

  public theSideMenuIsOpen = signal<boolean>(false);

  constructor() { };

  expandSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.ml-16');

    if (sidebar?.style.width === '16rem') {
      sidebar.style.width = '4rem';
      mainContent?.setAttribute("style", "margin-left: 4rem;");
      sidebar.classList.remove('text-left', 'px-6');
      sidebar.classList.add('text-center', 'px-0');

      this.theSideMenuIsOpen.set(false);
    } else {
      sidebar!.style.width = '16rem';
      mainContent?.setAttribute("style", "margin-left: 16rem;");
      sidebar!.classList.add('text-left', 'px-6');
      sidebar!.classList.remove('text-center', 'px-0');

      this.theSideMenuIsOpen.set(true);
    }

    const labels = sidebar!.querySelectorAll('span');
    labels.forEach(label => label.classList.toggle('opacity-0'));
  }
}
