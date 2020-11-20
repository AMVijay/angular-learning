import { Component, OnInit } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

export class Person {
  name: string;
  address: string;
  phone: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-exceljs-poc';

  persons: Person[];

  ngOnInit(): void {
    this.persons = [];
    for (let index = 0; index < 100; index++) {
      let person = new Person();
      person.name = "test name " + index;
      person.address = "1234, test address" + index;
      person.phone = "111222333" + index;
      this.persons.push(person);
    }

  }

  header = ["Person Name", "Address", "Phone Number"];

  exportToExcel() {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet("Person Details");

    worksheet.addRow(["Person Details"]);
    //Add Header Row
    worksheet.addRow(this.header);

    this.persons.forEach(person => {
      let row = worksheet.addRow();
      row.getCell(1).value = person.name;
      row.getCell(2).value = person.address;
      row.getCell(3).value = person.phone;

    });

    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'PersonSearchResults.xlsx');
    });

  }

}
