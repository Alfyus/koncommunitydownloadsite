# 🥽 Piratare giochi direttamente sul Meta Quest

[[toc]]

## ❓ FAQ: Domande essenziali

<details>
<summary><b>Rischio Ban: Posso essere punito?</b></summary>

Fino ad oggi, **nessun utente è stato bannato** per sideloading di giochi. Seguendo le linee guida è considerato sicuro:
* Usare l'account Meta principale.
* Rimanere connessi al Wi-Fi.
* Alternare giochi acquistati e piratati.
</details>

<details>
<summary><b>Demo vs Prove Gratuite (Il "Killer" della pirateria)</b></summary>

* ✅ **Demo**: Utilizzabili senza restrizioni.
* ❌ **Prove Gratuite**: **NON ATTIVARLE**. Marcano il tuo account e impediscono l'avvio della versione piratata per quel titolo specifico.
* ⚠️ **Quest+**: Può causare lo stesso blocco delle prove gratuite.
</details>

<details>
<summary><b>Multiplayer: Funziona?</b></summary>

La pirateria è un compromesso. Se l'online funziona, è fortuna. Se il multiplayer è fondamentale per te, **acquista il gioco**.
* 🔗 [Lista giochi con supporto Multiplayer](https://wiki.vrpirates.club/en/games/Quest-multiplayer-games)
</details>

---

## 🛠️ Procedura di Installazione

Segui gli step nell'ordine esatto. La corretta configurazione del PC è il 90% del lavoro.

### 1. Preparazione PC
1. Crea la cartella `C:\RSL` (obbligatorio sul Disco C per evitare errori di permessi).
2. **Esclusione Antivirus**: Escludi `C:\RSL` da Windows Defender. [Guida Esclusione](https://www.sordum.org/10636/defender-exclusion-tool-v1-4/).
3. Installa i **Driver USB Meta**: [Download Driver](https://wiki.vrpirates.club/Howto/install-usb-drivers).

### 2. Configurazione Hardware
1. Abilita la **Modalità Sviluppatore** sul tuo account Meta. [Guida Dev Mode](https://wiki.vrpirates.club/en/Howto/enabling-dev-mode).
2. Connetti il Quest al PC tramite porta **USB 3.0**.
3. **USB Debugging**: Indossa il visore e accetta la richiesta di debug (spunta "Consenti sempre da questo computer").

### 3. Setup Software
1. Scarica **Rookie Sideloader**: [Download VRP](https://wiki.vrpirates.club/general_information/vrp-downloads) (Usa il primo link).
2. Estrai il contenuto dello ZIP in `C:\RSL`.
3. Esegui `AndroidSideloader.exe`.

---

## 🎮 Utilizzo di AndroidSideLoader

::: tip Problemi di connessione?
Se il programma non rileva il visore, controlla la **campanella delle notifiche** all'interno del Quest per attivare manualmente il Debug USB.
:::

1. **Cerca**: Digita il nome del gioco nella barra superiore.
2. **Installa**: Fai doppio click sul titolo o clicca **"Download and Install Game"**.
3. **Attendi**: Un avviso confermerà il termine dell'installazione.

### 🔍 Dove sono i miei giochi?
I titoli installati tramite sideloading non appaiono nella libreria standard.
1. Vai nella **Libreria App**.
2. Apri il menu a tendina dei filtri (in alto a destra).
3. Seleziona **Fonti Sconosciute** (Unknown Sources).

---

## 🆘 Risoluzione Problemi Rapida

| Problema | Soluzione |
| :--- | :--- |
| **Già usato prova gratuita/Quest+** | Il gioco non partirà. Usa [Phunk](https://github.com/shibadevs/phunk/releases) per rinominare l'APK o resetta il visore. |
| **Il gioco non è presente** | Consulta la [Lista titoli non craccabili](https://wiki.vrpirates.club/en/games/uncrackable). |
| **Errore connessione USB** | Assicurati che il cavo sia dati (USB 3.0) e che la modalità sviluppatore sia attiva. |