import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: pink;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return (
    <div>
      <Container>
        Super deeeeeeeeeeeeeeeeeels!
      </Container>
    </div>
  );
};

export default Announcement;
