import { AmbientLight, DirectionalLight } from 'three';

// Lights
const controller = {
  ambient: 0xd4d4d4,
  directional: 0xffffff
};

const lights = {
  ambient: new AmbientLight(controller.ambient),
  directional: new DirectionalLight(controller.directional, 1)
};

export default lights;