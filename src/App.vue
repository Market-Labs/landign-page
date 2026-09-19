<script setup lang="ts">
import TheHeader from './shared/presentation/components/TheHeader.vue'
import HomeSection from './landing/home/presentation/components/HomeSection.vue'
import ProductInformationSection from './landing/product-information/presentation/components/ProductInformationSection.vue'
import VideoSection from './landing/videos/presentation/components/VideoSection.vue'
import PricingSection from './landing/pricing/presentation/components/PricingSection.vue'
import ContactSection from './landing/contact/presentation/components/ContactSection.vue'
import SiteFooter from './shared/presentation/components/SiteFooter.vue'
</script>

<template>
  <div class="landing-page">
    <TheHeader />
    <main>
      <HomeSection />
      <ProductInformationSection />
      <VideoSection />
      <PricingSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>
