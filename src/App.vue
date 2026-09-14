<script setup lang="ts">
import TheHeader from './shared/presentation/components/TheHeader.vue'
import TheHero from './landing/presentation/components/TheHero.vue'
import ServicesSection from './landing/presentation/components/ServicesSection.vue'
import BenefitsSection from './landing/presentation/components/BenefitsSection.vue'
import TestimonialsSection from './landing/presentation/components/TestimonialsSection.vue'
import PricingSection from './landing/presentation/components/PricingSection.vue'
import TeamSection from './landing/presentation/components/TeamSection.vue'
import ContactSection from './landing/presentation/components/ContactSection.vue'
import SiteFooter from './shared/presentation/components/SiteFooter.vue'
</script>

<template>
  <div class="landing-page">
    <TheHeader />
    <main>
      <TheHero />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <TeamSection />
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
</template>
