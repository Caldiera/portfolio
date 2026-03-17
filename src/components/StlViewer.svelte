<script lang="ts">
	import * as THREE from 'three';
	import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

	interface Rotation {
		x?: number;
		y?: number;
		z?: number;
	}

	interface Props {
		src: string;
		color?: string;
		colspan?: number;
		rowspan?: number;
		description?: string;
		rotation?: Rotation;
	}

	let { src, color = '#ffffff', colspan = 1, rowspan = 1, description, rotation }: Props =
		$props();

	let container: HTMLDivElement;
	let canvas: HTMLCanvasElement;

	$effect(() => {
		const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(container.clientWidth, container.clientHeight);

		const camera = new THREE.PerspectiveCamera(
			45,
			container.clientWidth / container.clientHeight,
			0.1,
			10000
		);

		const scene = new THREE.Scene();

		scene.add(new THREE.AmbientLight(0xffffff, 0.6));

		const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
		dirLight.position.set(1, 2, 3);
		scene.add(dirLight);

		const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
		dirLight2.position.set(-1, -1, -2);
		scene.add(dirLight2);

		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.08;

		const loader = new STLLoader();
		loader.load(src, (geometry) => {
			geometry.computeBoundingBox();
			geometry.computeVertexNormals();

			// Center the geometry
			const center = new THREE.Vector3();
			geometry.boundingBox!.getCenter(center);
			geometry.translate(-center.x, -center.y, -center.z);

			const material = new THREE.MeshStandardMaterial({ color });
			const mesh = new THREE.Mesh(geometry, material);
			const deg = Math.PI / 180;
			mesh.rotation.set(
				(rotation?.x ?? 0) * deg,
				(rotation?.y ?? 0) * deg,
				(rotation?.z ?? 0) * deg
			);
			scene.add(mesh);

			// Fit camera to model
			const box = new THREE.Box3().setFromObject(mesh);
			const size = box.getSize(new THREE.Vector3());
			const maxDim = Math.max(size.x, size.y, size.z);
			camera.position.set(0, 0, maxDim * 2);
			camera.near = maxDim * 0.01;
			camera.far = maxDim * 100;
			camera.updateProjectionMatrix();
			controls.update();
		});

		renderer.setAnimationLoop(() => {
			controls.update();
			renderer.render(scene, camera);
		});

		const observer = new ResizeObserver(() => {
			const w = container.clientWidth;
			const h = container.clientHeight;
			renderer.setSize(w, h);
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
		});
		observer.observe(container);

		return () => {
			renderer.setAnimationLoop(null);
			controls.dispose();
			renderer.dispose();
			observer.disconnect();
		};
	});
</script>

<div
	class="viewer"
	style="grid-column: span {colspan}; grid-row: span {rowspan}; aspect-ratio: {colspan} / {rowspan};"
	bind:this={container}
>
	{#if description}
		<p class="description">{description}</p>
	{/if}
	<canvas bind:this={canvas}></canvas>
</div>

<style>
	.viewer {
		position: relative;
		width: 100%;
		border-radius: var(--radius-lg);
		overflow: hidden;
		background: rgba(15, 20, 20, 0.8);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		box-shadow:
			0 4px 30px rgba(0, 0, 0, 0.1),
			inset 0 1px 0 rgba(255, 255, 255, 0.2),
			inset 0 -1px 0 rgba(0, 0, 0, 0.1);

		canvas {
			display: block;
			width: 100%;
			height: 100%;
		}

		.description {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			z-index: 1;
			margin: 0;
			padding: 0.75rem 1rem;
			color: #ffffff;
			font-size: 0.875rem;
			pointer-events: none;
		}
	}
</style>
