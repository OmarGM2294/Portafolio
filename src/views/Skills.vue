<template>
  <v-app class="skills">
    <v-app-bar
      dense
      dark
      app
    >
      <v-toolbar-title>Skills</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container class="languages">
        <v-row>
          <h2 class="title">Programming languages and Markup languages:</h2>
        </v-row>
        <v-row v-for="(info, index) in languages" :key="index">
          <div class="skills__icon">
            <v-icon size="80" :color="info.color">fab fa-{{ info.icon }}</v-icon>
          </div>
          <div class="skills__progress">
            <v-progress-linear
              v-model="info.progress"
              :color="info.color"
              height="20"
              :value="info.progress"
              striped
            >
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </div>
        </v-row>
      </v-container>
      <v-container class="frameworks">
        <v-row>
          <h2 class="title">Frameworks:</h2>
        </v-row>
        <v-row v-for="(info, index) in frameworks" :key="index">
          <div class="skills__icon">
            <v-icon size="80" :color="info.color">fab fa-{{ info.icon }}</v-icon>
          </div>
          <div class="skills__progress">
            <v-progress-linear
              v-model="info.progress"
              :color="info.color"
              height="20"
              :value="info.progress"
              striped
            >              
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </div>
        </v-row>
      </v-container>
      <v-container class="others">
        <v-row>
          <h2 class="title">Others:</h2>
        </v-row>
        <v-row v-for="(info, index) in others" :key="index">
          <div class="skills__icon">
            <v-icon size="80" :color="info.color">fab fa-{{ info.icon }}</v-icon>
          </div>
          <div class="skills__progress">
            <v-progress-linear
              v-model="info.progress"
              :color="info.color"
              height="20"
              :value="info.progress"
              striped
            >
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </div>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      languages: [{
        icon: 'js',
        color: '#f0db4f',
        progress: '80'
      },
      {
        icon: 'css3-alt',
        color: '#1a70b5',
        progress: '80'        
      },
      {
        icon: 'html5',
        color: '#de4b25',
        progress: '70'        
      }],      
      frameworks: [{
        icon: 'react',
        color: '#61dafb',
        progress: '90'
      },
      {
        icon: 'node',
        color: '#8cc03d',
        progress: '50'        
      },
      {
        icon: 'vuejs',
        color: '#3fb27f',
        progress: '95'        
      }],      
      others: [{
        icon: 'git-alt',
        color: '#f84d2d',
        progress: '85'
      }]
    }
  }
}
</script>

<style>

</style>