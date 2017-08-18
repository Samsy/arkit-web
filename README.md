# Component ARKit Web

A starter kit for using ARKit with WebGL

## Features

* Metal rendering for Camera feed
* threejs for WebGL content
* Use ngrok for live development, local resources for release
* ARKit interface model for event subscription

## Demos

* [Anchors](Demos/src/js/demos/index/README.md)
* [Shadows](Demos/src/js/demos/shadows/README.md)
* [Bubbles](Demos/src/js/demos/bubbles/README.md)
* [PointCloud](Demos/src/js/demos/pointcloud/README.md)

## Getting started

Read the following on how to setup, run and debug.

* [ARKitWeb](ARKitWeb/README.md)
* [Demos](Demos/README.md)

## Example

```
import ARKit from './arkit/arkit';

/* Get latest frame data */
ARKit.on('frame', data => {});

/* Subsribe to hit test result */
ARKit.on('hitTest', data => {});

/* Call hit test from touch coordinates */
ARKit.hitTest(0.5, 0.5, ARHitTestResultType.featurePoint);
```

## Requirements

* iOS11 (currently in beta and can be installed from [here](https://beta.apple.com/sp/betaprogram/))
* A device which has A9 and A10 processors

## Implemented

* [ARPlaneAnchor](https://developer.apple.com/documentation/arkit/arplaneanchor)
* [ARAnchor](https://developer.apple.com/documentation/arkit/aranchor)
* [ARLightEstimate](https://developer.apple.com/documentation/arkit/arlightestimate)
* [ARHitTestResult](https://developer.apple.com/documentation/arkit/arhittestresult)
* [ARPointCloud rawFeaturePoints](https://developer.apple.com/documentation/arkit/arframe/2887449-rawfeaturepoints)
* [ARSession remove(anchor:)](https://developer.apple.com/documentation/arkit/arsession/2865607-remove)
* Camera feed as base64 to WebGL texture

## Todo

* Object occlusion using a depth texture

## Notes

* Setting the pixel ratio to anything higher than 1 causes significant sync drops for the anchor tracking
* The `matrixWorldInverse` is now set directly on the camera from the frame data. I had to duplicate three's base camera class `arkit/camera.js` as the `matrixWorldInverse` gets set in the `WebGLRenderer.js`

## Resources

* https://developer.apple.com/documentation/arkit
* [https://www.captechconsulting.com/blogs/arkit-fundamentals-in-ios-11](https://www.captechconsulting.com/blogs/arkit-fundamentals-in-ios-11)

## License

[MIT](LICENSE.md)
