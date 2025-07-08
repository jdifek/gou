export default interface ProductPageData{
    id: number,
    name: string,
    manufacturer: string,
    discount: number,
    price: number,
    colors: Array<{
        id: number,
        name: string,
        imagePath: string
    }>,
    sizes: Array<string>,
    videoPrewievPath: string,
    description: string,
    delivery: string,
    tradeInfo: string,
    mainImages: Array<string>
}

export const productPageData: ProductPageData[] = [
    {
        id: 1,
        name: "Термобілизна чоловіча GOU ПРЕМІУМ мікродайвінг на флісі",
        manufacturer: "85MEN",
        discount: 55,
        price: 1000,
        colors: [
            {
                id: 1,
                name: "сiрий",
                imagePath: "../../../public/assets/ProductPage/ColorsImg/Frame 34.png"
            }
        ],
        sizes: [
            "S-M",
            "M-L",
            "L-XL",
            "XL-XXL",
            "XXL-3XL"
        ],
        videoPrewievPath: "../../../public/assets/ProductPage/VideoPrewiev/image (2).png",
        description: "Описание товара",
        delivery: "Описание доставки товара",
        tradeInfo: "Описание информации об обмене и возврате",
        mainImages: [
            "../../../../public/assets/ProductPage/MainImg/image.png",
            "../../../../public/assets/ProductPage/MainImg/image-1.png",
        ]
    }
]