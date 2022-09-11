/**
 * @typedef {Object} VideosType
 * @property {boolean} id
 * @property {VideoResultsType[]} results
 */

/**
 * @typedef {Object} VideoResultsType
 * @property {string} iso_639_1
 * @property {string} iso_3166_1
 * @property {string} name
 * @property {string} key
 * @property {string} site
 * @property {number} size
 * @property {TypeEnum} type
 * @property {boolean} official
 * @property {string} published_at
 * @property {string} id
 */

/**
 * @typedef { 'Featurette' | 'Clip' | 'Trailer' | 'Behind the Scenes' } TypeEnum
 */
