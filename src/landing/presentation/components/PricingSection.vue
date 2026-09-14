<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const plans = ['starter', 'pro']
</script>

<template>
  <section id="pricing" class="section">
    <div class="container">
      <div class="section-header">
        <p class="eyebrow">{{ t('pricing.eyebrow') }}</p>
        <h2>{{ t('pricing.title') }}</h2>
        <p>{{ t('pricing.subtitle') }}</p>
      </div>
      <div class="pricing-grid">
        <article v-for="plan in plans" :key="plan" class="plan-card" :class="{ 'plan-card--featured': plan === 'pro' }">
          <h3>{{ t(`pricing.plans.${plan}.name`) }}</h3>
          <p>{{ t(`pricing.plans.${plan}.description`) }}</p>
          <strong>{{ t(`pricing.plans.${plan}.price`) }}</strong>
          <a class="btn btn--primary" href="#contact">{{ t('pricing.action') }}</a>
        </article>
      </div>
    </div>
  </section>
</template>
