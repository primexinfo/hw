import styled from "styled-components";

export const SearchSuggestionsContentContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  cursor: pointer;

  @media (max-width: 450px) {
    padding: 4% 0;
  }

  h4 {
    font-family: "UniNeueRegular";

    @media (max-width: 1270px) {
      font-size: 12px;
    }
    @media (max-width: 1100px) {
      font-size: 10px;
    }
    @media (max-width: 910px) {
      font-size: 8px;
    }
    @media (max-width: 450px) {
      font-size: 7px;
    }
  }
`;

export const SearchSuggestImg = styled.img`
  width: 9%;
  padding: 1.2% 1.2% 1.2% 0%;

  @media (max-width: 450px) {
    width: 12%;
  }
`;
export const SearchSuggestQuantityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    text-align: center;
    font-family: "UniNeueRegular";
  }
  margin-right: 10%;
  button {
    color: #fff;
    display: block;
    height: 30px;
    width: 45px;
    border: none;
    outline: none;
    background: #44a72c;

    @media (max-width: 600px) {
      height: 20px;
      width: 25px;
    }
    @media (max-width: 450px) {
      height: 20px;
      font-size: 5px;
    }
  }
`;
export const SearchSuggestionsButton = styled.button`
  border: none;
  outline: none;
  height: 30px;
  color: #fff;
  background: #44a72c;
  font-family: "UniNeueRegular";
  cursor: pointer;

  @media (max-width: 1270px) {
    font-size: 10px;
  }

  @media (max-width: 910px) {
    font-size: 8px;
  }

  @media (max-width: 450px) {
    height: 20px;
    font-size: 5px;
  }
`;
