export default function bs_list(haystack: number[], needle: number): boolean {
	let low = 0;
	let high = haystack.length - 1;

	while (low <= high) {
		const m = Math.floor(low + (high - low) / 2);
		const curr = haystack[m]

		if (curr === needle) return true;

		if (high === low) return false;

		if (curr > needle) {
			high = m;
		} else {
			low = m + 1;
		}
	}

	return false;
}
// export default function bs_list(haystack: number[], needle: number): boolean {
// 	let low = 0;
// 	let high = haystack.length;

// 	do {
// 		const mid = Math.floor(low + (high - low) / 2);
// 		const curr = haystack[mid];

// 		if (curr === needle) return true;
// 		if (needle < curr) high = mid;
// 		else low = mid + 1;

// 	} while (low < high)

// 	return false;
// }
// 4
// [1,2,3,4,5,6]
//  ^l^h
