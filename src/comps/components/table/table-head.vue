<template>
<thead>
    <th v-for="col in columns" :key="col.id">{{col.label}}</th>
</thead>
</template>
<script>

export default {
    name: "co-table-head",
    props: ["columns"],
    data() {
        return {
        }
    },
}
</script>

<style lang='scss'>
</style>

