<template>
	<div>
		<BeginnerHeader />
		<BeginnerText />
		<BeginnerCatalog />
	</div>
</template>

<script>
import BeginnerHeader from '../components/BeginnerSection/BeginnerHeader';
import BeginnerCatalog from '../components/BeginnerSection/BeginnerCatalog';
import BeginnerText from '../components/BeginnerSection/BeginnerText';

export default {
	components: { BeginnerHeader, BeginnerCatalog, BeginnerText },
};
</script>
