<template>
	<div class="nav">
		<ul>
			<li>
				<router-link to="/hello">hello world</router-link>
			</li>
			<li>
				<router-link to="/t">t</router-link>
			</li>
		</ul>
	</div>
	<router-view></router-view>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.nav {
	position: absolute;
	top: 0;
	left: 0;
	ul {
		display: flex;
		justify-content: center;
		column-gap: 20px;
		li a{
			color: #fff;
		}
	}
}
</style>