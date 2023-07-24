import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Box from "../atoms/Box";
import CartItem from "../atoms/CartItem";
import { useEffect, useState } from "react";
import styles from "./CartList.module.css";
import { comma } from "../../utils/convert";
import { useMutation } from "react-query";
import { updateCart } from "../../services/cart";
import { useNavigate } from "react-router";

const CartList = ({ data }) => {
    const [cartItems, setCartItems] = useState(data?.products);
    const [totalPrice, setTotalPrice] = useState(data?.totalPrice);
    const navigate = useNavigate();

    console.log('cart list data', data);
    const cartUpdataMutation = useMutation({
        mutationFn: updateCart,
        onSuccess: () => {
            // alert('결제 페이지로 이동합니다.');
            navigate("/order");
        },
        onError: () => {
            alert("문제가 발생하였습니다.");
            navigate("/cart");
        }
    })

    useEffect(() => {
        setCartItems(data?.products);
        setTotalPrice(data?.totalPrice);
    }, [data]);

    /**
     * 옵션의 수량과 가격을 변경을 관리
     * @param {number} optionId 
     * @param {number} quantity 
     * @param {number} price 
     */
    const handleOnChangeCount = (optionId, quantity) => {
        
        setCartItems(prev => {
            return prev.map(item => {
                return {
                    ...item,
                    carts: item.carts.map(option => {
                        if(option.id === optionId){
                            setTotalPrice(prev => prev + (option.option.price * (quantity - option.quantity)));
    
                            return {
                                ...option,
                                quantity: quantity,
                            };
                        }
                        return option;
                    })
                }
                
            })
        })
    }

    const getUpdatePayload = () => {
        const payload = [];
        cartItems.map(item => {
            item.carts.map(option => {
                payload.push({
                    cartId: option.id,
                    quantity: option.quantity,
                });
            });
        });

        return JSON.stringify(payload);
    }

    return (
        <Container className="card_list w-[870px] overflow-hidden">
            <Box className="title_wrap text-center leading-[44px] bg-white border-gray-300 border-b-0">
                <h1 className={styles.title}>장바구니</h1>
            </Box>
            <Box className={styles.product_list}>
                {Array.isArray(cartItems) &&
                    cartItems.map((item) => {
                        return (
                            <CartItem 
                                key={item.id}
                                item={item}
                                onChange={handleOnChangeCount}
                            />
                        );
                    })
                }
            </Box>
            <Box className="order_data_wrap bg-white">
                <div className={styles.row}>
                    <span className="price_title float-left text-[18px] font-semibold leading-[21px] p-[20px] pr-[24px] pl-[16px]">
                        주문 예상금액
                    </span>
                    <span className="total_price block text-right text-[16px] font-semibold leading-[19px] text-blue-500 p-[21px] pl-0">
                        {comma(totalPrice)}원
                    </span>
                </div>
                <Button
                    className={styles.order_btn}
                    onClick={() => {
                        const payload = getUpdatePayload();
                        console.log('payload', payload);
                        cartUpdataMutation.mutate(payload);
                        
                    }}
                >주문하기</Button>
            </Box>
            
        </Container>
    );
}

export default CartList;