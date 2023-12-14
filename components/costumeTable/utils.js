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

export function filterUser(searchValue, data) {
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

export function changeSortData(newData, sortName, sortIsAZ) {
    // Sıralama sırasını belirleyen değişken
    const sortOrder = sortIsAZ ? 1 : -1;

    // Veri dizisini sıralama işlemi
    newData.sort((a, b) => {
        // Karşılaştırılacak değerleri büyük harfe çeviriyoruz, ancak önce değerin var olup olmadığını kontrol ediyoruz
        const nameA = a[sortName] ? a[sortName].toUpperCase() : '';
        const nameB = b[sortName] ? b[sortName].toUpperCase() : '';

        // Sıralama işlemi, belirlenen sıra düzenine göre
        return sortOrder * nameA.localeCompare(nameB);
    });

    // Sıralanmış veri dizisini döndürüyoruz
    return newData;
}

export const handleSortClick = (item, setSortName, setSortIsAZ) => {
    //thdeki ismi lovercase olarak sortname e atıyoruz
    setSortName(item.toLowerCase());
    //burdada boolean değerin her seferinde tersini alıyoruz true ise false , false ise true
    setSortIsAZ((prevSortIsAZ) => !prevSortIsAZ);
};