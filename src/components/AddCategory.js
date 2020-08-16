import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(inputValue.trim().length>2){
            setCategories(cats=>[inputValue,...cats]);
            setInputValue('');
        }
        
    }



    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text"
                value={inputValue}
                onChange={onChangeHandler} />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}