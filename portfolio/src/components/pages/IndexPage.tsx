import React from 'react';
import styled from 'styled-components';

const IndexPage = () => {
  return (
    <Wrapper onWheel={(e) => e.preventDefault()}>
      <div className="box box-1"></div>
      <div className="box box-2"></div>
      <div className="box box-1"></div>
      <div className="box box-2"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  scroll-behavior: smooth;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  & .box {
    height: 100vh;
    scroll-snap-align: start;
  }
  & .box-1 {
    background: #e59393;
  }
  & .box-2 {
    background: #589acf;
  }
`;

export default IndexPage;
