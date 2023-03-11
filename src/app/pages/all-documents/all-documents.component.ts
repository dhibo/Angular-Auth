import { DocumentService } from 'src/app/services/document.service';
import { Component } from '@angular/core';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.css']
})
export class AllDocumentsComponent {
  documents= [
    {
      title: "Document 1",
      description: "This is the first document",
      type: "PDF",
      privacy: "Public",
      owner: "John Doe",
      image: "https://via.placeholder.com/350x150",
    },
    {
      title: "Document 2",
      description: "This is the second document",
      type: "DOCX",
      privacy: "Private",
      owner: "Jane Doe",
      image: "https://via.placeholder.com/350x150",
    },
    {
      title: "Document 3",
      description: "This is the third document",
      type: "TXT",
      privacy: "Public",
      owner: "Bob Smith",
      image: "https://via.placeholder.com/350x150",
    },
    {
      title: "Document 3",
      description: "This is the third document",
      type: "TXT",
      privacy: "Public",
      owner: "Bob Smith",
      image: "https://via.placeholder.com/350x150",
    },
    {
      title: "Document 3",
      description: "This is the third document",
      type: "TXT",
      privacy: "Public",
      owner: "Bob Smith",
      image: "https://via.placeholder.com/350x150",
    }
  ];
  
  blob : any ;

  constructor(private documentservice: DocumentService  ) { }

  ngOnInit(): void {
    this.documentservice.get().subscribe(
      response => {this.documents = response },
      error => console.log(error)
    );
    
  }
  downloadDocument(document:any) {
    this.documentservice.getbyId(document.id).subscribe(response => {
      if (document.type == 'pdf') { 
       this.blob = new Blob ([response],{ type: 'application/pdf' }) ;
      }else {
        this.blob = new Blob([response], { type: 'application/xml' })
      }
      const fileName = document.title + '.' + document.extension; 
      saveAs(this.blob, fileName);
    });
  }
  editDocument(document : any){}
  getDocumentImage(document: any): string {
    if (document.type === 'pdf') {
      return './assets/images/pdf.png';
    } else(document.type === 'xml') 
      return './assets/images/xml.jpg';
    
    
  }
  
}
