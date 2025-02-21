import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "../../../app.routes";

interface MenuItem {
  title: string | undefined, label?: string, icon: string | undefined, url: string | undefined, isListOpen: boolean | undefined
};

@Component({
  selector: "app-sideMenu",
  imports: [CommonModule, RouterModule],
  templateUrl: "./sidemenu.component.html",
  styleUrl: "./sidemenu.component.scss",
})

export class SidemenuComponent implements OnChanges {
  @Output() isSideMenuOpen = new EventEmitter();
  @Input() isToggleSideMenu: boolean = false;

  public menuItems: MenuItem[] = [
    { title: 'Menu', label: 'Ventanas del proyecto', icon: '', url: '', isListOpen: false },
  ];

  constructor() {
    const dashboardRoutes = routes
      .map(routes => routes.children ?? [])
      .flat()
      .filter(route => route && route.path)
      .filter(route => !route.path?.includes(':'));

    dashboardRoutes.forEach(({ title, path }) => {
      this.menuItems.push({ title: title?.toString(), icon: 'fa-solid fa-vial', url: path, isListOpen: false });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["isToggleSideMenu"]) {
      if (!this.isToggleSideMenu) {
        console.info("isToggleSideMenu: ", this.isToggleSideMenu);
        this.closeItemsListOptions();
      }
    }
  }

  toggleSideMenu = () => {
    if (this.isToggleSideMenu) {
      this.openItemsListOptions("y");
      return;
    }

    this.isSideMenuOpen.emit();
  };

  openItemsListOptions = (item: string) => {
    const option = this.menuItems.find((element) =>
      element.hasOwnProperty("isListOpen")
    );

    if (option) {
      option["isListOpen"] = !option["isListOpen"];
    }
  };

  closeItemsListOptions = () => {
    const option = this.menuItems.find((element) =>
      element.hasOwnProperty("isListOpen")
    );

    if (option) {
      option["isListOpen"] = false;
    }
  };
}
