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
          <div className='container py-5'>
            <h3>Leads</h3>
            <table className='table text-light mt-4'>
              <thead className='bg-primary'>
                <tr>
                  <th>Name</th>
                  <th>E-Mail</th>
                  <th>Message</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.props.leads.map((lead) => (
                  <tr key={lead.id}>
                    <td>{lead.name}</td>
                    <td>{lead.email}</td>
                    <td>{lead.message}</td>
                    <td>
                      <button className='btn btn-primary btn-block' onClick={() => this.props.deleteLead(lead.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Fragment>
      );
    }
  }
);
