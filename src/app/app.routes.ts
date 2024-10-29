import { Routes } from '@angular/router';
import { privaceAuthGuard } from './guard/privace-auth.guard';
import { AdminComponent } from './layout/admin/admin.component';
import { WebsiteComponent } from './layout/website/website.component';
import { DashbroadComponent } from './pages/admin/dashbroad/dashbroad.component';
import { ListProductComponent } from './pages/admin/list-product/list-product.component';
import { AddComponent } from './pages/admin/listProduct/add/add.component';
import { EditComponent } from './pages/admin/listProduct/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    { path: "", component: WebsiteComponent, children: [
        { path: "", component: HomeComponent},
        { path: "signup", component: SignupComponent},
        { path: "signin", component: SigninComponent}
    ]},
    { path: "admin", component: AdminComponent, canActivate: [privaceAuthGuard],children: [
        { path: "", redirectTo: "dashbroad", pathMatch: "full"},
        { path: "dashbroad", component: DashbroadComponent },
        { path: "product", component: ListProductComponent},
        { path: "product/add", component: AddComponent},
        { path: "product/edit/:id", component: EditComponent},
    ]},
    { path: "**", component: NotFoundComponent}
];
