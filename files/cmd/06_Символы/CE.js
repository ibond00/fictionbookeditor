//Таблица дополнительных символов европейских языков алфавита
//                                jurgennt™, май 2008 г.
//                          script engene by Sclex v.1.1

function Run() {
 var dialogWidth="500px"; //ширина окна таблицы символов
 var dialogHeight="666px"; //высота окна таблицы символов
 var params=new Object(); 
 params["fbw_body"]=document.getElementById("fbw_body");
 params["document"]=document;
 params["window"]=window;
 var rslt=window.showModelessDialog("cmd/CE.htm",params,
      "dialogHeight: "+dialogHeight+"; dialogWidth: "+dialogWidth+"; "+
      "center: Yes; help: No; resizable: Yes; status: No;"); 
}