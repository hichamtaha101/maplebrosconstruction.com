import Vue from 'vue';
import moment from 'moment';

/**
 * Converts a date object into a simplified string format.
 *
 * @param {object} date			Date object.
 * @param {string} textFormat	String format adhering to moment js syntax.
 * @param {boolean} isUTC		Whether we should ignore the default timezone conversion or not ( already converted in utc format ).
 * @returns {string} Formatted date string.
 */
 function formatDate( date, textFormat = 'MMM DD, YYYY', isUTC = false ) {
	return isUTC ? moment.utc( date ).format( textFormat ) : moment( date ).format( textFormat );
}

Vue.filter( 'formatDate', formatDate );
