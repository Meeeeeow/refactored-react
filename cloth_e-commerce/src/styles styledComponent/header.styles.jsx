import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';

// export const OptionStyles = css`
//         padding:10px 15px;
//         cursor: pointer;
// `;
export const HeaderContainer = styled.div`
    display:flex;
    justify-content: space-between;
    margin:15px  0 30px 0;
    width: 100%;
    height:50px;
`;

export const LogoContainer = styled(Link)`
    height:100%;
    width:60px;
`;

export const NavigationContainer = styled.div`
    display:flex;
    width:50%;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
`;

export const NavlinkOption = styled(NavLink)`
    padding:10px 15px;
    cursor: pointer;
`;

