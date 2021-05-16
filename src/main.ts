import { HomePage } from 'pages';

const app = new HomePage({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;