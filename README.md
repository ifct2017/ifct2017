[Kit] for [Indian Food Composition Tables 2017].
> CDN for corpus: [unpkg], [jsDelivr].

```javascript
const ifct2017 = require('ifct2017');
// ifct2017.abbreviations(<query>)
// ifct2017.about(<query>)
// ...
```

### reference

| Name                    | Action
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

<br>
<br>

> NOTE: `.pictures(<code>) -> null` as it is not included locally.<br>
> Use `.pictures.unpkg(<code>)`, or `.pictures.jsdelivr(<code>)` instead.

[![Merferry](http://ifct2017.com/ifct_2017.jpg)](https://merferry.github.io)
> You can ask about composition of 528 key foods in India here: [ifct2017.github.io].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].

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
[Indian Food Composition Tables 2017]: http://ifct2017.com/
[Kit]: https://en.wikipedia.org/wiki/Kit_(of_components)
[unpkg]: https://unpkg.com/ifct2017/corpus.min.js
[jsDelivr]: https://cdn.jsdelivr.net/npm/ifct2017/corpus.min.js
[ifct2017.github.io]: https://ifct2017.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
