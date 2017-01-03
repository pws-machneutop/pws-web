/* global net */
/* global console */
/* global josh */

var command = {
    commands: {},
    documentation: {},
    parse: function(message) {
        var cmd = message.split(" ", 1)[0];
        var rest = message.substr(cmd.length);
    
        if (!(cmd in this.commands)) {
            // this is a path
            net.insertPage(cmd + ".html");
        } else {
            josh.clearPrompt();
            this.commands[cmd](rest);
        }
    },
    
    add: function(name, func, docs) {
        this.commands[name] = func;
        this.documentation[name] = docs;
    },
    
    help: function(name) {
        return this.documentation[name] || "";
    }
}