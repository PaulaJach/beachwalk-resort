import styled from 'styled-components';
import { setColor, setRem, setLetterSpacing, setBorder, setFont, setTransition } from '../../styles';

export const PrimaryBtn = styled.button`
    display: inline-block;
    background: ${setColor.primaryColor};
    color: ${setColor.mainWhite};
    font-size: ${setRem(18)};
    text-transform: capitalize;
    ${setFont.main};
    padding: ${setRem(17)} ${setRem(36)};
    ${setBorder({ color: setColor.primaryColor})};
    ${setLetterSpacing(3)};
    ${setTransition({time:'1s'})};
    &:hover {
        background: transparent;
        color: ${setColor.primaryColor};
    }
    text-decoration: none;
    ${props => `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}}`};
    cursor: pointer;
`;

export const SmallBtn = styled(PrimaryBtn)`
    padding: ${setRem(9)} ${setRem(12)};
`;