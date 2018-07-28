const NodeWebcam = require( "node-webcam" );
var Webcam = NodeWebcam.create();

var opts = {
 
    //Picture related
 
    width: 1280,
    height: 720,
    quality: 100,
 
    //Delay to take shot
 
    delay: 0,
 
    //Save shots in memory
 
    saveShots: true,
 
    // [jpeg, png] support varies
    // Webcam.OutputTypes
 
    output: "jpeg",
 
    //Which camera to use
    //Use Webcam.list() for results
    //false for default device
 
    device: false,
 
    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes
 
    callbackReturn: "location",
 
    //Logging
 
    verbose: false 
};
  
NodeWebcam.capture( "test_picture", opts, function( err, data ) {
    var image = "<img src='" + data + "'>";
});