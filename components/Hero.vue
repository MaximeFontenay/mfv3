
<script lang="ts" setup>
import * as THREE from 'three';

let renderer: THREE.WebGLRenderer;

const hero: Ref<HTMLCanvasElement | null> = ref(null);

const scene = new THREE.Scene();

const { width, height } = useWindowSize();
const aspectRatio = computed(() => width.value / height.value);

const camera = new THREE.PerspectiveCamera(75, aspectRatio.value, 0.1, 1000);
camera.position.set(0, 0, 10);
scene.add(camera);

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0x52B6F })
);
scene.add(sphere);

function updateCamera() {
  camera.aspect = aspectRatio.value;
  camera.updateProjectionMatrix();
}

function updateRenderer() {
  renderer.setSize(width.value, height.value);
  renderer.render(scene, camera);
}

function setRenderer() {
  if (!hero.value) return;
  renderer = new THREE.WebGLRenderer({ canvas: hero.value });
  updateRenderer()
}

watch(aspectRatio, () => {
  updateCamera()
  updateRenderer()
});

onMounted(() => {
  setRenderer()
  loop()
});

const loop = () => {
  sphere.rotation.x += 0.1;
  renderer.render(scene, camera);
  requestAnimationFrame(loop)
}

</script>

<template>
  <div>
    <canvas ref="hero" />
  </div>
</template>


<style lang="scss" scoped></style>