<template>
	<v-footer dark height="auto">
		<v-card flat tile class="orange--text text-center flex">
			<v-card-text>
				<v-btn
					color="orange"
					v-for="icon in icons"
					:key="icon"
					class="mx-3"
					dark
					icon
				>
					<v-icon size="24px">{{ icon }}</v-icon>
				</v-btn>
			</v-card-text>

			<v-card-text class="grey--text">
				At <span style="font-weight: bold;color:orange">Skymage</span>, we have
				only one goal: to give you the power to perform magic. We want to make
				you the life of any party.
			</v-card-text>

			<v-divider></v-divider>

			<v-card-text class="orange--text text-center">
				&copy;2020 - <strong>SKYMAGE</strong>
			</v-card-text>
		</v-card>
	</v-footer>
</template>

<script>
export default {
	data: () => ({
		icons: [
			'fab fa-facebook',
			'fab fa-twitter',
			'fab fa-google-plus',
			'fab fa-linkedin',
			'fab fa-instagram',
		],
	}),
};
</script>

<style></style>
