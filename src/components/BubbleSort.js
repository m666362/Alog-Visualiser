import React from 'react';
import useTrackedStore from '../store/useTrackedStore';

function BubbleSort(props) {
    const state = useTrackedStore();
    function swap(array, left, right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        return array;
    }
    return (
        <div>
            <button onClick={() => {
                let array = state.data;
                let backgroundColors = state.backgroundColors;
                let borderColors = state.borderColors;
                console.log({ array: JSON.stringify(array) });
                for (let i = array.length - 2; i >= 0; i--) {
                    // setTimeout(() => {
                        
                    // }, 0);

                    for (let j = 0; j <= i; j++) {
                        if (parseInt(array[j]) > parseInt(array[j + 1])) {
                            array = swap(array, j, j+1)
                            backgroundColors = swap(backgroundColors, j, j+1)
                            borderColors = swap(borderColors, j, j+1)
                            // let temp = array[j];
                            // array[j] = array[j + 1];
                            // array[j + 1] = temp;
                            // state.setSort(array);
                        }
                    }
                    
                    state.setData([...array], [...backgroundColors], [...borderColors]);

                }
                console.log({ array: JSON.stringify(array) });
            }}>Bubble Sort</button>
        </div>
    );
}

export default BubbleSort;