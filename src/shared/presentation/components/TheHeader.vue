<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isOpen = ref(false)

const navItems = [
  { href: '#product-information', label: 'nav.product' },
  { href: '#videos', label: 'nav.videos' },
  { href: '#pricing', label: 'nav.pricing' },
  { href: '#contact', label: 'nav.contact' }
]

function toggleLanguage() {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
</script>

<template>
  <header class="site-header">
    <nav class="nav-container" aria-label="Primary navigation">
      <a class="brand" href="#home" @click="isOpen = false">
        <img src="/assets/images/brand/logo-marketgo.png" alt="MarketGo logo" />
        <span>MarketGo</span>
      </a>

      <button class="nav-toggle" type="button" :aria-expanded="isOpen" aria-label="Abrir menu" @click="isOpen = !isOpen">
        <span></span><span></span><span></span>
      </button>

      <div class="nav-panel" :class="{ 'nav-panel--open': isOpen }">
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="isOpen = false">
          {{ t(item.label) }}
        </a>
        <button class="language-button" type="button" @click="toggleLanguage">EN / ES</button>
        <a class="access-button" href="#contact">{{ t('nav.access') }}</a>
      </div>
    </nav>
  </header>
</template>
