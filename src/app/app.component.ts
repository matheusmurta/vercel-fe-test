import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vercel-fe-test';
  responseData: any = null;
  formData:any

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://vercel-33sa1ailw-matheusmurta.vercel.app/api/data').subscribe(
      (data:any) => {
        // O próximo valor é emitido aqui
        this.responseData = data;
      },
      (error:any) => {
        // Tratamento de erros
        this.responseData = error;
      },
      () => {
        // A conclusão da Observable é tratada aqui
        console.log('Observable concluído');
      }
    );

    this.formData = {
      name: 'fast teste',
      email: 'fast teste'
    };

    this.http.post('https://vercel-33sa1ailw-matheusmurta.vercel.app/api/postData', this.formData).subscribe(
      (response) => {
        console.log('Resposta do servidor:', response);
      },
      (error) => {
        console.error('Ocorreu um erro:', error);
      }
    );
  }
}
