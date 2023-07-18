import Nav from 'react-bootstrap/Nav';
import './frontheader.css'

function FrontHeader() {
    return (
        <>
        <div className='frontheader'>
                <Nav className="justify-content-center "  activeKey="/home">
                    <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    
                </Nav>
        </div>
          
          
        </>
      );
  }
  
  export default FrontHeader;