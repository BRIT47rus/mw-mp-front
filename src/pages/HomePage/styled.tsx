import styled from 'styled-components';
import { Z_INDEX_LEVEL_2 } from '../../consts';
import colors from '../../consts/colors';
import { Link } from 'react-router-dom';
import { paths } from '../../routes/helpers';

// export const TestDiv = styled.div`
//     height: 20px;
//     /* width: 100%; */
// `;
export const ProductGroup = styled.div`
    margin-top: 20px;
    > *:first-child {
        margin-bottom: 10px;
    }
`;
export const ProductGroupContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    > * {
        width: 16%;
        margin-bottom: 20px;
    }
`;
export interface I_CountProps {
    count?: number;
}

export const Wrapper = styled.div`
    border-radius: 6px;
    padding: 14px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: margin 0.2s ease-out;
    background-color: #fff;
    min-height: 52px;
    z-index: ${Z_INDEX_LEVEL_2};
`;
export const LeftSIde = styled.div`
    display: flex;
    flex-shrink: 0;
    margin-right: 20px;
`;
export const Logo = styled.img`
    width: 130px;
    height: 44px;
    margin-right: 20px;
`;
export const Burger = styled.div`
    width: 20px;
    height: 20px;
    padding: 4px 0;
    margin-right: 10px;
    div {
        position: relative;
        display: block;
        width: 18px;
        height: 2px;
        margin: 0 1px;
        background-color: #fff;
    }
    div:not(:first-child) {
        margin-top: 3px;
    }
`;
export const SearchWrapper = styled.div`
    width: 100%;
    border: 2px solid ${colors.primary};
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 0 20px 0 10px;
    input {
        font-size: 16px;
        line-height: 40px;
        padding: 0;
    }
`;
export const RightSide = styled.div`
    display: flex;
`;
export const BtnFavorites = styled((props) => (
    <div {...props}>
        <Link to={paths.favorites} />
    </div>
))`
    cursor: pointer;

    width: 20px;
    height: 20px;
    margin: 0 0 0 20px;
    position: relative;
    &:after {
        content: ${({ count }) => (count ? '""' + count + '""' : '')};
        background-color: ${colors.red};
        color: #fff;
        border-radius: 50%;
        position: absolute;
        top: -8px;
        right: -10px;
        width: 18px;
        height: 18px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export const BtnNotifications = styled.div<I_CountProps>`
    cursor: pointer;
    width: 20px;
    height: 20px;
    position: relative;
    margin: 0 0 0 20px;
    &:after {
        content: ${({ count }) => (count ? '""' + count + '""' : '')};
        background-color: ${colors.red};
        color: #fff;
        border-radius: 50%;
        position: absolute;
        top: -8px;
        right: -10px;
        width: 18px;
        height: 18px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export const BtnSearch = styled.div`
    cursor: pointer;
    width: 20px;
    height: 20px;
`;
export const BtnOrders = styled((props) => (
    <div {...props}>
        <Link to={paths.favorites} />
    </div>
))`
    &:after {
        content: ${({ count }) => (count ? '""' + count + '""' : '')};
        background-color: ${colors.red};
        color: #fff;
        border-radius: 50%;
        position: absolute;
        top: -8px;
        right: -10px;
        width: 18px;
        height: 18px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export const Input = styled.input``;
