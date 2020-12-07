<template>
	<div>
		<div class="video-container">
			<section>
				<video class="smoke-video" src="./smoke.mp4" autoplay muted></video>
				<h1 class="skymage-h1">
					<span>S</span>
					<span>K</span>
					<span>Y</span>
					<span>M</span>
					<span>A</span>
					<span>G</span>
					<span>E</span>
				</h1>
			</section>
		</div>
		<div>
			<v-row align="center" justify="center">
				<v-col class="text-center" cols="12">
					<v-container fill-height>
						<v-layout align-center>
							<v-flex>
								<h2 class="subheading">
									Welcome to the first virtual magic market place in AFRICA
								</h2>
								<v-divider class="my-3"></v-divider>
								<div class="title mb-3">
									Check out our newest
									<span
										class="spanGoTricks"
										style="font-weight: bold; font-style: italic"
										@click="goCatalog"
										>tricks!</span
									>
								</div>
							</v-flex>
						</v-layout>
						<div></div>
					</v-container>
				</v-col>
			</v-row>
		</div>

		<About />
	</div>
</template>

<script>
// @ is an alias to /src

import About from '../components/Hompage/About.vue';

export default {
	name: 'Home',
	components: {
		About,
	},
	methods: {
		goCatalog() {
			if (this.route === '/catalog') {
				return;
			}
			this.$router.push('/catalog');
			this.route = '/catalog';
		},
	},
};
</script>

<style scoped>
.spanGoTricks:hover {
	color: orange;
}
section {
	height: 70vh;
	background: #000;
}
section:before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(
		to right,
		#000,
		#000,
		#000,
		#000,
		orange,
		orange,
		orange
	);
	mix-blend-mode: color;
	pointer-events: none;
}
.skymage-h1 {
	margin: 0;
	padding: 0;
	position: absolute;
	top: 48%;
	transform: translateY(-50%);
	width: 100%;
	text-align: center;
	color: #ddd;
	font-size: 5em;
	font-family: sans-serif;
	letter-spacing: 0.2em;
}
.skymage-h1 span {
	color: orange;
	opacity: 0;
	display: inline-block;
	animation: animate 1s linear forwards;
}
.smoke-video {
	object-fit: cover;
	padding-left: 25em;
	height: 70vh;
}
@keyframes animate {
	0% {
		opacity: 0;
		transform: rotateY(90deg);
		filter: blur(10px);
	}
	100% {
		opacity: 1;
		transform: rotateY(0deg);
		filter: blur(0);
	}
}
.skymage-h1 span:nth-child(1) {
	animation-delay: 1s;
}
.skymage-h1 span:nth-child(2) {
	animation-delay: 1.5s;
}
.skymage-h1 span:nth-child(3) {
	animation-delay: 2s;
}
.skymage-h1 span:nth-child(4) {
	animation-delay: 2.5s;
}
.skymage-h1 span:nth-child(5) {
	animation-delay: 3s;
}
.skymage-h1 span:nth-child(6) {
	animation-delay: 3.5s;
}
.skymage-h1 span:nth-child(7) {
	animation-delay: 4s;
}
.video-container {
	position: relative;
}
</style>
