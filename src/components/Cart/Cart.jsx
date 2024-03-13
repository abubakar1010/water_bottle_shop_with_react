import PropTypes from 'prop-types';

const Cart = ({cart,handleRemoveItem}) => {
    // console.log(cart);
    return (
       <>
        <div>
            <p>Total Products: {cart.length} </p>
        </div>
        <div className="flex gap-2">
            {
                cart.map( (element) => <div key={element.id}>
                    <img src={element.img} className="w-[50px]"/>
                    <button className=' bg-lime-500 text-xl font-medium py-1 px-2 rounded-2xl' onClick={ () => handleRemoveItem(element.id)}>Remove</button>
                    </div>)
            }
        </div>
       </>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveItem: PropTypes.func.isRequired
}

export default Cart;