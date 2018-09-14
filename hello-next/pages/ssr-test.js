import Layout from '../components/Layout';
import axios from 'axios';

class SSRTest extends React.Component {
    static async getInitialProps({ req }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        return {
            users: response.data
        }
    }
    async click() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
        console.log(response);
    }

    render() {
        const { users } = this.props;

        const userList = users.map(
            user => <li key={user.id}>{user.username}</li>
        )
        
        return (
            <Layout>
                <ul>
                    {userList}
                </ul>
                <button onClick={this.click}>클릭</button>
            </Layout>
        );
    }
}

export default SSRTest;