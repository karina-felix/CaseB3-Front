import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public calc!: Investimento;
  public form!: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      valor: [''],
      mes: ['']
    });
  }

  get f() { return this.form.controls; }
  

  processar() {

     console.log('Mes:', this.f.mes.value);
     console.log('Valor:', this.f.valor.value);

    this.http.get<Investimento>('/consulta-cdb', {
      params: {
        mes: this.f.mes.value,
        valor: this.f.valor.value
      }
    }
    ).subscribe(result => {
       this.calc = result;
      }, error => console.error(error));
  }
}


interface Investimento {
  valor: number;
  mes: number;
  valorBruto: number;
  valorLiquido: number;
}
