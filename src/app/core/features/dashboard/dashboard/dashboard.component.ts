import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardNavigationComponent } from '../../../shared/dashboard-navigation/dashboard-navigation.component';

@Component({
  selector: 'app-dashboard',
  imports: [ RouterModule, DashboardNavigationComponent ],
  templateUrl: 'dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

class DashboardComponent { }

export default DashboardComponent;