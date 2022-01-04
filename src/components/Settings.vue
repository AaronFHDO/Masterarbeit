<template>
<!-- <ion-app> -->
  <ion-content>
    <ion-header>
      <ion-toolbar>    
        <ion-buttons slot="start">
            <ion-menu-button menu="start"></ion-menu-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Version</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        1.0 <br> 
        Laden Sie für die neueste Version die Seite mit Cache-Reset neu (z. B. mit "Strg" + "F5")
      </ion-card-content>
    </ion-card>
  </ion-content>  
</template>

<script>

export default {
  name: 'Settings',
};
</script>