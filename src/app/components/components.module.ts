import { NgModule } from "@angular/core";

import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { FormsModule } from "@angular/forms";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserFilterComponent } from "./user-filter/user-filter.component";
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
    declarations: [
        UserDetailsComponent,
        UserFilterComponent,
        UsersListComponent,
    ],
    imports: [
        AngularMaterialModule,
        FormsModule,
    ],
    exports: [
        UserDetailsComponent,
        UserFilterComponent,
        UsersListComponent
    ],
})
export class ComponentsModule { }