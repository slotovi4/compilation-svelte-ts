import { writable, readable } from 'svelte/store';

export const testStore = {
	count: writable(0),
	text: readable('hello', (set) => {
		return;
	}),
	changeCount: (newCount: number) => {
		testStore.count.set(newCount);
	}
};