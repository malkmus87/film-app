import React, { useState } from 'react';
interface PropsType {
    onSubmit: Function;
}
const SearchInput = (props: PropsType) => {
    const [searchKey, setSearchKey] = useState<string>("");
    const [activeTimeout, setActiveTimeout] = useState<number | null>(null);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKey(event.target.value);
        if (activeTimeout !== null) {
            window.clearTimeout(activeTimeout);
        }
        let newTimeoutID: number = window.setTimeout(() => onSearch(event.target.value), 1500);
        setActiveTimeout(newTimeoutID);

    }
    const onSearch = (submittedKey: string) => {
        console.log("Submitted searchkey: " + submittedKey);
        props.onSubmit(submittedKey);
    }
    
    return (
        <div>
            <input
                type="text"
                value={searchKey}
                onChange={onChange}
            />
            <button onClick={() => onSearch(searchKey)}>Sök</button>
        </div>
    )
}
export default SearchInput;