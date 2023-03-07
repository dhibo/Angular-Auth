import { Component } from '@angular/core';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.css']
})
export class ListDocumentsComponent {
  documents: any[] = [
    { title: 'Document 1', owner: 'John Doe' , type: 'xml'},
    { title: 'Document 2', owner: 'Jane Smith' , type: 'xml'},
    { title: 'Document 3', owner: 'Bob Johnson' , type: 'xml'},
    { title: 'Document 1', owner: 'John Doe' , type: 'xml'},
    { title: 'Document 2', owner: 'Jane Smith' , type: 'xml'},
    { title: 'Document 3', owner: 'Bob Johnson' , type: 'xml'},
    { title: 'Document 1', owner: 'John Doe' , type: 'xml'},
    { title: 'Document 2', owner: 'Jane Smith' , type: 'xml'},
    { title: 'Document 3', owner: 'Bob Johnson' , type: 'xml'},
    { title: 'Document 1', owner: 'John Doe' , type: 'xml'},
    { title: 'Document 2', owner: 'Jane Smith' , type: 'xml'},
    { title: 'Document 3', owner: 'Bob Johnson' , type: 'xml'},  
  ];
}
