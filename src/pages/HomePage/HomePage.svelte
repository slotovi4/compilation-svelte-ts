<script lang="ts">
	import { TestComponent } from 'components';
	import { testStore } from 'store';

	let number = 0;
	let text = '';

	testStore.count.subscribe(value => {
		number = value;
	});

	testStore.text.subscribe(value => {
		text = value;
	});

	const onButtonclick = () => {
		testStore.count.update(oldVal => oldVal + 1);
	};

	export let name: string;
</script>

<main>
	<TestComponent props={{ text, number, onButtonclick }} />
	<h1>Hello {name}!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>
</main>

<style type="text/scss">
	@import "./HomePage.scss";
</style>
