import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
    {
      title: "My first Doc",
      description: 'This doc was build to maintain...',
      file_url: 'http://google.com',
      updated_at: '12/11/16',
      image_url: 'http://google.com',
    },
    {
      title: "My second Doc",
      description: 'This doc was build to maintain...',
      file_url: 'http://google.com',
      updated_at: '12/11/16',
      image_url: 'http://google.com',
    },
    {
      title: "My last Doc",
      description: 'This doc was build to maintain...',
      file_url: 'http://google.com',
      updated_at: '12/11/16',
      image_url: 'http://google.com',
    }
  ]
}