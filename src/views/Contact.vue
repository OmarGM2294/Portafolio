<template>
  <v-app class="contact">
    <v-app-bar
      dense
      dark
      app
    >
      <v-toolbar-title>Contact me</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <h2 class="text-center">Contact me in my social networks</h2>
        <v-row class="justify-center pa-5">
          <v-card>
            <v-img
              :src="`https://media-exp1.licdn.com/dms/image/C4D03AQGUTdHW3HDdNQ/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=jNkbwES7SGr1bQIJfjriz1ToCmKq7yv0SlVPcoiyMvM`"
              height="200px"
            >
            </v-img>

            <v-card-actions class="white justify-center">
              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                :color="social.color"
                :href="social.url"
                target="_blank"
                fab
                icon
                small
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          icon: 'fab fa-github',
          color: '#000',
          url: 'https://github.com/OmarGM2294'
        },
        {
          icon: 'fab fa-linkedin',
          color: '#0077b5',
          url: 'https://www.linkedin.com/in/omargm2294/'
        }
      ],
    }
  }
}
</script>

<style>

</style>