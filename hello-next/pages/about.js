import Layout from "../components/Layout";

const About = (props) => {
    const {title} = props.url.query;

    console.log(props.url);

    return (
    <Layout>
        <h2>about.  {title}</h2>
    </Layout>
    )
}

export default About;