<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <a class="footer-brand" href="#home">
        <img src="/assets/images/brand/logo-marketgo.png" alt="MarketGo logo" />
        <span>MarketGo</span>
      </a>
      <small>{{ t('footer.copy') }}</small>
      <nav aria-label="Footer navigation">
        <a href="#pricing">{{ t('footer.terms') }}</a>
        <a href="#contact">{{ t('footer.privacy') }}</a>
        <a href="#contact">{{ t('footer.support') }}</a>
      </nav>
    </div>
  </footer>
</template>
