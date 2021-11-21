import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, OutputDecorator } from '@angular/core';


@Component({
  selector: 'app-add-atsiliepimas',
  templateUrl: './add-atsiliepimas.component.html',
  styleUrls: ['./add-atsiliepimas.component.css']
})
export class AddAtsiliepimasComponent implements OnInit {

@Output() updateAtsiliepimai = new EventEmitter();
  constructor(private http: HttpClient) { }
atsiliepimai = [];
  ngOnInit(): void {
  }



  postAtsiliepimas(vardas: string, atsiliepimas: string){
    const a = {
      vardas: vardas,
      tekstas: atsiliepimas
    };
    this.http.post('https://atsiliepimai-2095a-default-rtdb.europe-west1.firebasedatabase.app/atsiliepimai.json', a).subscribe((response)=>{
      console.log(response);
    })
  }

}
