import { DocumentService } from 'src/app/services/document.service';
import { Component } from '@angular/core';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.css']
})
export class AllDocumentsComponent {
  documents!: any[];
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

}
