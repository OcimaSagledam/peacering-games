import CartItem from "./CartItem"
import PageWrapper from "./PageWrapper"
import { useSelector } from 'react-redux'

export default function CartPage() {
    const cart = useSelector((state) => state.cart)
    console.log(cart)

    const totalPrice = cart.reduce((partialSum, a) => partialSum + Number(a.price) * a.amount, 0);

    return <PageWrapper>
        <div className="overflow-auto h-full p-4 lg:p-20">
            <div>Total: {totalPrice.toFixed(2)} €</div>
            <div className="h-full p-1">
                {!Array.isArray(cart) ?
                    <span>Loading....</span>
                    :
                    cart.map((item, index) =>
                        <CartItem key={index} id={item.id} url={item.url} name={item.name} price={Number(item.price).toFixed(2)} short_description={item.short_description} amount={item.amount} />
                    )}
            </div>
        </div>
    </PageWrapper>
}
