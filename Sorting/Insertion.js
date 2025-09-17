function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let curr = arr[i];
        let j = i - 1;

        // Shift elements to the right until the correct spot is found
        while (j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the current value at its correct position
        arr[j + 1] = curr;
    }

    return arr;
}

let arr = [5, 6, 7, 1, 2, 4];
console.log('Sorted array (ascending):', insertionSort(arr));
