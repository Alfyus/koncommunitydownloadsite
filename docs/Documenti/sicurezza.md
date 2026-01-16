## Sicurezza del tuo Computer

<Badge type="tip" text="Ultimo aggiornamento: 16 Gennaio 2026" />

::: info SCOPO DEL DOCUMENTO
 Questa guida è stata concepita per il ripristino e la bonifica di sistemi infetti che mantengono la capacità di avvio. Se il sistema è completamente bloccato, le procedure qui descritte potrebbero non essere applicabili.
 :::

::: warning ⚠️ VERIFICA DELLA VALIDITÀ
 Il panorama delle minacce informatiche evolve quotidianamente. Controlla sempre la data di ultimo aggiornamento in cima alla pagina
:::

## File e scan di URL
* [**VirusTotal**](https://www.virustotal.com/gui/home/upload) <Badge type="warning" text="Gratuito" />
* [**Kaspersky Cloud**](https://opentip.kaspersky.com/) <Badge type="warning" text="Molte funzioni a pagamento" />
* [**Hybrid Analysis**](https://hybrid-analysis.com/) <Badge type="warning" text="Simile a VirusTotal" />

## Antivirus

:::info 
🛡️I software antivirus tradizionali sono spesso considerati bloatware (software pesanti che rallentano il sistema). Se utilizzi esclusivamente fonti affidabili per scaricare giochi e programmi, la protezione integrata di Windows Defender unita a una scansione periodica con Malwarebytes è tutto ciò di cui hai bisogno. 

⚠️Regola d'oro: Ricorda di scansionare sempre i file di setup e installazione prima di eseguirli, utilizzando strumenti come VirusTotal, Kaspersky Cloud, Malwarebytes o lo stesso Windows Defender.  

🏴‍☠️Purtroppo nel mondo della pirateria spesso file NON dannosi vengono visti dall'Antivirus come dannosi.
:::

* [**Malwarebytes**](https://www.malwarebytes.com/mwb-download/thankyou/)

::: tip CONSIGLIO DI CONFIGURAZIONE
La strategia migliore consiste nell'utilizzare la versione gratuita di Malwarebytes insieme a Windows Defender. 
:::

* **Perché questa scelta?** Questa configurazione ti permette di eseguire scansioni on-demand estremamente accurate (con Malwarebytes) sfruttando contemporaneamente l'eccellente protezione in tempo reale di Windows Defender.

* **Zero Conflitti:** I due software lavorano in sinergia senza rallentare il sistema o creare conflitti tecnici, garantendo una copertura di sicurezza completa e leggera.

Se cerchi un'alternativa solida a Windows Defender, [**BitDefender**](https://www.bitdefender.com/en-us/consumer/free-antivirus) è una delle soluzioni più affidabili sul mercato.

::: tip WORKAROUND LICENZA 
Puoi sfruttare la prova gratuita per accedere a tutte le funzionalità avanzate. Una volta terminato il periodo di prova, è possibile rinnovare l'accesso creando un nuovo account per iniziare un nuovo ciclo di prova gratuita. 
:::

## Rimuovere Malware dal Computer

::: danger ⚠️ SICUREZZA DEL SISTEMA OPERATIVO
**Windows 10 e versioni precedenti non sono più supportati da Microsoft e sono considerati NON SICURI.** L'assenza di patch di sicurezza espone il tuo PC a vulnerabilità critiche.
:::

### 🚀 Passaggio a Windows 11
Se possiedi una licenza **LEGITTIMA** di Windows 10, puoi ancora ottenere un aggiornamento gratuito a Windows 11 utilizzando l'[Assistente per l'aggiornamento di Windows 11](https://www.microsoft.com/software-download/windows11) di Microsoft. Ad oggi, Microsoft permette ancora di effettuare il passaggio senza costi aggiuntivi.

#### Note importanti prima di procedere:

| Azione | Descrizione |
| :--- | :--- |
| **Pulizia** | Esegui l'aggiornamento solo **DOPO** che il sistema è stato completamente pulito dai malware. |
| **Backup** | Crea un'immagine di sistema su un disco esterno tramite *Backup e ripristino* nel Pannello di Controllo. |
| **Requisiti** | Se il tuo PC non soddisfa i requisiti minimi, [clicca qui per una soluzione](https://github.com/AveYo/MediaCreationTool.bat). |

::: tip CONSIGLIO
Non saltare mai il passaggio del backup. In caso di errori durante l'aggiornamento, avrai la certezza di non perdere i tuoi dati.
:::

## 🎯 Scopo e Ambito della Guida

::: info OBIETTIVO
Questa guida è stata creata per assistere nella rimozione di malware da sistemi infetti che riescono ancora ad effettuare il boot correttamente.
:::

Se segui i passaggi esattamente come descritti, risolverai il problema in oltre il **90% degli scenari**. Tuttavia, è importante tenere a mente quanto segue:

* **Limiti della guida:** Se il computer è completamente impossibilitato ad avviarsi a causa di un malware, questa guida non potrà aiutarti. In tal caso, ti consigliamo di procedere con la formattazione totale del Computer.
* **Selezione degli strumenti:** I tool raccomandati sono stati scelti per il loro alto tasso di successo e la bassa incidenza di errori, misurati su scala globale.

::: tip SEMPLICITÀ
Il linguaggio utilizzato è volutamente semplice e privo di tecnicismi eccessivi, per permettere a chiunque di seguire le istruzioni con facilità.
:::

## ⚖️ Disclaimer

::: danger ATTENZIONE
Le seguenti istruzioni sono fornite a solo scopo informativo. Ti assumi la **piena responsabilità** per qualsiasi operazione deciderai di eseguire sul tuo computer. 

Sebbene queste raccomandazioni siano state testate con successo su innumerevoli macchine, esiste sempre il rischio di danneggiare il Sistema Operativo o di incorrere in perdite di dati. È tua esclusiva responsabilità salvare il lavoro e **creare un backup di tutti i dati importanti** prima di procedere.
:::

---

## 🛠️ Passaggi per la Bonifica Malware

### Operazioni Preliminari
Prima di iniziare con i software, esegui queste operazioni nel tuo browser:
1. Controlla le **estensioni** e rimuovi tutto ciò che ti sembra sospetto.
2. Vai nelle impostazioni e rimuovi eventuali **motori di ricerca** predefiniti o **homepage** insolite.
*Se non sai come fare, procedi direttamente al Punto 1.*

### Istruzioni Generali per i Tool
Scarica ed esegui gli strumenti indicati nell'ordine esatto in cui sono presentati.

::: info LINEE GUIDA PER L'ESECUZIONE
* **Modalità:** Esegui tutti i tool in **Modalità Normale** (non Modalità Provvisoria), a meno che il sistema non sia impossibilitato ad avviarsi o le scansioni falliscano.
* **Permessi:** Tutti i programmi devono essere eseguiti con un account **Amministratore**.
* **Log:** Non eliminare i file di log generati dai programmi; potrebbero essere fondamentali se un tecnico dovrà aiutarti in seguito.
:::

### Step 1: RKill
Esegui **[rkill.com](https://www.bleepingcomputer.com/download/rkill/)**. L'operazione potrebbe richiedere alcuni minuti. **Non riavviare il computer al termine.**

::: warning NOTA IMPORTANTE
**RKill** termina i processi malevoli attivi, rimuove le policy nel registro che impediscono il corretto funzionamento del sistema e ripara i dirottamenti delle estensioni dei file.
* **Limiti:** Poiché l'ultimo aggiornamento risale al 2018, potrebbe non terminare i malware più recenti.
* **Utilità:** Le correzioni al registro e alle estensioni rimangono comunque efficaci contro molte minacce attuali.
:::

---

### Step 2: Malwarebytes
Scarica una copia aggiornata di **[Malwarebytes](https://www.malwarebytes.com/mwb-download)**. Prima di iniziare, entra nelle impostazioni e attiva l'opzione **"Scan for Rootkits"** (Scansione per Rootkit). Successivamente, avvia la scansione.

#### Perché utilizzare Malwarebytes:
* **Efficacia:** Rimuove con successo la stragrande maggioranza delle infezioni conosciute.
* **Velocità:** Possiede un motore euristico e di scansione all'avanguardia e fulmineo.
* **Riparazione:** Include strumenti integrati per riparare i danni causati dal malware al sistema operativo.

::: tip CONSIGLIO
Lascia che Malwarebytes metta in quarantena
:::

### Step 3: Malwarebytes ADWCleaner
Esegui [**ADWCleaner**](https://toolslib.net/downloads/viewdownload/1-adwcleaner/) e clicca sul pulsante **"Scansiona ora"**. 

#### Caratteristiche principali:
* **Pulizia Browser:** Rimuove la maggior parte di adware, PUP (programmi potenzialmente indesiderati), toolbar e dirottatori del browser (*hijacks*).
* **Gestione Bloatware:** Scansiona il software pre-installato e ti permette di metterlo in quarantena.
* **Ripristino Rete:** Corregge le impostazioni proxy alterate dai malware.
* **Reset Impostazioni:** Rimuove configurazioni del browser non predefinite introdotte da software malevolo.

---

### Step 4: Analisi Avanzata (Opzionale)
::: warning ATTENZIONE
Esegui questo passaggio solo se i tool precedenti non hanno risolto completamente il problema.
:::

#### Sophos HitmanPro
[**HitmanPro**](https://www.hitmanpro.com/en-us/downloads) è uno scanner di "seconda opinione". 
* **Tip:** Vai in "Impostazioni" e scollega la voce **"Scansiona cookie di tracciamento"** prima di iniziare. Questo ridurrà drasticamente i tempi di scansione.
* **Nota sulla licenza:** Questo strumento può essere eseguito gratuitamente **UNA SOLA VOLTA**. Usalo con saggezza.

---

### 🌐 Problemi di Connessione?
Se il malware ti impedisce di navigare o scaricare file, prova a utilizzare [**Complete Internet Repair**](https://rizonesoft.com/downloads/complete-internet-repair/) o [**NetAdapter Repair All-In-One**](https://www.bleepingcomputer.com/download/netadapter-repair-all-in-one/) (selezionando tutte le opzioni). 
* Questi tool tenteranno di ripristinare la connessione internet e le impostazioni predefinite del browser. 
* *Potrebbe essere necessario scaricarli da un altro computer e trasferirli tramite chiavetta USB.*

---

### 🛠️ Workaround per Windows (Analisi Manuale)
Se riscontri ancora anomalie, segui questa procedura tecnica:

1. [**System Informer:**](https://systeminformer.sourceforge.io/) Scarica e avvia il programma. Se noti un'applicazione che consuma troppa CPU/risorse, esegui una scansione completa con **Malwarebytes**.
2. **Riavvio:** Esegui un **RIAVVIO** completo (non spegnere e riaccendere).
3. [**MRT:**](https://www.microsoft.com/en-us/download/details.aspx?id=16) Esegui lo strumento di rimozione malware di Windows (*Strumento di rimozione software dannoso*).
4. **Safe Mode:** Riavvia tenendo premuto il tasto `Shift`, entra in **Modalità Provvisoria** e verifica se il problema persiste.

::: danger ULTIMA SPIAGGIA
Se dopo tutti questi passaggi il problema riappare, sarà necessario procedere con un **formattazione pulita** del sistema o verificare l'integrità dell'hardware.
:::

---

## 🍎 Pensi che il tuo Mac sia infetto?
Sebbene meno comuni, le infezioni su macOS esistono.

Prova **[Malwarebytes Anti-Malware per Mac](https://www.malwarebytes.com/mac)**.

---

## ✅ Conclusione della Bonifica
Se hai eseguito con successo tutti gli strumenti sopra elencati, il tuo sistema dovrebbe ora essere pulito. 

---

## 📂 Scanner on-demand per file grandi (> 650 MB)
Se devi analizzare singoli file che superano il limite di caricamento di VirusTotal (solitamente 650 MB), utilizza questi strumenti affidabili:

* [**Kaspersky Virus Removal Tool (KVRT)**](https://devbuilds.s.kaspersky-labs.com/devbuilds/KVRT/latest/full/KVRT.exe)
* [**ESET Online Scanner**](https://download.eset.com/com/eset/tools/online_scanner/latest/esetonlinescanner_enu.exe)
* [**Emsisoft Emergency Kit**](https://dl.emsisoft.com/EmsisoftEmergencyKit.exe)
* [**Norton Power Eraser**](https://buy-download.norton.com/downloads/premium_services/NPE/x64/prod/NPE.exe)
* [**Comodo Cleaning Essentials**](http://download.comodo.com/cce/download/setups/cce_x64.zip)+ [Aggiornamento](https://download.comodo.com/cis/download/installs/8060/xml_binaries/killswitch_cce/cks_cce_x64.7z) (Estrai nella directory e sostituisci i file)
* [**HitmanPro**](https://files.surfright.nl/HitmanPro_x64.exe)
* [**MalwareBytes**](https://downloads.malwarebytes.com/file/mb4_offline)
* [**AdwCleaner**](https://toolslib.net/downloads/finish/1-adwcleaner/2323/)
* [**RogueKiller**](https://www.adlice.com/download/roguekiller/#download) (Clicca su "Portable 64 Bits")

---

## 🛡️ Passaggi successivi (Altamente Raccomandati)
Una volta rimosso il malware, non abbassare la guardia. Segui questi step fondamentali per mettere in sicurezza la tua identità digitale:

1. **🔒 Cambia le Password:** Utilizzando un computer **non infetto**, cambia le password di tutti i tuoi account online (email, social, banche, ecc.).
2. **📱 Attiva l'MFA:** Abilita l'autenticazione a due fattori (2FA) su ogni account che lo supporta. È la tua difesa più forte contro i furti di identità.
3. **🛡️ Migliora l'Antivirus:** Assicurati di avere una soluzione di sicurezza attiva e aggiornata (fai riferimento ai consigli all'inizio di questa guida).

::: tip SICUREZZA
Cambiare le password da un computer ancora infetto è inutile, poiché il malware potrebbe registrare le nuove credenziali tramite un keylogger. Fallo solo a sistema pulito o da un altro dispositivo sicuro.
:::

## ❓ Comprendere il Malware

### Cos'è il Malware?
**Malware** è un termine generico (unione di *malicious* e *software*) utilizzato per descrivere varie forme di software ostile o intrusivo. Questa categoria include:

* **Virus e Worm:** Programmi che si replicano e si diffondono.
* **Trojan Horse:** Software malevolo travestito da programma legittimo.
* **Ransomware:** Cripta i tuoi file e chiede un riscatto.
* **Spyware e Adware:** Software che spiano i tuoi dati o inondano il sistema di pubblicità.
* **PUP:** Programmi potenzialmente indesiderati che rallentano il PC.

Può presentarsi sotto forma di codice eseguibile, script, contenuti attivi o altro software malevolo.

---

### Come è avvenuta l'infezione?
Individuare la fonte esatta è spesso difficile, ma la dinamica è quasi sempre la stessa:

1.  **Consenso dell'utente:** La maggior parte delle infezioni avviene perché l'utente concede (spesso inconsapevolmente) il permesso di esecuzione al file.
2.  **Exploit del Browser:** Vulnerabilità nel browser o nei plug-in di siti web compromessi.
3.  **Download non sicuri:** Software scaricato da fonti non ufficiali o tramite pubblicità ingannevoli.

::: tip DIFESA ATTIVA
Mantieni sempre attivo il **Controllo Account Utente (UAC)** di Windows e non fornire mai permessi di amministratore a software di cui non ti fidi ciecamente.
:::

---

## 🛡️ Come prevenire future infezioni

La prima linea di difesa sei **tu**. Segui queste regole d'oro per mantenere il sistema sicuro:

* **Attenzione ai Download:** Scarica programmi esclusivamente dal sito ufficiale del produttore.
* **Software Aggiornato:** Mantieni sempre aggiornato il sistema operativo e tutte le applicazioni installate.
* **Usa Ninite:** Per installare o aggiornare i software comuni, ti consigliamo **[Ninite](https://ninite.com/)**. È sicuro, facile e utilizza installer ufficiali eliminando automaticamente bloatware o software extra.
* **Windows Update:** Non ignorare gli aggiornamenti di Windows; molti di essi servono a tappare falle di sicurezza (*exploit*) usate dai malware per entrare nel sistema.

::: info CONCLUSIONE
La maggior parte dei malware diventa attiva perché riceve i permessi di Amministratore dall'utente. Sii critico e prudente: se non hai richiesto un'azione o non conosci la fonte, non cliccare.
:::

## 🛡️ Come evitare i Malware: Guida al Download Sicuro

### 🏴‍☠️ Il rischio del Software Pirata
Se hai intenzione di scaricare software o giochi, evita categoricamente siti come **The Pirate Bay**. 
* Questi portali ospitano un'immensa quantità di torrent falsi caricati appositamente per infettare gli utenti.
* Il rischio di compromettere l'intero sistema non vale il risparmio economico del software scaricato.

---

### 📂 Analisi dei File Torrent
Anche se utilizzi siti torrent considerati "affidabili" per file non eseguibili (come film o musica), è fondamentale adottare misure preliminari per evitare file contraffatti.

#### L'esempio dei file Video
Sebbene sia tecnicamente possibile nascondere malware ovunque, è raro trovarlo direttamente all'interno di un file video o musicale, a meno che non venga sfruttato un exploit di un player specifico non aggiornato. Tuttavia, i criminali usano trucchi psicologici:

1.  **Falsi Eseguibili:** Se stai cercando un film e trovi un file `.exe`, cancellalo immediatamente. Un video non sarà mai un file eseguibile.
2.  **La trappola dei "Codec":** Un vettore di attacco comune sono i video che mostrano un messaggio del tipo: *"Scarica il codec X per visualizzare correttamente questo video"*. Nella cartella troverai un link o un eseguibile: **è sempre un malware**.
3.  **File SFX:** Fai attenzione ai file con estensione **.sfx** (*Self-Extracting Executables*). Sono archivi auto-estraenti che si comportano come programmi. Non avviarli mai se non ti fidi ciecamente della fonte.

::: tip DIFESA PREVENTIVA
La strategia migliore è utilizzare programmi sempre aggiornati (come **VLC**) per la riproduzione multimediale. I player moderni includono già tutti i codec necessari e sono patchati contro gli exploit che tentano di sfruttare file multimediali corrotti.
:::

::: danger REGOLA D'ORO
Se il contenuto richiede l'installazione di software aggiuntivo per essere "sbloccato" o visualizzato, eliminalo subito. È una trappola.
:::

## 🕵️ Tecniche di Camuffamento: Non farti ingannare

I malware spesso utilizzano trucchi visivi per indurti a cliccare. Ecco a cosa prestare massima attenzione:

### 1. Estensioni Nascoste
Windows, di default, nasconde le estensioni dei file conosciuti. Questo permette a un file chiamato `Documento.pdf.exe` di apparire semplicemente come `Documento.pdf`.
* **Cosa fare:** Vai nelle impostazioni di Esplora File e attiva l'opzione **"Mostra estensioni per i tipi di file conosciuti"**.
* **Controlla l'icona:** Se un file ha l'estensione di un video ma l'icona di un programma, è un eseguibile malevolo.

### 2. Trucchi di Naming Avanzati
* **RTL (Right-to-Left Override):** Una tecnica che inverte l'ordine dei caratteri. Un file chiamato `test_3pm.exe` può apparire come `test_exe.mp3`. [Approfondisci qui](https://en.wikipedia.org/wiki/Right-to-left_mark).
* **Attacchi IDN Homograph:** L'uso di caratteri di alfabeti diversi che sembrano identici a quelli latini (es. una "o" cirillica invece di una "o" latina) per falsificare nomi di siti o file.

---

### 3. La Trappola dei Collegamenti (.LNK)
Un vettore di attacco molto comune sono i collegamenti di Windows che puntano a script malevoli (Batch o PowerShell).
* **L'inganno:** Il file può chiamarsi `Filmato.avi`, ma è in realtà un collegamento.
* **Come riconoscerli:**  Nota la **piccola freccia** nell'angolo dell'icona.
    * Controlla la colonna **"Tipo"** in Esplora File: indicherà "Collegamento".
    * La dimensione del file è solitamente minuscola (pochi KB), anche se alcuni malware usano il "padding" (riempimento di zeri) per gonfiare artificialmente il peso del file e sembrare un video reale.

::: danger REGOLA D'ORO
Un download che si presenta come un collegamento (.lnk) è **sempre e comunque un malware**.
:::

---

### 🎥 Consigli per la Riproduzione Multimediale
I formati contenitore come `.wmv` e `.wma` permettono l'esecuzione di script, che Windows Media Player potrebbe tentare di avviare.

* **Usa Player Sicuri:** Ti consigliamo vivamente di usare **[VLC Media Player](https://www.videolan.org/vlc/)**. È open-source, sicuro e gestisce internamente i codec senza rischi.
* **Estensioni Pericolose:** Fai attenzione ai file con estensione **.scr** (Screen Saver). Tecnicamente sono file eseguibili identici ai `.exe` e vengono spesso usati per diffondere virus.
* **Formati standard:** Prediligi sempre formati moderni come `.mp4`, `.mkv` o `.avi`.

## 🎣 Phishing: Come riconoscere i link malevoli

Il phishing non avviene solo tramite email, ma anche attraverso messaggi sui social, SMS (Smishing) o falsi risultati sui motori di ricerca. L'obiettivo è rubare le tue credenziali o indurti a scaricare malware.

### 🚩 Segnali di Pericolo nei Link
Prima di cliccare su qualsiasi URL, effettua questi controlli rapidi:

1.  **Passa il mouse sopra il link:**
    Posiziona il cursore sopra un link senza cliccare. In basso a sinistra nel tuo browser apparirà l'indirizzo reale. Se il testo del link dice `www.tuabanca.it` ma il link reale punta a `bit.ly/paga-qui` o `sicurezza-banca-check.xyz`, è una truffa.

2.  **Errori di battitura:**
    I criminali registrano domini simili a quelli reali sperando in un tuo errore di distrazione.
    * **Reale:** `google.com`
    * **Falso:** `g00gle.com` o `google-support.net`

3.  **Sottodomini Ingannevoli:**
    Ricorda che la parte importante di un URL è quella subito prima dell'estensione (`.it`, `.com`).
    * **Sicuro:** `assistenza.amazon.it` (il dominio è amazon.it)
    * **Pericoloso:** `amazon.assistenza-clienti.it` (il dominio è assistenza-clienti.it)

---

### 🛠️ Strumenti di Verifica
Se hai ricevuto un link sospetto, non aprirlo nel browser. Usa questi strumenti di analisi:

| Strumento | Funzione |
| :--- | :--- |
| **[VirusTotal](https://www.virustotal.com/)** | Incolla l'URL nella sezione "URL" per scansionarlo con decine di database antivirus. |
| **[URLScan.io](https://urlscan.io/)** | Scatta una "foto" del sito senza che tu debba visitarlo, mostrandoti cosa succede dietro le quinte. |
| **[ExpandURL](https://www.expandurl.net/)** | Rivela la destinazione reale dei link abbreviati (come quelli `bit.ly` o `t.co`). |

::: danger 🚨 LA REGOLA D'ORO
Nessuna banca, servizio postale o ente governativo ti chiederà mai di inserire password o dati sensibili cliccando su un link inviato via SMS o email. In caso di dubbio, digita manualmente l'indirizzo del sito ufficiale nel browser.
:::

::: tip 💡 CONSIGLIO
Utilizza un'estensione come **uBlock Origin**. Oltre a bloccare la pubblicità, impedisce il caricamento di molti domini noti per il phishing e la distribuzione di malware.
:::
