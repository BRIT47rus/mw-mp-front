import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../routes/helpers';

const UserDropdownMenu: React.FC = () => {
    const navigate = useNavigate();
    const {} = useSelector(selectUserData);
    const hadleLogout = useCallback(() => navigate(paths.logout), [navigate]);
    return (
        <DropdownPanel
            toogler={(props: any) => <UserAvater onClick={props.onCklick} />}
            toLeft
        >
            <UserProfileDropdown>
                <div>
                    <strong>{displayName || nameFirst + ' ' + nameLast}</strong>
                </div>
                <hr />
                <div>Заказы</div>
                <div>Возвраты</div>
                <div>Избранное</div>
                <div>Справка</div>
                <div>Поддержка</div>
                <div>Настройки</div>
                <hr />
                <div onClick={hadleLogout}>Выйти</div>
            </UserProfileDropdown>
        </DropdownPanel>
    );
};
export default UserDropdownMenu;
