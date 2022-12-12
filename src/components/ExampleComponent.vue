<template>
  <div class="wide-container">
    <h3>TODO it!</h3>
    <div class="inline">
      <div class="input-div">
        <q-input
          input-class="text-center"
          filled
          v-model="newItem"
          placeholder="Type What you have to do"
        />
      </div>
      <div class="add-div">
        <q-btn class="add-btn" icon="add" stack glossy color="purple" />
      </div>
    </div>
    <div class="card-list">
      <q-card>
        <q-card-section class="card-text">
          <q-icon name="check" />
          abc
          <q-btn :class="`no-shadow`" icon="delete" />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const newItem = ref('');
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
}
.wide-container {
  width: 100%;
  margin: 20px;
}
.inline {
  display: flex;
  width: 100%;
  height: 50px;
}
.input-div {
  flex: 1;
  text-align: center;
}
.add-div {
  width: 50px;
  .add-btn {
    height: 50px;
  }
}

div.card-list {
  margin-top: 20px;
  .q-icon {
    margin-right: 20px;
  }
  .q-btn {
    box-shadow: none !important;
  }
}
</style>
