import React, { Component } from "react";
import "./css/sb-admin-2.min.css";
import "./css/sb-admin-2.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/securityActions";

class blank extends Component {
  logout() {
    this.props.logout();
    window.location.href = "/login";
  }

  render() {
    const { validToken, user } = this.props.security;
    const userIsAuthenticated = (
      <div class=" no-printme">
        {/* Page Wrapper */}
        <div id="wrapper">
          {/* Sidebar */}
          <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            {/* Sidebar - Brand */}
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink" />
              </div>
              <div className="sidebar-brand-text mx-3">Gestion De Stock</div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" style={{ blockSize: "2px" }} />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
              <Link to="/dashboard">
                <i className="nav-link">
                  <i className="fas fa-fw fa-tachometer-alt" />
                  <span>Tableau de bord</span>
                </i>
              </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" style={{ blockSize: "2px" }} />
            {/* Heading */}

            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fas fa-user-tie" />
                <span>Fournisseurs</span>
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-#1284ff py-2 collapse-inner rounded">
                  <Link to="/fournisseurs">
                    <i className="listcol">Listes Fournisseurs</i>
                  </Link>
                  <br></br>
                  <br></br>
                  <Link to="/factures">
                    <i className="listcol">Facture Fournisseur</i>
                  </Link>
                </div>
              </div>
            </li>

            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-user-friends" />
                <span>Client</span>
              </a>
              <div
                id="collapseUtilities"
                className="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
              >
                <div className="bg-#1284ff py-2 collapse-inner rounded">
                  <Link to="/clients">
                    <i className="listcol">Listes Clients</i>
                  </Link>
                  <br></br>
                  <br></br>
                  <Link to="/facturesClient">
                    <i className="listcol">Facture Client</i>
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link collapsed"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="true"
                aria-controls="collapsePages"
              >
                <i class="fas fa-box-open" />
                <span>Achat</span>
              </a>
              <div
                id="collapsePages"
                className="collapse "
                aria-labelledby="headingPages"
                data-parent="#accordionSidebar"
              >
                <div className="bg-#1284ff py-2 collapse-inner rounded">
                  <Link to="/ReglementCdeFournisseur">
                    <i className="listcol">Reglement Facture Fournisseur</i>
                  </Link>
                </div>
              </div>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" style={{ blockSize: "2px" }} />
            {/* Heading */}

            {/* Nav Item - Pages Collapse Menu */}

            {/* Nav Item - Charts */}
            <li className="nav-item">
              <Link to="/produits">
                <i className="nav-link">
                  <i className="fas fa-cube" />
                  <span>Produits</span>
                </i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Stock">
                <i className="nav-link">
                  <i className="fas fa-cubes" />
                  <span>Stock</span>
                </i>
              </Link>
            </li>
          </ul>
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i className="fa fa-bars" />
                </button>
                {/* Topbar Search */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Rechercher..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm" />
                      </button>
                    </div>
                  </div>
                </form>
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                  {/* Nav Item - Search Dropdown (Visible Only XS) */}
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search fa-fw" />
                    </a>
                    {/* Dropdown - Messages */}
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                  {/* Nav Item - Alerts */}
                  <li className="nav-item dropdown no-arrow mx-1">
                    {/* Dropdown - Alerts */}
                    <div
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="alertsDropdown"
                    >
                      <h6 className="dropdown-header">Alerts Center</h6>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-primary">
                            <i className="fas fa-file-alt text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">
                            December 12, 2019
                          </div>
                          <span className="font-weight-bold">
                            A new monthly report is ready to download!
                          </span>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-success">
                            <i className="fas fa-donate text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">
                            December 7, 2019
                          </div>
                          $290.29 has been deposited into your account!
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-warning">
                            <i className="fas fa-exclamation-triangle text-white" />
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">
                            December 2, 2019
                          </div>
                          Spending Alert: We've noticed unusually high spending
                          for your account.
                        </div>
                      </a>
                      <a
                        className="dropdown-item text-center small text-gray-500"
                        href="#"
                      >
                        Show All Alerts
                      </a>
                    </div>
                  </li>
                  {/* Nav Item - Messages */}
                  <li className="nav-item dropdown no-arrow mx-1">
                    {/* Dropdown - Messages */}
                    <div
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="messagesDropdown"
                    >
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="https://source.unsplash.com/fn_BT9fwg_E/60x60"
                            alt=""
                          />
                          <div className="status-indicator bg-success" />
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncate">
                            Hi there! I am wondering if you can help me with a
                            problem I've been having.
                          </div>
                          <div className="small text-gray-500">
                            Emily Fowler · 58m
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="https://source.unsplash.com/AU4VPcFN4LE/60x60"
                            alt=""
                          />
                          <div className="status-indicator" />
                        </div>
                        <div>
                          <div className="text-truncate">
                            I have the photos that you ordered last month, how
                            would you like them sent to you?
                          </div>
                          <div className="small text-gray-500">
                            Jae Chun · 1d
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="https://source.unsplash.com/CS2uCrpNzJY/60x60"
                            alt=""
                          />
                          <div className="status-indicator bg-warning" />
                        </div>
                        <div>
                          <div className="text-truncate">
                            Last month's report looks great, I am very happy
                            with the progress so far, keep up the good work!
                          </div>
                          <div className="small text-gray-500">
                            Morgan Alvarez · 2d
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                            alt=""
                          />
                          <div className="status-indicator bg-success" />
                        </div>
                      </a>
                    </div>
                  </li>

                  {/* Nav Item - User Information */}
                  <li className="nav-item dropdown no-arrow">
                    <Link className="nav-link" to="/dash">
                      <i className="fas fa-user-circle mr-1" />
                      {user.nom} {user.prenom}
                    </Link>
                  </li>
                  <div className="topbar-divider d-none d-sm-block" />
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      to="/logout"
                      onClick={this.logout.bind(this)}
                    >
                      Déconnexion
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* End of Topbar */}
              {/* Begin Page Content */}

              {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}

            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
        {/* Scroll to Top Button*/}

        {/* Bootstrap core JavaScript*/}
        {/* Core plugin JavaScript*/}
        {/* Custom scripts for all pages*/}
      </div>
    );
    let headerLinks;

    if (validToken && user) {
      headerLinks = userIsAuthenticated;
    }

    return <div>{headerLinks}</div>;
  }
}
blank.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  security: state.security,
});

export default connect(mapStateToProps, { logout })(blank);
