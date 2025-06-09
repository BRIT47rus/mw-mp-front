import styled from 'styled-components';

export const TestDiv = styled.div`
    background-color: red;
    height: 20px;
    width: 100%;
`;
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
        width: 16.666666%;
        margin-bottom: 20px;
    }
`;
