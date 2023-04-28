<template>
  <q-layout view="lHr lpR fFf">
    <q-header elevated class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
            name="fa-solid fa-dove"
            size="sm"
            color="primary"
            class="q-pa-md lt-md absolute-center"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      :width="283"
      bordered
    >
      <LeftDrawer />
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <RightDrawer />
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import LeftDrawer from "./LeftDrawer.vue";
import RightDrawer from "./RightDrawer.vue";

export default {
  components: { LeftDrawer, RightDrawer },

  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
