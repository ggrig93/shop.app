<template>
  <div class="about">
    <div class="main-content main-content-about">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <Breadcrumbs/>
          </div>
        </div>
        <div class="row">
          <div class="content-area content-about col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="site-main">
              <h3 class="custom_blog_title">About Us</h3>
              <div class="page-main-content">
                <div class="header-banner banner-image">
                  <div class="banner-wrap">
                    <div class="banner-header">
                      <div class="col-lg-5 col-md-offset-7">
                        <div class="content-inner">
                          <h2 class="title">
                            New Collection <br/> for you
                          </h2>
                          <div class="sub-title">
                            Shop the latest products right <br/>
                            We have beard supplies from top brands.
                          </div>
                          <a href="#" class="ysera-button button">Shop now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-3 col-md-4 col-sm-4">
                    <div class="ysera-iconbox  layout1">
                      <div class="iconbox-inner">
                        <div class="icon-item">
                          <span class="placeholder-text">01</span>
                          <span class="icon flaticon-rocket-ship"></span>
                        </div>
                        <div class="content">
                          <h4 class="title">
                            EU Free Delivery
                          </h4>
                          <div class="text">
                            Free Delivery on all order from EU with price more than $90.00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-lg-offset-1">
                    <div class="ysera-iconbox  layout1">
                      <div class="iconbox-inner">
                        <div class="icon-item">
                          <span class="placeholder-text">02</span>
                          <span class="icon flaticon-return"></span>
                        </div>
                        <div class="content">
                          <h4 class="title">
                            Money Guarantee
                          </h4>
                          <div class="text">
                            30 Days money back guarantee no question asked!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-4 col-sm-4 col-lg-offset-1">
                    <div class="ysera-iconbox  layout1">
                      <div class="iconbox-inner">
                        <div class="icon-item">
                          <span class="placeholder-text">03</span>
                          <span class="icon flaticon-padlock"></span>
                        </div>
                        <div class="content">
                          <h4 class="title">
                            Online Support 24/7
                          </h4>
                          <div class="text">
                            We’re here to support to you 24/7. Let’s shopping now!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="team-member">
                  <div class="row">
                    <div class="col-sm-12 border-custom">
                      <span></span>
                    </div>
                  </div>
                  <h2 class="custom_blog_title center">
                    ysera’s Important Persons
                  </h2>
                  <vue-slick-carousel class="team-member-slider nav-center owl-slick" v-bind="settings">
                    <template #prevArrow>
                      <span></span>
                    </template>
                    <div class="ysera-team-member" v-for="i in 3" :key="i">
                      <div class="team-member-item">
                        <div class="member_avatar">
                          <img :src="`http://ledthanhdat.vn/html/ysera/assets/images/member${i}.png`" alt="img">
                        </div>
                        <h5 class="member_name">Mr Claudio</h5>
                        <div class="member_position">
                          CEO & Founder ysera Outfit
                        </div>
                      </div>
                    </div>
                    <template #nextArrow>
                      <span></span>
                    </template>
                  </vue-slick-carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import Breadcrumbs from "@/components/Breadcrumbs";
export default {
  name: 'About',
  components: {Breadcrumbs, VueSlickCarousel},
  data() {
    return {
      settings: {
        "autoplay":false,
        "autoplaySpeed":1000,
        "arrows":true,
        "dots":false,
        "infinite":true,
        "speed":800,
        "slidesToShow": 3,
        "slidesToScroll": 1,
        responsive: [
          {"breakpoint": 480, "settings":{"slidesToShow":1}},
          {"breakpoint": 767, "settings":{"slidesToShow":2}},
          {"breakpoint": 2000, "settings":{"slidesToShow":3}}
        ]
      }
    }
  }
}
</script>
