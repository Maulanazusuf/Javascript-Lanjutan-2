const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)    
    })
}
cekHariKerja('Minggu').then(hari => { //masukan hari contoh minggu dia akan menampilkan notif reject
    console.log(hari)
 }).catch(libur => {
    console.log(libur)
 })
 