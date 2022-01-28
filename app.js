new Vue({
	el: '#app',

	data() {
		return {
			courses: [],
			title: '',
			time: 0,
		};
	},

	computed: {},

	methods: {
		addCourse() {
			this.courses.push({
				title: this.title,
				time: this.time,
			})
		}
	},
});
