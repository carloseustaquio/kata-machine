// my implementation
function get_pivot(arr: number[], lo: number, hi: number) {
	const pivot = arr[hi];

	let idx = lo;

	for (let i = lo; i < hi; i++) {
		if (arr[i] <= pivot) {
			const temp = arr[i];
			arr[i] = arr[idx]
			arr[idx] = temp;
			idx++;
		}
	}

	arr[hi] = arr[idx];
	arr[idx] = pivot;

	return idx;
}

function qs(arr: number[], lo: number, hi: number) {
	if (lo >= hi) {
		return;
	}

	const pivotIdx = get_pivot(arr, lo, hi);

	qs(arr, lo, pivotIdx - 1);
	qs(arr, pivotIdx + 1, hi);
}

export default function quick_sort(arr: number[]): void {
	qs(arr, 0, arr.length - 1)
}

// Prime's way of life
// function get_pivot(arr: number[], lo: number, hi: number) {
// 	const pivot = arr[hi];

// 	let idx = lo;

// 	for (let i = lo; i < hi; i++) {
// 		if (arr[i] <= pivot) {
// 			const temp = arr[i];
// 			arr[i] = arr[idx]
// 			arr[idx] = temp;
// 			idx++;
// 		}
// 	}

// 	arr[hi] = arr[idx];
// 	arr[idx] = pivot;

// 	return idx;
// }

// function qs(arr: number[], lo: number, hi: number) {
// 	if (lo >= hi) {
// 		return;
// 	}

// 	const pivotIdx = get_pivot(arr, lo, hi);

// 	qs(arr, lo, pivotIdx - 1);
// 	qs(arr, pivotIdx + 1, hi);
// }

// export default function quick_sort(arr: number[]): void {
// 	qs(arr, 0, arr.length - 1)
// }