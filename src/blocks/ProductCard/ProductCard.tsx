import React from 'react';
import { Link } from 'react-router-dom';
// import * as heartEmptySvg from '../../img/heart-empty.svg';
import {
    Desc,
    Image,
    LikeWrapper,
    PriceDiscounted,
    PriceRegular,
    PriceRegularWhenDiscounted,
    PriceWrapper,
    Title,
} from './styled';
import { Wrapper } from '../../features/Header/styled';
import Button from '../../components/Button/Button';
interface I_PorductCardProps {
    id: number;
    slug?: string;
    imgSrc: string;
    priceRegular: number;
    priceDiscounted?: number;
    title: string;
    desc: string;
    hideLikes: boolean;
    // isLiked:boolean
}
const ProductCard: React.FC<I_PorductCardProps> = ({
    id,
    slug,
    imgSrc,
    priceRegular,
    priceDiscounted,
    title,
    desc,
    // isLiked,
    hideLikes = false,
}) => {
    // const dispatch - useDispatch()
    // const handleFavorites - useCallback((e:React.MouseEvent<HTMLElement>)=>{
    //     const {productId}= e.currentTarget.dataset
    //     dispatch(
    //         !isLiked
    //         ?addToFavorites(+productId!)
    //         :removeFromFavorites(+productId!)
    //     ),[dispatch,isLiked]
    // })
    return (
        <Wrapper>
            {!hideLikes && (
                <LikeWrapper
                    data-product-id={id}
                    // onclick={handleFavorites}
                >
                    {/* // {isLiked ? <HeartFilled /> : <HearEmpty />} */}
                    {/* <heartEmptySvg.ReactComponent /> */}
                </LikeWrapper>
            )}
            <Link to={`/product/${slug || id}`}>
                <Image src={imgSrc} />
            </Link>

            <PriceWrapper>
                {Number.isInteger(priceDiscounted) ? (
                    <>
                        <PriceDiscounted>{priceDiscounted}</PriceDiscounted>
                        <PriceRegularWhenDiscounted>
                            {priceRegular}
                        </PriceRegularWhenDiscounted>
                    </>
                ) : (
                    <PriceRegular>{priceRegular} ₽</PriceRegular>
                )}
            </PriceWrapper>
            <Title className="h4">
                <Link to={`/product/${slug || id}`}>{title}</Link>
            </Title>
            <Desc>{desc}</Desc>
            <Button>В корзину</Button>
        </Wrapper>
    );
};

export default ProductCard;
