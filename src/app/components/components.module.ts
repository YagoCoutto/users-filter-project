import { NgModule } from "@angular/core";

import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { FormsModule } from "@angular/forms";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UserFilterComponent } from "./user-filter/user-filter.component";

@NgModule({
    declarations: [
        UserDetailsComponent,
        UserFilterComponent
    ],
    imports: [
        AngularMaterialModule,
        FormsModule,
    ],
    exports: [
        UserDetailsComponent,
        UserFilterComponent
    ],
})
export class ComponentsModule { }