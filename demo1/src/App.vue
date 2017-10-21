<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <ol>
      <li>Function 1: enter to add new Item</li>
      <li>Function 2: click item to toggle underline</li>
    </ol>
    <input type="text" v-model="newItem" @keyup.enter="addItem">
    <ul>
      <li v-for="item in items" :class="{finished:item.isFinished}" @click="toggleFinish(item)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  import Store from './store'
  export default {
    data(){
      return {
        msg: 'This is a to-do list demo',
        newItem: '',
        items: Store.fetch()
      }
    },
    methods: {
      addItem: function () {
        this.items.push({name: this.newItem, isFinished: false});
        this.newItem = '';
      },
      toggleFinish: function (item) {
        item.isFinished = !item.isFinished;
      }
    },
    watch: {
      items: {
        handler: function (val) {
          Store.save(val);
        },
        deep: true
      }
    }
  }
</script>

<style>
  li {
    cursor: pointer;
  }

  li.finished {
    text-decoration: underline;
  }
</style>
