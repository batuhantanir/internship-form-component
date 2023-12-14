"use client"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import React, { useEffect, useState } from "react";
import UserRow from "./userRow";
import IconBtn from "../iconBtn";
import Buttons from "../buttons";
import { BiDownArrow } from "react-icons/bi";

function nameIsEqual(i, j, data, searchValue) {
  //while ile searchValue içinde dönüyoruz
  while ((j < searchValue.length)) {
    //searchValuenun j ince indeksi ile datanın i incisinin j incisini karşılaştırıyoruz
    // eğer eşit değiller ise return false oluyor
    if (data[i].name[j]?.toUpperCase() != searchValue[j].toUpperCase()) {
      return false;
    }
    j++;
  }
  // eğer if e girmez ise true return ediyor
  return true;
}


function filterUser(searchValue, data) {
  // değişkenlerimizi tanımlıyoruz
  let i, j, tempData;
  //değişkenimize boş array atıyoruz ekleme yapmak için
  tempData = []
  //i yi sıfırlıyoruz ki 0 indexten başlamak için
  i = 0;
  //if sorgusunda searchValue değişkeninin boş olup olmadığı durumları kontrol ediyoruz
  if (searchValue != "") {
    //while ile datanın içinde dönüyoruz
    while (i < data.length) {
      j = 0;
      //i, j, data, searchValue değişkenlerini nameIsEqual fonksiyonuna gönderiyoruz ve
      // dönen boolean değere göre tempDataya push edip etmiyeceğimizi belirtiyoruz
      nameIsEqual(i, j, data, searchValue) && tempData.push(data[i]);
      i++;
    }
    //while bittikten sonra tutmuş olduğumuz tempDatayı return ediyoruz
    return tempData
  } else {
    //searchValuenin boş olduğu durumda direkt datanın kendisini return ediyoruz.
    return data;
  }

}

function changeSortData(newData, sortName, sortIsAZ) {
  // Sıralama yapılacak özelliğin adını küçük harfe dönüştürüyoruz
  const lowerCaseSortName = sortName.toLowerCase();
  // Sıralama sırasını belirleyen değişken
  const sortOrder = sortIsAZ ? 1 : -1;

  // Veri dizisini sıralama işlemi
  newData.sort((a, b) => {
    // Karşılaştırılacak değerleri büyük harfe çeviriyoruz, ancak önce değerin var olup olmadığını kontrol ediyoruz
    const nameA = a[lowerCaseSortName] ? a[lowerCaseSortName].toUpperCase() : '';
    const nameB = b[lowerCaseSortName] ? b[lowerCaseSortName].toUpperCase() : '';

    // Sıralama işlemi, belirlenen sıra düzenine göre
    return sortOrder * nameA.localeCompare(nameB);
  });

  // Sıralanmış veri dizisini döndürüyoruz
  return newData;
}


function CostumeTable({ data, setpageOfOpen, searchValue }) {
  const [thItemsData, setThItemsData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [sortName, setSortName] = useState("NAME");
  const [sortIsAZ, setSortIsAZ] = useState(true);
  const [sortData, setSortData] = useState([]);

  const dataShowingBetween = '1 - 20';

  const totalData = '2290';

  const slicenumber = 20;

  useEffect(() => {
    setThItemsData(JSON.parse(localStorage.getItem("thItems")))
    setNewData(data);
  }, [])

  useEffect(() => {
    setNewData(filterUser(searchValue, data));
  }, [searchValue,data])

  useEffect(() => {
    console.log(sortName);
    setSortData(changeSortData(newData, sortName, sortIsAZ))
  }, )

  const handleSortClick = (item) => {
    setSortName(item);
    setSortIsAZ((prevSortIsAZ) => !prevSortIsAZ);
  };

  return (
    <div className=" flex flex-col justify-between overflow-x-auto min-h-screen">
      <table className="table-fixed min-w-full px-2">
        <thead className="bg-hoverBgColor py-2">
          <tr className="">
            <th className="p-4">
              <input className="accent-primary scale-105 w-4 h-4" type="checkbox" name="#" id="#" />
            </th>
            {thItemsData?.map((item, idx) => (
              <th key={idx} onClick={() => handleSortClick(item) } className="p-4 text-xs font-medium uppercase text-svgColorDark text-left hover:cursor-pointer">
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
          <IconBtn hrefLink={''} icon={<IoIosArrowForward className="scale-125 stroke-[30]" />} />
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
