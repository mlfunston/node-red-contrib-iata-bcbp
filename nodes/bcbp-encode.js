module.exports = function (RED) {
    const encode = require("bcbp").encode;
    
    function BCBPEncodeNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = encode(msg.payload);
            node.send(msg);
        });
    }
    RED.nodes.registerType("Encode BCBP",BCBPEncodeNode);

}