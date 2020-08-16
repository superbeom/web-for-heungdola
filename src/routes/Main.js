import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import moment from "moment";

const MainContainer = styled.div`
  width: 100%;
  /* height: ${(props) => props.size}; */
  height: 800px;
  display: flex;
  justify-content: "center";
  align-items: "center";
`;

const Text = styled.h1`
  color: ${(props) => props.theme.blackColor};
  font-size: 24px;
`;

export default () => {
  const now = moment(new Date()).format();
  const size = window.innerHeight;
  console.log("size: ", size);

  return (
    <>
      <Helmet>
        <title>Heungdo Lab</title>
      </Helmet>
      <MainContainer size={size}>
        <Text>{now}</Text>
      </MainContainer>
    </>
  );
};
