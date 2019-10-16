import React, { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;
    setData(item);
    setLoading(false);
  }, []);

  return { data, loading };
};

export default () => {
  //uses random user api
  const { data, loading } = useFetch("https://api.randomuser.me/");

  return (
    <div>
      <h1>
        F5 for new fetch
      </h1>
      {loading ?
        <div>...loading</div>
        :
        <div>
          {data.name.first + ' ' + data.name.last}
        </div>
      }
    </div>
  );
};