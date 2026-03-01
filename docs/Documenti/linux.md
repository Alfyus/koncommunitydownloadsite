# 🐧 Introduzione

Se siete pronti a immergervi nel potente mondo di **Linux**, siete nel posto giusto. Questa guida vi accompagnerà attraverso le tappe fondamentali che hanno reso questo sistema operativo un pilastro della tecnologia moderna.

---

## 🕰️ Le Origini: UNIX e la Portabilità

Per capire come è nato Linux, dobbiamo tornare al **1969**, quando **Ken Thompson** e **Dennis Ritchie** dei Bell Laboratories svilupparono il sistema operativo **UNIX**.

Successivamente, il sistema fu riscritto nel linguaggio di programmazione **C**. Questa scelta tecnica fu rivoluzionaria: rese UNIX **portabile**, favorendone una diffusione capillare in diversi ambienti di calcolo.

## ✊ Il Progetto GNU e la Filosofia Open Source

Oltre un decennio dopo, **Richard Stallman** diede inizio al progetto **GNU** (acronimo ricorsivo per *"GNU's Not UNIX"*). L'obiettivo era ambizioso: creare un sistema operativo di tipo UNIX completamente libero e open-source.

Sebbene il progetto GNU abbia prodotto componenti essenziali, tra cui la **GNU General Public License (GPL)**, il proprio kernel (denominato *Hurd*) non fu completato in tempo per il rilascio globale.

---

## 🧠 Il Ruolo del Kernel

Il **kernel** è il componente centrale di un sistema operativo. Agisce come un ponte, permettendo all'hardware di comunicare con il software.

### Funzioni Principali:
* **Gestione delle risorse:** Amministra la CPU e la memoria.
* **Controllo periferiche:** Gestisce l'interazione con i dispositivi esterni.
* **Orchestrazione:** In sostanza, il kernel controlla tutto ciò che accade sul sistema.

All'epoca, mentre venivano sviluppati altri sistemi simili a UNIX come BSD e MINIX, mancava ancora un kernel unificato e liberamente accessibile a tutti.

---

## 🐣 La Nascita del Kernel Linux

Arriviamo così al **1991**, quando uno studente finlandese di nome **Linus Torvalds** iniziò a sviluppare un nuovo kernel come progetto personale. 

Questo kernel, che oggi conosciamo come **Kernel Linux**, rappresentò il tassello mancante per il sistema operativo GNU. La combinazione degli strumenti GNU e del kernel Linux ha dato vita al sistema operativo completo e open-source che utilizziamo oggi. Questo traguardo ha segnato un momento cruciale nella storia dell'informatica.

::: tip 💡 Lo sapevi?
Linux non è un sistema operativo completo di per sé, ma è tecnicamente il "motore" (kernel) che permette al software GNU di interagire con il tuo computer.
:::

### 📝 Domanda di ripasso

**Chi ha sviluppato il kernel Linux?**

::: details 🔍 Clicca per scoprire la risposta
**Linus Torvalds**
:::


# 🐧 Distribuzioni e Architettura di Linux

Nella lezione precedente abbiamo esplorato il kernel Linux. È fondamentale fare una distinzione: sebbene il termine "Linux" venga spesso usato per indicare l'intero sistema operativo, tecnicamente si riferisce **solo al kernel**. I sistemi operativi completi che utilizzano il kernel Linux sono chiamati più correttamente **Distribuzioni Linux**, o semplicemente **"distro"**.

---

## 🏗️ L'Architettura del Sistema
Un sistema Linux è diviso in tre parti principali:

1. **Hardware**: I componenti fisici del computer (CPU, RAM, dischi, ecc.).
2. **Kernel Linux**: Il cuore del sistema. Gestisce l'hardware e permette la comunicazione tra software e componenti fisici.
3. **User Space (Spazio Utente)**: L'ambiente in cui l'utente interagisce con il sistema tramite applicazioni e interfacce a riga di comando (CLI).

---

## 📦 Cos'è una Distribuzione Linux?
Una distribuzione pacchettizza (fatemi passare il termine) il kernel Linux insieme a una collezione di software, come utility di sistema, librerie e applicazioni. 

In genere, una distro include:
* Un **gestore di pacchetti** per installare e gestire il software.
* Un **ambiente desktop** (DE) per l'interfaccia grafica (GUI).

In sostanza, una distro è un sistema operativo completo e pronto all'uso costruito attorno al kernel.

---

## 🛠️ Come Scegliere la propria Distro
Scegliere tra centinaia di opzioni può sembrare scoraggiante. La chiave è trovare una distribuzione che si allinei al tuo livello di esperienza e ai tuoi obiettivi.

### Fattori Chiave da Considerare

| Fattore | Descrizione |
| :--- | :--- |
| **Livello di Esperienza** | I principianti dovrebbero puntare su distro *user-friendly* come **Ubuntu** o **Linux Mint**. Gli utenti avanzati potrebbero preferire la personalizzazione totale di **Arch Linux** o **Gentoo**. |
| **Ambiente Desktop** | Definisce il look & feel. Opzioni popolari includono **GNOME**, **KDE Plasma** (ottimo per HDR e Wayland) e **XFCE**. |
| **Gestione Pacchetti** | Le due famiglie principali sono **Debian-based** (usano `.deb` e `apt`) e **Red Hat-based** (usano `.rpm` e `dnf`). Formati universali come **Flatpak** e **Snap** facilitano l'installazione ovunque. |
| **Community e Supporto** | Una vasta community significa più tutorial e forum. Alcune distro offrono anche supporto commerciale ufficiale. |

---

## 🚀 Il Primo Passo Pratico
Non esiste una "migliore" distribuzione in assoluto. Il modo migliore per iniziare è testare alcune opzioni tramite una **"Live USB"**: questo ti permette di avviare il sistema operativo direttamente da una chiavetta USB senza installare nulla sul disco rigido.

::: tip 💡 Consiglio
Se sei indeciso, parti da una distribuzione basata su Debian o Ubuntu (come ad esempio Linux Mint). La vastità di documentazione disponibile online ti salverà la vita nei primi giorni di utilizzo.
:::

::: tip 💡 Consiglio
Puoi anche fare un test per capire qale Distro potrebbe essere quella datta su [Distrochooser](https://distrochooser.de/it)
:::

### 📝 Domanda di ripasso

**Cosa gestisce l'hardware in un sistema Linux?**

::: details 🔍 Clicca per scoprire la risposta
**Il Kernel Linux**
:::
