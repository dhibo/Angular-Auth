import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../dialog/confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
  constructor(public dialog: MatDialog) {}
  employees = [
    {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      image: 'https://mdbootstrap.com/img/new/avatars/8.jpg',
      title: 'Software engineer',
      department: 'IT department',
      status: 'Active',
      position: 'Senior'
    },
    {
      name: 'Alex Ray',
      email: 'alex.ray@gmail.com',
      image: 'https://mdbootstrap.com/img/new/avatars/6.jpg',
      title: 'Consultant',
      department: 'Finance',
      status: 'Onboarding',
      position: 'Junior'
    },
    {
      name: 'Kate Hunington',
      email: 'kate.hunington@gmail.com',
      image: 'https://mdbootstrap.com/img/new/avatars/7.jpg',
      title: 'Designer',
      department: 'UI/UX',
      status: 'Awaiting',
      position: 'Senior'
    }
  ];

  getStatusClass(status: any): string | undefined {
    switch (status) {
      case 'Active':
        return 'badge badge-success rounded-pill d-inline';
      case 'Onboarding':
        return 'badge badge-primary rounded-pill d-inline';
      case 'Awaiting':
        return 'badge badge-warning rounded-pill d-inline';
      default:
        return undefined;
    }
  }

 
  confirmDelete(employee: any): void {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '400px',
      data: {
        message: `Are you sure you want to delete ${employee.name}?`,
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      // handle dialog result
    });
}
}