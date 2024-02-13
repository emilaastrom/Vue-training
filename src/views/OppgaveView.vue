<script setup lang="ts">
  import { ref } from 'vue'
  const o1_visible = ref(false)
  const o2_visible = ref(false)

  const show_o1 = () => {
    o1_visible.value = true
    o2_visible.value = false
  }
  const show_o2 = () => {
    o1_visible.value = false
    o2_visible.value = true
  }
</script>


<template>

  <div class="about">
    <h1 id="list_assignments"> 
      <button class="o1" @click="show_o1">Øving 2</button> 
      <button class="o2" @click="show_o2">Øving 3</button>
    </h1>
    <div class="oppg2">
      <p id="description" v-show="o1_visible">
        ØVING2 - I denne øvingen ønsker vi at dere skal se på hvordan lage en kalkulator i Vue.js. Dere skal
        altså lage et prosjekt med en enkelt side, der dere implementerer et brukergrensesnitt for å
        utføre enkle regnestykker.<br /><br />
        Et godt tips er å ta i bruk enten CSS Grid eller Flexbox for formen på kalkulatoren. I tillegg
        til dette ønsker vi ha en logg over de siste regnestykkene dere har utført. <br /><br />
        Dette kan plasseres i for eksempel en col- lapsible eller boks under kalkulatoren, men dere
        står fritt til å lage det som for dere virker mest hensiktsmessig. Liste over regnestykkene
        skal oppdateres for hver kalkulasjon som utføres. <br /><br />
        Et tips her er å se på conditional rendering og state. Vi ønsker gjerne at man implementerer
        en enkel form for feilhåndtering, f.eks at man ikke kan skrive inn bokstaver og ikke får feil
        med komma. <br /><br />
        Dersom dere synes dette gikk greit, kan en bonusoppgave være å se på sidens responsivitet,
        altså hvordan den ser ut på ulike skjermstørrelser, f.eks en mobil. Dette er ingen krav, men
        kan være god trening for videre arbeid. <br><br><br>
      </p>
    </div>
    
    <div class="oppg3" >
      <p id="description" v-show="o2_visible">
        Oppgave 1: 
        Opprett en ny side på kalkulatoren for et kontaktskjema. Denne skal ha egen adresse (for eksempel:
        http://localhost/kontaktskjema).
        Siden skal inneholde et kontaktskjema slik at brukere kan gi tilbakemeldinger på kalkulatoren, med
        hvertfall følgende felt <br>
        • Navn<br>
        • E-postadresse<br>
        • Melding<br><br>
        Følgende krav stilles til skjemaet:
        • Feltene for navn og e-postadresse skal valideres, og kan ikke være tomme<br>
        • Feltet for melding må ha innhold<br>
        • Navn og e-postadresse skal lagres i state til neste gang<br>
        • Submit-knapp skal være deaktivert dersom innholdet i skjemaet er ugyldig<br><br>
        Når skjemaet submittes, skal brukeren få statusmelding fra backend. Backend for denne delen kan
        mockes med json-server biblioteket, som for eksempel alltid respondere med ‘success’ når form submit
        request er mottat!
        Opprett komponenter der du ser det er rimelig å gjøre det. <br><br>
        Oppgave 2:<br>
        • Skriv unit tests for kalculator og kontaktskjema komponenter med Vitest<br>
        • Skriv end-to-end tester ved bruk av Cypress for de to følgende scenarioer<br>
        o form validering scenario - for eksempel submit-knapp skal være deaktivert dersom
        innholdet i skjemaet er ugyldig<br>
        o successful submission scenario - for eksempel kontaktskjema viser riktig response fra
        serveren når skjemaet inneholder gyldige data og Submit-knappen er trykket<br>
      </p>
    </div>
  </div>
</template>

<style>
#description {
  margin-top: 20px;
}

.about {
  padding: 20px;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--color-border);
  max-width: 100%;
  min-width: 500px;
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
}

#list_assignments{
  display: inline-block;
  padding: 1 1rem;
  button {
    padding: 1rem;
    margin: 0 1rem;
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    background-color: rgba(3, 216, 3, 0.054);
    color: var(--color-text);
    cursor: pointer;
    color: hsla(160, 100%, 37%, 1);
    font-size: 1rem;
  }
}

@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
}
</style>
