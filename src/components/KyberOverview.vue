<template>
  <!--div class="MainHome"-->
  <ion-content>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button menu="start"></ion-menu-button>
          </ion-buttons>
          <ion-title>Kyber Überblick</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
      <ion-card-header>
        <ion-card-title>Willkommen beim Kyber-Überblick</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Dies ist die Startseite der Kyber Calculator App. <br>
        <br>
        Nutzern wird hier die Möglichkeit gegeben, sich mit dem Postquanten-Verschlüsselungsalgorithmus Kyber auseinander zu setzen.<br>
        Hierfür können Aufgaben zur Ver- und Entschlüsselung von Kyber erstellt, generiert und berechnet werden. <br>
        Gehen Sie dazu entweder im Menu auf Kyber(Integer) für Aufgaben mit natürlichen Zahlen in der Matrix A, <br>
        oder auf Kyber(Polynom) für Aufgaben mit Polynomen in der Matrix A. <br>
        <br>
        Außerdem werden weiter unten auf dieser Seite Links zu verschiedenen Informations-Materialien <br>
        zum Thema Post-Quanten-Verschlüsselung und Kyber bereitgestellt. <br>
      </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<script>
export default {
  name: 'KyberOverview',
}
</script>
