<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="home" class="home-section">
    <div class="container home-layout">
      <div class="home-copy">
        <p class="section-pill">{{ t('home.eyebrow') }}</p>
        <h1>{{ t('home.title') }}</h1>
        <p>{{ t('home.subtitle') }}</p>
        <div class="home-actions">
          <a class="btn btn--orange" href="#contact">{{ t('home.demoAction') }}</a>
          <a class="btn btn--secondary" href="#videos">{{ t('home.videoAction') }}</a>
        </div>
      </div>
      <div class="home-preview" aria-label="MarketGo platform preview">
        <div class="preview-card preview-card--main">
          <span>{{ t('home.preview.inventory') }}</span>
          <strong>128</strong>
        </div>
        <div class="preview-row">
          <div><span>{{ t('home.preview.alerts') }}</span><strong>12</strong></div>
          <div><span>{{ t('home.preview.orders') }}</span><strong>18</strong></div>
        </div>
      </div>
    </div>
  </section>
</template>
