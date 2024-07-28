import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DisclaimerService {
  constructor(private http: HttpClient) {}

  getDisclaimer() {
    return this.http.get('http://localhost:2345/termsheet/component/list');
  }

  getPDF() {
    return this.http.get('http://localhost:2345/termsheet/generate', {
      headers: {
        "Content-type":"application/json;charset=utf-8"
      },
      responseType: 'blob',
    });
  }

  getEditedPDF(data: any) {
    return this.http.post('http://localhost:2345/termsheet/generate', {
      disclaimer: data,
      fileName: 'test.pdf'
    }, {
      headers: {
        "Content-type":"application/json;charset=utf-8"
      },
      responseType: 'blob',
    });
  }

  addDisclaimer(data: any) {
    return this.http.post('http://localhost:2345/termsheet/component/add', data);
  }

  updateDisclaimer(data: any) {
    return this.http.post('http://localhost:2345/termsheet/component/update', data);
  }
}
