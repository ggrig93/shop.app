<template>
  <div>
    <footer class="footer style7">
      <div class="container">
        <div class="container-wapper">
          <div class="footer-end">
            <div class="row">
              <div class="col-sm-12 col-xs-12">
                <div class="ysera-socials">
                  <ul class="socials">
                    <li>
                      <a href="#" class="social-item" target="_blank">
                        <i class="icon fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="social-item" target="_blank">
                        <i class="icon fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="coppyright">
                  Copyright © {{new Date().getFullYear()}}
                  <router-link to="/">Ysera</router-link>
                  . All rights reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <FooterMobile/>
  </div>
</template>

<script>
import FooterMobile from "@/components/layout/footer/FooterMobile";
export default {
  name: "TheFooter",
  components: {FooterMobile}
}
</script>