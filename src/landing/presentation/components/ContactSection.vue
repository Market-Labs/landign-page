<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="contact" class="section contact-section">
    <div class="container contact-panel">
      <div>
        <p class="eyebrow">{{ t('contact.eyebrow') }}</p>
        <h2>{{ t('contact.title') }}</h2>
        <p>{{ t('contact.subtitle') }}</p>
      </div>
      <form class="contact-form">
        <label>
          {{ t('contact.name') }}
          <input type="text" :placeholder="t('contact.namePlaceholder')" />
        </label>
        <label>
          {{ t('contact.email') }}
          <input type="email" :placeholder="t('contact.emailPlaceholder')" />
        </label>
        <label>
          {{ t('contact.message') }}
          <textarea rows="4" :placeholder="t('contact.messagePlaceholder')"></textarea>
        </label>
        <button class="btn btn--primary" type="button">{{ t('contact.action') }}</button>
      </form>
    </div>
  </section>
</template>
