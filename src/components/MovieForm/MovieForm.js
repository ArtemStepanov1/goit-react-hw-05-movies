import { ImSearch } from "react-icons/im";
import Notiflix from 'notiflix';
import {
    SearchForm,
    SearchFormBtn,
    SearchFormBtnLabel,
    SearchFormInput,
} from "./MovieForm.styled";

export function MovieForm({ onSearch }) {
   
    const onSubmit = e => {
        e.preventDefault();
        const inpunValue = e.currentTarget.elements.query.value;
        if(inpunValue.trim() === ''){ 
            Notiflix.Notify.warning('Enter your query');
            return;
        }
        onSearch(inpunValue);
        e.currentTarget.reset()
    };

    return (
        <SearchForm 
        onSubmit={onSubmit}
        >
            <SearchFormInput
                type="text"
                name="query"
                autocomplete="off"
                autoFocus
                placeholder="Search movie"
            />

            <SearchFormBtn type="submit">
                <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                <ImSearch/>
            </SearchFormBtn>
        </SearchForm>
    );
}
