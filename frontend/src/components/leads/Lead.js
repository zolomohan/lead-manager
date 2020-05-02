import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getLeads, deleteLead } from "../../actions/leads.action";

const mapStateToProps = (state) => ({
  leads: state.leadsReducer.leads,
});

export default connect(mapStateToProps, { getLeads, deleteLead })(
  class Lead extends Component {
    componentDidMount() {
      this.props.getLeads();
    }

    render() {
      return (
        <Fragment>
          <h3>Leads</h3>
          <table className='table table-stripped'>
            <thead>
              <th>ID</th>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Message</th>
            </thead>
            <tbody>
              {this.props.leads.map((lead) => (
                <tr>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button className='btn btn-danger' onClick={() => this.props.deleteLead(lead.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      );
    }
  }
);
