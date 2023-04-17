<template>
  <div>
    <div
      id="post-4925"
      class="page-content post-4925 page type-page status-publish hentry no-post-thumbnail single-page-details"
    >
      <section
        id="hero-1"
        data-vc-full-width="false"
        data-vc-full-width-init="false"
        data-vc-parallax-image="https://www.lummoshop.co.id/wp-content/themes/nextapp/images/banner-1.jpg"
        data-opacity="1"
        data-size="cover"
        data-width="100%"
        data-position="cover"
        data-repeat="cover"
        data-attachment="scroll"
        class="bg-tra hero-section vc_section-has-fill pt-120 vc_custom_1652093800520 bg-scroll"
      >
        <div class="container">
          <div
            class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex mul-cols"
          >
            <div class="wpb_column vc_col-sm-6 bg-tra">
              <div class="wpb_raw_code wpb_content_element wpb_raw_html">
                <div class="wpb_wrapper">
                  <h1 class="limegreen-color h1-sm none">
                    {{heroSection.title1}}
                    <span
                      class="typewrite"
                      data-type='[ "Fashion", " F&amp;B", "Kuliner", "Kecantikan", "Hijab", "Mainan", "Hobi" ]'
                      ><span class="wrap">H</span></span
                    ><br />
                    {{heroSection.title2}}
                  </h1>
                  <p class="white-color p-sm none">{{heroSection.title3}}</p>
                </div>
              </div>
              <div
                class="web-app-reg-button  wow perch-fadeInUp fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1200ms"
                style="visibility: visible; animation-duration: 1200ms; animation-delay: 300ms; animation-name: fadeInUp;"
              >
                <div class="stores-badge">
                  <a
                    target="_blank"
                    :href="heroSection.buttonLink1"
                    :title="heroSection.buttonText1"
                    class="btn btn-white default-hover store btn-type-light"
                    ><span>{{heroSection.buttonText1}}</span></a
                  ><a
                    target="_blank"
                    :href="heroSection.buttonLink2"
                    :title="heroSection.buttonText2"
                    class="btn btn-limegreen default-hover store btn-type-light"
                    ><span>{{heroSection.buttonText2}}</span></a
                  >
                  <div class="os-version"></div>
                </div>
              </div>
            </div>
            <div
              class="wpb_column vc_col-sm-6 vc_custom_1640532028070 bg-tra last-column"
            >
              <div class="mb-40  hero-img hero-1-img">
                <img
                  class="vc_single_image-img img-fluid"
                  :src="heroSection.img"
                  :alt="heroSection.imgTitle"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="vc_row-full-width vc_clearfix"></div>
      <section
        id="faqs-1"
        data-vc-full-width="false"
        data-vc-full-width-init="false"
        data-vc-parallax-image="https://www.lummoshop.co.id/wp-content/themes/nextapp/images/banner-1.jpg"
        data-opacity="1"
        data-size="cover"
        data-width="100%"
        data-position="cover"
        data-repeat="cover"
        data-attachment="inherit"
        class="bg-white wide-100 faqs-section vc_section-has-fill vc_custom_1642147767580"
      >
        <div class="container">
          <div
            class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex"
          >
            <div class="wpb_column vc_col-sm-12 bg-tra">
              <div class="section-title text-center">
                <h2 class="Default h2-sm none">{{ faqSection.title }}</h2>
                <p class="default-color p-sm none">{{ faqSection.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="vc_row-full-width vc_clearfix"></div>
      <section
        id="info-1"
        data-vc-full-width="false"
        data-vc-full-width-init="false"
        data-vc-parallax-image="https://www.lummoshop.co.id/wp-content/themes/nextapp/images/banner-1.jpg"
        data-opacity="1"
        data-size="cover"
        data-width="100%"
        data-position="cover"
        data-repeat="cover"
        data-attachment="inherit"
        class="bg-white home-feature-section info-section vc_section-has-fill vc_custom_1642362805579"
      >
        <div class="container">
          <div
            class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex mul-cols"
          >
            <div class="txt-block wpb_column vc_col-sm-6 bg-tra">
              <div class="mb-40 pl-45 pr-45  txt-block">
                <h3
                  class="Default h3-sm none  wow perch-fadeInUp fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1200ms"
                  style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
                >{{infoSection1.title}}</h3>
                <p
                  class="default-color none  wow perch-fadeInUp fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1200ms"
                  style="visibility: hidden; animation-duration: 1200ms; animation-delay: 400ms; animation-name: none;"
                >{{infoSection1.title1}}</p>
              </div>
            </div>
            <div class="wpb_column vc_col-sm-6 bg-tra last-column">
              <div
                class="mb-40 pr-45  img-block  wow perch-fadeInUp fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1200ms"
                style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
              >
                <img
                  class="vc_single_image-img img-fluid"
                  :src="infoSection1.img"
                  :alt="infoSection1.title"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="vc_row-full-width vc_clearfix"></div>
      <section
        id="info-2"
        data-vc-full-width="false"
        data-vc-full-width-init="false"
        data-vc-parallax-image="https://www.lummoshop.co.id/wp-content/themes/nextapp/images/banner-1.jpg"
        data-opacity="1"
        data-size="cover"
        data-width="100%"
        data-position="cover"
        data-repeat="cover"
        data-attachment="inherit"
        class="bg-white home-feature-section info-section vc_section-has-fill vc_custom_1642362813101"
      >
        <div class="container">
          <div
            class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex mul-cols"
          >
            <div class="wpb_column vc_col-sm-6 bg-tra">
              <div
                class="mb-40 pl-45  img-block  wow perch-fadeInUp fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1200ms"
                style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
              >
                <img
                  class="vc_single_image-img img-fluid"
                  :src="infoSection2.img"
                  :alt="infoSection2.title"
                />
              </div>
            </div>
            <div class="wpb_column vc_col-sm-6 bg-tra last-column">
              <div class="mb-40 pl-45 pr-45  txt-block">
                <h3
                  class="Default h3-sm none  wow perch-fadeInUp fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1200ms"
                  style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
                >
                {{infoSection2.title}}
                </h3>
                <p
                  class="default-color p-md none  wow perch-fadeInUp fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1200ms"
                  style="visibility: hidden; animation-duration: 1200ms; animation-delay: 400ms; animation-name: none;"
                >
                {{infoSection2.title1}}
                </p>
                <ul class="txt-list mb-35 single-column-list"></ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="vc_row-full-width vc_clearfix"></div>
      <section
        id="info-1"
        data-vc-full-width="false"
        data-vc-full-width-init="false"
        data-vc-parallax-image="https://www.lummoshop.co.id/wp-content/themes/nextapp/images/banner-1.jpg"
        data-opacity="1"
        data-size="cover"
        data-width="100%"
        data-position="cover"
        data-repeat="cover"
        data-attachment="inherit"
        class="bg-white home-feature-section info-section vc_section-has-fill vc_custom_1642362820218"
      >
        <div class="container">
          <div
            class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex mul-cols"
          >
            <div class="txt-block wpb_column vc_col-sm-6 bg-tra">
              <div class="mb-40 pl-45 pr-45  txt-block">
                <h3
                  class="Default h3-sm none  wow perch-fadeInUp fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1200ms"
                  style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
                >
                  {{infoSection3.title}}
                </h3>
                <p
                  class="default-color none  wow perch-fadeInUp fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1200ms"
                  style="visibility: hidden; animation-duration: 1200ms; animation-delay: 400ms; animation-name: none;"
                >
                  {{infoSection3.title1}}
                </p>
              </div>
            </div>
            <div class="wpb_column vc_col-sm-6 bg-tra last-column">
              <div
                class="mb-40 pr-45  img-block  wow perch-fadeInUp fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1200ms"
                style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
              >
                <img
                  class="vc_single_image-img img-fluid"
                  :src="infoSection3.img"
                  :alt="infoSection3.title"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="vc_row-full-width vc_clearfix"></div>
      <section
        id="info-2"
        data-vc-full-width="false"
        data-vc-full-width-init="false"
        data-vc-parallax-image="https://www.lummoshop.co.id/wp-content/themes/nextapp/images/banner-1.jpg"
        data-opacity="1"
        data-size="cover"
        data-width="100%"
        data-position="cover"
        data-repeat="cover"
        data-attachment="inherit"
        class="bg-white home-feature-section info-section vc_section-has-fill vc_custom_1642362827263"
      >
        <div class="container">
          <div
            class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex mul-cols"
          >
            <div class="wpb_column vc_col-sm-6 bg-tra">
              <div
                class="mb-40 pl-45  img-block  wow perch-fadeInUp fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1200ms"
                style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
              >
                <img
                  class="vc_single_image-img img-fluid"
                  :src="infoSection4.img"
                  :alt="infoSection4.title"
                />
              </div>
            </div>
            <div class="wpb_column vc_col-sm-6 bg-tra last-column">
              <div class="mb-40 pl-45 pr-45  txt-block">
                <h3
                  class="Default h3-sm none  wow perch-fadeInUp fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1200ms"
                  style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
                >
                  {{infoSection4.title}}
                </h3>
                <p
                  class="default-color p-md none  wow perch-fadeInUp fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1200ms"
                  style="visibility: hidden; animation-duration: 1200ms; animation-delay: 400ms; animation-name: none;"
                >
                  {{infoSection4.title1}}
                </p>
                <ul class="txt-list mb-35 single-column-list"></ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="vc_row-full-width vc_clearfix"></div>
      <section
        id="info-1"
        data-vc-full-width="false"
        data-vc-full-width-init="false"
        data-vc-parallax-image="https://www.lummoshop.co.id/wp-content/themes/nextapp/images/banner-1.jpg"
        data-opacity="1"
        data-size="cover"
        data-width="100%"
        data-position="cover"
        data-repeat="cover"
        data-attachment="inherit"
        class="bg-white wide-60 build-your-store-section info-section vc_section-has-fill vc_custom_1640532264430"
      >
        <div class="container">
          <div
            class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex"
          >
            <div class="wpb_column vc_col-sm-12 bg-tra">
              <div class="section-title text-center">
                <h2 class="Default h2-sm none">{{infoSection5.title}}</h2>
                <p class="p-md">{{infoSection5.title1}}</p>
              </div>
              <div
                class="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-top vc_row-flex mul-cols"
              >
                <div v-for="(content, index) in infoSection5.infoContent" v-bind:key="index" v-if="content" class="build-your-store-column wpb_column vc_column_container vc_col-sm-6">
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper ">
                      <div
                        class="wpb_single_image wpb_content_element vc_align_left"
                      >
                        <figure class="wpb_wrapper vc_figure">
                          <div
                            class="vc_single_image-wrapper vc_box_border_grey"
                          >
                            <img
                              class="vc_single_image-img img-fluid"
                              :src="content.img"
                              :alt="content.title"
                            />
                          </div>
                          <figcaption class="vc_figure-caption">
                            {{content.title}}
                          </figcaption>
                        </figure>
                      </div>
                      <div class="mb-40 pl-45 pr-45 text-center">
                        <h3
                          class="Default h3-sm none  wow perch-fadeInUp fadeInUp"
                          data-wow-delay="300ms"
                          data-wow-duration="1200ms"
                          style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
                        >
                          {{content.title1}}
                        </h3>
                        <p
                          class="Default text-left none  wow perch-fadeInUp fadeInUp"
                          data-wow-delay="400ms"
                          data-wow-duration="1200ms"
                          style="visibility: hidden; animation-duration: 1200ms; animation-delay: 400ms; animation-name: none;"
                        >
                          {{content.title2}}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="vc_row-full-width vc_clearfix"></div>
      <section
        data-vc-full-width="false"
        data-vc-full-width-init="false"
        data-vc-parallax-image="https://www.lummoshop.co.id/wp-content/themes/nextapp/images/banner-1.jpg"
        data-opacity="1"
        data-size="cover"
        data-width="100%"
        data-position="cover"
        data-repeat="cover"
        data-attachment="inherit"
        class="bg-darkblue wide-100 feature-section white-color vc_section-has-fill vc_custom_1641827958261"
      >
        <div class="container">
          <div
            class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex"
          >
            <div class="wpb_column vc_col-sm-12 bg-tra">
              <div
                class="section-title  wow perch-fadeInUp fadeInUp text-center"
                data-wow-delay="300ms"
                data-wow-duration="1200ms"
                style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
              >
                <h2 class="white-color h2-sm text-center none">{{businessTypes.title}}</h2>
                <p class="light_text-color p-sm text-center none">{{businessTypes.title1}}</p>
              </div>
            </div>
          </div>
          <div
            class="vc_row wpb_row vc_row-fluid feature-row bg-tra bg-inherit vc_row-o-content-middle vc_row-flex"
          >
            <div class="wpb_column vc_col-sm-12 bg-tra">
              <div
                class=" feature-carousel  wow perch-fadeInUp fadeInUp"
                style="visibility: hidden; animation-name: none;"
              >
                <div
                  class="slick-carousel slick-theme perch-vc-carousel perch-vc-carousel-slick perch-vc-carousel-column-4 default-nav slick-initialized slick-slider"
                  data-carousel_type="slick"
                  data-column_lg="4"
                  data-column_md="2"
                  data-column_sm="2"
                  data-column_xs="1"
                  data-autoplay="1"
                  data-center="0"
                  data-dots="0"
                  data-navs="1"
                  data-margin="50"
                  data-loop="1"
                >
                  <button
                    class="slick-prev slick-arrow"
                    aria-label="Previous"
                    type="button"
                    style=""
                  >
                    Previous
                  </button>
                  <div class="slick-list draggable">
                    <div
                      class="slick-track"
                      style="opacity: 1; width: 10540px; transform: translate3d(-2480px, 0px, 0px);"
                    >
                      <div
                        class="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex slick-slide slick-cloned"
                        aria-hidden="true"
                        style="width: 340px;"
                        tabindex="-1"
                        v-for="(item, index) in businessTypes.content"
                        v-bind:key="index"
                        v-if="item"
                        :data-slick-index="index"
                      >
                        <div
                          class="wpb_column vc_column_container vc_col-sm-12"
                        >
                          <div class="vc_column-inner">
                            <div class="wpb_wrapper ">
                              <div
                                class="wpb_single_image wpb_content_element vc_align_left"
                              >
                                <figure class="wpb_wrapper vc_figure">
                                  <div
                                    class="vc_single_image-wrapper   vc_box_border_grey"
                                  >
                                    <img
                                      class="vc_single_image-img img-fluid"
                                      :src="item.img"
                                      :alt="item.title"
                                    />
                                  </div>
                                </figure>
                              </div>
                              <div
                                class="fbox  wow perch-fadeInUp fadeInUp"
                                data-wow-delay="300ms"
                                data-wow-duration="1200ms"
                                style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
                              >
                                <div class="grey-color-icon b-img">
                                  <img
                                    :src="item.logoImg"
                                    :alt="item.title"
                                    class="img-fluid"
                                    width="42"
                                  />
                                </div>
                                <!-- Icon  -->
                                <h5 class="h5-sm">{{item.title}}</h5>
                                <p class="light_text-color none">{{item.title1}}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    class="slick-next slick-arrow"
                    aria-label="Next"
                    type="button"
                    style=""
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="vc_row-full-width vc_clearfix"></div>
      <section
        data-vc-full-width="false"
        data-vc-full-width-init="false"
        data-vc-parallax-image="https://www.lummoshop.co.id/wp-content/themes/nextapp/images/banner-1.jpg"
        data-opacity="1"
        data-size="cover"
        data-width="100%"
        data-position="cover"
        data-repeat="cover"
        data-attachment="inherit"
        class="bg-white wide-100 testimonial-section vc_section-has-fill vc_custom_1642014377657"
      >
        <div class="container">
          <div
            class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex"
          >
            <div class="wpb_column vc_col-sm-12 bg-tra">
              <div
                class="section-title  wow perch-fadeInUp fadeInUp text-center"
                data-wow-delay="300ms"
                data-wow-duration="1200ms"
                style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
              >
                <h3 class="h3-lg">{{testimonials.title}}</h3>
              </div>
              <div
                class=" testimonial-slider  wow perch-fadeInUp fadeInUp"
                style="visibility: hidden; animation-name: none;"
              >
                <div
                  class="custom-carousel custom-theme perch-vc-carousel perch-vc-carousel-custom perch-vc-carousel-column-1 default-nav slick-initialized slick-slider"
                  data-carousel_type="custom"
                  data-column_lg="1"
                  data-column_md="1"
                  data-column_sm="1"
                  data-column_xs="1"
                  data-autoplay="1"
                  data-center="0"
                  data-dots="0"
                  data-navs="0"
                  data-margin="10"
                  data-loop="0"
                >
                  <div class="slick-list draggable">
                    <div class="slick-track" style="opacity: 1; width: 7440px;">
                      <div
                        class="perch-slide-item slick-slide slick-current slick-active"
                        aria-hidden="false"
                        style="width: 1240px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;"
                        v-for="(item, index) in testimonials.content"
                        v-bind:key="index"
                        v-if="item"
                        :data-slick-index="index"
                        :tabindex="index"
                      >
                        <div
                          class="review  wow perch-fadeInUp fadeInUp review-4"
                          data-wow-delay="300ms"
                          data-wow-duration="1200ms"
                          style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
                        >
                          <div class="review-txt">
                            <h5 class="h5-md">{{item.title}}</h5>
                            <p>{{item.title1}}</p>
                            <div class="review-author">
                              <p>{{item.authorName}}</p>
                              <span>{{item.authorTitle}}</span>
                            </div>
                            <div class="review-nav">
                              <div
                                class="review-nav-btns review-nav-prev slick-arrow"
                                style=""
                              >
                                <svg
                                  class="svg-inline--fa fa-arrow-left fa-w-14"
                                  aria-hidden="true"
                                  data-prefix="fa"
                                  data-icon="arrow-left"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  data-fa-i2svg=""
                                >
                                  <path
                                    fill="currentColor"
                                    d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
                                  ></path>
                                </svg>
                              </div>
                              <div class="review-counter">{{index+1}} / {{testimonials.content.length}}</div>
                              <div
                                class="review-nav-btns review-nav-next slick-arrow"
                                style=""
                              >
                                <svg
                                  class="svg-inline--fa fa-arrow-right fa-w-14"
                                  aria-hidden="true"
                                  data-prefix="fa"
                                  data-icon="arrow-right"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  data-fa-i2svg=""
                                >
                                  <path
                                    fill="currentColor"
                                    d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div class="review-author clearfix">
                            <div class="testimonial-avatar">
                              <img
                                src="static/lummoshop/petite-bakery-testimony.png"
                                alt="Fitur lengkap dan GRATIS"
                              />
                            </div>
                          </div>
                          <!-- Testimonial Author -->
                        </div>
                        <!-- END review style 4-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="vc_row-full-width vc_clearfix"></div>
      <section
        data-vc-full-width="false"
        data-vc-full-width-init="false"
        data-vc-parallax-image="https://www.lummoshop.co.id/wp-content/themes/nextapp/images/banner-1.jpg"
        data-opacity="1"
        data-size="cover"
        data-width="100%"
        data-position="cover"
        data-repeat="cover"
        data-attachment="inherit"
        class="bg-white partners-section vc_section-has-fill pt-120 pb-50 vc_custom_1642022648573"
      >
        <div class="container">
          <div
            class="vc_row wpb_row vc_row-fluid bg-tra bg-cover vc_row-o-content-middle vc_row-flex"
          >
            <div
              v-for="(partner, index) in partners"
              v-bind:key="index"
              v-if="partner"
              class="wpb_column vc_col-sm-12 bg-tra"
            >
              <div
                class="vc_row wpb_row vc_inner vc_row-fluid vc_row-o-content-middle vc_row-flex mul-cols"
              >
                <div class="wpb_column vc_column_container vc_col-sm-6">
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper ">
                      <div class="mb-40 pl-45 pr-45  txt-block">
                        <h3
                          class="Default h3-sm none  wow perch-fadeInUp fadeInUp"
                          data-wow-delay="300ms"
                          data-wow-duration="1200ms"
                          style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
                        >{{partner.title}}</h3>
                        <p
                          class="default-color none  wow perch-fadeInUp fadeInUp"
                          data-wow-delay="400ms"
                          data-wow-duration="1200ms"
                          style="visibility: hidden; animation-duration: 1200ms; animation-delay: 400ms; animation-name: none;"
                        >{{partner.title1}}</p>

                        <ul class="txt-list mb-35 single-column-list"></ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="wpb_column vc_column_container vc_col-sm-6 last-column"
                >
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper ">
                      <div
                        class="img-block  wow perch-fadeInUp fadeInUp"
                        data-wow-delay="300ms"
                        data-wow-duration="1200ms"
                        style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
                      >
                        <img
                          class="vc_single_image-img img-fluid"
                          :src="partner.img"
                          :alt="partner.title"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="vc_row-full-width vc_clearfix"></div>
      <section
        id="faqs-1"
        data-vc-full-width="false"
        data-vc-full-width-init="false"
        data-vc-parallax-image="https://www.lummoshop.co.id/wp-content/themes/nextapp/images/banner-1.jpg"
        data-opacity="1"
        data-size="cover"
        data-width="100%"
        data-position="cover"
        data-repeat="cover"
        data-attachment="inherit"
        class="bg-white wide-100 faqs-section"
      >
        <div class="vc_section_id" id="faqs"></div>
        <div class="container">
          <div
            class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex"
          >
            <div class="wpb_column vc_col-sm-12 bg-tra">
              <div class="section-title text-center">
                <h3 class="Default h3-lg none">
                  Ada Pertanyaan? Temukan Jawabannya di Sini!
                </h3>
              </div>
            </div>
          </div>
          <div
            class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-top vc_row-flex mul-cols"
          >
            <div class="wpb_column vc_col-sm-6 bg-tra">
              <div
                id="accordion-left"
                class="home-faq  wow perch-fadeIn fadeIn"
                data-wow-delay="300ms"
                data-wow-duration="1200ms"
                role="tablist"
                style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
              >
                <div
                  class="card-wrapper"
                  data-wow-delay="300ms"
                  data-wow-duration="1200ms"
                >
                  <div
                    v-for="(faq) in faqsLeft"
                    v-bind:key="faq.id"
                    v-if="faq"
                    class="card"
                  >
                    <div
                      class="card-header"
                      role="tab"
                      :id="'heading-' + faq.id"
                    >
                      <h5 class="h5-md">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          :href="'#collapse-'+faq.id"
                          role="button"
                          aria-expanded="true"
                          :aria-controls="'collapse-'+faq.id"
                          >{{faq.question}}</a
                        >
                      </h5>
                    </div>
                    <div
                      :id="'collapse-'+faq.id"
                      class="collapse "
                      role="tabpanel"
                      :aria-labelledby="'heading-' + faq.id"
                      data-parent="#accordion-left"
                    >
                      <div class="card-body" v-html="faq.answer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wpb_column vc_col-sm-6 bg-tra last-column">
              <div
                id="accordion-right"
                class="home-faq  wow perch-fadeInUp fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1200ms"
                role="tablist"
                style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
              >
                <div
                  class="card-wrapper"
                  data-wow-delay="300ms"
                  data-wow-duration="1200ms"
                >
                  <div
                    v-for="(faq) in faqsRight"
                    v-bind:key="faq.id"
                    v-if="faq"
                    class="card"
                  >
                    <div
                      class="card-header"
                      role="tab"
                      :id="'heading-' + faq.id"
                    >
                      <h5 class="h5-md">
                        <a
                          class="collapsed"
                          data-toggle="collapse"
                          :href="'#collapse-'+faq.id"
                          role="button"
                          aria-expanded="true"
                          :aria-controls="'collapse-'+faq.id"
                          >{{faq.question}}</a
                        >
                      </h5>
                    </div>
                    <div
                      :id="'collapse-'+index"
                      class="collapse "
                      role="tabpanel"
                      :aria-labelledby="'heading-' + faq.id"
                      data-parent="#accordion-right"
                    >
                      <div class="card-body" v-html="faq.answer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-top vc_row-flex"
          >
            <div class="wpb_column vc_col-sm-12 bg-tra">
              <div class="vc_btn3-container  btn-link vc_btn3-center">
                <a
                  class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-square vc_btn3-style-modern vc_btn3-color-grey"
                  href="https://www.lummoshop.co.id/pertanyaan-umum/"
                  title="FAQ"
                  >Temukan jawaban lainnya di sini</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="vc_row-full-width vc_clearfix"></div>
      <section
        data-vc-full-width="false"
        data-vc-full-width-init="false"
        data-vc-parallax-image="https://www.lummoshop.co.id/wp-content/themes/nextapp/images/banner-1.jpg"
        data-opacity="1"
        data-size="cover"
        data-width="100%"
        data-position="cover"
        data-repeat="cover"
        data-attachment="inherit"
        class="bg-white wide-100 footer-cta vc_section-has-fill vc_custom_1640790483792"
      >
        <div class="container">
          <div
            class="vc_row wpb_row vc_row-fluid bg-tra bg-inherit vc_row-o-content-middle vc_row-flex mul-cols"
          >
            <div class="wpb_column vc_col-sm-1 bg-tra"></div>
            <div class="wpb_column vc_col-sm-10 bg-tra">
              <div class="text-center">
                <h2 class="limegreen-color h2-sm none">
                  Mulai Jualan Online dan Buka Peluang Masa Depan Bisnismu
                  dengan LummoSHOP
                </h2>
                <p class="white-color p-md none">
                  Miliki toko online dan jual produkmu dengan lebih mudah.
                </p>
              </div>
              <div
                class="content-center web-app-reg-button  wow perch-fadeInUp fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1200ms"
                style="visibility: hidden; animation-duration: 1200ms; animation-delay: 300ms; animation-name: none;"
              >
                <div class="stores-badge">
                  <a
                    target="_blank"
                    href="https://calendly.com/lummoshop_specialist/lummoshop-product-demo/"
                    title="Buat Jadwal Demo"
                    class="btn btn-white default-hover store btn-type-light"
                    ><span>Buat Jadwal Demo</span></a
                  ><a
                    target="_blank"
                    href="https://web.lummoshop.com/login/?lp=homepage-footer"
                    title="Mulai Sekarang"
                    class="btn btn-limegreen default-hover store btn-type-light"
                    ><span>Mulai Sekarang</span></a
                  >
                  <div class="os-version"></div>
                </div>
              </div>
            </div>
            <div class="wpb_column vc_col-sm-1 bg-tra last-column"></div>
          </div>
        </div>
      </section>
      <div class="vc_row-full-width vc_clearfix"></div>
      <span class="cp-load-after-post"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      heroSection: {
        img: 'static/lummoshop/image-header-1.png',
        imgTitle: 'Toko Online LummoSHOP',
        title1: 'Tempat Bisnis',
        title2: 'Mulai Toko Online-mu, Pegang Kendali untuk Berkembang',
        title3: 'Dengan website toko online yang lengkap &amp; praktis, tidak ada lagi penghalang untuk optimalkan peluang pertumbuhan bisnismu.',
        buttonText1: 'Buat Jadwal Demo',
        buttonLink1: 'https://calendly.com/lummoshop_specialist/lummoshop-product-demo/',
        buttonText2: 'Mulai Sekarang',
        buttonLink2: 'https://web.lummoshop.com/login/?lp=homepage-header'
      },
      faqSection: {
        title: 'Banyak Fitur Toko Online Pintar untuk Kendalikan Bisnis Lebih Mudah',
        content: 'Kamu bisa gunakan fitur-fitur toko online yang saling terhubung untuk membuat proses bisnis-mu lebih simpel, efisien, dan akurat.'
      },
      infoSection1: {
        title: 'Website Toko Online yang Mudah Dikelola',
        title1: 'Pengelolaan bisnis semakin praktis dengan sistem manajemen order, pembayaran, hingga pengiriman barang yang lengkap.',
        img: 'static/lummoshop/image-1.png'
      },
      infoSection2: {
        title: 'Produk-mu Jadi Pusat Perhatian',
        title1: 'Tanpa saingan & perang harga, pengunjung lebih terpikat untuk membeli.',
        img: 'static/lummoshop/image-2.png'
      },
      infoSection3: {
        title: 'Upload Ribuan Produkmu ke Katalog dalam Hitungan Menit',
        title1: 'Tanpa ribet, tampilkan seluruh produk kamu dengan berbagai variannya!',
        img: 'static/lummoshop/image-3.png'
      },
      infoSection4: {
        title: 'Fitur Pembayaran & Pengiriman Lengkap',
        title1: 'Selengkap e-commerce. Memudahkan pembeli-mu memilih jenis pembayaran & pengiriman sesuai kebutuhan.',
        img: 'static/lummoshop/image-4.png'
      },
      infoSection5: {
        title: 'Langkah Kecil untuk Membuka Peluang Besar',
        title1: 'Ikuti 4 langkah di bawah ini untuk mempercepat bisnis online-mu!',
        infoContent: [
          {
            title: 'LANGKAH 1',
            title1: 'Mulai Bikin Toko Online-mu',
            title2: 'Masukkan nama brand-mu dan pastikan sesuai dengan nama yang tertera pada link website untuk mempermudah branding toko online-mu.',
            img: 'static/lummoshop/image-step-1.png'
          },
          {
            title: 'LANGKAH 2',
            title1: 'Verifikasi Akun',
            title2: 'Untuk meningkatkan kepercayaan pembeli belanja di tokomu, lakukan verifikasi akun toko online-mu sedini mungkin.',
            img: 'static/lummoshop/image-step-2.png'
          },
          {
            title: 'LANGKAH 3',
            title1: 'Buat Katalog',
            title2: 'Tampilkan foto-foto terbaik seluruh produk jualanmu atau jasamu, berikan deskripsi yang lengkap, dan lengkapi pilihan metode pembayaran serta pengiriman.',
            img: 'static/lummoshop/image-step-3.png'
          },
          {
            title: 'LANGKAH 4',
            title1: 'Maksimalkan Penjualanmu!',
            title2: 'Gunakan fitur-fitur pemasaran dan analisa data pelanggan kami, agar promosi kamu bisa sampai di calon-calon pembeli yang tepat!',
            img: 'static/lummoshop/image-step-4.png'
          }
        ]
      },
      businessTypes: {
        title: 'Cocok untuk Berbagai Jenis & Skala Bisnis',
        title1: 'Semua layanan LummoSHOP mendukungmu yang baru memulai, sudah merintis ataupun sedang ingin membesarkan bisnis.',
        content: [
          {
            title: 'Pejuang Store',
            title1: 'Pakaian',
            img: 'static/lummoshop/pejuang-store.png',
            logoImg: 'static/lummoshop/logo-store-2.jpg'
          },
          {
            title: 'Wannabe19',
            title1: 'Kosmetik dan Kecantikan',
            img: 'static/lummoshop/wannabe-19-mockup-810p-1650p.png',
            logoImg: 'static/lummoshop/wannabe-19-logo-1000p-1000p.png'
          },
          {
            title: 'Masker Cantik Bali',
            title1: 'Kosmetik dan Kecantikan',
            img: 'static/lummoshop/masker-cantik-bali-mockup-810p-1650p.png',
            logoImg: 'static/lummoshop/masker-cantik-bali-logo-1000p-1000p.png'
          },
          {
            title: 'Wesafeu',
            title1: 'Kosmetik dan Kecantikan',
            img: 'static/lummoshop/wesafeu-mockup-810p-1650p.png',
            logoImg: 'static/lummoshop/wesafeu-logo-1000p-1000p.png'
          },
          {
            title: 'Flavious',
            title1: 'Makanan dan Minuman',
            img: 'static/lummoshop/flavious-1.png',
            logoImg: 'static/lummoshop/logo-store-4.jpg'
          },
          {
            title: 'Pejuang Store',
            title1: 'Pakaian',
            img: 'static/lummoshop/pejuang-store.png',
            logoImg: 'static/lummoshop/logo-store-2.jpg'
          },
          {
            title: 'Pejuang Store',
            title1: 'Pakaian',
            img: 'static/lummoshop/pejuang-store.png',
            logoImg: 'static/lummoshop/logo-store-2.jpg'
          },
          {
            title: 'Wannabe19',
            title1: 'Kosmetik dan Kecantikan',
            img: 'static/lummoshop/wannabe-19-mockup-810p-1650p.png',
            logoImg: 'static/lummoshop/wannabe-19-logo-1000p-1000p.png'
          },
          {
            title: 'Masker Cantik Bali',
            title1: 'Kosmetik dan Kecantikan',
            img: 'static/lummoshop/masker-cantik-bali-mockup-810p-1650p.png',
            logoImg: 'static/lummoshop/masker-cantik-bali-logo-1000p-1000p.png'
          },
          {
            title: 'Wesafeu',
            title1: 'Kosmetik dan Kecantikan',
            img: 'static/lummoshop/wesafeu-mockup-810p-1650p.png',
            logoImg: 'static/lummoshop/wesafeu-logo-1000p-1000p.png'
          },
          {
            title: 'Flavious',
            title1: 'Makanan dan Minuman',
            img: 'static/lummoshop/flavious-1.png',
            logoImg: 'static/lummoshop/logo-store-4.jpg'
          },
          {
            title: 'Pejuang Store',
            title1: 'Pakaian',
            img: 'static/lummoshop/pejuang-store.png',
            logoImg: 'static/lummoshop/logo-store-2.jpg'
          },
          {
            title: 'Pejuang Store',
            title1: 'Pakaian',
            img: 'static/lummoshop/pejuang-store.png',
            logoImg: 'static/lummoshop/logo-store-2.jpg'
          },
          {
            title: 'Wannabe19',
            title1: 'Kosmetik dan Kecantikan',
            img: 'static/lummoshop/wannabe-19-mockup-810p-1650p.png',
            logoImg: 'static/lummoshop/wannabe-19-logo-1000p-1000p.png'
          },
          {
            title: 'Masker Cantik Bali',
            title1: 'Kosmetik dan Kecantikan',
            img: 'static/lummoshop/masker-cantik-bali-mockup-810p-1650p.png',
            logoImg: 'static/lummoshop/masker-cantik-bali-logo-1000p-1000p.png'
          },
          {
            title: 'Wesafeu',
            title1: 'Kosmetik dan Kecantikan',
            img: 'static/lummoshop/wesafeu-mockup-810p-1650p.png',
            logoImg: 'static/lummoshop/wesafeu-logo-1000p-1000p.png'
          },
          {
            title: 'Flavious',
            title1: 'Makanan dan Minuman',
            img: 'static/lummoshop/flavious-1.png',
            logoImg: 'static/lummoshop/logo-store-4.jpg'
          },
          {
            title: 'Pejuang Store',
            title1: 'Pakaian',
            img: 'static/lummoshop/pejuang-store.png',
            logoImg: 'static/lummoshop/logo-store-2.jpg'
          },
          {
            title: 'Pejuang Store',
            title1: 'Pakaian',
            img: 'static/lummoshop/pejuang-store.png',
            logoImg: 'static/lummoshop/logo-store-2.jpg'
          },
          {
            title: 'Wannabe19',
            title1: 'Kosmetik dan Kecantikan',
            img: 'static/lummoshop/wannabe-19-mockup-810p-1650p.png',
            logoImg: 'static/lummoshop/wannabe-19-logo-1000p-1000p.png'
          },
          {
            title: 'Masker Cantik Bali',
            title1: 'Kosmetik dan Kecantikan',
            img: 'static/lummoshop/masker-cantik-bali-mockup-810p-1650p.png',
            logoImg: 'static/lummoshop/masker-cantik-bali-logo-1000p-1000p.png'
          },
          {
            title: 'Wesafeu',
            title1: 'Kosmetik dan Kecantikan',
            img: 'static/lummoshop/wesafeu-mockup-810p-1650p.png',
            logoImg: 'static/lummoshop/wesafeu-logo-1000p-1000p.png'
          },
          {
            title: 'Flavious',
            title1: 'Makanan dan Minuman',
            img: 'static/lummoshop/flavious-1.png',
            logoImg: 'static/lummoshop/logo-store-4.jpg'
          },
          {
            title: 'Pejuang Store',
            title1: 'Pakaian',
            img: 'static/lummoshop/pejuang-store.png',
            logoImg: 'static/lummoshop/logo-store-2.jpg'
          }
        ]
      },
      testimonials: {
        title: 'Kata Mereka yang Jualan Online di LummoSHOP?',
        content: [
          {
            title: 'Fitur lengkap dan GRATIS',
            title1: 'LummoSHOP mempermudah saya dalam membuat website jualan online, tanpa harus memikirkan dana tambahan. Fiturnya yang lengkap bisa saya pakai dengan GRATIS',
            authorName: 'Ketty',
            authorTitle: 'Petite Bakery',
            img: 'static/lummoshop/petite-bakery-testimony.png'
          },
          {
            title: 'Aplikasi yang lengkap, terintegrasi, dan simpel!',
            title1: 'Semua semakin terintegrasi sehingga berjualan menjadi lebih efisien. Tinggal klik, kurir siap dipesan dan barang tinggal dikirim. Saat pesanan sudah sampai otomatis notifikasi pesanan akan masuk di aplikasi dan juga WhatsApp.',
            authorName: 'Ginan',
            authorTitle: 'Bababerry',
            img: 'static/lummoshop/bababerry_testimonial.png'
          },
          {
            title: 'Fitur lengkap dan GRATIS',
            title1: 'LummoSHOP mempermudah saya dalam membuat website jualan online, tanpa harus memikirkan dana tambahan. Fiturnya yang lengkap bisa saya pakai dengan GRATIS',
            authorName: 'Ketty',
            authorTitle: 'Petite Bakery',
            img: 'static/lummoshop/petite-bakery-testimony.png'
          },
          {
            title: 'Aplikasi yang lengkap, terintegrasi, dan simpel!',
            title1: 'Semua semakin terintegrasi sehingga berjualan menjadi lebih efisien. Tinggal klik, kurir siap dipesan dan barang tinggal dikirim. Saat pesanan sudah sampai otomatis notifikasi pesanan akan masuk di aplikasi dan juga WhatsApp.',
            authorName: 'Ginan',
            authorTitle: 'Bababerry',
            img: 'static/lummoshop/bababerry_testimonial.png'
          },
          {
            title: 'Fitur lengkap dan GRATIS',
            title1: 'LummoSHOP mempermudah saya dalam membuat website jualan online, tanpa harus memikirkan dana tambahan. Fiturnya yang lengkap bisa saya pakai dengan GRATIS',
            authorName: 'Ketty',
            authorTitle: 'Petite Bakery',
            img: 'static/lummoshop/petite-bakery-testimony.png'
          },
          {
            title: 'Aplikasi yang lengkap, terintegrasi, dan simpel!',
            title1: 'Semua semakin terintegrasi sehingga berjualan menjadi lebih efisien. Tinggal klik, kurir siap dipesan dan barang tinggal dikirim. Saat pesanan sudah sampai otomatis notifikasi pesanan akan masuk di aplikasi dan juga WhatsApp.',
            authorName: 'Ginan',
            authorTitle: 'Bababerry',
            img: 'static/lummoshop/bababerry_testimonial.png'
          }
        ]
      },
      partners: [
        {
          title: 'Banyak Metode Pembayaran',
          title1: 'Pembeli bisa memilih metode pembayaran yang paling nyaman untuk mereka. Pilihan mulai dari virtual account/bank transfer, QRIS, e-wallet hingga cash on delivery (COD).',
          img: 'static/lummoshop/payment-partners.png'
        },
        {
          title: 'Berbagai Pilihan Pengiriman',
          title1: 'Pembelimu juga akan dimudahkan dengan banyaknya jenis pengiriman yang bisa dipilih sesuai yang mereka butuhkan, mulai dari pengiriman reguler, instan dan juga same-day.',
          img: 'static/lummoshop/shipping-partners-20220211.png'
        }
      ],
      faqsLeft: [
        {
          id: 1,
          question: 'Apa kelebihan utama membuat website toko online pakai LummoSHOP?',
          answer: '<p>Pertama, jadi mudah kelola produk di katalog online. Bisa atur produk, foto, deskripsi, dan info ketersediaan produk langsung dari satu dashboard.</p><p>Kedua, lebih mudah jangkau pelanggan secara online semudah share status dan link kepada calon pembeli potensial lewat Whatsapp atau akun media sosial. Bisa share link toko online-mu atau link produk spesifik yang ada di katalogmu.</p><p>Ketiga, tersedia berbagai pilihan pembayaran untuk pelanggan dengan fitur link pembayaran LummoSHOP yang 100% aman terverifikasi Bank Indonesia dan bebas biaya transfer antar bank. Bisa transfer dari bank manapun atau e-wallet.</p><p>Keempat, bisa atur pesanan dan pengiriman produk dari satu aplikasi. Pesanan dan pengiriman bisa dipantau dan dilakukan langsung dalam satu dashboard.</p>'
        },
        {
          id: 2,
          question: 'Apa kelebihan utama membuat website toko online pakai LummoSHOP?',
          answer: '<p>Pertama, jadi mudah kelola produk di katalog online. Bisa atur produk, foto, deskripsi, dan info ketersediaan produk langsung dari satu dashboard.</p><p>Kedua, lebih mudah jangkau pelanggan secara online semudah share status dan link kepada calon pembeli potensial lewat Whatsapp atau akun media sosial. Bisa share link toko online-mu atau link produk spesifik yang ada di katalogmu.</p><p>Ketiga, tersedia berbagai pilihan pembayaran untuk pelanggan dengan fitur link pembayaran LummoSHOP yang 100% aman terverifikasi Bank Indonesia dan bebas biaya transfer antar bank. Bisa transfer dari bank manapun atau e-wallet.</p><p>Keempat, bisa atur pesanan dan pengiriman produk dari satu aplikasi. Pesanan dan pengiriman bisa dipantau dan dilakukan langsung dalam satu dashboard.</p>'
        },
        {
          id: 3,
          question: 'Apa kelebihan utama membuat website toko online pakai LummoSHOP?',
          answer: '<p>Pertama, jadi mudah kelola produk di katalog online. Bisa atur produk, foto, deskripsi, dan info ketersediaan produk langsung dari satu dashboard.</p><p>Kedua, lebih mudah jangkau pelanggan secara online semudah share status dan link kepada calon pembeli potensial lewat Whatsapp atau akun media sosial. Bisa share link toko online-mu atau link produk spesifik yang ada di katalogmu.</p><p>Ketiga, tersedia berbagai pilihan pembayaran untuk pelanggan dengan fitur link pembayaran LummoSHOP yang 100% aman terverifikasi Bank Indonesia dan bebas biaya transfer antar bank. Bisa transfer dari bank manapun atau e-wallet.</p><p>Keempat, bisa atur pesanan dan pengiriman produk dari satu aplikasi. Pesanan dan pengiriman bisa dipantau dan dilakukan langsung dalam satu dashboard.</p>'
        },
        {
          id: 4,
          question: 'Apa kelebihan utama membuat website toko online pakai LummoSHOP?',
          answer: '<p>Pertama, jadi mudah kelola produk di katalog online. Bisa atur produk, foto, deskripsi, dan info ketersediaan produk langsung dari satu dashboard.</p><p>Kedua, lebih mudah jangkau pelanggan secara online semudah share status dan link kepada calon pembeli potensial lewat Whatsapp atau akun media sosial. Bisa share link toko online-mu atau link produk spesifik yang ada di katalogmu.</p><p>Ketiga, tersedia berbagai pilihan pembayaran untuk pelanggan dengan fitur link pembayaran LummoSHOP yang 100% aman terverifikasi Bank Indonesia dan bebas biaya transfer antar bank. Bisa transfer dari bank manapun atau e-wallet.</p><p>Keempat, bisa atur pesanan dan pengiriman produk dari satu aplikasi. Pesanan dan pengiriman bisa dipantau dan dilakukan langsung dalam satu dashboard.</p>'
        }
      ],
      faqsRight: [
        {
          id: 5,
          question: 'Apakah akan ada fitur-fitur baru?',
          answer: '<p>Pertama, jadi mudah kelola produk di katalog online. Bisa atur produk, foto, deskripsi, dan info ketersediaan produk langsung dari satu dashboard.</p><p>Kedua, lebih mudah jangkau pelanggan secara online semudah share status dan link kepada calon pembeli potensial lewat Whatsapp atau akun media sosial. Bisa share link toko online-mu atau link produk spesifik yang ada di katalogmu.</p><p>Ketiga, tersedia berbagai pilihan pembayaran untuk pelanggan dengan fitur link pembayaran LummoSHOP yang 100% aman terverifikasi Bank Indonesia dan bebas biaya transfer antar bank. Bisa transfer dari bank manapun atau e-wallet.</p><p>Keempat, bisa atur pesanan dan pengiriman produk dari satu aplikasi. Pesanan dan pengiriman bisa dipantau dan dilakukan langsung dalam satu dashboard.</p>'
        },
        {
          id: 6,
          question: 'Apakah akan ada fitur-fitur baru?',
          answer: '<p>Pertama, jadi mudah kelola produk di katalog online. Bisa atur produk, foto, deskripsi, dan info ketersediaan produk langsung dari satu dashboard.</p><p>Kedua, lebih mudah jangkau pelanggan secara online semudah share status dan link kepada calon pembeli potensial lewat Whatsapp atau akun media sosial. Bisa share link toko online-mu atau link produk spesifik yang ada di katalogmu.</p><p>Ketiga, tersedia berbagai pilihan pembayaran untuk pelanggan dengan fitur link pembayaran LummoSHOP yang 100% aman terverifikasi Bank Indonesia dan bebas biaya transfer antar bank. Bisa transfer dari bank manapun atau e-wallet.</p><p>Keempat, bisa atur pesanan dan pengiriman produk dari satu aplikasi. Pesanan dan pengiriman bisa dipantau dan dilakukan langsung dalam satu dashboard.</p>'
        },
        {
          id: 7,
          question: 'Apakah akan ada fitur-fitur baru?',
          answer: '<p>Pertama, jadi mudah kelola produk di katalog online. Bisa atur produk, foto, deskripsi, dan info ketersediaan produk langsung dari satu dashboard.</p><p>Kedua, lebih mudah jangkau pelanggan secara online semudah share status dan link kepada calon pembeli potensial lewat Whatsapp atau akun media sosial. Bisa share link toko online-mu atau link produk spesifik yang ada di katalogmu.</p><p>Ketiga, tersedia berbagai pilihan pembayaran untuk pelanggan dengan fitur link pembayaran LummoSHOP yang 100% aman terverifikasi Bank Indonesia dan bebas biaya transfer antar bank. Bisa transfer dari bank manapun atau e-wallet.</p><p>Keempat, bisa atur pesanan dan pengiriman produk dari satu aplikasi. Pesanan dan pengiriman bisa dipantau dan dilakukan langsung dalam satu dashboard.</p>'
        },
        {
          id: 8,
          question: 'Apakah akan ada fitur-fitur baru?',
          answer: '<p>Pertama, jadi mudah kelola produk di katalog online. Bisa atur produk, foto, deskripsi, dan info ketersediaan produk langsung dari satu dashboard.</p><p>Kedua, lebih mudah jangkau pelanggan secara online semudah share status dan link kepada calon pembeli potensial lewat Whatsapp atau akun media sosial. Bisa share link toko online-mu atau link produk spesifik yang ada di katalogmu.</p><p>Ketiga, tersedia berbagai pilihan pembayaran untuk pelanggan dengan fitur link pembayaran LummoSHOP yang 100% aman terverifikasi Bank Indonesia dan bebas biaya transfer antar bank. Bisa transfer dari bank manapun atau e-wallet.</p><p>Keempat, bisa atur pesanan dan pengiriman produk dari satu aplikasi. Pesanan dan pengiriman bisa dipantau dan dilakukan langsung dalam satu dashboard.</p>'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
