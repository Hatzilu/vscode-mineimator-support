import * as vscode from 'vscode';
import config from './language-configuration.json'

/**
 * @type {vscode.Disposable | undefined}
 */
let disposable;

/***
 * @param {import('vscode').ExtensionContext} context 
 */
export function activate(context) {
    // Register language configuration for your custom JSON file type
    const disposable = vscode.languages.setLanguageConfiguration('midata', config);


    context.subscriptions.push(disposable);
}

export function deactivate() {
    // Cleanup logic goes here
}
