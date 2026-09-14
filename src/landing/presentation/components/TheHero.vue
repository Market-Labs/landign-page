<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="home" class="hero-section section-full">
    <div class="hero-bg" aria-hidden="true"></div>
    <div class="container hero-container">
      <div class="hero-copy">
        <p class="eyebrow">{{ t('hero.eyebrow') }}</p>
        <h1>{{ t('hero.title') }}</h1>
        <p class="hero-subtitle">{{ t('hero.subtitle') }}</p>
        <div class="hero-actions">
          <a class="btn btn--primary" href="#services">{{ t('hero.primaryAction') }}</a>
          <a class="btn btn--ghost" href="#contact">{{ t('hero.secondaryAction') }}</a>
        </div>
      </div>
      <div class="hero-device" aria-label="MarketGo dashboard preview">
        <div class="device-topbar"><span></span><span></span><span></span></div>
        <div class="device-content">
          <div class="metric-card metric-card--wide">
            <span>{{ t('hero.metricSales') }}</span>
            <strong>+34%</strong>
          </div>
          <div class="chart-bars" aria-hidden="true">
            <i></i><i></i><i></i><i></i><i></i>
          </div>
          <div class="metric-grid">
            <div><span>Stock</span><strong>98%</strong></div>
            <div><span>Orders</span><strong>126</strong></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
