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
import { FiEdit } from "react-icons/fi";
import { HiTrash } from "react-icons/hi";
import Image from "next/image";

function CostumeTable({ setUserId, data, thItemsData, setPageOfOpen, searchValue }) {
  const [newData, setNewData] = useState([]);
  const [sortName, setSortName] = useState("NAME");
  const [sortIsAZ, setSortIsAZ] = useState(true);
  const [sortData, setSortData] = useState([]);

  const slicenumber = 20;
  // dataShowingBetween değişkeni ile kaç veri arasında olduğumuzu gösteriyoruz
  const dataShowingBetween = `${slicenumber - 20}-${slicenumber}`;
  // totalData değişkeni ile toplam veri sayısını gösteriyoruz
  const totalData = `${data?.length}`;




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
            {/* localStorage'den gelen verileri map ile gezindim ve her bir veri için bir th oluşturdum */}
            {thItemsData?.map((item, idx) => (
              // handleSortClick fonksiyonu ile sortName ve sortIsAZ state'lerini güncelle
              <th key={idx} onClick={() => data && data != [] && handleSortClick(item, setSortName, setSortIsAZ)} className="p-4 text-xs font-medium uppercase text-svgColorDark text-left hover:cursor-pointer aria-disabled:hover:cursor-not-allowed" aria-disabled={!data || data?.length == 0}>
                <span className="flex items-center gap-2">
                  <span>{item}</span>
                  {/* sortName ve item aynı ise block, değilse hidden, sortIsAZ true ise rotate-180, değilse rotate-0 */}
                  <span className={`${!(data?.length <= 1) && (sortName.toLocaleLowerCase() == item.toLocaleLowerCase()) ? "block" : "hidden"} ${sortIsAZ && "rotate-180"}`}><BiDownArrow /></span>
                </span>
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/*  datanın olmaması durumunda gösterilecek error  */}
          {data == null || data?.length == 0 ?
            <tr className="text-center">
              <td className="py-5 text-danger" colSpan="8">there is no data to show</td>
            </tr>
            :
            // data sayısının sıfır olması durumunda gösterilecek veriler
            sortData?.length == 0 ?
              <tr className="text-center">
                <td className="py-5 text-danger" colSpan="8">Veri bulunamadı</td>
              </tr>
              :
              // datanın olması durumunda gösterilecek veriler
              sortData?.map((row, rowIndex) => (
                <UserRow row={row} thItemsData={thItemsData} setUserId={setUserId} setPageOfOpen={setPageOfOpen} key={rowIndex} />
              ))}
          {/* sort datamızı slice ile page yapısına çevirdim ve map ile sortdata nın içindeki verileri tek tek gezindim */}

        </tbody>
      </table>
      <div className="flex justify-between px-6 py-5">
        <div className="flex items-center">
          {/* bir sonraki veri page ine geçmek için ileri geri tuşlar */}
          <IconBtn hrefLink='' icon={<IoIosArrowBack className="scale-125 stroke-[30]" />} />
          <IconBtn hrefLink='' icon={<IoIosArrowForward className="scale-125 stroke-[30]" />} />
          {/* kaçıncı verileri gördüğümüz ver kaç veri olduğunun gösterilmesi */}
          <span>
            Showing <span>{dataShowingBetween}</span> of <span>{totalData}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CostumeTable;
