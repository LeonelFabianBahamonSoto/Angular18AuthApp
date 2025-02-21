import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  imports: [],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})

export class NavigationBarComponent {

  @Output() isSideMenuOpen = new EventEmitter();

  @ViewChild('dropdownToggle', { static: false }) dropdownToggle!: ElementRef;
  public dropdownOpen = false;

  constructor(private elRef: ElementRef) { };

  toggleSideMenu = () => {
    this.isSideMenuOpen.emit();
  };

  toggleDropdown(event: Event) {
    event.preventDefault();
    event.stopPropagation(); // Evita que el HostListener lo cierre de inmediato
    const dropdown = this.dropdownToggle.nativeElement.closest('.dropdown');

    if (dropdown?.classList.contains('selected')) {
      dropdown.classList.remove('selected');
      this.dropdownOpen = false;
    } else {
      this.closeAllDropdowns();
      dropdown?.classList.add('selected');
      this.dropdownOpen = true;
    }
  }

  private closeAllDropdowns() {
    document.querySelectorAll('.dropdown').forEach((el) => {
      el.classList.remove('selected');
    });
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.closeAllDropdowns();
      this.dropdownOpen = false;
    }
  }

}
