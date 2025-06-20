"use client";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState();

  const getData = async () => {
    const response = await fetch("/api");
    setData(await response.json());
  }

  return (
    <div className="text-center">
      <button onClick={getData}>button</button>
      {data && <div>{data && data.hoge}</div>}
    </div>
  );
}
