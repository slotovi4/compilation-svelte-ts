<script lang="ts">
	export let props: IProps | null = null;

	interface IProps {
		text: string;
		number: number;
		onButtonclick: () => void;
	}
</script>

<section>
	<span>{props?.text || ''} - {props?.number || ''}</span>
	<button on:click={props?.onButtonclick}>click</button>
</section>

<style type="text/scss">
	@import "./TestComponent.scss";
</style>
