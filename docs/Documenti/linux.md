# Introduzione 🐧

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


# Distribuzioni e Architettura di Linux 🐧

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

# Installazione di Linux 🐧

---

##  📥 1. Selezione e Download della ISO

Il primo passo consiste nello scaricare l'immagine disco (.iso) della distribuzione scelta. Assicurati di scaricare sempre le versioni dal sito ufficiale per garantire l'integrità del sistema.

| Distribuzione | Profilo Utente |
| :--- | :--- |
| **Linux Mint** | Ideale per chi viene da Windows |
| **Ubuntu** | Lo standard per compatibilità e supporto |
| **Fedora** | Per chi vuole software sempre aggiornato |
| **Pop!_OS** | Ottimo per gaming e workflow produttivi |

> [!TIP]
> Se non sai cosa scegliere, punta su **Linux Mint Edition (Cinnamon)**: è solida, familiare e include già molti driver necessari.

---

## 💾 2. Preparazione del Supporto USB

Per "flashare" la ISO su una chiavetta USB (minimo 8GB), utilizza lo strumento più adatto al tuo sistema operativo attuale. **Attenzione: la chiavetta verrà formattata.**

### Strumenti consigliati per OS:

* **Windows:** [Rufus](https://rufus.ie/) (Veloce, non richiede installazione).
* **macOS:** [BalenaEtcher](https://www.balena.io/etcher/) (Interfaccia intuitiva e sicura).
* **Linux:** [Ventoy](https://www.ventoy.net/) (Permette di gestire più ISO trascinandole semplicemente nel drive).

### Procedura Standard:
1. Inserisci la chiavetta USB.
2. Apri il software di flashing.
3. Seleziona il file **ISO** scaricato.
4. Seleziona l'unità **USB** corretta.
5. Clicca su **Flash** (o Start) e attendi il messaggio di conferma.

---

## ⚙️ 3. Accesso al BIOS/UEFI

Una volta creata la chiavetta, riavvia il computer. Devi intercettare l'avvio prima che parta il vecchio sistema operativo premendo ripetutamente il tasto dedicato.

### Tasti comuni per produttore:

| Produttore | Tasto BIOS/Setup | Boot Menu (Scelta rapida) |
| :--- | :--- | :--- |
| **ASUS** | `F2` o `DEL` | `F8` |
| **Dell** | `F2` | `F12` |
| **HP** | `F10` | `F9` o `ESC` |
| **Lenovo** | `F2` o `Fn+F2` | `F12` |
| **Acer** | `F2` | `F12` |

---

## 🚀 4. Configurazione e Avvio dell'Installazione

Una volta all'interno dell'interfaccia BIOS/UEFI, segui questi passaggi per permettere l'avvio di Linux:

1.  **Secure Boot:** Se l'installazione non parte, cerca la voce *Secure Boot* e impostala su `Disabled`.
2.  **Ordine di Avvio (Boot Priority):** Trascina o sposta la tua **USB Flash Drive** in cima alla lista di avvio. Nei BIOS più vecchi comparirà sotto la legenda sul come spostare di ordine.
3.  **Salvataggio:** Premi `F10` per salvare le modifiche e uscire.

### L'ambiente "Live"
Il computer si caricherà ora in modalità **Live**. Questo ti permette di:
* Controllare se il Wi-Fi e l'audio funzionano correttamente.
* Provare il sistema senza modificare nulla sul disco fisso.
* Avviare l'installer definitivo tramite l'icona **"Install Linux"** presente sul desktop.

---

::: info Curiosità
Molti utenti Linux preferiscono mantenere una piccola partizione Windows (Dual Boot) all'inizio. Se decidi di farlo, l'installer di Linux solitamente rileverà Windows e ti chiederà se vuoi installarli "fianco a fianco".
:::


# Guida alla Shell di Linux 🐧

## 🐚 Cos'è la Shell di Linux

Il primo passo fondamentale è comprendere la **Shell**. La shell è un potente programma che accetta i comandi digitati dall'utente e li trasmette al sistema operativo per l'esecuzione.

Se hai già utilizzato un'interfaccia grafica (GUI), potresti aver incontrato applicazioni come "Terminale" o "Console". Questi sono semplicemente programmi che aprono una sessione shell per te. In questo corso esploreremo le capacità della shell e i numerosi comandi Linux a disposizione.

---

## 🛠️ Comprendere Bash
In questo corso ci concentreremo sul programma **Bash** (*Bourne Again Shell*). Bash è la shell predefinita per la maggior parte delle distribuzioni Linux, il che la rende uno strumento essenziale da imparare.

Mentre esistono altre shell come `ksh`, `zsh` e `tcsh`, padroneggiare Bash fornisce una base solida per lavorare con qualsiasi sistema Linux.

---

## 💻 Il Prompt della Shell

Quando apri un terminale, sarai accolto dal **prompt della shell**. Il suo aspetto può variare tra le diverse distribuzioni, ma tipicamente segue questo formato: `utente@hostname:directory_corrente$`.

```bash
alfyus@koncommunity:/home/alfyus $
```

## 🚀 Il Tuo Primo Comando Linux

Iniziamo con uno dei comandi Linux più basilari per i principianti: `echo`. Questo comando è estremamente diretto: si limita a visualizzare, ovvero a "restituire l'eco", del testo fornito come argomento direttamente nel terminale.
Per testarlo, digita quanto segue nel tuo terminale:

```bash
echo Hello World
```

### 📝 Domanda di ripasso

**Qual è l'output esatto a schermo quando digiti "echo Hello World"**

::: details 🔍 Clicca per scoprire la risposta
**Hello World**
:::

# Navigazione in Linux 🐧 

In Linux, un concetto fondamentale è che **tutto viene trattato come un file**. Questi file sono organizzati all'interno di una struttura gerarchica chiamata **filesystem**. Comprendere questa struttura è la chiave per navigare nel sistema in modo efficace.

---

## 🌳 Tree (l'albero)
L'intero filesystem parte da una singola directory di livello superiore chiamata **root** (radice), rappresentata da una barra diagonale (`/`). Dalla root, l'albero delle directory in Linux si dirama in varie sottodirectory, che possono contenere file e ulteriori sottocartelle.

Ecco un esempio semplificato di come appare questa struttura:

```text
/
|-- bin
|   |-- file1
|   |-- file2
|-- etc
|   |-- file3
|   `-- directory1
|       |-- file4
|       `-- file5
|-- home
|-- var
```
## 📍 Comprendere i Percorsi (Paths)
La posizione di qualsiasi file o directory è descritta dal suo **percorso**. Un percorso è una sequenza di directory che conduce da un punto di partenza a una destinazione specifica.

> **Esempio:** Se hai una cartella chiamata `alfyus` all'interno della directory `/home`, e una cartella `Movies` dentro `alfyus`, il percorso completo sarà `/home/alfyus/Movies`.

---

### Cos'è il formato esteso di PWD in Linux?

Quando navighi nel filesystem, è essenziale conoscere la tua posizione attuale. Il comando per farlo è `pwd`. Il significato di **pwd** in Linux è **"print working directory"** (stampa directory di lavoro). Il suo unico scopo è visualizzare il percorso completo della directory in cui ti trovi attualmente, partendo dalla root (`/`).

---

### Utilizzo del comando `pwd`

Per trovare la tua **directory corrente**, digita semplicemente il comando `pwd` e premi Invio. Verrà stampato il percorso assoluto della tua posizione attuale sulla riga di comando.

```bash
pwd
```

## 🚀 cd (Cambio Directory)

Per spostarti nel filesystem di Linux, utilizzerai i percorsi per specificare la tua destinazione. Lo strumento principale per farlo è il comando `cd` (*change directory*). Comprendere come usare questo comando è un'abilità fondamentale per lavorare nel terminale.

---

### Comprendere i Percorsi

Esistono due modi per specificare un percorso:

1.  **Percorso Assoluto:** È il percorso completo che parte dalla directory **root** (`/`). La root è il livello più alto del filesystem. Qualsiasi percorso che inizia con `/` è un percorso assoluto.
    * **Esempio:** `/home/alfyus/Desktop`

2.  **Percorso Relativo:** Questo percorso è relativo alla tua **posizione attuale** nel filesystem. Se ti trovi in `/home/alfyus/Documents` e vuoi accedere a una sottodirectory chiamata `taxes`, non hai bisogno del percorso completo. Puoi usare semplicemente il percorso relativo: `taxes/`.



---

### Utilizzo del comando `cd`

Una volta compresi i percorsi, puoi usare il comando `cd` per cambiare la tua directory corrente. Che tu sia in un terminale Linux o in un prompt dei comandi di Windows, il concetto di cambiare directory è universale, anche se la sintassi può variare leggermente.

Per passare a una directory specifica usando un **percorso assoluto**, digita:

```bash
cd /home/alfyus/Pictures
```
Questo comando ti porta direttamente nella directory `Pictures`.

## 📁 Navigare in una sottocartella
Se sei già nella directory genitore, puoi usare un percorso relativo.

Esempio: se ti trovi in `/home/pete/Pictures` e esiste la cartella `Hawaii`:

```bash
cd Hawaii
```

Abbiamo usato solo il nome perché siamo già nella directory corretta.

## ⚡ Scorciatoie Essenziali di Navigazione
La shell offre scorciatoie utilissime:
. → directory corrente

.. → directory genitore

~ → home directory (es. /home/pete)

- → directory precedente

Provale per diventare più veloce nella navigazione da terminale.
