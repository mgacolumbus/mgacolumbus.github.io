function getData_Tournaments() {
    /**---------------------------------------------------------------------**/
		var arrTournaments	= new Array();
	/**---------------------------------------------------------------------**/
	
	/*
	
		0 - ID
		1 - Course
		2 - Event
		3 - Date
		4 - IsMajor
		5 - Season
		6 - Month
		7 - Field Size
	
	*/

    return arrTournaments = [
	
        [	1,	"Chapel Hill",	"Rebel Beach Am-Am",	"03-25-2012",	"N",	2012,	"March",	12	],
        [	2,	"Raymond Memorial",	"Bastards",	"04-22-2012",	"Y",	2012,	"April",	13	],
        [	3,	"Homestead Springs",	"FORE Championship",	"05-20-2012",	"N",	2012,	"May",	11	],
        [	4,	"Champions",	"F.U. Open",	"06-24-2012",	"Y",	2012,	"June",	11	],
        [	5,	"Phoenix",	"Bratish Open",	"07-15-2012",	"Y",	2012,	"July",	11	],
        [	6,	"Raccoon",	"MGA Championship",	"08-12-2012",	"Y",	2012,	"August",	12	],
        [	7,	"Upper Lansdowne",	"Douche Bag Invitational",	"09-16-2012",	"N",	2012,	"September",	13	],
        [	8,	"Thorn Apple",	"Last Gasp",	"10-14-2012",	"N",	2012,	"October",	9	],
        [	9,	"St. Albans",	"Rebel Beach Am-Am",	"04-07-2013",	"N",	2013,	"April",	26	],
        [	10,	"Cumberland Trail",	"Bastards",	"04-28-2013",	"Y",	2013,	"April",	18	],
        [	11,	"Thorn Apple",	"FORE Championship",	"05-19-2013",	"N",	2013,	"May",	19	],
        [	12,	"Chapel Hill",	"F.U. Open",	"06-02-2013",	"Y",	2013,	"June",	14	],
        [	13,	"Links at Echo Springs",	"Bratish Open",	"07-14-2013",	"Y",	2013,	"July",	21	],
        [	14,	"Raccoon",	"MGA Championship",	"08-18-2013",	"Y",	2013,	"August",	19	],
        [	15,	"Split Rock",	"Douche Bag Invitational",	"09-08-2013",	"N",	2013,	"September",	15	],
        [	16,	"Rolling Meadows",	"Last Gasp",	"10-20-2013",	"N",	2013,	"October",	10	],
        [	17,	"Split Rock",	"Bastards",	"04-27-2014",	"Y",	2014,	"April",	9	],
        [	18,	"Raccoon",	"FORE Championship",	"05-18-2014",	"N",	2014,	"May",	6	],
        [	19,	"Kyber Run",	"F.U. Open",	"06-08-2014",	"Y",	2014,	"June",	4	],
        [	20,	"Thorn Apple",	"Rebel Beach Am-Am",	"06-29-2014",	"N",	2014,	"June",	6	],
        [	21,	"Turnberry",	"Bratish Open",	"07-13-2014",	"Y",	2014,	"July",	6	],
        [	22,	"Chapel Hill",	"MGA Championship",	"08-17-2014",	"Y",	2014,	"August",	5	],
        [	23,	"Cumberland Trail",	"Douche Bag Invitational",	"09-07-2014",	"N",	2014,	"September",	6	],
        [	24,	"Links at Groveport",	"Last Gasp",	"10-12-2014",	"N",	2014,	"October",	6	],
        [	25,	"Links at Echo Springs",	"Rebel Beach Am-Am",	"03-29-2015",	"N",	2015,	"March",	8	],
        [	26,	"Thorn Apple",	"Bastards",	"04-19-2015",	"Y",	2015,	"April",	9	],
        [	27,	"Raccoon",	"FORE Championship",	"05-17-2015",	"N",	2015,	"May",	12	],
        [	28,	"Oakhaven",	"F.U. Open",	"06-14-2015",	"Y",	2015,	"June",	12	],
        [	29,	"Homestead Springs",	"Bratish Open",	"07-12-2015",	"Y",	2015,	"July",	11	],
        [	30,	"Kyber Run",	"MGA Championship",	"08-09-2015",	"Y",	2015,	"August",	17	],
        [	31,	"Blues Creek",	"Douche Bag Invitational",	"09-13-2015",	"N",	2015,	"September",	16	],
        [	32,	"Willow Run",	"Last Gasp",	"10-11-2015",	"N",	2015,	"October",	11	],
        [	33,	"Westchester",	"Rebel Beach Am-Am",	"04-17-2016",	"N",	2016,	"April",	20	],
        [	34,	"Chapel Hill",	"Bastards",	"04-24-2016",	"Y",	2016,	"April",	19	],
        [	35,	"Links at Echo Springs",	"FORE Championship",	"05-22-2016",	"N",	2016,	"May",	17	],
        [	36,	"Foxfire",	"F.U. Open",	"06-12-2016",	"Y",	2016,	"June",	12	],
        [	37,	"Royal American",	"Bratish Open",	"07-17-2016",	"Y",	2016,	"July",	17	],
        [	38,	"Cumberland Trail",	"MGA Championship",	"08-21-2016",	"Y",	2016,	"August",	17	],
        [	39,	"Blacklick Woods",	"Douche Bag Invitational",	"09-11-2016",	"N",	2016,	"September",	19	],
        [	40,	"Split Rock",	"Last Gasp",	"10-02-2016",	"N",	2016,	"October",	15	],
        [	41,	"Timberview",	"Rebel Beach Am-Am",	"04-23-2017",	"N",	2017,	"April",	22	],
        [	42,	"Kyber Run",	"Bastards",	"05-07-2017",	"Y",	2017,	"May",	17	],
        [	43,	"Denison",	"F.U. Open",	"06-11-2017",	"Y",	2017,	"June",	16	],
        [	44,	"National Golf Links",	"Bratish Open",	"07-09-2017",	"Y",	2017,	"July",	21	],
        [	45,	"Darby Creek",	"MGA Championship",	"08-13-2017",	"Y",	2017,	"August",	16	],
        [	46,	"Links at Groveport",	"FORE Championship",	"08-28-2017",	"N",	2017,	"August",	14	],
        [	47,	"St. Albans",	"Douche Bag Invitational",	"09-10-2017",	"N",	2017,	"September",	16	],
        [	48,	"Westchester",	"Last Gasp",	"10-01-2017",	"N",	2017,	"October",	16	],
        [	49,	"Willow Run",	"Rebel Beach Am-Am",	"04-08-2018",	"N",	2018,	"April",	28	],
        [	50,	"The Ridge",	"Bastards",	"04-29-2018",	"Y",	2018,	"April",	23	],
        [	51,	"St. Albans",	"FORE Championship",	"05-20-2018",	"N",	2018,	"May",	26	],
        [	52,	"Champions",	"F.U. Open",	"06-10-2018",	"Y",	2018,	"June",	23	],
        [	53,	"Crystal Springs",	"Bratish Open",	"07-15-2018",	"Y",	2018,	"July",	26	],
        [	54,	"Cumberland Trail",	"MGA Championship",	"08-05-2018",	"Y",	2018,	"August",	33	],
        [	55,	"Blues Creek",	"Douche Bag Invitational",	"08-26-2018",	"N",	2018,	"August",	22	],
        [	56,	"Links at Echo Springs",	"Last Gasp",	"09-23-2018",	"N",	2018,	"September",	16	],
        [	57,	"Westchester",	"Rebel Beach Am-Am",	"04-07-2019",	"N",	2019,	"April",	44	],
        [	58,	"Clover Valley",	"Bastards",	"04-28-2019",	"Y",	2019,	"April",	39	],
        [	59,	"Darby Creek",	"MGA Championship",	"05-19-2019",	"Y",	2019,	"May",	44	],
        [	60,	"Oakhaven",	"F.U. Open",	"06-09-2019",	"Y",	2019,	"June",	38	],
        [	61,	"Royal American",	"Bratish Open",	"07-14-2019",	"Y",	2019,	"July",	41	],
        [	62,	"Blackhawk",	"FORE Championship",	"08-04-2019",	"N",	2019,	"August",	35	],
        [	63,	"Kyber Run",	"Douche Bag Invitational",	"09-08-2019",	"N",	2019,	"September",	26	],
        [	64,	"Chapel Hill",	"Last Gasp",	"10-06-2019",	"N",	2019,	"October",	23	],
        [	65,	"Denison",	"MGA Championship",	"06-07-2020",	"Y",	2020,	"June",	34	],
        [	66,	"Oakhaven",	"F.U. Open",	"06-28-2020",	"Y",	2020,	"June",	31	],
        [	67,	"Royal American",	"Rebel Beach Am-Am",	"07-12-2020",	"N",	2020,	"July",	24	],
        [	68,	"Pine Hill",	"Bratish Open",	"07-26-2020",	"Y",	2020,	"July",	35	],
        [	69,	"Mill Creek",	"Bastards",	"08-02-2020",	"Y",	2020,	"August",	30	],
        [	70,	"Clover Valley",	"FORE Championship",	"08-22-2020",	"N",	2020,	"August",	36	],
        [	71,	"St. Albans",	"Douche Bag Invitational",	"09-20-2020",	"N",	2020,	"September",	32	],
        [	72,	"Blues Creek",	"Last Gasp",	"10-04-2020",	"N",	2020,	"October",	28	],
        [	73,	"Cumberland Trail",	"Rebel Beach Am-Am",	"04-18-2021",	"N",	2021,	"April",	56	],
        [	74,	"Blacklick Woods",	"Bastards",	"05-16-2021",	"Y",	2021,	"May",	55	],
        [	75,	"Darby Creek",	"MGA Championship",	"06-06-2021",	"Y",	2021,	"June",	48	],
        [	76,	"Chapel Hill",	"F.U. Open",	"06-27-2021",	"Y",	2021,	"June",	44	],
        [	77,	"Pine Hill",	"Bratish Open",	"07-18-2021",	"Y",	2021,	"July",	54	],
        [	78,	"The Ridge",	"FORE Championship",	"08-08-2021",	"N",	2021,	"August",	39	],
        [	79,	"Links at Echo Springs",	"Douche Bag Invitational",	"09-12-2021",	"N",	2021,	"September",	42	],
        [	80,	"Mill Creek",	"Last Gasp",	"10-03-2021",	"N",	2021,	"October",	30	],
        [	81,	"Kyber Run",	"Rebel Beach Am-Am",	"04-10-2022",	"N",	2022,	"April",	48	],
        [	82,	"Cumberland Trail",	"Bastards",	"05-01-2022",	"Y",	2022,	"May",	44	],
        [	83,	"Chapel Hill",	"MGA Championship",	"06-05-2022",	"Y",	2022,	"June",	46	],
        [	84,	"Oakhaven",	"F.U. Open",	"06-26-2022",	"Y",	2022,	"June",	41	],
        [	85,	"Links at Echo Springs",	"Bratish Open",	"08-07-2022",	"Y",	2022,	"August",	34	],
        [	86,	"Homestead Springs",	"FORE Championship",	"08-21-2022",	"N",	2022,	"August",	32	],
        [	87,	"Blues Creek",	"Douche Bag Invitational",	"09-11-2022",	"N",	2022,	"September",	43	],
        [	88,	"Denison",	"Last Gasp",	"10-02-2022",	"N",	2022,	"October",	25	],

    ]

}