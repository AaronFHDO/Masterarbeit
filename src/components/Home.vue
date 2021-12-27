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
        <ion-card-title>Willkommen beim Kyber Calculator</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Dies ist die Startseite der Kyber Calculator App. <br>
        <br>
        Nutzern wird hier die Möglichkeit gegeben, sich mit dem Postquanten-Verschlüsselungsalgorithmus Kyber auseinander zu setzen.<br>
        Hierfür können Aufgaben zur Ver- und Entschlüsselung von Kyber erstellt, generiert und berechnet werden. <br>
        Gehen Sie dazu entweder im Menu auf Kyber(Integer), für Aufgaben mit natürlichen Zahlen in A, <br>
        oder auf Kyber(Polynom), für Aufgaben mit Polynomen in A. <br>
        <br>
        Außerdem werden weiter unten auf dieser Seite Links zu verschiedenen Informations-Materialien <br>
        zum Thema Post-Quanten-Verschlüsselung und Kyber bereitgestellt. <br>
      </ion-card-content>
    </ion-card>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Informationsmaterial</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-card-subtitle>Unterlagen des BSI</ion-card-subtitle>
        Migration zu Post-Quanten-Kryptografie, Handlungsempfehlungen des BSI, August 2020: <a href="https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Krypto/Post-Quanten-Kryptografie.pdf?__blob=publicationFile&v=1#:~:text=Die%20Aktivit%C3%A4ten%20des%20NIST%20zur,im%20Bereich%20Kryptografie%20international%20vernetzt.">Migration zu Post-Quanten-Kryptografie</a><br>
        Entwicklungsstand Quantencomputer Zusammenfassung, Juni 2020: <a href="https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Studien/Quantencomputer/P283_QC_Zusammenfassung-V_1_2.pdf;jsessionid=29FF940CCF50AC5E98D11976188C8DA9.internet472?__blob=publicationFile&v=1">Entwicklungsstand Quantencomputer (kurz)</a> <br>
        Entwicklungsstand Quantencomputer, Juni 2020: <a href="https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Studien/Quantencomputer/P283_QC_Studie-V_1_2.pdf;jsessionid=29FF940CCF50AC5E98D11976188C8DA9.internet472?__blob=publicationFile&v=1">Entwicklungsstand Quantencomputer (lang)</a> <br>
        Technische Richtlinie, Kryptographische Verfahren: Empfehlungen und Schlüssellängen, März 2020: <a href="https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/TechnischeRichtlinien/TR02102/BSI-TR-02102.pdf;jsessionid=89E3BF2C827A65640203B701186F20BD.internet082?__blob=publicationFile&v=2">BSI TR-02102-1</a><br>
        <br>
        Kyber Original Paper, 2018: <a href="https://repository.ubn.ru.nl/bitstream/handle/2066/195423/195423pre.pdf?sequence=1&isAllowed=y">CRYSTALS Kyber</a><br>
        Kyber Vorstellungs-Folien: <a href="https://cryptojedi.org/peter/data/nistpqc-20190823.pdf">Kyber-Folien</a><br>
        Kyber Spezifikation: <a href="https://pq-crystals.org/kyber/data/kyber-specification-round3-20210131.pdf">Algorithm Specifications And Supporting Documentation</a><br>
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
