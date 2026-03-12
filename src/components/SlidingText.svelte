<script lang="ts">
	interface Props {
		text: string;
	}

	let { text }: Props = $props();
</script>

<h1>{text}</h1>

<style lang="scss">
	h1 {
		font-size: clamp(6rem, 20vw, 15rem);
		color: $color-text-dark;
	}
</style>
