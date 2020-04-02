function userform() {
  
  var template = HtmlService.createTemplateFromFile("userform");
  template.initialValue = initialValue();
  var html = template.evaluate();
  html.setTitle("Input Form");
  SpreadsheetApp.getUi().showModelessDialog(html, "Input Form");
  
  
}

function intiMenu(){

     var ui = SpreadsheetApp.getUi();
     var manu = ui.createMenu("Ridwan");
     manu.addItem("My Form", "userform");
     manu.addToUi();

}


function onOpen(){
 intiMenu();
  
}

function appendData(data){
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Database");
  ws.appendRow([data.info1, data.info2, data.info3, data.info4, data.info5, data.info6, data.info7, data.info8, data.info9, data.info10, 
               data.info11, data.info12, data.info13, data.info14, data.info15, data.info16, data.info17, data.info18, 
                data.info19, data.info20, data.info21, data.info22, data.info23]);
 
}

//function useDataRange()
//{
//  var rows= SpreadsheetApp.getActiveSheet().getDataRange().getValues();
//  rows.forEach(function(row){
//    Logger.log(row);
//  });
//}

function getSpecificRange()
{
    var rows= SpreadsheetApp.getActiveSheet().getRange(2,1,1,26).getValues();
  //rows, cols, number of rows, number of columns
  Logger.log(rows[0][24]);

}
var SHEET = SpreadsheetApp.getActiveSheet();


function initialValue(){
  return SHEET.getRange(2, 2).getValue();
  
}

function getNewValue(){
  
  return SHEET.getRange(2, 3).getValue();
  
}

  


