import styled from "styled-components";

export const Container = styled.div`
  background-color: #eee;
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
  width: 90%;
  margin: 1rem;

  .grid {
  flex: 1 1 50%;
    &>div {
      flex: 1 1 50%;
      margin: 0 10px;
    }

    .info {
      padding: 13px 20px 20px;
      margin-bottom: 20px;
      border-radius: 2px;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
      background: #fff;
    }
  }

  .header {
    width: 100%;
    display: flex;
      justify-content: center;
    .container{
      display: flex;
      .preview {
        display: flex;
        width: 128px;
        height: 128px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .moves {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Type = styled.div`
    padding: 4px 9px;
    margin: 0.3rem;
    line-height: 1.3;
    display: inline-block;
    color: #fff;
    cursor: default;
    border-radius: 3px;
    text-shadow: 0 1px 1px rgba(0,0,0,.8);
    font-weight: 700;
`
