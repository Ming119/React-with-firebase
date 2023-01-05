import { Outlet } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";

const Layout = () => {
	return (
		<div>
			<Nav activeKey="/">
				<Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
				<Nav.Item><Nav.Link href="/signin">SignIn</Nav.Link></Nav.Item>
				<Nav.Item><Nav.Link href="/signup">SignUp</Nav.Link></Nav.Item>
			</Nav>
			<Container>
				<Outlet />
			</Container>
		</div>
    )
}

export default Layout;