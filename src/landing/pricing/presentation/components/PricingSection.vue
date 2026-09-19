<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()
const plans = ['basic', 'professional', 'enterprise']
</script>

<template>
  <section id="pricing" class="section pricing-section">
    <div class="container">
      <div class="section-header">
        <p class="section-pill">{{ t('pricing.eyebrow') }}</p>
        <h2>{{ t('pricing.title') }}</h2>
        <p>{{ t('pricing.subtitle') }}</p>
      </div>
      <div class="plans-grid">
        <article v-for="plan in plans" :key="plan" class="plan-card" :class="{ 'plan-card--featured': plan === 'professional' }">
          <span v-if="plan === 'professional'" class="plan-badge">{{ t('pricing.badge') }}</span>
          <h3>{{ t(`pricing.plans.${plan}.name`) }}</h3>
          <div class="plan-price">
            <strong>{{ t(`pricing.plans.${plan}.price`) }}</strong>
            <span>{{ t(`pricing.plans.${plan}.period`) }}</span>
          </div>
          <p>{{ t(`pricing.plans.${plan}.description`) }}</p>
          <ul>
            <li v-for="feature in tm(`pricing.plans.${plan}.features`)" :key="String(feature)">
              {{ feature }}
            </li>
          </ul>
          <a class="btn" :class="plan === 'professional' ? 'btn--primary' : 'btn--secondary'" href="#contact">
            {{ plan === 'enterprise' ? t('pricing.salesAction') : t('pricing.action') }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
