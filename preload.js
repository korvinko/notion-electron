const { contextBridge } = require('electron');
const { SpellCheckHandler, ContextMenuListener, ContextMenuBuilder } = require('electron-spellchecker');

window.spellCheckHandler = new SpellCheckHandler();
window.spellCheckHandler.attachToInput();

// Set the spellchecker language.
window.spellCheckHandler.switchLanguage('en-US');

// Create a context menu.
const contextMenuBuilder = new ContextMenuBuilder(window.spellCheckHandler);
const contextMenuListener = new ContextMenuListener(info => {
    contextMenuBuilder.showPopupMenu(info);
});

contextBridge.exposeInMainWorld('electron', {});