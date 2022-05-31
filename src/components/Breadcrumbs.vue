<template>
  <div class="breadcrumb-trail breadcrumbs">
    <ul class="trail-items breadcrumb">
      <li class="trail-item trail-begin">
        <router-link :to="{name: 'Home'}">Գլխավոր էջ</router-link>
      </li>
      <li class="trail-item trail-end active">
        {{$route.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
}
</script>

<style scoped>

</style>