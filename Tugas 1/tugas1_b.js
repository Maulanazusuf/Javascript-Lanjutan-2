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
const Harilibur = async () => {
    try{
        console.log("Cek hari Kerja")
        const masuk = await cekHariKerja("senin") //masukan hari
        console.log(masuk,'adalah hari kerja')
    }catch(holiday){
        console.log(holiday)
    }
}
Harilibur()
