import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { storyActions } from "../../redux/actions";
import { getKeywords } from "../../services/getKeyWords";
import Keywords from "../Keywords/Keywords";
import "./search.css";

const Search = () => {
  const dispatch = useDispatch();
  const { fetchData } = bindActionCreators(storyActions, dispatch);
  const [tags, setTags] = useState([]);
  const [formState, setFormState] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    getKeywords(value).then((data) => setTags(data.result));
    setFormState(value);
  };

  const onSuggestionClick = (keyword) => {
    setFormState(keyword);
  };

  const handleSubmit = () => {
    setTags([]);
    fetchData(formState);
  };

  return (
    <div>
      <div className="search__form-group">
        <label htmlFor="search" className="label">
          Enter Search Text
        </label>
        <input
          type="text"
          id="search"
          className="input"
          onChange={handleChange}
        />
        <button
          type="button"
          className="button"
          disabled={!formState}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      <Keywords tags={tags} handleKeyword={onSuggestionClick} />
    </div>
  );
};

export default Search;
