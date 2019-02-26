<template>
  <v-app>
    <v-toolbar dark app color="primary">
      <v-toolbar-title class="headline">
        <span>Assetto Server Manager</span>
        <small class="version">v1</small>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat class="text-none">Control Panel</v-btn>
        <v-btn to="/cars" flat class="text-none">Cars</v-btn>
        <v-btn to="/tracks" flat class="text-none">Tracks</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>

    <v-footer app :height="60">
      <v-container>
        GNU GPL v3
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.version {
  margin-left: 0.5em;
}
</style>