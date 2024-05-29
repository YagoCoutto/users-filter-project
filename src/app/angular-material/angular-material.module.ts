import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';


@NgModule({
    imports: [
        MatButtonModule //importando
    ],
    exports: [
        MatButtonModule //exportando para usar
    ]
})
export class AngularMaterialModule { }