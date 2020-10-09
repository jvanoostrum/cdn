function doGet() {
  
  var html = HtmlService.createHtmlOutputFromFile('index')

      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=2.0, user-scalable=yes')
      //.setWidth(400)
      //.setHeight(300)
      .setTitle('Test radar')
      
  return html;
  
}

function doPost(e) {
  
  document.location.href = "https://www.google.nl";
  
}
