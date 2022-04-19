<template>
  <div id="information" class="tab-panel">
    <table class="table table-bordered">
      <tr v-for="(item, i) in information" :key="i">
        <td>{{item.key}}</td>
        <td>{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Information",
  props: {
    information: {
      type: Object
    }
  }
}
</script>