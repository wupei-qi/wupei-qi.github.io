Vue.component('no1', {
	template: "#no1",
	props:['box_arr'],
	data() {
		return {
			arr:this.box_arr,
			index:0,
			tran: 'l'
		}
	},
	methods: {
		l() {
			this.tran = 'l'
			this.index++
			if(this.index>=this.arr.length){
				this.index=0
			}
		},
		r() {
			this.tran = 'r'
			this.index--
			if(this.index<=-1){
				this.index=this.arr.length-1
			}
		}
	},
	mounted() {
		var img = this.$refs.img[0]
		img.onload = () => {
			var h = this.$refs.img[0].offsetHeight
			for(var i = 0; i < this.$refs.img.length; i++) {
				this.$refs.img[i].style.height = h + 'px'
			}
			this.$el.style.height = h + 'px'
		}
	}
})

new Vue({
	el: "#box",
	data:{
		arr: [
				
				'http://img2.imgtn.bdimg.com/it/u=2294067793,1626705769&fm=15&gp=0.jpg',
				'http://img4.imgtn.bdimg.com/it/u=3944763097,443282959&fm=15&gp=0.jpg',
				'http://img5.imgtn.bdimg.com/it/u=2051514991,2649362270&fm=15&gp=0.jpg'
			]
	}
})