var vscode = require('vscode');
var beautify = require('./utils/beautify');

function activate(context) {

    console.log('Congratulations, your extension "ivue" is now active!');

    var formatter = vscode.commands.registerTextEditorCommand('ivue.format', function (textEditor) {

        if (textEditor.document.languageId !== 'vue' || !/\.vue$/i.test(textEditor.document.fileName)) {
            return;
        }

        var editorInsertSpace = textEditor.options.insertSpaces;
        var editorTabSize = textEditor.options.tabSize;

        var text = textEditor.document.getText();

        var code = beautify(text, !editorInsertSpace, editorTabSize);

        textEditor.edit(function (editBuilder) {
            var document = textEditor.document;
            var lastLine = document.lineAt(document.lineCount - 1);
            var start = new vscode.Position(0, 0);
            var end = new vscode.Position(document.lineCount - 1, lastLine.text.length);
            var range = new vscode.Range(start, end);
            editBuilder.replace(range, code);
        });
    });

    context.subscriptions.push(formatter);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;