import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "dashboard",
        loadComponent: () =>
            import("./core/features/dashboard/dashboard/dashboard.component").then(
                (c) => c.default
            ),
        children: [
            {
                path: 'change-detection',
                title: 'Change Detection',
                loadComponent: () => import("./core/features/dashboard/pages/change-detection/change-detection.component").then( c => c.default ),
            },
            {
                path: 'control-flow',
                title: 'Control Flow',
                loadComponent: () => import("./core/features/dashboard/pages/control-flow/control-flow.component").then( c => c.default ),
            },
            {
                path: 'defer-options',
                title: 'Defer Options',
                loadComponent: () => import("./core/features/dashboard/pages/defer-options/defer-options.component").then( c => c.default ),
            },
            {
                path: 'defer-views',
                title: 'Defer Views',
                loadComponent: () => import("./core/features/dashboard/pages/defer-views/defer-views.component").then( c => c.default ),
            },
            {
                path: 'user/:id',
                title: 'User',
                loadComponent: () => import("./core/features/dashboard/pages/user/user.component").then( c => c.default ),
            },
            {
                path: 'users-list',
                title: 'Users List',
                loadComponent: () => import("./core/features/dashboard/pages/users/users.component").then( c => c.default ),
            },
            {
                path: 'view-transition',
                title: 'View Transition',
                loadComponent: () => import("./core/features/dashboard/pages/view-transition/view-transition.component").then( c => c.default ),
            },
            {
                path: '',
                redirectTo: 'control-flow',
                pathMatch: 'full',
            }
        ],
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    }
];
