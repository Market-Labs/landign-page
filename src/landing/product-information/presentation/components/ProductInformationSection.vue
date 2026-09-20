<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const cards = ['inventory', 'lots', 'orders', 'roles']
</script>

<template>
  <section id="product-information" class="section info-section">
    <div class="container info-layout">
      <div class="info-copy">
        <p class="section-pill">{{ t('productInfo.eyebrow') }}</p>
        <h2>{{ t('productInfo.title') }}</h2>
        <p>{{ t('productInfo.description') }}</p>
        <div class="info-visual" aria-hidden="true">
          <img src="/assets/images/illustrations/marketgo-process-flow.svg" alt="" loading="lazy" />
        </div>
      </div>
      <div class="info-feature-grid">
        <article class="info-highlight">
          <span aria-hidden="true"></span>
          <h3>{{ t('productInfo.highlight.title') }}</h3>
          <p>{{ t('productInfo.highlight.description') }}</p>
        </article>
        <div class="info-mini-grid">
          <article v-for="card in cards" :key="card" class="info-card">
            <h3>{{ t(`productInfo.cards.${card}.title`) }}</h3>
            <p>{{ t(`productInfo.cards.${card}.description`) }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
