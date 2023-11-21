import React, { useState } from 'react';
import TimePickerPicker from 'react-time-picker';

function TimePicker() {
  const [value, onChange] = useState(new Date());

     return (
        <div>
            <TimePickerPicker onChange={onChange} value={value} />
        </div>
    );
}
export default TimePicker;