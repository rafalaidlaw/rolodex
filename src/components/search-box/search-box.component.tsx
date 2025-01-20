
import './search-box.styles.css';

import { ChangeEvent } from 'react';

//to type function:
//const func: (a: string, b: number, c: boolean) => void  = (a, b, c) => {}

//to type objects
//type is used to functional programming
//type 

//interface startst with I
// interface ISearchBoxProps extends IChangeHandlerProps {
//         className: string;
//         placeholder?: string;
// }

// interface IChangeHandlerProps {
//         onChangeHandler: (a: string) => void
// }

type SearchBoxProps = {
        className: string;
        placeholder: string;
        onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => (
                        
        <input 
        className= {`search-box ${className}`}
        type='search' 
       placeholder={placeholder}
        onChange={onChangeHandler} 
        />
                );
        

export default SearchBox;