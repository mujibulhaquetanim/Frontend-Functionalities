import { useState, useEffect } from "react";
import { COUNTRIES } from "./DB/Countries";
import CountryCard from "./components/CountryCard";
import SubMenu from "./components/SubMenu";

interface Country {
  code: string;
  name: string;
}

function ScrollSpyApp() {
  return <div>
    <div>
      {}
      {COUNTRIES.map((country) => (
        <CountryCard key={country.code} name={country.name} code={country.code} />
      ))}
    </div>
  </div>;
}

export default ScrollSpyApp;
