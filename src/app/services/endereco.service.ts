import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  //private urlBase: string = 'https://viacep.com.br/ws/';
  private urlBase: string =  'http://cep.republicavirtual.com.br/web_cep.php?cep=';
  //private tipoRetorno: string = '/json/';
  private tipoRetorno: string = '&formato=json';

  constructor(private http: HttpClient) { }

  public consultaEnderecoPorCep(cep: string) {
    return this.http.get(this.urlBase + cep + this.tipoRetorno)
  }
}

/*
CEP: 91010000
Formato de retorno: javascript
URL: http://cep.republicavirtual.com.br/web_cep.php?cep=91010000&formato=json*/