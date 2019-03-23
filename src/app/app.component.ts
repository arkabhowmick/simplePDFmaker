import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdfMaker';

  pages = [];

  addPage() {
    this.pages.push([]);
  }

  deletePage(index) {
    this.pages.splice(index, 1);
  }

  deleteText(page, index) {
    this.pages[page].splice(index,1);
  }

  addText(page) {
    console.log('Page : ', page);
    this.pages[page].push('');
  }

  generatePDF() {
    console.log(this.pages);
    let doc = new jsPDF();

    for(let index in this.pages) {
      let text = '';
      for(let index1 in this.pages[index]) {
          text += this.pages[index][index1] + ' \n';
      }
      doc.text(text, 50, 50);
      if(parseInt(index) != this.pages.length - 1 ) {
          doc.addPage();
      }
    }
    doc.save('transcript.pdf');
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
