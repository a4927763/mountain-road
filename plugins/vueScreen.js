import Vue from 'vue';

const vueScreen = {
	install(Vue, options) {
		let reactiveComponent = new Vue({
			data() {
				return {
					vsWidth: null, //畫面寬度(px)
					vsHeight: null, //畫面高度(px)
					vsScrollY: null, //滾動距離(px)
					vsOffsetHeight: null, //內容高度(px)
					vsOffsetBottom: null, //底部距離(px)
				}
			}
		});
		let VueScreenSizeMixin = {
			computed: {
				$_vsWidth() {
					return reactiveComponent.vsWidth || this.getScreenWidth();
				},
				$_vsHeight() {
					return reactiveComponent.vsHeight || this.getScreenHeight();
				},
				$_vsScrollY() {
					return reactiveComponent.vsScrollY || this.getScreenScrollY();
				},
				$_vsOffsetHeight() {
					return reactiveComponent.vsOffsetHeight || this.getScreenOffsetHeight();
				},
				$_vsOffsetBottom() {
					return reactiveComponent.vsOffsetBottom || this.getScreenOffsetBottom();
				},
			},
			methods: {
				getScreenWidth() {
					if (process.client)
						return window.innerWidth ||
							document.documentElement.clientWidth ||
							document.body.clientWidth;
				},
				getScreenHeight() {
					if (process.client)
						return window.innerHeight ||
							document.documentElement.clientHeight ||
							document.body.clientHeight;
				},
				getScreenScrollY() {
					if (process.client)
						return Math.round(window.pageYOffset);
				},
				getScreenOffsetHeight() {
					if (process.client)
						return document.documentElement.offsetHeight;
				},
				getScreenOffsetBottom() {
					if (process.client)
						return Math.round(document.documentElement.offsetHeight - window.pageYOffset - window.innerHeight);
				},
				handleResizeAndScroll() {
					reactiveComponent.vsWidth = this.getScreenWidth();
					reactiveComponent.vsHeight = this.getScreenHeight();
					reactiveComponent.vsScrollY = this.getScreenScrollY();
					reactiveComponent.vsOffsetHeight = this.getScreenOffsetHeight();
					reactiveComponent.vsOffsetBottom = this.getScreenOffsetBottom();
				},
				$vsScreenDestroyListener() {
					if (process.client) {
						window.removeEventListener('resize', this.handleResizeAndScroll);
						window.removeEventListener('scroll', this.handleResizeAndScroll);
					}
				},
				$vsScreenAddListener() {
					if (process.client) {
						window.addEventListener('resize', this.handleResizeAndScroll);
						window.addEventListener('scroll', this.handleResizeAndScroll);
					}
				}
			},
			mounted() {
				this.$nextTick(() => {
					this.$vsScreenAddListener();
				});
			},
			beforeDestroy() {
				this.$vsScreenDestroyListener();
			}
		}
		if (!Vue.__my_screen_mixin__) {
			Vue.__my_screen_mixin__ = true;
			Vue.mixin(VueScreenSizeMixin);
		}
	}
}
Vue.use(vueScreen);
