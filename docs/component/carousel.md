---
pageClass: carousel-page-class
---

# Carousel
## Carousel轮播图

<template>
  <div class="carousel-group">
      <co-carousel :data="carouselData" loop :cwidth="600" :cheight="400"></co-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
        carouselData: [
            {
                title: 'One',
                subtitle: 'pic',
                bgc: '#1abc9c',
                imgSrc: 'https://images.pexels.com/photos/1581557/pexels-photo-1581557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                title: 'Two',
                subtitle: 'pic',
                bgc: '#3498db',
                imgSrc: 'https://images.pexels.com/photos/1570872/pexels-photo-1570872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                title: 'Three',
                subtitle: 'pic',
                bgc: '#9b59b6',
                imgSrc: 'https://images.pexels.com/photos/1581687/pexels-photo-1581687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                title: 'Four',
                subtitle: 'pic',
                bgc: '#34495e',
                imgSrc: 'https://images.pexels.com/photos/735647/pexels-photo-735647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                title: 'Five',
                subtitle: 'pic',
                bgc: '#e74c3c',
                imgSrc: 'https://images.pexels.com/photos/1319839/pexels-photo-1319839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
        ]
    }
  },
  methods: {
  }
}
</script>


```html
<template>
  <div class="carousel-group">
      <co-carousel :data="carouselData" loop :cwidth="600" :cheight="400"></co-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
        carouselData: [
            {
                title: 'One',
                subtitle: 'pic',
                bgc: '#1abc9c',
                imgSrc: 'https://images.pexels.com/photos/1581557/pexels-photo-1581557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                title: 'Two',
                subtitle: 'pic',
                bgc: '#3498db',
                imgSrc: 'https://images.pexels.com/photos/1570872/pexels-photo-1570872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                title: 'Three',
                subtitle: 'pic',
                bgc: '#9b59b6',
                imgSrc: 'https://images.pexels.com/photos/1581687/pexels-photo-1581687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                title: 'Four',
                subtitle: 'pic',
                bgc: '#34495e',
                imgSrc: 'https://images.pexels.com/photos/735647/pexels-photo-735647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            },
            {
                title: 'Five',
                subtitle: 'pic',
                bgc: '#e74c3c',
                imgSrc: 'https://images.pexels.com/photos/1319839/pexels-photo-1319839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            }
        ]
    }
  },
  methods: {
  }
}
</script>
```