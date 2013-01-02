// things we need.
var ejs = require('ejs');
var docpadPlugin = require('docpad-jsplugin');

// our new plugin.
var EjsPlugin = {
    render : function(opts, next) {
        var config = this.config;
        var inExtension = opts.inExtension;
        var outExtension = opts.outExtension;
        var templateData = opts.templateData;
        
        if (inExtension === 'ejs' ) {
            opts.content = ejs.render(opts.content, templateData)
        } 
        
        return next();
    }
};

// export the new plugin class.
module.exports = docpadPlugin.ExportPlugin(EjsPlugin, "ejs"); 


/*
(function () {
    // javascript version of the Coffeescript inheritance implementation.
    var __hasProp = {}.hasOwnProperty,
        __extends = function (child, parent) {
            for (var key in parent) {
                if (__hasProp.call(parent, key)) child[key] = parent[key];
            }

            function ctor() {
                this.constructor = child;
            }
            ctor.prototype = parent.prototype;
            child.prototype = new ctor();
            child.__super__ = parent.prototype;
            return child;
        };

    module.exports = function (BasePlugin) {
        var EjsPlugin;
        return EjsPlugin = (function (_super) {
            __extends(EjsPlugin, _super);

            function EjsPlugin() {
                return EjsPlugin.__super__.constructor.apply(this, arguments);
            }

            EjsPlugin.prototype.name = 'ejs';

            EjsPlugin.prototype.render = function (opts, next) {
                var config, inExtension, outExtension;
                config = this.config;
                inExtension = opts.inExtension;
                outExtension = opts.outExtension;
                templateData = opts.templateData;
                
                if (inExtension === 'ejs' ) {
                    opts.content = ejs.render(opts.content, templateData)
                } 
                return next();
            };
            return EjsPlugin;
        })(BasePlugin);
    };
}).call(this);*/
