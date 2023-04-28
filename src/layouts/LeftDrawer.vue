<template>
  <q-icon name="fa-solid fa-dove" size="lg" color="primary" class="q-pa-md" />

  <q-list>
    <q-item clickable v-ripple exact to="/">
      <q-item-section avatar>
        <q-icon name="fa-solid fa-house" />
      </q-item-section>

      <q-item-section class="text-weight-bold text-h6">Home</q-item-section>
    </q-item>

    <q-item clickable v-ripple exact to="/explore">
      <q-item-section avatar>
        <q-icon name="fa-solid fa-hashtag" />
      </q-item-section>

      <q-item-section class="text-weight-bold text-h6">Explore</q-item-section>
    </q-item>

    <q-item clickable v-ripple exact to="/notifications">
      <q-item-section avatar>
        <q-icon name="fa-solid fa-bell" />
      </q-item-section>

      <q-item-section class="text-weight-bold text-h6"
        >Notifications</q-item-section
      >
    </q-item>

    <q-item clickable v-ripple exact to="/messages">
      <q-item-section avatar>
        <q-icon name="fa-regular fa-envelope" />
      </q-item-section>

      <q-item-section class="text-weight-bold text-h6">Messages</q-item-section>
    </q-item>

    <q-item clickable v-ripple exact to="/book-marks">
      <q-item-section avatar>
        <q-icon name="fa-regular fa-bookmark" />
      </q-item-section>

      <q-item-section class="text-weight-bold text-h6"
        >Bookmarks</q-item-section
      >
    </q-item>

    <q-item clickable v-ripple exact to="/twitter-blue">
      <q-item-section avatar>
        <q-icon name="fa-brands fa-square-twitter" />
      </q-item-section>

      <q-item-section class="text-weight-bold text-h6"
        >Twitter Blue</q-item-section
      >
    </q-item>

    <q-item clickable v-ripple exact to="/profile">
      <q-item-section avatar>
        <q-icon name="fa-regular fa-user" />
      </q-item-section>

      <q-item-section class="text-weight-bold text-h6">Profile</q-item-section>
    </q-item>

    <q-item clickable v-ripple exact to="/more">
      <q-item-section avatar>
        <q-icon name="fa-solid fa-circle-radiation" />
      </q-item-section>

      <q-item-section class="text-weight-bold text-h6">More</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: "LeftDrawer",
};
</script>
