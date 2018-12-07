module.exports = function (RED) {
    const decode = require("bcbp").decode;
    
    function BCBPDecodeNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = decode(msg.payload);
            node.send(msg);
        });
    }
    RED.nodes.registerType("Decode BCBP",BCBPDecodeNode);

}