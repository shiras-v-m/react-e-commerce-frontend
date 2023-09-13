import React from 'react'
import './Products.css'
import trimmer from '../../assets/ProductsImages/trimmer.jpg'
import speaker from '../../assets/ProductsImages/Home-speaker.jpg'
import StarRating from '../rating/StarRating.jsx'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
function Products() {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Add to cart
        </Tooltip>
    );

    return (

        <div className="productsContainer">


            {/* <h3 className='heading'>Today's best deal</h3> */}
            <div className="product">
                <div className="imageContainer">
                    <img className='productImage' src={trimmer} alt="product" />
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 100, hide: 90 }}
                        overlay={renderTooltip}
                    >
                        <span className="material-symbols-outlined productCartIcon">garden_cart</span>
                    </OverlayTrigger>

                </div>
                <div className='productDetails'>
                    <StarRating />
                    <h4 className='productTitle'>Multigroomer All-in-One Trimmer</h4>
                    <span>$49.00</span>
                </div>


            </div>
            <div className="product">
                <div className="imageContainer">
                    <img className='productImage' src={speaker} alt="product" />
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 100, hide: 90 }}
                        overlay={renderTooltip}
                    >
                        <span className="material-symbols-outlined productCartIcon">garden_cart</span>
                    </OverlayTrigger>            </div>
                <div className='productDetails'>
                    <StarRating />
                    <h4 className='productTitle'>Multigroomer All-in-One Trimmer</h4>
                    <span>$49.00</span>
                </div>


            </div>
            <div className="product">
                <div className="imageContainer">
                    <img className='productImage' src={trimmer} alt="" />
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 100, hide: 90 }}
                        overlay={renderTooltip}
                    >
                        <span className="material-symbols-outlined productCartIcon">garden_cart</span>
                    </OverlayTrigger>            </div>
                <div className='productDetails'>
                    <StarRating />
                    <h4 className='productTitle'>Multigroomer All-in-One Trimmer</h4>
                    <span>$49.00</span>
                </div>


            </div>
            <div className="product">
                <div className="imageContainer">
                    <img className='productImage' src={trimmer} alt="" />
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 100, hide: 90 }}
                        overlay={renderTooltip}
                    >
                        <span className="material-symbols-outlined productCartIcon">garden_cart</span>
                    </OverlayTrigger>            </div>
                <div className='productDetails'>
                    <StarRating />
                    <h4 className='productTitle'>Multigroomer All-in-One Trimmer</h4>
                    <span>$49.00</span>
                </div>


            </div>
            <div className="product">
                <div className="imageContainer">
                    <img className='productImage' src={trimmer} alt="product image" />
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 100, hide: 90 }}
                        overlay={renderTooltip}
                    >
                        <span className="material-symbols-outlined productCartIcon">garden_cart</span>
                    </OverlayTrigger>            </div>
                <div className='productDetails'>
                    <StarRating />
                    <h4 className='productTitle'>Multigroomer All-in-One Trimmer</h4>
                    <span>$49.00</span>
                </div>
            </div>
            <div className="product">
                <div className="imageContainer">
                    <img className='productImage' src={trimmer} alt="product image" />
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 100, hide: 90 }}
                        overlay={renderTooltip}
                    >
                        <span className="material-symbols-outlined productCartIcon">garden_cart</span>
                    </OverlayTrigger>            </div>
                <div className='productDetails'>
                    <StarRating />
                    <h4 className='productTitle'>Multigroomer All-in-One Trimmer</h4>
                    <span>$49.00</span>
                </div>
            </div>
            <div className="product">
                <div className="imageContainer">
                    <img className='productImage' src={trimmer} alt="product image" />
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 100, hide: 90 }}
                        overlay={renderTooltip}
                    >
                        <span className="material-symbols-outlined productCartIcon">garden_cart</span>
                    </OverlayTrigger>            </div>
                <div className='productDetails'>
                    <StarRating />
                    <h4 className='productTitle'>Multigroomer All-in-One Trimmer</h4>
                    <span>$49.00</span>
                </div>
            </div>
            <div className="product">
                <div className="imageContainer">
                    <img className='productImage' src={trimmer} alt="product image" />
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 100, hide: 90 }}
                        overlay={renderTooltip}
                    >
                        <span className="material-symbols-outlined productCartIcon">garden_cart</span>
                    </OverlayTrigger>            </div>
                <div className='productDetails'>
                    <StarRating />
                    <h4 className='productTitle'>Multigroomer All-in-One Trimmer</h4>
                    <span>$49.00</span>
                </div>
            </div>
        </div>
    )
}

export default Products