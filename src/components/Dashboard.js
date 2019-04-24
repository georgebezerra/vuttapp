import React from "react";
import useFetch from "./useFetch";
import ListTools from "./ListTools";

export default function Dashboard(props) {
  const { data, isLoading, isError } = useFetch();
  return (
    <main>
      {isError && <div>Something went wrong</div>}
      {isLoading ? <p>Loading...</p> : <ListTools data={data} />}
    </main>
  );
}
