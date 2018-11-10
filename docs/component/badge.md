---
pageClass: badge-page-class
---

# Badge
## Badge小红点

<template>
  <div class="badge-group">
      <co-badge value="18">
        <co-button plain>数字</co-button>
      </co-badge>
      <co-badge :value="18" :max="10">
        <co-button plain>最大值</co-button>
      </co-badge>
      <co-badge value="Hot">
        <co-button plain>文字</co-button>
      </co-badge>
      <co-badge isDot>
        <co-button plain>红点</co-button>
      </co-badge>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>


```html
<template>
  <div class="badge-group">
      <co-badge value="18">
        <co-button plain>数字</co-button>
      </co-badge>
      <co-badge :value="18" :max="10">
        <co-button plain>最大值</co-button>
      </co-badge>
      <co-badge value="Hot">
        <co-button plain>文字</co-button>
      </co-badge>
      <co-badge isDot>
        <co-button plain>红点</co-button>
      </co-badge>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
```