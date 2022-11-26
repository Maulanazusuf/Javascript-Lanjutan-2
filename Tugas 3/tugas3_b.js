const Cekbrandlokal = (lokal) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataBrand = ['Aerostreet', 'Specs', 'Ortuseight', 'Erigo', 'Ventela']
            let cek = dataBrand.find((item) => {
                return item === lokal
            })
            if(cek){
                resolve(cek)
            }else {
                reject(new Error('Bukan brand lokal bro'))
            }
        }, 1000)    
    })
}
Cekbrandlokal('Erigo').then(brand => { 
    console.log(brand,'Merupakan Brand lokal')
 }).catch(notlokal => {
    console.log(notlokal)
 })
 