const menuData = [
    {
        "category": "topli-napitci",
        "items": [
            { "name": "Espresso", "price": 1.5, "image": "/toplinapitci/espresso.jpg", "volume": "" },
            { "name": "Velika kava s mlijekom", "price": 2.0, "image": "/toplinapitci/makjato.jpg", "volume": "" },
            { "name": "Kava s mlijekom", "price": 1.8, "image": "/toplinapitci/malimakjato.jpg", "volume": "" },
            { "name": "Bijela Kava", "price": 2.2, "image": "/toplinapitci/bijelakava.jpg", "volume": "" },
            { "name": "Cappuccino", "price": 2.5, "image": "/toplinapitci/capuccion.jpg", "volume": "" },
            { "name": "Kava bez kofeina", "price": 1.8, "image": "/toplinapitci/espresso.jpg", "volume": "" },
            { "name": "Kava s mlijekom bez kofeina", "price": 2.0, "image": "/toplinapitci/makjato.jpg", "volume": "" },
            { "name": "Irska Kava", "price": 3.5, "image": "/toplinapitci/irskakava.jpg", "volume": "" },
            { "name": "Nescafe Classic", "price": 2.0, "image": "/toplinapitci/nescaffe.jpg", "volume": "" },
            { "name": "Nescafe Irish", "price": 2.5, "image": "/toplinapitci/nescaffe.jpg", "volume": "" },
            { "name": "Nescafe Vanilija", "price": 2.5, "image": "/toplinapitci/nescaffe.jpg", "volume": "" },
            { "name": "Nescafe Čokolada", "price": 2.5, "image": "/toplinapitci/nescaffe.jpg", "volume": "" },
            { "name": "Vruča Čokolada", "price": 2.8, "image": "/toplinapitci/nescaffe.jpg", "volume": "" },
            { "name": "Kakao", "price": 2.8, "image": "/toplinapitci/kakao.jpg", "volume": "" },
            { "name": "Čaj Menta", "price": 2.0, "image": "/toplinapitci/caj.jpg", "volume": "" },
            { "name": "Čaj Đumbir", "price": 2.0, "image": "/toplinapitci/caj.jpg", "volume": "" },
            { "name": "Čaj Šumsko Voće", "price": 2.0, "image": "/toplinapitci/caj.jpg", "volume": "" },
            { "name": "Zeleni Čaj", "price": 2.0, "image": "/toplinapitci/caj.jpg", "volume": "" },
            { "name": "Earl Grey", "price": 2.0, "image": "/toplinapitci/caj.jpg", "volume": "" },
            { "name": "Čaj Šipak", "price": 2.0, "image": "/toplinapitci/caj.jpg", "volume": "" }
        ]
    },
    {
        "category": "bezalkoholna-pica",
        "items": [
            { "name": "Fanta", "price": 2.5, "image": "/bezalkpica/fanta.jpg", "volume": "0.33 L" },
            { "name": "Sprite", "price": 2.5, "image": "/bezalkpica/sprite.jpg", "volume": "0.33 L" },
            { "name": "Coca Cola", "price": 2.5, "image": "/bezalkpica/coca-cola.jpg", "volume": "0.33 L" },
            { "name": "Coca Cola Zero", "price": 2.5, "image": "/bezalkpica/colazero.jpg", "volume": "0.33 L" },
            { "name": "Jana", "price": 2.0, "image": "/bezalkpica/jana.jpg", "volume": "0.33 L" },
            { "name": "Jana", "price": 3.0, "image": "/bezalkpica/jana.jpg", "volume": "0.75 L" },
            { "name": "Jamnica", "price": 2.0, "image": "/bezalkpica/jamnica.jpg", "volume": "0.33 L" },
            { "name": "Jamnica", "price": 3.0, "image": "/bezalkpica/jamnica.jpg", "volume": "0.75 L" },
            { "name": "Cappy Naranča", "price": 3.0, "image": "/bezalkpica/cappy.jpg", "volume": "0.25 L" },
            { "name": "Cedevita", "price": 2.5, "image": "/bezalkpica/cappy.jpg", "volume": "" },
            { "name": "Cjeđena Naranča", "price": 3.5, "image": "/bezalkpica/cjednaranca.jpg", "volume": "" },
            { "name": "Limunada", "price": 3.0, "image": "/bezalkpica/limunada.jpg", "volume": "" }
        ]
    },
    {
        "category": "alkoholna-pica",
        "items": [
            { "name": "Točeno Ožujsko", "price": 3.0, "image": "/alkoholnapica/ozujskotoceno.jpg", "volume": "0.5 L" },
            { "name": "Ožujsko", "price": 3.0, "image": "/alkoholnapica/ozujskoboca.jpg", "volume": "0.33 L" },
            { "name": "Karlovačko", "price": 3.0, "image": "/alkoholnapica/karlovacko.jpg", "volume": "0.33 L" },
            { "name": "Jack Daniels", "price": 4.0, "image": "/alkoholnapica/jack daniels.jpg", "volume": "0.03 L" },
            { "name": "Macallan 12", "price": 6.0, "image": "/alkoholnapica/mac12.jpg", "volume": "0.03 L" },
            { "name": "Vodka Finlandia", "price": 3.5, "image": "/alkoholnapica/finlandia.jpg", "volume": "0.03 L" },
            { "name": "Medica", "price": 3.0, "image": "/alkoholnapica/medica.jpg", "volume": "0.03 L" }
        ]
    },
    {
        "category": "vina",
        "subcategories": [
            {
                "subcategory": "bijela-vina",
                "items": [
                    { "name": "Malvazija Dešković", "price": 4.5, "image": "/vina/malvdeskovic.jpg", "volume": "0.15 L" },
                    { "name": "Graševina Knezović", "price": 4.5, "image": "/vina/grasknez.jpg", "volume": "0.15 L" }
                ]
            },
            {
                "subcategory": "crvena-vina",
                "items": [
                    { "name": "Cuvee Knezović", "price": 5.0, "image": "/vina/knezoviccuvee.jpg", "volume": "0.15 L" },
                    { "name": "Merlot Markota", "price": 5.0, "image": "/vina/merlotmarkota.jpg", "volume": "0.15 L" },
                    { "name": "Merlot Korlat", "price": 25.0, "image": "/vina/merlotkorlat.jpg", "volume": "0.7 L" },
                    { "name": "Syrah Korlat", "price": 25.0, "image": "/vina/merlotSyrah.jpg", "volume": "0.7 L" },
                    { "name": "Dingač Škaramuća", "price": 6.0, "image": "/vina/dingac.jpg", "volume": "0.15 L" }
                ]
            },
            {
                "subcategory": "desertna-vina",
                "items": [
                    { "name": "Muškat Bijeli Dešković", "price": 6.0, "image": "/vina/muskat.jpg", "volume": "0.15 L" },
                    { "name": "Trs No.5", "price": 6.0, "image": "/vina/trs.jpg", "volume": "0.15 L" }
                ]
            },
            {
                "subcategory": "pjenušava-vina",
                "items": [
                    { "name": "Today Blanc", "price": 7.0, "image": "/vina/today.jpg", "volume": "0.15 L" }
                ]
            }
        ]
    }
]
export default menuData;