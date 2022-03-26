import React from 'react';

import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import useTrackedStore from '../../store/useTrackedStore';



function Form(props) {
    const state = useTrackedStore()
    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
            dataValue: [],
        }
    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getColor() {
        let rgba = `rgba(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)}`
        return {
            backgroundColor: `${rgba}, 0.2)`,
            borderColor: `${rgba}, 1)`,
        };
    }

    const onSubmit = data => {
        console.log(data.dataValue.split(","));
        let dataValue = [], backgroundColors = [], borderColors=[];
        for (let i = 0; i < data.dataValue; i++) {
            dataValue.push(getRandomInt(100));
            const {backgroundColor, borderColor} = getColor();
            backgroundColors.push(backgroundColor);
            borderColors.push(borderColor)
        }
        state.setData(dataValue, backgroundColors, borderColors)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="dataValue"
                control={control}
                // rules={{ required: true }}
                render={({ field }) => <TextField
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    {...field} />}
            />
            {/* <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Checkbox {...field} />}
            /> */}

            <input type="submit" />
        </form>
    );
}

export default Form;