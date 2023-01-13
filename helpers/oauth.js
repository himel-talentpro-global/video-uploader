import { google } from "googleapis";

export const getClient = ()=>{
    const client = new google.auth.OAuth2(
        '348479911251-v0cmn1davr7u35p9r8aq7dpabmi34laf.apps.googleusercontent.com',
        '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',
        'http://localhost:8080/oauth2/v2/fitness'
    )
    return client;
}
export const getAuthUrl = (client) => {
    
    const url = client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: "offline",
        scope: ["https://www.googleapis.com/auth/fitness.activity.read", "https://www.googleapis.com/auth/fitness.activity.write"],
      });
      console.log(`Go to this URL to acquire a refresh token:\n\n${url}\n`);
    
}

export const getRefreshToken = async(code,refresToken) => {
    const client = getClient();
    let token = null;
    if(refresToken){
        token = await client.refreshAccessToken();
        console.log('when refresh token exist',token);
    }else{
        token = await client.getToken(code)
        console.log('token',token.res.data);
    }

    return token;
} 