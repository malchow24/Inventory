import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./app/components/login/login.component";
import { PartsComponent } from "./app/components/parts/parts.component";
import { SuppliersComponent } from "./app/components/suppliers/suppliers.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'parts',
        component: PartsComponent,
    },
    {
        path: 'suppliers',
        component: SuppliersComponent,
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
})
export class AppRoutingModule {

}