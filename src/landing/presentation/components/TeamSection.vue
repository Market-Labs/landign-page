<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const members = [
  { key: 'caceres', photo: '/assets/images/team/profile-caceres.png' },
  { key: 'merino', photo: '' },
  { key: 'torres', photo: '' }
]
</script>

<template>
  <section id="team" class="section section-muted team-section">
    <div class="container">
      <div class="section-header">
        <p class="eyebrow">{{ t('team.eyebrow') }}</p>
        <h2>{{ t('team.title') }}</h2>
        <p>{{ t('team.subtitle') }}</p>
      </div>
      <div class="team-grid">
        <article v-for="member in members" :key="member.key" class="team-card">
          <img v-if="member.photo" class="team-photo" :src="member.photo" :alt="t(`team.members.${member.key}.name`)" />
          <div v-else class="team-avatar" aria-hidden="true">
            {{ t(`team.members.${member.key}.initials`) }}
          </div>
          <h3>{{ t(`team.members.${member.key}.name`) }}</h3>
          <p>{{ t(`team.members.${member.key}.role`) }}</p>
          <span>{{ t(`team.members.${member.key}.focus`) }}</span>
        </article>
      </div>
    </div>
  </section>
</template>
