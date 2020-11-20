## Introduction
Example Implementation of Excel File Generation from Angular using exceljs node modules.

## Environment Setup
* Install nodejs, npm, angular 9 cli.
* `ng new angular-exceljs-poc` to create project workspace.
* `npm install --save exceljs` install excel node modules.
* `npm install --save file-saver` install filesave to generate file.
* Add exceljs to compiler path as below in tsconfig.json
```json
 "compilerOptions": {
    ...
    ...
    ...
    "paths": {
      "exceljs" : [
        "node_modules/exceljs/dist/exceljs.min.js"
      ]
    }
  },
```

## Implementation
* exceljs provides easy way to create excel workbook `let workbook = new Workbook()`. 
* As similar to workbook, new sheet creation is as simple as `let worksheet = workbook.addWorksheet("<sheet name>");`
* `addRow()`, `getCell(<column number>)` methods help to create new row and get cell value.
* Below snippet would help understand the simple sheet creation 

```typescript
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
```
## Source Code
Source code of this https://github.com/AMVijay/angular-learning/tree/main/angular-exceljs-poc
