new Vue({
	el: '#app',

	data() {
		return {
			courses: [],
			title: '',
			time: 0,
		};
	},

	computed: {
		totalTime() {
			
			let acum = 0;

			if(this.courses.length == 0) return acum;

			this.courses.forEach(e => {
				acum = acum + e.time;
			}); 

			return acum;
		}
	},

	methods: {
		addCourse() {
			this.courses.push({
				title: this.title,
				time: parseInt(this.time),
			});
			this.title = '';
			this.time = 0;

		}
	},
});
