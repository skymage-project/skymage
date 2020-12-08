<template>
	<div>
		<v-container class="beginner-text-container"
			><h1 class="beginner-text-h1">Instant Tutorials</h1>
			<h2 class="beginner-text-h2">Magic to Download & Learn Instantly</h2>
			<span class="beginner-text-span"
				>Skymage is a
				<span style="font-weight: bold;color:red">TUNISIAN</span> hub for online
				magic. <br />
				We ship to any city, with safe, fast, flat rate shipping - but for some,
				tomorrow isn't soon enough. <br />
				In this section you'll be able to shop hundreds of downloadable and
				streamable video tutorials to help you learn close-up magic. <br />
				Watch on-demand. Any time, anywhere. <br />
				By purchasing these affordable projects, you'll be able to instantly
				unlock access to the secrets within, from the comfort of your own home.
			</span></v-container
		>
	</div>
</template>

<script>
export default {
	name: 'BeginnerText',
};
</script>

<style lang="scss" scoped>
.beginner-text-h1 {
	font-family: 'Permanent Marker', cursive;
	font-size: 45px;
	color: #ec9613;
	text-shadow: 2px 2px #f5e3c8;
}
.beginner-text-h2 {
	font-family: 'Roboto', sans-serif;
	font-size: 30px;
	color: #f0660b;
}
.beginner-text-span {
	font-family: 'Roboto', sans-serif;
	font-size: 20px;
	color: white;
}
.beginner-text-container {
	text-align: justify;
	text-justify: inter-word;
}
</style>
