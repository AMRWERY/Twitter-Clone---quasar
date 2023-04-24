<template>
  <q-input outlined rounded dense placeholder="Search" class="q-ma-md">
    <template v-slot:prepend>
      <q-icon name="fa-solid fa-magnifying-glass" />
    </template>
  </q-input>

  <q-list padding separator>
    <q-item class="q-pa-md">
      <q-item-section>
        <q-item-label overline class="text-grey">Education</q-item-label>
        <q-item-label class="text-weight-bold">Something Amazing Happened!</q-item-label>
        <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>5 min ago</q-item-label>
      </q-item-section>
    </q-item>

    <q-item class="q-pa-md">
      <q-item-section>
        <q-item-label overline class="text-grey">Education</q-item-label>
        <q-item-label class="text-weight-bold">Something Amazing Happened!</q-item-label>
        <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>5 min ago</q-item-label>
      </q-item-section>
    </q-item>

    <q-item class="q-pa-md">
      <q-item-section>
        <q-item-label overline class="text-grey">Education</q-item-label>
        <q-item-label class="text-weight-bold">Something Amazing Happened!</q-item-label>
        <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</q-item-label>
      </q-item-section>

      <q-item-section side top>
        <q-item-label caption>5 min ago</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'RightDrawer',
}
</script>
