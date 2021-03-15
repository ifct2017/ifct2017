The Indian Food Composition tables ([IFCT 2017]) provides nutritional values for 528 key foods.
Food composition values were measured by [National Institute of Nutrition, Hyderabad]. Shown
below is a text-query javascript API for search information through these tables. You may
also add these to a database for more control over the query.

> Online database: [ifct2017.github.io].

<br>

```javascript
const ifct2017 = require('ifct2017');


async function main() {
await ifct2017.compositions.load();
/// Load corpus first


ifct2017.compositions('pineapple');
ifct2017.compositions('ananas comosus');
// [ { code: 'E053',
//     name: 'Pineapple',
//     scie: 'Ananas comosus',
//     lang: 'A. Ahnaros; B. Anarasa; G. Anenas; H. Ananas; Kan. Ananas; Kash. Punchitipul; Kh. Soh trun; Kon. Anas; Mal. Kayirha chakka; M. Kihom Ananas; O. Sapuri; P. Ananas; Tam. Annasi pazham; Tel. Anasa pandu; U. Ananas.',
//     ... } ]

ifct2017.columns('vitamin c');
ifct2017.columns('c-vitamin');
// [ { code: 'vitc',
//     name: 'Total Ascorbic acid',
//     tags: 'ascorbate water soluble vitamin c vitamin c essential' } ]

ifct2017.pictures.unpkg('A001');
// https://unpkg.com/@ifct2017/pictures/assets/A001.jpeg

ifct2017.intakes('his');
ifct2017.intakes('Histidine');
// [ { code: 'his',
//     whorda: -0.01,
//     usear: NaN,
//     usrdam: -0.014,
//     usrdaf: NaN,
//     euprim: NaN,
//     euprif: NaN,
//     ulus: NaN,
//     uleu: NaN,
//     uljapan: NaN } ]
/// Negative value indicates amount per kg of body weight.
}
main();
```

<br>
<br>


### Reference

| Method                  | Action
|-------------------------|-------
| [compositions]          | Detailed nutrient composition of 528 key foods in India.
| [columns]               | Codes and names of nutrients, and its components.
| [pictures]              | Single representative photo of each foods (JPEG, 307x173).
| [intakes]               | Recommended daily intakes of nutrients.
| [hierarchy]             | Tree-like hierarchy of nutrients, and its components.
| [representations]       | Representations of columns (as factors and units).
| [codes]                 | Uniquely identifiable codes for each food.
| [groups]                | Categorization of food by their common names.
| [descriptions]          | Names of each food in local languages, including scientific name.
| [abbreviations]         | Full forms of abbreviations used in the original book.
| [languages]             | Full form of language abbreviations.
| [methods]               | Analytical methods of nutrient and bioactive components.
| [energies]              | Metabolizable energy conversion factors.
| [nutrients]             | Detailed description of various nutrients, and its components.
| [jonesFactors]          | Jones factors for conversion of nitrogen to protein.
| [carbohydrates]         | Conversion of carbohydrate weights to monosaccharide equivalents.
| [regions]               | Categorization of the States/UTs into six different regions.
| [samplingUnits]         | Number of primary sampling units in each State/UT.
| [compositingCentres]    | Regional compositing centres and sample size of each region.
| [frequencyDistribution] | Frequency distribution of States/UTs for fixing the number of districts to be sampled.
| [about]                 | On the history of malnutrition, current status, and data details.
| [contents]              | Contents in the original book.

> NOTE: `.pictures(code) -> null` as it is not included locally.<br>
> Use `.pictures.unpkg(code)`, or `.pictures.jsDelivr(code)` instead.

> A corpus consisting of columns, hierarchy, intakes, methods, nutrients,<br>
> representations is available for use with UI: [unpkg], [jsDelivr].

<br>
<br>

[![](https://i.imgur.com/D5UYmbD.jpg)](http://ifct2017.com/)

[abbreviations]: https://www.npmjs.com/package/@ifct2017/abbreviations
[about]: https://www.npmjs.com/package/@ifct2017/about
[carbohydrates]: https://www.npmjs.com/package/@ifct2017/carbohydrates
[codes]: https://www.npmjs.com/package/@ifct2017/codes
[columns]: https://www.npmjs.com/package/@ifct2017/columns
[compositingCentres]: https://www.npmjs.com/package/@ifct2017/compositingcentres
[compositions]: https://www.npmjs.com/package/@ifct2017/compositions
[contents]: https://www.npmjs.com/package/@ifct2017/contents
[descriptions]: https://www.npmjs.com/package/@ifct2017/descriptions
[energies]: https://www.npmjs.com/package/@ifct2017/energies
[frequencyDistribution]: https://www.npmjs.com/package/@ifct2017/frequencydistribution
[groups]: https://www.npmjs.com/package/@ifct2017/groups
[hierarchy]: https://www.npmjs.com/package/@ifct2017/hierarchy
[intakes]: https://www.npmjs.com/package/@ifct2017/intakes
[jonesFactors]: https://www.npmjs.com/package/@ifct2017/jonesfactors
[languages]: https://www.npmjs.com/package/@ifct2017/languages
[methods]: https://www.npmjs.com/package/@ifct2017/methods
[nutrients]: https://www.npmjs.com/package/@ifct2017/nutrients
[pictures]: https://www.npmjs.com/package/@ifct2017/pictures
[regions]: https://www.npmjs.com/package/@ifct2017/regions
[representations]: https://www.npmjs.com/package/@ifct2017/representations
[samplingUnits]: https://www.npmjs.com/package/@ifct2017/samplingunits
[IFCT 2017]: http://ifct2017.com/
[unpkg]: https://unpkg.com/ifct2017/corpus.min.js
[jsDelivr]: https://cdn.jsdelivr.net/npm/ifct2017/corpus.min.js
[ifct2017.github.io]: https://ifct2017.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
