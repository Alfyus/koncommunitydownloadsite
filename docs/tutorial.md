# Tutorial
[[toc]]
## :heavy_exclamation_mark: Premessa

::: info IMPORTANTE
Gli elementi possono essere accompagnati da **tag** (es. <Badge type="warning" text="ENG" />, <Badge type="warning" text="LINUX" />) che ne specificano le proprietà. 

**Se non diversamente specificato, si applicano i seguenti standard:**

- 💻 **Software:** Versione per Windows.
- 🎬 **Video (Film/Serie/Anime):** Audio in lingua italiana.
  - *Nota: Il tag <Badge type="warning" text="SUB ITA" /> indica la presenza di sottotitoli.*
- 📄 **Documenti (Libri/Manga/Paper):** Formato PDF.

- 🕹️**Giochi:** Con <Badge type="warning" text="PCVR" />, Giochi che richiedono il collegamento del visore al PC per l'esecuzione.
:::

## 📦 Guida all'estrazione degli ZIP

::: info Software Consigliati
Per gestire gli archivi, utilizza uno dei seguenti programmi:
- [7-Zip](https://www.7-zip.org/) (Scelta raccomandata)
- [WinRAR](https://www.rarlab.com/)
:::

### Archivi Multi-parte (`.001`, `.002`, ecc.)
Se il file è diviso in più segmenti, segui rigorosamente questi passaggi:

1. **Download Totale:** Scarica tutte le parti del file (es. `.001`, `.002`).
2. **Unica Cartella:** Sposta tutti i file nella stessa directory.
3. **Azione:** Clicca col tasto destro **solo sul primo file** (`.001`) e seleziona "Estrai".
   - *Il software ricomporrà automaticamente l'intero pacchetto.*

---

## 🎥 Film
La suddivisione dei file dipende esclusivamente dalle dimensioni del contenuto:

* **Film leggeri:** Forniti in un **unico file** video.
* **Film più pesanti:** Divisi in **due parti** (Parte 1 e Parte 2) per ottimizzare il download. 

> Entrambe le parti sono file video nativi; non richiedono estrazione o ricomposizione, vanno semplicemente riprodotti in sequenza.

## 📖 Lettura Manga e Comic ([CBR])

Per i file contrassegnati dal tag <Badge type="warning" text="CBR" />, si consiglia l'utilizzo dei seguenti software dedicati:

| Sistema Operativo | Software Consigliato | Azione |
| :--- | :--- | :--- |
| **Windows** | [CDisplayEx](https://www.cdisplayex.com/) | Apri il file direttamente con il programma. |
| **Android** | [ComicScreen](https://play.google.com/store/apps/details?id=com.viewer.comicscreen) | Il file si aprirà automaticamente al click. |
| **iOS** | [Comic Book Viewer](https://apps.apple.com/us/app/comic-book-viewer/id957475715) | Il file si aprirà automaticamente al click. |
| **macOS** | [Simple Comic](https://apps.apple.com/app/simple-comic/id1497435571) | Apri il file scaricato con l'app. |
| **Linux** | [Calibre](https://calibre-ebook.com/) | Importa e apri il file nella libreria. |

::: info NOTA SUI FORMATI
Sebbene lo standard sia il PDF, i manga in formato specifico CBR sono segnalati nell'indice con il tag `[CBR]`.
:::

## 📖 Lettura Libri (PDF & EPUB)

::: info Standard di Formato
Se il titolo di un libro non specifica esplicitamente il tag <Badge type="warning" text="EPUB" />, il file è da intendersi in formato **PDF**.
:::

| Piattaforma | Software Consigliato | Supporto |
| :--- | :--- | :--- |
| **Mobile (iOS/Android)** | [ReadEra](https://readera.org/) | PDF + ePub |
| **Desktop (Win/Linux)** | [Okular](https://okular.kde.org/) | PDF + ePub |
| **Desktop (Win/Mac/Linux)** | [Thorium Reader](https://www.edrlab.org/software/thorium-reader/) | PDF + ePub |

> [!TIP]
> **ReadEra** è particolarmente consigliato su Android per la sua gestione fluida delle librerie miste senza pubblicità.

## 📱 Installazione file [XAPK]

I contenuti contrassegnati dal tag <Badge type="danger" text="XAPK" /> sono pacchetti Android avanzati che includono dati aggiuntivi (OBB) e non possono essere installati tramite il gestore standard.

**Procedura di installazione:**
1. **Tool Necessario:** Scarica e installa [XAPK Installer](https://play.google.com/store/apps/details?id=com.wuliang.xapkinstaller) dal Google Play Store.
2. **Esecuzione:** Apri l'app appena installata e seleziona il file `.xapk` scaricato.
3. **Completamento:** L'app gestirà automaticamente l'estrazione e l'installazione dei dati necessari.

::: danger ATTENZIONE
Non rinominare o tentare di aprire i file `.xapk` con l'installer di sistema, l'operazione fallirà sistematicamente.
:::

## 🖨️ Stampare / Ritagliare giochi da tavolo / carte

::: tip Contenuto degli Archivi
Tutti i file `.zip` includono la componentistica completa necessaria per il gioco. I file per **box e tabellone** sono ottimizzati per formati di stampa **A3 o superiori** per preservare la scala originale.
:::

### Standard di Produzione Consigliati
Per ottenere un risultato paragonabile a un prodotto commerciale, segui queste specifiche:

| Componente | Requisito Tecnico | Nota dell'Esperto |
| :--- | :--- | :--- |
| **Supporto** | Carta 200-250g (minima) | Garantisce rigidità a plance e segnalini. |
| **Finitura** | Laser Color / High-Res | Evita la sgranatura dei testi piccoli. |
| **Protezione** | Bustine (Sleeves) | Indispensabili per le carte per evitare l'usura. |

> [!IMPORTANT] Scalabilità
> Prima di stampare tutto il set, effettua una prova di stampa in bianco e nero su carta comune per verificare che le dimensioni dei componenti (es. le carte) siano compatibili con le bustine in tuo possesso.