import React, { useState } from 'react';
import styled from 'styled-components';

const Styles = styled.div``;

const Slider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {};

  return (
    <Styles>
      <input
        type='range'
        min={25}
        max={180}
        value={value}
        className='slider'
        onChange={handleChange}
      />
      <div className='value'>{value}</div>
    </Styles>
  );
};

export default Slider;
