"use client"
import React, { useEffect, useState } from "react";
import UserRow from "./userRow";

//buttons
import IconBtn from "../iconBtn";
import Buttons from "../buttons";

//icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { BiDownArrow } from "react-icons/bi";

//utils.js'den gelen fonksiyonlar
import { filterUser, changeSortData, handleSortClick } from './utils'

function CostumeTable({ data, setpageOfOpen, searchValue }) {
  const [thItemsData, setThItemsData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [sortName, setSortName] = useState("NAME");
  const [sortIsAZ, setSortIsAZ] = useState(true);
  const [sortData, setSortData] = useState([]);

  const dataShowingBetween = '1 - 20';

  const totalData = '2290';

  const slicenumber = 20;

  // ComponentDidMount benzeri işlev, sayfa yüklendiğinde bir kez çalışır
  useEffect(() => {
    // localStorage'dan thItemsData'yı al ve state'i güncelle
    setThItemsData(JSON.parse(localStorage.getItem("thItems")))
    // newData state'ini, gelen data prop'una eşitle
    setNewData(data);
  }, [])

  // searchValue veya data değiştiğinde çalışan useEffect
  useEffect(() => {
    // filterUser fonksiyonu ile data'yı filtrele ve newData state'ini güncelle
    setNewData(filterUser(searchValue, data));
  }, [searchValue, data])

  // sortName veya sortIsAZ değiştiğinde çalışan useEffect
  useEffect(() => {
    // changeSortData fonksiyonu ile newData'ı sırala ve sortData state'ini güncelle
    setSortData(changeSortData(newData, sortName, sortIsAZ))
  }, [sortName, sortIsAZ, newData])


  return (
    <div className=" flex flex-col justify-between overflow-x-auto min-h-screen">
      <table className="table-fixed min-w-full px-2">
        <thead className="bg-hoverBgColor py-2">
          <tr className="">
            <th className="p-4">
              <input className="accent-primary scale-105 w-4 h-4" type="checkbox" name="#" id="#" />
            </th>
            {thItemsData?.map((item, idx) => (
              <th key={idx} onClick={() => handleSortClick(item, setSortName, setSortIsAZ)} className="p-4 text-xs font-medium uppercase text-svgColorDark text-left hover:cursor-pointer">
                <span className="flex items-center gap-2">
                  <span>{item}</span>
                  <span className={`${sortName.toLocaleLowerCase() == item.toLocaleLowerCase() ? "block" : "hidden"} ${sortIsAZ && "rotate-180"}`}><BiDownArrow /></span>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortData?.slice(slicenumber - 20, slicenumber).map((user, idx) => (
            <UserRow user={user} key={idx} setpageOfOpen={setpageOfOpen} searchValue={searchValue} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-between px-6 py-5">
        <div className="flex items-center">
          <IconBtn hrefLink='' icon={<IoIosArrowBack className="scale-125 stroke-[30]" />} />
          <IconBtn hrefLink='' icon={<IoIosArrowForward className="scale-125 stroke-[30]" />} />
          <span>
            Showing <span>{dataShowingBetween}</span> of <span>{totalData}</span>
          </span>
        </div>
        <div className="flex gap-4">
          <Buttons title={"Previous"} icon={<IoIosArrowBack className="stroke-[15] scale-95" />} costumeClass={
            "bg-primary text-white hover:bg-primaryDark w-[50%] sm:w-fit"
          } />
          <Buttons title={"Next"} icon={<IoIosArrowForward className="stroke-[15] scale-95" />} costumeClass={
            "bg-primary text-white hover:bg-primaryDark w-[50%] sm:w-fit"
          } />
        </div>
      </div>
    </div>
  );
}

export default CostumeTable;
