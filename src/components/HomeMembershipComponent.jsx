export default function HomeMembershipComponent(){
    return (
        <section id="membership">
            <h1 id="saleimg">SALE</h1>
            <picture >
                <source
                    media="(min-width: 768px)"
                    srcSet="./images/sale.jpg"
                    alt="flash sale"
                />
                <img src="./images/sale_mobile.jpg" alt="flash sale" />
            </picture>
        </section>
    )
}