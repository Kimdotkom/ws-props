import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navb() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://blog.octo.com/wp-content/uploads/2015/12/react-logo-1000-transparent.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            React Props
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navb;