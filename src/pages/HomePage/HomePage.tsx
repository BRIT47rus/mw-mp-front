import React from 'react';
import { PageWrapper } from '../../App.styled';
import { ProductGroup, ProductGroupContainer } from './styled';
import { dummyProducts } from '../ProductDetaisPage/dummyProducts';
import ProductCard from '../../blocks/ProductCard/ProductCard';

const HomePage: React.FC = () => {
    return (
        <>
            <title>Главная - MW Marketplace</title>

            <PageWrapper>
                <ProductGroup>
                    <h2>Рекомендукмые товары</h2>
                    <ProductGroupContainer>
                        {dummyProducts.map((p) => (
                            <ProductCard
                                {...p}
                                key={p.id}
                                // isLiked={idsInFavorites.inclides(p.id)}
                            />
                        ))}
                    </ProductGroupContainer>
                </ProductGroup>
            </PageWrapper>
        </>
    );
};
export default HomePage;
