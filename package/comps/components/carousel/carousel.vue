<template>
    <div id="wrapper" :style="{width: cwidth+'px', height: cheight+'px'}">
   	  <div id="slider-wrap" @mouseover="showBtn" @mouseout="hideBtn" :class="{active: isActive}">
      	  <ul id="slider" ref="slider" :style="{width: widthData, left: leftData}">
          	 <li v-for="item in data" :key="item.title" :data-color="item.bgc" :style="{width: cwidth+'px', height: cheight+'px'}">
                <div>
                    <h3>{{ item.title }}</h3>
                    <span>{{ item.subtitle }}</span>
                </div>
                <img :src="item.imgSrc" alt="picture" />
             </li>
          </ul>
          
          <div class="btns" id="next" @click="slideRight"><i class="icon-xiayibu"></i></div>
          <div class="btns" id="previous" @click="slideLeft"><i class="icon-shangyibu"></i></div>

          <div id="counter" ref="counter" v-html="counter_text"></div>
          <div id="pagination-wrap">
            <ul>
            </ul>
          </div>       
      </div>
   </div>
</template>
<script>
export default {
    name: 'co-carousel',
    data () {
        return {
            pos: 0,
            totalSlides: 0,
            sliderWidth: 0,
            isActive: false,
            counter_text: '',
            widthData: 0,
            leftData: 0
        }
    },
    props: {
        data: {
            type: Array,
            default: []
        },
        loop: {
            type: Boolean,
            default: false
        },
        cwidth: {
            type: Number,
            default: 600
        },
        cheight: {
            type: Number,
            default: 400
        }
    },
    components: {},
    mounted () {
           
        var liTags = document.querySelectorAll('#slider-wrap ul li')
        this.totalSlides = liTags.length
        
        var sliderWrapperIns = document.getElementById('slider-wrap')
        this.sliderWidth = sliderWrapperIns.offsetWidth
        
        this.widthData = (this.sliderWidth * this.totalSlides) + 'px'
        console.log(this.widthData)

        if (this.loop) {
            this.autoPlay()
        }

        for (const item of liTags) {
            var c = item.getAttribute("data-color")
            item.style.background = c
            
            var li = document.createElement('li')
            var ulTag = document.querySelector('#pagination-wrap ul')
            ulTag.append(li)
        }

        this.countSlides()
        this.pagination()
    },
    methods: {
        autoPlay () {
            var autoSlider = setInterval(this.slideRight, 3000)
        },
        slideLeft () {
            this.pos -= 1

            if(this.pos==-1){ this.pos = this.totalSlides-1 }
 	
            this.leftData = -( this.sliderWidth * this.pos ) + 'px'
            
            this.countSlides()
            this.pagination()
        },
        slideRight () {
            this.pos += 1

            if(this.pos==this.totalSlides){ this.pos = 0; }
            
            this.leftData = -( this.sliderWidth * this.pos ) + 'px'
            console.log(this.leftData)
            
            this.countSlides()
            this.pagination()
        },
        countSlides () {
            this.counter_text = (this.pos+1) + ' / ' + this.totalSlides
        },
        pagination () {
            var pliTags = document.querySelectorAll('#pagination-wrap ul li')
            for (const [index, item] of pliTags.entries()) {
                if (index === this.pos) {
                    item.classList.add("active")
                } else {
                    item.classList.remove("active")
                }
            }
        },
        showBtn () {
            this.isActive = true
        },
        hideBtn () {
            this.isActive = false
        }
    },
    computed: {
       
    },
    filters: {}
}
</script>