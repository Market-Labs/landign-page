<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div>
        <a class="footer-brand" href="#home">MarketGo</a>
        <p>{{ t('footer.slogan') }}</p>
      </div>
      <small>{{ t('footer.copy') }}</small>
    </div>
  </footer>
</template>
