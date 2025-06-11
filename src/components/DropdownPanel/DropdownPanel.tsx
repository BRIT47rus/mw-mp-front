import React, { useCallback, useState } from 'react';
import { Wrapper } from '../../pages/HomePage/styled';
interface I_DropdownPanel {
    toogler: any;
    children: React.ReactElement;
    toLeft?: boolean;
}
const DropdownPanel: React.FC<I_DropdownPanel> = ({
    toogler,
    children,
    toLeft = false,
}: I_DropdownPanel) => {
    const dropdownWrapperRef = useRef(null);
    const [isVisable, setIsVisible] = useState<boolean>(false);
    const toggleVisibility = useCallback(() => {
        setIsVisible((isVisable) => !isVisable);
    }, []);
    useOnclickOutside(dropdownWrapperRef, toggleVisibility);
    const Toogler = toogler;

    return (
        <Wrapper>
            <Toggler></Toggler>
        </Wrapper>
    );
};

export default DropdownPanel;
