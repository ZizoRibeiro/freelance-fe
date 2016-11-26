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
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My second Doc",
      description: 'This doc was build to maintain...',
      file_url: 'http://google.com',
      updated_at: '12/11/16',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: "My last Doc",
      description: 'This doc was build to maintain...',
      file_url: 'http://google.com',
      updated_at: '12/11/16',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    }
  ]
}