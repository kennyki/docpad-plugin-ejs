// things we need.
var exportPlugin = require('docpad-jsplugin');
var ejs = require('ejs');

module.exports = exportPlugin("ejs", {
    render : function(opts, next) {
        var config = this.config;
        
        var outExtension = opts.outExtension;
        var templateData = opts.templateData;
        
        // temporary hack to allow ejs pages to use require()
        templateData.require = require;
       
        if (opts.inExtension === 'ejs' ) {
                
            // calls the ejs renderer (with a hack to allow ()=> for lamdas :P
            opts.content = ejs.render(opts.content.replace( /(\([^\(]*?\))\w*=\>/ig , "function $1"), templateData)
        } 
        
        return next();
    }
}); 
