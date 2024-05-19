import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import dynamic from "next/dynamic";
import { ActionIcon, AppShell } from "@mantine/core";
import Days from "../components/Days";
import Header from "../components/Header";
import Calendar from "../components/svg/Calendar";

const Popup = dynamic(() => import("../components/Popup"));
const Nav = dynamic(() => import("../components/Nav"));

const Example: NextPage = () => {
    const days = [
        {
            day: "Mon May 27 2024",
            subjects: [
                {
                    Id: 9636332,
                    Links: [
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9636332",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9636453",
                        },
                    ],
                    Start: 1716793800000,
                    Einde: 1716796800000,
                    LesuurVan: 2,
                    LesuurTotMet: 2,
                    DuurtHeleDag: false,
                    Omschrijving: "sp - ctp - nam3.sp4",
                    Lokatie: "228",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 233,
                            Naam: "Spaans",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 63475,
                            Naam: "J.M. Carretero Perez",
                            Docentcode: "CTP",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "228",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9636453,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9636332",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9636453",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9636610",
                        },
                    ],
                    Start: 1716797700000,
                    Einde: 1716800700000,
                    LesuurVan: 3,
                    LesuurTotMet: 3,
                    DuurtHeleDag: false,
                    Omschrijving: "lo - hvt - nam3.lo2",
                    Lokatie: "HVW3",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: '<p>We gaan vandaag naar de tennis vereniging om buiten tennis en padel te spelen. Dit is vlak bij onze buiten gym locatie. Als je langs het zwembad fietst, ga je daarna direct naar links en fiets je tegen het tennis complex aan. Link langs het complex fietsen, dan vind je daar de ingang om je fiets neer te zetten.</p><p><br></p><p>Neem hiervoor de juiste LO kleding en schoenen mee.</p><p>Bij fris weer kan een lange broek en/of trui. Als het maar andere kleding is dan je in de klas draagt.</p><p>Voor aanvang van de les delen wij als lo docenten mede of je deze kan dragen. Dus neem ook altijd je blauwe shirt en zwarte korte broek mee.</p><p>Vertrek vlak voor het einde van de pauze van school, dan ben je bij aanvang van het lesuur op tijd aanwezig.</p>',
                    Opmerking: null,
                    InfoType: 1,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 86,
                            Naam: "Lichamelijke opvoeding",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 47058,
                            Naam: "M.C.M. Halverhout",
                            Docentcode: "HVT",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "HVW3",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    type: "Huiswerk",
                    stroom: "1",
                    break: true,
                    breakStart: 1716796800000,
                    breakEnd: 1716797700000,
                },
                {
                    Id: 9636610,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9636453",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9636610",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9636621",
                        },
                    ],
                    Start: 1716800700000,
                    Einde: 1716803700000,
                    LesuurVan: 4,
                    LesuurTotMet: 4,
                    DuurtHeleDag: false,
                    Omschrijving: "lo - hvt - nam3.lo2",
                    Lokatie: "HVW3",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 86,
                            Naam: "Lichamelijke opvoeding",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 47058,
                            Naam: "M.C.M. Halverhout",
                            Docentcode: "HVT",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "HVW3",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9636621,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9636610",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9636621",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9636591",
                        },
                    ],
                    Start: 1716805500000,
                    Einde: 1716808500000,
                    LesuurVan: 5,
                    LesuurTotMet: 5,
                    DuurtHeleDag: false,
                    Omschrijving: "ec - fnk - nam3.ec2",
                    Lokatie: "228",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 38,
                            Naam: "Economie",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 733,
                            Naam: "M.W. Franke",
                            Docentcode: "FNK",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "228",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    stroom: "1",
                    bigBreak: true,
                    breakStart: 1716803700000,
                    breakEnd: 1716805500000,
                },
                {
                    Id: 9636591,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9636621",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9636591",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9636675",
                        },
                    ],
                    Start: 1716808500000,
                    Einde: 1716811500000,
                    LesuurVan: 6,
                    LesuurTotMet: 6,
                    DuurtHeleDag: false,
                    Omschrijving: "gs - bel - nam3.gs2",
                    Lokatie: "304",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: "<p>Hoofdstuk 6 par. 1 t/m 5</p>",
                    Opmerking: null,
                    InfoType: 4,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 60,
                            Naam: "Geschiedenis",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 31,
                            Naam: "J.W. van den Beukel",
                            Docentcode: "BEL",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "304",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    type: "SO",
                },
                {
                    Id: 9636675,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9636591",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9636675",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9636748",
                        },
                    ],
                    Start: 1716811500000,
                    Einde: 1716814500000,
                    LesuurVan: 7,
                    LesuurTotMet: 7,
                    DuurtHeleDag: false,
                    Omschrijving: "bi - rkn - nam3.bi2",
                    Lokatie: "211",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 9,
                            Naam: "Biologie",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 39784,
                            Naam: "G. Ripken",
                            Docentcode: "RKN",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "211",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
            ],
        },
        {
            day: "Tue May 28 2024",
            subjects: [
                {
                    Id: 9636748,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9636675",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9636748",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9636719",
                        },
                    ],
                    Start: 1716880200000,
                    Einde: 1716883200000,
                    LesuurVan: 2,
                    LesuurTotMet: 2,
                    DuurtHeleDag: false,
                    Omschrijving: "ec - fnk - nam3.ec2",
                    Lokatie: "236",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 38,
                            Naam: "Economie",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 733,
                            Naam: "M.W. Franke",
                            Docentcode: "FNK",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "236",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9636719,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9636748",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9636719",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637082",
                        },
                    ],
                    Start: 1716883200000,
                    Einde: 1716886200000,
                    LesuurVan: 3,
                    LesuurTotMet: 3,
                    DuurtHeleDag: false,
                    Omschrijving: "gs - bel - nam3.gs2",
                    Lokatie: "304",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 60,
                            Naam: "Geschiedenis",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 31,
                            Naam: "J.W. van den Beukel",
                            Docentcode: "BEL",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "304",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9637082,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9636719",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637082",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637064",
                        },
                    ],
                    Start: 1716887100000,
                    Einde: 1716890100000,
                    LesuurVan: 4,
                    LesuurTotMet: 4,
                    DuurtHeleDag: false,
                    Omschrijving: "ne - blr - nam3.ne2",
                    Lokatie: "325",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 121,
                            Naam: "Nederlands",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 967,
                            Naam: "E. Braumuller",
                            Docentcode: "BLR",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "325",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    stroom: "2",
                    break: true,
                    breakStart: 1716886200000,
                    breakEnd: 1716887100000,
                },
                {
                    Id: 9637064,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637082",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637064",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9636938",
                        },
                    ],
                    Start: 1716890100000,
                    Einde: 1716894000000,
                    LesuurVan: 5,
                    LesuurTotMet: 5,
                    DuurtHeleDag: false,
                    Omschrijving: "lv - frm - nam3.lv2",
                    Lokatie: "225",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 95,
                            Naam: "Levensbeschouwelijke vorming",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 54907,
                            Naam: "E. van der Form",
                            Docentcode: "FRM",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "225",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9636938,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637064",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9636938",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9636995",
                        },
                    ],
                    Start: 1716894900000,
                    Einde: 1716897900000,
                    LesuurVan: 6,
                    LesuurTotMet: 6,
                    DuurtHeleDag: false,
                    Omschrijving: "bv - bgh - nam3.bv1",
                    Lokatie: "238",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 15,
                            Naam: "Beeldende vorming",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 751,
                            Naam: "H.H. van den Berg",
                            Docentcode: "BGH",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "238",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    stroom: "2",
                    bigBreak: true,
                    breakStart: 1716893100000,
                    breakEnd: 1716894900000,
                },
                {
                    Id: 9636995,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9636938",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9636995",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9636988",
                        },
                    ],
                    Start: 1716898800000,
                    Einde: 1716901800000,
                    LesuurVan: 7,
                    LesuurTotMet: 7,
                    DuurtHeleDag: false,
                    Omschrijving: "bv - bgh - nam3.bv1",
                    Lokatie: "238",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 15,
                            Naam: "Beeldende vorming",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 751,
                            Naam: "H.H. van den Berg",
                            Docentcode: "BGH",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "238",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    stroom: "1",
                    break: true,
                    breakStart: 1716897900000,
                    breakEnd: 1716898800000,
                },
                {
                    Id: 9636988,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9636995",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9636988",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637040",
                        },
                    ],
                    Start: 1716901800000,
                    Einde: 1716904800000,
                    LesuurVan: 8,
                    LesuurTotMet: 8,
                    DuurtHeleDag: false,
                    Omschrijving: "du - smi - nam3.du2",
                    Lokatie: "071",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: "<p><u>Tussentoets Kap. 4 en 6</u><br></p><p></p><ol><li>Leren Lernliste N-D Kap. 4 (blz. 48)</li><li>Leren Lernliste N-D Kap. 6 (blz. 128)</li><li>Keuzevoorzetsels (zie Pdf-bestand in de ELO en blz. 106 &amp; 107)</li><li>Toepassing keuzevoorzetsels bij de der- en een-Gruppe (blz. 154 en 155, blok 15 en 16)</li><li>Sterke werkwoorden met een a in de stam (blz. 67 en aantekeningen)</li><li>Sterke werkwoorden met een e in de stam (blz. 69 en aantekeningen)&nbsp;</li></ol><p></p>",
                    Opmerking: null,
                    InfoType: 2,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 33,
                            Naam: "Duits",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 49688,
                            Naam: "S. Shiamrai",
                            Docentcode: "SMI",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "071",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    type: "Proefwerk",
                },
            ],
        },
        {
            day: "Wed May 29 2024",
            subjects: [
                {
                    Id: 9637040,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9636988",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637040",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637501",
                        },
                    ],
                    Start: 1716965400000,
                    Einde: 1716967200000,
                    LesuurVan: 2,
                    LesuurTotMet: 2,
                    DuurtHeleDag: false,
                    Omschrijving: "na - mzl - nam3.na2",
                    Lokatie: "247",
                    Status: 3,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 116,
                            Naam: "Natuurkunde",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 63648,
                            Naam: "M. Mazel",
                            Docentcode: "MZL",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "247",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9637501,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637040",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637501",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637550",
                        },
                    ],
                    Start: 1716967200000,
                    Einde: 1716969000000,
                    LesuurVan: 3,
                    LesuurTotMet: 3,
                    DuurtHeleDag: false,
                    Omschrijving: "ak - jsj - nam3.ak2",
                    Lokatie: "201",
                    Status: 3,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: "<p>Beste leerlingen,&nbsp;</p><p><br></p><p>Vandaag hebben we het SO over de begrippen van paragraaf 1 t/m 3 van hoofdstuk 1.</p><p>&nbsp;</p><p>HW:&nbsp;</p><p>Maken van paragraaf 2: Opgave 5 t/m 7<br></p><p><br></p><p>Vriendelijke groeten,&nbsp;</p><p>Mevrouw Janssen</p>",
                    Opmerking: null,
                    InfoType: 4,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 2,
                            Naam: "Aardrijkskunde",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 57387,
                            Naam: "J.A. Janssen",
                            Docentcode: "JSJ",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "201",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    type: "SO",
                },
                {
                    Id: 9637550,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637501",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637550",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637602",
                        },
                    ],
                    Start: 1716969000000,
                    Einde: 1716970800000,
                    LesuurVan: 4,
                    LesuurTotMet: 4,
                    DuurtHeleDag: false,
                    Omschrijving: "en - nrr - nam3.en1",
                    Lokatie: "202",
                    Status: 3,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 43,
                            Naam: "Engels",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 54658,
                            Naam: "M. Norder",
                            Docentcode: "NRR",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "202",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9637602,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637550",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637602",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637424",
                        },
                    ],
                    Start: 1716972600000,
                    Einde: 1716974400000,
                    LesuurVan: 5,
                    LesuurTotMet: 5,
                    DuurtHeleDag: false,
                    Omschrijving: "na - mzl - nam3.na2",
                    Lokatie: "247",
                    Status: 3,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 116,
                            Naam: "Natuurkunde",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 63648,
                            Naam: "M. Mazel",
                            Docentcode: "MZL",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "247",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    stroom: "1",
                    bigBreak: true,
                    breakStart: 1716970800000,
                    breakEnd: 1716972600000,
                },
                {
                    Id: 9637424,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637602",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637424",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637594",
                        },
                    ],
                    Start: 1716974400000,
                    Einde: 1716976200000,
                    LesuurVan: 6,
                    LesuurTotMet: 6,
                    DuurtHeleDag: false,
                    Omschrijving: "wi - sil - nam3.wi2",
                    Lokatie: "064",
                    Status: 3,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 168,
                            Naam: "Wiskunde",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 481,
                            Naam: "M.C. Silvius",
                            Docentcode: "SIL",
                        },
                    ],
                    Lokalen: [],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9637594,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637424",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637594",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637562",
                        },
                    ],
                    Start: 1716976200000,
                    Einde: 1716978000000,
                    LesuurVan: 7,
                    LesuurTotMet: 7,
                    DuurtHeleDag: false,
                    Omschrijving: "max - bro - nam3.max2",
                    Lokatie: "082",
                    Status: 3,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 425,
                            Naam: "Max",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 68,
                            Naam: "D.C.E.A. Bronkhorst",
                            Docentcode: "BRO",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "082",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9637562,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637594",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637562",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637732",
                        },
                    ],
                    Start: 1716978000000,
                    Einde: 1716979800000,
                    LesuurVan: 8,
                    LesuurTotMet: 8,
                    DuurtHeleDag: false,
                    Omschrijving: "max - bro - nam3.max2",
                    Lokatie: "082",
                    Status: 3,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 425,
                            Naam: "Max",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 68,
                            Naam: "D.C.E.A. Bronkhorst",
                            Docentcode: "BRO",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "082",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9637732,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637562",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637732",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9716070",
                        },
                    ],
                    Start: 1716979800000,
                    Einde: 1716981600000,
                    LesuurVan: 9,
                    LesuurTotMet: 9,
                    DuurtHeleDag: false,
                    Omschrijving: "max - bro - nam3.max2",
                    Lokatie: "082",
                    Status: 3,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 425,
                            Naam: "Max",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 68,
                            Naam: "D.C.E.A. Bronkhorst",
                            Docentcode: "BRO",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "082",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9716070,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637732",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9716070",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637717",
                        },
                    ],
                    Start: 1716981600000,
                    Einde: 1716994200000,
                    LesuurVan: null,
                    LesuurTotMet: null,
                    DuurtHeleDag: false,
                    Omschrijving: "max - mdr - nam3.max2,nam3.max1",
                    Lokatie: "117,118,116,112,123,124,122",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: "Toets: nam3 max",
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 425,
                            Naam: "Max",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 342,
                            Naam: "E.W. Mulder",
                            Docentcode: "MDR",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "117",
                        },
                        {
                            Naam: "118",
                        },
                        {
                            Naam: "116",
                        },
                        {
                            Naam: "112",
                        },
                        {
                            Naam: "123",
                        },
                        {
                            Naam: "124",
                        },
                        {
                            Naam: "122",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
            ],
        },
        {
            day: "Thu May 30 2024",
            subjects: [
                {
                    Id: 9637717,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9716070",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637717",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637391",
                        },
                    ],
                    Start: 1717050000000,
                    Einde: 1717053000000,
                    LesuurVan: 1,
                    LesuurTotMet: 1,
                    DuurtHeleDag: false,
                    Omschrijving: "sp - ctp - nam3.sp4",
                    Lokatie: "225",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 233,
                            Naam: "Spaans",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 63475,
                            Naam: "J.M. Carretero Perez",
                            Docentcode: "CTP",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "225",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9637391,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637717",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637391",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637760",
                        },
                    ],
                    Start: 1717053000000,
                    Einde: 1717056000000,
                    LesuurVan: 2,
                    LesuurTotMet: 2,
                    DuurtHeleDag: false,
                    Omschrijving: "gs - bel - nam3.gs2",
                    Lokatie: "304",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 60,
                            Naam: "Geschiedenis",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 31,
                            Naam: "J.W. van den Beukel",
                            Docentcode: "BEL",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "304",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9637760,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637391",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637760",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637781",
                        },
                    ],
                    Start: 1717056000000,
                    Einde: 1717059000000,
                    LesuurVan: 3,
                    LesuurTotMet: 3,
                    DuurtHeleDag: false,
                    Omschrijving: "ne - blr - nam3.ne2",
                    Lokatie: "204",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 121,
                            Naam: "Nederlands",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 967,
                            Naam: "E. Braumuller",
                            Docentcode: "BLR",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "204",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9637781,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637760",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637781",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637727",
                        },
                    ],
                    Start: 1717059900000,
                    Einde: 1717062900000,
                    LesuurVan: 4,
                    LesuurTotMet: 4,
                    DuurtHeleDag: false,
                    Omschrijving: "wi - sil - nam3.wi2",
                    Lokatie: "064",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 168,
                            Naam: "Wiskunde",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 481,
                            Naam: "M.C. Silvius",
                            Docentcode: "SIL",
                        },
                    ],
                    Lokalen: [],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    stroom: "2",
                    break: true,
                    breakStart: 1717059000000,
                    breakEnd: 1717059900000,
                },
                {
                    Id: 9637727,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637781",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637727",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9637791",
                        },
                    ],
                    Start: 1717064700000,
                    Einde: 1717067700000,
                    LesuurVan: 5,
                    LesuurTotMet: 5,
                    DuurtHeleDag: false,
                    Omschrijving: "sk - srd - nam3.sk2",
                    Lokatie: "248",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 136,
                            Naam: "Scheikunde",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 1091,
                            Naam: "D. Saarloos",
                            Docentcode: "SRD",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "248",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    stroom: "1",
                    bigBreak: true,
                    breakStart: 1717062900000,
                    breakEnd: 1717064700000,
                },
                {
                    Id: 9637791,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637727",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9637791",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9638154",
                        },
                    ],
                    Start: 1717067700000,
                    Einde: 1717070700000,
                    LesuurVan: 6,
                    LesuurTotMet: 6,
                    DuurtHeleDag: false,
                    Omschrijving: "bi - rkn - nam3.bi2",
                    Lokatie: "305",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: "Opdr bij 11.1&nbsp;",
                    Opmerking: null,
                    InfoType: 1,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 9,
                            Naam: "Biologie",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 39784,
                            Naam: "G. Ripken",
                            Docentcode: "RKN",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "305",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    type: "Huiswerk",
                },
                {
                    Id: 9638154,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9637791",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9638154",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9638203",
                        },
                    ],
                    Start: 1717071600000,
                    Einde: 1717074600000,
                    LesuurVan: 7,
                    LesuurTotMet: 7,
                    DuurtHeleDag: false,
                    Omschrijving: "en - nrr - nam3.en1",
                    Lokatie: "116",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 43,
                            Naam: "Engels",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 54658,
                            Naam: "M. Norder",
                            Docentcode: "NRR",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "116",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    stroom: "1",
                    break: true,
                    breakStart: 1717070700000,
                    breakEnd: 1717071600000,
                },
                {
                    Id: 9638203,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9638154",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9638203",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9638441",
                        },
                    ],
                    Start: 1717074600000,
                    Einde: 1717077600000,
                    LesuurVan: 8,
                    LesuurTotMet: 8,
                    DuurtHeleDag: false,
                    Omschrijving: "mn - ctp,jsj - nam3.mn2",
                    Lokatie: "225",
                    Status: 3,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 104,
                            Naam: "Mentoruur",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 63475,
                            Naam: "J.M. Carretero Perez",
                            Docentcode: "CTP",
                        },
                        {
                            Id: 57387,
                            Naam: "J.A. Janssen",
                            Docentcode: "JSJ",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "225",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
            ],
        },
        {
            day: "Fri May 31 2024",
            subjects: [
                {
                    Id: 9638441,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9638203",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9638441",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9638176",
                        },
                    ],
                    Start: 1717143300000,
                    Einde: 1717146300000,
                    LesuurVan: 3,
                    LesuurTotMet: 3,
                    DuurtHeleDag: false,
                    Omschrijving: "ak - bas - nam3.ak2",
                    Lokatie: "258",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: "<p>BAS neemt toetsen TW3 mee ter inzage voor degene die hem nog niet in hebben gezien.<br></p><p><br></p><p>Par. 3 afmaken t/m opdracht 8</p>",
                    Opmerking: null,
                    InfoType: 1,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 2,
                            Naam: "Aardrijkskunde",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 1067,
                            Naam: "D.J.R. Bogaarts",
                            Docentcode: "BAS",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "258",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    type: "Huiswerk",
                    stroom: "1",
                    break: true,
                    breakStart: 1717142400000,
                    breakEnd: 1717143300000,
                },
                {
                    Id: 9638176,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9638441",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9638176",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9638408",
                        },
                    ],
                    Start: 1717146300000,
                    Einde: 1717149300000,
                    LesuurVan: 4,
                    LesuurTotMet: 4,
                    DuurtHeleDag: false,
                    Omschrijving: "en - nrr - nam3.en1",
                    Lokatie: "116",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 43,
                            Naam: "Engels",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 54658,
                            Naam: "M. Norder",
                            Docentcode: "NRR",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "116",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9638408,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9638176",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9638408",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9638567",
                        },
                    ],
                    Start: 1717151100000,
                    Einde: 1717154100000,
                    LesuurVan: 5,
                    LesuurTotMet: 5,
                    DuurtHeleDag: false,
                    Omschrijving: "wi - sil - nam3.wi2",
                    Lokatie: "064",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 168,
                            Naam: "Wiskunde",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 481,
                            Naam: "M.C. Silvius",
                            Docentcode: "SIL",
                        },
                    ],
                    Lokalen: [],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    stroom: "1",
                    bigBreak: true,
                    breakStart: 1717149300000,
                    breakEnd: 1717151100000,
                },
                {
                    Id: 9638567,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9638408",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9638567",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9638483",
                        },
                    ],
                    Start: 1717154100000,
                    Einde: 1717157100000,
                    LesuurVan: 6,
                    LesuurTotMet: 6,
                    DuurtHeleDag: false,
                    Omschrijving: "sk - srd - nam3.sk2",
                    Lokatie: "244",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 136,
                            Naam: "Scheikunde",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 1091,
                            Naam: "D. Saarloos",
                            Docentcode: "SRD",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "244",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9638483,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9638567",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9638483",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9638541",
                        },
                    ],
                    Start: 1717157100000,
                    Einde: 1717161000000,
                    LesuurVan: 7,
                    LesuurTotMet: 7,
                    DuurtHeleDag: false,
                    Omschrijving: "ne - blr - nam3.ne2",
                    Lokatie: "204",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 121,
                            Naam: "Nederlands",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 967,
                            Naam: "E. Braumuller",
                            Docentcode: "BLR",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "204",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9638541,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9638483",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9638541",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9638666",
                        },
                    ],
                    Start: 1717161000000,
                    Einde: 1717164000000,
                    LesuurVan: 8,
                    LesuurTotMet: 8,
                    DuurtHeleDag: false,
                    Omschrijving: "du - smi - nam3.du2",
                    Lokatie: "227",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 33,
                            Naam: "Duits",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 49688,
                            Naam: "S. Shiamrai",
                            Docentcode: "SMI",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "227",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    stroom: "2",
                    break: true,
                    breakStart: 1717160100000,
                    breakEnd: 1717161000000,
                },
            ],
        },
        {
            day: "Mon Jun 03 2024",
            subjects: [
                {
                    Id: 9638666,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9638541",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9638666",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9638725",
                        },
                    ],
                    Start: 1717398600000,
                    Einde: 1717401600000,
                    LesuurVan: 2,
                    LesuurTotMet: 2,
                    DuurtHeleDag: false,
                    Omschrijving: "sp - ctp - nam3.sp4",
                    Lokatie: "228",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 233,
                            Naam: "Spaans",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 63475,
                            Naam: "J.M. Carretero Perez",
                            Docentcode: "CTP",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "228",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9638725,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9638666",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9638725",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9638589",
                        },
                    ],
                    Start: 1717402500000,
                    Einde: 1717405500000,
                    LesuurVan: 3,
                    LesuurTotMet: 3,
                    DuurtHeleDag: false,
                    Omschrijving: "lo - hvt - nam3.lo2",
                    Lokatie: "032",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 86,
                            Naam: "Lichamelijke opvoeding",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 47058,
                            Naam: "M.C.M. Halverhout",
                            Docentcode: "HVT",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "032",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    stroom: "1",
                    break: true,
                    breakStart: 1717401600000,
                    breakEnd: 1717402500000,
                },
                {
                    Id: 9638589,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9638725",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9638589",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9638992",
                        },
                    ],
                    Start: 1717405500000,
                    Einde: 1717408500000,
                    LesuurVan: 4,
                    LesuurTotMet: 4,
                    DuurtHeleDag: false,
                    Omschrijving: "lo - hvt - nam3.lo2",
                    Lokatie: "032",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 86,
                            Naam: "Lichamelijke opvoeding",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 47058,
                            Naam: "M.C.M. Halverhout",
                            Docentcode: "HVT",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "032",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9638992,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9638589",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9638992",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9638932",
                        },
                    ],
                    Start: 1717410300000,
                    Einde: 1717413300000,
                    LesuurVan: 5,
                    LesuurTotMet: 5,
                    DuurtHeleDag: false,
                    Omschrijving: "ec - fnk - nam3.ec2",
                    Lokatie: "228",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: "<p>H6</p>",
                    Opmerking: null,
                    InfoType: 4,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 38,
                            Naam: "Economie",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 733,
                            Naam: "M.W. Franke",
                            Docentcode: "FNK",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "228",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                    type: "SO",
                    stroom: "1",
                    bigBreak: true,
                    breakStart: 1717408500000,
                    breakEnd: 1717410300000,
                },
                {
                    Id: 9638932,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9638992",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9638932",
                        },
                        {
                            Rel: "Next",
                            Href: "/api/personen/55674/afspraken/9638746",
                        },
                    ],
                    Start: 1717413300000,
                    Einde: 1717416300000,
                    LesuurVan: 6,
                    LesuurTotMet: 6,
                    DuurtHeleDag: false,
                    Omschrijving: "gs - bel - nam3.gs2",
                    Lokatie: "304",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 60,
                            Naam: "Geschiedenis",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 31,
                            Naam: "J.W. van den Beukel",
                            Docentcode: "BEL",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "304",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
                {
                    Id: 9638746,
                    Links: [
                        {
                            Rel: "Prev",
                            Href: "/api/personen/55674/afspraken/9638932",
                        },
                        {
                            Rel: "Self",
                            Href: "/api/personen/55674/afspraken/9638746",
                        },
                    ],
                    Start: 1717416300000,
                    Einde: 1717419300000,
                    LesuurVan: 7,
                    LesuurTotMet: 7,
                    DuurtHeleDag: false,
                    Omschrijving: "bi - rkn - nam3.bi2",
                    Lokatie: "211",
                    Status: 1,
                    Type: 13,
                    Subtype: 1,
                    IsOnlineDeelname: false,
                    WeergaveType: 0,
                    Inhoud: null,
                    Opmerking: null,
                    InfoType: 0,
                    Aantekening: null,
                    Afgerond: false,
                    HerhaalStatus: 0,
                    Herhaling: null,
                    Vakken: [
                        {
                            Id: 9,
                            Naam: "Biologie",
                        },
                    ],
                    Docenten: [
                        {
                            Id: 39784,
                            Naam: "G. Ripken",
                            Docentcode: "RKN",
                        },
                    ],
                    Lokalen: [
                        {
                            Naam: "211",
                        },
                    ],
                    Groepen: null,
                    OpdrachtId: 0,
                    HeeftBijlagen: false,
                    Bijlagen: null,
                },
            ],
        },
    ];

    const [opened, setOpen] = useState(false);

    return (
        <>
            <Head>
                <title>Hoogeland: Home</title>
            </Head>
            <AppShell header={{ height: 60 }}>
                <Header
                    setNavOpen={() => {}}
                    onClose={() => setOpen(false)}
                    navOpened={opened}
                    Button={
                        <ActionIcon variant="transparent" mr="auto">
                            <Calendar size="23px" />
                        </ActionIcon>
                    }
                />
                <AppShell.Main mx={0}>
                    <Days days={days} />
                    <Popup
                        setDays={() => {}}
                        opened={opened}
                        setOpen={setOpen}
                    />
                    <Nav setNavOpen={() => {}} navOpened={false} />
                </AppShell.Main>
            </AppShell>
        </>
    );
};

export default Example;