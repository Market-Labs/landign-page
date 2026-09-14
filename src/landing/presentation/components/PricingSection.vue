<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const plans = ['starter', 'pro']
const features = ['catalog', 'contact', 'analytics']
</script>

<template>
  <section id="pricing" class="section pricing-section">
    <div class="container">
      <div class="section-header">
        <p class="eyebrow">{{ t('pricing.eyebrow') }}</p>
        <h2>{{ t('pricing.title') }}</h2>
        <p>{{ t('pricing.subtitle') }}</p>
      </div>

      <div class="pricing-grid">
        <article v-for="plan in plans" :key="plan" class="plan-card" :class="{ 'plan-card--featured': plan === 'pro' }">
          <div class="plan-card-header">
            <span>{{ t(`pricing.plans.${plan}.tag`) }}</span>
            <h3>{{ t(`pricing.plans.${plan}.name`) }}</h3>
          </div>
          <p>{{ t(`pricing.plans.${plan}.description`) }}</p>
          <strong>{{ t(`pricing.plans.${plan}.price`) }}</strong>
          <ul>
            <li v-for="feature in features" :key="feature">
              {{ t(`pricing.plans.${plan}.features.${feature}`) }}
            </li>
          </ul>
          <a class="btn" :class="plan === 'pro' ? 'btn--light' : 'btn--primary'" href="#contact">
            {{ t('pricing.action') }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
