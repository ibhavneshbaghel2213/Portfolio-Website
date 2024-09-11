
$(document).ready(function () {
    if (!$("#myCanvas").tagcanvas({
        textFont: `sans-serif`,
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: false,
        depth: 1,
        maxSpeed: 0.12,
        pinchZoom: false,
        wheelZoom: false,
        initial: [0.1, -0.1],

    }, "tags")) {
        $("#myCanvasContainer");
    }
})


