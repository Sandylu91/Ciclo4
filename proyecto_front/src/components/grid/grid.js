import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  SizePerPageDropdownStandalone,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import { Row, Col } from "react-bootstrap";
import { request } from "../helper/helper";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

export default class DataGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        rows: [],
    };
  }
  componentDidMount() {
    this.getData();
      }
      getData() {
       
            request
              .get(this.props.url)
              .then((response) => {
                this.setState({rows: response.data});
              })
              .catch((err) => {
                console.log(err);
              });
          }
      
  render() {
    const options = {
      custom: true,
      totalSize: this.state.rows.length,
    };
    return (
      <ToolkitProvider keyField="tp" data={this.state.rows} columns={this.props.columns} search>
        {(props) => (
          <>
            <PaginationProvider pagination={paginationFactory(options)}>
              {({ paginationProps, paginationTableProps }) => (
                <div>
                  <Row>
                    <Col></Col>
                    <Col>
                      {" "}
                      <SearchBar {...props.searchProps} />{" "}
                    </Col>
                  </Row>
                  <hr />
                  <BootstrapTable
                    keyField="bt"
                    data={this.state.rows}
                    columns={this.props.columns}
                    {...paginationTableProps}
                    {...props.baseProps}
                  />
                  <Row>
                    <Col>
                      <PaginationListStandalone {...paginationProps} />
                    </Col>
                    <Col>
                      {" "}
                      <SizePerPageDropdownStandalone {...paginationProps} />
                    </Col>
                    <Col></Col>
                  </Row>
                </div>
              )}
            </PaginationProvider>
          </>
        )}
      </ToolkitProvider>
    );
  }
}
