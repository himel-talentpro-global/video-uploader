// import { google } from "googleapis"

const url = 'https://accounts.google.com/o/oauth2/v2/auth?'

const redirectUri='redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Foauth2%2Fv2%2Ffitness'
const responseType = 'response_type=code'
const clientId = 'client_id=348479911251-v0cmn1davr7u35p9r8aq7dpabmi34laf.apps.googleusercontent.com'
const scope = 'scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.activity.read%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.activity.write'
const accessType='access_type=offline';

//https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.activity.read%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffitness.activity.write&response_type=code&client_id=348479911251-v0cmn1davr7u35p9r8aq7dpabmi34laf.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Foauth2%2Fv2%2Ffitness

//code route
//http://localhost:8080/oauth2/v2/fitness?code=4/0AWgavdd1G_thWkytuGSjwINiKe6KTIZjhKhIrGOQw0xIsLvWpMDDV-z4axnQRRDbr7B-HA&scope=https://www.googleapis.com/auth/fitness.activity.write%20https://www.googleapis.com/auth/fitness.activity.read
export const getAuthUri = ()=>{
    return `${url}${accessType}&${responseType}&${scope}&${clientId}&${redirectUri}`;
}
