import React, {} from "react";
import { Link } from "react-router-dom";

import "./ContryInfo.css"

function CountryInfo({chosenCountry}) {

    const currenciesKeys = chosenCountry.currencies === undefined ? null : Object.keys(chosenCountry.currencies);
    const langKeys = Object.keys(chosenCountry.languages);
    const nativeNames = Object.keys(chosenCountry.name.nativeName);

  return (
    <>
    <div className="container_info_about_country">
        <div className="country_information_box">
                <div className="flags_block">
                    <img className="flags" src={chosenCountry.coatOfArms.svg}></img>
                </div>
                <div className="country_information">
                <div className="name_country">
                    {chosenCountry.name.common}
                </div>
                <div className="info_block">
                    <div className="info">
                        <div>
                            <p>Популяція: <span>{chosenCountry.population  === undefined ? "-" : chosenCountry.population }</span></p>
                            <p>Регіон: <span>{chosenCountry.region === undefined ? "-" : chosenCountry.region}</span></p>
                            <p>Статус: <span>{chosenCountry.status === undefined? "-": chosenCountry.status}</span></p>
                            <p>Індекс   : <span>{chosenCountry.area === undefined? "-": chosenCountry.area}</span></p>
                            <p>FIFA: <span>{chosenCountry.fifa === undefined? "-": chosenCountry.fifa}</span></p>

                            <p>Столиця: <span>{chosenCountry.capital === undefined ? "-" : chosenCountry.capital}</span></p>
                        </div>
                        <div className="languages">
                            {/* <p>Curiencies: <span>{currenciesKeys === null ? "-" : currenciesKeys.map((item, index) => `${chosenCountry.currencies[item].name}${currenciesKeys[index+1] === undefined? "" : ","} `)}</span></p> */}
                            <p>Мова: <span>{langKeys.map((item, index) => `${chosenCountry.languages[item]}${langKeys[index+1] === undefined? "" : ","} `)}</span></p>
                        </div>
                    </div>
                
                </div>
                </div>
            </div>
    </div>
        
    </>
  );

}
export default CountryInfo;