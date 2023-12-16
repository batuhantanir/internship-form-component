"use client";
import React, { useEffect, useState } from "react";
//components
import CostumeTable from "@/components/costumeTable";

//icons
import UsersListHead from "@/components/userListHead";

import AddUserForm from "@/components/addUserForm";
import EditUserForm from "@/components/editUserForm";
import DeleteUser from "@/components/deleteUser";

function deleteAllUsers() {
  // localStorage'daki users verisini siler
  localStorage.removeItem("usersData");
  //  verilerin ekrana yansıması için sayfayı yeniler
  window && window.location.reload();
}

function deleteUsers(userId, data) {
  // data'daki userId'yi filtrele
  const newData = data.filter((item) => item.id !== userId);
  // newData'yı localStorage'e kaydet
  localStorage.setItem("usersData", JSON.stringify(newData));
  //  verilerin ekrana yansıması için sayfayı yeniler
  window && window.location.reload();
}

function List() {
  const [pageOfOpen, setPageOfOpen] = useState("");
  const [userId, setUserId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [thItemsData, setThItemsData] = useState([]);

  const thItems = ["NAME","POSITION","COUNTRY","STATUS",""];

  // ComponentDidMount benzeri işlev, sayfa yüklendiğinde bir kez çalışır
  useEffect(() => {
    // localStorage'de users var mı kontrolü
    const data = JSON.parse(localStorage.getItem("usersData"));
    //localde çalıştığımız için thıtemsı localde oluşturmamız gerekiyor
    localStorage.setItem("thItems", JSON.stringify(thItems));
    //data varsa JSON verisini localStorage'e kaydetmemesi için bir if koşulu fakat all delete işlemi için kaldırıldı
    // if (!data) {
    //   // JSON verisini localStorage'e kaydetme
    //   localStorage.setItem("usersData", JSON.stringify(usersData));
    // }
    // localStorage'dan thItemsData'yı al ve state'i güncelle
    setThItemsData(JSON.parse(localStorage.getItem("thItems")))
    // newData state'ini, gelen data prop'una eşitle
    setData(data);
  }, [])

  return (
    <div >
      <div className="">
        <UsersListHead data={data} setPageOfOpen={setPageOfOpen} searchValue={searchValue} setSearchValue={setSearchValue} />
        <CostumeTable setUserId={setUserId} data={data} thItemsData={thItemsData} setPageOfOpen={setPageOfOpen} searchValue={searchValue} />
      </div>
      {/* pageofopen boş değilse bir şeffaf ekran üzerine -> pageofopen a atanacak isime göre gösterilecek page seçimi */}
      <div className={`flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 h-screen w-full overflow-x-scroll min-w-[300px] ${pageOfOpen == '' ? "hidden" : "block"} bg-[#0000006d]`}>
        {pageOfOpen == 'add-user' && <AddUserForm data={data} setPageOfOpen={setPageOfOpen} />}
        {pageOfOpen == 'edit-user' && <EditUserForm userId={userId} data={data} setPageOfOpen={setPageOfOpen} />}
        {pageOfOpen == 'delete-user' && <DeleteUser onClickEventButton={() => deleteUsers(userId, data)} userId={userId} data={data} setPageOfOpen={setPageOfOpen} desc={"Are you sure you want to delete this user?"} />}
        {pageOfOpen == 'all-delete-users' && <DeleteUser onClickEventButton={() => { deleteAllUsers() }} userId={userId} data={data} setPageOfOpen={setPageOfOpen} desc={"Are you sure want to delete all users?"}
        />}
      </div>
    </div>
  );
}

export default List;
