<template>
	<div>
		<v-container class="beginner-container">
			<v-img
				src="https://galenabedandbreakfast.com/wp-content/uploads/2017/12/P.T.-Murphy-Magic-Show.jpg"
				max-width="100%"
				max-height="400px"
				><span class="beginner-header">
					learn magic with skymage
				</span></v-img
			>
		</v-container>
	</div>
</template>

<script>
export default { name: 'BeginnerHeader' };
</script>

<style lang="scss" scoped>
.beginner-header {
	font-family: 'Permanent Marker', cursive;
	position: relative;
	top: 30%;
	transform: translate(-50%, -50%);
	font-size: 75px;
	color: #090705;
	-webkit-animation: glow 1s ease-in-out infinite alternate;
	-moz-animation: glow 1s ease-in-out infinite alternate;
	animation: glow 1s ease-in-out infinite alternate;
}
@-webkit-keyframes glow {
	from {
		text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px orange, 0 0 40px orange,
			0 0 50px orange, 0 0 60px orange, 0 0 70px orange;
	}

	to {
		text-shadow: 0 0 20px #fff, 0 0 30px #f8be67, 0 0 40px #f8be67,
			0 0 50px #f8be67, 0 0 60px #f8be67, 0 0 70px #f8be67, 0 0 80px #f8be67;
	}
}
.beginner-container {
	position: relative;
	text-align: center;
}
</style>
