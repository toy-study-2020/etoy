import styled from 'styled-components';

export const BtnArea = styled.div`
  overflow: hidden;
  flex-shrink: 0;
  height: 100%;
  padding: 4px 0 0 10px;
`;

export const Unit = styled.div`
    float: left;
    display: inline-block;
    padding: 0 5px;
    margin-left: 5px;
    height: 30px;
    border: 1px solid #666;
    font-size: 14px;
    line-height: 30px;
    border-radius: 5px;
`;

export const BtnText = styled.div`
    display: inline-block;
    padding-right: 5px;
`;

export const BtnDelete = styled.button`
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-top: 3px;
    background: silver;
    border: 0;
    vertical-align: top;
`;
