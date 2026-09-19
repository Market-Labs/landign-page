<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="contact" class="section contact-section">
    <div class="container contact-panel">
      <div class="contact-copy">
        <p class="section-pill">{{ t('contact.eyebrow') }}</p>
        <h2>{{ t('contact.title') }}</h2>
        <div class="contact-cards">
          <article><strong>Correo</strong><span>{{ t('contact.info.email') }}</span></article>
          <article><strong>WhatsApp</strong><span>{{ t('contact.info.whatsapp') }}</span></article>
          <article><strong>Horario</strong><span>{{ t('contact.info.schedule') }}</span></article>
        </div>
        <p>{{ t('contact.description') }}</p>
      </div>
      <form class="contact-form">
        <input type="text" :placeholder="t('contact.fields.name')" />
        <input type="email" :placeholder="t('contact.fields.email')" />
        <input type="text" :placeholder="t('contact.fields.store')" />
        <input type="tel" :placeholder="t('contact.fields.phone')" />
        <textarea rows="5" :placeholder="t('contact.fields.message')"></textarea>
        <label class="privacy-check">
          <input type="checkbox" />
          <span>{{ t('contact.fields.privacy') }}</span>
        </label>
        <button class="btn btn--primary" type="button">{{ t('contact.action') }}</button>
      </form>
    </div>
  </section>
</template>
