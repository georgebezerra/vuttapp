import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTool from "./AddTool";
import Dashboard from "./Dashboard";
import Suggestions from "./Suggestions";

export default function Search(props) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    function getFetchUrl() {
      return "http://localhost:3000/tools?q=" + query;
    }
    async function fetchData() {
      const result = await axios(getFetchUrl());
      setData(result.data);
    }
    fetchData();
    return () => console.log("unmounting....");
  }, [query]);

  return (
    <div className="form-row">
      <div className="busca">
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
      </div>
      <div>
        <div className="form-check">
          <input
            className="form-check-input tag"
            value=""
            type="checkbox"
            id="defaultCheck1"
            onClick={() =>
              setSearch(`http://localhost:3000/tools?tags_like=${search}`)
            }
          />
          <label className="form-check-label search" htmlFor="defaultCheck1">
            search in tags only
          </label>
        </div>
      </div>
      <AddTool />
      {query ? <Suggestions data={data} /> : <Dashboard />}
    </div>
  );
}
