plugin.loadLang();

plugin.loadCSS("linkplex");

plugin.onLangLoaded = function()
{
    this.addButtonToToolbar("linkplex", theUILang.linkplex, plugin.optionlink+"('" + plugin.url + "')", "help");
    this.addSeparatorToToolbar("help");
}

plugin.onRemove = function()
{
    this.removeSeparatorFromToolbar("linkplex");
    this.removeButtonFromToolbar("linkplex");
}
