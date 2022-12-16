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
        <q-btn
          @click="addItem()"
          class="add-btn"
          icon="add"
          glossy
          color="purple"
        />
      </div>
    </div>
    <q-card v-for="(todo, i) in todos" :key="todo">
      <q-card-section class="card-text row">
        <div class="card-left-div col">
          <q-icon name="check" />
          {{ todo }}
        </div>
        <div class="card-right-div col">
          <q-btn @click="deleteItem(i + '')" icon="delete" />
        </div>
      </q-card-section>
    </q-card>
    <div class="clear-button">
      <q-btn text-color="negative" @click="clearAll()">Clear All</q-btn>
    </div>
  </div>
  <!-- Modal area -->
  <q-dialog v-model="showModal">
    <q-card class="my-card">
      <q-card-section class="q-pt-xl">
        <div class="row no-wrap items-center">
          <div class="col text-h4 text-center text-negative ellipsis">경고</div>
        </div>
      </q-card-section>

      <q-card-section class="q-mt-xs q-pb-xl">
        <div class="row no-wrap items-center">
          <div class="col text-h6 text-center ellipsis">할 일을 입력하세요</div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import firebase from 'firebase/compat/app';

const todoRef = firebase.database().ref('data/').child('todo');
const newItem = ref('');
const showModal = ref(false);
const todos = ref([] as string[]);

onMounted(() => {
  todoRef.on('value', (sn) => {
    todos.value = sn.val();
  });
});

const deleteItem = (i: string) => {
  todoRef.child(i).remove();
};

const addItem = () => {
  if (newItem.value == '') {
    showModal.value = true;
  } else {
    todoRef.push(newItem.value);
    newItem.value = '';
  }
};

const clearAll = () => {
  todoRef.remove();
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
}
.wide-container {
  width: 100%;
  margin: 20px;
  margin-top: 0;
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

.q-card {
  margin-top: 30px;
  padding: 0;
  width: 100%;
  .card-left-div {
    .q-icon {
      margin-right: 20px;
    }
    justify-content: center;
    line-height: 30px;
    font-size: 20px;
  }
  .card-right-div {
    button {
      float: right;
    }
    .q-btn:before {
      box-shadow: none;
    }
  }
}

.clear-button {
  margin-top: 20px;
  display: flexbox;
  width: 100%;
  text-align: center;
}
</style>
