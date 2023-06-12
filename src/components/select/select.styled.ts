import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  width: auto;
  min-width: 350px;
  flex-direction: column;
`;

export const SelectBadge = styled.div`
  background: lightgray;
  border-radius: 30px;
  margin: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const SelectItem = styled.option`
  width: 100%;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  border-radius: 20px;

  &:hover {
    background: lightgray;
  }
`;

export const SelectHeader = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SelectOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SelectItemsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
