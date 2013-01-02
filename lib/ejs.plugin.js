// things we need.
var exportPlugin = require('docpad-jsplugin');
var ejs = require('ejs');

module.exports = exportPlugin("ejs", {
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
