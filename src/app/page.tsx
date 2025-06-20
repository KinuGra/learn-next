"use client";

import Image from "next/image";

const getData = async () => {
  const response = await fetch("/api");
  let data = await response.json();
  console.log(data);
}

export default function Home() {
  return (
    <>
      <button onClick={getData}>button</button>
    </>
  );
}
