<template>
  <!--div class="MainHome"-->
  <ion-content>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button menu="start"></ion-menu-button>
          </ion-buttons>
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
      <ion-card-header>
        <ion-card-title>Willkommen beim Kyber Calculator</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Hier können Sie sich mit dem Postquanten-Verschlüsselungsalgorithmus Kyber auseinandersetzen.<br>
        Der Ablauf des Verfahrens wird zusammen mit anderen wichtigen Infos unter Kyber-Überblick dargestellt. <br>
        <br>
        Außerdem können Aufgaben zur Ver- und Entschlüsselung von Kyber erstellt, generiert und berechnet werden. <br>
        Gehen Sie dazu entweder im Menu auf Kyber(Integer) für Aufgaben mit natürlichen Zahlen, <br>
        oder auf Kyber(Polynom) für Aufgaben mit Polynomen. <br>
      </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
  ion-card-content{
    font-size: 13pt;
    color: black;
  }
</style>
