<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const services = ['catalog', 'orders', 'analytics']
</script>

<template>
  <section id="services" class="section section-muted">
    <div class="container">
      <div class="section-header">
        <p class="eyebrow">{{ t('services.eyebrow') }}</p>
        <h2>{{ t('services.title') }}</h2>
        <p>{{ t('services.subtitle') }}</p>
      </div>
      <div class="services-grid">
        <article v-for="service in services" :key="service" class="service-card">
          <div class="service-visual" aria-hidden="true"></div>
          <h3>{{ t(`services.items.${service}.title`) }}</h3>
          <p>{{ t(`services.items.${service}.description`) }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
