
import { createRouter, createWebHashHistory } from "vue-router";

import HelloWorld from '@/components/HelloWorld.vue'
import t from '@/components/t.vue'

const routes = [
	{
		path: '/hello',
		name: 'HelloWorld',
		component: HelloWorld
	},
	{
		path: '/t',
		name: 't',
		component: t
	}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
