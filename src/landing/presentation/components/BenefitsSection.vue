<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const benefits = ['speed', 'control', 'growth']
</script>

<template>
  <section id="benefits" class="section benefits-section">
    <div class="container benefits-layout">
      <div class="benefits-copy">
        <div class="section-header section-header--left">
          <p class="eyebrow">{{ t('benefits.eyebrow') }}</p>
          <h2>{{ t('benefits.title') }}</h2>
          <p>{{ t('benefits.subtitle') }}</p>
        </div>
        <div class="benefits-panel">
          <span>{{ t('benefits.panel.label') }}</span>
          <strong>{{ t('benefits.panel.value') }}</strong>
          <p>{{ t('benefits.panel.description') }}</p>
        </div>
      </div>

      <div class="benefits-grid">
        <article v-for="(benefit, index) in benefits" :key="benefit" class="benefit-card">
          <span class="benefit-number">0{{ index + 1 }}</span>
          <h3>{{ t(`benefits.items.${benefit}.title`) }}</h3>
          <p>{{ t(`benefits.items.${benefit}.description`) }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
