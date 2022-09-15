import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import Notiflix from 'notiflix';
import {
    SearchForm,
    SearchFormBtn,
    SearchFormBtnLabel,
    SearchFormInput,
} from "./MovieForm.styled";

export function MovieForm({ handleSubmit, movies }) {
    const [query, setQuery] = useState('');
    const [searchParams] = useSearchParams();
    const userQuery = searchParams.get('query');

    useEffect(() => {
        if (!movies) return setQuery('');

        setQuery(userQuery);
    }, [movies, userQuery]);
    
    const onChange = e => {
        setQuery(e.target.value);
    };
   
    const onSubmit = e => {
        e.preventDefault();
        
        if(query.trim() === '') {
            return Notiflix.Notify.warning('Enter your query');
        }
        handleSubmit(query);
        setQuery('');
    };

    return (
        <SearchForm 
        onSubmit={onSubmit}
        movies={movies}
        >
            <SearchFormInput
                type="text"
                autocomplete="off"
                autoFocus
                placeholder="Search movie"
                value={query}
                onChange={onChange}
            />

            <SearchFormBtn type="submit">
                <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                <ImSearch/>
            </SearchFormBtn>
        </SearchForm>
    );
}
