import Layout from '../components/layout';
import fetch from 'isomorphic-unfetch';
import SchemaTable from '../components/schema-table'

const env = require('dotenv').config();

const serverUrl = env.SERVER_URL;
const serverPort = env.SERVER_PORT;

const Index = props => (
    <Layout>
        <h1>Hello FCI Schema Documentation!</h1>
        {props.tables.map(table => (
            <SchemaTable table={table} />
        ))}
    </Layout>
)

Index.getInitialProps = async () => {
    const res = await fetch(`https://${serverUrl}:${serverPort}/schema`)
    if (res.error) {
        return {
            errors: [res.error]
        }
    }
    const data = await res.json()
    return {
        tables: data.tables
    }
}

export default Index;