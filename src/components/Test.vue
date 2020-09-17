<template>
<!-- <ion-app> -->
  <div class="MainTest">
    <ion-header>
      <ion-toolbar>    
        <ion-buttons slot="start">
            <ion-menu-button menu="start"></ion-menu-button>
        </ion-buttons>
        <ion-title>Test</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-card>
      <ion-card-header>
        <ion-card-title>Willkommen bei Test</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Das hier ist die Startseite meines Vue/Ionic-Prototypen der später für mein Masterseminar, <br>
        meine F&E-Arbeit und meine Masterarbeit verwendet werden soll. <br>
        <br>
        Nutzern wird hier die Möglichkeit gegeben, sich mit den Grundlage zu Ring-based Learning With Errors (RLWE) und <br>
        dem Postquanten-Verschlüsselungsalgorithmus NewHope auseinander zu setzen.<br>
      </ion-card-content>
    </ion-card>
  </div>
  <!-- </ion-app> -->
</template>

<script>
//import {menuController} from '@ionic/core'
export default {
  name: 'MainTest',
  /*methods: {
        openMenu() {
          menuController.enable(true, 'start');
          menuController.open('start');
        }
  }*/
}
</script>

