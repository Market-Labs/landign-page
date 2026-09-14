<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const testimonials = ['one', 'two', 'three']
</script>

<template>
  <section id="testimonials" class="section section-accent testimonials-section">
    <div class="container">
      <div class="testimonial-cta">
        <div>
          <p class="eyebrow">{{ t('testimonials.eyebrow') }}</p>
          <h2>{{ t('testimonials.title') }}</h2>
          <p>{{ t('testimonials.subtitle') }}</p>
        </div>
        <a class="btn btn--light" href="#pricing">{{ t('testimonials.action') }}</a>
      </div>

      <div class="testimonial-track">
        <article v-for="item in testimonials" :key="item" class="testimonial-card">
          <span class="quote-mark" aria-hidden="true">"</span>
          <p>{{ t(`testimonials.items.${item}.quote`) }}</p>
          <div class="testimonial-author">
            <div class="testimonial-avatar" aria-hidden="true">
              {{ t(`testimonials.items.${item}.initials`) }}
            </div>
            <div>
              <strong>{{ t(`testimonials.items.${item}.name`) }}</strong>
              <span>{{ t(`testimonials.items.${item}.role`) }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
