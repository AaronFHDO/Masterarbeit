<template>
  <div class="MainHome">
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
        <ion-card-title>Willkommen bei Home</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Das hier ist die Startseite meines Vue/Ionic-Prototypen der später für mein Masterseminar, <br>
        meine F&E-Arbeit und meine Masterarbeit verwendet werden soll. <br>
        <br>
        Nutzern wird hier die Möglichkeit gegeben, sich mit den Grundlagen zu Module-Learning With Errors (MLWE) und <br>
        dem Postquanten-Verschlüsselungsalgorithmus Kyber auseinander zu setzen.<br>
        <br>
        Hier könnte außerdem ein kleine Einführung zu den Möglichkeiten und dem Ablauf dieser App stehen. <br>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'Home',
  
}
</script>
