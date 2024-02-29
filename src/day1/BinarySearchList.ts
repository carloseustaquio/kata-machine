// ##### 3
export default function bs_list(haystack: number[], needle: number): boolean {
	let left = 0;
	let right = haystack.length - 1;

	while (left <= right) {
		const mid = Math.floor(((right - left) / 2) + left) // left is the offset and right-left is the actual mid point between the needles
		const curr = haystack[mid];

		if (curr === needle) return true;
		if (left === right) return false;

		if (curr < needle) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	return false;
}

// const result = bs_list([0, 1, 2, 3, 4, 5], 2);
// console.log(result)

// 0, 1, 2, 3, 4
// l     m     r
//       l     r

// ####### 2
// export default function bs_list(haystack: number[], needle: number): boolean {
// 	let low = 0;
// 	let high = haystack.length - 1;

// 	while (low <= high) {
// 		const m = Math.floor(low + (high - low) / 2);
// 		const curr = haystack[m]

// 		if (curr === needle) return true;

// 		if (high === low) return false;

// 		if (curr > needle) {
// 			high = m;
// 		} else {
// 			low = m + 1;
// 		}
// 	}

// 	return false;
// }

// ##### 1
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
