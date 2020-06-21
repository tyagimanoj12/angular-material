import { NgModule } from '@angular/core';
import 
{
    MatButtonModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatDialogModule
} 
from '@angular/material'

const MaterialComponents=
[    
    MatButtonModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatDialogModule    
];

@NgModule({
 imports: [MaterialComponents],
 exports: [MaterialComponents]
})
export class MaterialModule { }
