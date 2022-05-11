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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "@/components/Breadcrumbs";
export default {
  name: 'About',
  components: {Breadcrumbs},
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
