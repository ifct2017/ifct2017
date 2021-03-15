/**
 * Gives UNPKG URL of a food picture.
 * [📦](https://www.npmjs.com/package/@ifct2017/pictures)
 * @param cod food code
 * @returns URL if present, null otherwise
 * @example
 * ```javascript
 * pictures.unpkg('A001');
 * // https://unpkg.com/@ifct2017/pictures/assets/A001.jpeg
 * ```
 */
 export function unpkg(cod: string): string | null;


 /**
  * Gives jsDelivr URL of a food picture.
  * [📦](https://www.npmjs.com/package/@ifct2017/pictures)
  * @param cod food code
  * @returns URL if present, null otherwise
  * @example
  * ```javascript
  * pictures.jsDelivr('A001');
  * // https://cdn.jsdelivr.net/npm/@ifct2017/pictures/assets/A001.jpeg
  * ```
  */
  export function jsDelivr(cod: string): string | null;


 /**
  * Gives path of a food picture.
  * [📦](https://www.npmjs.com/package/@ifct2017/pictures)
  * @param cod food code
  * @returns path if present, null otherwise
  * @example
  * ```javascript
  * pictures('A001');
  * // C:\Documents\pictures\A001.jpeg
  * ```
  */
 function pictures(cod: string): string | null;
 export = pictures;
