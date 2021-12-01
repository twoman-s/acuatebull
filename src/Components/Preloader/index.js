import React from "react";
import { LoadWrapper, Loader, Logo } from "./PreloaderElements";

const PreLoader = () => {
  return (
    <LoadWrapper>
      <Loader>
        <Logo>Levelup</Logo>
      </Loader>
    </LoadWrapper>
  );
};

export default PreLoader;
