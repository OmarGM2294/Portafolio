<template>
  <v-app class="work">
    <v-app-bar
      dense
      dark
      app
    >
      <v-toolbar-title>Experience</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <v-card
          class="mx-auto work__item"
          v-for="(exp, index) in experience" :key="index"
        >
          <v-card-text>
            <h3>
              {{ exp.company }}
              <i>
                {{ exp.location }}
              </i>
            </h3>
            <p>
              <span>
                {{ exp.role }}
              </span>
              <i>
                {{ exp.date }}
              </i>
            </p>
            <ul>
              <li v-for="(desc, index) in exp.description" :key="index">
                {{ desc }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      experience: [
        {
          company: 'Globant',
          role: 'WEB UI DEVELOPER',
          description: ['Creating an amateur photography web application for National Geographic.',
                        'Developement with React/Redux, git flow management and SCRUM agile methodology implemented.',
                        'Adding re-usability for core components in Autodesk’s core page.',
                        'Development with Vue JS. git flow management and Kanban agile methodology implemented.'],
          date: 'Apr. 2018 - Oct. 2019',
          location: 'Bogotá, Colombia'
        },
        {
          company: 'FusePong',
          role: 'SOFTWARE DEVELOPER',
          description: ['Creating different types of applications to support client’s problems.',
                        'Developement in Ruby on Rails, Laravel, PHP, JS, HTML, CSS and PhoneGap.'],
          date: 'Aug. 2016 - Apr. 2018',
          location: 'Bogotá, Colombia'
        },
        {
          company: 'HP Inc.',
          role: 'SOFTWARE DEVELOPER INTERN',
          description: ['Creating different types of applications to support client’s problems.',
                        'Developement in C#, Laravel, PHP, JS, HTML, CSS and PhoneGap.',
                        'Integration with printing solutions, knowledge about all types of HP solutions'],
          date: 'Feb. 2016 - Aug. 2016',
          location: 'Bogotá, Colombia'
        },
        {
          company: 'ITAC S.A.',
          role: 'MOBILE SOFTWARE DEVELOPER',
          description: ['Developmented a mobile application cross-platform in HTML5, JS, CSS3 and PhoneGap.',
                        'Creating a safety documents repository for big companieswith diffrent kinds of encryption, to prevent data theft from large companies.'],
          date: 'Dec. 2012 - Feb. 2013',
          location: 'Bogotá, Colombia'
        }
      ],
    }
  },
}
</script>

<style lang="scss">
  .v-data-table tbody tr.v-data-table__expanded__content {
    box-shadow: inset 0px 4px 8px -5px rgba(50, 50, 50, 0.75);

    & td {
      padding: 20px;
    }
  }
</style>