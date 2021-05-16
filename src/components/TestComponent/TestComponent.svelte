<script lang="ts">
	export const props: IProps | null = null;
	
	interface IProps {
		text: string;
		number: number;
		onButtonclick: (newNumber: IProps['number']) => void;
	}
</script>

<section>
	<span>{props.text} - {props.number}</span>
	<button></button>
</section>

<style type="text/scss">
	@import "./TestComponent.scss";
</style>
