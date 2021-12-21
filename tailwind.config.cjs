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
				'job-cyan-800': 'hsl(180, 14%, 20%)',
				'comment-blue': 'hsl(238, 40%, 52%)',
				'comment-red': 'hsl(358, 79%, 66%)',
				'comment-gray-blue-400': 'hsl(239, 57%, 85%)',
				'comment-red-100': 'hsl(357, 100%, 86%)',
				'comment-gray-blue-600': 'hsl(212, 24%, 26%)',
				'comment-gray-blue-500': 'hsl(211, 10%, 45%)',
				'comment-gray-blue-300': ' hsl(223, 19%, 93%)',
				'comment-gray-blue-200': ' hsl(228, 33%, 97%)'
			}
		},
		fontFamily: {
			'job-font': ["'Spartan'"],
			'comment-font': ["'Rubik'", 'serif-sans']
		}
	},

	plugins: [],
	content: ['./src/**/*.{html,js,svelte,ts}']
};
