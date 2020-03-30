function userform() {
  
  var template = HtmlService.createTemplateFromFile("userform");
  
  var html = template.evaluate();
  html.setTitle("Input Form");
  SpreadsheetApp.getUi().showModelessDialog(html, "Input Form");
  
  
}

function intiMenu(){
    console.log("Mkkmkn");

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

  


