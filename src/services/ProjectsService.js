import axios from 'axios'

const Axios = axios.create({
    baseURL: "https://api.airtable.com/v0/appeeinoM5v6Dynze/Projects"
});

const airtableAPIKey = ''

Axios.defaults.headers.common = {'Authorization': `Bearer ` + airtableAPIKey}

export default{
    getProjects(slug) {
        return Axios.get("?filterByFormula={Slug}='" + slug + "'")
    }
}