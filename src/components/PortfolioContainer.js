import React, { Component } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Container from 'react-bootstrap/Container'
import Footer from "./Footer/Footer";
import Header from "./Header/Header"

class reactPortfolio extends Component {
  state = {
    currentPage: "About"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <Header />
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <Container>
          {this.renderPage()}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default reactPortfolio;
