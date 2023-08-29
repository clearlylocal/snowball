// deno-lint-ignore-file
import BaseStemmer from '../core/base-stemmer.js'
// Generated by Snowball 2.2.0 - https://snowballstem.org/

/**@constructor*/
/** @type {StemmerConstructor} */
export default (function PolishStemmer() {
	var base = new BaseStemmer()
	var /** number */ I_pos = 0

	/** @return {boolean} */
	function r_remove_nouns() {
		lab0: {
			var /** number */ v_1 = base.cursor
			lab1: {
				if (!(base.current.length > 7)) {
					break lab1
				}
				var /** number */ v_2 = base.cursor
				I_pos = base.current.length - 5
				{
					var /** number */ c1 = base.cursor + I_pos
					if (c1 > base.limit || c1 < base.cursor) {
						break lab1
					}
					base.cursor = c1
				}
				lab2: {
					var /** number */ v_3 = base.cursor
					lab3: {
						if (!(base.eq_s('zacja'))) {
							break lab3
						}
						break lab2
					}
					base.cursor = v_3
					lab4: {
						if (!(base.eq_s('zacja'))) {
							break lab4
						}
						break lab2
					}
					base.cursor = v_3
					if (!(base.eq_s('zacji'))) {
						break lab1
					}
				}
				base.cursor = v_2
				I_pos = base.current.length - 4
				{
					var /** number */ c2 = base.cursor + I_pos
					if (c2 > base.limit || c2 < base.cursor) {
						break lab1
					}
					base.cursor = c2
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			lab5: {
				if (!(base.current.length > 6)) {
					break lab5
				}
				var /** number */ v_4 = base.cursor
				I_pos = base.current.length - 4
				{
					var /** number */ c3 = base.cursor + I_pos
					if (c3 > base.limit || c3 < base.cursor) {
						break lab5
					}
					base.cursor = c3
				}
				lab6: {
					var /** number */ v_5 = base.cursor
					lab7: {
						if (!(base.eq_s('acja'))) {
							break lab7
						}
						break lab6
					}
					base.cursor = v_5
					lab8: {
						if (!(base.eq_s('acji'))) {
							break lab8
						}
						break lab6
					}
					base.cursor = v_5
					lab9: {
						if (!(base.eq_s('acj\u0105'))) {
							break lab9
						}
						break lab6
					}
					base.cursor = v_5
					lab10: {
						if (!(base.eq_s('tach'))) {
							break lab10
						}
						break lab6
					}
					base.cursor = v_5
					lab11: {
						if (!(base.eq_s('anie'))) {
							break lab11
						}
						break lab6
					}
					base.cursor = v_5
					lab12: {
						if (!(base.eq_s('enie'))) {
							break lab12
						}
						break lab6
					}
					base.cursor = v_5
					lab13: {
						if (!(base.eq_s('eniu'))) {
							break lab13
						}
						break lab6
					}
					base.cursor = v_5
					if (!(base.eq_s('aniu'))) {
						break lab5
					}
				}
				base.cursor = v_4
				I_pos = base.current.length - 4
				{
					var /** number */ c4 = base.cursor + I_pos
					if (c4 > base.limit || c4 < base.cursor) {
						break lab5
					}
					base.cursor = c4
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			lab14: {
				if (!(base.current.length > 6)) {
					break lab14
				}
				var /** number */ v_6 = base.cursor
				I_pos = base.current.length - 4
				{
					var /** number */ c5 = base.cursor + I_pos
					if (c5 > base.limit || c5 < base.cursor) {
						break lab14
					}
					base.cursor = c5
				}
				if (!(base.eq_s('tyka'))) {
					break lab14
				}
				base.cursor = v_6
				I_pos = base.current.length - 2
				{
					var /** number */ c6 = base.cursor + I_pos
					if (c6 > base.limit || c6 < base.cursor) {
						break lab14
					}
					base.cursor = c6
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			lab15: {
				if (!(base.current.length > 5)) {
					break lab15
				}
				var /** number */ v_7 = base.cursor
				I_pos = base.current.length - 3
				{
					var /** number */ c7 = base.cursor + I_pos
					if (c7 > base.limit || c7 < base.cursor) {
						break lab15
					}
					base.cursor = c7
				}
				lab16: {
					var /** number */ v_8 = base.cursor
					lab17: {
						if (!(base.eq_s('ach'))) {
							break lab17
						}
						break lab16
					}
					base.cursor = v_8
					lab18: {
						if (!(base.eq_s('ami'))) {
							break lab18
						}
						break lab16
					}
					base.cursor = v_8
					lab19: {
						if (!(base.eq_s('nia'))) {
							break lab19
						}
						break lab16
					}
					base.cursor = v_8
					lab20: {
						if (!(base.eq_s('niu'))) {
							break lab20
						}
						break lab16
					}
					base.cursor = v_8
					lab21: {
						if (!(base.eq_s('cia'))) {
							break lab21
						}
						break lab16
					}
					base.cursor = v_8
					if (!(base.eq_s('ciu'))) {
						break lab15
					}
				}
				base.cursor = v_7
				I_pos = base.current.length - 3
				{
					var /** number */ c8 = base.cursor + I_pos
					if (c8 > base.limit || c8 < base.cursor) {
						break lab15
					}
					base.cursor = c8
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			lab22: {
				if (!(base.current.length > 5)) {
					break lab22
				}
				var /** number */ v_9 = base.cursor
				I_pos = base.current.length - 3
				{
					var /** number */ c9 = base.cursor + I_pos
					if (c9 > base.limit || c9 < base.cursor) {
						break lab22
					}
					base.cursor = c9
				}
				lab23: {
					var /** number */ v_10 = base.cursor
					lab24: {
						if (!(base.eq_s('cji'))) {
							break lab24
						}
						break lab23
					}
					base.cursor = v_10
					lab25: {
						if (!(base.eq_s('cja'))) {
							break lab25
						}
						break lab23
					}
					base.cursor = v_10
					if (!(base.eq_s('cj\u0105'))) {
						break lab22
					}
				}
				base.cursor = v_9
				I_pos = base.current.length - 2
				{
					var /** number */ c10 = base.cursor + I_pos
					if (c10 > base.limit || c10 < base.cursor) {
						break lab22
					}
					base.cursor = c10
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			if (!(base.current.length > 5)) {
				return false
			}
			var /** number */ v_11 = base.cursor
			I_pos = base.current.length - 2
			{
				var /** number */ c11 = base.cursor + I_pos
				if (c11 > base.limit || c11 < base.cursor) {
					return false
				}
				base.cursor = c11
			}
			lab26: {
				var /** number */ v_12 = base.cursor
				lab27: {
					if (!(base.eq_s('ce'))) {
						break lab27
					}
					break lab26
				}
				base.cursor = v_12
				if (!(base.eq_s('ta'))) {
					return false
				}
			}
			base.cursor = v_11
			I_pos = base.current.length - 2
			{
				var /** number */ c12 = base.cursor + I_pos
				if (c12 > base.limit || c12 < base.cursor) {
					return false
				}
				base.cursor = c12
			}
			base.bra = base.cursor
			base.cursor = base.limit
			base.ket = base.cursor
			if (!base.slice_del()) {
				return false
			}
		}
		return true
	}

	/** @return {boolean} */
	function r_remove_dimunitive() {
		lab0: {
			var /** number */ v_1 = base.cursor
			lab1: {
				if (!(base.current.length > 6)) {
					break lab1
				}
				var /** number */ v_2 = base.cursor
				I_pos = base.current.length - 5
				{
					var /** number */ c1 = base.cursor + I_pos
					if (c1 > base.limit || c1 < base.cursor) {
						break lab1
					}
					base.cursor = c1
				}
				lab2: {
					var /** number */ v_3 = base.cursor
					lab3: {
						if (!(base.eq_s('eczek'))) {
							break lab3
						}
						break lab2
					}
					base.cursor = v_3
					lab4: {
						if (!(base.eq_s('iczek'))) {
							break lab4
						}
						break lab2
					}
					base.cursor = v_3
					lab5: {
						if (!(base.eq_s('iszek'))) {
							break lab5
						}
						break lab2
					}
					base.cursor = v_3
					lab6: {
						if (!(base.eq_s('aszek'))) {
							break lab6
						}
						break lab2
					}
					base.cursor = v_3
					if (!(base.eq_s('uszek'))) {
						break lab1
					}
				}
				base.cursor = v_2
				I_pos = base.current.length - 5
				{
					var /** number */ c2 = base.cursor + I_pos
					if (c2 > base.limit || c2 < base.cursor) {
						break lab1
					}
					base.cursor = c2
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			lab7: {
				if (!(base.current.length > 6)) {
					break lab7
				}
				var /** number */ v_4 = base.cursor
				I_pos = base.current.length - 4
				{
					var /** number */ c3 = base.cursor + I_pos
					if (c3 > base.limit || c3 < base.cursor) {
						break lab7
					}
					base.cursor = c3
				}
				lab8: {
					var /** number */ v_5 = base.cursor
					lab9: {
						if (!(base.eq_s('enek'))) {
							break lab9
						}
						break lab8
					}
					base.cursor = v_5
					lab10: {
						if (!(base.eq_s('ejek'))) {
							break lab10
						}
						break lab8
					}
					base.cursor = v_5
					if (!(base.eq_s('erek'))) {
						break lab7
					}
				}
				base.cursor = v_4
				I_pos = base.current.length - 2
				{
					var /** number */ c4 = base.cursor + I_pos
					if (c4 > base.limit || c4 < base.cursor) {
						break lab7
					}
					base.cursor = c4
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			if (!(base.current.length > 4)) {
				return false
			}
			var /** number */ v_6 = base.cursor
			I_pos = base.current.length - 2
			{
				var /** number */ c5 = base.cursor + I_pos
				if (c5 > base.limit || c5 < base.cursor) {
					return false
				}
				base.cursor = c5
			}
			lab11: {
				var /** number */ v_7 = base.cursor
				lab12: {
					if (!(base.eq_s('ek'))) {
						break lab12
					}
					break lab11
				}
				base.cursor = v_7
				if (!(base.eq_s('ak'))) {
					return false
				}
			}
			base.cursor = v_6
			I_pos = base.current.length - 2
			{
				var /** number */ c6 = base.cursor + I_pos
				if (c6 > base.limit || c6 < base.cursor) {
					return false
				}
				base.cursor = c6
			}
			base.bra = base.cursor
			base.cursor = base.limit
			base.ket = base.cursor
			if (!base.slice_del()) {
				return false
			}
		}
		return true
	}

	/** @return {boolean} */
	function r_remove_adjective_ends() {
		lab0: {
			var /** number */ v_1 = base.cursor
			lab1: {
				if (!(base.current.length > 7)) {
					break lab1
				}
				var /** number */ v_2 = base.cursor
				if (!(base.eq_s('naj'))) {
					break lab1
				}
				I_pos = (base.limit - base.cursor) - 3
				{
					var /** number */ c1 = base.cursor + I_pos
					if (c1 > base.limit || c1 < base.cursor) {
						break lab1
					}
					base.cursor = c1
				}
				lab2: {
					var /** number */ v_3 = base.cursor
					lab3: {
						if (!(base.eq_s('sze'))) {
							break lab3
						}
						break lab2
					}
					base.cursor = v_3
					if (!(base.eq_s('szy'))) {
						break lab1
					}
				}
				base.cursor = v_2
				base.bra = base.cursor
				{
					var /** number */ c2 = base.cursor + 3
					if (c2 > base.limit) {
						break lab1
					}
					base.cursor = c2
				}
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				I_pos = (base.limit - base.cursor) - 3
				{
					var /** number */ c3 = base.cursor + I_pos
					if (c3 > base.limit || c3 < base.cursor) {
						break lab1
					}
					base.cursor = c3
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			lab4: {
				if (!(base.current.length > 7)) {
					break lab4
				}
				var /** number */ v_4 = base.cursor
				if (!(base.eq_s('naj'))) {
					break lab4
				}
				I_pos = (base.limit - base.cursor) - 5
				{
					var /** number */ c4 = base.cursor + I_pos
					if (c4 > base.limit || c4 < base.cursor) {
						break lab4
					}
					base.cursor = c4
				}
				if (!(base.eq_s('szych'))) {
					break lab4
				}
				base.cursor = v_4
				base.bra = base.cursor
				{
					var /** number */ c5 = base.cursor + 3
					if (c5 > base.limit) {
						break lab4
					}
					base.cursor = c5
				}
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				I_pos = base.current.length - 5
				{
					var /** number */ c6 = base.cursor + I_pos
					if (c6 > base.limit || c6 < base.cursor) {
						break lab4
					}
					base.cursor = c6
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			lab5: {
				if (!(base.current.length > 6)) {
					break lab5
				}
				var /** number */ v_5 = base.cursor
				I_pos = base.limit - 4
				{
					var /** number */ c7 = base.cursor + I_pos
					if (c7 > base.limit || c7 < base.cursor) {
						break lab5
					}
					base.cursor = c7
				}
				if (!(base.eq_s('czny'))) {
					break lab5
				}
				base.cursor = v_5
				I_pos = base.current.length - 4
				{
					var /** number */ c8 = base.cursor + I_pos
					if (c8 > base.limit || c8 < base.cursor) {
						break lab5
					}
					base.cursor = c8
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			lab6: {
				if (!(base.current.length > 5)) {
					break lab6
				}
				var /** number */ v_6 = base.cursor
				I_pos = base.current.length - 3
				{
					var /** number */ c9 = base.cursor + I_pos
					if (c9 > base.limit || c9 < base.cursor) {
						break lab6
					}
					base.cursor = c9
				}
				lab7: {
					var /** number */ v_7 = base.cursor
					lab8: {
						if (!(base.eq_s('owy'))) {
							break lab8
						}
						break lab7
					}
					base.cursor = v_7
					lab9: {
						if (!(base.eq_s('owa'))) {
							break lab9
						}
						break lab7
					}
					base.cursor = v_7
					lab10: {
						if (!(base.eq_s('owe'))) {
							break lab10
						}
						break lab7
					}
					base.cursor = v_7
					lab11: {
						if (!(base.eq_s('ych'))) {
							break lab11
						}
						break lab7
					}
					base.cursor = v_7
					if (!(base.eq_s('ego'))) {
						break lab6
					}
				}
				base.cursor = v_6
				I_pos = base.current.length - 3
				{
					var /** number */ c10 = base.cursor + I_pos
					if (c10 > base.limit || c10 < base.cursor) {
						break lab6
					}
					base.cursor = c10
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			if (!(base.current.length > 5)) {
				return false
			}
			var /** number */ v_8 = base.cursor
			I_pos = base.current.length - 2
			{
				var /** number */ c11 = base.cursor + I_pos
				if (c11 > base.limit || c11 < base.cursor) {
					return false
				}
				base.cursor = c11
			}
			if (!(base.eq_s('ej'))) {
				return false
			}
			base.cursor = v_8
			I_pos = base.current.length - 2
			{
				var /** number */ c12 = base.cursor + I_pos
				if (c12 > base.limit || c12 < base.cursor) {
					return false
				}
				base.cursor = c12
			}
			base.bra = base.cursor
			base.cursor = base.limit
			base.ket = base.cursor
			if (!base.slice_del()) {
				return false
			}
		}
		return true
	}

	/** @return {boolean} */
	function r_remove_verbs_ends() {
		lab0: {
			var /** number */ v_1 = base.cursor
			lab1: {
				if (!(base.current.length > 5)) {
					break lab1
				}
				var /** number */ v_2 = base.cursor
				I_pos = base.limit - 3
				{
					var /** number */ c1 = base.cursor + I_pos
					if (c1 > base.limit || c1 < base.cursor) {
						break lab1
					}
					base.cursor = c1
				}
				if (!(base.eq_s('bym'))) {
					break lab1
				}
				base.cursor = v_2
				I_pos = base.current.length - 3
				{
					var /** number */ c2 = base.cursor + I_pos
					if (c2 > base.limit || c2 < base.cursor) {
						break lab1
					}
					base.cursor = c2
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			lab2: {
				if (!(base.current.length > 5)) {
					break lab2
				}
				var /** number */ v_3 = base.cursor
				I_pos = base.current.length - 3
				{
					var /** number */ c3 = base.cursor + I_pos
					if (c3 > base.limit || c3 < base.cursor) {
						break lab2
					}
					base.cursor = c3
				}
				lab3: {
					var /** number */ v_4 = base.cursor
					lab4: {
						if (!(base.eq_s('esz'))) {
							break lab4
						}
						break lab3
					}
					base.cursor = v_4
					lab5: {
						if (!(base.eq_s('asz'))) {
							break lab5
						}
						break lab3
					}
					base.cursor = v_4
					lab6: {
						if (!(base.eq_s('cie'))) {
							break lab6
						}
						break lab3
					}
					base.cursor = v_4
					lab7: {
						if (!(base.eq_s('e\u015B\u0107'))) {
							break lab7
						}
						break lab3
					}
					base.cursor = v_4
					lab8: {
						if (!(base.eq_s('a\u015Bc'))) {
							break lab8
						}
						break lab3
					}
					base.cursor = v_4
					lab9: {
						if (!(base.eq_s('\u0142em'))) {
							break lab9
						}
						break lab3
					}
					base.cursor = v_4
					lab10: {
						if (!(base.eq_s('amy'))) {
							break lab10
						}
						break lab3
					}
					base.cursor = v_4
					if (!(base.eq_s('emy'))) {
						break lab2
					}
				}
				base.cursor = v_3
				I_pos = base.current.length - 3
				{
					var /** number */ c4 = base.cursor + I_pos
					if (c4 > base.limit || c4 < base.cursor) {
						break lab2
					}
					base.cursor = c4
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			lab11: {
				if (!(base.current.length > 3)) {
					break lab11
				}
				var /** number */ v_5 = base.cursor
				I_pos = base.current.length - 2
				{
					var /** number */ c5 = base.cursor + I_pos
					if (c5 > base.limit || c5 < base.cursor) {
						break lab11
					}
					base.cursor = c5
				}
				lab12: {
					var /** number */ v_6 = base.cursor
					lab13: {
						if (!(base.eq_s('a\u0107'))) {
							break lab13
						}
						break lab12
					}
					base.cursor = v_6
					lab14: {
						if (!(base.eq_s('e\u0107'))) {
							break lab14
						}
						break lab12
					}
					base.cursor = v_6
					lab15: {
						if (!(base.eq_s('em'))) {
							break lab15
						}
						break lab12
					}
					base.cursor = v_6
					lab16: {
						if (!(base.eq_s('am'))) {
							break lab16
						}
						break lab12
					}
					base.cursor = v_6
					lab17: {
						if (!(base.eq_s('a\u0142'))) {
							break lab17
						}
						break lab12
					}
					base.cursor = v_6
					lab18: {
						if (!(base.eq_s('i\u0142'))) {
							break lab18
						}
						break lab12
					}
					base.cursor = v_6
					lab19: {
						if (!(base.eq_s('i\u0107'))) {
							break lab19
						}
						break lab12
					}
					base.cursor = v_6
					if (!(base.eq_s('\u0105c'))) {
						break lab11
					}
				}
				base.cursor = v_5
				I_pos = base.current.length - 2
				{
					var /** number */ c6 = base.cursor + I_pos
					if (c6 > base.limit || c6 < base.cursor) {
						break lab11
					}
					base.cursor = c6
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			if (!(base.current.length > 3)) {
				return false
			}
			var /** number */ v_7 = base.cursor
			I_pos = base.current.length - 2
			{
				var /** number */ c7 = base.cursor + I_pos
				if (c7 > base.limit || c7 < base.cursor) {
					return false
				}
				base.cursor = c7
			}
			if (!(base.eq_s('aj'))) {
				return false
			}
			base.cursor = v_7
			I_pos = base.current.length - 1
			{
				var /** number */ c8 = base.cursor + I_pos
				if (c8 > base.limit || c8 < base.cursor) {
					return false
				}
				base.cursor = c8
			}
			base.bra = base.cursor
			base.cursor = base.limit
			base.ket = base.cursor
			if (!base.slice_del()) {
				return false
			}
		}
		return true
	}

	/** @return {boolean} */
	function r_remove_adverbs_ends() {
		lab0: {
			var /** number */ v_1 = base.cursor
			lab1: {
				if (!(base.current.length > 4)) {
					break lab1
				}
				var /** number */ v_2 = base.cursor
				I_pos = base.current.length - 3
				{
					var /** number */ c1 = base.cursor + I_pos
					if (c1 > base.limit || c1 < base.cursor) {
						break lab1
					}
					base.cursor = c1
				}
				lab2: {
					var /** number */ v_3 = base.cursor
					lab3: {
						if (!(base.eq_s('nie'))) {
							break lab3
						}
						break lab2
					}
					base.cursor = v_3
					if (!(base.eq_s('wie'))) {
						break lab1
					}
				}
				base.cursor = v_2
				I_pos = base.current.length - 2
				{
					var /** number */ c2 = base.cursor + I_pos
					if (c2 > base.limit || c2 < base.cursor) {
						break lab1
					}
					base.cursor = c2
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			if (!(base.current.length > 4)) {
				return false
			}
			var /** number */ v_4 = base.cursor
			I_pos = base.current.length - 2
			{
				var /** number */ c3 = base.cursor + I_pos
				if (c3 > base.limit || c3 < base.cursor) {
					return false
				}
				base.cursor = c3
			}
			if (!(base.eq_s('rze'))) {
				return false
			}
			base.cursor = v_4
			I_pos = base.current.length - 2
			{
				var /** number */ c4 = base.cursor + I_pos
				if (c4 > base.limit || c4 < base.cursor) {
					return false
				}
				base.cursor = c4
			}
			base.bra = base.cursor
			base.cursor = base.limit
			base.ket = base.cursor
			if (!base.slice_del()) {
				return false
			}
		}
		return true
	}

	/** @return {boolean} */
	function r_remove_plural_forms() {
		lab0: {
			var /** number */ v_1 = base.cursor
			lab1: {
				if (!(base.current.length > 4)) {
					break lab1
				}
				var /** number */ v_2 = base.cursor
				I_pos = base.current.length - 2
				{
					var /** number */ c1 = base.cursor + I_pos
					if (c1 > base.limit || c1 < base.cursor) {
						break lab1
					}
					base.cursor = c1
				}
				lab2: {
					var /** number */ v_3 = base.cursor
					lab3: {
						if (!(base.eq_s('\u00F3w'))) {
							break lab3
						}
						break lab2
					}
					base.cursor = v_3
					if (!(base.eq_s('om'))) {
						break lab1
					}
				}
				base.cursor = v_2
				I_pos = base.current.length - 2
				{
					var /** number */ c2 = base.cursor + I_pos
					if (c2 > base.limit || c2 < base.cursor) {
						break lab1
					}
					base.cursor = c2
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			if (!(base.current.length > 4)) {
				return false
			}
			var /** number */ v_4 = base.cursor
			I_pos = base.current.length - 3
			{
				var /** number */ c3 = base.cursor + I_pos
				if (c3 > base.limit || c3 < base.cursor) {
					return false
				}
				base.cursor = c3
			}
			if (!(base.eq_s('ami'))) {
				return false
			}
			base.cursor = v_4
			I_pos = base.current.length - 3
			{
				var /** number */ c4 = base.cursor + I_pos
				if (c4 > base.limit || c4 < base.cursor) {
					return false
				}
				base.cursor = c4
			}
			base.bra = base.cursor
			base.cursor = base.limit
			base.ket = base.cursor
			if (!base.slice_del()) {
				return false
			}
		}
		return true
	}

	/** @return {boolean} */
	function r_remove_general_ends() {
		lab0: {
			var /** number */ v_1 = base.cursor
			lab1: {
				if (!(base.current.length > 4)) {
					break lab1
				}
				var /** number */ v_2 = base.cursor
				I_pos = base.current.length - 2
				{
					var /** number */ c1 = base.cursor + I_pos
					if (c1 > base.limit || c1 < base.cursor) {
						break lab1
					}
					base.cursor = c1
				}
				lab2: {
					var /** number */ v_3 = base.cursor
					lab3: {
						if (!(base.eq_s('ia'))) {
							break lab3
						}
						break lab2
					}
					base.cursor = v_3
					if (!(base.eq_s('ie'))) {
						break lab1
					}
				}
				base.cursor = v_2
				I_pos = base.current.length - 2
				{
					var /** number */ c2 = base.cursor + I_pos
					if (c2 > base.limit || c2 < base.cursor) {
						break lab1
					}
					base.cursor = c2
				}
				base.bra = base.cursor
				base.cursor = base.limit
				base.ket = base.cursor
				if (!base.slice_del()) {
					return false
				}
				break lab0
			}
			base.cursor = v_1
			if (!(base.current.length > 4)) {
				return false
			}
			var /** number */ v_4 = base.cursor
			I_pos = base.current.length - 1
			{
				var /** number */ c3 = base.cursor + I_pos
				if (c3 > base.limit || c3 < base.cursor) {
					return false
				}
				base.cursor = c3
			}
			lab4: {
				var /** number */ v_5 = base.cursor
				lab5: {
					if (!(base.eq_s('u'))) {
						break lab5
					}
					break lab4
				}
				base.cursor = v_5
				lab6: {
					if (!(base.eq_s('\u0105'))) {
						break lab6
					}
					break lab4
				}
				base.cursor = v_5
				lab7: {
					if (!(base.eq_s('i'))) {
						break lab7
					}
					break lab4
				}
				base.cursor = v_5
				lab8: {
					if (!(base.eq_s('a'))) {
						break lab8
					}
					break lab4
				}
				base.cursor = v_5
				lab9: {
					if (!(base.eq_s('\u0119'))) {
						break lab9
					}
					break lab4
				}
				base.cursor = v_5
				lab10: {
					if (!(base.eq_s('y'))) {
						break lab10
					}
					break lab4
				}
				base.cursor = v_5
				if (!(base.eq_s('\u0142'))) {
					return false
				}
			}
			base.cursor = v_4
			I_pos = base.current.length - 1
			{
				var /** number */ c4 = base.cursor + I_pos
				if (c4 > base.limit || c4 < base.cursor) {
					return false
				}
				base.cursor = c4
			}
			base.bra = base.cursor
			base.cursor = base.limit
			base.ket = base.cursor
			if (!base.slice_del()) {
				return false
			}
		}
		return true
	}

	this.stem = /** @return {boolean} */ function () {
		var /** number */ v_1 = base.cursor
		r_remove_nouns()
		base.cursor = v_1
		var /** number */ v_2 = base.cursor
		r_remove_dimunitive()
		base.cursor = v_2
		var /** number */ v_3 = base.cursor
		r_remove_adjective_ends()
		base.cursor = v_3
		var /** number */ v_4 = base.cursor
		r_remove_verbs_ends()
		base.cursor = v_4
		var /** number */ v_5 = base.cursor
		r_remove_adverbs_ends()
		base.cursor = v_5
		var /** number */ v_6 = base.cursor
		r_remove_plural_forms()
		base.cursor = v_6
		var /** number */ v_7 = base.cursor
		r_remove_general_ends()
		base.cursor = v_7
		return true
	}

	/**@return{string}*/
	this['stemWord'] = function (/**string*/ word) {
		base.setCurrent(word)
		this.stem()
		return base.getCurrent()
	}
})
