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
              <h3 class="custom_blog_title">Մեր մասին</h3>
              <div class="page-main-content">
                <div class="header-banner banner-image">
                  <div class="banner-wrap">
                    <div class="banner-header">
                      <div class="col-lg-5 col-md-offset-7">
                        <div class="content-inner">
                          <h2 class="title">
                            Նոր տեսականի <br/> հենց քեզ համար
                          </h2>
                          <div class="sub-title">
                            Ինքնատիպ և որակյալ զարդեր,որոնք <br/>
                            կգոհացնեն նույնիսկ ամենաքմահաճ հաճախորդին
                          </div>
                          <router-link to="/products" class="ysera-button button">Գնել</router-link>
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
                          <span class="icon flaticon-delivery-truck"></span>
                        </div>
                        <div class="content">
                          <h4 class="title">
                            ԱՆՎՃԱՐ ԱՌԱՔՈՒՄ
                          </h4>
                          <div class="text">
                            Անվճար առաքում ՀՀ տարածքում՝ 5000 դրամ և ավել բոլոր պատվերների համար։
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
                          <span class="icon flaticon-diamond"></span>
                        </div>
                        <div class="content">
                          <h4 class="title">
                            Նրբաոճ տեսականի
                          </h4>
                          <div class="text">
                            Մեր զարդերը նորաձև և յուրօրինակ նվեր են Ձեր սիրելիների համար։
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
                          <span class="icon flaticon-support"></span>
                        </div>
                        <div class="content">
                          <h4 class="title">
                            Առցանց սպասարկում
                          </h4>
                          <div class="text">
                            Մենք սիրով աջակցում ենք մեր հաճախորդներին: Եկեք գնումներ կատարենք միասին:
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
export default {
  name: 'About',
  components: {
    Breadcrumbs: () => import("@/components/Breadcrumbs")
  },
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
