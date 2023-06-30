import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent {
  public content: string = '';

  constructor(
    public dialogRef: MatDialogRef<NotifyComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
