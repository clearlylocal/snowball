// Generated by Snowball 2.2.0 - https://snowballstem.org/
// deno-lint-ignore-file
import BaseStemmer from '../core/base-stemmer.mjs'

/** @typedef {{ stemWord(word: string): string }} Stemmer */

/** @type {{ new(): Stemmer }} */
const UkrainianStemmer = function () {
	var base = new BaseStemmer()
	/** @const */ var a_0 = [
		['\u0432', -1, 1],
		['\u0430\u0447\u0438', -1, 1],
		['\u0443\u0447\u0438', -1, 1],
		['\u044E\u0447\u0438', -1, 1],
		['\u044F\u0447\u0438', -1, 1],
		['\u043B\u044F\u0447\u0438', 4, 1],
		['\u0432\u0448\u0438', -1, 1],
		['\u0430\u0447\u0438\u0441\u044C', -1, 1],
		['\u044E\u0447\u0438\u0441\u044C', -1, 1],
		['\u044F\u0447\u0438\u0441\u044C', -1, 1],
		['\u043B\u044F\u0447\u0438\u0441\u044C', 9, 1],
		['\u0432\u0448\u0438\u0441\u044C', -1, 1],
		['\u0430\u0447\u0438\u0441\u044F', -1, 1],
		['\u044E\u0447\u0438\u0441\u044F', -1, 1],
		['\u044F\u0447\u0438\u0441\u044F', -1, 1],
		['\u043B\u044F\u0447\u0438\u0441\u044F', 14, 1],
		['\u0432\u0448\u0438\u0441\u044F', -1, 1],
	]

	/** @const */ var a_1 = [
		['\u0430\u0447\u0430', -1, 1],
		['\u0443\u0447\u0430', -1, 1],
		['\u044E\u0447\u0430', -1, 1],
		['\u044F\u0447\u0430', -1, 1],
		['\u0456\u0448\u0430', -1, 1],
		['\u0430\u0447\u0435', -1, 1],
		['\u0443\u0447\u0435', -1, 1],
		['\u044E\u0447\u0435', -1, 1],
		['\u044F\u0447\u0435', -1, 1],
		['\u0456\u0448\u0435', -1, 1],
		['\u0438\u043C\u0438', -1, 1],
		['\u0456\u0448\u0438\u043C\u0438', 10, 1],
		['\u0456\u043C\u0438', -1, 1],
		['\u0438\u0439', -1, 1],
		['\u0456\u0448\u0438\u0439', 13, 1],
		['\u0456\u0439', -1, 1],
		['\u0456\u0448\u0456\u0439', 15, 1],
		['\u0438\u043C', -1, 1],
		['\u0456\u0448\u0438\u043C', 17, 1],
		['\u0456\u043C', -1, 1],
		['\u0456\u0448\u0456\u043C', 19, 1],
		['\u043E\u0433\u043E', -1, 1],
		['\u0456\u0448\u043E\u0433\u043E', 21, 1],
		['\u044C\u043E\u0433\u043E', 21, 1],
		['\u043E\u043C\u0443', -1, 1],
		['\u0456\u0448\u043E\u043C\u0443', 24, 1],
		['\u044C\u043E\u043C\u0443', 24, 1],
		['\u0430\u0447\u0443', -1, 1],
		['\u0443\u0447\u0443', -1, 1],
		['\u044E\u0447\u0443', -1, 1],
		['\u044F\u0447\u0443', -1, 1],
		['\u0456\u0448\u0443', -1, 1],
		['\u0438\u0445', -1, 1],
		['\u0456\u0448\u0438\u0445', 32, 1],
		['\u0456\u0445', -1, 1],
		['\u043E\u044E', -1, 1],
		['\u0456\u0448\u043E\u044E', 35, 1],
		['\u044C\u043E\u044E', 35, 1],
		['\u0430\u0447\u0456', -1, 1],
		['\u0443\u0447\u0456', -1, 1],
		['\u044E\u0447\u0456', -1, 1],
		['\u044F\u0447\u0456', -1, 1],
		['\u0456\u0448\u0456', -1, 1],
		['\u043E\u0457', -1, 1],
		['\u0456\u0448\u043E\u0457', 43, 1],
		['\u044C\u043E\u0457', 43, 1],
	]

	/** @const */ var a_2 = [
		['\u0430\u0447', -1, 1],
		['\u0443\u0447', -1, 1],
		['\u044E\u0447', -1, 1],
		['\u044F\u0447', -1, 1],
	]

	/** @const */ var a_3 = [
		['\u0441\u044C', -1, 1],
		['\u0441\u044F', -1, 1],
		['\u0435\u0442\u044C\u0441\u044F', 1, 1],
		['\u0454\u0442\u044C\u0441\u044F', 1, 1],
	]

	/** @const */ var a_4 = [
		['\u043B\u0430', -1, 1],
		['\u0442\u0435', -1, 1],
		['\u0435\u0442\u0435', 1, 1],
		['\u0438\u0442\u0435', 1, 1],
		['\u0439\u0442\u0435', 1, 1],
		['\u0454\u0442\u0435', 1, 1],
		['\u0457\u0442\u0435', 1, 1],
		['\u043B\u0438', -1, 1],
		['\u0442\u0438', -1, 1],
		['\u043B\u043E', -1, 1],
		['\u0435\u043C\u043E', -1, 1],
		['\u0438\u043C\u043E', -1, 1],
		['\u0454\u043C\u043E', -1, 1],
		['\u0457\u043C\u043E', -1, 1],
		['\u0435\u0448', -1, 1],
		['\u0438\u0448', -1, 1],
		['\u0454\u0448', -1, 1],
		['\u0457\u0448', -1, 1],
		['\u0430\u0442\u044C', -1, 1],
		['\u0438\u0442\u044C', -1, 1],
		['\u0443\u0442\u044C', -1, 1],
		['\u044E\u0442\u044C', -1, 1],
		['\u044F\u0442\u044C', -1, 1],
		['\u043B\u044F\u0442\u044C', 22, 1],
		['\u0456\u0442\u044C', -1, 1],
		['\u0457\u0442\u044C', -1, 1],
		['\u043B\u044E', -1, 1],
	]

	/** @const */ var a_5 = [
		['\u0430\u043C\u0438', -1, 1],
		['\u044F\u043C\u0438', -1, 1],
		['\u043E\u0439', -1, 1],
		['\u0430\u043C', -1, 1],
		['\u0435\u043C', -1, 1],
		['\u043E\u043C', -1, 1],
		['\u044F\u043C', -1, 1],
		['\u0430\u0445', -1, 1],
		['\u044F\u0445', -1, 1],
		['\u0435\u043D\u044C', -1, 1],
		['\u0435\u0446\u044C', -1, 1],
		['\u0435\u044E', -1, 1],
		['\u0456\u044E', -1, 1],
		['\u043E\u0432\u0456', -1, 1],
		['\u0456\u0457', -1, 1],
	]

	/** @const */ var a_6 = [
		['\u0430', -1, 1],
		['\u0432', -1, 1],
		['\u0435', -1, 1],
		['\u0438', -1, 1],
		['\u0439', -1, 1],
		['\u0456\u0439', 4, 1],
		['\u043E', -1, 1],
		['\u0443', -1, 1],
		['\u044C', -1, 1],
		['\u044E', -1, 1],
		['\u043E\u044E', 9, 1],
		['\u044F', -1, 1],
		['\u0454', -1, 1],
		['\u0456', -1, 1],
	]

	/** @const */ var a_7 = [
		['\u043E\u0441\u0442', -1, 1],
		['\u0456\u0441\u0442', -1, 1],
	]

	/** @const */ var /** Array<int> */ g_v = [33, 65, 8, 192, 208]

	var /** number */ I_p2 = 0
	var /** number */ I_p1 = 0
	var /** number */ I_pV = 0

	/** @return {boolean} */
	function r_prelude() {
		var /** number */ v_1 = base.cursor
		lab0: {
			while (true) {
				var /** number */ v_2 = base.cursor
				lab1: {
					golab2:
					while (true) {
						var /** number */ v_3 = base.cursor
						lab3: {
							base.bra = base.cursor
							if (!(base.eq_s('\u0491'))) {
								break lab3
							}
							base.ket = base.cursor
							base.cursor = v_3
							break golab2
						}
						base.cursor = v_3
						if (base.cursor >= base.limit) {
							break lab1
						}
						base.cursor++
					}
					if (!base.slice_from('\u0433')) {
						return false
					}
					continue
				}
				base.cursor = v_2
				break
			}
		}
		base.cursor = v_1
		var /** number */ v_4 = base.cursor
		lab4: {
			while (true) {
				var /** number */ v_5 = base.cursor
				lab5: {
					golab6:
					while (true) {
						var /** number */ v_6 = base.cursor
						lab7: {
							base.bra = base.cursor
							if (!(base.eq_s('\''))) {
								break lab7
							}
							base.ket = base.cursor
							base.cursor = v_6
							break golab6
						}
						base.cursor = v_6
						if (base.cursor >= base.limit) {
							break lab5
						}
						base.cursor++
					}
					if (!base.slice_del()) {
						return false
					}
					continue
				}
				base.cursor = v_5
				break
			}
		}
		base.cursor = v_4
		var /** number */ v_7 = base.cursor
		lab8: {
			while (true) {
				var /** number */ v_8 = base.cursor
				lab9: {
					golab10:
					while (true) {
						var /** number */ v_9 = base.cursor
						lab11: {
							base.bra = base.cursor
							if (!(base.eq_s('\u02B9'))) {
								break lab11
							}
							base.ket = base.cursor
							base.cursor = v_9
							break golab10
						}
						base.cursor = v_9
						if (base.cursor >= base.limit) {
							break lab9
						}
						base.cursor++
					}
					if (!base.slice_del()) {
						return false
					}
					continue
				}
				base.cursor = v_8
				break
			}
		}
		base.cursor = v_7
		var /** number */ v_10 = base.cursor
		lab12: {
			while (true) {
				var /** number */ v_11 = base.cursor
				lab13: {
					golab14:
					while (true) {
						var /** number */ v_12 = base.cursor
						lab15: {
							base.bra = base.cursor
							if (!(base.eq_s('\u02BB'))) {
								break lab15
							}
							base.ket = base.cursor
							base.cursor = v_12
							break golab14
						}
						base.cursor = v_12
						if (base.cursor >= base.limit) {
							break lab13
						}
						base.cursor++
					}
					if (!base.slice_del()) {
						return false
					}
					continue
				}
				base.cursor = v_11
				break
			}
		}
		base.cursor = v_10
		var /** number */ v_13 = base.cursor
		lab16: {
			while (true) {
				var /** number */ v_14 = base.cursor
				lab17: {
					golab18:
					while (true) {
						var /** number */ v_15 = base.cursor
						lab19: {
							base.bra = base.cursor
							if (!(base.eq_s('\u02BC'))) {
								break lab19
							}
							base.ket = base.cursor
							base.cursor = v_15
							break golab18
						}
						base.cursor = v_15
						if (base.cursor >= base.limit) {
							break lab17
						}
						base.cursor++
					}
					if (!base.slice_del()) {
						return false
					}
					continue
				}
				base.cursor = v_14
				break
			}
		}
		base.cursor = v_13
		var /** number */ v_16 = base.cursor
		lab20: {
			while (true) {
				var /** number */ v_17 = base.cursor
				lab21: {
					golab22:
					while (true) {
						var /** number */ v_18 = base.cursor
						lab23: {
							base.bra = base.cursor
							if (!(base.eq_s('\u02BD'))) {
								break lab23
							}
							base.ket = base.cursor
							base.cursor = v_18
							break golab22
						}
						base.cursor = v_18
						if (base.cursor >= base.limit) {
							break lab21
						}
						base.cursor++
					}
					if (!base.slice_del()) {
						return false
					}
					continue
				}
				base.cursor = v_17
				break
			}
		}
		base.cursor = v_16
		var /** number */ v_19 = base.cursor
		lab24: {
			while (true) {
				var /** number */ v_20 = base.cursor
				lab25: {
					golab26:
					while (true) {
						var /** number */ v_21 = base.cursor
						lab27: {
							base.bra = base.cursor
							if (!(base.eq_s('\u02C8'))) {
								break lab27
							}
							base.ket = base.cursor
							base.cursor = v_21
							break golab26
						}
						base.cursor = v_21
						if (base.cursor >= base.limit) {
							break lab25
						}
						base.cursor++
					}
					if (!base.slice_del()) {
						return false
					}
					continue
				}
				base.cursor = v_20
				break
			}
		}
		base.cursor = v_19
		var /** number */ v_22 = base.cursor
		lab28: {
			while (true) {
				var /** number */ v_23 = base.cursor
				lab29: {
					golab30:
					while (true) {
						var /** number */ v_24 = base.cursor
						lab31: {
							base.bra = base.cursor
							if (!(base.eq_s('\u2018'))) {
								break lab31
							}
							base.ket = base.cursor
							base.cursor = v_24
							break golab30
						}
						base.cursor = v_24
						if (base.cursor >= base.limit) {
							break lab29
						}
						base.cursor++
					}
					if (!base.slice_del()) {
						return false
					}
					continue
				}
				base.cursor = v_23
				break
			}
		}
		base.cursor = v_22
		var /** number */ v_25 = base.cursor
		lab32: {
			while (true) {
				var /** number */ v_26 = base.cursor
				lab33: {
					golab34:
					while (true) {
						var /** number */ v_27 = base.cursor
						lab35: {
							base.bra = base.cursor
							if (!(base.eq_s('\u2019'))) {
								break lab35
							}
							base.ket = base.cursor
							base.cursor = v_27
							break golab34
						}
						base.cursor = v_27
						if (base.cursor >= base.limit) {
							break lab33
						}
						base.cursor++
					}
					if (!base.slice_del()) {
						return false
					}
					continue
				}
				base.cursor = v_26
				break
			}
		}
		base.cursor = v_25
		var /** number */ v_28 = base.cursor
		lab36: {
			while (true) {
				var /** number */ v_29 = base.cursor
				lab37: {
					golab38:
					while (true) {
						var /** number */ v_30 = base.cursor
						lab39: {
							base.bra = base.cursor
							if (!(base.eq_s('\u201B'))) {
								break lab39
							}
							base.ket = base.cursor
							base.cursor = v_30
							break golab38
						}
						base.cursor = v_30
						if (base.cursor >= base.limit) {
							break lab37
						}
						base.cursor++
					}
					if (!base.slice_del()) {
						return false
					}
					continue
				}
				base.cursor = v_29
				break
			}
		}
		base.cursor = v_28
		var /** number */ v_31 = base.cursor
		lab40: {
			while (true) {
				var /** number */ v_32 = base.cursor
				lab41: {
					golab42:
					while (true) {
						var /** number */ v_33 = base.cursor
						lab43: {
							base.bra = base.cursor
							if (!(base.eq_s('\u2032'))) {
								break lab43
							}
							base.ket = base.cursor
							base.cursor = v_33
							break golab42
						}
						base.cursor = v_33
						if (base.cursor >= base.limit) {
							break lab41
						}
						base.cursor++
					}
					if (!base.slice_del()) {
						return false
					}
					continue
				}
				base.cursor = v_32
				break
			}
		}
		base.cursor = v_31
		return true
	}

	/** @return {boolean} */
	function r_mark_regions() {
		I_pV = base.limit
		I_p1 = base.limit
		I_p2 = base.limit
		var /** number */ v_1 = base.cursor
		lab0: {
			golab1:
			while (true) {
				lab2: {
					if (!(base.in_grouping(g_v, 1072, 1111))) {
						break lab2
					}
					break golab1
				}
				if (base.cursor >= base.limit) {
					break lab0
				}
				base.cursor++
			}
			I_pV = base.cursor
			golab3:
			while (true) {
				lab4: {
					if (!(base.out_grouping(g_v, 1072, 1111))) {
						break lab4
					}
					break golab3
				}
				if (base.cursor >= base.limit) {
					break lab0
				}
				base.cursor++
			}
			I_p1 = base.cursor
			golab5:
			while (true) {
				lab6: {
					if (!(base.in_grouping(g_v, 1072, 1111))) {
						break lab6
					}
					break golab5
				}
				if (base.cursor >= base.limit) {
					break lab0
				}
				base.cursor++
			}
			golab7:
			while (true) {
				lab8: {
					if (!(base.out_grouping(g_v, 1072, 1111))) {
						break lab8
					}
					break golab7
				}
				if (base.cursor >= base.limit) {
					break lab0
				}
				base.cursor++
			}
			I_p2 = base.cursor
		}
		base.cursor = v_1
		return true
	}

	/** @return {boolean} */
	function r_R1() {
		if (!(I_p1 <= base.cursor)) {
			return false
		}
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
	function r_perfective_gerund() {
		base.ket = base.cursor
		if (base.find_among_b(a_0) == 0) {
			return false
		}
		base.bra = base.cursor
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_adjective() {
		base.ket = base.cursor
		if (base.find_among_b(a_1) == 0) {
			return false
		}
		base.bra = base.cursor
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_adjectival() {
		if (!r_adjective()) {
			return false
		}
		var /** number */ v_1 = base.limit - base.cursor
		lab0: {
			base.ket = base.cursor
			if (base.find_among_b(a_2) == 0) {
				base.cursor = base.limit - v_1
				break lab0
			}
			base.bra = base.cursor
			if (!base.slice_del()) {
				return false
			}
		}
		return true
	}

	/** @return {boolean} */
	function r_reflexive() {
		base.ket = base.cursor
		if (base.find_among_b(a_3) == 0) {
			return false
		}
		base.bra = base.cursor
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_verb() {
		base.ket = base.cursor
		if (base.find_among_b(a_4) == 0) {
			return false
		}
		base.bra = base.cursor
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_noun() {
		base.ket = base.cursor
		if (base.find_among_b(a_5) == 0) {
			return false
		}
		base.bra = base.cursor
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_common_avn() {
		base.ket = base.cursor
		if (base.find_among_b(a_6) == 0) {
			return false
		}
		base.bra = base.cursor
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	/** @return {boolean} */
	function r_derivational() {
		base.ket = base.cursor
		if (base.find_among_b(a_7) == 0) {
			return false
		}
		base.bra = base.cursor
		if (!r_R2()) {
			return false
		}
		if (!base.slice_del()) {
			return false
		}
		return true
	}

	this.stem = /** @return {boolean} */ function () {
		r_prelude()
		r_mark_regions()
		base.limit_backward = base.cursor
		base.cursor = base.limit
		if (base.cursor < I_pV) {
			return false
		}
		var /** number */ v_4 = base.limit_backward
		base.limit_backward = I_pV
		var /** number */ v_5 = base.limit - base.cursor
		lab0: {
			lab1: {
				var /** number */ v_6 = base.limit - base.cursor
				lab2: {
					if (!r_perfective_gerund()) {
						break lab2
					}
					break lab1
				}
				base.cursor = base.limit - v_6
				var /** number */ v_7 = base.limit - base.cursor
				lab3: {
					if (!r_reflexive()) {
						base.cursor = base.limit - v_7
						break lab3
					}
				}
				lab4: {
					var /** number */ v_8 = base.limit - base.cursor
					lab5: {
						if (!r_adjectival()) {
							break lab5
						}
						break lab4
					}
					base.cursor = base.limit - v_8
					lab6: {
						if (!r_verb()) {
							break lab6
						}
						break lab4
					}
					base.cursor = base.limit - v_8
					lab7: {
						if (!r_noun()) {
							break lab7
						}
						break lab4
					}
					base.cursor = base.limit - v_8
					if (!r_common_avn()) {
						break lab0
					}
				}
			}
		}
		base.cursor = base.limit - v_5
		var /** number */ v_9 = base.limit - base.cursor
		r_derivational()
		base.cursor = base.limit - v_9
		base.limit_backward = v_4
		base.cursor = base.limit_backward
		return true
	}

	/**@return{string}*/
	this['stemWord'] = function (/**string*/ word) {
		base.setCurrent(word)
		this.stem()
		return base.getCurrent()
	}
}

export default UkrainianStemmer