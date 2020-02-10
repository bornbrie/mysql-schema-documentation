

const SchemaTable = props => (
    <table>
        <SchemaTableHead columns={props.table.columns} />
        <SchemaTableBody columns={props.table.columns} />
    </table>
)

const SchemaTableHead = props => (
    <thead>
        <tr>
            {props.columns.map(column => (
                <th>{column.title}</th>
            ))}
        </tr>
    </thead>
);

const SchemaTableBody = props => (
    <tbody>
        {props.columns.map(column => (
            <SchemaTableBodyRow fields={column.fields} />
        ))}
    </tbody>
)

const SchemaTableBodyRow = props => (
    <tr>
        {props.fields.map(field => (
            <td>{field.value}</td>
        ))}
    </tr>
)

export default SchemaTable;