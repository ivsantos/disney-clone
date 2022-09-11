/**
 * @typedef {Object} DetailsType
 * @property {boolean} adult
 * @property {string} backdrop_path
 * @property {BelongsToCollectionType} belongs_to_collection
 * @property {number} budget
 * @property {GenreType[]} genres
 * @property {string} homepage
 * @property {number} id
 * @property {string} imdb_id
 * @property {string} original_language
 * @property {string} original_title
 * @property {string} overview
 * @property {number} popularity
 * @property {string} poster_path
 * @property {ProductionCompaniesType[]} production_companies
 * @property {ProductionCountries[]} production_countries
 * @property {string} release_date
 * @property {string} first_air_date
 * @property {number} revenue
 * @property {number} runtime
 * @property {SpokenLanguagesType[]} spoken_languages
 * @property {string} status
 * @property {string} tagline
 * @property {string} title
 * @property {string} name
 * @property {boolean} video
 * @property {number} vote_average
 * @property {number} vote_count
 */

/**
 * @typedef BelongsToCollectionType
 * @property {number} id
 * @property {string} name
 * @property {string} poster_path
 * @property {string} backdrop_path
 */

/**
 * @typedef GenreType
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef ProductionCompaniesType
 * @property {number} id
 * @property {string} logo_path
 * @property {string} name
 * @property {string} origin_country
 */

/**
 * @typedef ProductionCountries
 * @property {string} iso_3166_1
 * @property {string} name
 */

/**
 * @typedef SpokenLanguagesType
 * @property {string} english_name
 * @property {string} iso_639_1
 * @property {string} name
 */
