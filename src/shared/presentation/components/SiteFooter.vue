<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand-group">
        <img src="/assets/images/brand/logo-marketlab.png" alt="Market-Labs logo" />
        <div>
          <a class="footer-brand" href="#home">Market-Labs</a>
          <p>{{ t('footer.slogan') }}</p>
        </div>
      </div>
      <small>{{ t('footer.copy') }}</small>
    </div>
  </footer>
</template>
