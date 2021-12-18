module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],

	theme: {
		extend: {
			colors: {
				'job-cyan-100': 'hsl(180, 52%, 96%)',
				'job-cyan-200': 'hsl(180, 31%, 95%)',
				'job-cyan-500': 'hsl(180, 29%, 50%)',
				'job-cyan-600': 'hsl(180, 8%, 52%)',
				'job-cyan-800': 'hsl(180, 14%, 20%)'
			}
		},
		fontFamily: {
			'job-font': ["'Spartan'"]
		}
	},

	plugins: [],
	content: ['./src/**/*.{html,js,svelte,ts}']
};
