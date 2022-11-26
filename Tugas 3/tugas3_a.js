const cekwarnaDasar = (colour) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Colourlist = ['Red', 'Green', 'Blue', 'Black', 'White']
            let cek = Colourlist.find((item) => {
                return item === colour
            })
            if(cek){
                resolve(cek,'Benar ini adalah warna dasar')
            }else {
                reject(new Error('Bukan bagian dari warna dasar'))
            }
        }, 1000)    
    })
}
const WarnaDasar = async () => {
    try{
        console.log("Cek Warna dasar")
        const Warna = await cekwarnaDasar("Blue") //masukan Warna
        console.log(Warna,'adalah warna dasar')
    }catch(Dasar){
        console.log(Dasar)
    }
}
WarnaDasar()
