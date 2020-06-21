import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material'
import {MatDialog} from '@angular/material'
import { CustomSnackBarComponent } from './custom-snack-bar/custom-snack-bar.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  numbers=[];
  constructor(private snackBar: MatSnackBar, public dialog: MatDialog){
    for(let i=0; i<1000 ; i++){
      this.numbers.push(i);
    }
  }

  openSnackBar(message, dismiss){
    let snackBarRef=this.snackBar.open(message,dismiss, {duration:2000});
    snackBarRef.afterDismissed().subscribe(()=>{
      console.log('The snackbar was dismissed');
    });

    snackBarRef.onAction().subscribe(()=>{
      console.log('The snackbar action was triggered');
    });
  }

  openCustomSnackBar(){
    this.snackBar.openFromComponent(CustomSnackBarComponent, {duration:2000});
  }

  openDialog(){
    let dialogRef=this.dialog.open(DialogExampleComponent, {data: {name: 'Manoj'}});
    dialogRef.afterClosed().subscribe(result=>{
      console.log('Dialog result', result);
    })
  }
}
