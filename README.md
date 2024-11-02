# Motibro - Nyilvántartó Rendszer

Feladatok:

    Munkaidő bejegyzések létrehozása, szerkesztése és törlése (dátum, kezdési és befejezési idő, feladat leírása).
    Munkaidő bejegyzések listázása napi, heti vagy havi nézetben.
    Munkaidő bejegyzések címkézése (tag-elése) különböző kategóriák szerint (pl. projekt, ügyfél).
    Opcionális feladatként: további összesítések és statisztikák (akár diagramok) elkészítése.

Bejegyzések létrehozása/törlése :- Teljes név,dátum,kezdő idő,munkaidő vége választó - Mivel Datagridel oldottam meg a megjelenitést ezért az ID-t random generáltam - Szerkeszteni úgy gondoltam hogy csak a Feladat leírását lehessen,
de természetesen a dátum értékeket is lehet szerkeszteni ha arra lett volna igény vagy ez egy közös megbeszélés lett volna.Egy propon múllik az egész - true/false - Új bejegyzés és Törlés gombok - Új bejegyzésre felugró ablak inputokkal,validációval - Mégse gombra vagy Mentésre lefut egy Reset funkció

- Bejegyzések listázva a Naptár componensben,kicsit bugos sajnos és a heti,napi,lebontásokat nem jól jeleniti meg,erre már nem maradt időm.Timeline működik + a Kereső mező is.

- Az adatokat a Táblázatból vittem át React Contextel.

- Használt Technológiák: React | React-Context | MUI | MUI-X | MUI-Grid | Vite | LocalStorage

- Sajnos a github pages öszeomlik, macen minden szépen lefut.Ha van rá mód akkor localban kéne futtatni.
