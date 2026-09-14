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
        <div class="hero-stats" aria-label="MarketGo highlights">
          <div>
            <strong>2</strong>
            <span>{{ t('hero.stats.roles') }}</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>{{ t('hero.stats.alerts') }}</span>
          </div>
          <div>
            <strong>360</strong>
            <span>{{ t('hero.stats.traceability') }}</span>
          </div>
        </div>
      </div>

      <div class="hero-showcase" aria-label="MarketGo platform preview">
        <div class="device-orbit" aria-hidden="true"></div>
        <div class="hero-device">
          <div class="device-topbar">
            <span></span><span></span><span></span>
          </div>
          <div class="device-content">
            <div class="metric-card metric-card--wide">
              <span>{{ t('hero.metricInventory') }}</span>
              <strong>128</strong>
            </div>
            <div class="chart-bars" aria-hidden="true">
              <i></i><i></i><i></i><i></i><i></i>
            </div>
            <div class="metric-grid">
              <div><span>{{ t('hero.metricLots') }}</span><strong>36</strong></div>
              <div><span>{{ t('hero.metricOrders') }}</span><strong>18</strong></div>
            </div>
          </div>
        </div>
        <div class="floating-chip floating-chip--top">
          <strong>{{ t('hero.chips.fresh') }}</strong>
          <span>{{ t('hero.chips.freshDetail') }}</span>
        </div>
        <div class="floating-chip floating-chip--bottom">
          <strong>{{ t('hero.chips.supply') }}</strong>
          <span>{{ t('hero.chips.supplyDetail') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

