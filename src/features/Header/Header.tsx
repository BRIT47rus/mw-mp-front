import { useSelector } from 'react-redux';
import { Wrapper } from './styled';
import { selectIsLogged } from '../App/selectors';
import { useCallback, useState } from 'react';
import { paths } from '../../routes/helpers';
import Button from '../../components/Button/Button';
import { Link, Links } from 'react-router-dom';
import {
    LeftSIde,
    Burger,
    SearchWrapper,
    BtnFavorites,
    BtnNotifications,
    BtnOrders,
    Logo,
    RightSide,
    Input,
} from '../../pages/HomePage/styled';

const Header: React.FC = () => {
    const isLogged = useSelector(selectIsLogged);
    const [searchInput, setSearchInput] = useState<string>('');
    const changeSearchInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchInput(e.target.value);
        },
        []
    );

    return (
        <Wrapper>
            <LeftSIde>
                <Link to={paths.home}>
                    <Logo src={logoPng} />
                </Link>
                <Button>
                    <Burger>
                        <div />
                        <div />
                        <div />
                    </Burger>
                    <span>Каталог</span>
                </Button>
            </LeftSIde>
            <SearchWrapper>
                <Input
                    value={searchInput}
                    onChange={changeSearchInput}
                    // isGhost
                    placeholder="Поиск товаров"
                />
            </SearchWrapper>
            <RightSide>
                {isLogged ? (
                    <>
                        <BtnOrders />
                        <BtnFavorites />
                        <BtnNotifications />
                        {/* <BtnCart /> */}
                        {/* <UserDropdownMeny /> */}
                    </>
                ) : (
                    <Link to={paths.login}>&nbsp;&nbsp;&nbsp; Войти</Link>
                )}
            </RightSide>
        </Wrapper>
    );
};

export default Header;
