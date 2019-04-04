const { Image } = require('image-js');
const images = require("images");
const QRCode = require('qrcode');
const fs = require('fs');

//let rawdata = fs.readFileSync('datakode2.json','utf8');  
//const kode = JSON.parse(rawdata);  
//console.log(kode); 

fs.readFile('datakode.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    var obj = JSON.parse(data);
    //console.log(obj.HBH19-00001);

    for (const [key, value] of Object.entries(obj)) {
        console.log(value.no);
        console.log("test")
        
        //proses cetak qr
        async function generateQR(){
            var nama = String(value.no);
            await QRCode.toFile("hasil/"+nama+".png",value.kode,{
        
            }, function (err, url) {
            console.log('QR '+value.no)
            })
        }

        async function execute() {
        await generateQR();
        let image = await Image.load('output.jpg'); //line ini sama line bawah gabisa di hapus
        let image2 = await Image.load('output.png');//kalo dihapus gajalan
        var nama = String(value.no);                                     //  1176 1145   153, 2928
        await images("tikethbh2.png").draw(images("hasil/"+nama+".png").size(1176,1145), 153, 2928).save("hasil/"+value.id+".png");//ini
                    //gambar template                 //gambar QR           //WIDTH,HEIGHT),X,Y
        await console.log('E-Tiket '+value.no);
        return image2.save('cat.png');
        }
        execute();
      }


});




