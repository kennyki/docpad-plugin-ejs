// things we need.
var exportPlugin = require('docpad-jsplugin');
var ejs = require('ejs');
var path = require('path');

module.exports = exportPlugin("ejs", {
    render : function(opts, next) {
        if (opts.inExtension === 'ejs' ) {
            var config = this.config;
        
            var outExtension = opts.outExtension;
            var templateData = opts.templateData;
            
            // temporary hack to allow ejs pages to use require()
            templateData.require = require;

            // [Kenny - 06 Aug 2014] this is to make <% include %> work properly
            // Based on http://stackoverflow.com/a/13537052/940030
            templateData.filename = templateData.document.fullPath;

            // [Kenny - 16 Sept 2014]
            if (!templateData.filename) {
                // this could be resulted from a virtual document - one without physical source
                // let's construct the path manually
                templateData.filename = path.join(this.docpad.config.srcPath, templateData.document.relativePath);
            }
                
            // calls the ejs renderer (with a hack to allow ()=> for lamdas :P
            opts.content = ejs.render(opts.content.replace( /(\([^\(]*?\))\w*=\>/ig , "function $1"), templateData);
        } 
        
        return next();
    }
}); 
