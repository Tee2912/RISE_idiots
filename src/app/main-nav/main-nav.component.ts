import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { VerificationDialogComponent } from '../verification-dialog/verification-dialog.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  title = "Traveller's Health Checkpoint";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    
  dialogValue: string;
  sendValue: string;
  public visible = true;

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {
    
  }

  


  
  openDialog(): void {
    const dialogRef = this.dialog.open(VerificationDialogComponent, {
      width: '1000px',
      data: { pageValue: this.sendValue }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogValue = result.data;
    });
  }


}
