<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const members = ['product', 'design', 'engineering']
</script>

<template>
  <section id="team" class="section section-muted">
    <div class="container">
      <div class="section-header">
        <p class="eyebrow">{{ t('team.eyebrow') }}</p>
        <h2>{{ t('team.title') }}</h2>
      </div>
      <div class="team-grid">
        <article v-for="member in members" :key="member" class="team-card">
          <div class="team-avatar" aria-hidden="true"></div>
          <h3>{{ t(`team.members.${member}.name`) }}</h3>
          <p>{{ t(`team.members.${member}.role`) }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
