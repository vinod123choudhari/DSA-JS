function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap for descending order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if (!swapped) break; // Optimization: stop if already sorted
    }

    return arr;
}

let arr = [5, 6, 7, 1, 2, 4];
console.log('Sorted array:', bubbleSort(arr));
