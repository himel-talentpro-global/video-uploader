// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getRefreshToken } from "../../helpers/oauth";

export default async function handler(req, res) {
  try{
    const token = await getRefreshToken(req.query.code);
    res.status(200).json(token)
  }catch(error){
    res.status(400).json({msg:'invalid_grant'})
  }
  
}
