import ProductListing from "./ProductListing";

const products = [
    {
        id: 0,
        title: "Specialized Roubaix Expert",
        seller: "Specialized",
        url: "https://assets.specialized.com/i/specialized/94422-31_ROUBAIX-EXPERT-TLTNT-ICEPPYA-BLKREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto",
        price: 8000.0,
        discount: 0.0,
        description:
            "The new frame delivers compliance without compromise via the perfect balance of aerodynamics, light overall weight via a FACT 10r carbon construction, compliance, and Rider-First Engineering.",
    },
    {
        id: 1,
        title: "Trek Madone SL7",
        seller: "Trek",
        url: "https://media.trekbikes.com/image/upload/f_auto,fl_progressive:semi,q_auto,w_1920,h_1440,c_pad/MadoneSL7_23_36979_A_Primary",
        price: 6499.99,
        discount: 0.2,
        description:
            "It's light, fast, and incredibly sleek, and it comes with aero carbon wheels, a road-smoothing IsoSpeed decoupler, and powerful hydraulic disc brakes that perform in any conditions.",
    },
    {
        id: 2,
        title: "Cannondale SuperSix EVO",
        seller: "Cannondale",
        url: "https://embed.widencdn.net/img/dorelrl/umgl5sxof3/1700px@1x/C23_C11302U_SuperSix_EVO_Crb_1_MYG_PD.webp?color=F6F9FB&q=99",
        price: 6500.0,
        discount: 0.1,
        description:
            "Lightweight, low-drag SuperSix EVO carbon frameset – the ideal blend of speed, handling and comfort.",
    },
];

const ListingsPage = () => {
    return (
        <div>
            {products.map((productObj) => {
                return (
                    <ProductListing key={productObj.id} product={productObj} />
                );
            })}
        </div>
    );
};

export default ListingsPage;
