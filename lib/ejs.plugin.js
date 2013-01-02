// things we need.
var ejs = require('ejs');
var docpadPlugin = require('docpad-jsplugin');

module.exports = docpadPlugin.ExportPlugin("ejs", {
    render : function(opts, next) {
        var config = this.config;
        
        var outExtension = opts.outExtension;
        var templateData = opts.templateData;
        
        if (opts.inExtension === 'ejs' ) {
            opts.content = ejs.render(opts.content, templateData)
        } 
        
        return next();
    }
}); 


/*
// our new plugin.
function EjsPlugin() {
    this.render = function(opts, next) {
        console.log("render");
        var config = this.config;
        var inExtension = opts.inExtension;
        var outExtension = opts.outExtension;
        var templateData = opts.templateData;
        
        if (inExtension === 'ejs' ) {
            opts.content = ejs.render(opts.content, templateData)
        } 
        
        return next();
    }
    
    return EjsPlugin.__super__.constructor.apply(this, arguments);
};
*/