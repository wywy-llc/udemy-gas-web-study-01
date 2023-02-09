/**
 * doGet関数
 */
function doGet() {
  return HtmlService.createTemplateFromFile('hello').evaluate();
}
