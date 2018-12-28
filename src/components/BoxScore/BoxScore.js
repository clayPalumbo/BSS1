import React from "react";
import { makeData } from "../Utils/Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class BoxScore extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <ReactTable className="text-center"
                    data={data}
                    columns={[
                        {
                            Header: "Batter",
                            accessor: "firstName",
                        },
                        {
                            Header: "Last Name",
                            id: "lastName",
                            accessor: d => d.lastName
                        },
                        {
                            Header: "AB",
                            accessor: "ab"
                        },
                        {
                            Header: "R",
                            accessor: "ab"
                        },
                        {
                            Header: "H",
                            accessor: "ab"
                        },
                        {
                            Header: "AB",
                            accessor: "ab"
                        },
                        {
                            Header: "R",
                            accessor: "ab"
                        },
                        {
                            Header: "H",
                            accessor: "ab"
                        },
                       {
                            Header: "Status",
                            accessor: "status"

                        },
                        {
                            Header: "Visits",
                            accessor: "visits"
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
                <br />
            </div>
        );
    }
}
export default BoxScore;

