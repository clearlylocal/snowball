// Generated by Snowball 2.2.0 - https://snowballstem.org/
// deno-lint-ignore-file
import BaseStemmer from '../core/base-stemmer.mjs'

/** @typedef {{ stemWord(word: string): string }} Stemmer */

/** @type {{ new(): Stemmer }} */
const SlovakStemmer = function () {
	var base = new BaseStemmer()
	/** @const */ var a_0 = [
		['', -1, 15],
		['\u00E1', 0, 1],
		['\u00E4', 0, 1],
		['\u00E9', 0, 4],
		['\u00ED', 0, 5],
		['\u00F3', 0, 8],
		['\u00F4', 0, 8],
		['\u00FA', 0, 12],
		['\u00FD', 0, 13],
		['\u010D', 0, 2],
		['\u010F', 0, 3],
		['\u011B', 0, 4],
		['\u013A', 0, 6],
		['\u013E', 0, 6],
		['\u0148', 0, 7],
		['\u0155', 0, 9],
		['\u0159', 0, 9],
		['\u0161', 0, 10],
		['\u0165', 0, 11],
		['\u016F', 0, 12],
		['\u017E', 0, 14],
	]

	/** @const */ var a_1 = [
		['', -1, 21],
		['\u00C1', 0, 1],
		['\u00C4', 0, 2],
		['\u00C9', 0, 5],
		['\u00CD', 0, 7],
		['\u00D3', 0, 12],
		['\u00D4', 0, 11],
		['\u00DA', 0, 17],
		['\u00DD', 0, 19],
		['\u010C', 0, 3],
		['\u010E', 0, 4],
		['\u011A', 0, 6],
		['\u0139', 0, 8],
		['\u013D', 0, 10],
		['\u013E', 0, 9],
		['\u0154', 0, 13],
		['\u0158', 0, 14],
		['\u0160', 0, 15],
		['\u0164', 0, 16],
		['\u016E', 0, 18],
		['\u017D', 0, 20],
	]

	/** @const */ var a_2 = [
		['babicka', -1, 5],
		['babiek', -1, 5],
		['bol', -1, 1],
		['bola', 2, 1],
		['bolo', 2, 1],
		['bud', -1, 1],
		['bude', 5, 1],
		['budem', 6, 1],
		['budeme', 7, 1],
		['budes', 6, 1],
		['budete', 6, 1],
		['budme', 5, 1],
		['budte', 5, 1],
		['budu', 5, 1],
		['chod', -1, 3],
		['chodte', 14, 3],
		['dlan', -1, 6],
		['ide', -1, 3],
		['idem', 17, 3],
		['ideme', 18, 3],
		['ides', 17, 3],
		['idete', 17, 3],
		['idu', -1, 3],
		['iduc', 22, 3],
		['iduca', 23, 3],
		['iduce', 23, 3],
		['iduci', 23, 3],
		['isiel', -1, 3],
		['isla', -1, 3],
		['isli', -1, 3],
		['islo', -1, 3],
		['je', -1, 1],
		['jedia', 31, 4],
		['jedla', 31, 4],
		['jedli', 31, 4],
		['jedlo', 31, 4],
		['jedol', 31, 4],
		['jedz', 31, 4],
		['jedzme', 37, 4],
		['jedzte', 37, 4],
		['jem', 31, 4],
		['jeme', 40, 4],
		['jes', 31, 4],
		['jete', 31, 4],
		['ma', -1, 2],
		['maj', 44, 2],
		['majetok', 45, 8],
		['majme', 45, 2],
		['majte', 45, 2],
		['maju', 45, 2],
		['mal', 44, 2],
		['mala', 50, 2],
		['mali', 50, 2],
		['malo', 50, 2],
		['mam', 44, 2],
		['mame', 54, 2],
		['mamicka', 54, 7],
		['mamka', 54, 7],
		['mas', 44, 2],
		['mate', 44, 2],
		['maticka', 44, 7],
		['matka', 44, 7],
		['meste', -1, 9],
		['miest', -1, 9],
		['pod', -1, 3],
		['podme', 64, 3],
		['podte', 64, 3],
		['pojde', -1, 3],
		['pojdem', 67, 3],
		['pojdeme', 68, 3],
		['pojdes', 67, 3],
		['pojdete', 67, 3],
		['pojdu', -1, 3],
		['si', -1, 1],
		['siel', 73, 3],
		['sla', -1, 3],
		['sli', -1, 3],
		['slo', -1, 3],
		['sme', -1, 1],
		['som', -1, 1],
		['sral', -1, 10],
		['srali', 80, 10],
		['ste', -1, 1],
		['su', -1, 1],
		['zien', -1, 11],
	]

	/** @const */ var a_3 = [
		['bez', -1, 2],
		['cez', -1, 2],
		['do', -1, 3],
		['nad', -1, 2],
		['naj', -1, 2],
		['ne', -1, 3],
		['ob', -1, 3],
		['od', -1, 3],
		['po', -1, 3],
		['pod', 8, 2],
		['pre', -1, 2],
		['pri', -1, 2],
		['proti', -1, 1],
		['roz', -1, 2],
		['vy', -1, 3],
		['vz', -1, 3],
		['za', -1, 3],
	]

	/** @const */ var a_4 = [
		['a', -1, 1],
		['ia', 0, 1],
		['ejsia', 1, 1],
		['ovia', 1, 1],
		['inovia', 3, 1],
		['ska', 0, 1],
		['ala', 0, 1],
		['ovala', 6, 1],
		['ila', 0, 1],
		['ina', 0, 1],
		['ata', 0, 1],
		['va', 0, 1],
		['eniec', -1, 1],
		['ujuc', -1, 1],
		['e', -1, 1],
		['ence', 14, 1],
		['ie', 14, 1],
		['sie', 16, 1],
		['ejsie', 17, 1],
		['uje', 14, 1],
		['me', 14, 1],
		['ame', 20, 1],
		['avame', 21, 1],
		['eme', 20, 1],
		['ieme', 23, 1],
		['ujeme', 23, 1],
		['ime', 20, 1],
		['jme', 20, 1],
		['ujme', 27, 1],
		['ine', 14, 1],
		['te', 14, 1],
		['ate', 30, 1],
		['avate', 31, 1],
		['ete', 30, 1],
		['iete', 33, 1],
		['ujete', 33, 1],
		['ite', 30, 1],
		['jte', 30, 1],
		['ujte', 37, 1],
		['ve', 14, 1],
		['ove', 39, 1],
		['ach', -1, 1],
		['iach', 41, 1],
		['atach', 41, 1],
		['ich', -1, 1],
		['ejsich', 44, 1],
		['och', -1, 1],
		['encoch', 46, 1],
		['inoch', 46, 1],
		['ych', -1, 1],
		['inych', 49, 1],
		['ovych', 49, 1],
		['i', -1, 1],
		['ali', 52, 1],
		['ovali', 53, 1],
		['ili', 52, 1],
		['mi', 52, 1],
		['ami', 56, 1],
		['encami', 57, 1],
		['inami', 57, 1],
		['atami', 57, 1],
		['imi', 56, 1],
		['ejsimi', 61, 1],
		['ymi', 56, 1],
		['inymi', 63, 1],
		['ovymi', 63, 1],
		['ini', 52, 1],
		['ejsi', 52, 1],
		['ati', 52, 1],
		['ovi', 52, 1],
		['inovi', 69, 1],
		['ej', -1, 1],
		['inej', 71, 1],
		['ejsej', 71, 1],
		['ovej', 71, 1],
		['al', -1, 1],
		['oval', 75, 1],
		['il', -1, 1],
		['m', -1, 1],
		['am', 78, 1],
		['iam', 79, 1],
		['atam', 79, 1],
		['avam', 79, 1],
		['iem', 78, 1],
		['ujem', 78, 1],
		['im', 78, 1],
		['ejsim', 85, 1],
		['om', 78, 1],
		['encom', 87, 1],
		['inom', 87, 1],
		['ejsom', 87, 1],
		['atom', 87, 1],
		['ovom', 87, 1],
		['ym', 78, 1],
		['inym', 93, 1],
		['ovym', 93, 1],
		['n', -1, 1],
		['in', 96, 1],
		['ho', -1, 1],
		['eho', 98, 1],
		['ieho', 99, 1],
		['ejsieho', 100, 1],
		['inho', 98, 1],
		['ovho', 98, 1],
		['alo', -1, 1],
		['ovalo', 104, 1],
		['ilo', -1, 1],
		['ino', -1, 1],
		['vo', -1, 1],
		['ovo', 108, 1],
		['as', -1, 1],
		['avas', 110, 1],
		['es', -1, 1],
		['ies', 112, 1],
		['ujes', 112, 1],
		['is', -1, 1],
		['at', -1, 1],
		['it', -1, 1],
		['u', -1, 1],
		['iu', 118, 1],
		['ejsiu', 119, 1],
		['aju', 118, 1],
		['avaju', 121, 1],
		['uju', 118, 1],
		['mu', 118, 1],
		['emu', 124, 1],
		['iemu', 125, 1],
		['ejsiemu', 126, 1],
		['inmu', 124, 1],
		['ovmu', 124, 1],
		['inu', 118, 1],
		['ou', 118, 1],
		['inou', 131, 1],
		['ejsou', 131, 1],
		['ovou', 131, 1],
		['atu', 118, 1],
		['vu', 118, 1],
		['ovu', 136, 1],
		['v', -1, 1],
		['ov', 138, 1],
		['inov', 139, 1],
		['y', -1, 1],
		['ovy', 141, 1],
	]

	/** @const */ var /** Array<int> */ g_vowel = [17, 65, 16, 1]

	var /** number */ I_p2 = 0
	var /** number */ I_p1 = 0

	/** @return {boolean} */
	function r_un_accent() {
		var /** number */ among_var
		while (true) {
			var /** number */ v_1 = base.cursor
			lab0: {
				base.bra = base.cursor
				among_var = base.find_among(a_0)
				if (among_var == 0) {
					break lab0
				}
				base.ket = base.cursor
				switch (among_var) {
					case 1:
						if (!base.slice_from('a')) {
							return false
						}
						break
					case 2:
						if (!base.slice_from('c')) {
							return false
						}
						break
					case 3:
						if (!base.slice_from('d')) {
							return false
						}
						break
					case 4:
						if (!base.slice_from('e')) {
							return false
						}
						break
					case 5:
						if (!base.slice_from('i')) {
							return false
						}
						break
					case 6:
						if (!base.slice_from('l')) {
							return false
						}
						break
					case 7:
						if (!base.slice_from('n')) {
							return false
						}
						break
					case 8:
						if (!base.slice_from('o')) {
							return false
						}
						break
					case 9:
						if (!base.slice_from('r')) {
							return false
						}
						break
					case 10:
						if (!base.slice_from('s')) {
							return false
						}
						break
					case 11:
						if (!base.slice_from('t')) {
							return false
						}
						break
					case 12:
						if (!base.slice_from('u')) {
							return false
						}
						break
					case 13:
						if (!base.slice_from('y')) {
							return false
						}
						break
					case 14:
						if (!base.slice_from('z')) {
							return false
						}
						break
					case 15:
						if (base.cursor >= base.limit) {
							break lab0
						}
						base.cursor++
						break
				}
				continue
			}
			base.cursor = v_1
			break
		}
		return true
	}

	/** @return {boolean} */
	function r_lower_case() {
		var /** number */ among_var
		while (true) {
			var /** number */ v_1 = base.cursor
			lab0: {
				base.bra = base.cursor
				among_var = base.find_among(a_1)
				if (among_var == 0) {
					break lab0
				}
				base.ket = base.cursor
				switch (among_var) {
					case 1:
						if (!base.slice_from('\u00E1')) {
							return false
						}
						break
					case 2:
						if (!base.slice_from('\u00E4')) {
							return false
						}
						break
					case 3:
						if (!base.slice_from('\u010D')) {
							return false
						}
						break
					case 4:
						if (!base.slice_from('\u010F')) {
							return false
						}
						break
					case 5:
						if (!base.slice_from('\u00E9')) {
							return false
						}
						break
					case 6:
						if (!base.slice_from('\u011B')) {
							return false
						}
						break
					case 7:
						if (!base.slice_from('\u00ED')) {
							return false
						}
						break
					case 8:
						if (!base.slice_from('\u013A')) {
							return false
						}
						break
					case 9:
						if (!base.slice_from('\u013E')) {
							return false
						}
						break
					case 10:
						if (!base.slice_from('\u0148')) {
							return false
						}
						break
					case 11:
						if (!base.slice_from('\u00F4')) {
							return false
						}
						break
					case 12:
						if (!base.slice_from('\u00F3')) {
							return false
						}
						break
					case 13:
						if (!base.slice_from('\u0155')) {
							return false
						}
						break
					case 14:
						if (!base.slice_from('\u0159')) {
							return false
						}
						break
					case 15:
						if (!base.slice_from('\u0161')) {
							return false
						}
						break
					case 16:
						if (!base.slice_from('\u0165')) {
							return false
						}
						break
					case 17:
						if (!base.slice_from('\u00FA')) {
							return false
						}
						break
					case 18:
						if (!base.slice_from('\u016F')) {
							return false
						}
						break
					case 19:
						if (!base.slice_from('\u00FD')) {
							return false
						}
						break
					case 20:
						if (!base.slice_from('\u017E')) {
							return false
						}
						break
					case 21:
						if (base.cursor >= base.limit) {
							break lab0
						}
						base.cursor++
						break
				}
				continue
			}
			base.cursor = v_1
			break
		}
		return true
	}

	/** @return {boolean} */
	function r_exception() {
		var /** number */ among_var
		base.bra = base.cursor
		among_var = base.find_among(a_2)
		if (among_var == 0) {
			return false
		}
		base.ket = base.cursor
		if (base.cursor < base.limit) {
			return false
		}
		switch (among_var) {
			case 1:
				if (!base.slice_from('byt')) {
					return false
				}
				break
			case 2:
				if (!base.slice_from('mat')) {
					return false
				}
				break
			case 3:
				if (!base.slice_from('ist')) {
					return false
				}
				break
			case 4:
				if (!base.slice_from('jest')) {
					return false
				}
				break
			case 5:
				if (!base.slice_from('babk')) {
					return false
				}
				break
			case 6:
				if (!base.slice_from('dlan')) {
					return false
				}
				break
			case 7:
				if (!base.slice_from('mam')) {
					return false
				}
				break
			case 8:
				if (!base.slice_from('majetk')) {
					return false
				}
				break
			case 9:
				if (!base.slice_from('mest')) {
					return false
				}
				break
			case 10:
				if (!base.slice_from('ser')) {
					return false
				}
				break
			case 11:
				if (!base.slice_from('zen')) {
					return false
				}
				break
		}
		return true
	}

	/** @return {boolean} */
	function r_mark_p1() {
		I_p1 = base.limit
		golab0:
		while (true) {
			lab1: {
				if (!(base.in_grouping(g_vowel, 97, 121))) {
					break lab1
				}
				break golab0
			}
			if (base.cursor >= base.limit) {
				return false
			}
			base.cursor++
		}
		golab2:
		while (true) {
			lab3: {
				if (!(base.out_grouping(g_vowel, 97, 121))) {
					break lab3
				}
				break golab2
			}
			if (base.cursor >= base.limit) {
				return false
			}
			base.cursor++
		}
		I_p1 = base.cursor
		return true
	}

	/** @return {boolean} */
	function r_prefixes() {
		var /** number */ among_var
		var /** number */ v_1 = base.cursor
		lab0: {
			base.bra = base.cursor
			among_var = base.find_among(a_3)
			if (among_var == 0) {
				break lab0
			}
			base.ket = base.cursor
			switch (among_var) {
				case 1:
					if (!(I_p1 > 4)) {
						break lab0
					}
					if (!base.slice_del()) {
						return false
					}
					break
				case 2:
					if (!(I_p1 > 2)) {
						break lab0
					}
					if (!base.slice_del()) {
						return false
					}
					break
				case 3:
					if (!(I_p1 > 1)) {
						break lab0
					}
					if (!base.slice_del()) {
						return false
					}
					break
			}
		}
		base.cursor = v_1
		return true
	}

	/** @return {boolean} */
	function r_R2() {
		if (!(I_p2 <= base.cursor)) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_mark_p2() {
		I_p2 = base.limit_backward
		return true
	}

	/** @return {boolean} */
	function r_suffixes() {
		r_mark_p2()
		var /** number */ v_2 = base.limit - base.cursor
		lab0: {
			base.ket = base.cursor
			if (base.find_among_b(a_4) == 0) {
				break lab0
			}
			base.bra = base.cursor
			if (!r_R2()) {
				break lab0
			}
			if (!base.slice_del()) {
				return false
			}
		}
		base.cursor = base.limit - v_2
		return true
	}

	/** @return {boolean} */
	function r_end_vowel() {
		base.ket = base.cursor
		if (!(base.in_grouping_b(g_vowel, 97, 121))) {
			return false
		}
		base.bra = base.cursor
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	this.stem = /** @return {boolean} */ function () {
		var /** number */ v_1 = base.cursor
		r_lower_case()
		base.cursor = v_1
		var /** number */ v_2 = base.cursor
		r_un_accent()
		base.cursor = v_2
		var /** number */ v_3 = base.cursor
		r_mark_p1()
		base.cursor = v_3
		r_prefixes()
		lab0: {
			var /** number */ v_5 = base.cursor
			lab1: {
				if (!r_exception()) {
					break lab1
				}
				break lab0
			}
			base.cursor = v_5
			base.limit_backward = base.cursor
			base.cursor = base.limit
			r_suffixes()
			var /** number */ v_7 = base.limit - base.cursor
			r_end_vowel()
			base.cursor = base.limit - v_7
			base.cursor = base.limit_backward
		}
		return true
	}

	/**@return{string}*/
	this['stemWord'] = function (/**string*/ word) {
		base.setCurrent(word)
		this.stem()
		return base.getCurrent()
	}
}

export default SlovakStemmer
