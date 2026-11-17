# how to clone ic cards

10:32 PM

### how to clone ic cards

Cloning an **IC card** (integrated circuit card, often operating at **13.56 MHz** NFC/RFID) involves reading the card's Unique Identifier (UID) and stored memory sectors, then writing that data to a compatible rewritable blank card or emulating it on a device. [](https://www.youtube.com/watch?v=Ab%5FsDeUXe9s)

Note that cloning cards you do not own or without explicit authorization is illegal in most jurisdictions. Furthermore, modern cards with strong encryption (such as **MIFARE DESFire EV2/EV3**, **FeliCa** transit cards like Suica, or **EMV** payment cards) cannot be cloned using standard methods. 

#### 1\. Identify Your Card Type

Before selecting tools, determine which chip and frequency your card uses:

* **Unencrypted or Legacy IC Cards:** Cards like **NTAG** or **MIFARE Classic 1K/4K** are commonly used in older apartment fobs, gym passes, and basic office badges. Their UIDs and data sectors can often be read and copied. [](https://www.getkisi.com/blog/how-to-copy-access-cards-and-keyfobs)
* **Encrypted / High-Security IC Cards:** Cards using AES encryption (like **MIFARE DESFire**) or secure elements (like **FIDO2** keys and bank cards) require cryptographic keys that cannot be extracted or duplicated.
* **Low-Frequency ID Cards:** If your card operates at **125 kHz** (such as EM4100 or HID Prox), it is a basic ID card rather than a 13.56 MHz IC card and cannot be read by a smartphone.

#### 2\. Cloning Methods

##### Method A: Using an Android Smartphone (For Basic 13.56 MHz Cards)

Most modern Android phones have built-in NFC hardware capable of reading and writing basic 13.56 MHz tags. [](https://www.honor.com/sa-en/blog/how-to-copy-nfc-card-to-android/)

* **Install an NFC App:** Download an app like [MIFARE Classic Tool](https://play.google.com/store/apps/details?id=de.syss.MifareClassicTool&gl=us) or [NFC Tools](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc&gl=us).
* **Read the Original Card:** Enable NFC in your phone settings, open the app, and hold the original card against the back of the phone to dump its data. [](https://www.honor.com/uk/blog/how-to-copy-nfc-card-to-android/)
* **Write to a Blank Card:** Place a compatible rewritable blank card (such as a **UID-changeable "Magic" MIFARE card**) against the phone and write the saved dump file to it. _(Note: Standard smartphones generally cannot emulate a card's UID directly to a door reader without root access or built-in OEM wallet support.)_ [](https://www.youtube.com/shorts/wGJoM%5FP5ags)

##### Method B: Using a Dedicated USB Reader/Writer

For cards with sector keys that require computer-based recovery tools, a USB NFC reader connected to a PC is standard. [](https://www.getkisi.com/blog/how-to-copy-access-cards-and-keyfobs)

* **Hardware Needed:** An NFC reader/writer (such as the  

**[ACR122U](https://www.google.com/search?ibp=oshop&prds=pvt%3Ahg%2Cpvo%3A29%2Cmid%3A576462357749905905%2CimageDocid%3A2736271469650240672%2Cgpcid%3A17762852168818710597%2CheadlineOfferDocid%3A3208713233666487973%2Ccatalogid%3A6421431842209507519%2CproductDocid%3A13316476174315967035%2Crds%3APC%5F17762852168818710597%7CPROD%5FPC%5F17762852168818710597&q=product&sa=X&ved=2ahUKEwix9taFvo6YAxUelq8BHUdBDcsQxa4PegcIAAiWARAD&gl=us)**  
 or a  

**[Proxmark3](https://www.google.com/search?ibp=oshop&prds=pvt%3Ahg%2Cpvo%3A29%2Cmid%3A576462654301721778%2CimageDocid%3A14161857556382167371%2Cgpcid%3A11934649491734609741%2CheadlineOfferDocid%3A14486617127359662478%2Ccatalogid%3A10351087406143330598%2CproductDocid%3A10482927945802192925&q=product&sa=X&ved=2ahUKEwix9taFvo6YAxUelq8BHUdBDcsQxa4PegcIAAiWARAE&gl=us)**  
) and a blank **CUID/UID-rewritable card** matching the original card's memory size.
* **Software:** Open-source utilities like **libnfc** or Proxmark client software are used to read the sectors, recover keys if applicable, and write the complete image (including Block 0, which holds the UID) onto the blank card. [](https://www.getkisi.com/blog/how-to-copy-access-cards-and-keyfobs)

##### Method C: Handheld Multi-Frequency Copiers

Dedicated standalone duplicators (such as the 

**[Chameleon Ultra](https://www.google.com/search?ibp=oshop&prds=pvt%3Aa%2Cpvo%3A29%2Cmid%3A576462860723339371%2CimageDocid%3A15683431262576732351%2Cgpcid%3A6283472385105732215%2CheadlineOfferDocid%3A15947280934977074697%2Ccatalogid%3A233540643941039831%2CproductDocid%3A14581792456247060667%2Crds%3APC%5F6283472385105732215%7CPROD%5FPC%5F6283472385105732215&q=product&sa=X&ved=2ahUKEwix9taFvo6YAxUelq8BHUdBDcsQxa4PegcIAAigARAB&gl=us)**

, 

**[Flipper Zero](https://www.google.com/search?ibp=oshop&prds=pvt%3Ahg%2Cpvo%3A29%2CimageDocid%3A12458462878139699724%2Cgpcid%3A1141993890162041010%2CheadlineOfferDocid%3A13927622809684465180%2Ccatalogid%3A1667614619666502163%2CproductDocid%3A6893922365893923227&q=product&sa=X&ved=2ahUKEwix9taFvo6YAxUelq8BHUdBDcsQxa4PegcIAAigARAC&gl=us)**

, or handheld RFID/IC copiers) simplify the process without requiring a computer for basic cards. [](https://www.youtube.com/watch?v=vSKjnWK7j-E)

* **Read and Save:** Place the original card on the device's antenna to scan and store the card profile.
* **Write or Emulate:** Either write the saved profile onto a compatible blank IC card or use the device's built-in **emulation mode** to act as the card directly at a reader. [](https://www.youtube.com/watch?v=vSKjnWK7j-E)

#### Key Technical Limitations

* **Block 0 / UID Locking:** Standard blank MIFARE cards have a read-only manufacturer block (Block 0). If an access reader checks the card's UID, you must use special **"Magic" Gen1a or Gen2 (CUID)** blank cards that allow Block 0 to be overwritten.
* **Rolling Codes and Backend Checks:** Some access systems update a counter on the card every time it is tapped. If a cloned card and an original card are used alternately, the system may detect the mismatch and automatically blacklist both cards.

If you are working with a specific card or access system, let me know:

* The **card model or chip type** (e.g., MIFARE Classic, NTAG, DESFire)
* Whether your goal is **backing up an owned access badge** or **auditing a reader's security**

I can help explain the specific compatibility requirements or security protections for that card type.

* [](https://zigzaglife.net/mifare-clone-card/)  
zigzaglife.net  
Mifare Classicカードをコピーしてクローンカードを作る | ZIGZAGLIFE  
Libnfc-supported reader. UID-rewriteable blank card, Ubuntu PC, original card. \* Tools: mfoc-hardnested (crack keys/dump), libnfc-
* [](https://www.honor.com/sa-en/blog/how-to-copy-nfc-card-to-android/)  
HONOR  
How Can Android Copy NFC Cards: Your Tech Guide - HONOR SA  
Go to “Settings” > “Connections” > “Connected Devices” > “NFC” NFC Tools: A versatile app that lets you read and write NFC tags, a...
* [](https://www.cupass.com/en/learn/how-to-clone-rfid-card.html)  
www.cupass.com  
How to Clone an RFID Card (2026)  
Phones can read 13.56 MHz NFC tags (NTAG, Mifare) using NFC, but cannot clone 125 kHz RFID cards phones operate at 13.56 MHz only.

Show all

## You sent: 1 image

10:44 PM

### 1 image

Based on the screenshot from **NFC Tools**, your card is an **NXP MIFARE Classic 1K** (emulated over a smart card/ISO 14443-4 interface, indicated by the **SAK value `0x28`** and **IsoDep** support).

#### Key Technical Details from Your Scan

* **Chip Type:** **MIFARE Classic 1K** with **1 kByte** of memory divided into **16 sectors of 4 blocks each**.
* **UID (Serial Number):** A **4-byte UID** (`FA:6B:18:55`).
* **Smart Card / Dual-Interface Emulation:** The **SAK `0x28`** and **ATS** values indicate this is likely a **JCOP**, **SmartMX**, or **MIFARE Plus** card running in MIFARE Classic 1K emulation mode rather than a standard standalone MIFARE Classic chip.

#### Compatibility & Cloning Considerations

* **App Limitation:** **NFC Tools** only reads basic tag metadata and NDEF records. To view or back up the 16 memory sectors of a MIFARE Classic card on Android, you must use **MIFARE Classic Tool (MCT)**.
* **Blank Card Requirement:** If you are creating a physical backup of a card you own, you will need a **4-byte UID-changeable "Magic" MIFARE Classic 1K blank card** (specifically a **Gen2 / CUID** card if you plan to write it using an Android phone, as Gen1a cards require special backdoor commands that Android NFC controllers cannot send).
* **Potential Dual-Application Issue:** Because the card reports **IsoDep (ISO 14443-4)** alongside MIFARE Classic, the reader system may check the **ATS (Answer To Select)** response or communicate with a separate smart-card applet on the chip. A standard MIFARE Classic 1K clone only copies the 16 sectors and UID—it cannot replicate IsoDep/ATS responses or secure JavaCard applets.
* **Sector Encryption:** MIFARE Classic 1K uses **Crypto-1** keys (Key A and Key B) on each of its 16 sectors. If the card uses default manufacturer keys, an Android app can read the sectors directly. If custom keys are set, reading the data requires specialized hardware and key-recovery tools.

If you'd like to narrow down your options, let me know:

* Whether the reader system uses **only the MIFARE Classic sectors/UID** or relies on the **smart card (IsoDep) layer**
* If you have already tried reading the sectors with **MIFARE Classic Tool**

I can help you check whether a standard CUID blank card will work for your backup.

## How to dump it

How to dump it

10:47 PM

### How to dump it

To dump the **MIFARE Classic 1K** sectors from your card, you need to use **MIFARE Classic Tool (MCT)** on an Android device with an **NXP NFC controller** (most modern Android phones, except some older Samsung/Pixel models with Broadcom chips, support MIFARE Classic hardware commands).

Note that you should only dump cards you own or have explicit permission to back up.

#### Step 1: Read the Card with MIFARE Classic Tool (MCT)

* **Install the App:** Download **MIFARE Classic Tool** from the Google Play Store or F-Droid.
* **Select Read Tag:** Open MCT and tap **Read Tag** on the main menu.
* **Choose Key Files:** Select `std.keys` and `extended-std.keys` (these contain common default manufacturer keys like `FFFFFFFFFFFF` and `A0A1A2A3A4A5`).
* **Scan and Save:** Hold the card steady against the back of your phone's NFC antenna until the progress bar finishes, then tap the **Save** icon to store the `.mct` dump file.

#### Step 2: Check for Unreadable Sectors

* **Inspect the Dump:** Open your saved dump in MCT's editor. Each of the **16 sectors (0–15)** contains **4 blocks**.
* **Identify Missing Keys:** If all blocks show hexadecimal data, the card used default keys and your dump is complete. If any sectors show **"No keys found (or dead sector)"**, those sectors are protected by custom **Crypto-1** keys that a smartphone app cannot extract on its own.

#### Step 3: If Custom Keys Are Used (Hardware Method)

Because your card is a **SmartMX / JCOP** chip (`SAK 0x28`), standard nested attacks may behave differently than on a standard standalone MIFARE Classic chip:

* **Reader Hardware:** You will need a dedicated USB reader like a **Proxmark3** (Easy or RDV4) or an **ACR122U**.
* **Key Recovery:** Using the Proxmark3 client (`hf mf autopwn`), you can run dictionary checks and side-channel attacks (such as **Darkside**, **Nested**, or **Hardnested**) to recover custom keys from the card's Crypto-1 authentication.
* **IsoDep Limitation:** Keep in mind that dumping MIFARE Classic only captures the 1 KB MIFARE emulation layer. If the system also uses the **ISO 14443-4 (IsoDep)** smart card applet, that protected application data cannot be dumped.

Once you run a scan in **MIFARE Classic Tool**, let me know:

* Whether all **16 sectors** read cleanly or if some report **missing keys**
* What you plan to do with the dump (e.g., **analyzing the data structure** or **writing to a CUID backup card**)

I can help you interpret the block layout or walk through the next steps.

## How long will it take, no progress

How long will it take, no progress

10:50 PM

### How long will it take, no progress

Reading a card in **MIFARE Classic Tool (MCT)** normally takes **2 to 10 seconds** when using `std.keys` and `extended-std.keys`. If the progress bar is stuck at zero or does not move at all, the read process has stalled.

#### Why It Is Stalled (and How to Fix It)

* **Reduce the Key File List:** If you selected too many key files at once, MCT tests every key against all 16 sectors sequentially, which can take several minutes or cause a timeout. Uncheck everything except **`std.keys`** first to test if the card responds quickly.
* **ISO 14443-4 (`SAK 0x28`) Interference:** Because your card is a dual-interface **SmartMX / JCOP** chip (`SAK 0x28`), Android's NFC stack sometimes connects to the **IsoDep** layer instead of the **MIFARE Classic** emulation layer, causing MCT to hang. Remove the card from the phone, close MCT completely, reopen it, and tap the card **only after** you are already on the key-selection screen and have pressed **Start Mapping and Read Tag**.
* **Phone NFC Chip Incompatibility:** Some smartphones (especially older Google Pixel models, certain Samsung devices, or phones with Broadcom/ST NFC controllers) do not support proprietary **MIFARE Classic** hardware commands. You can verify this inside MCT by tapping the three-dot menu and selecting **Device Info** (or **Check MIFARE Classic Support**).
* **Antenna Alignment & Case Thickness:** A thick phone case or slight movement breaks the inductive coupling mid-read, forcing MCT to restart sector mapping from zero. Remove your phone case and place the card flat against the upper-back or camera area of the phone without moving it.

If it still shows no progress, let me know:

* Your **phone model** (to verify if its NFC chip supports MIFARE Classic)
* What MCT displays under **Tools > Check MIFARE Classic Support**

I can help you troubleshoot the connection or suggest an alternative reader setup.

## What to do after reading

What to do after reading

10:52 PM

### What to do after reading

Once **MIFARE Classic Tool (MCT)** finishes reading your card, save the dump immediately and verify that every sector was captured completely before writing it to a backup card.

#### 1\. Save and Inspect Your Dump

* **Save the File:** Tap the **Save** (floppy disk) icon at the top of the dump screen and give the `.mct` file a clear name.
* **Verify All 16 Sectors:** Scroll through **Sector 0 to Sector 15** to confirm all blocks contain hexadecimal characters rather than `"No keys found (or dead sector)"`.
* **Check Sector 0, Block 0:** The very first line of Sector 0 contains your card's **4-byte UID** (`FA6B1855`) followed by manufacturer bytes (`BCC` checksum, `SAK`, and `ATQA`). Note that on your original SmartMX/JCOP card, Block 0 showed `SAK 28`, whereas standard MIFARE Classic cards use `SAK 08`.

#### 2\. Prepare a Compatible Blank Card

To create a working physical backup of an owned MIFARE Classic 1K card using an Android phone, you must use the right type of blank card:

* **Use a Gen2 (CUID) 4-Byte Card:** Standard blank MIFARE cards have a locked Block 0 and cannot copy your UID. Buy a **MIFARE Classic 1K Gen2 (CUID)** card or fob with a **4-byte UID**, which allows Android phones to overwrite Block 0 directly using normal write commands.
* **Avoid Gen1a (UID) Cards on Android:** Gen1a cards require special hardware backdoor commands to unlock Block 0 and cannot be written with a standard smartphone.

#### 3\. Write the Dump to the Blank Card

* **Open Write Tag:** In MCT's main menu, tap **Write Tag**, then choose **Write Dump (Clone)**.
* **Load Your Saved File:** Select the `.mct` dump file you just saved.
* **Select All Sectors Including Sector 0:** Check all sectors from **0 to 15**. If MCT warns you about writing to **Sector 0 / Block 0**, confirm that you want to include it so the UID is cloned.
* **Select Factory Keys:** When prompted for keys to authenticate against your **new blank CUID card**, select `std.keys` (since blank cards ship with default `FFFFFFFFFFFF` keys).
* **Hold Steady to Write:** Place the blank CUID card flat against the phone's NFC antenna and keep it still until MCT confirms the write succeeded.

#### 4\. Test and Verify the Backup

* **Read Back the Clone:** Use **Read Tag** in MCT on your newly written card to verify that its UID (`FA:6B:18:55`) and all 16 sectors match the original dump.
* **Test on the Reader:** Try the cloned card on the target reader. If the reader fails to recognize it despite an identical MIFARE dump, the system is likely checking the **ISO 14443-4 (IsoDep / SAK `0x28`)** smart-card layer rather than the MIFARE Classic emulation layer.

Once you inspect your saved dump, let me know:

* Whether **all 16 sectors** read cleanly without missing keys
* Whether you have a **blank CUID card** ready to write

I can help you troubleshoot any write errors or verify your Block 0 checksum if needed.

## No key on 0 to 7, same values from 8 too 15

No key on 0 to 7, same values from 8 too 15

10:52 PM

### No key on 0 to 7, same values from 8 too 15

The scan results tell us two important things about how this card is structured and secured:

* **Sectors 8 to 15 Are Empty:** Having identical values across Sectors 8–15 (usually all `00`s with default `FFFFFFFFFFFF` trailer keys) means the second half of the card is unformatted and holds no active application data.
* **Sectors 0 to 7 Are Encrypted:** Showing **"No keys found"** on Sectors 0–7 means those sectors are locked with **custom Crypto-1 keys** rather than factory defaults, which is where the actual access or balance data is stored.

#### Why a Smartphone Cannot Complete This Dump

* **No Key-Recovery Hardware:** An Android smartphone cannot run cryptographic side-channel attacks (such as **Nested** or **Hardnested** attacks) against MIFARE Classic Crypto-1 encryption. Without the custom keys for Sectors 0–7, writing only Sectors 8–15 to a blank card will result in an incomplete, non-working clone.
* **SmartMX / JCOP (`SAK 0x28`) Complications:** Because your card is a dual-interface smart card (`SAK 0x28`), its MIFARE Classic emulation often uses a **hardened random number generator (PRNG)**. Standard key-recovery tools like an inexpensive **ACR122U** frequently fail on `SAK 0x28` chips because weak-PRNG attacks do not work against them.

#### What Is Required for a Full Dump (Authorized Backups Only)

If you own the card and have authorization to back it up, extracting custom keys from a hardened `SAK 0x28` card requires dedicated RF hardware:

* **Proxmark3 Hardware:** A **Proxmark3** (such as the Proxmark3 Easy with Iceman firmware or RDV4) is required to run **Hardnested** attacks (`hf mf autopwn` or `hf mf hardnested`), which recover Crypto-1 keys even when the card uses a hardened PRNG.
* **Reader-Side Sniffing:** Alternatively, if a Hardnested attack takes too long, a Proxmark3 can sniff the RF communication between the original card and its legitimate door/terminal reader to capture the keys during authentication.
* **Check for IsoDep Usage:** Even after recovering Sectors 0–7, keep in mind that if the reader communicates over the **ISO 14443-4 (`IsoDep`)** smart-card applet rather than the MIFARE Classic memory sectors, a MIFARE Classic CUID card still will not replicate that secure element.

If you want to evaluate your next steps, let me know:

* Whether you have access to a **Proxmark3** or other dedicated NFC reader hardware
* What kind of system this card is used for (e.g., **building access**, **transit**, or **campus/office ID**)

I can help explain whether the system relies on the MIFARE Classic sectors or the IsoDep smart card layer.

## What's needed to clone it

What's needed to clone it

10:55 PM

### What's needed to clone it

To clone this specific card—an **NXP SmartMX / JCOP dual-interface card (`SAK 0x28`)** with custom encryption keys on **Sectors 0–7**—a smartphone alone is not enough. Assuming you own the card and have authorization to create a backup, you need specialized RF hardware and a specific type of blank card.

#### 1\. Required Hardware

* **Proxmark3 (Easy 512MB or RDV4):** You need a Proxmark3 running the **Iceman / RRG firmware**. Standard USB readers like the **ACR122U** usually fail on `SAK 0x28` cards because these chips use a hardened random number generator (PRNG) that blocks basic key-recovery attacks.
* **Computer with Proxmark3 Client:** A Windows, macOS, or Linux PC to connect the Proxmark3 via USB and run the recovery commands.
* **Compatible Blank Card (Gen2 / CUID 4-Byte):** You need a **MIFARE Classic 1K Gen2 (CUID)** blank card or keyfob with a **4-byte UID**. This allows both the Proxmark3 and Android phones to overwrite Block 0 (where the `FA:6B:18:55` UID is stored).

#### 2\. Why This Specific Setup Is Needed

* **Recovering Sectors 0–7:** Because Sectors 0–7 are locked with custom keys while Sectors 8–15 use default keys, the Proxmark3 uses a known default key from Sector 8 as a foothold to run a **Hardnested attack** (`hf mf hardnested` or `hf mf autopwn`), mathematically recovering the secret keys for Sectors 0–7.
* **Sniffing Fallback:** If the card's SmartMX chip resists offline Hardnested attacks, the Proxmark3 can be placed between the original card and the legitimate door reader to **sniff the RF handshake** (`hf 14a sniff`) and capture the keys directly during a normal tap.

#### 3\. Critical Limitation to Check First

* **IsoDep / Smart Card Layer (`SAK 0x28`):** Your screenshot shows the card supports **IsoDep (ISO 14443-4)** alongside MIFARE Classic. A CUID blank card only replicates the **1 KB MIFARE Classic memory** and UID. If the reader system communicates with the secure JavaCard/SmartMX applet over IsoDep (common in transit cards, banking cards, and high-security corporate badges), the card **cannot be cloned** even with a Proxmark3.

To help you determine if a Proxmark3 setup will actually work before you buy any hardware, let me know:

* What **system or device** reads this card (e.g., an apartment door lock, office turnstile, or transit/payment terminal)
* Whether you want to check how to **sniff or test** which protocol the reader uses

I can help you confirm whether the card relies on the cloneable MIFARE Classic sectors or the uncloneable IsoDep applet.

## A campus card that can pay

A campus card that can pay

10:59 PM

### A campus card that can pay

Because this is a **campus card with payment functionality**, **it cannot be fully cloned**—even with specialized hardware like a Proxmark3.

Campus payment cards use a **dual-interface architecture** (which explains why your scan showed both **MIFARE Classic 1K** and **IsoDep / SAK `0x28`**) to separate low-security building access from high-security financial transactions.

#### How Your Campus Card Splits Functions

* **MIFARE Classic Layer (Sectors 0–7):** Often handles basic campus functions like **dormitory doors**, **library turnstiles**, or **printer quotas**. While a Proxmark3 could theoretically recover the custom keys on Sectors 0–7 to copy this portion onto a CUID blank card, doing so may violate your university's terms of service or trigger anti-cloning lockouts.
* **IsoDep / SmartMX Secure Element (`SAK 0x28`):** Handles the **stored-value wallet and campus payments**. This layer runs an encrypted **JavaCard / PBOC / EMV** applet inside a hardware-protected secure element. Its cryptographic keys never leave the chip and cannot be read, dumped, or copied onto any blank card.

#### Important Risks to Consider

* **Counter & Balance Mismatches (Blacklisting):** Even if the payment balance were stored on the MIFARE Classic sectors (rare in modern systems, but used in some older campuses), every purchase updates an encrypted transaction counter on the card and the campus server. Using a cloned card alongside the original causes a balance mismatch that immediately **flags and permanently freezes your student account**.
* **Campus Policy & Legal Restrictions:** Duplicating payment instruments or campus credentials is typically a violation of student conduct codes and financial regulations, even if you only intend to make a personal backup.

#### Safer Alternatives

* **Official Campus Mobile Wallet / NFC:** Many universities allow students to add their campus ID to **Apple Wallet**, **Google Wallet**, or an official campus app for phone-based tap access and payments.
* **Official Replacement Card:** If you are worried about losing your card, check with your campus card office about getting a secondary badge or requesting a replacement, as they can deactivate a lost card and transfer your balance safely.

If you'd like to explore official options for convenience or backup, let me know:

* Whether you are trying to **add the card to your phone** for tap access/payments
* If you only need access to a **specific door or locker** rather than the payment feature

I can help check if your university supports mobile credentials or explain how those specific readers work.

## What about for lib turnstiles

What about for lib turnstiles

11:01 PM

### What about for lib turnstiles

For **library turnstiles**, whether a copy of the MIFARE Classic portion works depends on **which interface the library turnstile reader communicates with** and how your university's access system is configured.

Even for non-payment access like library turnstiles, duplicating a university-issued credential generally violates campus IT and student conduct policies and can result in your account being suspended.

#### How Library Turnstiles Typically Authenticate

* **Scenario 1: UID-Only Check (Low Security):** Some older library turnstiles only read the card's **4-byte UID** (`FA:6B:18:55`) to check against an active student database. In this setup, the encrypted sectors are not even read by the gate.
* **Scenario 2: MIFARE Classic Sector Check (Medium Security):** Many campus gates read a student ID number or access bit stored inside **Sectors 0–7** using the custom Crypto-1 keys. Because Sectors 0–7 on your card are encrypted, a smartphone cannot read them—only a **Proxmark3** running a Hardnested attack or RF sniff could extract those keys.
* **Scenario 3: IsoDep / CPU Card Applet Check (High Security):** Modern university systems use the **ISO 14443-4 (`IsoDep` / `SAK 0x28`)** smart-card layer even for library turnstiles to prevent student card sharing. If the turnstile communicates via `IsoDep` rather than MIFARE Classic, a standard CUID blank card will be completely ignored by the gate.

#### Key Risks with Turnstile Cloning

* **Anti-Passback & Entry/Exit Logs:** Library turnstiles almost always enforce **anti-passback** rules (logging when a card enters so it cannot be tapped twice to let two people in). If your card is flagged for irregular entry/exit states or detected with a mismatched `SAK` value (`0x08` on a CUID clone vs. `0x28` on your real card), the system can automatically lock your student ID across the entire campus.
* **Official Alternatives:** Most university libraries offer **QR code / barcode entry** inside their official student mobile app, or allow you to tap your phone via **Apple Wallet / Google Wallet** if your school supports mobile student IDs.

If you'd like to check official, risk-free ways to enter the library without carrying your physical card, let me know:

* Whether your university has a **mobile student ID app** or **QR code gate scanner**
* If you want to understand how **anti-passback** or **SAK detection** works on campus turnstiles

I can help you look into supported mobile access options or explain the technical checks these readers perform.

## Why can it possibly be unclonable when it's physically there

Why can it possibly be unclonable when it's physically there

11:03 PM

### Why can it possibly be unclonable when it's physically there

A smart card can be physically in your hand and still be impossible to clone because it is not a passive memory stick—**it is a miniature, tamper-resistant computer** (a microcontroller) designed to perform math without ever revealing its secrets.

#### 1\. Challenge-Response Authentication (The Secret Never Leaves)

Instead of sending a static password or ID number when tapped, the secure chip (**IsoDep / SmartMX**) uses a cryptographic handshake:

* **The Challenge:** When you tap the card, the turnstile or payment terminal generates a brand-new, random number (a "challenge") and sends it to the card.
* **Internal Calculation:** The tiny processor inside your card takes that random number, mixes it with a **secret cryptographic key** stored inside its sealed memory, and calculates a unique mathematical answer (a "response").
* **Verification:** The card sends only the **answer** back to the reader—never the secret key itself. Because the random challenge changes on every single tap, recording and replaying an old tap will fail immediately.

#### 2\. Hardware Isolation (No "Read" Command Exists)

* **Write-Only Key Storage:** When the university initializes your card, the secret key is injected into a locked hardware vault inside the chip. The chip's operating system simply does not have a command to read or output that memory address to the outside world.
* **Input/Output Firewall:** Even though your phone or a Proxmark3 can talk to the card over radio waves, the card only responds to authorized APDU commands (like "sign this challenge" or "check balance"). If you ask it to output its private key, it refuses.

#### 3\. Physical Tamper Resistance

If someone tried to bypass the software by dissolving the plastic card in acid and probing the silicon microchip under an electron microscope:

* **Active Shielding:** Secure smart cards (like NXP SmartMX) have microscopic wire meshes layered directly over the processor. Scratching or probing the chip breaks the circuit and triggers an instant **self-destruct wipe** of the memory.
* **Side-Channel Protections:** The chip is engineered to consume the exact same amount of electrical power and take the exact same number of nanoseconds whether it is processing a `0` or a `1`, preventing attackers from guessing the key by measuring power fluctuations or RF noise.

In short, cloning a basic card (like an old MIFARE Classic sector) is like **photocopying a written password**. Cloning a SmartMX / IsoDep applet is like trying to **photocopy a locked safe**—you can copy the outside of the box, but you cannot see or duplicate what is doing the math inside.

If you're curious about the hardware security side of smart cards, I can explain **how contactless EMV bank cards use the exact same challenge-response math** or **how researchers test chips for side-channel leaks**. Would you like to explore either of those?

## How can it perform math wo battery

How can it perform math wo battery

11:04 PM

### How can it perform math wo battery

Your smart card has no battery because it draws its electricity wirelessly from the **card reader** at the exact moment you tap it, using a physics principle called **electromagnetic induction**.

#### 1\. The Reader Broadcasts Power

* **Magnetic Field Generation:** Inside the turnstile, payment terminal, or smartphone is a coil of wire connected to a power source. It constantly broadcasts an oscillating **13.56 MHz radio-frequency (RF) magnetic field** a few centimeters into the air.
* **Energy Source:** The reader is doing all the heavy lifting—supplying both the data signal and the raw electrical energy needed to wake up your card.

#### 2\. Your Card Acts Like a Tiny Transformer

If you shine a bright flashlight through the edge of your campus card, you can usually see a thin **copper or aluminum wire loop** running around the perimeter of the plastic, connected to a tiny square microchip:

* **Harvesting Electricity:** When your card enters the reader's magnetic field, that internal wire loop acts as an antenna. The changing magnetic field pushes electrons through the wire, generating a tiny alternating current (AC)—just like a wireless phone charger.
* **Power Regulation:** Inside the microchip, a tiny rectifier converts that AC power into stable direct current (DC) and charges a microscopic capacitor. Within a few milliseconds, the chip reaches about **1.5 to 3 volts**, waking up its processor.

#### 3\. Why Modern Chips Can Do Complex Math on Tiny Power

* **Ultra-Low Power Silicon:** The processor inside a SmartMX chip is engineered to run on just a few **milliwatts** of electricity (thousands of times less power than a lightbulb).
* **Dedicated Crypto Accelerators:** Instead of doing math slowly with general-purpose software, the chip has specialized hardware circuits built specifically for **AES or 3DES encryption**. This lets it complete a complex cryptographic challenge-response calculation in **under 50 milliseconds** before you even pull your hand away from the reader.
* **Instant Shutdown:** The moment you lift the card away from the magnetic field, the capacitor drains, the processor shuts down completely, and any temporary data in its working memory disappears—while permanent data (like your keys and balance) stays safely stored in non-volatile memory (EEPROM/Flash) without needing power.

If you'd like to explore more about how passive smart cards work, I can explain **how the card sends data back without a radio transmitter (load modulation)** or **why holding two cards together causes "card clash"**. Would you like to check out either of those?

## The balance isn't in the card, it can be topped up elsewhere

The balance isn't in the card, it can be topped up elsewhere

11:05 PM

### The balance isn't in the card, it can be topped up elsewhere

That makes complete sense—your campus card operates on a **server-centric (online account) architecture**, meaning the card acts strictly as a secure **identity token** while your actual money lives on the university's central server.

Even without money stored directly on the chip, the security reasons why it cannot be cloned remain the same—and in some ways, server-side balances make security even tighter.

#### How a Server-Side Campus Wallet Works

* **The Card Proves _Who_ You Are:** When you top up your account via a campus portal, kiosk, or app, the university adds funds to your student ID record in their central database.
* **Cryptographic Proof at the Register:** When you tap your card at a cafeteria or vending machine, the terminal does not just trust a plain student ID number. Instead, it uses the **IsoDep / SmartMX** secure chip to run a **challenge-response** check—proving that the physical, genuine chip issued to your student account is present at the terminal.
* **Real-Time Deduction:** Once the chip proves its authenticity, the terminal asks the central server to deduct the purchase amount from your online balance.

#### Why Server-Side Systems Still Prevent Cloning

* **Preventing Account Theft:** If a campus card simply broadcast an unencrypted student ID number, anyone standing near you on a train or in a hallway could scan your pocket with a phone, copy that number, and spend your online balance at campus stores. The uncloneable **SmartMX** processor ensures only your physical card can authorize charges against your server balance.
* **Why Older Campus Systems Still Have MIFARE Classic (`SAK 0x28`):** Universities often upgrade their payment and turnstile systems over many years. To avoid replacing thousands of older dorm locks or library gates all at once, they issue **hybrid (dual-interface) cards**:
  * **Legacy MIFARE Classic Sectors (0–7):** Kept on the card for older offline doors or gates that haven't been upgraded yet.
  * **SmartMX / IsoDep Applet:** Used by modern payment terminals and newer turnstiles to securely authenticate against the campus server.

#### What This Means for Your Card

* **If a Terminal Uses the IsoDep Layer:** Any payment terminal or turnstile that verifies your identity through the SmartMX chip cannot be fooled by a blank CUID card, because the blank card lacks the secret cryptographic key needed to answer the server's challenge.
* **If a Legacy Gate Uses Only MIFARE Classic:** Only an older offline reader that checks nothing more than the MIFARE Classic sectors (0–7) could theoretically interact with a sector copy—and as noted earlier, reading those encrypted sectors requires specialized Proxmark3 hardware and carries the risk of account suspension if detected.

If you're interested in how these hybrid campus systems work, I can explain **how universities migrate from MIFARE Classic to IsoDep without replacing every card** or **how mobile student IDs (Apple/Google Wallet) replicate the SmartMX security chip on a phone**. Would you like to explore either topic?

## What does it mean if it says it only checks serial number

What does it mean if it says it only checks serial number

11:23 PM

### What does it mean if it says it only checks serial number

If a reader or system **"only checks the serial number,"** it means the terminal only looks at the card's **UID (Unique Identifier)**—the 4-byte hardware address (`FA:6B:18:55`) that your card broadcasts automatically the instant it touches an NFC field.

In this setup, the reader completely ignores the encrypted memory sectors (0–7) and never runs any cryptographic challenge-response math on the SmartMX chip.

#### How a UID-Only System Works

* **Initial Handshake Only:** Whenever any NFC card enters a reader's magnetic field, it must transmit its **UID** first so the reader knows how to address it (anti-collision protocol). A UID-only reader stops right after this step.
* **Database Lookup:** The turnstile or door controller takes that `FA:6B:18:55` serial number and checks an internal allow-list or central campus database to see if that serial number belongs to an active student.
* **No Cryptographic Verification:** Because the UID is transmitted in plain text without encryption, the reader has no way to tell the difference between your original SmartMX card and a cheap blank card programmed with the same `FA:6B:18:55` serial number.

#### Why Some Campus Turnstiles Use UID-Only Checks

* **Speed:** Reading only the UID takes **less than 10 milliseconds**, allowing high-traffic library gates or dining hall turnstiles to process crowds quickly without slow encryption handshakes.
* **Low-Risk Access:** Universities often accept lower security on library entry gates (where the worst-case scenario is someone entering a study room) while enforcing strict **SmartMX / IsoDep** cryptography on payment registers and dorm rooms.

#### Important Caveats on Your Specific Card (`SAK 0x28`)

Even on a UID-only turnstile, two hardware details can still trip up a basic UID copy:

* **SAK / ATQA Fingerprinting:** During the initial handshake, the card also sends its **SAK** (`0x28` for your SmartMX card) and **ATQA** bytes. Some readers reject cards if the UID matches (`FA:6B:18:55`) but the SAK changes from `0x28` to `0x08` (which is what a standard MIFARE Classic CUID blank card reports).
* **Policy & Anti-Passback Detection:** Library gates track entry and exit timestamps per serial number. Using a duplicate UID or triggering simultaneous/out-of-sequence taps can flag your student record with campus IT, which violates student conduct rules and can deactivate your card across campus services.

If you're curious about how campus systems handle these different security tiers, I can explain **how SAK/ATQA fingerprinting works** or **how universities transition UID-only gates to encrypted readers**. Would you like to explore either of those?

## What's needed to clone to test

What's needed to clone to test

11:27 PM

### What's needed to clone to test

Testing a **UID-only** check on a system you own or have explicit permission to test is much simpler than cloning encrypted sectors, because you do not need to crack or dump Sectors 0–7\. You only need to replicate the card's **4-byte UID (`FA:6B:18:55`)**—and ideally its **SAK (`0x28`)** and **ATQA** handshake bytes.

However, note that testing an unauthorized clone on an active campus turnstile or payment reader violates university IT policies and can trigger automatic account freezes or anti-passback alerts.

#### 1\. What You Need for a UID-Only Test

* **A 4-Byte UID-Changeable Blank Card (Gen2 / CUID):**
  * **Standard CUID Card (`SAK 0x08`):** Widely available and inexpensive. It lets you write the `FA:6B:18:55` UID onto Block 0, though its SAK byte remains fixed at `0x08`.
  * **Gen2 / UFUID / Ultimate Magic Card (Configurable SAK):** If the reader checks both the UID (`FA:6B:18:55`) and the **SAK (`0x28`)**, a standard CUID card (`SAK 0x08`) will be rejected. You would need a specialized configurable Magic card (such as a **MIFARE Classic Gen2 with writable SAK/ATQA** or an **Ultimate Magic Card**) that can mimic `SAK 0x28`.
* **An Android Phone with MIFARE Classic Tool (MCT):**
  * Because you are **not** copying the encrypted Sectors 0–7, you do **not** need a Proxmark3 just to test a UID-only check. Your Android phone can write Block 0 (containing your UID) directly to a blank Gen2/CUID card.

#### 2\. How a UID-Only Write Works conceptually

* **Constructing Block 0:** In a MIFARE Classic 1K layout, **Sector 0, Block 0** is a 16-byte string containing:
  * **Bytes 0–3:** Your 4-byte UID (`FA 6B 18 55`)
  * **Byte 4:** The **BCC** (Bit Count Check—an XOR checksum of the 4 UID bytes)
  * **Byte 5:** The **SAK** byte (`08` or `28`)
  * **Bytes 6–7:** The **ATQA** bytes (e.g., `04 00`)
  * **Bytes 8–15:** Manufacturer data
* **Writing to the Blank Card:** Using **MIFARE Classic Tool** (`Write Tag` \> `Write Dump`), you write only **Sector 0** (with default `FFFFFFFFFFFF` keys for the blank card) onto the CUID blank card, leaving Sectors 1–15 empty.

#### 3\. Interpreting the Test Results

* **If the gate opens with a standard CUID card (`SAK 0x08`):** The reader is strictly checking the **4-byte UID** and ignoring both the SAK fingerprint and the encrypted sectors.
* **If the gate rejects `SAK 0x08` but accepts a configurable `SAK 0x28` card:** The reader verifies the **UID + SAK/ATQA anti-collision fingerprint**, but still does not read encrypted data.
* **If both fail:** The gate is actively reading the **encrypted Sectors 0–7** or authenticating against the **IsoDep / SmartMX** secure processor, meaning a UID-only test cannot work.

If you're doing research on RFID/NFC reader behavior, I can explain **how the BCC checksum byte in Block 0 is calculated** or **how readers distinguish between SAK `0x08` and SAK `0x28` during the anti-collision phase**. Would you like to look at either of those?

