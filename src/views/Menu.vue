<template>
    <div id="app">
        <ion-app>
            <ion-split-pane content-id="main">
                <ion-menu type="overlay" side="start" menu-id="start" content-id="main" class="myMenu">
                    <ion-header>
                       <ion-toolbar color="primary">
                            <ion-title>Menu</ion-title>
                        </ion-toolbar>
                    </ion-header>
                    <ion-content id="main">
                        <ion-list>
                            <ion-menu-toggle auto-hide="false">
                                <router-link to="/"><ion-item>Home</ion-item></router-link>
                                <router-link to="/KyberOverview"><ion-item>Kyber Überblick</ion-item></router-link>
                                <router-link to="/KyberInt"><ion-item>Kyber (Integer)</ion-item></router-link>
                                <router-link to="/KyberPol"><ion-item>Kyber (Polynom)</ion-item></router-link>
                                <router-link to="/Settings"><ion-item>Einstellungen</ion-item></router-link>   
                            </ion-menu-toggle>
                        </ion-list>
                    </ion-content>
                </ion-menu>  
            <ion-vue-router id="main"/>
            </ion-split-pane>
        </ion-app>
    </div>
</template>

<script>
export default {  
    name: 'App',
};
</script>

<style>
    ion-menu{
        --background: black;
        color:white;
    }
</style>