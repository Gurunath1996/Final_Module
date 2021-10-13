import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

tbodyEl = document.querySelector('tbody');
 tableEl = document.querySelector('table')
  constructor() { }

  ngOnInit(): void {
  }

//    searchFun = () =>{
//     let filter = document.getElementById('search');
//     let tr = this.tableEl.getElementsByTagName('tr');
//     for(var i=0; i<tr.length; i++){
//         let td = tr[i].getElementsByTagName('td')[2];

//         if(td){
//             let textValue = td.textContent || td.innerHTML;

//             if(textValue.indexOf(filter) > -1){
//                 tr[i].style.display='';
//             }
//             else{
//                 tr[i].style.display= 'none';
//             }
//         }
//     }

// }
}
