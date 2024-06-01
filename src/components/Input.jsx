import React from 'react';

function Input({placeholder,type}) {
    const types =  type ? type = `${type}` : type = 'text'
    
  return (
    <div>
            <input type={types}  className='w-80 h-10 rounded p-3'  placeholder={placeholder}/> 

    </div>
  );
}

export default Input;
