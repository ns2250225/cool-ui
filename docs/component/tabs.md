---
pageClass: tabs-page-class
---

# Tabs
## Tabs标签页

<template>
  <div class="tabs-group">
      <co-tabs indexTab="yellow">
            <co-tab label="黄色" name="yellow" fontsize="32" tabheight="100" color="red">
                <div class="first" style="background:yellow;height:200px;"><h1>First</h1></div>
            </co-tab>
            <co-tab label="红色" name="red" fontsize="32" tabheight="100" color="red">
                <div class="second" style="background:red;height:200px;"><h1>Second</h1></div>
            </co-tab>
            <co-tab label="绿色" name="green" fontsize="32" tabheight="100" color="red">
                <div class="third" style="background:green;height:200px;"><h1>Third</h1></div>
            </co-tab>
        </co-tabs>
  </div>
</template>

```html
<template>
  <div class="tabs-group">
      <co-tabs indexTab="yellow">
            <co-tab label="黄色" name="yellow" fontsize="32" tabheight="100" color="red">
                <div class="first" style="background:yellow;height:200px;"><h1>First</h1></div>
            </co-tab>
            <co-tab label="红色" name="red" fontsize="32" tabheight="100" color="red">
                <div class="second" style="background:red;height:200px;"><h1>Second</h1></div>
            </co-tab>
            <co-tab label="绿色" name="green" fontsize="32" tabheight="100" color="red">
                <div class="third" style="background:green;height:200px;"><h1>Third</h1></div>
            </co-tab>
        </co-tabs>
  </div>
</template>
```