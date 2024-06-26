import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            { "ProductTitle": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "ImgLink": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "Price": 109.95, "Des": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","Category":"Men's clothing","Rating":3.9,"Instock":120 },
            { "ProductTitle": "Mens Casual Premium Slim Fit T-Shirts", "ImgLink": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", "Price":22.3 , "Des": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","Category":"Men's clothing","Rating":4.1,"Instock":259 },
            { "ProductTitle": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", "ImgLink": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", "Price":695 , "Des": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","Category":"jewelery","Rating":4.6,"Instock":400},
            { "ProductTitle": "Mens Cotton Jacket", "ImgLink": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg", "Price":15.99 , "Des":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","Category":"men's clothing","Rating":2.1,"Instock":430},
            { "ProductTitle": "Solid Gold Petite Micropave", "ImgLink": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg", "Price":168 , "Des": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.","Category":"jewelery","Rating":3.9,"Instock":70},
            { "ProductTitle": "White Gold Plated Princess", "ImgLink": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg", "Price":9.99 , "Des": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...","Category":"Jewelery","Rating":3,"Instock":400},
            { "ProductTitle": "Pierced Owl Rose Gold Plated Stainless Steel Double", "ImgLink": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg", "Price":10.99 , "Des":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","Category":"jewelery","Rating":1.9,"Instock":100},
            { "ProductTitle": "WD 2TB Elements Portable External Hard Drive - USB 3.0", "ImgLink": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg", "Price":64 , "Des":"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system","Category":"electronics","Rating":3.3,"Instock":233},
            { "ProductTitle": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s", "ImgLink": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg", "Price":129 , "Des": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)","Category":"electronics","Rating":2.9,"Instock":472},
            { "ProductTitle": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5", "ImgLink": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg", "Price":103 , "Des": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","Category":"electronics","Rating":4.8,"Instock":319},
            { "ProductTitle": "MBJ Women's Solid Short Sleeve Boat Neck V", "ImgLink": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg", "Price":9.85 , "Des": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem","Category":"women's clothing","Rating":4.7,"Instock":190},
            { "ProductTitle": "DANVOUY Womens T Shirt Casual Cotton Short", "ImgLink": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg", "Price":12.99 , "Des": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.","Category":"women's clothing","Rating":3.6,"Instock":145},
            { "ProductTitle": "Rain Jacket Women Windbreaker Striped Climbing Raincoats", "ImgLink": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg", "Price":39.9 , "Des": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","Category":"women's clothing","Rating":3.8,"Instock":679},
            { "ProductTitle": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin", "ImgLink": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg", "Price":599 , "Des": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz","Category":"electronics","Rating":2.9,"Instock":250},
            { "ProductTitle": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED", "ImgLink": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg", "Price": 999.9, "Des": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag","Category":"","Rating":2.2,"Instock":140},

        ]    )
    return (
        <><Navbar /><br /><div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row g-3">
                                <br />


                                {data.map(
                                    (value, index) => {
                                        return <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                                            <div class="card">
                                                <img src={value.ImgLink} height="300px" class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <p class="fs-4">{value.ProductTitle}</p>
                                                    <p class="card-text">{value.Category}</p>
                                                    <p class="card-text">{value.Des}</p>
                                                    <p class="card-text">Rating:{value.Rating}</p>
                                                    <p class="card-text">In stock:{value.Instock}</p>
                                                    <h5 class="card-title">{value.Price}$</h5>
                                                    <button type="button" class="btn btn-success">Buy now</button>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div></>
    )
}

export default ViewAll