<template>
  <q-icon name="fa-solid fa-dove" size="lg" color="primary" class="q-pa-md" />

  <q-list>
    <q-item clickable v-ripple exact to="/">
      <q-item-section avatar>
        <q-icon name="fa-solid fa-house" />
      </q-item-section>

      <q-item-section class="text-weight-bold text-h6">Home</q-item-section>
    </q-item>

    <q-item clickable v-ripple exact to="/about">
      <q-item-section avatar>
        <q-icon name="fa-solid fa-house" />
      </q-item-section>

      <q-item-section class="text-weight-bold text-h6">About</q-item-section>
    </q-item>

  </q-list>
</template>

<script>
export default {
  name: 'LeftDrawer',
}
</script>
