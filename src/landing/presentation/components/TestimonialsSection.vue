<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const testimonials = ['one', 'two', 'three']
</script>

<template>
  <section id="testimonials" class="section section-accent">
    <div class="container">
      <div class="section-header">
        <p class="eyebrow">{{ t('testimonials.eyebrow') }}</p>
        <h2>{{ t('testimonials.title') }}</h2>
      </div>
      <div class="testimonial-track">
        <article v-for="item in testimonials" :key="item" class="testimonial-card">
          <p>"{{ t(`testimonials.items.${item}.quote`) }}"</p>
          <strong>{{ t(`testimonials.items.${item}.name`) }}</strong>
          <span>{{ t(`testimonials.items.${item}.role`) }}</span>
        </article>
      </div>
    </div>
  </section>
</template>
