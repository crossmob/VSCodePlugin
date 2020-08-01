import * as vscode from 'vscode';

function runMaven(title:string, cmd:string) {
	// let workspaceFolders = vscode.workspace.workspaceFolders;
	// if(!workspaceFolders) {
	// 	vscode.window.showErrorMessage("Unable to locate project location");
	// 	return;
	// }
	vscode.window.createTerminal({name:title, shellPath:"/bin/bash", shellArgs:["-c", cmd + " || read"]}).show();
}

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('crossmobile.rundesktop', () => {
		runMaven("CM:Desktop", "mvn install -Pdesktop,run");
	}));

	context.subscriptions.push(vscode.commands.registerCommand('crossmobile.runcleandesktop', () => {
		runMaven("CM:Desktop", "mvn clean install -Pdesktop,run");
	}));

	context.subscriptions.push(vscode.commands.registerCommand('crossmobile.runios', () => {
		runMaven("CM:iOS", "mvn install -Pios,run");
	}));

	context.subscriptions.push(vscode.commands.registerCommand('crossmobile.runcleanios', () => {
		runMaven("CM:iOS", "mvn clean install -Pios,run");
	}));

	context.subscriptions.push(vscode.commands.registerCommand('crossmobile.runandroid', () => {
		runMaven("CM:Android", "mvn install -Pandroid,run");
	}));

	context.subscriptions.push(vscode.commands.registerCommand('crossmobile.runcleanandroid', () => {
		runMaven("CM:Android", "mvn clean install -Pandroid,run");
	}));

}

// this method is called when your extension is deactivated
export function deactivate() {}
