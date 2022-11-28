import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Wrapper>
      <Link to="/">index</Link>
      <Link to="/home">home</Link>
      <Link to="/components">components</Link>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Layout;
