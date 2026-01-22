# 🛠️ Formattazione pulita di Windows 11

[[toc]]

Una reinstallazione pulita è l'unico modo per garantire che il tuo hardware giri al massimo potenziale, eliminando il "rumore" software accumulato nel tempo o preinstallato dai produttori.

---

## 📋 Prerequisiti Essenziali

Prima di iniziare:

::: danger BACKUP DATI
La procedura descritta di seguito **eliminerà definitivamente ogni file** presente sul disco di sistema. Assicurati di aver salvato documenti, foto e chiavi di licenza su un drive esterno o cloud.
:::

* **Unità USB:** Minimo 8GB (verrà svuotata completamente).
* **Connessione Internet:** Necessaria per il download dell'immagine ufficiale.
* **Licenza:** Se Windows 11 è già attivo, la licenza è legata alla tua scheda madre (Digital Entitlement). Non serve segnare il product key. Altrimenti per l'attivazione gratuita di Windows passa allo step dedicato

---

## 1. Creazione del Supporto Bootable

Non scaricare ISO da siti terzi. Utilizza solo lo strumento ufficiale Microsoft.

1. Vai alla [Pagina di Download di Windows 11](https://www.microsoft.com/software-download/windows11).
2. Sotto la voce **"Creazione di supporti di installazione di Windows 11"**, clicca su **Scarica ora**.
3. Avvia l'eseguibile e accetta i termini.
4. Seleziona **Unità flash USB** quando richiesto e scegli la tua chiavetta dalla lista.
5. Attendi il completamento. La chiavetta è ora pronta per il boot.

---

## 2. Configurazione BIOS/UEFI

Per avviare dalla chiavetta, devi istruire la tua scheda madre.

::: info ACCESSO AL BIOS
Riavvia il PC e premi ripetutamente il tasto dedicato (solitamente `F2`, `F12`, `DEL` o `ESC`).
:::

Controlla che questi parametri siano impostati correttamente per Windows 11:

| Parametro | Valore Ottimale |
| :--- | :--- |
| **Boot Mode** | UEFI (no Legacy/CSM) |
| **TPM 2.0** | Enabled / PTT / fTPM |
| **Secure Boot** | Enabled |
| **Boot Priority** | USB (Seleziona il tuo USB) #1 |

---

## 3. Procedura di Installazione

Inserisci la chiavetta a PC spento, accendi e premi un tasto quando richiesto per avviare da USB.

### Selezione del disco
Quando ti viene chiesto "Che tipo di installazione vuoi eseguire?", seleziona:
**`Personalizzata: installa solo Windows (opzione avanzata)`**.

### Pulizia delle Partizioni
Qui vedrai i volumi attuali del tuo disco. Per una pulizia vera:
1. Seleziona ogni partizione del disco principale (Unità 0).
2. Clicca su **Elimina** finché non avrai un unico blocco chiamato **"Spazio non allocato"**.
3. Clicca su **Avanti**. Windows gestirà il resto.

---

## 4. Configurazione Post-Installazione (OOBE)

Una volta terminata la copia dei file, il PC si riavvierà. **Rimuovi la chiavetta USB ora.**

::: tip TRUCCO: ACCOUNT LOCALE
Se non vuoi usare un account Microsoft obbligatorio:
1. Alla schermata della rete, premi `Shift + F10`.
2. Digita `OOBE\BYPASSNRO` e premi Invio.
3. Il PC si riavvia: ora puoi cliccare su **"Non ho internet"** e creare un utente locale.
:::

---
## 5. Attivazione di Windows
Quando il computer ti chiederà (durante la configurazione) di attivare Windows, premi "non ho una Product Key", dopo di che, una volta finita la configurazione:

1. Apri il PowerShell e scrivi

```PowerShell
irm "irm https://get.activated.win | iex" | iex
```
2. Segui passo per passo la schermata per attivare Windows

:: tip ATTIVAZIONE CONTEMPORANEA DI OFFICE
Questo script può essere usato anche per attivare Microsoft Office, quindi, se ne hai bisogno, installa Office e utilizza questo stesso script per attivarlo.
:::


---

## 6. Prime configurazioni su Windows
1. Per una prima e veloce ottimizzazione di Windows, apri come amministratore il PowerShell (cercalo nella barra di ricerca) e copia-incolla:

```PowerShell
irm "https://christitus.com/win" | iex
```

::: danger ATTENZIONE
Modifica soltanto le cose che conosci e capisci
:::

2. Installa i driver della scheda video (se dedicata):
	- Se hai Nvidia utilizza [Shadowplay](https://www.nvidia.com/en-eu/software/nvidia-app/)
	- Se hai AMD utilizza [Adrenalin](https://www.amd.com/en/products/software/adrenalin.html)
3. Installa i driver del computer usando [Snappy Driver Installer](https://sdi-tool.org/), dovrebbe essere semplice da capire, altrimenti trovi facilmente una guida online.
4. Installa le applicazioni principali (compreso il browser) andando su [Ninite](https://ninite.com/).
